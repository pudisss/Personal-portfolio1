// Category filter functionality
const categories = document.querySelectorAll('.category');
const certificates = document.querySelectorAll('.certificate');

categories.forEach(category => {
  category.addEventListener('click', () => {
    const selectedCategory = category.getAttribute('data-category');
    
    categories.forEach(cat => cat.classList.remove('active'));
    category.classList.add('active');
    
    certificates.forEach(cert => {
      if (selectedCategory === 'all' || cert.getAttribute('data-category') === selectedCategory) {
        cert.style.display = 'block';
      } else {
        cert.style.display = 'none';
      }
    });
  });
});
