$(document).ready(function () {


$('.btn').click(function(e){
    e.preventDefault();
    
    $('.btn').html('runned');
});



$('.btn').click(function(e){
    e.preventDefault();
     
    let func = (a) => {
        for(let i=1; i<=a; i++){
            $('.col-md-12').append(`<h2>${i}</h2>`)
        }
    }
    func($('input').val())
    
});


















});