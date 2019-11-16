import Todo from '../src/components/to-do-items/Todo.js';
const test = QUnit.test;

QUnit.module('To do item');

test('renders', assert => {
    // arrange
    const todo = {
        id: 1,
        name: 'test item',
        complete: false
    };

    const expected = /*html*/`
        <li class="item-container">
            <h2 class="item-header"><span class="">test item</span></h2>
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        </li>
    `;

    // act
    const todoItem = new Todo({ todo });
    const html = todoItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});

