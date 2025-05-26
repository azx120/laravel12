<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Participants;

class HomeController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function index()
    {
        $participants = Participants::all();
        return Inertia::render('welcome', compact('participants'));
    }
}
