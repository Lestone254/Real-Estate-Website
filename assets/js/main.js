// script for houses.html image tab

let product_image = document.querySelector('.product_img img');
let product_thumbnail = document.querySelectorAll('.product_thumbnail');

product_thumbnail.forEach((product) => {
    product.addEventListener('click', ()=>{
        product_thumbnail.forEach((product)=>{
            product.classList.remove('active');
        });
        product.classList.add('active');

        let img = product.querySelector('img').getAttribute('src');
        let index = product.querySelector('img').getAttribute('data-index');

        product_image.setAttribute('src', img);
        product_image.setAttribute('data-index', index);

    });
});