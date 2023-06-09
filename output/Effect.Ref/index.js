// Generated by purs version 0.15.9
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Effect from "../Effect/index.js";
var $$void = /* #__PURE__ */ Data_Functor["void"](Effect.functorEffect);
var $$new = $foreign["_new"];
var modify$prime = $foreign.modifyImpl;
var modify = function (f) {
    return modify$prime(function (s) {
        var s$prime = f(s);
        return {
            state: s$prime,
            value: s$prime
        };
    });
};
var modify_ = function (f) {
    return function (s) {
        return $$void(modify(f)(s));
    };
};
export {
    newWithSelf,
    read,
    write
} from "./foreign.js";
export {
    $$new as new,
    modify$prime,
    modify,
    modify_
};