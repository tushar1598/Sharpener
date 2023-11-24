const socket = io()

document.querySelector("form").addEventListener("submit", myFun);

function myFun(event) {
    event.preventDefault();
    const textAreaValue = document.querySelector("#textarea").value;
    const userid = document.querySelector("#hide-id").innerText.trim();
    const username = document.querySelector("#hide-name").innerText.trim();
    const useremail = document.querySelector("#hide-email").innerText.trim();
    const touser = document.querySelector("#to").innerText.trim();
    let obj = {
        id: userid,
        username: username,
        useremail: useremail,
        to: touser,
        message: textAreaValue
    }
    socket.emit("message", obj);
    setInterval(() => {
        location.reload();
    }, 500)
}

socket.on("message", () => {
    setInterval(() => {
        location.reload();
    }, 500)
})






