  const cardData = {
    cards: [
      {
        name: "Margherita Pizza",
        imageSrc:"menu/Margherita Pizza.jfif",
        price: 249,
        description: "Classic cheese pizza with a crispy crust and fresh basil.",
        category: "veg"
      },
      {
        name: "Veggie Burger",
        imageSrc: "menu/veggie burger.jfif",
        price: 179,
        description: "A wholesome veggie patty with lettuce, tomato, and signature sauce.",
        category: "veg"
      },
      {
        name: "Fettuccinne Alfredo",
        imageSrc: "menu/Fettuccine Alfredo.jfif",
        price: 199,
        description: "Creamy Alfredo tossed with herbs and parmesan cheese.",
        category: "veg"
      },
      {
        name: "French Fries",
        imageSrc: "menu/french fries.jfif",
        price: 99,
        description: "Crispy golden fries served with classic ketchup.",
        category: "veg"
      },
      {
        name: "Chocolate Shake",
        imageSrc: "menu/chocolate shake.jfif",
        price: 129,
        description: "Rich and creamy chocolate shake topped with whipped cream.",
        category: "veg"
      },
      {
        name: "Tandoori Sandwich",
        imageSrc: "menu/tandoori sandwich.jfif",
        price: 159,
        description: "Spicy grilled sandwich with Indian tandoori flavor and veggies.",
        category: "veg"
      },
      {
        name: "Paneer Tikka",
        imageSrc: "menu/paneer tikka.jfif",
        price: 229,
        description: "Chunks of marinated paneer grilled to perfection.",
        category: "veg"
      },
      {
        name: "Mango Lassi",
        imageSrc: "menu/mango lassi.jfif",
        price: 99,
        description: "Refreshing mango yogurt drink, sweet and creamy.",
        category: "veg"
      },
      {
        name: "Molten Lava Cake",
        imageSrc: "menu/Molten Lava Cake.jfif",
        price: 119,
        description: "Warm chocolate cake with gooey molten center.",
        category: "veg"
      },
      {
        name: "Masala Tea",
        imageSrc: "menu/masala tea.jfif",
        price: 49,
        description: "Spiced Indian tea brewed with milk and herbs.",
        category: "veg"
      },
      {
        name: "Spring Rolls",
        imageSrc: "menu/spring roll.jfif",
        price: 139,
        description: "Crispy rolls filled with veggies and Asian spices.",
        category: "veg"
      },
      {
        name: "Chicken Tikka",
        imageSrc: "menu/chicken tikka.jfif",
        price: 259,
        description: "Juicy grilled chicken pieces marinated in Indian spices.",
        category: "non-veg"
      }
    ]
  };
  const container=document.querySelector(".menu")
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const cardsPerPage = 4;
  let currentStartIndex = 0;

  function renderCards(startIndex) {
    container.innerHTML = "";

    const visibleCards = cardData.cards.slice(startIndex, startIndex + cardsPerPage);

    visibleCards.forEach(card => {
      container.innerHTML += `
        <div class="card">
          <img src="${card.imageSrc}" alt="${card.name}" />
          <div class="name-price">
            <h2>${card.name}</h2>
            <p>${card.price} Rs</p>
          </div>
          <p class="card-desc">${card.description}</p>
          <button class="order-now">Order Now</button>
        </div>
      `;
    });

    // Disable/Enable buttons
    prevBtn.disabled = startIndex === 0;
    nextBtn.disabled = startIndex + cardsPerPage >= cardData.cards.length;
  }

  renderCards(currentStartIndex);

  nextBtn.addEventListener("click", () => {
    if (currentStartIndex + cardsPerPage < cardData.cards.length) {
      currentStartIndex += cardsPerPage;
      renderCards(currentStartIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStartIndex - cardsPerPage >= 0) {
      currentStartIndex -= cardsPerPage;
      renderCards(currentStartIndex);
    }
  });