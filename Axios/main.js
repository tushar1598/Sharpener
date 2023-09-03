// GET REQUEST
function getTodos() {
  // axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  // })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.log(err));

  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  // axios({
  //   method: "post",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   data: {
  //     title: "New Todo",
  //     completed: "false",
  //   },
  // })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.log(err));

  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "new todo",
      completed: "false",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  // axios
  //   .put("https://jsonplaceholder.typicode.com/todos/1", {
  //     title: "new updated todo",
  //     completed: "true",
  //   })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.log(err));

  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "new updated todo",
      completed: "true",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])
    .then(axios.spread((todos, posts) => showOutput(todos)))
    .catch((err) => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "someToken",
    },
  };
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "new todo",
        completed: "false",
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const option = {
    mathod: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(option).then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => showOutput(res))
    .catch((error) => {
      if (error.response.status) {
        alert("something missing!!");
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.cancelToken.source();
  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token,
    })
    .then((res) => showOutput(res))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("request Cancel");
      }
    });

    if(true){
      source.cancel("Request Cancelled!!")
    }
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
