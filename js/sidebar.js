
//頁面
var dashboardPage = $('#側邊欄-頁面-總覽');
var findRetailerPage = $('#側邊欄-頁面-尋找銷售點')
var aboutPage = $('#側邊欄-頁面-關於')
var retailerPage = $('#側邊欄-頁面-檢視藥局')

//按鈕
var findRetailerBtn = $('#側邊欄-尋找銷售點');
var aboutBtn = $('#nav-右-關於');
var navBackBtn = $('#nav-左-返回總覽');

//按鈕
//導覽列返回
navBackBtn.click(function() {
    aboutPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    findRetailerPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    retailerPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    dashboardPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
});

//總覽-尋找銷售點
findRetailerBtn.click(function() {
    dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    findRetailerPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
});

//總覽-關於
aboutBtn.click(function() {
    dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    aboutPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
});

//尋找銷售點-檢視藥局
// aboutBtn.click(function() { //隨選項變動
//     dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
//     retailerPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
// });




//----- 行動版側邊欄
var supportTouch = $.support.touch,
    scrollEvent = "touchmove scroll",
    touchStartEvent = supportTouch ? "touchstart" : "mousedown",
    touchStopEvent = supportTouch ? "touchend" : "mouseup",
    touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
$.event.special.swipeupdown = {
    setup: function() {
        var thisObject = this;
        var $this = $(thisObject);
        $this.bind(touchStartEvent, function(event) {
            var data = event.originalEvent.touches ?
                event.originalEvent.touches[ 0 ] :
                event,
                start = {
                    time: (new Date).getTime(),
                    coords: [ data.pageX, data.pageY ],
                    origin: $(event.target)
                },
                stop;

            function moveHandler(event) {
                if (!start) {
                    return;
                }
                var data = event.originalEvent.touches ?
                    event.originalEvent.touches[ 0 ] :
                    event;
                stop = {
                    time: (new Date).getTime(),
                    coords: [ data.pageX, data.pageY ]
                };

                // prevent scrolling
                if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                    event.preventDefault();
                }
            }
            $this
                .bind(touchMoveEvent, moveHandler)
                .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                            Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                            Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                .trigger("swipeupdown")
                                .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
        });
    }
};
$.each({
    swipedown: "swipeupdown",
    swipeup: "swipeupdown"
}, function(event, sourceEvent){
    $.event.special[event] = {
        setup: function(){
            $(this).bind(sourceEvent, $.noop);
        }
    };
});

if ($(window).width() <= 800) {
    if ($('#側邊欄').hasClass ('側邊欄-行動版_展開')) {


        if ($('#側邊欄-內容').scrollTop() <=0) {
            $('#側邊欄').removeClass('側邊欄-行動版_展開');
        };


    } else {
        $('#側邊欄').on('mousedown', function(){
            console.log('滑動！')
            $('#側邊欄').addClass('側邊欄-行動版_展開');
        });

        $('#側邊欄').on('swipeup', function(){
            console.log('往上滑！')
            $('#側邊欄').addClass('側邊欄-行動版_展開');
        });
    };
}

//----- 彈出視窗
var popWinBox = $('#彈出視窗')
var popWinContent = $('#彈出視窗-視窗-內容')
var popWinDissmiss= $('#彈出視窗-視窗-按鈕')

$('#側邊欄-最近更新').click(function () {
    popWindow('這是您開啟口罩地圖時，網站檢查口罩存量資訊的時間。網站上的資訊不會自動更新，您必須重新進入網站，才能取得最新資訊。','瞭解了');
});

$('#nav-右-最後更新').click(function () {
    popWindow('這是您開啟口罩地圖時，網站檢查口罩存量資訊的時間。網站上的資訊不會自動更新，您必須重新進入網站，才能取得最新資訊。','瞭解了');
});

function popWindow(content,buttonText) {
    popWinBox.addClass('彈出視窗_顯示').removeClass('彈出視窗_關閉')
    popWinContent.text(content)
    popWinDissmiss.text(buttonText)
}

$('#彈出視窗-視窗-按鈕').click(function (){
    popWinBox.addClass('彈出視窗_關閉').removeClass('彈出視窗_顯示')
})

$('#彈出視窗').click(function (){
    popWinBox.addClass('彈出視窗_關閉').removeClass('彈出視窗_顯示')
})


//----- 下拉選單
$(document).click(function(e) {
    if($(e.target).closest('.側邊欄-過濾-城市-按鈕').length != 1 && $(e.target).closest('.側邊欄-過濾-地區-按鈕').length != 1)
    {
        if($('#側邊欄-過濾-城市-下拉選單').hasClass("下拉選單_展開") || $('#側邊欄-過濾-地區-下拉選單').hasClass("下拉選單_展開")){

            if($(e.target).closest('.下拉選單_展開').length == 0){
                $('#側邊欄-過濾-城市-下拉選單').addClass('下拉選單_收起').removeClass('下拉選單_展開');
                $('#側邊欄-過濾-地區-下拉選單').addClass('下拉選單_收起').removeClass('下拉選單_展開');
            }
        }
    }
    else
    {
        if($(e.target).closest('.側邊欄-過濾-城市-按鈕').length == 1)
        {
            $('#側邊欄-過濾-地區-下拉選單').addClass('下拉選單_收起').removeClass('下拉選單_展開');
        }

        if($(e.target).closest('.側邊欄-過濾-地區-按鈕').length == 1)
        {
            $('#側邊欄-過濾-城市-下拉選單').addClass('下拉選單_收起').removeClass('下拉選單_展開');
        }
    }
});

$('#側邊欄-過濾-城市').click(function (){
    $('#側邊欄-過濾-城市-下拉選單').addClass('下拉選單_展開').removeClass('下拉選單_收起');
});

$('#側邊欄-過濾-地區').click(function (){
    $('#側邊欄-過濾-地區-下拉選單').addClass('下拉選單_展開').removeClass('下拉選單_收起');
});


//----- 分享與在地圖開啟
//在地圖開啟
var currentUrl = $(location). attr("href");

// $('#側邊欄-檢視藥局-底部按鈕-在地圖開啟').click(function (){
//     //https://www.google.com.tw/maps/@[經度],[緯度]
//     //window.open(getUrl +, '_blank');
// });

//分享
$('#側邊欄-檢視藥局-底部按鈕-分享').click(function (){
    $('#分享視窗').addClass('分享視窗_顯示').removeClass('分享視窗_關閉','分享視窗_預設');
})

$('#分享視窗-分享-社群-Facebook').click(function (){
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + currentUrl, '_blank');
});

$('#分享視窗-分享-社群-Twitter').click(function (){
    window.open("https://twitter.com/intent/tweet?text=" + currentUrl, '_blank');
});

$('#分享視窗-分享-社群-LINE').click(function (){
    window.open("https://social-plugins.line.me/lineit/share?url=" + currentUrl, '_blank');
});

$('#分享視窗-分享-網址-網址他自己').val(currentUrl)

$('#分享視窗-分享-網址').click(function (){
    $('#分享視窗-分享-網址-網址他自己').val(currentUrl)
    $('#分享視窗-分享-網址-網址他自己').select();
    document.execCommand("copy");
})

$('#分享視窗-視窗-按鈕').click(function (){
    $('#分享視窗').addClass('分享視窗_關閉').removeClass('分享視窗_顯示')
})

$('#分享視窗').click(function (){
    $('#分享視窗').addClass('分享視窗_關閉').removeClass('分享視窗_顯示')
})