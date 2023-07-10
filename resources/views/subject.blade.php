@extends("layout.layout")
@section('subject')
    {{-- <h1>Hello world</h1> --}}

    <div class="Title" id="tableSubject">
        <h2>Subjects</h2>
    
    <table class="table">
        <thead>
          <tr>
            <th scope="col">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkAll">
                    <label class="form-check-label" for="checkAll">
                        Check&nbsp;All
                    </label>
            </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($subjects as $item)
          <tr>
            <td><input class="form-check-input toCheck" type="checkbox" data-item="{{$item->id}}"></td>
            <td>{{$item->name}}</td>
            <td>{{$item->description}}</td>
            <td>
              {{-- <button data-item="{{$item->id}}" class="btn btn-danger" id="checkall">Delete</button> --}}
              <a data-item="{{$item->id}}" class="btn btn-danger" href="{{"delete/".$item->id}}">
                Delete
              </a>
              <a class="btn btn-info" href="{{ url('/subject/create' )}}">
                Update
              </a>
               
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>

    <div class="form-add" id="form-add">
        <h2>Add Subject</h2>
      <form action="{{ url('subject') }}" method="POST">
        {!! csrf_field() !!}
        <div class="mb-3">
          <label for="nameInput" class="form-label">Name</label>
          <input type="text" class="form-control" name="Name" id="nameInput" placeholder="Input Name">
        </div>
        <div class="mb-3">
          <label for="descriptionInput" class="form-label">Description</label>
          <textarea class="form-control" id="descriptionInput" name="Des" rows="5" placeholder="Input Description"></textarea>
        </div>
        <input type="submit" value="Save" class="btn btn-success">
      </form>
    </div>
   
@endsection