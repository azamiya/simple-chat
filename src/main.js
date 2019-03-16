const socket = io();

const form = document.getElementById('form')
const messageInput = document.getElementById('messageInput')
const messages = document.getElementById('messages')

const handleSubmit = event => {
  event.preventDefault();
  socket.emit('chat message', messageInput.value)
  messageInput.value="";
}

const handleReceiveMessage = message => {
  const node = document.createElement("LI")
  const textnode = document.createTextNode(message)
  node.appendChild(textnode)
  messages.appendChild(node)
}

form.addEventListener('submit', handleSubmit)

socket.on('chat message', handleReceiveMessage)