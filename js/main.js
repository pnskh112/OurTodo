// window.onload = function main(){
function changeDone(){
  const buttonList = document.querySelectorAll('button');
  [...buttonList].forEach((button) => {
    button.addEventListener('click', () => {
      const li = button.closest('li');
      li.classList.add('done');
      const todoTaskList = document.getElementById('completedlists');
      todoTaskList.appendChild(li);
    });
  });
}


// Todoタスク追加
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

// Todoリストファイル出力
function exportTodolist(){
  const Todolist = document.querySelectorAll('li');
  const nodeItem = {value:""};
  for(i=0;i < Todolist.length; i++){
    const todolist = Todolist[i];
    if (todolist.className === 'done'){
      // nodeItem.value += `☑︎ ${todolist.textContent.slice(0,-4)}\n`;
      nodeItem.value += `☑︎ ${todolist.innerText}\n`;
    }else {
      // nodeItem.value += `□ ${todolist.textContent.slice(0,-4)}\n`;
      nodeItem.value += `□ ${todolist.innerText}\n`;
    }
  }
  // ファイル出力の実装
  const blob = new Blob([nodeItem.value],{type:"text/plan"});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '作ったファイル.txt';
  link.click();
}

//ファイルインポート機能
window.addEventListener('load', () => {
  const f = document.getElementById('importTodo');
  f.addEventListener('change', evt => {
    const input = evt.target;
    if (input.files.length == 0) {
      console.log('No file selected');
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const pre = document.getElementById('pre1');
      const result = reader.result.split("\n");
      for(i=0;i < result.length - 1; i++){
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = 'done';
        button.onclick = "changeDone()";
        li.innerHTML = result[i];
        // li.innerHTML = result[i].slice(2);
        li.appendChild(button);
        console.log(li.innerHTML.charAt(0));
        if (li.innerHTML.charAt(0) !== `□`){
          li.className = "done";
        }
        li.innerHTML = li.innerHTML.slice(2);
        const ul = document.querySelector('ul');
        ul.appendChild(li);
      }
    };
    reader.readAsText(file);
  });
});
