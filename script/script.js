const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json));
};


const loadCategoryProduct = (category) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const filteredProducts = data.filter(
        (product) => product.category === category
      );

      displayProducts(filteredProducts);
    });
};



const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow-sm p-4";

    div.innerHTML = `
      <img src="${product.image}" class="h-40 mx-auto bg-gray-300 p-4 rounded-xl object-contain"/>
      <div class = "flex items-center justify-between mt-2">
        <p class = "bg-slate-200 py-1 px-2 rounded-2xl text-blue-900">${product.category}</p>
        <div class = "flex items-center gap-1">
            <i class="fa-regular text-yellow-900 fa-star"></i>
            <p>${product.rating.rate}</p>
            <p>(${product.rating.count})</p>
        </div>
    </div>
      <h2 class="font-semibold text-base mt-2 truncate">${product.title}</h2>
      <p class="text-lg font-bold">$${product.price}</p>
      <div class = "flex justify-between pt-2">
        <button  onclick="document.getElementById('my_modal_5').showModal()" class="btn btn-soft btn-primary">
        <i class="fa-regular fa-eye"></i> Details</button>
        <button  class="btn btn-soft btn-primary">
        <i class="fa-solid fa-cart-shopping"></i> Add</button>
    </div>
    `;

    

    productContainer.appendChild(div);
  });
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-soft btn-primary";
    btn.innerText = category;

    btn.addEventListener("click", () => {
      loadCategoryProduct(category);
    });

    categoryContainer.appendChild(btn);
  });
};

loadCategory();