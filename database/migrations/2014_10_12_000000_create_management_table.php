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
    Schema::create('management', function (Blueprint $table) {
      $table->id();
      $table->foreignId('parent_id')->nullable()->constrained('management')->cascadeOnUpdate()->nullOnDelete();
      $table->string('name');
      $table->enum('level', ['pr', 'pac', 'pc', 'pw', 'pp', 'pci']);
      $table->boolean('status')->default(true);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('management');
  }
};
