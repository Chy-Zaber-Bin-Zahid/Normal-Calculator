//-----Variables-----//
let inputSecond = document.getElementById("input2");
inputSecond.value = "0.00";
let inputFirst = document.getElementById("input1");
inputFirst.value = "";
let store = "";
let indexOfStore = 0;
let count = 0;

//-----Function-----//
function check(sign) {
  count += 1;
}

function operation(opa) {
  let temp = [];
  //(+)
  if (store.includes("+")) {
    temp = store.split("+");
    console.log(temp);
    if (temp.length === 2) {
      inputFirst.value = store;
      inputSecond.value = parseFloat(temp[0]) + parseFloat(temp[1]);
      temp = [];
      store = "";
    } else if (temp[0] === "" && temp.length === 3) {
      inputFirst.value = store;
      inputSecond.value = parseFloat(temp[1]) + parseFloat(temp[2]);
      temp = [];
      store = "";
    } else if (temp[temp.length - 1] === "") {
      inputFirst.value = "Syntax ERROR";
      store = "";
      inputSecond.value = "";
    } else if (
      (temp[0] === "" && temp.length > 3) ||
      (temp[0] !== "" && temp.length >= 3)
    ) {
      inputFirst.value = "Only two digit for now!";
      inputSecond.value = "";
      store = "";
    }
  }

  //(-)
  if (store.includes("-")) {
    let temp2 = "";
    temp2 = store.indexOf("-");
    temp = store.split("-");
    if (temp2 !== 0) {
      inputFirst.value = store;
      inputSecond.value = parseFloat(temp[0]) - parseFloat(temp[1]);
      temp = [];
      store = "";
    } else if (
      (temp[0] === "" && temp.length > 3) ||
      (temp[0] !== "" && temp.length >= 3)
    ) {
      inputFirst.value = "Only two digit for now!";
      inputSecond.value = "";
      store = "";
    } else {
      inputFirst.value = store;
      inputSecond.value = -1 * parseFloat(temp[1]) - parseFloat(temp[2]);
      temp = [];
      store = "";
    }
  }

  //(*)
  if (store.includes("*")) {
    if (store[0] === "*") {
      console.log("hui");
    }
  }
}

function storeNumber(num, idx = 0) {
  if (num === ".") {
    check(".");
    if ((store !== "" && store[store.length - 1] === ".") || count > 1) {
      inputFirst.value = "Syntax ERROR";
      store = "";
      count = 0;
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
  if (btnNumber !== "btn-=") {
    document.getElementById(btnNumber).addEventListener("click", function () {
      if (inputFirst.value !== "") {
        indexOfStore = store.indexOf(store.length);
        storeNumber(document.getElementById(btnNumber).innerText, indexOfStore);
      } else {
        inputSecond.value = "";
        storeNumber(document.getElementById(btnNumber).innerText);
      }
    });
  } else {
    document.getElementById(btnNumber).addEventListener("click", function () {
      operation(document.getElementById(btnNumber).innerText);
    });
  }
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

//+,-,/,*,%
buttons("btn-+");
buttons("btn--");
buttons("btn-*");
buttons("btn-/");
buttons("btn-%");

//(=)
buttons("btn-=");
