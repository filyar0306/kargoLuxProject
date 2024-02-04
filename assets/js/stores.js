function filterMarkalar(category) {
    const markaItems = document.querySelectorAll('.marka-item');
  
    markaItems.forEach(item => {
      const itemCategories = item.classList;
  
      if (category === 'tum-markalar' || itemCategories.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }