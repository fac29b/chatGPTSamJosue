const apikey = document.querySelector(".apikey")
const textarea = document.querySelector("textarea")
const article = document.querySelector('article');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', captureFormValue)

function captureFormValue(e) {
    e.preventDefault();

    let storeApi = apikey.value;
    let textValue = textarea.value; // Capture the value in a separate variable

    apikey.value = '';
    textarea.value = ''; // Clear the textarea

    const data = { storeApi, textValue } // Use textValue here
    console.log(data);
}
