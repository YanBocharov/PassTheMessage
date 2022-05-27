let messageInput = document.getElementById('message-input');

messageInput.addEventListener('keydown', function(event){
    if(event.key == 'Enter') {
        getMessege();
    }
});

function getMessege() {
    document.getElementById('message-output').innerHTML = messageInput.value;
    messageInput.value = "";
}