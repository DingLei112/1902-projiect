;
(function() {
    var $agree = $('.agree');
    var $zhuce = $('.vancl_registor')
    $agree.on('click', function() {
        if ($agree.prop('checked')) {

            $zhuce.css({
                'background': '#b52024',
                'border-color': '#b52024'

            })
        } else {

            $zhuce.css({
                'background': '#9A9A9A',
                'border-color': '#9A9A9A'
            })
        }
    })

})();
(function() {
    var $cod = $('._code_')
    var code = "";
    var codeLength = 4; //验证码的长度      
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
    for (var i = 0; i < codeLength; i++) { //循环操作     
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
        code += random[index]; //根据索引取得随机数加到code上     }  
        $cod.val(code);
    }
})();

(function() {
    var inputCode = $("._code").val().toUpperCase(); //取得输入的验证码并转化为大写         
    if (inputCode != "" && inputCode != code) { //若输入的验证码与产生的验证码不一致时
        $(".PasswordError").text("验证码输入错误");
        $("._code").val(""); //清空文本框    
    } else { //输入正确时      
        $(".PasswordError").text("");
    }
})();