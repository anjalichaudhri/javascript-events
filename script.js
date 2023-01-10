// promises: promises are used to run functions asynchronously and 
// where there can be delay in getting data like API calls.
// promises are created via promise constructor.

document.getElementById("text").addEventListener("click", () => {
  document.getElementById("test").innerText =
    "click here button clicked and this output is shown";
});

let menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
  let target = event.target;
  console.log(`event: ${event}`);
  console.log(target);
  switch (target.id) {
    case "home":
      console.log("home was clicked");
      break;
    case "dashboard":
      console.log("dashboard was clicked");
      break;
    case "more":
      console.log("more was clicked");
      break;
    default:
      console.log("other than home was clicked");
  }
});

document.getElementById("form1").addEventListener("submit", (event) => {
  const msg = document.getElementById("input1").value;
  alert(msg);
});

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "user1", value: 20 },
        { username: "user2", value: 12 },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);
