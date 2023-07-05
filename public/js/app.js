const a = document.querySelector('#add');
// const formAdd = document.querySelector('#form-add');
const b = document.querySelector('#tableSubject');

        a.addEventListener('click', function(){
            if(document.getElementById('form-add').style.display === "block"){
                document.getElementById('form-add').style.display = 'none';
                document.getElementById('tableSubject').style.display = 'block';
            }
            else
            {
                document.getElementById('form-add').style.display = 'block';
                document.getElementById('tableSubject').style.display = 'none';
            }
        })