<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Password;
class AuthController extends BaseController
{
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $email = trim($request->email);
        $password = trim($request->password);
        if (Auth::attempt(array('email' => $email, 'password' =>  $password, 'type' => 2))) {
            $user = Auth::user();
            $user->token = $user->createToken(config('app.name'))->accessToken['token'];
            return $this->sendResponse($user, 'User login successfully.');
        } else {
            return $this->sendError('Wrong username or password. Or User is not verify', []);
        }
    }

    public function register(Request $request)
    {
        $data['name'] = $request->input('name');
        $data['device_token'] = $request->input('device_token');
        $data['email'] = $request->input('email');
        $data['password'] = Hash::make($request->input('password'));
        $messsages = array();
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'min:8'],
        ];
        $validator = Validator::make($request->all(), $rules, $messsages);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError($error, []);
        }

        $rules = array(
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->where(function ($sql) {
                $sql->where('status', '!=', '9');
            })],
        );
        $validator = Validator::make($request->all(), $rules, $messsages);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError($error, []);
        } else {
            
            User::insert($data);
            Auth::attempt(['email' => $request->email, 'password'=>$request->password]);
            $user = Auth::user();
            $user->token = $user->createToken(config('app.name'))->accessToken['token'];
            return $this->sendResponse($user, 'User register successfully.');
        }
    }


    /**
     * Send a reset link to the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function sendResetLinkEmail(Request $request)
    {
        $rules= [
            'email' => 'required|email',
        ];
        $validator = Validator::make($request->all(), $rules, []);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError($error, [],422);
        }

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        try {
            //code...
            $response = $this->broker()->sendResetLink(
                $this->credentials($request)
            );
            return $response == Password::RESET_LINK_SENT
                        ? $this->sendResetLinkResponse($request, $response)
                        : $this->sendResetLinkFailedResponse($request, $response);
        } catch (\Throwable $th) {
            return $this->sendError("Error in sending mail, Try again after sometime.", [],422);
        }
    }

    /**
     * Get the needed authentication credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        return $request->only('email');
    }
    /**
     * Get the response for a successful password reset link.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    protected function sendResetLinkResponse(Request $request, $response)
    {
        return $request->wantsJson()
                    ? $this->sendResetLinkResponseJson($request,trans($response))
                    : back()->with('status', trans($response));
    }

    protected function sendResetLinkFailedResponseJson(Request $request, $response)
    {
        return $this->sendError(trans($response),[],422);
    }

    protected function sendResetLinkResponseJson(Request $request, $res){
        $response = [
            'success' => true,
            'data'    => [],
            'message' => $res,
        ];

        return response()->json($response, 200);
    }
    /**
     * Get the response for a failed password reset link.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        if ($request->wantsJson()) {
           return $this->sendResetLinkFailedResponseJson($request, $response);
        }

        return back()
                ->withInput($request->only('email'))
                ->withErrors(['email' => trans($response)]);
    }
    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }
}
