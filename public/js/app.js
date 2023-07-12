const a = document.querySelector('#add');
const b = document.querySelector('#table');
const tbSubject = document.querySelector('.tbSubject');
const tbFind = document.querySelector('.tbFind');
const add = document.querySelector('#btn-add');
const formEdit = document.querySelector('#form-edit');
const search = document.querySelector('#search')
let temp;
let keySearch = '';

        a.addEventListener('click', function(){
                document.getElementById('form-add').style.display = 'block';
                document.getElementById('tableSubject').style.display = 'none';
                formEdit.style.display = 'none';
        })
        b.addEventListener('click', function(){
                document.getElementById('form-add').style.display = 'none';
                document.getElementById('tableSubject').style.display = 'block';
                formEdit.style.display = 'none';
        })
const checkAll = document.querySelector('#checkAll');

checkAll.addEventListener('click', (e)=>{
    const toCheck = document.querySelectorAll('.toCheck');

    if(e.target.checked == true){
        toCheck.forEach(el =>{
            el.setAttribute('checked', true)
        })
    }
    else if (e.target.checked == false){
        toCheck.forEach(el =>{
            el.removeAttribute('checked')
        })
    }
})
getAll();
function processDelete() {
    const dltItem = document.querySelectorAll(".btn-delete");
    
    dltItem.forEach((element) => {
        element.addEventListener("click", (e) => {
            deleteItem(e.target.getAttribute('data-item'));
        });
    });
}

search.addEventListener("keyup", (e) => {
    keySearch = e.target.value

    getSearch(keySearch);
    // console.log(keySearch);
});

async function getAll() {
    const url = "http://127.0.0.1:8000/api/";
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        // body: JSON.stringify(data),
    });
    
    const result = await response.json();
    let render = "";
    result.data.forEach((e) => {
        render += ` <tr>
        <td><input class="form-check-input toCheck" type="checkbox" data-item="{{$item->id}}"></td>
        <td>${e.name}</td>
        <td>${e.description}</td>
        <td>
          <button data-item="${e.id}" class="btn btn-delete btn-danger">
            Delete
          </button>
          <button data-item="${e.id}" class="btn btn-edit btn-info">
            Update
          </button>
        </td>
      </tr>`;

      
    });    
    tbSubject.innerHTML=render;
    processDelete();
    

    const btnEdit = document.querySelectorAll('.btn-edit');
      btnEdit.forEach((e)=>{
          e.addEventListener('click',(ea)=>{
            temp = ea.target.getAttribute('data-item');
            console.log(ea.target.getAttribute('data-item')); 
              formEdit.style.display ='block'
              document.getElementById('tableSubject').style.display = 'none';

              const btnCancel = document.querySelector('#btn-cancel');
              const btnEditSave = document.querySelector('#btn-editsave');
              showEdit(temp);
              btnCancel.addEventListener('click',(el)=>{
                formEdit.style.display = 'none'
                el.preventDefault();
                document.getElementById('tableSubject').style.display = 'block';
                // ea.target.dataset.item = null;
                temp = 0;
                // location.reload(true);
              })
              btnEditSave.addEventListener('click', (ez)=>{
                editSubject(temp);
                ez.preventDefault();   
              })
          })
    })
}
    add.addEventListener('click',(e)=>{
        e.preventDefault();
        addsubjects();
    })
  
    async function addsubjects() {
        // const description = document.querySelector('#desciption').value;
        const data = document.querySelectorAll('.info');

        const url = "http://127.0.0.1:8000/api/add-subjects";
        const dataSV = {
            name: data[0].value,
            description: data[1].value,
        };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(dataSV),
        });
        const result = await response.json();
        if (result.result == true) {
            console.log("add thanh cong");
            // window.location.href="/";
            getAll();

        }else{
            console.log("add that bai");
        }
    }

    async function deleteItem(item) {
        const url = "http://127.0.0.1:8000/api/delete/"+item;
    
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const result = await response.json();
        
    
        // console.log(result.success);
        
        if (result.success) {
        // displaySc.style.display = "block";
        console.log("ok");
            getAll();
        }else{
        // displayEr.style.display = "block";
        console.log("failse");
        }
        // setTimeout(()=>{
        // displaySc.style.display = "none";
        // displayEr.style.display = "none";
        // },3000)
        processDelete();
        // searchKey(keySearch, sortB)
    }


    async function editSubject(id) {
        const data = document.querySelectorAll('.infoEdit');
    
        const url = "http://127.0.0.1:8000/api/edit-subject/"+id;
        const dataSV = {
            name: data[0].value,
            description: data[1].value,
        };
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(dataSV),
        });
        const result = await response.json(); 

        if (result.success == true) {
            console.log("edit thanh cong ");
            getAll();
        }
        else{
            console.log("edit ko  thanh cong ");

        } 
    }
    async function showEdit(id) {
        const data = document.querySelectorAll('.infoEdit');

        const url = "http://127.0.0.1:8000/api/edit/show/"+id;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const result = await response.json(); 
            data[0].value = result.subject.name
            data[1].value = result.subject.description
    }

    async function getSearch(key) {
        const url = "http://127.0.0.1:8000/api/getSearch";
        // console.log(key);
        const data = {
            key: key
        };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });
        
        const result = await response.json();
        let render = "";
        result.data.forEach((e) => {
            render += ` <tr>
            <td><input class="form-check-input toCheck" type="checkbox" data-item="{{$item->id}}"></td>
            <td>${e.name}</td>
            <td>${e.description}</td>
            <td>
              <button data-item="${e.id}" class="btn btn-delete btn-danger">
                Delete
              </button>
              <button data-item="${e.id}" class="btn btn-edit btn-info">
                Update
              </button>
            </td>
          </tr>`;
        });    
        tbFind.innerHTML=render;
        processDelete();
        
    
        const btnEdit = document.querySelectorAll('.btn-edit');
          btnEdit.forEach((e)=>{
              e.addEventListener('click',(ea)=>{
                temp = ea.target.getAttribute('data-item');
                console.log(ea.target.getAttribute('data-item')); 
                  formEdit.style.display ='block'
                  document.getElementById('tableSubject').style.display = 'none';
    
                  const btnCancel = document.querySelector('#btn-cancel');
                  const btnEditSave = document.querySelector('#btn-editsave');
                  showEdit(temp);
                  btnCancel.addEventListener('click',(el)=>{
                    formEdit.style.display = 'none'
                    el.preventDefault();
                    document.getElementById('tableSubject').style.display = 'block';
                    // ea.target.dataset.item = null;
                    temp = 0;
                    // location.reload(true);
                  })
                  btnEditSave.addEventListener('click', (ez)=>{
                    editSubject(temp);
                    ez.preventDefault();   
                  })
              })
        })
    }