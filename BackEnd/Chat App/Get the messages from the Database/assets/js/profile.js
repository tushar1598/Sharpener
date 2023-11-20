const socket = io()

document.querySelector("form").addEventListener("submit", myFun);

function myFun(event) {
    event.preventDefault();
    const textAreaValue = document.querySelector("#textarea").value;
    const userid = document.querySelector("#hide-id").innerText.trim();
    const username = document.querySelector("#hide-name").innerText.trim();
    let obj = {
        id: userid,
        username: username,
        message: textAreaValue
    }
    socket.emit("message", obj)
    location.reload();
}

