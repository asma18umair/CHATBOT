var chatBox = document.getElementById('chat-box');
var userInput = document.getElementById('user-input');
var sendBtn = document.getElementById('send-btn');


var responses = {
    'hi': 'hello',
    'hello' : 'hi',
    'how are you': 'fine',
    'bye': 'Goodbye! Have a great day!',
    'how is everyone at home': 'Everyone is doing well, thank you!',
    'apke exam hone wale the?': 'ji ji "dua krna khair se hojaye"',
    'allah kre tum kamiyab hojao': 'aameen',
    'what’s for dinner': 'We are having biryani for dinner today.',
    'what is your name': 'I am your friendly chatbot!',
    'what is the weather today': 'I am not sure about the weather. Please check a weather app.',
    'tell me a joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'assalam o alaikum': 'Walaikum assalam! ',
    'aap kese hain': 'alhamdulillah',
    'kam kaj kesa chal rha he': 'karam he allah ka achha chal rha hai',
    'khuda hafiz': 'Allah Hafiz! Aap ka din acha guzray!',
    'ghar mein sab kese hain': 'Sab khairiyat se hain, shukriya!',
    'khane mein kya bana hai': 'Aaj khane mein biryani bani hai.'
};


function addMessage(message, sender) {
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


sendBtn.onclick = function () {
    var message = userInput.value.toLowerCase().trim();
    if (message === '') return;
    addMessage(message, 'user');

   
    var botResponse = responses[message] || 'I am sorry, I didn\'t understand that.';
    setTimeout(function () {
        addMessage(botResponse, 'bot');
    }, 500);

    userInput.value = ''; 
};