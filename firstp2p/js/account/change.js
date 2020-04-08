
  $.ajax({
    url: 'https://www.easy-mock.com/mock/5e8346e0af7a735d802f8069/api/getUserInfo',
    data: {
      user_name: '123',
      type: '2',
    },
    type: 'GET',
    dataType: 'json',
    success: function (e) {
      const { data } = e;
      if (e.errno === 0) {
        $('.power').click(function (e) {
          if ($('.input1').val() != data.password) {
            e.preventDefault();
            $('.hidden').css('display', 'inline-block')
          }
          if ($('.input2').val() != $('.input3').val()) {
            e.preventDefault();
          }
          if ($('.input2').val().length !== 6) {
            e.preventDefault();
          }
        })
      }else{
        window.location.href = '../../components/error_end.html';
      }
    },
    error: function (e) {
      window.location.href = '../../components/error_end.html';
    }
  })