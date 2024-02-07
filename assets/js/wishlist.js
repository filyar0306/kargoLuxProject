const wishListMain = document.getElementById("wishListMain");
const getCard = () => {
    wishListMain.innerHTML = ``
  let wish = JSON.parse(localStorage.getItem("wish")) || [];
  wish.map((item, index) => {
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <div>
        <h1>${item.title}</h1>
    <p>${item.name}</p>
    <p>${item.price}</p>
    <button onclick="removeItem(${index})">SebetdenSil</button>
        </div>
        `;
        wishListMain.appendChild(myDiv);
  });
};

function removeItem(index) {
  let wish = JSON.parse(localStorage.getItem("wish")) || [];
  wish.splice(index, 1);
  localStorage.setItem("wish", JSON.stringify(wish));
  getCard();
}


  getCard();





