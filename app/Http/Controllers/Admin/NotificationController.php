<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DataTables;
use App\Models\Notifications;
class NotificationController extends Controller
{
    public function index(Request $request){
        $result['title'] = "Notifications";
        if ($request->ajax()) {
             $data = Notifications::select('id','title','description', 'created_at','status')->get();
             return DataTables::of($data)->addIndexColumn()
                 ->editColumn('created_at', '{{ date("d-m-Y h:i a", strtotime($created_at)) }}')
                 ->editColumn('status', function(Notifications $user) {
                     return $user->status ==1 ? "<span class='badge-item badge-status btn-success'>Active</span>":"<span class='badge-item badge-status'>Inactive</span>";
                 })
                 ->editColumn('id', function(Notifications $user) {
                     return  '<input type="checkbox" class="check-item" name="ids[]" value="'.$user->id.'">';
                 })
                 ->addColumn('action', function($row){
                     $btn = '<a data-action ="' . route("deleteNotification", [$row->id]) . '" href="javascript:void(0)" class="btn btn-danger btn-sm delete_data"><i class="fa fa-trash"></i></a>';
                     return $btn;
                 })
                 ->rawColumns(['action','status', 'id'])
                 ->make(true);
         }
         return view('admin.notifications.index', $result);
    }
    public function create(Request $request){
        $data = $request->all();
        try{  
            
            $dataArr['title'] = $data['title'];
            $dataArr['description'] = $data['description'];
            if(Notifications::insert($dataArr)){
                $message = __("common.messages.data_added");
                return redirect()->route('notifications')->with('success', $message);
            }else {
                $message = __("common.messages.error_try_again");
               return redirect()->route('notifications')->with('error', $message);
            }
            
        }catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }     
    }
    public function delete($id)
    {
        $result = ["code" => 400];
        try {
            
            $lang = Notifications::find($id);
            if ($lang) {
                if ($lang->delete()) {
                    $result["code"] = 200;
                    $result["message"] = __("common.messages.record_deleted");
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

    public function bulkActions(Request $request)
    {
        $result = ["code" => 400];
        try {
            $data['status'] = $request->input('action');
            $ids = $request->input('id');
            if ($data['status'] == 9) {
                Notifications::whereIn('id', $ids)->delete();
            } else {
                
                Notifications::whereIn('id', $ids)->update($data);
            } 
            $result["code"] = 200;
            $result["message"] = __("common.messages.action_applied");
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }
}
