let products = document.getElementById("products")
let loadMore = document.getElementById("loadMore")
let page =1
let limit=4

const renderProducts = async () =>{
try{
    const response = await axios.get(`https://655c8cc025b76d9884fd82fe.mockapi.io/products?page=${page}&limit=${limit}`)
    const data = response.data;
    db = data;
    console.log(data);
    db.map((item) =>{
        let myDiv = document.createElement("div")
        myDiv.className = "myDiv"
        myDiv.innerHTML = `
        <img src="${item.image}" alt="">
     <div class="myDivHover">
  <a href=""><i class="fa-regular fa-heart"></i></a>
</div>
  
        `;
        products.appendChild(myDiv)
    });
    page++;
}catch (error) {
    console.log(error);
}
}

loadMore.addEventListener("click", renderProducts)

window.onload = () =>{
    renderProducts()
}



// let searchInp = document.getElementById("searchInp")
// let btnSearch = document.getElementById("btnSearch")


// function findByName() {
//     products.innerHTML = ``
//     axios
//         .get(
//             `https://655c8cc025b76d9884fd82fe.mockapi.io/products`
//         )
//         .then((res) => {
//             db = res.data;
//             console.log(db);
//     let filteredData = db.filter(item => item.name.toLowerCase().startsWith(searchInp.value.toLowerCase()))
//             let sortData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
//             sortData.map((item) => {
//               console.log(sortData);
//                 let myDiv = document.createElement("div")
//                 myDiv.className = "myDiv"
//                 myDiv.innerHTML = `
//             <img src="${item.image}" alt="">
//             <h2>${item.name}</h2>
//             <button onclick ="addToCart(${item.id})">Add to Cart</button>
//             `
//                 products.append(myDiv)
//             });
//         });

// }

// btnSearch.addEventListener('click', findByName)



