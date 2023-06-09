// Generated by purs version 0.15.9
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var bimap = function (dict) {
    return dict.bimap;
};
var lmap = function (dictBifunctor) {
    var bimap1 = bimap(dictBifunctor);
    return function (f) {
        return bimap1(f)(identity);
    };
};
var rmap = function (dictBifunctor) {
    return bimap(dictBifunctor)(identity);
};
var bifunctorTuple = {
    bimap: function (f) {
        return function (g) {
            return function (v) {
                return new Data_Tuple.Tuple(f(v.value0), g(v.value1));
            };
        };
    }
};
var bifunctorEither = {
    bimap: function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof Data_Either.Left) {
                    return new Data_Either.Left(v(v2.value0));
                };
                if (v2 instanceof Data_Either.Right) {
                    return new Data_Either.Right(v1(v2.value0));
                };
                throw new Error("Failed pattern match at Data.Bifunctor (line 32, column 1 - line 34, column 36): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
            };
        };
    }
};
var bifunctorConst = {
    bimap: function (f) {
        return function (v) {
            return function (v1) {
                return f(v1);
            };
        };
    }
};
export {
    bimap,
    lmap,
    rmap,
    bifunctorEither,
    bifunctorTuple,
    bifunctorConst
};
