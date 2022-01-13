/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

// TEST
createInputElm('Your name');
//<label>Your name: <input type="text"></label>
function createEle(text,type="text"){
  let label = document.createElement("label")
  label.innerText = text;
  let input = document.createElement("input")
  input.type = type;
  label.append(input)
  return label;
}
createEle("your name:", "palceholder")

createInputElm(text, type); //<label>Your age: <input type="number"></label>
function createElm(text,type="number"){
  let lable = document.createElement("lable")
  lable.innerText = number;
  let input = document.createElement("input")
  input.type = type;
  lable.append(input)
  return lable;

}
createElm("your age:", "palceholder")

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

let createInputElm1 = function (labelpara, type = "text") {
  let html = `<label>${labelpara}: <input type="${type}"> </label>`;
  return html;
};

// Your code goes here

// TEST
 //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createLists(arr) {
  let ul = document.createElement('ul');
  arr.forEach((fruits) => {
    let li = document.createElement('li');
    li.innerText = fruits;
    ul.append(li);
  })
  return ul;
  
}

createLists(['mango','apple','banana']);

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(data=[]){
  let ul = document.createElement('ul');
  data.forEach((ele) => {
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerText = ele.name;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = ' '
    input.id = " ";
    input.checked = ele.isDone;
    let span = document.createElement('span');
    span.innerText = "X";
    li.append(p, input, span);
    ul.append(li);
  });
  return ul;
}


// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
