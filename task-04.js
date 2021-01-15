//Написати ф-ю що приймає число (температура в цельсіях) і виводить
//результат в фаренгейтах
let c = 20
let converter = (celsius = 10) => console.log(`Celsius = ${celsius}`, '\nFahrenheit =', celsius * 9 / 5 + 32)
converter(c)