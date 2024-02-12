document
  .getElementById("myform")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let name = document.getElementById("first-name").value;
    let email = document.getElementById("email-address").value;
    let message = document.getElementById("text-message").value;

    let datas = {
      name: name,
      email: email,
      message: message
    };

    try {
      let response = await axios.post("http://localhost:3000/comments", datas);
      myform.reset();
      console.log("İstek başarıyla gönderildi!");
      console.log(response.data);
    } catch (error) {
      console.error("İstek gönderilirken bir hata oluştu:", error);
    }
  });
