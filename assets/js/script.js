import { reverseToBinaryStack } from "./stack.js";
import { reverseToBinaryQueue } from "./queue.js";
import { reverseToBinaryLinkedList } from "./linkedList.js";
import { reverseToBinaryArr } from "./array.js";

const $ = document.querySelector.bind(document);
const resetBtn = $("#reset-btn");
const convertBtn = $("#convert-btn");
const iteration = $("#iteration");
const input = $("#input");


function showToast() {
   return Toastify({
    text: "Reverse completed",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(7, 205, 7)",
    },
  }).showToast();
}

function stack(inputValue, numberOfBits) {
  let startTime = performance.now();

  let  result = reverseToBinaryStack(inputValue, numberOfBits);

  let endTime = performance.now();

  let timeResponse = (endTime - startTime).toFixed(10)*1000;
  
  $("#stack-result").innerText = result;
  $("#stack-res").innerText = timeResponse + "ms";
}

function queue(inputValue, numberOfBits) {
  let startTime = performance.now();      
  let result = reverseToBinaryQueue(inputValue, numberOfBits);
  let endTime = performance.now();
  let timeResponse = (endTime - startTime).toFixed(10)*1000;
  
  $("#queue-result").innerText = result;
  $("#queue-res").innerText = timeResponse + "ms";
}

function array(inputValue, numberOfBits) {
  let startTime = performance.now();
  let result = reverseToBinaryArr(inputValue, numberOfBits);
  let endTime = performance.now();
  let timeResponse = (endTime - startTime).toFixed(10)*1000;
  
  $("#array-result").innerText = result;
  $("#array-res").innerText = timeResponse + "ms";
}

function linkedList(inputValue, numberOfBits) {
  let startTime = performance.now();
  let result = reverseToBinaryLinkedList(inputValue, numberOfBits);
  let endTime = performance.now();
  let timeResponse = (endTime - startTime).toFixed(10) * 1000;

  $("#linked-list-result").innerText = result;
  $("#linked-list-res").innerText = timeResponse + "ms";
}

function validate(inputValue, iteration) {
  var x = inputValue.value;
  var y = iteration.value;
  if (isNaN(x) || x === "") {
    $("#input").style.backgroundColor = "rgb(255, 240, 240)";
    return false; 
  } else if (isNaN(y) || y === "") {
    $("#iteration").style.backgroundColor = "rgb(255, 240, 240)";
    return false; 
  }
  return true;
} 

resetBtn.addEventListener("click", (e) => {
  $("#input").value = "";
  $("#iteration").value = "";
  $("#result").style.display = "none";
});

convertBtn.addEventListener("click", (e) => {
  if(validate(input, iteration) == false) 
    return;
  else {
    $("#result").style.display = "block";
    $("#input").style.backgroundColor = "#fff";
    $("#iteration").style.backgroundColor = "#fff";
  
    let inputValue = parseFloat($("#input").value);
    let iterationValue = parseInt($("#iteration").value);

    if (iterationValue > 23 || iteration < 0) {
      iterationValue = 23;
    }
    
    stack(inputValue, iterationValue);
    queue(inputValue, iterationValue);
    array(inputValue, iterationValue);
    linkedList(inputValue, iterationValue);
    showToast();
  }
});
