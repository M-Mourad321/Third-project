//change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window.scroll',window.scroll > 100)
});
//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");


menubtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display="inline-block";
    menubtn.style.display="none";
})

//close nav menu
const closenav = () => {
    menu.style.display = "none";
    closebtn.style.display="none";
    menubtn.style.display="inline-block";
}
closebtn.addEventListener('click', closenav );

//prducts 
let preveiwContainer = document.querySelector('.products_preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target ){
                preview.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});
