<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class PagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pages')->insert([

            [
                'title' => 'Privacy Policy',
                'description' => ''
            ],
            [
                'title' => 'Terms & Conditions',
                'description' => ''
            ],
            [
                'title' => 'About Us',
                'description' => ''
            ],
            

        ]);
    }
}
