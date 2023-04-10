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
    Schema::create('events', function (Blueprint $table) {
      $table->id();
      $table->string('slug');
      $table->string('name');
      $table->date('activity_date');
      $table->string('venue');
      $table->string('organizer');
      $table->boolean('is_done')->default(false);
      $table->boolean('is_public')->default(true);
      $table->time('started_at')->nullable();
      $table->time('finished_at')->nullable();
      $table->text('notes')->nullable();
      $table->json('meta')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('events');
  }
};
