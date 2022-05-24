"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var redux_1 = require("redux");
var createPolicy = function (_a) {
    var name = _a.name, deductible = _a.deductible, deposit = _a.deposit;
    return {
        type: 'policies/addPolicy',
        payload: { name: name, deductible: deductible, deposit: deposit }
    };
};
var deletePolicy = function (policy) {
    return {
        type: 'policies/deletePolicy',
        payload: policy
    };
};
var createClaim = function (_a) {
    var name = _a.name, claimAmount = _a.claimAmount;
    return {
        type: 'claims/createClaim',
        payload: { name: name, claimAmount: claimAmount }
    };
};
var payoutClaim = function (claim) {
    return {
        type: 'accounting/payoutClaim',
        payload: {
            name: claim.name,
            claimAmount: claim.claimAmount
        }
    };
};
var receivePolicyDeposit = function (_a) {
    var name = _a.name, deductible = _a.deductible, deposit = _a.deposit;
    return {
        type: 'accounting/receiveDeposit',
        payload: {
            name: name,
            deductible: deductible,
            deposit: deposit
        }
    };
};
var initialState = {
    claimsHistory: [],
    policies: [],
    funds: 1000000
};
var claimsReducer = function (initialClaims, action) {
    if (initialClaims === void 0) { initialClaims = []; }
    switch (action.type) {
        case 'claims/createClaim':
            return __spreadArray(__spreadArray([], initialClaims, true), [action.payload], false);
        default:
            return initialClaims;
    }
};
var accountingReducer = function (funds, _a) {
    if (funds === void 0) { funds = initialState.funds; }
    var payload = _a.payload;
    if ('claimAmount' in payload) {
        return funds - payload.claimAmount;
    }
    else if ('deposit' in payload) {
        return funds + payload.deposit;
    }
    return funds;
};
var policiesReducer = function (policies, action) {
    if (policies === void 0) { policies = initialState.policies; }
    switch (action.type) {
        case 'policies/addPolicy':
            return __spreadArray(__spreadArray([], policies, true), [action.payload], false);
        case 'policies/deletePolicy':
            return policies.filter(function (_a) {
                var name = _a.name;
                return action.payload.name !== name;
            });
        default:
            return policies;
    }
};
var ourDepartments = (0, redux_1.combineReducers)({
    accounting: accountingReducer,
    claims: claimsReducer,
    policies: policiesReducer
});
var store = (0, redux_1.legacy_createStore)(ourDepartments);
store.dispatch(createPolicy({ name: 'Andrew', deductible: 500, deposit: 5 }));
console.log(store.getState());
