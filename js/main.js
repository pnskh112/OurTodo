window.onload = function main(){
  const buttonList = document.querySelectorAll('button');
  [...buttonList].forEach((button) => {
    button.addEventListener('click', () => {
      const li = button.closest('li');
      li.classList.add('aaa');
    });
  });
}

function exportTodolist(){
  const Todolist = document.querySelectorAll('li');
  console.log(Todolist);
}
