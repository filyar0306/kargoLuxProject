let declareCustomer = document.querySelector(".declare-customer");
const renderProducts = () => {
    axios.get(`http://localhost:3000/tracking`)
        .then((res) => {
            db = res.data;
            db.map((item) => {
                let declare = document.createElement("div");
                declare.className = "declare";
                declare.innerHTML = `
                <h6>${item.marka} <button  class="declareButton">Bəyan et</button></h6>
                <p style = "color:#7b5ce1;font-size:15px; font-weight:700;border-bottom:1px solid black"><span>${item.status !== undefined ? item.status : ''}</span></p>
                <p>Məhsulun adı: <span>${item.name}</span></p>
                <p>İzləmə kodu: <span>${item.tracking}</span></p>
                <p>Hardan: <span>${item.where}</span></p>
                <p>Tarix: <span>${item.date}</span></p>
                <p>Qiymət: <span>${item.price}</span></p>
                <p>Çəki: <span>${item.weight}</span></p>
                <p>Bağlamanın şəkli: <button class="imageButton" data-image-url="${item.image}">Resim</button></p>
                <button class="whereButton">Sumqayıt</button>
                `;

                // Beyan et düğmesine click event'i ekleme
                let declareButton = declare.querySelector(".declareButton");
                declareButton.addEventListener("click", (event) => {
                    event.preventDefault(); // Sayfanın yenilenmesini engelle

                    if (item.declared !== true) {
                        declareButton.innerText = "Bəyan edildi";

                        // API'ye tıklandığında true değeri ve diğer bilgileri gönderme
                        axios.put(`http://localhost:3000/tracking/${item.id}`, {
                                declared: true,
                                name: item.name,
                                marka: item.marka,
                                price: item.price,
                                where: item.where,
                                tracking: item.tracking,
                                date: item.date,
                                weight: item.weight,
                                customerName: item.customerName,
                                surname: item.surname,
                                phone: item.phone,
                                email: item.email,
                                image: item.image,
                            })
                            .then((res) => {
                                console.log('Ürün beyan edildi:', res.data);
                            })
                            .catch((err) => {
                                console.error('Ürün beyan edilirken bir hata oluştu:', err);
                            });
                    } else {
                        console.log("Bu ürün zaten beyan edilmiş.");
                    }
                });

                declareCustomer.appendChild(declare);
                
            });
        })
        .catch((err) => {
            console.error('Ürünler getirilirken bir hata oluştu:', err);
        });
}



// Tesvire bax
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('imageButton')) {
        const imageUrl = event.target.getAttribute('data-image-url');
        // Yeni bir sekmede resmi aç
        window.open(imageUrl, '_blank');
    }
});

window.onload = () => {
    renderProducts()
}


// Dostunu devet et
document.addEventListener('DOMContentLoaded', function() {
    const inviteLink = document.querySelector('.invite');

    inviteLink.addEventListener('click', function(event) {
        event.preventDefault(); // Linkin varsayılan davranışını engelle

        const urlToCopy = 'http://127.0.0.1:5501/declare.html';

        const tempInput = document.createElement('input');
        tempInput.value = urlToCopy;
        document.body.appendChild(tempInput);

        tempInput.focus();
        tempInput.select();

        document.execCommand('copy');

        document.body.removeChild(tempInput);

        alert('Bağlantı kopyalandı: ' + urlToCopy);
    });
});




const userAbout = document.querySelector('.userAbout')
const checkUserName = () => {
    loggedUser = JSON.parse(localStorage.getItem('loggedin'))
    if (loggedUser) {
        userAbout.innerHTML = loggedUser.name + " " + loggedUser.surname + "<br>" + "Id:" + loggedUser.id + "<br>" 
    }
}

checkUserName()





const userbtn = document.querySelector('.login-button')
const logout = document.getElementById("logout")
const signUp = document.getElementById("signUp")
const signIn = document.getElementById("sign-in")
const navSign = document.querySelector("#navSign")

const checkUser = () => {
    loggedUser = JSON.parse(localStorage.getItem('loggedin'))
    if (loggedUser) {
        userbtn.textContent = loggedUser.name + " " + loggedUser.surname
        signIn.style.display = 'none';
        signUp.style.display = 'none'; 
   
     


    }
}


const logOut = () => {
    loggedUser = JSON.parse(localStorage.getItem('loggedin'))
    if (loggedUser) {
        localStorage.removeItem("loggedin")


    }
}

logout.addEventListener('click', logOut)



checkUser()


document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector('.login-button');
    const myAccount = document.querySelector('.myAccount');

    // Eğer loginButton varsa ve myAccount varsa
    if (loginButton && myAccount) {
        // loginButton'a tıklama olayı ekle
        loginButton.addEventListener('click', function () {
            // myAccount'ın display özelliğini kontrol et ve değiştir
            if (myAccount.style.display === 'none' || myAccount.style.display === '') {
                myAccount.style.display = 'block';
            } else {
                myAccount.style.display = 'none';
            }
        });
    }
});









