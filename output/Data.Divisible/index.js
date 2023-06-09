// Generated by purs version 0.15.9
import * as Data_Divide from "../Data.Divide/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var divisiblePredicate = {
    conquer: /* #__PURE__ */ Data_Function["const"](true),
    Divide0: function () {
        return Data_Divide.dividePredicate;
    }
};
var divisibleOp = function (dictMonoid) {
    var divideOp = Data_Divide.divideOp(dictMonoid.Semigroup0());
    return {
        conquer: Data_Function["const"](Data_Monoid.mempty(dictMonoid)),
        Divide0: function () {
            return divideOp;
        }
    };
};
var divisibleEquivalence = {
    conquer: function (v) {
        return function (v1) {
            return true;
        };
    },
    Divide0: function () {
        return Data_Divide.divideEquivalence;
    }
};
var divisibleComparison = {
    conquer: function (v) {
        return function (v1) {
            return Data_Ordering.EQ.value;
        };
    },
    Divide0: function () {
        return Data_Divide.divideComparison;
    }
};
var conquer = function (dict) {
    return dict.conquer;
};
export {
    conquer,
    divisibleComparison,
    divisibleEquivalence,
    divisiblePredicate,
    divisibleOp
};
