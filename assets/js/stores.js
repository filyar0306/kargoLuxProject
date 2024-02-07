
let bestSeller = document.getElementById("best_seller");
let seeMore = document.getElementById("see-more");

const renderData = async () => {

  const res = await fetch(
    `http://localhost:3000/posts`
  );
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p>${item.price} TL</p>
    </a>
    `;
    bestSeller.append(myDiv);
  });

};

window.onload = () => {
  renderData();
};


