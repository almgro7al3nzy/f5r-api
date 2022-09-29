<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DataTables;
class CustomerController extends Controller
{
    public function index(Request $request){
        if ($request->ajax()) {
            $data = User::where('type', '!=', 1)->select('id','name','email', 'last_login','created_at','status')->get();
            return DataTables::of($data)->addIndexColumn()
                ->editColumn('last_login', '{{ $last_login ? date("d-m-Y h:i a", strtotime($last_login)): "-" }}')
                ->editColumn('created_at', '{{ date("d-m-Y h:i a", strtotime($created_at)) }}')
                ->editColumn('status', function(User $user) {
                    return $user->status ==1 ? "<span class='badge-item badge-status btn-success'>Active</span>":"<span class='badge-item badge-status'>Inactive</span>";
                })
                ->editColumn('id', function(User $user) {
                    return  '<input type="checkbox" class="check-item" name="ids[]" value="'.$user->id.'">';
                })
                ->addColumn('action', function($row){
                    $btn = '<a data-action ="' . route("deleteUser", [$row->id]) . '" href="javascript:void(0)" class="btn btn-danger btn-sm delete_data"><i class="fa fa-trash"></i></a>';
                    return $btn;
                })
                ->rawColumns(['action','status', 'id'])
                ->make(true);
        }
        return view('admin.customer.index');
    }

    public function delete($id)
    {
        $result = ["code" => 400];
        try {
            if ($id == 1) {
                $result["message"] = __("common.messages.error_try_again");
                return response()->json($result, $result["code"]);
            }
            $user = User::find($id);
            if ($user) {
                if ($user->delete()) {
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

    public function bulkActions(Request $request)
    {
        $result = ["code" => 400];
        try {
            $data['status'] = $request->input('action');
            $ids = $request->input('id');
            if ($data['status'] == 9) {
                User::whereIn('id', $ids)->delete();
            } else {
                User::whereIn('id', $ids)->update($data);
            }
            $result["code"] = 200;
            $result["message"] = __("common.messages.action_applied");
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }
}
