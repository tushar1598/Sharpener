document.querySelector("form").addEventListener("submit", myFun);
async function myFun(event) {
  event.preventDefault();
  let Email = document.querySelector("#email").value;
  let Password = document.querySelector("#password").value;
  let obj = {
    Email,
    Password,
  };
  let res = await axios.post("http://localhost:9000/users/create-session", obj);
  if (res.data.message == "user not found") {
    alert("user not found!!");
    location.reload();
  } else {
    if (res.data.user.Password == Password) {
      alert("Signing in successfully!!");
      window.location.href = "/users/profile";
    } else {
      alert("password is wrong");
      location.reload();
    }
  }
}
