const items = [
    // Appetizers
    { name: "Classic Bruschetta", category: "Appetizers", link: "menu/bruchetta.jpg", price: 200, veg: "yes" },
    { name: "Crispy Calamari", category: "Appetizers", link: "menu/Crispy Calamari.jfif", price: 230, veg: "no" },
    { name: "Mozzarella Sticks", category: "Appetizers", link: "menu/Mozzarella Sticks.jfif", price: 547, veg: "yes" },
    { name: "Spicy Chicken Wings", category: "Appetizers", link: "menu/Spicy Chicken Wings.jfif", price: 345, veg: "no" },
    { name: "Stuffed Mushrooms", category: "Appetizers", link: "menu/Stuffed Mushrooms.jfif", price: 436, veg: "yes" },
  
    // Soups & Salads
    { name: "Creamy Tomato Basil Soup", category: "Soups & Salads", link: "menu/Creamy Tomato Basil Soup.jfif", price: 145, veg: "yes" },
    { name: "Chicken Tortilla Soup", category: "Soups & Salads", link: "menu/Chicken Tortilla Soup.jfif", price: 250, veg: "no" },
    { name: "Caesar Salad", category: "Soups & Salads", link: "menu/Caesar Salad.jfif", price: 540, veg: "no" },
    { name: "Greek Salad", category: "Soups & Salads", link: "menu/greek salad.jfif", price: 350, veg: "yes" },
  
    // Main Course
    { name: "Mushroom Risotto", category: "Main Course", link: "menu/mushroom risotto.jfif", price: 1046, veg: "yes" },
    { name: "Stuffed Bell Peppers", category: "Main Course", link: "menu/Stuffed Bell Peppers.jfif", price: 1450, veg: "yes" },
    { name: "Vegetable Stir-fry", category: "Main Course", link: "menu/Vegetable Stir-fry.jfif", price: 1120, veg: "yes" },
    { name: "BBQ Glazed Chicken", category: "Main Course", link: "menu/BBQ Glazed Chicken.jfif", price: 1600, veg: "no" },
    { name: "Grilled Salmon", category: "Main Course", link: "menu/Grilled Salmon.jfif", price: 1700, veg: "no" },

    // pasta and pizza
    { name: "Spaghetti Carbonara", category: "Pasta and Pizza", link: "/menu/Spaghetti Carbonara.jfif", price: 300, veg: "no" },
    { name: "Fettuccine Alfredo", category: "Pasta and Pizza", link: "/menu/Fettuccine Alfredo.jfif", price: 700, veg: "yes" },
    { name: "Margherita Pizza", category: "Pasta and Pizza", link: "/menu/Margherita Pizza.jfif", price: 840, veg: "yes" },
    { name: "BBQ Chicken Pizza", category: "Pasta and Pizza", link: "/menu/bbq chicken pizza.jfif", price: 980, veg: "no" },
  
    // Burgers and Sandwiches
    { name: "Tasty Trills Signature Burger", category: "Burgers and Sandwiches", link: "/menu/special burger.jfif", price: 270, veg: "no" },
    { name: "Grilled Chicken Sandwich", category: "Burgers and Sandwiches", link: "/menu/Grilled Chicken Sandwich.jfif", price: 300, veg: "no" },
    { name: "Veggie Burger", category: "Burgers and Sandwiches", link: "/menu/veggie burger.jfif", price: 130, veg: "yes" },
  
    // Desserts
    { name: "Molten Lava Cake", category: "Desserts", link: "/menu/Molten Lava Cake.jfif", price: 260, veg: "yes" },
    { name: "Classic Tiramisu", category: "Desserts", link: "/menu/Classic Tiramisu.jfif", price: 430, veg: "yes" },
    { name: "New York Cheesecake", category: "Desserts", link: "/menu/New York Cheesecake.jfif", price: 590, veg: "yes" },
    { name: "Churros with Chocolate Sauce", category: "Desserts", link: "/menu/churos with sauce.jpg", price: 654, veg: "yes" }
  ];
  
// const categories=document.querySelector(".categories")
// const item=document.querySelector(".item")
// categories.forEach(element => {
//     categories.innerHTML+= `
//     <div class="category-head">
//                 <div>
//                     <p>${items.category}</p>
//                 </div>
//                 <div>
//                     <p>View All  <i class="fa-solid fa-greater-than"></i></p>
//                 </div>
//             </div>
//             <hr id="divider"></hr>
//     `
// });
// item.forEach(element=>{
//     item.innerHTML+=`
//     <div class="item">
//                    <img src="${item.link}" alt="">
//                     <p class="item-name">${items.name}</p>
//                     <div class="priceandquantity">
//                         <p class="price">${items.price}rs</p>
//                         <div class="quantity">
//                             <p class="minus">-</p>
//                             <p class="quant">0</p>
//                             <p class="plus">+</p>
//                         </div>
//                     </div>
//                     <button class="atc">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
//                 </div>
//     `
// // })

const groupedItems = {};
items.forEach(item => {
    if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
});

// Select the container where all categories will be appended
const menuContainer =document.querySelector(".menu");

// Generate HTML for each category
for (const category in groupedItems) {
    const categoryItems = groupedItems[category];

    // Create category container
    const categoryHTML = document.createElement("div");
    categoryHTML.classList.add("categories");

    categoryHTML.innerHTML = `
        <div class="category-head">
            <div><p>${category}</p></div>
            <div><p>View All <i class="fa-solid fa-greater-than"></i></p></div>
        </div>
        <hr id="divider">
        <div class="food-items">
            ${categoryItems.map(item => `
                <div class="item">
                    <img src="${item.link}" alt="${item.name}">
                    <p class="item-name">${item.name}</p>
                    <div class="priceandquantity">
                        <p class="price">${item.price}rs</p>
                        <div class="quantity">
                            <p class="minus">-</p>
                            <p class="quant">0</p>
                            <p class="plus">+</p>
                        </div>
                    </div>
                    <button class="atc">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
                </div>
            `).join("")}
        </div>
    `;

    // Append to main container
    menuContainer.appendChild(categoryHTML);
}