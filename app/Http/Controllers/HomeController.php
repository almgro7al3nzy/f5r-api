<?php

namespace App\Http\Controllers;

use App\Models\Pages;

class HomeController extends Controller
{
    public function terms() {
      $data['row'] = Pages::where('id', 2)->first();
      return view('front.page', $data);
    }

    public function policy() {
      $data['row'] = Pages::where('id', 1)->first();
      return view('front.page', $data);
    }

    public function about() {
      $data['row'] = Pages::where('id', 3)->first();
      return view('front.page', $data);
    }
}
