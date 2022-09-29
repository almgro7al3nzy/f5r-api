<!DOCTYPE html>
<html lang="en">
<!-- Basic -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Site Metas -->
    <title><?php echo e(config('app.name', 'JusTalk')); ?></title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Site Icons -->
    <link rel="shortcut icon" href="<?php echo e(asset('front_assets/images/favicon.ico')); ?>" type="image/x-icon">
    <link rel="apple-touch-icon" href="<?php echo e(asset('front_assets/images/apple-touch-icon.png')); ?>">
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        #meeting {
            height: 100vh;
        }
    </style>
</head>

<body>
    <div id="meeting"></div>
    <script src='https://meet.jit.si/external_api.js' type="text/javascript"></script>

    <script type="text/javascript">
        const domain = 'meet.jit.si';
        const options = {
            roomName: "<?php echo e($meeting_code); ?>",
            parentNode: document.querySelector('#meeting'),
            userInfo: {
                displayName: "<?php echo e($nick_name); ?>"
            },
            enableClosePage: true,
            onload: function(res) {},
        };
        const api = new JitsiMeetExternalAPI(domain, options);
        api.on('readyToClose', () => {
            window.location.href = "<?php echo e(url('/')); ?>";
        });
        api.on('videoConferenceLeft', () => {
            window.location.href = "<?php echo e(url('/')); ?>";
        });
    </script>
</body>

</html><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/front/join_meeting.blade.php ENDPATH**/ ?>