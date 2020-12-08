// 引用百度地图微信小程序JSAPI模块 
var bmap = require(' ../../../../list/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    // placeData: {},
    rgcData: {},
    weatherData: {},
    sugData: ''
  },


  bindKeyInput: function (e) {
    var _this = this;
    var BMap = new bmap.BMapWX({
      ak: "uhdXYhWqV4ewNsnwPaPng5DKx80Vpxcf"
    });
    var fail = function (data) {
      console.log(data)
    };


   







  var success = function (data) {
    var sugData = "";
    for (var i = 0; i < data.result.length; i++) {
      sugData = sugData + data.result[i].name + '\n';
    }
    _this.setData({
      sugData: sugData
    });
  }
  BMap.suggestion({
    query: e.detail.value,
    region: "长沙",
    city_limit: true,
    fail: fail,
    success: success
  });
},



makertap: function (e) {
  var that = this;
  var id = e.markerId;
  that.showSearchInfo(wxMarkerData, id);
  // that.changeMarkerColor(wxMarkerData, id); 
},
onLoad: function () {
  var that = this;
  // 新建百度地图对象 
  var BMap = new bmap.BMapWX({
    ak: 'uhdXYhWqV4ewNsnwPaPng5DKx80Vpxcf'
  });
  var fail = function (data) {
    console.log(data)
  };
  var success = function (data) {
    wxMarkerData = data.wxMarkerData;
    that.setData({
      markers: wxMarkerData
    });
    that.setData({
      latitude: wxMarkerData[0].latitude
    });
    that.setData({
      longitude: wxMarkerData[0].longitude
    });
  }
  // 发起POI检索请求 
  BMap.search({
    "query": '学校',
    fail: fail,
    success: success,
    // 此处需要在相应路径放置图片文件 
    iconPath: '../../images/marker_red.png',
    // 此处需要在相应路径放置图片文件 
    iconTapPath: '../../images/marker_red.png'
  });
},
showSearchInfo: function (data, i) {
  var that = this;
  that.setData({
    rgcData: {
      address: '地址：' + data[i].address + '\n',
      desc: '描述：' + data[i].desc + '\n',
      business: '商圈：' + data[i].business
    }
  });
},
// changeMarkerColor: function(data, i) { 
//     var that = this; 
//     var markers = []; 
//     for (var j = 0; j < data.length; j++) { 
//         if (j == i) { 
//             // 此处需要在相应路径放置图片文件 
//             data[j].iconPath = "../../images/marker_yellow.png"; 
//         } else { 
//             // 此处需要在相应路径放置图片文件 
//             data[j].iconPath = "../../images/marker_red.png"; 
//         } 
//         markers[j](data[j]); 
//     } 
//     that.setData({ 
//         markers: markers 
//     }); 
// } 
})