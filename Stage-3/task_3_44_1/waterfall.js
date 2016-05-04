; (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root['Waterfall'] = factory();
    }
}(this, function () {

    'use strict';

    var Waterfall = function (opts) {

        var opts = opts || {};
        var containerSelector = opts.containerSelector || 'waterfallContainer';//存放内容的容器
        var boxSelector = opts.boxSelector || 'waterfallBox';//将要展示的列表容器
        this.column = opts.column || 1;
        this.container = document.querySelector(containerSelector);
        this.boxes = this.container ? Array.prototype.slice.call(this.container.querySelectorAll(boxSelector)) : [];
        this.compose();
        var that = this;
        window.onload = function () {
            that.compose(true);
        }
    }

    Waterfall.prototype = {
        //显示的列数
        initColumn: function (columnNum) {
            // create column div
            this.columns = [];
            for (var i = 0; i < columnNum; i++) {
                var columnDiv = document.createElement('div');
                columnDiv.style.width = (100 / columnNum) + '%';
                columnDiv.setAttribute('class', 'waterfallColumn');
                this.columns.push(columnDiv);
                this.container.appendChild(columnDiv);
            }
        },
        
        //计算最小高度的列
        getMinHeightIndex: function () {
            var min = this.columns[0].clientHeight;
            var index = 0;
            for (var i = 0; i < this.columns.length; i++) {
                if (this.columns[i].clientHeight < min) {
                    min = this.columns[i].clientHeight;
                    index = i;
                }
            }
            return index;
        },

        /**
          * @desc init columns and add boxes
          * @param {Boolean} force - choose whether to remove the old columns
          */

        compose: function (force) {
            // remove old columns
            if (force) {
                for (var i = 0; i < this.columns.length; i++) {
                    this.columns[i].remove();
                }
            }
            // init new column
            this.initColumn(this.column);
            // compose
            for (var i = 0, l = this.boxes.length; i < l; i++) {
                var box = this.boxes[i];
                this.addBox(box);
            }
        },

        /**
          * @desc compose all boxs in column
          * @param - the element which add in the box
          */

        addBox: function (ele) {
            var index = this.getMinHeightIndex();
            var column = this.columns[index];
            column.appendChild(ele);
        }
    }

    return Waterfall;

}));