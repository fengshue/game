(function () {
  $.ajax({
    url: 'https://www.easy-mock.com/mock/5e8346e0af7a735d802f8069/api/getUserInfo',
    data: {
      user: $('.input-one').val(),
    },
    type: 'POST',
    dataType: 'json',
    success: function (e) {
      if (e.errno === 0) {
        $('.biao').click(function () {
          $('.JS_successModal2').css('visibility', 'visible');
        });
        $('.JS_successCancel-two').click(function () {
          $('.not').css('visibility', 'hidden');
          $('.JS_successModal2').css('visibility', 'hidden');
        });
        $('.JS_successConfirm2').click(function () {
          if (e.errno === 0) {
            $('.not').css('visibility', 'hidden');
            $('.JS_successModal2').css('visibility', 'hidden');
          } else {
            $('.not').css('visibility', 'visible');
          }
        })
      } else {
        $('.biao').click(function () {
          $('.JS_certModal2').css('visibility', 'visible');
        });

        $('.JS_certBtn2').click(function () {
          $('.JS_certModal2').css('visibility', 'hidden');
          window.location.href = '../../container/account/about.html';
        });
        $('.JS_certModal_cancel2').click(function () {
          $('.JS_certModal2').css('visibility', 'hidden');
        });
      }
    },
    error: function (e) {
      // window.location.href = '../../components/error_end.html';
    }
  })


  // 成功弹窗

}());