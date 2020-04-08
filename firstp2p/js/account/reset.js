var a = 60;
var timer;
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
          if ($('.input1').val() != data.ertificates) {
            e.preventDefault();
            $('.hidden').css('display', 'inline-block')
          }
          if ($('.input2').val() != data.phone) {
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



function text() {
    timer = setInterval(function () {
      --a;
      $('.ma').html(a + 's')
      if (a == 0) {
        clearInterval(timer);
        $('.ma').html('重新发送');
        a = 60;
      }
    }, 1000)
  }
  
  $('.ma').on('click', text);
  
  
  $('.ma').on('click', function (e) {
    e.preventDefault();
    console.log('表单提交');
  });