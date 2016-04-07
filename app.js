// 图吧初始化
window.maplet = null;
maplet = new Maplet("map");
maplet.clickToCenter = false;
maplet.centerAndZoom(new MPoint(115.38672, 33.90805), 4);
maplet.addControl(new MStandardControl());
maplet.setOverviewLocation({
    type: eval("Maplet." + 'LEFT_BOTTOM')
})
var listOptions = {
    // 配置不同类型数据所对应的不同图像信息
    types: {
        "default": "../dist/infoDisplay/images/Trucks/48x48/Lorry_Green.png",
        'TractorUnit_Black': '../dist/infoDisplay/images/Trucks/48x48/TractorUnit_Black.png',
        'RecoveryTruck_Blue': '../dist/infoDisplay/images/Trucks/48x48/RecoveryTruck_Blue.png',
        'MixerTruck_Yellow': '../dist/infoDisplay/images/Trucks/48x48/MixerTruck_Yellow.png'
    },
    // 配置排序字段
    sortFields: [{
        'speed': '速度'
    }, {
        'load_status': '状态'
    }],
    // 配置复选字段
    checkFields: [{
        "name": "中国外运股份有限公司",
        "open": true,
        "children": [{
            "name": "华为E2E干线组"
        }, {
            "name": "华为E2E-RDC"
        }, {
            "name": "华为C2B干线组"
        }]
    }],
    // 配置是否以异步方式添加列表索引，数据大于500条时可开启
    indexAsync: '',
    // 配置在同一时间可见的item数量，默认200
    page: 20,
    // 配置该索引显示在列表第一项
    i: 1,
    // 可添加分页、模糊搜索功能
    plugins: [ListPagination({})],
    // 配置是否以异步方式添加列表索引，数据大于500条时可开启
    indexAsync: false
};
var mapOptions = {
    // 是否为动态资源
    dynamic: true,
    // 显示动态尾迹时长，单位秒
    dynamicTime: 32,
    // 配置地图上不同数据类型所对应的shadow样式
    shadow: {},
    // 配置地图上不同数据类型所对应的icon样式
    icon: {
        "default": '../dist/infoDisplay/images/default.png',
        'TractorUnit_Black': '../dist/infoDisplay/images/TractorUnit_Black.png',
        'RecoveryTruck_Blue': '../dist/infoDisplay/images/RecoveryTruck_Blue.png'
    },
    // 配置地图上不同数据类型所对应的label样式
    label: {},
    // 拉框查询位置
    position: 'topleft'
};
var info = new InfoDisplay(listOptions, mapOptions);
var i = 2;
$.ajax({
    type: "GET",
    url: '../dist/infoDisplay/data/data' + 1 + '.json',
    dataType: 'json',
    success: function(msg) {
        var L = info.addData(msg);
    }
});
window.setInterval(function() {
    var url = '../dist/infoDisplay/data/data' + i + '.json';
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function(msg) {
            var L = info.addData(msg);
        }
    });
    i++;
}, 10000);