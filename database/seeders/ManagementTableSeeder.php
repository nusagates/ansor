<?php

namespace Database\Seeders;

use App\Models\Management;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ManagementTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $managements = [
      ['id' => 1, 'parent_id' => null, 'name' => 'Argomulyo', 'level' => 'pac'],
      ['id' => 2, 'parent_id' => 1, 'name' => 'Cebongan', 'level' => 'pr'],
      ['id' => 3, 'parent_id' => 1, 'name' => 'Kumpulrejo', 'level' => 'pr'],
      ['id' => 4, 'parent_id' => 1, 'name' => 'Ledok', 'level' => 'pr'],
      ['id' => 5, 'parent_id' => 1, 'name' => 'Noborejo', 'level' => 'pr'],
      ['id' => 6, 'parent_id' => 1, 'name' => 'Randuacir', 'level' => 'pr'],
      ['id' => 7, 'parent_id' => 1, 'name' => 'Tegalrejo', 'level' => 'pr'],
    ];
    foreach ($managements as $item) {
      Management::firstOrCreate($item);
    }
  }
}
