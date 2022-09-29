<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Config;

class MailConfigProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        if (isInstalled()) {
            $config = array(
                'driver'     =>     'smtp',
                'host'       =>     getConfigValueByKey('mail_host'),
                'port'       =>     getConfigValueByKey('mail_port'),
                'username'   =>     getConfigValueByKey('mail_username'),
                'password'   =>     getConfigValueByKey('mail_password'),
                'encryption' =>     getConfigValueByKey('mail_encryption'),
                'from'       =>     array('address' => getConfigValueByKey('mail_from_address'), 'name' => getConfigValueByKey('mail_from_name')),
            );
            Config::set('mail', $config);
        }
        
        
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
