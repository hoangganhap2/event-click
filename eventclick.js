let img0bj= null;
img0bj=document.getElementById('myimage');
function init() {
    img0bj=document.getElementById('myimage');
    img0bj.style.position='relative';
    img0bj.style.left= '0px';
    
}
function moveRight() {
    img0bj.style.left=parseInt(img0bj.style.left)+10+'px';
    
}
window.onload=init;
