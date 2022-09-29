<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([

            [
                'key' => 'mail_host',
                'value' => ''
            ],
            [
                'key' => 'mail_port',
                'value' => '587'
            ],
            [
                'key' => 'mail_username',
                'value' => ''
            ],
            [
                'key' => 'mail_password',
                'value' => ''
            ],
            [
                'key' => 'mail_encryption',
                'value' => ''
            ],
            [
                'key' => 'mail_from_address',
                'value' => ''
            ],
            [
                'key' => 'mail_from_name',
                'value' => ''
            ],
            [
                'key' => 'app_name',
                'value' => ''
            ],
            [
                'key' => 'app_env',
                'value' => ''
            ],
            [
                'key' => 'app_logo',
                'value' => ''
            ],
            [
                'key' => 'firebase_key',
                'value' => ''
            ],

        ]);
    }
}
