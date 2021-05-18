const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?gender=female&results=10';


//function to create node
function createNode(element){
  return document.createElement(element);
}
//function to append child to parent
function appendChild(parent, element){
  return parent.appendChild(element);
}

                                          
//playing with API here
fetch(url).
then((response) => {
  return response.json();
}).then(data => {
  let authors = data.results;
  return authors.map(author => {
      let li = createNode('li'),
       img = createNode('img'),
       span = createNode('span');
    img.src = author.picture.large;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    appendChild(li, img);
    appendChild(li, span);
    appendChild(ul, li);
  });
}).catch(error => {
  console.log(error);
})

