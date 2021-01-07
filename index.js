// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');


tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        console.log(target);
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })

    })
})

// modal about
const about = document.querySelector('#about');
const modal_about = document.querySelector('#modal-about');
const closeAboutBtn = document.querySelector('#close-about');


about.addEventListener('click', () => {
    modal_about.classList.add('is-active');
});

closeAboutBtn.addEventListener('click', () => {
    modal_about.classList.remove('is-active');
})

// modal fiori_details
const fiori_details = document.querySelector('#fiori_details');
const modal_fiori = document.querySelector('#modal_fiori');
const closeFioriBtn = document.querySelector('#close-fiori');


fiori_details.addEventListener('click', () => {
    modal_fiori.classList.add('is-active');
});

closeFioriBtn.addEventListener('click', () => {
    modal_fiori.classList.remove('is-active');
})

// modal frutta_details
const frutta_details = document.querySelector('#frutta_details');
const modal_frutta = document.querySelector('#modal_frutta');
const closeFruttaBtn = document.querySelector('#close-frutta');


frutta_details.addEventListener('click', () => {
    modal_frutta.classList.add('is-active');
});

closeFruttaBtn.addEventListener('click', () => {
    modal_frutta.classList.remove('is-active');
})

// modal signup
const signUpButton = document.querySelector('#signup');
const modal_signup = document.querySelector('#modal-signup');
const closeSignupBtn = document.querySelector('#close-signup');


signUpButton.addEventListener('click', () => {
    modal_signup.classList.add('is-active');
});


closeSignupBtn.addEventListener('click', () => {
    modal_signup.classList.remove('is-active');
})

// modal signin
const signInButton = document.querySelector('#signin');
const modal_signin = document.querySelector('#modal-signin');
const closeSignInBtn = document.querySelector('#close-signin');


signInButton.addEventListener('click', () => {
    modal_signin.classList.add('is-active');
});


closeSignInBtn.addEventListener('click', () => {
    modal_signin.classList.remove('is-active');
})
