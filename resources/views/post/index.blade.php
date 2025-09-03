<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <h1 class="text-3xl font-bold p-2" >how are you</h1>
    @foreach ($posts as $item)
    {{ $item->title }}
    <br>
    {{ $item->subtitle }}
    <br>
    {{ $item->image }}
    <br>
    {{ $item->description }}
    <br>
        <a href="{{ route('post.edit',$item->id) }}">edit the post</a>
        <br>
        <a href="{{ route('post.destroy',$item->id) }}">delete the post</a>
    @endforeach
    
</body>
</html>