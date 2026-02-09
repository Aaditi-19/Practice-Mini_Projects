var main = document.querySelector('main');
var csr = document.querySelector('#cursor');

main.addEventListener('mousemove',function(position){

    csr.style.left = position.x+'px';
    csr.style.top = position.y+'px';
    
})