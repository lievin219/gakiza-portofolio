"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__list");
    const loginDiv = document.querySelector('.nav__login');
    const Admin = document.querySelector('.admin');
    const Form = document.getElementById('form');
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    const updateUserUI = (user) => {
        if (user && user.username) {
            if (user.isAdmin === true) {
                Admin.innerHTML = `
                    <a href="#" class="nav__link">
                        Admin <i class="fas fa-chevron-down"></i>
                    </a>
                    <ul class="dropdown-content">
                        <li><a href="/query">Query</a></li>
                        <li><a href="/article">Article</a></li>
                    </ul>
                `;
            }
            else {
                Admin.innerHTML = '';
            }
            loginDiv.innerHTML = `
                <a href="#" class="nav__link">
                    ${user.username}
                </a>
                <ul class="dropdown-content">
                    <li><a href="/profile/${user._id}">profile</a></li>
                    <li ><a id="logout" href="#">Logout</a></li>
                </ul>
            `;
        }
        else {
            loginDiv.innerHTML = `
                <a href="login.html" class="nav__link">
                    Sign in
                </a>
            `;
            Admin.innerHTML = '';
        }
    };
    document.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
        if (e.target instanceof HTMLElement && e.target.id === 'logout') {
            e.preventDefault();
            try {
                yield fetch('/logout', {
                    method: 'POST',
                    credentials: 'include'
                });
                updateUserUI(null);
                location.assign('/register');
            }
            catch (error) {
                console.error('Error logging out:', error);
            }
        }
    }));
    Form.addEventListener('submit', function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const formData = new FormData(this);
            try {
                const res = yield fetch('/blog', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                });
                const data = yield res.json();
                if (data.message) {
                    location.assign('/article');
                }
                else if (data.err) {
                    console.log(data.err);
                }
                else {
                    console.log('there is an error');
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    });
    fetch('/api/user', { credentials: 'include' })
        .then(response => response.json())
        .then(user => updateUserUI(user))
        .catch(error => console.error('Error fetching user data:', error));
});