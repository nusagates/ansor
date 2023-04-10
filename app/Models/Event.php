<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Event extends Model
{
  use HasFactory, HasSlug;

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('name')
      ->saveSlugsTo('slug');
  }

  protected $guarded = [];
  protected $casts = [
    'meta'          => 'array',
    'is_public'     => 'boolean',
    'is_done'     => 'boolean',
  ];
}
