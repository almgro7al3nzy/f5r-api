<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Settings;
class SettingController extends Controller
{
    public function index() {
        $result['title'] = "General Settings";
        return view('admin.settings.general', $result);
    }

    public function email() {
        $result['title'] = "Email Settings";
        return view('admin.settings.email', $result);
    }
    public function saveSettings(Request  $request){
        $data = $request->all();
        
        foreach($data as $key=>$val){
            Settings::where('key', $key)->update(['value' => $val]);
        }
        return redirect()->back()->with('success', __("common.messages.data_updated"));
    }
}
