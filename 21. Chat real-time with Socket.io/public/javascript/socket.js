$(function () {
  var socket = io();
  $('form').submit(function(e){
    e.preventDefault();
    socket.emit('chat name', $('.nickname').val());
    socket.emit('chat message', $('.box-message').val());
    $('.box-message').val('');
    return false;
  });

  socket.on('chat name', function(name){
      const messages = document.querySelectorAll('.each-message');
      messages[messages.length-1].innerHTML += '<li class="name">'+name+'</li>';
  });

  socket.on('chat message', function(message){
      const li = document.createElement('li');
      li.setAttribute('class', 'name-message');
      li.innerHTML += '<li class="message">'+message+'</li>';
      const messages = document.querySelector('.each-message');
      messages.appendChild(li);
  });
});
