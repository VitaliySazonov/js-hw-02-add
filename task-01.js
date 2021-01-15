// Написати ф-ю <strong>capitalize</strong> яка буде приймати строку
// і буде вертати нову строку де кожне слово буде починатися з
// великої літери.
// <code>
//  capitalize('the quick brown fox') // 'The Quick Brown Fox '
// </code>
let capitalize = (str = 'default string') => {
  let new_str = ''
  for(let el of str.split(' '))
    new_str += el.slice(0, 1).toUpperCase() + el.slice(1) + ' '
  return new_str
}

let better_capitalize = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')

console.log('capitalize = ', capitalize('the quick brown fox')) // 'The Quick Brown Fox '
console.log('better_capitalize = ', better_capitalize('the quick dsaSDA dsaDSA brown fox')) // 'The Quick Brown Fox '