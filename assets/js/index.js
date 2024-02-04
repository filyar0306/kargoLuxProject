function calculateShipping() {
  var packageType = document.getElementById('package-type').value;
  var city = document.getElementById('city').value;
  var length = parseFloat(document.getElementById('length').value);
  var width = parseFloat(document.getElementById('width').value);
  var volume = parseFloat(document.getElementById('volume').value);
  var weight = parseFloat(document.getElementById('weight').value);

  // Kargo ücretini hesapla (Örnek bir formül kullanıldı, gerçek bir formül kullanmalısınız)
  var shippingCost = (length + width + volume + weight) * 0.1;

  // Sonucu HTML'de belirtilen bir yere yazdır
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

  // Sonucu HTML'de belirtilen yere sıfırla
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

