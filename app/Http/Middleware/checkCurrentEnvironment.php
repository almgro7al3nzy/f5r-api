<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class checkCurrentEnvironment
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
        if (\App::environment('demo')) {
            if ($request->ajax()) {
                $result["message"] = __("common.messages.demo_mode");
                return response()->json($result, 401);
            }else {
                return redirect()->back()->with('error', __("common.messages.demo_mode"));
            }
        }
        return $next($request);
    }
}
