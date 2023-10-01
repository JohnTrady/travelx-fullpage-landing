(() => {
    var __webpack_modules__ = {
        545: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function() {
                    "use strict";
                    var e = {
                        d: function(t, i) {
                            for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                                enumerable: !0,
                                get: i[s]
                            });
                        },
                        o: function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }
                    }, t = {};
                    e.d(t, {
                        default: function() {
                            return B;
                        }
                    });
                    var i = {
                        days: "days",
                        months: "months",
                        years: "years",
                        day: "day",
                        month: "month",
                        year: "year",
                        eventChangeViewDate: "changeViewDate",
                        eventChangeCurrentView: "changeCurrentView",
                        eventChangeFocusDate: "changeFocusDate",
                        eventChangeSelectedDate: "changeSelectedDate",
                        eventChangeTime: "changeTime",
                        eventChangeLastSelectedDate: "changeLastSelectedDate",
                        actionSelectDate: "selectDate",
                        actionUnselectDate: "unselectDate",
                        cssClassWeekend: "-weekend-"
                    }, s = {
                        classes: "",
                        inline: !1,
                        locale: {
                            days: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
                            daysShort: [ "Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб" ],
                            daysMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
                            months: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                            monthsShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                            today: "Сегодня",
                            clear: "Очистить",
                            dateFormat: "dd.MM.yyyy",
                            timeFormat: "HH:mm",
                            firstDay: 1
                        },
                        startDate: new Date,
                        firstDay: "",
                        weekends: [ 6, 0 ],
                        dateFormat: "",
                        altField: "",
                        altFieldDateFormat: "T",
                        toggleSelected: !0,
                        keyboardNav: !0,
                        selectedDates: !1,
                        container: "",
                        isMobile: !1,
                        visible: !1,
                        position: "bottom left",
                        offset: 12,
                        view: i.days,
                        minView: i.days,
                        showOtherMonths: !0,
                        selectOtherMonths: !0,
                        moveToOtherMonthsOnSelect: !0,
                        showOtherYears: !0,
                        selectOtherYears: !0,
                        moveToOtherYearsOnSelect: !0,
                        minDate: "",
                        maxDate: "",
                        disableNavWhenOutOfRange: !0,
                        multipleDates: !1,
                        multipleDatesSeparator: ", ",
                        range: !1,
                        dynamicRange: !0,
                        buttons: !1,
                        monthsField: "monthsShort",
                        showEvent: "focus",
                        autoClose: !1,
                        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                        navTitles: {
                            days: "MMMM, <i>yyyy</i>",
                            months: "yyyy",
                            years: "yyyy1 - yyyy2"
                        },
                        timepicker: !1,
                        onlyTimepicker: !1,
                        dateTimeSeparator: " ",
                        timeFormat: "",
                        minHours: 0,
                        maxHours: 24,
                        minMinutes: 0,
                        maxMinutes: 59,
                        hoursStep: 1,
                        minutesStep: 1,
                        onSelect: !1,
                        onChangeViewDate: !1,
                        onChangeView: !1,
                        onRenderCell: !1,
                        onShow: !1,
                        onHide: !1,
                        onClickDayName: !1
                    };
                    function a(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                        return "string" == typeof e ? t.querySelector(e) : e;
                    }
                    function n() {
                        let {tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {}} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
                        return t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), 
                        a && r(n, a), n;
                    }
                    function r(e, t) {
                        for (let [i, s] of Object.entries(t)) void 0 !== s && e.setAttribute(i, s);
                        return e;
                    }
                    function h(e) {
                        return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
                    }
                    function o(e) {
                        let t = e.getHours(), {hours: i, dayPeriod: s} = l(t);
                        return {
                            year: e.getFullYear(),
                            month: e.getMonth(),
                            fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                            date: e.getDate(),
                            fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                            day: e.getDay(),
                            hours: t,
                            fullHours: d(t),
                            hours12: i,
                            dayPeriod: s,
                            fullHours12: d(i),
                            minutes: e.getMinutes(),
                            fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
                        };
                    }
                    function l(e) {
                        return {
                            dayPeriod: e > 11 ? "pm" : "am",
                            hours: e % 12 == 0 ? 12 : e % 12
                        };
                    }
                    function d(e) {
                        return e < 10 ? "0" + e : e;
                    }
                    function c(e) {
                        let t = 10 * Math.floor(e.getFullYear() / 10);
                        return [ t, t + 9 ];
                    }
                    function u() {
                        let e = [];
                        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                        return i.forEach((t => {
                            if ("object" == typeof t) for (let i in t) t[i] && e.push(i); else t && e.push(t);
                        })), e.join(" ");
                    }
                    function p(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
                        if (!e || !t) return !1;
                        let a = o(e), n = o(t);
                        return {
                            [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                            [i.months]: a.month === n.month && a.year === n.year,
                            [i.years]: a.year === n.year
                        }[s];
                    }
                    function m(e, t, i) {
                        let s = g(e, !1).getTime(), a = g(t, !1).getTime();
                        return i ? s >= a : s > a;
                    }
                    function v(e, t) {
                        return !m(e, t, !0);
                    }
                    function g(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
                        return "boolean" != typeof t || t || function(e) {
                            e.setHours(0, 0, 0, 0);
                        }(i), i;
                    }
                    function D(e, t, i) {
                        e.length ? e.forEach((e => {
                            e.addEventListener(t, i);
                        })) : e.addEventListener(t, i);
                    }
                    function y(e, t) {
                        return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
                    }
                    function f(e, t, i) {
                        return e > i ? i : e < t ? t : e;
                    }
                    function w(e) {
                        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                        return i.filter((e => e)).forEach((t => {
                            for (let [i, s] of Object.entries(t)) if (void 0 !== s && "[object Object]" === s.toString()) {
                                let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                                e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                            } else e[i] = s;
                        })), e;
                    }
                    function b(e) {
                        let t = e;
                        return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log(`Unable to convert value "${e}" to Date object`), 
                        t = !1), t;
                    }
                    function k(e) {
                        let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                        return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
                    }
                    function $(e, t, i) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var s = i.call(e, "string");
                                    if ("object" != typeof s) return s;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            }(e);
                            return "symbol" == typeof t ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class C {
                        constructor() {
                            let {type: e, date: t, dp: i, opts: s, body: a} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            $(this, "focus", (() => {
                                this.$cell.classList.add("-focus-"), this.focused = !0;
                            })), $(this, "removeFocus", (() => {
                                this.$cell.classList.remove("-focus-"), this.focused = !1;
                            })), $(this, "select", (() => {
                                this.$cell.classList.add("-selected-"), this.selected = !0;
                            })), $(this, "removeSelect", (() => {
                                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                            })), $(this, "onChangeSelectedDate", (() => {
                                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                            })), $(this, "onChangeFocusDate", (e => {
                                if (!e) return void (this.focused && this.removeFocus());
                                let t = p(e, this.date, this.type);
                                t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                            })), $(this, "render", (() => (this.$cell.innerHTML = this._getHtml(), this.$cell.adpCell = this, 
                            this.$cell))), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, 
                            this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
                        }
                        init() {
                            let {range: e, onRenderCell: t} = this.opts;
                            t && (this.customData = t({
                                date: this.date,
                                cellType: this.singleType,
                                datepicker: this.dp
                            })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), 
                            this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        unbindDatepickerEvents() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        _createElement() {
                            var e;
                            let {year: t, month: i, date: s} = o(this.date), a = (null === (e = this.customData) || void 0 === e ? void 0 : e.attrs) || {};
                            this.$cell = n({
                                className: this._getClassName(),
                                attrs: {
                                    "data-year": t,
                                    "data-month": i,
                                    "data-date": s,
                                    ...a
                                }
                            });
                        }
                        _getClassName() {
                            var e, t;
                            let s = new Date, {selectOtherMonths: a, selectOtherYears: n} = this.opts, {minDate: r, maxDate: h} = this.dp, {day: l} = o(this.date), d = this._isOutOfMinMaxRange(), c = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled, m = u("air-datepicker-cell", `-${this.singleType}-`, {
                                "-current-": p(s, this.date, this.type),
                                "-min-date-": r && p(r, this.date, this.type),
                                "-max-date-": h && p(h, this.date, this.type)
                            }), v = "";
                            switch (this.type) {
                              case i.days:
                                v = u({
                                    "-weekend-": this.dp.isWeekend(l),
                                    "-other-month-": this.isOtherMonth,
                                    "-disabled-": this.isOtherMonth && !a || d || c
                                });
                                break;

                              case i.months:
                                v = u({
                                    "-disabled-": d || c
                                });
                                break;

                              case i.years:
                                v = u({
                                    "-other-decade-": this.isOtherDecade,
                                    "-disabled-": d || this.isOtherDecade && !n || c
                                });
                            }
                            return u(m, v, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
                        }
                        _getHtml() {
                            var e;
                            let {year: t, month: s, date: a} = o(this.date), {showOtherMonths: n, showOtherYears: r} = this.opts;
                            if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                            switch (this.type) {
                              case i.days:
                                return !n && this.isOtherMonth ? "" : a;

                              case i.months:
                                return this.dp.locale[this.opts.monthsField][s];

                              case i.years:
                                return !r && this.isOtherDecade ? "" : t;
                            }
                        }
                        _isOutOfMinMaxRange() {
                            let {minDate: e, maxDate: t} = this.dp, {type: s, date: a} = this, {month: n, year: r, date: h} = o(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
                            return e && t ? v(c, e) || m(u, t) : e ? v(c, e) : t ? m(u, t) : void 0;
                        }
                        destroy() {
                            this.unbindDatepickerEvents();
                        }
                        _handleRangeStatus() {
                            let {rangeDateFrom: e, rangeDateTo: t} = this.dp, i = u({
                                "-in-range-": e && t && (s = this.date, a = e, n = t, m(s, a) && v(s, n)),
                                "-range-from-": e && p(this.date, e, this.type),
                                "-range-to-": t && p(this.date, t, this.type)
                            });
                            var s, a, n;
                            this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i && this.$cell.classList.add(...i.split(" "));
                        }
                        _handleSelectedStatus() {
                            let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                            e ? this.select() : !e && this.selected && this.removeSelect();
                        }
                        _handleInitialFocusStatus() {
                            p(this.dp.focusDate, this.date, this.type) && this.focus();
                        }
                        get isDisabled() {
                            return this.$cell.matches(".-disabled-");
                        }
                        get isOtherMonth() {
                            return this.dp.isOtherMonth(this.date);
                        }
                        get isOtherDecade() {
                            return this.dp.isOtherDecade(this.date);
                        }
                    }
                    function _(e, t, i) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var s = i.call(e, "string");
                                    if ("object" != typeof s) return s;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            }(e);
                            return "symbol" == typeof t ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let M = {
                        [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
                        [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
                        [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`
                    };
                    const S = ".air-datepicker-cell";
                    class T {
                        constructor(e) {
                            let {dp: t, type: s, opts: a} = e;
                            _(this, "handleClick", (e => {
                                let t = e.target.closest(S).adpCell;
                                if (t.isDisabled) return;
                                if (!this.dp.isMinViewReached) return void this.dp.down();
                                let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                                i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
                            })), _(this, "handleDayNameClick", (e => {
                                let t = e.target.getAttribute("data-day-index");
                                this.opts.onClickDayName({
                                    dayIndex: Number(t),
                                    datepicker: this.dp
                                });
                            })), _(this, "onChangeCurrentView", (e => {
                                e !== this.type ? this.hide() : (this.show(), this.render());
                            })), _(this, "onMouseOverCell", (e => {
                                let t = y(e.target, S);
                                this.dp.setFocusDate(!!t && t.adpCell.date);
                            })), _(this, "onMouseOutCell", (() => {
                                this.dp.setFocusDate(!1);
                            })), _(this, "onClickBody", (e => {
                                let {onClickDayName: t} = this.opts, i = e.target;
                                i.closest(S) && this.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e);
                            })), _(this, "onMouseDown", (e => {
                                this.pressed = !0;
                                let t = y(e.target, S), i = t && t.adpCell;
                                p(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), p(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                            })), _(this, "onMouseMove", (e => {
                                if (!this.pressed || !this.dp.isMinViewReached) return;
                                e.preventDefault();
                                let t = y(e.target, S), i = t && t.adpCell, {selectedDates: s, rangeDateTo: a, rangeDateFrom: n} = this.dp;
                                if (!i || i.isDisabled) return;
                                let {date: r} = i;
                                if (2 === s.length) {
                                    if (this.rangeFromFocused && !m(r, a)) {
                                        let {hours: e, minutes: t} = o(n);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                                    }
                                    if (this.rangeToFocused && !v(r, n)) {
                                        let {hours: e, minutes: t} = o(a);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                                    }
                                }
                            })), _(this, "onMouseUp", (() => {
                                this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                            })), _(this, "onChangeViewDate", ((e, t) => {
                                if (!this.isVisible) return;
                                let s = c(e), a = c(t);
                                switch (this.dp.currentView) {
                                  case i.days:
                                    if (p(e, t, i.months)) return;
                                    break;

                                  case i.months:
                                    if (p(e, t, i.years)) return;
                                    break;

                                  case i.years:
                                    if (s[0] === a[0] && s[1] === a[1]) return;
                                }
                                this.render();
                            })), _(this, "render", (() => {
                                this.destroyCells(), this._generateCells(), this.cells.forEach((e => {
                                    this.$cells.appendChild(e.render());
                                }));
                            })), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", 
                            this.pressed = !1, this.isVisible = !0, this.init();
                        }
                        init() {
                            this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), 
                            this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _bindEvents() {
                            let {range: e, dynamicRange: t} = this.opts;
                            D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), 
                            D(this.$el, "click", this.onClickBody), e && t && (D(this.$el, "mousedown", this.onMouseDown), 
                            D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                        _buildBaseHtml() {
                            this.$el = n({
                                className: `air-datepicker-body -${this.type}-`,
                                innerHtml: M[this.type]
                            }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
                        }
                        _getDayNamesHtml() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, {onClickDayName: a} = this.opts, n = e, r = 0;
                            for (;r < 7; ) {
                                let e = n % 7;
                                t += `<div class="${u("air-datepicker-body--day-name", {
                                    [i.cssClassWeekend]: s(e),
                                    "-clickable-": !!a
                                })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`, r++, n++;
                            }
                            return t;
                        }
                        renderDayNames() {
                            this.$names.innerHTML = this._getDayNamesHtml();
                        }
                        _generateCell(e) {
                            let {type: t, dp: i, opts: s} = this;
                            return new C({
                                type: t,
                                dp: i,
                                opts: s,
                                date: e,
                                body: this
                            });
                        }
                        _generateCells() {
                            T.getDatesFunction(this.type)(this.dp, (e => {
                                this.cells.push(this._generateCell(e));
                            }));
                        }
                        show() {
                            this.isVisible = !0, this.$el.classList.remove("-hidden-");
                        }
                        hide() {
                            this.isVisible = !1, this.$el.classList.add("-hidden-");
                        }
                        destroyCells() {
                            this.cells.forEach((e => e.destroy())), this.cells = [], this.$cells.innerHTML = "";
                        }
                        destroy() {
                            this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), 
                            this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                        static getDaysDates(e, t) {
                            let {viewDate: i, locale: {firstDay: s}} = e, a = h(i), {year: n, month: r} = o(i), l = new Date(n, r, 1), d = new Date(n, r, a), c = l.getDay() - s, u = 6 - d.getDay() + s;
                            c = c < 0 ? c + 7 : c, u = u > 6 ? u - 7 : u;
                            let p = function(e, t) {
                                let {year: i, month: s, date: a} = o(e);
                                return new Date(i, s, a - t);
                            }(l, c), m = a + c + u, v = p.getDate(), {year: g, month: D} = o(p), y = 0;
                            const f = [];
                            for (;y < m; ) {
                                let e = new Date(g, D, v + y);
                                t && t(e), f.push(e), y++;
                            }
                            return f;
                        }
                        static getMonthsDates(e, t) {
                            let {year: i} = e.parsedViewDate, s = 0, a = [];
                            for (;s < 12; ) {
                                const e = new Date(i, s);
                                a.push(e), t && t(e), s++;
                            }
                            return a;
                        }
                        static getYearsDates(e, t) {
                            let i = c(e.viewDate), s = i[0] - 1, a = i[1] + 1, n = s, r = [];
                            for (;n <= a; ) {
                                const e = new Date(n, 0);
                                r.push(e), t && t(e), n++;
                            }
                            return r;
                        }
                        static getDatesFunction() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                            return {
                                [i.days]: T.getDaysDates,
                                [i.months]: T.getMonthsDates,
                                [i.years]: T.getYearsDates
                            }[e];
                        }
                    }
                    function F(e, t, i) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var s = i.call(e, "string");
                                    if ("object" != typeof s) return s;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            }(e);
                            return "symbol" == typeof t ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class V {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            F(this, "onClickNav", (e => {
                                let t = y(e.target, ".air-datepicker-nav--action");
                                if (!t) return;
                                let i = t.dataset.action;
                                this.dp[i]();
                            })), F(this, "onChangeViewDate", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), F(this, "onChangeCurrentView", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), F(this, "onClickNavTitle", (() => {
                                this.dp.isFinalView || this.dp.up();
                            })), F(this, "update", (() => {
                                let {prevHtml: e, nextHtml: t} = this.opts;
                                this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), 
                                this.handleNavStatus();
                            })), F(this, "renderDelay", (() => {
                                setTimeout(this.render);
                            })), F(this, "render", (() => {
                                this.$title.innerHTML = this._getTitle(), function(e, t) {
                                    for (let i in t) t[i] ? e.classList.add(i) : e.classList.remove(i);
                                }(this.$title, {
                                    "-disabled-": this.dp.isFinalView
                                });
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), 
                            this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _defineDOM() {
                            this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), 
                            this.$next = a('[data-action="next"]', this.$el);
                        }
                        _bindEvents() {
                            this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
                        }
                        destroy() {
                            this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
                        }
                        _createElement() {
                            this.$el = n({
                                tagName: "nav",
                                className: "air-datepicker-nav"
                            });
                        }
                        _getTitle() {
                            let {dp: e, opts: t} = this, i = t.navTitles[e.currentView];
                            return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
                        }
                        handleNavStatus() {
                            let {disableNavWhenOutOfRange: e} = this.opts, {minDate: t, maxDate: s} = this.dp;
                            if (!t && !s || !e) return;
                            let {year: a, month: n} = this.dp.parsedViewDate, r = !!t && o(t), h = !!s && o(s);
                            switch (this.dp.currentView) {
                              case i.days:
                                t && r.month >= n && r.year >= a && this._disableNav("prev"), s && h.month <= n && h.year <= a && this._disableNav("next");
                                break;

                              case i.months:
                                t && r.year >= a && this._disableNav("prev"), s && h.year <= a && this._disableNav("next");
                                break;

                              case i.years:
                                {
                                    let e = c(this.dp.viewDate);
                                    t && r.year >= e[0] && this._disableNav("prev"), s && h.year <= e[1] && this._disableNav("next");
                                    break;
                                }
                            }
                        }
                        _disableNav(e) {
                            a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
                        }
                        _resetNavStatus() {
                            !function(e) {
                                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                                e.length ? e.forEach((e => {
                                    e.classList.remove(...i);
                                })) : e.classList.remove(...i);
                            }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
                        }
                        _buildBaseHtml() {
                            let {prevHtml: e, nextHtml: t} = this.opts;
                            this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
                        }
                        get isNavIsFunction() {
                            let {navTitles: e} = this.opts;
                            return Object.keys(e).find((t => "function" == typeof e[t]));
                        }
                    }
                    var x = {
                        today: {
                            content: e => e.locale.today,
                            onClick: e => e.setViewDate(new Date)
                        },
                        clear: {
                            content: e => e.locale.clear,
                            onClick: e => e.clear()
                        }
                    };
                    class H {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.createElement(), this.render();
                        }
                        createElement() {
                            this.$el = n({
                                className: "air-datepicker-buttons"
                            });
                        }
                        destroy() {
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        clearHtml() {
                            return this.$el.innerHTML = "", this;
                        }
                        generateButtons() {
                            let {buttons: e} = this.opts;
                            Array.isArray(e) || (e = [ e ]), e.forEach((e => {
                                let t = e;
                                "string" == typeof e && x[e] && (t = x[e]);
                                let i = this.createButton(t);
                                t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                            }));
                        }
                        attachEventToButton(e, t) {
                            e.addEventListener("click", (() => {
                                t(this.dp);
                            }));
                        }
                        createButton(e) {
                            let {content: t, className: i, tagName: s = "button", attrs: a = {}} = e;
                            return n({
                                tagName: s,
                                innerHtml: `<span tabindex='-1'>${"function" == typeof t ? t(this.dp) : t}</span>`,
                                className: u("air-datepicker-button", i),
                                attrs: a
                            });
                        }
                        render() {
                            this.generateButtons();
                        }
                    }
                    function E(e, t, i) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var s = i.call(e, "string");
                                    if ("object" != typeof s) return s;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            }(e);
                            return "symbol" == typeof t ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class L {
                        constructor() {
                            let {opts: e, dp: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            E(this, "toggleTimepickerIsActive", (e => {
                                this.dp.timepickerIsActive = e;
                            })), E(this, "onChangeSelectedDate", (e => {
                                let {date: t, updateTime: i = !1} = e;
                                t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                            })), E(this, "onChangeLastSelectedDate", (e => {
                                e && (this.setTime(e), this.render());
                            })), E(this, "onChangeInputRange", (e => {
                                let t = e.target;
                                this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                                    hours: this.hours,
                                    minutes: this.minutes
                                });
                            })), E(this, "onMouseEnterLeave", (e => {
                                let t = e.target.getAttribute("name"), i = this.$minutesText;
                                "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                            })), E(this, "onFocus", (() => {
                                this.toggleTimepickerIsActive(!0);
                            })), E(this, "onBlur", (() => {
                                this.toggleTimepickerIsActive(!1);
                            })), this.opts = e, this.dp = t;
                            let {timeFormat: s} = this.dp.locale;
                            s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
                        }
                        init() {
                            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), 
                            this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), 
                            this.bindDOMEvents();
                        }
                        bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
                        }
                        bindDOMEvents() {
                            let e = "input";
                            navigator.userAgent.match(/trident/gi) && (e = "change"), D(this.$ranges, e, this.onChangeInputRange), 
                            D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), 
                            D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), 
                            D(this.$ranges, "blur", this.onBlur);
                        }
                        createElement() {
                            this.$el = n({
                                className: u("air-datepicker-time", {
                                    "-am-pm-": this.dp.ampm
                                })
                            });
                        }
                        destroy() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), 
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        buildHtml() {
                            let {ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: h, dayPeriod: o, opts: {hoursStep: l, minutesStep: c}} = this;
                            this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   ` + (e ? `<span class='air-datepicker-time--current-ampm'>${o}</span>` : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + `      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` + `      <input type="range" name="minutes" value="${s}" min="${n}" max="${h}" step="${c}"/>   </div></div>`;
                        }
                        defineDOM() {
                            let e = e => a(e, this.$el);
                            this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), 
                            this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), 
                            this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
                        }
                        setTime(e) {
                            this.setMinMaxTime(e), this.setCurrentTime(e);
                        }
                        addTimeToDate(e) {
                            e && (e.setHours(this.hours), e.setMinutes(this.minutes));
                        }
                        setMinMaxTime(e) {
                            if (this.setMinMaxTimeFromOptions(), e) {
                                let {minDate: t, maxDate: i} = this.dp;
                                t && p(e, t) && this.setMinTimeFromMinDate(t), i && p(e, i) && this.setMaxTimeFromMaxDate(i);
                            }
                        }
                        setCurrentTime(e) {
                            let {hours: t, minutes: i} = e ? o(e) : this;
                            this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
                        }
                        setMinMaxTimeFromOptions() {
                            let {minHours: e, minMinutes: t, maxHours: i, maxMinutes: s} = this.opts;
                            this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), 
                            this.maxMinutes = f(s, 0, 59);
                        }
                        setMinTimeFromMinDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
                        }
                        setMaxTimeFromMaxDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
                        }
                        updateSliders() {
                            r(this.$hours, {
                                min: this.minHours,
                                max: this.maxHours
                            }).value = this.hours, r(this.$minutes, {
                                min: this.minMinutes,
                                max: this.maxMinutes
                            }).value = this.minutes;
                        }
                        updateText() {
                            this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), 
                            this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
                        }
                        set hours(e) {
                            this._hours = e;
                            let {hours: t, dayPeriod: i} = l(e);
                            this.displayHours = this.ampm ? t : e, this.dayPeriod = i;
                        }
                        get hours() {
                            return this._hours;
                        }
                        render() {
                            this.updateSliders(), this.updateText();
                        }
                    }
                    function O(e, t, i) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var s = i.call(e, "string");
                                    if ("object" != typeof s) return s;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            }(e);
                            return "symbol" == typeof t ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class A {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([ [ [ [ "Control", "ArrowRight" ], [ "Control", "ArrowUp" ] ], e => e.month++ ], [ [ [ "Control", "ArrowLeft" ], [ "Control", "ArrowDown" ] ], e => e.month-- ], [ [ [ "Shift", "ArrowRight" ], [ "Shift", "ArrowUp" ] ], e => e.year++ ], [ [ [ "Shift", "ArrowLeft" ], [ "Shift", "ArrowDown" ] ], e => e.year-- ], [ [ [ "Alt", "ArrowRight" ], [ "Alt", "ArrowUp" ] ], e => e.year += 10 ], [ [ [ "Alt", "ArrowLeft" ], [ "Alt", "ArrowDown" ] ], e => e.year -= 10 ], [ [ "Control", "Shift", "ArrowUp" ], (e, t) => t.up() ] ])), 
                            O(this, "handleHotKey", (e => {
                                let t = this.hotKeys.get(e), i = o(this.getInitialFocusDate());
                                t(i, this.dp);
                                let {year: s, month: a, date: n} = i, r = h(new Date(s, a));
                                r < n && (n = r);
                                let l = this.dp.getClampedDate(new Date(s, a, n));
                                this.dp.setFocusDate(l, {
                                    viewDateTransition: !0
                                });
                            })), O(this, "isHotKeyPressed", (() => {
                                let e = !1, t = this.pressedKeys.size, i = e => this.pressedKeys.has(e);
                                for (let [s] of this.hotKeys) {
                                    if (e) break;
                                    if (Array.isArray(s[0])) s.forEach((a => {
                                        e || t !== a.length || (e = a.every(i) && s);
                                    })); else {
                                        if (t !== s.length) continue;
                                        e = s.every(i) && s;
                                    }
                                }
                                return e;
                            })), O(this, "isArrow", (e => e >= 37 && e <= 40)), O(this, "onKeyDown", (e => {
                                let {key: t, which: i} = e, {dp: s, dp: {focusDate: a}, opts: n} = this;
                                this.registerKey(t);
                                let r = this.isHotKeyPressed();
                                if (r) return e.preventDefault(), void this.handleHotKey(r);
                                if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                                if ("Enter" === t) {
                                    if (s.currentView !== n.minView) return void s.down();
                                    if (a) {
                                        let e = s._checkIfDateIsSelected(a);
                                        return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                                    }
                                }
                                "Escape" === t && this.dp.hide();
                            })), O(this, "onKeyUp", (e => {
                                this.removeKey(e.key);
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.bindKeyboardEvents();
                        }
                        bindKeyboardEvents() {
                            let {$el: e} = this.dp;
                            e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
                        }
                        destroy() {
                            let {$el: e} = this.dp;
                            e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), 
                            this.hotKeys = null, this.pressedKeys = null;
                        }
                        getInitialFocusDate() {
                            let {focusDate: e, currentView: t, selectedDates: s, parsedViewDate: {year: a, month: n}} = this.dp, r = e || s[s.length - 1];
                            if (!r) switch (t) {
                              case i.days:
                                r = new Date(a, n, (new Date).getDate());
                                break;

                              case i.months:
                                r = new Date(a, n, 1);
                                break;

                              case i.years:
                                r = new Date(a, 0, 1);
                            }
                            return r;
                        }
                        focusNextCell(e) {
                            let t = this.getInitialFocusDate(), {currentView: s} = this.dp, {days: a, months: n, years: r} = i, h = o(t), l = h.year, d = h.month, c = h.date;
                            switch (e) {
                              case "ArrowLeft":
                                s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                                break;

                              case "ArrowUp":
                                s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                                break;

                              case "ArrowRight":
                                s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                                break;

                              case "ArrowDown":
                                s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                            }
                            let u = this.dp.getClampedDate(new Date(l, d, c));
                            this.dp.setFocusDate(u, {
                                viewDateTransition: !0
                            });
                        }
                        registerKey(e) {
                            this.pressedKeys.add(e);
                        }
                        removeKey(e) {
                            this.pressedKeys.delete(e);
                        }
                    }
                    let N = {
                        on(e, t) {
                            this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [ t ];
                        },
                        off(e, t) {
                            this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e => e !== t)));
                        },
                        removeAllEvents() {
                            this.__events = {};
                        },
                        trigger(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                            this.__events && this.__events[e] && this.__events[e].forEach((e => {
                                e(...i);
                            }));
                        }
                    };
                    function I(e, t, i) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var s = i.call(e, "string");
                                    if ("object" != typeof s) return s;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            }(e);
                            return "symbol" == typeof t ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let P = "", j = "", R = !1;
                    class B {
                        static buildGlobalContainer(e) {
                            R = !0, P = n({
                                className: e,
                                id: e
                            }), a("body").appendChild(P);
                        }
                        constructor(e, t) {
                            var r = this;
                            if (I(this, "viewIndexes", [ i.days, i.months, i.years ]), I(this, "next", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t + 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e + 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e + 10, 0, 1));
                                }
                            })), I(this, "prev", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t - 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e - 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e - 10, 0, 1));
                                }
                            })), I(this, "_finishHide", (() => {
                                this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                            })), I(this, "setPosition", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                                    $datepicker: r.$datepicker,
                                    $target: r.$el,
                                    $pointer: r.$pointer,
                                    isViewChange: t,
                                    done: r._finishHide
                                }));
                                let i, s, {isMobile: a} = r.opts, n = r.$el.getBoundingClientRect(), h = r.$el.getBoundingClientRect(), o = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, v = c[0], g = c[1];
                                if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%"; else {
                                    if (o === l && o !== document.body && (h = {
                                        top: r.$el.offsetTop,
                                        left: r.$el.offsetLeft,
                                        width: n.width,
                                        height: r.$el.offsetHeight
                                    }, u = 0, p = 0), o !== l && o !== document.body) {
                                        let e = o.getBoundingClientRect();
                                        h = {
                                            top: n.top - e.top,
                                            left: n.left - e.left,
                                            width: n.width,
                                            height: n.height
                                        }, u = 0, p = 0;
                                    }
                                    switch (v) {
                                      case "top":
                                        i = h.top - d.height - m;
                                        break;

                                      case "right":
                                        s = h.left + h.width + m;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height + m;
                                        break;

                                      case "left":
                                        s = h.left - d.width - m;
                                    }
                                    switch (g) {
                                      case "top":
                                        i = h.top;
                                        break;

                                      case "right":
                                        s = h.left + h.width - d.width;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height - d.height;
                                        break;

                                      case "left":
                                        s = h.left;
                                        break;

                                      case "center":
                                        /left|right/.test(v) ? i = h.top + h.height / 2 - d.height / 2 : s = h.left + h.width / 2 - d.width / 2;
                                    }
                                    r.$datepicker.style.cssText = `left: ${s + p}px; top: ${i + u}px`;
                                }
                            })), I(this, "_setInputValue", (() => {
                                let {opts: e, $altField: t, locale: {dateFormat: i}} = this, {altFieldDateFormat: s, altField: a} = e;
                                a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                            })), I(this, "_getInputValue", (e => {
                                let {selectedDates: t, opts: i} = this, {multipleDates: s, multipleDatesSeparator: a} = i;
                                if (!t.length) return "";
                                let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t => this.formatDate(t, e)));
                                return r = n ? r : r.join(a), r;
                            })), I(this, "_checkIfDateIsSelected", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                                return r.selectedDates.some((i => {
                                    let a = p(e, i, t);
                                    return s = a && i, a;
                                })), s;
                            })), I(this, "_scheduleCallAfterTransition", (e => {
                                this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = () => {
                                    e && e(!0);
                                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                                    once: !0
                                });
                            })), I(this, "_cancelScheduledCall", (() => {
                                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                            })), I(this, "setViewDate", (e => {
                                if (!((e = b(e)) instanceof Date)) return;
                                if (p(e, this.viewDate)) return;
                                let t = this.viewDate;
                                this.viewDate = e;
                                let {onChangeViewDate: s} = this.opts;
                                if (s) {
                                    let {month: e, year: t} = this.parsedViewDate;
                                    s({
                                        month: e,
                                        year: t,
                                        decade: this.curDecade
                                    });
                                }
                                this.trigger(i.eventChangeViewDate, e, t);
                            })), I(this, "setFocusDate", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), 
                                r.trigger(i.eventChangeFocusDate, e, t));
                            })), I(this, "setCurrentView", (e => {
                                if (this.viewIndexes.includes(e)) {
                                    if (this.currentView = e, this.elIsInput && this.visible && this.setPosition(void 0, !0), 
                                    this.trigger(i.eventChangeCurrentView, e), !this.views[e]) {
                                        let t = this.views[e] = new T({
                                            dp: this,
                                            opts: this.opts,
                                            type: e
                                        });
                                        this.shouldUpdateDOM && this.$content.appendChild(t.$el);
                                    }
                                    this.opts.onChangeView && this.opts.onChangeView(e);
                                }
                            })), I(this, "_updateLastSelectedDate", (e => {
                                this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                            })), I(this, "destroy", (() => {
                                let {showEvent: e, isMobile: t} = this.opts, i = this.$datepicker.parentNode;
                                i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), 
                                this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), 
                                t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), 
                                this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, 
                                this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, 
                                this.rangeDateTo = null;
                            })), I(this, "update", (function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = w({}, r.opts);
                                w(r.opts, e);
                                let {timepicker: s, buttons: a, range: n, selectedDates: h, isMobile: o} = r.opts, l = r.visible || r.treatAsInline;
                                r._createMinMaxDates(), r._limitViewDateByMaxMinDates(), r._handleLocale(), !t.selectedDates && h && r.selectDate(h), 
                                e.view && r.setCurrentView(e.view), r._setInputValue(), t.range && !n ? (r.rangeDateTo = !1, 
                                r.rangeDateFrom = !1) : !t.range && n && r.selectedDates.length && (r.rangeDateFrom = r.selectedDates[0], 
                                r.rangeDateTo = r.selectedDates[1]), t.timepicker && !s ? (l && r.timepicker.destroy(), 
                                r.timepicker = !1, r.$timepicker.parentNode.removeChild(r.$timepicker)) : !t.timepicker && s && r._addTimepicker(), 
                                !t.buttons && a ? r._addButtons() : t.buttons && !a ? (r.buttons.destroy(), r.$buttons.parentNode.removeChild(r.$buttons)) : l && t.buttons && a && r.buttons.clearHtml().render(), 
                                !t.isMobile && o ? (r.treatAsInline || j || r._createMobileOverlay(), r._addMobileAttributes(), 
                                r.visible && r._showMobileOverlay()) : t.isMobile && !o && (r._removeMobileAttributes(), 
                                r.visible && (j.classList.remove("-active-"), "function" != typeof r.opts.position && r.setPosition())), 
                                l && (r.nav.update(), r.views[r.currentView].render(), r.currentView === i.days && r.views[r.currentView].renderDayNames());
                            })), I(this, "isOtherMonth", (e => {
                                let {month: t} = o(e);
                                return t !== this.parsedViewDate.month;
                            })), I(this, "isOtherYear", (e => {
                                let {year: t} = o(e);
                                return t !== this.parsedViewDate.year;
                            })), I(this, "isOtherDecade", (e => {
                                let {year: t} = o(e), [i, s] = c(this.viewDate);
                                return t < i || t > s;
                            })), I(this, "_onChangeSelectedDate", (e => {
                                let {silent: t} = e;
                                setTimeout((() => {
                                    this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                                }));
                            })), I(this, "_onChangeFocusedDate", (function(e) {
                                let {viewDateTransition: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!e) return;
                                let i = !1;
                                t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e), 
                                r.opts.onFocus && r.opts.onFocus({
                                    datepicker: r,
                                    date: e
                                });
                            })), I(this, "_onChangeTime", (e => {
                                let {hours: t, minutes: i} = e, s = new Date, {lastSelectedDate: a, opts: {onSelect: n}} = this, r = a;
                                a || (r = s);
                                let h = this.getCell(r, this.currentViewSingular), o = h && h.adpCell;
                                o && o.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), 
                                n && this._triggerOnSelect()) : this.selectDate(r));
                            })), I(this, "_onFocus", (e => {
                                this.visible || this.show();
                            })), I(this, "_onBlur", (e => {
                                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                            })), I(this, "_onMouseDown", (e => {
                                this.inFocus = !0;
                            })), I(this, "_onMouseUp", (e => {
                                this.inFocus = !1, this.$el.focus();
                            })), I(this, "_onResize", (() => {
                                this.visible && "function" != typeof this.opts.position && this.setPosition();
                            })), I(this, "_onClickOverlay", (() => {
                                this.visible && this.hide();
                            })), I(this, "getViewDates", (function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                                return T.getDatesFunction(e)(r);
                            })), I(this, "isWeekend", (e => this.opts.weekends.includes(e))), I(this, "getClampedDate", (e => {
                                let {minDate: t, maxDate: i} = this, s = e;
                                return i && m(e, i) ? s = i : t && v(e, t) && (s = t), s;
                            })), this.$el = a(e), !this.$el) return;
                            this.$datepicker = n({
                                className: "air-datepicker"
                            }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), 
                            this.$altField = a(this.opts.altField || !1);
                            let {view: h, startDate: l} = this.opts;
                            l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), 
                            this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, 
                            this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, 
                            this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], 
                            this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, 
                            this.init();
                        }
                        init() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, isMobile: s, selectedDates: n, keyboardNav: r, onlyTimepicker: h}} = this, o = a("body");
                            (!R || R && P && !o.contains(P)) && !i && this.elIsInput && !this.$customContainer && B.buildGlobalContainer(B.defaultGlobalContainerId), 
                            !s || j || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), 
                            this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i || this._bindEvents(), 
                            r && !h && (this.keyboardNav = new A({
                                dp: this,
                                opts: e
                            }))), n && this.selectDate(n, {
                                silent: !0
                            }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), 
                            t && this._createComponents();
                        }
                        _createMobileOverlay() {
                            j = n({
                                className: "air-datepicker-overlay"
                            }), P.appendChild(j);
                        }
                        _createComponents() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: h, isMobile: o}} = this;
                            this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), 
                            r && this.$datepicker.classList.add(...r.split(" ")), h && this.$datepicker.classList.add("-only-timepicker-"), 
                            o && !t && this._addMobileAttributes(), this.views[this.currentView] = new T({
                                dp: this,
                                type: this.currentView,
                                opts: e
                            }), this.nav = new V({
                                dp: this,
                                opts: e
                            }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), 
                            this.$nav.appendChild(this.nav.$el);
                        }
                        _destroyComponents() {
                            for (let e in this.views) this.views[e].destroy();
                            this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
                        }
                        _addMobileAttributes() {
                            j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), 
                            this.$el.setAttribute("readonly", !0);
                        }
                        _removeMobileAttributes() {
                            j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), 
                            this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
                        }
                        _createMinMaxDates() {
                            let {minDate: e, maxDate: t} = this.opts;
                            this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
                        }
                        _addTimepicker() {
                            this.$timepicker = n({
                                className: "air-datepicker--time"
                            }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                                dp: this,
                                opts: this.opts
                            }), this.$timepicker.appendChild(this.timepicker.$el);
                        }
                        _addButtons() {
                            this.$buttons = n({
                                className: "air-datepicker--buttons"
                            }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({
                                dp: this,
                                opts: this.opts
                            }), this.$buttons.appendChild(this.buttons.$el);
                        }
                        _bindSubEvents() {
                            this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), 
                            this.on(i.eventChangeTime, this._onChangeTime);
                        }
                        _buildBaseHtml() {
                            let {inline: e} = this.opts;
                            var t, i;
                            this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), 
                            this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', 
                            this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), 
                            this.$nav = a(".air-datepicker--navigation", this.$datepicker);
                        }
                        _handleLocale() {
                            let {locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r} = this.opts;
                            var h;
                            this.locale = (h = e, JSON.parse(JSON.stringify(h))), t && (this.locale.dateFormat = t), 
                            void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                            let {timeFormat: o} = this.locale;
                            if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                                let e = o ? r : "";
                                this.locale.dateFormat = [ this.locale.dateFormat, o || "" ].join(e);
                            }
                            a && "function" != typeof t && (this.locale.dateFormat = this.locale.timeFormat);
                        }
                        _setPositionClasses(e) {
                            if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                            let t = (e = e.split(" "))[0], i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
                            this.$datepicker.classList.add(...i.split(" "));
                        }
                        _bindEvents() {
                            this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), 
                            this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), 
                            window.addEventListener("resize", this._onResize);
                        }
                        _limitViewDateByMaxMinDates() {
                            let {viewDate: e, minDate: t, maxDate: i} = this;
                            i && m(e, i) && this.setViewDate(i), t && v(e, t) && this.setViewDate(t);
                        }
                        formatDate() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                            if (e = b(e), !(e instanceof Date)) return;
                            let i = t, s = this.locale, a = o(e), n = a.dayPeriod, r = c(e), h = B.replacer, l = {
                                T: e.getTime(),
                                m: a.minutes,
                                mm: a.fullMinutes,
                                h: a.hours12,
                                hh: a.fullHours12,
                                H: a.hours,
                                HH: a.fullHours,
                                aa: n,
                                AA: n.toUpperCase(),
                                E: s.daysShort[a.day],
                                EEEE: s.days[a.day],
                                d: a.date,
                                dd: a.fullDate,
                                M: a.month + 1,
                                MM: a.fullMonth,
                                MMM: s.monthsShort[a.month],
                                MMMM: s.months[a.month],
                                yy: a.year.toString().slice(-2),
                                yyyy: a.year,
                                yyyy1: r[0],
                                yyyy2: r[1]
                            };
                            for (let [e, t] of Object.entries(l)) i = h(i, k(e), t);
                            return i;
                        }
                        down(e) {
                            this._handleUpDownActions(e, "down");
                        }
                        up(e) {
                            this._handleUpDownActions(e, "up");
                        }
                        selectDate(e) {
                            let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {currentView: a, parsedViewDate: n, selectedDates: r} = this, {updateTime: h} = s, {moveToOtherMonthsOnSelect: o, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u, onBeforeSelect: p} = this.opts, v = r.length;
                            if (Array.isArray(e)) return e.forEach((e => {
                                this.selectDate(e, s);
                            })), new Promise((e => {
                                setTimeout(e);
                            }));
                            if ((e = b(e)) instanceof Date) {
                                if (p && !p({
                                    date: e,
                                    datepicker: this
                                })) return Promise.resolve();
                                if (a === i.days && e.getMonth() !== n.month && o && (t = new Date(e.getFullYear(), e.getMonth(), 1)), 
                                a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), 
                                t && this.setViewDate(t), d && !c) {
                                    if (v === d) return;
                                    this._checkIfDateIsSelected(e) || r.push(e);
                                } else if (c) switch (v) {
                                  case 1:
                                    r.push(e), this.rangeDateTo || (this.rangeDateTo = e), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, 
                                    this.rangeDateFrom = e), this.selectedDates = [ this.rangeDateFrom, this.rangeDateTo ];
                                    break;

                                  case 2:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e, this.rangeDateTo = "";
                                    break;

                                  default:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e;
                                } else this.selectedDates = [ e ];
                                return this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionSelectDate,
                                    silent: null == s ? void 0 : s.silent,
                                    date: e,
                                    updateTime: h
                                }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === v && this.hide() : this.hide()), 
                                new Promise((e => {
                                    setTimeout(e);
                                }));
                            }
                        }
                        unselectDate(e) {
                            let t = this.selectedDates, s = this;
                            if ((e = b(e)) instanceof Date) return t.some(((a, n) => {
                                if (p(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", 
                                s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionUnselectDate,
                                    date: e
                                }), !0;
                            }));
                        }
                        replaceDate(e, t) {
                            let s = this.selectedDates.find((t => p(t, e, this.currentView))), a = this.selectedDates.indexOf(s);
                            a < 0 || p(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, 
                            this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionSelectDate,
                                date: t,
                                updateTime: !0
                            }), this._updateLastSelectedDate(t));
                        }
                        clear() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, 
                            this.lastSelectedDate = !1, this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionUnselectDate,
                                silent: e.silent
                            }), new Promise((e => {
                                setTimeout(e);
                            }));
                        }
                        show() {
                            let {onShow: e, isMobile: t} = this.opts;
                            this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), 
                            this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), 
                            this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
                        }
                        hide() {
                            let {onHide: e, isMobile: t} = this.opts, i = this._hasTransition();
                            this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), 
                            this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t => {
                                !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                            })), t && j.classList.remove("-active-");
                        }
                        _triggerOnSelect() {
                            let e = [], t = [], {selectedDates: i, locale: s, opts: {onSelect: a, multipleDates: n, range: r}} = this, h = n || r, o = "function" == typeof s.dateFormat;
                            i.length && (e = i.map(g), t = o ? n ? s.dateFormat(e) : e.map((e => s.dateFormat(e))) : e.map((e => this.formatDate(e, s.dateFormat)))), 
                            a({
                                date: h ? e : e[0],
                                formattedDate: h ? t : t[0],
                                datepicker: this
                            });
                        }
                        _handleAlreadySelectedDates(e, t) {
                            const {range: i, toggleSelected: s} = this.opts;
                            let a = "function" == typeof s ? s({
                                datepicker: this,
                                date: t
                            }) : s;
                            i && (a || 2 !== this.selectedDates.length && this.selectDate(t)), a ? this.unselectDate(t) : this._updateLastSelectedDate(e);
                        }
                        _handleUpDownActions(e, t) {
                            if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                            let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                            i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), 
                            this.setCurrentView(this.viewIndexes[i]);
                        }
                        _handleRangeOnFocus() {
                            1 === this.selectedDates.length && (m(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], 
                            this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
                        }
                        getCell(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                            if (!((e = b(e)) instanceof Date)) return;
                            let {year: s, month: a, date: n} = o(e), r = `[data-year="${s}"]`, h = `[data-month="${a}"]`, l = {
                                [i.day]: `${r}${h}[data-date="${n}"]`,
                                [i.month]: `${r}${h}`,
                                [i.year]: `${r}`
                            };
                            return this.views[this.currentView].$el.querySelector(l[t]);
                        }
                        _showMobileOverlay() {
                            j.classList.add("-active-");
                        }
                        _hasTransition() {
                            return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e, t) => parseFloat(t) + e), 0) > 0;
                        }
                        get shouldUpdateDOM() {
                            return this.visible || this.treatAsInline;
                        }
                        get parsedViewDate() {
                            return o(this.viewDate);
                        }
                        get currentViewSingular() {
                            return this.currentView.slice(0, -1);
                        }
                        get curDecade() {
                            return c(this.viewDate);
                        }
                        get viewIndex() {
                            return this.viewIndexes.indexOf(this.currentView);
                        }
                        get isFinalView() {
                            return this.currentView === i.years;
                        }
                        get hasSelectedDates() {
                            return this.selectedDates.length > 0;
                        }
                        get isMinViewReached() {
                            return this.currentView === this.opts.minView || this.currentView === i.days;
                        }
                        get $container() {
                            return this.$customContainer || P;
                        }
                        static replacer(e, t, i) {
                            return e.replace(t, (function(e, t, s, a) {
                                return t + i + a;
                            }));
                        }
                    }
                    var K;
                    return I(B, "defaults", s), I(B, "version", "3.4.0"), I(B, "defaultGlobalContainerId", "air-datepicker-global-container"), 
                    K = B.prototype, Object.assign(K, N), t.default;
                }();
            }));
        },
        615: function(module) {
            /*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
            (function(global, factory) {
                true ? module.exports = factory() : 0;
            })(0, (function() {
                "use strict";
                if (!Array.prototype.find) Object.defineProperty(Array.prototype, "find", {
                    value: function value(predicate) {
                        if (this == null) throw new TypeError('"this" is null or not defined');
                        var o = Object(this);
                        var len = o.length >>> 0;
                        if (typeof predicate !== "function") throw new TypeError("predicate must be a function");
                        var thisArg = arguments[1];
                        var k = 0;
                        while (k < len) {
                            var kValue = o[k];
                            if (predicate.call(thisArg, kValue, k, o)) return kValue;
                            k++;
                        }
                        return;
                    }
                });
                if (!Array.from) Array.from = function() {
                    var toStr = Object.prototype.toString;
                    var isCallable = function isCallable(fn) {
                        return typeof fn === "function" || toStr.call(fn) === "[object Function]";
                    };
                    var toInteger = function toInteger(value) {
                        var number = Number(value);
                        if (isNaN(number)) return 0;
                        if (number === 0 || !isFinite(number)) return number;
                        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
                    };
                    var maxSafeInteger = Math.pow(2, 53) - 1;
                    var toLength = function toLength(value) {
                        var len = toInteger(value);
                        return Math.min(Math.max(len, 0), maxSafeInteger);
                    };
                    return function from(arrayLike) {
                        var C = this;
                        var items = Object(arrayLike);
                        if (arrayLike == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                        var mapFn = arguments.length > 1 ? arguments[1] : void void 0;
                        var T;
                        if (typeof mapFn !== "undefined") {
                            if (!isCallable(mapFn)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                            if (arguments.length > 2) T = arguments[2];
                        }
                        var len = toLength(items.length);
                        var A = isCallable(C) ? Object(new C(len)) : new Array(len);
                        var k = 0;
                        var kValue;
                        while (k < len) {
                            kValue = items[k];
                            if (mapFn) A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k); else A[k] = kValue;
                            k += 1;
                        }
                        A.length = len;
                        return A;
                    };
                }();
                var win = window;
                var doc = document;
                var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
                var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent);
                var isTouch = "ontouchstart" in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
                var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
                var FP = {
                    test: {},
                    shared: {}
                };
                var extensions = [ "parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect" ];
                if (win.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = function(callback, thisArg) {
                    thisArg = thisArg || window;
                    for (var i = 0; i < this.length; i++) callback.call(thisArg, this[i], i, this);
                };
                if (typeof Object.assign != "function") Object.defineProperty(Object, "assign", {
                    value: function assign(target, varArgs) {
                        if (target == null) throw new TypeError("Cannot convert undefined or null to object");
                        var to = Object(target);
                        for (var index = 1; index < arguments.length; index++) {
                            var nextSource = arguments[index];
                            if (nextSource != null) for (var nextKey in nextSource) if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
                        }
                        return to;
                    },
                    writable: true,
                    configurable: true
                });
                if (!String.prototype.padStart) String.prototype.padStart = function padStart(targetLength, padString) {
                    targetLength >>= 0;
                    padString = String(typeof padString !== "undefined" ? padString : " ");
                    if (this.length > targetLength) return String(this); else {
                        targetLength -= this.length;
                        if (targetLength > padString.length) padString += Array.apply(null, Array(targetLength)).map((function() {
                            return padString;
                        })).join("");
                        return padString.slice(0, targetLength) + String(this);
                    }
                };
                function showError(type, text) {
                    win.console && win.console[type] && win.console[type]("fullPage: " + text);
                }
                function isVisible(el) {
                    var style = win.getComputedStyle(el);
                    return style.display !== "none";
                }
                function getVisible(elements) {
                    return Array.from(elements).filter((function(e) {
                        return isVisible(e);
                    }));
                }
                function $(selector, context) {
                    context = arguments.length > 1 ? context : document;
                    return context ? context.querySelectorAll(selector) : null;
                }
                function deepExtend(out) {
                    out = out || {};
                    for (var i = 1, len = arguments.length; i < len; ++i) {
                        var obj = arguments[i];
                        if (!obj) continue;
                        for (var key in obj) {
                            if (!obj.hasOwnProperty(key) || key == "__proto__" || key == "constructor") continue;
                            if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
                                out[key] = deepExtend(out[key], obj[key]);
                                continue;
                            }
                            out[key] = obj[key];
                        }
                    }
                    return out;
                }
                function hasClass(el, className) {
                    if (el == null) return false;
                    return el.classList.contains(className);
                }
                function getWindowHeight() {
                    return "innerHeight" in win ? win.innerHeight : doc.documentElement.offsetHeight;
                }
                function getWindowWidth() {
                    return win.innerWidth;
                }
                function css(items, props) {
                    items = getList(items);
                    var key;
                    for (key in props) if (props.hasOwnProperty(key)) if (key !== null) for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.style[key] = props[key];
                    }
                    return items;
                }
                function prev(item) {
                    return item.previousElementSibling;
                }
                function next(item) {
                    return item.nextElementSibling;
                }
                function last(item) {
                    return item[item.length - 1];
                }
                function index(item, selector) {
                    item = isArrayOrList(item) ? item[0] : item;
                    var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
                    var num = 0;
                    for (var i = 0; i < children.length; i++) {
                        if (children[i] == item) return num;
                        if (children[i].nodeType == 1) num++;
                    }
                    return -1;
                }
                function getList(item) {
                    return !isArrayOrList(item) ? [ item ] : item;
                }
                function hide(el) {
                    el = getList(el);
                    for (var i = 0; i < el.length; i++) el[i].style.display = "none";
                    return el;
                }
                function show(el) {
                    el = getList(el);
                    for (var i = 0; i < el.length; i++) el[i].style.display = "block";
                    return el;
                }
                function isArrayOrList(el) {
                    return Object.prototype.toString.call(el) === "[object Array]" || Object.prototype.toString.call(el) === "[object NodeList]";
                }
                function addClass(el, className) {
                    el = getList(el);
                    for (var i = 0; i < el.length; i++) {
                        var item = el[i];
                        item.classList.add(className);
                    }
                    return el;
                }
                function removeClass(el, className) {
                    el = getList(el);
                    var classNames = className.split(" ");
                    for (var a = 0; a < classNames.length; a++) {
                        className = classNames[a];
                        for (var i = 0; i < el.length; i++) {
                            var item = el[i];
                            item.classList.remove(className);
                        }
                    }
                    return el;
                }
                function appendTo(el, parent) {
                    parent.appendChild(el);
                }
                function wrap(toWrap, wrapper, isWrapAll) {
                    var newParent;
                    wrapper = wrapper || doc.createElement("div");
                    for (var i = 0; i < toWrap.length; i++) {
                        var item = toWrap[i];
                        if (isWrapAll && !i || !isWrapAll) {
                            newParent = wrapper.cloneNode(true);
                            item.parentNode.insertBefore(newParent, item);
                        }
                        newParent.appendChild(item);
                    }
                    return toWrap;
                }
                function wrapAll(toWrap, wrapper) {
                    wrap(toWrap, wrapper, true);
                }
                function wrapInner(parent, wrapper) {
                    parent.appendChild(wrapper);
                    while (parent.firstChild !== wrapper) wrapper.appendChild(parent.firstChild);
                }
                function unwrap(wrapper) {
                    var wrapperContent = doc.createDocumentFragment();
                    while (wrapper.firstChild) wrapperContent.appendChild(wrapper.firstChild);
                    wrapper.parentNode.replaceChild(wrapperContent, wrapper);
                }
                function closest(el, selector) {
                    if (el && el.nodeType === 1) {
                        if (matches(el, selector)) return el;
                        return closest(el.parentNode, selector);
                    }
                    return null;
                }
                function after(reference, el) {
                    insertBefore(reference, reference.nextSibling, el);
                }
                function before(reference, el) {
                    insertBefore(reference, reference, el);
                }
                function insertBefore(reference, beforeElement, el) {
                    if (!isArrayOrList(el)) {
                        if (typeof el == "string") el = createElementFromHTML(el);
                        el = [ el ];
                    }
                    for (var i = 0; i < el.length; i++) reference.parentNode.insertBefore(el[i], beforeElement);
                }
                function getScrollTop() {
                    var docElement = doc.documentElement;
                    return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
                }
                function siblings(el) {
                    return Array.prototype.filter.call(el.parentNode.children, (function(child) {
                        return child !== el;
                    }));
                }
                function preventDefault(event) {
                    event.preventDefault();
                }
                function getAttr(el, attr) {
                    return el.getAttribute(attr);
                }
                function docAddEvent(event, callback, options) {
                    doc.addEventListener(event, callback, options === "undefined" ? null : options);
                }
                function windowAddEvent(event, callback, options) {
                    win.addEventListener(event, callback, options === "undefined" ? null : options);
                }
                function docRemoveEvent(event, callback, options) {
                    doc.removeEventListener(event, callback, options === "undefined" ? null : options);
                }
                function windowRemoveEvent(event, callback, options) {
                    win.removeEventListener(event, callback, options === "undefined" ? null : options);
                }
                function isFunction(item) {
                    if (typeof item === "function") return true;
                    var type = Object.prototype.toString.call(item);
                    return type === "[object Function]" || type === "[object GeneratorFunction]";
                }
                function trigger(el, eventName, data) {
                    var event;
                    data = typeof data === "undefined" ? {} : data;
                    if (typeof win.CustomEvent === "function") event = new CustomEvent(eventName, {
                        detail: data
                    }); else {
                        event = doc.createEvent("CustomEvent");
                        event.initCustomEvent(eventName, true, true, data);
                    }
                    el.dispatchEvent(event);
                }
                function matches(el, selector) {
                    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
                }
                function toggle(el, value) {
                    if (typeof value === "boolean") for (var i = 0; i < el.length; i++) el[i].style.display = value ? "block" : "none";
                    return el;
                }
                function createElementFromHTML(htmlString) {
                    var div = doc.createElement("div");
                    div.innerHTML = htmlString.trim();
                    return div.firstChild;
                }
                function remove(items) {
                    items = getList(items);
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item && item.parentElement) item.parentNode.removeChild(item);
                    }
                }
                function untilAll(item, selector, fn) {
                    var sibling = item[fn];
                    var siblings = [];
                    while (sibling) {
                        if (matches(sibling, selector) || selector == null) siblings.push(sibling);
                        sibling = sibling[fn];
                    }
                    return siblings;
                }
                function nextAll(item, selector) {
                    return untilAll(item, selector, "nextElementSibling");
                }
                function prevAll(item, selector) {
                    return untilAll(item, selector, "previousElementSibling");
                }
                function toArray(objectData) {
                    return Object.keys(objectData).map((function(key) {
                        return objectData[key];
                    }));
                }
                function getLast(items) {
                    return items[items.length - 1];
                }
                function getAverage(elements, number) {
                    var sum = 0;
                    var lastElements = elements.slice(Math.max(elements.length - number, 1));
                    for (var i = 0; i < lastElements.length; i++) sum += lastElements[i];
                    return Math.ceil(sum / number);
                }
                function setSrc(element, attribute) {
                    element.setAttribute(attribute, getAttr(element, "data-" + attribute));
                    element.removeAttribute("data-" + attribute);
                }
                function getParentsUntil(item, topParentSelector) {
                    var parents = [ item ];
                    do {
                        item = item.parentNode;
                        parents.push(item);
                    } while (!matches(item, topParentSelector));
                    return parents;
                }
                function isInsideInput() {
                    var activeElement = doc.activeElement;
                    return matches(activeElement, "textarea") || matches(activeElement, "input") || matches(activeElement, "select") || getAttr(activeElement, "contentEditable") == "true" || getAttr(activeElement, "contentEditable") == "";
                }
                window["fp_utils"] = {
                    $,
                    deepExtend,
                    hasClass,
                    getWindowHeight,
                    css,
                    prev,
                    next,
                    last,
                    index,
                    getList,
                    hide,
                    show,
                    isArrayOrList,
                    addClass,
                    removeClass,
                    appendTo,
                    wrap,
                    wrapAll,
                    unwrap,
                    closest,
                    after,
                    before,
                    insertBefore,
                    getScrollTop,
                    siblings,
                    preventDefault,
                    isFunction,
                    trigger,
                    matches,
                    toggle,
                    createElementFromHTML,
                    remove,
                    untilAll,
                    nextAll,
                    prevAll,
                    showError
                };
                var utils = Object.freeze({
                    __proto__: null,
                    showError,
                    isVisible,
                    getVisible,
                    $,
                    deepExtend,
                    hasClass,
                    getWindowHeight,
                    getWindowWidth,
                    css,
                    prev,
                    next,
                    last,
                    index,
                    getList,
                    hide,
                    show,
                    isArrayOrList,
                    addClass,
                    removeClass,
                    appendTo,
                    wrap,
                    wrapAll,
                    wrapInner,
                    unwrap,
                    closest,
                    after,
                    before,
                    insertBefore,
                    getScrollTop,
                    siblings,
                    preventDefault,
                    getAttr,
                    docAddEvent,
                    windowAddEvent,
                    docRemoveEvent,
                    windowRemoveEvent,
                    isFunction,
                    trigger,
                    matches,
                    toggle,
                    createElementFromHTML,
                    remove,
                    untilAll,
                    nextAll,
                    prevAll,
                    toArray,
                    getLast,
                    getAverage,
                    setSrc,
                    getParentsUntil,
                    isInsideInput
                });
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
                        return typeof obj;
                    }; else _typeof = function(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj);
                }
                var EventEmitter = {
                    events: {},
                    on: function on(event, listener) {
                        var _this = this;
                        if (_typeof(this.events[event]) !== "object") this.events[event] = [];
                        this.events[event].push(listener);
                        return function() {
                            return _this.removeListener(event, listener);
                        };
                    },
                    removeListener: function removeListener(event, listener) {
                        if (_typeof(this.events[event]) === "object") {
                            var idx = this.events[event].indexOf(listener);
                            if (idx > -1) this.events[event].splice(idx, 1);
                        }
                    },
                    emit: function emit(event) {
                        var _this2 = this;
                        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                        if (_typeof(this.events[event]) === "object") this.events[event].forEach((function(listener) {
                            return listener.apply(_this2, args);
                        }));
                    },
                    once: function once(event, listener) {
                        var _this3 = this;
                        var remove = this.on(event, (function() {
                            remove();
                            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                            listener.apply(_this3, args);
                        }));
                    }
                };
                var state = {
                    numSections: 0,
                    numSlides: 0,
                    slides: [],
                    sections: [],
                    activeSection: null,
                    scrollTrigger: null,
                    isBeyondFullpage: false,
                    aboutToScrollToFullPage: false,
                    slideMoving: false,
                    isResizing: false,
                    isScrolling: false,
                    lastScrolledDestiny: void 0,
                    lastScrolledSlide: void 0,
                    activeAnimation: false,
                    canScroll: true,
                    touchDirection: "none",
                    wheelDirection: "none",
                    isGrabbing: false,
                    isUsingWheel: false,
                    isWindowFocused: true,
                    previousDestTop: 0,
                    windowsHeight: getWindowHeight(),
                    isDoingContinousVertical: false,
                    timeouts: {},
                    scrollY: 0,
                    scrollX: 0
                };
                win.state = state;
                function setState(props) {
                    Object.assign(state, props);
                }
                function getState() {
                    return state;
                }
                function getActivePanel() {
                    return state.activeSection && state.activeSection.activeSlide ? state.activeSection.activeSlide : state.activeSection;
                }
                var events = {
                    onAfterRenderNoAnchor: "onAfterRenderNoAnchor",
                    onClickOrTouch: "onClickOrTouch",
                    moveSlideLeft: "moveSlideLeft",
                    moveSlideRight: "moveSlideRight",
                    onInitialise: "onInitialise",
                    beforeInit: "beforeInit",
                    bindEvents: "bindEvents",
                    onDestroy: "onDestroy",
                    contentChanged: "contentChanged",
                    onScrollOverflowScrolled: "onScrollOverflowScrolled",
                    onScrollPageAndSlide: "onScrollPageAndSlide",
                    onKeyDown: "onKeyDown",
                    onMenuClick: "onMenuClick",
                    scrollPage: "scrollPage",
                    landscapeScroll: "landscapeScroll",
                    scrollBeyondFullpage: "scrollBeyondFullpage",
                    onPerformMovement: "onPerformMovement",
                    onSlideLeave: "onSlideLeave",
                    onLeave: "onLeave",
                    afterSectionLoads: "afterSectionLoads",
                    afterSlideLoads: "afterSlideLoads"
                };
                EventEmitter.on(events.bindEvents, bindEvents$c);
                function bindEvents$c() {
                    [ "click", "touchstart" ].forEach((function(eventName) {
                        docAddEvent(eventName, delegatedEvents);
                    }));
                    windowAddEvent("focus", focusHandler);
                    internalEvents();
                }
                function internalEvents() {
                    EventEmitter.on(events.onDestroy, onDestroy$9);
                }
                function delegatedEvents(e) {
                    EventEmitter.emit(events.onClickOrTouch, {
                        e,
                        target: e.target
                    });
                }
                function onDestroy$9() {
                    [ "click", "touchstart" ].forEach((function(eventName) {
                        docRemoveEvent(eventName, delegatedEvents);
                    }));
                }
                function focusHandler() {
                    setState({
                        isWindowFocused: true
                    });
                }
                var WRAPPER = "fullpage-wrapper";
                var WRAPPER_SEL = "." + WRAPPER;
                var SCROLLABLE = "fp-scrollable";
                var RESPONSIVE = "fp-responsive";
                var NO_TRANSITION = "fp-notransition";
                var DESTROYED = "fp-destroyed";
                var ENABLED = "fp-enabled";
                var VIEWING_PREFIX = "fp-viewing";
                var ACTIVE = "active";
                var ACTIVE_SEL = "." + ACTIVE;
                var COMPLETELY = "fp-completely";
                var COMPLETELY_SEL = "." + COMPLETELY;
                var SECTION_DEFAULT_SEL = ".section";
                var SECTION = "fp-section";
                var SECTION_SEL = "." + SECTION;
                var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
                var TABLE_CELL = "fp-tableCell";
                var TABLE_CELL_SEL = "." + TABLE_CELL;
                var AUTO_HEIGHT = "fp-auto-height";
                var AUTO_HEIGHT_SEL = "." + AUTO_HEIGHT;
                var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
                var AUTO_HEIGHT_RESPONSIVE_SEL = "." + AUTO_HEIGHT_RESPONSIVE;
                var NORMAL_SCROLL = "fp-normal-scroll";
                var SECTION_NAV = "fp-nav";
                var SECTION_NAV_SEL = "#" + SECTION_NAV;
                var SECTION_NAV_TOOLTIP = "fp-tooltip";
                var SECTION_NAV_TOOLTIP_SEL = "." + SECTION_NAV_TOOLTIP;
                var SHOW_ACTIVE_TOOLTIP = "fp-show-active";
                var SLIDE_DEFAULT_SEL = ".slide";
                var SLIDE = "fp-slide";
                var SLIDE_SEL = "." + SLIDE;
                var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
                var SLIDES_WRAPPER = "fp-slides";
                var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;
                var SLIDES_CONTAINER = "fp-slidesContainer";
                var SLIDES_CONTAINER_SEL = "." + SLIDES_CONTAINER;
                var TABLE = "fp-table";
                var OVERFLOW = "fp-overflow";
                var OVERFLOW_SEL = "." + OVERFLOW;
                var IS_OVERFLOW = "fp-is-overflow";
                var SLIDES_NAV = "fp-slidesNav";
                var SLIDES_NAV_SEL = "." + SLIDES_NAV;
                var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + " a";
                var SLIDES_STYLED_ARROW = "fp-arrow";
                var SLIDES_ARROW = "fp-controlArrow";
                var SLIDES_ARROW_SEL = "." + SLIDES_ARROW;
                var SLIDES_PREV = "fp-prev";
                var SLIDES_PREV_SEL = "." + SLIDES_PREV;
                var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
                var SLIDES_NEXT = "fp-next";
                var SLIDES_NEXT_SEL = "." + SLIDES_NEXT;
                var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
                var defaultOptions = {
                    menu: false,
                    anchors: [],
                    lockAnchors: false,
                    navigation: false,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: false,
                    slidesNavigation: false,
                    slidesNavPosition: "bottom",
                    scrollBar: false,
                    hybrid: false,
                    licenseKey: "",
                    credits: {
                        enabled: true,
                        label: "Made with fullPage.js",
                        position: "right"
                    },
                    css3: true,
                    scrollingSpeed: 700,
                    autoScrolling: true,
                    fitToSection: true,
                    fitToSectionDelay: 600,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: false,
                    loopTop: false,
                    loopHorizontal: true,
                    continuousVertical: false,
                    continuousHorizontal: false,
                    scrollHorizontally: false,
                    interlockedSlides: false,
                    dragAndMove: false,
                    offsetSections: false,
                    resetSliders: false,
                    fadingEffect: false,
                    normalScrollElements: null,
                    scrollOverflow: true,
                    scrollOverflowReset: false,
                    touchSensitivity: 5,
                    touchWrapper: null,
                    bigSectionsDestination: null,
                    keyboardScrolling: true,
                    animateAnchor: true,
                    recordHistory: true,
                    allowCorrectDirection: false,
                    scrollOverflowMacStyle: true,
                    controlArrows: true,
                    controlArrowsHTML: [ '<div class="' + SLIDES_STYLED_ARROW + '"></div>', '<div class="' + SLIDES_STYLED_ARROW + '"></div>' ],
                    controlArrowColor: "#fff",
                    verticalCentered: true,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: false,
                    parallax: false,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    cards: false,
                    cardsOptions: {
                        perspective: 100,
                        fadeContent: true,
                        fadeBackground: true
                    },
                    sectionSelector: SECTION_DEFAULT_SEL,
                    slideSelector: SLIDE_DEFAULT_SEL,
                    afterLoad: null,
                    beforeLeave: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    onScrollOverflow: null,
                    lazyLoading: true,
                    observer: true,
                    scrollBeyondFullpage: true
                };
                var container = null;
                var g_initialAnchorsInDom = false;
                var originals = deepExtend({}, defaultOptions);
                var g_options = null;
                function getInitialAnchorsInDom() {
                    return g_initialAnchorsInDom;
                }
                function setContainer(value) {
                    container = value;
                }
                function getContainer(value) {
                    return container;
                }
                function getOptions() {
                    return g_options || defaultOptions;
                }
                function setOptions(options) {
                    g_options = deepExtend({}, defaultOptions, options);
                    originals = Object.assign({}, g_options);
                }
                function getOriginals() {
                    return originals;
                }
                function setOption(name, value) {
                    defaultOptions[name] = value;
                }
                function setVariableState(variable, value, type) {
                    g_options[variable] = value;
                    if (type !== "internal") originals[variable] = value;
                }
                function setOptionsFromDOM() {
                    if (!getOptions().anchors.length) {
                        var anchorsAttribute = "[data-anchor]";
                        var anchors = $(getOptions().sectionSelector.split(",").join(anchorsAttribute + ",") + anchorsAttribute, container);
                        if (anchors.length && anchors.length === $(getOptions().sectionSelector, container).length) {
                            g_initialAnchorsInDom = true;
                            anchors.forEach((function(item) {
                                getOptions().anchors.push(getAttr(item, "data-anchor").toString());
                            }));
                        }
                    }
                    if (!getOptions().navigationTooltips.length) {
                        var tooltipsAttribute = "[data-tooltip]";
                        var tooltips = $(getOptions().sectionSelector.split(",").join(tooltipsAttribute + ",") + tooltipsAttribute, container);
                        if (tooltips.length) tooltips.forEach((function(item) {
                            getOptions().navigationTooltips.push(getAttr(item, "data-tooltip").toString());
                        }));
                    }
                }
                var plainItem = function plainItem(panel) {
                    this.anchor = panel.anchor;
                    this.item = panel.item;
                    this.index = panel.index();
                    this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
                    this.isFirst = !this.index;
                    this.isActive = panel.isActive;
                };
                var Item = function Item(el, selector) {
                    this.parent = this.parent || null;
                    this.selector = selector;
                    this.anchor = getAttr(el, "data-anchor") || getOptions().anchors[index(el, getOptions().sectionSelector)];
                    this.item = el;
                    this.isVisible = isVisible(el);
                    this.isActive = hasClass(el, ACTIVE);
                    this.hasScroll = hasClass(el, OVERFLOW) || $(OVERFLOW_SEL, el)[0] != null;
                    this.isSection = selector === getOptions().sectionSelector;
                    this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);
                    this.index = function() {
                        return this.siblings().indexOf(this);
                    };
                };
                Item.prototype.siblings = function() {
                    if (this.isSection) if (this.isVisible) return state.sections; else return state.sectionsIncludingHidden;
                    return this.parent ? this.parent.slides : 0;
                };
                Item.prototype.prev = function() {
                    var siblings = this.siblings();
                    var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
                    var prevIndex = currentIndex - 1;
                    if (prevIndex >= 0) return siblings[prevIndex];
                    return null;
                };
                Item.prototype.next = function() {
                    var siblings = this.siblings();
                    var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
                    var nextIndex = currentIndex + 1;
                    if (nextIndex < siblings.length) return siblings[nextIndex];
                    return null;
                };
                Item.prototype["prevPanel"] = function() {
                    return this.prev() || (this.parent ? this.parent.prev() : null);
                };
                Item.prototype["nextPanel"] = function() {
                    return this.next() || (this.parent ? this.parent.next() : null);
                };
                Item.prototype.getSiblings = function() {
                    if (this.isSection) return state.sections;
                    return state.panels;
                };
                function getNodes(panels) {
                    return panels.map((function(panel) {
                        return panel.item;
                    }));
                }
                function getPanelByElement(panels, el) {
                    return panels.find((function(panel) {
                        return panel.item === el;
                    }));
                }
                var Section = function Section(el) {
                    plainItem.call(this, el);
                };
                var Slide = function Slide(el) {
                    plainItem.call(this, el);
                };
                function getSlideOrSection(destiny) {
                    var slide = $(SLIDE_ACTIVE_SEL, destiny);
                    if (slide.length) destiny = slide[0];
                    return destiny;
                }
                function getSlideOrSectionPanel(panel) {
                    if (!panel) return null;
                    return panel.activeSlide ? panel.activeSlide : panel;
                }
                function isFullPageAbove() {
                    return getContainer().getBoundingClientRect().bottom >= 0;
                }
                function getScrollSettings(top) {
                    var options = getOptions();
                    var position;
                    var element;
                    if (options.autoScrolling && !options.scrollBar) {
                        position = -top;
                        element = $(WRAPPER_SEL)[0];
                    } else {
                        position = top;
                        element = window;
                    }
                    return {
                        options: position,
                        element
                    };
                }
                function setScrolling(element, val) {
                    if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) if (element.self != window && hasClass(element, SLIDES_WRAPPER)) element.scrollLeft = val; else element.scrollTo(0, val); else element.style.top = val + "px";
                }
                function addAnimation(element) {
                    var transition = "transform " + getOptions().scrollingSpeed + "ms " + getOptions().easingcss3;
                    removeClass(element, NO_TRANSITION);
                    return css(element, {
                        "-webkit-transition": transition,
                        transition
                    });
                }
                function getYmovement(activeSection, destiny) {
                    var fromIndex = activeSection.index();
                    var toIndex = index(destiny, SECTION_SEL);
                    if (fromIndex == toIndex) return "none";
                    if (fromIndex > toIndex) return "up";
                    return "down";
                }
                function removeAnimation(element) {
                    return addClass(element, NO_TRANSITION);
                }
                function getTransforms(translate3d) {
                    return {
                        "-webkit-transform": translate3d,
                        "-moz-transform": translate3d,
                        "-ms-transform": translate3d,
                        transform: translate3d
                    };
                }
                var silentScrollId;
                function transformContainer(translate3d, animated) {
                    if (animated) addAnimation(getContainer()); else removeAnimation(getContainer());
                    clearTimeout(silentScrollId);
                    css(getContainer(), getTransforms(translate3d));
                    FP.test.translate3d = translate3d;
                    silentScrollId = setTimeout((function() {
                        removeClass(getContainer(), NO_TRANSITION);
                    }), 10);
                }
                function silentScroll(top) {
                    var roundedTop = Math.round(top);
                    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
                        var translate3d = "translate3d(0px, -" + roundedTop + "px, 0px)";
                        transformContainer(translate3d, false);
                    } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
                        css(getContainer(), {
                            top: -roundedTop + "px"
                        });
                        FP.test.top = -roundedTop + "px";
                    } else {
                        var scrollSettings = getScrollSettings(roundedTop);
                        setScrolling(scrollSettings.element, scrollSettings.options);
                    }
                }
                FP.setScrollingSpeed = setScrollingSpeed;
                function setScrollingSpeed(value, type) {
                    setVariableState("scrollingSpeed", value, type);
                }
                var $body = null;
                var $html = null;
                var $htmlBody = null;
                function setCache() {
                    $body = $("body")[0];
                    $html = $("html")[0];
                    $htmlBody = $("html, body");
                }
                var _g_animateScroll;
                function scrollTo(element, to, duration, callback) {
                    var start = getScrolledPosition(element);
                    var change = to - start;
                    var isCallbackFired = false;
                    var startTime;
                    var wasAnimationActive = state.activeAnimation;
                    setState({
                        activeAnimation: true
                    });
                    if (_g_animateScroll) window.cancelAnimationFrame(_g_animateScroll);
                    _g_animateScroll = function g_animateScroll(timestamp) {
                        if (!startTime) startTime = timestamp;
                        var currentTime = Math.floor(timestamp - startTime);
                        if (state.activeAnimation) {
                            var val = to;
                            if (duration) val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
                            if (currentTime <= duration) setScrolling(element, val);
                            if (currentTime < duration) window.requestAnimationFrame(_g_animateScroll); else if (typeof callback !== "undefined" && !isCallbackFired) {
                                callback();
                                setState({
                                    activeAnimation: false
                                });
                                isCallbackFired = true;
                            }
                        } else if (!isCallbackFired && !wasAnimationActive) {
                            callback();
                            setState({
                                activeAnimation: false
                            });
                            isCallbackFired = true;
                        }
                    };
                    window.requestAnimationFrame(_g_animateScroll);
                }
                function getScrolledPosition(element) {
                    var position;
                    if (element.self != win && hasClass(element, SLIDES_WRAPPER)) position = element.scrollLeft; else if (!getOptions().autoScrolling || getOptions().scrollBar) position = getScrollTop(); else position = element.offsetTop;
                    return position;
                }
                function nullOrSection(el) {
                    if (el && !el.item) return new Section(new SectionPanel(el));
                    return el ? new Section(el) : null;
                }
                function nullOrSlide(el) {
                    return el ? new Slide(el) : null;
                }
                function fireCallback(eventName, v) {
                    var eventData = getEventData(eventName, v);
                    trigger(getContainer(), eventName, eventData);
                    if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) return false;
                    return true;
                }
                function getEventData(eventName, v) {
                    var paramsPerEvent = {
                        afterRender: function afterRender() {
                            return {
                                section: nullOrSection(getState().activeSection),
                                slide: nullOrSlide(getState().activeSection.activeSlide)
                            };
                        },
                        onLeave: function onLeave() {
                            return {
                                origin: nullOrSection(v.items.origin),
                                destination: nullOrSection(v.items.destination),
                                direction: v.direction,
                                trigger: getState().scrollTrigger
                            };
                        },
                        afterLoad: function afterLoad() {
                            return paramsPerEvent.onLeave();
                        },
                        afterSlideLoad: function afterSlideLoad() {
                            return {
                                section: nullOrSection(v.items.section),
                                origin: nullOrSection(v.items.origin),
                                destination: nullOrSection(v.items.destination),
                                direction: v.direction,
                                trigger: getState().scrollTrigger
                            };
                        },
                        onSlideLeave: function onSlideLeave() {
                            return paramsPerEvent.afterSlideLoad();
                        },
                        beforeLeave: function beforeLeave() {
                            return paramsPerEvent.onLeave();
                        },
                        onScrollOverflow: function onScrollOverflow() {
                            return {
                                section: nullOrSection(getState().activeSection),
                                slide: nullOrSlide(getState().activeSection.activeSlide),
                                position: v.position,
                                direction: v.direction
                            };
                        }
                    };
                    return paramsPerEvent[eventName]();
                }
                function playMedia(destiny) {
                    var panel = getSlideOrSection(destiny);
                    $("video, audio", panel).forEach((function(element) {
                        if (element.hasAttribute("data-autoplay") && typeof element.play === "function") element.play();
                    }));
                    $('iframe[src*="youtube.com/embed/"]', panel).forEach((function(element) {
                        if (element.hasAttribute("data-autoplay")) playYoutube(element);
                        element.onload = function() {
                            if (element.hasAttribute("data-autoplay")) playYoutube(element);
                        };
                    }));
                }
                function playYoutube(element) {
                    element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                }
                function stopMedia(destiny) {
                    var panel = getSlideOrSection(destiny);
                    $("video, audio", panel).forEach((function(element) {
                        if (!element.hasAttribute("data-keepplaying") && typeof element.pause === "function") element.pause();
                    }));
                    $('iframe[src*="youtube.com/embed/"]', panel).forEach((function(element) {
                        if (/youtube\.com\/embed\//.test(getAttr(element, "src")) && !element.hasAttribute("data-keepplaying")) element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    }));
                }
                function enableYoutubeAPI() {
                    $('iframe[src*="youtube.com/embed/"]', getContainer()).forEach((function(item) {
                        addURLParam(item, "enablejsapi=1");
                    }));
                }
                function addURLParam(element, newParam) {
                    var originalSrc = getAttr(element, "src");
                    element.setAttribute("src", originalSrc + getUrlParamSign(originalSrc) + newParam);
                }
                function getUrlParamSign(url) {
                    return !/\?/.test(url) ? "?" : "&";
                }
                function lazyLoad(destiny) {
                    if (!getOptions().lazyLoading) return;
                    var panel = getSlideOrSection(destiny);
                    $("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", panel).forEach((function(element) {
                        [ "src", "srcset" ].forEach((function(type) {
                            var attribute = getAttr(element, "data-" + type);
                            if (attribute != null && attribute) {
                                setSrc(element, type);
                                element.addEventListener("load", (function() {}));
                            }
                        }));
                        if (matches(element, "source")) {
                            var elementToPlay = closest(element, "video, audio");
                            if (elementToPlay) {
                                elementToPlay.load();
                                elementToPlay.onloadeddata = function() {};
                            }
                        }
                    }));
                }
                function setBodyClass() {
                    var section = getState().activeSection.item;
                    var slide = getState().activeSection.activeSlide;
                    var sectionAnchor = getAnchor(section);
                    var text = String(sectionAnchor);
                    if (slide) {
                        var slideAnchor = getAnchor(slide.item);
                        text = text + "-" + slideAnchor;
                    }
                    text = text.replace("/", "-").replace("#", "");
                    var classRe = new RegExp("\\b\\s?" + VIEWING_PREFIX + "-[^\\s]+\\b", "g");
                    $body.className = $body.className.replace(classRe, "");
                    addClass($body, VIEWING_PREFIX + "-" + text);
                }
                function getAnchor(element) {
                    if (!element) return null;
                    var anchor = getAttr(element, "data-anchor");
                    var elementIndex = index(element);
                    if (anchor == null) anchor = elementIndex;
                    return anchor;
                }
                function setPageStatus(slideIndex, slideAnchor, anchorLink) {
                    var sectionHash = "";
                    if (getOptions().anchors.length && !getOptions().lockAnchors) if (slideIndex) {
                        if (anchorLink != null) sectionHash = anchorLink;
                        if (slideAnchor == null) slideAnchor = slideIndex;
                        setState({
                            lastScrolledSlide: slideAnchor
                        });
                        setUrlHash(sectionHash + "/" + slideAnchor);
                    } else if (slideIndex != null) {
                        setState({
                            lastScrolledSlide: slideAnchor
                        });
                        setUrlHash(anchorLink);
                    } else setUrlHash(anchorLink);
                    setBodyClass();
                }
                function setUrlHash(url) {
                    if (getOptions().recordHistory) location.hash = url; else if (isTouchDevice || isTouch) win.history.replaceState(void 0, void 0, "#" + url); else {
                        var baseUrl = win.location.href.split("#")[0];
                        win.location.replace(baseUrl + "#" + url);
                    }
                }
                function getBulletLinkName(i, defaultName, item) {
                    var anchor = defaultName === "Section" ? getOptions().anchors[i] : getAttr(item, "data-anchor");
                    return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + " " + (i + 1));
                }
                function slideBulletHandler(e) {
                    if (e.cancelable) preventDefault(e);
                    setState({
                        scrollTrigger: "horizontalNav"
                    });
                    var sectionElem = closest(this, SECTION_SEL);
                    var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
                    var section = getPanelByElement(getState().sections, sectionElem);
                    var destiny = section.slides[index(closest(this, "li"))];
                    EventEmitter.emit(events.landscapeScroll, {
                        slides,
                        destination: destiny.item
                    });
                }
                function activeSlidesNavigation(slidesNav, slideIndex) {
                    if (getOptions().slidesNavigation && slidesNav != null) {
                        removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
                        addClass($("a", $("li", slidesNav)[slideIndex]), ACTIVE);
                    }
                }
                function addSlidesNavigation(section) {
                    var sectionElem = section.item;
                    var numSlides = section.slides.length;
                    appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
                    var nav = $(SLIDES_NAV_SEL, sectionElem)[0];
                    addClass(nav, "fp-" + getOptions().slidesNavPosition);
                    for (var i = 0; i < numSlides; i++) {
                        var slide = $(SLIDE_SEL, sectionElem)[i];
                        appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, "Slide", slide) + "</span><span></span></a></li>"), $("ul", nav)[0]);
                    }
                    css(nav, {
                        "margin-left": "-" + nav.innerWidth / 2 + "px"
                    });
                    var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
                    addClass($("a", $("li", nav)[activeSlideIndex]), ACTIVE);
                }
                var isScrollAllowed = {};
                isScrollAllowed.m = {
                    up: true,
                    down: true,
                    left: true,
                    right: true
                };
                isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
                function setIsScrollAllowed(value, direction, type) {
                    if (direction !== "all") isScrollAllowed[type][direction] = value; else Object.keys(isScrollAllowed[type]).forEach((function(key) {
                        isScrollAllowed[type][key] = value;
                    }));
                }
                function getIsScrollAllowed() {
                    return isScrollAllowed;
                }
                EventEmitter.on(events.onClickOrTouch, onClickOrTouch$2);
                function onClickOrTouch$2(params) {
                    var target = params.target;
                    if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) slideArrowHandler.call(target, params);
                }
                function slideArrowHandler() {
                    var section = closest(this, SECTION_SEL);
                    if (hasClass(this, SLIDES_PREV)) {
                        if (getIsScrollAllowed().m.left) {
                            setState({
                                scrollTrigger: "slideArrow"
                            });
                            EventEmitter.emit(events.moveSlideLeft, {
                                section
                            });
                        }
                    } else if (getIsScrollAllowed().m.right) {
                        setState({
                            scrollTrigger: "slideArrow"
                        });
                        EventEmitter.emit(events.moveSlideRight, {
                            section
                        });
                    }
                }
                function createSlideArrows(section) {
                    var sectionElem = section.item;
                    var arrows = [ createElementFromHTML(getOptions().controlArrowsHTML[0]), createElementFromHTML(getOptions().controlArrowsHTML[1]) ];
                    after($(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
                    addClass(arrows, SLIDES_ARROW);
                    addClass(arrows[0], SLIDES_PREV);
                    addClass(arrows[1], SLIDES_NEXT);
                    if (getOptions().controlArrowColor !== "#fff") {
                        css($(SLIDES_ARROW_NEXT_SEL, sectionElem), {
                            "border-color": "transparent transparent transparent " + getOptions().controlArrowColor
                        });
                        css($(SLIDES_ARROW_PREV_SEL, sectionElem), {
                            "border-color": "transparent " + getOptions().controlArrowColor + " transparent transparent"
                        });
                    }
                    if (!getOptions().loopHorizontal) hide($(SLIDES_ARROW_PREV_SEL, sectionElem));
                }
                function toggleControlArrows(v) {
                    if (!getOptions().loopHorizontal && getOptions().controlArrows) {
                        toggle($(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0);
                        toggle($(SLIDES_ARROW_NEXT_SEL, v.section), next(v.destiny) != null);
                    }
                }
                FP.setRecordHistory = setRecordHistory;
                function setRecordHistory(value, type) {
                    setVariableState("recordHistory", value, type);
                }
                FP.setAutoScrolling = setAutoScrolling;
                FP.test.setAutoScrolling = setAutoScrolling;
                function setAutoScrolling(value, type) {
                    if (!value) silentScroll(0);
                    setVariableState("autoScrolling", value, type);
                    var element = getState().activeSection.item;
                    if (getOptions().autoScrolling && !getOptions().scrollBar) {
                        css($htmlBody, {
                            overflow: "hidden",
                            height: "100%"
                        });
                        removeClass($body, "fp-scrollable");
                        setRecordHistory(getOriginals().recordHistory, "internal");
                        css(getContainer(), {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        });
                        if (element != null) silentScroll(element.offsetTop);
                    } else {
                        css($htmlBody, {
                            overflow: "visible",
                            height: "initial"
                        });
                        addClass($body, "fp-scrollable");
                        var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
                        setRecordHistory(recordHistory, "internal");
                        css(getContainer(), {
                            "-ms-touch-action": "",
                            "touch-action": ""
                        });
                        if (element != null) {
                            var scrollSettings = getScrollSettings(element.offsetTop);
                            scrollSettings.element.scrollTo(0, scrollSettings.options);
                        }
                    }
                }
                function createInfiniteSections(v) {
                    setState({
                        isDoingContinousVertical: true
                    });
                    var activeSectionItem = getState().activeSection.item;
                    if (!v.isMovementUp) after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse()); else before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
                    silentScroll(getState().activeSection.item.offsetTop);
                    keepSlidesPosition$1();
                    v.wrapAroundElements = activeSectionItem;
                    v.dtop = v.element.offsetTop;
                    v.yMovement = getYmovement(getState().activeSection, v.element);
                    return v;
                }
                function keepSlidesPosition$1() {
                    var activeSlides = $(SLIDE_ACTIVE_SEL);
                    for (var i = 0; i < activeSlides.length; i++) silentLandscapeScroll(activeSlides[i], "internal");
                }
                function keepSlidesPosition() {
                    var activeSlides = $(SLIDE_ACTIVE_SEL);
                    for (var i = 0; i < activeSlides.length; i++) silentLandscapeScroll(activeSlides[i], "internal");
                }
                function continuousVerticalFixSectionOrder(v) {
                    if (v.wrapAroundElements == null) return;
                    if (v.isMovementUp) before($(SECTION_SEL)[0], v.wrapAroundElements); else after($(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
                    silentScroll(getState().activeSection.item.offsetTop);
                    keepSlidesPosition();
                    setState({
                        isDoingContinousVertical: false
                    });
                }
                function lazyLoadOthers() {
                    var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];
                    if (!getOptions().lazyLoading || !hasAutoHeightSections) return;
                    $(SECTION_SEL + ":not(" + ACTIVE_SEL + ")").forEach((function(section) {
                        if (isSectionInViewport(section)) lazyLoad(section);
                    }));
                }
                function isSectionInViewport(el) {
                    var rect = el.getBoundingClientRect();
                    var top = rect.top;
                    var bottom = rect.bottom;
                    var pixelOffset = 2;
                    var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
                    var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
                    return isTopInView || isBottomInView;
                }
                function tooltipTextHandler() {
                    trigger(prev(this), "click");
                }
                function activateNavDots(name, sectionIndex) {
                    var nav = $(SECTION_NAV_SEL)[0];
                    if (getOptions().navigation && nav != null && nav.style.display !== "none") {
                        removeClass($(ACTIVE_SEL, nav), ACTIVE);
                        if (name) addClass($('a[href="#' + name + '"]', nav), ACTIVE); else addClass($("a", $("li", nav)[sectionIndex]), ACTIVE);
                    }
                }
                function addVerticalNavigation() {
                    remove($(SECTION_NAV_SEL));
                    var navigation = doc.createElement("div");
                    navigation.setAttribute("id", SECTION_NAV);
                    var divUl = doc.createElement("ul");
                    navigation.appendChild(divUl);
                    appendTo(navigation, $body);
                    var nav = $(SECTION_NAV_SEL)[0];
                    addClass(nav, "fp-" + getOptions().navigationPosition);
                    if (getOptions().showActiveTooltip) addClass(nav, SHOW_ACTIVE_TOOLTIP);
                    var li = "";
                    for (var i = 0; i < getState().sections.length; i++) {
                        var section = getState().sections[i];
                        var link = "";
                        if (getOptions().anchors.length) link = section.anchor;
                        li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), "Section") + "</span><span></span></a>";
                        var tooltip = getOptions().navigationTooltips[section.index()];
                        if (typeof tooltip !== "undefined" && tooltip !== "") li += '<div class="' + SECTION_NAV_TOOLTIP + " fp-" + getOptions().navigationPosition + '">' + tooltip + "</div>";
                        li += "</li>";
                    }
                    $("ul", nav)[0].innerHTML = li;
                    var bullet = $("li", $(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
                    addClass($("a", bullet), ACTIVE);
                }
                function sectionBulletHandler(e) {
                    if (e.preventDefault) preventDefault(e);
                    setState({
                        scrollTrigger: "verticalNav"
                    });
                    var indexBullet = index(closest(this, SECTION_NAV_SEL + " li"));
                    EventEmitter.emit(events.scrollPage, {
                        destination: getState().sections[indexBullet]
                    });
                }
                function activateMenuAndNav(anchor, index) {
                    activateMenuElement(anchor);
                    activateNavDots(anchor, index);
                }
                function activateMenuElement(name) {
                    if (getOptions().menu && getOptions().menu.length) $(getOptions().menu).forEach((function(menu) {
                        if (menu != null) {
                            removeClass($(ACTIVE_SEL, menu), ACTIVE);
                            addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
                        }
                    }));
                }
                (new Date).getTime();
                var oncePerScroll = function() {
                    var canTriggerEvent = true;
                    var prevWheelTime = (new Date).getTime();
                    var result;
                    var isScrollingOnInit = !win.fullpage_api;
                    return function(scrollTrigger, callback) {
                        var currentTime = (new Date).getTime();
                        var timeThreshold = scrollTrigger === "wheel" ? getOptions().scrollingSpeed : 100;
                        canTriggerEvent = isScrollingOnInit || currentTime - prevWheelTime >= timeThreshold;
                        isScrollingOnInit = !win.fullpage_api;
                        if (canTriggerEvent) {
                            result = callback();
                            prevWheelTime = currentTime;
                        }
                        return typeof result !== "undefined" ? result : true;
                    };
                }();
                function fireCallbackOncePerScroll(callbackName, params) {
                    if (!isFunction(getOptions().beforeLeave)) return;
                    var result = oncePerScroll(getState().scrollTrigger, (function() {
                        return fireCallback(callbackName, params);
                    }));
                    return result;
                }
                FP.moveTo = moveTo;
                FP.getScrollY = function() {
                    return state.scrollY;
                };
                var g_afterSectionLoadsId;
                var g_transitionLapseId;
                EventEmitter.on(events.onDestroy, onDestroy$8);
                function scrollPage(section, callback, isMovementUp) {
                    var element = section.item;
                    if (element == null) return;
                    var dtop = getDestinationPosition(element);
                    var slideAnchorLink;
                    var slideIndex;
                    var v = {
                        element,
                        callback,
                        isMovementUp,
                        dtop,
                        yMovement: getYmovement(getState().activeSection, element),
                        anchorLink: section.anchor,
                        sectionIndex: section.index(),
                        activeSlide: section.activeSlide ? section.activeSlide.item : null,
                        leavingSection: getState().activeSection.index() + 1,
                        localIsResizing: state.isResizing,
                        items: {
                            origin: getState().activeSection,
                            destination: section
                        },
                        direction: null
                    };
                    if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) return;
                    if (v.activeSlide != null) {
                        slideAnchorLink = getAttr(v.activeSlide, "data-anchor");
                        slideIndex = index(v.activeSlide, null);
                    }
                    if (!v.localIsResizing) {
                        var direction = v.yMovement;
                        if (typeof isMovementUp !== "undefined") direction = isMovementUp ? "up" : "down";
                        v.direction = direction;
                        if (isFunction(getOptions().beforeLeave)) if (fireCallbackOncePerScroll("beforeLeave", v) === false) return;
                        if (isFunction(getOptions().onLeave)) if (!fireCallback("onLeave", v)) return;
                    }
                    if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == "up" || v.isMovementUp && v.yMovement == "down")) v = createInfiniteSections(v);
                    if (!v.localIsResizing) stopMedia(getState().activeSection.item);
                    addClass(element, ACTIVE);
                    removeClass(siblings(element), ACTIVE);
                    updateState();
                    lazyLoad(element);
                    setState({
                        canScroll: FP.test.isTesting
                    });
                    setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
                    EventEmitter.emit(events.onLeave, v);
                    performMovement(v);
                    setState({
                        lastScrolledDestiny: v.anchorLink
                    });
                    activateMenuAndNav(v.anchorLink, v.sectionIndex);
                }
                function onDestroy$8() {
                    clearTimeout(g_afterSectionLoadsId);
                    clearTimeout(g_transitionLapseId);
                }
                function getDestinationPosition(element) {
                    var elementHeight = element.offsetHeight;
                    var elementTop = element.offsetTop;
                    var position = elementTop;
                    var isScrollingDown = elementTop > state.previousDestTop;
                    var sectionBottom = position - getWindowHeight() + elementHeight;
                    var bigSectionsDestination = getOptions().bigSectionsDestination;
                    if (elementHeight > getWindowHeight()) {
                        if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === "bottom") position = sectionBottom;
                    } else if (isScrollingDown || state.isResizing && next(element) == null) position = sectionBottom;
                    setState({
                        previousDestTop: position
                    });
                    return position;
                }
                function performMovement(v) {
                    var isFastSpeed = getOptions().scrollingSpeed < 700;
                    var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
                    setState({
                        touchDirection: "none",
                        scrollY: Math.round(v.dtop)
                    });
                    EventEmitter.emit(events.onPerformMovement);
                    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
                        var translate3d = "translate3d(0px, -" + Math.round(v.dtop) + "px, 0px)";
                        transformContainer(translate3d, true);
                        if (getOptions().scrollingSpeed) {
                            clearTimeout(g_afterSectionLoadsId);
                            g_afterSectionLoadsId = setTimeout((function() {
                                afterSectionLoads$1(v);
                                setState({
                                    canScroll: !isFastSpeed || FP.test.isTesting
                                });
                            }), getOptions().scrollingSpeed);
                        } else afterSectionLoads$1(v);
                    } else {
                        var scrollSettings = getScrollSettings(v.dtop);
                        FP.test.top = -v.dtop + "px";
                        clearTimeout(g_afterSectionLoadsId);
                        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, (function() {
                            if (getOptions().scrollBar) g_afterSectionLoadsId = setTimeout((function() {
                                afterSectionLoads$1(v);
                            }), 30); else {
                                afterSectionLoads$1(v);
                                setState({
                                    canScroll: !isFastSpeed || FP.test.isTesting
                                });
                            }
                        }));
                    }
                    if (isFastSpeed) {
                        clearTimeout(g_transitionLapseId);
                        g_transitionLapseId = setTimeout((function() {
                            setState({
                                canScroll: true
                            });
                        }), transitionLapse);
                    }
                }
                function afterSectionLoads$1(v) {
                    setState({
                        isBeyondFullpage: false
                    });
                    continuousVerticalFixSectionOrder(v);
                    if (isFunction(getOptions().afterLoad) && !v.localIsResizing) fireCallback("afterLoad", v);
                    updateState();
                    if (!v.localIsResizing) playMedia(v.element);
                    addClass(v.element, COMPLETELY);
                    removeClass(siblings(v.element), COMPLETELY);
                    lazyLoadOthers();
                    setState({
                        canScroll: true
                    });
                    EventEmitter.emit(events.afterSectionLoads, v);
                    if (isFunction(v.callback)) v.callback();
                }
                FP.setFitToSection = setFitToSection;
                FP.fitToSection = fitToSection;
                function setFitToSection(value, type) {
                    setVariableState("fitToSection", value, type);
                }
                function fitToSection() {
                    if (state.canScroll) {
                        setState({
                            isResizing: true
                        });
                        scrollPage(state.activeSection);
                        setState({
                            isResizing: false
                        });
                    }
                }
                FP.setResponsive = setResponsive;
                function responsive() {
                    var widthLimit = getOptions().responsive || getOptions().responsiveWidth;
                    var heightLimit = getOptions().responsiveHeight;
                    var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
                    var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;
                    if (widthLimit && heightLimit) setResponsive(isBreakingPointWidth || isBreakingPointHeight); else if (widthLimit) setResponsive(isBreakingPointWidth); else if (heightLimit) setResponsive(isBreakingPointHeight);
                }
                function setResponsive(active) {
                    var isResponsive = isResponsiveMode();
                    if (active) {
                        if (!isResponsive) {
                            setAutoScrolling(false, "internal");
                            setFitToSection(false, "internal");
                            hide($(SECTION_NAV_SEL));
                            addClass($body, RESPONSIVE);
                            if (isFunction(getOptions().afterResponsive)) getOptions().afterResponsive.call(getContainer(), active);
                        }
                    } else if (isResponsive) {
                        setAutoScrolling(getOriginals().autoScrolling, "internal");
                        setFitToSection(getOriginals().autoScrolling, "internal");
                        show($(SECTION_NAV_SEL));
                        removeClass($body, RESPONSIVE);
                        if (isFunction(getOptions().afterResponsive)) getOptions().afterResponsive.call(getContainer(), active);
                    }
                }
                function isResponsiveMode() {
                    return hasClass($body, RESPONSIVE);
                }
                function addTableClass(element) {
                    if (!getOptions().verticalCentered) return;
                    if (!getOptions().scrollOverflow && scrollOverflowHandler.shouldBeScrollable(element.item)) return;
                    if (!scrollOverflowHandler.isScrollable(element)) if (!hasClass(element.item, TABLE)) addClass(element.item, TABLE);
                }
                var startingSection = null;
                FP.getActiveSection = getActiveSection;
                function getStartingSection() {
                    return startingSection;
                }
                function styleSection(section) {
                    var sectionElem = section.item;
                    var hasSlides = section.allSlidesItems.length;
                    var index = section.index();
                    if (!getState().activeSection && section.isVisible) {
                        addClass(sectionElem, ACTIVE);
                        updateState();
                        startingSection = getState().activeSection.item;
                    }
                    if (getOptions().paddingTop) css(sectionElem, {
                        "padding-top": getOptions().paddingTop
                    });
                    if (getOptions().paddingBottom) css(sectionElem, {
                        "padding-bottom": getOptions().paddingBottom
                    });
                    if (typeof getOptions().sectionsColor[index] !== "undefined") css(sectionElem, {
                        "background-color": getOptions().sectionsColor[index]
                    });
                    if (typeof getOptions().anchors[index] !== "undefined") sectionElem.setAttribute("data-anchor", section.anchor);
                    if (!hasSlides) addTableClass(section);
                }
                function getActiveSection() {
                    return getState().activeSection;
                }
                function getSectionFromPanel(panel) {
                    return panel.isSection ? panel : panel.parent;
                }
                var g_focusScrollableId;
                EventEmitter.on(events.bindEvents, bindEvents$b);
                function bindEvents$b() {
                    EventEmitter.on(events.onAfterRenderNoAnchor, afterRender);
                    EventEmitter.on(events.onLeave, scrollOverflowHandler.onLeave);
                    EventEmitter.on(events.onSlideLeave, scrollOverflowHandler.onLeave);
                    EventEmitter.on(events.afterSlideLoads, scrollOverflowHandler.afterLoad);
                    EventEmitter.on(events.afterSectionLoads, scrollOverflowHandler.afterLoad);
                    EventEmitter.on(events.onDestroy, onDestroy$7);
                    docAddEvent("keyup", scrollOverflowHandler.keyUpHandler);
                }
                function afterRender() {
                    if (getOptions().scrollOverflow && !getOptions().scrollBar) {
                        scrollOverflowHandler.makeScrollable();
                        scrollOverflowHandler.focusScrollable();
                    }
                }
                function onDestroy$7() {
                    EventEmitter.removeListener(events.onAfterRenderNoAnchor, afterRender);
                    docRemoveEvent("keyup", scrollOverflowHandler.keyUpHandler);
                }
                var scrollOverflowHandler = {
                    focusedElem: null,
                    shouldFocusScrollable: true,
                    isInnerScrollAllowed: true,
                    timeBeforeReachingLimit: null,
                    timeLastScroll: null,
                    preventScrollWithMouseWheel: function preventScrollWithMouseWheel(e) {
                        if (!state.canScroll) {
                            preventDefault(e);
                            return false;
                        }
                    },
                    preventScrollWithKeyboard: function preventScrollWithKeyboard(e) {
                        if (!isInsideInput() && getOptions().keyboardScrolling) {
                            var directionKeys = [ 38, 33, 32, 40, 34, 36, 35 ];
                            if (directionKeys.indexOf(e.keyCode) > -1 && !scrollOverflowHandler.isInnerScrollAllowed) {
                                preventDefault(e);
                                return false;
                            }
                        }
                    },
                    keyUpHandler: function keyUpHandler() {
                        scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
                    },
                    onLeave: function onLeave() {
                        clearTimeout(g_focusScrollableId);
                        scrollOverflowHandler.isInnerScrollAllowed = false;
                    },
                    afterLoad: function afterLoad() {
                        scrollOverflowHandler.isInnerScrollAllowed = false;
                        clearTimeout(g_focusScrollableId);
                        g_focusScrollableId = setTimeout((function() {
                            scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
                        }), 200);
                    },
                    unfocusScrollable: function unfocusScrollable() {
                        if (doc.activeElement === this.focusedElem) {
                            this.focusedElem.blur();
                            scrollOverflowHandler.isInnerScrollAllowed = false;
                        }
                    },
                    focusScrollable: function focusScrollable() {
                        if (!getOptions().scrollOverflow || !scrollOverflowHandler.shouldFocusScrollable) return;
                        scrollOverflowHandler.unfocusScrollable();
                        var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item);
                        if (scrollableItem && !isTouchDevice && !isTouch) {
                            this.focusedElem = scrollableItem;
                            requestAnimationFrame((function() {
                                scrollableItem.focus();
                                scrollOverflowHandler.isInnerScrollAllowed = true;
                            }));
                        }
                        scrollOverflowHandler.shouldFocusScrollable = false;
                    },
                    makeScrollable: function makeScrollable() {
                        if (getOptions().scrollOverflowMacStyle && !isMacDevice) addClass($body, "fp-scroll-mac");
                        getState().panels.forEach((function(el) {
                            if (el.slides && el.slides.length) return;
                            if (hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) return; else {
                                var item = getSlideOrSection(el.item);
                                var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
                                var section = getSectionFromPanel(el);
                                if (isIE11) {
                                    var toggleAction = shouldBeScrollable ? "addClass" : "removeClass";
                                    utils[toggleAction](section.item, IS_OVERFLOW);
                                    utils[toggleAction](el.item, IS_OVERFLOW);
                                } else {
                                    addClass(section.item, IS_OVERFLOW);
                                    addClass(el.item, IS_OVERFLOW);
                                }
                                if (!el.hasScroll) {
                                    scrollOverflowHandler.createWrapper(item);
                                    scrollOverflowHandler.bindEvents(item);
                                }
                                el.hasScroll = true;
                            }
                        }));
                    },
                    bindEvents: function bindEvents(item) {
                        scrollOverflowHandler.getScrollableItem(item).addEventListener("scroll", scrollOverflowHandler.onPanelScroll);
                        item.addEventListener("wheel", scrollOverflowHandler.preventScrollWithMouseWheel, {
                            passive: false
                        });
                        item.addEventListener("keydown", scrollOverflowHandler.preventScrollWithKeyboard, {
                            passive: false
                        });
                    },
                    createWrapper: function createWrapper(item) {
                        var overflowWrapper = document.createElement("div");
                        overflowWrapper.className = OVERFLOW;
                        wrapInner(item, overflowWrapper);
                        overflowWrapper.setAttribute("tabindex", "-1");
                    },
                    destroyWrapper: function destroyWrapper(item) {
                        var overflowWrapper = $(OVERFLOW_SEL, item)[0];
                        if (overflowWrapper) {
                            unwrap(overflowWrapper);
                            item.removeAttribute("tabindex");
                        }
                    },
                    getScrollableItem: function getScrollableItem(sectionItem) {
                        var panel = getSlideOrSection(sectionItem);
                        return $(OVERFLOW_SEL, panel)[0] || panel;
                    },
                    hasScroll: function hasScroll(panelItem) {
                        return hasClass(panelItem, OVERFLOW) || $(OVERFLOW_SEL, panelItem)[0] != null;
                    },
                    isScrollable: function isScrollable(panel) {
                        return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
                    },
                    shouldBeScrollable: function shouldBeScrollable(item) {
                        var scrollable = scrollOverflowHandler.getScrollableItem(item);
                        return scrollable.scrollHeight > win.innerHeight;
                    },
                    isScrolled: function isScrolled(direction, el) {
                        if (!state.canScroll) return false;
                        if (getOptions().scrollBar) return true;
                        var scrollableItem = scrollOverflowHandler.getScrollableItem(el);
                        if (!getOptions().scrollOverflow || !hasClass(scrollableItem, OVERFLOW) || hasClass(el, "fp-noscroll") || hasClass(getSlideOrSection(el), "fp-noscroll")) return true;
                        var ie11offset = isIE11 ? 1 : 0;
                        var positionY = scrollableItem.scrollTop;
                        var isTopReached = direction === "up" && positionY <= 0;
                        var isBottomReached = direction === "down" && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY) + ie11offset;
                        var isScrolled = isTopReached || isBottomReached;
                        if (!isScrolled) this.timeBeforeReachingLimit = (new Date).getTime();
                        return isScrolled;
                    },
                    shouldMovePage: function shouldMovePage() {
                        this.timeLastScroll = (new Date).getTime();
                        var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
                        var isUsingTouch = isTouchDevice || isTouch;
                        var isGrabbing = isUsingTouch && state.isGrabbing;
                        var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
                        return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
                    },
                    onPanelScroll: function() {
                        var prevPosition = 0;
                        return function(e) {
                            var currentPosition = e.target.scrollTop;
                            var direction = state.touchDirection !== "none" ? state.touchDirection : prevPosition < currentPosition ? "down" : "up";
                            prevPosition = currentPosition;
                            if (isFunction(getOptions().onScrollOverflow)) fireCallback("onScrollOverflow", {
                                position: currentPosition,
                                direction
                            });
                            if (hasClass(e.target, OVERFLOW) && state.canScroll) if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) if (scrollOverflowHandler.shouldBeScrollable(getState().activeSection.item)) EventEmitter.emit(events.onScrollOverflowScrolled, {
                                direction
                            });
                        };
                    }()
                };
                var g_afterSlideLoadsId;
                FP.landscapeScroll = landscapeScroll;
                EventEmitter.on(events.bindEvents, bindEvents$a);
                function bindEvents$a() {
                    EventEmitter.on(events.onPerformMovement, onPerformMovement);
                }
                function onPerformMovement() {
                    clearTimeout(g_afterSlideLoadsId);
                    setState({
                        slideMoving: false
                    });
                }
                function landscapeScroll(slides, destiny, direction) {
                    var sectionElem = closest(slides, SECTION_SEL);
                    var section = getState().sections.filter((function(section) {
                        return section.item == sectionElem;
                    }))[0];
                    var slide = section.slides.filter((function(slide) {
                        return slide.item == destiny;
                    }))[0];
                    var v = {
                        slides,
                        destiny,
                        direction,
                        destinyPos: {
                            left: destiny.offsetLeft
                        },
                        slideIndex: slide.index(),
                        section: sectionElem,
                        sectionIndex: section.index(),
                        anchorLink: section.anchor,
                        slidesNav: $(SLIDES_NAV_SEL, sectionElem)[0],
                        slideAnchor: slide.anchor,
                        prevSlide: section.activeSlide.item,
                        prevSlideIndex: section.activeSlide.index(),
                        items: {
                            section,
                            origin: section.activeSlide,
                            destination: slide
                        },
                        localIsResizing: state.isResizing
                    };
                    v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
                    v.direction = v.direction ? v.direction : v.xMovement;
                    if (!v.localIsResizing) setState({
                        canScroll: false
                    });
                    if (getOptions().onSlideLeave) if (!v.localIsResizing && v.xMovement !== "none") if (isFunction(getOptions().onSlideLeave)) if (fireCallback("onSlideLeave", v) === false) {
                        setState({
                            slideMoving: false
                        });
                        return;
                    }
                    addClass(destiny, ACTIVE);
                    removeClass(siblings(destiny), ACTIVE);
                    updateState();
                    if (!v.localIsResizing) {
                        stopMedia(v.prevSlide);
                        lazyLoad(destiny);
                    }
                    toggleControlArrows(v);
                    if (section.isActive && !v.localIsResizing) setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
                    EventEmitter.emit(events.onSlideLeave, v);
                    performHorizontalMove(slides, v, true);
                }
                function performHorizontalMove(slides, v, fireCallback) {
                    var destinyPos = v.destinyPos;
                    activeSlidesNavigation(v.slidesNav, v.slideIndex);
                    setState({
                        scrollX: Math.round(destinyPos.left)
                    });
                    if (getOptions().css3) {
                        var translate3d = "translate3d(-" + Math.round(destinyPos.left) + "px, 0px, 0px)";
                        FP.test.translate3dH[v.sectionIndex] = translate3d;
                        css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
                        clearTimeout(g_afterSlideLoadsId);
                        g_afterSlideLoadsId = setTimeout((function() {
                            if (fireCallback) afterSlideLoads(v);
                        }), getOptions().scrollingSpeed);
                    } else {
                        FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
                        scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, (function() {
                            if (fireCallback) afterSlideLoads(v);
                        }));
                    }
                }
                function getXmovement(fromIndex, toIndex) {
                    if (fromIndex == toIndex) return "none";
                    if (fromIndex > toIndex) return "left";
                    return "right";
                }
                function onDestroy$6() {
                    clearTimeout(g_afterSlideLoadsId);
                }
                function afterSlideLoads(v) {
                    if (!v.localIsResizing) {
                        if (isFunction(getOptions().afterSlideLoad)) fireCallback("afterSlideLoad", v);
                        setState({
                            canScroll: true
                        });
                        playMedia(v.destiny);
                        EventEmitter.emit(events.afterSlideLoads, v);
                    }
                    setState({
                        slideMoving: false
                    });
                }
                function silentLandscapeScroll(activeSlide, noCallbacks) {
                    setScrollingSpeed(0, "internal");
                    if (typeof noCallbacks !== "undefined") setState({
                        isResizing: true
                    });
                    landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);
                    if (typeof noCallbacks !== "undefined") setState({
                        isResizing: false
                    });
                    setScrollingSpeed(getOriginals().scrollingSpeed, "internal");
                }
                var g_prevActiveSectionIndex = null;
                var g_prevActiveSlideIndex = null;
                function updateState() {
                    state.activeSection = null;
                    state.sections.map((function(section) {
                        var isActive = hasClass(section.item, ACTIVE);
                        section.isActive = isActive;
                        section.hasScroll = scrollOverflowHandler.hasScroll(section.item);
                        if (isActive) state.activeSection = section;
                        if (section.slides.length) {
                            section.activeSlide = null;
                            section.slides.map((function(slide) {
                                var isActiveSlide = hasClass(slide.item, ACTIVE);
                                slide.hasScroll = scrollOverflowHandler.hasScroll(section.item);
                                slide.isActive = isActiveSlide;
                                if (isActiveSlide) section.activeSlide = slide;
                            }));
                        }
                    }));
                    scrollToNewActivePanel();
                }
                function updateStructuralState() {
                    var allSectionItems = $(getOptions().sectionSelector, getContainer());
                    var sectionsItems = getVisible(allSectionItems);
                    var allSections = Array.from(allSectionItems).map((function(item) {
                        return new SectionPanel(item);
                    }));
                    var sections = allSections.filter((function(item) {
                        return item.isVisible;
                    }));
                    var slides = sections.reduce((function(acc, section) {
                        return acc.concat(section.slides);
                    }), []);
                    g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
                    g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
                    state.numSections = sectionsItems.length;
                    state.numSlides = sections.reduce((function(acc, section) {
                        return acc + section.slides.length;
                    }), 0);
                    state.sections = sections;
                    state.sectionsIncludingHidden = allSections;
                    state.slides = slides;
                    state.panels = state.sections.concat(state.slides);
                }
                function getPrevActivePanelIndex(activePanel) {
                    if (!activePanel) return null;
                    var prevActivePanelItem = activePanel ? activePanel.item : null;
                    var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;
                    if (prevActivePanelItem) {
                        var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
                        return panel ? panel.index() : null;
                    }
                    return null;
                }
                function scrollToNewActivePanel() {
                    var activeSection = state.activeSection;
                    var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
                    var activeSlide = state.activeSection ? state.activeSection.activeSlide : null;
                    if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
                        var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);
                        if (newActiveSection) {
                            state.activeSection = newActiveSection;
                            state.activeSection.isActive = true;
                            addClass(state.activeSection.item, ACTIVE);
                        }
                        if (state.activeSection) silentScroll(state.activeSection.item.offsetTop);
                    }
                    if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
                        var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);
                        if (newActiveSlide) {
                            state.activeSection.activeSlide = newActiveSlide;
                            state.activeSection.activeSlide.isActive = true;
                            addClass(state.activeSection.activeSlide.item, ACTIVE);
                        }
                        if (state.activeSection.activeSlide) silentLandscapeScroll(state.activeSection.activeSlide.item, "internal");
                    }
                }
                function getNewActivePanel(prevActivePanelIndex, siblings) {
                    var newActiveSection;
                    var prevIndex = prevActivePanelIndex - 1;
                    var nextIndex = prevActivePanelIndex;
                    do {
                        newActiveSection = siblings[prevIndex] || siblings[nextIndex];
                        if (newActiveSection) break;
                        prevIndex -= 1;
                        nextIndex += 1;
                    } while (prevIndex >= 0 || nextIndex < siblings.length);
                    return newActiveSection;
                }
                var SectionPanel = function SectionPanel(el) {
                    var _this = this;
                    [].push.call(arguments, getOptions().sectionSelector);
                    Item.apply(this, arguments);
                    this.allSlidesItems = $(getOptions().slideSelector, el);
                    this.slidesIncludingHidden = Array.from(this.allSlidesItems).map((function(item) {
                        return new SlidePanel(item, _this);
                    }));
                    this.slides = this.slidesIncludingHidden.filter((function(slidePanel) {
                        return slidePanel.isVisible;
                    }));
                    this.activeSlide = this.slides.length ? this.slides.filter((function(slide) {
                        return slide.isActive;
                    }))[0] || this.slides[0] : null;
                };
                SectionPanel.prototype = Item.prototype;
                SectionPanel.prototype.constructor = SectionPanel;
                var SlidePanel = function SlidePanel(el, section) {
                    this.parent = section;
                    Item.call(this, el, getOptions().slideSelector);
                };
                SlidePanel.prototype = Item.prototype;
                SlidePanel.prototype.constructor = SectionPanel;
                function addInternalSelectors() {
                    addClass($(getOptions().sectionSelector, getContainer()), SECTION);
                    addClass($(getOptions().slideSelector, getContainer()), SLIDE);
                }
                function styleSlides(section) {
                    var numSlides = section.slides.length;
                    var slidesElems = section.allSlidesItems;
                    var slides = section.slides;
                    var sliderWidth = numSlides * 100;
                    var slideWidth = 100 / numSlides;
                    if (!$(SLIDES_WRAPPER_SEL, section.item)[0]) {
                        var slidesWrapper = doc.createElement("div");
                        slidesWrapper.className = SLIDES_WRAPPER;
                        wrapAll(slidesElems, slidesWrapper);
                        var slidesContainer = doc.createElement("div");
                        slidesContainer.className = SLIDES_CONTAINER;
                        wrapAll(slidesElems, slidesContainer);
                    }
                    css($(SLIDES_CONTAINER_SEL, section.item), {
                        width: sliderWidth + "%"
                    });
                    if (numSlides > 1) {
                        if (getOptions().controlArrows) createSlideArrows(section);
                        if (getOptions().slidesNavigation) addSlidesNavigation(section);
                    }
                    slides.forEach((function(slide) {
                        css(slide.item, {
                            width: slideWidth + "%"
                        });
                        if (getOptions().verticalCentered) addTableClass(slide);
                    }));
                    var startingSlide = section.activeSlide || null;
                    if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) silentLandscapeScroll(startingSlide.item, "internal"); else addClass(slidesElems[0], ACTIVE);
                }
                var g_wrapperObserver;
                var g_wrapperObserveConfig = {
                    attributes: false,
                    subtree: true,
                    childList: true,
                    characterData: true
                };
                EventEmitter.on(events.bindEvents, bindEvents$9);
                FP["render"] = onContentChange;
                function bindEvents$9() {
                    if (getOptions().observer && "MutationObserver" in window && $(WRAPPER_SEL)[0]) g_wrapperObserver = createObserver($(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
                    EventEmitter.on(events.contentChanged, onContentChange);
                }
                function createObserver(target, callback, config) {
                    var observer = new MutationObserver(callback);
                    observer.observe(target, config);
                    return observer;
                }
                function didSlidesChange() {
                    return getVisible($(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
                }
                function didSectionsChange() {
                    return getVisible($(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
                }
                function didSectionsOrSlidesChange() {
                    return didSlidesChange() || didSectionsChange();
                }
                function onContentChange(mutations) {
                    var _didSlidesChange = didSlidesChange();
                    if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
                        if (getOptions().observer && g_wrapperObserver) g_wrapperObserver.disconnect();
                        updateStructuralState();
                        updateState();
                        getOptions().anchors = [];
                        remove($(SECTION_NAV_SEL));
                        addInternalSelectors();
                        setOptionsFromDOM();
                        if (getOptions().navigation) addVerticalNavigation();
                        if (_didSlidesChange) {
                            remove($(SLIDES_NAV_SEL));
                            remove($(SLIDES_ARROW_SEL));
                        }
                        getState().sections.forEach((function(section) {
                            if (section.slides.length) {
                                if (_didSlidesChange) styleSlides(section);
                            } else styleSection(section);
                        }));
                    }
                    if (getOptions().observer && g_wrapperObserver && $(WRAPPER_SEL)[0]) g_wrapperObserver.observe($(WRAPPER_SEL)[0], g_wrapperObserveConfig);
                }
                var supportsPassiveEvents = function() {
                    var g_supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({}, "passive", {
                            get: function get() {
                                g_supportsPassive = true;
                            }
                        });
                        windowAddEvent("testPassive", null, opts);
                        windowRemoveEvent("testPassive", null, opts);
                    } catch (e) {}
                    return function() {
                        return g_supportsPassive;
                    };
                }();
                function getPassiveOptionsIfPossible() {
                    return supportsPassiveEvents() ? {
                        passive: false
                    } : false;
                }
                var wheelDataHandler = function() {
                    var _prevTime = (new Date).getTime();
                    var _scrollings = [];
                    var isScrollingVertically;
                    var direction;
                    return {
                        registerEvent: function registerEvent(e) {
                            e = e || win.event;
                            var value = e.wheelDelta || -e.deltaY || -e.detail;
                            var delta = Math.max(-1, Math.min(1, value));
                            var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
                            isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
                            var curTime = (new Date).getTime();
                            direction = delta < 0 ? "down" : "up";
                            if (_scrollings.length > 149) _scrollings.shift();
                            _scrollings.push(Math.abs(value));
                            var timeDiff = curTime - _prevTime;
                            _prevTime = curTime;
                            if (timeDiff > 200) _scrollings = [];
                        },
                        isAccelerating: function isAccelerating() {
                            var averageEnd = getAverage(_scrollings, 10);
                            var averageMiddle = getAverage(_scrollings, 70);
                            var isAccelerating = averageEnd >= averageMiddle;
                            return _scrollings.length ? isAccelerating && isScrollingVertically : false;
                        },
                        getDirection: function getDirection() {
                            return direction;
                        }
                    };
                }();
                function scrollBeyondFullPage() {
                    var dtop = getDestinationOffset();
                    var scrollSettings = getScrollSettings(dtop);
                    FP.test.top = -dtop + "px";
                    setState({
                        canScroll: false
                    });
                    scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, (function() {
                        setTimeout((function() {
                            setState({
                                isBeyondFullpage: true
                            });
                            setState({
                                canScroll: true
                            });
                        }), 30);
                    }));
                }
                function onKeyDown() {
                    if (!isFullPageAbove()) return; else scrollUpToFullpage();
                }
                function scrollUpToFullpage() {
                    var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
                    setState({
                        canScroll: false
                    });
                    scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, (function() {
                        setState({
                            canScroll: true
                        });
                        setState({
                            isBeyondFullpage: false
                        });
                        setState({
                            isAboutToScrollToFullPage: false
                        });
                    }));
                }
                function getDestinationOffset() {
                    if (!getOptions().css3) return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
                    return getScrollTop() + getWindowHeight();
                }
                function beyondFullPageHandler(container, e) {
                    (new Date).getTime();
                    var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === "up";
                    var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;
                    if (g_isAboutToScrollToFullPage) {
                        preventDefault(e);
                        return false;
                    }
                    if (getState().isBeyondFullpage) {
                        if (!pauseScroll) keyframeTime("set", "beyondFullpage", 1e3); else {
                            var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime("isNewKeyframe", "beyondFullpage") || !wheelDataHandler.isAccelerating());
                            var scrollSettings;
                            if (shouldSetFixedPosition) {
                                scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
                                scrollSettings.element.scrollTo(0, scrollSettings.options);
                                setState({
                                    isAboutToScrollToFullPage: false
                                });
                                preventDefault(e);
                                return false;
                            } else if (wheelDataHandler.isAccelerating()) {
                                pauseScroll = false;
                                setState({
                                    isAboutToScrollToFullPage: true
                                });
                                setState({
                                    scrollTrigger: "wheel"
                                });
                                scrollUpToFullpage();
                                preventDefault(e);
                                return false;
                            }
                        }
                        if (!g_isAboutToScrollToFullPage) if (!pauseScroll) return true;
                    }
                }
                var keyframeTime = function() {
                    var isNew = false;
                    var frames = {};
                    var timeframes = {};
                    return function(action, name, timeframe) {
                        switch (action) {
                          case "set":
                            frames[name] = (new Date).getTime();
                            timeframes[name] = timeframe;
                            break;

                          case "isNewKeyframe":
                            var current = (new Date).getTime();
                            isNew = current - frames[name] > timeframes[name];
                            break;
                        }
                        return isNew;
                    };
                }();
                FP.moveSectionDown = moveSectionDown;
                function moveSectionDown() {
                    var next = getState().activeSection.next();
                    if (!next && (getOptions().loopBottom || getOptions().continuousVertical)) next = getState().sections[0];
                    if (next != null) scrollPage(next, null, false); else if (hasContentBeyondFullPage()) EventEmitter.emit(events.scrollBeyondFullpage);
                }
                function hasContentBeyondFullPage() {
                    return getContainer().scrollHeight < $body.scrollHeight && getOptions().scrollBar && getOptions().scrollBeyondFullpage;
                }
                FP.moveSectionUp = moveSectionUp;
                function moveSectionUp() {
                    var prev = getState().activeSection.prev();
                    if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) prev = getLast(getState().sections);
                    if (prev != null) scrollPage(prev, null, true);
                }
                var oldPageY = 0;
                function mouseMoveHandler(e) {
                    if (!getOptions().autoScrolling) return;
                    if (state.canScroll) if (e.pageY < oldPageY && getIsScrollAllowed().m.up) moveSectionUp(); else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) moveSectionDown();
                    oldPageY = e.pageY;
                }
                function setOldPageY(value) {
                    oldPageY = value;
                }
                function scrolling(type) {
                    if (!getIsScrollAllowed().m[type]) return;
                    var scrollSection = type === "down" ? moveSectionDown : moveSectionUp;
                    if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) {
                        if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) scrollSection();
                    } else scrollSection();
                }
                var touchStartY = 0;
                var touchStartX = 0;
                var touchEndY = 0;
                var touchEndX = 0;
                var MSPointer = getMSPointer();
                var pointers = {
                    touchmove: "ontouchmove" in window ? "touchmove" : MSPointer ? MSPointer.move : null,
                    touchstart: "ontouchstart" in window ? "touchstart" : MSPointer ? MSPointer.down : null
                };
                function addTouchHandler() {
                    if (!pointers.touchmove) return;
                    if (isTouchDevice || isTouch) {
                        if (getOptions().autoScrolling) {
                            $body.removeEventListener(pointers.touchmove, preventBouncing, {
                                passive: false
                            });
                            $body.addEventListener(pointers.touchmove, preventBouncing, {
                                passive: false
                            });
                        }
                        var touchWrapper = getOptions().touchWrapper;
                        touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
                        touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
                            passive: false
                        });
                        touchWrapper.addEventListener(pointers.touchstart, touchStartHandler);
                        touchWrapper.addEventListener(pointers.touchmove, touchMoveHandler, {
                            passive: false
                        });
                    }
                }
                function removeTouchHandler() {
                    if (!pointers.touchmove) return;
                    if (isTouchDevice || isTouch) {
                        if (getOptions().autoScrolling) {
                            $body.removeEventListener(pointers.touchmove, touchMoveHandler, {
                                passive: false
                            });
                            $body.removeEventListener(pointers.touchmove, preventBouncing, {
                                passive: false
                            });
                        }
                        var touchWrapper = getOptions().touchWrapper;
                        touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
                        touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
                            passive: false
                        });
                    }
                }
                function touchMoveHandler(e) {
                    var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
                    var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);
                    if (isReallyTouch(e)) {
                        setState({
                            isGrabbing: true,
                            isUsingWheel: false
                        });
                        if (getOptions().autoScrolling) if (hasActiveSectionOverflow && !state.canScroll || getOptions().scrollBar) preventDefault(e);
                        var touchEvents = getEventsPage(e);
                        touchEndY = touchEvents.y;
                        touchEndX = touchEvents.x;
                        var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
                        var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
                        var isHorizontalPredominantMove = $(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
                        var directionH = touchStartX > touchEndX ? "right" : "left";
                        var directionV = touchStartY > touchEndY ? "down" : "up";
                        var direction = isHorizontalPredominantMove ? directionH : directionV;
                        setState({
                            touchDirection: direction
                        });
                        if (isHorizontalPredominantMove) {
                            if (!state.slideMoving && isHorizontalMovementEnough) if (touchStartX > touchEndX) {
                                if (getIsScrollAllowed().m.right) EventEmitter.emit(events.moveSlideRight, {
                                    section: activeSection
                                });
                            } else if (getIsScrollAllowed().m.left) EventEmitter.emit(events.moveSlideLeft, {
                                section: activeSection
                            });
                        } else if (getOptions().autoScrolling && state.canScroll) if (isVerticalMovementEnough) scrolling(directionV);
                    }
                }
                function isReallyTouch(e) {
                    return typeof e.pointerType === "undefined" || e.pointerType != "mouse";
                }
                function touchStartHandler(e) {
                    if (getOptions().fitToSection) setState({
                        activeAnimation: false
                    });
                    if (isReallyTouch(e)) {
                        var touchEvents = getEventsPage(e);
                        touchStartY = touchEvents.y;
                        touchStartX = touchEvents.x;
                    }
                    windowAddEvent("touchend", touchEndHandler);
                }
                function touchEndHandler() {
                    windowRemoveEvent("touchend", touchEndHandler);
                    setState({
                        isGrabbing: false
                    });
                }
                function getEventsPage(e) {
                    var events = {};
                    events.y = typeof e.pageY !== "undefined" && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
                    events.x = typeof e.pageX !== "undefined" && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;
                    if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== "undefined") {
                        events.y = e.touches[0].pageY;
                        events.x = e.touches[0].pageX;
                    }
                    return events;
                }
                function getMSPointer() {
                    var pointer;
                    if (win.PointerEvent) pointer = {
                        down: "pointerdown",
                        move: "pointermove"
                    };
                    return pointer;
                }
                function preventBouncing(e) {
                    if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) if (!state.canScroll) preventDefault(e);
                }
                FP.moveSlideLeft = moveSlideLeft;
                FP.moveSlideRight = moveSlideRight;
                function moveSlide(direction, section) {
                    var activeSectionItem = section == null ? getState().activeSection.item : section;
                    var activeSection = getPanelByElement(state.sections, activeSectionItem);
                    var slides = $(SLIDES_WRAPPER_SEL, activeSectionItem)[0];
                    if (slides == null || state.slideMoving || activeSection.slides.length < 2) return;
                    var currentSlide = activeSection.activeSlide;
                    var destiny = direction === "left" ? currentSlide.prev() : currentSlide.next();
                    if (!destiny) {
                        if (!getOptions().loopHorizontal) return;
                        destiny = direction === "left" ? getLast(activeSection.slides) : activeSection.slides[0];
                    }
                    setState({
                        slideMoving: !FP.test.isTesting
                    });
                    landscapeScroll(slides, destiny.item, direction);
                }
                function moveSlideLeft(section) {
                    moveSlide("left", section);
                }
                function moveSlideRight(section) {
                    moveSlide("right", section);
                }
                function getSectionByAnchor(sectionAnchor) {
                    var section = getState().sections.filter((function(section) {
                        return section.anchor === sectionAnchor;
                    }))[0];
                    if (!section) {
                        var sectionIndex = typeof sectionAnchor !== "undefined" ? sectionAnchor - 1 : 0;
                        section = getState().sections[sectionIndex];
                    }
                    return section;
                }
                function scrollSlider(slideElem) {
                    if (slideElem != null) landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
                }
                function scrollPageAndSlide(sectionAnchor, slideAnchor) {
                    var section = getSectionByAnchor(sectionAnchor);
                    if (section == null) return;
                    var slideElem = getSlideByAnchor(slideAnchor, section);
                    if ((!section.anchor || section.anchor !== state.lastScrolledDestiny) && !hasClass(section.item, ACTIVE)) scrollPage(section, (function() {
                        scrollSlider(slideElem);
                    })); else scrollSlider(slideElem);
                }
                function getSlideByAnchor(slideAnchor, section) {
                    var slide = section.slides.filter((function(slide) {
                        return slide.anchor === slideAnchor;
                    }))[0];
                    if (slide == null) {
                        slideAnchor = typeof slideAnchor !== "undefined" ? slideAnchor : 0;
                        slide = section.slides[slideAnchor];
                    }
                    return slide ? slide.item : null;
                }
                FP.moveTo = moveTo$1;
                function moveTo$1(sectionAnchor, slideAnchor) {
                    var destiny = getSectionByAnchor(sectionAnchor);
                    if (typeof slideAnchor !== "undefined") scrollPageAndSlide(sectionAnchor, slideAnchor); else if (destiny != null) scrollPage(destiny);
                }
                var g_controlPressed;
                var g_keydownId;
                var g_elToFocus;
                EventEmitter.on(events.bindEvents, bindEvents$8);
                function bindEvents$8() {
                    windowAddEvent("blur", blurHandler);
                    docAddEvent("keydown", keydownHandler);
                    docAddEvent("keyup", keyUpHandler);
                    EventEmitter.on(events.onDestroy, onDestroy$5);
                    EventEmitter.on(events.afterSlideLoads, onAfterSlideLoads);
                    EventEmitter.on(events.afterSectionLoads, afterSectionLoads);
                }
                function onDestroy$5() {
                    clearTimeout(g_keydownId);
                    docRemoveEvent("keydown", keydownHandler);
                    docRemoveEvent("keyup", keyUpHandler);
                }
                function keydownHandler(e) {
                    clearTimeout(g_keydownId);
                    var keyCode = e.keyCode;
                    var isPressingHorizontalArrows = [ 37, 39 ].indexOf(keyCode) > -1;
                    var canScrollWithKeyboard = getOptions().autoScrolling || getOptions().fitToSection || isPressingHorizontalArrows;
                    if (keyCode === 9) onTab(e); else if (!isInsideInput() && getOptions().keyboardScrolling && canScrollWithKeyboard) {
                        g_controlPressed = e.ctrlKey;
                        g_keydownId = setTimeout((function() {
                            onkeydown(e);
                        }), 0);
                    }
                }
                function onkeydown(e) {
                    var shiftPressed = e.shiftKey;
                    var activeElement = doc.activeElement;
                    var isMediaFocused = matches(activeElement, "video") || matches(activeElement, "audio");
                    var isScrolled = {
                        up: scrollOverflowHandler.isScrolled("up", getState().activeSection.item),
                        down: scrollOverflowHandler.isScrolled("down", getState().activeSection.item)
                    };
                    var isUsingHorizontalArrowKeys = [ 37, 39 ].indexOf(e.keyCode) > -1;
                    cancelDirectionKeyEvents(e);
                    if (!state.canScroll && !isUsingHorizontalArrowKeys) return;
                    setState({
                        scrollTrigger: "keydown"
                    });
                    switch (e.keyCode) {
                      case 38:
                      case 33:
                        if (getIsScrollAllowed().k.up && isScrolled.up) if (state.isBeyondFullpage) EventEmitter.emit(events.onKeyDown, {
                            e
                        }); else moveSectionUp(); else scrollOverflowHandler.focusScrollable();
                        break;

                      case 32:
                        if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
                            moveSectionUp();
                            break;
                        }

                      case 40:
                      case 34:
                        if (getIsScrollAllowed().k.down && isScrolled.down) {
                            if (state.isBeyondFullpage) return;
                            if (e.keyCode !== 32 || !isMediaFocused) moveSectionDown();
                        } else scrollOverflowHandler.focusScrollable();
                        break;

                      case 36:
                        if (getIsScrollAllowed().k.up) moveTo$1(1);
                        break;

                      case 35:
                        if (getIsScrollAllowed().k.down) moveTo$1(getState().sections.length);
                        break;

                      case 37:
                        if (getIsScrollAllowed().k.left) moveSlideLeft();
                        break;

                      case 39:
                        if (getIsScrollAllowed().k.right) moveSlideRight();
                        break;

                      default:
                        return;
                    }
                }
                function keyUpHandler(e) {
                    if (state.isWindowFocused) g_controlPressed = e.ctrlKey;
                }
                function blurHandler() {
                    setState({
                        isWindowFocused: false
                    });
                    g_controlPressed = false;
                }
                function onTab(e) {
                    var isShiftPressed = e.shiftKey;
                    var activeElement = doc.activeElement;
                    var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));
                    function preventAndFocusFirst(e) {
                        preventDefault(e);
                        return focusableElements[0] ? focusableElements[0].focus() : null;
                    }
                    if (!state.canScroll) {
                        preventDefault(e);
                        return;
                    }
                    if (isFocusOutside(e)) return;
                    if (activeElement) {
                        if (closest(activeElement, SECTION_ACTIVE_SEL + "," + SECTION_ACTIVE_SEL + " " + SLIDE_ACTIVE_SEL) == null) activeElement = preventAndFocusFirst(e);
                    } else preventAndFocusFirst(e);
                    var isFirstFocusableInSection = activeElement == focusableElements[0];
                    var isLastFocusableInSection = activeElement == focusableElements[focusableElements.length - 1];
                    var isNextItem = !isShiftPressed && isLastFocusableInSection;
                    var isPrevItem = isShiftPressed && isFirstFocusableInSection;
                    if (isPrevItem || isNextItem) {
                        preventDefault(e);
                        var focusInfo = getPanelWithFocusable(isPrevItem);
                        var destinationPanel = focusInfo ? focusInfo.panel : null;
                        if (destinationPanel) {
                            var destinationSection = destinationPanel.isSection ? destinationPanel : destinationPanel.parent;
                            EventEmitter.emit(events.onScrollPageAndSlide, {
                                sectionAnchor: destinationSection.index() + 1,
                                slideAnchor: destinationPanel.isSection ? 0 : destinationPanel.index()
                            });
                            g_elToFocus = focusInfo.itemToFocus;
                            preventDefault(e);
                        }
                    }
                }
                function onAfterSlideLoads(v) {
                    focusItem();
                }
                function afterSectionLoads(v) {
                    if (!closest(g_elToFocus, SLIDE_SEL) || closest(g_elToFocus, SLIDE_ACTIVE_SEL)) focusItem();
                }
                function focusItem() {
                    if (g_elToFocus) {
                        g_elToFocus.focus();
                        g_elToFocus = null;
                    }
                }
                function getPanelWithFocusable(isPrevItem) {
                    var action = isPrevItem ? "prevPanel" : "nextPanel";
                    var focusableElements = [];
                    var panelWithFocusables;
                    var currentPanel = getSlideOrSectionPanel(getActivePanel()[action]());
                    do {
                        focusableElements = getFocusables(currentPanel.item);
                        if (focusableElements.length) panelWithFocusables = {
                            panel: currentPanel,
                            itemToFocus: focusableElements[isPrevItem ? focusableElements.length - 1 : 0]
                        };
                        currentPanel = getSlideOrSectionPanel(currentPanel[action]());
                    } while (currentPanel && focusableElements.length === 0);
                    return panelWithFocusables;
                }
                function getFocusables(el) {
                    return [].slice.call($(focusableElementsString, el)).filter((function(item) {
                        return getAttr(item, "tabindex") !== "-1" && item.offsetParent !== null;
                    }));
                }
                function isFocusOutside(e) {
                    var allFocusables = getFocusables(doc);
                    var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
                    var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
                    var focusDestination = allFocusables[focusDestinationIndex];
                    var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
                    var destinationItemSection = closest(focusDestination, SECTION_SEL);
                    return !destinationItemSlide && !destinationItemSection;
                }
                function shouldCancelKeyboardNavigation(e) {
                    var keyControls = [ 40, 38, 32, 33, 34 ];
                    return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
                }
                function cancelDirectionKeyEvents(e) {
                    if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) e.preventDefault();
                }
                function getControlPressed() {
                    return g_controlPressed;
                }
                var prevTime = (new Date).getTime();
                var scrollings = [];
                FP.setMouseWheelScrolling = setMouseWheelScrolling;
                function setMouseWheelScrolling(value) {
                    if (value) {
                        addMouseWheelHandler();
                        addMiddleWheelHandler();
                    } else {
                        removeMouseWheelHandler();
                        removeMiddleWheelHandler();
                    }
                }
                function addMouseWheelHandler() {
                    var prefix = "";
                    var _addEventListener;
                    if (win.addEventListener) _addEventListener = "addEventListener"; else {
                        _addEventListener = "attachEvent";
                        prefix = "on";
                    }
                    var support = "onwheel" in doc.createElement("div") ? "wheel" : doc.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
                    var passiveEvent = getPassiveOptionsIfPossible();
                    if (support == "DOMMouseScroll") doc[_addEventListener](prefix + "MozMousePixelScroll", MouseWheelHandler, passiveEvent); else doc[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
                }
                function addMiddleWheelHandler() {
                    getContainer().addEventListener("mousedown", mouseDownHandler);
                    getContainer().addEventListener("mouseup", mouseUpHandler);
                }
                function removeMouseWheelHandler() {
                    if (doc.addEventListener) {
                        docRemoveEvent("mousewheel", MouseWheelHandler, false);
                        docRemoveEvent("wheel", MouseWheelHandler, false);
                        docRemoveEvent("MozMousePixelScroll", MouseWheelHandler, false);
                    } else doc.detachEvent("onmousewheel", MouseWheelHandler);
                }
                function removeMiddleWheelHandler() {
                    getContainer().removeEventListener("mousedown", mouseDownHandler);
                    getContainer().removeEventListener("mouseup", mouseUpHandler);
                }
                function MouseWheelHandler(e) {
                    var curTime = (new Date).getTime();
                    var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
                    var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);
                    if (!state.isUsingWheel) setState({
                        isGrabbing: false,
                        isUsingWheel: true,
                        touchDirection: "none"
                    });
                    if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
                        preventDefault(e);
                        return false;
                    }
                    if (isScrollAllowedBeyondFullPage) return true; else if (isScrollAllowedBeyondFullPage === false) {
                        preventDefault(e);
                        return false;
                    }
                    if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
                        e = e || win.event;
                        var value = e.wheelDelta || -e.deltaY || -e.detail;
                        var delta = Math.max(-1, Math.min(1, value));
                        var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
                        var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
                        var direction = delta < 0 ? "down" : delta > 0 ? "up" : "none";
                        if (scrollings.length > 149) scrollings.shift();
                        scrollings.push(Math.abs(value));
                        if (getOptions().scrollBar) preventDefault(e);
                        var timeDiff = curTime - prevTime;
                        prevTime = curTime;
                        if (timeDiff > 200) scrollings = [];
                        setState({
                            wheelDirection: direction
                        });
                        if (state.canScroll) {
                            var averageEnd = getAverage(scrollings, 10);
                            var averageMiddle = getAverage(scrollings, 70);
                            var isAccelerating = averageEnd >= averageMiddle;
                            if (isAccelerating && isScrollingVertically) {
                                setState({
                                    scrollTrigger: "wheel"
                                });
                                if (delta < 0) scrolling("down"); else scrolling("up");
                            }
                        }
                        return false;
                    }
                    if (getOptions().fitToSection) setState({
                        activeAnimation: false
                    });
                }
                function mouseDownHandler(e) {
                    if (e.which == 2) {
                        setOldPageY(e.pageY);
                        getContainer().addEventListener("mousemove", mouseMoveHandler);
                    }
                }
                function mouseUpHandler(e) {
                    if (e.which == 2) getContainer().removeEventListener("mousemove", mouseMoveHandler);
                }
                function setMouseHijack(value) {
                    if (value) {
                        setMouseWheelScrolling(true);
                        addTouchHandler();
                    } else {
                        setMouseWheelScrolling(false);
                        removeTouchHandler();
                    }
                }
                var g_canFireMouseEnterNormalScroll = true;
                EventEmitter.on(events.bindEvents, bindEvents$7);
                function bindEvents$7() {
                    if (getOptions().normalScrollElements) {
                        [ "mouseenter", "touchstart" ].forEach((function(eventName) {
                            forMouseLeaveOrTouch(eventName, false);
                        }));
                        [ "mouseleave", "touchend" ].forEach((function(eventName) {
                            forMouseLeaveOrTouch(eventName, true);
                        }));
                    }
                    EventEmitter.on(events.onDestroy, onDestroy$4);
                }
                function onDestroy$4() {
                    [ "mouseenter", "touchstart", "mouseleave", "touchend" ].forEach((function(eventName) {
                        docRemoveEvent(eventName, onMouseEnterOrLeave, true);
                    }));
                }
                function forMouseLeaveOrTouch(eventName, allowScrolling) {
                    document["fp_" + eventName] = allowScrolling;
                    docAddEvent(eventName, onMouseEnterOrLeave, true);
                }
                function onMouseEnterOrLeave(e) {
                    var type = e.type;
                    var isInsideOneNormalScroll = false;
                    var target = type === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
                    if (target == document || !target) {
                        setMouseHijack(true);
                        return;
                    }
                    if (type === "touchend") {
                        g_canFireMouseEnterNormalScroll = false;
                        setTimeout((function() {
                            g_canFireMouseEnterNormalScroll = true;
                        }), 800);
                    }
                    if (type === "mouseenter" && !g_canFireMouseEnterNormalScroll) return;
                    var normalSelectors = getOptions().normalScrollElements.split(",");
                    normalSelectors.forEach((function(normalSelector) {
                        if (!isInsideOneNormalScroll) {
                            var isNormalScrollTarget = matches(target, normalSelector);
                            var isNormalScrollChildFocused = closest(target, normalSelector);
                            if (isNormalScrollTarget || isNormalScrollChildFocused) {
                                if (!FP.shared.isNormalScrollElement) setMouseHijack(false);
                                FP.shared.isNormalScrollElement = true;
                                isInsideOneNormalScroll = true;
                            }
                        }
                    }));
                    if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
                        setMouseHijack(true);
                        FP.shared.isNormalScrollElement = false;
                    }
                }
                FP.silentMoveTo = silentMoveTo;
                function silentMoveTo(sectionAnchor, slideAnchor) {
                    setScrollingSpeed(0, "internal");
                    moveTo$1(sectionAnchor, slideAnchor);
                    setScrollingSpeed(getOriginals().scrollingSpeed, "internal");
                }
                var previousHeight = getWindowHeight();
                var windowsWidth = getWindowWidth();
                var g_resizeId;
                var g_isConsecutiveResize = false;
                var g_resizeMobileHandlerId;
                FP.reBuild = reBuild;
                EventEmitter.on(events.bindEvents, bindEvents$6);
                function bindEvents$6() {
                    resizeHandler();
                    windowAddEvent("resize", resizeHandler);
                    EventEmitter.on(events.onDestroy, onDestroy$3);
                }
                function onDestroy$3() {
                    clearTimeout(g_resizeId);
                    clearTimeout(g_resizeMobileHandlerId);
                    windowRemoveEvent("resize", resizeHandler);
                }
                function resizeHandler() {
                    if (!g_isConsecutiveResize) if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) setSectionsHeight(getWindowHeight());
                    fitToActiveSection();
                    g_isConsecutiveResize = true;
                    clearTimeout(g_resizeId);
                    g_resizeId = setTimeout((function() {
                        resizeActions();
                        g_isConsecutiveResize = false;
                    }), 400);
                }
                function fitToActiveSection() {
                    if (isTouchDevice) for (var i = 0; i < 4; i++) g_resizeMobileHandlerId = setTimeout((function() {
                        window.requestAnimationFrame((function() {
                            if (getOptions().autoScrolling && !getOptions().scrollBar) {
                                setState({
                                    isResizing: true
                                });
                                silentMoveTo(state.activeSection.index() + 1);
                                setState({
                                    isResizing: false
                                });
                            }
                        }));
                    }), 200 * i);
                }
                function resizeActions() {
                    setState({
                        isResizing: true
                    });
                    setSectionsHeight("");
                    if (!getOptions().autoScrolling && !state.isBeyondFullpage) setVhUnits();
                    EventEmitter.emit(events.contentChanged);
                    updateState();
                    responsive();
                    if (isTouchDevice) {
                        var activeElement = doc.activeElement;
                        if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select")) {
                            var currentHeight = getWindowHeight();
                            if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                                reBuild(true);
                                previousHeight = currentHeight;
                            }
                        }
                    } else adjustToNewViewport();
                    setState({
                        isResizing: false
                    });
                }
                function reBuild(resizing) {
                    if (hasClass(getContainer(), DESTROYED)) return;
                    setState({
                        isResizing: true,
                        windowsHeight: getWindowHeight(),
                        windowsWidth: getWindowWidth()
                    });
                    var sections = getState().sections;
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];
                        var slidesWrap = $(SLIDES_WRAPPER_SEL, section.item)[0];
                        var slides = section.slides;
                        if (slides.length > 1) landscapeScroll(slidesWrap, section.activeSlide.item);
                    }
                    if (getOptions().scrollOverflow) scrollOverflowHandler.makeScrollable();
                    var sectionIndex = getState().activeSection.index();
                    if (!state.isBeyondFullpage) if (sectionIndex) silentMoveTo(sectionIndex + 1);
                    setState({
                        isResizing: false
                    });
                    if (isFunction(getOptions().afterResize) && resizing) getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
                    if (isFunction(getOptions().afterReBuild) && !resizing) getOptions().afterReBuild.call(getContainer());
                    trigger(getContainer(), "afterRebuild");
                }
                function adjustToNewViewport() {
                    var newWindowHeight = getWindowHeight();
                    var newWindowWidth = getWindowWidth();
                    if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
                        setState({
                            windowsHeight: newWindowHeight
                        });
                        windowsWidth = newWindowWidth;
                        reBuild(true);
                    }
                }
                function setSectionsHeight(value) {
                    var propertyValue = value === "" ? "" : value + "px";
                    getState().sections.forEach((function(section) {
                        css(section.item, {
                            height: propertyValue
                        });
                    }));
                }
                function setVhUnits() {
                    if (!getOptions().autoScrolling || getOptions().scrollBar) {
                        var vh = win.innerHeight * .01;
                        doc.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
                    }
                }
                function getAnchorsURL() {
                    var section;
                    var slide;
                    var hash = win.location.hash;
                    if (hash.length) {
                        var anchorsParts = hash.replace("#", "").split("/");
                        var isFunkyAnchor = hash.indexOf("#/") > -1;
                        section = isFunkyAnchor ? "/" + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
                        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                        if (slideAnchor && slideAnchor.length) slide = decodeURIComponent(slideAnchor);
                    }
                    return {
                        section,
                        slide
                    };
                }
                FP.setLockAnchors = setLockAnchors;
                EventEmitter.on(events.bindEvents, bindEvents$5);
                function bindEvents$5() {
                    windowAddEvent("hashchange", hashChangeHandler);
                    EventEmitter.on(events.onDestroy, onDestroy$2);
                }
                function onDestroy$2() {
                    windowRemoveEvent("hashchange", hashChangeHandler);
                }
                function setLockAnchors(value) {
                    getOptions().lockAnchors = value;
                }
                function hashChangeHandler() {
                    if (!state.isScrolling && !getOptions().lockAnchors) {
                        var anchors = getAnchorsURL();
                        var sectionAnchor = anchors.section;
                        var slideAnchor = anchors.slide;
                        var isFirstSlideMove = typeof state.lastScrolledDestiny === "undefined";
                        var isFirstScrollMove = typeof state.lastScrolledDestiny === "undefined" && typeof slideAnchor === "undefined" && !state.slideMoving;
                        if (sectionAnchor && sectionAnchor.length) if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) EventEmitter.emit(events.onScrollPageAndSlide, {
                            sectionAnchor,
                            slideAnchor
                        });
                    }
                }
                EventEmitter.on(events.bindEvents, bindEvents$4);
                function bindEvents$4() {
                    docAddEvent("wheel", wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
                    EventEmitter.on(events.scrollBeyondFullpage, scrollBeyondFullPage);
                    EventEmitter.on(events.onKeyDown, onKeyDown);
                }
                EventEmitter.on(events.bindEvents, bindEvents$3);
                function bindEvents$3() {
                    EventEmitter.on(events.onClickOrTouch, onClickOrTouch$1);
                }
                function onClickOrTouch$1(params) {
                    var target = params.target;
                    if (closest(target, getOptions().menu + " [data-menuanchor]")) menuItemsHandler.call(target, params);
                }
                function menuItemsHandler(e) {
                    setState({
                        scrollTrigger: "menu"
                    });
                    if ($(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
                        preventDefault(e);
                        EventEmitter.emit(events.onMenuClick, {
                            anchor: getAttr(this, "data-menuanchor")
                        });
                    }
                }
                EventEmitter.on(events.bindEvents, bindEvents$2);
                function bindEvents$2() {
                    EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
                }
                function onClickOrTouch(params) {
                    var target = params.target;
                    if (target && closest(target, SECTION_NAV_SEL + " a")) sectionBulletHandler.call(target, params.e); else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) tooltipTextHandler.call(target); else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) slideBulletHandler.call(target, params.e);
                }
                var lastScroll = 0;
                var g_scrollId;
                var g_scrollId2;
                EventEmitter.on(events.onDestroy, onDestroy$1);
                function scrollHandler(e) {
                    var currentSection;
                    var currentSectionElem;
                    if (state.isResizing || !getState().activeSection) return;
                    getLast(getState().sections);
                    if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) return;
                    if (!getOptions().autoScrolling || getOptions().scrollBar) {
                        var currentScroll = getScrollTop();
                        var scrollDirection = getScrollDirection(currentScroll);
                        var visibleSectionIndex = 0;
                        var screen_mid = currentScroll + getWindowHeight() / 2;
                        var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
                        var sections = getState().sections;
                        setState({
                            scrollY: currentScroll
                        });
                        if (isAtBottom) visibleSectionIndex = sections.length - 1; else if (!currentScroll) visibleSectionIndex = 0; else for (var i = 0; i < sections.length; ++i) {
                            var section = sections[i].item;
                            if (section.offsetTop <= screen_mid) visibleSectionIndex = i;
                        }
                        if (isCompletelyInViewPort(scrollDirection)) if (!hasClass(getState().activeSection.item, COMPLETELY)) {
                            addClass(getState().activeSection.item, COMPLETELY);
                            removeClass(siblings(getState().activeSection.item), COMPLETELY);
                        }
                        currentSection = sections[visibleSectionIndex];
                        currentSectionElem = currentSection.item;
                        if (!currentSection.isActive) {
                            setState({
                                isScrolling: true
                            });
                            var leavingSection = getState().activeSection.item;
                            var leavingSectionIndex = getState().activeSection.index() + 1;
                            var yMovement = getYmovement(getState().activeSection, currentSectionElem);
                            var anchorLink = currentSection.anchor;
                            var sectionIndex = currentSection.index() + 1;
                            var activeSlide = currentSection.activeSlide;
                            var slideIndex;
                            var slideAnchorLink;
                            var callbacksParams = {
                                activeSection: leavingSection,
                                sectionIndex: sectionIndex - 1,
                                anchorLink,
                                element: currentSectionElem,
                                leavingSection: leavingSectionIndex,
                                direction: yMovement,
                                items: {
                                    origin: getState().activeSection,
                                    destination: currentSection
                                }
                            };
                            if (activeSlide) {
                                slideAnchorLink = activeSlide.anchor;
                                slideIndex = activeSlide.index();
                            }
                            if (state.canScroll) {
                                addClass(currentSectionElem, ACTIVE);
                                removeClass(siblings(currentSectionElem), ACTIVE);
                                if (isFunction(getOptions().beforeLeave)) fireCallbackOncePerScroll("beforeLeave", callbacksParams);
                                if (isFunction(getOptions().onLeave)) fireCallback("onLeave", callbacksParams);
                                if (isFunction(getOptions().afterLoad)) fireCallback("afterLoad", callbacksParams);
                                stopMedia(leavingSection);
                                lazyLoad(currentSectionElem);
                                playMedia(currentSectionElem);
                                activateMenuAndNav(anchorLink, sectionIndex - 1);
                                if (getOptions().anchors.length) setState({
                                    lastScrolledDestiny: anchorLink
                                });
                                updateState();
                                setPageStatus(slideIndex, slideAnchorLink, anchorLink);
                            }
                            clearTimeout(g_scrollId);
                            g_scrollId = setTimeout((function() {
                                setState({
                                    isScrolling: false
                                });
                            }), 100);
                        }
                        if (getOptions().fitToSection && state.canScroll) {
                            clearTimeout(g_scrollId2);
                            g_scrollId2 = setTimeout((function() {
                                var fixedSections = state.sections.filter((function(section) {
                                    var sectionValues = section.item.getBoundingClientRect();
                                    return Math.round(sectionValues.bottom) === Math.round(getWindowHeight()) || Math.round(sectionValues.top) === 0;
                                }));
                                if (!fixedSections.length) fitToSection();
                            }), getOptions().fitToSectionDelay);
                        }
                    }
                }
                function onDestroy$1() {
                    clearTimeout(g_scrollId);
                    clearTimeout(g_scrollId2);
                }
                function getScrollDirection(currentScroll) {
                    var direction = currentScroll > lastScroll ? "down" : "up";
                    lastScroll = currentScroll;
                    setState({
                        previousDestTop: currentScroll
                    });
                    return direction;
                }
                function isCompletelyInViewPort(movement) {
                    var top = getState().activeSection.item.offsetTop;
                    var bottom = top + getWindowHeight();
                    if (movement == "up") return bottom >= getScrollTop() + getWindowHeight();
                    return top <= getScrollTop();
                }
                EventEmitter.on(events.bindEvents, bindEvents$1);
                EventEmitter.on(events.onDestroy, onDestroy);
                function onDestroy() {
                    windowRemoveEvent("scroll", scrollHandler);
                }
                function bindEvents$1() {
                    windowAddEvent("scroll", scrollHandler);
                    doc.body.addEventListener("scroll", scrollHandler);
                    EventEmitter.on(events.onScrollPageAndSlide, (function(params) {
                        scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
                    }));
                    EventEmitter.on(events.onMenuClick, (function(params) {
                        moveTo$1(params.anchor, void 0);
                    }));
                    EventEmitter.on(events.onScrollOverflowScrolled, (function(params) {
                        var scrollSection = params.direction === "down" ? moveSectionDown : moveSectionUp;
                        scrollSection();
                    }));
                    EventEmitter.on(events.scrollPage, (function(params) {
                        scrollPage(params.destination);
                    }));
                }
                FP.getActiveSlide = getActiveSlide;
                FP.getScrollX = function() {
                    return state.scrollX;
                };
                EventEmitter.on(events.bindEvents, bindEvents);
                function bindEvents() {
                    EventEmitter.on(events.onDestroy, onDestroy$6);
                    EventEmitter.on(events.landscapeScroll, (function(params) {
                        landscapeScroll(params.slides, params.destination);
                    }));
                    EventEmitter.on(events.moveSlideRight, (function(params) {
                        moveSlideRight(params.section);
                    }));
                    EventEmitter.on(events.moveSlideLeft, (function(params) {
                        moveSlideLeft(params.section);
                    }));
                }
                function getActiveSlide() {
                    return nullOrSlide(getState().activeSection.activeSlide);
                }
                EventEmitter.on(events.bindEvents, init$1);
                function init$1() {
                    var position = getOptions().credits.position || "right";
                    var positionStyle = [ "left", "right" ].indexOf(position) > -1 ? "".concat(position, ": 0;") : "";
                    var waterMark = '\n        <div class="fp-watermark" style="'.concat(positionStyle, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(getOptions().credits.label || "Made with fullPage.js", "\n            </a>\n        </div>\n    ");
                    var lastSection = getLast(state.sections);
                    var shouldUseWaterMark = !state.isValid || getOptions().credits.enabled;
                    if (lastSection && lastSection.item && shouldUseWaterMark) lastSection.item.insertAdjacentHTML("beforeend", waterMark);
                }
                !function() {
                    EventEmitter.on(events.onInitialise, (function() {
                        var n, a, l;
                        setState({
                            isValid: (getOptions().licenseKey, n = getOptions().licenseKey, a = function(n) {
                                var e = parseInt("514").toString(16);
                                if (!n || n.length < 29 || 4 === n.split(t[0]).length) return null;
                                var r = [ "Each", "for" ][i()]().join(""), a = n[[ "split" ]]("-"), l = [];
                                a[r]((function(t, n) {
                                    if (n < 4) {
                                        var r = function(t) {
                                            var n = t[t.length - 1], e = [ "NaN", "is" ][i()]().join("");
                                            return window[e](n) ? o(n) : function(t) {
                                                return t - ACTIVE.length;
                                            }(n);
                                        }(t);
                                        l.push(r);
                                        var s = o(t[r]);
                                        if (1 === n) {
                                            var a = [ "pa", "dS", "t", "art" ].join("");
                                            s = s.toString()[a](2, "0");
                                        }
                                        e += s, 0 !== n && 1 !== n || (e += "-");
                                    }
                                }));
                                var m = 0, f = "";
                                return n.split("-").forEach((function(t, n) {
                                    if (n < 4) {
                                        var _i = 0;
                                        for (var e = 0; e < 4; e++) e !== l[n] && (_i += Math.abs(o(t[e])), isNaN(t[e]) || m++);
                                        var r = s(_i);
                                        f += r;
                                    }
                                })), f += s(m), {
                                    v: new Date(e + "T00:00"),
                                    o: e.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
                                    l: f
                                };
                            }(n), l = function(t) {
                                var n = r[i()]().join("");
                                return t && 0 === n.indexOf(t) && t.length === n.length;
                            }(n), (a || l) && (a && e <= a.v && a.l === n.split(t[0])[4] || l || a.o) || !1)
                        });
                    }));
                    var t = [ "-" ];
                    var n = "2023-4-29".split("-"), e = new Date(n[0], n[1], n[2]), r = [ "se", "licen", "-", "v3", "l", "gp" ];
                    function i() {
                        return [ [ "re", "verse" ].join("") ]["".length];
                    }
                    function o(t) {
                        return t ? isNaN(t) ? t.charCodeAt(0) - 72 : t : "";
                    }
                    function s(t) {
                        var n = 72 + t;
                        return n > 90 && n < 97 && (n += 15), String.fromCharCode(n).toUpperCase();
                    }
                }();
                FP.setKeyboardScrolling = setKeyboardScrolling;
                function setKeyboardScrolling(value, directions) {
                    if (typeof directions !== "undefined") {
                        directions = directions.replace(/ /g, "").split(",");
                        directions.forEach((function(direction) {
                            setIsScrollAllowed(value, direction, "k");
                        }));
                    } else {
                        setIsScrollAllowed(value, "all", "k");
                        getOptions().keyboardScrolling = value;
                    }
                }
                function styleMenu(section) {
                    var index = section.index();
                    if (typeof getOptions().anchors[index] !== "undefined") if (section.isActive) activateMenuAndNav(getOptions().anchors[index], index);
                    if (getOptions().menu && getOptions().css3 && closest($(getOptions().menu)[0], WRAPPER_SEL) != null) $(getOptions().menu).forEach((function(menu) {
                        $body.appendChild(menu);
                    }));
                }
                function prepareDom() {
                    css(getParentsUntil(getContainer(), "body"), {
                        height: "100%",
                        position: "relative"
                    });
                    addClass(getContainer(), WRAPPER);
                    addClass($html, ENABLED);
                    setState({
                        windowsHeight: getWindowHeight()
                    });
                    removeClass(getContainer(), DESTROYED);
                    addInternalSelectors();
                    var sections = getState().sectionsIncludingHidden;
                    for (var i = 0; i < sections.length; i++) {
                        var section = sections[i];
                        var slides = section.allSlidesItems;
                        var originalStyles = getAttr(section.item, "style");
                        if (originalStyles) section.item.setAttribute("data-fp-styles", originalStyles);
                        styleSection(section);
                        styleMenu(section);
                        if (slides.length > 0) styleSlides(section);
                    }
                    if (getOptions().fixedElements && getOptions().css3) $(getOptions().fixedElements).forEach((function(item) {
                        $body.appendChild(item);
                    }));
                    if (getOptions().navigation) addVerticalNavigation();
                    enableYoutubeAPI();
                    if (getOptions().scrollOverflow) scrollOverflowHandler.makeScrollable();
                }
                FP.shared.afterRenderActions = afterRenderActions;
                function afterRenderActions() {
                    var section = getState().activeSection;
                    var sectionElem = getState().activeSection.item;
                    addClass(sectionElem, COMPLETELY);
                    lazyLoad(sectionElem);
                    lazyLoadOthers();
                    playMedia(sectionElem);
                    if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) fireCallback("afterLoad", {
                        activeSection: sectionElem,
                        element: sectionElem,
                        direction: null,
                        anchorLink: section.anchor,
                        sectionIndex: section.index(),
                        items: {
                            origin: getState().activeSection,
                            destination: getState().activeSection
                        }
                    });
                    if (isFunction(getOptions().afterRender)) fireCallback("afterRender");
                }
                function isDestinyTheStartingSection() {
                    var anchor = getAnchorsURL();
                    var destinationSection = getSectionByAnchor(anchor.section);
                    return !anchor.section || !destinationSection || typeof destinationSection !== "undefined" && destinationSection.index() === index(getStartingSection());
                }
                FP.setAllowScrolling = setAllowScrolling;
                function setAllowScrolling(value, directions) {
                    if (typeof directions !== "undefined") {
                        directions = directions.replace(/ /g, "").split(",");
                        directions.forEach((function(direction) {
                            setIsScrollAllowed(value, direction, "m");
                        }));
                    } else setIsScrollAllowed(value, "all", "m");
                }
                function scrollToAnchor() {
                    var anchors = getAnchorsURL();
                    var sectionAnchor = anchors.section;
                    var slideAnchor = anchors.slide;
                    if (sectionAnchor) if (getOptions().animateAnchor) scrollPageAndSlide(sectionAnchor, slideAnchor); else silentMoveTo(sectionAnchor, slideAnchor); else EventEmitter.emit(events.onAfterRenderNoAnchor, null);
                }
                function destroyStructure() {
                    silentScroll(0);
                    $("img[data-src], source[data-src], audio[data-src], iframe[data-src]", getContainer()).forEach((function(item) {
                        setSrc(item, "src");
                    }));
                    $("img[data-srcset]").forEach((function(item) {
                        setSrc(item, "srcset");
                    }));
                    remove($(SECTION_NAV_SEL + ", " + SLIDES_NAV_SEL + ", " + SLIDES_ARROW_SEL));
                    css(getNodes(getState().sections), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    });
                    css(getNodes(getState().slides), {
                        width: ""
                    });
                    css(getContainer(), {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    });
                    css($htmlBody, {
                        overflow: "",
                        height: ""
                    });
                    removeClass($html, ENABLED);
                    removeClass($body, RESPONSIVE + " " + SCROLLABLE);
                    $body.className.split(/\s+/).forEach((function(className) {
                        if (className.indexOf(VIEWING_PREFIX) === 0) removeClass($body, className);
                    }));
                    getNodes(getState().panels).forEach((function(item) {
                        if (getOptions().scrollOverflow) scrollOverflowHandler.destroyWrapper(item);
                        removeClass(item, TABLE + " " + ACTIVE + " " + COMPLETELY + " " + IS_OVERFLOW);
                        var previousStyles = getAttr(item, "data-fp-styles");
                        if (previousStyles) item.setAttribute("style", previousStyles);
                        if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) item.removeAttribute("data-anchor");
                    }));
                    removeAnimation(getContainer());
                    [ TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL ].forEach((function(selector) {
                        $(selector, getContainer()).forEach((function(item) {
                            unwrap(item);
                        }));
                    }));
                    css(getContainer(), {
                        "-webkit-transition": "none",
                        transition: "none"
                    });
                    removeClass(getContainer(), WRAPPER);
                    win.scrollTo(0, 0);
                    var usedSelectors = [ SECTION, SLIDE, SLIDES_CONTAINER ];
                    usedSelectors.forEach((function(item) {
                        removeClass($("." + item), item);
                    }));
                }
                FP.destroy = destroy;
                function init() {
                    updateStructuralState();
                    updateState();
                    getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
                    setOptionsFromDOM();
                    prepareDom();
                    setAllowScrolling(true);
                    setMouseHijack(true);
                    setAutoScrolling(getOptions().autoScrolling, "internal");
                    responsive();
                    setBodyClass();
                    if (doc.readyState === "complete") scrollToAnchor();
                    windowAddEvent("load", scrollToAnchor);
                    afterRenderActions();
                    updateStructuralState();
                    updateState();
                }
                function destroy(all) {
                    setAutoScrolling(false, "internal");
                    setAllowScrolling(true);
                    setMouseHijack(false);
                    setKeyboardScrolling(false);
                    addClass(getContainer(), DESTROYED);
                    EventEmitter.emit(events.onDestroy);
                    if (all) destroyStructure();
                }
                var isOK = function isOK() {
                    return getOptions() && state.isValid || doc.domain.indexOf("al" + "varotri" + "go" + "." + "com") > -1;
                };
                function displayWarnings() {
                    var l = getOptions()["li" + "c" + "enseK" + "e" + "y"];
                    var msgStyle = "font-size: 15px;background:yellow;";
                    if (getOptions().licenseKey.trim() === "") {
                        showError("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:");
                        showError("error", "https://github.com/alvarotrigo/fullPage.js#options");
                    } else if (!isOK()) {
                        showError("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:");
                        showError("error", "https://alvarotrigo.com/fullPage/pricing");
                    } else if (l && l.length < 20) {
                        console.warn("%c This website was made using fullPage.js slider. More info on the following website:", msgStyle);
                        console.warn("%c https://alvarotrigo.com/fullPage/", msgStyle);
                    }
                    if (hasClass($html, ENABLED)) {
                        showError("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
                        return;
                    }
                    if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) {
                        getOptions().continuousVertical = false;
                        showError("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
                    }
                    if (getOptions().scrollOverflow && (getOptions().scrollBar || !getOptions().autoScrolling)) showError("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox");
                    if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) {
                        getOptions().continuousVertical = false;
                        showError("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
                    }
                    extensions.forEach((function(extension) {
                        if (getOptions()[extension]) showError("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + extension);
                    }));
                    getOptions().anchors.forEach((function(name) {
                        var nameAttr = [].slice.call($("[name]")).filter((function(item) {
                            return getAttr(item, "name") && getAttr(item, "name").toLowerCase() == name.toLowerCase();
                        }));
                        var idAttr = [].slice.call($("[id]")).filter((function(item) {
                            return getAttr(item, "id") && getAttr(item, "id").toLowerCase() == name.toLowerCase();
                        }));
                        if (idAttr.length || nameAttr.length) {
                            showError("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                            var propertyName = idAttr.length ? "id" : "name";
                            if (idAttr.length || nameAttr.length) showError("error", '"' + name + '" is is being used by another element `' + propertyName + "` property");
                        }
                    }));
                }
                function fullpage(containerSelector, options) {
                    setCache();
                    if (hasClass($html, ENABLED)) {
                        displayWarnings();
                        return;
                    }
                    setOption("touchWrapper", typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector);
                    setOptions(options);
                    setContainer(typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector);
                    EventEmitter.emit(events.onInitialise);
                    displayWarnings();
                    setAPI();
                    if (getContainer()) {
                        EventEmitter.emit(events.beforeInit);
                        init();
                        EventEmitter.emit(events.bindEvents);
                    }
                    return win.fullpage_api;
                }
                function setAPI() {
                    FP.getFullpageData = function() {
                        return {
                            options: getOptions()
                        };
                    };
                    FP.version = "4.0.20";
                    FP.test = Object.assign(FP.test, {
                        top: "0px",
                        translate3d: "translate3d(0px, 0px, 0px)",
                        translate3dH: function() {
                            var a = [];
                            for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) a.push("translate3d(0px, 0px, 0px)");
                            return a;
                        }(),
                        left: function() {
                            var a = [];
                            for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) a.push(0);
                            return a;
                        }(),
                        options: getOptions(),
                        setAutoScrolling: null
                    });
                    FP.shared = Object.assign(FP.shared, {
                        afterRenderActions: null,
                        isNormalScrollElement: false
                    });
                    win.fullpage_api = FP;
                }
                win.fp_easings = deepExtend(win.fp_easings, {
                    easeInOutCubic: function easeInOutCubic(t, b, c, d) {
                        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                        return c / 2 * ((t -= 2) * t * t + 2) + b;
                    }
                });
                if (win.jQuery) (function($, fullpage) {
                    if (!$ || !fullpage) {
                        showError("error", "jQuery is required to use the jQuery fullpage adapter!");
                        return;
                    }
                    $.fn.fullpage = function(options) {
                        options = $.extend({}, options, {
                            $
                        });
                        new fullpage(this[0], options);
                        Object.keys(FP).forEach((function(key) {
                            getOptions().$.fn.fullpage[key] = FP[key];
                        }));
                    };
                })(win.jQuery, fullpage);
                return fullpage;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        "use strict";
        const modules_flsModules = {};
        var fullpage = __webpack_require__(615);
        let myfullPage = new fullpage("[data-fp]", {
            autoScrolling: true,
            scrollHorizontally: true,
            licenseKey: "gplv3-license",
            sectionSelector: "[data-fp-section]",
            slideSelector: "[data-fp-slide]",
            navigation: true,
            parallax: true,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            anchors: [ "mainPage", "activities", "aboutUs", "hotels", "partenrs", "reviews", "lastPage" ],
            afterLoad: function(origin, destination, direction, trigger) {
                if (document.querySelector(".fp-fraction_js")) {
                    const currentFraction = document.querySelector(".fp-fraction__current");
                    const totalFraction = document.querySelector(".fp-fraction__total");
                    const sectionPages = document.querySelectorAll("[data-fp-section]");
                    currentFraction.innerHTML = destination.index + 1 < 10 ? `0${destination.index + 1}` : destination.index + 1;
                    totalFraction.innerHTML = sectionPages.length < 10 ? `0${sectionPages.length}` : sectionPages.length;
                }
                if (document.querySelector("[data-section-parallax]").length > 0) {
                    const parallaxSections = document.querySelector("[data-section-parallax]");
                    let thresholdSets = [];
                    for (let i = 0; i <= 1; i += .005) thresholdSets.push(i);
                    const callback = function(entries, observer) {
                        const scrollTopPercent = window.pageYOffset / parallaxSections[0].offsetHeight * 100;
                        setParallaxItemsStyle(scrollTopPercent);
                    };
                    const observer = IntersectionObserver(callback, {
                        threshold: thresholdSets
                    });
                    observer.observe(destination.item);
                    function setParallaxItemsStyle(scrollTopPercent) {
                        console.log(scrollTopPercent);
                    }
                }
            }
        });
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                    myfullPage ? myfullPage.setAutoScrolling(true) : null;
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                myfullPage ? myfullPage.setAutoScrolling(false) : null;
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                } else if (!e.target.closest(".menu") && document.documentElement.classList.contains("menu-open") && bodyLockStatus) {
                    document.documentElement.classList.remove("menu-open");
                    bodyLockToggle();
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formRating() {
            const ratings = document.querySelectorAll(".rating");
            if (ratings.length > 0) initRatings();
            function initRatings() {
                let ratingActive, ratingValue;
                for (let index = 0; index < ratings.length; index++) {
                    const rating = ratings[index];
                    initRating(rating);
                }
                function initRating(rating) {
                    initRatingVars(rating);
                    setRatingActiveWidth();
                    if (rating.classList.contains("rating_set")) setRating(rating);
                }
                function initRatingVars(rating) {
                    ratingActive = rating.querySelector(".rating__active");
                    ratingValue = rating.querySelector(".rating__value");
                }
                function setRatingActiveWidth(index = ratingValue.innerHTML) {
                    const ratingActiveWidth = index / .05;
                    ratingActive.style.width = `${ratingActiveWidth}%`;
                }
                function setRating(rating) {
                    const ratingItems = rating.querySelectorAll(".rating__item");
                    for (let index = 0; index < ratingItems.length; index++) {
                        const ratingItem = ratingItems[index];
                        ratingItem.addEventListener("mouseenter", (function(e) {
                            initRatingVars(rating);
                            setRatingActiveWidth(ratingItem.value);
                        }));
                        ratingItem.addEventListener("mouseleave", (function(e) {
                            setRatingActiveWidth();
                        }));
                        ratingItem.addEventListener("click", (function(e) {
                            initRatingVars(rating);
                            if (rating.dataset.ajax) setRatingValue(ratingItem.value, rating); else {
                                ratingValue.innerHTML = index + 1;
                                setRatingActiveWidth();
                            }
                        }));
                    }
                }
                async function setRatingValue(value, rating) {
                    if (!rating.classList.contains("rating_sending")) {
                        rating.classList.add("rating_sending");
                        let response = await fetch("rating.json", {
                            method: "GET"
                        });
                        if (response.ok) {
                            const result = await response.json();
                            const newRating = result.newRating;
                            ratingValue.innerHTML = newRating;
                            setRatingActiveWidth();
                            rating.classList.remove("rating_sending");
                        } else {
                            alert("Ошибка");
                            rating.classList.remove("rating_sending");
                        }
                    }
                }
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Проснулся, построил селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? functions_FLS(`[select]: ${message}`) : null;
            }
        }
        modules_flsModules.select = new SelectConstructor({});
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else if (setTranslate) {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(event.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    const realIndex = swiper.realIndex;
                    const newSlideIndex = swiper.getSlideIndexByData(index);
                    const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                    if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
                        const indexBeforeLoopFix = swiper.activeIndex;
                        swiper.loopFix({
                            direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                            activeSlideIndex: newSlideIndex,
                            slideTo: false
                        });
                        const indexAfterFix = swiper.activeIndex;
                        if (indexBeforeLoopFix === indexAfterFix) swiper.slideToLoop(realIndex, 0, false, true);
                    }
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".slider-activities")) new swiper_core_Swiper(".slider-activities", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                speed: 800,
                navigation: {
                    prevEl: ".activities-controls__prev",
                    nextEl: ".activities-controls__next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    767.98: {
                        slidesPerView: 3,
                        spaceBetween: 25
                    },
                    991.98: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    }
                },
                on: {}
            });
            if (document.querySelector(".slider-reviews")) new swiper_core_Swiper(".slider-reviews", {
                modules: [ Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 50,
                speed: 800,
                pagination: {
                    el: ".fraction-slider",
                    type: "fraction",
                    clickable: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    767.98: {},
                    991.98: {
                        slidesPerView: 3
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var air_datepicker = __webpack_require__(545);
        var air_datepicker_default = __webpack_require__.n(air_datepicker);
        const index_es = air_datepicker_default();
        new index_es("#input-datepicker", {
            isMobile: true,
            position: "right bottom",
            dateFormat(date) {
                return date.toLocaleString("en", {
                    year: "numeric",
                    day: "2-digit",
                    month: "short"
                });
            }
        });
        window.onload = function() {
            const documentActions = e => {
                let targetEl = e.target;
                if (targetEl.closest(".read-more-button")) {
                    console.log("asd");
                    if (targetEl.parentElement.classList.contains("text-wrap")) {
                        targetEl.parentElement.classList.remove("text-wrap");
                        targetEl.innerHTML = "Close";
                    } else {
                        targetEl.parentElement.classList.add("text-wrap");
                        targetEl.innerHTML = "Read More";
                    }
                }
            };
            if (document.querySelector(".reviews")) {
                const textReviews = document.querySelectorAll(".review-slide__text p");
                const readMoreButtons = document.querySelectorAll(".read-more-button");
                console.log(textReviews[0].innerHTML.length);
                for (let i = 0; i < textReviews.length; i++) if (textReviews[i].innerHTML.length >= 250) {
                    textReviews[i].parentElement.classList.add("text-wrap");
                    readMoreButtons[i].classList.add("_show");
                }
            }
            if (document.querySelector(".about-us")) {
                const aboutUsItems = document.querySelectorAll(".item-about-us");
                let animationDelay = 1;
                aboutUsItems.forEach(((item, index) => {
                    item.style.transition = `transform ${animationDelay}s ease 0s`;
                    animationDelay += .7;
                }));
            }
            document.addEventListener("click", documentActions);
        };
        window["FLS"] = true;
        isWebp();
        addLoadedClass();
        menuInit();
        formRating();
    })();
})();