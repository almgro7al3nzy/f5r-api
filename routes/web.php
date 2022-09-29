<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\MeetingController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [RoomController::class, 'index'])->name('room');
Route::post('/join_meeting', [RoomController::class, 'join_meeting'])->name('joinMeeting');
Route::post('/host_meeting', [RoomController::class, 'create_join_meeting'])->name('hostMeeting');
Route::get('/terms-conditions', [HomeController::class, 'terms'])->name('termsCondtions');
Route::get('/privacy-policy', [HomeController::class, 'privacy'])->name('privacyPolicy');
Route::get('/about-us', [HomeController::class, 'about'])->name('aboutUs');
Route::get('switch-language/{id}', [LanguageController::class, 'switchLang'])->name('languageSwitch');

Route::get('my-meetings', [UserController::class, 'index'])->name('my_meetings')->middleware('auth');
Route::get('meeting-history', [UserController::class, 'meeting_history'])->name('meeting_history')->middleware('auth');
Route::get('change-password', [UserController::class, 'change_password'])->name('change_password')->middleware('auth');

Route::post('update-password', [ProfileController::class, 'update_password'])->name('updatePassword')->middleware(['auth', 'environment']);;
Route::namespace("Admin")->prefix('admin')->group(function () {
    Route::group(['middleware' => ['auth', 'admin']], function () {
        
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('customers', [CustomerController::class, 'index'])->name('customers');
        Route::get('meetings', [MeetingController::class, 'index'])->name('meetings');
        Route::get('meeting-history', [MeetingController::class, 'meeting_history'])->name('meetingHistory');
        Route::post('meetings', [MeetingController::class, 'create'])->name('addMeeting');
        Route::get('meeting/view/{id}', [MeetingController::class, 'view']);
        Route::get('notifications', [NotificationController::class, 'index'])->name('notifications');
        Route::get('email-settings', [SettingController::class, 'email'])->name('email_settings');
        
        Route::get('languages', [LanguageController::class, 'index'])->name('languages');
        
        Route::get('languages-view/{id}', [LanguageController::class, 'view']);
        Route::get('pages', [PageController::class, 'index'])->name('pages');
        Route::get('page-edit/{id}', [PageController::class, 'edit'])->name('update_page');
        Route::get('change-password', [ProfileController::class, 'index'])->name('profile')->middleware(['auth']);

        Route::group(['middleware' => ['environment']], function () {
            Route::post('notifications', [NotificationController::class, 'create'])->name('addNotification');
            Route::post('save-settings', [SettingController::class, 'saveSettings'])->name('email_settings');
            Route::post('languages', [LanguageController::class, 'create'])->name('addLanguage');
            Route::delete('delete-langauge/{id}', [LanguageController::class, 'delete'])->name('deleteLangauge');
            Route::post('languages/bulk-action', [LanguageController::class, 'bulkActions'])->name('bulkLanguages');

            Route::delete('delete-notification/{id}', [NotificationController::class, 'delete'])->name('deleteNotification');
            Route::post('notifications/bulk-action', [NotificationController::class, 'bulkActions'])->name('bulkNotifications');

            Route::delete('delete-meeting/{id}', [MeetingController::class, 'delete'])->name('deleteMeeting');
            Route::post('meetings/bulk-action', [MeetingController::class, 'bulkActions'])->name('bulkMeetings');
            Route::delete('meeting-history/delete/{id}', [MeetingController::class, 'deleteHistory'])->name('deleteMeetingHistory');
            Route::post('meeting-history/bulk-action', [MeetingController::class, 'bulkActionsHistory'])->name('bulkMeetingHistory');

            Route::delete('delete-user/{id}', [CustomerController::class, 'delete'])->name('deleteUser');
            Route::post('users/bulk-action', [CustomerController::class, 'bulkActions'])->name('bulkUsers');
            
            Route::post('page-update', [PageController::class, 'update'])->name('updatePage');
        });
    });
});
require __DIR__ . '/auth.php';
