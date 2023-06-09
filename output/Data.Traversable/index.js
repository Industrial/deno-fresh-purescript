// Generated by purs version 0.15.9
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Const from "../Data.Const/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_App from "../Data.Functor.App/index.js";
import * as Data_Functor_Compose from "../Data.Functor.Compose/index.js";
import * as Data_Functor_Coproduct from "../Data.Functor.Coproduct/index.js";
import * as Data_Functor_Product from "../Data.Functor.Product/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Maybe_First from "../Data.Maybe.First/index.js";
import * as Data_Maybe_Last from "../Data.Maybe.Last/index.js";
import * as Data_Monoid_Additive from "../Data.Monoid.Additive/index.js";
import * as Data_Monoid_Conj from "../Data.Monoid.Conj/index.js";
import * as Data_Monoid_Disj from "../Data.Monoid.Disj/index.js";
import * as Data_Monoid_Dual from "../Data.Monoid.Dual/index.js";
import * as Data_Monoid_Multiplicative from "../Data.Monoid.Multiplicative/index.js";
import * as Data_Traversable_Accum from "../Data.Traversable.Accum/index.js";
import * as Data_Traversable_Accum_Internal from "../Data.Traversable.Accum.Internal/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var traverse = function (dict) {
    return dict.traverse;
};
var traversableTuple = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Tuple.Tuple.create(v.value0))(f(v.value1));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Tuple.Tuple.create(v.value0))(v.value1);
        };
    },
    Functor0: function () {
        return Data_Tuple.functorTuple;
    },
    Foldable1: function () {
        return Data_Foldable.foldableTuple;
    }
};
var traversableMultiplicative = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Monoid_Multiplicative.Multiplicative)(f(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Monoid_Multiplicative.Multiplicative)(v);
        };
    },
    Functor0: function () {
        return Data_Monoid_Multiplicative.functorMultiplicative;
    },
    Foldable1: function () {
        return Data_Foldable.foldableMultiplicative;
    }
};
var traversableMaybe = {
    traverse: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return function (v1) {
                if (v1 instanceof Data_Maybe.Nothing) {
                    return pure(Data_Maybe.Nothing.value);
                };
                if (v1 instanceof Data_Maybe.Just) {
                    return map(Data_Maybe.Just.create)(v(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Traversable (line 115, column 1 - line 119, column 33): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
    },
    sequence: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return pure(Data_Maybe.Nothing.value);
            };
            if (v instanceof Data_Maybe.Just) {
                return map(Data_Maybe.Just.create)(v.value0);
            };
            throw new Error("Failed pattern match at Data.Traversable (line 115, column 1 - line 119, column 33): " + [ v.constructor.name ]);
        };
    },
    Functor0: function () {
        return Data_Maybe.functorMaybe;
    },
    Foldable1: function () {
        return Data_Foldable.foldableMaybe;
    }
};
var traverse1 = /* #__PURE__ */ traverse(traversableMaybe);
var traversableIdentity = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Identity.Identity)(f(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Identity.Identity)(v);
        };
    },
    Functor0: function () {
        return Data_Identity.functorIdentity;
    },
    Foldable1: function () {
        return Data_Foldable.foldableIdentity;
    }
};
var traversableEither = {
    traverse: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return function (v1) {
                if (v1 instanceof Data_Either.Left) {
                    return pure(new Data_Either.Left(v1.value0));
                };
                if (v1 instanceof Data_Either.Right) {
                    return map(Data_Either.Right.create)(v(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Traversable (line 149, column 1 - line 153, column 36): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
    },
    sequence: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            if (v instanceof Data_Either.Left) {
                return pure(new Data_Either.Left(v.value0));
            };
            if (v instanceof Data_Either.Right) {
                return map(Data_Either.Right.create)(v.value0);
            };
            throw new Error("Failed pattern match at Data.Traversable (line 149, column 1 - line 153, column 36): " + [ v.constructor.name ]);
        };
    },
    Functor0: function () {
        return Data_Either.functorEither;
    },
    Foldable1: function () {
        return Data_Foldable.foldableEither;
    }
};
var traversableDual = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Monoid_Dual.Dual)(f(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Monoid_Dual.Dual)(v);
        };
    },
    Functor0: function () {
        return Data_Monoid_Dual.functorDual;
    },
    Foldable1: function () {
        return Data_Foldable.foldableDual;
    }
};
var traversableDisj = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Monoid_Disj.Disj)(f(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Monoid_Disj.Disj)(v);
        };
    },
    Functor0: function () {
        return Data_Monoid_Disj.functorDisj;
    },
    Foldable1: function () {
        return Data_Foldable.foldableDisj;
    }
};
var traversableConst = {
    traverse: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        return function (v) {
            return function (v1) {
                return pure(v1);
            };
        };
    },
    sequence: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        return function (v) {
            return pure(v);
        };
    },
    Functor0: function () {
        return Data_Const.functorConst;
    },
    Foldable1: function () {
        return Data_Foldable.foldableConst;
    }
};
var traversableConj = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Monoid_Conj.Conj)(f(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Monoid_Conj.Conj)(v);
        };
    },
    Functor0: function () {
        return Data_Monoid_Conj.functorConj;
    },
    Foldable1: function () {
        return Data_Foldable.foldableConj;
    }
};
var traversableCompose = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable);
    var functorCompose = Data_Functor_Compose.functorCompose(dictTraversable.Functor0());
    var foldableCompose = Data_Foldable.foldableCompose(dictTraversable.Foldable1());
    return function (dictTraversable1) {
        var traverse3 = traverse(dictTraversable1);
        var functorCompose1 = functorCompose(dictTraversable1.Functor0());
        var foldableCompose1 = foldableCompose(dictTraversable1.Foldable1());
        return {
            traverse: function (dictApplicative) {
                var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                var traverse4 = traverse2(dictApplicative);
                var traverse5 = traverse3(dictApplicative);
                return function (f) {
                    return function (v) {
                        return map(Data_Functor_Compose.Compose)(traverse4(traverse5(f))(v));
                    };
                };
            },
            sequence: function (dictApplicative) {
                return traverse(traversableCompose(dictTraversable)(dictTraversable1))(dictApplicative)(identity);
            },
            Functor0: function () {
                return functorCompose1;
            },
            Foldable1: function () {
                return foldableCompose1;
            }
        };
    };
};
var traversableAdditive = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Monoid_Additive.Additive)(f(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return map(Data_Monoid_Additive.Additive)(v);
        };
    },
    Functor0: function () {
        return Data_Monoid_Additive.functorAdditive;
    },
    Foldable1: function () {
        return Data_Foldable.foldableAdditive;
    }
};
var sequenceDefault = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable);
    return function (dictApplicative) {
        return traverse2(dictApplicative)(identity);
    };
};
var traversableArray = {
    traverse: function (dictApplicative) {
        var Apply0 = dictApplicative.Apply0();
        return $foreign.traverseArrayImpl(Control_Apply.apply(Apply0))(Data_Functor.map(Apply0.Functor0()))(Control_Applicative.pure(dictApplicative));
    },
    sequence: function (dictApplicative) {
        return sequenceDefault(traversableArray)(dictApplicative);
    },
    Functor0: function () {
        return Data_Functor.functorArray;
    },
    Foldable1: function () {
        return Data_Foldable.foldableArray;
    }
};
var sequence = function (dict) {
    return dict.sequence;
};
var sequence1 = /* #__PURE__ */ sequence(traversableMaybe);
var traversableApp = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable);
    var sequence2 = sequence(dictTraversable);
    var functorApp = Data_Functor_App.functorApp(dictTraversable.Functor0());
    var foldableApp = Data_Foldable.foldableApp(dictTraversable.Foldable1());
    return {
        traverse: function (dictApplicative) {
            var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var traverse3 = traverse2(dictApplicative);
            return function (f) {
                return function (v) {
                    return map(Data_Functor_App.App)(traverse3(f)(v));
                };
            };
        },
        sequence: function (dictApplicative) {
            var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var sequence3 = sequence2(dictApplicative);
            return function (v) {
                return map(Data_Functor_App.App)(sequence3(v));
            };
        },
        Functor0: function () {
            return functorApp;
        },
        Foldable1: function () {
            return foldableApp;
        }
    };
};
var traversableCoproduct = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable);
    var sequence2 = sequence(dictTraversable);
    var functorCoproduct = Data_Functor_Coproduct.functorCoproduct(dictTraversable.Functor0());
    var foldableCoproduct = Data_Foldable.foldableCoproduct(dictTraversable.Foldable1());
    return function (dictTraversable1) {
        var traverse3 = traverse(dictTraversable1);
        var sequence3 = sequence(dictTraversable1);
        var functorCoproduct1 = functorCoproduct(dictTraversable1.Functor0());
        var foldableCoproduct1 = foldableCoproduct(dictTraversable1.Foldable1());
        return {
            traverse: function (dictApplicative) {
                var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                var traverse4 = traverse2(dictApplicative);
                var traverse5 = traverse3(dictApplicative);
                return function (f) {
                    return Data_Functor_Coproduct.coproduct((function () {
                        var $313 = map(function ($316) {
                            return Data_Functor_Coproduct.Coproduct(Data_Either.Left.create($316));
                        });
                        var $314 = traverse4(f);
                        return function ($315) {
                            return $313($314($315));
                        };
                    })())((function () {
                        var $317 = map(function ($320) {
                            return Data_Functor_Coproduct.Coproduct(Data_Either.Right.create($320));
                        });
                        var $318 = traverse5(f);
                        return function ($319) {
                            return $317($318($319));
                        };
                    })());
                };
            },
            sequence: function (dictApplicative) {
                var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                return Data_Functor_Coproduct.coproduct((function () {
                    var $321 = map(function ($324) {
                        return Data_Functor_Coproduct.Coproduct(Data_Either.Left.create($324));
                    });
                    var $322 = sequence2(dictApplicative);
                    return function ($323) {
                        return $321($322($323));
                    };
                })())((function () {
                    var $325 = map(function ($328) {
                        return Data_Functor_Coproduct.Coproduct(Data_Either.Right.create($328));
                    });
                    var $326 = sequence3(dictApplicative);
                    return function ($327) {
                        return $325($326($327));
                    };
                })());
            },
            Functor0: function () {
                return functorCoproduct1;
            },
            Foldable1: function () {
                return foldableCoproduct1;
            }
        };
    };
};
var traversableFirst = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        var traverse2 = traverse1(dictApplicative);
        return function (f) {
            return function (v) {
                return map(Data_Maybe_First.First)(traverse2(f)(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        var sequence2 = sequence1(dictApplicative);
        return function (v) {
            return map(Data_Maybe_First.First)(sequence2(v));
        };
    },
    Functor0: function () {
        return Data_Maybe_First.functorFirst;
    },
    Foldable1: function () {
        return Data_Foldable.foldableFirst;
    }
};
var traversableLast = {
    traverse: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        var traverse2 = traverse1(dictApplicative);
        return function (f) {
            return function (v) {
                return map(Data_Maybe_Last.Last)(traverse2(f)(v));
            };
        };
    },
    sequence: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        var sequence2 = sequence1(dictApplicative);
        return function (v) {
            return map(Data_Maybe_Last.Last)(sequence2(v));
        };
    },
    Functor0: function () {
        return Data_Maybe_Last.functorLast;
    },
    Foldable1: function () {
        return Data_Foldable.foldableLast;
    }
};
var traversableProduct = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable);
    var sequence2 = sequence(dictTraversable);
    var functorProduct = Data_Functor_Product.functorProduct(dictTraversable.Functor0());
    var foldableProduct = Data_Foldable.foldableProduct(dictTraversable.Foldable1());
    return function (dictTraversable1) {
        var traverse3 = traverse(dictTraversable1);
        var sequence3 = sequence(dictTraversable1);
        var functorProduct1 = functorProduct(dictTraversable1.Functor0());
        var foldableProduct1 = foldableProduct(dictTraversable1.Foldable1());
        return {
            traverse: function (dictApplicative) {
                var lift2 = Control_Apply.lift2(dictApplicative.Apply0());
                var traverse4 = traverse2(dictApplicative);
                var traverse5 = traverse3(dictApplicative);
                return function (f) {
                    return function (v) {
                        return lift2(Data_Functor_Product.product)(traverse4(f)(v.value0))(traverse5(f)(v.value1));
                    };
                };
            },
            sequence: function (dictApplicative) {
                var lift2 = Control_Apply.lift2(dictApplicative.Apply0());
                var sequence4 = sequence2(dictApplicative);
                var sequence5 = sequence3(dictApplicative);
                return function (v) {
                    return lift2(Data_Functor_Product.product)(sequence4(v.value0))(sequence5(v.value1));
                };
            },
            Functor0: function () {
                return functorProduct1;
            },
            Foldable1: function () {
                return foldableProduct1;
            }
        };
    };
};
var traverseDefault = function (dictTraversable) {
    var sequence2 = sequence(dictTraversable);
    var map = Data_Functor.map(dictTraversable.Functor0());
    return function (dictApplicative) {
        var sequence3 = sequence2(dictApplicative);
        return function (f) {
            return function (ta) {
                return sequence3(map(f)(ta));
            };
        };
    };
};
var mapAccumR = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateR);
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateR(traverse2(function (a) {
                    return function (s) {
                        return f(s)(a);
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanr = function (dictTraversable) {
    var mapAccumR1 = mapAccumR(dictTraversable);
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumR1(function (b) {
                    return function (a) {
                        var b$prime = f(a)(b);
                        return {
                            accum: b$prime,
                            value: b$prime
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var mapAccumL = function (dictTraversable) {
    var traverse2 = traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateL);
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateL(traverse2(function (a) {
                    return function (s) {
                        return f(s)(a);
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanl = function (dictTraversable) {
    var mapAccumL1 = mapAccumL(dictTraversable);
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumL1(function (b) {
                    return function (a) {
                        var b$prime = f(b)(a);
                        return {
                            accum: b$prime,
                            value: b$prime
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var $$for = function (dictApplicative) {
    return function (dictTraversable) {
        var traverse2 = traverse(dictTraversable)(dictApplicative);
        return function (x) {
            return function (f) {
                return traverse2(f)(x);
            };
        };
    };
};
export {
    traverse,
    sequence,
    traverseDefault,
    sequenceDefault,
    $$for as for,
    scanl,
    scanr,
    mapAccumL,
    mapAccumR,
    traversableArray,
    traversableMaybe,
    traversableFirst,
    traversableLast,
    traversableAdditive,
    traversableDual,
    traversableConj,
    traversableDisj,
    traversableMultiplicative,
    traversableEither,
    traversableTuple,
    traversableIdentity,
    traversableConst,
    traversableProduct,
    traversableCoproduct,
    traversableCompose,
    traversableApp
};
export {
    all,
    and,
    any,
    elem,
    find,
    fold,
    foldMap,
    foldMapDefaultL,
    foldMapDefaultR,
    foldl,
    foldlDefault,
    foldr,
    foldrDefault,
    for_,
    intercalate,
    maximum,
    maximumBy,
    minimum,
    minimumBy,
    notElem,
    oneOf,
    or,
    sequence_,
    sum,
    traverse_
} from "../Data.Foldable/index.js";
