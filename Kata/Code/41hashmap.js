// import { throws } from "assert";
// import { access } from "fs";
// import { add } from "lodash";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function solution(queryType, queries) {
    var getSums = 0;
    var hashmap = new HashMap();
    for (var i = 0; i < queryType.length; i++) {
        switch (queryType[i]) {
            case 'insert':
                hashmap.insert(queries[i]);
                break;
            case 'addToValue':
                hashmap.addToValue(queries[i]);
                break;
            case 'addToKey':
                hashmap.addToKey(queries[i]);
                break;
            case 'get':
                getSums += hashmap.getValue(queries[i]);
                break;
            default:
                console.log(hashmap._map);
        }
    }
    return getSums;
}
var HashMap = /** @class */ (function () {
    function HashMap() {
        this._map = {};
    }
    // get map(): Record<string, number> {
    //     return this._map;
    // }
    HashMap.prototype.insert = function (pair) {
        if (pair.length !== 2)
            throw new Error('Input must be a [number, number]');
        var key = pair[0];
        var val = pair[1];
        this._map[String(key)] = val;
        return this;
    };
    HashMap.prototype.addToValue = function (additive) {
        var _a;
        if (additive.length !== 1)
            throw new Error('Input must be a [number]');
        for (var _b = 0, _c = Object.keys(this._map); _b < _c.length; _b++) {
            var key = _c[_b];
            this._map = __assign(__assign({}, this._map), (_a = {}, _a[key] = this._map[key] + additive[0], _a));
        }
        return this;
    };
    HashMap.prototype.addToKey = function (additive) {
        var _this = this;
        if (additive.length !== 1)
            throw new Error('Input must be a [number]');
        this._map = Object.keys(this._map).reduce(function (acc, key, _i, _arr) {
            acc[String(Number(key) + additive[0])] = _this._map[key];
            return acc;
        }, {});
        return this;
    };
    HashMap.prototype.getValue = function (key) {
        return this._map[String(key[0])];
    };
    return HashMap;
}());
var queryType = ["insert",
    "insert",
    "addToValue",
    "addToKey",
    "get"];
var query = [
    [1, 2],
    [2, 3],
    [2],
    [1],
    [3]
];
console.log(solution(queryType, query));
