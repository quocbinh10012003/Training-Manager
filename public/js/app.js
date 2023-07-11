const a = document.querySelector('#add');
const b = document.querySelector('#table');
const tbSubject = document.querySelector('.tbSubject');
const add = document.querySelector('#btn-add');

        a.addEventListener('click', function(){
                document.getElementById('form-add').style.display = 'block';
                document.getElementById('tableSubject').style.display = 'none';
        })
        b.addEventListener('click', function(){
                document.getElementById('form-add').style.display = 'none';
                document.getElementById('tableSubject').style.display = 'block';
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

function processDelete() {
    const dltItem = document.querySelectorAll(".btn-delete");
    
    dltItem.forEach((element) => {
        element.addEventListener("click", (e) => {
            deleteItem(e.target.getAttribute('data-item'));
            getAll();
        });
    });
}
getAll();
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
          <button class="btn btn-info">
            Update
          </button>
        </td>
      </tr>`;

     
    });    
    tbSubject.innerHTML=render;
    processDelete();
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
            window.location.href="/";
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

