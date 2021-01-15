// Написати ф-ю <strong>countVowels</strong> яка буде приймати строку
// і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
// <code>
//  countVowels('the quick brown fox') // 5
// </code>

let countVowels = (str = 'Default string') => {
  let
    vowels = 'aeiou'.split(''),
    str_low = str.toLowerCase(),
    counter = 0
  for (let letter of str_low)
    if (vowels.includes(letter)) counter += 1
  return counter
}

let better_countVowels = (str = 'Default string') => str.match(/[aeiou]/gi).length

console.log('countVowels = ', countVowels('the quick brown fox')) // 5
console.log('better_countVowels = ', better_countVowels('the quick brown fox aaa eee')) // 11