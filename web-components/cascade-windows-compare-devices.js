(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ strategies),
/* harmony export */   H: () => (/* binding */ memoize)
/* harmony export */ });
//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};


/***/ }),

/***/ 2271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getBestPattern)
/* harmony export */ });
/* harmony import */ var _time_data_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1526);

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while (patternPos + 1 < skeleton.length &&
                skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
            }
            while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
            }
        }
        else if (patternChar === 'J') {
            skeletonCopy += 'H';
        }
        else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined &&
        // @ts-ignore hourCycle(s) is not identified yet
        locale.hourCycles &&
        // @ts-ignore
        locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch (hourCycle) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = _time_data_generated__WEBPACK_IMPORTED_MODULE_0__/* .timeData */ ._[regionTag || ''] ||
        _time_data_generated__WEBPACK_IMPORTED_MODULE_0__/* .timeData */ ._[languageTag || ''] ||
        _time_data_generated__WEBPACK_IMPORTED_MODULE_0__/* .timeData */ ._["".concat(languageTag, "-001")] ||
        _time_data_generated__WEBPACK_IMPORTED_MODULE_0__/* .timeData */ ._['001'];
    return hourCycles[0];
}


/***/ }),

/***/ 9493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ ErrorKind)
/* harmony export */ });
var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));


/***/ }),

/***/ 9263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HI: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.HI),
/* harmony export */   Ii: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.Ii),
/* harmony export */   Jo: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.Jo),
/* harmony export */   O4: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.O4),
/* harmony export */   Qc: () => (/* binding */ parse),
/* harmony export */   VG: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.VG),
/* harmony export */   Wh: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.Wh),
/* harmony export */   Wi: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.Wi),
/* harmony export */   pe: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.pe),
/* harmony export */   rp: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.rp),
/* harmony export */   uf: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.uf),
/* harmony export */   yx: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.yx)
/* harmony export */ });
/* unused harmony export _Parser */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7582);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9493);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5891);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);




function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if ((0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isSelectElement */ .Wi)(el) || (0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isPluralElement */ .Jo)(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if ((0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isNumberElement */ .uf)(el) && (0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isNumberSkeleton */ .Wh)(el.style)) {
            delete el.style.location;
        }
        else if (((0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isDateElement */ .rp)(el) || (0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isTimeElement */ .pe)(el)) &&
            (0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isDateTimeSkeleton */ .Ii)(el.style)) {
            delete el.style.location;
        }
        else if ((0,_types__WEBPACK_IMPORTED_MODULE_2__/* .isTagElement */ .HI)(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__assign */ .pi)({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new _parser__WEBPACK_IMPORTED_MODULE_1__/* .Parser */ ._(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}

// only for testing
var _Parser = (/* unused pure expression or super */ null && (Parser));


/***/ }),

/***/ 5891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7582);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9493);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5047);
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8580);
/* harmony import */ var _formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5178);
/* harmony import */ var _formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4477);
/* harmony import */ var _date_time_pattern_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2271);
var _a;






var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_3__/* .SPACE_SEPARATOR_REGEX */ .p.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_3__/* .SPACE_SEPARATOR_REGEX */ .p.source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) {
                            dateTimePattern = (0,_date_time_pattern_generator__WEBPACK_IMPORTED_MODULE_2__/* .getBestPattern */ .T)(skeleton, this.locale);
                        }
                        var style = {
                            type: _types__WEBPACK_IMPORTED_MODULE_1__/* .SKELETON_TYPE */ .aV.dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? (0,_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__/* .parseDateTimeSkeleton */ .T)(dateTimePattern)
                                : {},
                        };
                        var type = argType === 'date' ? _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.date : _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.number
                            : argType === 'date'
                                ? _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.date
                                : _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__assign */ .pi)({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TYPE */ .wD.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = (0,_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_6__/* .parseNumberSkeletonFromString */ .O)(skeleton);
        }
        catch (e) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: _types__WEBPACK_IMPORTED_MODULE_1__/* .SKELETON_TYPE */ .aV.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? (0,_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_6__/* .parseNumberSkeleton */ .I)(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_PLURAL_ARGUMENT_SELECTOR, _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_SELECT_ARGUMENT_SELECTOR
                : _error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__/* .ErrorKind */ .o.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {
        }
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}


/***/ }),

/***/ 8580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ SPACE_SEPARATOR_REGEX)
/* harmony export */ });
/* unused harmony export WHITE_SPACE_REGEX */
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;


/***/ }),

/***/ 1526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ timeData)
/* harmony export */ });
// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
    "001": [
        "H",
        "h"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "AS": [
        "h",
        "H"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "AX": [
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BI": [
        "H",
        "h"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "BO": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "BQ": [
        "H"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BT": [
        "h",
        "H"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BY": [
        "H",
        "h"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CL": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CP": [
        "H"
    ],
    "CR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CU": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "CW": [
        "H",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CZ": [
        "H"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "DK": [
        "H"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EC": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "FI": [
        "H"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FO": [
        "H",
        "h"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GH": [
        "h",
        "H"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GL": [
        "H",
        "h"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GT": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HN": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "HU": [
        "H",
        "h"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ID": [
        "H"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IN": [
        "h",
        "H"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "IS": [
        "H"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JP": [
        "H",
        "K",
        "h"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LS": [
        "h",
        "H"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MG": [
        "H",
        "h"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ML": [
        "H"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MT": [
        "H",
        "h"
    ],
    "MU": [
        "H",
        "h"
    ],
    "MV": [
        "H",
        "h"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MX": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NE": [
        "H"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NI": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "NO": [
        "H",
        "h"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PE": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "PL": [
        "H",
        "h"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "PW": [
        "h",
        "H"
    ],
    "PY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "RU": [
        "H"
    ],
    "RW": [
        "H",
        "h"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SE": [
        "H"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "SO": [
        "h",
        "H"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "SV": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TH": [
        "H",
        "h"
    ],
    "TJ": [
        "H",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TM": [
        "H",
        "h"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VN": [
        "H",
        "h"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "WS": [
        "h",
        "H"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZW": [
        "H",
        "h"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "es-BO": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-EC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-PE": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ]
};


/***/ }),

/***/ 5047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HI: () => (/* binding */ isTagElement),
/* harmony export */   Ii: () => (/* binding */ isDateTimeSkeleton),
/* harmony export */   Jo: () => (/* binding */ isPluralElement),
/* harmony export */   O4: () => (/* binding */ isLiteralElement),
/* harmony export */   VG: () => (/* binding */ isArgumentElement),
/* harmony export */   Wh: () => (/* binding */ isNumberSkeleton),
/* harmony export */   Wi: () => (/* binding */ isSelectElement),
/* harmony export */   aV: () => (/* binding */ SKELETON_TYPE),
/* harmony export */   pe: () => (/* binding */ isTimeElement),
/* harmony export */   rp: () => (/* binding */ isDateElement),
/* harmony export */   uf: () => (/* binding */ isNumberElement),
/* harmony export */   wD: () => (/* binding */ TYPE),
/* harmony export */   yx: () => (/* binding */ isPoundElement)
/* harmony export */ });
/* unused harmony exports createLiteralElement, createNumberElement */
var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value,
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style,
    };
}


/***/ }),

/***/ 5178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ parseDateTimeSkeleton)
/* harmony export */ });
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: milliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ parseNumberSkeleton),
/* harmony export */   O: () => (/* binding */ parseNumberSkeletonFromString)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7582);
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);


function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(_regex_generated__WEBPACK_IMPORTED_MODULE_0__/* .WHITE_SPACE_REGEX */ .r)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            case 'rounding-mode-floor':
                result.roundingMode = 'floor';
                continue;
            case 'rounding-mode-ceiling':
                result.roundingMode = 'ceil';
                continue;
            case 'rounding-mode-down':
                result.roundingMode = 'trunc';
                continue;
            case 'rounding-mode-up':
                result.roundingMode = 'expand';
                continue;
            case 'rounding-mode-half-even':
                result.roundingMode = 'halfEven';
                continue;
            case 'rounding-mode-half-down':
                result.roundingMode = 'halfTrunc';
                continue;
            case 'rounding-mode-half-up':
                result.roundingMode = 'halfExpand';
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}


/***/ }),

/***/ 4455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ WHITE_SPACE_REGEX)
/* harmony export */ });
// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;


/***/ }),

/***/ 5552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Button, name */
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);
/* harmony import */ var _action_trigger_BLNa8TwK_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5113);
/* harmony import */ var _button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4609);
/* harmony import */ var _vfi_CyPinwDN_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2584);
/* harmony import */ var _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8187);
/* harmony import */ var _property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2017);
/* harmony import */ var _state_B9yJz8Xo_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8934);
/* harmony import */ var _query_assigned_elements_BAj4hztX_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4331);
/* harmony import */ var _query_assigned_nodes_jfm_gNrB_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3782);
/* harmony import */ var _class_map_B6E0u_KE_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7864);
/* harmony import */ var _if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9366);











const m = {
  colorLight: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_8__.E,
  colorDark: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_8__.m,
  depth: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_8__.w,
  size: "3rem",
  sizeLarge: "4.5rem",
  vfiStyle: "dashed",
  borderWidth: "0.25rem"
}, i = {
  light: (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-media-control-color-light, var(--ds-color-white, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(
    m.colorLight
  )}))`,
  dark: (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-media-control-color-dark, var(--ds-color-black, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(
    m.colorDark
  )}))`,
  size: (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-media-control-size, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(m.size)})`,
  sizeLarge: (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-media-control-size-large, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(
    m.sizeLarge
  )})`,
  borderOffset: (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`calc(var(--ds-media-control-border-width, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(
    m.borderWidth
  )}) * 2)`,
  iconAdjuster: "1.18"
}, T = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  /* stylelint-disable value-keyword-case */
  button {
    ${_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.b}
  }

  :host([disabled]) button,
  :host(.inactive) button {
    cursor: default;
  }

  /* Action trigger */

  ${_action_trigger_BLNa8TwK_mjs__WEBPACK_IMPORTED_MODULE_1__.a}

  /* Button */

  ${_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.a}

  /* Media control */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.B.mediaControl)}']) button {
    height: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.size)};
    width: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.size)};
    font-size: calc(
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.size)} * ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.iconAdjuster)} -
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.borderOffset)}
    );
    border-radius: 50%;
    justify-content: center;
    padding: 0;
    color: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.dark)};
    background-color: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.light)};
    box-shadow: var(
      --ds-media-control-depth,
      var(--ds-depth-8, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(m.depth)})
    );
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.B.mediaControl)}']) button:focus {
    ${_vfi_CyPinwDN_mjs__WEBPACK_IMPORTED_MODULE_3__.a}
    outline-style: var(--ds-media-control-vfi-style, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(
  m.vfiStyle
)});
    outline-offset: calc(
      var(--ds-media-control-border-width, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(m.borderWidth)}) /
        -2 - 1px
    );
  }

  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.B.mediaControl)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(
  _button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.c.large
)}']
    )
    button {
    height: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.sizeLarge)};
    width: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.sizeLarge)};
    font-size: calc(
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.sizeLarge)} * ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.iconAdjuster)} -
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.borderOffset)}
    );
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.B.mediaControl)}'][appearance*='--light']) button {
    color: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.light)};
    background-color: ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.dark)};
  }
`;
var L = Object.defineProperty, A = Object.getOwnPropertyDescriptor, a = (n, t, u, d) => {
  for (var r = d > 1 ? void 0 : d ? A(t, u) : t, c = n.length - 1, h; c >= 0; c--)
    (h = n[c]) && (r = (d ? h(t, u, r) : h(r)) || r);
  return d && r && L(t, u, r), r;
};
const j = (n) => {
  class t extends n {
    constructor() {
      super(...arguments), this.ariaDisabled = null, this.ariaHasPopup = null, this.ariaExpanded = null, this.ariaPressed = null, this.autoFocus = !1, this.disabled = !1, this.formNoValidate = !1;
    }
    /**
     * @internal not to be used by consumers
     * @param content - Inner content of the button
     * @param classname - Map of classes and booleans to determine of they should be applied
     * @param part - Name of the wrapper part
     * @returns - moray-button
     */
    renderButton(d, r, c = "base") {
      const h = { ...r };
      return (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.x)`
        <button
          class=${(0,_class_map_B6E0u_KE_mjs__WEBPACK_IMPORTED_MODULE_6__.e)(h)}
          part=${c}
          aria-disabled="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.ariaDisabled)}"
          aria-haspopup="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.ariaHasPopup)}"
          aria-expanded="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.ariaExpanded)}"
          aria-pressed="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.ariaPressed)}"
          ?autofocus="${this.autoFocus}"
          ?disabled="${this.disabled}"
          form="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.form)}"
          formaction="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.formAction)}"
          formmethod="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.formMethod)}"
          ?formnovalidate="${this.formNoValidate}"
          formtarget="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.formTarget)}"
          name="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.name)}"
          popovertarget="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.popoverTarget)}"
          popovertargetaction="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.popoverTargetAction)}"
          type="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.type)}"
          value="${(0,_if_defined_BrcqGSt5_mjs__WEBPACK_IMPORTED_MODULE_7__.o)(this.value)}"
        >
          ${d}
        </button>
      `;
    }
  }
  return a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "aria-disabled" })
  ], t.prototype, "ariaDisabled", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "aria-haspopup" })
  ], t.prototype, "ariaHasPopup", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "aria-expanded" })
  ], t.prototype, "ariaExpanded", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "aria-pressed" })
  ], t.prototype, "ariaPressed", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "autofocus", type: Boolean })
  ], t.prototype, "autoFocus", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ type: Boolean })
  ], t.prototype, "disabled", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({})
  ], t.prototype, "form", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "formaction" })
  ], t.prototype, "formAction", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "formenctype" })
  ], t.prototype, "formEncType", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "formmethod" })
  ], t.prototype, "formMethod", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "formnovalidate", type: Boolean })
  ], t.prototype, "formNoValidate", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "formtarget" })
  ], t.prototype, "formTarget", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({})
  ], t.prototype, "name", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "popovertarget" })
  ], t.prototype, "popoverTarget", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ attribute: "popovertargetaction" })
  ], t.prototype, "popoverTargetAction", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({})
  ], t.prototype, "type", 2), a([
    (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({})
  ], t.prototype, "value", 2), t;
};
var F = Object.defineProperty, M = Object.getOwnPropertyDescriptor, p = (n, t, u, d) => {
  for (var r = d > 1 ? void 0 : d ? M(t, u) : t, c = n.length - 1, h; c >= 0; c--)
    (h = n[c]) && (r = (d ? h(t, u, r) : h(r)) || r);
  return d && r && F(t, u, r), r;
};
const k = "moray-button";
let s = class extends j(_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.s) {
  constructor() {
    super(...arguments), this.active = !1, this.inactive = !1, this.block = !1, this.pill = !1, this._firstSlotEmpty = !0, this._lastSlotEmpty = !0, this._slottedImgIcon = !1;
  }
  _handleSlotChange() {
    this._firstSlotEmpty = this._firstSlot.length === 0, this._lastSlotEmpty = this._lastSlot.length === 0, this._slottedImgIcon = this._checkSlotsForImgIcon();
  }
  _checkSlotsForImgIcon() {
    return [...this._defaultSlot, ...this._firstSlot, ...this._lastSlot].some(
      (n) => n.nodeName.toLowerCase() === "img" || n.nodeName.toLowerCase() === "moray-icon"
    );
  }
  render() {
    const n = {
      "action-trigger--no-underline": this.appearance === _button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_2__.B.actionTrigger && this._slottedImgIcon
    };
    return this.renderButton(
      (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.x)`
        <span
          part="first"
          class="first"
          style="${this._firstSlotEmpty ? "display: none" : _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.T}"
        >
          <slot name="first" @slotchange=${this._handleSlotChange}></slot>
        </span>
        <slot @slotchange=${this._handleSlotChange}></slot>
        <span part="last" class="last" style="${this._lastSlotEmpty ? "display: none" : _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.T}">
          <slot name="last" @slotchange=${this._handleSlotChange}></slot>
        </span>
      `,
      n
    );
  }
};
s.shadowRootOptions = { ..._registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.s.shadowRootOptions, delegatesFocus: !0 };
s.styles = T;
p([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ reflect: !0 })
], s.prototype, "appearance", 2);
p([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ type: Boolean, reflect: !0 })
], s.prototype, "active", 2);
p([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ type: Boolean, reflect: !0 })
], s.prototype, "inactive", 2);
p([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ type: Boolean, reflect: !0 })
], s.prototype, "block", 2);
p([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ type: Boolean, reflect: !0 })
], s.prototype, "pill", 2);
p([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_4__.n)({ reflect: !0 })
], s.prototype, "size", 2);
p([
  (0,_query_assigned_elements_BAj4hztX_mjs__WEBPACK_IMPORTED_MODULE_9__.o)()
], s.prototype, "_defaultSlot", 2);
p([
  (0,_query_assigned_nodes_jfm_gNrB_mjs__WEBPACK_IMPORTED_MODULE_10__.n)({ slot: "first" })
], s.prototype, "_firstSlot", 2);
p([
  (0,_query_assigned_nodes_jfm_gNrB_mjs__WEBPACK_IMPORTED_MODULE_10__.n)({ slot: "last" })
], s.prototype, "_lastSlot", 2);
p([
  (0,_state_B9yJz8Xo_mjs__WEBPACK_IMPORTED_MODULE_5__.r)()
], s.prototype, "_firstSlotEmpty", 2);
p([
  (0,_state_B9yJz8Xo_mjs__WEBPACK_IMPORTED_MODULE_5__.r)()
], s.prototype, "_lastSlotEmpty", 2);
p([
  (0,_state_B9yJz8Xo_mjs__WEBPACK_IMPORTED_MODULE_5__.r)()
], s.prototype, "_slottedImgIcon", 2);
s = p([
  (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(k)
], s);



/***/ }),

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Icon, name */
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);
/* harmony import */ var _property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2017);
/* harmony import */ var _query_assigned_elements_BAj4hztX_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4331);



const e = {
  sizes: {
    default: "1em",
    xsmall: "0.8125em",
    small: "1em",
    medium: "1.25em",
    large: "1.5em"
  }
}, p = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  :host {
    display: inline-block;
    width: var(--ds-icon-size-default, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.default)});
    min-width: var(--ds-icon-size-default, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.default)});
    height: var(--ds-icon-size-default, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.default)});
    min-height: var(--ds-icon-size-default, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.default)});
    box-sizing: content-box;
  }

  :host([size='xsmall']) {
    width: var(--ds-icon-size-xsmall, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.xsmall)});
    min-width: var(--ds-icon-size-xsmall, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.xsmall)});
    height: var(--ds-icon-size-xsmall, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.xsmall)});
    min-height: var(--ds-icon-size-xsmall, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.xsmall)});
  }

  :host([size='small']) {
    width: var(--ds-icon-size-small, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.small)});
    min-width: var(--ds-icon-size-small, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.small)});
    height: var(--ds-icon-size-small, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.small)});
    min-height: var(--ds-icon-size-small, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.small)});
  }

  :host([size='medium']) {
    width: var(--ds-icon-size-medium, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.medium)});
    min-width: var(--ds-icon-size-medium, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.medium)});
    height: var(--ds-icon-size-medium, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.medium)});
    min-height: var(--ds-icon-size-medium, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.medium)});
  }

  :host([size='large']) {
    width: var(--ds-icon-size-large, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.large)});
    min-width: var(--ds-icon-size-large, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.large)});
    height: var(--ds-icon-size-large, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.large)});
    min-height: var(--ds-icon-size-large, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e.sizes.large)});
  }

  svg,
  ::slotted(svg) {
    display: block;
    height: 100%;
    width: 100%;
    fill: currentColor;
  }
`, f = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 0 0-.1 1.5h3.6v3.5a.75.75 0 0 0 1.5.1v-3.6h3.5a.75.75 0 0 0 .1-1.5h-3.6v-3.5A.75.75 0 0 0 12 7Z"/></svg>', x = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7c.41 0 .75.34.75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5c0-.41.34-.75.75-.75Z"/></svg>', Z = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.28 10.3a1 1 0 0 0 1.43 1.4L11 6.33V20a1 1 0 1 0 2 0V6.33l5.28 5.37a1 1 0 0 0 1.43-1.4l-6.82-6.93c-.5-.5-1.3-.5-1.78 0L4.28 10.3Z"/></svg>', b = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 10.73a.75.75 0 0 0 1.1 1.04l5.95-6.25v14.73a.75.75 0 0 0 1.5 0V5.52l5.95 6.25a.75.75 0 0 0 1.1-1.04l-7.08-7.42a1 1 0 0 0-1.44 0L4.2 10.73Z"/></svg>', z = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 16.59-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0-1.4-1.42L8.5 16.6Z"/></svg>', M = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>', B = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29 6.3-6.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.42Z"/></svg>', L = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>', $ = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 0Z"/></svg>', y = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.53 4.22c.3.3.3.77 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25c.3-.3.77-.3 1.06 0Z"/></svg>', A = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 4.3a1 1 0 0 0 0 1.4l6.29 6.3-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.42 0Z"/></svg>', C = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.47 4.22c-.3.3-.3.77 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25c.3-.3.3-.77 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0Z"/></svg>', I = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 15.7a1 1 0 0 0 1.4 0L12 9.42l6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z"/></svg>', O = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 15.53c.3.3.77.3 1.06 0L12 8.81l6.72 6.72a.75.75 0 1 0 1.06-1.06l-7.25-7.25a.75.75 0 0 0-1.06 0l-7.25 7.25c-.3.3-.3.77 0 1.06Z"/></svg>', P = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>', S = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>', j = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.21 4.39.08-.1a1 1 0 0 1 1.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 1 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1 .08 1.31l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 0 1-.08-1.31l.08-.1-.08.1Z"/></svg>', D = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"/></svg>', V = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.25v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Zm4.5 0v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z"/></svg>', k = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm4.5 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>', q = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm8.86-3.85A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2Z"/></svg>', H = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.86 8.15A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>', R = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-7a7 7 0 1 0 4.2 12.6l5.1 5.1a1 1 0 0 0 1.4-1.4l-5.1-5.1A7 7 0 0 0 10 3Z"/></svg>', E = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM10 3a7 7 0 1 0 4.4 12.45l5.32 5.33a.75.75 0 1 0 1.06-1.06l-5.33-5.33A7 7 0 0 0 10 3Z"/></svg>', F = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Z"/></svg>', G = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 0 1-1.01-.74L12 4.04Z"/></svg>', J = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-4.25 9.25a.75.75 0 0 0-.1 1.5h8.6a.75.75 0 0 0 .1-1.5h-8.6Z"/></svg>', K = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.25 7.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Z"/></svg>', N = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.03 3.66a2.25 2.25 0 0 1 3.94 0l7.74 14A2.25 2.25 0 0 1 19.74 21H4.25a2.25 2.25 0 0 1-1.97-3.34l7.75-14ZM13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1v4.5l.02.1a.75.75 0 0 0 1.49-.1v-4.5l-.01-.1Z"/></svg>', Q = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1l.01 4.5v.1a.75.75 0 0 0 1.5-.1v-4.5l-.01-.1Zm1.23-5.5a2.25 2.25 0 0 0-3.94 0L2.3 17.67A2.25 2.25 0 0 0 4.26 21h15.49c1.71 0 2.8-1.84 1.96-3.34l-7.74-14Zm-2.63.74a.75.75 0 0 1 1.32 0l7.74 14a.75.75 0 0 1-.65 1.11H4.25a.75.75 0 0 1-.65-1.11l7.74-14Z"/></svg>', c = /* @__PURE__ */ Object.assign({
  "../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_filled.svg": f,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_regular.svg": x,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_filled.svg": Z,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_regular.svg": b,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_filled.svg": z,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_regular.svg": M,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_filled.svg": B,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_regular.svg": L,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_filled.svg": $,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_regular.svg": y,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_filled.svg": A,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_regular.svg": C,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_filled.svg": I,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_regular.svg": O,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_filled.svg": P,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_regular.svg": S,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_filled.svg": j,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_regular.svg": D,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_filled.svg": V,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_regular.svg": k,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_filled.svg": q,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_regular.svg": H,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_filled.svg": R,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_regular.svg": E,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_filled.svg": F,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_regular.svg": G,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_filled.svg": J,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_regular.svg": K,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_filled.svg": N,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_regular.svg": Q
}), T = Object.keys(c), U = (i = "") => T.includes(i), W = ({ name: i = "", filled: t }) => {
  const v = `../../../../../../node_modules/@fluentui/svg-icons/icons/${i.replace("-", "_").toLowerCase()}_24_${t ? "filled" : "regular"}.svg`;
  return U(v) ? c[v] : "";
};
var X = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, a = (i, t, n, l) => {
  for (var o = l > 1 ? void 0 : l ? Y(t, n) : t, v = i.length - 1, h; v >= 0; v--)
    (h = i[v]) && (o = (l ? h(t, n, o) : h(o)) || o);
  return l && o && X(t, n, o), o;
};
const s0 = "moray-icon";
let g = class extends _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.s {
  constructor() {
    super(...arguments), this.filled = !1, this.ariaLabel = null;
  }
  updated(i) {
    i.has("ariaLabel") && this._setAriaAttrs(), i.has("icon") && this.setIcon();
  }
  /** Sets the Icon. */
  setIcon() {
    var i;
    if (this._slotContents && this._slotContents.length === 0 && this.icon) {
      const t = W({
        name: this.icon,
        filled: this.filled
      }), n = t && new DOMParser().parseFromString(t, "text/html"), l = n && n.body.querySelector("svg");
      l && (this.removeIcon(), (i = this.shadowRoot) == null || i.append(l));
    }
  }
  /** Removes the Icon. */
  removeIcon() {
    var t;
    const i = (t = this.shadowRoot) == null ? void 0 : t.querySelector("svg");
    i == null || i.remove();
  }
  _setAriaAttrs() {
    this.ariaLabel ? (this.setAttribute("role", "img"), this.removeAttribute("aria-hidden")) : (this.setAttribute("aria-hidden", "true"), this.removeAttribute("role"));
  }
  render() {
    return (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.x)` <slot></slot> `;
  }
};
g.styles = [p];
a([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_1__.n)()
], g.prototype, "icon", 2);
a([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_1__.n)()
], g.prototype, "size", 2);
a([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_1__.n)({ type: Boolean })
], g.prototype, "filled", 2);
a([
  (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_1__.n)({ attribute: "aria-label" })
], g.prototype, "ariaLabel", 2);
a([
  (0,_query_assigned_elements_BAj4hztX_mjs__WEBPACK_IMPORTED_MODULE_2__.o)()
], g.prototype, "_slotContents", 2);
g = a([
  (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(s0)
], g);



/***/ }),

/***/ 1697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6284);
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_core__WEBPACK_IMPORTED_MODULE_0__/* .IntlMessageFormat */ .C);


/***/ }),

/***/ 6284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ IntlMessageFormat)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7582);
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9263);
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5957);
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1092);
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__/* .memoize */ .H)(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArray */ .ev)([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__/* .strategies */ .A.variadic,
        }),
        getDateTimeFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__/* .memoize */ .H)(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArray */ .ev)([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__/* .strategies */ .A.variadic,
        }),
        getPluralRules: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__/* .memoize */ .H)(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArray */ .ev)([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__/* .strategies */ .A.variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== _formatters__WEBPACK_IMPORTED_MODULE_3__/* .PART_TYPE */ .du.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return (0,_formatters__WEBPACK_IMPORTED_MODULE_3__/* .formatToParts */ .FK)(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () {
            var _a;
            return ({
                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) ||
                    Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
            });
        };
        this.getAst = function () { return _this.ast; };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            var _a = opts || {}, formatters = _a.formatters, parseOpts = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__rest */ ._T)(_a, ["formatters"]);
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, parseOpts), { locale: this.resolvedLocale }));
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function (locales) {
        if (typeof Intl.Locale === 'undefined') {
            return;
        }
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .parse */ .Qc;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());



/***/ }),

/***/ 1050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C8: () => (/* binding */ InvalidValueError),
/* harmony export */   HR: () => (/* binding */ MissingValueError),
/* harmony export */   YR: () => (/* binding */ InvalidValueTypeError),
/* harmony export */   jK: () => (/* binding */ ErrorCode),
/* harmony export */   u_: () => (/* binding */ FormatError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7582);

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error));

var InvalidValueError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));

var InvalidValueTypeError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));

var MissingValueError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));



/***/ }),

/***/ 1092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FK: () => (/* binding */ formatToParts),
/* harmony export */   du: () => (/* binding */ PART_TYPE)
/* harmony export */ });
/* unused harmony export isFormatXMLElementFn */
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9263);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1050);


var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isLiteralElement */ .O4)(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isLiteralElement */ .O4)(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isPoundElement */ .yx)(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__/* .MissingValueError */ .HR(varName, originalMessage);
        }
        var value = values[varName];
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isArgumentElement */ .VG)(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isDateElement */ .rp)(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isDateTimeSkeleton */ .Ii)(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isTimeElement */ .pe)(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isDateTimeSkeleton */ .Ii)(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isNumberElement */ .uf)(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isNumberSkeleton */ .Wh)(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isTagElement */ .HI)(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__/* .InvalidValueTypeError */ .YR(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isSelectElement */ .Wi)(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__/* .InvalidValueError */ .C8(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__/* .isPluralElement */ .Jo)(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_1__/* .FormatError */ .u_("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error__WEBPACK_IMPORTED_MODULE_1__/* .ErrorCode */ .jK.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__/* .InvalidValueError */ .C8(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}


/***/ }),

/***/ 8358:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: BlockHeading

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
;// CONCATENATED MODULE: ./src/components/block-heading/block-heading.styles.ts

const cssPropDefaults = {
    eyebrowColor: '#005597',
    eyebrowFontWeight: '600',
    eyebrowFontSize: '0.75rem',
    eyebrowLineHeight: '1rem',
    eyebrowLetterSpacing: '0.08rem',
    eyebrowMargin: '1rem',
    eyebrowTextTransform: 'uppercase',
    textAlign: 'left',
    titleColor: '#0e1726',
    titleBackground: 'transparent',
    paragraphColor: '#17253d',
    paragraphMargin: '1rem',
    paragraphMarginRight: '0',
    paragraphMarginLeft: '0',
    paragraphFontWeight: '400',
    paragraphFontSize: '1rem',
    paragraphLineHeight: '1.5rem',
    paragraphLetterSpacing: '-0.03em',
    paragraphWidth: '100%',
    footnoteColor: '#17253d',
    footnoteFontWeight: '400',
    footnoteFontSize: '0.75rem',
    footnoteLineHeight: '1rem',
    footnoteLetterSpacing: '-0.03em',
    footnoteMargin: '1.5rem',
    linksMargin: '1.5rem',
    slotMargin: '2rem',
};
/* harmony default export */ const block_heading_styles = ((0,lit/* css */.iv) `
  .block-heading {
    --_link-color: var(--ds-card-link-color, #0067b8);
    --root-spacing-m: var(--theme-spacing-m, 0.5rem);
    --root-spacing-xl: var(--theme-spacing-xl, 2rem);

    text-align: var(
      --ds-block-heading-text-align,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textAlign)}
    );
    background-color: var(--block-heading-background-color);

    .block-heading__button-group > .button-group {
      justify-content: var(--block-heading-text-align);
    }
  }

  ::slotted([slot='eyebrow']) {
    --block-heading-eyebrow-color: var(
      --ds-block-heading-eyebrow-color,
      var(
        --ds-theme-foreground-base-highlight,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowColor)}
      )
    );
    --block-heading-eyebrow-font-weight: var(
      --ds-block-heading-eyebrow-font-weight,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowFontWeight)}
    );

    --block-heading-eyebrow-font-size: var(
      --ds-block-heading-eyebrow-font-size,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowFontSize)}
    );
    --block-heading-eyebrow-line-height: var(
      --ds-block-heading-eyebrow-line-height,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowLineHeight)}
    );
    --block-heading-eyebrow-letter-spacing: var(
      --ds-block-heading-eyebrow-letter-spacing,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowLetterSpacing)}
    );
    --block-heading-eyebrow-margin: var(
      --ds-block-heading-eyebrow-margin,
      var(--ds-spacing-5, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowMargin)})
    );
    --block-heading-eyebrow-text-transform: var(
      --ds-block-heading-eyebrow-text-transform,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowTextTransform)}
    );

    text-transform: var(--block-heading-eyebrow-text-transform);
    color: var(--block-heading-eyebrow-color);
    font-weight: var(--block-heading-eyebrow-font-weight);
    font-size: var(--block-heading-eyebrow-font-size);
    line-height: var(--block-heading-eyebrow-line-height);
    letter-spacing: var(--block-heading-eyebrow-letter-spacing);
    margin: 0 0 var(--block-heading-eyebrow-margin);
  }

  ::slotted([slot='title']) {
    --block-heading-title-color: var(
      --ds-block-heading-title-color,
      var(--ds-theme-foreground-base, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.titleColor)})
    );
    --block-heading-title-background: var(
      --ds-block-heading-title-background,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.titleBackground)}
    );

    color: var(--block-heading-title-color);
    background: var(--block-heading-title-background);
  }

  ::slotted([slot='paragraph']) {
    --block-heading-paragraph-color: var(
      --ds-block-heading-paragraph-color,
      var(
        --ds-theme-foreground-base-subtle,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphColor)}
      )
    );
    --block-heading-paragraph-margin: var(
      --ds-block-heading-paragraph-margin,
      var(--ds-spacing-5, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMargin)})
    );
    --block-heading-paragraph-font-weight: var(
      --ds-block-heading-paragraph-font-weight,
      var(
        --ds-body-font-weight,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphFontWeight)}
      )
    );
    --block-heading-paragraph-font-size: var(
      --ds-block-heading-paragraph-font-size,
      var(--ds-body-font-size, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphFontSize)})
    );
    --block-heading-paragraph-line-height: var(
      --ds-block-heading-paragraph-line-height,
      var(
        --ds-body-line-height,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphLineHeight)}
      )
    );
    --block-heading-paragraph-letter-spacing: var(
      --ds-block-heading-paragraph-letter-spacing,
      var(
        --ds-body-letter-spacing,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphLetterSpacing)}
      )
    );
    --block-heading-paragraph-margin: var(
      --ds-block-heading-paragraph-margin,
      var(--ds-spacing-5, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMargin)})
    );
    --block-heading-paragraph-margin-right: var(
      --ds-block-heading-paragraph-margin-right,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMarginRight)}
    );
    --block-heading-paragraph-margin-left: var(
      --ds-block-heading-paragraph-margin-left,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMarginLeft)}
    );
    --block-heading-paragraph-width: var(
      --ds-block-heading-paragraph-width,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphWidth)}
    );
    color: var(--block-heading-paragraph-color);
    margin: var(--block-heading-paragraph-margin)
      var(--block-heading-paragraph-margin-right) 0
      var(--block-heading-paragraph-margin-left);
    font-weight: var(--block-heading-paragraph-font-weight);
    font-size: var(--block-heading-paragraph-font-size);
    line-height: var(--block-heading-paragraph-line-height);
    letter-spacing: var(--block-heading-paragraph-letter-spacing);
    margin-bottom: 0;
    width: var(--block-heading-paragraph-width);
  }

  .block-heading__button-group {
    margin: var(--root-spacing-xl) 0 0;
  }
  ::slotted([slot='links']) {
    margin: var(
        --ds-block-heading-links-margin,
        var(--ds-spacing-6, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.linksMargin)})
      )
      0 0;
    justify-content: var(
      --ds-block-heading-text-align,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textAlign)}
    );
  }

  .block-heading__cta {
    color: var(--_link-color);
    position: relative;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .block-heading__cta::after {
    content: '';
    right: 0.4375rem;
  }
  .block-heading__cta::after {
    font-family: MWF-FLUENT-ICONS;
    line-height: 1;
    top: calc(50% + 0.0625em);
    margin-top: -0.5em;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    font-weight: 600;
  }

  .block-heading--alignment-centered {
    --block-heading-text-align: center;

    .block-heading__slot {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  ::slotted([slot='footnote']) {
    --block-heading-footnote-color: var(
      --ds-block-heading-footnote-color,
      var(
        --ds-theme-foreground-base-subtle,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteColor)}
      )
    );
    --block-heading-footnote-font-weight: var(
      --ds-block-heading-footnote-font-weight,
      var(
        --ds-body-font-weight,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteFontWeight)}
      )
    );
    --block-heading-footnote-font-size: var(
      --ds-block-heading-footnote-font-size,
      var(
        --ds-body-xs-font-size,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteFontSize)}
      )
    );
    --block-heading-footnote-line-height: var(
      --ds-block-heading-footnote-line-height,
      var(
        --ds-body-xs-line-height,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteLineHeight)}
      )
    );
    --block-heading-footnote-letter-spacing: var(
      --ds-block-heading-footnote-letter-spacing,
      var(
        --ds-body-xs-letter-spacing,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteLetterSpacing)}
      )
    );
    --block-heading-footnote-margin: var(
      --ds-block-heading-footnote-margin,
      var(--ds-spacing-6, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteMargin)})
    );

    color: var(--block-heading-footnote-color);
    margin: var(--block-heading-footnote-margin) 0 0;
    font-weight: var(--block-heading-footnote-font-weight);
    font-size: var(--block-heading-footnote-font-size);
    line-height: var(--block-heading-footnote-line-height);
    letter-spacing: var(--block-heading-footnote-letter-spacing);
    margin-bottom: 0;
  }
  :host([center-text]) .block-heading *,
  :host([center-text]) .block-heading ::slotted(*) {
    text-align: center;
  }
  :host([center-text]) .block-heading ::slotted([slot='links']) {
    display: flex;
    justify-content: center;
  }

  ::slotted([slot='card']) {
    display: flex;
    margin: var(
        --ds-block-heading-slot-margin,
        var(--ds-spacing-8, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.slotMargin)})
      )
      0 0;
  }
`);

// EXTERNAL MODULE: ./src/util/define-elements.ts
var define_elements = __webpack_require__(5270);
;// CONCATENATED MODULE: ./src/components/block-heading/index.ts





let BlockHeading = class BlockHeading extends lit/* LitElement */.oi {
    constructor() {
        super(...arguments);
        this.centerText = false;
    }
    render() {
        return (0,lit/* html */.dy) ` <div class="block-heading">
      <slot name="eyebrow" class="block-heading__eyebrow"></slot>
      <slot name="title" class="block-heading__title"></slot>
      <slot name="paragraph" class="block-heading__paragraph"></slot>
      <slot name="links" class="block-heading__link-group"></slot>
      <slot name="card" class="block-heading__slot"></slot>
      <slot name="footnote" class="block-heading__footnote"></slot>
    </div>`;
    }
};
BlockHeading.styles = [block_heading_styles];
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'center-text' })
], BlockHeading.prototype, "centerText", void 0);
BlockHeading = (0,tslib_es6/* __decorate */.gn)([
    (0,define_elements/* defineCustomElement */.M)('cascade-block-heading')
], BlockHeading);



/***/ }),

/***/ 4166:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: CardItem

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
;// CONCATENATED MODULE: ./src/components/card-item/card-item.styles.ts

const cssPropDefaults = {
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    color: '#000',
    depthOpacityKey: '0.13',
    headerPadding: '1rem 1.5rem 1rem 1.5rem',
    imagePadding: '0rem',
    bodyPadding: '0rem 1.5rem 0rem 1.5rem',
    footerPadding: '1rem 1.5rem 1rem 1.5rem',
};
/* harmony default export */ const card_item_styles = ((0,lit/* css */.iv) `
  .card {
    background-color: var(
      --ds-card-item-background-color,
      var(
        --ds-theme-background-card-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.backgroundColor)}
      )
    );
    color: var(
      --ds-card-item-color,
      var(
        --ds-theme-foreground-base-subtle,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.color)}
      )
    );
    border-radius: var(
      --ds-card-item-border-radius,
      var(--ds-radii-pill, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.borderRadius)})
    );
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    background-clip: border-box;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .card--depth {
    box-shadow: var(
      --ds-card-item-shadow,
      var(
        --ds-root-depth-4,
        0 0.1875rem 0.4375rem 0
          rgba(
            0,
            0,
            0,
            var(
              --ds-card-item-depth-opacity-key,
              var(
                --ds-theme-depth-opacity-key,
                ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.depthOpacityKey)}
              )
            )
          ),
        0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.11)
      )
    );
    padding: 0.25rem;
    height: 100%;
  }
  .card--text-align {
    text-align: var(--_text-align);
  }
  .card__header {
    padding: var(
      --ds-card-item-header-padding,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.headerPadding)}
    );
  }
  .card__body {
    flex: 1 1 auto;
    position: relative;
    padding: var(
      --ds-card-item-body-padding,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.bodyPadding)}
    );
  }
  .card__image {
    padding: var(
      --ds-card-item-image-padding,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.imagePadding)}
    );
  }
  .card__footer {
    flex: 1 1 auto;
    position: relative;
    padding: var(
      --ds-card-item-footer-padding,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footerPadding)}
    );
  }
`);

// EXTERNAL MODULE: ./node_modules/lit/static-html.js
var static_html = __webpack_require__(7150);
// EXTERNAL MODULE: ./src/util/define-elements.ts
var define_elements = __webpack_require__(5270);
;// CONCATENATED MODULE: ./src/components/legos/heading/heading.styles.ts

const heading_styles_cssPropDefaults = {
    fontWeight: '600',
    marginTop: '0px',
    marginBottom: '0px',
    color: '#000',
    backgroundColor: '#fff',
    lineHeight: '1.2rem',
};
/* harmony default export */ const heading_styles = ((0,lit/* css */.iv) `
  .heading {
    font-family: inherit;
    font-weight: var(
      --ds-heading-font-weight,
      var(--ds-display-1-font-weight, cssPropDefaults.fontWeight)
    );
    margin-top: var(--ds-heading-margin-top, cssPropDefaults.marginTop);
    margin-bottom: var(
      --ds-heading-margin-bottom,
      cssPropDefaults.marginBottom
    );
    color: var(--ds-heading-color, cssPropDefaults.color);
    background-color: var(
      --ds-heading-background-color,
      var(--ds-color-transparent, cssPropDefaults.backgroundColor)
    );
    line-height: var(--ds-heading-line-height, cssPropDefaults.lineHeight);
  }

  .heading--word-break {
    word-break: var(--_heading-word-wrap);
  }

  .h6,
  h6 {
    font-size: var(--ds-heading-font-size-h6, 1.0625rem);
    margin-bottom: var(--ds-heading-margin-bottom-h6, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h6,
    h6 {
      font-size: var(--ds-heading-font-size-h6-1084, 1.125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h6-1084, 0.5rem);
    }
  }

  @media (min-width: 1400px) {
    .h6,
    h6 {
      font-size: var(--ds-heading-font-size-h6-1400, 1.1875rem);
      margin-bottom: var(--ds-heading-margin-bottom-h6-1400, 0.5rem);
    }
  }

  .h5,
  h5 {
    font-size: var(--ds-heading-font-size-h5, 1.125rem);
    margin-bottom: var(--ds-heading-margin-bottom-h5, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h5,
    h5 {
      font-size: var(--ds-heading-font-size-h5-1084, 1.1875rem);
      margin-bottom: var(--ds-heading-margin-bottom-h5-1084, 0.5rem);
    }
  }

  @media (min-width: 1400px) {
    .h5,
    h5 {
      font-size: var(--ds-heading-font-size-h5-1400, 1.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h5-1400, 0.5rem);
    }
  }

  .h4,
  h4 {
    font-size: var(--ds-heading-font-size-h4, 1.1875rem);
    margin-bottom: var(--ds-heading-margin-bottom-h4, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h4,
    h4 {
      font-size: var(--ds-heading-font-size-h4-1084, 1.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h4-1084, 0.5rem);
    }
  }

  @media (min-width: 1400px) {
    .h4,
    h4 {
      font-size: var(--ds-heading-font-size-h4-1400, 1.5rem);
      margin-bottom: var(--ds-heading-margin-bottom-h4-1400, 0.75rem);
    }
  }

  .h3,
  h3 {
    font-size: var(--ds-heading-font-size-h3, 1.3125rem);
    margin-bottom: var(--ds-heading-margin-bottom-h3, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h3,
    h3 {
      font-size: var(--ds-heading-font-size-h3-1084, 1.5rem);
      margin-bottom: var(--ds-heading-margin-bottom-h3-1084, 0.75rem);
    }
  }

  @media (min-width: 1400px) {
    .h3,
    h3 {
      font-size: var(--ds-heading-font-size-h3-1400, 1.8125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h3-1400, 1rem);
    }
  }

  .h2,
  h2 {
    font-size: var(--ds-heading-font-size-h2, 1.5rem);
    margin-bottom: var(--ds-heading-margin-bottom-h2, 0.75rem);
  }

  @media (min-width: 1084px) {
    .h2,
    h2 {
      font-size: var(--ds-heading-font-size-h2-1084, 1.8125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h2-1084, 1rem);
    }
  }

  @media (min-width: 1400px) {
    .h2,
    h2 {
      font-size: var(--ds-heading-font-size-h2-1400, 2.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h2-1400, 1.25rem);
    }
  }

  .h1,
  h1 {
    font-size: var(--ds-heading-font-size-h1, 1.8125rem);
    margin-bottom: var(--ds-heading-margin-bottom-h1, 1rem);
  }

  @media (min-width: 1084px) {
    .h1,
    h1 {
      font-size: var(--ds-heading-font-size-h1-1084, 2.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h1-1084, 1.25rem);
    }
  }

  @media (min-width: 1400px) {
    .h1,
    h1 {
      font-size: var(--ds-heading-font-size-h1-1400, 3.125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h1-1400, 1.5rem);
    }
  }

  .display-4 {
    font-size: var(--ds-heading-font-size-display-4, 2.3125rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-4, 1.25rem);
  }

  @media (min-width: 1084px) {
    .display-4 {
      font-size: var(--ds-heading-font-size-display-4-1084, 3.125rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-4-1084, 1.5rem);
    }
  }

  @media (min-width: 1400px) {
    .display-4 {
      font-size: var(--ds-heading-font-size-display-4-1400, 4.4375rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-4-1400, 1.75rem);
    }
  }

  .display-3 {
    font-size: var(--ds-heading-font-size-display-3, 3.125rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-3, 1.5rem);
  }

  @media (min-width: 1084px) {
    .display-3 {
      font-size: var(--ds-heading-font-size-display-3-1084, 4.4375rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-3-1084, 1.75rem);
    }
  }

  @media (min-width: 1400px) {
    .display-3 {
      font-size: var(--ds-heading-font-size-display-3-1400, 6.5625rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-3-1400, 2rem);
    }
  }

  .display-2 {
    font-size: var(--ds-heading-font-size-display-2, 4.4375rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-2, 1.75rem);
  }

  @media (min-width: 1084px) {
    .display-2 {
      font-size: var(--ds-heading-font-size-display-2-1084, 6.5625rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-2-1084, 2rem);
    }
  }

  @media (min-width: 1400px) {
    .display-2 {
      font-size: var(--ds-heading-font-size-display-2-1400, 10rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-2-1400, 2.25rem);
    }
  }

  .display-1 {
    font-size: var(--ds-heading-font-size-display-1, 6.5625rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-1, 2rem);
  }

  @media (min-width: 1084px) {
    .display-1 {
      font-size: var(--ds-heading-font-size-display-1-1084, 10rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-1-1084, 2.25rem);
    }
  }

  @media (min-width: 1400px) {
    .display-1 {
      font-size: var(--ds-heading-font-size-display-1-1400, 15.5625rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-1-1400, 2.5rem);
    }
  }
`);

;// CONCATENATED MODULE: ./src/components/legos/heading/index.ts






let HeadingElement = class HeadingElement extends lit/* LitElement */.oi {
    constructor() {
        super(...arguments);
        this.tag = 'h2';
        this.displaySize = '';
        this.ariaLevel = '';
        this.uniqueId = '';
        this.headingText = '';
        this.addTextBreakHeading = false;
        this.hideHeadingText = false;
    }
    render() {
        const heading = this.renderHeading();
        return (0,static_html/* html */.dy) `${heading}`;
    }
    renderHeading() {
        const { tag } = this;
        this.setAriaLevelBasedOnTag();
        return (0,static_html/* html */.dy) `<${(0,static_html/* unsafeStatic */.s2)(tag)} id="${this.uniqueId || lit/* nothing */.Ld}" role='heading' aria-level="${this.ariaLevel || lit/* nothing */.Ld}" class="heading heading--word-break ${this.displaySize} ${this.addTextBreakHeading ? 'text-break-keep-all' : ''} ${this.hideHeadingText ? 'sr-only' : ''}">
             <slot>${this.headingText}</slot>
        </${(0,static_html/* unsafeStatic */.s2)(tag)}>`;
    }
    setAriaLevelBasedOnTag() {
        switch (this.tag) {
            case 'h1':
                this.ariaLevel = '1';
                break;
            case 'h2':
                this.ariaLevel = '2';
                break;
            case 'h3':
                this.ariaLevel = '3';
                break;
            case 'h4':
                this.ariaLevel = '4';
                break;
            case 'h5':
                this.ariaLevel = '5';
                break;
            case 'h6':
                this.ariaLevel = '6';
                break;
            case 'div':
                this.ariaLevel = '';
                break;
            default:
                break;
        }
    }
};
HeadingElement.styles = heading_styles;
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)()
], HeadingElement.prototype, "tag", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)()
], HeadingElement.prototype, "displaySize", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], HeadingElement.prototype, "ariaLevel", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)()
], HeadingElement.prototype, "uniqueId", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)()
], HeadingElement.prototype, "headingText", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ type: Boolean })
], HeadingElement.prototype, "addTextBreakHeading", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ type: Boolean })
], HeadingElement.prototype, "hideHeadingText", void 0);
HeadingElement = (0,tslib_es6/* __decorate */.gn)([
    (0,define_elements/* defineCustomElement */.M)('cascade-heading')
], HeadingElement);


// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(3692);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(875);
;// CONCATENATED MODULE: ./node_modules/lit-html/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(0,directive/* directive */.XM)(class extends directive/* Directive */.Xe{constructor(t){if(super(t),t.type!==directive/* PartType */.pX.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html/* noChange */.Jb}});
//# sourceMappingURL=class-map.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map

;// CONCATENATED MODULE: ./src/components/card-item/index.ts







let CardItem = class CardItem extends lit/* LitElement */.oi {
    constructor() {
        super(...arguments);
        this.depth = false;
    }
    render() {
        const cardClasses = {
            card: true,
            'card--depth': this.depth,
            'card--text-align': true,
        };
        return (0,lit/* html */.dy) ` <div part="card" class="${e(cardClasses)}">
      <div part="header" class="card__header">
        <slot name="superHeader"></slot>
      </div>
      <div class="card__image">
        <slot name="image"></slot>
      </div>
      <div part="header" class="card__header">
        <slot name="badge"></slot>
      </div>
      <div part="body" class="card__body">
        <slot name="heading"></slot>
        <slot name="price"></slot>
        <p><slot name="description"></slot></p>
      </div>
      <div part="footer" class="card__footer">
        <slot name="link-group"></slot>
        <slot name="footer"></slot>
      </div>
    </div>`;
    }
};
CardItem.styles = [card_item_styles];
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ type: Boolean })
], CardItem.prototype, "depth", void 0);
CardItem = (0,tslib_es6/* __decorate */.gn)([
    (0,define_elements/* defineCustomElement */.M)('cascade-card-item')
], CardItem);



/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: DataTableElement

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
// EXTERNAL MODULE: ./src/util/define-elements.ts
var define_elements = __webpack_require__(5270);
;// CONCATENATED MODULE: ./src/components/data-table/data-table.styles.ts

const cssPropDefaults = {
    tableBackGroundColor: '#171717',
    spanTextColor: '#fff',
    itemHighlightColor: '#0067b8',
    itemBorderColor: '#DBDBDB',
};
/* harmony default export */ const data_table_styles = ((0,lit/* css */.iv) `
  .table {
    border-collapse: collapse;
    width: 100%;
    background-color: var(
      --ds-data-table-background-color,
      var(
        --ds-theme-background-card-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.tableBackGroundColor)}
      )
    );
    color: var(
      --ds-data-table-text-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.spanTextColor)}
      )
    );
  }

  .table-header,
  .table-cell {
    padding: 0.938rem;
  }
  .highlight-table-component .table-cell {
    width: 24%;
  }

  .highlight-table-component .table-cell:first-child {
    width: 30%;
  }

  .highlight-table-component table {
    font-size: 0.938rem;
    min-width: 20rem;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 0.5rem;
  }
  .highlight-table-component td {
    border: none;
    font-weight: 400;
    padding: 0.625rem 0.75rem;
    text-align: left;
  }

  .highlight-table-component td:first-child {
    padding: 0.625rem 0.75rem 0.625rem 1.188rem;
  }

  .highlight-table-component tr {
    border-bottom: 0.063rem solid;
    border-bottom-color: var(
      --ds-theme-border-neutral-fade,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemBorderColor)}
    );
  }
  .highlight-table-component table tbody tr:first-child {
    border-top: 0.063rem solid;
    border-top-color: var(
      --ds-theme-border-neutral-fade,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemBorderColor)}
    );
  }
  .highlight-table-component table th {
    padding: 0.625rem 0.75rem;
  }
  .highlight-table-component table tbody th:first-child {
    font-weight: bold;
    padding-left: 1.188rem;
    text-align: left;
  }
  .highlight-table-component table thead {
    display: none;
  }

  .highlight {
    background-color: var(
      --ds-data-table-item-highlight-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemHighlightColor)}
      )
    );
  }
`);

;// CONCATENATED MODULE: ./src/components/data-table/index.ts





/**
 * @summary
 * This is a Data Table component it is a lego component.
 * This is a Dynamic Generic table component by adding number of rows and Columns.
 * Each Table cell is a slot .
 */
let DataTableElement = class DataTableElement extends lit/* LitElement */.oi {
    constructor() {
        super(...arguments);
        this.tableRows = 3;
        /**
         *  Attribute to show the Tables Rows.
         */
        this.tableColumns = 3;
        /**
         *  Attribute to show the Tables Columns.
         */
        this.tableType = '';
        /**
         * Attribute the choose Table Type to Modify the Table styles based on this type.
         */
        this.highlight = [];
    }
    /**
     * This is to Highlight the Table rows based on this Array values.
     */
    render() {
        return (0,lit/* html */.dy) `<div
      class="${this.tableType == 'Highlight'
            ? 'highlight-table-component'
            : ''}"
    >
      <table class="table">
        <caption class="table-caption">
          <slot name="caption"></slot>
        </caption>
        <thead>
          <tr class="table-row">
            ${Array.from({ length: this.tableColumns }, (_, index) => (0,lit/* html */.dy) `<th class="table-header">
                  <slot name="${index}-h"></slot>
                </th>`)}
          </tr>
        </thead>
        <tbody>
          ${Array.from({ length: this.tableRows }, (_, rowIndex) => (0,lit/* html */.dy) `
              <tr
                class="${this.highlight?.includes(rowIndex)
            ? 'table-row highlight'
            : 'table-row'}"
              >
                ${Array.from({ length: this.tableColumns }, (_, colIndex) => (0,lit/* html */.dy) `
                    <td class="table-cell">
                      <slot name="${rowIndex}-${colIndex}"></slot>
                    </td>
                  `)}
              </tr>
            `)}
        </tbody>
      </table>
    </div>`;
    }
};
DataTableElement.styles = [data_table_styles];
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ type: Number, attribute: 'table-rows' })
], DataTableElement.prototype, "tableRows", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ type: Number, attribute: 'table-columns' })
], DataTableElement.prototype, "tableColumns", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'table-type' })
], DataTableElement.prototype, "tableType", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ type: Array })
], DataTableElement.prototype, "highlight", void 0);
DataTableElement = (0,tslib_es6/* __decorate */.gn)([
    (0,define_elements/* defineCustomElement */.M)('cascade-data-table')
], DataTableElement);



/***/ }),

/***/ 2464:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: LightBox

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
;// CONCATENATED MODULE: ./src/styles/shared/color.ts

const colorUtils = (0,lit/* css */.iv) `
  .bg-yellow {
    background-color: var(--ds-badge-background-color, #ffb900);
    color: var(--ds-badge-color, #000);
  }
`;

// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/icon/index.js
var icon = __webpack_require__(3890);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/button/index.js
var components_button = __webpack_require__(5552);
;// CONCATENATED MODULE: ./src/components/lightbox/lightbox.styles.ts

const cssPropDefaults = {
    buttonColor: '#0067b8',
    textColor: '#fff',
    itemHeadColor: '#000',
    itemBackgroundColor: '#fff',
    rowHoverColor: 'rgba(0, 120, 212, 0.1)',
    buttonRadius: '.375rem',
    variantSelectedColor: '#004880',
    variantSelectedBackgroundColor: 'rgba(0, 120, 212, 0.2)',
};
/* harmony default export */ const lightbox_styles = ((0,lit/* css */.iv) `
  .light-box-retailer-log {
    .light-box-retail-image {
      width: 7.5rem;
      margin-bottom: -7rem;
      margin-left: 4.5rem;
    }
  }

  .light-box-button-primary {
    background-color: var(
      --ds-lightbox-button-background-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.buttonColor)}
      )
    );
    color: var(
      --ds-lightbox-button-text-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textColor)}
      )
    );
  }
  .light-box-productlist-modal-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 14.313rem;
    margin-top: 1.563rem;
    font-weight: normal;
    letter-spacing: 0.063rem;
    font-size: 2em;

    .light-box-expandall-and-desc-container {
      display: flex;
      flex-direction: row;
      gap: 0.625rem;

      .light-box-expand-all {
        transition: none 0s ease 0s;
        font-weight: 700;
        border-radius: 0.313rem;
        font-size: 0.813rem;
        line-height: 1.25rem !important;
        border: 0.125rem solid transparent !important;
        margin-top: -0.438rem;

        .light-box-more-options-icon {
          font-size: 1rem;
        }
        moray-button::part(base) {
          background-color: var(
            --ds-lightbox-button-background-color,
            var(
              --ds-theme-background-accent-subtle-normal,
              ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textColor)}
            )
          );
          color: var(
            --ds-lightbox-button-text-color,
            var(
              --ds-theme-background-neutral-strong,
              ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.buttonColor)}
            )
          );
        }
      }
      .light-box-desc {
        font-size: 0.813rem;
        position: relative;
        top: -1.125rem;
      }
    }

    .light-box-config {
      position: relative;
      top: 0.75rem;
      font-size: 0.813rem;
      color: rgba(0, 0, 0, 0.6);
    }
    .light-box-heading-word-break {
      max-width: 40.313rem;
    }
  }
  .light-box-retailer-placeholder {
    height: 100%;
    position: absolute;
    width: 100%;
    overflow: auto;
    max-height: calc(100% - 16.563rem);
  }
  .light-box-retailer-list {
    height: 5.25rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.063rem solid #ededed;
    border-bottom: 0.063rem solid #ededed;

    moray-button {
      --ds-action-trigger-font-size: 0.1rem;
    }

    .light-box-button-link {
      background-color: var(
        --ds-lightbox-button-background-color,
        var(
          --ds-theme-foreground-accent-subtle-normal,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.buttonColor)}
        )
      );
      color: var(
        --ds-lightbox-button-text-color,
        var(
          --ds-theme-foreground-neutral-strong,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textColor)}
        )
      );
      border: none;
      font-size: 0.688rem;
      float: right;
      text-transform: none;
      font-weight: bold;
      margin-right: 2.188rem;
      margin-top: 1.75rem;
      border-radius: var(
        --ds-lightbox-button-border-radius,
        var(--ds-radii-20, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.buttonRadius)})
      );
    }
    .light-box-retail-icon {
      img {
        max-height: 2.813rem;
        width: 7.188rem;
        vertical-align: middle;
        margin-top: 1.438rem;
        margin-left: 3.125rem;
      }
    }
    .light-box-retail-link-text {
      width: 24%;
      vertical-align: middle;
      margin-top: 1.875rem;
      margin-right: 13.75rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .light-box-retailer-list.variant-selected, .light-box-variant-data-row.variant-selected {
    background-color: var(
          --ds-color-brilliant-blue-500,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.variantSelectedBackgroundColor)}
        );
    color: var(
          --ds-color-brilliant-blue-800,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.variantSelectedColor)}
      );
    outline: 1px solid #000 !important;
  }

  .light-box-variants-data {
    width: 99% !important;
    margin-right: 0.188rem;
    margin-left: 0.188rem;
    margin-bottom: 0.125rem;
    table-layout: fixed;

    .light-box-variation-select-button {
      background-color: var(
        --ds-lightbox-button-background-color,
        var(
          --ds-theme-foreground-accent-subtle-normal,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.buttonColor)}
        )
      );
      color: var(
        --ds-lightbox-button-text-color,
        var(
          --ds-theme-foreground-neutral-strong,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textColor)}
        )
      );
      border: none;
      font-size: 0.688rem;
      padding: 0.313rem 1.563rem;
      float: left;
      text-transform: none;
      font-weight: bold;
      border-radius: var(
        --ds-lightbox-button-border-radius,
        var(--ds-radii-20, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.buttonRadius)})
      );
      padding: 0rem 1rem;
      font-weight: 600;
      letter-spacing: 0.031rem;
    }

    .light-box-variantsdata-head {
      font-size: 0.813rem;
      line-height: 1rem;
      vertical-align: bottom;
      color: var(
        --ds-lightbox-variantsdata-head-color,
        var(
          --ds-theme-foreground-neutral-strong,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemHeadColor)}
        )
      );
      font-weight: 600;
      th {
        padding-left: 2.813rem;
      }
    }
    .light-box-variant-data-body {
      .light-box-variant-data-row {
        font-weight: 400;
        font-size: 0.75rem;
        outline: 0.063rem solid #ddd;

        .light-box-variant-data-cell {
          padding: 1.25rem 0.625rem 1.688rem !important;
          text-align: center;
        }
      }
      .light-box-variant-data-row:hover {
        background-color: var(
          --ds-lightbox-button-variantsdata-row-hover-color,
          var(
            --ds-theme-background-neutral-strong,
            ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.rowHoverColor)}
          )
        );
        outline: 0.125rem dashed;
        outline-color:  color: var(
          --ds-lightbox-variantsdata-row-outline-color,
          var(
            --ds-theme-background-neutral-strong,
            ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemHeadColor)}
          )
        );
        color: var(
          --ds-lightbox-variantsdata-head-color,
          var(
            --ds-theme-foreground-neutral-strong,
            ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemHeadColor)}
          )
        );
      }
    }
  }

  .light-box-privacy-footer {
    position: absolute;
    bottom: 0rem;
    padding: 0.313rem 0.625rem;
    border-top: 0.063rem solid #cccccc;
     background-color: var(
            --ds-lightbox-footer-background-color,
            var(
            --ds-theme-background-neutral-strong,
              ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.itemBackgroundColor)}
            )
          );

    .light-box-dialog-footer {
      text-align: left;
      font-size: 0.688rem;
      line-height: 0.875rem;
      padding: 0.313rem 0 0;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  @media (min-width: 53.313rem) and (max-width: 63.938rem) {
    .light-box-expand-all {
      margin-top: 0rem;
      margin-left: 0rem;
    }
  }
  @media screen and (max-width: 47.999rem) {
    .light-box-retailer-log {
      display: flex;
      justify-content: center;
      align-items: center;
      .light-box-retail-image {
        margin-bottom: 0rem;
        margin-left: 0rem;
      }
    }
    .light-box-privacy-footer {
      height: 0rem;
      margin-bottom: -13.75rem;
      position: relative;
    }
    .light-box-retailer-placeholder {
      max-height: calc(100% - 3.75rem);
      position: relative;
    }
    .light-box-config {
      top: 0rem;
      left: 3.75rem;
    }
    .light-box-desc {
      margin-left: -10.625rem;
      left: 6.25rem;
    }
    .light-box-expandall-and-desc-container {
      gap: 6.438rem;
    }
    .light-box-expand-all {
      margin-top: -0.25rem;
    }
      .light-box-variants-data {
       table-layout: unset;
      }
  }

  @media (min-width: 33.813rem) and (max-width: 40rem) {
     .light-box-productlist-modal-header {
        margin-left: 9.313rem;
      }

     .light-box-expand-all {
        margin-top: 2.562rem !important;
        margin-left: -9rem;
    }
   .light-box-button-link {
      margin-left: -8.563rem;
     }

  }
  @media (min-width: 40.063rem) and (max-width: 45.938rem) {
     .light-box-productlist-modal-header {
       margin-left: 13.313rem;
      }

     .light-box-expand-all {
        margin-top: 2.562rem !important;
       margin-left: -11rem;
    }

  }
      @media (min-width: 46rem) and (max-width: 48.063rem) {
     .light-box-productlist-modal-header {
       margin-left: 13.313rem;
      }

     .light-box-expand-all {
      margin-top: 1.562rem !important;
        margin-left: -13rem;
    }

  }

 @media screen and (max-width: 33.75rem) {
   .light-box-productlist-modal-header {
      margin-left: 6.313rem;
      }
    .light-box-expand-all {
     margin-top: 1.562rem !important;
     margin-left: -11rem;
    }
     .light-box-button-link {
      margin-left: -8.563rem;
     }
  }
`);

// EXTERNAL MODULE: ./src/components/block-heading/index.ts + 1 modules
var block_heading = __webpack_require__(8358);
;// CONCATENATED MODULE: ./src/components/cascade-pop-up/cascade-pop-up.styles.ts

const cascade_pop_up_styles_cssPropDefaults = {
    buttonColor: '#fff',
    textColor: '#000',
    borderColor: '#000',
    popUpBorderColor: '#fff',
    borderRadius: '.5rem',
};
/* harmony default export */ const cascade_pop_up_styles = ((0,lit/* css */.iv) `
  .cascade-pop-up-product-details-dialog {
    border-radius: var(
      --ds-lightbox-border-radius,
      var(--ds-radii-20, ${(0,lit/* unsafeCSS */.$m)(cascade_pop_up_styles_cssPropDefaults.borderRadius)})
    );
    position: fixed;
    top: 3%;
    left: 0;
    right: 0;
    width: 60rem;
    max-height: 37.5rem;
    padding: 0 0 0 0;
    margin: 0 auto;
    transition: 0s z-index;
    -moz-transition: 0s z-index;
    -webkit-transition: 0s z-index;
    transition: 0.2s opacity;
    -moz-transition: 0.2s opacity;
    -webkit-transition: 0.2s opacity;
    text-align: left;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: calc(100% - 7%);
    border: 0.125rem solid;
    border-color: var(
      --ds-lightbox-close-button-border-color,
      var(
        --ds-theme-background-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cascade_pop_up_styles_cssPropDefaults.popUpBorderColor)}
      )
    );
  }

  .cascade-pop-up-close-button {
    position: absolute;
    min-width: 0;
    box-shadow: none;
    opacity: 1;
    cursor: pointer;
    z-index: 4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -webkit-transition-duration: 0.2s;
    top: 0.688rem;
    right: 0.688rem;
    float: right;
    text-align: right;
  }
  .cascade-pop-up-close-button::part(base) {
    background-color: var(
      --ds-lightbox-close-button-background-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,lit/* unsafeCSS */.$m)(cascade_pop_up_styles_cssPropDefaults.buttonColor)}
      )
    );
    color: var(
      --ds-lightbox-close-button-text-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cascade_pop_up_styles_cssPropDefaults.textColor)}
      )
    );
    border: 0.0625rem solid;
    border-color: var(
      --ds-lightbox-close-button-border-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cascade_pop_up_styles_cssPropDefaults.borderColor)}
      )
    );
    border-radius: var(
      --ds-lightbox-close-button-border-radius,
      var(--ds-radii-20, ${(0,lit/* unsafeCSS */.$m)(cascade_pop_up_styles_cssPropDefaults.borderRadius)})
    );
  }

  @media screen and (max-width: 47.999rem) {
    .cascade-pop-up-product-details-dialog {
      top: 0%;
    }
  }
`);

// EXTERNAL MODULE: ./src/services/localization/i18nMixin.ts
var i18nMixin = __webpack_require__(4638);
;// CONCATENATED MODULE: ./src/components/cascade-pop-up/index.ts








let PopUp = class PopUp extends i18nMixin/* WithLocalization */.R {
    render() {
        return (0,lit/* html */.dy) `
      <div>
        <dialog
          id="cascade-popup"
          aria-label="Cascade Pop Up"
          class="cascade-pop-up-product-details-dialog"
        >
          <moray-button
            appearance="button"
            id="lightbox-close-button"
            aria-label="${this.msg('CLOSE_BUTTON')}"
            size="small"
            class="cascade-pop-up-close-button"
            @click="${this._dispatchLightBoxCloseEvent}"
            @keydown=${(e) => {
            if (e.key === 'Escape') {
                this._dispatchLightBoxCloseEvent;
            }
        }}
          >
            <moray-icon
              icon="dismiss"
              size="medium"
              aria-label="Dismiss Icon"
            ></moray-icon
          ></moray-button>
          <slot name="pop-up-content"></slot>
        </dialog>
      </div>
    `;
    }
    _openLightBox() {
        const dialog = this.shadowRoot?.querySelector('#cascade-popup');
        dialog?.showModal();
    }
    _dispatchLightBoxCloseEvent() {
        const event = new CustomEvent('CloseLightbox', {
            detail: {},
            bubbles: true,
            composed: true,
        });
        window.dispatchEvent(event);
    }
    _hideLightBox() {
        const dialog = this.shadowRoot?.querySelector('#cascade-popup');
        dialog.close();
    }
};
PopUp.styles = [cascade_pop_up_styles, colorUtils];
PopUp.dict = {
    CLOSE_BUTTON: 'close button',
};
PopUp = (0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* customElement */.Mo)('cascade-pop-up')
], PopUp);


;// CONCATENATED MODULE: ./src/components/lightbox/index.ts










const emptyProductData = {
    productID: '',
    cpu: '',
    gpu: '',
    memory: '',
    storage: '',
    retailers: [],
    variationIds: [],
    deviceImageUrl: '',
    deviceAltText: '',
    deviceName: '',
    configuration: '',
    hardCodedPrice: '',
    feature: [],
    skuId: '',
    brand: '',
};
let LightBox = class LightBox extends i18nMixin/* WithLocalization */.R {
    constructor() {
        super(...arguments);
        this.lightBoxContent = {
            lightBoxProductData: emptyProductData,
            localeSpecificData: {
                lightBoxDisclaimer: '',
                currencySymbol: '',
            },
            lightBoxProductVariationIdsData: [],
            lightBoxProductSpecificationTableHeaders: {},
            lightboxUniqueId: '',
        };
        /**
         * The visual color theme.
         *
         * @remarks
         * HTML Attribute: theme
         */
        this.theme = 'dark';
        this.isExpanded = false;
        this.flags = { yes: 'Yes', no: 'NO' };
        this._handleDispatchLightBoxContent = (event) => {
            const lightBoxContent = event.detail.lightBoxDetails;
            this.lightBoxContent = { ...lightBoxContent };
            if (this.lightBoxContent?.lightBoxProductVariationIdsData?.length > 1) {
                this.isExpanded = true;
            }
            this._showLightBox();
            window.addEventListener('CloseLightbox', this._handleCloseLightBox);
            window.addEventListener('keydown', this._handleKeyDown);
        };
        this._handleCloseLightBox = () => {
            this._closeLightBox();
        };
        this._handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                this._closeLightBox();
            }
        };
        this._checkOem = (brand, retailerName) => {
            return retailerName.toLocaleLowerCase().includes(brand.toLocaleLowerCase());
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        window.addEventListener('DispatchLightBoxContent', this._handleDispatchLightBoxContent);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('DispatchLightBoxContent', this._handleDispatchLightBoxContent);
    }
    renderRetailerItems() {
        return (0,lit/* html */.dy) ` <div class="light-box-retailer-placeholder">
      ${this.isExpanded
            ? (0,lit/* html */.dy) `
            <table
              id="product-specifications"
              aria-label="${this.msg('PRODUCT_SPECIFICATION')}"
              class="light-box-variants-data"
            >
              <!-- Table Header -->
              <thead class="light-box-variantsdata-head">
                <tr>
                  <th>
                    ${this.lightBoxContent
                .lightBoxProductSpecificationTableHeaders.price}
                  </th>
                  <th>
                    ${this.lightBoxContent
                .lightBoxProductSpecificationTableHeaders.secured}
                  </th>
                  <th>
                    ${this.lightBoxContent
                .lightBoxProductSpecificationTableHeaders.ram}
                  </th>
                  <th>
                    ${this.lightBoxContent
                .lightBoxProductSpecificationTableHeaders.storage}
                  </th>
                  <th>
                    ${this.lightBoxContent
                .lightBoxProductSpecificationTableHeaders.cpu}
                  </th>
                  <th>
                    ${this.lightBoxContent
                .lightBoxProductSpecificationTableHeaders.gpu}
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="light-box-variant-data-body">
                ${this.lightBoxContent?.lightBoxProductVariationIdsData?.map((card, index) => (0,lit/* html */.dy) `
                    <tr
                      class="light-box-variant-data-row ${this.lightBoxContent
                .lightBoxProductVariationIdsData.length > 1 &&
                index === 0
                ? 'variant-selected'
                : ''}"
                      data-product-name="${card.deviceName}"
                      data-product-id="${card.productID}"
                      data-prodcut-sku="${card.skuId}"
                    >
                      <td class="light-box-variant-data-cell">
                        ${this.lightBoxContent?.localeSpecificData
                ?.currencySymbol}${card.hardCodedPrice}
                      </td>
                      <td class="light-box-variant-data-cell">
                        ${card.feature.includes('SecuredcorePC')
                ? `${this.flags.yes}`
                : `${this.flags.no}`}
                      </td>
                      <td class="light-box-variant-data-cell">
                        ${card.memory.split(':')[1]}
                      </td>
                      <td class="light-box-variant-data-cell">
                        ${card.storage.split(':')[1]} SSD
                      </td>
                      <td class="light-box-variant-data-cell">
                        ${card.cpu.split(':')[1]}
                      </td>
                      <td class="light-box-variant-data-cell">
                        ${card.gpu.split(':')[1]}
                      </td>
                      <td class="light-box-variant-data-cell">
                        <moray-button
                          appearance="button"
                          id="${card.productID}-select"
                          class="light-box-variation-select-button"
                          @click="${(e) => this.handleProductSelect(e, card)}"
                          aria-label="${this.msg('SELECT')}"
                          data-bi-cN=${this.msg('SELECT')}
                          data-bi-ecn="Select"
                          data-bi-cT="Button"
                        >
                          ${this.msg('SELECT')}
                        </moray-button>
                      </td>
                    </tr>
                  `)}
              </tbody>
            </table>
          `
            : (0,lit/* html */.dy) ` ${this.lightBoxContent?.lightBoxProductData?.retailers?.map((card) => (0,lit/* html */.dy) `
              <div
                class="light-box-retailer-list"
                id="lightbox-retailer-list"
                aria-label="${this.msg('RETAILER_INFORMATION', {
                '0': card.retailerName,
            })}"
                data-retailer="${card.retailerName}"
                data-product-name="${this.lightBoxContent.lightBoxProductData
                .deviceName}"
                data-product-id="${this.lightBoxContent.lightBoxProductData
                .productID}"
                data-product-sku="${this.lightBoxContent.lightBoxProductData
                .skuId}"
                data-oem="${this._checkOem(this.lightBoxContent.lightBoxProductData.brand, card.retailerName)}"
              >
                <a href="${card.purchaseLink}" target="_blank">
                  <div class="light-box-retail-icon">
                    <img
                      src="${card.logo}"
                      alt="${this.msg('RETAILER_ICON')}"
                    />
                  </div>
                </a>
                <a href="${card.purchaseLink}" target="_blank"
                  ><p class="light-box-retail-link-text">
                    ${this.lightBoxContent?.localeSpecificData
                ?.currencySymbol}${card.price}
                  </p></a
                >
                <a href="${card.purchaseLink}" target="_blank">
                  <moray-button
                    appearance="button"
                    id="learn-more-${card.retailerName}"
                    aria-label="${this.msg('LEARN_MORE')}"
                    class="light-box-button-link"
                    data-bi-cN=${this.msg('LEARN_MORE')}
                    data-bi-ecn="Learn More"
                    data-bi-cT="Button"
                  >
                    ${this.msg('LEARN_MORE')}
                  </moray-button>
                </a>
              </div>
            `)}`}
    </div>`;
    }
    toggleIsExpanded() {
        this.isExpanded = !this.isExpanded;
    }
    renderExpandCollapseComponent() {
        return (0,lit/* html */.dy) `${this.lightBoxContent?.lightBoxProductVariationIdsData
            ?.length > 1
            ? (0,lit/* html */.dy) `<div class="light-box-expand-all">
          <moray-button
            appearance="action-trigger"
            id="lightbox-expand-all-collapse-all-${this.lightBoxContent
                .lightBoxProductData.productID}"
            @click=${this.toggleIsExpanded}
            data-bi-cN=${(this.msg('LESS'), this.msg('MORE_OPTIONS'))}
            data-bi-ecn="expand all collapse all"
            aria-label="${this.isExpanded
                ? this.msg('LESS')
                : this.msg('MORE_OPTIONS')}"
            data-bi-cT="Button"
          >
            ${this.isExpanded ? this.msg('LESS') : this.msg('MORE_OPTIONS')}
            ${this.isExpanded
                ? (0,lit/* html */.dy) ` <moray-icon
                  icon="Subtract-circle"
                  id="lightbox-subtract-circle"
                  aria-label="${this.msg('LESS')}"
                  class="light-box-more-options-icon"
                ></moray-icon>`
                : (0,lit/* html */.dy) ` <moray-icon
                  icon="Add-circle"
                  id="lightbox-add-circle"
                  aria-label="${this.msg('MORE_OPTIONS')}"
                  class="light-box-more-options-icon"
                >
                </moray-icon>`}
          </moray-button>
        </div>`
            : (0,lit/* html */.dy) ``}`;
    }
    renderModalHeaderItems() {
        return (0,lit/* html */.dy) ` <div class="light-box-productlist-modal-header">
      <cascade-heading
        id="lightbox-device-name-${this.lightBoxContent.lightBoxProductData
            .productID}"
        aria-label="${this.msg('DEVICE_NAME')}"
        class="light-box-heading-word-break"
        headingText="${this.lightBoxContent?.lightBoxProductData?.deviceName}"
        tag="h2"
        slot="heading"
        >${this.lightBoxContent?.lightBoxProductData
            ?.deviceName}</cascade-heading
      >
      <p class="light-box-config">
        ${this.lightBoxContent?.lightBoxProductVariationIdsData?.length > 1
            ? this.msg('SELECT_CONFIGURATION')
            : this.msg('CONFIGURATION')}
      </p>
      <div class="light-box-expandall-and-desc-container">
        <p class="light-box-desc">
          ${this.lightBoxContent?.lightBoxProductData?.configuration}
        </p>
        ${this.renderExpandCollapseComponent()}
      </div>
    </div>`;
    }
    renderImageContainer() {
        return (0,lit/* html */.dy) `
  <span id="lightbox-device-image" aria-label = "${this.msg('PRODUCT_IMAGE')}" class = "light-box-retailer-log">
  <img alt="${this.lightBoxContent?.lightBoxProductData
            ?.deviceAltText}" class = "light-box-retail-image" src="${this
            .lightBoxContent?.lightBoxProductData.deviceImageUrl}" />
  </spn>
  `;
    }
    renderFooterComponent() {
        return (0,lit/* html */.dy) ` <div
      id="lightbox-disclaimer"
      class="light-box-privacy-footer"
      aria-label="${this.msg('LIGHTBOX_DISCLAIMER')}"
    >
      <p class="light-box-dialog-footer">
        ${this.lightBoxContent?.localeSpecificData?.lightBoxDisclaimer}
      </p>
    </div>`;
    }
    render() {
        return (0,lit/* html */.dy) `
      <cascade-pop-up id="lightbox-component">
        <div slot="pop-up-content" class="lightbox">
          ${this.renderImageContainer()} ${this.renderModalHeaderItems()}
          ${this.renderRetailerItems()} ${this.renderFooterComponent()}
        </div>
      </cascade-pop-up>
    `;
    }
    handleProductSelect(e, card) {
        this.lightBoxContent.lightBoxProductData = card;
        this.isExpanded = !this.isExpanded;
        const expandComponent = this.shadowRoot?.querySelector('#expand-collapse');
        expandComponent.isExpanded = false;
    }
    _showLightBox() {
        const dialog = this.shadowRoot?.querySelector('#lightbox-component');
        document.body.classList.add('lightbox-dialog-open');
        const a = document.getElementsByClassName('lightbox-dialog-open')[0];
        a.style.overflow = 'hidden';
        if (dialog) {
            dialog?._openLightBox();
        }
    }
    _closeLightBox() {
        const dialog = this.shadowRoot?.querySelector('#lightbox-component');
        const a = document.getElementsByClassName('lightbox-dialog-open')[0];
        a?.removeAttribute('style');
        document.body.classList.remove('lightbox-dialog-open');
        this.isExpanded = false;
        if (dialog) {
            dialog?._hideLightBox();
        }
        window.removeEventListener('CloseLightbox', this._handleCloseLightBox);
        window.removeEventListener('keydown', this._handleKeyDown);
    }
};
LightBox.styles = [lightbox_styles, colorUtils];
LightBox.dict = {
    MORE_OPTIONS: 'MORE OPTIONS',
    LESS: 'LESS',
    LEARN_MORE: 'Learn More',
    SELECT: 'SELECT',
    RETAILER_ICON: 'Retailer Icon',
    SELECT_CONFIGURATION: 'Select a Configuration',
    CONFIGURATION: 'Configuration',
    PRODUCT_SPECIFICATION: 'Product Specifications',
    RETAILER_INFORMATION: 'Retailer Information for {0}',
    DEVICE_NAME: 'Device Name',
    PRODUCT_IMAGE: 'Product image',
    LIGHTBOX_DISCLAIMER: 'Lightbox Disclaimer',
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], LightBox.prototype, "lightBoxContent", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)()
], LightBox.prototype, "theme", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], LightBox.prototype, "isExpanded", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], LightBox.prototype, "flags", void 0);
LightBox = (0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* customElement */.Mo)('cascade-lightbox-container')
], LightBox);



/***/ }),

/***/ 2576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y$: () => (/* binding */ getI18nManager)
/* harmony export */ });
/* unused harmony exports I18nManager, i18nValidate */
/**
 * @desc A singleton class that manages the localization settings.
 * @note "lang" and "dir" settings are only checked once at instantiation.
 */
class I18nManager {
    constructor() {
        this.lang = i18nValidate('lang', document?.documentElement?.getAttribute('lang'));
        this.dir = i18nValidate('dir', document?.documentElement?.getAttribute('dir'));
        const documentElementObserver = new MutationObserver(() => {
            document.dispatchEvent(new CustomEvent('localeChanged', {
                detail: {
                    lang: (this.lang = i18nValidate('lang', document.documentElement.lang)),
                    dir: (this.dir = i18nValidate('dir', document.documentElement.dir)),
                },
            }));
        });
        documentElementObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir', 'lang'],
        });
    }
}
function i18nValidate(type, value) {
    if (type === 'lang') {
        if (!value)
            return 'en-us';
        return value.includes('-') && value.length >= 5
            ? value.toLowerCase()
            : 'en-us';
    }
    if (type === 'dir') {
        if (!value)
            return 'ltr';
        return value.match(/^(ltr|rtl)$/i) ? value.toLowerCase() : 'ltr';
    }
    console.warn('Invalid validation type!');
    return '';
}
const getI18nManager = (function () {
    let i18nManager;
    return function () {
        if (!i18nManager)
            i18nManager = new I18nManager();
        return i18nManager;
    };
})();


/***/ }),

/***/ 4638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ WithLocalization)
/* harmony export */ });
/* unused harmony export I18nMixin */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7582);
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8922);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9662);
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1697);
/* harmony import */ var _i18nManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2576);





const I18nMixin = (superClass) => {
    class SubClass extends superClass {
        constructor() {
            super(...arguments);
            this.i18nManager = (0,_i18nManager__WEBPACK_IMPORTED_MODULE_2__/* .getI18nManager */ .Y$)();
            this.locChangeHandler = (event) => {
                this.lang = event.detail.lang;
                this.dir = event.detail.dir;
                this.requestUpdate();
            };
            this.errorHandler = (type, message) => {
                console.warn(`I18nMixin ${type}: ${message}`);
                if (typeof process !== 'undefined' &&
                    process?.env?.STORYBOOK &&
                    type === 'ERROR')
                    throw new Error(message);
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.lang = this.i18nManager?.lang || 'en-us';
            this.dir = this.i18nManager?.dir || 'ltr';
            document.addEventListener('localeChanged', this.locChangeHandler);
            Object.keys(this.translations || {})?.forEach((key) => {
                const { dict } = this.constructor;
                if (!dict || !Object.keys(dict).length)
                    this.errorHandler('ERROR', `Found translations but dictionary is not defined`);
                if (dict && !(key in dict))
                    this.errorHandler('ERROR', `Translation passed in for wrong or obsolete key: '${key}'`);
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            document.removeEventListener('localeChanged', this.locChangeHandler);
        }
        /**
         * @desc Returns a translated message given a key to the static dictionary.
         * @param {string} key - The key of the string to translate.
         * @param {Record<string, any>} interpolations - The values to interpolate into the string.
         * @return {string} The translated string.
         */
        msg(key, interpolations) {
            /* istanbul ignore if */
            if (!key)
                return '';
            const fallback = this.constructor.dict?.[key] || '';
            if (!this.lang)
                return fallback;
            const { dict } = this.constructor;
            if (dict && !(key in dict))
                this.errorHandler('ERROR', `Invalid key: '${key}'`);
            let message = this.translations?.[key];
            if (!message) {
                if (this.translations)
                    this.errorHandler('WARNING', `Missing translation for key: '${key}'`);
                message = fallback;
            }
            let interpolated = message;
            try {
                interpolated = this.format(message, interpolations);
            }
            catch (e) {
                this.errorHandler('ERROR', `Error interpolating '${message}'\n${e}`);
            }
            return interpolated ?? message ?? '';
        }
        /**
         * @desc Returns a message interpolated with the provided indexed values.
         * @param {string} message - The format of the string.
         * @param {Record<string, any>} interpolations - The values to interpolate into the string.
         * @return {string} The formatted string.
         */
        format(message, interpolations) {
            const formatter = new intl_messageformat__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP(message, this.lang);
            return formatter.format(interpolations);
        }
    }
    SubClass.dict = {};
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({ type: Object, reflect: false })
    ], SubClass.prototype, "translations", void 0);
    return SubClass;
};
const WithLocalization = I18nMixin(lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_0__/* .LitElement */ .oi);


/***/ }),

/***/ 5270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* eslint-disable no-negated-condition, no-undef, no-console */
/**
 * Class decorator factory that checks whether a custom element is already registered.
 * If it is not, it defines the decorated class as a custom element.
 *
 * ```js
 * @defineCustomElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const defineCustomElement = (tagName) => (classOrTarget, context) => {
    if (customElements.get(tagName)) {
        console.warn(`${tagName} is already defined.`);
        return;
    }
    if (context !== undefined) {
        context.addInitializer(() => {
            customElements.define(tagName, classOrTarget);
        });
    }
    else {
        customElements.define(tagName, classOrTarget);
    }
};


/***/ }),

/***/ 8701:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* binding */ r),
/* harmony export */   ec: () => (/* binding */ S),
/* harmony export */   i1: () => (/* binding */ c),
/* harmony export */   iv: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports CSSResult, supportsAdoptingStyleSheets */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n(o,t,s)},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map


/***/ }),

/***/ 5713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ t)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};
//# sourceMappingURL=custom-element.js.map


/***/ }),

/***/ 760:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export standardProperty */
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8732);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:_reactive_element_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultConverter */ .Ts,reflect:!1,hasChanged:_reactive_element_js__WEBPACK_IMPORTED_MODULE_0__/* .notEqual */ .Qu},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
//# sourceMappingURL=property.js.map


/***/ }),

/***/ 9158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .C)({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map


/***/ }),

/***/ 8732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.$m),
/* harmony export */   Qu: () => (/* binding */ f),
/* harmony export */   Ts: () => (/* binding */ u),
/* harmony export */   fl: () => (/* binding */ b),
/* harmony export */   iv: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.iv)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8701);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i,defineProperty:e,getOwnPropertyDescriptor:r,getOwnPropertyNames:h,getOwnPropertySymbols:o,getPrototypeOf:n}=Object,a=globalThis,c=a.trustedTypes,l=c?c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,s)=>!i(t,s),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...h(t),...o(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .i1)(s))}else void 0!==s&&i.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .i1)(s));return i}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .adoptStyles */ .ec)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");
//# sourceMappingURL=reactive-element.js.map


/***/ }),

/***/ 5113:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);
/* harmony import */ var _button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4609);
/* harmony import */ var _vfi_CyPinwDN_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2584);
/* harmony import */ var _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8187);




const t = {
  paddingBlock: "0",
  paddingInline: "0",
  gap: "0.4375em",
  fontWeight: "600",
  fontSize: "1rem",
  color: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_3__.a,
  // TODO: Work Item 11127 update to inactive color token when it becomes available
  inactiveColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_3__.b,
  disabledOpacity: "0.3"
}, p = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}']) a,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}']) button {
    border: none;
    padding-block: var(
      --ds-action-trigger-padding-block,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.paddingBlock)}
    );
    padding-inline: var(
      --ds-action-trigger-padding-inline,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.paddingInline)}
    );
    background: transparent;
    gap: var(--ds-action-trigger-gap, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.gap)});
    font-weight: var(
      --ds-action-trigger-font-weight,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.fontWeight)}
    );
    font-size: var(
      --ds-action-trigger-font-size,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.fontSize)}
    );
    color: var(
      --ds-action-trigger-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.color)}
      )
    );
    text-decoration: underline;
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}']) a:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}']) button:focus {
    ${_vfi_CyPinwDN_mjs__WEBPACK_IMPORTED_MODULE_2__.v}
  }

  /* TODO: disabled and inactive styles for button only, they should not apply to anchors */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}'])
    a.action-trigger--no-underline,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}'])
    button.action-trigger--no-underline {
    text-decoration: none;
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}'][disabled]) button {
    opacity: var(
      --ds-action-trigger-disabled-opacity,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.disabledOpacity)}
    );
    background-image: none;
    box-shadow: none;
  }

  :host([appearance='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(_button_DC9AV08H_mjs__WEBPACK_IMPORTED_MODULE_1__.B.actionTrigger)}'].inactive) button {
    color: var(
      --ds-action-trigger-inactive-color,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.inactiveColor)}
    );
    text-decoration: none;
  }
`;



/***/ }),

/***/ 8641:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ r)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r = (t, o, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof o != "object" && Object.defineProperty(t, o, e), e);



/***/ }),

/***/ 4609:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ n),
/* harmony export */   a: () => (/* binding */ S),
/* harmony export */   b: () => (/* binding */ P),
/* harmony export */   c: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);
/* harmony import */ var _vfi_CyPinwDN_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2584);
/* harmony import */ var _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8187);



const n = {
  actionTrigger: "action-trigger",
  button: "button",
  buttonFaint: "button--faint",
  buttonOutline: "button--outline",
  buttonLink: "button--link",
  mediaControl: "media-control",
  mediaControlLight: "media-control--light"
}, i = {
  small: "small",
  medium: "medium",
  large: "large"
}, t = {
  gap: "0.4375em",
  fontWeight: "600",
  borderWidth: "0.125rem",
  borderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  borderRadius: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.R,
  backgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.h,
  color: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.i,
  depth: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.D,
  hoverBorderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  hoverBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.h,
  hoverBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-strong-hover, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.o}), var(--ds-theme-background-accent-strong-hover, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.o}))`,
  hoverColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.i,
  hoverDepth: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.p,
  disabledOpacity: "0.3",
  defaultPaddingBlockEnd: "0.625rem",
  defaultPaddingBlockStart: "0.625rem",
  defaultPaddingInlineEnd: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  defaultPaddingInlineStart: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  defaultFontSize: "1rem",
  smallPaddingBlockEnd: "0.5625rem",
  smallPaddingBlockStart: "0.5625rem",
  smallPaddingInlineEnd: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  smallPaddingInlineStart: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  smallFontSize: "0.875rem",
  mediumPaddingBlockEnd: "0.625rem",
  mediumPaddingBlockStart: "0.625rem",
  mediumPaddingInlineEnd: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  mediumPaddingInlineStart: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  mediumFontSize: "1rem",
  largePaddingBlockEnd: "0.8125rem",
  largePaddingBlockStart: "0.8125rem",
  largePaddingInlineEnd: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  largePaddingInlineStart: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.e,
  largeFontSize: "1.125rem",
  pillBorderRadius: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.q,
  outlineBorderColor: "currentcolor",
  outlineBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  outlineColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
  outlineHoverBorderColor: "currentcolor",
  outlineHoverBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  outlineHoverBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.r}), var(--ds-theme-background-accent-subtle-normal, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.r}))`,
  outlineHoverColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
  faintBorderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  faintBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  faintBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.r}), var(--ds-theme-background-accent-subtle-normal, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.r}))`,
  faintColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
  faintHoverBorderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  faintHoverBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  faintHoverBackgroundImage: "none",
  faintHoverColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
  linkColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
  linkInactiveColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.s,
  // TODO: replace with theme token when available
  activeBorderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.t,
  activeBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.l,
  activeBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.r}), var(--ds-theme-background-accent-subtle-normal, ${_variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.r}))`,
  activeColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
  outlineActiveBorderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  outlineActiveBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.u,
  outlineActiveBackgroundImage: "none",
  outlineActiveColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.i,
  faintActiveBorderColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.n,
  faintActiveBackgroundColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.u,
  faintActiveBackgroundImage: "none",
  faintActiveColor: _variables_BKxyUZOC_mjs__WEBPACK_IMPORTED_MODULE_2__.i
}, P = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  /**
 * Remove the default 'border-radius' that macOS Chrome adds
 * Details at https://github.com/twbs/bootstrap/issues/24093
 */
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  display: inline-flex;
  align-items: center;
  border: 0 solid transparent;
  cursor: pointer;
`, S = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']) a,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']) button {
    justify-content: center;
    gap: var(--ds-button-gap, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.gap)});
    font-weight: var(--ds-button-font-weight, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.fontWeight)});
    border-width: var(--ds-button-border-width, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.borderWidth)});
    border-color: var(
      --ds-button-border-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.borderColor)})
    );
    border-radius: var(
      --ds-button-border-radius,
      var(--ds-radii-10, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.borderRadius)})
    );
    background-color: var(
      --ds-button-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.backgroundColor)}
      )
    );
    color: var(
      --ds-button-color,
      var(--ds-theme-foreground-accent-strong-normal, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.color)})
    );
    text-decoration: none;
    line-height: 1;
    padding-inline-end: var(
      --ds-button-default-padding-inline-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.defaultPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-default-padding-inline-start,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.defaultPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-default-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.defaultPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-default-padding-block-start,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.defaultPaddingBlockStart)}
    );
    font-size: var(
      --ds-button-default-font-size,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.defaultFontSize)}
    );
    box-shadow: var(
      --ds-button-box-shadow,
      var(--ds-depth-none, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.depth)})
    );
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']) a:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']) button:focus {
    ${_vfi_CyPinwDN_mjs__WEBPACK_IMPORTED_MODULE_1__.d}
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']:not([disabled])) a:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']:not([disabled])) button:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']:not([disabled])) a:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-hover-border-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.hoverBorderColor)})
    );
    background-color: var(
      --ds-button-hover-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.hoverBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-hover-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.hoverBackgroundImage)}
    );
    color: var(
      --ds-button-hover-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.hoverColor)}
      )
    );
    box-shadow: var(
      --ds-button-hover-box-shadow,
      var(--ds-depth-4, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.hoverDepth)})
    );
  }

  /* TODO: button only styles (do not apply to anchor styled buttons)
   *  - inactive
   *  - disabled
   *  - link button
   *  - active
   */

  /* ------- Button disabled -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][disabled]) button {
    opacity: var(--ds-button-disabled-opacity, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.disabledOpacity)});
    background-image: none;
    box-shadow: none;
  }

  /* ------- Button active -------- */

  :host([appearance='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][active]:not([disabled])) button {
    border-color: var(
      --ds-button-active-border-color,
      var(
        --ds-theme-border-accent-strong-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.activeBorderColor)}
      )
    );
    background-color: var(
      --ds-button-active-background-color,
      var(
        --ds-theme-background-neutral-fade,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.activeBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-active-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.activeBackgroundImage)}
    );
    color: var(
      --ds-button-active-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.activeColor)}
      )
    );
  }

  /* ------- Button active HCM -------- */

  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}']:not(
          [appearance='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}']
        )[active]:not([disabled])
    )
    button {
    @media (forced-colors: active) {
      color: CanvasText;
      background-color: SelectedItem;
    }
  }

  /* ------- Button small -------- */

  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.small)}']
    )
    a,
  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.small)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-small-padding-inline-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.smallPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-small-padding-inline-start,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.smallPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-small-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.smallPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-small-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.smallPaddingBlockEnd)}
    );
    font-size: var(--ds-button-small-font-size, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.smallFontSize)});
  }

  /* ------- Button medium -------- */

  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.medium)}']
    )
    a,
  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.medium)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-medium-padding-inline-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.mediumPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-medium-padding-inline-start,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.mediumPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-medium-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.mediumPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-medium-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.mediumPaddingBlockEnd)}
    );
    font-size: var(
      --ds-button-medium-font-size,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.mediumFontSize)}
    );
  }

  /* ------- Button large -------- */

  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.large)}']
    )
    a,
  :host(
      [appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][size='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(i.large)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-large-padding-inline-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.largePaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-large-padding-inline-start,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.largePaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-large-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.largePaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-large-padding-block-end,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.largePaddingBlockEnd)}
    );
    font-size: var(--ds-button-large-font-size, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.largeFontSize)});
  }

  /* ------- Button block -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][block]) a,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][block]) button {
    display: flex;
    width: 100%;
  }

  /* ------- Button pill -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][pill]) a,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.button)}'][pill]) button {
    border-radius: var(
      --ds-button-pill-border-radius,
      var(--ds-radii-pill, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.pillBorderRadius)})
    );
  }

  /* ------- Button outline -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}']) a,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}']) button {
    background-color: var(
      --ds-button-outline-background-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineBackgroundColor)})
    );
    color: var(
      --ds-button-outline-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineColor)}
      )
    );
    border-color: var(
      --ds-button-outline-border-color,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineBorderColor)}
    );
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}']:not([disabled])) a:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}']:not([disabled])) button:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}']:not([disabled])) a:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-outline-hover-border-color,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineHoverBorderColor)}
    );
    background-color: var(
      --ds-button-outline-hover-background-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineHoverBackgroundColor)})
    );
    background-image: var(
      --ds-button-outline-hover-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineHoverBackgroundImage)}
    );
    color: var(
      --ds-button-outline-hover-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineHoverColor)}
      )
    );
    box-shadow: none;
  }

  /* ------- Button outline active -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}'][active]) button,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}'][active]) button:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonOutline)}'][active]) button:hover {
    color: var(
      --ds-button-outline-active-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineActiveColor)}
      )
    );
    border-color: var(
      --ds-button-outline-active-border-color,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineActiveBorderColor)}
    );
    background-color: var(
      --ds-button-outline-active-background-color,
      var(
        --ds-theme-background-base-color,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineActiveBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-outline-active-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.outlineActiveBackgroundImage)}
    );
  }

  /* ------- Button faint -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}']) a,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}']) button {
    background-color: var(
      --ds-button-faint-background-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintBackgroundColor)})
    );
    background-image: var(
      --ds-button-faint-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintBackgroundImage)}
    );
    color: var(
      --ds-button-faint-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintColor)}
      )
    );
    border-color: var(
      --ds-button-faint-border-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintBorderColor)})
    );
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}']:not([disabled])) a:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}']:not([disabled])) button:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}']:not([disabled])) a:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-faint-hover-border-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintHoverBorderColor)})
    );
    background-color: var(
      --ds-button-faint-hover-background-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintHoverBackgroundColor)})
    );
    background-image: var(
      --ds-button-faint-hover-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintHoverBackgroundImage)}
    );
    color: var(
      --ds-button-faint-hover-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintHoverColor)}
      )
    );
  }

  /* ------- Button faint active -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}'][active]) button,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}'][active]) button:focus,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonFaint)}'][active]) button:hover {
    color: var(
      --ds-button-faint-active-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintActiveColor)}
      )
    );
    border-color: var(
      --ds-button-faint-active-border-color,
      var(--ds-color-transparent, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintActiveBorderColor)})
    );
    background-color: var(
      --ds-button-faint-active-background-color,
      var(
        --ds-theme-background-base-color,
        ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintActiveBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-faint-active-background-image,
      ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.faintActiveBackgroundImage)}
    );
  }

  /* ------- Button link -------- */

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}']) button,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}']:not([disabled])) button:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}']:not([disabled])) button:focus {
    border: none;
    background: transparent;
    border-radius: 0;
    color: var(
      --ds-button-link-color,
      var(--ds-theme-foreground-accent-subtle-normal, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.linkColor)})
    );
    text-decoration: underline;
    box-shadow: none;
  }

  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}'][inactive]) button,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}'][inactive]:not([disabled]))
    button:hover,
  :host([appearance^='${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(n.buttonLink)}'][inactive]:not([disabled]))
    button:focus {
    opacity: 1;
    text-decoration: none;
    color: var(
      --ds-button-link-inactive-color,
      var(--ds-color-gray-500, ${(0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t.linkInactiveColor)})
    );
    cursor: default;
  }
`;



/***/ }),

/***/ 7864:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, c = (e) => (...t) => ({ _$litDirective$: e, values: t });
class d {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, n) {
    this._$Ct = t, this._$AM = r, this._$Ci = n;
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u = c(class extends d {
  constructor(e) {
    var t;
    if (super(e), e.type !== a.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var n, i;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((s) => s !== "")));
      for (const s in t)
        t[s] && !((n = this.nt) != null && n.has(s)) && this.st.add(s);
      return this.render(t);
    }
    const r = e.element.classList;
    for (const s of this.st)
      s in t || (r.remove(s), this.st.delete(s));
    for (const s in t) {
      const o = !!t[s];
      o === this.st.has(s) || (i = this.nt) != null && i.has(s) || (o ? (r.add(s), this.st.add(s)) : (r.remove(s), this.st.delete(s)));
    }
    return _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.w;
  }
});



/***/ }),

/***/ 9366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const m = (o) => o ?? _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.T;



/***/ }),

/***/ 2017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d = { attribute: !0, type: String, converter: _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.u, reflect: !1, hasChanged: _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.f }, h = (r = d, n, t) => {
  const { kind: s, metadata: a } = t;
  let o = globalThis.litPropertyMetadata.get(a);
  if (o === void 0 && globalThis.litPropertyMetadata.set(a, o = /* @__PURE__ */ new Map()), o.set(t.name, r), s === "accessor") {
    const { name: e } = t;
    return { set(i) {
      const c = n.get.call(this);
      n.set.call(this, i), this.requestUpdate(e, c, r);
    }, init(i) {
      return i !== void 0 && this.P(e, void 0, r), i;
    } };
  }
  if (s === "setter") {
    const { name: e } = t;
    return function(i) {
      const c = this[e];
      n.call(this, i), this.requestUpdate(e, c, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function f(r) {
  return (n, t) => typeof t == "object" ? h(r, n, t) : ((s, a, o) => {
    const e = a.hasOwnProperty(o);
    return a.constructor.createProperty(o, e ? { ...s, wrapped: !0 } : s), e ? Object.getOwnPropertyDescriptor(a, o) : void 0;
  })(r, n, t);
}



/***/ }),

/***/ 4331:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _base_CwU3eNq_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8641);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function d(t) {
  return (c, i) => {
    const { slot: r, selector: o } = t ?? {}, l = "slot" + (r ? `[name=${r}]` : ":not([name])");
    return (0,_base_CwU3eNq_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(c, i, { get() {
      var s;
      const e = (s = this.renderRoot) == null ? void 0 : s.querySelector(l), n = (e == null ? void 0 : e.assignedElements(t)) ?? [];
      return o === void 0 ? n : n.filter((m) => m.matches(o));
    } });
  };
}



/***/ }),

/***/ 3782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _base_CwU3eNq_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8641);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function m(t) {
  return (n, s) => {
    const { slot: o } = t ?? {}, u = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return (0,_base_CwU3eNq_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(n, s, { get() {
      var r;
      const e = (r = this.renderRoot) == null ? void 0 : r.querySelector(u);
      return (e == null ? void 0 : e.assignedNodes(t)) ?? [];
    } });
  };
}



/***/ }),

/***/ 4385:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ d),
/* harmony export */   a: () => (/* binding */ ot),
/* harmony export */   f: () => (/* binding */ tt),
/* harmony export */   i: () => (/* binding */ Ct),
/* harmony export */   r: () => (/* binding */ Ut),
/* harmony export */   s: () => (/* binding */ R),
/* harmony export */   u: () => (/* binding */ I),
/* harmony export */   w: () => (/* binding */ v),
/* harmony export */   x: () => (/* binding */ Pt)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = globalThis, j = T.ShadowRoot && (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, D = Symbol(), B = /* @__PURE__ */ new WeakMap();
let Y = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== D)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (j && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = B.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && B.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ot = (n) => new Y(typeof n == "string" ? n : n + "", void 0, D), Ct = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, o) => s + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[o + 1], n[0]);
  return new Y(e, n, D);
}, ht = (n, t) => {
  if (j)
    n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = T.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
    }
}, W = j ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return ot(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: lt, defineProperty: at, getOwnPropertyDescriptor: ct, getOwnPropertyNames: dt, getOwnPropertySymbols: pt, getPrototypeOf: $t } = Object, f = globalThis, V = f.trustedTypes, ut = V ? V.emptyScript : "", M = f.reactiveElementPolyfillSupport, b = (n, t) => n, I = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? ut : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, tt = (n, t) => !lt(n, t), q = { attribute: !0, type: String, converter: I, reflect: !1, hasChanged: tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), f.litPropertyMetadata ?? (f.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class g extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && at(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = ct(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(r) {
      const a = i == null ? void 0 : i.call(this);
      o.call(this, r), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(b("elementProperties")))
      return;
    const t = $t(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(b("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(b("properties"))) {
      const e = this.properties, s = [...dt(e), ...pt(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [s, i] of e)
          this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(W(i));
    } else
      t !== void 0 && e.push(W(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys())
      this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ht(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : I).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : I;
      this._$Em = i, this[i] = a.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? tt)(this[t], e))
        return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep)
          this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [o, r] of i)
          r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[b("elementProperties")] = /* @__PURE__ */ new Map(), g[b("finalized")] = /* @__PURE__ */ new Map(), M == null || M({ ReactiveElement: g }), (f.reactiveElementVersions ?? (f.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = globalThis, N = w.trustedTypes, J = N ? N.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, et = "$lit$", _ = `lit$${(Math.random() + "").slice(9)}$`, st = "?" + _, _t = `<${st}>`, y = document, C = () => y.createComment(""), P = (n) => n === null || typeof n != "object" && typeof n != "function", it = Array.isArray, ft = (n) => it(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", k = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, K = /-->/g, Z = />/g, A = RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), F = /'/g, G = /"/g, nt = /^(?:script|style|textarea|title)$/i, At = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), Pt = At(1), v = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), Q = /* @__PURE__ */ new WeakMap(), m = y.createTreeWalker(y, 129);
function rt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return J !== void 0 ? J.createHTML(t) : t;
}
const mt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = S;
  for (let a = 0; a < e; a++) {
    const h = n[a];
    let c, p, l = -1, $ = 0;
    for (; $ < h.length && (r.lastIndex = $, p = r.exec(h), p !== null); )
      $ = r.lastIndex, r === S ? p[1] === "!--" ? r = K : p[1] !== void 0 ? r = Z : p[2] !== void 0 ? (nt.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = A) : p[3] !== void 0 && (r = A) : r === A ? p[0] === ">" ? (r = i ?? S, l = -1) : p[1] === void 0 ? l = -2 : (l = r.lastIndex - p[2].length, c = p[1], r = p[3] === void 0 ? A : p[3] === '"' ? G : F) : r === G || r === F ? r = A : r === K || r === Z ? r = S : (r = A, i = void 0);
    const u = r === A && n[a + 1].startsWith("/>") ? " " : "";
    o += r === S ? h + _t : l >= 0 ? (s.push(c), h.slice(0, l) + et + h.slice(l) + _ + u) : h + _ + (l === -2 ? a : u);
  }
  return [rt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class U {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const a = t.length - 1, h = this.parts, [c, p] = mt(t, e);
    if (this.el = U.createElement(c, s), m.currentNode = this.el.content, e === 2) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = m.nextNode()) !== null && h.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const l of i.getAttributeNames())
            if (l.endsWith(et)) {
              const $ = p[r++], u = i.getAttribute(l).split(_), H = /([.?@])?(.*)/.exec($);
              h.push({ type: 1, index: o, name: H[2], strings: u, ctor: H[1] === "." ? gt : H[1] === "?" ? vt : H[1] === "@" ? Et : O }), i.removeAttribute(l);
            } else
              l.startsWith(_) && (h.push({ type: 6, index: o }), i.removeAttribute(l));
        if (nt.test(i.tagName)) {
          const l = i.textContent.split(_), $ = l.length - 1;
          if ($ > 0) {
            i.textContent = N ? N.emptyScript : "";
            for (let u = 0; u < $; u++)
              i.append(l[u], C()), m.nextNode(), h.push({ type: 2, index: ++o });
            i.append(l[$], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === st)
          h.push({ type: 2, index: o });
        else {
          let l = -1;
          for (; (l = i.data.indexOf(_, l + 1)) !== -1; )
            h.push({ type: 7, index: o }), l += _.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(n, t, e = n, s) {
  var r, a;
  if (t === v)
    return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = P(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = E(n, i._$AS(n, t.values), i, s)), t;
}
class yt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? y).importNode(e, !0);
    m.currentNode = i;
    let o = m.nextNode(), r = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (r === h.index) {
        let c;
        h.type === 2 ? c = new x(o, o.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (c = new St(o, this, t)), this._$AV.push(c), h = s[++a];
      }
      r !== (h == null ? void 0 : h.index) && (o = m.nextNode(), r++);
    }
    return m.currentNode = y, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class x {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), P(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== v && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ft(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== d && P(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = U.createElement(rt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i)
      this._$AH.p(e);
    else {
      const r = new yt(i, this), a = r.u(this.options);
      r.p(e), this.T(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Q.get(t.strings);
    return e === void 0 && Q.set(t.strings, e = new U(t)), e;
  }
  k(t) {
    it(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new x(this.S(C()), this.S(C()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class O {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = E(this, t, e, 0), r = !P(t) || t !== this._$AH && t !== v, r && (this._$AH = t);
    else {
      const a = t;
      let h, c;
      for (t = o[0], h = 0; h < o.length - 1; h++)
        c = E(this, a[s + h], e, h), c === v && (c = this._$AH[h]), r || (r = !P(c) || c !== this._$AH[h]), c === d ? t = d : t !== d && (t += (c ?? "") + o[h + 1]), this._$AH[h] = c;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class gt extends O {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class vt extends O {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Et extends O {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? d) === v)
      return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class St {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const L = w.litHtmlPolyfillSupport;
L == null || L(U, x), (w.litHtmlVersions ?? (w.litHtmlVersions = [])).push("3.1.2");
const bt = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new x(t.insertBefore(C(), o), o, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class R extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = bt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return v;
  }
}
var X;
R._$litElement$ = !0, R.finalized = !0, (X = globalThis.litElementHydrateSupport) == null || X.call(globalThis, { LitElement: R });
const z = globalThis.litElementPolyfillSupport;
z == null || z({ LitElement: R });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * Replacement for Lit's @customElement decorator
 *
 * Checks whether a custom element has already been registered
 * before attempting to register it.
 *
 * Source:
 * https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts
 *
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ut = (n) => (t, e) => {
  if (customElements.get(n)) {
    console.warn(`${n} is already defined.`);
    return;
  }
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(n, t);
  }) : customElements.define(n, t);
};



/***/ }),

/***/ 8934:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2017);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(t) {
  return (0,_property_CfNGmgjg_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({ ...t, state: !0, attribute: !1 });
}



/***/ }),

/***/ 8187:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ d),
/* harmony export */   E: () => (/* binding */ t),
/* harmony export */   F: () => (/* binding */ l),
/* harmony export */   R: () => (/* binding */ h),
/* harmony export */   S: () => (/* binding */ i),
/* harmony export */   T: () => (/* binding */ w),
/* harmony export */   a: () => (/* binding */ R),
/* harmony export */   b: () => (/* binding */ P),
/* harmony export */   e: () => (/* binding */ B),
/* harmony export */   f: () => (/* binding */ v),
/* harmony export */   h: () => (/* binding */ N),
/* harmony export */   i: () => (/* binding */ G),
/* harmony export */   j: () => (/* binding */ S),
/* harmony export */   k: () => (/* binding */ p),
/* harmony export */   l: () => (/* binding */ A),
/* harmony export */   m: () => (/* binding */ n),
/* harmony export */   n: () => (/* binding */ s),
/* harmony export */   o: () => (/* binding */ C),
/* harmony export */   p: () => (/* binding */ m),
/* harmony export */   q: () => (/* binding */ b),
/* harmony export */   r: () => (/* binding */ k),
/* harmony export */   s: () => (/* binding */ e),
/* harmony export */   t: () => (/* binding */ x),
/* harmony export */   u: () => (/* binding */ y),
/* harmony export */   w: () => (/* binding */ g),
/* harmony export */   y: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports A, B, C, c, d, g, v, x, z */
const a = "#e6e6e6", o = "#d2d2d2", r = "#a2a2a2", e = "#757575", s = "transparent", n = "#000", t = "#fff", c = "#ffb900", m = "0 0 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0 0.25rem 0 rgba(0, 0, 0, 0.12)", g = "0 0.063rem 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12)", l = "0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12), 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.12)", d = "0 0 0 0 rgba(0, 0, 0, 0.12), 0 0 0 0 rgba(0, 0, 0, 0.12)", u = "0", h = "0.25rem", b = "60rem", f = "0", T = "0.25rem", i = "0.5rem", p = "1rem", S = "1.5rem", B = "0.75rem", N = "#0067b8", C = "rgba(0, 0, 0, 0.1)", k = "rgba(0, 103, 184, 0.15)", A = "#fff", F = "#f2f2f2", y = "#0067b8", D = "#fff", G = "#fff", R = "#0067b8", v = "#000", w = "#000", x = "#0067b8", P = "#757575", j = "#d2d2d2";



/***/ }),

/***/ 2584:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ f),
/* harmony export */   d: () => (/* binding */ r),
/* harmony export */   v: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports c, e */
/* harmony import */ var _registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4385);

const o = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-vfi-outline-width, 0.1875rem)`, i = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-vfi-outline-style, dotted)`, s = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-vfi-outline-offset, 0.25rem)`, f = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`calc(calc(${o} + 0.1875rem) * -1)`, c = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`calc(calc(${o}) * -1)`, l = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`var(--ds-vfi-text-color, currentcolor ${i} ${o})`, e = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  outline: ${l};
`, r = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  ${e}
  outline-offset: ${f};
`, v = (0,_registration_Ac3YpkNH_mjs__WEBPACK_IMPORTED_MODULE_0__.i)`
  ${e}
  outline-offset: ${s};
`;



/***/ }),

/***/ 8922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.$m),
/* harmony export */   Ld: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.Ld),
/* harmony export */   dy: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.dy),
/* harmony export */   iv: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.iv),
/* harmony export */   oi: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export _$LE */
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8732);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3692);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__/* .ReactiveElement */ .fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,lit_html__WEBPACK_IMPORTED_MODULE_1__/* .render */ .sY)(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lit_html__WEBPACK_IMPORTED_MODULE_1__/* .noChange */ .Jb}}s._$litElement$=!0,s[("finalized","finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});const o={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.0.4");
//# sourceMappingURL=lit-element.js.map


/***/ }),

/***/ 875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XM: () => (/* binding */ e),
/* harmony export */   Xe: () => (/* binding */ i),
/* harmony export */   pX: () => (/* binding */ t)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ 3692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jb: () => (/* binding */ w),
/* harmony export */   Ld: () => (/* binding */ T),
/* harmony export */   YP: () => (/* binding */ b),
/* harmony export */   dy: () => (/* binding */ x),
/* harmony export */   sY: () => (/* binding */ j)
/* harmony export */ });
/* unused harmony export _$LH */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const z={P:e,A:h,C:o,M:1,L:P,R:S,D:u,V:N,I:M,H:R,N:H,U:I,B:k,F:L},Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{})}return h._$AI(t),h};
//# sourceMappingURL=lit-html.js.map


/***/ }),

/***/ 6447:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dy: () => (/* binding */ n),
/* harmony export */   s2: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports literal, svg, withStatic */
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3692);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=Symbol.for(""),o=t=>{if(t?.r===e)return t?._$litStatic$},i=t=>({_$litStatic$:t,r:e}),s=(t,...r)=>({_$litStatic$:r.reduce(((r,e,o)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[o+1]),t[0]),r:e}),a=new Map,l=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=o(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=a.get(t))&&(n.raw=n,a.set(t,r=n)),e=u}return t(r,...e)},n=l(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .html */ .dy),u=l(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .svg */ .YP);
//# sourceMappingURL=static.js.map


/***/ }),

/***/ 9662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cb: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   Mo: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   SB: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_1__.S)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5713);
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9158);

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ 5862:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.$m),
/* harmony export */   Ld: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.Ld),
/* harmony export */   dy: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.dy),
/* harmony export */   iv: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.iv),
/* harmony export */   oi: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.oi)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8732);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3692);
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7150:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dy: () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.dy),
/* harmony export */   s2: () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.s2)
/* harmony export */ });
/* harmony import */ var lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6447);

//# sourceMappingURL=static-html.js.map


/***/ }),

/***/ 7582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZT: () => (/* binding */ __extends),
/* harmony export */   _T: () => (/* binding */ __rest),
/* harmony export */   ev: () => (/* binding */ __spreadArray),
/* harmony export */   gn: () => (/* binding */ __decorate),
/* harmony export */   pi: () => (/* binding */ __assign)
/* harmony export */ });
/* unused harmony exports __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  windowsCompareDevicesElement: () => (/* binding */ windowsCompareDevicesElement)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
// EXTERNAL MODULE: ./node_modules/lit/static-html.js
var static_html = __webpack_require__(7150);
// EXTERNAL MODULE: ./src/util/define-elements.ts
var define_elements = __webpack_require__(5270);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
;// CONCATENATED MODULE: ./src/components/cascade-windows-compare-devices/cascade-windows-compare-devices.styles.ts

const cssPropDefaults = {
    backgroundColor: '#171717',
    primaryFontColor: '#fff',
    depthOpacityKey: '0.9',
    borderRadius: '1.5rem',
    rgbaColor: 'rgba(128 128 128 / 25%)',
    secondaryBadgeColor: '#e3e3e3',
    productCardSuperScriptColor: '#000',
    featureSuperScriptColor: '#0093f9',
    switchFocusOutline: '#fff',
    iconSize: '2rem',
    fontFamily: 'Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif',
    productComparisonHeadingFontSize: '2.5rem',
    productComparisonParagraphFontSize: '0.938rem',
    tableHeadingFontSize: '2.875rem',
    tableHeadingMobileFontSize: '1.563rem',
    primaryBadgeColorStandard: '#52e3fe',
    PrimaryBadgeColorGradient: 'radial-gradient(480.94% 2623.8% at -320% -450%, #0F0A2F 0%, #3B415E 46.09%, #727095 60.09%, #C98282 71.38%, #FFA673 77.67%, #FFD6AA 85.43%)',
};
/* harmony default export */ const cascade_windows_compare_devices_styles = ((0,lit/* css */.iv) `
  .compare-page-wrapper {
    background: var(
      --ds-compare-devices-background-color,
      var(
        --ds-theme-background-card-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.backgroundColor)}
      )
    );
    color: var(
      --ds-compare-devices-foreground-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    font-family: var(
      --ds-compare-devices-font-family,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.fontFamily)}
    );
  }

  .product-card sup a:focus {
    outline: 0.125rem solid #000 !important;
  }

  .feature-table-wrapper sup a:focus {
    outline: 0.125rem solid #fff !important;
  }

  .compare-page-wrapper .product-compare sup span.supText {
    color: #000 !important;
  }

  .compare-page-wrapper moray-popover {
    --ds-close-color: var(
      --ds-compare-devices-popover-close-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    --ds-popover-padding: 0.5rem;
  }

  .compare-page-wrapper moray-popover::part(flyout) {
    background-color: var(
      --ds-compare-devices-background-color,
      var(
        --ds-theme-background-card-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.backgroundColor)}
      )
    );
    border-radius: 0.625rem;
  }

  .compare-page-wrapper moray-popover::part(close-button) {
    color: var(
      --ds-compare-devices-popover-close-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
  }

  .product-compare {
    display: flex;
    flex-wrap: wrap;
  }

  .container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  moray-icon {
    --ds-icon-size-large: var(
      --ds-compare-devices-moray-icon-size,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.iconSize)}
    );
  }

  .compare-panel {
    flex: 1 1 100%;
    margin-top: 3.75rem;
    margin-bottom: 1.875rem;
  }

  .stack-3 {
    display: flex;
    flex-wrap: wrap;
  }

  .text-container {
    flex: 0 0 calc(25%);
    padding-right: 1.188rem;
  }

  .text-container .product-comparison-heading {
    margin-top: 0rem;
    font-size: var(
      --ds-compare-devices-product-comparison-heading-font-size,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.productComparisonHeadingFontSize)}
    );
    font-weight: 600;
  }

  .text-container .compare-device-paragraph {
    font-size: var(
      --ds-compare-devices-product-comparison-paragraph-font-size,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.productComparisonParagraphFontSize)}
    );
  }

  .device-container {
    .primary-badge-standard {
      --ds-badge-bg-color: var(
        --ds-filter-results-primary-badge-color-standard,
        var(
          --ds-color-light-blue,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryBadgeColorStandard)}
        )
      );
    }
    .primary-badge-gradient {
      background: var(
        --ds-filter-results-primary-badge-color-gradient,
        var(
          --ds-color-light-blue,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.PrimaryBadgeColorGradient)}
        )
      );
    }
    display: flex;
    flex: 0 0 calc(75% - 2.5rem);
    padding-left: 1.25rem;
    margin-bottom: 1.25rem;
    width: 100%;
  }

  .product-card {
    flex: 0 0 calc(33% - 1.25rem);
    margin-right: 1.25rem;
  }

  .product-card .price-container {
    font-weight: bold;
    font-size: 0.938rem;
  }

  .product-card .product-card-image {
    width: 100%;
    max-width: 85%;
    height: auto;
    margin-left: 1.25rem;
    margin-top: 1.25rem;
    margin-right: 1.25rem;
    margin-bottom: 0.938rem;
    border-radius: 0.625rem;
    max-height: 12.6875rem;
  }

  .product-card cascade-card-item {
    --ds-card-item-background-color: var(
      --ds-compare-devices-background-color,
      var(
        --ds-theme-background-card-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.backgroundColor)}
      )
    );
    --ds-card-item-color: var(
      --ds-compare-devices-foreground-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    --ds-card-item-depth-opacity-key: var(
      --ds-compare-devices-depth-opacity-key,
      var(
        --ds-theme-depth-opacity-key,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.depthOpacityKey)}
      )
    );
  }

  .product-card cascade-card-item .primary-badge-container,
  .product-card cascade-card-item .secondary-badge-container {
    clear: both;
  }

  .product-card cascade-card-item .primary-badge-text,
  .product-card cascade-card-item .secondary-badge-text {
    float: left;
  }

  .product-card moray-badge {
    --ds-badge-font-size: 0.8rem;
    border-radius: 0.25rem;
  }

  .product-card cascade-card-item .primary-badge-popover,
  .product-card cascade-card-item .secondary-badge-popover {
    position: relative;
    display: inline-block;
    margin-left: 2%;
  }

  .product-card cascade-card-item .primary-badge-container img,
  .product-card cascade-card-item .heading-container img,
  .product-card cascade-card-item .price-container img {
    cursor: pointer;
    position: relative;
  }

  .product-card .heading-container h2 {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .product-card cascade-card-item::part(card) {
    --ds-card-item-shadow: var(
      --ds-compare-devices-product-card-shadow,
      0 0.1875rem 0.4375rem 0
        var(--ds-color-gray-475, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.rgbaColor)}),
      0 0.0625rem 0.125rem 0
        var(--ds-color-gray-475, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.rgbaColor)})
    );
    --ds-card-item-border-radius: var(
      --ds-compare-devices-product-card-border-radius,
      var(--ds-radii-50, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.borderRadius)})
    );
    overflow: visible;
  }

  .product-card cascade-card-item moray-link-group {
    margin-bottom: 1.25rem;
  }

  .product-card cascade-card-item div.heading-container moray-badge {
    --ds-badge-bg-color: var(
      --ds-compare-devices-secondary-badge-color,
      var(
        --ds-color-gray-200,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.secondaryBadgeColor)}
      )
    );
  }

  .product-card cascade-card-item div.empty-badge-container moray-badge {
    display: block;
    --ds-badge-bg-color: transparent;
  }

  .product-card .price-container moray-popover p {
    font-weight: normal;
  }

  .product-card moray-popover::part(flyout) {
    width: 13.75rem;
    z-index: 700;
    max-height: 23.125rem;
  }

  .product-card moray-popover p {
    color: var(
      --ds-compare-devices-popover-text-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    font-size: 0.813rem;
    padding-top: 0.6rem;
  }

  .cardList {
    display: flex;
    width: 100%;
    flex-flow: row;
    flex-wrap: wrap;
  }

  .specification-table-heading h2,
  .feature-table-heading h2 {
    font-size: var(
      --ds-compare-devices-table-heading-font-size,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.tableHeadingFontSize)}
    );
    font-weight: 600;
  }

  @media screen and (min-width: 67.688rem) and (max-width: 77rem) {
    .product-card cascade-card-item .primary-badge-text {
      width: 80%;
    }

    .product-card cascade-card-item .secondary-badge-text {
      width: 70%;
    }

    .product-card moray-badge {
      --ds-badge-font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 67.688rem) {
    .text-container {
      flex: 1 1 100%;
      padding-right: 0;
      padding-left: 5%;
      width: 100%;
    }

    .device-container {
      padding-left: 5%;
      flex: 1 1 100%;
    }

    .product-card {
      flex: 0 0 calc(40% - 1.25rem);
      padding-right: 5%;
      margin-bottom: 1.25rem;
    }

    .specification-table-heading h2,
    .feature-table-heading h2 {
      font-size: var(
        --ds-compare-devices-table-heading-mobile-font-size,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.tableHeadingMobileFontSize)}
      );
    }
  }

  @media screen and (max-width: 48rem) {
    .product-card {
      flex: 1 1 100%;
      margin-right: 1.25rem;
      margin-bottom: 1.25rem;
    }
  }

  .compare-page-wrapper
    .specification-table-wrapper
    .specification-data-table
    cascade-data-table
    .specifications-label-wrapper {
    display: inline-flex;
    font-weight: bold;

    @media screen and (max-width: 33.75rem) {
      display: block;
    }
  }

  @media screen and (min-width: 48rem) {
    .specification-table-heading,
    .feature-table-heading {
      float: left;
      margin-bottom: -2.188rem;
    }
  }

  .specification-table-switch,
  .feature-table-switch {
    float: right;
    clear: both;
    margin-bottom: 0.625rem;
  }

  .specification-table-switch moray-switch,
  .feature-table-switch moray-switch {
    --ds-switch-thumb-color: var(
      --ds-compare-devices-switch-thumb-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    --ds-switch-border-color: var(
      --ds-compare-devices-switch-border-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    --ds-vfi-text-color: 2px solid
      var(
        --ds-compare-devices-switch-focus-outline,
        var(
          --ds-theme-foreground-neutral-strong,
          ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.switchFocusOutline)}
        )
      );
  }

  .feature-label-wrapper sup {
    position: relative;
    bottom: 0.313rem;
  }

  .feature-label-wrapper sup a {
    color: var(
      --ds-compare-devices-feature-table-superscript-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.featureSuperScriptColor)}
      )
    );
  }
  .feature-label-wrapper sup a:active {
    color: var(
      --ds-compare-devices-feature-table-superscript-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.featureSuperScriptColor)}
      )
    );
  }
  .compare-page-wrapper
    .specification-table-wrapper
    .specification-table-switch {
    display: inline-flex;
  }

  .compare-page-wrapper .feature-table-wrapper .feature-table-switch {
    display: inline-flex;
  }

  .compare-page-wrapper
    .specification-table-wrapper
    .specification-data-table
    cascade-data-table
    .specifications-label-wrapper
    .specifications-popover-icon {
    padding-left: 0.313rem;
  }

  .compare-page-wrapper
    .feature-table-wrapper
    .feature-data-table
    cascade-data-table
    .feature-label-wrapper {
    display: inline-flex;
    font-weight: bold;

    @media screen and (max-width: 33.75rem) {
      display: block;
    }
  }

  .compare-page-wrapper
    .feature-table-wrapper
    .feature-data-table
    cascade-data-table
    .feature-label-wrapper
    .feature-label-image {
    padding-right: 1.25rem;

    @media screen and (max-width: 33.75rem) {
      padding-right: 0.688rem;
      position: relative;
      top: 0.313rem;
    }
  }

  .specifications-popover-icon moray-popover p,
  .feature-popover-icon moray-popover p {
    color: var(
      --ds-compare-devices-popover-text-color,
      var(
        --ds-theme-foreground-neutral-strong,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.primaryFontColor)}
      )
    );
    font-size: 0.813rem;
    padding-top: 0.6rem;
  }

  .specifications-popover-icon img,
  .feature-popover-icon img {
    cursor: pointer;
    position: relative;
    @media screen and (max-width: 33.75rem) {
      top: 0.313rem;
    }
  }

  .specifications-popover-icon moray-popover::part(flyout),
  .feature-popover-icon moray-popover::part(flyout) {
    width: 13.75rem;
    max-height: 23.125rem;
  }

  .compare-page-wrapper
    .feature-table-wrapper
    .feature-data-table
    cascade-data-table
    .feature-label-wrapper
    .feature-popover-icon {
    padding-left: 0.313rem;
  }
  .specification-table-wrapper,
  .feature-table-wrapper {
    padding-bottom: 2.5rem;
  }
`);

// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/registration-Ac3YpkNH.mjs
var registration_Ac3YpkNH = __webpack_require__(4385);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/property-CfNGmgjg.mjs
var property_CfNGmgjg = __webpack_require__(2017);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/class-map-B6E0u-KE.mjs
var class_map_B6E0u_KE = __webpack_require__(7864);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/localize.controller-DBuC7-PW.mjs
const e = /* @__PURE__ */ new Set(), s = new MutationObserver(localize_controller_DBuC7_PW_a);
let n = document.documentElement.dir || "ltr", o = document.documentElement.lang || navigator.language;
s.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir", "lang"]
});
function localize_controller_DBuC7_PW_a() {
  n = document.documentElement.dir || "ltr", o = document.documentElement.lang || navigator.language, [...e.keys()].forEach((t) => {
    typeof t.requestUpdate == "function" && t.requestUpdate();
  });
}
class d {
  constructor(r) {
    this._host = r, this._host.addController(this);
  }
  hostConnected() {
    e.add(this._host);
  }
  hostDisconnected() {
    e.delete(this._host);
  }
  /**
   * Gets the host element's directionality as determined by the `dir` attribute. The return value is transformed to
   * lowercase.
   * @returns {string} The directionality of the host element.
   */
  dir() {
    return `${this._host.dir || n}`.toLowerCase();
  }
  /**
   * Gets the host element's language as determined by the `lang` attribute. The return value is transformed to
   * lowercase.
   * @returns {string} The language of the host element.
   */
  lang() {
    return `${this._host.lang || o}`.toLowerCase();
  }
}


// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/vfi-CyPinwDN.mjs
var vfi_CyPinwDN = __webpack_require__(2584);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/transitions-iiKWrCzx.mjs

const r = {
  d0: "0ms",
  d100: "100ms",
  d150: "150ms",
  d200: "200ms",
  d250: "250ms",
  d300: "300ms",
  d400: "400ms",
  d500: "500ms",
  d600: "600ms",
  d700: "700ms",
  d800: "800ms"
}, transitions_iiKWrCzx_o = {
  custom: "cubic-bezier(0.19, 1, 0.22, 1)",
  accelerateMax: "cubic-bezier(0.9, 0.1, 1, 0.2)",
  accelerateMid: "cubic-bezier(1, 0, 1, 1)",
  accelerateMin: "cubic-bezier(0.8, 0, 0.78, 1)",
  decelerateMax: "cubic-bezier(0.1, 0.9, 0.2, 1)",
  decelerateMid: "cubic-bezier(0, 0, 0, 1)",
  decelerateMin: "cubic-bezier(0.33, 0, 0.1, 1)",
  easyEase: "cubic-bezier(0.33, 0, 0.67, 1)",
  linear: "cubic-bezier(0.25, 0.25, 0.75, 0.75)",
  maxEasyEase: "cubic-bezier(0.8, 0, 0.2, 1)"
}, t = {
  d100: "100ms",
  d200: "200ms",
  d300: "300ms",
  d400: "400ms"
}, c = (e) => {
  const s = `transition: ${e};`;
  return (0,registration_Ac3YpkNH.i)`
    ${(0,registration_Ac3YpkNH.a)(s)}

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `;
}, transitions_iiKWrCzx_d = (e) => {
  const s = `animation: ${e};`;
  return a`
    ${i(s)}

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `;
}, m = (e) => a`
  .collapse {
    ${c(`var(--ds-transition-collapse, ${e})`)}
  }

  .collapse:not(.show) {
    display: none;
  }
`, l = (e, s) => a`
  .collapsing {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transform: var(--ds-collapse-base-collapsing-transform, ${i(e)});

    ${c(`var(--ds-transition-collapsing, ${s})`)}
  }
`, b = (0,registration_Ac3YpkNH.i)`
  ${c("var(--ds-transition-fade, opacity 0.15s linear)")}
`;


// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/variables-BKxyUZOC.mjs
var variables_BKxyUZOC = __webpack_require__(8187);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/keyboard-DX8Uc3JA.mjs
const A = {
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CLEAR: "Clear",
  END: "End",
  ENTER: "Enter",
  ESC: "Escape",
  HOME: "Home",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SPACE: " ",
  TAB: "Tab"
};


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/switch/index.js








const switch_e = {
  gap: variables_BKxyUZOC.S,
  disabledOpacity: "0.25",
  hoverColor: "rgba(0, 0, 0, 0.2)",
  borderColor: variables_BKxyUZOC.f,
  thumbColor: variables_BKxyUZOC.f,
  selectedColor: variables_BKxyUZOC.h,
  selectedThumbColor: variables_BKxyUZOC.i,
  borderWidth: "0.063rem",
  trackWidth: "3rem",
  trackWidthLg: "3.5rem",
  trackHeight: "1.5rem",
  trackHeightLg: "1.75rem",
  thumbSize: "1.125rem",
  thumbSizeLg: "1.375rem",
  thumbMargin: "0.125rem",
  thumbTransition: "all 0.25s ease",
  thumbXPosition: "1.5rem",
  thumbXPositionLg: "1.75rem",
  fontSize: "1rem",
  fontSizeLg: "1.125rem"
}, C = (0,registration_Ac3YpkNH.i)`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-switch-gap, var(--ds-spacing-2, ${(0,registration_Ac3YpkNH.a)(switch_e.gap)}));
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: var(--ds-switch-disabled-opacity, ${(0,registration_Ac3YpkNH.a)(switch_e.disabledOpacity)});
  }

  :host([large]) input {
    width: var(--ds-switch-track-width-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.trackWidthLg)});
    height: var(--ds-switch-track-height-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.trackHeightLg)});
  }

  :host([large]) input::before {
    width: var(--ds-switch-thumb-size-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbSizeLg)});
    height: var(--ds-switch-thumb-size-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbSizeLg)});
  }

  :host([large]) input:checked::before {
    transform: translateX(
      var(--ds-switch-thumb-x-position-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbXPositionLg)})
    );
  }

  :host([large]) input.rtl:checked::before {
    transform: translateX(
      calc(
        var(--ds-switch-thumb-x-position-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbXPositionLg)}) * -1
      )
    );
  }

  :host([large]) .label,
  :host([large]) .status {
    font-size: var(--ds-switch-font-size-lg, ${(0,registration_Ac3YpkNH.a)(switch_e.fontSizeLg)});
  }

  input {
    width: var(--ds-switch-track-width, ${(0,registration_Ac3YpkNH.a)(switch_e.trackWidth)});
    height: var(--ds-switch-track-height, ${(0,registration_Ac3YpkNH.a)(switch_e.trackHeight)});
    margin: 0;
    background-color: transparent;
    border-width: var(--ds-switch-border-width, ${(0,registration_Ac3YpkNH.a)(switch_e.borderWidth)});
    border-style: solid;
    border-color: var(
      --ds-switch-border-color,
      var(--ds-theme-foreground-neutral-strong, ${(0,registration_Ac3YpkNH.a)(switch_e.borderColor)})
    );
    border-radius: 3.125rem;
    appearance: none;
    cursor: pointer;
  }

  input:focus {
    ${vfi_CyPinwDN.a}
    outline-offset: var(--ds-switch-thumb-margin, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbMargin)});
  }

  input::before {
    width: var(--ds-switch-thumb-size, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbSize)});
    height: var(--ds-switch-thumb-size, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbSize)});
    content: '';
    display: block;
    position: relative;
    top: var(--ds-switch-thumb-margin, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbMargin)});
    border-radius: 50%;
    inset-inline-start: var(--ds-switch-thumb-margin, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbMargin)});
    background-color: var(
      --ds-switch-thumb-color,
      var(--ds-theme-foreground-neutral-strong, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbColor)})
    );

    ${c(
  `var(--ds-switch-thumb-transition, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbTransition)})`
)};
  }

  @media (forced-colors: active) {
    input::before {
      background-color: CanvasText !important;
    }
  }

  input:checked {
    background-color: var(
      --ds-switch-selected-color,
      var(--ds-theme-background-accent-strong-normal, ${(0,registration_Ac3YpkNH.a)(switch_e.selectedColor)})
    );
    border-color: var(
      --ds-switch-selected-color,
      var(--ds-theme-background-accent-strong-normal, ${(0,registration_Ac3YpkNH.a)(switch_e.selectedColor)})
    );
  }

  input:checked ~ .status .status-off {
    display: none;
  }

  input:checked ~ .status .status-on {
    display: block;
  }

  input:checked::before {
    transform: translateX(
      var(--ds-switch-thumb-x-position, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbXPosition)})
    );
    background-color: var(
      --ds-switch-selected-thumb-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${(0,registration_Ac3YpkNH.a)(switch_e.selectedThumbColor)}
      )
    );
  }

  input.rtl:checked::before {
    transform: translateX(
      calc(var(--ds-switch-thumb-x-position, ${(0,registration_Ac3YpkNH.a)(switch_e.thumbXPosition)}) * -1)
    );
  }

  input:not(:checked):not(:disabled):not([readonly]):hover,
  input:not(:checked):not(:disabled):not([readonly]):focus {
    background-color: var(--ds-switch-hover-color, ${(0,registration_Ac3YpkNH.a)(switch_e.hoverColor)});
  }

  .label,
  .status {
    font-size: var(--ds-switch-font-size, ${(0,registration_Ac3YpkNH.a)(switch_e.fontSize)});
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label {
    order: -1;
  }

  .status {
    user-select: none;
  }

  .status-on {
    display: none;
  }
`;
var x = Object.defineProperty, S = Object.getOwnPropertyDescriptor, switch_i = (a, o, l, n) => {
  for (var s = n > 1 ? void 0 : n ? S(o, l) : o, h = a.length - 1, d; h >= 0; h--)
    (d = a[h]) && (s = (n ? d(o, l, s) : d(s)) || s);
  return n && s && x(o, l, s), s;
};
const P = "moray-switch";
let switch_r = class extends registration_Ac3YpkNH.s {
  constructor() {
    super(...arguments), this.localize = new d(this), this.checked = !1, this.disabled = !1, this.large = !1, this.onLabel = "On", this.offLabel = "Off";
  }
  _handleKeyPress(a) {
    a.key === A.ENTER && a.target.click();
  }
  _handleClick() {
    this.checked = !this.checked;
  }
  render() {
    const o = { rtl: this.localize.dir() === "rtl" };
    return (0,registration_Ac3YpkNH.x)`
      <input
        type="checkbox"
        role="switch"
        id="inputCheckbox"
        class=${(0,class_map_B6E0u_KE.e)(o)}
        aria-checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?checked="${this.checked}"
        ?large="${this.large}"
        @input="${this._handleClick}"
        @keypress="${this._handleKeyPress}"
      />
      <label class="label" for="inputCheckbox">
        <slot></slot>
      </label>
      <label class="status" for="inputCheckbox">
        <span class="status-on" aria-hidden="true">${this.onLabel}</span>
        <span class="status-off" aria-hidden="true">${this.offLabel}</span>
      </label>
    `;
  }
};
switch_r.styles = [C];
switch_i([
  (0,property_CfNGmgjg.n)({ type: Boolean })
], switch_r.prototype, "checked", 2);
switch_i([
  (0,property_CfNGmgjg.n)({ type: Boolean })
], switch_r.prototype, "disabled", 2);
switch_i([
  (0,property_CfNGmgjg.n)({ type: Boolean })
], switch_r.prototype, "large", 2);
switch_i([
  (0,property_CfNGmgjg.n)({ attribute: "on-label", reflect: !0 })
], switch_r.prototype, "onLabel", 2);
switch_i([
  (0,property_CfNGmgjg.n)({ attribute: "off-label", reflect: !0 })
], switch_r.prototype, "offLabel", 2);
switch_r = switch_i([
  (0,registration_Ac3YpkNH.r)(P)
], switch_r);


// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/query-assigned-nodes-jfm_gNrB.mjs
var query_assigned_nodes_jfm_gNrB = __webpack_require__(3782);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/badge/index.js




const y = (0,registration_Ac3YpkNH.i)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, badge_o = {
  paddingBlockStart: "0.375em",
  paddingBlockEnd: "0.375em",
  paddingInlineStart: "0.75em",
  paddingInlineEnd: "0.75em",
  fontSize: "1rem",
  bgColor: variables_BKxyUZOC.y,
  textColor: variables_BKxyUZOC.m
}, w = (0,registration_Ac3YpkNH.i)`
  :host {
    display: inline-block;
    padding-block: var(
        --ds-badge-padding-block-start,
        ${(0,registration_Ac3YpkNH.a)(badge_o.paddingBlockStart)}
      )
      var(--ds-badge-padding-block-end, ${(0,registration_Ac3YpkNH.a)(badge_o.paddingBlockEnd)});
    padding-inline: var(
        --ds-badge-padding-inline-start,
        ${(0,registration_Ac3YpkNH.a)(badge_o.paddingInlineStart)}
      )
      var(--ds-badge-padding-inline-end, ${(0,registration_Ac3YpkNH.a)(badge_o.paddingInlineEnd)});
    font-size: var(--ds-badge-font-size, ${(0,registration_Ac3YpkNH.a)(badge_o.fontSize)});
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    vertical-align: top;
    max-width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
    background-color: var(
      --ds-badge-bg-color,
      var(--ds-color-yellow, ${(0,registration_Ac3YpkNH.a)(badge_o.bgColor)})
    );
    color: var(
      --ds-badge-text-color,
      var(--ds-color-black, ${(0,registration_Ac3YpkNH.a)(badge_o.textColor)})
    );
  }

  :host([truncate]) {
    ${y}
  }

  :host([empty]) {
    display: none;
  }
`;
var badge_C = Object.defineProperty, k = Object.getOwnPropertyDescriptor, badge_l = (p, n, d, a) => {
  for (var e = a > 1 ? void 0 : a ? k(n, d) : n, s = p.length - 1, i; s >= 0; s--)
    (i = p[s]) && (e = (a ? i(n, d, e) : i(e)) || e);
  return a && e && badge_C(n, d, e), e;
};
const _ = "moray-badge";
let badge_r = class extends registration_Ac3YpkNH.s {
  constructor() {
    super(...arguments), this.truncate = !1, this.empty = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._handleSlotChange();
  }
  _handleSlotChange() {
    this.empty = this._slot.length === 0;
  }
  render() {
    return (0,registration_Ac3YpkNH.x)`<slot @slotchange=${this._handleSlotChange}></slot>`;
  }
};
badge_r.styles = [w];
badge_l([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], badge_r.prototype, "truncate", 2);
badge_l([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], badge_r.prototype, "empty", 2);
badge_l([
  (0,query_assigned_nodes_jfm_gNrB.n)()
], badge_r.prototype, "_slot", 2);
badge_r = badge_l([
  (0,registration_Ac3YpkNH.r)(_)
], badge_r);


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/link-group/index.js


const link_group_c = {
  columnGap: variables_BKxyUZOC.j,
  rowGap: variables_BKxyUZOC.k
}, link_group_w = (0,registration_Ac3YpkNH.i)`
  :host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: var(
      --ds-link-group-column-gap,
      var(--ds-spacing-4, ${(0,registration_Ac3YpkNH.a)(link_group_c.columnGap)})
    );
    row-gap: var(
      --ds-link-group-column-gap,
      var(--ds-spacing-3, ${(0,registration_Ac3YpkNH.a)(link_group_c.rowGap)})
    );
  }
`;
var link_group_ = Object.defineProperty, link_group_d = Object.getOwnPropertyDescriptor, link_group_x = (l, s, e, a) => {
  for (var r = a > 1 ? void 0 : a ? link_group_d(s, e) : s, o = l.length - 1, p; o >= 0; o--)
    (p = l[o]) && (r = (a ? p(s, e, r) : p(r)) || r);
  return a && r && link_group_(s, e, r), r;
};
const G = "moray-link-group";
let link_group_n = class extends registration_Ac3YpkNH.s {
  render() {
    return (0,registration_Ac3YpkNH.x)`<slot></slot>`;
  }
};
link_group_n.styles = [link_group_w];
link_group_n = link_group_x([
  (0,registration_Ac3YpkNH.r)(G)
], link_group_n);


// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/button/index.js
var components_button = __webpack_require__(5552);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/state-B9yJz8Xo.mjs
var state_B9yJz8Xo = __webpack_require__(8934);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/query-assigned-elements-BAj4hztX.mjs
var query_assigned_elements_BAj4hztX = __webpack_require__(4331);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/button-DC9AV08H.mjs
var button_DC9AV08H = __webpack_require__(4609);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/icon.const-DMZL-ueT.mjs
const icon_const_DMZL_ueT_l = {
  xsmall: "xsmall",
  small: "small",
  medium: "medium",
  large: "large"
};


// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/if-defined-BrcqGSt5.mjs
var if_defined_BrcqGSt5 = __webpack_require__(9366);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/anchor.mixin-ePZ3escT.mjs




var f = Object.defineProperty, anchor_mixin_ePZ3escT_y = Object.getOwnPropertyDescriptor, anchor_mixin_ePZ3escT_a = (n, r, l, p) => {
  for (var o = p > 1 ? void 0 : p ? anchor_mixin_ePZ3escT_y(r, l) : r, i = n.length - 1, s; i >= 0; i--)
    (s = n[i]) && (o = (p ? s(r, l, o) : s(o)) || o);
  return p && o && f(r, l, o), o;
};
const g = (n) => {
  class r extends n {
    constructor() {
      super(...arguments), this.ariaDisabled = null, this.ariaExpanded = null;
    }
    /**
     * Renders an anchor element with the given content, CSS class, and part name.
     *
     * @param {TemplateResult} content - The template result to use as the content of the anchor.
     * @param {Object} classname - An object representing the CSS class names to apply to the anchor.
     * @param {string} [part='base'] - The part attribute value to apply to the anchor. Defaults to 'base'.
     * @returns {Element} - The created anchor element.
     * @internal not to be used by consumers
     */
    renderAnchor(p, o, i = "base") {
      const s = { ...o };
      return (0,registration_Ac3YpkNH.x)`
        <a
          aria-disabled="${(0,if_defined_BrcqGSt5.o)(this.ariaDisabled)}"
          aria-expanded="${(0,if_defined_BrcqGSt5.o)(this.ariaExpanded)}"
          class=${(0,class_map_B6E0u_KE.e)(s)}
          download="${(0,if_defined_BrcqGSt5.o)(this.download)}"
          href=${(0,if_defined_BrcqGSt5.o)(this.href)}
          hreflang="${(0,if_defined_BrcqGSt5.o)(this.hreflang)}"
          part=${i}
          ping="${(0,if_defined_BrcqGSt5.o)(this.ping)}"
          referrerpolicy="${(0,if_defined_BrcqGSt5.o)(this.referrerpolicy)}"
          rel="${(0,if_defined_BrcqGSt5.o)(this.rel)}"
          target="${(0,if_defined_BrcqGSt5.o)(this.target)}"
          type="${(0,if_defined_BrcqGSt5.o)(this.type)}"
        >
          ${p}
        </a>
      `;
    }
  }
  return anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)({ attribute: "aria-disabled" })
  ], r.prototype, "ariaDisabled", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)({ attribute: "aria-expanded" })
  ], r.prototype, "ariaExpanded", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "download", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "href", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "hreflang", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "ping", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "referrerpolicy", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "rel", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "target", 2), anchor_mixin_ePZ3escT_a([
    (0,property_CfNGmgjg.n)()
  ], r.prototype, "type", 2), r;
};


// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/action-trigger-BLNa8TwK.mjs
var action_trigger_BLNa8TwK = __webpack_require__(5113);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/icon/index.js
var icon = __webpack_require__(3890);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/anchor/index.js















const anchor_e = {
  cta: "cta",
  ctaReverse: "cta--reverse"
}, anchor_d = {
  color: variables_BKxyUZOC.a,
  gap: "0.375rem"
}, p = {
  fontWeight: "600",
  translateX: "0.25em",
  transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)"
}, R = (0,registration_Ac3YpkNH.i)`
  /* Basic links */
  a {
    ${button_DC9AV08H.b}
    gap: var(--ds-anchor-gap, ${(0,registration_Ac3YpkNH.a)(anchor_d.gap)});
    color: var(
      --ds-anchor-color,
      var(--ds-theme-foreground-accent-subtle-normal, ${(0,registration_Ac3YpkNH.a)(anchor_d.color)})
    );
  }

  a[href]:focus {
    ${vfi_CyPinwDN.a}
    outline-offset: 1px; /* Webkit browser default */
  }

  .first,
  .last {
    display: inline-flex;
  }

  /* CTA and CTA reverse */
  :host([appearance^='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) a {
    text-decoration: none;
    font-weight: var(--ds-cta-font-weight, ${(0,registration_Ac3YpkNH.a)(p.fontWeight)});
  }

  :host([appearance='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) moray-icon:not(.rtl),
  :host([appearance='${(0,registration_Ac3YpkNH.a)(anchor_e.ctaReverse)}']) moray-icon.rtl {
    transform: translateX(
      calc(var(--ds-cta-translate-x, ${(0,registration_Ac3YpkNH.a)(p.translateX)}) * -1)
    );
  }

  :host([appearance='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) moray-icon.rtl,
  :host([appearance='${(0,registration_Ac3YpkNH.a)(anchor_e.ctaReverse)}']) moray-icon:not(.rtl) {
    transform: translateX(var(--ds-cta-translate-x, ${(0,registration_Ac3YpkNH.a)(p.translateX)}));
  }

  :host([appearance^='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) a:hover,
  :host([appearance^='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) a:focus {
    text-decoration: underline;
  }

  :host([appearance^='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) a:hover moray-icon,
  :host([appearance^='${(0,registration_Ac3YpkNH.a)(anchor_e.cta)}']) a:focus moray-icon {
    transform: translateX(0);

    ${c(`var(--ds-cta-transition, ${(0,registration_Ac3YpkNH.a)(p.transition)})`)}
  }

  /* Action trigger */

  ${action_trigger_BLNa8TwK.a}

  /* Button */

  ${button_DC9AV08H.a}
`;
var X = Object.defineProperty, L = Object.getOwnPropertyDescriptor, anchor_a = (r, n, i, l) => {
  for (var s = l > 1 ? void 0 : l ? L(n, i) : n, h = r.length - 1, f; h >= 0; h--)
    (f = r[h]) && (s = (l ? f(n, i, s) : f(s)) || s);
  return l && s && X(n, i, s), s;
};
const D = "moray-anchor";
let anchor_o = class extends g(registration_Ac3YpkNH.s) {
  constructor() {
    super(...arguments), this.localize = new d(this), this.block = !1, this.pill = !1, this._firstSlotEmpty = !0, this._lastSlotEmpty = !0, this._slottedImgIcon = !1;
  }
  _handleSlotChange() {
    this._firstSlotEmpty = this._firstSlot.length === 0, this._lastSlotEmpty = this._lastSlot.length === 0, this._slottedImgIcon = this._checkSlotsForImgIcon();
  }
  _checkSlotsForImgIcon() {
    return [...this._defaultSlot, ...this._firstSlot, ...this._lastSlot].some(
      (r) => r.nodeName.toLowerCase() === "img" || r.nodeName.toLowerCase() === "moray-icon"
    );
  }
  render() {
    const r = this.localize.dir() === "rtl", n = { rtl: r };
    let i = (0,registration_Ac3YpkNH.x)``, l = (0,registration_Ac3YpkNH.x)``;
    this.appearance === anchor_e.cta ? l = (0,registration_Ac3YpkNH.x)`
        <moray-icon
          icon="chevron-${r ? "left" : "right"}"
          size=${icon_const_DMZL_ueT_l.medium}
          class=${(0,class_map_B6E0u_KE.e)(n)}
        ></moray-icon>
      ` : this.appearance === anchor_e.ctaReverse && (i = (0,registration_Ac3YpkNH.x)`
        <moray-icon
          icon="chevron-${r ? "right" : "left"}"
          size=${icon_const_DMZL_ueT_l.medium}
          class=${(0,class_map_B6E0u_KE.e)(n)}
        ></moray-icon>
      `);
    const s = {
      "action-trigger--no-underline": this.appearance === button_DC9AV08H.B.actionTrigger && this._slottedImgIcon
    };
    return this.renderAnchor(
      (0,registration_Ac3YpkNH.x)`
        <span
          part="first"
          class="first"
          style="${this._firstSlotEmpty ? "display: none" : registration_Ac3YpkNH.T}"
        >
          <slot name="first" @slotchange=${this._handleSlotChange}></slot>
        </span>
        ${i}
        <slot @slotchange=${this._handleSlotChange}></slot>
        ${l}
        <span part="last" class="last" style="${this._lastSlotEmpty ? "display: none" : registration_Ac3YpkNH.T}">
          <slot name="last" @slotchange=${this._handleSlotChange}></slot>
        </span>
      `,
      s
    );
  }
};
anchor_o.styles = R;
anchor_a([
  (0,property_CfNGmgjg.n)({ reflect: !0 })
], anchor_o.prototype, "appearance", 2);
anchor_a([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], anchor_o.prototype, "block", 2);
anchor_a([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], anchor_o.prototype, "pill", 2);
anchor_a([
  (0,property_CfNGmgjg.n)({ reflect: !0 })
], anchor_o.prototype, "size", 2);
anchor_a([
  (0,query_assigned_elements_BAj4hztX.o)()
], anchor_o.prototype, "_defaultSlot", 2);
anchor_a([
  (0,query_assigned_nodes_jfm_gNrB.n)({ slot: "first" })
], anchor_o.prototype, "_firstSlot", 2);
anchor_a([
  (0,query_assigned_nodes_jfm_gNrB.n)({ slot: "last" })
], anchor_o.prototype, "_lastSlot", 2);
anchor_a([
  (0,state_B9yJz8Xo.r)()
], anchor_o.prototype, "_firstSlotEmpty", 2);
anchor_a([
  (0,state_B9yJz8Xo.r)()
], anchor_o.prototype, "_lastSlotEmpty", 2);
anchor_a([
  (0,state_B9yJz8Xo.r)()
], anchor_o.prototype, "_slottedImgIcon", 2);
anchor_o = anchor_a([
  (0,registration_Ac3YpkNH.r)(D)
], anchor_o);


// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(3692);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(875);
;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends directive/* Directive */.Xe{constructor(i){if(super(i),this.it=lit_html/* nothing */.Ld,i.type!==directive/* PartType */.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html/* nothing */.Ld||null==r)return this._t=void 0,this.it=r;if(r===lit_html/* noChange */.Jb)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const unsafe_html_o=(0,directive/* directive */.XM)(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/unsafe-html.js

//# sourceMappingURL=unsafe-html.js.map

// EXTERNAL MODULE: ./src/components/data-table/index.ts + 1 modules
var data_table = __webpack_require__(636);
// EXTERNAL MODULE: ./src/components/card-item/index.ts + 5 modules
var card_item = __webpack_require__(4166);
// EXTERNAL MODULE: ./src/components/lightbox/index.ts + 4 modules
var lightbox = __webpack_require__(2464);
// EXTERNAL MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/base-CwU3eNq-.mjs
var base_CwU3eNq_ = __webpack_require__(8641);
;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/query-BFAhq-I0.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function query_BFAhq_I0_d(l, u) {
  return (r, o, c) => {
    const s = (n) => {
      var e;
      return ((e = n.renderRoot) == null ? void 0 : e.querySelector(l)) ?? null;
    };
    if (u) {
      const { get: n, set: e } = typeof o == "object" ? r : c ?? (() => {
        const t = Symbol();
        return { get() {
          return this[t];
        }, set(h) {
          this[t] = h;
        } };
      })();
      return (0,base_CwU3eNq_.e)(r, o, { get() {
        let t = n.call(this);
        return t === void 0 && (t = s(this), (t !== null || this.hasUpdated) && e.call(this, t)), t;
      } });
    }
    return (0,base_CwU3eNq_.e)(r, o, { get() {
      return s(this);
    } });
  };
}


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/close-DSImWicy.mjs




const close_DSImWicy_r = {
  padding: variables_BKxyUZOC.S,
  backgroundColor: "transparent",
  border: "0",
  color: variables_BKxyUZOC.T
}, close_DSImWicy_p = (0,registration_Ac3YpkNH.i)`
  .close {
    ${button_DC9AV08H.b}
    display: inline-flex;
    appearance: none;
    cursor: pointer;
    background-color: var(
      --ds-close-background-color,
      ${(0,registration_Ac3YpkNH.a)(close_DSImWicy_r.backgroundColor)}
    );
    padding: var(--ds-close-padding, ${(0,registration_Ac3YpkNH.a)(close_DSImWicy_r.padding)});
    border: var(--ds-close-border, ${(0,registration_Ac3YpkNH.a)(close_DSImWicy_r.border)});
    color: var(
      --ds-close-color,
      var(--ds-theme-foreground-neutral-icon, ${(0,registration_Ac3YpkNH.a)(close_DSImWicy_r.color)})
    );

    /* Ensure minimum target size even with smaller content */
    min-width: 36px;
    min-height: 36px;
    justify-content: center;
    align-items: center;
  }

  .close:focus {
    ${vfi_CyPinwDN.v}
  }

  .close:hover {
    cursor: pointer;
  }
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/helpers-uHZJbBPu.mjs
const helpers_uHZJbBPu_r = [
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  "button:not([disabled])",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])'
], helpers_uHZJbBPu_a = [...helpers_uHZJbBPu_r, '[tabindex]:not([tabindex^="-"]):not([disabled])'], helpers_uHZJbBPu_l = (t, e, n = !1) => {
  const o = t.getRootNode();
  return o instanceof ShadowRoot ? n ? o.querySelectorAll(e) : o.querySelector(e) : n ? document.querySelectorAll(e) : document.querySelector(e);
}, helpers_uHZJbBPu_d = (t, e = null) => {
  const n = getComputedStyle(t);
  if (!e)
    return t.offsetHeight;
  let o = t.offsetHeight;
  return e.cssSelectors.forEach((s) => {
    !s.toLowerCase().includes("top") && !s.toLowerCase().includes("bottom") ? o += parseInt(n[s + "Top"], 10) + parseInt(n[s + "Bottom"], 10) : s && (o += parseInt(n[s], 10));
  }), o;
}, helpers_uHZJbBPu_i = (t) => t.offsetHeight, helpers_uHZJbBPu_c = (t = document) => Array.from(t.querySelectorAll(helpers_uHZJbBPu_a.join(", ")));


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/index-BrpNeah-.mjs





const zt = {
  top: "top",
  topEnd: "top-end",
  topStart: "top-start",
  bottom: "bottom",
  bottomEnd: "bottom-end",
  bottomStart: "bottom-start",
  right: "right",
  rightEnd: "right-end",
  rightStart: "right-start",
  left: "left",
  leftEnd: "left-end",
  leftStart: "left-start"
}, wt = {
  onShow: "onShow",
  onHide: "onHide"
}, index_BrpNeah_b = {
  bgColor: variables_BKxyUZOC.l,
  borderColor: variables_BKxyUZOC.b,
  borderWidth: "0.0625rem",
  depth: variables_BKxyUZOC.F,
  arrowSize: "1rem",
  minWidth: "8rem",
  minHeight: "4rem",
  maxWidth: "21rem"
}, Yt = (0,registration_Ac3YpkNH.i)`
  :host([anchor]) {
    isolation: isolate;
    opacity: 0;
    border-style: solid;
    border-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
    border-color: var(
      --ds-flyout-border-color,
      var(--ds-theme-border-neutral-pure, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderColor)})
    );
    background-color: var(
      --ds-flyout-bg-color,
      var(--ds-theme-background-neutral-fade, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.bgColor)})
    );
    box-shadow: var(--ds-flyout-depth, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.depth)});
    position: absolute;
    width: max-content;
    min-width: var(--ds-flyout-min-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.minWidth)});
    min-height: var(--ds-flyout-min-height, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.minHeight)});
    max-width: var(--ds-flyout-max-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.maxWidth)});
  }

  .arrow {
    position: absolute;
    visibility: hidden;
    border-style: solid;
    border-color: var(
      --ds-flyout-border-color,
      var(--ds-theme-border-neutral-pure, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderColor)})
    );
    border-width: 0;
    background-color: var(
      --ds-flyout-bg-color,
      var(--ds-theme-background-neutral-fade, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.bgColor)})
    );
    width: var(--ds-flyout-arrow-size, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.arrowSize)});
    height: var(--ds-flyout-arrow-size, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.arrowSize)});
    transform: rotate(45deg);
  }

  .arrow[flyout-placement^='bottom'] {
    border-top-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
    border-left-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
  }

  .arrow[flyout-placement^='top'] {
    border-bottom-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
    border-right-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
  }

  .arrow[flyout-placement^='left'] {
    border-top-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
    border-right-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
  }

  .arrow[flyout-placement^='right'] {
    border-bottom-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
    border-left-width: var(--ds-flyout-border-width, ${(0,registration_Ac3YpkNH.a)(index_BrpNeah_b.borderWidth)});
  }

  .base {
    display: contents;
  }
`, lt = Math.min, Xt = Math.max, It = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, qt = {
  start: "end",
  end: "start"
};
function at(t, e, o) {
  return Xt(t, lt(e, o));
}
function J(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function V(t) {
  return t.split("-")[0];
}
function Q(t) {
  return t.split("-")[1];
}
function Ct(t) {
  return t === "x" ? "y" : "x";
}
function ut(t) {
  return t === "y" ? "height" : "width";
}
function nt(t) {
  return ["top", "bottom"].includes(V(t)) ? "y" : "x";
}
function ht(t) {
  return Ct(nt(t));
}
function Ut(t, e, o) {
  o === void 0 && (o = !1);
  const n = Q(t), i = ht(t), s = ut(i);
  let r = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = tt(r)), [r, tt(r)];
}
function Gt(t) {
  const e = tt(t);
  return [ct(t), e, ct(e)];
}
function ct(t) {
  return t.replace(/start|end/g, (e) => qt[e]);
}
function Jt(t, e, o) {
  const n = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? e ? i : n : e ? n : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Qt(t, e, o, n) {
  const i = Q(t);
  let s = Jt(V(t), o === "start", n);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(ct)))), s;
}
function tt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => It[e]);
}
function Zt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ot(t) {
  return typeof t != "number" ? Zt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function et(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function yt(t, e, o) {
  let {
    reference: n,
    floating: i
  } = t;
  const s = nt(e), r = ht(e), l = ut(r), a = V(e), c = s === "y", u = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, m = n[l] / 2 - i[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      d = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: n.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  switch (Q(e)) {
    case "start":
      d[r] -= m * (o && c ? -1 : 1);
      break;
    case "end":
      d[r] += m * (o && c ? -1 : 1);
      break;
  }
  return d;
}
const te = async (t, e, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = o, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = yt(c, n, a), m = n, d = {}, h = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: g,
      fn: w
    } = l[p], {
      x,
      y: v,
      data: C,
      reset: E
    } = await w({
      x: u,
      y: f,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = x ?? u, f = v ?? f, d = {
      ...d,
      [g]: {
        ...d[g],
        ...C
      }
    }, E && h <= 50) {
      h++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (c = E.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : E.rects), {
        x: u,
        y: f
      } = yt(c, m, a)), p = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: d
  };
};
async function At(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: n,
    y: i,
    platform: s,
    rects: r,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = J(e, t), h = Ot(d), g = l[m ? f === "floating" ? "reference" : "floating" : f], w = et(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(g))) == null || o ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), x = f === "floating" ? {
    ...r.floating,
    x: n,
    y: i
  } : r.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), C = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: v,
    strategy: a
  }) : x);
  return {
    top: (w.top - E.top + h.top) / C.y,
    bottom: (E.bottom - w.bottom + h.bottom) / C.y,
    left: (w.left - E.left + h.left) / C.x,
    right: (E.right - w.right + h.right) / C.x
  };
}
const ee = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: o,
      y: n,
      placement: i,
      rects: s,
      platform: r,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: u = 0
    } = J(t, e) || {};
    if (c == null)
      return {};
    const f = Ot(u), m = {
      x: o,
      y: n
    }, d = ht(i), h = ut(d), p = await r.getDimensions(c), g = d === "y", w = g ? "top" : "left", x = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", C = s.reference[h] + s.reference[d] - m[d] - s.floating[h], E = m[d] - s.reference[d], B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let R = B ? B[v] : 0;
    (!R || !await (r.isElement == null ? void 0 : r.isElement(B))) && (R = l.floating[v] || s.floating[h]);
    const H = C / 2 - E / 2, Y = R / 2 - p[h] / 2 - 1, X = lt(f[w], Y), I = lt(f[x], Y), S = X, q = R - p[h] - I, O = R / 2 - p[h] / 2 + H, P = at(S, O, q), _ = !a.arrow && Q(i) != null && O != P && s.reference[h] / 2 - (O < S ? X : I) - p[h] / 2 < 0, $ = _ ? O < S ? O - S : O - q : 0;
    return {
      [d]: m[d] + $,
      data: {
        [d]: P,
        centerOffset: O - P - $,
        ..._ && {
          alignmentOffset: $
        }
      },
      reset: _
    };
  }
}), oe = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, n;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: p = !0,
        ...g
      } = J(t, e);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const w = V(i), x = V(l) === l, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), C = m || (x || !p ? [tt(l)] : Gt(l));
      !m && h !== "none" && C.push(...Qt(l, p, h, v));
      const E = [l, ...C], B = await At(e, g), R = [];
      let H = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && R.push(B[w]), f) {
        const S = Ut(i, r, v);
        R.push(B[S[0]], B[S[1]]);
      }
      if (H = [...H, {
        placement: i,
        overflows: R
      }], !R.every((S) => S <= 0)) {
        var Y, X;
        const S = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, q = E[S];
        if (q)
          return {
            data: {
              index: S,
              overflows: H
            },
            reset: {
              placement: q
            }
          };
        let O = (X = H.filter((P) => P.overflows[0] <= 0).sort((P, _) => P.overflows[1] - _.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!O)
          switch (d) {
            case "bestFit": {
              var I;
              const P = (I = H.map((_) => [_.placement, _.overflows.filter(($) => $ > 0).reduce(($, Wt) => $ + Wt, 0)]).sort((_, $) => _[1] - $[1])[0]) == null ? void 0 : I[0];
              P && (O = P);
              break;
            }
            case "initialPlacement":
              O = l;
              break;
          }
        if (i !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
async function ne(t, e) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), r = V(o), l = Q(o), a = nt(o) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = s && a ? -1 : 1, f = J(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return l && typeof h == "number" && (d = l === "end" ? h * -1 : h), a ? {
    x: d * u,
    y: m * c
  } : {
    x: m * c,
    y: d * u
  };
}
const ie = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var o, n;
      const {
        x: i,
        y: s,
        placement: r,
        middlewareData: l
      } = e, a = await ne(e, t);
      return r === ((o = l.offset) == null ? void 0 : o.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: i + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: r
        }
      };
    }
  };
}, re = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: n,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: w,
              y: x
            } = g;
            return {
              x: w,
              y: x
            };
          }
        },
        ...a
      } = J(t, e), c = {
        x: o,
        y: n
      }, u = await At(e, a), f = nt(V(i)), m = Ct(f);
      let d = c[m], h = c[f];
      if (s) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = d + u[g], v = d - u[w];
        d = at(x, d, v);
      }
      if (r) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", x = h + u[g], v = h - u[w];
        h = at(x, h, v);
      }
      const p = l.fn({
        ...e,
        [m]: d,
        [f]: h
      });
      return {
        ...p,
        data: {
          x: p.x - o,
          y: p.y - n
        }
      };
    }
  };
}, bt = Math.min, U = Math.max, ot = Math.round, W = (t) => ({
  x: t,
  y: t
});
function N(t) {
  return St(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function index_BrpNeah_A(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function F(t) {
  var e;
  return (e = (St(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function St(t) {
  return t instanceof Node || t instanceof index_BrpNeah_A(t).Node;
}
function index_BrpNeah_D(t) {
  return t instanceof Element || t instanceof index_BrpNeah_A(t).Element;
}
function index_BrpNeah_L(t) {
  return t instanceof HTMLElement || t instanceof index_BrpNeah_A(t).HTMLElement;
}
function xt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof index_BrpNeah_A(t).ShadowRoot;
}
function Z(t) {
  const {
    overflow: e,
    overflowX: o,
    overflowY: n,
    display: i
  } = index_BrpNeah_k(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + o) && !["inline", "contents"].includes(i);
}
function se(t) {
  return ["table", "td", "th"].includes(N(t));
}
function mt(t) {
  const e = pt(), o = index_BrpNeah_k(t);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function le(t) {
  let e = K(t);
  for (; index_BrpNeah_L(e) && !it(e); ) {
    if (mt(e))
      return e;
    e = K(e);
  }
  return null;
}
function pt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function it(t) {
  return ["html", "body", "#document"].includes(N(t));
}
function index_BrpNeah_k(t) {
  return index_BrpNeah_A(t).getComputedStyle(t);
}
function rt(t) {
  return index_BrpNeah_D(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function K(t) {
  if (N(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    xt(t) && t.host || // Fallback.
    F(t)
  );
  return xt(e) ? e.host : e;
}
function kt(t) {
  const e = K(t);
  return it(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : index_BrpNeah_L(e) && Z(e) ? e : kt(e);
}
function ft(t, e, o) {
  var n;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const i = kt(t), s = i === ((n = t.ownerDocument) == null ? void 0 : n.body), r = index_BrpNeah_A(i);
  return s ? e.concat(r, r.visualViewport || [], Z(i) ? i : [], r.frameElement && o ? ft(r.frameElement) : []) : e.concat(i, ft(i, [], o));
}
function Rt(t) {
  const e = index_BrpNeah_k(t);
  let o = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const i = index_BrpNeah_L(t), s = i ? t.offsetWidth : o, r = i ? t.offsetHeight : n, l = ot(o) !== s || ot(n) !== r;
  return l && (o = s, n = r), {
    width: o,
    height: n,
    $: l
  };
}
function Pt(t) {
  return index_BrpNeah_D(t) ? t : t.contextElement;
}
function j(t) {
  const e = Pt(t);
  if (!index_BrpNeah_L(e))
    return W(1);
  const o = e.getBoundingClientRect(), {
    width: n,
    height: i,
    $: s
  } = Rt(e);
  let r = (s ? ot(o.width) : o.width) / n, l = (s ? ot(o.height) : o.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const ae = /* @__PURE__ */ W(0);
function _t(t) {
  const e = index_BrpNeah_A(t);
  return !pt() || !e.visualViewport ? ae : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ce(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== index_BrpNeah_A(t) ? !1 : e;
}
function index_BrpNeah_G(t, e, o, n) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const i = t.getBoundingClientRect(), s = Pt(t);
  let r = W(1);
  e && (n ? index_BrpNeah_D(n) && (r = j(n)) : r = j(t));
  const l = ce(s, o, n) ? _t(s) : W(0);
  let a = (i.left + l.x) / r.x, c = (i.top + l.y) / r.y, u = i.width / r.x, f = i.height / r.y;
  if (s) {
    const m = index_BrpNeah_A(s), d = n && index_BrpNeah_D(n) ? index_BrpNeah_A(n) : n;
    let h = m, p = h.frameElement;
    for (; p && n && d !== h; ) {
      const g = j(p), w = p.getBoundingClientRect(), x = index_BrpNeah_k(p), v = w.left + (p.clientLeft + parseFloat(x.paddingLeft)) * g.x, C = w.top + (p.clientTop + parseFloat(x.paddingTop)) * g.y;
      a *= g.x, c *= g.y, u *= g.x, f *= g.y, a += v, c += C, h = index_BrpNeah_A(p), p = h.frameElement;
    }
  }
  return et({
    width: u,
    height: f,
    x: a,
    y: c
  });
}
const fe = [":popover-open", ":modal"];
function Lt(t) {
  return fe.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function de(t) {
  let {
    elements: e,
    rect: o,
    offsetParent: n,
    strategy: i
  } = t;
  const s = i === "fixed", r = F(n), l = e ? Lt(e.floating) : !1;
  if (n === r || l && s)
    return o;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = W(1);
  const u = W(0), f = index_BrpNeah_L(n);
  if ((f || !f && !s) && ((N(n) !== "body" || Z(r)) && (a = rt(n)), index_BrpNeah_L(n))) {
    const m = index_BrpNeah_G(n);
    c = j(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - a.scrollLeft * c.x + u.x,
    y: o.y * c.y - a.scrollTop * c.y + u.y
  };
}
function ue(t) {
  return Array.from(t.getClientRects());
}
function $t(t) {
  return index_BrpNeah_G(F(t)).left + rt(t).scrollLeft;
}
function he(t) {
  const e = F(t), o = rt(t), n = t.ownerDocument.body, i = U(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = U(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -o.scrollLeft + $t(t);
  const l = -o.scrollTop;
  return index_BrpNeah_k(n).direction === "rtl" && (r += U(e.clientWidth, n.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: l
  };
}
function me(t, e) {
  const o = index_BrpNeah_A(t), n = F(t), i = o.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, r = i.height;
    const c = pt();
    (!c || c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: a
  };
}
function pe(t, e) {
  const o = index_BrpNeah_G(t, !0, e === "fixed"), n = o.top + t.clientTop, i = o.left + t.clientLeft, s = index_BrpNeah_L(t) ? j(t) : W(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, a = i * s.x, c = n * s.y;
  return {
    width: r,
    height: l,
    x: a,
    y: c
  };
}
function vt(t, e, o) {
  let n;
  if (e === "viewport")
    n = me(t, o);
  else if (e === "document")
    n = he(F(t));
  else if (index_BrpNeah_D(e))
    n = pe(e, o);
  else {
    const i = _t(t);
    n = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return et(n);
}
function Dt(t, e) {
  const o = K(t);
  return o === e || !index_BrpNeah_D(o) || it(o) ? !1 : index_BrpNeah_k(o).position === "fixed" || Dt(o, e);
}
function ge(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let n = ft(t, [], !1).filter((l) => index_BrpNeah_D(l) && N(l) !== "body"), i = null;
  const s = index_BrpNeah_k(t).position === "fixed";
  let r = s ? K(t) : t;
  for (; index_BrpNeah_D(r) && !it(r); ) {
    const l = index_BrpNeah_k(r), a = mt(r);
    !a && l.position === "fixed" && (i = null), (s ? !a && !i : !a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Z(r) && !a && Dt(t, r)) ? n = n.filter((u) => u !== r) : i = l, r = K(r);
  }
  return e.set(t, n), n;
}
function we(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: n,
    strategy: i
  } = t;
  const r = [...o === "clippingAncestors" ? ge(e, this._c) : [].concat(o), n], l = r[0], a = r.reduce((c, u) => {
    const f = vt(e, u, i);
    return c.top = U(f.top, c.top), c.right = bt(f.right, c.right), c.bottom = bt(f.bottom, c.bottom), c.left = U(f.left, c.left), c;
  }, vt(e, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ye(t) {
  const {
    width: e,
    height: o
  } = Rt(t);
  return {
    width: e,
    height: o
  };
}
function be(t, e, o) {
  const n = index_BrpNeah_L(e), i = F(e), s = o === "fixed", r = index_BrpNeah_G(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = W(0);
  if (n || !n && !s)
    if ((N(e) !== "body" || Z(i)) && (l = rt(e)), n) {
      const f = index_BrpNeah_G(e, !0, s, e);
      a.x = f.x + e.clientLeft, a.y = f.y + e.clientTop;
    } else
      i && (a.x = $t(i));
  const c = r.left + l.scrollLeft - a.x, u = r.top + l.scrollTop - a.y;
  return {
    x: c,
    y: u,
    width: r.width,
    height: r.height
  };
}
function Et(t, e) {
  return !index_BrpNeah_L(t) || index_BrpNeah_k(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Tt(t, e) {
  const o = index_BrpNeah_A(t);
  if (!index_BrpNeah_L(t) || Lt(t))
    return o;
  let n = Et(t, e);
  for (; n && se(n) && index_BrpNeah_k(n).position === "static"; )
    n = Et(n, e);
  return n && (N(n) === "html" || N(n) === "body" && index_BrpNeah_k(n).position === "static" && !mt(n)) ? o : n || le(t) || o;
}
const xe = async function(t) {
  const e = this.getOffsetParent || Tt, o = this.getDimensions;
  return {
    reference: be(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await o(t.floating)
    }
  };
};
function ve(t) {
  return index_BrpNeah_k(t).direction === "rtl";
}
const dt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: de,
  getDocumentElement: F,
  getClippingRect: we,
  getOffsetParent: Tt,
  getElementRects: xe,
  getClientRects: ue,
  getDimensions: ye,
  getScale: j,
  isElement: index_BrpNeah_D,
  isRTL: ve
}, Ee = re, Ce = oe, Oe = ee, Ae = (t, e, o) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: dt,
    ...o
  }, s = {
    ...i.platform,
    _c: n
  };
  return te(t, e, {
    ...i,
    platform: s
  });
};
function Se(t) {
  return ke(t);
}
function st(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function ke(t) {
  for (let e = t; e; e = st(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = st(t); e; e = st(e)) {
    if (!(e instanceof Element))
      continue;
    const o = getComputedStyle(e);
    if (o.display !== "contents" && (o.position !== "static" || o.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
let Re = class {
  constructor(e, o) {
    this._relativeRoot = null, this.setOptions(o), (this._host = e).addController(this);
  }
  hostConnected() {
    this._relativeRoot = this._host.parentNode instanceof ShadowRoot ? this._host.parentNode.host : this._host, this.handleClickOutside = this.handleClickOutside.bind(this), this.handleClick = this.handleClick.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.addEventListeners();
  }
  hostDisconnected() {
    this.removeEventListeners();
  }
  get targetElement() {
    return helpers_uHZJbBPu_l(
      this._relativeRoot || this._host,
      `#${this._options.target}`,
      !1
    );
  }
  get floatingElement() {
    return this._host;
  }
  get arrowElement() {
    return this._host.shadowRoot.querySelector(".arrow");
  }
  get middlewares() {
    const e = [
      ie(this._options.offset),
      Ee(),
      Oe({ element: this.arrowElement })
    ];
    if (this._options.flip) {
      let o;
      switch (this._options.placement) {
        case "left": {
          o = ["left", "bottom", "top", "right"];
          break;
        }
        case "right": {
          o = ["right", "bottom", "top", "left"];
          break;
        }
        case "top": {
          o = ["top", "right", "bottom", "left"];
          break;
        }
        case "bottom": {
          o = ["bottom", "right", "top", "left"];
          break;
        }
        default: {
          o = ["bottom", "right", "top", "left"];
          break;
        }
      }
      e.push(Ce({ fallbackPlacements: o }));
    }
    return e;
  }
  async updatePosition() {
    const { x: e, y: o, strategy: n, placement: i, middlewareData: s } = await Ae(
      this.targetElement,
      this.floatingElement,
      {
        placement: this._options.placement,
        middleware: this.middlewares,
        platform: {
          ...dt,
          getOffsetParent: (l) => dt.getOffsetParent(l, Se)
        }
      }
    );
    Object.assign(this.floatingElement.style, {
      position: n,
      left: `${e}px`,
      top: `${o}px`
    });
    const r = { top: "bottom", right: "left", bottom: "top", left: "right" }[i.split("-")[0]];
    if (s.arrow && this.arrowElement) {
      const { x: l, y: a } = s.arrow;
      Object.assign(this.arrowElement.style, {
        left: l == null ? "" : `${l}px`,
        top: a == null ? "" : `${a}px`,
        right: "",
        bottom: "",
        [r]: `${-this.arrowElement.offsetWidth / 2 - 1}px`,
        visibility: "visible",
        [`${i}`]: ""
      }), this.arrowElement.setAttribute("flyout-placement", i);
    }
  }
  setOptions(e) {
    return this._options = e, this;
  }
  // Flyout is often composed within another component,
  // so we need to check if the target is part of that parent
  isPartOfParent(e, o) {
    return !!(e.parentNode instanceof ShadowRoot && e.parentNode.host.contains(o));
  }
  addEventListeners() {
    this.targetElement && this.floatingElement && (this.floatingElement.addEventListener("keydown", this.handleKeyDown), this.targetElement.addEventListener("keydown", this.handleKeyDown), this.targetElement.addEventListener("click", this.handleClick));
  }
  removeEventListeners() {
    this.targetElement && this.floatingElement && (this.floatingElement.removeEventListener("keydown", this.handleKeyDown), this.targetElement.removeEventListener("click", this.handleClick));
  }
  setup() {
    this.targetElement.classList.add("active"), this.floatingElement.setAttribute("aria-hidden", "false"), document.addEventListener("click", this.handleClickOutside, !0);
  }
  cleanup() {
    this.targetElement.classList.remove("active"), this.floatingElement.setAttribute("aria-hidden", "true"), document.removeEventListener("click", this.handleClickOutside, !0), this.targetElement.focus();
  }
  handleClick() {
    this._host.open ? (this._host.hide(), this.cleanup()) : (this._host.show(), this.setup());
  }
  handleClickOutside(e) {
    const o = e.composedPath();
    e.button === 0 && // ignore right clicks
    this.floatingElement && this.targetElement && !o.includes(this.floatingElement) && !o.includes(this.targetElement) && (this._host.hide(), this.cleanup());
  }
  handleKeyDown(e) {
    this._host.open && e.key === A.ESC && (e.stopPropagation(), this._host.hide(), this.cleanup());
  }
};
var Pe = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, M = (t, e, o, n) => {
  for (var i = n > 1 ? void 0 : n ? _e(e, o) : e, s = t.length - 1, r; s >= 0; s--)
    (r = t[s]) && (i = (n ? r(e, o, i) : r(i)) || i);
  return n && i && Pe(e, o, i), i;
};
const Le = "moray-flyout";
let T = class extends registration_Ac3YpkNH.s {
  constructor() {
    super(...arguments), this.anchor = null, this.placement = zt.bottom, this.offset = 0, this.open = !1, this.arrow = !1, this.reflow = !1;
  }
  flyoutOptions() {
    return {
      target: this.anchor,
      placement: this.placement,
      offset: this.offset,
      flip: this.reflow
    };
  }
  async _handleOpenChange() {
    var t;
    this.open ? (await this._flyout.updatePosition(), this.style.opacity = "1", this._flyout.setup(), this.dispatchEvent(new Event(wt.onShow))) : (this.style.opacity = "0", this._flyout.cleanup(), this.dispatchEvent(new Event(wt.onHide))), (t = this._flyout) != null && t.targetElement && this._flyout.targetElement.setAttribute("aria-expanded", String(this.open));
  }
  async firstUpdated() {
    this.anchor && (this._flyout = new Re(this, this.flyoutOptions()), this._flyout.setOptions(this.flyoutOptions()), this._flyout.targetElement.getAttribute("aria-haspopup") || this._flyout.targetElement.setAttribute("aria-haspopup", "dialog"), this._flyout.targetElement.setAttribute("aria-expanded", String(this.open))), this.id && this._flyout.targetElement.setAttribute("aria-controls", this.id);
  }
  async updated(t) {
    t.has("open") && t.get("open") !== void 0 && await this._handleOpenChange();
  }
  /** Shows the Flyout. */
  show() {
    this.open = !0;
  }
  /** Hides the Flyout. */
  hide() {
    this.open = !1;
  }
  /** Toggles the open/closed state of the Flyout. */
  toggle() {
    this.open = !this.open;
  }
  render() {
    return (0,registration_Ac3YpkNH.x)`
      <div part="base" class="base">
        <slot></slot>
        ${this.arrow ? (0,registration_Ac3YpkNH.x)`<div part="arrow" class="arrow"></div>` : null}
      </div>
    `;
  }
};
T.styles = [Yt];
M([
  (0,property_CfNGmgjg.n)({ type: String })
], T.prototype, "anchor", 2);
M([
  (0,property_CfNGmgjg.n)({ type: String })
], T.prototype, "placement", 2);
M([
  (0,property_CfNGmgjg.n)({ type: Number })
], T.prototype, "offset", 2);
M([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], T.prototype, "open", 2);
M([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], T.prototype, "arrow", 2);
M([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], T.prototype, "reflow", 2);
T = M([
  (0,registration_Ac3YpkNH.r)(Le)
], T);


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/popover/index.js













const popover_S = {
  padding: "1.5rem 2.5rem"
}, popover_A = (0,registration_Ac3YpkNH.i)`
  .flyout.fade {
    ${b}
  }

  ${close_DSImWicy_p}

  .close {
    position: absolute;
    inset-inline-end: 0;
  }

  .close:focus {
    /* stylelint-disable-next-line value-keyword-case */
    outline-offset: ${vfi_CyPinwDN.b};
  }

  .body {
    padding: var(--ds-popover-padding, ${(0,registration_Ac3YpkNH.a)(popover_S.padding)});
  }
`, popover_b = {
  onShow: "onShow",
  onHide: "onHide"
};
var B = Object.defineProperty, O = Object.getOwnPropertyDescriptor, popover_o = (t, i, a, l) => {
  for (var r = l > 1 ? void 0 : l ? O(i, a) : i, n = t.length - 1, h; n >= 0; n--)
    (h = t[n]) && (r = (l ? h(i, a, r) : h(r)) || r);
  return l && r && B(i, a, r), r;
};
const popover_K = "moray-popover";
let popover_e = class extends registration_Ac3YpkNH.s {
  constructor() {
    super(...arguments), this.closeLabel = "Close dialog", this.noArrow = !1, this.noFade = !1, this.noReflow = !1, this.noTrap = !1, this.offset = 16, this.open = !1, this.placement = zt.bottom, this._tabbableElements = [], this._trapFocusWithShiftKey = (t) => {
      t.key === A.TAB && t.shiftKey && (t.preventDefault(), this._tabbableElements[this._tabbableElements.length - 1].focus());
    }, this._trapFocusWithoutShiftKey = (t) => {
      t.key === A.TAB && !t.shiftKey && (t.preventDefault(), this._tabbableElements[0].focus());
    };
  }
  _setTabbableElements() {
    helpers_uHZJbBPu_c(this._flyout).forEach(
      (t) => this._tabbableElements.push(t)
    ), helpers_uHZJbBPu_c(this).forEach(
      (t) => this._tabbableElements.push(t)
    );
  }
  _setFocusTrap(t = !0) {
    let i = null, a = null;
    this._setTabbableElements(), i = this._tabbableElements[0], a = this._tabbableElements[this._tabbableElements.length - 1], t ? (i.addEventListener("keydown", this._trapFocusWithShiftKey, !0), a.addEventListener("keydown", this._trapFocusWithoutShiftKey, !0)) : (i.removeEventListener("keydown", this._trapFocusWithShiftKey, !0), a.removeEventListener("keydown", this._trapFocusWithoutShiftKey, !0));
  }
  _handleOnShow() {
    this.show(), this.noTrap || this._setFocusTrap();
  }
  _handleOnHide() {
    this.hide(), this._setFocusTrap(!1);
  }
  /** Shows the Popover. */
  show() {
    this.open = !0;
  }
  /** Hides the Popover. */
  hide() {
    this.open = !1;
  }
  /** Toggles the Popover open and closed state. */
  toggle() {
    this.open = !this.open;
  }
  firstUpdated() {
    this.noTrap || (this.setAttribute("role", "dialog"), this.anchor && this.setAttribute("aria-labelledby", this.anchor));
  }
  updated(t) {
    t.has("noTrap") && (this.noTrap ? (this.removeAttribute("role"), this.removeAttribute("aria-labelledby")) : (this.setAttribute("role", "dialog"), this.anchor && this.setAttribute("aria-labelledby", this.anchor))), t.has("open") && (this.open ? (this._closeButton.focus(), this.dispatchEvent(new Event(popover_b.onShow))) : this.dispatchEvent(new Event(popover_b.onHide)));
  }
  render() {
    const t = {
      flyout: !0,
      fade: !this.noFade
    };
    return (0,registration_Ac3YpkNH.x)`
      <moray-flyout
        part="flyout"
        class="${(0,class_map_B6E0u_KE.e)(t)}"
        anchor="${(0,if_defined_BrcqGSt5.o)(this.anchor)}"
        ?arrow="${!this.noArrow}"
        ?reflow="${!this.noReflow}"
        offset="${this.offset}"
        ?open="${this.open}"
        placement="${this.placement}"
        tabindex="-1"
        @onHide="${this._handleOnHide}"
        @onShow="${this._handleOnShow}"
      >
        <button class="close" part="close-button" @click="${this.hide}">
          <moray-icon
            aria-label="${this.closeLabel}"
            icon="dismiss"
            size="small"
            filled
          ></moray-icon>
        </button>
        <div class="body" part="body">
          <slot></slot>
        </div>
      </moray-flyout>
    `;
  }
};
popover_e.styles = [popover_A];
popover_o([
  (0,property_CfNGmgjg.n)()
], popover_e.prototype, "anchor", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ attribute: "close-label" })
], popover_e.prototype, "closeLabel", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ type: Boolean, attribute: "no-arrow" })
], popover_e.prototype, "noArrow", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ type: Boolean, attribute: "no-fade" })
], popover_e.prototype, "noFade", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ type: Boolean, attribute: "no-reflow" })
], popover_e.prototype, "noReflow", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ type: Boolean, attribute: "no-trap" })
], popover_e.prototype, "noTrap", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ type: Number })
], popover_e.prototype, "offset", 2);
popover_o([
  (0,property_CfNGmgjg.n)({ type: Boolean, reflect: !0 })
], popover_e.prototype, "open", 2);
popover_o([
  (0,property_CfNGmgjg.n)()
], popover_e.prototype, "placement", 2);
popover_o([
  query_BFAhq_I0_d("moray-flyout")
], popover_e.prototype, "_flyout", 2);
popover_o([
  query_BFAhq_I0_d("button.close")
], popover_e.prototype, "_closeButton", 2);
popover_o([
  (0,state_B9yJz8Xo.r)()
], popover_e.prototype, "_tabbableElements", 2);
popover_e = popover_o([
  (0,registration_Ac3YpkNH.r)(popover_K)
], popover_e);


;// CONCATENATED MODULE: ./src/constants/fetch-service.ts
const FetchAPIConstants = Object.freeze({
    LOG_LEVEL_INFO: 'INFO',
    LOG_LEVEL_ERROR: 'ERROR',
    LOG_LEVEL_WARN: 'WARN',
});

;// CONCATENATED MODULE: ./src/services/fetch-service/logger.ts

/**This class will be integrated with oneDS or App insights */
/* istanbul ignore next */
class Logger {
    log(message) {
        console.log(`LOG: ${message}`);
    }
    info(message) {
        console.info(`${FetchAPIConstants.LOG_LEVEL_INFO}: ${message}`);
    }
    warn(message) {
        console.warn(`${FetchAPIConstants.LOG_LEVEL_WARN}: ${message}`);
    }
    error(message) {
        console.error(`${FetchAPIConstants.LOG_LEVEL_ERROR}: ${message}`);
    }
}
/* harmony default export */ const logger = (new Logger());

;// CONCATENATED MODULE: ./src/services/fetch-service/fetchService.ts

/* istanbul ignore next */
async function fetchResponse(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        logger.error(`There was an error: ${error}`);
        throw error;
    }
}

// EXTERNAL MODULE: ./src/services/localization/i18nMixin.ts
var i18nMixin = __webpack_require__(4638);
;// CONCATENATED MODULE: ./src/components/cascade-windows-filter-devices/cascade-windows-filter-devices.type.ts
var cascade_windows_filter_devices_type_DeviceCategory;
(function (DeviceCategory) {
    DeviceCategory["Laptop"] = "Laptop";
    DeviceCategory["TwoInOneLaptop"] = "2-in-1 Laptop";
    DeviceCategory["AllInOne"] = "All-in-One";
    DeviceCategory["Workstation"] = "Workstation";
    DeviceCategory["UltraSmallPC"] = "Ultra-small PC";
    DeviceCategory["UltraSlimNotebook"] = "Ultra-Slim Notebook";
    DeviceCategory["NextGenAIPCs"] = "Next Gen AI PCs";
})(cascade_windows_filter_devices_type_DeviceCategory || (cascade_windows_filter_devices_type_DeviceCategory = {}));
var cascade_windows_filter_devices_type_OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["Windows10Pro"] = "Windows 10 Pro";
    OperatingSystem["Windows10ProForWorkstations"] = "Windows 10 Pro for Workstations";
    OperatingSystem["Windows11Pro"] = "Windows 11 Pro";
    OperatingSystem["Windows11ProForWorkstations"] = "Windows 11 Pro for Workstations";
})(cascade_windows_filter_devices_type_OperatingSystem || (cascade_windows_filter_devices_type_OperatingSystem = {}));
var cascade_windows_filter_devices_type_ProcessorType;
(function (ProcessorType) {
    ProcessorType["AMD"] = "Amd";
    ProcessorType["Intel"] = "Intel";
    ProcessorType["MicrosoftSQ2"] = "MicrosoftSQ2";
    ProcessorType["MicrosoftSQ3"] = "MicrosoftSQ3";
    ProcessorType["Qualcomm"] = "Qualcomm";
})(cascade_windows_filter_devices_type_ProcessorType || (cascade_windows_filter_devices_type_ProcessorType = {}));
var cascade_windows_filter_devices_type_FeatureType;
(function (FeatureType) {
    FeatureType["Connectivity"] = "Connectivity";
    FeatureType["Copilotkey"] = "Copilotkey";
    FeatureType["MMD"] = "MMD";
    FeatureType["PSP"] = "PSP";
    FeatureType["RemoteWork"] = "RemoteWork";
    FeatureType["SecuredcorePC"] = "SecuredcorePC";
    FeatureType["SIM"] = "SIM";
    FeatureType["TouchScreen"] = "TouchScreen";
    FeatureType["Sustainability"] = "Sustainability";
    FeatureType["FaceLogin"] = "FaceLogin";
    FeatureType["FingerprintLogin"] = "FingerprintLogin";
    FeatureType["WindowsInk"] = "WindowsInk";
})(cascade_windows_filter_devices_type_FeatureType || (cascade_windows_filter_devices_type_FeatureType = {}));
var PrimaryBadgeColor;
(function (PrimaryBadgeColor) {
    PrimaryBadgeColor["Standard"] = "standard";
    PrimaryBadgeColor["Gradient"] = "gradient";
})(PrimaryBadgeColor || (PrimaryBadgeColor = {}));
var PriorityBrand;
(function (PriorityBrand) {
    PriorityBrand["HP"] = "hp";
    PriorityBrand["Dell"] = "dell";
    PriorityBrand["Lenovo"] = "lenovo";
})(PriorityBrand || (PriorityBrand = {}));
const cascade_windows_filter_devices_type_queryParamKeys = {
    Category2: 'category2',
    Category: 'formfactor',
    OS: 'os',
    Brand: 'brand',
    Feature: 'feature',
    HardCodedPrice: 'price',
    Processor: 'processor',
    ScreenSize: 'screensize',
    Memory: 'memory',
    Storage: 'storage',
    Displayresolution: 'displayres',
};
var cascade_windows_filter_devices_type_FilterPaneValues;
(function (FilterPaneValues) {
    FilterPaneValues["Category2"] = "Category2";
    FilterPaneValues["Category"] = "Category";
    FilterPaneValues["OS"] = "OS";
    FilterPaneValues["Brand"] = "Brand";
    FilterPaneValues["Feature"] = "Feature";
    FilterPaneValues["HardCodedPrice"] = "HardCodedPrice";
    FilterPaneValues["Processor"] = "Processor";
    FilterPaneValues["ScreenSize"] = "ScreenSize";
    FilterPaneValues["Memory"] = "Memory";
    FilterPaneValues["Storage"] = "Storage";
    FilterPaneValues["Displayresolution"] = "Displayresolution";
})(cascade_windows_filter_devices_type_FilterPaneValues || (cascade_windows_filter_devices_type_FilterPaneValues = {}));

;// CONCATENATED MODULE: ./src/components/cascade-windows-filter-devices/windowsSitesUtils.ts

class LocaleValues {
}
LocaleValues.prefixLocales = [
    'en-us',
    'en-ca',
    'ja-jp',
    'en-au',
    'en-gb',
    'ru-ru',
    'zh-cn',
];
LocaleValues.suffixLocales = ['de-de', 'fr-fr', 'fr-ca'];
LocaleValues.screenSizeUnits = 'inches';
LocaleValues.screenSizeRangeUptoValue = '0-13.9';
LocaleValues.screenSizeRangeBetweenValue = '14-16';
LocaleValues.screenSizeRangeAboveValue = '17-9999999';
LocaleValues.memoryRangeUptoValue = '4-8';
LocaleValues.memoryRangeUpto8Value = 'upto8';
LocaleValues.memoryRange16Value = '16';
LocaleValues.memoryRange32Value = '32';
LocaleValues.memoryRangeAboveValue = '64-9999999';
LocaleValues.storageRangeUptoValue = '32-128';
LocaleValues.storageRangeUpto128Value = 'upto128';
LocaleValues.storageRangeBetween256and512Value = '256to512';
LocaleValues.storageRangeBetweenValue = '256-512';
LocaleValues.storageRangeAboveValue = '1024-99999';
LocaleValues.storageRangeOnePlusValue = '1+';
LocaleValues.storageValueTB = 'TB';
LocaleValues.storageValueTo = 'To';
LocaleValues.currencySymbolsRegularExpression = /[$€¥£]/;
function mapCardDataToCardDetails(cardData, currencySymbol, locale, localeSecondaryBadge, doRandomization) {
    const cardDetails = [];
    cardData.forEach((device) => {
        if (!cardDetails.find((dev) => dev.headingText.toLowerCase() === device.DeviceName.toLowerCase())) {
            cardDetails?.push({
                imageSmall: device.DeviceImage?.ImageUrl,
                imageAltText: device.DeviceImage?.AltText,
                category: device.Category,
                badge: device.OEMPromotions,
                badgeSecondary: device.Feature?.indexOf('SecuredcorePC') > -1
                    ? localeSecondaryBadge
                    : '',
                brandName: device.Brand,
                headingText: device.DeviceName,
                bodyText: device.FamilyConfig[2]?.split('|').slice(0, -1),
                linkText: device.ShopNowCTA?.Text || device.LearnMoreCTA?.Text,
                linkOpenInNewTab: device.LearnMoreCTA?.Text ? true : false,
                linkTarget: device.ShopNowCTA?.Url || device.LearnMoreCTA?.Url,
                depth: true,
                linkType: 'button',
                price: formatPrice(device.HardCodedPrice, currencySymbol, locale?.toLowerCase()),
                position: device.FeaturePosition?.split(':')
                    ? device.FeaturePosition?.split(':')[1]
                    : 99,
                productId: device.ProductID,
                skuId: device.SKUID,
                checked: false,
                oem: (device.ShopNowCTA?.Url || device.LearnMoreCTA?.Url)
                    ?.toLowerCase()
                    .includes(device.Brand.toLowerCase())
                    ? true
                    : false,
            });
        }
    });
    if (doRandomization) {
        return randomize(cardDetails);
    }
    return cardDetails;
}
const randomize = (array) => {
    let currentIndex = array?.length;
    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
};
function mapCardDataToLightBoxProductData(cardData) {
    if (cardData) {
        const productData = {
            productID: cardData.ProductID,
            cpu: cardData.Specification?.CPU,
            gpu: cardData.Specification?.GPU,
            memory: cardData.Specification?.Memory,
            storage: cardData.Specification?.Storage,
            retailers: cardData.Retailers.map((retailer) => ({
                purchaseLink: retailer.PurchaseLink,
                logo: retailer.Logo,
                price: retailer.Price,
                retailerName: retailer.RetailerName,
            })),
            variationIds: cardData.VariationIds,
            deviceImageUrl: cardData.DeviceImage?.ImageUrl,
            deviceAltText: cardData.DeviceImage?.AltText,
            deviceName: cardData.DeviceName,
            configuration: cardData.Configuration,
            hardCodedPrice: cardData.HardCodedPrice,
            feature: cardData.Feature,
            skuId: cardData.SKUID,
            brand: cardData.Brand,
        };
        return productData;
    }
    return null;
}
/** extracts unique values for a specified key from a dataset, checks
 * if these values are present in the query parameters, and formats the values accordingly.
 * The formatted values are used for various filter types in the filter pane */
function getFilterPaneUniqueValues(data, key, queryParams, localeData) {
    const convertedQueryParams = convertQueryParamsToLowerCase(queryParams);
    const uniqueValues = new Set();
    const extractValues = (obj, key) => {
        for (const prop in obj) {
            if (typeof obj[prop] === 'object') {
                extractValues(obj[prop], key);
            }
            else if (prop === key &&
                obj[prop] !== undefined &&
                obj[prop] !== null) {
                // Handle non-array fields
                const stringValue = String(obj[prop]);
                uniqueValues.add(stringValue);
            }
        }
    };
    const extractArrayValues = (obj, key) => {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((value) => {
                const stringValue = String(value).trim();
                uniqueValues.add(stringValue);
            });
        }
    };
    const handleDataExtraction = (data, key) => {
        const extractFunction = key === 'Feature' || key === 'Processor'
            ? extractArrayValues
            : extractValues;
        data.forEach((item) => extractFunction(item, key));
    };
    const mapUniqueValuesToObjects = (uniqueValues, queryParamKey, queryParams) => {
        return Array.from(uniqueValues).map((value) => ({
            checkedKey: value,
            checkedValue: value,
            checked: queryParams[queryParamKey]?.includes(value.toLowerCase()) || false,
        }));
    };
    const formatDataByKey = (key, uniqueValues, localeData, queryParams) => {
        const formattingFunctions = {
            Category2: formatCategories2Ranges,
            Category: formatCategoriesRanges,
            OS: formatOSRanges,
            Brand: formatBrandsRanges,
            Feature: formatFeaturesRanges,
            HardCodedPrice: formatPriceRanges,
            Processor: formatProcessorRanges,
            ScreenSize: formatScreenSizeRanges,
            Memory: formatMemoryRanges,
            Storage: formatStorageRanges,
            Displayresolution: formatDisplayResolutionRanges,
        };
        const dataKey = queryParamKeys[key];
        if (dataKey &&
            formattingFunctions[key]) {
            const mappedValues = mapUniqueValuesToObjects(uniqueValues, dataKey, queryParams);
            return formattingFunctions[key](mappedValues, localeData, queryParams);
        }
        return null;
    };
    handleDataExtraction(data, key);
    return formatDataByKey(key, uniqueValues, localeData, convertedQueryParams);
}
function convertQueryParamsToLowerCase(queryParams) {
    const convertedParams = {};
    Object.keys(queryParams).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
            const convertedLowerCaseKey = key.toLowerCase();
            convertedParams[convertedLowerCaseKey] = queryParams[key].map((param) => {
                return param.toLowerCase();
            });
        }
    });
    return convertedParams;
}
/**
 * Takes an array of category2 objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatCategories2Ranges(categories2, _localeData, queryParams) {
    // Sort the categories alphabetically
    const sortedCategories = categories2.sort((a, b) => a.checkedKey.localeCompare(b.checkedKey));
    // Map the sorted categories to the desired format and check the queryParams
    return sortedCategories.map((category2) => {
        const unprocessedname = category2.checkedKey;
        let isChecked = category2.checked;
        /** if the url has query parameters and category is part of provided queryparms,
         * this helps to determine which of the value needs to be checked in category by comparing the provided queryparams with value */
        if (queryParams && queryParams['category']) {
            if (queryParams['category'].includes('copilotpcs') &&
                unprocessedname === 'Copilot+ PCs') {
                isChecked = true;
            }
            else if (queryParams['category'].includes('modernpc') &&
                unprocessedname === 'Modern PC') {
                isChecked = true;
            }
        }
        return {
            checkedKey: category2.checkedKey,
            checkedValue: category2.checkedValue,
            checked: isChecked,
        };
    });
}
/**
 * Takes an array of category objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatCategoriesRanges(categories, localeData, queryParams) {
    // Define order values for different categories using the enum
    const orderValues = {
        [DeviceCategory.Laptop]: 0,
        [DeviceCategory.UltraSlimNotebook]: 1,
        [DeviceCategory.TwoInOneLaptop]: 2,
        [DeviceCategory.AllInOne]: 3,
        [DeviceCategory.Workstation]: 4,
        [DeviceCategory.UltraSmallPC]: 5,
        [DeviceCategory.NextGenAIPCs]: 6,
    };
    // Map categories to the desired format and include order values
    const formattedCategories = categories.map((category) => {
        let name = category.checkedKey;
        const orderValue = orderValues[name];
        const valueName = category.checkedValue;
        let isChecked = category.checked;
        // Apply logic for category values using switch case
        switch (name) {
            case DeviceCategory.UltraSlimNotebook:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[0];
                break;
            case DeviceCategory.Laptop:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[1];
                break;
            case DeviceCategory.TwoInOneLaptop:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[2];
                break;
            case DeviceCategory.AllInOne:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[3];
                break;
            case DeviceCategory.UltraSmallPC:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[4];
                break;
            case DeviceCategory.Workstation:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[5];
                break;
            case DeviceCategory.NextGenAIPCs:
                name = localeData[0]?.localespecificfields.LocDevices.split('|')[6];
                break;
        }
        /**
         * If the URL contains query parameters and "formfactor" is among them,
         * this helps determine which values should be checked in the formfactor filter
         * by comparing the provided query parameters with the available values.
         */
        if (queryParams && queryParams['formfactor']) {
            const formFactorQueryMapping = {
                Laptop: ['laptop'],
                TwoInOneLaptop: ['2in1'],
                AllInOne: ['desktopallin1'],
                Workstation: ['workstation'],
                UltraSmallPC: ['ultra-small-pcs'],
                UltraSlimNotebook: ['ultra-slim-notebook'],
                NextGenAIPCs: ['next-gen-ai-pcs'],
            };
            for (const formFactor in formFactorQueryMapping) {
                const keywords = formFactorQueryMapping[formFactor];
                if (keywords.some((keyword) => queryParams['formfactor'].includes(keyword)) &&
                    valueName ===
                        DeviceCategory[formFactor]) {
                    isChecked = true;
                    break;
                }
            }
        }
        return {
            checkedKey: name,
            checkedValue: valueName,
            checked: isChecked,
            orderValue: orderValue,
        };
    });
    // Sort categories based on order values
    formattedCategories.sort((a, b) => a.orderValue - b.orderValue);
    return formattedCategories;
}
/**
 * Takes an array of os objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatOSRanges(osList, localeData, queryParams) {
    // Temporarily store unique OS details in an array
    const uniqueOSArray = [];
    osList.forEach((os) => {
        let name = os.checkedKey;
        let isChecked = os.checked;
        // const valueName = os.checkedValue;
        // Split the string by ': ' and get the second part which contains the OS name
        const modifiedValue = name.split(': ');
        if (modifiedValue?.length > 1) {
            name = modifiedValue[1];
        }
        // Apply logic for OS values using enum and switch case
        switch (name) {
            case OperatingSystem.Windows10Pro:
                name = localeData[0]?.localespecificfields.LocOS.split('|')[0];
                break;
            case OperatingSystem.Windows10ProForWorkstations:
                name = localeData[0]?.localespecificfields.LocOS.split('|')[1];
                break;
            case OperatingSystem.Windows11Pro:
                name = localeData[0]?.localespecificfields.LocOS.split('|')[2];
                break;
            case OperatingSystem.Windows11ProForWorkstations:
                name = localeData[0]?.localespecificfields.LocOS.split('|')[3];
                break;
        }
        /** if the url has query parameters and os is part of provided queryparms,
         * this helps to determine which of the value needs to be checked in os by comparing the provided queryparams with value */
        if (queryParams && queryParams['os']) {
            if (queryParams['os'].includes('windows10pro') &&
                name === localeData[0]?.localespecificfields.LocOS.split('|')[0]) {
                isChecked = true;
            }
            else if (queryParams['os'].includes('windows10proworkstations') &&
                name === localeData[0]?.localespecificfields.LocOS.split('|')[1]) {
                isChecked = true;
            }
            else if (queryParams['os'].includes('windows11pro') &&
                name === localeData[0]?.localespecificfields.LocOS.split('|')[2]) {
                isChecked = true;
            }
            else if ((queryParams['os'].includes('windows11proworkstations') ||
                queryParams['os'].includes('windows11proforworkstations')) &&
                name === localeData[0]?.localespecificfields.LocOS.split('|')[3]) {
                isChecked = true;
            }
        }
        uniqueOSArray.push({
            name,
            isChecked,
        });
    });
    // Convert the array to a Set to ensure uniqueness
    const uniqueOS = new Set(uniqueOSArray.map((os) => os.name));
    // Map OS to the desired format and include order values
    const osOrder = {
        'Windows 11 Pro': 0,
        'Windows 11 Pro for Workstations': 1,
        'Windows 10 Pro': 2,
        'Windows 10 Pro for Workstations': 3,
    };
    const formattedOS = Array.from(uniqueOS).map((os) => {
        const osDetail = uniqueOSArray.find((item) => item.name === os);
        return {
            checkedKey: os,
            checkedValue: os,
            checked: osDetail ? osDetail.isChecked : false,
            orderValue: osOrder[os], // Assigning the order value from the osOrder object
        };
    });
    // Sort OS based on order values
    formattedOS.sort((a, b) => a.orderValue - b.orderValue);
    return formattedOS;
}
/**
 * Takes an array of brand objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatBrandsRanges(brands, _localeData, queryParams) {
    // Sort the brands alphabetically
    const sortedBrands = brands.sort((a, b) => a.checkedKey.localeCompare(b.checkedKey));
    // Map the sorted brands to the desired format and check the queryParams
    return sortedBrands.map((brand) => {
        let isChecked = brand.checked;
        // Check query parameters for brand and set isChecked accordingly
        if (queryParams && queryParams['brand']) {
            if (queryParams['brand'].includes(brand.checkedKey.toLowerCase())) {
                isChecked = true;
            }
        }
        return {
            checkedKey: brand.checkedKey,
            checkedValue: brand.checkedValue,
            checked: isChecked,
        };
    });
}
/**using the following code we are trying to modify the feature values if they have any superscript tag in them
 * to the disired format to display inthe feature values */
/**TODO:
 * Investigate if styling is being applied to the entire localeData.  Remove if it is not being used here, and test for any dependencies
 */
function replaceSupTag(input, _localeData) {
    let output = input;
    let ariaLabel = '';
    let numberConnectivity = '';
    if (input?.includes('<sup>')) {
        const match = input.match(/<sup>(\d+)<\/sup>/);
        if (match) {
            numberConnectivity = match[1];
            ariaLabel = 'Footnote ' + numberConnectivity;
            output = input
                .replace(/(&nbsp;)?<sup>/, (_match, group1) => {
                // If &nbsp; is already present, return the match as is
                if (group1) {
                    return ('<sup><a aria-label="' +
                        ariaLabel +
                        '" href="javascript:void(0);" class="c-hyperlink supBLink"><span class="supText">');
                }
                else {
                    // If &nbsp; is not present, add it before <sup>
                    return ('&nbsp;<sup><a aria-label="' +
                        ariaLabel +
                        '" href="javascript:void(0);" class="c-hyperlink supBLink"><span class="supText">');
                }
            })
                .replace('</sup>', '</span></a></sup>');
        }
    }
    return output;
}
/**
 * Takes an array of feature objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatFeaturesRanges(features, localeData, queryParams) {
    // Define an object to store unique feature names and their corresponding values
    const uniqueFeatures = {};
    // Apply the specified logic for feature values using enum
    features.forEach((feature) => {
        const unprocessedname = feature.checkedKey;
        let processedname = '';
        let isChecked = feature.checked;
        // Apply logic for feature values using switch case
        if (localeData &&
            localeData[0] &&
            localeData[0].localespecificfields &&
            localeData[0].localespecificfields.LocFeatures) {
            const locFeatures = localeData[0].localespecificfields.LocFeatures.split('|');
            switch (unprocessedname) {
                case FeatureType.RemoteWork:
                    processedname = replaceSupTag(locFeatures[0], localeData);
                    break;
                case FeatureType.MMD:
                    processedname = replaceSupTag(locFeatures[1], localeData);
                    break;
                case FeatureType.FaceLogin:
                    processedname = replaceSupTag(locFeatures[2], localeData);
                    break;
                case FeatureType.FingerprintLogin:
                    processedname = replaceSupTag(locFeatures[3], localeData);
                    break;
                case FeatureType.Connectivity:
                    processedname = replaceSupTag(locFeatures[4], localeData);
                    break;
                case FeatureType.SecuredcorePC:
                    processedname = replaceSupTag(locFeatures[5], localeData);
                    break;
                case FeatureType.TouchScreen:
                    processedname = replaceSupTag(locFeatures[6], localeData);
                    break;
                case FeatureType.WindowsInk:
                    processedname = replaceSupTag(locFeatures[7], localeData);
                    break;
                case FeatureType.SIM:
                    processedname = replaceSupTag(locFeatures[8], localeData);
                    break;
                case FeatureType.PSP:
                    processedname = replaceSupTag(locFeatures[9], localeData);
                    break;
                case FeatureType.Sustainability:
                    processedname = replaceSupTag(locFeatures[10], localeData);
                    break;
                case FeatureType.Copilotkey:
                    if (locFeatures[11]) {
                        processedname = replaceSupTag(locFeatures[11], localeData);
                    }
                    else {
                        processedname = unprocessedname;
                    }
                    break;
                default:
                    processedname = unprocessedname;
                    break;
            }
        }
        /** if the url has query parameters and feature is part of provided queryparms,
         * this helps to determine which of the value needs to be checked in feature by comparing the provided queryparams with value */
        if (queryParams && queryParams['feature']) {
            const featureQueryMapping = {
                Connectivity: ['connectivity', '4g5glte'],
                Copilotkey: ['copilotkey', 'copilot'],
                MMD: ['mmd', 'microsoftmanageddesktop'],
                PSP: ['psp', 'plutonsecurityprocessor'],
                RemoteWork: ['remotework'],
                SecuredcorePC: ['securedcorepc'],
                SIM: ['sim', 'simsupport'],
                TouchScreen: ['touchscreen'],
                Sustainability: ['sustainability'],
                FaceLogin: ['facelogin', 'hellofacial'],
                FingerprintLogin: ['fingerprintlogin', 'hellofingerprint'],
                WindowsInk: ['windowsink', 'ink'],
            };
            for (const featureType of Object.keys(featureQueryMapping)) {
                const keywords = featureQueryMapping[featureType];
                if (keywords.some((keyword) => queryParams['feature'].includes(keyword)) &&
                    unprocessedname === FeatureType[featureType]) {
                    isChecked = true;
                    break;
                }
            }
        }
        // Add the feature name, its value, and isChecked status to the object
        uniqueFeatures[unprocessedname] = {
            processedName: processedname,
            isChecked,
        };
    });
    // Map features to the desired format and sort by the checkedKey (processedname)
    return Object.entries(uniqueFeatures)
        .map(([name, value]) => ({
        checkedKey: value.processedName || '',
        checkedValue: name,
        checked: value.isChecked,
    }))
        .sort((a, b) => {
        if (a.checkedValue === 'Copilotkey')
            return -1;
        if (b.checkedValue === 'Copilotkey')
            return 1;
        return a.checkedKey.localeCompare(b.checkedKey);
    });
}
/**
 * Takes an array of price objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatPriceRanges(prices, localeData, queryParams) {
    // Convert string values to numbers and sort them
    const localeValue = localeData[0]?.localespecificlocale?.toLowerCase();
    const localeCurrencySymbol = localeData[0]?.localespecificfields.CurrencySymbol;
    const localePriceBeforefilterText = localeData[0]?.localespecificfields.PriceBeforefilterText;
    const sortedPrices = prices
        .map((price) => parseFloat(price.checkedKey))
        .sort((a, b) => a - b);
    // Calculate the minimum and maximum price values
    const minValue = sortedPrices[0];
    const maxValue = sortedPrices[sortedPrices?.length - 1];
    const range = (maxValue - minValue) / 5;
    // Function to round to the nearest 100
    const roundToNearest100 = (num) => Math.round(num / 100) * 100;
    // Generate price ranges with order values
    const ranges = [];
    let rangeStart = minValue;
    for (let i = 0; i < 5; i++) {
        const rangeEnd = i === 4 ? maxValue + 1 : rangeStart + range;
        let rangeName = '';
        // Round the start and end values to the nearest 100
        const roundedRangeStart = roundToNearest100(rangeStart);
        const roundedRangeEndMinusOne = roundToNearest100(rangeStart + range) - 1;
        /**
         * This logic checks the locale value to determine where to display the currency symbol in relation to the price.
         * For example, in locales such as en-us and en-ca, the currency symbol should be a prefix (e.g., $300).
         * In other locales, the currency symbol should be a suffix (e.g., 300€).
         */
        if (LocaleValues.prefixLocales.includes(localeValue)) {
            if (i === 0) {
                rangeName = `${localePriceBeforefilterText} ${localeCurrencySymbol}${roundedRangeEndMinusOne}`;
                rangeStart--; // Subtract 1 only for the first range
            }
            else if (i === 4) {
                rangeName = `${localeCurrencySymbol}${roundedRangeStart}+`;
            }
            else {
                rangeName = `${localeCurrencySymbol}${roundedRangeStart} - ${localeCurrencySymbol}${roundedRangeEndMinusOne}`;
            }
        }
        else if (LocaleValues.suffixLocales.includes(localeValue)) {
            if (i === 0) {
                rangeName = `${localePriceBeforefilterText} ${roundedRangeEndMinusOne}${localeCurrencySymbol}`;
                rangeStart--; // Subtract 1 only for the first range
            }
            else if (i === 4) {
                rangeName = `${roundedRangeStart}${localeCurrencySymbol}+`;
            }
            else {
                rangeName = `${roundedRangeStart}${localeCurrencySymbol} - ${roundedRangeEndMinusOne}${localeCurrencySymbol}`;
            }
        }
        ranges.push({ checkedKey: rangeName, orderValue: i });
        rangeStart = rangeEnd;
    }
    // Map prices to categories
    const categorizedPrices = prices.map((price) => {
        const value = parseFloat(price.checkedKey);
        let category = 0;
        for (let i = 0; i < 5; i++) {
            if (value <= minValue + range * (i + 1)) {
                category = i;
                break;
            }
        }
        return { value, category };
    });
    // Remove duplicate categories
    const uniqueCategories = [
        ...new Set(categorizedPrices.map((price) => price.category)),
    ];
    // If queryParams is provided, check for selected prices
    const selectedPrices = queryParams?.price || [];
    // Map categories to the desired format and sort by order value
    return uniqueCategories
        .map((category) => {
        const range = ranges[category];
        const isChecked = selectedPrices.some((price) => price === range.checkedKey);
        return {
            checkedKey: range.checkedKey,
            checkedValue: range.checkedKey,
            checked: isChecked,
            orderValue: range.orderValue,
        };
    })
        .sort((a, b) => a.orderValue - b.orderValue);
}
/**
 * Takes an array of processor objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatProcessorRanges(processors, localeData, queryParams) {
    // Get unique processors and apply the specified logic
    const uniqueProcessors = [];
    processors.forEach((processor) => {
        let processedName = processor.checkedKey;
        const unProcessedName = processor.checkedKey;
        let isChecked = processor.checked;
        // Apply logic for processor values using enum
        if (localeData && localeData[0] && localeData[0].localespecificfields) {
            switch (processedName) {
                case ProcessorType.AMD:
                    processedName =
                        localeData[0].localespecificfields.AMD || processedName;
                    break;
                case ProcessorType.Intel:
                    processedName =
                        localeData[0].localespecificfields.Intel || processedName;
                    break;
                case ProcessorType.MicrosoftSQ2:
                    processedName =
                        localeData[0].localespecificfields.MicrosoftSQ2 || processedName;
                    break;
                case ProcessorType.MicrosoftSQ3:
                    processedName =
                        localeData[0].localespecificfields.MicrosoftSQ3 || processedName;
                    break;
                case ProcessorType.Qualcomm:
                    processedName =
                        localeData[0].localespecificfields.Qualcomm || processedName;
                    break;
            }
        }
        /** if the url has query parameters and processor is part of provided queryparms,
         * this helps to determine which of the value needs to be checked in processor by comparing the provided queryparams with value */
        if (queryParams && queryParams['processor']) {
            if (queryParams['processor'].includes('amd') &&
                unProcessedName === ProcessorType.AMD) {
                isChecked = true;
            }
            else if (queryParams['processor'].includes('intel') &&
                unProcessedName === ProcessorType.Intel) {
                isChecked = true;
            }
            else if ((queryParams['processor'].includes('microsoftsq2') ||
                queryParams['processor'].includes('sq2')) &&
                unProcessedName === ProcessorType.MicrosoftSQ2) {
                isChecked = true;
            }
            else if ((queryParams['processor'].includes('microsoftsq3') ||
                queryParams['processor'].includes('sq3')) &&
                unProcessedName === ProcessorType.MicrosoftSQ3) {
                isChecked = true;
            }
            else if (queryParams['processor'].includes('qualcomm') &&
                unProcessedName === ProcessorType.Qualcomm) {
                isChecked = true;
            }
        }
        uniqueProcessors.push({
            processedName: processedName,
            unProcessedName: unProcessedName,
            isChecked: isChecked,
        });
    });
    // Sort unique processors by processed name
    const sortedProcessors = uniqueProcessors.sort((a, b) => (a.processedName || '').localeCompare(b.processedName || ''));
    // Map processors to the desired format
    return sortedProcessors.map((processor) => ({
        checkedKey: processor.processedName,
        checkedValue: processor.unProcessedName,
        checked: processor.isChecked,
    }));
}
/**
 * Takes an array of screen size objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatScreenSizeRanges(screensizes, localeData, queryParams) {
    // Convert string values to numbers and sort them
    const sortedSizes = screensizes
        .map((screensize) => {
        // Extract the numeric value using regular expression
        const value = parseFloat(screensize.checkedKey.match(/[\d.]+/)[0]);
        return { value, checked: screensize.checked };
    })
        .sort((a, b) => a.value - b.value);
    /**  When displaying the values, they should be shown as ranges instead of direct values.
     *This aids in determining the appropriate range and mapping them to the checked value
     *if any query parameters are provided in the URL.*/
    const ranges = [];
    sortedSizes.forEach((screensize) => {
        switch (true) {
            case screensize.value <= 13.9:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocDisplaysize.split('|')[0],
                    rangeValue: LocaleValues.screenSizeRangeUptoValue,
                });
                break;
            case screensize.value > 13.9 && screensize.value <= 16:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocDisplaysize.split('|')[1],
                    rangeValue: LocaleValues.screenSizeRangeBetweenValue,
                });
                break;
            default:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocDisplaysize.split('|')[2] +
                        '+',
                    rangeValue: LocaleValues.screenSizeRangeAboveValue,
                });
                break;
        }
    });
    // Remove duplicate ranges
    const uniqueRanges = Array.from(new Set(ranges.map((range) => range.range))).map((range) => ranges.find((r) => r.range === range));
    // Map ranges to the desired format
    return uniqueRanges.map((range) => {
        let isChecked = false;
        if (queryParams?.screensize) {
            if (queryParams.screensize.includes(LocaleValues.screenSizeRangeUptoValue) &&
                range?.rangeValue === LocaleValues.screenSizeRangeUptoValue) {
                isChecked = true;
            }
            else if (queryParams.screensize.includes(LocaleValues.screenSizeRangeBetweenValue) &&
                range?.rangeValue === LocaleValues.screenSizeRangeBetweenValue) {
                isChecked = true;
            }
            else if (queryParams.screensize.includes(LocaleValues.screenSizeRangeAboveValue) &&
                range?.rangeValue === LocaleValues.screenSizeRangeAboveValue) {
                isChecked = true;
            }
        }
        return {
            checkedKey: range?.range,
            checkedValue: range?.rangeValue,
            checked: isChecked,
        };
    });
}
/**
 * Takes an array of memory objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatMemoryRanges(memories, localeData, queryParams) {
    // Convert string values to numbers and sort them
    const sortedMemories = memories
        .map((memory) => {
        const valueString = memory.checkedKey.split(': ')[1]; // Extract the value part using split
        const currentLocaleTBValue = localeData[0]?.localespecificfields?.TB;
        const value = valueString?.includes(currentLocaleTBValue)
            ? parseInt(valueString?.toLowerCase().match(/\d+/)) * 1024
            : parseInt(valueString?.toLowerCase().match(/\d+/));
        return { value, checked: memory.checked };
    })
        .sort((a, b) => a.value - b.value);
    /**  When displaying the values, they should be shown as ranges instead of direct values.
     *This aids in determining the appropriate range and mapping them to the checked value
     *if any query parameters are provided in the URL.*/
    const ranges = [];
    sortedMemories.forEach((memory) => {
        switch (true) {
            case memory.value <= 8:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocMemorysize.split('|')[0] +
                        ' ' +
                        localeData[0]?.localespecificfields.GB,
                    rangeValue: LocaleValues.memoryRangeUptoValue,
                });
                break;
            case memory.value === 16:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocMemorysize.split('|')[1] +
                        ' ' +
                        localeData[0]?.localespecificfields.GB,
                    rangeValue: LocaleValues.memoryRange16Value,
                });
                break;
            case memory.value === 32:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocMemorysize.split('|')[2] +
                        ' ' +
                        localeData[0]?.localespecificfields.GB,
                    rangeValue: LocaleValues.memoryRange32Value,
                });
                break;
            case memory.value >= 64:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocMemorysize.split('|')[3] +
                        ' ' +
                        localeData[0]?.localespecificfields.GB,
                    rangeValue: LocaleValues.memoryRangeAboveValue,
                });
                break;
        }
    });
    // Remove duplicate ranges
    const uniqueRanges = Array.from(new Set(ranges.map((range) => range.range))).map((range) => ranges.find((r) => r.range === range));
    // Map ranges to the desired format
    return uniqueRanges.map((range) => {
        let isChecked = false;
        if (queryParams?.memory) {
            if ((queryParams.memory.includes(LocaleValues.memoryRangeUpto8Value) ||
                queryParams.memory.includes(LocaleValues.memoryRangeUptoValue)) &&
                range?.rangeValue === LocaleValues.memoryRangeUptoValue) {
                isChecked = true;
            }
            else if (queryParams.memory.includes(LocaleValues.memoryRange16Value) &&
                range?.rangeValue === LocaleValues.memoryRange16Value) {
                isChecked = true;
            }
            else if (queryParams.memory.includes(LocaleValues.memoryRange32Value) &&
                range?.rangeValue === LocaleValues.memoryRange32Value) {
                isChecked = true;
            }
            else if ((queryParams.memory.includes('64+') ||
                queryParams.memory.includes(LocaleValues.memoryRangeAboveValue)) &&
                range?.rangeValue === LocaleValues.memoryRangeAboveValue) {
                isChecked = true;
            }
        }
        return {
            checkedKey: range?.range ?? '',
            checkedValue: range?.rangeValue ?? '',
            checked: isChecked,
        };
    });
}
/**
 * Takes an array of storage objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatStorageRanges(storages, localeData, queryParams) {
    // Convert string values to numbers and sort them
    const sortedStorages = storages
        .map((storage) => {
        const valueString = storage.checkedKey.split(': ')[1]; // Extract the value part using split
        const currentLocaleTBValue = localeData[0]?.localespecificfields?.TB;
        const value = valueString?.includes(currentLocaleTBValue)
            ? parseInt(valueString?.toLowerCase().match(/\d+/)) * 1024
            : parseInt(valueString?.toLowerCase().match(/\d+/));
        return { value, checked: storage.checked };
    })
        .sort((a, b) => a.value - b.value);
    /**  When displaying the values, they should be shown as ranges instead of direct values.
     *This aids in determining the appropriate range and mapping them to the checked value
     *if any query parameters are provided in the URL.*/
    const ranges = [];
    sortedStorages.forEach((storage) => {
        switch (true) {
            case storage.value <= 128:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocStorage.split('|')[0] +
                        ' ' +
                        localeData[0]?.localespecificfields.GB,
                    rangeValue: LocaleValues.storageRangeUptoValue,
                });
                break;
            case storage.value >= 256 && storage.value <= 512:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocStorage.split('|')[1] +
                        ' ' +
                        localeData[0]?.localespecificfields.GB,
                    rangeValue: LocaleValues.storageRangeBetweenValue,
                });
                break;
            case storage.value >= 1024:
                ranges.push({
                    range: localeData[0]?.localespecificfields.LocStorage.split('|')[2] +
                        ' ' +
                        localeData[0]?.localespecificfields.TB +
                        '+',
                    rangeValue: LocaleValues.storageRangeAboveValue,
                });
                break;
        }
    });
    // Remove duplicate ranges
    const uniqueRanges = Array.from(new Set(ranges.map((range) => range.range))).map((range) => ranges.find((r) => r.range === range));
    // Map ranges to the desired format
    return uniqueRanges.map((range) => {
        let isChecked = false;
        if (queryParams?.storage && range) {
            if (queryParams.storage.includes(LocaleValues.storageRangeUpto128Value) &&
                range.rangeValue === LocaleValues.storageRangeUptoValue) {
                isChecked = true;
            }
            else if (queryParams.storage.includes(LocaleValues.storageRangeBetween256and512Value) &&
                range.rangeValue === LocaleValues.storageRangeBetweenValue) {
                isChecked = true;
            }
            else if ((queryParams.storage.includes(LocaleValues.storageRangeOnePlusValue) ||
                queryParams.storage.includes(LocaleValues.storageRangeAboveValue)) &&
                range.rangeValue === LocaleValues.storageRangeAboveValue) {
                isChecked = true;
            }
        }
        return {
            checkedKey: range?.range,
            checkedValue: range?.rangeValue,
            checked: isChecked,
        };
    });
}
/**
 * Takes an array of display resolution objects and formats them by applying locale-specific names,
 * determining their checked status based on query parameters,
 * and sorting them according to predefined order values.
 */
function formatDisplayResolutionRanges(displayResolutions, _localeData, queryParams) {
    // Apply the specified logic for display resolutions
    displayResolutions.forEach((resolution) => {
        // Split the string by ': ' and get the second part which contains the resolution
        if (resolution.checkedKey.includes(': ')) {
            const modifiedValue = resolution.checkedKey.split(': ');
            if (modifiedValue?.length > 1) {
                // Extract the resolution, remove empty spaces, and convert to lowercase
                resolution.checkedKey = modifiedValue[1]
                    .replace(/\s/g, '')
                    .toLowerCase();
            }
        }
    });
    // Use a Set to get unique display resolutions
    const uniqueResolutionsSet = new Set();
    displayResolutions.forEach((resolution) => {
        uniqueResolutionsSet.add(resolution.checkedKey);
    });
    // Convert the Set back to an array
    const uniqueResolutionsArray = Array.from(uniqueResolutionsSet);
    // Sort the unique display resolutions
    const sortedDisplayResolutions = uniqueResolutionsArray.sort((a, b) => a.localeCompare(b));
    // If queryParams is provided, check for selected resolutions
    const selectedResolutions = queryParams?.displayres || [];
    // Map the sorted display resolutions to the desired format
    return sortedDisplayResolutions.map((resolution) => ({
        checkedKey: resolution,
        checkedValue: resolution,
        checked: displayResolutions.find((res) => res.checkedKey === resolution)
            ?.checked || selectedResolutions.includes(resolution),
    }));
}
function getFilteredResults(currentCardData, checkedItems, localeData) {
    const currentLocaleGBValue = localeData[0]?.localespecificfields?.GB.toLocaleLowerCase();
    const currentLocaleTBValue = localeData[0]?.localespecificfields?.TB.toLocaleLowerCase();
    //category2
    const category2Array = checkedItems[FilterPaneValues.Category2];
    if (category2Array && category2Array?.length > 0) {
        currentCardData = currentCardData.filter((x) => category2Array.includes(x?.Category2));
    }
    //formfactor
    const categoryArray = checkedItems[FilterPaneValues.Category];
    if (categoryArray && categoryArray?.length > 0) {
        currentCardData = currentCardData.filter((x) => categoryArray.includes(x?.Category));
    }
    //Brand
    const brandArray = checkedItems[FilterPaneValues.Brand];
    if (brandArray && brandArray?.length > 0) {
        currentCardData = currentCardData.filter((x) => brandArray.includes(x?.Brand));
    }
    //Processor
    const processorArray = checkedItems[FilterPaneValues.Processor];
    if (processorArray && processorArray?.length > 0) {
        currentCardData = currentCardData.filter((x) => processorArray.some((elem) => x?.Processor?.includes(elem)));
    }
    //Feature
    const featureArray = checkedItems[FilterPaneValues.Feature];
    if (featureArray && featureArray?.length > 0) {
        currentCardData = currentCardData.filter((x) => {
            return x.Feature.some((e) => featureArray.some((feature) => feature.toLowerCase() == e.toLowerCase()));
        });
    }
    //Memory
    const memoryArray = checkedItems[FilterPaneValues.Memory];
    if (memoryArray && memoryArray?.length > 0) {
        memoryArray.forEach((Memory) => {
            currentCardData = currentCardData.filter((x) => {
                if (Memory.toLowerCase().includes('-')) {
                    // between
                    return rangeBetween(Memory, x.Specification.Memory, x.Specification.Memory.toLowerCase().includes(currentLocaleTBValue)
                        ? currentLocaleTBValue
                        : currentLocaleGBValue);
                }
                else {
                    //equals
                    return rangeEquals(Memory, x.Specification.Memory, x.Specification.Memory.toLowerCase().includes(currentLocaleTBValue)
                        ? currentLocaleTBValue
                        : currentLocaleGBValue);
                }
            });
        });
    }
    //Storage
    const storageArray = checkedItems[FilterPaneValues.Storage];
    if (storageArray && storageArray?.length > 0) {
        storageArray.forEach((storage) => {
            currentCardData = currentCardData.filter((x) => {
                if (storage.toLowerCase().includes('-')) {
                    // between
                    return rangeBetween(storage, x.Specification.Storage, x.Specification.Storage.toLowerCase().includes(currentLocaleTBValue)
                        ? currentLocaleTBValue
                        : currentLocaleGBValue);
                }
                else {
                    //equals
                    return rangeEquals(storage, x.Specification.Storage, x.Specification.Storage.toLowerCase().includes(currentLocaleTBValue)
                        ? currentLocaleTBValue
                        : currentLocaleGBValue);
                }
            });
        });
    }
    //screenSize
    const screenSizeArray = checkedItems[FilterPaneValues.ScreenSize];
    if (screenSizeArray && screenSizeArray?.length > 0) {
        screenSizeArray.forEach((screen) => {
            currentCardData = currentCardData.filter((x) => {
                if (screen.toLowerCase().includes('up to')) {
                    //less than
                    return rangeUpto(screen, x.Specification.ScreenSize, LocaleValues.screenSizeUnits);
                }
                else if (screen.toLowerCase().includes('-')) {
                    //between
                    return rangeBetween(screen, x.Specification.ScreenSize, LocaleValues.screenSizeUnits);
                }
                else if (screen.toLowerCase().includes('+')) {
                    // greater than
                    return rangeAbove(screen, x.Specification.ScreenSize, LocaleValues.screenSizeUnits);
                }
            });
        });
    }
    //Price
    const priceArray = checkedItems[FilterPaneValues.HardCodedPrice];
    if (priceArray && priceArray?.length > 0) {
        priceArray.forEach((price) => {
            currentCardData = currentCardData.filter((x) => {
                const xPrice = parseInt(x.HardCodedPrice.trim().replace(/,/g, ''));
                if (price.toLowerCase().includes('+')) {
                    // greater than
                    const strippedPrice = price?.toLowerCase().match(/\d+/);
                    const comparerPrice = strippedPrice
                        ? parseInt(strippedPrice[0], 10)
                        : 0;
                    return xPrice > comparerPrice;
                }
                else if (price.toLowerCase().includes('-')) {
                    // between
                    const strippedPriceOne = price
                        .toLowerCase()
                        ?.split('-')[1]
                        .match(/\d+/);
                    const comparerPriceAbove = strippedPriceOne
                        ? parseInt(strippedPriceOne[0], 10)
                        : 0;
                    const strippedPriceTwo = price
                        .toLowerCase()
                        ?.split('-')[0]
                        .match(/\d+/);
                    const comparerPriceBelow = strippedPriceTwo
                        ? parseInt(strippedPriceTwo[0], 10)
                        : 0;
                    return xPrice > comparerPriceBelow && xPrice < comparerPriceAbove;
                }
                else {
                    //equals
                    const strippedPrice = price?.toLowerCase().match(/\d+/);
                    const comparerPrice = strippedPrice
                        ? parseInt(strippedPrice[0], 10)
                        : 0;
                    return xPrice < comparerPrice;
                }
            });
        });
    }
    //Display Resolution
    const resolutionArray = checkedItems[FilterPaneValues.Displayresolution];
    if (resolutionArray && resolutionArray?.length > 0) {
        resolutionArray.forEach((display) => {
            currentCardData = currentCardData.filter((x) => {
                //equals
                const size = display.toLowerCase();
                let xSize = x.Specification.Displayresolution.toLowerCase().match(/(\d+)\s*x\s*(\d+)/);
                xSize = `${xSize[1]}x${xSize[2]}`;
                return xSize == size;
            });
        });
    }
    //OS
    const osArray = checkedItems[FilterPaneValues.OS];
    if (osArray && osArray?.length > 0) {
        currentCardData = currentCardData.filter((x) => osArray.includes(x?.OS));
    }
    return currentCardData;
}
function rangeUpto(comparerValue, prop, unitMeasure) {
    const size = parseInt(comparerValue
        .toLowerCase()
        .split('up to')[1]
        ?.trim()
        ?.split(unitMeasure)[0]
        .trim());
    const xSize = parseInt(prop
        .toLowerCase()
        .replace(/.*?(\d+.*)/, '$1')
        ?.trim()
        ?.split(unitMeasure)[0]
        .trim());
    return xSize <= size;
}
function rangeBetween(comparerValue, prop, unitMeasure) {
    const sizeBelow = parseInt(comparerValue
        .toLowerCase()
        .split('-')[1]
        ?.trim()
        ?.split(unitMeasure)[0]
        .trim());
    const sizeAbove = parseInt(comparerValue.toLowerCase().split('-')[0]?.trim());
    /**
     * In the provided JSON, the storage/memory size may be specified in either TB or GB format.
     * When it is mentioned in TB, it must be converted to GB for accurate comparison.
     * This conversion ensures that the sizes are correctly determined.
     */
    const xSize = prop.includes(LocaleValues.storageValueTB) ||
        prop.includes(LocaleValues.storageValueTo)
        ? parseInt(prop
            ?.toLowerCase()
            .replace(/.*?(\d+.*)/, '$1')
            ?.trim()
            ?.split(unitMeasure)[0]
            .trim()) * 1024
        : parseInt(prop
            ?.toLowerCase()
            .replace(/.*?(\d+.*)/, '$1')
            ?.trim()
            ?.split(unitMeasure)[0]
            .trim());
    return xSize <= sizeBelow && xSize >= sizeAbove;
}
function rangeAbove(comparerValue, prop, unitMeasure) {
    const size = parseInt(comparerValue
        .toLowerCase()
        .split(unitMeasure + '+')[0]
        .trim());
    const xSize = parseInt(prop
        ?.toLowerCase()
        .replace(/.*?(\d+.*)/, '$1')
        ?.trim()
        ?.split(unitMeasure)[0]
        .trim());
    return xSize > size;
}
function rangeEquals(comparerValue, prop, unitMeasure) {
    const size = parseInt(comparerValue.toLowerCase()?.split(unitMeasure)[0].trim());
    /**
     * In the provided JSON, the storage/memory size may be specified in either TB or GB format.
     * When it is mentioned in TB, it must be converted to GB for accurate comparison.
     * This conversion ensures that the sizes are correctly determined.
     */
    const xSize = prop.includes(LocaleValues.storageValueTB) ||
        prop.includes(LocaleValues.storageValueTo)
        ? parseInt(prop
            ?.toLowerCase()
            .replace(/.*?(\d+.*)/, '$1')
            ?.trim()
            ?.split(unitMeasure)[0]
            .trim()) * 1024
        : parseInt(prop
            ?.toLowerCase()
            .replace(/.*?(\d+.*)/, '$1')
            ?.trim()
            ?.split(unitMeasure)[0]
            .trim());
    return xSize == size;
}
// write a function that takes the price and currency symbol and based on different locales, it should return the price in the desired format
function formatPrice(price, currencySymbol, locale) {
    let formattedPrice = price;
    if (LocaleValues.prefixLocales.includes(locale.toLowerCase())) {
        formattedPrice = `${currencySymbol}${price}`;
    }
    else if (LocaleValues.suffixLocales.includes(locale.toLowerCase())) {
        formattedPrice = `${price} ${currencySymbol}`;
    }
    return formattedPrice;
}
function disableUnavailableFilters(currentCardData, filterPane) {
    if (filterPane) {
        const allCheckList = filterPane.shadowRoot?.querySelectorAll('cascade-checklist');
        allCheckList?.forEach((_checklist) => {
            const allInputs = _checklist.shadowRoot?.querySelectorAll('input[type="checkbox"]');
            allInputs?.forEach((_input) => {
                const filterValue = _input.getAttribute('value');
                if (filterValue !== null) {
                    const isAvailable = currentCardData.some((item) => {
                        // Check in the main item object, Processor array, Feature array, and Specification object
                        return (checkFiltersForProduct(item, filterValue) ||
                            (item.Processor && item.Processor.includes(filterValue)) ||
                            (item.Feature && item.Feature.includes(filterValue)) ||
                            (item.Specification &&
                                checkSpecificationForMemoryStorageScreenSizePriceAndResolution(item.Specification, filterValue, item.HardCodedPrice)));
                    });
                    if (!isAvailable) {
                        _input.setAttribute('disabled', 'true');
                    }
                    else {
                        _input.removeAttribute('disabled');
                    }
                }
            });
        });
    }
}
function checkFiltersForProduct(item, filterValue) {
    if (!item || typeof item !== 'object' || typeof filterValue !== 'string') {
        return false;
    }
    const modifiedItem = { ...item };
    delete modifiedItem.AdditionalCategories;
    return Object.values(modifiedItem).some((value) => {
        if (typeof value === 'string') {
            return value === filterValue; // Check for exact string match
        }
        else if (Array.isArray(value)) {
            return value.some((innerValue) => innerValue === filterValue); // Check for exact match in array
        }
        return false;
    });
}
function checkSpecificationForMemoryStorageScreenSizePriceAndResolution(specification, filterValue, hardCodedPrice) {
    // Check for Memory
    if (specification.Memory) {
        const memoryValue = parseInt(specification.Memory.match(/\d+/)[0]);
        if (filterValue === LocaleValues.memoryRangeUptoValue) {
            return memoryValue <= 8;
        }
        else if (filterValue === LocaleValues.memoryRangeAboveValue) {
            return memoryValue >= 64;
        }
        else if (filterValue === LocaleValues.memoryRange16Value) {
            return memoryValue == 16;
        }
        else if (filterValue === LocaleValues.memoryRange32Value) {
            return memoryValue == 32;
        }
    }
    // Check for Storage
    if (specification.Storage) {
        let storageValue = specification.Storage;
        if (storageValue.includes(LocaleValues.storageValueTB) ||
            storageValue.includes(LocaleValues.storageValueTo)) {
            storageValue = parseInt(storageValue.match(/\d+/)[0]) * 1024;
        }
        else {
            storageValue = parseInt(specification.Storage.match(/\d+/)[0]);
        }
        if (filterValue === LocaleValues.storageRangeUptoValue) {
            return storageValue <= 128;
        }
        else if (filterValue === LocaleValues.storageRangeBetweenValue) {
            return storageValue >= 256 && storageValue <= 512;
        }
        else if (filterValue === LocaleValues.storageRangeAboveValue) {
            return storageValue >= 1024;
        }
    }
    // Check for Screen Size
    if (specification.ScreenSize) {
        const screenSize = parseFloat(specification.ScreenSize.match(/\d+\.?\d*/)[0]);
        if (filterValue === LocaleValues.screenSizeRangeUptoValue) {
            return screenSize <= 13.9;
        }
        else if (filterValue === LocaleValues.screenSizeRangeBetweenValue) {
            return screenSize >= 14 && screenSize <= 16;
        }
        else if (filterValue === LocaleValues.screenSizeRangeAboveValue) {
            return screenSize >= 17;
        }
    }
    // Currency and price range handling
    if (hardCodedPrice &&
        LocaleValues.currencySymbolsRegularExpression.test(filterValue)) {
        const priceValue = parseFloat(hardCodedPrice.replace(/[^0-9.]/g, ''));
        if (filterValue.includes('-')) {
            const [minValue, maxValue] = filterValue
                .split('-')
                .map((val) => parseFloat(val.replace(/[^0-9.]/g, '')));
            return priceValue >= minValue && priceValue <= maxValue;
        }
        else if (filterValue.includes('+')) {
            const minValue = parseFloat(filterValue.replace(/[^0-9.]/g, ''));
            return priceValue >= minValue;
        }
        else {
            const value = parseFloat(filterValue.replace(/[^0-9.]/g, ''));
            return priceValue <= value;
        }
    }
    // Handle Display Resolution
    if (specification.Displayresolution) {
        const resolution = specification.Displayresolution.match(/\d+/g);
        if (resolution && resolution?.length === 2) {
            const formattedResolution = resolution.join('x');
            return filterValue === formattedResolution;
        }
    }
    return checkFiltersForProduct(specification, filterValue);
}

;// CONCATENATED MODULE: ./src/components/cascade-windows-compare-devices/index.ts





















/**
 * @summary
 * This is a Compare Table page component it references data table lego component for Table Creation
 * This component has multiple Api calls and parsing the data into table.
 * It uses <moray-icon> <moray-popover> <moray-switch> components.
 */
let windowsCompareDevicesElement = class windowsCompareDevicesElement extends i18nMixin/* WithLocalization */.R {
    constructor() {
        super(...arguments);
        /**
         * Attribute for product comparisons descripton.
         */
        this.description = '';
        /**
         * Attribute for adding Output Json Api Url. Initializes the default value to en-us.
         */
        this.specificationApiUrl = 'https://wfbpreviewcdn.azureedge.net/dmsdata/jsonFiles/EN-US/output.json';
        /**
         * Attribute for adding LocaleSpecific Json Api Url. Initializes the default value to en-us.
         */
        this.localeSpecificApiUrl = 'https://wfbpreviewcdn.azureedge.net/dmsdata/jsonFiles/EN-US/Localespecificdata-aem-test.json';
        /**
         * Attribute for autoring the color of primary badge.
         */
        this.primaryBadgeColor = PrimaryBadgeColor.Gradient;
        this.isKeydownEventOpeningPopover = false;
        this.specificationSwitchLabel = '';
        /**
         * Attribute for Specification Table Switch Label .
         */
        this.featureSwitchLabel = '';
        /**
         * Attribute for Feature Table Switch Label .
         */
        this.popoverImage = 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE50Xsh';
        /**
         * Attribute for Pop Over Image ,will replace this with Moray-icon after this icon gets added to the list.
         */
        this.specificationsTableSwitchChecked = false;
        this.featuresTableSwitchChecked = false;
        this.compareDevicesBackendOutputData = [];
        this.localeSpecificData = [];
        this.filteredSkuList = [];
        this.switchClickEventListener = (e) => {
            const elem = e.target;
            if (elem) {
                if (elem.closest('div')?.classList.contains('specification-table-switch')) {
                    this.specificationsTableSwitchChecked = elem.checked;
                    if (this.specificationsTableSwitchChecked) {
                        this.specificationSwitchLabel = this.msg('HIGHLIGHT_DIFFERENCES_ONLY');
                    }
                    else {
                        this.specificationSwitchLabel = this.msg('DOESNT_SHOW_DIFFERENCES');
                    }
                }
                else {
                    this.featuresTableSwitchChecked = elem.checked;
                    if (this.featuresTableSwitchChecked) {
                        this.featureSwitchLabel = this.msg('HIGHLIGHT_DIFFERENCES_ONLY');
                    }
                    else {
                        this.featureSwitchLabel = this.msg('DOESNT_SHOW_DIFFERENCES');
                    }
                }
            }
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        this.loadSpecificationsTableData();
        this.loadLocaleSpecificData();
    }
    dispatchLightBoxData(e) {
        if (e && e.currentTarget) {
            const productData = this.getProductData(e.currentTarget?.getAttribute('data-product-id'));
            const options = {
                detail: {
                    lightBoxDetails: {
                        lightBoxProductData: mapCardDataToLightBoxProductData(productData),
                        localeSpecificData: {
                            lightBoxDisclaimer: this.localeSpecificData[0]?.localespecificfields
                                ?.LightBoxDisclaimer,
                            currencySymbol: this.localeSpecificData[0]?.localespecificfields
                                ?.CurrencySymbol,
                        },
                        lightBoxProductVariationIdsData: (productData.VariationIds || [])
                            .map((elem) => this.getProductData(elem))
                            .filter((product) => product !== null)
                            .map((product) => mapCardDataToLightBoxProductData(product))
                            .filter((productData) => productData !== null),
                        lightBoxProductSpecificationTableHeaders: {
                            price: this.msg('PRICE'),
                            secured: this.msg('SECURED_CORE_AVAILABLE'),
                            ram: this.msg('RAM'),
                            gpu: this.msg('GPU'),
                            cpu: this.msg('CPU'),
                            storage: this.msg('STORAGE'),
                        },
                        lightboxUniqueId: `lightbox-${productData.ProductID}`,
                    },
                },
                bubbles: true,
                composed: true,
            };
            window.dispatchEvent(new CustomEvent('DispatchLightBoxContent', options));
        }
    }
    getProductData(productId) {
        return [...this.compareDevicesBackendOutputData].find((x) => x.ProductID === productId);
    }
    //Getting the Sku's from the url and gathering the data.
    getFilteredSkuList() {
        const params = new URLSearchParams(location.search);
        const skuList = params.getAll('sku').map((sku) => sku.split('_').at(1));
        this.filteredSkuList =
            skuList.length > 0
                ? this.compareDevicesBackendOutputData.filter((product) => skuList.includes(product.ProductID))
                : [];
    }
    async loadSpecificationsTableData() {
        try {
            const url = this.specificationApiUrl;
            this.compareDevicesBackendOutputData = await fetchResponse(url, {
                method: 'GET',
                headers: {},
                body: null,
            });
            this.getFilteredSkuList();
        }
        catch (error) {
            logger.error(`There was an error loading specifications table data: ${error}`);
        }
    }
    async loadLocaleSpecificData() {
        try {
            const url = this.localeSpecificApiUrl;
            this.localeSpecificData = await fetchResponse(url, {
                method: 'GET',
                headers: {},
                body: null,
            });
        }
        catch (error) {
            logger.error(`There was an error loading locale specific data: ${error}`);
        }
    }
    // Extracting the properties from the data and populating to Thead
    extractProperties(obj, result) {
        for (const key in obj) {
            if (typeof obj[key] !== 'object') {
                this.processNonObjectProperty(obj, key, result);
            }
            else {
                this.extractProperties(obj[key], result);
            }
        }
    }
    // Getting the data from LocaleSpecifc Api and parsing the data , passing it to Table.
    processNonObjectProperty(obj, key, result) {
        if (!this.localeSpecificData.length)
            return;
        const labelDetails = this.localeSpecificData[0]?.TechspecTable;
        const columnLabelObj = labelDetails.find((item) => item.Key === key);
        if (!columnLabelObj)
            return;
        const label = columnLabelObj.Type;
        const value = obj[key];
        result[label] = result[label] || { values: [], headingInfo: {} };
        const columnData = value.includes(':')
            ? value?.split(':')?.at(1)?.trim() || ''
            : value.trim();
        result[label].values.push(columnData);
        result[label].headingInfo = { ...columnLabelObj };
    }
    transformData(data) {
        const result = {};
        if (data) {
            data.forEach((item) => {
                this.extractProperties(item, result);
            });
        }
        return result;
    }
    // Checking the Moray Swicth On/Off values.
    firstUpdated() {
        const moraySwitch = this.shadowRoot.querySelectorAll('moray-switch');
        if (moraySwitch) {
            this.specificationSwitchLabel = this.msg('DOESNT_SHOW_DIFFERENCES');
            this.featureSwitchLabel = this.msg('DOESNT_SHOW_DIFFERENCES');
            moraySwitch.forEach((elem) => {
                elem.addEventListener('input', this.switchClickEventListener);
            });
        }
    }
    // Rendering SpecTable from outputspecifc data
    renderTableData(compareDevicesParsedData) {
        const tableHtml = [];
        Object.keys(compareDevicesParsedData).forEach((item, index) => {
            const popoverText = compareDevicesParsedData[item]?.headingInfo?.TooltipText;
            tableHtml.push((0,static_html/* html */.dy) `<span
          id="specifications-label-wrapper-${index}"
          aria-label="${this.msg('SPECIFICATION_LABEL', { '0': index })}"
          class="specifications-label-wrapper"
          slot="${index}-0"
          >${item}
          <span class="specifications-popover-icon"
            >${popoverText
                ? this.renderPopoverElement(popoverText, `${this.msg('POPOVER_IMAGE_AlT_VALUE')}`, `anchor-specification-${index}`, 'right-end', 32)
                : ''}</span
          ></span
        >`);
            compareDevicesParsedData[item].values.forEach((valueItem, valueIndex) => tableHtml.push((0,static_html/* html */.dy) `<span
              id="${index}-${valueIndex + 1}"
              aria-label="${valueItem}-${index}-${valueIndex + 1}"
              slot="${index}-${valueIndex + 1}"
              >${valueItem}</span
            >`));
        });
        return tableHtml;
    }
    renderPopoverElement(toolTipContent, alt, anchorId, placement, offset) {
        return (0,static_html/* html */.dy) `<img
        id="${anchorId}"
        src="${this.popoverImage}"
        alt="${alt}"
        aria-label="${this.msg('POPOVER_ICON', { '0': anchorId })}"
        @keydown="${this.registerPopoverImageKeydownEvent}"
        @focusout="${this.registerPopoverImageFocusOutEvent}"
        slot="image"
        height="20"
        width="20"
        tabindex="0"
      />
      <moray-popover
        anchor="${anchorId}"
        no-arrow
        offset="${offset}"
        placement="${placement}"
        id="popover-default-${anchorId}"
        aria-label="${this.msg('POPOVER', { '0': anchorId })}"
      >
        <p>${toolTipContent}</p>
      </moray-popover>`;
    }
    registerPopoverImageKeydownEvent(e) {
        const popoverIcon = e.target;
        if (popoverIcon) {
            const id = popoverIcon.id;
            const popover = this.shadowRoot.getElementById(`popover-default-${id}`);
            popoverIcon.setAttribute('aria-expanded', 'true');
            if (popover != null) {
                const flyout = popover.shadowRoot.querySelector('moray-flyout');
                if (flyout != null) {
                    flyout.style.opacity = '1';
                    this.isKeydownEventOpeningPopover = true;
                }
            }
        }
    }
    registerPopoverImageFocusOutEvent(e) {
        const popoverIcon = e.target;
        if (popoverIcon) {
            const id = popoverIcon.id;
            const popover = this.shadowRoot.getElementById(`popover-default-${id}`);
            popoverIcon.setAttribute('aria-expanded', 'false');
            if (popover != null) {
                const flyout = popover.shadowRoot.querySelector('moray-flyout');
                if (flyout != null && this.isKeydownEventOpeningPopover) {
                    flyout.style.opacity = '0';
                }
            }
        }
        this.isKeydownEventOpeningPopover = false;
    }
    // Template for Checkmark using it in Feature Table
    renderChechmarkIcon() {
        return (0,static_html/* html */.dy) ` <moray-icon icon="checkmark" size="large"> </moray-icon>`;
    }
    // Template for Image using it for Tooltip Icon.
    renderImage(imageUrl, alt) {
        return (0,static_html/* html */.dy) `
      <img src="${imageUrl}" alt="${alt}" slot="image" height="20" width="20" />
    `;
    }
    // Trasforming the Feature table data from the LocaleSpecificcdata
    renderFeatureTable(mergedArray) {
        const checkmarkContent = this.renderChechmarkIcon();
        const tableHtml = [];
        mergedArray?.forEach((item, index) => {
            const imageUrl = item?.Icon;
            const popoverText = item?.TooltipText;
            tableHtml.push((0,static_html/* html */.dy) `<span
          id="feature-label-wrapper-${index}"
          aria-label="${this.msg('FEATURE_LABEL', { '0': index })}"
          class="feature-label-wrapper"
          slot="${index}-0"
        >
          <span class="feature-label-image">
            ${imageUrl
                ? this.renderImage(imageUrl, `${item.Type} ${this.msg('LOGO_ALT_VALUE')}`)
                : ''}
          </span>
          ${unsafe_html_o(item.Type)}
          <span class="feature-popover-icon"
            >${popoverText
                ? this.renderPopoverElement(popoverText, `${this.msg('POPOVER_IMAGE_AlT_VALUE')}`, `anchor-feature${index}`, 'right-end', 35)
                : ''}</span
          >
        </span>`);
            item.values?.forEach((valueItem, valueIndex) => tableHtml.push((0,static_html/* html */.dy) `<span
            id="${index}-${valueIndex + 1}"
            slot="${index}-${valueIndex + 1}"
            >${valueItem === 'match' ? checkmarkContent : ''}</span
          >`));
        });
        return tableHtml;
    }
    renderCardItems(filteredSkuList) {
        const cardsHtml = [];
        filteredSkuList.forEach((productCard, i) => {
            cardsHtml.push((0,static_html/* html */.dy) `<div class="product-card" id="card-item-${i}">
        <cascade-card-item  depth>
          <img slot='image' class="product-card-image" src="${productCard.DeviceImage.ImageUrl}" alt="${productCard.DeviceImage.AltText}" id="product-card-image-${productCard.ProductID}" aria-label="${this.msg('PRODUCT_CARD_IMAGE', {
                '0': productCard.ProductID,
            })}"> </img>
          <div slot='badge' class="primary-badge-container">
            <div class="primary-badge-text">
            <moray-badge class= ${this.primaryBadgeColor == PrimaryBadgeColor.Gradient
                ? 'primary-badge-gradient'
                : 'primary-badge-standard'}
            id="primary-badge-${productCard.ProductID}"
            aria-label="${this.msg('PRIMARY_BADGE_ID', {
                '0': productCard.ProductID,
            })}"
            >${unsafe_html_o(productCard.OEMPromotions)}</moray-badge>
            </div>
            <div class="primary-badge-popover">
            ${productCard.OEMPromotions
                ? this.renderPopoverElement(`${this.msg('PRIMARY_BADGE_POPOVER')}`, `${this.msg('POPOVER_IMAGE_AlT_VALUE')}`, `badge-popover-${i}`, 'left-end', 16)
                : ''}
            </div>
          </div>
          <div  id="device-title-${productCard.ProductID}" aria-label="${this.msg('DEVICE_TITLE_ID', {
                '0': productCard.ProductID,
            })}"
          slot='heading' class="heading-container">
            <div slot='badge' class="${productCard.Feature.indexOf('SecuredcorePC') > -1
                ? 'secondary-badge-container'
                : 'empty-badge-container'}">
            <div class="secondary-badge-text">
              <moray-badge
            id="secondary-badge-${productCard.ProductID}"
            aria-label="${this.msg('SECONDARY_BADGE_ID', {
                '0': productCard.ProductID,
            })}"
              >${productCard.Feature.indexOf('SecuredcorePC') > -1
                ? (0,static_html/* html */.dy) `${unsafe_html_o(this.localeSpecificData[0]?.localespecificfields
                    ?.SecuredcorePCBadge)}`
                : ''}</moray-badge>
              </div>
              <div class="secondary-badge-popover">
              ${productCard.Feature.indexOf('SecuredcorePC') > -1
                ? this.renderPopoverElement(`${this.msg('SECURED_CORE_POPOVER')}`, `${this.msg('POPOVER_IMAGE_AlT_VALUE')}`, `badge-secondary-popover-${i}`, 'top-end', 20)
                : ''}
              </div>
            </div>
            <h2>${productCard.DeviceName}</h2>
          </div>
          <p id="device-price-${productCard.ProductID}"
          aria-label="${this.msg('PRICE_ID', { '0': productCard.ProductID })}"

          slot="price" class="price-container">
               ${this.renderPrice(productCard)}
            ${this.msg('PRICE_POPOVER')
                ? this.renderPopoverElement(`${this.msg('PRICE_POPOVER')}`, `${this.msg('POPOVER_IMAGE_AlT_VALUE')}`, `price-popover-${i}`, 'bottom', 16)
                : ''}
          </p>
          <moray-link-group slot='link-group'>
            ${productCard.LearnMoreCTA.Url
                ? (0,static_html/* html */.dy) `<moray-anchor
                    href="${productCard.LearnMoreCTA.Url}"
                    target="${productCard.LearnMoreCTA.Url
                    ? '_blank'
                    : '_self'}"
                    appearance="button"
                    id="learn-more-${productCard.ProductID}"
                    aria-label="${this.msg('LEARN_MORE_FOR_PRODUCT', {
                    '0': productCard.ProductID,
                })}"
                    data-product-id="${productCard.ProductID}"
                    data-product-name="${productCard.DeviceName}"
                    data-oem="${productCard.LearnMoreCTA.Url?.toLowerCase().includes(productCard.Brand.toLowerCase())
                    ? true
                    : false}"
                    data-retailer="${productCard.Brand}"
                    data-product-sku="${productCard.SKUID}"
                    data-bi-cN=${this.localeSpecificData[0]
                    ?.localespecificfields?.ShopCTAtxt}
                    data-bi-ecn="Learn More"
                    data-bi-cT="Button"
                    >${this.localeSpecificData[0]?.localespecificfields
                    ?.ShopCTAtxt}</moray-anchor
                  >`
                : (0,static_html/* html */.dy) `<moray-button
                    appearance="button"
                    id="choose-options-${productCard.ProductID}"
                    aria-label="${this.msg('CHOOSE_OPTIONS_FOR_PRODUCT', {
                    '0': productCard.ProductID,
                })}"
                    @click="${this.dispatchLightBoxData}"
                    data-product-id="${productCard.ProductID}"
                    data-product-name="${productCard.DeviceName}"
                    data-bi-cN=${this.localeSpecificData[0]
                    ?.localespecificfields?.OpenLightboxText}
                    data-bi-ecn="Choose Options"
                    data-bi-cT="Button"
                    >${this.localeSpecificData[0]?.localespecificfields
                    ?.OpenLightboxText}
                  </moray-button>`}
          </moray-link-group>
        </cascade-card-item>
      </div>
        `);
        });
        return cardsHtml;
    }
    renderPrice(productCard) {
        if (!this.localeSpecificData.length)
            return;
        const localespecificfields = this.localeSpecificData[0]?.localespecificfields;
        if (!localespecificfields)
            return;
        const price = formatPrice(productCard.HardCodedPrice, localespecificfields?.CurrencySymbol, this.localeSpecificData[0]?.localespecificlocale?.toLowerCase());
        // If Learn More Url exist, then add the "Starting at" text in front of the price
        // otherwise just return the price
        return productCard.LearnMoreCTA.Url
            ? this.msg('STARTING_AT', { '0': price })
            : price;
    }
    // Getting the data from LocaleSpecifc api and passing the default value if value exists.
    parseCompareDevicesData() {
        const mergedFeatures = {};
        const localeData = this.localeSpecificData;
        if (localeData && localeData.length > 0) {
            localeData[0].FeatureTable.forEach(({ Type, Key, ...rest }) => {
                if (!mergedFeatures[Type]) {
                    mergedFeatures[Type] = { Type, Key: [Key], ...rest };
                }
                else {
                    mergedFeatures[Type].Key.push(Key);
                }
            });
            const mergedArray = Object.values(mergedFeatures);
            // Add values to the features array
            for (const feature of mergedArray) {
                const values = [];
                for (const product of this.filteredSkuList) {
                    const featureList = product.Feature;
                    let isMatch = false;
                    for (const f of featureList) {
                        let featureKey = feature.Key[0];
                        featureKey = featureKey.includes('||')
                            ? featureKey.split('||')
                            : featureKey;
                        if (featureKey.includes(f)) {
                            isMatch = true;
                            break;
                        }
                    }
                    values.push(isMatch ? 'match' : '');
                }
                feature.values = values;
            }
            return mergedArray;
        }
    }
    render() {
        const compareDevicesParsedData = this.transformData(this.filteredSkuList);
        const featureTableData = this.parseCompareDevicesData();
        const highlightIndices = [];
        const featureIndices = [];
        if (this.featuresTableSwitchChecked) {
            featureTableData?.forEach((item, index) => {
                if (item.values &&
                    item.values.includes('match') &&
                    item.values.includes('')) {
                    featureIndices.push(index);
                }
            });
        }
        if (this.specificationsTableSwitchChecked) {
            for (const [property, { values }] of Object.entries(compareDevicesParsedData)) {
                if (!values.every((value) => value === values[0])) {
                    highlightIndices.push(Object.keys(compareDevicesParsedData).indexOf(property));
                }
            }
        }
        return (0,static_html/* html */.dy) `<div class="compare-page-wrapper">
      <div class="product-compare">
        <div class="container">
          <div class="compare-panel">
            <div class="stack-3">
              <div class="text-container">
                <section
                  class="context-device f-size-large"
                  data-bi-area="body"
                >
                  <div>
                    <h2
                      id="product-comparison-heading"
                      aria-label="${this.msg('PRODUCT_COMPARISONS')}"
                      class="c-heading-1 product-comparison-heading"
                    >
                      ${this.msg('PRODUCT_COMPARISONS')}
                    </h2>
                    <p class="c-paragraph compare-device-paragraph">
                      ${this.description}
                    </p>
                  </div>
                </section>
              </div>

              <div class="device-container">
                <div class="cardList">
                  ${this.renderCardItems(this.filteredSkuList)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <cascade-lightbox-container
            id="choose-options-popup"
          ></cascade-lightbox-container>
        </div>
      </div>
      <div class="specification-table-wrapper">
        <div class="specification-table-content-wrapper">
          <div class="specification-table-heading">
            <h2
              id="specification-heading"
              aria-label="${this.msg('TECHNICAL_SPECIFICATIONS')}"
              name="specification-heading"
            >
              ${this.msg('TECHNICAL_SPECIFICATIONS')}
            </h2>
          </div>
          <div class="specification-table-switch">
            <moray-switch
              id="specification-toggle-switch"
              on-label=${this.msg('ON')}
              off-label=${this.msg('OFF')}
              data-bi-cN="Toggle switch"
              data-bi-ecn="Toggle switch"
              aria-label="${this.msg('SPECIFICATION_TOGGLE_SWITCH')}"
              data-bi-cT="Button"
              >${this.specificationSwitchLabel}</moray-switch
            >
          </div>
        </div>
        <div class="specification-data-table">
          <cascade-data-table
            id="specification-table-data"
            table-type="Highlight"
            table-rows="${Object.keys(compareDevicesParsedData).length}"
            table-columns="${Object.values(compareDevicesParsedData)?.at(0)
            ?.values.length + 1}"
            highlight="${JSON.stringify(highlightIndices)}"
          >
            ${this.renderTableData(compareDevicesParsedData)}
          </cascade-data-table>
        </div>
      </div>
      <div class="feature-table-wrapper">
        <div class="feature-table-content-wrapper">
          <div class="feature-table-heading">
            <h2
              id="feature-heading"
              aria-label="${this.msg('SUPPORTED_WINDOWS_FEATURES')}"
              name="feature-heading"
            >
              ${this.msg('SUPPORTED_WINDOWS_FEATURES')}
            </h2>
          </div>
          <div class="feature-table-switch">
            <moray-switch
              id="feature-toggle-switch"
              aria-label="${this.msg('FEATURE_TOGGLE_SWITCH')}"
              on-label=${this.msg('ON')}
              off-label=${this.msg('OFF')}
              >${this.featureSwitchLabel}</moray-switch
            >
          </div>
        </div>
        <div class="feature-data-table">
          <cascade-data-table
            id="feature-table-data"
            table-type="Highlight"
            table-rows="${featureTableData?.length}"
            table-columns="${featureTableData?.at(0).values.length + 1}"
            highlight="${JSON.stringify(featureIndices)}"
          >
            ${this.renderFeatureTable(featureTableData)}
          </cascade-data-table>
        </div>
      </div>
    </div>`;
    }
};
windowsCompareDevicesElement.styles = [cascade_windows_compare_devices_styles];
windowsCompareDevicesElement.dict = {
    HIGHLIGHT_DIFFERENCES_ONLY: 'Highlight differences only',
    DOESNT_SHOW_DIFFERENCES: 'Doesn’t show differences',
    POPOVER_IMAGE_AlT_VALUE: 'Popover Image',
    TECHNICAL_SPECIFICATIONS: 'Technical Specifications',
    SUPPORTED_WINDOWS_FEATURES: 'Supported Windows features',
    LOGO_ALT_VALUE: 'Logo',
    PRODUCT_COMPARISONS: 'Product comparisons',
    SECURED_CORE_AVAILABLE: 'Secured-core Available',
    PRICE: 'Secured-core Available',
    RAM: 'RAM',
    CPU: 'CPU',
    GPU: 'GPU',
    STORAGE: 'Storage',
    ON: 'On',
    OFF: 'Off',
    STARTING_AT: 'Starting at {0}',
    PRICE_POPOVER: 'All specifications are subject to change without notice. Please check with each reseller for exact offers. Products may not be available in all markets. Displayed prices are offered by stated resellers and are subject to change. Prices are not offered by Microsoft unless stated.',
    PRIMARY_BADGE_POPOVER: 'When you turn it on, this PC will be running Windows 11. Certain features require specific hardware.',
    SECURED_CORE_POPOVER: 'Secured-core PCs require specific configuration to fully enable the highest level of protection against attacks. Available for purchase through your OEM representative.',
    SPECIFICATION_TOGGLE_SWITCH: 'Specification Toggle Switch',
    FEATURE_TOGGLE_SWITCH: 'Feature Toggle Switch',
    LEARN_MORE_FOR_PRODUCT: 'Learn More for the {0}',
    CHOOSE_OPTIONS_FOR_PRODUCT: 'Choose Options for the {0}',
    PRIMARY_BADGE_ID: 'Primary Badge {0}',
    DEVICE_TITLE_ID: 'Device Title {0}',
    SECONDARY_BADGE_ID: 'Secondary Badge {0}',
    PRICE_ID: 'Price {0}',
    SPECIFICATION_LABEL: 'Specifications Label {0}',
    POPOVER_ICON: 'PopOver Icon {0}',
    POPOVER: 'PopOver {0}',
    FEATURE_LABEL: 'Feature Label {0}',
    PRODUCT_CARD_IMAGE: 'Product Card Image of {0}',
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'description' })
], windowsCompareDevicesElement.prototype, "description", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'specification-api-url' })
], windowsCompareDevicesElement.prototype, "specificationApiUrl", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'locale-specific-api-url' })
], windowsCompareDevicesElement.prototype, "localeSpecificApiUrl", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'primary-badge-color' })
], windowsCompareDevicesElement.prototype, "primaryBadgeColor", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
    // Add a flag to track whether the click event is opening the popover
], windowsCompareDevicesElement.prototype, "isKeydownEventOpeningPopover", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'specification-switch-label' })
], windowsCompareDevicesElement.prototype, "specificationSwitchLabel", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'feature-switch-label' })
], windowsCompareDevicesElement.prototype, "featureSwitchLabel", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'popover-image' })
], windowsCompareDevicesElement.prototype, "popoverImage", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], windowsCompareDevicesElement.prototype, "specificationsTableSwitchChecked", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], windowsCompareDevicesElement.prototype, "featuresTableSwitchChecked", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], windowsCompareDevicesElement.prototype, "compareDevicesBackendOutputData", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], windowsCompareDevicesElement.prototype, "localeSpecificData", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], windowsCompareDevicesElement.prototype, "filteredSkuList", void 0);
windowsCompareDevicesElement = (0,tslib_es6/* __decorate */.gn)([
    (0,define_elements/* defineCustomElement */.M)('cascade-windows-compare-devices')
], windowsCompareDevicesElement);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map