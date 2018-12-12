const inventory = [
  {
    "ItemId": "1",
    "ItemName": "Almonds",
    "Quantity": "1 KG",
    "Price": "1099",
    "Image": "img/almonds-3247705_1280.jpg"
  },
  {
    "ItemId": "2",
    "ItemName": "Apple",
    "Quantity": "1 KG",
    "Price": "200",
    "Image": "img/apple-1239060_1280.jpg"
  },
  {
    "ItemId": "3",
    "ItemName": "Avocados",
    "Quantity": "1 KG",
    "Price": "150",
    "Image": "img/avocados-1238257_1280.jpg"
  },
  {
    "ItemId": "4",
    "ItemName": "Bell peppers",
    "Quantity": "1 KG",
    "Price": "200",
    "Image": "img/bell-peppers-1386467_1280.jpg"
  },
  {
    "ItemId": "5",
    "ItemName": "Berry",
    "Quantity": "1 KG",
    "Price": "400",
    "Image": "img/berry-1239093_1280.jpg"
  },
  {
    "ItemId": "6",
    "ItemName": "Broccoli",
    "Quantity": "1 KG",
    "Price": "220",
    "Image": "img/broccoli-1238251_1280.jpg"
  },
  {
    "ItemId": "7",
    "ItemName": "Carrots",
    "Quantity": "1 KG",
    "Price": "108",
    "Image": "img/carrots-673184_1280.jpg"
  },
  {
    "ItemId": "8",
    "ItemName": "Cinnamon",
    "Quantity": "1 KG",
    "Price": "945",
    "Image": "img/cinnamon-1971496_1280.jpg"
  },
  {
    "ItemId": "9",
    "ItemName": "Garlic",
    "Quantity": "1 KG",
    "Price": "72",
    "Image": "img/garlic-3419544_1280.jpg"
  },
  {
    "ItemId": "10",
    "ItemName": "Grapes",
    "Quantity": "1 KG",
    "Price": "110",
    "Image": "img/grapes-1239425_1280.jpg"
  },
  {
    "ItemId": "11",
    "ItemName": "Mushroom",
    "Quantity": "1 KG",
    "Price": "260",
    "Image": "img/mushroom-219861_1280.jpg"
  },
  {
    "ItemId": "12",
    "ItemName": "Peppers",
    "Quantity": "1 KG",
    "Price": "80",
    "Image": "img/serrano-peppers-1353233_1280.jpg"
  },
  {
    "ItemId": "13",
    "ItemName": "Strawberry",
    "Quantity": "1 KG",
    "Price": "220",
    "Image": "img/strawberry-2460078_1280.jpg"
  },
  {
    "ItemId": "14",
    "ItemName": "Tomato",
    "Quantity": "1 KG",
    "Price": "15",
    "Image": "img/tomato-498721_1280.jpg"
  },
  {
    "ItemId": "15",
    "ItemName": "Onions",
    "Quantity": "1 KG",
    "Price": "20",
    "Image": "img/onions-105806-1280.jpg"
  },
  {
    "ItemId": "16",
    "ItemName": "Beans",
    "Quantity": "1 KG",
    "Price": "40",
    "Image": "img/beans-974-1280.jpg"
  }
];

const cartItems = [];

function itemTemplate(item) {
  return `
    <li class="list-item">
    <div class="add-to-cart disable-select" onclick="addToCart(${item.ItemId})"><i class="material-icons">shopping_cart</i></div>
    <div class="img-container">
      <img class="item-img grow" src="${item.Image}" />
    </div>
    <div class="item-details">
      <span class="item-name">${item.ItemName}</span>
      <span class="item-price currency">${item.Price} per ${item.Quantity}</span>
    </div>
    </li>
  `;
}

document.querySelector(".shopping-list").innerHTML = `${inventory.map(itemTemplate).join("")}`;

function addToCart(itemId) {
  let item = cartItems.find(item => item.ItemId == itemId);
  if (!item) {
    let newItem = inventory.find(item => item.ItemId == itemId);
    cartItems.push({ ...newItem, Quantity: 1, Total: newItem.Price });
  }
  else {
    item.Quantity = item.Quantity + 1;
    item.Total = item.Price * item.Quantity;
  }
  updateCart();
}

function showCart() {
  if (cartItems.length > 0) {
    document.querySelector(".cart-list-container").classList.toggle('show');
  }
}

function cartItemTemplate(item) {
  return `
    <li class="list-item">
      <span class="item-name">${item.ItemName} (${item.Quantity})</span> - <span class="price currency">${item.Total}</span>
    </li>
  `;
}

function updateCart() {
  let templateString = `
    ${cartItems.map(cartItemTemplate).join("")}
    <li class="list-item list-total">
      <span class="price currency">${cartItems.map(item => item.Total).reduce((total, value) => parseInt(total) + parseInt(value))}</span>
    </li>
  `;
  document.querySelector(".item-count").innerHTML = `Cart(${cartItems.length})`;
  document.querySelector(".cart-list").innerHTML = templateString;
}