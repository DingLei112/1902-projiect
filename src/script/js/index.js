;
//轮播
(function() {
    var $btn = $('ol li');
    var $img = $('.pic_list li');
    var $right = $('#btn_right');
    var $left = $('#btn_left');
    var $timer = null;
    $btn.on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var $index = $btn.index($(this));
        $($img[$index]).animate({
            opacity: 1
        }).siblings().animate({
            opacity: 0
        });
    })
    $('.header_banner').mouseenter(function() {
        $right.show();
        $left.show();
        clearInterval(timer);
    });
    $('.header_banner').mouseleave(function() {
        $right.hide();
        $left.hide();
        timer = setInterval(function() {
            public();
        }, 2000)
    });

    $left.on('click', function() {
        var $index = $('.active').index();
        $index--;
        if ($index < 0) {
            $index = 4;
        }
        $($btn[$index]).addClass('active').siblings().removeClass('active');
        $($img[$index]).stop(true).animate({
            opacity: 1
        }).siblings().animate({
            opacity: 0
        });
    })

    function public() {
        var $index = $('.active').index();
        $index++;
        if ($index > 4) {
            $index = 0;
        }
        $($btn[$index]).addClass('active').siblings().removeClass('active');
        $($img[$index]).stop(true).animate({
            opacity: 1
        });
        $($img[$index]).siblings().animate({
            opacity: 0
        });
    }
    $right.on('click', function() {
        public();
    })
    timer = setInterval(function() {
        public();
    }, 3000);

})();
// 二级导航
(function() {
    var $li = $(".header_logo_search ul li");
    var $secondnav = $('.second_nav');
    $li.hover(function() {
            var $height = ($(this).find('div').length - 1) * 40;
            $(this).find($secondnav).stop(true).show().animate({
                height: $height
            });
        },
        function() {
            $(this).find($secondnav).animate({
                height: 0,
            }).hide();
        }
    );
})();
//倒计时
(function() {
    setInterval(function() {
        var futureTime = new Date('2019/5/15 5:00:00');
        var currentTime = new Date();
        var leadTime = parseInt((futureTime - currentTime) / 1000);
        var hour = parseInt(leadTime % 86400 / 3600);
        if (hour < 10) {
            hour = '0' + hour;
        };
        var min = parseInt(leadTime % 3600 / 60);
        if (min < 10) {
            min = '0' + min;
        };
        var sec = leadTime % 60;
        if (sec < 10) {
            sec = '0' + sec;
        };
        var $time = $(' section .content_title .count_down .time');
        var $minute = $(' section .content_title .count_down .minute');
        var $seconds = $(' section .content_title .count_down .seconds');
        $time.html(hour);
        $minute.html(min);
        $seconds.html(sec);
    }, 1000)
})();
//回到顶部
(function() {
    var $button = $('.online_show .back_top a');
    $button.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    })
})();
//搜索框
(function() {
    var $search = $('.header_search .bottom_Tab');
    $search.on('focus', function() {
        $(this).val('');
    });
    $search.on('blur', function() {
        $(this).val('搜“麻衬衫”，体验与众不同');
    });
})();
(function() {
    //1.拼接数据
    $.ajax({
        url: 'http://10.31.163.13/JS1902/projectname/php/indexone.php',
        dataType: 'json'
    }).done(function(data) {
        var $html = '<ul>';
        console.log(data);
        $.each(data, function(index, value) {
            $html += `
                    <li>
                        <a href="details.html?sid=${value.pid}" target="_blank">
                            <img class="lazy" data-original="${value.url}">
                            <div class="list_title">
                                <span class="title_one">${value.title}</span>
                            </div>
                            <div class="list_price">
                                <span class="old_list_price">
                                        ￥
                                        <em>118</em>
                                </span>
                                <span class="new_list_price">
                                        ￥
                                        <em>${value.price}</em>
                                </span>
                                <span class="vip_price">
                                    充值后
                                    <em>${value.vipprice}</em>
                                    元
                                </span>
                            </div>
                        </a>
                    </li>
            `;
        });
        $html += '</ul>';
        $('.list').html($html);
    });

    //2.拼接数据
    $.ajax({
        url: 'http://10.31.163.13/JS1902/projectname/php/indextwo.php',
        dataType: 'json'
    }).done(function(data) {
        console.log(data);
        var $html = '';
        $.each(data, function(index, value) {
            $html += `
                    <tr>
                    <td>
                    <a href="details.html?sid=${value.pid}" target="_blank">
                            <img class="lazy" data-original="${value.url}" alt="T恤 本广 威尼斯2 白色">
                        </a>
                    </td>
                    <td>
                        <img class="lazy" data-original="http://i1.vanclimg.com/cms/20190228/sy0228g_18.jpg" alt="">
                    </td>
                </tr>
            `;
            console.log($html)
        });
        $('.shopping_list').html($html);
    });
})();
//搜索引擎
(function() {
    var $in = $('.header_search .bottom_Tab');
    $in.on('input', function() {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + $in.val() + '&_ksTS=1555472050779_604&callback=jsonp605&k=1&area=c2c&bucketid=7',
            dataType: 'jsonp',
            success: function(data) {
                var $str = '';
                $.each(data.result, function(index, value) {
                    $str += `
                            <li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${value[0]}">${value[0]}</a></li >
                        `;
                })
                $('.pull-down').html($str); //ul是显示的列表
            }
        })
    })
    $('html,body').on('click', function() {
        $('.pull-down').html('');
    });
})();