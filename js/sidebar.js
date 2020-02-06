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

// if ($(window).width() <= 800) {
//     if ($('#側邊欄').hasClass ('側邊欄-行動版-展開')) {
//         console.log('fuck');
//
//         if ($('#側邊欄-內容').scrollTop() <=0) {
//
//             $('#側邊欄').removeClass('側邊欄-行動版-展開');
//         };
//
//     });
//     }
//     else {
//         $('#側邊欄').on('touchmove', function(){
//             console.log('滑動！')
//             $('#側邊欄').addClass('側邊欄-行動版-展開');
//         });
//     }
// }

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
var citiesDMenu = $('#側邊欄-過濾-城市');
var citiesDOption = $('#側邊欄-過濾-城市-下拉選單');
var DistDMenu = $('#側邊欄-過濾-地區');
var DistDOption = $('#側邊欄-過濾-地區-下拉選單');

citiesDMenu.click(function (){
    citiesDOption.addClass('下拉選單_顯示').removeClass('下拉選單_收起')
})

DistDMenu.click(function (){
    DistDOption.addClass('下拉選單_顯示').removeClass('下拉選單_收起')
})


//----- 分享與在地圖開啟
//在地圖開啟
var currentUrl = $(location). attr("href");

// $('#側邊欄-檢視藥局-底部按鈕-在地圖開啟').click(function (){
//     //https://www.google.com.tw/maps/@[經度],[緯度]
//     //window.open(getUrl +, '_blank');
// });

//分享
$('#彈出視窗-分享-社群-Facebook').click(function (){
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + currentUrl, '_blank');
});

$('#彈出視窗-分享-社群-Twitter').click(function (){
    window.open("https://twitter.com/intent/tweet?text=" + currentUrl, '_blank');
});

$('#彈出視窗-分享-社群-LINE').click(function (){
    window.open("https://social-plugins.line.me/lineit/share?url=" + currentUrl, '_blank');
});

$('#彈出視窗-分享-網址-網址他自己').text(currentUrl)

$('#彈出視窗-分享-網址').click(function (){
    $('#彈出視窗-分享-網址-網址他自己').select();
    document.execCommand("copy");
})