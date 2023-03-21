"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
};
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
var models_1 = require("./models");
// fetch user data unique to user
// issue api call to get submissions: returns [{questionId: string; (maps to unique id property of first questions call) status: correct/incorrect/partially_correct(caps)}]
// for questions that were never attempted, those id's will not be returned in list of submissions (empty circle)
// css is pre-written
// in emphasized div below, the appended className should be unattempted in case of no attempt
// in category h2, we also need to add how many are correct/total - Ex: HTML - 4/4, CSS - 2/5, etc
// <div class="category">
//   <h2>HTML</h2>
//   <div class="question">
//     <div class="status partially_correct"></div>
//     <h3>Stopwatch</h3>
//   </div>
//   <div class="question">
//     <div class="status correct"></div>
//     <h3>Tic Tac Toe</h3>
//   </div>
// </div>
fetchAndAppend('https://www.algoexpert.io/api/fe/questions', 'https://www.algoexpert.io/api/fe/submissions');
function fetchAndAppend(questionsUrl, submissionsUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var questions, questionsByCategory, submissions, submissionsByCategory, categoryDiv, wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getQuestions(questionsUrl)];
                case 1:
                    questions = _a.sent();
                    questionsByCategory = getQuestionsByCategory(questions);
                    return [4 /*yield*/, getSubmissions(submissionsUrl)];
                case 2:
                    submissions = _a.sent();
                    submissionsByCategory = getSubmissionsByCategory(questionsByCategory, submissions);
                    categoryDiv = createCategory(questionsByCategory, submissionsByCategory);
                    wrapper = document.getElementById('wrapper');
                    wrapper.append(categoryDiv);
                    return [2 /*return*/];
            }
        });
    });
}
function getQuestions(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, questions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    questions = _a.sent();
                    return [2 /*return*/, questions];
            }
        });
    });
}
function getSubmissions(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, submissions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    submissions = _a.sent();
                    return [2 /*return*/, submissions];
            }
        });
    });
}
function getQuestionsByCategory(questions) {
    var questionsByCategory = questions.reduce(function (acc, cv) {
        var _a, _b;
        return acc[cv.category] ? __assign(__assign({}, acc), (_a = {}, _a[cv.category] = __spreadArray(__spreadArray([], acc[cv.category], true), [cv], false), _a)) : __assign(__assign({}, acc), (_b = {}, _b[cv.category] = [cv], _b));
    }, {});
    return questionsByCategory;
}
function getSubmissionsByCategory(questionsByCategory, submissions) {
    var _a;
    var submissionsByCategory = {};
    for (var _i = 0, _b = Object.entries(questionsByCategory); _i < _b.length; _i++) {
        var _c = _b[_i], category = _c[0], questions = _c[1];
        submissionsByCategory[category] = __spreadArray(__spreadArray([], ((_a = submissionsByCategory[category]) !== null && _a !== void 0 ? _a : []), true), questions.reduce(function (acc, _a, i, arr) {
            var id = _a.id;
            return __spreadArray(__spreadArray([], acc, true), submissions.filter(function (_a, i, arr) {
                var questionId = _a.questionId;
                return id === questionId;
            }), true);
        }, []), true);
    }
    console.log(submissionsByCategory);
    return submissionsByCategory;
}
function createCategory(questionsByCategory, submissionsByCategory) {
    var _loop_1 = function (category, questions) {
        var categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        var h2 = document.createElement("h2");
        h2.textContent = "".concat(category, " - ").concat(submissionsByCategory[category].length, "/").concat(questions.length);
        categoryDiv.append(h2);
        questions.forEach(function (question) {
            var questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            var h3QuestionName = document.createElement('h3');
            h3QuestionName.textContent = question.name;
            var categorySubmissions = submissionsByCategory[category];
            var statusString = getQuestionStatusString(question, categorySubmissions);
            var statusDiv = document.createElement('div');
            statusDiv.classList.add(statusString);
            questionDiv.append(statusDiv);
            questionDiv.append(h3QuestionName);
            categoryDiv.append(questionDiv);
        });
        return { value: categoryDiv };
    };
    for (var _i = 0, _a = Object.entries(questionsByCategory); _i < _a.length; _i++) {
        var _b = _a[_i], category = _b[0], questions = _b[1];
        var state_1 = _loop_1(category, questions);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
function getQuestionStatusString(question, categorySubmissions) {
    var status = 'status ';
    var submissionData = categorySubmissions.filter(function (cv) { return question.id === cv.questionId; });
    if (!submissionData.length) {
        return status.concat('unattempted');
    }
    switch (submissionData[0].status) {
        case models_1.Status.CORRECT:
            return status.concat('correct');
        case models_1.Status.INCORRECT:
            return status.concat('incorrect');
        case models_1.Status.PARTIALLY_CORRECT:
            return status.concat('partially correct');
        default:
            return status;
    }
}
