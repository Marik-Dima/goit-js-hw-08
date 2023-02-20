import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';
let feedbackFormData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

populateForm();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input',throttle(onFormInput,500));

function onFormSubmit(e) { 
    e.preventDefault();
    console.log(feedbackFormData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    feedbackFormData = {};
}


function onFormInput(e) { 
    feedbackFormData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
    // console.log(localStorage.getItem(STORAGE_KEY));
}

function populateForm() { 
    const parsedData = localStorage.getItem(STORAGE_KEY);
    if (parsedData) {
        const formKeys = JSON.parse(parsedData);
        if (formKeys.email !== undefined) refs.input.value = formKeys.email;
        if (formKeys.message !== undefined) refs.textarea.value = formKeys.message;
    }
}