const textarea = document.querySelector("textarea")
const article = document.querySelector('article');
const submitBtn = document.querySelector('button');
const response = document.querySelector('.response');
const openai = new OpenAI({ apikey: process.env.OPEN_API_KEY,
});
console.log(response);

submitBtn.addEventListener('click', captureFormValue)
.get 
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
let conversationHistory = [];
function captureFormValue(e) {
    e.preventDefault();

let textValue =textarea.value;
textarea.value = '';

conversationHistory.push({role: 'user', content: textValue });


 const aiAPI = 'https://api.openai.com/v1/chat/completions';  

    const data = {  model: "gpt-4", messages: [{
        role: 'system',
        content: "You are a helpful AI assistant.",
    }, {
        role: 'user',
        content: textValue,
    },], }; // Assuming textValue is the prompt for the OpenAI API
    console.log(data);
    fetch(aiAPI, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${OPEN_API_KEY}` // Include the API key here
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        // Accessing the content of the message
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            const aiResponse = data.choices[0].message.content; // ADDED AI RESPONSE VARIABLE 
            conversationHistory.push({ role: 'system', content: aiResponse}); //PUSH BOT REPLY INTO HISTORY ARRAY 
            response.innerHTML = "Answer:" + "  " + data.choices[0].message.content;
            
            console.log('Message Content:', data.choices[0].message.content);
            // You can process or display this content as needed
        } else {
            console.log('No message content available');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
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

// choices.message.content