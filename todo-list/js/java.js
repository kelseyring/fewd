var create = document.querySelector("button");
var newtasks = document.querySelector(".tasklist");
create.addEventListener("click", addTodo);

  function addTodo(event) {

  var div = document.createElement("div");
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  var span = document.createElement("span");
  var textarea = document.querySelector(".textarea").value;
  span.textContent = textarea;
  console.log(textarea);

  newtasks.appendChild(div);
  newtasks.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(input);
  li.appendChild(span);
  }

// like count
// var create = document.querySelector (".like-link");
  // like.addEventListener("click", docCount);

// var count = parseInt (document.querySelector(".doc-count").textContent);

// function docCount(event) {
  // event.preventDefault();
  // create = create + 1;
  // document.querySelector(".doc-count").textContent = create;


// list placeholder
// var h2 = document.querySelector ("h2");
// var placeHolderInList = document.querySelector("h2");
// placeHolderInList.style.display = "none";
