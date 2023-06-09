// Generated by purs version 0.15.9
import * as $foreign from "./foreign.js";
import * as Partial from "../Partial/index.js";
var crashWith = /* #__PURE__ */ Partial.crashWith();
var unsafePartial = $foreign["_unsafePartial"];
var unsafeCrashWith = function (msg) {
    return unsafePartial(function () {
        return crashWith(msg);
    });
};
export {
    unsafePartial,
    unsafeCrashWith
};
