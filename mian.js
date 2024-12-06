let allButton = document.querySelectorAll(".continer button");
let icon_shoping = document.querySelectorAll(".shop");
allButton.forEach((e) => {
    let content_product = document.querySelector(".product .content")

    e.addEventListener("click", function() {
        if (e.className === "one") {

            content_product.innerHTML = `
              <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Adidas Shoes </h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes.png', 'Adidas Shoes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes1.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Nike Shoes</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes1.png', 'Nike Shoes', '$200') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes3.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Nike Shoes</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes3.png', 'Nike Shoes', '$200') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes5.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Nike Shoes</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes5.png', 'Nike Shoes', '$200') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes6.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Adidas Shoes</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes6.png', 'Adidas Shoes', '$200') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes7.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Adidas Shoes</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes7.png', 'Adidas Shoes', '$200') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/shoes8.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Adidas Shoes</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/shoes8.png', 'Adidas Shoes', '$200') ">Add To Cart</button>

                        </div>

                    </div>

                </div>

            </div>
            
            `

        } else if (e.className == "two") {
            content_product.innerHTML = `
             <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f1.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>shirt</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f1.jpg', 'shirt', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f2.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>shirt</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f2.jpg', 'shirt', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f3.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>shirt</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f3.jpg', 'shirt', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f4.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>shirt</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f3.jpg', 'shirt', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f5.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>shirt</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f5.jpg', 'shirt', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f6.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>shirt</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f6.jpg', 'shirt', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="products/f8.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Dress</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('products/f8.jpg', 'Dress', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>

            </div>
            `
        } else if (e.className == "three") {

            content_product.innerHTML = `
                <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d1.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Classic Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d1.jpg', 'Classic Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d2.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Sport Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d2.jpg', 'Sport Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d3.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Classic Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d3.jpg', 'Classic Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d4.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Fashion Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d4.jpg', 'Fashion Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d5.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Classic Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d5.jpg', 'Classic Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d6.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Fashion Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d1.jpg', 'Fashion Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/d9.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Fashion Clothes</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/d9.jpg', 'Fashion Clothes', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>

            </div>
            
            
            `
        } else if (e.className == "four") {

            content_product.innerHTML = `
              <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/product-1.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Photoraphy</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/product-1.jpg', 'Photoraphy', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/product-5.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Air Plane</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/product-5.jpg', 'Air Plane', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="photo/product-6.jpg" alt="">
                        </div>
                        <div class="title">
                            <h4>Smart Panda</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button onclick="store_item('photo/product-6.jpg', 'Smart Panda', '$280') ">Add To Cart</button>

                        </div>

                    </div>

                </div>



            </div>
            
            `
        } else {
            e.style.background = "red";

            content_product.innerHTML = `
             <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/d1.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Thums Up Soft drink</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/d2.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Coca-Cola Can</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/d3.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Fanta PET Bottle</h4>

                        </div>
                        <div class="price">
                            <span><del>$120</del>80</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
            </div>`
        }
        allButton.forEach((l) => {
            l.style.background = ""
        })
        e.style.background = "red";

    })
});
icon_shoping.onclick = function() {
    window.href = "product.html"
}

function store_item(img, name, price) {
    let all_products = JSON.parse(window.localStorage.getItem("items")) || [];
    let product = {
        img_item: img,
        name_item: name,
        price_item: price,
    };
    all_products.push(product);
    window.localStorage.setItem("items", JSON.stringify(all_products));
    display()
}

function delete_item(index) {
    let all_products = JSON.parse(window.localStorage.getItem("items")) || [];
    all_products.splice(index, 1);
    window.localStorage.setItem("items", JSON.stringify(all_products));

    display();
}

function display() {
    let items = JSON.parse(window.localStorage.getItem("items"));
    let section_products = document.querySelector(".products");
    let add_content = '';

    if (items && items.length > 0) {
        items.forEach((result, index) => {
            add_content += `
                <div class="row m-2">
                    <div class="box">
                        <div class="image">
                            <img src="${result.img_item}" alt="">
                        </div>
                        <div class="title">
                            <h5>${result.name_item}</h5>
                            <h5>${result.price_item}</h5>
                        </div>
                        <div class="remove">
                            <i class="fa-solid fa-trash-can" onclick="delete_item(${index})"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        section_products.innerHTML = add_content;
    } else {
        section_products.innerHTML = `
        <div class="row">
            <div class="image">
                <img src="img/nodata.jpg" alt="">
            </div>
        </div>
        
        `;
    }
}
display();