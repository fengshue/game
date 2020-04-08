(function () {
  const certificates_type = {
    1: '身份证',
    2: '护照',
    3: '港澳通行证',
    4: '军人证件',
  };
  // 点击消费贷按钮，申请并授权弹窗打开
  $('.JS_invest').click(function (e) {
    $.ajax({
      url: 'https://www.easy-mock.com/mock/5e8346e0af7a735d802f8069/api/getUserInfo',
      data: {
        user_name: '123',
        type: '2', 
      },
      type: 'GET',
      dataType: 'json',
      success: function (e) {
        if (e.errno === 0) { //展示成功弹窗
          const { data } = e;
          $('.JS_userName').text(data.user_name || '');
          $('.JS_certificates_type').text(certificates_type[Number(data.certificates_type)] || certificates_type[1]);
          $('.JS_certificates_number').text(data.certificates_number || '');
          $('.JS_certModal1').css('visibility', 'visible');

        } else {// 跳转失败页面
          window.location.href = '../../components/error_end.html';
        }
      }, 
      error: function (e) {
        window.location.href = '../../components/error_end.html';
      }
    })
  });
  $('.JS_certBtn1').click(function () {
    $('.JS_certModal1').css('visibility', 'hidden');
    $('.JS_successModal1').css('visibility', 'visible');
  });
  $('.JS_certModal_cancel1').click(function () {
    $('.JS_certModal1').css('visibility', 'hidden');
  });


  // 成功弹窗
  $('.JS_successConfirm1').click(function () {
    $('.JS_successModal1').css('visibility', 'hidden');
  });
  $('.JS_successCancel1').click(function () {
    $('.JS_successModal1').css('visibility', 'hidden');
  });
}());





// $.ajax({
//   url: 'https://www.easy-mock.com/mock/5e8346e0af7a735d802f8069/api/getUserInfo',
//   data: {
//     user_name: '123',
//     type: '2', 
//   },
//   type: 'GET',
//   dataType: 'json',
//   success: function (e) {
//     if (e.errno === 0) { 
//       console.log(111)
//       $('.sign').addClass('yes');
//       $('.sign').removeClass('no');
//       $('.sign-set').html('修改')
//     } else {
//     console.log(222)

//       $('.sign').addClass('no');
//       $('.sign').removeClass('yes');
//     }
//   }, 
//   error: function (e) {
//     console.log(33)
//     $('.sign').removeClass('no');
//   }
// })
// newBtn2
