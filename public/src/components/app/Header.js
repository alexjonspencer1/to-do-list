import Component from '../Component.js';
import store from '../../services/store.js';

class Header extends Component {

    onRender(dom) {
        const logoutButton = dom.querySelector('#log-out');

        logoutButton.addEventListener('click', () => {
            store.removeToken();
            window.location = 'auth.html';
        })
    }

    renderHTML() {
        return /*html*/`
            <header class="header">
                <img src="" alt="">
                <h1>Productivity List</h1>
                <p>mark 'em off one by one</p>
                <button id="log-out">Logout</button>
            </header>
        `;
    }
}

export default Header;