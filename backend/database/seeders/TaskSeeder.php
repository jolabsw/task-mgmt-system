<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Carbon\Carbon;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Initialize Faker instance
        $faker = Faker::create('en_GB');

        // Add 10 random tasks into the tasks table
        for ($i = 0; $i < 10; $i++) {
            DB::table('tasks')->insert([
                'title' => $faker->sentence(3),
                'description' => $faker->paragraph(),
                'status' => $faker->randomElement(['pending', 'in progress', 'completed']),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'deleted_at' => null,
            ]);
        }
    }
}
