<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $perms = [
      'Read Event', 'Create Event', 'Update Event', 'Delete Event'
    ];
    Role::firstOrCreate(['name' => 'Super Admin']);
    $role = Role::firstOrCreate(['name' => 'Admin']);
    foreach ($perms as $item) {
      $permissions = Permission::firstOrCreate(['name' => $item]);
      $role->givePermissionTo($permissions);
    }
    $user = User::find(1);
   if($user){
     $user->assignRole($role);
   }
  }
}
