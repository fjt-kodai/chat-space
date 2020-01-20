$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
        `<div class = "messageList__messageBox" data-message-id = ${message.id}>
          <div class = "messageList__infoBox">
            <p class = "messageList__name">
              ${message.user_name}
            </p>
            <p class = "messageList__dateAndTime">
              ${message.created_at}
            </p>
          </div>
          <div class = "messageList__bodyBox">
            <p class = "messageList__message">
              ${message.body}
            </p>
            <image src = ${message.image} class = "messageList__image">
          </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class = "messageList__messageBox" data-message-id = ${message.id}>
          <div class = "messageList__infoBox">
            <p class = "messageList__name">
              ${message.user_name}
            </p>
            <p class = "messageList__dateAndTime">
              ${message.created_at}
            </p>
          </div>
          <div class = "messageList__bodyBox">
            <p class = "messageList__message">
              ${message.body}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $("#new_message").on('submit', function(e){
    e.preventDefault()

    var formData = new FormData(this);
    var url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messageList').append(html);
      $('.messageList').animate({scrollTop: $('.messageList')[0].scrollHeight});
      $('.messageForm__form')[0].reset();
      $('.messageForm__submitBtn').prop('disabled', false);
    })

    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  })
});