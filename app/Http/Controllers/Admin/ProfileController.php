<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class ProfileController extends Controller
{
    public function index(){
        return view('admin.profile.index');
    }

    public function update_password(Request $request) {
        $data = $request->all();
        try{  
            $user = Auth::user();
            if(Hash::check($request->old_password, $user->password)) {
                $user->password = Hash::make($request->new_password);
                $user->save();
                $message = __("common.messages.password_updated");
                return redirect()->back()->with('success', $message);
            }else {
                $message = __("common.messages.invalid_old_password");
                return redirect()->back()->with('error', $message);
            }
            
        }catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }
}
