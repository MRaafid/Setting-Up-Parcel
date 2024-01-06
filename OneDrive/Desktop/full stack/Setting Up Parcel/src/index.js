import { addTask, getTasks } from './model';
import render from './view';
// Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}

const addTaskInput = document.querySelector('#add-task-input');
const taskList = document.querySelector('.task-list');

addTaskInput.addEventListener('keyup', evt => {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    const newTask = evt.target.value;
    if (newTask) {
      addTask(newTask);
      evt.target.value = '';
      render(getTasks(), taskList);
    }
  }
});
