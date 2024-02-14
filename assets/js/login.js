// login
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('Email').value.trim();
  const password = document.getElementById('Password').value.trim();

  const emailError = document.querySelector('.email .error');
  const passwordError = document.querySelector('.password .error');


  if (!email) {
    emailError.textContent = 'Email boş qoyula bilməz.';
    emailError.style.display = 'block';
    return;
    
  }
  if (!password) {
    passwordError.textContent = 'Şifrə boş qoyula bilməz.';
    passwordError.style.display = 'block';
    return;
  }
  



  try {
    const response = await fetch('http://localhost:3000/registers');
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      throw new Error('Invalid email or password.');
    }

    window.location.href = 'index.html';

  } catch (error) {
    console.error(error);
    alert('Belə bir hesab qeydə alınmadı. E-poçt və parolunuzu yoxlayın və yenidən cəhd edin.');
  }
});

