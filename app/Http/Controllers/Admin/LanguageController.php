<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Languages;
use DataTables;

class LanguageController extends Controller
{
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = Languages::get();
            return DataTables::of($data)->addIndexColumn()
                ->editColumn('created_at', '{{ date("d-m-Y h:i a", strtotime($created_at)) }}')
                ->editColumn('status', function (Languages $user) {
                    return $user->status == 1 ? "<span class='badge-item badge-status btn-success'>Active</span>" : "<span class='badge-item badge-status'>Inactive</span>";
                })
                ->editColumn('is_default', function (Languages $user) {
                    return $user->is_default == 1 ? "<span class='badge-item badge-status btn-success'>yes</span>" : "<span class='badge-item badge-status btn-waring'>no</span>";
                })
                ->editColumn('id', function (Languages $user) {
                    return  '<input type="checkbox" class="check-item" name="ids[]" value="' . $user->id . '">';
                })
                ->addColumn('action', function ($row) {
                    $btn = '<a href="javascript:void(0)" data-toggle="modal" data-target="#modalForm" data-id="' . $row->id . '" class="btn btn-primary btn-sm update_data mr-1"><i class="fa fa-edit"></i></a>';
                    $btn .= '<a data-action ="' . route("deleteLangauge", [$row->id]) . '" href="javascript:void(0)" class="btn btn-danger btn-sm delete_data"><i class="fa fa-trash"></i></a>';
                    return $btn;
                })
                ->rawColumns(['action', 'status', 'id', 'is_default'])
                ->make(true);
        }
        return view('admin.languages.index');
    }

    public function create(Request $request)
    {
        $data = $request->all();
        try {
            $dataArr['code'] = $data['code'];
            $dataArr['name'] = $data['name'];
            $dataArr['direction'] = $data['direction'];
            $dataArr['is_default'] = $data['is_default'];
            if ($data['is_default'] == 1) {
                Languages::where('is_default', 1)->update(['is_default' => 0]);
            }
            $dataArr['status'] = $data['status'];
            if (isset($data['language_id']) && !empty($data['language_id'])) {
                $message = __("common.messages.data_updated");
                $insert = Languages::where('id', $data['language_id'])->update($dataArr);
            } else {
                $message = __("common.messages.data_added");
                $insert = Languages::insert($dataArr);
            }
            if ($insert) {
                return redirect()->route('languages')->with('success', $message);
            } else {
                $message = __("common.messages.error_try_again");
                return redirect()->route('languages')->with('error', $message);
            }
        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }

    public function view($id)
    {
        $data = Languages::where('id', $id)->first();
        return $data;
    }

    public function delete($id)
    {
        $result = ["code" => 400];
        try {
            if ($id == 1) {
                $result["message"] = __("common.messages.error_try_again");
                return response()->json($result, $result["code"]);
            }
            $lang = Languages::find($id);
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

    public function bulkActions(Request $request)
    {
        $result = ["code" => 400];
        try {
            $data['status'] = $request->input('action');
            $ids = $request->input('id');
            if ($data['status'] == 9) {
                Languages::whereIn('id', $ids)->where('is_default', '!=', '1')->delete();
            } elseif ($data['status'] == 1) {
                Languages::whereIn('id', $ids)->update($data);
            } else {
                Languages::whereIn('id', $ids)->where('is_default', '!=', '1')->update($data);
            }
            $result["code"] = 200;
            $result["message"] = __("common.messages.action_applied");
        } catch (\Throwable $th) {
            $result["message"] = $th->getMessage();
        }
        return response()->json($result, $result["code"]);
    }

    public function switchLang($lang)
    {
        
        \Session::put('applocale', $lang);
        
        return redirect()->back();
    }
}
