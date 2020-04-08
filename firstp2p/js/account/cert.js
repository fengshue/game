  $.ajax({
    url: 'https://www.easy-mock.com/mock/5e8346e0af7a735d802f8069/api/getUserInfo',
    data: {
      user_name: '123',
      type: '2', 
    },
    type: 'GET',
    dataType: 'json',
    success: function (e) {
      if (e.errno === 0) { 
        $('.cert-one').css('display','none');
        $('.cert-two').css('display','block')
      } else {
        $('.cert-one').css('display','block');
        $('.cert-two').css('display','none');
      }
    }, 
    error: function (e) {
      window.location.href = '../../components/error_end.html';
    }
  })


