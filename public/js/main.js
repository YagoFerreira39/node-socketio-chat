const socket = io();

const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')

// Message from server
socket.on('message', (message) => {
  outputMessage(message)

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
})

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  const message = e.target.elements.msg.value;

  // Emit message to server
  socket.emit('chatMessage', message)
})

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">Yago Ferreira <span>7:28am</span></p>
  <p class="text">${message}</p>`;

  document.querySelector('.chat-messages').appendChild(div);
}