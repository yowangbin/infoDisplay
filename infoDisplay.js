 /*
  * @date   2016-03-01
  * @author wangbin
  * @email  yowangbin@gmail.com
  */
 function InfoDisplay() {
     /*依赖检查*/
     if (typeof window.List === 'undefined') {
         throw new Error('请先添加list.js，github:https://github.com/javve/list.js.git');
     }
     if (typeof window.maplet === 'undefined') {
         throw new Error('未检测到maplet对象');
     }
     /*组件初始化*/
     this.init(arguments);
 }

 /*
  * 功能: 组件初始化
  */
 InfoDisplay.prototype.init = function(arg) {
     this.until.extend(this.list.listOptions, arg[0]);
     this.until.extend(this.map.mapOptions, arg[1]);
     this.dom._initLayout(this.map.mapOptions);
     this.modal.init();
     this.event._lookupButtonListener();
     this.event._resetButtonListener();
     this.event._disableMapMousewheelEvent();
 };

 /*
  * 功能: 工具
  */
 InfoDisplay.prototype.until = {
     /*计数器*/
     counter: 0,
     /*对象扩展*/
     extend: function(dest) {
         var i, j, len, src;
         for (j = 1, len = arguments.length; j < len; j++) {
             src = arguments[j];
             for (i in src) {
                 dest[i] = src[i];
             }
         }
         return dest;
     },
     copy: function(obj) {
         var newObj = {};
         for (var i in obj) {
             newObj[i] = obj[i];
         }
         return newObj;
     },
     eq: function() {
         for (var i in arguments[0]) {
             if (arguments[0][i] === arguments[1][i]) continue;
             else return false;
         }
         return true;
     },
     contains: function(arr, obj) {
         var i = arr.length;
         while (i--) {
             if (arr[i].plat.trim() === obj.trim()) {
                 return {
                     status: true,
                     num: i
                 };
             }
         }
         return {
             status: false
         };
     }
 };

 /*
  * 功能: DOM操作
  */
 InfoDisplay.prototype.dom = {
     default: {
         placeholder: '请输入检索关键字...',
         modalButtonText: '机构选择 '
     },
     /*解析字符串为DOM对象*/
     _parseToDOM: function(str) {
         var div = document.createElement("div");
         if (typeof str == "string")
             div.innerHTML = str;
         return div.childNodes[0];
     },
     /*初始化DOM*/
     _initLayout: function(arg) {
         var map = document.getElementById('map');
         var container = this._createContainer();
         container.appendChild(this._createListWrapper());
         this._createModal();
         map.appendChild(container);
         map.appendChild(this._createSelectAreaButton(arg))
         return true;
     },
     /*最外层容器*/
     _createContainer: function() {
         var div = document.createElement('div');
         div.id = 'infoDisplayContainer';
         return div;
     },
     /*输入框*/
     _createInput: function() {
         var input = document.createElement('input');
         input.type = 'text';
         input.className = 'form-control input-sm search';
         input.placeholder = this.default.placeholder;
         return input;
     },
     /*区域选择*/
     _createSelectAreaButton: function(arg) {
         var lookupButton = document.createElement('div');
         lookupButton.className = 'lookup' + ' ' + arg.position;
         return lookupButton;
     },
     /*机构选择、重置、排序*/
     _dataButtonGroup: function() {
         var fields = InfoDisplay.prototype.list.listOptions.sortFields;
         var div = document.createElement('div');
         div.className = 'sortButton btn-group';
         div.role = "group";
         /*机构选择*/
         var modalButton = document.createElement('button');
         modalButton.type = 'button';
         modalButton.className = 'btn btn-default btn-xs';
         modalButton.setAttribute('data-toggle', 'modal');
         modalButton.setAttribute('data-target', '#myModal');
         var modalIcon = document.createElement('i');
         modalIcon.className = 'glyphicon glyphicon-user';
         modalButton.innerHTML = this.default.modalButtonText;
         modalButton.appendChild(modalIcon);
         div.appendChild(modalButton);
         /*重置*/
         var resetButton = document.createElement('button');
         resetButton.type = 'button';
         resetButton.className = 'btn btn-default btn-xs reset';
         var resetIcon = document.createElement('i');
         resetIcon.className = 'glyphicon glyphicon-refresh';
         resetButton.innerHTML = '重置';
         resetButton.appendChild(resetIcon);
         div.appendChild(resetButton);
         /*排序*/
         for (var j = 0, l = fields.length; j < l; j++) {
             var button = document.createElement('button'),
                 _i = document.createElement('i');
             button.type = 'button';
             button.className = 'btn btn-default btn-xs sort';
             for (var key in fields[j]) {
                 button.setAttribute('data-sort', key);
                 button.innerHTML = fields[j][key];
             }
             _i.className = 'glyphicon glyphicon-menu-down';
             button.appendChild(_i);
             div.appendChild(button);
         }
         return div;
     },
     /*清除浮动*/
     _createClearFix: function() {
         var div = document.createElement('div');
         div.className = 'clearfix';
         return div;
     },
     /*列表容器初始化*/
     _createListWrapper: function() {
         var div = document.createElement('div'),
             ul = document.createElement('ul'),
             pageUl = document.createElement('ul');
         div.id = 'hacker-list';
         ul.className = 'list-group';
         pageUl.className = 'pagination pagination-sm';
         div.appendChild(this._createInput());
         div.appendChild(this._dataButtonGroup());
         div.appendChild(this._createClearFix());
         div.appendChild(ul);
         div.appendChild(pageUl);
         return div;
     },
     /*Modal层*/
     _createModal: function() {
         var html = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
             '<div class="modal-dialog" role="document">' +
             '<div class="modal-content">' +
             '<div class="modal-header">' +
             '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
             '</div>' +
             '<div class="modal-body">' +
             '<ul id="treeDemo" class="ztree"></ul>' +
             '</div>' +
             '<div class="modal-footer">' +
             '</div>' +
             '</div>' +
             '</div>' +
             '</div>';
         document.body.appendChild(this._parseToDOM(html));
     }
 };

 /*
  * 功能: 列表相关操作
  */
 InfoDisplay.prototype.modal = {
     /*zTree对象*/
     Tree: {},
     init: function() {
         this._createTree();
     },
     /*
      * function 创建机构选择zTree
      * param 
      * return 
      */
     _createTree: function() {
         var setting = {
             check: {
                 enable: true,
                 chkStyle: "checkbox"
             },
             callback: {
                 onCheck: function(event, treeId, treeNode) {
                     var data = InfoDisplay.prototype.data._getTreeData();
                     var mapData = InfoDisplay.prototype.data._getMapData(data, InfoDisplay.prototype.map.mapOptions).data,
                         listData = InfoDisplay.prototype.data._getListData(data, InfoDisplay.prototype.list.listOptions);
                     InfoDisplay.prototype.map._createMarker(mapData);
                     InfoDisplay.prototype.map._createWake(mapData);
                     InfoDisplay.prototype.list._updateList(listData);
                 }
             }
         };
         this.Tree = $.fn.zTree.init($("#treeDemo"), setting, InfoDisplay.prototype.list.listOptions.checkFields);
         this.Tree.checkAllNodes(true);
     }
 };

 /*
  * 功能: 数据处理
  */
 InfoDisplay.prototype.data = {
     /*原始数据*/
     rawData: {},
     /*地图数据*/
     mapData: {},
     /*列表数据*/
     listData: [],
     /*地图拉框查询数据*/
     filterData: [],
     /*机构选择数据*/
     treeData: {},
     /*尾迹数据*/
     wakeData: {},
     /*截取原始数据字段*/
     mapDataFields: ['type', 'plat', 'CNAME', 'speed', 'place', 'create_time', 'load_status', 'lng', 'lat', 'driver_name', 'driver_phone', 'update_time', 'direction'],
     listDataFields: ['type', 'plat', 'speed', 'place', 'create_time', 'load_status', 'lng', 'lat', 'driver_name', 'driver_phone'],

     /*
      * function 数据初始化
      * param {Object} 原始数据
      * return none 
      */
     init: function(arg) {
         var listOptions = InfoDisplay.prototype.list.listOptions;
         this.rawData = arg;
         var data = this._getTreeData(arg);
         var re = this._getMapData(data);
         this._getListData(data, listOptions);
         return {
             mapDataLength: re.length
         }
     },

     /*
      * function 获取地图数据
      * param {Object} 原始数据
      * return {Object} mapData
      */
     _getMapData: function(arg) {
         this.mapData = {};
         var fields = this.mapDataFields;
         for (var i = 0, l = arg.list.length; i < l; i++) {
             var singleData = {};
             for (var j = 0; j < fields.length; j++) {
                 singleData[fields[j]] = arg.list[i][fields[j]];
             }
             this.mapData[singleData.plat] = singleData;
         }
         return {
             data: this.mapData,
             length: i
         };
     },

     /*
      * function 获取列表数据
      * param {Object} 原始数据
      * return {Object} listData
      */
     _getListData: function(data, listOptions) {
         this.listData = [];
         if (data) {
             var fields = this.listDataFields;
             for (var i = 0, l = data.list.length; i < l; i++) {
                 var singleData = {};
                 for (var type in listOptions.types) {
                     if (data.list[i].type.trim() == type.trim()) {
                         singleData.image = listOptions.types[type];
                         break;
                     } else {
                         singleData.image = listOptions.types.default;
                     }
                 }

                 for (var j = 0; j < fields.length; j++) {
                     singleData[fields[j]] = data.list[i][fields[j]];
                 }
                 this.listData.push(singleData);
             }
         }
         return this.listData;
     },

     /*
      * function 过滤地图数据
      * param {String} 数据唯一标识
      * return none
      */
     _filterMapData: function(plat) {
         for (var i = 0, l = this.listData.length; i < l; i++) {
             if (this.listData[i].plat === plat) {
                 this.filterData.push(this.listData[i]);
             }
         }
     },

     /*
      * function 获取机构选择数据
      * param 
      * return 
      */
     _getTreeData: function() {
         this.treeData.list = [];
         var checkedNodes = InfoDisplay.prototype.modal.Tree.getCheckedNodes();
         for (var i = 0; i < checkedNodes.length; i++) {
             for (var j = 0; j < this.rawData.list.length; j++) {
                 var str = checkedNodes[i].name.trim();
                 var re = new RegExp(this.rawData.list[j].CNAME);
                 if (re.test(str)) {
                     this.treeData.list.push(this.rawData.list[j]);
                 }
             }
         }
         return this.treeData;
     },

     /*
      * function 保存尾迹数据
      * param marker[i]
      * return [] this.wakeData
      * BUG 若坐标更新时间不变，尾迹存在内存泄漏风险
      */
     _saveWakeData: function(arg) {
         /*当前加载数据次数*/
         var counter = InfoDisplay.prototype.until.counter,
             /*尾迹保留时长*/
             limitTime = InfoDisplay.prototype.map.mapOptions.dynamicTime * 1000;
         /*标识*/
         for (var plat in arg) {
             var data = arg[plat];
             /*初始化数据*/
             if (counter == 1)
                 this.wakeData[plat] = [{
                     pt: new MPoint(data.lng, data.lat),
                     update_time: data.update_time
                 }];
             else {
                 /*尾迹时长判断*/
                 var flag = data.update_time - this.wakeData[plat][0].update_time > limitTime;
                 /*添加尾迹*/
                 this.wakeData[plat].push({
                     pt: new MPoint(data.lng, data.lat),
                     update_time: data.update_time
                 });
                 /*控制尾迹*/
                 if (flag) this.wakeData[plat].shift();
             }
         }
         return this.wakeData;
     }
 };

 /*
  * 功能: 列表相关操作
  */
 InfoDisplay.prototype.list = {
     /*List对象*/
     L: {},
     /*列表配置*/
     listOptions: {
         types: {
             "default": "../infoDisplay/images/Trucks/48x48/PoliceCar_Blue.png"
         },
         page: 200,
         i: 1,
         item: '<li class="group-item" onclick="InfoDisplay.prototype.event._listItemListener(this)">' +
             '<div class="item-left">' +
             '<a href="#"><img class="item-object image"  alt="..."></a>' +
             '</div>' +
             '<div class="item-body">' +
             '<div>' +
             '<div><small class="plat"></small></div>' +
             '<div><small class="speed"></small></div>' +
             '<div><small class="load_status"></small></div>' +
             '</div>' +
             '<small class="place"></small>' +
             '<p class="lng" style="display:none"></p>' +
             '<p class="lat" style="display:none"></p>' +
             '</div>' +
             '</li>',
         plugins: [],
         indexAsync: false
     },

     /*
      * function 列表初始化
      * param 
      * return 
      */
     init: function() {
         var data = InfoDisplay.prototype.data.listData;
         if (InfoDisplay.prototype.until.counter == 1) {
             this._createList(data);
         } else {
             this._updateList(data);
         }
         InfoDisplay.prototype.event._searchComplete();
         return this.L;
     },

     /*
      * function 创建列表
      * param 
      * return 
      */
     _createList: function(data) {
         var page = this.listOptions.page,
             i = this.listOptions.i,
             item = this.listOptions.item,
             plugins = this.listOptions.plugins,
             indexAsync = this.listOptions.indexAsync;
         if (typeof page === 'number' && typeof i === 'number' && typeof item === 'string' && typeof indexAsync === 'boolean') {
             var options = {
                 valueNames: ['speed', 'load_status', {
                     attr: 'src',
                     name: 'image'
                 }],
                 item: item,
                 page: page,
                 i: i,
                 plugins: plugins,
                 indexAsync: indexAsync
             }
             this.L = new List('hacker-list', options, data);
         } else throw new Error("参数类型错误");
     },

     /*
      * function 更新列表
      * param 
      * return 
      */
     _updateList: function(values) {
         var items = this.L.items,
             k, i, j, res, itemsVal = [];
         /*获取列表所有元素value*/
         for (k = 0; k < items.length; k++) {
             itemsVal.push(items[k]._values);
         }
         /*遍历列表元素value数组*/
         for (i = 0; i < itemsVal.length; i++) {
             /*判断参数数组内是否包含该列表元素value*/
             res = InfoDisplay.prototype.until.contains(values, itemsVal[i].plat);
             /*包含*/
             if (res.status) {
                 /*判断是否相等*/
                 if (!InfoDisplay.prototype.until.eq(itemsVal[i], values[res.num])) {
                     /*不相等，列表更新*/
                     items[i].values(values[res.num]);
                 }
             } else {
                 /*不包含，移除该列表元素*/
                 this.L.remove('plat', itemsVal[i].plat)
             }
         }
         /*遍历参数数组*/
         for (j = 0; j < values.length; j++) {
             /*判断列表内是否包含该参数值*/
             res = InfoDisplay.prototype.until.contains(itemsVal, values[j].plat);
             /*不包含，列表添加该值*/
             if (!res.status) {
                 this.L.add(values[j]);
             }
         }
     }
 };

 /*
  * 功能: 地图相关操作
  */
 InfoDisplay.prototype.map = {
     /*地图markers*/
     markers: {},
     /*地图配置*/
     mapOptions: {
         position: 'topleft'
     },

     /*
      * function 地图初始化
      * param 
      * return 
      */
     init: function(arg) {
         /*获取地图数据*/
         var mapData = InfoDisplay.prototype.data.mapData,
             /*区分动态资源与静态资源*/
             dynamic = this.mapOptions.dynamic;
         /*若当前地图marker数量与数据长度不同 或 数据加载次数为1，则重新创建marker，否则更新marker*/
         if (arg != maplet.getMarkers().length || InfoDisplay.prototype.until.counter == 1)
             this._createMarker(mapData);
         else
             this._updateMarker(mapData);
         /*绘制尾迹*/
         if (dynamic) this._createWake(mapData, true);
         else return false;
     },

     /*
      * function 更新marker坐标、信息、角度、绘制尾迹
      * param mapData
      * return true
      */
     _updateMarker: function(arg) {
         for (var i in this.markers) {
             /*更新marker坐标*/
             var lat = arg[i].lat,
                 lng = arg[i].lng;
             var point = new MPoint(lng, lat);
             this.markers[i].setPoint(point, true);
             /*更新marker信息*/
             this.markers[i].direction = arg[i].direction;
             this.markers[i].update_time = arg[i].update_time;
             /*更新角度*/
             this._updateAngle(this.markers[i]);
             /*更新label信息*/
             this.markers[i].label.resetLabel({
                 content: this._labelHtml(arg[i])
             })
         }
     },

     /*
      * function 航向改变
      * param 
      * return 
      */
     _updateAngle: function(marker, preLngLat, nextLngLat) {
         var markerDiv = document.getElementById(marker.id);
         if (markerDiv) {
             markerDiv.style.transform = 'rotate(' + marker.direction + 'deg)';
         }
     },

     /*
      * function 创建尾迹
      * param markers[i]
      * return none
      */
     _createWake: function(arg) {
         /*清除尾迹*/
         for (var i = 0; i < maplet.getPolylines().length; i++) {
             maplet.removeOverlay(maplet.getPolylines()[i], true);
         }
         /*保存尾迹*/
         if (arguments[1]) InfoDisplay.prototype.data._saveWakeData(arg);
         /*添加尾迹*/
         for (var plat in arg) {
             this._addPolyline(plat, InfoDisplay.prototype.data.wakeData, arguments[1]);
         }
     },

     /*
      * function 添加尾迹
      * param 
      * return 
      */
     _addPolyline: function(plat, arg, flag) {
         var pts = [];
         for (var j = 0; j < arg[plat].length; j++) {
             pts.push(arg[plat][j].pt);
         }
         maplet.addOverlay(new MPolyline(pts));
     },


     /*
      * function 创建marker
      * param 
      * return 
      */
     _createMarker: function(arg) {
         var marker;
         maplet.clearOverlays(true);
         this.markers = {};
         for (var i in arg) {
             for (var type in this.mapOptions.icon) {
                 if (type == arg[i].type) {
                     marker = new MMarker(
                         new MPoint(arg[i].lng, arg[i].lat),
                         this._createMIcon(this.mapOptions.icon[type]),
                         null,
                         this._createLabel(arg[i])
                     );
                     break;
                 } else {
                     marker = new MMarker(
                         new MPoint(arg[i].lng, arg[i].lat),
                         this._createMIcon(this.mapOptions.icon.default),
                         null,
                         this._createLabel(arg[i])
                     );
                 }
             }
             marker.plat = arg[i].plat;
             marker.direction = arg[i].direction;
             marker.update_time = arg[i].update_time;
             this.markers[marker.plat] = marker;
             maplet.addOverlay(marker);
             this._updateAngle(this.markers[marker.plat]);
             InfoDisplay.prototype.event._mapMarkersListener.call(this, marker);
         }
     },

     /*
      * function 创建Micon
      * param 
      * return 
      */
     _createMIcon: function(arg) {
         return new MIcon(arg, 19, 38);
     },

     /*
      * function 返回label html
      * param  mapData
      * return html String
      */
     _labelHtml: function(arg) {
         return '<div class="panel">' +
             '<div class="panel-body">' +
             '<p><strong>车牌：</strong><strong>' + arg.plat + '</strong></p>' +
             '<p><small>速度：</small><small>' + arg.speed + '</small></p>' +
             '<p><small>地点：</small><small>' + arg.place + '</small></p>' +
             '<p><small>司机名：</small><small>' + arg.driver_name + '</small></p>' +
             '<p><small>电话：</small><small>' + arg.driver_phone + '</small></p>' +
             '<p><small>日期：</small><small>' + arg.create_time + '</small></p>' +
             '</div>' +
             '</div>';
     },

     /*
      * function 创建Label
      * param 
      * return 
      */
     _createLabel: function(arg) {
         var options = {
             visible: false,
             enableStyle: false,
             xoffset: null,
             yoffset: null
         };
         return new MLabel(this._labelHtml(arg), options);
     },

     /*
      * function 判断坐标是否在矩形框内
      * param 
      * return 
      */
     _check: function(pt, min, max) {
         return parseFloat(pt.lon) >= parseFloat(min.lon) &&
             parseFloat(pt.lon) <= parseFloat(max.lon) &&
             parseFloat(pt.lat) <= parseFloat(max.lat) &&
             parseFloat(pt.lat) >= parseFloat(min.lat);
     },

     /*
      * function 地图拉框查询回调
      * param 
      * return 
      */
     _search: function(dataObj) {
         var that = InfoDisplay.prototype.map,
             markers = that.markers,
             items = [];
         maplet.clearOverlays();
         InfoDisplay.prototype.data.filterData = [];
         for (var i in markers) {
             if (that._check(markers[i].pt, dataObj.min, dataObj.max)) {
                 maplet.addOverlay(markers[i]);
                 InfoDisplay.prototype.map._addPolyline.call(this, i, InfoDisplay.prototype.data.wakeData, true);
                 InfoDisplay.prototype.data._filterMapData(markers[i].plat);
             }
         }
         InfoDisplay.prototype.list._updateList(InfoDisplay.prototype.data.filterData);
     },

     /*
      * function 地图拉框查询
      * param 
      * return 
      */
     _lookup: function() {
         maplet.setMode("lookup", InfoDisplay.prototype.map._search);
     }
 };

 /*
  * 功能: 事件注册
  */
 InfoDisplay.prototype.event = {
     /*
      * function 列表元素点击事件回调
      * param 
      * return 
      */
     _listItemListener: function(e) {
         var event = e || window.event;
         maplet.setCenter(new MPoint(e.getElementsByClassName('lng')[0].innerHTML, e.getElementsByClassName('lat')[0].innerHTML));
         maplet.zoomTo(10);
     },

     /*
      * function marker注册点击事件
      * param 
      * return 
      */
     _mapMarkersListener: function(marker) {
         MEvent.addListener(marker, "click", function(mk) {
             if (!mk.label.visible) {
                 mk.label.setVisible(true);
                 InfoDisplay.prototype.list.L.get('plat', mk.plat)[0].elm.className = 'mapSelected group-item';
             } else {
                 mk.label.setVisible(false);
                 InfoDisplay.prototype.list.L.get('plat', mk.plat)[0].elm.className = 'group-item';
             }
         });
     },

     /*
      * function 拉框查询按钮注册点击事件
      * param 
      * return 
      */
     _lookupButtonListener: function() {
         var btn = document.getElementsByClassName('lookup')[0];
         btn.onclick = function() {
             InfoDisplay.prototype.map._lookup.call(this);
         };
     },

     /*
      * function 列表搜索完成回调函数
      * param 
      * return 
      */
     _searchComplete: function() {
         InfoDisplay.prototype.list.L.on('searchComplete', function(e) {
             var matchingItems = [];
             for (var i = 0, l = e.matchingItems.length; i < l; i++) {
                 matchingItems.push(e.matchingItems[i]._values);
             }
             InfoDisplay.prototype.map._createMarker(matchingItems);
         });
     },

     /*
      * function 重置按钮注册点击事件
      * param 
      * return 
      */
     _resetButtonListener: function() {
         var btn = document.getElementsByClassName('reset')[0];
         btn.onclick = function() {
             InfoDisplay.prototype.map._createMarker(InfoDisplay.prototype.data.mapData);
             InfoDisplay.prototype.map._createWake(InfoDisplay.prototype.data.mapData);
             InfoDisplay.prototype.list._updateList(InfoDisplay.prototype.data.listData);
         };
     },

     /*
      * function 防止Mousewheel事件穿透
      * param 
      * return 
      */
     _disableMapMousewheelEvent: function() {
         var el = document.getElementById('infoDisplayContainer');
         el.onmouseenter = function() {
             window.MOUSEWHEEL = false;
         }
         el.onmouseleave = function() {
             window.MOUSEWHEEL = true;
         }
     }
 };

 /*
  * 功能: 添加数据接口
  */
 InfoDisplay.prototype.addData = function() {
     /*清除地图缓存数据*/
     maplet.clearCache();
     /*计数器加一，用于判断是否为第一次加载*/
     this.until.counter++;
     /*数据初始化*/
     var re = this.data.init(arguments[0]);
     /*列表初始化*/
     this.list.init();
     /*地图初始化*/
     this.map.init(re.mapDataLength);
 };