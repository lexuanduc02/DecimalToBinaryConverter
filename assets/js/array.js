function integerPart(input) {
  return (Math.trunc(input) >>> 0).toString(2);
}

function decimalPart(input, numberOfBits) {
  let array = [];
  let decimalPart = input - Math.trunc(input);

  if(decimalPart === 0) return "0";
  
  let count = 0;

  while (decimalPart > 0 && count < numberOfBits) {
    decimalPart *= 2;
    let bit = Math.trunc(decimalPart);
    array.push(bit);
    decimalPart -= bit;
    count++;
  }

  return array.join("");
}

export function reverseToBinaryArr(input, numberOfBits) {
  let inputValue = Number(input);
  let numberOfBitsValue = Number(numberOfBits);

  let integer = integerPart(inputValue);
  let decimal = decimalPart(inputValue, numberOfBitsValue);

  return `${integer}.${decimal}`;
} 