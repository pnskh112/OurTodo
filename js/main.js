// window.onload = function main(){
function changeDone(){
  const buttonList = document.querySelectorAll('button');
  [...buttonList].forEach((button) => {
    button.addEventListener('click', () => {
      const li = button.closest('li');
      li.classList.add('done');
    });
  });
}

function appendTodo(){
  const input = document.getElementById('new_todo');
  const li = document.createElement('li');
  const button = document.createElement('button');
  li.innerText = `${input.value} `;
  button.innerText = 'done';
  button.onclick = "changeDone()";

  const ul = document.querySelector('ul');
  ul.appendChild(li).appendChild(button);

}

function exportTodolist(){
  const Todolist = document.querySelectorAll('li');
  const nodeItem = {value:""};

  for(let i=0;i < Todolist.length; i++){
    const todolist = Todolist[i];
    if (todolist.className === 'done'){
      nodeItem.value += `☑︎ ${todolist.textContent}\n`;
    }else {
      nodeItem.value += `□ ${todolist.textContent}\n`;
    }
  }

  // ファイル出力の実装
  const blob = new Blob([nodeItem.value],{type:"text/plan"});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '作ったファイル.txt';
  link.click();
}




