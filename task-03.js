// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і
// велечину базового шрифта ("20px") і вертає конвертований розмір в
// пікселях

let converter = (rem = 2, px = 20) =>
  `Rem: ${rem}rem, \nPx: ${px}px, \nConverted result: ${rem * px}px`

console.log(converter(2, 20))