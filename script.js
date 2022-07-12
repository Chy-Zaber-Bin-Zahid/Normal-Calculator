let inputSecond = document.getElementById("input2");
inputSecond.value = "0.00";
let inputFirst = document.getElementById("input1");
inputFirst.value = "";
let store = "";
let indexOfStore = 0;
let count = 0;

function storeNumber(num, idx = 0) {
  if (num === ".") {
    let check = "";
    check += num;
    for (let i = 0; i < check.length; i++) {
      if (check[i] === ".") {
        count += 1;
      }
    }
    console.log(count);
    if ((store !== "" && store[store.length - 1] === ".") || count > 1) {
      inputFirst.value = "Syntax ERROR";
      store = "";
    } else if (idx !== 0) {
      inputFirst.value = "";
      store += num;
      inputSecond.value = store.slice(indexOfStore + 1);
    } else {
      inputFirst.value = "";
      store += num;
      inputSecond.value = store;
    }
  } else if (idx !== 0) {
    inputFirst.value = "";
    store += num;
    inputSecond.value = store.slice(indexOfStore + 1);
  } else {
    inputFirst.value = "";
    store += num;
    inputSecond.value = store;
  }
}

function buttons(btnNumber) {
  document.getElementById(btnNumber).addEventListener("click", function () {
    if (inputFirst.value !== "") {
      indexOfStore = store.indexOf(store.length);
      storeNumber(document.getElementById(btnNumber).innerText, indexOfStore);
    } else {
      inputSecond.value = "";
      storeNumber(document.getElementById(btnNumber).innerText);
    }
  });
}

//button 1,2,3,4....9,0,.
buttons("btn-1");
buttons("btn-2");
buttons("btn-3");
buttons("btn-4");
buttons("btn-5");
buttons("btn-6");
buttons("btn-7");
buttons("btn-8");
buttons("btn-9");
buttons("btn-0");
buttons("btn-.");

// document.getElementById("btn-1").addEventListener("click", function () {
//   if (inputFirst !== "") {
//     indexOfStore = store.indexOf(store.length);
//     storeNumber(document.getElementById("btn-1").innerText, indexOfStore);
//   } else {
//     inputSecond.value = "";
//     console.log(store);
//     storeNumber(document.getElementById("btn-1").innerText);
//   }
// });
