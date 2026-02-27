const loadCategory = () =>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res)=> res.json())
    .then((json) => displayCategory(json));
};

const displayCategory = (categories) =>{
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";
    for(let category of categories){
        console.log(category)
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn btn-soft btn-primary">${category}</button>
        `
        categoryContainer.append(btnDiv);
    }
}

loadCategory();