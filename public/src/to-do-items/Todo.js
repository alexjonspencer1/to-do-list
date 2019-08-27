import Component from '../components/Component.js';

class Todo extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const completeButton = dom.querySelector('.complete-button');
        completeButton.addEventListener('click', () => {
            todo.complete = !todo.complete;
            onUpdate(todo);
        });

        const deleteButton = dom.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            if(confirm(`Are you sure this item is complete? No half-assed efforts!`)) {
                onRemove(todo);
            }
        })
    }


    renderHTML() {
        const todo = this.props.todo;
        return /*html*/`
            <li class="item-container">
                <h2 class="item-header"><span class="${todo.complete ? 'complete' : ''}">${todo.name}</span></h2>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </li>
        `;
    }
}

export default Todo;