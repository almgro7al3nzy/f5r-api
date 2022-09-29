<?php

namespace App\Http\Controllers;

use App\Models\MeetingHistory;
use App\Models\Meetings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index() {
        $data['meetings'] = Meetings::where(['user_id'=>Auth::user()->id])->get();
        $data['title'] = __('common.'.strtolower(\Request::route()->getName()));
        return view('front.customers.my_meetings', $data);
    }

    public function meeting_history() {
        $data['meeting_history'] = MeetingHistory::from('meeting_histories as mh')->join('meetings as m', 'mh.meeting_code', '=', 'm.meeting_code')->where(['mh.user_id'=>Auth::user()->id, 'mh.status'=>1])->get();
        $data['title'] = __('common.'.strtolower(\Request::route()->getName()));
        return view('front.customers.meeting_history', $data);
    }
    public function change_password() {
        $data['title'] = __('common.'.strtolower(\Request::route()->getName()));
        return view('front.customers.change_password', $data);
    }
}
