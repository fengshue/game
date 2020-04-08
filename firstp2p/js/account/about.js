(function () {
  var a = 60;
  var timer;
  const certificates_type = {
    1: '身份证',
    2: '护照',
    3: '港澳通行证',
    4: '军人证件',
  };


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
      if(e.errno === 0){
        $('.JS_userName').text(data.user_name || '');
        $('.JS_certificates_type').text(certificates_type[Number(data.certificates_type)] || certificates_type[1]);
        $('.JS_certificates_number').text(data.certificates_number || '');
        $('.JS_certModal').css('visibility', 'visible');
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
  
  // $('.JS_form').on('click', function (e) {
  //   e.preventDefault();
  // }).off('click').click(function() {
  //   console.log("OK")
  // });

  $('.ma').on('click', function (e) {
    e.preventDefault();
    console.log('表单提交');
  });
  
  
  $('.power').click(function(e){
    if($('.input2').val().length != 6){
      e.preventDefault();
      $('.hidden').css('display', 'inline-block')
    }
    if($('.input1').val().length != 11){
      e.preventDefault();
    }
    if($('.input3').val().length == ''){
      e.preventDefault();
    }
    if($('.input3').val().length != $('.input4').val().length){
      e.preventDefault();
    }
  })
}())