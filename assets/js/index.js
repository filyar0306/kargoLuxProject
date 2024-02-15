
function calculateShipping() {
  var packageType = document.getElementById('package-type').value;
  var city = document.getElementById('city').value;
  var length = parseFloat(document.getElementById('length').value);
  var width = parseFloat(document.getElementById('width').value);
  var volume = parseFloat(document.getElementById('volume').value);
  var weight = parseFloat(document.getElementById('weight').value);

  // Herhangi bir giriş boşsa veya sayısal değilse, NaN değeri yerine 0.00 olarak atama yap
  if (isNaN(length) || isNaN(width) || isNaN(volume) || isNaN(weight)) {
    document.getElementById('result').innerHTML = 'Kargo Ücreti: $0.00';
    return;
  }

  var shippingCost = (length + width + volume + weight) * 0.1;
  document.getElementById('result').innerHTML = 'Kargo Ücreti: $' + shippingCost.toFixed(2);
}

function resetCalculator() {
  // Formdaki input değerlerini sıfırla
  document.getElementById('package-type').value = 'standard';
  document.getElementById('city').value = 'turkey';
  document.getElementById('length').value = '';
  document.getElementById('width').value = '';
  document.getElementById('volume').value = '';
  document.getElementById('weight').value = '';

  document.getElementById('result').innerHTML = '';
}




  document.addEventListener("DOMContentLoaded", function () {
    const turkeyLink = document.querySelector(".türkiye");
    const usaLink = document.querySelector(".usa");
    const toBranchRates = document.querySelector(".from-türkiye");
    const toAddressRates = document.querySelector(".from-usa");

    turkeyLink.addEventListener("click", function () {
      toBranchRates.style.display = "flex";
      toAddressRates.style.display = "none";
    });

    usaLink.addEventListener("click", function () {
      toBranchRates.style.display = "none";
      toAddressRates.style.display = "flex";
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const branchDeliveryLink = document.querySelector(".branch");
    const addressDeliveryLink = document.querySelector(".home");
    const toBranchRates = document.querySelector(".from-türkiye");
    const toAddressRates = document.querySelector(".from-usa");

    branchDeliveryLink.addEventListener("click", function () {
      toBranchRates.style.display = "flex";
      toAddressRates.style.display = "none";
    });

    addressDeliveryLink.addEventListener("click", function () {
      toBranchRates.style.display = "none";
      toAddressRates.style.display = "flex";
    });
  });






$('#myCarousel').carousel({
  interval: 3000,
})



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
