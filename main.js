$( document ).ready(function() {
    $('.expert_block .expert_img').hover(function(){
        $(this).parent().find('.expert_text a').css('color','#ef0979');
    },function(){
        $(this).parent().find('.expert_text a').css('color','#333');
    });
});

