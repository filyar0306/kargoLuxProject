document.addEventListener("DOMContentLoaded", function () {
  const turkeyLink = document.querySelector(".türkiye");
  const usaLink = document.querySelector(".usa");
  const storeWrapper = document.querySelector(".store-wrapper");

  turkeyLink.addEventListener("click", function () {
      // Türkiye'ye ait markaları göster
      showTurkishBrands();
  });

  usaLink.addEventListener("click", function () {
      // ABD'ye ait markaları göster
      showUSBrands();
  });

  // Sayfa yüklendiğinde tüm markaları göster
  showAllBrands();

  function showTurkishBrands() {
      storeWrapper.innerHTML = ""; // Mağaza resimlerini temizle

      addStoreImage("koton.png");
      addStoreImage("gratis.png");
      addStoreImage("Stradivarius_logo.png");
      // Türkiye'ye ait diğer markaları eklemek için aynı şekilde devam edebilirsiniz
  }

  function showUSBrands() {
      storeWrapper.innerHTML = ""; // Mağaza resimlerini temizle

      addStoreImage("uspoloass.png");
      addStoreImage("trenyol.png");
      addStoreImage("aliexpress.png");
      // ABD'ye ait diğer markaları eklemek için aynı şekilde devam edebilirsiniz
  }

  function showAllBrands() {
      // Tüm markaları göster
      showTurkishBrands();
      showUSBrands();
  }

  // Yeni bir mağaza resmi eklemek için fonksiyon
  function addStoreImage(imageFileName) {
      const storeDiv = document.createElement("div");
      storeDiv.classList.add("store", "d-flex", "col-xxl-2", "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6");

      const storeLink = document.createElement("a");
      storeLink.href = "./stores.html";

      const storeImg = document.createElement("img");
      storeImg.src = "./assets/img/196.png" + imageFileName;
      storeImg.alt = "";

      storeLink.appendChild(storeImg);
      storeDiv.appendChild(storeLink);
      storeWrapper.appendChild(storeDiv);
  }
});