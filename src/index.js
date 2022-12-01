document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //grab the form amd set it to a varibale
  let form = document.querySelector('form')

  //attach the event listener of "submit"
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.newtaskdescription.value);
    //enable reset to ensure the input box is empty for next input
    form.reset()
  })
});

function buildToDo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo}  `
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove();
}
