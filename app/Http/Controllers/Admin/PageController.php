<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pages;
use DataTables;
class PageController extends Controller
{
    public function index(Request $request)
    {

        if ($request->ajax()) {
            $data = Pages::get();
            return DataTables::of($data)->addIndexColumn()
                ->editColumn('updated_at', '{{ date("d-m-Y h:i a", strtotime($updated_at)) }}')
                ->editColumn('status', function (Pages $user) {
                    return $user->status == 1 ? "<span class='badge-item badge-status btn-success'>Active</span>" : "<span class='badge-item badge-status'>Inactive</span>";
                })
                ->editColumn('id', function (Pages $user) {
                    return  '<input type="checkbox" class="check-item" name="ids[]" value="' . $user->id . '">';
                })
                ->addColumn('action', function ($row) {
                    $btn = '<a href="' . route("update_page", [$row->id]) . '" class="btn btn-primary btn-sm mr-1"><i class="fa fa-edit"></i></a>';
                    
                    return $btn;
                })
                ->rawColumns(['action', 'status', 'id'])
                ->make(true);
        }
        return view('admin.pages.index');
    }

    public function edit($page_id)
    {
        $data['data'] = Pages::where(['id' => $page_id])->first();
        return view('admin.pages.edit', $data);
    }
    public function update(Request $request)
    {
        $data = $request->all();
        try {
            $dataArr['title'] = $data['title'];
            $dataArr['description'] = $data['description'];
            $dataArr['status'] = $data['status'];
            if (Pages::where('id', $data['page_id'])->update($dataArr)) {
                $message = __("common.messages.data_updated");
                return redirect()->route('pages')->with('success', $message);
            } else {
                $message = __("common.messages.error_try_again");
                return redirect()->route('pages')->with('error', $message);
            }
        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }
}
