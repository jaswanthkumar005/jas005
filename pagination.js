"use strict";
if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
alert();
    // Yes, there's really no need for `Object.defineProperty` here
    NodeList.prototype.forEach = Array.prototype.forEach;
}
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
//polyfill
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}
//polyfill
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Author: Ajay Badgujar
Website: https://wwww.ajaybadgujar.com/
*/
var Pagination = function () {
    function Pagination(options) {
        _classCallCheck(this, Pagination);

        this.id = options.id;
        this.element = document.getElementById(this.id);
        this.tableID = options.tableID;
        this.tableBody = document.querySelector("#" + this.tableID + " tbody");
        this.tableElement = document.getElementById(this.tableID);

        this.nextButton = this.element.getElementsByClassName('next')[0];
        this.prevButton = this.element.getElementsByClassName('previous')[0];
        this.firstButton = this.element.querySelector('a.first');
        this.lastButton = this.element.querySelector('a.last');

        this.paginationLabel = this.element.getElementsByClassName('pagination-label')[0];
        this.cmbRowCount = this.element.querySelector(".cmb-row-count");
        this.noOfRows = options.noOfRows;

        //default values        
        this.start = 1;
        this.end = this.noOfRows;
        this.currentPageNo = 1;
        this.init();
    }

    _createClass(Pagination, [{
        key: "init",
        value: function init() {
            this.collectingTableInfo();
            this.addEvents();
        }
    }, {
        key: "collectingTableInfo",
        value: function collectingTableInfo() {

            this.totalRows = document.querySelectorAll("#" + this.tableID + " tbody tr");
            this.totalNoOfRows = this.totalRows.length;

            if (this.totalNoOfRows <= this.noOfRows) {
                this.element.style.display = 'none';
            } else {
                this.generatePageButtons();
                this.showRows(this.totalRows, this.start, this.end);
            }
        }
    }, {
        key: "generatePageButtons",
        value: function generatePageButtons() {
            var _this = this;

            this.currentPageNo = 1;

            this.noOfPages = Math.ceil(this.totalNoOfRows / this.noOfRows);

            // remove pre generated buttons if exist
            this.element.querySelectorAll(".btn-page").forEach(function (element) {
			console.log(element);
                element.remove();
				//element.outerHTML ='';
				console.log(element,"ELEM");
            });

            for (var i = 1; i <= this.noOfPages; i++) {
                var a = document.createElement('a');
                a.href = "#";
                a.setAttribute('data-page', i);
                a.className = "round btn-page btn-page-" + i;
                if (i === this.currentPageNo) {
                    a.classList.add("active");
                }
                a.innerHTML = i;
                a.addEventListener('click', function (e) {
                    return _this.jumpToPage(e);
                });
                this.element.querySelector(".middle").insertBefore(a, this.element.querySelector('.next'));
            }
        }
    }, {
        key: "addEvents",
        value: function addEvents() {
            var _this2 = this;

            this.nextButton.addEventListener('click', function () {
                return _this2.onNext();
            });
            this.prevButton.addEventListener('click', function () {
                return _this2.onPrevious();
            });
            this.firstButton.addEventListener('click', function () {
                return _this2.onFirst();
            });
            this.lastButton.addEventListener('click', function () {
                return _this2.onLast();
            });

            this.cmbRowCount.addEventListener('change', function (e) {
                return _this2.onRowCountChange(e);
            });
        }
    }, {
        key: "onNext",
        value: function onNext() {

            this.currentPageNo++;

            this.goToThePage();
        }
    }, {
        key: "onPrevious",
        value: function onPrevious() {

            this.currentPageNo--;
            this.goToThePage();
        }
    }, {
        key: "onFirst",
        value: function onFirst() {
            console.log('asfljsd');
            this.currentPageNo = 1;
            this.goToThePage();
        }
    }, {
        key: "onLast",
        value: function onLast() {
            this.currentPageNo = this.noOfPages;
            console.log(this.currentPageNo);
            this.goToThePage();
        }
    }, {
        key: "jumpToPage",
        value: function jumpToPage(e) {
            this.currentPageNo = parseInt(e.target.getAttribute('data-page'));
            this.goToThePage();
        }
    }, {
        key: "goToThePage",
        value: function goToThePage() {
            this.start = (this.currentPageNo - 1) * this.noOfRows + 1;
            this.end = this.start + this.noOfRows - 1;

            if (this.end >= this.totalNoOfRows) {
                this.end = this.totalNoOfRows;
            }

            this.showRows(this.totalRows, this.start, this.end);
        }
    }, {
        key: "onRowCountChange",
        value: function onRowCountChange(e) {
            this.noOfRows = parseInt(e.target.value);
            this.generatePageButtons();
            this.start = 1;
            this.end = this.noOfRows;
            this.showRows(this.totalRows, this.start, this.end);
        }
    }, {
        key: "showRows",
        value: function showRows(rows, start, end) {

            start = start - 1;
            end = end - 1;

            this.tableBody.innerHTML = "";

            for (var i = 0; i < rows.length; i++) {
                if (i >= start && i <= end) {
                    this.tableBody.appendChild(rows[i]);
                }
            }

            this.updatePagination();
        }
    }, {
        key: "updatePagination",
        value: function updatePagination() {

            if (this.end == this.totalNoOfRows) {
                this.nextButton.style.display = 'none';
                this.lastButton.style.display = 'none';
            } else {
                this.nextButton.style.display = 'block';
                this.lastButton.style.display = 'block';
            }

            if (this.start == 1) {
                this.prevButton.style.display = 'none';
                this.firstButton.style.display = 'none';
            } else {
                this.prevButton.style.display = 'block';
                this.firstButton.style.display = 'block';
            }

            document.querySelector(".btn-page.active").classList.remove('active');
            document.querySelector(".btn-page-" + this.currentPageNo).classList.add('active');

            this.paginationLabel.innerHTML = "Viewing <span>" + this.start + "-" + this.end + "</span> of <span>" + this.totalNoOfRows + "</span>";
        }
    }]);

    return Pagination;
}();
