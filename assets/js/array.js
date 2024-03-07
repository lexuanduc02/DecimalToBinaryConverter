function DoiPN(input) {
  return (Math.trunc(input) >>> 0).toString(2);
}

function DoiPD(input, numberOfBits) {
  let Mang = [];
  let PD = input - Math.trunc(input);

  if(PD === 0) return "0";
  
  let count = 0;

  while (PD > 0 && count < numberOfBits) {
    PD *= 2;
    let bit = Math.trunc(PD);
    Mang.push(bit);
    PD -= bit;
    count++;
  }

  return Mang.join("");
}

export function reverseToBinaryArr(input, numberOfBits) {
  let NhapSo = Number(input);
  let NhapSoBit = Number(numberOfBits);

  let HienPN = DoiPN(NhapSo);
  let HienPD = DoiPD(NhapSo, NhapSoBit);

  return `${HienPN}.${HienPD}`;
} 