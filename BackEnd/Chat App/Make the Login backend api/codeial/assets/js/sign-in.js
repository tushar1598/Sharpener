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
  if (res.data.message == "password is wrong!!") {
    alert("password is invalid!!");
    location.reload();
  } else if (res.data.message == "user not found") {
    alert("user not found!!");
    location.reload();
  } else {
    alert("user singed in successfully!!");
    window.location.href = "/users/profile";
  }
}
