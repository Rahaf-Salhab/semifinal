
/*start global section*/
const features = [
    { img: "./assets/img/public/pic3.png", title: "Grocery", text: "Fresh grocery delivered" },
    { img: "./assets/img/public/pic4.png", title: "Salads", text: "Order nutritious salads" },
    { img: "./assets/img/public/pic5.png", title: "Cart Value", text: "Cart value review your cart" },
    { img: "./assets/img/public/pic6.png", title: "Support", text: "Concerns and queries" }
];

const container = document.getElementById("features-container");

features.forEach(feature => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-3 mb-3";

    col.innerHTML = `
        <div class="feature-item shadow p-3 bg-white" >
            <div class="image-box">
                <img src="${feature.img}" alt="${feature.title}" width="40">
            </div>
            <div>
                <h4 class="feature-title">${feature.title}</h4>
                <p class="feature-text">${feature.text}</p>
            </div>
        </div>
    `;
    container.appendChild(col);
});
/*end global section*/

/*start products section*/

const products = [
    { name: "Chips", price: "$10", image: "./assets/img/products/chips.jpg", category: "Breakfast Cereals, Snacks" },
    { name: "Side Dish", price: "$8", oldPrice: "$10", image: "./assets/img/products/side.jpg", category: "Breakfast Cereals, Snacks", sale: true },
    { name: "Bread Breakfast", price: "$7.50", image: "./assets/img/products/bread.jpg", category: "Breakfast Cereals" },
    { name: "Bolthouse", price: "$100", image: "./assets/img/products/bolthouse.png", category: "Bakery, Breakfast Cereals" },
    { name: "Green Machine", price: "$40", oldPrice: "$45", image: "./assets/img/products/greenMachine.jpg", category: "Bakery, Breakfast Cereals", sale: true },
    { name: "Heinz Ketchup", price: "$25", image: "./assets/img/products/katchup.jpg", category: "Breakfast Cereals, Fruit Yogurt" },
    { name: "Nestle Fitness", price: "$300", image: "./assets/img/products/fitness.jpg", category: "Breakfast Cereals" },
    { name: "Juice-snacks", price: "$200", image: "./assets/img/products/snacks.png", category: "Breakfast Cereals" },
];
const productList = document.getElementById("product-list");
let rowHTML = "<div class='row'>";
products.forEach((product, index) => {
    rowHTML += `
        <div class="col-md-3 mb-4">
            <div class="product-card position-relative">
                ${product.sale ? '<div class="sale-badge">Sale!</div>' : ''}
                <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
                <h5 class=" productName mt-3">${product.name}</h5>
                <p class="text-muted">${product.category}</p>
                <div class="price-container">
                <span class="new-price">${product.price}</span>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
            </div>
                <div class="cart-buttons">
                    <button class=" btnCart  btn btn-warning">ADD TO CART</button>
                    <div class="action-buttons">
                        <button>&#10084;</button>
                        <button>&#128065;</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    if ((index + 1) % 4 === 0) {
        rowHTML += "</div><div class='row'>";
    }
});
rowHTML += "</div>";
productList.innerHTML = rowHTML;

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btnCart");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            Swal.fire({
                title: "Added",
                text: "The product has been added to the shopping cart.",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#ffa500"
            });
        });
    });
});
/*end products section*/
/*start customers section*/

document.addEventListener("DOMContentLoaded", function () {
    // بيانات التقييمات (يمكنكِ تعديلها أو جلبها من API)
    const testimonials = [
        { 
            name: "Shirley Edwards", role: "Manager", 
            text: "There are many variations of passages of Lorem Ipsum available, but the majority...",
            img: "./assets/img/public/person1.png"
        },
        { 
            name: "Brim Jesse", role: "CEO", 
            text: "Contrary to popular belief, Lorem is not simply random It has roots in a...",
            img: "./assets/img/public/person2.png"
        },
        { 
            name: "John Deo", role: "Web Developer", 
            text: "Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip...",
            img: "./assets/img/public/person3.png"
        }
    ];

     const container = document.getElementById("testimonials-container");

     testimonials.forEach((testimonial) => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            <div class="testimonial-card">
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-footer">
                    <img src="${testimonial.img}" alt="${testimonial.name}">
                    <div class="testimonial-info">
                        <strong>${testimonial.name}</strong>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(col);
    });     
});
/*end customers section*/
/* start blog posts section*/
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

     const blogPosts = [
        {
            img: "./assets/img/products/healthy.png",
            category: "VEGETABLES",
            title: "Healthy Vegetables Salads To Try",
            description: "Join the health bandwagon produced vegetables and healthy salad options."
        },
        {
            img: "./assets/img/products/bakedDishes2.png",
            category: "VEGETABLES",
            title: "Baked Dishes That’s Worth Trying",
            description: "Adapt Mexican way of baking some of the most nutritious food."
        },
        {
            img: "./assets/img/products/avocado2.png",
            category: "BAKERY",
            title: "Avocado Recipes That’s Quick & Easy",
            description: "Organic food and superfoods are delicious and surprisingly made in a jiffy."
        }
    ];

     blogPosts.forEach(post => {
        const postHTML = `
            <div class="col">
                <div class="card">
                    <img src="${post.img}" class="card-img-top" alt="${post.title}">
                    <div class="card-body">
                        <span class="badge bg-success">${post.category}</span>
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.description}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        blogContainer.innerHTML += postHTML;
    });
});
 /* end blog posts section*/

 /* start organic section*/

 document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Juice-snacks", price: 200, image: "./assets/img/products/Juice-snack.png" },
        { name: "Corn", price: 40, image: "./assets/img/products/corn.png" },
        { name: "Cheese Maggi", price: 10, oldPrice: 20, image: "./assets/img/products/maggi.png", sale: true }
    ];

    const container = document.getElementById("products-container");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4");

        productCard.innerHTML = `
            <div class="product-card p-3 text-center border rounded">
                 <img src="${product.image}" class="product-image img-fluid" alt="${product.name}">
                <h5>${product.name}</h5>
                <p class="price">
                     <span class="fw-bold">$${product.price}</span>
                </p>
                <button class="btn btn-warning add-to-cart addBtn">Add to Cart</button>
            </div>
        `;

        container.appendChild(productCard);
    });

     document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            Swal.fire({
                title: "Added ",
                text: "The product has been added to the shopping cart.",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#ffa500"
            });
        });
    });
});
 /* end organic section*/

 /* start related section*/

 document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Frozen", category: "Fruit Yogurt, Fruits", price: 20, image: "./assets/img/products/Fruit-Yogurt.jpg" },
        { name: "Fruit Frozen", category: "Fruits, Vegetables", price: 5, image: "./assets/img/products/avocado.jpg" },
        { name: "Grapes", category: "Fruit Yogurt, Fruits", price: 8, oldPrice: 10, image: "./assets/img/products/grapes.jpg", sale: true },
        { name: "Orange", category: "Fruit Yogurt, Fruits", price: 25, image: "./assets/img/products/orange.jpg" },
        { name: "Pineapple", category: "Fruits", price: 55, image: "./assets/img/products/pine.jpg" },
        { name: "Pistachio", category: "Fruits", price: 135, image: "./assets/img/products/pistachio.jpg" }
    ];

    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        const productHTML = `
            <div class="col-md-4 col-sm-6">
                <div class="card p-3 shadow-sm position-relative">
                    ${product.sale ? '<span class="badge bg-success sale-badge">Sale!</span>' : ""}
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="text-muted">${product.category}</p>
                        <p class="price">
                            ${product.oldPrice ? `<span class="old-price text-danger">$${product.oldPrice}</span> ` : ""}
                            <span class="text-success fw-bold">$${product.price}</span>
                        </p>
                        <button class="btn btn-warning w-100 add-to-cart addBtn" data-name="${product.name}">ADD TO CART</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            Swal.fire({
                title: "Added to Cart",
                text: "The product has been added to the shopping cart.",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#ffa500",
                width: window.innerWidth < 600 ? "90%" : "400px" // تعديل العرض بناءً على حجم الشاشة
            });
        });
    });
});

 /* start related section*/









  