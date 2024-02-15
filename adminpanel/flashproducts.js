"use strict";

// links
const sideLInksEl = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)",
);

sideLInksEl.forEach((links) => {
  const li = links.parentElement;
  links.addEventListener("click", () => {
    sideLInksEl.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// sidebar
const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBarEl = document.querySelector(".sidebar");

// menus
menuBar.addEventListener("click", () => {
  sideBarEl.classList.toggle("close");
});

const searchbtn = document.querySelector(
  ".content nav form .form-input button",
);
const searchIcon = document.querySelector(
  ".content nav form .form-input button .bx",
);
const searchForm = document.querySelector(".content nav form");

searchbtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault;
    searchForm.classList.toggle("show");

    if (searchForm.classList.contains("show")) {
      searchIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

// resize
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sideBarEl.classList.add("close");
  } else {
    sideBarEl.classList.remove("close");
  }
});

// dark and light mode
const darkEl = document.querySelector(".side-menu ul li  a");
const darkIcon = document.querySelector(".side-menu ul li .bx.bx-moon");

darkEl.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkIcon.classList.replace("bx-moon", "bx-sun");
  } else {
    darkIcon.classList.replace("bx-sun", "bx-moon");
  }
});




let comment = document.getElementById("comment")

const renderData = async () => {
    const res = await fetch(
      `http://localhost:3000/posts`
    );
    const data = await res.json();
    console.log(data);
    data.forEach((item) => {
      let miniDiv = document.createElement("tr");
      miniDiv.className = "miniDiv";
      miniDiv.innerHTML = `
      <td><img style = " width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;" src="${item.image}" alt="${item.name}"></td>
      <td><h6>${item.marka}</h6></td>
      <td><h6>${item.price}</h6></td>
     <td><button style="border: none;background-color: #7b5ce1;color: #fff;width: 90px;height: 35px;border-radius: 30px;" onclick="deleteProduct(${item.id})">Delete</button></td>
    
      `;
      comment.append(miniDiv);
    });
  };
  const deleteProduct = async (productId) => {
    try {
        const res = await fetch(`http://localhost:3000/posts/${productId}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data); // Eğer başarıyla silinirse geri dönen mesajı kontrol edebilirsiniz
        // Kullanıcı arayüzünden de kaldırabilirsiniz
        const productDiv = document.querySelector(`.miniDiv img[alt="${data.name}"]`).parentNode;
        productDiv.remove(); // Ürünü sildikten sonra HTML'den kaldır
    } catch (error) {
        console.error('Error deleting product:', error);
    }
    renderData()
};
  window.onload = () => {
    renderData();
  };




// Search
const searchInp = document.getElementById("searchInput");
let comments = document.getElementById("comment")

const searchByName = async (marka) => {
  try {
    const res = await fetch(`http://localhost:3000/posts`);
    const data = await res.json();

    let filteredData = data.filter((item) =>
      item.marka.toLowerCase().includes(marka.toLowerCase())
    );

    comments.innerHTML = "";

    filteredData.forEach((item) => {
        let miniDiv = document.createElement("tr");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
        <td><img style = " width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;" src="${item.image}" alt="${item.name}"></td>
        <td><h6>${item.marka}</h6></td>
        <td><h6>${item.price}</h6></td>
       <td><button style="border: none;background-color: #7b5ce1;color: #fff;width: 90px;height: 35px;border-radius: 30px;" onclick="deleteProduct(${item.id})">Delete</button></td>
      
        `;
        comments.append(miniDiv);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

searchInp.addEventListener("input", (e) => {
  searchByName(e.target.value);
});




// Post
let idInp = document.getElementById("id");
let markaInp = document.getElementById("marka");
let imageInp = document.getElementById("image");
let priceInp = document.getElementById("price");

let addProducts = document.getElementById("addProducts");
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  axios
    .post("http://localhost:3000/posts", {
      id: idInp.value,
      marka: markaInp.value,
      image: imageInp.value,
      price: priceInp.value,
     
    })
    .then((res) => {
      console.log(res.data);
      myForm.reset();
      renderData()
    });
});


