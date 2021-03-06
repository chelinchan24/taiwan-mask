//頁面
var dashboardPage = $('#側邊欄-頁面-總覽');
var findRetailerPage = $('#側邊欄-頁面-尋找銷售點')
var aboutPage = $('#側邊欄-頁面-關於')
var retailerPage = $('#側邊欄-頁面-檢視藥局')

//按鈕
var findRetailerBtn = $('#側邊欄-尋找銷售點');
var overhaulRetailerBtn = $('#側邊欄-區域狀況-內容-販售中藥局-右-瀏覽店家');
var aboutBtn = $('#nav-右-關於');
var navBackBtn = $('.nav-左-返回');
var dashboardAboutBtn = $('#側邊欄-關於口罩指南')
var retailerNavBackBtn = $('#側邊欄-頁面-檢視藥局-nav-返回');

//讀取畫面
$(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    function doneLoading() {
        $('#讀取畫面').addClass('讀取畫面-完成');
        $('#讀取畫面').on('transitionend', function () {
            $('#讀取畫面').remove();
        });
        //$('body').addClass('body-完成');
    }
    setTimeout(doneLoading, 1000);
});

//導覽列返回
navBackBtn.click(function() {

    if ($('.nav-左-返回').hasClass('nav-左-返回-尋找銷售點')) {
        retailerPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
        dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
        findRetailerPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
        aboutPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
        $('#側邊欄-過濾-城市-下拉選單').removeClass('下拉選單_收起').removeClass('下拉選單_展開').addClass("下拉選單_預設");
        $('#側邊欄-過濾-地區-下拉選單').removeClass('下拉選單_收起').removeClass('下拉選單_展開').addClass("下拉選單_預設");
        $('.nav-左-返回').removeClass('nav-左-返回-尋找銷售點')
    } else {
        retailerPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
        dashboardPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
        findRetailerPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
        aboutPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    }
});

$("#側邊欄-頁面-檢視藥局-nav-返回").click(function()
{
    map.setLayoutProperty('selectedMarker', 'visibility', 'none');
    removeUrlParameter();
});

//總覽-瀏覽店家
overhaulRetailerBtn.click(function() {
    dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    findRetailerPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
    $('#側邊欄-過濾-城市-下拉選單').removeClass('下拉選單_收起').removeClass('下拉選單_展開').addClass("下拉選單_預設");
    $('#側邊欄-過濾-地區-下拉選單').removeClass('下拉選單_收起').removeClass('下拉選單_展開').addClass("下拉選單_預設");
});

//總覽-尋找銷售點
findRetailerBtn.click(function() {
    dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    findRetailerPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
    $('#側邊欄-過濾-城市-下拉選單').removeClass('下拉選單_收起').removeClass('下拉選單_展開').addClass("下拉選單_預設");
    $('#側邊欄-過濾-地區-下拉選單').removeClass('下拉選單_收起').removeClass('下拉選單_展開').addClass("下拉選單_預設");
});

//總覽-關於
aboutBtn.click(function() {
    dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    aboutPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
});

dashboardAboutBtn.click(function() {
    dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
    aboutPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
});

//尋找銷售點-檢視藥局
// aboutBtn.click(function() { //隨選項變動
//     dashboardPage.addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示')
//     retailerPage.addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏')
// });

//-- 過濾功能
// 過濾功能
$("#側邊欄-總覽-過濾-全部").click(function()
{
    // $("#側邊欄-總覽-過濾-全部").addClass("側邊欄-總覽-過濾_選項_啟用");
    // $("#側邊欄-總覽-過濾-僅限成人").removeClass("側邊欄-總覽-過濾_選項_啟用");
    // $("#側邊欄-總覽-過濾-僅限兒童").removeClass("側邊欄-總覽-過濾_選項_啟用");
    //
    // updateNearSellOutCard(userAddress);
    // updateAllMarker();

    updateFilterData(FILTER_MASK_ALL);
});

$("#側邊欄-總覽-過濾-僅限成人").click(function()
{
    // $("#側邊欄-總覽-過濾-僅限成人").addClass("側邊欄-總覽-過濾_選項_啟用");
    // $("#側邊欄-總覽-過濾-全部").removeClass("側邊欄-總覽-過濾_選項_啟用");
    // $("#側邊欄-總覽-過濾-僅限兒童").removeClass("側邊欄-總覽-過濾_選項_啟用");
    //
    // updateNearSellOutCard(userAddress);
    // updateAllMarker();

    updateFilterData(FILTER_MASK_ADULT);
});

$("#側邊欄-總覽-過濾-僅限兒童").click(function()
{
    // $("#側邊欄-總覽-過濾-僅限兒童").addClass("側邊欄-總覽-過濾_選項_啟用");
    // $("#側邊欄-總覽-過濾-全部").removeClass("側邊欄-總覽-過濾_選項_啟用");
    // $("#側邊欄-總覽-過濾-僅限成人").removeClass("側邊欄-總覽-過濾_選項_啟用");
    //
    // updateNearSellOutCard(userAddress);
    // updateAllMarker();

    updateFilterData(FILTER_MASK_CHILD);
});

// 尋找銷售點
$("#側邊欄-過濾規格-全部").click(function()
{
    // $("#側邊欄-過濾規格-全部").addClass("側邊欄-過濾規格_選項_啟用");
    // $("#側邊欄-過濾規格-僅限成人").removeClass("側邊欄-過濾規格_選項_啟用");
    // $("#側邊欄-過濾規格-僅限兒童").removeClass("側邊欄-過濾規格_選項_啟用");
    //
    // updateSearchSellDrugStoreCardList(true);

    updateFilterData(FILTER_MASK_ALL);
});

$("#側邊欄-過濾規格-僅限成人").click(function()
{
    // $("#側邊欄-過濾規格-僅限成人").addClass("側邊欄-過濾規格_選項_啟用");
    // $("#側邊欄-過濾規格-全部").removeClass("側邊欄-過濾規格_選項_啟用");
    // $("#側邊欄-過濾規格-僅限兒童").removeClass("側邊欄-過濾規格_選項_啟用");
    //
    // updateSearchSellDrugStoreCardList(true);

    updateFilterData(FILTER_MASK_ADULT);
});

$("#側邊欄-過濾規格-僅限兒童").click(function()
{
    // $("#側邊欄-過濾規格-僅限兒童").addClass("側邊欄-過濾規格_選項_啟用");
    // $("#側邊欄-過濾規格-全部").removeClass("側邊欄-過濾規格_選項_啟用");
    // $("#側邊欄-過濾規格-僅限成人").removeClass("側邊欄-過濾規格_選項_啟用");
    //
    // updateSearchSellDrugStoreCardList(true);

    updateFilterData(FILTER_MASK_CHILD);
});

function updateFilterData(FILTER)
{
    //總覽
    $("#側邊欄-總覽-過濾-全部").removeClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-僅限成人").removeClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-僅限兒童").removeClass("側邊欄-總覽-過濾_選項_啟用");

    //尋找銷售點
    $("#側邊欄-過濾規格-全部").removeClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-僅限成人").removeClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-僅限兒童").removeClass("側邊欄-過濾規格_選項_啟用");

    switch (FILTER)
    {
        case FILTER_MASK_ALL:
            $("#側邊欄-總覽-過濾-全部").addClass("側邊欄-總覽-過濾_選項_啟用");
            $("#側邊欄-過濾規格-全部").addClass("側邊欄-過濾規格_選項_啟用");
            break;
        case FILTER_MASK_ADULT:
            $("#側邊欄-總覽-過濾-僅限成人").addClass("側邊欄-總覽-過濾_選項_啟用");
            $("#側邊欄-過濾規格-僅限成人").addClass("側邊欄-過濾規格_選項_啟用");
            break;
        case FILTER_MASK_CHILD:
            $("#側邊欄-總覽-過濾-僅限兒童").addClass("側邊欄-總覽-過濾_選項_啟用");
            $("#側邊欄-過濾規格-僅限兒童").addClass("側邊欄-過濾規格_選項_啟用");
            break;
    }

    //總覽
    updateNearSellOutCard(userAddress);
    updateAllMarker();

    //尋找銷售點
    updateSearchSellDrugStoreCardList(true);
}



//----- 行動版側邊欄
function swipedetect(el, callback){

    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

$('#側邊欄').on('touchstart',function ()
{
    console.log("mouse down");
    $("#側邊欄").removeClass("側邊欄-行動版_藥局Marker");
    if ($(window).width() <= 800)
    {
        $('#側邊欄').addClass('側邊欄-行動版_展開');
        $('#側邊欄').removeClass('側邊欄-行動版_收起');
    }
});

$('#nav-左-關閉').click(function () {
    $('#側邊欄').addClass('側邊欄-行動版_收起');
    $('#側邊欄').removeClass('側邊欄-行動版_展開');
    $('#側邊欄-內容').scrollTop(0)
})

var sidebarTouchY = 0;
$('.側邊欄-內容').on('touchstart', function(event)
{
    console.log("touchStart = " + event.changedTouches[0].clientY);
    if ($(this).scrollTop() <= 0)
    {
        sidebarTouchY = event.changedTouches[0].clientY;
    }

});
$('.側邊欄-內容').on('touchmove', function(event)
{
    console.log("touchmove = " + event.changedTouches[0].clientY);
    if ($(this).scrollTop() <= 0 && event.changedTouches[0].clientY >= (sidebarTouchY + 30) && !$('#側邊欄-過濾-城市-下拉選單').hasClass('下拉選單_展開') && !$('#側邊欄-過濾-地區-下拉選單').hasClass('下拉選單_展開'))
    {
        $('#側邊欄').removeClass('側邊欄-行動版_展開').addClass('側邊欄-行動版_收起');
        if ($('#側邊欄-頁面-檢視藥局').hasClass("側邊欄-頁面_顯示"))
        {
            $('#側邊欄').addClass("側邊欄-行動版_藥局Marker");
        }
        $('.側邊欄-內容').scrollTop(0);
    }
});

$('.導覽列').on('touchmove', function(event) {
    $('#側邊欄').removeClass('側邊欄-行動版_展開').addClass('側邊欄-行動版_收起');

    if ($('#側邊欄-頁面-檢視藥局').hasClass("側邊欄-頁面_顯示"))
    {
        $('#側邊欄').addClass("側邊欄-行動版_藥局Marker");
    }

    $('.側邊欄-內容').scrollTop(0);
});

//----- 彈出視窗
var popWinBox = $('#彈出視窗')
var popWinContent = $('#彈出視窗-視窗-內容')
var popWinDissmiss= $('#彈出視窗-視窗-按鈕')
var popWinBgDissmiss= $('#彈出視窗-背景')

$('#側邊欄-最近更新').click(function () {
    popWindow('這是您開啟口罩指南時，網站檢查口罩存量資訊的時間。<br><br>網站上的資訊不會自動更新，您必須重新進入網站，才能取得最新資訊。口罩數量來自銷售點自行回報，與實際存量會有出入。','瞭解了','y');
});

$('.側邊欄-最近更新-小-這是什麼').click(function () {
    popWindow('這是您開啟口罩指南時，網站檢查口罩存量資訊的時間。<br><br>網站上的資訊不會自動更新，您必須重新進入網站，才能取得最新資訊。口罩數量來自銷售點自行回報，與實際存量會有出入。','瞭解了','y');
});

$('#側邊欄-檢視藥局-這是什麼').click(function () {
    popWindow('這是這個銷售點最後一次更新資料的時間。<br><br>網站上的資訊不會自動更新，您必須重新進入網站，才能取得新的口罩數量。口罩數量來自銷售點自行回報，與實際存量會有出入。','瞭解了','y');
});

$('#側邊欄-商家的提醒').click(function () {
    popWindow('這是來自這個銷售點提供的提醒事項。如果您對內容有任何疑問，您應致電銷售點尋求協助。','瞭解了','y');
});

$('#側邊欄-購買須知').click(function () {
    popWindow('這是來自這個銷售點提供的提醒事項。如果您對內容有任何疑問，您應致電銷售點尋求協助。','瞭解了','y');
});

$('#彈出視窗-視窗-按鈕').click(function (){
    popWinBox.addClass('彈出視窗_關閉').removeClass('彈出視窗_顯示');

    if(popWinContent.text() == '口罩指南無法取得您的位置。請再試一次，或者直接開始瀏覽。')
    {
        // location.reload();
    }
    else if (popWinContent.text() == '口罩指南需要您的位置，來提供您最佳的個人化體驗。')
    {
        updateInfoCard();
    }
});

$('#彈出視窗-背景').click(function()
{
    if (popWinContent.text() == '口罩指南需要您的位置，來提供您最佳的個人化體驗。')
    {
        updateInfoCard();
    }

    console.log("彈出視窗-視窗-按鈕 click");
    if (!popWinDissmiss.hasClass('隱藏'))
    {
        popWinBox.addClass('彈出視窗_關閉').removeClass('彈出視窗_顯示');
    }
});

function popWindow(content,buttonText,btnDisplay) {
    popWinBox.addClass('彈出視窗_顯示').removeClass('彈出視窗_關閉')
    popWinContent.html(content);
    if (btnDisplay === 'y') {
        popWinDissmiss.removeClass('隱藏');
        popWinDissmiss.text(buttonText)
    } else {
        popWinDissmiss.addClass('隱藏')
    }

    if (content === "請稍候" || content === "正在定位")
    {
        popWinContent.addClass('彈出視窗-視窗-內容_轉圈');
    }
    else
    {
        popWinContent.removeClass('彈出視窗-視窗-內容_轉圈');
    }
}

function hidePopWindow()
{
    popWinBox.addClass('彈出視窗_關閉').removeClass('彈出視窗_顯示');
}

//----- 下拉選單
var dropDownSelected = $('.下拉選單-選項_目前');

$(document).click(function(e) {
    if ($('#側邊欄-頁面-尋找銷售點').hasClass("側邊欄-頁面_顯示"))
    {
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
    }
});

$('#側邊欄-過濾-城市').click(function (e){
    if($(e.target).hasClass("側邊欄-過濾-城市-按鈕"))
    {
        $('#側邊欄-過濾-城市-下拉選單').addClass('下拉選單_展開').removeClass('下拉選單_收起').removeClass("下拉選單_預設");

        //選中選項置中
        dropDownSelected.scrollTop($('#側邊欄-過濾-程式-下拉選單').height());
    }
});

$('#側邊欄-過濾-地區').click(function (e){
    if($(e.target).hasClass("側邊欄-過濾-地區-按鈕"))
    {
        $('#側邊欄-過濾-地區-下拉選單').addClass('下拉選單_展開').removeClass('下拉選單_收起').removeClass("下拉選單_預設");

        //選中選項置中
        dropDownSelected.scrollTop($('#側邊欄-過濾-地區-下拉選單').height());
    }
});


//----- 分享與在地圖開啟
//在地圖開啟
var currentUrl = $(location). attr("href");

// $('#側邊欄-檢視藥局-底部按鈕-在地圖開啟').click(function (){
//     window.open('https://www.google.com.tw/maps/@' + map.getSource('usrPos')._data.features[0].geometry.coordinates, '_blank');
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


//----- 問卷調查

$(window).on('load',function() {
    feedbackNewUiCookie = Cookies.get('feedback-new_ui');
    if (typeof(feedbackNewUiCookie) === "undefined") {
    } else {
        $('#側邊欄-問卷調查').addClass('隱藏');
    }
})

$('#問卷調查_滿意視覺設計-滿意度_不滿意').click(function() {
    gtag('event', 'dislike', {
        'event_category': 'feedback',
        'event_label': 'new_ui',
    });
    $('#問卷調查_滿意視覺設計-滿意度_不滿意').addClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    $('#問卷調查_滿意視覺設計-滿意度_還可以').removeClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    $('#問卷調查_滿意視覺設計-滿意度_滿意').removeClass('側邊欄-問卷調查-內容-選項_選項_被選擇');

    doneQuestion();
})

$('#問卷調查_滿意視覺設計-滿意度_滿意').click(function() {
    gtag('event', 'like', {
        'event_category': 'feedback',
        'event_label': 'new_ui',
    });
    $('#問卷調查_滿意視覺設計-滿意度_不滿意').removeClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    $('#問卷調查_滿意視覺設計-滿意度_還可以').removeClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    $('#問卷調查_滿意視覺設計-滿意度_滿意').addClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    doneQuestion();
})

$('#問卷調查_滿意視覺設計-滿意度_還可以').click(function() {
    gtag('event', 'normal', {
        'event_category': 'feedback',
        'event_label': 'new_ui',
    });
    $('#問卷調查_滿意視覺設計-滿意度_不滿意').removeClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    $('#問卷調查_滿意視覺設計-滿意度_還可以').addClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    $('#問卷調查_滿意視覺設計-滿意度_滿意').removeClass('側邊欄-問卷調查-內容-選項_選項_被選擇');
    doneQuestion();
})

function doneQuestion() {
    $('#側邊欄-問卷調查-內容-問題-結果').removeClass('隱藏');
    Cookies.set('feedback-new_ui', 'answered', { expires: 365 });
}
