<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Meetings;
use App\Models\MeetingHistory;

class MeetingController extends BaseController
{
    public function join_meeting(Request $request)
    {
        try {
            $data['meeting_code'] = $request->meeting_code;
            if (trim($data['meeting_code'] != '')) {
                $checkMeeting = Meetings::where(['meeting_code' => $data['meeting_code'], 'status' => 1])->first();
                if (!empty($checkMeeting)) {
                    $data['nick_name'] =  $request->nick_name;
                    $data['user_id'] = $request->user_id;
                    $data['joined_at'] = date('Y-m-d H:i:s');
                    MeetingHistory::insert($data);
                    return $this->sendResponse([], 'Meeting joined successfully');
                } else {
                    return $this->sendError('Meeting code not exist', []);
                }
            } else {
                return $this->sendError('Please enter meeting code', []);
            }
        } catch (\Exception $exception) {
            return $this->sendError($exception->getMessage(), []);
        }
    }

    public function host_meeting(Request $request)
    {
        try {
            $data['meeting_code'] = $request->meeting_code;
            $data['meeting_title'] = $request->meeting_title;
            if (trim($data['meeting_code'] != '') && trim($data['meeting_title'] != '')) {

                $data['user_id'] = $request->user_id;
                $data['remarks'] =  $request->remarks;
                $meeting = Meetings::insert($data);
                if ($meeting) {
                    unset($data['remarks']);
                    unset($data['meeting_title']);
                    $data['nick_name'] =  $request->nick_name;
                    $data['joined_at'] = date('Y-m-d H:i:s');
                    MeetingHistory::insert($data);
                    return $this->sendResponse([], 'Meeting created successfully');
                } else {
                    return $this->sendError('Error!! Try Again', []);
                }
            } else {
                return $this->sendError('Please enter required fields', []);
            }
        } catch (\Exception $exception) {
            return $this->sendError($exception->getMessage(), []);
        }
    }

    public function meeting_history($user_id) {
        try{
            $getHistory = MeetingHistory::select('mh.*', 'm.meeting_title', 'm.remarks')->from('meeting_histories as mh')->join('meetings as m', 'm.meeting_code', '=', 'mh.meeting_code')->where(['mh.user_id'=>$user_id, 'mh.status'=>1, 'm.status'=>1])->orderBy('mh.id', 'desc')->get();
           
            if(!empty($getHistory)){
                return $this->sendResponse($getHistory, 'Data fetched successfully');
            }else {
                return $this->sendResponse([], 'No data found');
            }

        }catch(\Exception $exception){
            return $this->sendError($exception->getMessage(), []);
        }

    }
}
