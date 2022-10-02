peerapp = (function() {
    'use strict';

    console.log("Peer client started");

    var PEER_SERVER = 'ffgsdgvsxvvs.herokuapp.com';
    var PORT = 443;
    var connectedPeers = {};
    var myPeerID = generateRandomID(4);
    var peer;
    var peerIdAlreadyTakenCount = 3;

    // التوافق شيم
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // اتصل بالخادم
    function connectToServerWithId(peerId) {
        myPeerID = peerId || myPeerID;
        myPeerID = myPeerID.toLowerCase();
        if(peer && peer.disconnected == false) {
            peer.disconnect()
        }
        peer = new Peer(myPeerID, { host: PEER_SERVER, port: PORT, path: '/', secure: true });  
        peerCallbacks(peer);
    }    
    // var peer = new Peer({ host: 'my-peer.herokuapp.com', port: '443', path: '/', secure: true });
    // connectToServerWithId(myPeerID);
    console.log(peer)

    initializeLocalMedia({'audio': true, 'video': true});

    // إنشاء معرف عشوائي
    function generateRandomID(length) {
        var chars = '123456789abcdefghijklmnopqrstuvwxyz'
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    // قناة البيانات
    // التعامل مع نص وكائنات اتصال ملف
    function connect(c) {
        console.log(c)
        // التعامل مع اتصال الدردشة.
        if (c.label === 'chat') {
            // c.peer
            myapp.createChatWindow(c.peer)

            c.on('data', function(data) {
                console.log(c.peer + ' : ' + data);
                // إلحاق البيانات بمحفوظات الدردشة
                myapp.appendHistory(c.peer, data)   
            });

            c.on('close', function() {
                delete connectedPeers[c.peer];
                myapp.closeChatWindow(c.peer)
            });
            connectedPeers[c.peer] = c;
        } else if (c.label === 'file') {
            c.on('data', function(data) {
                // إذا حصلنا على ملف ، فقم بإنشاء عنوان URL له.
                if (data.constructor === ArrayBuffer) {
                    var dataView = new Uint8Array(data);
                    var dataBlob = new Blob([dataView]);
                    var url = window.URL.createObjectURL(dataBlob);
                    // $('#' + c.peer).find('.messages').append('<div><span class="file">' +
                    //     c.peer + ' has sent you a <a target="_blank" href="' + url + '">file</a>.</span></div>');
                }
            });
        }
    }

    // التعامل مع مكالمات الصوت والفيديو
    function callConnect(call) {
        
        // قم بإنهاء المكالمة الموجودة في حالة وجودها
        if (window.existingCall) {
            window.existingCall.close();
        }

        // انتظر دفق المكالمة ، ثم قم بتعيين عرض فيديو النظير
        call.on('stream', function(stream) {
            myapp.setTheirVideo(stream)
        });

        // عناصر واجهة المستخدم
        window.existingCall = call;
        call.on('close', function() {
            console.log("Call Ending")
            myapp.closeVideoCall()
        });
    }

    function peerCallbacks(peer) {
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            console.log(new Date());
            myapp.setPeerId(id);
            fetchOnlinePeers();
        });

        peer.on('connection', connect);

        peer.on('call', function(call) {
            console.log("Receiving a call")
            console.log(call)
            // New call requests from users
            // Ask Confirm before accepting call
            // if(window.incomingCall) {
            //     window.incomingCall.answer()
            //     setTimeout(function () {
            //         window.incomingCall.close();
            //         window.incomingCall = call
            //         myapp.showIncomingCall(call.peer);
            //     }, 1000)
            // } else {
            if(window.existingCall) {
                // إذا كنت في مكالمة بالفعل ، فسيتم رفض المكالمات الجديدة
                rejectIncomingCall(call)
            } else {
                window.incomingCall = call
                myapp.showIncomingCall(call.peer, call.options.metadata);
            }
            // }
        });

        peer.on('close', function(conn) {
            // طلبات اتصال جديدة من المستخدمين
            console.log("Peer connection closed");
        });

        peer.on('disconnected', function(conn) {
            console.log("Peer connection disconnected : " + conn);
            console.log(new Date());
            if(conn != myPeerID) {
                return
            }            
            setTimeout(function () {
                connectToServerWithId();
            }, 5000);
            
            // peer.reconnect()
        });

        peer.on('error', function(err) {
            console.log(new Date());
            console.log("Peer connection error:")
            console.log(err)
            if("unavailable-id" == err.type) {
                // تم التقاط المعرف بالفعل ، لذلك يتم تعيين معرف عشوائي بعد 3 محاولات
                peerIdAlreadyTakenCount++;
                if(peerIdAlreadyTakenCount >= 3) {
                    peerIdAlreadyTakenCount = 0;
                    myPeerID = generateRandomID(4);
                }
            } else if ("peer-unavailable" == err.type) {
                myapp.showError(err.message)
            }
        });
    };

    function connectToId(id) {
        if(!id || peer.disconnected)
            return;
        var requestedPeer = id;
        if (!connectedPeers[requestedPeer]) {
            // قم بإنشاء اتصالين ، أحدهما مسمى دردشة والآخر مسمى الملف.
            var c = peer.connect(requestedPeer, {
                label: 'chat',
                serialization: 'none',
                metadata: { message: 'hi i want to chat with you!' }
            });
            c.on('open', function() {
                connect(c);
            });
            c.on('error', function(err) { alert(err); });

            // مشاركة الملفات
            // var f = peer.connect(requestedPeer, { label: 'file', reliable: true });
            // f.on('open', function() {
            //     connect(f);
            // });
            // f.on('error', function(err) { alert(err); });
        }
    }

    function sendMessage(peerId, msgText) {
        
        if(connectedPeers[peerId]) {
            var conn = connectedPeers[peerId]
            conn.send(msgText)
        }
    }

    function initializeLocalMedia(options, callback) {

        if(options) {
            options['audio'] = true;
            if(options['video'])
                options['video'] = true;
        } else {
            options['audio'] = true;
            options['video'] = false;
        }

        // احصل على دفق الصوت / الفيديو
        navigator.getUserMedia(options, function(stream) {
            // اضبط عروض الفيديو الخاصة بك
            window.localStream = stream;
            myapp.setMyVideo(window.localStream)
            if(callback)
                callback();
        }, function(err) {
            console.log("The following error occurred: " + err.name);
            alert('Unable to call ' + err.name)
        });
    }

    function makeCall(callerID, isVideoCall) {
        console.log("Calling..." +  callerID)
        
        var options = {audio: true};
        if(isVideoCall)
            options['video'] = true;

        initializeLocalMedia(options, function() {
            myapp.showVideoCall(options)
            var call = peer.call(callerID, window.localStream, { 'metadata' : options });
            callConnect(call)
        });
    }

    function acceptIncomingCall() {
        var call = window.incomingCall;
        var metadata = call.options.metadata;
        console.log(metadata);

        initializeLocalMedia(metadata, function() {
            call.answer(window.localStream);
            myapp.showVideoCall(metadata);
            callConnect(call)
        });
    }

    function rejectIncomingCall(reCall) {
        var call = reCall || window.incomingCall;
        var metadata = call.options.metadata;
        console.log(metadata);
        console.log("Rejecting incomingCall")
        call.answer();
        setTimeout(function () {
            call.close();  
        }, 1000)
    }

    function endCall() {
        if(window.existingCall)
            window.existingCall.close();
        window.existingCall = null
    }

    function muteAudio(status) {
        if(status == false)
            status = false
        else 
            status = true
        if(window.localStream) {
            var audioTracks = window.localStream.getAudioTracks()
            if(audioTracks && audioTracks[0])
                audioTracks[0].enabled = status;
        }
    }

    function muteVideo(status) {
        if(status == false)
            status = false
        else 
            status = true
        if(window.localStream) {
            var videoTracks = window.localStream.getVideoTracks()
            if(videoTracks && videoTracks[0])
                videoTracks[0].enabled = status;
        }
    }

    function closeConnection(id) {
        var conns = peer.connections[peerId];
        if(connectedPeers[peerId]) {
            var conn = connectedPeers[peerId]
            conn.send(msgText)
        }
    }

    // تأكد من تنظيف الأشياء بشكل صحيح.
    window.onunload = window.onbeforeunload = function(e) {
        if (!!peer && !peer.destroyed) {
            peer.destroy();
        }
    };

    function fetchOnlinePeers() {
        $.ajax("https://" + PEER_SERVER + "/peerjs/" + myPeerID + "/onlineusers")
        .done(function( data ) {
            // console.log(data);
            if(data.msg == 'Success') {
                data.users.splice(data.users.indexOf(myPeerID), 1)
                myapp.updateOnlieUsers(data.users)
            }
        });
    }

    // تحديث المستخدمين عبر الإنترنت كل 5 ثوان
    setInterval(function () {
        fetchOnlinePeers()
    }, 5000)

    return {
        makeCall : makeCall,
        endCall : endCall,
        sendMessage : sendMessage,
        connectToId : connectToId,
        connectToServerWithId : connectToServerWithId,
        acceptIncomingCall : acceptIncomingCall,
        rejectIncomingCall : rejectIncomingCall,
        muteAudio : muteAudio,
        muteVideo : muteVideo
    }
})();
