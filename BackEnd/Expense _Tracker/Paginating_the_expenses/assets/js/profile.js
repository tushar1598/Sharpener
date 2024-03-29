document.querySelector("form").addEventListener("submit", myFun);

async function myFun(event) {

    event.preventDefault();
    let amount = document.querySelector("#amount").value;
    let description = document.querySelector("#description").value;
    let category = document.querySelector("#category").value;
    let obj = {
        amount, description, category
    }
    let response = await axios.post("http://localhost:9000/expenses/create-expense", obj);
    location.reload();

}


$(document).ready(function () {
    $('.pay-form').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: "http://localhost:9000/purchase/purchase-premium",
            type: "POST",
            data: formData,
            success: function (res) {
                if (res.success) {
                    var options = {
                        "key": "" + res.key_id + "",
                        "amount": "" + res.amount + "",
                        "currency": "INR",
                        "name": "" + res.product_name + "",
                        "description": "" + res.description + "",
                        "image": "https://dummyimage.com/600x400/000/fff",
                        "order_id": "" + res.order_id + "",
                        "handler": function (response) {
                            alert("Payment Succeeded");
                            // window.open("/","_self")
                        },
                        "prefill": {
                            "contact": "" + res.contact + "",
                            "name": "" + res.name + "",
                            "email": "" + res.email + ""
                        },
                        "notes": {
                            "description": "" + res.description + ""
                        },
                        "theme": {
                            "color": "#2300a3"
                        }
                    };
                    var razorpayObject = new Razorpay(options);
                    razorpayObject.on('payment.failed', function (response) {
                        alert("Payment Failed");
                    });
                    razorpayObject.open();
                }
                else {
                    alert(res.msg);
                }
            }
        })

    });
});




axios.get("http://localhost:9000/purchase/premium").then((res) => {
    console.log(res.data)
});

axios.get("http://localhost:9000/purchase/all-order").then((res) => {
    let orders = res.data;
    console.log(orders)
    if (!orders.premium) {
        let x = document.querySelector("#btn");
        x.removeAttribute("hidden");
    } else {
        let x = document.querySelector("#premium");
        x.removeAttribute("hidden")

    }
}).catch(err => console.log(err))

axios.get("http://localhost:9000/purchase/all-order").then((res) => {
    let orders = res.data;
    if (orders.premium) {
        let x = document.querySelector("#download a");
        x.removeAttribute("hidden");
    }
}).catch(err => console.log(err))

axios.get("http://localhost:9000/expenses/total-expense").then((res) => {
    let totalAmount = 0;
    for (let i of res.data.expense) {
        totalAmount += Number(i.amount)
    }
    document.querySelector("#leaderboard").addEventListener("click", function () {
        document.querySelector(".leaderboard").innerText = `Total Expense = ${totalAmount}`
    })
}).catch(err => console.log(err))



// Pagination

const tableBody = document.getElementById('expenseBody');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentPage = 1;

async function getExpenses(page, limit) {
    let res = await axios.get(`http://localhost:9000/expenses/pagination-expenses?page=${page}&limit=${limit}`)
    // return (res.data.results.expenses)
    return (res.data)
}


async function renderExpenses() {

    const limit = 3;
    const data = await getExpenses(currentPage, limit);
    tableBody.innerHTML = '';

    data.results.expenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${expense.amount}</td>
      <td>${expense.description}</td>
      <td>${expense.category}</td>
      <td id="delete">
        <a href="/expenses/delete-expense/${expense.id}">Delete</a>
      </td>
    `;
        tableBody.appendChild(row);
    });

    // Handle pagination buttons
    if (data.results.previous) {
        prevButton.style.display = 'block';
        prevButton.onclick = () => {
            currentPage = data.results.previous.page;
            renderExpenses();
        };
    } else {
        prevButton.style.display = 'none';
    }

    if (data.results.next) {
        nextButton.style.display = 'block';
        nextButton.onclick = () => {
            currentPage = data.results.next.page;
            renderExpenses();
        };
    } else {
        nextButton.style.display = 'none';
    }
}

renderExpenses();