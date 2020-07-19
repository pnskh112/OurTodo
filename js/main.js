window.onload = function main(){
  const buttonList = document.querySelectorAll('button');
  [...buttonList].forEach((button) => {
    button.addEventListener('click', () => {
      const li = button.closest('li');
      li.classList.add('done');
    });
  });
}


function exportTodolist(){
  const Todolist = document.querySelectorAll('li');
  const nodeItem = {value:""};
  for(let i=0;i < Todolist.length; i++){
    nodeItem.value += (Todolist[i].textContent + `\n`)
  }

  // ファイル出力の実装
  const blob = new Blob([nodeItem.value],{type:"text/plan"});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '作ったファイル.txt';
  link.click();
}




