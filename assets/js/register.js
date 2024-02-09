

// // register
// const registerForm = document.getElementById('registerForm');

// registerForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(registerForm);
//   const formObject = {
//     name: formData.get('name'),
//     surname: formData.get('surname'),
//     email: formData.get('email'),
//     phoneNumber: formData.get('phone-number-code') + formData.get('phone-number-end'),
//     birthDate: formData.get('birth-date'),
//     nationality: formData.get('nationality'),
//     idType: formData.get('id-type'),
//     idNumber: formData.get('id-number'),
//     idPin: formData.get('id-pin'),
//     city: formData.get('city'),
//     branch: formData.get('branch'),
//     address: formData.get('address'),
//     password: formData.get('password'),
//     confPassword: formData.get('conf-password'),
//   };

//   // Validate password and confirmPassword fields
//   if (formObject.password !== formObject.confPassword) {
//     alert('Şifrə və təkrar şifrə eyni deyil.');
//     return;
//   }

//   try {
//     const response = await fetch('http://localhost:3000/registers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formObject),
//     });

//     if (!response.ok) {
//       throw new Error('Registration failed.');
//     }
    

//   } catch (error) {
//     console.error(error);
//     alert('Qeydiyyat sırasında xəta baş verdi.Təkrar cəhd edin!');
//   }
// });



// register
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(registerForm);
  const formObject = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    phoneNumber: formData.get('phone-number-code') + formData.get('phone-number-end'),
    birthDate: formData.get('birth-date'),
    nationality: formData.get('nationality'),
    idType: formData.get('id-type'),
    idNumber: formData.get('id-number'),
    idPin: formData.get('id-pin'),
    city: formData.get('city'),
    branch: formData.get('branch'),
    address: formData.get('address'),
    password: formData.get('password'),
    confPassword: formData.get('conf-password'),
  };

  // Validate password and confirmPassword fields
  if (formObject.password !== formObject.confPassword) {
    alert('Şifrə və təkrar şifrə eyni deyil.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/registers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    });

    if (!response.ok) {
      throw new Error('Registration failed.');
    }

    window.location.href = 'stores.html';

  } catch (error) {
    console.error(error);
    alert('Qeydiyyat sırasında xəta baş verdi.Təkrar cəhd edin!');
  }
});