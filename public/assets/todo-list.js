$(document).ready(function(){

    $('form').on('submit',function(){
      var item = $('form input');
      console.log('is js file');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,

        success: function(data){
          location.reload();
        }
      });

      return false;
    });
});
