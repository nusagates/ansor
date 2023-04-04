<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->foreignId('management_id')->nullable()->constrained()->cascadeOnUpdate()->nullOnDelete();
      $table->string('name');
      $table->string('email')->unique();
      $table->string('phone')->unique();
      $table->string('nik')->unique();
      $table->timestamp('email_verified_at')->nullable();
      $table->string('password');
      $table->boolean('is_banser')->default(false);
      $table->string('member_number')->nullable()->unique();
      $table->enum('status', ['submitted', 'active', 'inactive', 'deceased', 'suspended', 'dismissed', 'transferred'])->default('submitted');
      $table->json('meta')->nullable();
      $table->rememberToken();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('users');
  }
};
