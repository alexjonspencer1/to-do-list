import Component from '../Component.js';
import Header from './Header.js';
import ToDoForm from '../to-do-items/TodoForm.js';
import ToDoList from '../to-do-items/ToDoList.js';
import { getTodos, addTodo, updateTodo, removeTodo } from '../../services/todo-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const toDoForm = new ToDoForm ({
            onAdd: todo => {
                return addTodo(todo)
                    .then(saved => {
                        const todos = this.state.todos;
                        todos.push(saved);
                        todoList.update({ todos });
                    });    
            }

        });
        main.appendChild(toDoForm.renderDOM());

        const todoList = new ToDoList({
            todos: [],
            onUpdate: todo => {
                return updateTodo(todo)
                    .then(updated => {
                        const todos = this.state.todos;
                        const index = todos.indexOf(todo);
                        todos.splice(index, 1, updated);

                        todoList.update({ todos });
                    });
                    
            },

            onRemove: todo => {
                return removeTodo(todo.id)
                    .then(() => {
                        const todos = this.state.todos;
                        const index = todos.indexOf(todo);
                        todos.splice(index, 1);

                        todoList.update({ todos });
                    });
            }
        });
        main.appendChild(todoList.renderDOM());

        getTodos({ showAll: true })
            .then(todos => {
                this.state.todos = todos;
                todoList.update({ todos });
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderHTML() {
        return /*html*/`
            <div id="root">
            <!-- Header goes here --!>
            <main>
            </main>
            </div>
        `;
    }
}

export default App;