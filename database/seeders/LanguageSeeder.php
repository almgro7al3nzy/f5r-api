<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([

            [
                'name' => 'English',
                'code' => 'en',
                'direction' =>'ltr',
                'is_default' => 1,
                'status'=>1,
                
            ],
            [
                'name' => 'Spanish',
                'code' => 'es',
                'direction' =>'ltr',
                'is_default' => 0,
                'status'=>1,
                
             ]
            

        ]);
    }
}
