const a = document.querySelector('#add');
const b = document.querySelector('#table');

        a.addEventListener('click', function(){
                document.getElementById('form-add').style.display = 'block';
                document.getElementById('tableSubject').style.display = 'none';
        })
        b.addEventListener('click', function(){
                document.getElementById('form-add').style.display = 'none';
                document.getElementById('tableSubject').style.display = 'block';
        })
const checkAll = document.querySelector('#checkAll');
const toCheck = document.querySelectorAll('.toCheck');

checkAll.addEventListener('click', (e)=>{
    if(e.target.checked){
        toCheck.forEach(el =>{
            el.setAttribute('checked', true)
        })
    }
    else{
        toCheck.forEach(el =>{
            el.removeAttribute('checked')
        })
    }
})