import Component from '../Component.js';
import Header from './Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
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