document.querySelector("form").addEventListener("submit", myFun);
async function myFun(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let password = document.querySelector("#password").value;
  let confirm_password = document.querySelector("#confirm_password").value;

  let obj = {
    Name: name,
    Email: email,
    Phone: phone,
    Password: password,
  };

  if (password != confirm_password) {
    alert("password does not match!!");
    location.reload();
  } else {
    let res = await axios.post("http://localhost:9000/users/create", obj);
    if (res.data.message == "user already exist!!") {
      alert("username is already exist!!");
      location.reload();
    } else {
      alert("user created successfully!!");
      location.reload();
    }
  }
}
