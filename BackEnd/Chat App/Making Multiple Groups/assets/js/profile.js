const socket = io()

document.querySelector("form").addEventListener("submit", myFun);

function myFun(event) {
    event.preventDefault();
    const textAreaValue = document.querySelector("#textarea").value;
    const userid = document.querySelector("#hide-id").innerText.trim();
    const username = document.querySelector("#hide-name").innerText.trim();
    // let sendMsg = document.createElement("div");
    // sendMsg.setAttribute("class", "outgoing");
    // let h4 = document.createElement("h4");
    // h4.innerText = document.querySelector("#hide-name").innerText;
    // let p = document.createElement("p");
    // p.innerText = textAreaValue;
    // sendMsg.append(h4, p)
    // document.querySelector("#msg").append(sendMsg)
    let obj = {
        id: userid,
        username: username,
        message: textAreaValue
    }
    socket.emit("message", obj);
    setInterval(() => {
        location.reload();
    }, 500)
}

// socket.on("message", (msg) => {
//     // let recieveMsg = document.createElement("div");
//     // recieveMsg.setAttribute("class", "incoming");
//     // let p = document.createElement("p");
//     // p.innerText = msg;
//     // recieveMsg.append(p)
//     // document.querySelector("#msg").append(recieveMsg)

//     //   document.querySelector(".icmg").innerText = msg.username
// })

socket.on("message", () => {
    setInterval(() => {
        location.reload();
    }, 500)
})
