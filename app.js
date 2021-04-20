const postscontainer = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(json => {
    json.forEach(post => {
      const listElement = document.createElement("li");
      const link = document.createElement("a");
      link.href = `http://127.0.0.1:5500/post.html?id=${post.id}`;
      link.innerText = post.title;
      listElement.appendChild(link);
      postscontainer.appendChild(listElement);
    });
  });
