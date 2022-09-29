<?php

namespace App\View\Components;

use App\Models\Languages;
use Illuminate\View\Component;

class AdminAppLayout extends Component
{
    /**
     * Get the view / contents that represents the component.
     *
     * @return \Illuminate\View\View
     */
    public function render()
    {
        $result['title'] = __('common.'.strtolower(\Request::route()->getName()));
        $result['languages'] = Languages::where('status', 1)->get();
        $code = Session()->get('applocale') ? Session()->get('applocale') : 'en';
        $result['currentLang'] = Languages::where('code', $code)->first();
        
        return view('admin.layouts.app', $result);
    }
}
