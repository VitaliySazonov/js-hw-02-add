//Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

let nonUniqueElements = (arr) => {
  let
    data = [],
    result = []
  for (let el of arr) {
    if (!data[el]) data[el] = 0
    data[el]++
  }
  for (let el of arr) if (data[el] > 1) result.push(el)
  console.log(result)
}


nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) // []
nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]