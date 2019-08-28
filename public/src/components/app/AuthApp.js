import Component from '../Component.js';
import Header from '../app/Header.js';
import SignUp from '../auth/SignUp.js';
import SignIn from '../auth/SignIn.js';
import { userSignUp, userSignIn } from '../../services/todo-api.js';
import store from '../../services/store.js';


function success(user) {
    store.setToken(user.token);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './index.html';
}

class AuthApp extends Component {
    
    onRender(dom) {
        const switchToSignIn = dom.querySelector('#signin-button');
        const switchToSignUp = dom.querySelector('#signup-button');

        const header = new Header();
        dom.prepend(header.renderDOM());

        const errors = dom.querySelector('.errors');
        const signUpContainer = dom.querySelector('#signup-container');
        const signInContainer = dom.querySelector('#signin-container');

        const signUp = new SignUp({
            onSignUp: newUser => {
                errors.textContent = '';

                return userSignUp(newUser)
                    .then(user => {
                        success(user);
                    })
                    .catch(err => {
                        errors.textContent = err;
                    });
            }
        });

        signUpContainer.appendChild(signUp.renderDOM());

        const signIn = new SignIn({
            onSignIn: credentials => {
                errors.textContent = '';

                return userSignIn(credentials)
                    .then(user => {
                        success(user);
                    })
                    .catch(err => {
                        errors.textContent = err;
                    });
            }
        });
        signInContainer.appendChild(signIn.renderDOM());

        
        switchToSignIn.addEventListener('click', () => {
            signInContainer.classList.remove('no-display');
            signUpContainer.classList.add('no-display');
            
        });
        
        switchToSignUp.addEventListener('click', () => {
            signUpContainer.classList.remove('no-display');
            signInContainer.classList.add('no-display');
            
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    <section class="form-container">
                        <section class="no-display" id="signup-container">
                            <p class="switch">
                                <button id="signin-button">Already a User?</button>
                            </p>
                        </section>
                        <section id="signin-container">
                            <p class="switch">
                                <button id="signup-button">Need to create an Account?</button>
                            </p>
                        </section>
                    <p class="errors"></p>
                    </section>
                    
                </main>
            </div>
        `;
    }
}

export default AuthApp;