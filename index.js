const apikey = document.querySelector(".apikey")
const textarea = document.querySelector("textarea")
const article = document.querySelector('article');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', captureFormValue)

// function captureFormValue(e) {
//     e.preventDefault();

//     let storeApi = apikey.value;
//     let textValue = textarea.value; 

//     apikey.value = '';
//     textarea.value = ''; 

//     const data = { storeApi, textValue } 
//     console.log(data);
//     fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {"content-type": "application/json"},
//     })
// }

function captureFormValue(e) {
    e.preventDefault();

    let storeApi = apikey.value;
    let textValue = textarea.value; 

    apikey.value = '';
    textarea.value = ''; 
    

    const data = { messages: [{ role: 'user', content: textValue}], model: "gpt-3.5-turbo" }; // Assuming textValue is the prompt for the OpenAI API
    console.log(data);
    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${storeApi}` // Include the API key here
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Failed:', data);
        // Process the response data as needed
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


