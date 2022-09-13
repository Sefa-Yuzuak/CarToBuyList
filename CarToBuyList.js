
function ekle(selectedCar){
    document.getElementById('ol').innerHTML += 
    `<li class='list-group-item p-1 float-start col-md-12'>${selectedCar} <span class="btn btn-primary float-end " id="button1">
        <a href="#" class="button text-white text-decoration-none col-md-2 id="delete""  >X</a>
    </span></li>`
    document.getElementById('input').value='';
}

document.getElementById('button1').addEventListener('click', function(e){
    let selectedCar = document.getElementById('input').value;
    //ekleme fonksiyonunu çağır
    ekle(selectedCar);  
})






