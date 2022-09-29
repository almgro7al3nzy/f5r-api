<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Meetings;
use App\Models\MeetingHistory;
use DataTables;
use Illuminate\Support\Facades\Auth;
class MeetingController extends Controller
{
    public function index(Request $request){
        $result['title'] = "Meetings";
        if ($request->ajax()) {
             $data = Meetings::from( 'meetings as m' )->select('m.id','m.meeting_code','m.meeting_title', 'm.created_at','m.status', 'u.name as host_name')->leftJoin('users as u', 'u.id', '=', 'm.user_id')->get();
             return DataTables::of($data)->addIndexColumn()
                 ->editColumn('created_at', '{{ date("d-m-Y h:i a", strtotime($created_at)) }}')
                 ->editColumn('status', function(Meetings $user) {
                     return $user->status ==1 ? "<span class='badge-item badge-status btn-success'>Active</span>":"<span class='badge-item badge-status'>Inactive</span>";
                 })
                 ->editColumn('id', function(Meetings $user) {
                     return  '<input type="checkbox" class="check-item" name="ids[]" value="'.$user->id.'">';
                 })
                 ->addColumn('action', function($row){
                    $btn = '<a href="javascript:void(0)" data-toggle="modal" data-target="#modalForm" data-id="' . $row->id . '" class="btn btn-primary btn-sm update_data mr-1"><i class="fa fa-edit"></i></a>';
                     $btn.= '<a data-action ="' . route("deleteMeeting", [$row->id]) . '" href="javascript:void(0)" class="btn btn-danger btn-sm delete_data"><i class="fa fa-trash"></i></a>';
                     return $btn;
                 })
                 ->rawColumns(['action','status', 'id'])
                 ->make(true);
         }
         return view('admin.meetings.index', $result);
    }
    public function create(Request $request){
        $data = $request->all();
        try{  
            
            $dataArr['user_id'] = Auth::user()->id;
            $dataArr['meeting_title'] = $data['meeting_title'];
            $dataArr['meeting_code'] = $data['meeting_code'];
            $dataArr['remarks'] = $data['remarks'];    
            $dataArr['status'] = $data['status']; 
            if (isset($data['meeting_id']) && !empty($data['meeting_id'])) {
                $message = __("common.messages.data_updated");
                $insert = Meetings::where('id', $data['meeting_id'])->update($dataArr);
            } else {
                $message = __("common.messages.data_added");
                $insert = Meetings::insert($dataArr);
            } 
            if($insert){
                return redirect()->route('meetings')->with('success', $message);
            }else {
                $message = __("common.messages.error_try_again");
                return redirect()->route('meetings')->with('error', $message);
            }
            
        }catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }

        
    }

    public function meeting_history(Request $request){
        if ($request->ajax()) {
             $data = MeetingHistory::select('mh.*', 'm.meeting_title', 'm.remarks','u.name as host_name')->from('meeting_histories as mh')->join('meetings as m', 'm.meeting_code', '=', 'mh.meeting_code')->leftJoin('users as u', 'u.id', '=', 'm.user_id')->get();
             return DataTables::of($data)->addIndexColumn()
                 ->editColumn('created_at', '{{ date("d-m-Y h:i a", strtotime($created_at)) }}')
                 ->editColumn('status', function(MeetingHistory $user) {
                     return $user->status ==1 ? "<span class='badge-item badge-status btn-success'>Active</span>":"<span class='badge-item badge-status'>Inactive</span>";
                 })
                 ->editColumn('id', function(MeetingHistory $user) {
                     return  '<input type="checkbox" class="check-item" name="ids[]" value="'.$user->id.'">';
                 })
                 ->addColumn('action', function($row){
                     $btn = '<a data-action ="' . route("deleteMeetingHistory", [$row->id]) . '" href="javascript:void(0)" class="btn btn-danger btn-sm delete_data"><i class="fa fa-trash"></i></a>';
                     return $btn;
                 })
                 ->rawColumns(['action','status', 'id'])
                 ->make(true);
         }
         return view('admin.meetings.history');
    }
    public function view($id)
    {
        $data = Meetings::where('id', $id)->first();
        return $data;
    }

    public function delete($id)
    {
        $result = ["code" => 400];
        try {
            
            $lang = Meetings::find($id);
            if ($lang) {
                if ($lang->delete()) {
                    $result["code"] = 200;
                    $result["message"] = __("common.messages.data_deleted");
                } else {
                    $result["message"] = __("common.messages.something_went_erong");
                }
            } else {
                $result["message"] = __("common.messages.record_not_found");
            }
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }

    public function bulkActions(Request $request)
    {
        $result = ["code" => 400];
        try {
            $data['status'] = $request->input('action');
            $ids = $request->input('id');
            if ($data['status'] == 9) {
                Meetings::whereIn('id', $ids)->delete();
            } else {
                
                Meetings::whereIn('id', $ids)->update($data);
            } 
            $result["code"] = 200;
            $result["message"] = __("common.messages.action_applied");
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }

    public function deleteHistory($id)
    {
        $result = ["code" => 400];
        try {
            
            $lang = MeetingHistory::find($id);
            if ($lang) {
                if ($lang->delete()) {
                    $result["code"] = 200;
                    $result["message"] = __("common.messages.data_deleted");
                } else {
                    $result["message"] = __("common.messages.something_went_wrong");
                }
            } else {
                $result["message"] = __("common.messages.record_not_found");
            }
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }

    public function bulkActionsHistory(Request $request)
    {
        $result = ["code" => 400];
        try {
            $data['status'] = $request->input('action');
            $ids = $request->input('id');
            MeetingHistory::whereIn('id', $ids)->delete();
            
            $result["code"] = 200;
            $result["message"] = __("common.messages.action_applied");
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }
}
