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
        <tbody class="tbSubject"></tbody>
        <tbody class="tbFind"></tbody>
      </table>
    </div>

    <div class="form-add" id="form-add">
        <h2>Add Subject</h2>
      <form>
        @csrf

        <div class="mb-3">
          <label for="nameInput" class="form-label">Name</label>
          <input type="text" class="form-control info" name="Name" id="nameInput" placeholder="Input Name">
        </div>

        <div class="mb-3">
          <label for="descriptionInput" class="form-label">Description</label>
          <textarea class="form-control info" id="descriptionInput" name="Des" rows="5" placeholder="Input Description"></textarea>
        </div>

        <button class="btn btn-success" id="btn-add">Add</button>
      </form>
    </div>

    <div class="form-edit" id="form-edit">
      <h2>Edit Subject</h2>
      @csrf
    <form>
      <div class="mb-3">
        <label for="nameInputEdit" class="form-label">Name</label>
        <input type="text" class="form-control infoEdit" name="NameEdit" id="nameInputEdit" placeholder="Input Name">
      </div>

      <div class="mb-3">
        <label for="descriptionInputEdit" class="form-label">Description</label>
        <textarea class="form-control infoEdit" id="descriptionInputEdit" name="DesEdit" rows="5" placeholder="Input Description"></textarea>
      </div>

      <button class="btn btn-success" id="btn-editsave">Edit</button>
      <button class="btn btn-danger" id="btn-cancel">Cancel</button>
    </form>
  </div>
   
@endsection