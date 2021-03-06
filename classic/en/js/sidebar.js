//頁面
var dashboardPage = $('#側邊欄-頁面-總覽');
var findRetailerPage = $('#側邊欄-頁面-尋找銷售點')
var aboutPage = $('#側邊欄-頁面-關於')
var retailerPage = $('#側邊欄-頁面-檢視藥局')

//按鈕
var findRetailerBtn = $('#側邊欄-尋找銷售點');
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
    $("#側邊欄-總覽-過濾-全部").addClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-僅限成人").removeClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-僅限兒童").removeClass("側邊欄-總覽-過濾_選項_啟用");

    updateNearSellOutCard(userAddress);
    updateAllMarker();
});

$("#側邊欄-總覽-過濾-僅限成人").click(function()
{
    $("#側邊欄-總覽-過濾-僅限成人").addClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-全部").removeClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-僅限兒童").removeClass("側邊欄-總覽-過濾_選項_啟用");

    updateNearSellOutCard(userAddress);
    updateAllMarker();
});

$("#側邊欄-總覽-過濾-僅限兒童").click(function()
{
    $("#側邊欄-總覽-過濾-僅限兒童").addClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-全部").removeClass("側邊欄-總覽-過濾_選項_啟用");
    $("#側邊欄-總覽-過濾-僅限成人").removeClass("側邊欄-總覽-過濾_選項_啟用");

    updateNearSellOutCard(userAddress);
    updateAllMarker();
});

// 尋找銷售點
$("#側邊欄-過濾規格-全部").click(function()
{
    $("#側邊欄-過濾規格-全部").addClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-僅限成人").removeClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-僅限兒童").removeClass("側邊欄-過濾規格_選項_啟用");

    updateSearchSellDrugStoreCardList(true);
});

$("#側邊欄-過濾規格-僅限成人").click(function()
{
    $("#側邊欄-過濾規格-僅限成人").addClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-全部").removeClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-僅限兒童").removeClass("側邊欄-過濾規格_選項_啟用");

    updateSearchSellDrugStoreCardList(true);
});

$("#側邊欄-過濾規格-僅限兒童").click(function()
{
    $("#側邊欄-過濾規格-僅限兒童").addClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-全部").removeClass("側邊欄-過濾規格_選項_啟用");
    $("#側邊欄-過濾規格-僅限成人").removeClass("側邊欄-過濾規格_選項_啟用");

    updateSearchSellDrugStoreCardList(true);
});



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

//----- 彈出視窗
var popWinBox = $('#彈出視窗')
var popWinContent = $('#彈出視窗-視窗-內容')
var popWinDissmiss= $('#彈出視窗-視窗-按鈕')
var popWinBgDissmiss= $('#彈出視窗-背景')

$('#側邊欄-最近更新').click(function () {
    popWindow('This is the time of last update.<br><br>All information in the website will not update automatically, You have to re-entry website to get newest information. Mask stock are report by store, Accuracy are not guaranteed.','Got it','y');
});

$('.側邊欄-最近更新-小-這是什麼').click(function () {
    popWindow('This is the time of last update.<br><br>All information in the website will not update automatically, You have to re-entry website to get newest information. Mask stock are report by store, Accuracy are not guaranteed.','Got it','y');
});

$('#側邊欄-檢視藥局-這是什麼').click(function () {
    popWindow('This is the time of last update.<br><br>All information in the website will not update automatically, You have to re-entry website to get newest information. Mask stock are report by store, Accuracy are not guaranteed.','Got it','y');
});

$('#側邊欄-商家的提醒').click(function () {
    popWindow('This is note from store owner. Please contact store if you need any help.','Got it','y');
});

$('#側邊欄-購買須知').click(function () {
    popWindow('This is note from store owner. Please contact store if you need any help.','Got it','y');
});

$('#彈出視窗-視窗-按鈕').click(function (){
    popWinBox.addClass('彈出視窗_關閉').removeClass('彈出視窗_顯示');

    if(popWinContent.text() == 'Mask Guide having trouble while getting your location. Please try again or start browse without getting local status.')
    {
        // location.reload();
    }
    else if (popWinContent.text() == 'Mask Guide need to know your location to provide personalized information.')
    {
        updateInfoCard();
    }
});

$('#彈出視窗-背景').click(function()
{
    if (popWinContent.text() == 'Mask Guide need to know your location to provide personalized information.')
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

    if (content === "Please wait..." || content === "Locating")
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
    }
});

$('#側邊欄-過濾-地區').click(function (e){
    if($(e.target).hasClass("側邊欄-過濾-地區-按鈕"))
    {
        $('#側邊欄-過濾-地區-下拉選單').addClass('下拉選單_展開').removeClass('下拉選單_收起').removeClass("下拉選單_預設");
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
