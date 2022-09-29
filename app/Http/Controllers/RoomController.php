<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meetings;
use App\Models\MeetingHistory;
use Illuminate\Support\Facades\Auth;
class RoomController extends Controller
{
    public function index() {
        return view('front.index');
    }
    

    public function join_meeting(Request $request) {
        
         $data['meeting_code'] = $request->meeting_code;
		 if(trim($data['meeting_code']!='')){
            $checkMeeting = Meetings::where(['meeting_code'=>$data['meeting_code'], 'status'=>1])->first();
            if(!empty($checkMeeting)) {
                $data['nick_name'] =  $request->nick_name;
                if (Auth::check())
                    $data['user_id'] = Auth::id();
                else
                    $data['user_id'] = 0;
                
                $data['joined_at']= date('Y-m-d H:i:s');
                MeetingHistory::insert($data);
                return view('front.join_meeting', $data);
            }else {
                return redirect()->back()->withErrors(('Meeting code not exist'));
            }
         }else {
            return redirect()->back()->withErrors(('Please enter meeting code'));
         }
    }
    public function create_join_meeting(Request $request) {
        $data['meeting_code'] = $request->meeting_code;
        $data['meeting_title'] = $request->meeting_title;
		 if(trim($data['meeting_code']!='') && trim($data['meeting_title']!='')){
            
            if (Auth::check())
                $data['user_id'] = Auth::id();
            else
                $data['user_id'] = 0;

            $data['remarks'] =  $request->remarks;
            $meeting = Meetings::insert($data);
            if($meeting){
                unset($data['remarks']);
                unset($data['meeting_title']);
                $data['nick_name'] =  $request->nick_name;                
                $data['joined_at']= date('Y-m-d H:i:s');
                MeetingHistory::insert($data);
                return view('front.join_meeting', $data);
            }else {
                return redirect()->back()->withErrors(('Error!! Try Again'));
            }
         }else {
            return redirect()->back()->withErrors(('Please enter required fields'));
         }
    }
}
