var a = 6;
var timer;





function text() {
  timer = setInterval(function () {
    --a;
    $('.ma').html(a + 's')
    if (a === 0) {
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
