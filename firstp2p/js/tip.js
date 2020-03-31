$('.ask').click(function(){
    $('.wrapper').css('display','none');
    setTimeout(function(){
        $('.success').css('display','block');
    },300)
})
$('.btn2').click(function(){
    $('.wrapper').css('display','none');
})
$('.affirm').click(function () {
    $('.success').css('display','none');
})
$('.title-right').click(function () {
    $('.success').css('display','none');
})