<?php

namespace App\Http\Middleware;

use App\Models\Languages;
use Closure;
use Illuminate\Http\Request;

class Language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Session()->has('applocale')) {
            \App::setLocale(Session()->get('applocale'));
        } else { // This is optional as Laravel will automatically set the fallback language if there is none specified

            if (\Request::route()->getPrefix() != "install") {
                $getDefault = Languages::where('is_default', 1)->first();
                if (!empty($getDefault)) {
                    \Session::put('applocale', $getDefault->code);
                    \App::setLocale($getDefault->code);
                } else {
                    \App::setLocale(config('app.fallback_locale'));
                }
            } else {
                \App::setLocale(config('app.fallback_locale'));
            }
        }
        return $next($request);
    }
}
