@extends('layout')

@section('content')
    <ul>
    @foreach($names as $customer)
        <li>{{$customer}}</li>

    @endforeach
    </ul>
@endsection