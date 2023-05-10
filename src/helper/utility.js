// Older Code:
// function getPos(element) {
//   let x = 0,
//     y = 0;
//   if (!!element) {
//     do {
//       x += element.offsetLeft - element.scrollLeft;
//       y += element.offsetTop - element.scrollTop;
//     } while ((element = element.offsetParent));
//   }
//   return { x: x, y: y };
// }

function getPos(element) {
  let x = 0;
  let y = 0;
  let currentElement = element;

  while (currentElement) {
    x += currentElement.offsetLeft - currentElement.scrollLeft;
    y += currentElement.offsetTop - currentElement.scrollTop;
    currentElement = currentElement.offsetParent;
  }

  return { x, y };
}

export { getPos };
