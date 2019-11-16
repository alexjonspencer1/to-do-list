import Component from '../Component.js';
import Todo from '../to-do-items/Todo.js';

class ToDoList extends Component {

    onRender(list) {
        const todos = this.props.todos;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        todos.forEach(todo => {
            const toDoItem = new Todo ({ todo, onUpdate, onRemove });
            list.appendChild(toDoItem.renderDOM());

        });
    }

    renderHTML() {
        return /*html*/`
            <ul>
            </ul>
        `;
    }
}

export default ToDoList;