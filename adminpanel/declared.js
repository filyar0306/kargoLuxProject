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





// declare

let declared = document.getElementById("declared")
const renderData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/tracking`);
        const data = await res.json();
        console.log(data);
        data.forEach((item) => {
            let miniDiv = document.createElement("tr");
            miniDiv.className = "miniDiv";
            miniDiv.innerHTML = `
                <td><h6>${item.customerName}</h6></td>
                <td><h6>${item.surname}</h6></td>
                <td><h6>${item.tracking}</h6></td>
                <td><h6>${item.phone}</h6></td>
                <td><h6>${item.declared ? 'true' : 'false'}</h6></td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Status
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item gumruk" href="#" data-product-id="${item.id}">Gömrük</a></li>
                            <li><a class="dropdown-item cesidleme" href="#" data-product-id="${item.id}">Çeşidləmə</a></li>
                            <li><a class="dropdown-item yerliAnbar" href="#" data-product-id="${item.id}">Teslimat</a></li>
                        </ul>
                    </div>
                </td>
            `;
            declared.appendChild(miniDiv);
        });

        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', async (event) => {
                event.preventDefault();
                const productId = event.target.getAttribute('data-product-id');
                const status = event.target.textContent.trim(); // Dropdown öğesinin metnini al
                await sendToCustoms(productId, status);
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const sendToCustoms = async (productId, status) => {
    try {
        await fetch(`http://localhost:3000/tracking/${productId}`, {
            method: 'PATCH', // Veriyi güncellemek için PATCH metodu kullanılır
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status // Seçilen durumu API'ye gönder
            })
        });
        renderData(); // Verileri yeniden yükle
    } catch (error) {
        console.error('Error sending to customs:', error);
    }
};

window.onload = () => {
    renderData(); // Sayfa yüklendiğinde verileri görüntüle
};










  


// Search
const searchInp = document.getElementById("searchInp");
let comments = document.getElementById("declared")

const searchByName = async (tracking) => {
  try {
    const res = await fetch(`http://localhost:3000/tracking`);
    const data = await res.json();

    let filteredData = data.filter((item) =>
      item.tracking.toLowerCase().includes(tracking.toLowerCase())
    );

    comments.innerHTML = "";

    filteredData.forEach((item) => {
        let miniDiv = document.createElement("tr");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
        <td><h6>${item.customerName}</h6></td>
        <td><h6>${item.surname}</h6></td>
        <td><h6>${item.tracking}</h6></td>
        <td><h6>${item.phone}</h6></td>
        <td><h6>${item.declared}</h6></td>
  
      
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
// let idInp = document.getElementById("id");
// let markaInp = document.getElementById("marka");
// let imageInp = document.getElementById("image");
// let priceInp = document.getElementById("price");

// let addProducts = document.getElementById("addProducts");
// let myForm = document.getElementById("contact-form");

// myForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   axios
//     .post("http://localhost:3000/posts", {
//       id: idInp.value,
//       marka: markaInp.value,
//       image: imageInp.value,
//       price: priceInp.value,
     
//     })
//     .then((res) => {
//       console.log(res.data);
//       myForm.reset();
//       renderData()
//     });
// });


