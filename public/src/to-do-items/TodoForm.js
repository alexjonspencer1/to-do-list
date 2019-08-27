import Component from '../components/Component.js';

class TodoForm extends Component {

    onRender(dom) {
        const onAdd = this.props.onAdd;
        const form = dom.querySelector('form');
        const input = dom.querySelector('input');
        const error = dom.querySelector('.error');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const toDoItem = {
                name: input.value
            };

            error.textContent = '';

            onAdd(toDoItem)
                .then(() => {
                    form.reset();
                    document.activeElement.blur();
                })
                .catch(err => {
                    error.textContent = err;
                });
        });
    }

    renderHTML() {
        return /*html*/`
            <section class="input-form-section">
                <form class="section-container">
                    <div class="input-container">
                        Add your new to-do list item <input class="input" placeholder="Put a new task here!">
                        <button class="add-button">Add</button>
                    </div>
                    <p class="error">Example error</p>
                </form>
            </section>
            
        `;
    }
}

export default TodoForm;