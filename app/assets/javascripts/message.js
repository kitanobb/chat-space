$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<article class="messages__unit">
          <div class="messages__username">
            ${message.user_name}
            <div class="messages__date">
              ${message.created_at}
            </div>
          </div>
          <div class="messages__text">
            <p class="messages__text">
              ${message.body}
            </p>
            <img src=${message.image} class="lower-message__image" >
          </div>
        </article>`
      return html;
    } else {
      var html =
        `<article class="messages__unit">
          <div class="messages__username">
            ${message.user_name}
            <div class="messages__date">
              ${message.created_at}
            </div>
          </div>
          <div class="messages__text">
            <p class="messages__text">
              ${message.body}
            </p>
          </div>
        </article>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
        $('.post-form__snd-btn').prop('disabled', false);
        $('form')[0].reset();
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
        $('.post-form__snd-btn').prop('disabled', false);
      });
  })
});