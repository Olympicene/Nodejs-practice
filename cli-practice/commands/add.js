import config from 'conf';
import chalk from 'chalk';

const conf = new config();

export function add(task) {
  //get currect todo-list
  let todosList = conf.get('todo-list');

  if (!todosList) {
    //default value for todos-list
    todosList = [];
  }

  //puhs new task to the todolis
  todosList.push({
    text: task,
    done: false,
  });

  conf.set('todo-list', todosList);

  console.log(chalk.green.bold('Task has been added successfully!'));
}
