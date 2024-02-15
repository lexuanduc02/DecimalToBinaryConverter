import { reverseUsingStack } from "./stack.js";
import { reverseString } from "./queue.js";
import { reverseStringLinkedList } from "./linkedList.js";
import { reverseStringArr } from "./array.js";

const container = document.querySelector(".container");
const stackBtn = container.querySelector("#stack-btn");
const queueBtn = container.querySelector("#queue-btn");
const linkedListBtn = container.querySelector("#linked-list-btn");
const arrBtn = container.querySelector("#arr-btn");
const inputValue = container.querySelector("#input-value");
const inputReverse = container.querySelector("#rev-text");
const time = document.querySelector("#time");

stackBtn.addEventListener("click", (e) => {
  const startTime = performance.now();
  if (inputValue.value.trim()) {
    const result = reverseUsingStack(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
  Toastify({
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
});

queueBtn.addEventListener("click", () => {
  if (inputValue.value.trim() === "") return;
  const startTime = performance.now();
  if (inputValue.value.trim()) {
    const result = reverseString(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
  Toastify({
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
});

linkedListBtn.addEventListener("click", () => {
  if (inputValue.value.trim() === "") return;
  const startTime = performance.now();
  if (inputValue.value.trim()) {
    const result = reverseStringLinkedList(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
  Toastify({
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
});

arrBtn.addEventListener("click", () => {
  if (inputValue.value.trim() === "") return;
  const startTime = performance.now();
  if (inputValue.value.trim()) {
    const result = reverseStringArr(inputValue.value);

    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
  Toastify({
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
});
