console.log(`Hi, I'm active 🅱`);

/**
 * Recursive function that explores the nodes of the provided element. The user provides pairs of text - the first value being the text to replace and the second value being the text to replace the text with.
 * @param {*} element
 * @returns
 */
const crawler = function (element) {
  const children = element.childNodes;
  console.log(children);

  // Recursive call
  children.forEach((element) => {
    console.log(element);
    crawler(element);
  });

  // console.log(element.nodeName);

  // Guard clause. If it's not a text node, just stop here.
  if (element.nodeName !== `#text`) return;

  // console.log(`I'm a text node, my content is: `, element.textContent, ` 😁`);
  element.textContent = element.textContent
    .replaceAll(`b`, `🅱`)
    .replaceAll(`B`, `🅱`);
};

if (confirm(`Wanna run, 🅱?`)) {
  crawler(document.body);
}

// Alternate way that kind of worked but not really. Broke styling.
// document.body.innerHTML = document.body.innerHTML.replaceAll(`b`, `🅱`);

// // "action": {
//   "default_icon": "b.png"
// },
