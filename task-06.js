//Написати ф-ю <strong>rgbToHex</strong> яка приймає колір в форматі
//rgb і повертає колір в форматі hex

// let rgbToHex = (r, g, b) => "#" + ((r << 16) + (g << 8) + b).toString(16)
let rgbToHex = (r, g,b) => {
  let hexItem = (c) => {
    let hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return '#' + hexItem(r) + hexItem(g) + hexItem(b)
}
console.log(rgbToHex(10, 15,20))
