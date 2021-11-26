import config from 'conf';
import chalk from 'chalk';

const conf = new config();

export function markDone({ tasks }) {
  let todoList = conf.get('todo-list');

  if (todoList) {
    //loop over the todo list tasks
    todoList = todoList.map((task, index) => {
      
      //chec kuser specified the task to mark done
      if (tasks) {
        //check if this task is one of the tasks the user specified
        if (tasks.indexOf(index.toString()) !== -1) {
          task.done = true;
        }
      } else {
        //if user didn't specify tasks, mark all as done
        task.done = true;
      }

      return task;
    });

    conf.set('todo-list', todoList);
  }
  console.log(chalk.green.bold('Tasks have been marked as done successfully'));
}
