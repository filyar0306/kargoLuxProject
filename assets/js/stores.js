let storesProductsMain = document.getElementById("storesProductsMain")
let seeMore = document.getElementById("see-more")
let limit =1
let page=3
const renderProducts = (page, limit) => {
    axios.get(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`) 
        .then((response) => {
            const posts = response.data;
            posts.forEach((post) => {
                const { id, image, name} = post;
                let myDiv = document.createElement("div");
                myDiv.className = "myDiv";
                myDiv.innerHTML = `
                    <a href="https://www.trendyol.com/?id=${id}">
                        <img src="${image}" alt="${name}">
                   <h4>${name}</h4>
                    </a>
                `;
                storesProductsMain.append(myDiv);
            });
        })   
}

let currentPage = 1;
const productsPerPage = 2;

const handlePagination = (page) => {
    currentPage = page;
    renderProducts(currentPage, productsPerPage);
}

window.onload = () => {
    renderProducts(currentPage, productsPerPage); 
}