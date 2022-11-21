(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-doclog-DoclogForm-vue"],{

/***/ "./node_modules/@dongido/vue-viaudio/dist/vue-viaudio.umd.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@dongido/vue-viaudio/dist/vue-viaudio.umd.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_656__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_656__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_656__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_656__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_656__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_656__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_656__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_656__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_656__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_656__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_656__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_656__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_656__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_656__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_656__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_656__(__nested_webpack_require_656__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __nested_webpack_require_4132__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __nested_webpack_require_4132__("e53d");
var has = __nested_webpack_require_4132__("07e3");
var DESCRIPTORS = __nested_webpack_require_4132__("8e60");
var $export = __nested_webpack_require_4132__("63b6");
var redefine = __nested_webpack_require_4132__("9138");
var META = __nested_webpack_require_4132__("ebfd").KEY;
var $fails = __nested_webpack_require_4132__("294c");
var shared = __nested_webpack_require_4132__("dbdb");
var setToStringTag = __nested_webpack_require_4132__("45f2");
var uid = __nested_webpack_require_4132__("62a0");
var wks = __nested_webpack_require_4132__("5168");
var wksExt = __nested_webpack_require_4132__("ccb9");
var wksDefine = __nested_webpack_require_4132__("6718");
var enumKeys = __nested_webpack_require_4132__("47ee");
var isArray = __nested_webpack_require_4132__("9003");
var anObject = __nested_webpack_require_4132__("e4ae");
var isObject = __nested_webpack_require_4132__("f772");
var toIObject = __nested_webpack_require_4132__("36c3");
var toPrimitive = __nested_webpack_require_4132__("1bc3");
var createDesc = __nested_webpack_require_4132__("aebd");
var _create = __nested_webpack_require_4132__("a159");
var gOPNExt = __nested_webpack_require_4132__("0395");
var $GOPD = __nested_webpack_require_4132__("bf0b");
var $DP = __nested_webpack_require_4132__("d9f6");
var $keys = __nested_webpack_require_4132__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __nested_webpack_require_4132__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __nested_webpack_require_4132__("355d").f = $propertyIsEnumerable;
  __nested_webpack_require_4132__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__nested_webpack_require_4132__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __nested_webpack_require_4132__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __nested_webpack_require_13197__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __nested_webpack_require_13197__("36c3");
var gOPN = __nested_webpack_require_13197__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __nested_webpack_require_14073__) {

var toInteger = __nested_webpack_require_14073__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __nested_webpack_require_14606__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_14606__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __nested_webpack_require_15349__) {

var isObject = __nested_webpack_require_15349__("f772");
var document = __nested_webpack_require_15349__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_15733__) {

var isObject = __nested_webpack_require_15733__("d3f4");
var document = __nested_webpack_require_15733__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __nested_webpack_require_16117__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_16117__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "268f":
/***/ (function(module, exports, __nested_webpack_require_16564__) {

module.exports = __nested_webpack_require_16564__("fde4");

/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_16860__) {

var global = __nested_webpack_require_16860__("7726");
var hide = __nested_webpack_require_16860__("32e9");
var has = __nested_webpack_require_16860__("69a8");
var SRC = __nested_webpack_require_16860__("ca5a")('src');
var $toString = __nested_webpack_require_16860__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_16860__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_18034__) {

var store = __nested_webpack_require_18034__("5537")('wks');
var uid = __nested_webpack_require_18034__("ca5a");
var Symbol = __nested_webpack_require_18034__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __nested_webpack_require_18756__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __nested_webpack_require_18756__("5ca1");
var context = __nested_webpack_require_18756__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __nested_webpack_require_18756__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __nested_webpack_require_19324__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_19324__("241e");
var $keys = __nested_webpack_require_19324__("c3a1");

__nested_webpack_require_19324__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_19642__) {

var dP = __nested_webpack_require_19642__("86cc");
var createDesc = __nested_webpack_require_19642__("4630");
module.exports = __nested_webpack_require_19642__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __nested_webpack_require_20018__) {

var document = __nested_webpack_require_20018__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __nested_webpack_require_20210__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_20210__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __nested_webpack_require_20693__) {

var dP = __nested_webpack_require_20693__("d9f6");
var createDesc = __nested_webpack_require_20693__("aebd");
module.exports = __nested_webpack_require_20693__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __nested_webpack_require_21069__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_21069__("335c");
var defined = __nested_webpack_require_21069__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __nested_webpack_require_21606__) {

__nested_webpack_require_21606__("46a7");
var $Object = __nested_webpack_require_21606__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __nested_webpack_require_22102__) {

var def = __nested_webpack_require_22102__("d9f6").f;
var has = __nested_webpack_require_22102__("07e3");
var TAG = __nested_webpack_require_22102__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __nested_webpack_require_22708__) {

var $export = __nested_webpack_require_22708__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__nested_webpack_require_22708__("8e60"), 'Object', { defineProperty: __nested_webpack_require_22708__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __nested_webpack_require_23022__) {

// all enumerable object keys, includes symbols
var getKeys = __nested_webpack_require_23022__("c3a1");
var gOPS = __nested_webpack_require_23022__("9aa9");
var pIE = __nested_webpack_require_23022__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __nested_webpack_require_23582__) {

var MATCH = __nested_webpack_require_23582__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __nested_webpack_require_23927__) {

var store = __nested_webpack_require_23927__("dbdb")('wks');
var uid = __nested_webpack_require_23927__("62a0");
var Symbol = __nested_webpack_require_23927__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_24393__) {

var core = __nested_webpack_require_24393__("8378");
var global = __nested_webpack_require_24393__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_24393__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __nested_webpack_require_24926__) {

var shared = __nested_webpack_require_24926__("dbdb")('keys');
var uid = __nested_webpack_require_24926__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __nested_webpack_require_25371__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_25371__("36c3");
var toLength = __nested_webpack_require_25371__("b447");
var toAbsoluteIndex = __nested_webpack_require_25371__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_26382__) {

var global = __nested_webpack_require_26382__("7726");
var core = __nested_webpack_require_26382__("8378");
var hide = __nested_webpack_require_26382__("32e9");
var redefine = __nested_webpack_require_26382__("2aba");
var ctx = __nested_webpack_require_26382__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_28107__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_28107__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __nested_webpack_require_28715__) {

var global = __nested_webpack_require_28715__("e53d");
var core = __nested_webpack_require_28715__("584a");
var ctx = __nested_webpack_require_28715__("d864");
var hide = __nested_webpack_require_28715__("35e8");
var has = __nested_webpack_require_28715__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __nested_webpack_require_31193__) {

var global = __nested_webpack_require_31193__("e53d");
var core = __nested_webpack_require_31193__("584a");
var LIBRARY = __nested_webpack_require_31193__("b8e3");
var wksExt = __nested_webpack_require_31193__("ccb9");
var defineProperty = __nested_webpack_require_31193__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __nested_webpack_require_31726__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __nested_webpack_require_31726__("5ca1");
var $includes = __nested_webpack_require_31726__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__nested_webpack_require_31726__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_32191__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_32191__("626a");
var defined = __nested_webpack_require_32191__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_32687__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_32687__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __nested_webpack_require_33430__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __nested_webpack_require_33430__("e6f3");
var hiddenKeys = __nested_webpack_require_33430__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_34396__) {

var toInteger = __nested_webpack_require_34396__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __nested_webpack_require_34706__) {

module.exports = !__nested_webpack_require_34706__("8e60") && !__nested_webpack_require_34706__("294c")(function () {
  return Object.defineProperty(__nested_webpack_require_34706__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __nested_webpack_require_35357__) {

var dP = __nested_webpack_require_35357__("d9f6");
var anObject = __nested_webpack_require_35357__("e4ae");
var getKeys = __nested_webpack_require_35357__("c3a1");

module.exports = __nested_webpack_require_35357__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __nested_webpack_require_36042__) {

module.exports = __nested_webpack_require_36042__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_36171__) {

var anObject = __nested_webpack_require_36171__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_36171__("c69a");
var toPrimitive = __nested_webpack_require_36171__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_36171__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __nested_webpack_require_36861__) {

__nested_webpack_require_36861__("32a6");
module.exports = __nested_webpack_require_36861__("584a").Object.keys;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __nested_webpack_require_37146__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_37146__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __nested_webpack_require_37422__) {

// 7.2.2 IsArray(argument)
var cof = __nested_webpack_require_37422__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __nested_webpack_require_37663__) {

module.exports = __nested_webpack_require_37663__("35e8");


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_37898__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_37898__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_38505__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_38505__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_38505__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_38905__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_38905__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_39207__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_39207__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __nested_webpack_require_39483__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_39483__("e4ae");
var dPs = __nested_webpack_require_39483__("7e90");
var enumBugKeys = __nested_webpack_require_39483__("1691");
var IE_PROTO = __nested_webpack_require_39483__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_39483__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_39483__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __nested_webpack_require_41094__) {

module.exports = __nested_webpack_require_41094__("8aae");

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_41223__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_41223__("d3f4");
var cof = __nested_webpack_require_41223__("2d95");
var MATCH = __nested_webpack_require_41223__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __nested_webpack_require_41856__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_41856__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __nested_webpack_require_42469__) {

var pIE = __nested_webpack_require_42469__("355d");
var createDesc = __nested_webpack_require_42469__("aebd");
var toIObject = __nested_webpack_require_42469__("36c3");
var toPrimitive = __nested_webpack_require_42469__("1bc3");
var has = __nested_webpack_require_42469__("07e3");
var IE8_DOM_DEFINE = __nested_webpack_require_42469__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __nested_webpack_require_42469__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bf90":
/***/ (function(module, exports, __nested_webpack_require_43148__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __nested_webpack_require_43148__("36c3");
var $getOwnPropertyDescriptor = __nested_webpack_require_43148__("bf0b").f;

__nested_webpack_require_43148__("ce7e")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_43582__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_43582__("6821");
var toLength = __nested_webpack_require_43582__("9def");
var toAbsoluteIndex = __nested_webpack_require_43582__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __nested_webpack_require_44593__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_44593__("e6f3");
var enumBugKeys = __nested_webpack_require_44593__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_44892__) {

module.exports = !__nested_webpack_require_44892__("9e1e") && !__nested_webpack_require_44892__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_44892__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_45413__) {

var isObject = __nested_webpack_require_45413__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __nested_webpack_require_45655__) {

exports.f = __nested_webpack_require_45655__("5168");


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __nested_webpack_require_45780__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_45780__("63b6");
var core = __nested_webpack_require_45780__("584a");
var fails = __nested_webpack_require_45780__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __nested_webpack_require_46258__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __nested_webpack_require_46258__("aae3");
var defined = __nested_webpack_require_46258__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __nested_webpack_require_46839__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_46839__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __nested_webpack_require_47634__) {

var anObject = __nested_webpack_require_47634__("e4ae");
var IE8_DOM_DEFINE = __nested_webpack_require_47634__("794b");
var toPrimitive = __nested_webpack_require_47634__("1bc3");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_47634__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __nested_webpack_require_48324__) {

var core = __nested_webpack_require_48324__("584a");
var global = __nested_webpack_require_48324__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_48324__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e265":
/***/ (function(module, exports, __nested_webpack_require_48857__) {

module.exports = __nested_webpack_require_48857__("ed33");

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __nested_webpack_require_48986__) {

var isObject = __nested_webpack_require_48986__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __nested_webpack_require_49660__) {

var has = __nested_webpack_require_49660__("07e3");
var toIObject = __nested_webpack_require_49660__("36c3");
var arrayIndexOf = __nested_webpack_require_49660__("5b4e")(false);
var IE_PROTO = __nested_webpack_require_49660__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __nested_webpack_require_50296__) {

var META = __nested_webpack_require_50296__("62a0")('meta');
var isObject = __nested_webpack_require_50296__("f772");
var has = __nested_webpack_require_50296__("07e3");
var setDesc = __nested_webpack_require_50296__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__nested_webpack_require_50296__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __nested_webpack_require_51974__) {

__nested_webpack_require_51974__("014b");
module.exports = __nested_webpack_require_51974__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_53597__) {

module.exports = __nested_webpack_require_53597__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_53787__) {

"use strict";
__nested_webpack_require_53787__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_53787__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_53787__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_53787__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__nested_webpack_require_53787__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __nested_webpack_require_53787__("268f");
var get_own_property_descriptor_default = /*#__PURE__*/__nested_webpack_require_53787__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __nested_webpack_require_53787__("e265");
var get_own_property_symbols_default = /*#__PURE__*/__nested_webpack_require_53787__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __nested_webpack_require_53787__("a4bb");
var keys_default = /*#__PURE__*/__nested_webpack_require_53787__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __nested_webpack_require_53787__("85f2");
var define_property_default = /*#__PURE__*/__nested_webpack_require_53787__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __nested_webpack_require_53787__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __nested_webpack_require_53787__("2fdb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-viaudio/Media.vue?vue&type=script&lang=js&



/* harmony default export */ var Mediavue_type_script_lang_js_ = ({
  functional: true,
  name: 'Media',
  render: function render(createElement, context) {
    if (!['video', 'audio'].includes(context.props.kind.toLowerCase())) {
      return createElement();
    }

    if (context.props.srcObject) {
      context.data.domProps = {
        playsInline: context.props.playsInline || true,
        autoplay: context.props.autoplay || true
      };
    }

    context.data.domProps = _objectSpread({}, context.props, context.data.domProps);
    context.data.attrs = _objectSpread({}, context.data.attrs, context.props.attrs);
    return createElement(context.props.kind.toLowerCase(), context.data);
  },
  props: {
    kind: {
      type: String,
      required: true
    },
    muted: {
      type: Boolean,
      required: false
    },
    poster: {
      type: String,
      required: false
    },
    src: {
      type: String | Array,
      required: false
    },
    srcObject: {
      required: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-viaudio/Media.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_viaudio_Mediavue_type_script_lang_js_ = (Mediavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vue-viaudio/Media.vue
var Media_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  vue_viaudio_Mediavue_type_script_lang_js_,
  Media_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Media = (component.exports);
// CONCATENATED MODULE: ./src/components/vue-viaudio/index.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Media', Media);
/* harmony default export */ var vue_viaudio = (Media);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_viaudio);



/***/ }),

/***/ "fde4":
/***/ (function(module, exports, __nested_webpack_require_62060__) {

__nested_webpack_require_62060__("bf90");
var $Object = __nested_webpack_require_62060__("584a").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ })

/******/ });
});
//# sourceMappingURL=vue-viaudio.umd.js.map

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _dongido_vue_viaudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dongido/vue-viaudio */ "./node_modules/@dongido/vue-viaudio/dist/vue-viaudio.umd.js");
/* harmony import */ var _dongido_vue_viaudio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dongido_vue_viaudio__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//https://vue-select.org/guide/positioning.html#popper-js-integration





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__["default"], _pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectParty: function SelectParty() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectParty-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectParty */ "./resources/js/pages/parties/SelectParty.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'DocLog'
    },
    secProc: {
      type: String,
      "default": 'Document Log'
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['currentMatter', 'currentParty'])),
  watch: {
    activeTab: function activeTab(newValue) {
      if (newValue === "Document") {
        if (this.record.url) this.setSourceContainer();
      }
    }
  },
  data: function data() {
    return {
      actionButtons: [],
      doclogCategories: root.doclogCategories,
      doclogSubCategories: root.doclogSubCategories,
      fileType: null,
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Document",
        title: "Document",
        iconClass: '',
        visible: false,
        active: false
      }]
    };
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      this.setGeneralTab();
      this.clearSourceContainers();
      axios.post('/doclog/get', {
        recordid: id
      }).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(response) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.record = response.data.data[0];
                  if (!_this.record.category) _this.record.doclogcategoryid = null;
                  if (!_this.record.subcategory) _this.record.doclogsubcategoryid = null;
                  _this.selectMatter.matter = {
                    id: _this.record.matterid,
                    fileref: htmlDecode(_this.record.matterfileref),
                    description: htmlDecode(_this.record.matterdescription)
                  };
                  _this.selectParty.partyName = _this.record.partyname;
                  _context.next = 7;
                  return _this.getFileType().then(function (fileTypeResponse) {
                    console.log("fileTypeResponse", fileTypeResponse);
                    _this.record.type = fileTypeResponse.type;
                    _this.record.mimeType = fileTypeResponse.mimetype;

                    if (_this.record.type == 'unknown') {
                      _this.hideDocumentTab();
                    } else {
                      _this.unHideDocumentTab();
                    }

                    _this.initFormData();
                  })["catch"](function (error) {
                    showError('Error', error);
                  });

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      this.setGeneralTab();
      this.hideDocumentTab();
      this.setGeneralTab();
      this.clearSourceContainers();
      var defaultCategory = root.doclogCategories.filter(function (category) {
        return category.description == 'Document';
      })[0];
      this.record = {
        employeeid: root.loggedInEmployeeId,
        parenttype: 'Matter',
        type: 'document',
        direction: '1',
        doclogcategoryid: defaultCategory ? defaultCategory.recordid : 1,
        doclogsubcategoryid: null,
        emailflag: '0',
        matterid: this.currentMatter.recordid || null,
        partyid: null,
        description: null,
        date: null,
        time: null,
        datetime: moment().format(root.control.dateformat + ' HH:mm:ss')
      };
      this.selectMatter.matter = this.currentMatter.fileref ? {
        recordid: this.currentMatter.recordid,
        fileref: htmlDecode(this.currentMatter.fileref),
        description: htmlDecode(this.currentMatter.description)
      } : {
        recordid: null,
        fileref: '',
        description: ''
      };
      this.selectParty.partyName = this.currentParty.code ? this.currentParty.code + ' - ' + this.currentParty.name : null;
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this2.id + ' input[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      this.selectMatter.callingComponent = this;
      this.selectParty.callingComponent = this;
      this.setActionButtons();
      this.setDocumentTabTitle();
      this.displayForm();
    },
    isMessage: function isMessage() {
      var _this$record, _this$record2;

      return ((_this$record = this.record) === null || _this$record === void 0 ? void 0 : _this$record.emailflag) == '1' || ((_this$record2 = this.record) === null || _this$record2 === void 0 ? void 0 : _this$record2.emailflag) == '2' ? true : false;
    },
    isEmail: function isEmail() {
      var _this$record3;

      return ((_this$record3 = this.record) === null || _this$record3 === void 0 ? void 0 : _this$record3.emailflag) == '1' ? true : false;
    },
    isSms: function isSms() {
      var _this$record4;

      return ((_this$record4 = this.record) === null || _this$record4 === void 0 ? void 0 : _this$record4.emailflag) == '2' ? true : false;
    },
    setActionButtons: function setActionButtons() {
      var buttons = [{
        text: 'Change',
        title: 'Upload a new file and replace the existing one',
        callback: 'replaceFile',
        "class": 'btn-secondary',
        icon: 'fa-refresh'
      }];

      if (this.record.url) {
        buttons.unshift({
          text: 'Email',
          title: 'Email',
          callback: 'emailDocument',
          "class": 'btn-danger',
          icon: 'fa-envelope'
        });
        buttons.unshift({
          text: 'Download',
          title: 'Download the file',
          callback: 'downloadFile',
          "class": 'btn-primary',
          icon: 'fa-download'
        });
      }

      if (this.record.type === 'document' || this.record.type === 'image') {
        buttons.unshift({
          text: 'Print',
          title: 'Print',
          callback: 'printDocument',
          "class": 'btn-success',
          icon: 'fa-print'
        });
      }

      this.actionButtons = buttons;
    },
    getFileType: function getFileType() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (_this3.record.emailflag == '1') {
          resolve({
            type: 'email',
            mimetype: ''
          });
        } else if (_this3.record.emailflag == '2') {
          resolve({
            type: 'sms',
            mimetype: ''
          });
        } else if (_this3.record.url || _this3.record.savedname) {
          axios.post('/utils/getFileType', {
            filename: _this3.record.url || _this3.record.savedname
          }).then(function (response) {
            if (response.data.errors) {
              reject(response.data.errors);
            } else {
              resolve(response.data.data);
            }
          });
        } else {
          resolve({
            type: 'unknown',
            mimetype: ''
          });
        }
      });
    },
    viewItem: function viewItem() {
      $('#doclog-form-view-item').get(0).click();
    },
    uploadToTheCloud: function uploadToTheCloud() {
      var _this4 = this;

      root.$snotify.simple(this.record.description, 'Uploading', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      axios.post('/doclog/upload/' + this.record.recordid).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          axios.post('/file/checkIfRemoteFileExists', {
            url: response.data.data.url
          }).then(function (fileCheckResponse) {
            if (fileCheckResponse.data.result === true) {
              root.$snotify.clear();
              _this4.record.url = response.data.data.url;

              _this4.setSourceContainer();
            } else {
              _this4.record.url = null;
              showError('File Not Found', '<p><em>' + _this4.record.savedname + '</em> was not found.</p><p>It may be inaccessible or has been moved or deleted.</p>');
            }
          })["catch"](function (error) {
            showError('Error', error);
          });
        }
      });
    },
    uploadFile: function uploadFile(file) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var mimeType, folder, formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Test different file type from here: https://file-examples.com/
                //console.log('file.type',file.type );
                mimeType = root.mimeTypeHelper(file.type);
                _this5.fileType = mimeType.type;
                _this5.record.type = mimeType.description;
                _this5.record.mimeType = file.type;
                _this5.record.description = _this5.record.description || file.name;
                folder = _this5.getFolder();

                _this5.setDocumentTabTitle();

                root.$snotify.simple(file.name, 'Uploading', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                formData = new FormData();
                formData.append("file", file);
                formData.append("fileName", file.name);
                formData.append("folder", folder);
                _context2.next = 14;
                return axios.post('/file/upload', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 14:
                response = _context2.sent;

                if (response.data.error) {
                  root.$snotify.clear();
                  showError('Error uploading document', response.data.error);
                } else {
                  root.$snotify.clear();
                  _this5.record.url = response.data.url;

                  _this5.setActionButtons();

                  _this5.unHideDocumentTab();

                  _this5.setDocumentTab();

                  _this5.errors = {};
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getFolder: function getFolder() {
      if (this.record.parenttype === 'Matter') {
        return 'matters/' + this.record.matterid + '/doclog';
      } else if (this.record.parenttype === 'Party') {
        return 'parties/' + this.record.partyid + '/doclog';
      } else {
        showError('System Error', 'Unable to determine the correct folder to save the file. Saving it in the General folder.');
        return 'general/doclog';
      }
    },
    setSourceContainer: function setSourceContainer() {
      var _this6 = this;

      setTimeout(function () {
        if (_this6.record.type === 'audio' || _this6.record.type === 'video') {
          if (isEncoded(_this6.record.url)) {
            _this6.$refs[_this6.record.type.toLowerCase() + '-player'].src = [_this6.record.url];
          } else {
            _this6.$refs[_this6.record.type.toLowerCase() + '-player'].src = [encodeURI(_this6.record.url)];
          }
        } else if (_this6.record.type === 'image') {
          if (isEncoded(_this6.record.url)) {
            $('#' + _this6._uid + '-image').attr('src', _this6.record.url);
          } else {
            $('#' + _this6._uid + '-image').attr('src', encodeURI(_this6.record.url));
          } // } else if ( this.record.type === 'text') {
          //     $('#' + this._uid + '-document-iframe')[0].src = this.record.url;

        } else {
          $('#' + _this6._uid + '-document-iframe')[0].src = "https://docs.google.com/gview?url=" + encodeURIComponent(_this6.record.url) + "&embedded=true";
        }
      });
    },
    clearSourceContainers: function clearSourceContainers() {
      if ($('#' + this._uid + '-document-iframe').length) $('#' + this._uid + '-document-iframe')[0].src = '';
      if (this.$refs['audio-player']) this.$refs['audio-player'].src = [];
      if (this.$refs['video-player']) this.$refs['video-player'].src = [];
    },
    setDocumentTab: function setDocumentTab() {
      if (this.activeTab === 'Document') {
        this.setSourceContainer();
      } else {
        this.activeTab = 'Document';
        this.tabs[0].active = false;
        this.tabs[1].active = true;
      }
    },
    setDocumentTabTitle: function setDocumentTabTitle() {
      if (this.record.type === 'other') {
        this.tabs[1].title = this.userFriendlyFileType(this.record.mimeType);
      } else {
        this.tabs[1].title = this.record.type.capitalize();
      }
    },
    userFriendlyFileType: function userFriendlyFileType(type) {
      var returnData = type;

      if (type.indexOf('application/vnd.') === 0) {
        returnData = type.substring(16).capitalize();
      } else if (type.indexOf('application/') === 0) {
        returnData = type.substring(12).capitalize();
      } else if (type.indexOf('image/') === 0) {
        returnData = type.substring(6).capitalize() + ' Image';
      }

      return returnData;
    },
    hideDocumentTab: function hideDocumentTab() {
      this.tabs[1].visible = false;
    },
    unHideDocumentTab: function unHideDocumentTab() {
      this.tabs[1].visible = true;
    },
    // hideAttachmentsTab() {
    //     if ( this.tabs[2].visible ) {
    //         this.setGeneralTab();
    //         this.tabs[2].visible = false;
    //     }
    // },
    // unHideAttachmentsTab() {
    //     this.tabs[2].visible = true;
    // },
    replaceFile: function replaceFile() {
      this.$refs['upload-button'].selectFile();
    },
    downloadFile: function downloadFile() {
      root.downloadObject(this.record.url, this.record.mimeType);
    },
    parentTypeChanged: function parentTypeChanged(newValue) {
      this.record.parenttype = newValue;
      this.selectMatter.matter = {
        id: null,
        fileref: '',
        description: ''
      };
      this.record.matterid = 0;
      this.selectParty.partyName = null;
      this.record.partyid = 0; // if ( newValue === 'Matter' ) {
      //     this.record.partyid = 0;
      // } else if ( newValue === 'Party' ) {
      //     this.record.matterid = 0;
      // }
    },
    matterSelected: function matterSelected(selectedRecord) {
      this.record.matterid = selectedRecord.recordid;
      this.record.partyid = 0;
      this.record.parenttype = 'Matter';
    },
    partySelected: function partySelected(selectedRecord) {
      this.record.partyid = selectedRecord.recordid;
      this.record.matterid = 0;
      this.record.parenttype = 'Party';
    },
    okClicked: function okClicked() {
      var _this$record5,
          _this$record5$datetim,
          _this7 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var dateStringLength = (_this$record5 = this.record) === null || _this$record5 === void 0 ? void 0 : (_this$record5$datetim = _this$record5.datetime) === null || _this$record5$datetim === void 0 ? void 0 : _this$record5$datetim.length;

      if (!dateStringLength) {
        showError('Error', 'Please enter a date');
        return;
      }

      this.record.date = this.record.datetime.slice(0, dateStringLength - 9);
      this.record.time = this.record.datetime.slice(-8);
      root.$snotify.simple('Please wait...', 'Saving Item', {
        timeout: 10000,
        icon: 'img/cogs.gif'
      });
      axios.post('/doclog/' + (this.savedFlag ? 'update' : 'store'), this.record).then(function (response) {
        if (response.data.errors) {
          _this7.setGeneralTab();

          showError('Error', response.data.errors);
        } else {
          _this7.record.recordid = response.data.data[0].recordid;
          root.$snotify.clear();
          _this7.errors = {};

          if (!_this7.editing && !_this7.savedFlag) {
            if (_this7.table.initialOrder[0][1] == 'asc') {
              _this7.highlightRow(response.data.data[0].recordid, {
                where: ["date,>,0", "date,<," + response.data.data[0].date, "time,<," + response.data.data[0].time],
                orderBy: ['date,asc', 'time,asc']
              });
            } else {
              _this7.highlightRow(response.data.data[0].recordid, {
                where: ["date,>,0", "date,>," + response.data.data[0].date, "time,>," + response.data.data[0].time],
                orderBy: ['date,desc', 'time,desc']
              });
            }
          } else {
            _this7.table.refreshRow(response.data.data[0].recordid);
          }

          if (closeFlag) {
            _this7.closeForm();
          } else {
            _this7.savedFlag = true;
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this7.table.singular, error);
      });
    },
    printDocument: function printDocument() {
      this.$root.previewPdf.document = this.record;
      this.$root.previewPdf.printDocument();
    },
    emailDocument: function emailDocument() {
      this.$root.previewPdf.document = this.record;
      this.$root.previewPdf.emailDocument(this.record.description, this.record.description);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogForm.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogForm.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DoclogForm_vue_vue_type_template_id_9b113d4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoclogForm.vue?vue&type=template&id=9b113d4c& */ "./resources/js/pages/doclog/DoclogForm.vue?vue&type=template&id=9b113d4c&");
/* harmony import */ var _DoclogForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoclogForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/doclog/DoclogForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DoclogForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoclogForm_vue_vue_type_template_id_9b113d4c___WEBPACK_IMPORTED_MODULE_0__.render,
  _DoclogForm_vue_vue_type_template_id_9b113d4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/doclog/DoclogForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoclogForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogForm.vue?vue&type=template&id=9b113d4c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogForm.vue?vue&type=template&id=9b113d4c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogForm_vue_vue_type_template_id_9b113d4c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogForm_vue_vue_type_template_id_9b113d4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogForm_vue_vue_type_template_id_9b113d4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoclogForm.vue?vue&type=template&id=9b113d4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogForm.vue?vue&type=template&id=9b113d4c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogForm.vue?vue&type=template&id=9b113d4c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogForm.vue?vue&type=template&id=9b113d4c& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content doclog-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header doclog-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [
                      !_vm.editing && !_vm.savedFlag
                        ? _c("span", [_vm._v("Item will be Added")])
                        : _c("span", [_vm._v("Item will be Changed")]),
                    ]),
                    _vm._v(" "),
                    _vm.modal
                      ? _c("i", {
                          staticClass:
                            "cp top-right fa fa-times-circle fa-2x text-white",
                          attrs: {
                            title: "Close this window",
                            "data-dismiss": "modal",
                          },
                        })
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  !_vm.modal
                    ? _c("page-close-button", {
                        on: { closeClicked: _vm.closeForm },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "card-body form-tab-body overflow-auto p-3",
                style: _vm.modal ? "min-height:50vh" : "",
              },
              [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between" },
                  [
                    _c("form-tabs", { attrs: { tabs: _vm.tabs } }),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("drop-down-button", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.activeTab === "Document" &&
                                !_vm.isMessage(),
                              expression:
                                "activeTab === 'Document' && !isMessage()",
                            },
                          ],
                          attrs: { buttons: _vm.actionButtons },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "General",
                        expression: "activeTab === 'General'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c("label", [_vm._v("Date/Time")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              ref: "datePickerComponent",
                              attrs: {
                                config: _vm.$root.dateTimePickerOptions,
                              },
                              model: {
                                value: _vm.record.datetime,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "datetime", $$v)
                                },
                                expression: "record.datetime",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.editing
                          ? _c("text-input", {
                              attrs: {
                                _class: "col-md-4",
                                readOnly: true,
                                name: "createdBy",
                                label: "Created By",
                              },
                              model: {
                                value: _vm.record.employeename,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "employeename", $$v)
                                },
                                expression: "record.employeename",
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-12",
                            name: "description",
                            label: "Description",
                            popOver:
                              "<h4>Description</h4><p>A description of the Item.</p>",
                          },
                          model: {
                            value: _vm.record.description,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "description", $$v)
                            },
                            expression: "record.description",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("label", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c("pop-over", {
                            attrs: {
                              content:
                                "\r\n                                <h4>Category</h4>\r\n                                <p>Specify the Category the item belongs to.</p>",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-select",
                            {
                              attrs: {
                                options: _vm.doclogCategories,
                                label: "description",
                                clearable: false,
                                searchable: true,
                                reduce: function (doclogCategories) {
                                  return doclogCategories.recordid
                                },
                              },
                              model: {
                                value: _vm.record.doclogcategoryid,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "doclogcategoryid", $$v)
                                },
                                expression: "record.doclogcategoryid",
                              },
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "no-options" },
                                  slot: "no-options",
                                },
                                [_vm._v("Category not found")]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("label", [_vm._v("Sub Category")]),
                          _vm._v(" "),
                          _c("pop-over", {
                            attrs: {
                              content:
                                "\r\n                                <h4>Sub Category</h4>\r\n                                <p>Specify the Sub Category the item belongs to.\r\n                                <p>Note: This is an optional field</p>",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-select",
                            {
                              attrs: {
                                options: _vm.doclogSubCategories,
                                label: "description",
                                clearable: true,
                                searchable: true,
                                reduce: function (doclogSubCategories) {
                                  return doclogSubCategories.recordid
                                },
                              },
                              model: {
                                value: _vm.record.doclogsubcategoryid,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.record,
                                    "doclogsubcategoryid",
                                    $$v
                                  )
                                },
                                expression: "record.doclogsubcategoryid",
                              },
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "no-options" },
                                  slot: "no-options",
                                },
                                [_vm._v("Sub Category not found")]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("radio-buttons", {
                          attrs: {
                            popOver:
                              "<h4>Linked To</h4>\r\n                            <p>Documents are automatically added to the Document Log when you <em>assemble a document</em> for a Matter or Party, \r\n                            but you can also add other items (such as images, audio and video) and manually link them to a Matter or Party.</p>",
                            popOverContainer: "#" + _vm.id,
                            _style:
                              "flex: 1;padding-right: 5px;padding-left: 15px;",
                            record: _vm.record,
                            column: "parenttype",
                            buttons: [
                              {
                                value: "Matter",
                                text: "Matter",
                                title:
                                  "The Correspondence is linked to a specific Matter",
                              },
                              {
                                value: "Party",
                                text: "Party",
                                title:
                                  "The Correspondence is linked to a specific Party",
                              },
                            ],
                            name: "parentType",
                            label: "Linked To",
                          },
                          on: { change: _vm.parentTypeChanged },
                        }),
                        _vm._v(" "),
                        _c("select-matter", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.record.parenttype === "Matter",
                              expression: "record.parenttype === 'Matter'",
                            },
                          ],
                          ref: _vm._uid + "-doclog-form-select-matter",
                          attrs: {
                            _style:
                              "flex: 3;padding-right: 15px;padding-left: 5px;",
                            id: _vm.id + "-select-matter",
                            title: "The Matter this Item is linked to",
                            "form-ref": _vm._uid + "-doclog-form-select-matter",
                          },
                        }),
                        _vm._v(" "),
                        _c("select-party", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.record.parenttype === "Party",
                              expression: "record.parenttype === 'Party'",
                            },
                          ],
                          ref: _vm._uid + "-doclog-select-party",
                          attrs: {
                            _style:
                              "flex: 3;padding-right: 15px;padding-left: 5px;",
                            id: _vm.id + "-select-party",
                            title: "The Party this Item is linked to",
                            "form-ref": _vm._uid + "-doclog-select-party",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("radio-buttons", {
                          attrs: {
                            popOver:
                              "<h4>Direction</h4>\n                            <p><strong>Outgoing:</strong> This item was generated internally.</p>\n                            <p><strong>Incoming:</strong> This item was sent to us by a third party.</p>\n                            <p><strong>Not Applicable:</strong> The direction is not applicable or irrelevant for this item.</p>",
                            _class: "col-md-12",
                            record: _vm.record,
                            column: "direction",
                            buttons: [
                              { value: "1", text: "Outgoing" },
                              { value: "2", text: "Incoming" },
                              { value: "0", text: "Not Applicable" },
                            ],
                            name: "direction",
                            label: "Direction",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.editing &&
                              _vm.record.savedname &&
                              !_vm.record.url &&
                              !_vm.isMessage(),
                            expression:
                              "editing && record.savedname && !record.url && !isMessage()",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-12",
                            popOver:
                              "<h4>Saved As</h4><p>The path and file name of the saved file.</p>",
                            readOnly: true,
                            label: "Saved As",
                          },
                          model: {
                            value: _vm.record.savedname,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "savedname", $$v)
                            },
                            expression: "record.savedname",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.editing && _vm.record.url,
                            expression: "editing && record.url",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-12",
                            popOver:
                              "<h4>Cloud Url</h4><p>The url of the file saved in the Cloud.</p>",
                            readOnly: true,
                            label: "Cloud Url",
                            inputGroupButtonFlag: true,
                            inputGroupButtonCallback: _vm.viewItem,
                            inputGroupButtonTitle: "View Item",
                            inputGroupButtonIcon: "fa-external-link",
                          },
                          model: {
                            value: _vm.record.url,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "url", $$v)
                            },
                            expression: "record.url",
                          },
                        }),
                        _vm._v(" "),
                        _vm.editing && _vm.record.url
                          ? _c("a", {
                              staticClass: "d-none",
                              attrs: {
                                id: "doclog-form-view-item",
                                href: _vm.record.url,
                                target: "_blank",
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm.activeTab === "Document"
                  ? _c(
                      "div",
                      {
                        staticClass: "form-tab-content",
                        staticStyle: { height: "100%" },
                      },
                      [
                        _vm.isMessage()
                          ? _c("div", [
                              _vm.record.type === "email"
                                ? _c("div", [
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c("text-input", {
                                          staticClass: "col-md-6",
                                          attrs: {
                                            readOnly: true,
                                            label: "From",
                                          },
                                          model: {
                                            value: _vm.record.emailfrom,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "emailfrom",
                                                $$v
                                              )
                                            },
                                            expression: "record.emailfrom",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("text-input", {
                                          staticClass: "col-md-6",
                                          attrs: {
                                            readOnly: true,
                                            label: "To",
                                          },
                                          model: {
                                            value: _vm.record.emailrecipients,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "emailrecipients",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "record.emailrecipients",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.record.emailcc
                                      ? _c(
                                          "div",
                                          { staticClass: "form-group row" },
                                          [
                                            _c("text-input", {
                                              staticClass: "col-md-12",
                                              attrs: {
                                                readOnly: true,
                                                label: "CC",
                                              },
                                              model: {
                                                value: _vm.record.emailcc,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.record,
                                                    "emailcc",
                                                    $$v
                                                  )
                                                },
                                                expression: "record.emailcc",
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c("text-input", {
                                          staticClass: "col-md-12",
                                          attrs: {
                                            readOnly: true,
                                            label: "Subject",
                                          },
                                          model: {
                                            value: _vm.record.description,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "description",
                                                $$v
                                              )
                                            },
                                            expression: "record.description",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c("text-area", {
                                          attrs: {
                                            _class: "col-md-12",
                                            rows: "6",
                                            cols: "50",
                                            name: "emailbody",
                                            label: "Message",
                                          },
                                          model: {
                                            value: _vm.record.emailbody,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "emailbody",
                                                $$v
                                              )
                                            },
                                            expression: "record.emailbody",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.record.type === "sms"
                                ? _c("div", [
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c("text-input", {
                                          staticClass: "col-md-6",
                                          attrs: {
                                            readOnly: true,
                                            label: "From",
                                          },
                                          model: {
                                            value: _vm.record.emailfrom,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "emailfrom",
                                                $$v
                                              )
                                            },
                                            expression: "record.emailfrom",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c("text-input", {
                                          staticClass: "col-md-12",
                                          attrs: {
                                            readOnly: true,
                                            label: "Details",
                                          },
                                          model: {
                                            value: _vm.record.emailfolder,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "emailfolder",
                                                $$v
                                              )
                                            },
                                            expression: "record.emailfolder",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c("text-area", {
                                          attrs: {
                                            _class: "col-md-12",
                                            rows: "6",
                                            cols: "50",
                                            name: "emailbody",
                                            label: "Message",
                                          },
                                          model: {
                                            value: _vm.record.emailbody,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.record,
                                                "emailbody",
                                                $$v
                                              )
                                            },
                                            expression: "record.emailbody",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ])
                                : _vm._e(),
                            ])
                          : _c("div", [
                              _vm.record.url
                                ? _c(
                                    "div",
                                    { staticStyle: { height: "100%" } },
                                    [
                                      _vm.record.type === "image"
                                        ? _c("img", {
                                            staticClass: "img-fluid border",
                                            attrs: {
                                              id: _vm._uid + "-image",
                                              alt: "Image",
                                            },
                                          })
                                        : _vm.record.type === "audio"
                                        ? _c("Media", {
                                            ref: "audio-player",
                                            attrs: {
                                              id: _vm._uid + "-audio",
                                              kind: "audio",
                                              src: [],
                                              controls: true,
                                            },
                                          })
                                        : _vm.record.type === "video"
                                        ? _c("Media", {
                                            ref: "video-player",
                                            style: { width: "100%" },
                                            attrs: {
                                              id: _vm._uid + "-video",
                                              kind: "video",
                                              src: [],
                                              controls: true,
                                            },
                                          })
                                        : _c(
                                            "div",
                                            { staticStyle: { height: "100%" } },
                                            [
                                              _c("iframe", {
                                                attrs: {
                                                  id:
                                                    _vm._uid +
                                                    "-document-iframe",
                                                  name:
                                                    _vm._uid +
                                                    "-document-iframe",
                                                  width: "100%",
                                                  height: "100%",
                                                  frameborder: "0",
                                                },
                                              }),
                                            ]
                                          ),
                                    ],
                                    1
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass: "row",
                                      staticStyle: { "min-height": "50vh" },
                                    },
                                    [
                                      _vm.record.url
                                        ? _c(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "centercenter" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "center",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href: _vm.record
                                                              .url,
                                                            target: "_blank",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "h3",
                                                            {
                                                              staticClass:
                                                                "text-success",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Click here to view this Document"
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : _c(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "centercenter" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "center",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "This document has not been uploaded to the Cloud."
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary form-button mt-3",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.uploadToTheCloud,
                                                          },
                                                        },
                                                        [_vm._m(0)]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        { staticClass: "mt-2" },
                                                        [
                                                          _vm._v(
                                                            "Click here to upload it to the Cloud"
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                    ]
                                  ),
                            ]),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "div",
                [
                  _c("upload-button", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          !_vm.record.url &&
                          !_vm.isMessage() &&
                          _vm.activeTab === "General",
                        expression:
                          "!record.url && !isMessage() && activeTab === 'General'",
                      },
                    ],
                    ref: "upload-button",
                    attrs: {
                      id: _vm.id,
                      buttonText: "Upload File",
                      title:
                        "Upload a document, image, audio file or any type of file",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editing,
                          expression: "editing",
                        },
                      ],
                      staticClass: "btn btn-primary form-button mr-3",
                      attrs: { type: "button" },
                      on: { click: _vm.deleteClicked },
                    },
                    [_vm._m(1)]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                !_vm.isMessage()
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-yellow form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Save the Item and continue editing",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.okClicked(false)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-square fa-lg mr-2",
                        }),
                        _vm._v("Save"),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isMessage()
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-success form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Save the Item and close the Window",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.okClicked(true)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-circle fa-lg mr-2",
                        }),
                        _vm._v("OK"),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.savedFlag || _vm.editing
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Close this screen" },
                        on: { click: _vm.closeForm },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Close"),
                      ]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Exit without saving" },
                        on: { click: _vm.closeForm },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Cancel"),
                      ]
                    ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Upload this Item to the Cloud" } }, [
      _c("i", { staticClass: "fa fa-cloud-upload fa-lg mr-2" }),
      _vm._v("Upload"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Delete this Item" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);