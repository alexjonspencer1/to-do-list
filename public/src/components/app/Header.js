import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header class="header">
                <img src="" alt="">
                <h1>Productivity List</h1>
                <p>mark 'em off one by one</p>
            </header>
        `;
    }
}

export default Header;