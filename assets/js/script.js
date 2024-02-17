import { reverseToBinaryStack } from "./stack.js";
import { reverseToBinaryQueue } from "./queue.js";
import { reverseToBinaryLinkedList } from "./linkedList.js";
import { reverseToBinaryArr } from "./array.js";

const $ = document.querySelector.bind(document);
const stackBtn = $("#stack-btn");
const queueBtn = $("#queue-btn");
const linkedListBtn = $("#linked-list-btn");
const arrBtn = $("#arr-btn");
const numberOfBits = $("#limit-value");
const inputValue = $("#input-value");
const inputReverse = $("#rev-text");
const time = $("#time");

stackBtn.addEventListener("click", (e) => {
  const startTime = performance.now();
  if (inputValue.value.trim()) {
    const result = reverseToBinaryStack(inputValue.value, numberOfBits.value);
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
    const result = reverseToBinaryQueue(inputValue.value, numberOfBits.value);
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
    const result = reverseToBinaryLinkedList(inputValue.value, numberOfBits.value);
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
    const result = reverseToBinaryArr(inputValue.value, numberOfBits.value);

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
