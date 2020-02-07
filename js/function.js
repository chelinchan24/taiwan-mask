const MARKER_LOT_IN_STOCK = "marker_lotInStock";
const MARKER_NEAR_SELL_OUT = "ic_nearSellout";
const MARKER_ALMOST_SELL_OUT = "marker_alomostSellOut";
const MARKER_SELL_OUT = "ic_sellOut";

const county = {
          "台北市":["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
          "新北市":["板橋區", "新莊區", "中和區", "永和區", "土城區", "樹林區", "三峽區", "鶯歌區", "三重區", "蘆洲區", "五股區", "泰山區", "林口區", "八里區", "淡水區", "三芝區", "石門區", "金山區", "萬里區"
                    , "汐止區", "瑞芳區", "貢寮區", "平溪區", "雙溪區", "新店區", "深坑區", "石碇區", "坪林區", "烏來區"],
          "桃園市":["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "大溪區", "龍潭區", "龜山區", "大園區", "觀音區", "新屋區", "復興區"],
          "台中市":["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "新社區", "潭子區", "大雅區"
                    , "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區", "和平區"],
          "台南市":["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區"
                  , "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"],
          "高雄市":["楠梓區", "左營區", "鼓山區", "三民區", "鹽埕區", "前金區", "新興區", "苓雅區", "前鎮區", "旗津區", "小港區", "鳳山區", "大寮區", "鳥松區", "林園區", "仁武區", "大樹區", "大社區", "岡山區"
                  , "路竹區", "橋頭區", "梓官區", "彌陀區", "永安區", "燕巢區", "田寮區", "阿蓮區", "茄萣區", "湖內區", "旗山區", "美濃區", "內門區", "杉林區", "甲仙區", "六龜區", "茂林區", "桃源區", "那瑪夏區"],
          "基隆市":["仁愛區", "中正區", "信義區", "中山區", "安樂區", "暖暖區", "七堵區"],
          "新竹市":["東區", "北區", "香山區"],
          "嘉義市":["東區", "西區"],
          "新竹縣":["竹北市", "竹東鎮", "新埔鎮", "關西鎮", "湖口鄉", "新豐鄉", "峨眉鄉", "寶山鄉", "北埔鄉", "芎林鄉", "橫山鄉", "尖石鄉", "五峰鄉"],
          "苗栗縣":["苗栗市", "頭份市", "竹南鎮", "後龍鎮", "通霄鎮", "苑裡鎮", "卓蘭鎮", "造橋鄉", "西湖鄉", "頭屋鄉", "公館鄉", "銅鑼鄉", "三義鄉", "大湖鄉", "獅潭鄉", "三灣鄉", "南庄鄉", "泰安鄉"],
          "彰化縣":["彰化市", "員林市", "和美鎮", "鹿港鎮", "溪湖鎮", "二林鎮", "田中鎮", "北斗鎮", "花壇鄉", "芬園鄉", "大村鄉", "永靖鄉", "伸港鄉", "線西鄉", "福興鄉", "秀水鄉", "埔心鄉", "埔鹽鄉", "大城鄉"
                    , "芳苑鄉", "竹塘鄉", "社頭鄉", "二水鄉", "田尾鄉", "埤頭鄉", "溪州鄉"],
          "南投縣":["南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮", "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉", "水里鄉", "信義鄉", "仁愛鄉"],
          "雲林縣":["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮", "林內鄉", "古坑鄉", "大埤鄉", "莿桐鄉", "褒忠鄉", "二崙鄉"
                    , "崙背鄉", "麥寮鄉", "臺西鄉", "東勢鄉", "元長鄉", "四湖鄉", "口湖鄉", "水林鄉"],
          "嘉義縣":["太保市", "朴子市", "布袋鎮", "大林鎮", "民雄鄉", "溪口鄉", "新港鄉", "六腳鄉", "東石鄉", "義竹鄉", "鹿草鄉", "水上鄉", "中埔鄉", "竹崎鄉", "梅山鄉", "番路鄉", "大埔鄉", "阿里山鄉"],
          "屏東縣":["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "鹽埔鄉", "高樹鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉", "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉"
                    , "南州鄉", "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉", "霧臺鄉", "瑪家鄉", "泰武鄉", "來義鄉", "春日鄉", "獅子鄉", "牡丹鄉", "三地門鄉"],
          "宜蘭縣":["宜蘭市", "頭城鎮", "羅東鎮", "蘇澳鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "冬山鄉", "五結鄉", "三星鄉", "大同鄉", "南澳鄉"],
          "花蓮縣":["花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉", "壽豐鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "富里鄉", "秀林鄉", "萬榮鄉", "卓溪鄉"],
          "臺東縣":["臺東市", "成功鎮", "關山鎮", "長濱鄉", "池上鄉", "東河鄉", "鹿野鄉", "卑南鄉", "大武鄉", "綠島鄉", "太麻里鄉", "海端鄉", "延平鄉", "金峰鄉", "達仁鄉", "蘭嶼鄉"],
          "澎湖縣":["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
          "金門縣":["金城鎮", "金湖鎮", "金沙鎮", "金寧鄉", "烈嶼鄉", "烏坵鄉"],
          "連江縣":["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]
        };
var data = {};
var cardInfoData = {};
var searchSellDrugStoreTimeout;

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbGluY2hhbjI0IiwiYSI6ImNrM2FkdXo1dDAxYWUzbnFlM2o2ZTNudTEifQ.wmEvON86_LuzQUGIvDRslQ';
var map = new mapboxgl.Map({
    container: '地圖',
    style: 'mapbox://styles/chelinchan24/ck68yiap60je81iqtfne3pzvo',
    attributionControl: false,
    logoPosition: "top-left"
});

//更改版權位置
map.addControl(new mapboxgl.AttributionControl(), 'bottom-left');

init();

//time
$("#側邊欄-最近更新-時間").text(moment(new Date()).format('hh:mm'));
$("#nav-右-最後更新-時間").text(moment(new Date()).format('hh:mm'));


for(var k in county)
{
  data[k] = {};
  cardInfoData[k] = {
    "totalDrugStore" : 0,
    "totalMaskAdult" : 0,
    "totalMaskChild" : 0
  };
  for(var i = 0; i < county[k].length; i++)
  {
    data[k][county[k][i]] = {
      "type": "FeatureCollection",
      "features": []
    };
    cardInfoData[k][county[k][i]] = {
      "totalDrugStore" : 0,
      "totalMaskAdult" : 0,
      "totalMaskChild" : 0,
      "locationBunds" : []
    };
  }
}

//取得 "?" 後面的字串
console.log(window.location.search);

$('#地圖-控制-縮放-放大').click(function(){
    map.flyTo({zoom: map.getZoom()+1,})
});

$('#地圖-控制-縮放-縮小').click(function(){
    map.flyTo({zoom: map.getZoom()-1,})
});

function init()
{
  getUserLocation();
}

//*********************************************
//* 載入資料
//*********************************************
var s;
$(document).ready(function()
{
  console.log("document ready");
  $.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json", function(source)
  {
    console.log("get source");

    //載入全部
    s = JSON.parse(source);
    for(var i = 0; i < s["features"].length; i++)
    {
      var totalMask = s["features"][i].properties.mask_adult + s["features"][i].properties.mask_child;
      s["features"][i]["properties"]["icon"] = (totalMask > 50 ? MARKER_LOT_IN_STOCK : (totalMask >= 25 ? MARKER_NEAR_SELL_OUT : (totalMask > 0 ? MARKER_ALMOST_SELL_OUT : MARKER_SELL_OUT)));
    }

    //分類
    source = JSON.parse(source);
    source["features"].forEach(function(item)
    {
      loadData(item);
    });
    loadMapData();
    updateInfoCard();
  });
});

//整理資料
function loadData(item)
{
  var cty = item["properties"]["address"].substring(0, 3);
  var dis = item["properties"]["address"].substring(3, item["properties"]["address"].length);

  for(var k in county)
  {
    if(cty == k || cty.replace("臺", "台") == k)
    {
      county[k].forEach(function(d)
      {
        if(dis.startsWith(d))
        {
          var totalMask = item.properties.mask_adult + item.properties.mask_child;
          item["properties"]["icon"] = (totalMask > 50 ? MARKER_LOT_IN_STOCK : (totalMask >= 25 ? MARKER_NEAR_SELL_OUT : (totalMask > 0 ? MARKER_ALMOST_SELL_OUT : MARKER_SELL_OUT)));
          data[k][d]["features"].push(item);

          cardInfoData[k][d]["locationBunds"].push(item.geometry.coordinates);
          cardInfoData[k][d]["totalDrugStore"] = cardInfoData[k][d]["totalDrugStore"] + 1;
          cardInfoData[k][d]["totalMaskAdult"] = cardInfoData[k][d]["totalMaskAdult"] + item.properties.mask_adult;
          cardInfoData[k][d]["totalMaskChild"] = cardInfoData[k][d]["totalMaskChild"] + item.properties.mask_child;
          return false;
        }
      });
      return false;
    }
  }
}

function loadMapData()
{
  console.log("loadMapData = " + map.loaded());

  if(map.loaded())
  {
    loadMarker();
  }
  else
  {
    map.on("load", function()
    {
      console.log("loadMapData is load");
      loadMarker();
    });
  }
}

function loadMarker()
{
  console.log("loadMarker");
  map.addLayer({
    id: "marker",
    type: "symbol",
    source: {
      type: "geojson",
      data: s,
      cluster: true,
      clusterRadius: 5
    },
    layout: {
      'icon-image': ['get', 'icon']
      // "icon-image" : MARKER_LOT_IN_STOCK
      // "icon-image": (totalMask > 50 ? MARKER_LOT_IN_STOCK : (totalMask >= 25 ? MARKER_NEAR_SELL_OUT : (totalMask > 0 ? MARKER_ALMOST_SELL_OUT : MARKER_SELL_OUT)))
    }
  });
  loadMarkerClick();


  // for(var k in data)
  // {
  //   console.log("loadMarker " + k);
  //   for(var k2 in data[k])
  //   {
  //     console.log("loadMarker " + k2);
  //
  //     map.addLayer({
  //       id: k + k2,
  //       type: "symbol",
  //       source: {
  //         type: "geojson",
  //         data: data[k][k2],
  //       },
  //       layout: {
  //         'icon-image': ['get', 'icon']
  //         // "icon-image" : MARKER_LOT_IN_STOCK
  //         // "icon-image": (totalMask > 50 ? MARKER_LOT_IN_STOCK : (totalMask >= 25 ? MARKER_NEAR_SELL_OUT : (totalMask > 0 ? MARKER_ALMOST_SELL_OUT : MARKER_SELL_OUT)))
  //       }
  //     });
  //   }
  // }
}

function loadMarkerClick()
{
  map.on('click', function(e){
    var features = map.queryRenderedFeatures(e.point, { layers: ['marker'] });

    if(!features.length){
      return;
    }

    var feature = features[0];
    console.log(feature);

    updateUrl(feature["properties"]["name"], feature["properties"]["address"]);
    showDrugStoreDetails(feature);
  });

  map.on('mouseenter', 'marker', function(){
    map.getCanvas().style.cursor = "pointer";
  });
  map.on('mouseleave', 'marker', function(){
    map.getCanvas().style.cursor = "";
  });
}

function updateUrl(name, address)
{
  var urlStr = "?=" + address.substring(0, 3) +"/";
  if(address.indexOf("區") != -1)
  {
    urlStr += address.substring(3, (address.indexOf("區") + 1));
  }
  else if(address.indexOf("市") != -1)
  {
    urlStr += address.substring(3, (address.indexOf("市") + 1));
  }
  else if(address.indexOf("鄉") != -1)
  {
    urlStr += address.substring(3, (address.indexOf("鄉") + 1));
  }
  else if(address.indexOf("鎮") != -1)
  {
    urlStr += address.substring(3, (address.indexOf("鎮") + 1));
  }

  urlStr += "/" + name ;
  history.pushState('', '', urlStr);
}

function moveCameraToCountyArea(county, area)
{
  if (cardInfoData[county][area]["locationBunds"].length != 0)
  {
    map.fitBounds(cardInfoData[county][area]["locationBunds"],
    {
      padding: {top: 250, bottom:250, left: 250, right: ($(window).width() > 800 ? 500 : 250)}
    });
  }
}

function getUserLocation()
{
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(position)
    {
      console.log(position);
    });
  }
  else
  {
    console.log("Geolocation is not supported by this browser.");
  }
}

//*********************************************
//* 更新卡片資訊
//*********************************************
function updateInfoCard()
{
  if(!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(function(position)
  {
    $.get("https://nominatim.openstreetmap.org/reverse?format=json&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&zoom=16&addressdetails=1", function(source)
    {
      //update infoCard
      var city = getLocationDataToCounty(source.address)
      $("#側邊欄-區域狀況-地區").text(city + getLocationDataToTown(source.address));
      $("#側邊欄-區域狀況-內容-販售中藥局-數據").text(cardInfoData[city][getLocationDataToTown(source.address)]["totalDrugStore"]);
      $("#側邊欄-區域狀況-內容-剩餘口罩-數據").text(cardInfoData[city][getLocationDataToTown(source.address)]["totalMaskAdult"] + cardInfoData[city][getLocationDataToTown(source.address)]["totalMaskChild"]);

      updateNearSellOutCard(source.address);
      initDropMenu(city, getLocationDataToTown(source.address))

      // var bundles = [];
      // for(k in county[city])
      // {
      //   bundles = bundles.concat(cardInfoData[city][county[city][k]]["locationBunds"]);
      // }

      moveCameraToCountyArea(city, getLocationDataToTown(source.address));
    });
  });
}

function updateNearSellOutCard(address)
{
  var nearSellOutCount = 0;
  var sellOutCount = 0;

  $("#側邊欄-即將售罄-內容").empty();
  $("#側邊欄-剛售罄-內容").empty();

  data[getLocationDataToCounty(address)][getLocationDataToTown(address)]["features"].forEach(function(item)
  {
    var totalMask = item.properties.mask_adult + item.properties.mask_child;
    if(totalMask <= 50)
    {
      if(totalMask != 0 && nearSellOutCount < 10)
      {
        nearSellOutCount = nearSellOutCount + 1;
        $("#側邊欄-即將售罄-內容").append(
          '<div class="側邊欄-即將售罄-卡片 卡片 ' + (totalMask >= 25 ? "卡片-幾乎售罄" : "卡片-即將售罄" ) + '" onclick=\'onClickNearSellOutCard("' + getLocationDataToCounty(address) + '", "' + getLocationDataToTown(address) + '", "' + item.properties.id + '")\'>' +
            '<div class="側邊欄-卡片-剩餘數量 卡片-數字欄位">' +
              '<div class="卡片-數據_大">' + totalMask + '</div>'+
              '<div class="卡片-數據_單位">片</div>' +
            '</div>' +
            '<div class="卡片-名稱">' + item.properties.name + '</div>' +
            '<div class="卡片-地址">' + item.properties.address + '</div>' +
          '</div>'
        );
      }
      else if(totalMask <= 0 && sellOutCount < 10)
      {
        sellOutCount = sellOutCount + 1;
        $("#側邊欄-剛售罄-內容").append(
          '<div class="側邊欄-剛售罄-卡片 卡片" onclick=\'onClickNearSellOutCard("' + getLocationDataToCounty(address) + '", "' + getLocationDataToTown(address) + '", "' + item.properties.id + '")\' >' +
            '<div class="卡片-名稱">' + item.properties.name + '</div>' +
            '<div class="卡片-地址">' + item.properties.address + '</div>' +
          '</div>'
        );
      }
    }
  });
}

function onClickNearSellOutCard(county, town, id)
{
  data[county][town]["features"].forEach(function(item)
  {
    if(item.properties.id == id)
    {
      map.flyTo({ center: item.geometry.coordinates, zoom:14.5});
      showDrugStoreDetails(item);
      return;
    }
  });
}

function getLocationDataToCounty(address)
{
  if('city' in address)
  {
    return address.city.replace("臺", "台");
  }
  else if ('county' in address)
  {
    return address.county.replace("臺", "台");
  }
  else
  {
    return address.state.replace("臺", "台");
  }
}

function getLocationDataToTown(address)
{
  var town;
  if('town' in address)
  {
    town = address.town;
  }
  else if ('suburb' in address)
  {
    town = address.suburb;
  }

  if(town in data[getLocationDataToCounty(address)])
  {
    return town;
  }
  else
  {
    return Object.keys(data[getLocationDataToCounty(address)])[0];
  }
}

//*********************************************
//* 尋找銷售點功能
//*********************************************
function initDropMenu(cnty, town)
{
  //載入城市下拉選單資訊
  $("#側邊欄-過濾-城市-下拉選單").empty();
  $("#側邊欄-過濾-城市-按鈕-文字").text(cnty);
  for(k in county)
  {
    $("#側邊欄-過濾-城市-下拉選單").append("<span class='" + (cnty == k ? "下拉選單-選項_目前" : "下拉選單-選項" ) + "'>" + k + "</span>");
  }

  //載入地區下拉選單資訊
  $("#側邊欄-過濾-地區-下拉選單").empty();
  $("#側邊欄-過濾-地區-按鈕-文字").text(town);
  county[cnty].forEach(function(item)
  {
    $("#側邊欄-過濾-地區-下拉選單").append("<span class='" + (town == item ? "下拉選單-選項_目前" : "下拉選單-選項") + "'>" + item + "</span>");
  });
  updateSearchSellDrugStoreCardList(true);

  //城市下拉選單按鈕功能
  for(var i = 0; i < $("#側邊欄-過濾-城市-下拉選單").children().length; i++)
  {
    $($("#側邊欄-過濾-城市-下拉選單").children()[i]).click(function(e)
    {
      $("#側邊欄-過濾-城市-下拉選單").removeClass("下拉選單_展開").addClass('下拉選單_收起');
      $("#側邊欄-過濾-城市-下拉選單").children().removeClass("下拉選單-選項_目前").addClass("下拉選單-選項");
      $(e.target).removeClass("下拉選單-選項").addClass("下拉選單-選項_目前");
      $("#側邊欄-過濾-城市-按鈕-文字").text($(e.target).text());
      updateTownDropMenu($(e.target).text());
    });
  }

  //地區下拉選單點選按鈕功能
  for(var i = 0; i < $("#側邊欄-過濾-地區-下拉選單").children().length; i++)
  {
    $($("#側邊欄-過濾-地區-下拉選單").children()[i]).click(function(e)
    {
      $("#側邊欄-過濾-地區-下拉選單").removeClass("下拉選單_展開").addClass('下拉選單_收起');
      $("#側邊欄-過濾-地區-下拉選單").children().removeClass("下拉選單-選項_目前").addClass("下拉選單-選項");
      $(e.target).removeClass("下拉選單-選項").addClass("下拉選單-選項_目前");
      $("#側邊欄-過濾-地區-按鈕-文字").text($(e.target).text());
      moveCameraToCountyArea($("#側邊欄-過濾-城市-按鈕-文字").text(), $("#側邊欄-過濾-地區-按鈕-文字").text());
      updateSearchSellDrugStoreCardList(true);
    });
  }

  //滑動到底部時更新列表
  $("#側邊欄-尋找銷售點-列表").scroll(function()
  {
    clearTimeout(searchSellDrugStoreTimeout);
    searchSellDrugStoreTimeout = setTimeout(function()
    {
      if(($("#側邊欄-尋找銷售點-列表").scrollTop() + $("#側邊欄-尋找銷售點-列表")[0].clientHeight) >= $("#側邊欄-尋找銷售點-列表")[0].scrollHeight * 0.95)
      {
        updateSearchSellDrugStoreCardList(false);
      }
    }, 1000);
  });
}

//更新鄉鎮區下拉選單
function updateTownDropMenu(ct)
{
  //載入下拉選單資訊
  $("#側邊欄-過濾-地區-下拉選單").empty();
  $("#側邊欄-過濾-地區-按鈕-文字").text(county[ct][0]);
  updateSearchSellDrugStoreCardList(true);
  moveCameraToCountyArea($("#側邊欄-過濾-城市-按鈕-文字").text(), $("#側邊欄-過濾-地區-按鈕-文字").text());
  county[ct].forEach(function(item)
  {
    $("#側邊欄-過濾-地區-下拉選單").append("<span class='" + (county[ct].indexOf(item) == 0 ? "下拉選單-選項_目前" : "下拉選單-選項") + "'>" + item + "</span>");
  });

  //下拉選單點選按鈕功能
  for(var i = 0; i < $("#側邊欄-過濾-地區-下拉選單").children().length; i++)
  {
    $($("#側邊欄-過濾-地區-下拉選單").children()[i]).click(function(e)
    {
      $("#側邊欄-過濾-地區-下拉選單").removeClass("下拉選單_展開").addClass('下拉選單_收起');
      $("#側邊欄-過濾-地區-下拉選單").children().removeClass("下拉選單-選項_目前").addClass("下拉選單-選項");
      $(e.target).removeClass("下拉選單-選項").addClass("下拉選單-選項_目前");
      $("#側邊欄-過濾-地區-按鈕-文字").text($(e.target).text());
      moveCameraToCountyArea($("#側邊欄-過濾-城市-按鈕-文字").text(), $("#側邊欄-過濾-地區-按鈕-文字").text());
      updateSearchSellDrugStoreCardList(true);
    });
  }
}

//更新銷售點卡片列表
function updateSearchSellDrugStoreCardList(isClearData)
{
  if(isClearData)
  {
    $("#側邊欄-結果").empty();
  }

  var county = $("#側邊欄-過濾-城市-按鈕-文字").text();
  var town = $("#側邊欄-過濾-地區-按鈕-文字").text();
  console.log("結果 length = " + $("#側邊欄-結果").children().length);
  console.log("data length = " + data[county][town]["features"].length);
  if ($("#側邊欄-結果").children().length >= data[county][town]["features"].length) return;

  for (var i = 0; i < 10; i++)
  {
    var item = data[county][town]["features"][$("#側邊欄-結果").children().length];
    console.log("count = " + ($("#側邊欄-結果").children().length));
    if(item == undefined) return;

    var totalMask = item.properties.mask_adult + item.properties.mask_child;
    $("#側邊欄-結果").append(
      '<div class="側邊欄-結果-項目"  onclick=\'onClickNearSellOutCard("' + $("#側邊欄-過濾-城市-按鈕-文字").text() + '", "' + $("#側邊欄-過濾-地區-按鈕-文字").text() + '", "' + item.properties.id + '")\' >' +
        '<div class="側邊欄-結果-項目-計數 ' + (totalMask > 50 ? "卡片-充足" : (totalMask >= 25 ? "卡片-幾乎售罄" : (totalMask > 0 ? "卡片-即將售罄" : "卡片-售罄"))) + '">' +
          '<div class="側邊欄-結果-項目-計數-數據">' +
            '<div class="' + (totalMask >= 10 ? "卡片-數據_小" : "卡片-數據_大") + '">' + (totalMask >= 100 ? "99+" : totalMask) + '</div>' +
            '<div class="卡片-數據_單位">片</div>' +
          '</div>' +
        '</div>' +
        '<div class="側邊欄-結果-項目-資訊">' +
          '<div class="側邊欄-結果-項目-資訊-名稱">' + item.properties.name + '</div>' +
          '<div class="側邊欄-結果-項目-資訊-地址">' + item.properties.address + '</div>' +
        '</div>' +
      '</div>'
    );
  }
  console.log("-----");
}

//*********************************************
//* 顯示藥局資訊
//*********************************************
function showDrugStoreDetails(item)
{
  $('#側邊欄-頁面-總覽').addClass('側邊欄-頁面_隱藏').removeClass('側邊欄-頁面_顯示');
  $('#側邊欄-頁面-檢視藥局').addClass('側邊欄-頁面_顯示').removeClass('側邊欄-頁面_隱藏');

  $("#側邊欄-販售存量-成人").removeClass("卡片-充足").removeClass("卡片-即將售罄").removeClass("卡片-幾乎售罄").removeClass("卡片-售罄");
  $("#側邊欄-販售存量-兒童").removeClass("卡片-充足").removeClass("卡片-即將售罄").removeClass("卡片-幾乎售罄").removeClass("卡片-售罄");

  var maskAdult = item.properties.mask_adult;
  var maskChild = item.properties.mask_child;
  $("#側邊欄-販售存量-成人").addClass(getMaskType(maskAdult, "卡片-充足", "卡片-幾乎售罄", "卡片-即將售罄", "卡片-售罄"));
  $("#側邊欄-販售存量-兒童").addClass(getMaskType(maskChild, "卡片-充足", "卡片-幾乎售罄", "卡片-即將售罄", "卡片-售罄"));
  $("#側邊欄-頁面-檢視藥局-標題").text(item.properties.name);
  $("#nav-右-最後更新-時間-檢視藥局").text(item.properties.updated === "" ? "--" : moment(item.properties.updated).format('hh:mm'));
  $("#側邊欄-販售存量-成人-數據-數字").text(maskAdult);
  $("#側邊欄-販售存量-兒童-數據-數字").text(maskChild);
  $("#側邊欄-商家資訊-地址-地址").text(item.properties.address);
  $("#側邊欄-商家資訊-電話-號碼").text(item.properties.phone);
}

function getMaskType(count, lotInStock, nearSellOut, almostSellOut, sellOut)
{
  return (count > 50 ? lotInStock : (count >= 25 ? nearSellOut : (count > 0 ? almostSellOut : sellOut)));
}
