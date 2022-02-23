const list = document.querySelectorAll("li.item");
console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll("#categories>li");
ul.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent} \n Elements: ${el.lastElementChild.children.length}`
  );
});
