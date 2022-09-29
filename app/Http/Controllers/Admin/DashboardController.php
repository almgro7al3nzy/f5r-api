<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
Use App\Models\MeetingHistory;
use App\Models\Meetings;
class DashboardController extends Controller
{
    public function index(){
        $data['total_users'] = User::where(['type'=>'2', 'status'=>1])->count();
        $data['total_meetings'] = Meetings::where('status','=','1')->count();
        $data['total_meetings_history'] = MeetingHistory::where('status','=','1')->count();
        $data['todays_meetings'] = Meetings::where(DB::raw("(DATE_FORMAT(created_at,'%Y-%m-%d'))"),date('Y-m-d'))->count();
        $data['recent_meetings'] = Meetings::select('meetings.*', 'u.name as user_name')->leftJoin('users as u', 'u.id', '=', 'meetings.user_id')->where('meetings.status','=','1')->orderBy('meetings.id', 'desc')->limit(10,0)->get();
        return view('admin.dashboard.index', $data);
    }
}
