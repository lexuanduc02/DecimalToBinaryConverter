import { reverseToBinaryStack } from "./stack.js";
import { reverseToBinaryQueue } from "./queue.js";
import { reverseToBinaryLinkedList } from "./linkedList.js";
import { reverseToBinaryArr } from "./array.js";

const $ = document.querySelector.bind(document);
const resetBtn = $("#reset-btn");
const convertBtn = $("#convert-btn");
const iteration = $("#iteration");
const input = $("#input");

function generateConvertIntegerSteps(value) {
  const tableBody = $("#integer-table-body");
  tableBody.innerHTML = `<tr>
                          <th>Division<br>by 2</th>
                          <th>Quotient</th>
                          <th>Remainder</th>
                          <th>Bit #</th>
                        </tr>`

  let quotient = Math.trunc(value);
  let bitNumber = 0;

  while (quotient > 0) {
      const remainder = quotient % 2;

      let nextQuotient = Math.floor(quotient / 2);
      const row = document.createElement('tr');
        row.innerHTML = `
            <td>(${quotient})/2</td>
            <td>${nextQuotient}</td>
            <td>${remainder}</td>
            <td>${bitNumber}</td>
        `;
        
        tableBody.appendChild(row);
        
        quotient = nextQuotient;
        bitNumber++;
  }
}

function generateConvertRemainderSteps(value, iteration) {
  const tableBody = $("#remainder-table-body");
  tableBody.innerHTML = `<tr>
                          <th>Multiply<br>by 2</th>
                          <th>Quotient</th>
                          <th>Integer</th>
                          <th>Bit #</th>
                        </tr>`

  let quotient = (value - Math.floor(value)).toFixed(2);
  let bitNumber = 0;

  while (bitNumber < iteration) {
      const remainder = Math.floor(quotient * 2);
      let nextQuotient = ((quotient * 2) - Math.floor(quotient * 2)).toFixed(2);

      const row = document.createElement('tr');
      row.innerHTML = `
          <td>(${quotient})*2</td>
          <td>${nextQuotient}</td>
          <td>${remainder}</td>
          <td>${bitNumber}</td>
      `;

      tableBody.appendChild(row);

      quotient = nextQuotient;

      if (quotient == 0) {
          console.log("Quotient is zero. Exiting loop.");
          break; // Exit the loop if the quotient is zero
      }

      bitNumber++;
  }
}

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

function reverse (name ,context, func) {
  let start = performance.now();
  let result = func.call(context);
  let stop = performance.now();
  let timeResponse = (stop - start).toFixed(10)*1000;

  $(`#${name}-result`).innerText = result;
  $(`#${name}-res`).innerText = timeResponse + "ms";
};

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
  $("#conversion-step").style.display = "none";
});

convertBtn.addEventListener("click", (e) => {
  if(validate(input, iteration) == false) 
    return;
  else {
    $("#result").style.display = "block";
    $("#input").style.backgroundColor = "#fff";
    $("#iteration").style.backgroundColor = "#fff";
    $("#conversion-step").style.display = "block";
  
    let inputValue = parseFloat($("#input").value);
    let iterationValue = parseInt($("#iteration").value);

    if (iterationValue > 23 || iteration < 0) {
      iterationValue = 23;
    }

    reverse("stack",this, () => reverseToBinaryStack(inputValue, iterationValue));
    reverse("queue",this, () => reverseToBinaryQueue(inputValue, iterationValue));
    reverse("array",this, () => reverseToBinaryArr(inputValue, iterationValue));
    reverse("linked-list",this, () => reverseToBinaryLinkedList(inputValue, iterationValue));

    generateConvertIntegerSteps(inputValue);
    generateConvertRemainderSteps(inputValue, iterationValue);
    showToast();
  }
});
