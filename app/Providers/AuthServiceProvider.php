<?php

namespace App\Providers;
use auth;
use App\Role;
use App\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
   public function boot()
{
    $this->registerPolicies();

        Gate::before(function ($user, $ability) {

            return $user->hasRole('administrator') ? true : null;
        });
}
}
