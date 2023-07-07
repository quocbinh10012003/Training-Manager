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
          <tr>
            <td><input class="form-check-input toCheck" type="checkbox" value="" id="flexCheckChecked"></td>
            <td>Math</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus. Recusandae exercitationem, similique harum obcaecati ut ducimus blanditiis laborum aspernatur itaque amet laudantium neque aliquid alias qui consequuntur incidunt facere.</td>
            <td><button class="btn btn-danger" id="checkall">Delete</button>
                <button class="btn btn-info">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="form-add" id="form-add">
        <h2>Add Subject</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp"  placeholder="Input Name">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <textarea class="form-control" id="descriptionInput" rows="5" cols="100" placeholder="Input Description">
          </textarea>
        </div>
        <button type="submit" class="btn btn-success">Add</button>
      </form>
    </div>
   
@endsection