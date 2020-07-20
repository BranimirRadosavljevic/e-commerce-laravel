<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class SearchProductsController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'query' => 'required|min:3',
        ]);

        $query = $request->input('query');

        // $products = Product::where('name', 'like', "%$query%")
        //                     ->orWhere('details', 'like', "%$query%")
        //                     ->orWhere('description', 'like', "%$query%")    
        //                     ->paginate(10);

        $products = Product::search($query)->paginate(10);

        return view('search-results', compact('products'));
    }
}
