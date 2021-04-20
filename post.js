const titleNode = document.getElementById("title");
const textNode = document.getElementById("text");

const urlParams = new URLSearchParams(window.location.search);
const id = +urlParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    const { title, body } = json;
    titleNode.innerHTML = title;
    textNode.innerHTML = body;
  });
