var a = 6;
var timer;

$('.ask').click(function(){
  $('.cert').css('display','none');
  $('.about').css('display','block');
})



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
