globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/prod-ssr.js
var DEV;
var init_prod_ssr = __esm({
  ".svelte-kit/output/server/chunks/prod-ssr.js"() {
    DEV = false;
  }
});

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function is_promise(value) {
  return !!value && (typeof value === "object" || typeof value === "function") && typeof /** @type {any} */
  value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a3, b3) {
  return a3 != a3 ? b3 == b3 : a3 !== b3 || a3 && typeof a3 === "object" || typeof a3 === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback2 of callbacks) {
      callback2(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component5) {
  current_component = component5;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i3 = pattern2.lastIndex - 1;
    const ch = str[i3];
    escaped2 += str.substring(last, i3) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i3 + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i3 = 0; i3 < items.length; i3 += 1) {
    str += fn(items[i3], i3);
  }
  return str;
}
function validate_component(component5, name) {
  if (!component5 || !component5.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component5;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css) => css.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/error.js
var init_error = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/error.js"() {
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/util.js
var init_util = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/util.js"() {
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/command.js
var init_command = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/command.js"() {
    init_error();
    init_util();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/append.js
var init_append = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/append.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/bitcount.js
var init_bitcount = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/bitcount.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/bitop.js
var init_bitop = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/bitop.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/bitpos.js
var init_bitpos = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/bitpos.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/dbsize.js
var init_dbsize = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/dbsize.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/decr.js
var init_decr = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/decr.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/decrby.js
var init_decrby = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/decrby.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/del.js
var init_del = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/del.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/echo.js
var init_echo = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/echo.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/eval.js
var init_eval = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/eval.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/evalsha.js
var init_evalsha = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/evalsha.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/exists.js
var init_exists = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/exists.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/expire.js
var init_expire = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/expire.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/expireat.js
var init_expireat = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/expireat.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/flushall.js
var init_flushall = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/flushall.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/flushdb.js
var init_flushdb = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/flushdb.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/get.js
var init_get = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/get.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getbit.js
var init_getbit = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getbit.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getdel.js
var init_getdel = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getdel.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getrange.js
var init_getrange = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getrange.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getset.js
var init_getset = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/getset.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hdel.js
var init_hdel = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hdel.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hexists.js
var init_hexists = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hexists.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hget.js
var init_hget = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hget.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hgetall.js
var init_hgetall = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hgetall.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hincrby.js
var init_hincrby = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hincrby.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hincrbyfloat.js
var init_hincrbyfloat = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hincrbyfloat.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hkeys.js
var init_hkeys = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hkeys.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hlen.js
var init_hlen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hlen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hmget.js
var init_hmget = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hmget.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hmset.js
var init_hmset = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hmset.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hrandfield.js
var init_hrandfield = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hrandfield.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hscan.js
var init_hscan = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hscan.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hset.js
var init_hset = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hset.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hsetnx.js
var init_hsetnx = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hsetnx.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hstrlen.js
var init_hstrlen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hstrlen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hvals.js
var init_hvals = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/hvals.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/incr.js
var init_incr = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/incr.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/incrby.js
var init_incrby = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/incrby.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/incrbyfloat.js
var init_incrbyfloat = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/incrbyfloat.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrappend.js
var init_json_arrappend = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrappend.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrindex.js
var init_json_arrindex = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrindex.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrinsert.js
var init_json_arrinsert = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrinsert.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrlen.js
var init_json_arrlen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrlen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrpop.js
var init_json_arrpop = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrpop.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrtrim.js
var init_json_arrtrim = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_arrtrim.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_clear.js
var init_json_clear = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_clear.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_del.js
var init_json_del = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_del.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_forget.js
var init_json_forget = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_forget.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_get.js
var init_json_get = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_get.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_mget.js
var init_json_mget = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_mget.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_numincrby.js
var init_json_numincrby = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_numincrby.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_nummultby.js
var init_json_nummultby = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_nummultby.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_objkeys.js
var init_json_objkeys = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_objkeys.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_objlen.js
var init_json_objlen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_objlen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_resp.js
var init_json_resp = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_resp.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_set.js
var init_json_set = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_set.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_strappend.js
var init_json_strappend = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_strappend.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_strlen.js
var init_json_strlen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_strlen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_toggle.js
var init_json_toggle = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_toggle.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_type.js
var init_json_type = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/json_type.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/keys.js
var init_keys = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/keys.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lindex.js
var init_lindex = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lindex.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/linsert.js
var init_linsert = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/linsert.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/llen.js
var init_llen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/llen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lmove.js
var init_lmove = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lmove.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpop.js
var init_lpop = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpop.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpos.js
var init_lpos = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpos.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpush.js
var init_lpush = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpush.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpushx.js
var init_lpushx = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lpushx.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lrange.js
var init_lrange = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lrange.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lrem.js
var init_lrem = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lrem.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lset.js
var init_lset = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/lset.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/ltrim.js
var init_ltrim = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/ltrim.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/mget.js
var init_mget = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/mget.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/mset.js
var init_mset = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/mset.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/msetnx.js
var init_msetnx = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/msetnx.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/persist.js
var init_persist = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/persist.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/pexpire.js
var init_pexpire = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/pexpire.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/pexpireat.js
var init_pexpireat = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/pexpireat.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/ping.js
var init_ping = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/ping.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/psetex.js
var init_psetex = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/psetex.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/pttl.js
var init_pttl = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/pttl.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/publish.js
var init_publish = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/publish.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/randomkey.js
var init_randomkey = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/randomkey.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rename.js
var init_rename = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rename.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/renamenx.js
var init_renamenx = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/renamenx.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rpop.js
var init_rpop = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rpop.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rpush.js
var init_rpush = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rpush.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rpushx.js
var init_rpushx = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/rpushx.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sadd.js
var init_sadd = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sadd.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/scan.js
var init_scan = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/scan.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/scard.js
var init_scard = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/scard.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/script_exists.js
var init_script_exists = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/script_exists.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/script_flush.js
var init_script_flush = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/script_flush.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/script_load.js
var init_script_load = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/script_load.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sdiff.js
var init_sdiff = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sdiff.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sdiffstore.js
var init_sdiffstore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sdiffstore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/set.js
var init_set = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/set.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setbit.js
var init_setbit = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setbit.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setex.js
var init_setex = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setex.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setnx.js
var init_setnx = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setnx.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setrange.js
var init_setrange = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/setrange.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sinter.js
var init_sinter = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sinter.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sinterstore.js
var init_sinterstore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sinterstore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sismember.js
var init_sismember = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sismember.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/smembers.js
var init_smembers = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/smembers.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/smismember.js
var init_smismember = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/smismember.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/smove.js
var init_smove = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/smove.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/spop.js
var init_spop = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/spop.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/srandmember.js
var init_srandmember = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/srandmember.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/srem.js
var init_srem = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/srem.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sscan.js
var init_sscan = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sscan.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/strlen.js
var init_strlen = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/strlen.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sunion.js
var init_sunion = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sunion.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sunionstore.js
var init_sunionstore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/sunionstore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/time.js
var init_time = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/time.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/touch.js
var init_touch = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/touch.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/ttl.js
var init_ttl = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/ttl.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/type.js
var init_type = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/type.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/unlink.js
var init_unlink = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/unlink.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zadd.js
var init_zadd = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zadd.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zcard.js
var init_zcard = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zcard.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zcount.js
var init_zcount = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zcount.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zincrby.js
var init_zincrby = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zincrby.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zinterstore.js
var init_zinterstore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zinterstore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zlexcount.js
var init_zlexcount = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zlexcount.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zpopmax.js
var init_zpopmax = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zpopmax.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zpopmin.js
var init_zpopmin = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zpopmin.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrange.js
var init_zrange = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrange.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrank.js
var init_zrank = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrank.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrem.js
var init_zrem = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrem.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zremrangebylex.js
var init_zremrangebylex = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zremrangebylex.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zremrangebyrank.js
var init_zremrangebyrank = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zremrangebyrank.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zremrangebyscore.js
var init_zremrangebyscore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zremrangebyscore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrevrank.js
var init_zrevrank = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zrevrank.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zscan.js
var init_zscan = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zscan.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zscore.js
var init_zscore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zscore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zunionstore.js
var init_zunionstore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zunionstore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/mod.js
var init_mod = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/mod.js"() {
    init_append();
    init_bitcount();
    init_bitop();
    init_bitpos();
    init_command();
    init_dbsize();
    init_decr();
    init_decrby();
    init_del();
    init_echo();
    init_eval();
    init_evalsha();
    init_exists();
    init_expire();
    init_expireat();
    init_flushall();
    init_flushdb();
    init_get();
    init_getbit();
    init_getdel();
    init_getrange();
    init_getset();
    init_hdel();
    init_hexists();
    init_hget();
    init_hgetall();
    init_hincrby();
    init_hincrbyfloat();
    init_hkeys();
    init_hlen();
    init_hmget();
    init_hmset();
    init_hrandfield();
    init_hscan();
    init_hset();
    init_hsetnx();
    init_hstrlen();
    init_hvals();
    init_incr();
    init_incrby();
    init_incrbyfloat();
    init_json_arrappend();
    init_json_arrindex();
    init_json_arrinsert();
    init_json_arrlen();
    init_json_arrpop();
    init_json_arrtrim();
    init_json_clear();
    init_json_del();
    init_json_forget();
    init_json_get();
    init_json_mget();
    init_json_numincrby();
    init_json_nummultby();
    init_json_objkeys();
    init_json_objlen();
    init_json_resp();
    init_json_set();
    init_json_strappend();
    init_json_strlen();
    init_json_toggle();
    init_json_type();
    init_keys();
    init_lindex();
    init_linsert();
    init_llen();
    init_lmove();
    init_lpop();
    init_lpos();
    init_lpush();
    init_lpushx();
    init_lrange();
    init_lrem();
    init_lset();
    init_ltrim();
    init_mget();
    init_mset();
    init_msetnx();
    init_persist();
    init_pexpire();
    init_pexpireat();
    init_ping();
    init_psetex();
    init_pttl();
    init_publish();
    init_randomkey();
    init_rename();
    init_renamenx();
    init_rpop();
    init_rpush();
    init_rpushx();
    init_sadd();
    init_scan();
    init_scard();
    init_script_exists();
    init_script_flush();
    init_script_load();
    init_sdiff();
    init_sdiffstore();
    init_set();
    init_setbit();
    init_setex();
    init_setnx();
    init_setrange();
    init_sinter();
    init_sinterstore();
    init_sismember();
    init_smembers();
    init_smismember();
    init_smove();
    init_spop();
    init_srandmember();
    init_srem();
    init_sscan();
    init_strlen();
    init_sunion();
    init_sunionstore();
    init_time();
    init_touch();
    init_ttl();
    init_type();
    init_unlink();
    init_zadd();
    init_zcard();
    init_zcount();
    init_zincrby();
    init_zinterstore();
    init_zlexcount();
    init_zpopmax();
    init_zpopmin();
    init_zrange();
    init_zrank();
    init_zrem();
    init_zremrangebylex();
    init_zremrangebyrank();
    init_zremrangebyscore();
    init_zrevrank();
    init_zscan();
    init_zscore();
    init_zunionstore();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zmscore.js
var init_zmscore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zmscore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zdiffstore.js
var init_zdiffstore = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/commands/zdiffstore.js"() {
    init_command();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/pipeline.js
var init_pipeline = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/pipeline.js"() {
    init_mod();
    init_error();
    init_zmscore();
    init_hrandfield();
    init_zdiffstore();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/base64@v0.2.1/base.js
function getLengths(b64) {
  const len = b64.length;
  let validLen = b64.indexOf("=");
  if (validLen === -1) {
    validLen = len;
  }
  const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function init(lookup2, revLookup2, urlsafe = false) {
  function _byteLength(validLen, placeHoldersLen) {
    return Math.floor((validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen);
  }
  function tripletToBase64(num) {
    return lookup2[num >> 18 & 63] + lookup2[num >> 12 & 63] + lookup2[num >> 6 & 63] + lookup2[num & 63];
  }
  function encodeChunk(buf2, start, end) {
    const out = new Array((end - start) / 3);
    for (let i3 = start, curTriplet = 0; i3 < end; i3 += 3) {
      out[curTriplet++] = tripletToBase64((buf2[i3] << 16) + (buf2[i3 + 1] << 8) + buf2[i3 + 2]);
    }
    return out.join("");
  }
  return {
    // base64 is 4/3 + up to two characters of the original data
    byteLength(b64) {
      return _byteLength.apply(null, getLengths(b64));
    },
    toUint8Array(b64) {
      const [validLen, placeHoldersLen] = getLengths(b64);
      const buf2 = new Uint8Array(_byteLength(validLen, placeHoldersLen));
      const len = placeHoldersLen ? validLen - 4 : validLen;
      let tmp;
      let curByte = 0;
      let i3;
      for (i3 = 0; i3 < len; i3 += 4) {
        tmp = revLookup2[b64.charCodeAt(i3)] << 18 | revLookup2[b64.charCodeAt(i3 + 1)] << 12 | revLookup2[b64.charCodeAt(i3 + 2)] << 6 | revLookup2[b64.charCodeAt(i3 + 3)];
        buf2[curByte++] = tmp >> 16 & 255;
        buf2[curByte++] = tmp >> 8 & 255;
        buf2[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup2[b64.charCodeAt(i3)] << 2 | revLookup2[b64.charCodeAt(i3 + 1)] >> 4;
        buf2[curByte++] = tmp & 255;
      } else if (placeHoldersLen === 1) {
        tmp = revLookup2[b64.charCodeAt(i3)] << 10 | revLookup2[b64.charCodeAt(i3 + 1)] << 4 | revLookup2[b64.charCodeAt(i3 + 2)] >> 2;
        buf2[curByte++] = tmp >> 8 & 255;
        buf2[curByte++] = tmp & 255;
      }
      return buf2;
    },
    fromUint8Array(buf2) {
      const maxChunkLength = 16383;
      const len = buf2.length;
      const extraBytes = len % 3;
      const len2 = len - extraBytes;
      const parts = new Array(Math.ceil(len2 / maxChunkLength) + (extraBytes ? 1 : 0));
      let curChunk = 0;
      let chunkEnd;
      for (let i3 = 0; i3 < len2; i3 += maxChunkLength) {
        chunkEnd = i3 + maxChunkLength;
        parts[curChunk++] = encodeChunk(buf2, i3, chunkEnd > len2 ? len2 : chunkEnd);
      }
      let tmp;
      if (extraBytes === 1) {
        tmp = buf2[len2];
        parts[curChunk] = lookup2[tmp >> 2] + lookup2[tmp << 4 & 63];
        if (!urlsafe)
          parts[curChunk] += "==";
      } else if (extraBytes === 2) {
        tmp = buf2[len2] << 8 | buf2[len2 + 1] & 255;
        parts[curChunk] = lookup2[tmp >> 10] + lookup2[tmp >> 4 & 63] + lookup2[tmp << 2 & 63];
        if (!urlsafe)
          parts[curChunk] += "=";
      }
      return parts.join("");
    }
  };
}
var init_base = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/base64@v0.2.1/base.js"() {
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/base64@v0.2.1/base64url.js
var lookup, revLookup, code, byteLength, toUint8Array, fromUint8Array;
var init_base64url = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/base64@v0.2.1/base64url.js"() {
    init_base();
    lookup = [];
    revLookup = [];
    code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    for (let i3 = 0, l3 = code.length; i3 < l3; ++i3) {
      lookup[i3] = code[i3];
      revLookup[code.charCodeAt(i3)] = i3;
    }
    ({ byteLength, toUint8Array, fromUint8Array } = init(lookup, revLookup, true));
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/denopkg.com/chiefbiiko/std-encoding@v1.0.0/mod.js
var decoder, encoder;
var init_mod2 = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/denopkg.com/chiefbiiko/std-encoding@v1.0.0/mod.js"() {
    init_base64url();
    decoder = new TextDecoder();
    encoder = new TextEncoder();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/sha1@v1.0.3/deps.js
var init_deps = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/sha1@v1.0.3/deps.js"() {
    init_mod2();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/sha1@v1.0.3/mod.js
var init_mod3 = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/deps/deno.land/x/sha1@v1.0.3/mod.js"() {
    init_deps();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/script.js
var init_script = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/script.js"() {
    init_mod3();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/redis.js
var init_redis = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/redis.js"() {
    init_mod();
    init_pipeline();
    init_script();
    init_zmscore();
    init_zdiffstore();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/http.js
var init_http = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/pkg/http.js"() {
    init_error();
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/version.js
var init_version = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/version.js"() {
  }
});

// node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/platforms/nodejs.js
var init_nodejs = __esm({
  "node_modules/.pnpm/@upstash+redis@1.22.0/node_modules/@upstash/redis/esm/platforms/nodejs.js"() {
    init_redis();
    init_http();
    init_version();
    if (typeof atob === "undefined") {
      global.atob = function(b64) {
        return Buffer.from(b64, "base64").toString("utf-8");
      };
    }
  }
});

// node_modules/.pnpm/@upstash+core-analytics@0.0.6/node_modules/@upstash/core-analytics/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/@upstash+core-analytics@0.0.6/node_modules/@upstash/core-analytics/dist/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key2 of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key2) && key2 !== except)
            __defProp2(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Analytics: () => Analytics
    });
    module.exports = __toCommonJS(src_exports);
    var Key = class {
      constructor(prefix, table, bucket) {
        this.prefix = prefix;
        this.table = table;
        this.bucket = bucket;
      }
      toString() {
        return [this.prefix, this.table, this.bucket].join(":");
      }
      static fromString(key2) {
        const [prefix, table, bucket] = key2.split(":");
        return new Key(prefix, table, parseInt(bucket));
      }
    };
    var Cache = class {
      constructor(ttl) {
        __publicField(this, "cache");
        __publicField(this, "ttl");
        this.cache = /* @__PURE__ */ new Map();
        this.ttl = ttl;
        setInterval(() => {
          const now2 = Date.now();
          for (const [key2, { createdAt }] of this.cache) {
            if (now2 - createdAt > this.ttl) {
              this.cache.delete(key2);
            }
          }
        }, this.ttl * 10);
      }
      get(key2) {
        const data2 = this.cache.get(key2);
        if (!data2) {
          return null;
        }
        if (Date.now() - data2.createdAt > this.ttl) {
          this.cache.delete(key2);
          return null;
        }
        return data2.value;
      }
      set(key2, value) {
        this.cache.set(key2, { createdAt: Date.now(), value });
      }
    };
    var Analytics = class {
      constructor(config) {
        __publicField(this, "redis");
        __publicField(this, "prefix");
        __publicField(this, "bucketSize");
        __publicField(this, "retention");
        __publicField(this, "cache", new Cache(6e4));
        this.redis = config.redis;
        this.prefix = config.prefix ?? "@upstash/analytics";
        this.bucketSize = this.parseWindow(config.window);
        this.retention = config.retention ? this.parseWindow(config.retention) : void 0;
      }
      validateTableName(table) {
        const regex = /^[a-zA-Z0-9_-]+$/;
        if (!regex.test(table)) {
          throw new Error(
            `Invalid table name: ${table}. Table names can only contain letters, numbers, dashes and underscores.`
          );
        }
      }
      parseWindow(window2) {
        if (typeof window2 === "number") {
          if (window2 <= 0) {
            throw new Error(`Invalid window: ${window2}`);
          }
          return window2;
        }
        const regex = /^(\d+)([smhd])$/;
        if (!regex.test(window2)) {
          throw new Error(`Invalid window: ${window2}`);
        }
        const [, valueStr, unit] = window2.match(regex);
        const value = parseInt(valueStr);
        switch (unit) {
          case "s":
            return value * 1e3;
          case "m":
            return value * 1e3 * 60;
          case "h":
            return value * 1e3 * 60 * 60;
          case "d":
            return value * 1e3 * 60 * 60 * 24;
          default:
            throw new Error(`Invalid window unit: ${unit}`);
        }
      }
      async ingest(table, ...events) {
        this.validateTableName(table);
        await Promise.all(
          events.map(async (event) => {
            const time = event.time ?? Date.now();
            const bucket = Math.floor(time / this.bucketSize) * this.bucketSize;
            const key2 = [this.prefix, table, bucket].join(":");
            await this.redis.hincrby(
              key2,
              JSON.stringify({
                ...event,
                time: void 0
              }),
              1
            );
          })
        );
      }
      async loadBuckets(table, opts) {
        this.validateTableName(table);
        const now2 = Date.now();
        const keys = [];
        if (opts.scan) {
          let cursor = 0;
          const match = [this.prefix, table, "*"].join(":");
          do {
            const [nextCursor, found] = await this.redis.scan(cursor, {
              match
            });
            cursor = nextCursor;
            for (const key2 of found) {
              const timestamp = parseInt(key2.split(":").pop());
              if (this.retention && timestamp < now2 - this.retention) {
                await this.redis.del(key2);
                continue;
              }
              if (timestamp >= opts.range[0] || timestamp <= opts.range[1]) {
                keys.push(key2);
              }
            }
          } while (cursor !== 0);
        } else {
          let t2 = Math.floor(now2 / this.bucketSize) * this.bucketSize;
          while (t2 > opts.range[1]) {
            t2 -= this.bucketSize;
          }
          while (t2 >= opts.range[0]) {
            keys.push([this.prefix, table, t2].join(":"));
            t2 -= this.bucketSize;
          }
        }
        const loadKeys = [];
        const buckets = [];
        for (const key2 of keys) {
          const cached = this.cache.get(key2);
          if (cached) {
            buckets.push({
              key: key2,
              hash: cached
            });
          } else {
            loadKeys.push(key2);
          }
        }
        const p3 = this.redis.pipeline();
        for (const key2 of loadKeys) {
          p3.hgetall(key2);
        }
        const res = loadKeys.length > 0 ? await p3.exec() : [];
        for (let i3 = 0; i3 < loadKeys.length; i3++) {
          const key2 = loadKeys[i3];
          const hash2 = res[i3];
          if (hash2) {
            this.cache.set(key2, hash2);
          }
          buckets.push({
            key: key2,
            hash: hash2 ?? {}
          });
        }
        return buckets.sort((a3, b3) => a3.hash.time - b3.hash.time);
      }
      async count(table, opts) {
        this.validateTableName(table);
        const buckets = await this.loadBuckets(table, { range: opts.range });
        return await Promise.all(
          buckets.map(async ({ key: key2, hash: hash2 }) => {
            const timestamp = parseInt(key2.split(":").pop());
            return {
              time: timestamp,
              count: Object.values(hash2).reduce((acc, curr) => acc + curr, 0)
            };
          })
        );
      }
      async aggregateBy(table, aggregateBy, opts) {
        this.validateTableName(table);
        const buckets = await this.loadBuckets(table, { range: opts.range });
        const days = await Promise.all(
          buckets.map(async ({ key: key2, hash: hash2 }) => {
            const day2 = { time: Key.fromString(key2).bucket };
            for (const [field, count] of Object.entries(hash2)) {
              const r3 = JSON.parse(field);
              for (const [k3, v3] of Object.entries(r3)) {
                const agg = r3[aggregateBy];
                if (!day2[agg]) {
                  day2[agg] = {};
                }
                if (k3 === aggregateBy) {
                  continue;
                }
                if (!day2[agg][v3]) {
                  day2[agg][v3] = 0;
                }
                day2[agg][v3] += count;
              }
            }
            return day2;
          })
        );
        return days;
      }
      async query(table, opts) {
        this.validateTableName(table);
        const buckets = await this.loadBuckets(table, { range: opts.range });
        const days = await Promise.all(
          buckets.map(async ({ key: key2, hash: hash2 }) => {
            const day2 = { time: Key.fromString(key2).bucket };
            for (const [field, count] of Object.entries(hash2)) {
              const r3 = JSON.parse(field);
              let skip = false;
              if (opts?.where) {
                for (const [requiredKey, requiredValue] of Object.entries(opts.where)) {
                  if (!(requiredKey in r3)) {
                    skip = true;
                    break;
                  }
                  if (r3[requiredKey] !== requiredValue) {
                    skip = true;
                    break;
                  }
                }
              }
              if (skip) {
                continue;
              }
              for (const [k3, v3] of Object.entries(r3)) {
                if (opts?.filter && !opts.filter.includes(k3)) {
                  continue;
                }
                if (!day2[k3]) {
                  day2[k3] = {};
                }
                if (!day2[k3][v3]) {
                  day2[k3][v3] = 0;
                }
                day2[k3][v3] += count;
              }
            }
            return day2;
          })
        );
        return days;
      }
    };
  }
});

// node_modules/.pnpm/@upstash+ratelimit@0.4.3/node_modules/@upstash/ratelimit/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/@upstash+ratelimit@0.4.3/node_modules/@upstash/ratelimit/dist/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key2 of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key2) && key2 !== except)
            __defProp2(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Analytics: () => Analytics,
      MultiRegionRatelimit: () => MultiRegionRatelimit,
      Ratelimit: () => RegionRatelimit
    });
    module.exports = __toCommonJS(src_exports);
    var import_core_analytics = require_dist();
    var Analytics = class {
      constructor(config) {
        __publicField(this, "analytics");
        __publicField(this, "table", "events");
        this.analytics = new import_core_analytics.Analytics({
          // @ts-expect-error we need to fix the types in core-analytics, it should only require the methods it needs, not the whole sdk
          redis: config.redis,
          window: "1h",
          prefix: config.prefix ?? "@upstash/ratelimit",
          retention: "90d"
        });
      }
      /**
       * Try to extract the geo information from the request
       *
       * This handles Vercel's `req.geo` and  and Cloudflare's `request.cf` properties
       * @param req
       * @returns
       */
      extractGeo(req) {
        if (typeof req.geo !== "undefined") {
          return req.geo;
        }
        if (typeof req.cf !== "undefined") {
          return req.cf;
        }
        return {};
      }
      async record(event) {
        await this.analytics.ingest(this.table, event);
      }
      async series(filter, cutoff) {
        const records = await this.analytics.query(this.table, {
          filter: [filter],
          range: [cutoff, Date.now()]
        });
        return records;
      }
      async getUsage(cutoff = 0) {
        const records = await this.analytics.aggregateBy(this.table, "identifier", {
          range: [cutoff, Date.now()]
        });
        const usage = {};
        for (const bucket of records) {
          for (const [k3, v3] of Object.entries(bucket)) {
            if (k3 === "time") {
              continue;
            }
            if (!usage[k3]) {
              usage[k3] = { success: 0, blocked: 0 };
            }
            usage[k3].success += v3["true"] ?? 0;
            usage[k3].blocked += v3["false"] ?? 0;
          }
        }
        return usage;
      }
    };
    var Cache = class {
      constructor(cache) {
        /**
         * Stores identifier -> reset (in milliseconds)
         */
        __publicField(this, "cache");
        this.cache = cache;
      }
      isBlocked(identifier) {
        if (!this.cache.has(identifier)) {
          return { blocked: false, reset: 0 };
        }
        const reset3 = this.cache.get(identifier);
        if (reset3 < Date.now()) {
          this.cache.delete(identifier);
          return { blocked: false, reset: 0 };
        }
        return { blocked: true, reset: reset3 };
      }
      blockUntil(identifier, reset3) {
        this.cache.set(identifier, reset3);
      }
      set(key2, value) {
        this.cache.set(key2, value);
      }
      get(key2) {
        return this.cache.get(key2) || null;
      }
      incr(key2) {
        let value = this.cache.get(key2) ?? 0;
        value += 1;
        this.cache.set(key2, value);
        return value;
      }
    };
    function ms(d3) {
      const match = d3.match(/^(\d+)\s?(ms|s|m|h|d)$/);
      if (!match) {
        throw new Error(`Unable to parse window size: ${d3}`);
      }
      const time = parseInt(match[1]);
      const unit = match[2];
      switch (unit) {
        case "ms":
          return time;
        case "s":
          return time * 1e3;
        case "m":
          return time * 1e3 * 60;
        case "h":
          return time * 1e3 * 60 * 60;
        case "d":
          return time * 1e3 * 60 * 60 * 24;
        default:
          throw new Error(`Unable to parse window size: ${d3}`);
      }
    }
    var Ratelimit = class {
      constructor(config) {
        __publicField(this, "limiter");
        __publicField(this, "ctx");
        __publicField(this, "prefix");
        __publicField(this, "timeout");
        __publicField(this, "analytics");
        /**
         * Determine if a request should pass or be rejected based on the identifier and previously chosen ratelimit.
         *
         * Use this if you want to reject all requests that you can not handle right now.
         *
         * @example
         * ```ts
         *  const ratelimit = new Ratelimit({
         *    redis: Redis.fromEnv(),
         *    limiter: Ratelimit.slidingWindow(10, "10 s")
         *  })
         *
         *  const { success } = await ratelimit.limit(id)
         *  if (!success){
         *    return "Nope"
         *  }
         *  return "Yes"
         * ```
         */
        __publicField(this, "limit", async (identifier, req) => {
          const key2 = [this.prefix, identifier].join(":");
          let timeoutId = null;
          try {
            const arr = [this.limiter(this.ctx, key2)];
            if (this.timeout > 0) {
              arr.push(
                new Promise((resolve) => {
                  timeoutId = setTimeout(() => {
                    resolve({
                      success: true,
                      limit: 0,
                      remaining: 0,
                      reset: 0,
                      pending: Promise.resolve()
                    });
                  }, this.timeout);
                })
              );
            }
            const res = await Promise.race(arr);
            if (this.analytics) {
              try {
                const geo = req ? this.analytics.extractGeo(req) : void 0;
                const analyticsP = this.analytics.record({
                  identifier,
                  time: Date.now(),
                  success: res.success,
                  ...geo
                }).catch((err) => {
                  console.warn("Failed to record analytics", err);
                });
                res.pending = Promise.all([res.pending, analyticsP]);
              } catch (err) {
                console.warn("Failed to record analytics", err);
              }
            }
            return res;
          } finally {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
          }
        });
        /**
         * Block until the request may pass or timeout is reached.
         *
         * This method returns a promise that resolves as soon as the request may be processed
         * or after the timeoue has been reached.
         *
         * Use this if you want to delay the request until it is ready to get processed.
         *
         * @example
         * ```ts
         *  const ratelimit = new Ratelimit({
         *    redis: Redis.fromEnv(),
         *    limiter: Ratelimit.slidingWindow(10, "10 s")
         *  })
         *
         *  const { success } = await ratelimit.blockUntilReady(id, 60_000)
         *  if (!success){
         *    return "Nope"
         *  }
         *  return "Yes"
         * ```
         */
        __publicField(this, "blockUntilReady", async (identifier, timeout) => {
          if (timeout <= 0) {
            throw new Error("timeout must be positive");
          }
          let res;
          const deadline = Date.now() + timeout;
          while (true) {
            res = await this.limit(identifier);
            if (res.success) {
              break;
            }
            if (res.reset === 0) {
              throw new Error("This should not happen");
            }
            const wait = Math.min(res.reset, deadline) - Date.now();
            await new Promise((r3) => setTimeout(r3, wait));
            if (Date.now() > deadline) {
              break;
            }
          }
          return res;
        });
        this.ctx = config.ctx;
        this.limiter = config.limiter;
        this.timeout = config.timeout ?? 5e3;
        this.prefix = config.prefix ?? "@upstash/ratelimit";
        this.analytics = config.analytics ? new Analytics({
          redis: Array.isArray(this.ctx.redis) ? this.ctx.redis[0] : this.ctx.redis,
          prefix: this.prefix
        }) : void 0;
        if (config.ephemeralCache instanceof Map) {
          this.ctx.cache = new Cache(config.ephemeralCache);
        } else if (typeof config.ephemeralCache === "undefined") {
          this.ctx.cache = new Cache(/* @__PURE__ */ new Map());
        }
      }
    };
    function randomId() {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i3 = 0; i3 < 16; i3++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    var MultiRegionRatelimit = class extends Ratelimit {
      /**
       * Create a new Ratelimit instance by providing a `@upstash/redis` instance and the algorithn of your choice.
       */
      constructor(config) {
        super({
          prefix: config.prefix,
          limiter: config.limiter,
          timeout: config.timeout,
          analytics: config.analytics,
          ctx: {
            redis: config.redis,
            cache: config.ephemeralCache ? new Cache(config.ephemeralCache) : void 0
          }
        });
      }
      /**
       * Each requests inside a fixed time increases a counter.
       * Once the counter reaches a maxmimum allowed number, all further requests are
       * rejected.
       *
       * **Pro:**
       *
       * - Newer requests are not starved by old ones.
       * - Low storage cost.
       *
       * **Con:**
       *
       * A burst of requests near the boundary of a window can result in a very
       * high request rate because two windows will be filled with requests quickly.
       *
       * @param tokens - How many requests a user can make in each time window.
       * @param window - A fixed timeframe
       */
      static fixedWindow(tokens, window2) {
        const windowDuration = ms(window2);
        const script = `
    local key     = KEYS[1]
    local id      = ARGV[1]
    local window  = ARGV[2]
    
    redis.call("SADD", key, id)
    local members = redis.call("SMEMBERS", key)
    if #members == 1 then
    -- The first time this key is set, the value will be 1.
    -- So we only need the expire command once
      redis.call("PEXPIRE", key, window)
    end
    
    return members
`;
        return async function(ctx, identifier) {
          if (ctx.cache) {
            const { blocked, reset: reset22 } = ctx.cache.isBlocked(identifier);
            if (blocked) {
              return {
                success: false,
                limit: tokens,
                remaining: 0,
                reset: reset22,
                pending: Promise.resolve()
              };
            }
          }
          const requestID = randomId();
          const bucket = Math.floor(Date.now() / windowDuration);
          const key2 = [identifier, bucket].join(":");
          const dbs = ctx.redis.map((redis) => ({
            redis,
            request: redis.eval(script, [key2], [requestID, windowDuration])
          }));
          const firstResponse = await Promise.any(dbs.map((s4) => s4.request));
          const usedTokens = firstResponse.length;
          const remaining = tokens - usedTokens - 1;
          async function sync() {
            const individualIDs = await Promise.all(dbs.map((s4) => s4.request));
            const allIDs = Array.from(new Set(individualIDs.flatMap((_4) => _4)).values());
            for (const db of dbs) {
              const ids = await db.request;
              if (ids.length >= tokens) {
                continue;
              }
              const diff = allIDs.filter((id) => !ids.includes(id));
              if (diff.length === 0) {
                continue;
              }
              await db.redis.sadd(key2, ...allIDs);
            }
          }
          const success = remaining > 0;
          const reset3 = (bucket + 1) * windowDuration;
          if (ctx.cache && !success) {
            ctx.cache.blockUntil(identifier, reset3);
          }
          return {
            success,
            limit: tokens,
            remaining,
            reset: reset3,
            pending: sync()
          };
        };
      }
      /**
       * Combined approach of `slidingLogs` and `fixedWindow` with lower storage
       * costs than `slidingLogs` and improved boundary behavior by calcualting a
       * weighted score between two windows.
       *
       * **Pro:**
       *
       * Good performance allows this to scale to very high loads.
       *
       * **Con:**
       *
       * Nothing major.
       *
       * @param tokens - How many requests a user can make in each time window.
       * @param window - The duration in which the user can max X requests.
       */
      static slidingWindow(tokens, window2) {
        const windowSize = ms(window2);
        const script = `
      local currentKey  = KEYS[1]           -- identifier including prefixes
      local previousKey = KEYS[2]           -- key of the previous bucket
      local tokens      = tonumber(ARGV[1]) -- tokens per window
      local now         = ARGV[2]           -- current timestamp in milliseconds
      local window      = ARGV[3]           -- interval in milliseconds
      local requestID   = ARGV[4]           -- uuid for this request


      local currentMembers = redis.call("SMEMBERS", currentKey)
      local requestsInCurrentWindow = #currentMembers
      local previousMembers = redis.call("SMEMBERS", previousKey)
      local requestsInPreviousWindow = #previousMembers

      local percentageInCurrent = ( now % window) / window
      if requestsInPreviousWindow * ( 1 - percentageInCurrent ) + requestsInCurrentWindow >= tokens then
        return {currentMembers, previousMembers}
      end

      redis.call("SADD", currentKey, requestID)
      table.insert(currentMembers, requestID)
      if requestsInCurrentWindow == 0 then 
        -- The first time this key is set, the value will be 1.
        -- So we only need the expire command once
        redis.call("PEXPIRE", currentKey, window * 2 + 1000) -- Enough time to overlap with a new window + 1 second
      end
      return {currentMembers, previousMembers}
      `;
        const windowDuration = ms(window2);
        return async function(ctx, identifier) {
          if (ctx.cache) {
            const { blocked, reset: reset22 } = ctx.cache.isBlocked(identifier);
            if (blocked) {
              return {
                success: false,
                limit: tokens,
                remaining: 0,
                reset: reset22,
                pending: Promise.resolve()
              };
            }
          }
          const requestID = randomId();
          const now2 = Date.now();
          const currentWindow = Math.floor(now2 / windowSize);
          const currentKey = [identifier, currentWindow].join(":");
          const previousWindow = currentWindow - windowSize;
          const previousKey = [identifier, previousWindow].join(":");
          const dbs = ctx.redis.map((redis) => ({
            redis,
            request: redis.eval(script, [currentKey, previousKey], [tokens, now2, windowDuration, requestID])
          }));
          const percentageInCurrent = now2 % windowDuration / windowDuration;
          const [current, previous] = await Promise.any(dbs.map((s4) => s4.request));
          const usedTokens = previous.length * (1 - percentageInCurrent) + current.length;
          const remaining = tokens - usedTokens;
          async function sync() {
            const [individualIDs] = await Promise.all(dbs.map((s4) => s4.request));
            const allIDs = Array.from(new Set(individualIDs.flatMap((_4) => _4)).values());
            for (const db of dbs) {
              const [ids] = await db.request;
              if (ids.length >= tokens) {
                continue;
              }
              const diff = allIDs.filter((id) => !ids.includes(id));
              if (diff.length === 0) {
                continue;
              }
              await db.redis.sadd(currentKey, ...allIDs);
            }
          }
          const success = remaining > 0;
          const reset3 = (currentWindow + 1) * windowDuration;
          if (ctx.cache && !success) {
            ctx.cache.blockUntil(identifier, reset3);
          }
          return {
            success,
            limit: tokens,
            remaining,
            reset: reset3,
            pending: sync()
          };
        };
      }
    };
    var RegionRatelimit = class extends Ratelimit {
      /**
       * Create a new Ratelimit instance by providing a `@upstash/redis` instance and the algorithn of your choice.
       */
      constructor(config) {
        super({
          prefix: config.prefix,
          limiter: config.limiter,
          timeout: config.timeout,
          analytics: config.analytics,
          ctx: {
            redis: config.redis
          },
          ephemeralCache: config.ephemeralCache
        });
      }
      /**
       * Each requests inside a fixed time increases a counter.
       * Once the counter reaches a maxmimum allowed number, all further requests are
       * rejected.
       *
       * **Pro:**
       *
       * - Newer requests are not starved by old ones.
       * - Low storage cost.
       *
       * **Con:**
       *
       * A burst of requests near the boundary of a window can result in a very
       * high request rate because two windows will be filled with requests quickly.
       *
       * @param tokens - How many requests a user can make in each time window.
       * @param window - A fixed timeframe
       */
      static fixedWindow(tokens, window2) {
        const windowDuration = ms(window2);
        const script = `
    local key     = KEYS[1]
    local window  = ARGV[1]
    
    local r = redis.call("INCR", key)
    if r == 1 then 
    -- The first time this key is set, the value will be 1.
    -- So we only need the expire command once
    redis.call("PEXPIRE", key, window)
    end
    
    return r
    `;
        return async function(ctx, identifier) {
          const bucket = Math.floor(Date.now() / windowDuration);
          const key2 = [identifier, bucket].join(":");
          if (ctx.cache) {
            const { blocked, reset: reset22 } = ctx.cache.isBlocked(identifier);
            if (blocked) {
              return {
                success: false,
                limit: tokens,
                remaining: 0,
                reset: reset22,
                pending: Promise.resolve()
              };
            }
          }
          const usedTokensAfterUpdate = await ctx.redis.eval(script, [key2], [windowDuration]);
          const success = usedTokensAfterUpdate <= tokens;
          const reset3 = (bucket + 1) * windowDuration;
          if (ctx.cache && !success) {
            ctx.cache.blockUntil(identifier, reset3);
          }
          return {
            success,
            limit: tokens,
            remaining: tokens - usedTokensAfterUpdate,
            reset: reset3,
            pending: Promise.resolve()
          };
        };
      }
      /**
       * Combined approach of `slidingLogs` and `fixedWindow` with lower storage
       * costs than `slidingLogs` and improved boundary behavior by calcualting a
       * weighted score between two windows.
       *
       * **Pro:**
       *
       * Good performance allows this to scale to very high loads.
       *
       * **Con:**
       *
       * Nothing major.
       *
       * @param tokens - How many requests a user can make in each time window.
       * @param window - The duration in which the user can max X requests.
       */
      static slidingWindow(tokens, window2) {
        const script = `
      local currentKey  = KEYS[1]           -- identifier including prefixes
      local previousKey = KEYS[2]           -- key of the previous bucket
      local tokens      = tonumber(ARGV[1]) -- tokens per window
      local now         = ARGV[2]           -- current timestamp in milliseconds
      local window      = ARGV[3]           -- interval in milliseconds

      local requestsInCurrentWindow = redis.call("GET", currentKey)
      if requestsInCurrentWindow == false then
        requestsInCurrentWindow = -1
      end


      local requestsInPreviousWindow = redis.call("GET", previousKey)
      if requestsInPreviousWindow == false then
        requestsInPreviousWindow = 0
      end
      local percentageInCurrent = ( now % window) / window
      if requestsInPreviousWindow * ( 1 - percentageInCurrent ) + requestsInCurrentWindow >= tokens then
        return -1
      end

      local newValue = redis.call("INCR", currentKey)
      if newValue == 1 then 
        -- The first time this key is set, the value will be 1.
        -- So we only need the expire command once
        redis.call("PEXPIRE", currentKey, window * 2 + 1000) -- Enough time to overlap with a new window + 1 second
      end
      return tokens - newValue
      `;
        const windowSize = ms(window2);
        return async function(ctx, identifier) {
          const now2 = Date.now();
          const currentWindow = Math.floor(now2 / windowSize);
          const currentKey = [identifier, currentWindow].join(":");
          const previousWindow = currentWindow - windowSize;
          const previousKey = [identifier, previousWindow].join(":");
          if (ctx.cache) {
            const { blocked, reset: reset22 } = ctx.cache.isBlocked(identifier);
            if (blocked) {
              return {
                success: false,
                limit: tokens,
                remaining: 0,
                reset: reset22,
                pending: Promise.resolve()
              };
            }
          }
          const remaining = await ctx.redis.eval(script, [currentKey, previousKey], [tokens, now2, windowSize]);
          const success = remaining >= 0;
          const reset3 = (currentWindow + 1) * windowSize;
          if (ctx.cache && !success) {
            ctx.cache.blockUntil(identifier, reset3);
          }
          return {
            success,
            limit: tokens,
            remaining: Math.max(0, remaining),
            reset: reset3,
            pending: Promise.resolve()
          };
        };
      }
      /**
       * You have a bucket filled with `{maxTokens}` tokens that refills constantly
       * at `{refillRate}` per `{interval}`.
       * Every request will remove one token from the bucket and if there is no
       * token to take, the request is rejected.
       *
       * **Pro:**
       *
       * - Bursts of requests are smoothed out and you can process them at a constant
       * rate.
       * - Allows to set a higher initial burst limit by setting `maxTokens` higher
       * than `refillRate`
       */
      static tokenBucket(refillRate, interval, maxTokens) {
        const script = `
        local key         = KEYS[1]           -- identifier including prefixes
        local maxTokens   = tonumber(ARGV[1]) -- maximum number of tokens
        local interval    = tonumber(ARGV[2]) -- size of the window in milliseconds
        local refillRate  = tonumber(ARGV[3]) -- how many tokens are refilled after each interval
        local now         = tonumber(ARGV[4]) -- current timestamp in milliseconds
        local remaining   = 0
        
        local bucket = redis.call("HMGET", key, "updatedAt", "tokens")
        
        if bucket[1] == false then
          -- The bucket does not exist yet, so we create it and add a ttl.
          remaining = maxTokens - 1
          
          redis.call("HMSET", key, "updatedAt", now, "tokens", remaining)
          redis.call("PEXPIRE", key, interval)
  
          return {remaining, now + interval}
        end

        -- The bucket does exist
  
        local updatedAt = tonumber(bucket[1])
        local tokens = tonumber(bucket[2])
  
        if now >= updatedAt + interval then
          remaining = math.min(maxTokens, tokens + refillRate) - 1
          
          redis.call("HMSET", key, "updatedAt", now, "tokens", remaining)
          return {remaining, now + interval}
        end
  
        if tokens > 0 then
          remaining = tokens - 1
          redis.call("HMSET", key, "updatedAt", now, "tokens", remaining)
        end
  
        return {remaining, updatedAt + interval}
       `;
        const intervalDuration = ms(interval);
        return async function(ctx, identifier) {
          if (ctx.cache) {
            const { blocked, reset: reset22 } = ctx.cache.isBlocked(identifier);
            if (blocked) {
              return {
                success: false,
                limit: maxTokens,
                remaining: 0,
                reset: reset22,
                pending: Promise.resolve()
              };
            }
          }
          const now2 = Date.now();
          const key2 = [identifier, Math.floor(now2 / intervalDuration)].join(":");
          const [remaining, reset3] = await ctx.redis.eval(
            script,
            [key2],
            [maxTokens, intervalDuration, refillRate, now2]
          );
          const success = remaining > 0;
          if (ctx.cache && !success) {
            ctx.cache.blockUntil(identifier, reset3);
          }
          return {
            success,
            limit: maxTokens,
            remaining,
            reset: reset3,
            pending: Promise.resolve()
          };
        };
      }
      /**
       * cachedFixedWindow first uses the local cache to decide if a request may pass and then updates
       * it asynchronously.
       * This is experimental and not yet recommended for production use.
       *
       * @experimental
       *
       * Each requests inside a fixed time increases a counter.
       * Once the counter reaches a maxmimum allowed number, all further requests are
       * rejected.
       *
       * **Pro:**
       *
       * - Newer requests are not starved by old ones.
       * - Low storage cost.
       *
       * **Con:**
       *
       * A burst of requests near the boundary of a window can result in a very
       * high request rate because two windows will be filled with requests quickly.
       *
       * @param tokens - How many requests a user can make in each time window.
       * @param window - A fixed timeframe
       */
      static cachedFixedWindow(tokens, window2) {
        const windowDuration = ms(window2);
        const script = `
      local key     = KEYS[1]
      local window  = ARGV[1]
      
      local r = redis.call("INCR", key)
      if r == 1 then 
      -- The first time this key is set, the value will be 1.
      -- So we only need the expire command once
      redis.call("PEXPIRE", key, window)
      end
      
      return r
      `;
        return async function(ctx, identifier) {
          if (!ctx.cache) {
            throw new Error("This algorithm requires a cache");
          }
          const bucket = Math.floor(Date.now() / windowDuration);
          const key2 = [identifier, bucket].join(":");
          const reset3 = (bucket + 1) * windowDuration;
          const hit = typeof ctx.cache.get(key2) === "number";
          if (hit) {
            const cachedTokensAfterUpdate = ctx.cache.incr(key2);
            const success = cachedTokensAfterUpdate < tokens;
            const pending = success ? ctx.redis.eval(script, [key2], [windowDuration]).then((t2) => {
              ctx.cache.set(key2, t2);
            }) : Promise.resolve();
            return {
              success,
              limit: tokens,
              remaining: tokens - cachedTokensAfterUpdate,
              reset: reset3,
              pending
            };
          }
          const usedTokensAfterUpdate = await ctx.redis.eval(script, [key2], [windowDuration]);
          ctx.cache.set(key2, usedTokensAfterUpdate);
          const remaining = tokens - usedTokensAfterUpdate;
          return {
            success: remaining >= 0,
            limit: tokens,
            remaining,
            reset: reset3,
            pending: Promise.resolve()
          };
        };
      }
    };
  }
});

// .svelte-kit/output/server/chunks/index.js
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  return new Redirect(status, location);
}
function json(data2, init4) {
  const body = JSON.stringify(data2);
  const headers = new Headers(init4?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder2.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init4,
    headers
  });
}
function text(body, init4) {
  const headers = new Headers(init4?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder2.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init4,
      headers
    });
  }
  return new Response(body, {
    ...init4,
    headers
  });
}
var HttpError, Redirect, ActionFailure, encoder2;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} [data]
       */
      constructor(status, data2) {
        this.status = status;
        this.data = data2;
      }
    };
    encoder2 = new TextEncoder();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/providers/google.js
function Google(options3) {
  return {
    id: "google",
    name: "Google",
    type: "oidc",
    issuer: "https://accounts.google.com",
    style: {
      logo: "/google.svg",
      logoDark: "/google.svg",
      bgDark: "#fff",
      bg: "#fff",
      text: "#000",
      textDark: "#000"
    },
    options: options3
  };
}
var init_google = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/providers/google.js"() {
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/cookie.js
function defaultCookies(useSecureCookies) {
  const cookiePrefix = useSecureCookies ? "__Secure-" : "";
  return {
    // default cookie options
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    callbackUrl: {
      name: `${cookiePrefix}next-auth.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    csrfToken: {
      // Default to __Host- for CSRF token for additional protection if using useSecureCookies
      // NB: The `__Host-` prefix is stricter than the `__Secure-` prefix.
      name: `${useSecureCookies ? "__Host-" : ""}next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}next-auth.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    },
    state: {
      name: `${cookiePrefix}next-auth.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    },
    nonce: {
      name: `${cookiePrefix}next-auth.nonce`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    }
  };
}
var __classPrivateFieldSet, __classPrivateFieldGet, _SessionStore_instances, _SessionStore_chunks, _SessionStore_option, _SessionStore_logger, _SessionStore_chunk, _SessionStore_clean, ALLOWED_COOKIE_SIZE, ESTIMATED_EMPTY_COOKIE_SIZE, CHUNK_SIZE, SessionStore;
var init_cookie = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/cookie.js"() {
    __classPrivateFieldSet = function(receiver, state2, value, kind, f3) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f3)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f3 : !state2.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state2.set(receiver, value), value;
    };
    __classPrivateFieldGet = function(receiver, state2, kind, f3) {
      if (kind === "a" && !f3)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f3 : !state2.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state2.get(receiver);
    };
    ALLOWED_COOKIE_SIZE = 4096;
    ESTIMATED_EMPTY_COOKIE_SIZE = 163;
    CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
    SessionStore = class {
      constructor(option, req, logger2) {
        _SessionStore_instances.add(this);
        _SessionStore_chunks.set(this, {});
        _SessionStore_option.set(this, void 0);
        _SessionStore_logger.set(this, void 0);
        __classPrivateFieldSet(this, _SessionStore_logger, logger2, "f");
        __classPrivateFieldSet(this, _SessionStore_option, option, "f");
        const { cookies } = req;
        const { name: cookieName } = option;
        if (typeof cookies?.getAll === "function") {
          for (const { name, value } of cookies.getAll()) {
            if (name.startsWith(cookieName)) {
              __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
            }
          }
        } else if (cookies instanceof Map) {
          for (const name of cookies.keys()) {
            if (name.startsWith(cookieName))
              __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = cookies.get(name);
          }
        } else {
          for (const name in cookies) {
            if (name.startsWith(cookieName))
              __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = cookies[name];
          }
        }
      }
      /**
       * The JWT Session or database Session ID
       * constructed from the cookie chunks.
       */
      get value() {
        const sortedKeys = Object.keys(__classPrivateFieldGet(this, _SessionStore_chunks, "f")).sort((a3, b3) => {
          const aSuffix = parseInt(a3.split(".")[1] || "0");
          const bSuffix = parseInt(b3.split(".")[1] || "0");
          return aSuffix - bSuffix;
        });
        return sortedKeys.map((key2) => __classPrivateFieldGet(this, _SessionStore_chunks, "f")[key2]).join("");
      }
      /**
       * Given a cookie value, return new cookies, chunked, to fit the allowed cookie size.
       * If the cookie has changed from chunked to unchunked or vice versa,
       * it deletes the old cookies as well.
       */
      chunk(value, options3) {
        const cookies = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this);
        const chunked = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_chunk).call(this, {
          name: __classPrivateFieldGet(this, _SessionStore_option, "f").name,
          value,
          options: { ...__classPrivateFieldGet(this, _SessionStore_option, "f").options, ...options3 }
        });
        for (const chunk of chunked) {
          cookies[chunk.name] = chunk;
        }
        return Object.values(cookies);
      }
      /** Returns a list of cookies that should be cleaned. */
      clean() {
        return Object.values(__classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this));
      }
    };
    _SessionStore_chunks = /* @__PURE__ */ new WeakMap(), _SessionStore_option = /* @__PURE__ */ new WeakMap(), _SessionStore_logger = /* @__PURE__ */ new WeakMap(), _SessionStore_instances = /* @__PURE__ */ new WeakSet(), _SessionStore_chunk = function _SessionStore_chunk2(cookie) {
      const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
      if (chunkCount === 1) {
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[cookie.name] = cookie.value;
        return [cookie];
      }
      const cookies = [];
      for (let i3 = 0; i3 < chunkCount; i3++) {
        const name = `${cookie.name}.${i3}`;
        const value = cookie.value.substr(i3 * CHUNK_SIZE, CHUNK_SIZE);
        cookies.push({ ...cookie, name, value });
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
      }
      __classPrivateFieldGet(this, _SessionStore_logger, "f").debug("CHUNKING_SESSION_COOKIE", {
        message: `Session cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunks: cookies.map((c3) => c3.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
      });
      return cookies;
    }, _SessionStore_clean = function _SessionStore_clean2() {
      const cleanedChunks = {};
      for (const name in __classPrivateFieldGet(this, _SessionStore_chunks, "f")) {
        delete __classPrivateFieldGet(this, _SessionStore_chunks, "f")?.[name];
        cleanedChunks[name] = {
          name,
          value: "",
          options: { ...__classPrivateFieldGet(this, _SessionStore_option, "f").options, maxAge: 0 }
        };
      }
      return cleanedChunks;
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/errors.js
var AuthError, AdapterError, AuthorizedCallbackError, CallbackRouteError, ErrorPageLoop, EventError, InvalidCallbackUrl, InvalidEndpoints, InvalidCheck, JWTSessionError, MissingAdapter, MissingAdapterMethods, MissingAuthorize, MissingSecret, OAuthAccountNotLinked, OAuthCallbackError, OAuthProfileParseError, SessionTokenError, SignInError, SignOutError, UnknownAction, UnsupportedStrategy, UntrustedHost, Verification;
var init_errors = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/errors.js"() {
    AuthError = class _AuthError extends Error {
      constructor(message2, cause) {
        if (message2 instanceof Error) {
          super(void 0, {
            cause: { err: message2, ...message2.cause, ...cause }
          });
        } else if (typeof message2 === "string") {
          if (cause instanceof Error) {
            cause = { err: cause, ...cause.cause };
          }
          super(message2, cause);
        } else {
          super(void 0, message2);
        }
        Error.captureStackTrace?.(this, this.constructor);
        this.name = message2 instanceof _AuthError ? message2.name : this.constructor.name;
      }
    };
    AdapterError = class extends AuthError {
    };
    AuthorizedCallbackError = class extends AuthError {
    };
    CallbackRouteError = class extends AuthError {
    };
    ErrorPageLoop = class extends AuthError {
    };
    EventError = class extends AuthError {
    };
    InvalidCallbackUrl = class extends AuthError {
    };
    InvalidEndpoints = class extends AuthError {
    };
    InvalidCheck = class extends AuthError {
    };
    JWTSessionError = class extends AuthError {
    };
    MissingAdapter = class extends AuthError {
    };
    MissingAdapterMethods = class extends AuthError {
    };
    MissingAuthorize = class extends AuthError {
    };
    MissingSecret = class extends AuthError {
    };
    OAuthAccountNotLinked = class extends AuthError {
    };
    OAuthCallbackError = class extends AuthError {
    };
    OAuthProfileParseError = class extends AuthError {
    };
    SessionTokenError = class extends AuthError {
    };
    SignInError = class extends AuthError {
    };
    SignOutError = class extends AuthError {
    };
    UnknownAction = class extends AuthError {
    };
    UnsupportedStrategy = class extends AuthError {
    };
    UntrustedHost = class extends AuthError {
    };
    Verification = class extends AuthError {
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/assert.js
function isValidHttpUrl(url, baseUrl) {
  try {
    return /^https?:/.test(new URL(url, url.startsWith("/") ? baseUrl : void 0).protocol);
  } catch {
    return false;
  }
}
function assertConfig(request, options3) {
  const { url } = request;
  const warnings = [];
  if (!warned && options3.debug)
    warnings.push("debug-enabled");
  if (!options3.trustHost) {
    return new UntrustedHost(`Host must be trusted. URL was: ${request.url}`);
  }
  if (!options3.secret) {
    return new MissingSecret("Please define a `secret`.");
  }
  const callbackUrlParam = request.query?.callbackUrl;
  if (callbackUrlParam && !isValidHttpUrl(callbackUrlParam, url.origin)) {
    return new InvalidCallbackUrl(`Invalid callback URL. Received: ${callbackUrlParam}`);
  }
  const { callbackUrl: defaultCallbackUrl } = defaultCookies(options3.useSecureCookies ?? url.protocol === "https:");
  const callbackUrlCookie = request.cookies?.[options3.cookies?.callbackUrl?.name ?? defaultCallbackUrl.name];
  if (callbackUrlCookie && !isValidHttpUrl(callbackUrlCookie, url.origin)) {
    return new InvalidCallbackUrl(`Invalid callback URL. Received: ${callbackUrlCookie}`);
  }
  for (const p3 of options3.providers) {
    const provider = typeof p3 === "function" ? p3() : p3;
    if ((provider.type === "oauth" || provider.type === "oidc") && !(provider.issuer ?? provider.options?.issuer)) {
      const { authorization: a3, token: t2, userinfo: u3 } = provider;
      let key2;
      if (typeof a3 !== "string" && !a3?.url)
        key2 = "authorization";
      else if (typeof t2 !== "string" && !t2?.url)
        key2 = "token";
      else if (typeof u3 !== "string" && !u3?.url)
        key2 = "userinfo";
      if (key2) {
        return new InvalidEndpoints(`Provider "${provider.id}" is missing both \`issuer\` and \`${key2}\` endpoint config. At least one of them is required.`);
      }
    }
    if (provider.type === "credentials")
      hasCredentials = true;
    else if (provider.type === "email")
      hasEmail = true;
  }
  if (hasCredentials) {
    const dbStrategy = options3.session?.strategy === "database";
    const onlyCredentials = !options3.providers.some((p3) => (typeof p3 === "function" ? p3() : p3).type !== "credentials");
    if (dbStrategy && onlyCredentials) {
      return new UnsupportedStrategy("Signin in with credentials only supported if JWT strategy is enabled");
    }
    const credentialsNoAuthorize = options3.providers.some((p3) => {
      const provider = typeof p3 === "function" ? p3() : p3;
      return provider.type === "credentials" && !provider.authorize;
    });
    if (credentialsNoAuthorize) {
      return new MissingAuthorize("Must define an authorize() handler to use credentials authentication provider");
    }
  }
  const { adapter, session: session2 } = options3;
  if (hasEmail || session2?.strategy === "database" || !session2?.strategy && adapter) {
    let methods;
    if (hasEmail) {
      if (!adapter)
        return new MissingAdapter("Email login requires an adapter.");
      methods = emailMethods;
    } else {
      if (!adapter)
        return new MissingAdapter("Database session requires an adapter.");
      methods = sessionMethods;
    }
    const missing = methods.filter((m3) => !adapter[m3]);
    if (missing.length) {
      return new MissingAdapterMethods(`Required adapter methods were missing: ${missing.join(", ")}`);
    }
  }
  if (!warned)
    warned = true;
  return warnings;
}
var warned, hasCredentials, hasEmail, emailMethods, sessionMethods;
var init_assert = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/assert.js"() {
    init_cookie();
    init_errors();
    warned = false;
    hasCredentials = false;
    hasEmail = false;
    emailMethods = [
      "createVerificationToken",
      "useVerificationToken",
      "getUserByEmail"
    ];
    sessionMethods = [
      "createUser",
      "getUser",
      "getUserByEmail",
      "getUserByAccount",
      "updateUser",
      "linkAccount",
      "createSession",
      "getSessionAndUser",
      "updateSession",
      "deleteSession"
    ];
  }
});

// node_modules/.pnpm/@panva+hkdf@1.1.1/node_modules/@panva/hkdf/dist/web/runtime/hkdf.js
var getGlobal, hkdf_default;
var init_hkdf = __esm({
  "node_modules/.pnpm/@panva+hkdf@1.1.1/node_modules/@panva/hkdf/dist/web/runtime/hkdf.js"() {
    getGlobal = () => {
      if (typeof globalThis !== "undefined")
        return globalThis;
      if (typeof self !== "undefined")
        return self;
      if (typeof window !== "undefined")
        return window;
      throw new Error("unable to locate global object");
    };
    hkdf_default = async (digest2, ikm, salt, info, keylen) => {
      const { crypto: { subtle } } = getGlobal();
      return new Uint8Array(await subtle.deriveBits({
        name: "HKDF",
        hash: `SHA-${digest2.substr(3)}`,
        salt,
        info
      }, await subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]), keylen << 3));
    };
  }
});

// node_modules/.pnpm/@panva+hkdf@1.1.1/node_modules/@panva/hkdf/dist/web/index.js
function normalizeDigest(digest2) {
  switch (digest2) {
    case "sha256":
    case "sha384":
    case "sha512":
    case "sha1":
      return digest2;
    default:
      throw new TypeError('unsupported "digest" value');
  }
}
function normalizeUint8Array(input, label) {
  if (typeof input === "string")
    return new TextEncoder().encode(input);
  if (!(input instanceof Uint8Array))
    throw new TypeError(`"${label}"" must be an instance of Uint8Array or a string`);
  return input;
}
function normalizeIkm(input) {
  const ikm = normalizeUint8Array(input, "ikm");
  if (!ikm.byteLength)
    throw new TypeError(`"ikm" must be at least one byte in length`);
  return ikm;
}
function normalizeInfo(input) {
  const info = normalizeUint8Array(input, "info");
  if (info.byteLength > 1024) {
    throw TypeError('"info" must not contain more than 1024 bytes');
  }
  return info;
}
function normalizeKeylen(input, digest2) {
  if (typeof input !== "number" || !Number.isInteger(input) || input < 1) {
    throw new TypeError('"keylen" must be a positive integer');
  }
  const hashlen = parseInt(digest2.substr(3), 10) >> 3 || 20;
  if (input > 255 * hashlen) {
    throw new TypeError('"keylen" too large');
  }
  return input;
}
async function hkdf(digest2, ikm, salt, info, keylen) {
  return hkdf_default(normalizeDigest(digest2), normalizeIkm(ikm), normalizeUint8Array(salt, "salt"), normalizeInfo(info), normalizeKeylen(keylen, digest2));
}
var init_web = __esm({
  "node_modules/.pnpm/@panva+hkdf@1.1.1/node_modules/@panva/hkdf/dist/web/index.js"() {
    init_hkdf();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default, isCryptoKey;
var init_webcrypto = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/webcrypto.js"() {
    webcrypto_default = crypto;
    isCryptoKey = (key2) => key2 instanceof CryptoKey;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/digest.js
var digest, digest_default;
var init_digest = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/digest.js"() {
    init_webcrypto();
    digest = async (algorithm, data2) => {
      const subtleDigest = `SHA-${algorithm.slice(-3)}`;
      return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data2));
    };
    digest_default = digest;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/buffer_utils.js
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf2 = new Uint8Array(size);
  let i3 = 0;
  buffers.forEach((buffer) => {
    buf2.set(buffer, i3);
    i3 += buffer.length;
  });
  return buf2;
}
function p2s(alg, p2sInput) {
  return concat(encoder3.encode(alg), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf2, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf2.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf2 = new Uint8Array(8);
  writeUInt32BE(buf2, high, 0);
  writeUInt32BE(buf2, low, 4);
  return buf2;
}
function uint32be(value) {
  const buf2 = new Uint8Array(4);
  writeUInt32BE(buf2, value);
  return buf2;
}
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf2 = new Uint8Array(4 + secret.length + value.length);
    buf2.set(uint32be(iter + 1));
    buf2.set(secret, 4);
    buf2.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf2), iter * 32);
  }
  return res.slice(0, bits >> 3);
}
var encoder3, decoder2, MAX_INT32;
var init_buffer_utils = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/buffer_utils.js"() {
    init_digest();
    encoder3 = new TextEncoder();
    decoder2 = new TextDecoder();
    MAX_INT32 = 2 ** 32;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64, encode2, decodeBase64, decode2;
var init_base64url2 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/base64url.js"() {
    init_buffer_utils();
    encodeBase64 = (input) => {
      let unencoded = input;
      if (typeof unencoded === "string") {
        unencoded = encoder3.encode(unencoded);
      }
      const CHUNK_SIZE3 = 32768;
      const arr = [];
      for (let i3 = 0; i3 < unencoded.length; i3 += CHUNK_SIZE3) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i3, i3 + CHUNK_SIZE3)));
      }
      return btoa(arr.join(""));
    };
    encode2 = (input) => {
      return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
    decodeBase64 = (encoded) => {
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let i3 = 0; i3 < binary.length; i3++) {
        bytes[i3] = binary.charCodeAt(i3);
      }
      return bytes;
    };
    decode2 = (input) => {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = decoder2.decode(encoded);
      }
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return decodeBase64(encoded);
      } catch (_a) {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/errors.js
var JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWTInvalid;
var init_errors2 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/errors.js"() {
    JOSEError = class extends Error {
      static get code() {
        return "ERR_JOSE_GENERIC";
      }
      constructor(message2) {
        var _a;
        super(message2);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, this.constructor);
      }
    };
    JWTClaimValidationFailed = class extends JOSEError {
      static get code() {
        return "ERR_JWT_CLAIM_VALIDATION_FAILED";
      }
      constructor(message2, claim = "unspecified", reason = "unspecified") {
        super(message2);
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
      }
    };
    JWTExpired = class extends JOSEError {
      static get code() {
        return "ERR_JWT_EXPIRED";
      }
      constructor(message2, claim = "unspecified", reason = "unspecified") {
        super(message2);
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
      }
    };
    JOSEAlgNotAllowed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
      static get code() {
        return "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSENotSupported = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
      static get code() {
        return "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JWEDecryptionFailed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
        this.message = "decryption operation failed";
      }
      static get code() {
        return "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
      static get code() {
        return "ERR_JWE_INVALID";
      }
    };
    JWTInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
      static get code() {
        return "ERR_JWT_INVALID";
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/random.js
var random_default;
var init_random = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/random.js"() {
    init_webcrypto();
    random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/iv.js
function bitLength(alg) {
  switch (alg) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var iv_default;
var init_iv = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/iv.js"() {
    init_errors2();
    init_random();
    iv_default = (alg) => random_default(new Uint8Array(bitLength(alg) >> 3));
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/check_iv_length.js
var checkIvLength, check_iv_length_default;
var init_check_iv_length = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/check_iv_length.js"() {
    init_errors2();
    init_iv();
    checkIvLength = (enc, iv) => {
      if (iv.length << 3 !== bitLength(enc)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
      }
    };
    check_iv_length_default = checkIvLength;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/check_cek_length.js
var checkCekLength, check_cek_length_default;
var init_check_cek_length = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
    init_errors2();
    checkCekLength = (cek, expected) => {
      const actual = cek.byteLength << 3;
      if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
      }
    };
    check_cek_length_default = checkCekLength;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/timing_safe_equal.js
var timingSafeEqual, timing_safe_equal_default;
var init_timing_safe_equal = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    timingSafeEqual = (a3, b3) => {
      if (!(a3 instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
      }
      if (!(b3 instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
      }
      if (a3.length !== b3.length) {
        throw new TypeError("Input buffers must have the same length");
      }
      const len = a3.length;
      let out = 0;
      let i3 = -1;
      while (++i3 < len) {
        out |= a3[i3] ^ b3[i3];
      }
      return out === 0;
    };
    timing_safe_equal_default = timingSafeEqual;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash2) {
  return parseInt(hash2.name.slice(4), 10);
}
function checkUsage(key2, usages) {
  if (usages.length && !usages.some((expected) => key2.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkEncCryptoKey(key2, alg, ...usages) {
  switch (alg) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key2.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key2.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key2.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key2.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key2.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key2.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key2.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg.slice(9), 10) || 1;
      const actual = getHashLength(key2.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key2, usages);
}
var init_crypto_key = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/crypto_key.js"() {
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor && actual.constructor.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
function withAlg(alg, actual, ...types2) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
}
var invalid_key_input_default;
var init_invalid_key_input = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
    invalid_key_input_default = (actual, ...types2) => {
      return message("Key must be ", actual, ...types2);
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default, types;
var init_is_key_like = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/is_key_like.js"() {
    init_webcrypto();
    is_key_like_default = (key2) => {
      return isCryptoKey(key2);
    };
    types = ["CryptoKey"];
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/decrypt.js
async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag, expectedTag);
  } catch (_a) {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch (_b) {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag)));
  } catch (_a) {
    throw new JWEDecryptionFailed();
  }
}
var decrypt, decrypt_default;
var init_decrypt = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/decrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_timing_safe_equal();
    init_errors2();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    decrypt = async (enc, cek, ciphertext, iv, tag, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    decrypt_default = decrypt;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/zlib.js
var inflate, deflate;
var init_zlib = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/zlib.js"() {
    init_errors2();
    inflate = async () => {
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');
    };
    deflate = async () => {
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint, is_disjoint_default;
var init_is_disjoint = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/is_disjoint.js"() {
    isDisjoint = (...headers) => {
      const sources = headers.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    };
    is_disjoint_default = isDisjoint;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}
var init_is_object = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/is_object.js"() {
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/bogus.js
var bogusWebCrypto, bogus_default;
var init_bogus = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/bogus.js"() {
    bogusWebCrypto = [
      { hash: "SHA-256", name: "HMAC" },
      true,
      ["sign"]
    ];
    bogus_default = bogusWebCrypto;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/aeskw.js
function checkKeySize(key2, alg) {
  if (key2.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg}`);
  }
}
function getCryptoKey(key2, alg, usage) {
  if (isCryptoKey(key2)) {
    checkEncCryptoKey(key2, alg, usage);
    return key2;
  }
  if (key2 instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key2, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
}
var wrap, unwrap;
var init_aeskw = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/aeskw.js"() {
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    wrap = async (alg, key2, cek) => {
      const cryptoKey = await getCryptoKey(key2, alg, "wrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
    };
    unwrap = async (alg, key2, encryptedKey) => {
      const cryptoKey = await getCryptoKey(key2, alg, "unwrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/ecdhes.js
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder3.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
async function generateEpk(key2) {
  if (!isCryptoKey(key2)) {
    throw new TypeError(invalid_key_input_default(key2, ...types));
  }
  return webcrypto_default.subtle.generateKey(key2.algorithm, true, ["deriveBits"]);
}
function ecdhAllowed(key2) {
  if (!isCryptoKey(key2)) {
    throw new TypeError(invalid_key_input_default(key2, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key2.algorithm.namedCurve) || key2.algorithm.name === "X25519" || key2.algorithm.name === "X448";
}
var init_ecdhes = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/ecdhes.js"() {
    init_buffer_utils();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/check_p2s.js
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}
var init_check_p2s = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/check_p2s.js"() {
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/pbes2kw.js
function getCryptoKey2(key2, alg) {
  if (key2 instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key2, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key2)) {
    checkEncCryptoKey(key2, alg, "deriveBits", "deriveKey");
    return key2;
  }
  throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
}
async function deriveKey2(p2s2, alg, p2c, key2) {
  checkP2s(p2s2);
  const salt = p2s(alg, p2s2);
  const keylen = parseInt(alg.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key2, alg);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var encrypt, decrypt2;
var init_pbes2kw = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
    init_random();
    init_buffer_utils();
    init_base64url2();
    init_aeskw();
    init_check_p2s();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    encrypt = async (alg, key2, cek, p2c = 2048, p2s2 = random_default(new Uint8Array(16))) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key2);
      const encryptedKey = await wrap(alg.slice(-6), derived, cek);
      return { encryptedKey, p2c, p2s: encode2(p2s2) };
    };
    decrypt2 = async (alg, key2, encryptedKey, p2c, p2s2) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key2);
      return unwrap(alg.slice(-6), derived, encryptedKey);
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/subtle_rsaes.js
function subtleRsaEs(alg) {
  switch (alg) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_rsaes = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default;
var init_check_key_length = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/check_key_length.js"() {
    check_key_length_default = (alg, key2) => {
      if (alg.startsWith("RS") || alg.startsWith("PS")) {
        const { modulusLength } = key2.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
          throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/rsaes.js
var encrypt2, decrypt3;
var init_rsaes = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/rsaes.js"() {
    init_subtle_rsaes();
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_check_key_length();
    init_invalid_key_input();
    init_is_key_like();
    encrypt2 = async (alg, key2, cek) => {
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types));
      }
      checkEncCryptoKey(key2, alg, "encrypt", "wrapKey");
      check_key_length_default(alg, key2);
      if (key2.usages.includes("encrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.encrypt(subtleRsaEs(alg), key2, cek));
      }
      if (key2.usages.includes("wrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, key2, subtleRsaEs(alg)));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
    };
    decrypt3 = async (alg, key2, encryptedKey) => {
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types));
      }
      checkEncCryptoKey(key2, alg, "decrypt", "unwrapKey");
      check_key_length_default(alg, key2);
      if (key2.usages.includes("decrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg), key2, encryptedKey));
      }
      if (key2.usages.includes("unwrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key2, subtleRsaEs(alg), ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/cek.js
function bitLength2(alg) {
  switch (alg) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var cek_default;
var init_cek = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/cek.js"() {
    init_errors2();
    init_random();
    cek_default = (alg) => random_default(new Uint8Array(bitLength2(alg) >> 3));
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/format_pem.js
var init_format_pem = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/format_pem.js"() {
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/asn1.js
var init_asn1 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/asn1.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url2();
    init_format_pem();
    init_errors2();
    init_is_key_like();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "oct": {
      switch (jwk.alg) {
        case "HS256":
        case "HS384":
        case "HS512":
          algorithm = { name: "HMAC", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = ["sign", "verify"];
          break;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          throw new JOSENotSupported(`${jwk.alg} keys cannot be imported as CryptoKey instances`);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
          algorithm = { name: "AES-GCM" };
          keyUsages = ["encrypt", "decrypt"];
          break;
        case "A128KW":
        case "A192KW":
        case "A256KW":
          algorithm = { name: "AES-KW" };
          keyUsages = ["wrapKey", "unwrapKey"];
          break;
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
          algorithm = { name: "PBKDF2" };
          keyUsages = ["deriveBits"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse, jwk_to_key_default;
var init_jwk_to_key = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
    init_webcrypto();
    init_errors2();
    init_base64url2();
    parse = async (jwk) => {
      var _a, _b;
      if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
      }
      const { algorithm, keyUsages } = subtleMapping(jwk);
      const rest = [
        algorithm,
        (_a = jwk.ext) !== null && _a !== void 0 ? _a : false,
        (_b = jwk.key_ops) !== null && _b !== void 0 ? _b : keyUsages
      ];
      if (algorithm.name === "PBKDF2") {
        return webcrypto_default.subtle.importKey("raw", decode2(jwk.k), ...rest);
      }
      const keyData = { ...jwk };
      delete keyData.alg;
      delete keyData.use;
      return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
    };
    jwk_to_key_default = parse;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/import.js
async function importJWK(jwk, alg, octAsKeyObject) {
  var _a;
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg || (alg = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : octAsKeyObject = jwk.ext !== true;
      if (octAsKeyObject) {
        return jwk_to_key_default({ ...jwk, alg, ext: (_a = jwk.ext) !== null && _a !== void 0 ? _a : false });
      }
      return decode2(jwk.k);
    case "RSA":
      if (jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}
var init_import = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/import.js"() {
    init_base64url2();
    init_asn1();
    init_jwk_to_key();
    init_errors2();
    init_is_object();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/check_key_type.js
var symmetricTypeCheck, asymmetricTypeCheck, checkKeyType, check_key_type_default;
var init_check_key_type = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/check_key_type.js"() {
    init_invalid_key_input();
    init_is_key_like();
    symmetricTypeCheck = (alg, key2) => {
      if (key2 instanceof Uint8Array)
        return;
      if (!is_key_like_default(key2)) {
        throw new TypeError(withAlg(alg, key2, ...types, "Uint8Array"));
      }
      if (key2.type !== "secret") {
        throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
      }
    };
    asymmetricTypeCheck = (alg, key2, usage) => {
      if (!is_key_like_default(key2)) {
        throw new TypeError(withAlg(alg, key2, ...types));
      }
      if (key2.type === "secret") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key2.type === "public") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key2.type === "public") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key2.algorithm && usage === "verify" && key2.type === "private") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key2.algorithm && usage === "encrypt" && key2.type === "private") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    };
    checkKeyType = (alg, key2, usage) => {
      const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
      if (symmetric) {
        symmetricTypeCheck(alg, key2);
      } else {
        asymmetricTypeCheck(alg, key2, usage);
      }
    };
    check_key_type_default = checkKeyType;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/encrypt.js
async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["encrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const ciphertext = new Uint8Array(await webcrypto_default.subtle.encrypt({
    iv,
    name: "AES-CBC"
  }, encKey, plaintext));
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const tag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  return { ciphertext, tag };
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "encrypt");
    encKey = cek;
  }
  const encrypted = new Uint8Array(await webcrypto_default.subtle.encrypt({
    additionalData: aad,
    iv,
    name: "AES-GCM",
    tagLength: 128
  }, encKey, plaintext));
  const tag = encrypted.slice(-16);
  const ciphertext = encrypted.slice(0, -16);
  return { ciphertext, tag };
}
var encrypt3, encrypt_default;
var init_encrypt = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/encrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_errors2();
    init_is_key_like();
    encrypt3 = async (enc, plaintext, cek, iv, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcEncrypt(enc, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmEncrypt(enc, plaintext, cek, iv, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    encrypt_default = encrypt3;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/aesgcmkw.js
async function wrap2(alg, key2, cek, iv) {
  const jweAlgorithm = alg.slice(0, 7);
  iv || (iv = iv_default(jweAlgorithm));
  const { ciphertext: encryptedKey, tag } = await encrypt_default(jweAlgorithm, cek, key2, iv, new Uint8Array(0));
  return { encryptedKey, iv: encode2(iv), tag: encode2(tag) };
}
async function unwrap2(alg, key2, encryptedKey, iv, tag) {
  const jweAlgorithm = alg.slice(0, 7);
  return decrypt_default(jweAlgorithm, key2, encryptedKey, iv, tag, new Uint8Array(0));
}
var init_aesgcmkw = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
    init_encrypt();
    init_decrypt();
    init_iv();
    init_base64url2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/decrypt_key_management.js
async function decryptKeyManagement(alg, key2, encryptedKey, joseHeader, options3) {
  check_key_type_default(alg, key2, "decrypt");
  switch (alg) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key2;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key2))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        partyUInfo = decode2(joseHeader.apu);
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        partyVInfo = decode2(joseHeader.apv);
      }
      const sharedSecret = await deriveKey(epk, key2, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg, key2, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = (options3 === null || options3 === void 0 ? void 0 : options3.maxPBES2Count) || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      return decrypt2(alg, key2, encryptedKey, joseHeader.p2c, decode2(joseHeader.p2s));
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg, key2, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      const iv = decode2(joseHeader.iv);
      const tag = decode2(joseHeader.tag);
      return unwrap2(alg, key2, encryptedKey, iv, tag);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
var decrypt_key_management_default;
var init_decrypt_key_management = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url2();
    init_errors2();
    init_cek();
    init_import();
    init_check_key_type();
    init_is_object();
    init_aesgcmkw();
    decrypt_key_management_default = decryptKeyManagement;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default;
var init_validate_crit = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/validate_crit.js"() {
    init_errors2();
    validate_crit_default = validateCrit;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms, validate_algorithms_default;
var init_validate_algorithms = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
    validateAlgorithms = (option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s4) => typeof s4 !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    validate_algorithms_default = validateAlgorithms;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key2, options3) {
  var _a;
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector missing or incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag missing or incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode2(jwe.protected);
      parsedProt = JSON.parse(decoder2.decode(protectedHeader2));
    } catch (_b) {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options3 === null || options3 === void 0 ? void 0 : options3.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    if (!parsedProt || !parsedProt.zip) {
      throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
    }
    if (joseHeader.zip !== "DEF") {
      throw new JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
    }
  }
  const { alg, enc } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc !== "string" || !enc) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options3 && validate_algorithms_default("keyManagementAlgorithms", options3.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options3 && validate_algorithms_default("contentEncryptionAlgorithms", options3.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    encryptedKey = decode2(jwe.encrypted_key);
  }
  let resolvedKey = false;
  if (typeof key2 === "function") {
    key2 = await key2(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg, key2, encryptedKey, joseHeader, options3);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc);
  }
  const iv = decode2(jwe.iv);
  const tag = decode2(jwe.tag);
  const protectedHeader = encoder3.encode((_a = jwe.protected) !== null && _a !== void 0 ? _a : "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder3.encode("."), encoder3.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let plaintext = await decrypt_default(enc, cek, decode2(jwe.ciphertext), iv, tag, additionalData);
  if (joseHeader.zip === "DEF") {
    plaintext = await ((options3 === null || options3 === void 0 ? void 0 : options3.inflateRaw) || inflate)(plaintext);
  }
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    result.additionalAuthenticatedData = decode2(jwe.aad);
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key: key2 };
  }
  return result;
}
var init_decrypt2 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
    init_base64url2();
    init_decrypt();
    init_zlib();
    init_errors2();
    init_is_disjoint();
    init_is_object();
    init_decrypt_key_management();
    init_buffer_utils();
    init_cek();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key2, options3) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder2.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader || void 0,
    tag: tag || void 0,
    encrypted_key: encryptedKey || void 0
  }, key2, options3);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key2 === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt3 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
    init_decrypt2();
    init_errors2();
    init_buffer_utils();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/general/decrypt.js
var init_decrypt4 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/general/decrypt.js"() {
    init_decrypt2();
    init_errors2();
    init_is_object();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/key_to_jwk.js
var keyToJWK, key_to_jwk_default;
var init_key_to_jwk = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url2();
    init_is_key_like();
    keyToJWK = async (key2) => {
      if (key2 instanceof Uint8Array) {
        return {
          kty: "oct",
          k: encode2(key2)
        };
      }
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
      }
      if (!key2.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      }
      const { ext, key_ops, alg, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key2);
      return jwk;
    };
    key_to_jwk_default = keyToJWK;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/export.js
async function exportJWK(key2) {
  return key_to_jwk_default(key2);
}
var init_export = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/export.js"() {
    init_asn1();
    init_asn1();
    init_key_to_jwk();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/encrypt_key_management.js
async function encryptKeyManagement(alg, enc, key2, providedCek, providedParameters = {}) {
  let encryptedKey;
  let parameters;
  let cek;
  check_key_type_default(alg, key2, "encrypt");
  switch (alg) {
    case "dir": {
      cek = key2;
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(key2)) {
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      }
      const { apu, apv } = providedParameters;
      let { epk: ephemeralKey } = providedParameters;
      ephemeralKey || (ephemeralKey = (await generateEpk(key2)).privateKey);
      const { x: x2, y: y2, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey(key2, ephemeralKey, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? bitLength2(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
      parameters = { epk: { x: x2, crv, kty } };
      if (kty === "EC")
        parameters.epk.y = y2;
      if (apu)
        parameters.apu = encode2(apu);
      if (apv)
        parameters.apv = encode2(apv);
      if (alg === "ECDH-ES") {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || cek_default(enc);
      const kwAlg = alg.slice(-6);
      encryptedKey = await wrap(kwAlg, sharedSecret, cek);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await encrypt2(alg, key2, cek);
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      cek = providedCek || cek_default(enc);
      const { p2c, p2s: p2s2 } = providedParameters;
      ({ encryptedKey, ...parameters } = await encrypt(alg, key2, cek, p2c, p2s2));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await wrap(alg, key2, cek);
      break;
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      cek = providedCek || cek_default(enc);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap2(alg, key2, cek, iv));
      break;
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
  return { cek, encryptedKey, parameters };
}
var encrypt_key_management_default;
var init_encrypt_key_management = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url2();
    init_cek();
    init_errors2();
    init_export();
    init_check_key_type();
    init_aesgcmkw();
    encrypt_key_management_default = encryptKeyManagement;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var unprotected, FlattenedEncrypt;
var init_encrypt2 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
    init_base64url2();
    init_encrypt();
    init_zlib();
    init_iv();
    init_encrypt_key_management();
    init_errors2();
    init_is_disjoint();
    init_buffer_utils();
    init_validate_crit();
    unprotected = Symbol();
    FlattenedEncrypt = class {
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key2, options3) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options3 === null || options3 === void 0 ? void 0 : options3.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          if (!this._protectedHeader || !this._protectedHeader.zip) {
            throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
          }
          if (joseHeader.zip !== "DEF") {
            throw new JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
          }
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (alg === "dir") {
          if (this._cek) {
            throw new TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
          }
        } else if (alg === "ECDH-ES") {
          if (this._cek) {
            throw new TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
          }
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await encrypt_key_management_default(alg, enc, key2, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options3 && unprotected in options3) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else {
              if (!this._protectedHeader) {
                this.setProtectedHeader(parameters);
              } else {
                this._protectedHeader = { ...this._protectedHeader, ...parameters };
              }
            }
          }
        }
        this._iv || (this._iv = iv_default(enc));
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = encoder3.encode(encode2(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder3.encode("");
        }
        if (this._aad) {
          aadMember = encode2(this._aad);
          additionalData = concat(protectedHeader, encoder3.encode("."), encoder3.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        let ciphertext;
        let tag;
        if (joseHeader.zip === "DEF") {
          const deflated = await ((options3 === null || options3 === void 0 ? void 0 : options3.deflateRaw) || deflate)(this._plaintext);
          ({ ciphertext, tag } = await encrypt_default(enc, deflated, cek, this._iv, additionalData));
        } else {
          ;
          ({ ciphertext, tag } = await encrypt_default(enc, this._plaintext, cek, this._iv, additionalData));
        }
        const jwe = {
          ciphertext: encode2(ciphertext),
          iv: encode2(this._iv),
          tag: encode2(tag)
        };
        if (encryptedKey) {
          jwe.encrypted_key = encode2(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = decoder2.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/general/encrypt.js
var init_encrypt3 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/general/encrypt.js"() {
    init_encrypt2();
    init_errors2();
    init_cek();
    init_is_disjoint();
    init_encrypt_key_management();
    init_base64url2();
    init_validate_crit();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/subtle_dsa.js
var init_subtle_dsa = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/subtle_dsa.js"() {
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
var init_get_sign_verify_key = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/get_sign_verify_key.js"() {
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/verify.js
var init_verify = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/verify.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/flattened/verify.js
var init_verify2 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/flattened/verify.js"() {
    init_base64url2();
    init_verify();
    init_errors2();
    init_buffer_utils();
    init_is_disjoint();
    init_is_object();
    init_check_key_type();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/compact/verify.js
var init_verify3 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/compact/verify.js"() {
    init_verify2();
    init_errors2();
    init_buffer_utils();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/general/verify.js
var init_verify4 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/general/verify.js"() {
    init_verify2();
    init_errors2();
    init_is_object();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/epoch.js
var epoch_default;
var init_epoch = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/epoch.js"() {
    epoch_default = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/secs.js
var minute, hour, day, week, year, REGEX, secs_default;
var init_secs = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/secs.js"() {
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365.25;
    REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
    secs_default = (str) => {
      const matched = REGEX.exec(str);
      if (!matched) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[1]);
      const unit = matched[2].toLowerCase();
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          return Math.round(value);
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          return Math.round(value * minute);
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          return Math.round(value * hour);
        case "day":
        case "days":
        case "d":
          return Math.round(value * day);
        case "week":
        case "weeks":
        case "w":
          return Math.round(value * week);
        default:
          return Math.round(value * year);
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp, checkAudiencePresence, jwt_claims_set_default;
var init_jwt_claims_set = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
    init_errors2();
    init_buffer_utils();
    init_epoch();
    init_secs();
    init_is_object();
    normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    };
    jwt_claims_set_default = (protectedHeader, encodedPayload, options3 = {}) => {
      const { typ } = options3;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
      }
      let payload;
      try {
        payload = JSON.parse(decoder2.decode(encodedPayload));
      } catch (_a) {
      }
      if (!isObject(payload)) {
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options3;
      if (maxTokenAge !== void 0)
        requiredClaims.push("iat");
      if (audience !== void 0)
        requiredClaims.push("aud");
      if (subject !== void 0)
        requiredClaims.push("sub");
      if (issuer !== void 0)
        requiredClaims.push("iss");
      for (const claim of new Set(requiredClaims.reverse())) {
        if (!(claim in payload)) {
          throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, "missing");
        }
      }
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
      }
      if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
      }
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options3.clockTolerance) {
        case "string":
          tolerance = secs_default(options3.clockTolerance);
          break;
        case "number":
          tolerance = options3.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options3;
      const now2 = epoch_default(currentDate || /* @__PURE__ */ new Date());
      if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
        }
        if (payload.nbf > now2 + tolerance) {
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
        }
        if (payload.exp <= now2 - tolerance) {
          throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
        }
      }
      if (maxTokenAge) {
        const age = now2 - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
        }
      }
      return payload;
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/verify.js
var init_verify5 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/verify.js"() {
    init_verify3();
    init_jwt_claims_set();
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/decrypt.js
async function jwtDecrypt(jwt2, key2, options3) {
  const decrypted = await compactDecrypt(jwt2, key2, options3);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options3);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key2 === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt5 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/decrypt.js"() {
    init_decrypt3();
    init_jwt_claims_set();
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/compact/encrypt.js
var CompactEncrypt;
var init_encrypt4 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
    init_encrypt2();
    CompactEncrypt = class {
      constructor(plaintext) {
        this._flattened = new FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key2, options3) {
        const jwe = await this._flattened.encrypt(key2, options3);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/sign.js
var init_sign = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/sign.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/flattened/sign.js
var init_sign2 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/flattened/sign.js"() {
    init_base64url2();
    init_sign();
    init_is_disjoint();
    init_errors2();
    init_buffer_utils();
    init_check_key_type();
    init_validate_crit();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/compact/sign.js
var init_sign3 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/compact/sign.js"() {
    init_sign2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/general/sign.js
var init_sign4 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jws/general/sign.js"() {
    init_sign2();
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/produce.js
var ProduceJWT;
var init_produce = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/produce.js"() {
    init_epoch();
    init_is_object();
    init_secs();
    ProduceJWT = class {
      constructor(payload) {
        if (!isObject(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: input };
        } else {
          this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: input };
        } else {
          this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
        } else {
          this._payload = { ...this._payload, iat: input };
        }
        return this;
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/sign.js
var init_sign5 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/sign.js"() {
    init_sign3();
    init_errors2();
    init_buffer_utils();
    init_produce();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/encrypt.js
var EncryptJWT;
var init_encrypt5 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/encrypt.js"() {
    init_encrypt4();
    init_buffer_utils();
    init_produce();
    EncryptJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key2, options3) {
        const enc = new CompactEncrypt(encoder3.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key2, options3);
      }
    };
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwk/thumbprint.js
var init_thumbprint = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwk/thumbprint.js"() {
    init_digest();
    init_base64url2();
    init_errors2();
    init_buffer_utils();
    init_is_object();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwk/embedded.js
var init_embedded = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwk/embedded.js"() {
    init_import();
    init_is_object();
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwks/local.js
var init_local = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwks/local.js"() {
    init_import();
    init_errors2();
    init_is_object();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/fetch_jwks.js
var init_fetch_jwks = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/fetch_jwks.js"() {
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwks/remote.js
var init_remote = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwks/remote.js"() {
    init_fetch_jwks();
    init_errors2();
    init_local();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/unsecured.js
var init_unsecured = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/jwt/unsecured.js"() {
    init_base64url2();
    init_buffer_utils();
    init_errors2();
    init_jwt_claims_set();
    init_produce();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/base64url.js
var base64url_exports2 = {};
__export(base64url_exports2, {
  decode: () => decode3,
  encode: () => encode3
});
var encode3, decode3;
var init_base64url3 = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/base64url.js"() {
    init_base64url2();
    encode3 = encode2;
    decode3 = decode2;
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/decode_protected_header.js
var init_decode_protected_header = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/decode_protected_header.js"() {
    init_base64url3();
    init_buffer_utils();
    init_is_object();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/decode_jwt.js
var init_decode_jwt = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/util/decode_jwt.js"() {
    init_base64url3();
    init_buffer_utils();
    init_is_object();
    init_errors2();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/generate.js
var init_generate = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/runtime/generate.js"() {
    init_webcrypto();
    init_errors2();
    init_random();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/generate_key_pair.js
var init_generate_key_pair = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/generate_key_pair.js"() {
    init_generate();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/generate_secret.js
var init_generate_secret = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/key/generate_secret.js"() {
    init_generate();
  }
});

// node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/index.js
var init_browser = __esm({
  "node_modules/.pnpm/jose@4.14.4/node_modules/jose/dist/browser/index.js"() {
    init_decrypt3();
    init_decrypt2();
    init_decrypt4();
    init_encrypt3();
    init_verify3();
    init_verify2();
    init_verify4();
    init_verify5();
    init_decrypt5();
    init_encrypt4();
    init_encrypt2();
    init_sign3();
    init_sign2();
    init_sign4();
    init_sign5();
    init_encrypt5();
    init_thumbprint();
    init_embedded();
    init_local();
    init_remote();
    init_unsecured();
    init_export();
    init_import();
    init_decode_protected_header();
    init_decode_jwt();
    init_errors2();
    init_generate_key_pair();
    init_generate_secret();
    init_base64url3();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/jwt.js
async function encode4(params) {
  const { token = {}, secret, maxAge = DEFAULT_MAX_AGE } = params;
  const encryptionSecret = await getDerivedEncryptionKey(secret);
  return await new EncryptJWT(token).setProtectedHeader({ alg: "dir", enc: "A256GCM" }).setIssuedAt().setExpirationTime(now() + maxAge).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
async function decode4(params) {
  const { token, secret } = params;
  if (!token)
    return null;
  const encryptionSecret = await getDerivedEncryptionKey(secret);
  const { payload } = await jwtDecrypt(token, encryptionSecret, {
    clockTolerance: 15
  });
  return payload;
}
async function getDerivedEncryptionKey(secret) {
  return await hkdf("sha256", secret, "", "Auth.js Generated Encryption Key", 32);
}
var DEFAULT_MAX_AGE, now;
var init_jwt = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/jwt.js"() {
    init_web();
    init_browser();
    init_cookie();
    init_errors();
    DEFAULT_MAX_AGE = 30 * 24 * 60 * 60;
    now = () => Date.now() / 1e3 | 0;
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/callback-url.js
async function createCallbackUrl({ options: options3, paramValue, cookieValue }) {
  const { url, callbacks } = options3;
  let callbackUrl = url.origin;
  if (paramValue) {
    callbackUrl = await callbacks.redirect({
      url: paramValue,
      baseUrl: url.origin
    });
  } else if (cookieValue) {
    callbackUrl = await callbacks.redirect({
      url: cookieValue,
      baseUrl: url.origin
    });
  }
  return {
    callbackUrl,
    // Save callback URL in a cookie so that it can be used for subsequent requests in signin/signout/callback flow
    callbackUrlCookie: callbackUrl !== cookieValue ? callbackUrl : void 0
  };
}
var init_callback_url = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/callback-url.js"() {
  }
});

// node_modules/.pnpm/cookie@0.5.0/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/.pnpm/cookie@0.5.0/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize3;
    var __toString2 = Object.prototype.toString;
    var fieldContentRegExp2 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options3) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options3 || {};
      var dec = opt.decode || decode6;
      var index5 = 0;
      while (index5 < str.length) {
        var eqIdx = str.indexOf("=", index5);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index5);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index5, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode2(val, dec);
        }
        index5 = endIdx + 1;
      }
      return obj;
    }
    function serialize3(name, val, options3) {
      var opt = options3 || {};
      var enc = opt.encode || encode6;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp2.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp2.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp2.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp2.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate2(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode6(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode6(val) {
      return encodeURIComponent(val);
    }
    function isDate2(val) {
      return __toString2.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode2(str, decode7) {
      try {
        return decode7(str);
      } catch (e2) {
        return str;
      }
    }
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/web.js
async function getBody(req) {
  if (!("body" in req) || !req.body || req.method !== "POST")
    return;
  const contentType = req.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return await req.json();
  } else if (contentType?.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(await req.text());
    return Object.fromEntries(params);
  }
}
async function toInternalRequest(req) {
  try {
    const url = new URL(req.url.replace(/\/$/, ""));
    url.searchParams.delete("nextauth");
    const { pathname } = url;
    const action = actions.find((a3) => pathname.includes(a3));
    if (!action) {
      throw new UnknownAction(`Cannot detect action in pathname (${pathname}).`);
    }
    if (req.method !== "GET" && req.method !== "POST") {
      throw new UnknownAction("Only GET and POST requests are supported.");
    }
    const providerIdOrAction = pathname.split("/").pop();
    let providerId;
    if (providerIdOrAction && !action.includes(providerIdOrAction) && ["signin", "callback"].includes(action)) {
      providerId = providerIdOrAction;
    }
    return {
      url,
      action,
      providerId,
      method: req.method,
      headers: Object.fromEntries(req.headers),
      body: req.body ? await getBody(req) : void 0,
      cookies: (0, import_cookie3.parse)(req.headers.get("cookie") ?? "") ?? {},
      error: url.searchParams.get("error") ?? void 0,
      query: Object.fromEntries(url.searchParams)
    };
  } catch (e2) {
    return e2;
  }
}
function toRequest(request) {
  return new Request(request.url, {
    headers: request.headers,
    method: request.method,
    body: request.method === "POST" ? JSON.stringify(request.body ?? {}) : void 0
  });
}
function toResponse(res) {
  const headers = new Headers(res.headers);
  res.cookies?.forEach((cookie) => {
    const { name, value, options: options3 } = cookie;
    const cookieHeader = (0, import_cookie3.serialize)(name, value, options3);
    if (headers.has("Set-Cookie"))
      headers.append("Set-Cookie", cookieHeader);
    else
      headers.set("Set-Cookie", cookieHeader);
  });
  let body = res.body;
  if (headers.get("content-type") === "application/json")
    body = JSON.stringify(res.body);
  else if (headers.get("content-type") === "application/x-www-form-urlencoded")
    body = new URLSearchParams(res.body).toString();
  const status = res.redirect ? 302 : res.status ?? 200;
  const response = new Response(body, { headers, status });
  if (res.redirect)
    response.headers.set("Location", res.redirect);
  return response;
}
async function createHash(message2) {
  const data2 = new TextEncoder().encode(message2);
  const hash2 = await crypto.subtle.digest("SHA-256", data2);
  return Array.from(new Uint8Array(hash2)).map((b3) => b3.toString(16).padStart(2, "0")).join("").toString();
}
function randomString(size) {
  const i2hex = (i3) => ("0" + i3.toString(16)).slice(-2);
  const r3 = (a3, i3) => a3 + i2hex(i3);
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes).reduce(r3, "");
}
var import_cookie3, actions;
var init_web2 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/web.js"() {
    import_cookie3 = __toESM(require_cookie(), 1);
    init_errors();
    actions = [
      "providers",
      "session",
      "csrf",
      "signin",
      "signout",
      "callback",
      "verify-request",
      "error"
    ];
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/csrf-token.js
async function createCSRFToken({ options: options3, cookieValue, isPost, bodyValue }) {
  if (cookieValue) {
    const [csrfToken2, csrfTokenHash2] = cookieValue.split("|");
    const expectedCsrfTokenHash = await createHash(`${csrfToken2}${options3.secret}`);
    if (csrfTokenHash2 === expectedCsrfTokenHash) {
      const csrfTokenVerified = isPost && csrfToken2 === bodyValue;
      return { csrfTokenVerified, csrfToken: csrfToken2 };
    }
  }
  const csrfToken = randomString(32);
  const csrfTokenHash = await createHash(`${csrfToken}${options3.secret}`);
  const cookie = `${csrfToken}|${csrfTokenHash}`;
  return { cookie, csrfToken };
}
var init_csrf_token = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/csrf-token.js"() {
    init_web2();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/default-callbacks.js
var defaultCallbacks;
var init_default_callbacks = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/default-callbacks.js"() {
    defaultCallbacks = {
      signIn() {
        return true;
      },
      redirect({ url, baseUrl }) {
        if (url.startsWith("/"))
          return `${baseUrl}${url}`;
        else if (new URL(url).origin === baseUrl)
          return url;
        return baseUrl;
      },
      session({ session: session2 }) {
        return session2;
      },
      jwt({ token }) {
        return token;
      }
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/merge.js
function isObject2(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function merge(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (isObject2(target) && isObject2(source)) {
    for (const key2 in source) {
      if (isObject2(source[key2])) {
        if (!target[key2])
          Object.assign(target, { [key2]: {} });
        merge(target[key2], source[key2]);
      } else {
        Object.assign(target, { [key2]: source[key2] });
      }
    }
  }
  return merge(target, ...sources);
}
var init_merge = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/merge.js"() {
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/providers.js
function parseProviders(params) {
  const { url, providerId, options: options3 } = params;
  const providers2 = params.providers.map((p3) => {
    const provider = typeof p3 === "function" ? p3() : p3;
    const { options: userOptions, ...defaults } = provider;
    const id = userOptions?.id ?? defaults.id;
    const merged = merge(defaults, userOptions, {
      signinUrl: `${url}/signin/${id}`,
      callbackUrl: `${url}/callback/${id}`
    });
    if (provider.type === "oauth" || provider.type === "oidc") {
      merged.redirectProxyUrl ?? (merged.redirectProxyUrl = options3.redirectProxyUrl);
      return normalizeOAuth(merged);
    }
    return merged;
  });
  return {
    providers: providers2,
    provider: providers2.find(({ id }) => id === providerId)
  };
}
function normalizeOAuth(c3) {
  if (c3.issuer)
    c3.wellKnown ?? (c3.wellKnown = `${c3.issuer}/.well-known/openid-configuration`);
  const authorization = normalizeEndpoint(c3.authorization, c3.issuer);
  if (authorization && !authorization.url?.searchParams.has("scope")) {
    authorization.url.searchParams.set("scope", "openid profile email");
  }
  const token = normalizeEndpoint(c3.token, c3.issuer);
  const userinfo = normalizeEndpoint(c3.userinfo, c3.issuer);
  const checks2 = c3.checks ?? ["pkce"];
  if (c3.redirectProxyUrl) {
    if (!checks2.includes("state"))
      checks2.push("state");
    c3.redirectProxyUrl = `${c3.redirectProxyUrl}/callback/${c3.id}`;
  }
  return {
    ...c3,
    authorization,
    token,
    checks: checks2,
    userinfo,
    profile: c3.profile ?? defaultProfile,
    account: c3.account ?? defaultAccount
  };
}
function stripUndefined(o4) {
  const result = {};
  for (let [k3, v3] of Object.entries(o4))
    v3 !== void 0 && (result[k3] = v3);
  return result;
}
function normalizeEndpoint(e2, issuer) {
  if (!e2 && issuer)
    return;
  if (typeof e2 === "string") {
    return { url: new URL(e2) };
  }
  const url = new URL(e2?.url ?? "https://authjs.dev");
  if (e2?.params != null) {
    for (let [key2, value] of Object.entries(e2.params)) {
      if (key2 === "claims")
        value = JSON.stringify(value);
      url.searchParams.set(key2, String(value));
    }
  }
  return { url, request: e2?.request, conform: e2?.conform };
}
var defaultProfile, defaultAccount;
var init_providers = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/providers.js"() {
    init_errors();
    init_merge();
    defaultProfile = (profile) => {
      const id = profile.sub ?? profile.id;
      if (!id)
        throw new OAuthProfileParseError("Missing user id");
      return stripUndefined({
        id: id.toString(),
        name: profile.name ?? profile.nickname ?? profile.preferred_username,
        email: profile.email,
        image: profile.picture
      });
    };
    defaultAccount = (account) => {
      return stripUndefined({
        access_token: account.access_token,
        id_token: account.id_token,
        refresh_token: account.refresh_token,
        expires_at: account.expires_at,
        scope: account.scope,
        token_type: account.token_type,
        session_state: account.session_state
      });
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/logger.js
function setLogger(newLogger = {}, debug) {
  if (!debug)
    logger.debug = () => {
    };
  if (newLogger.error)
    logger.error = newLogger.error;
  if (newLogger.warn)
    logger.warn = newLogger.warn;
  if (newLogger.debug)
    logger.debug = newLogger.debug;
}
var red, yellow, grey, reset, logger;
var init_logger = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/logger.js"() {
    red = "\x1B[31m";
    yellow = "\x1B[33m";
    grey = "\x1B[90m";
    reset = "\x1B[0m";
    logger = {
      error(error2) {
        const url = `https://errors.authjs.dev#${error2.name.toLowerCase()}`;
        console.error(`${red}[auth][error][${error2.name}]${reset}:${error2.message ? ` ${error2.message}.` : ""} Read more at ${url}`);
        if (error2.cause) {
          const { err, ...data2 } = error2.cause;
          console.error(`${red}[auth][cause]${reset}:`, err.stack);
          console.error(`${red}[auth][details]${reset}:`, JSON.stringify(data2, null, 2));
        } else if (error2.stack) {
          console.error(error2.stack.replace(/.*/, "").substring(1));
        }
      },
      warn(code2) {
        const url = `https://warnings.authjs.dev#${code2}`;
        console.warn(`${yellow}[auth][warn][${code2}]${reset}`, `Read more: ${url}`);
      },
      debug(message2, metadata) {
        console.log(`${grey}[auth][debug]:${reset} ${message2}`, JSON.stringify(metadata, null, 2));
      }
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/parse-url.js
function parseUrl(url) {
  const defaultUrl = new URL("http://localhost:3000/api/auth");
  if (url && !url.toString().startsWith("http")) {
    url = `https://${url}`;
  }
  const _url = new URL(url ?? defaultUrl);
  const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname).replace(/\/$/, "");
  const base2 = `${_url.origin}${path}`;
  return {
    origin: _url.origin,
    host: _url.host,
    path,
    base: base2,
    toString: () => base2
  };
}
var init_parse_url = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/parse-url.js"() {
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/init.js
async function init2({ authOptions, providerId, action, url: reqUrl, cookies: reqCookies, callbackUrl: reqCallbackUrl, csrfToken: reqCsrfToken, csrfDisabled, isPost }) {
  const parsed = parseUrl(reqUrl.origin + reqUrl.pathname.replace(`/${action}`, "").replace(`/${providerId}`, ""));
  const url = new URL(parsed.toString());
  const { providers: providers2, provider } = parseProviders({
    providers: authOptions.providers,
    url,
    providerId,
    options: authOptions
  });
  const maxAge = 30 * 24 * 60 * 60;
  let isOnRedirectProxy = false;
  if ((provider?.type === "oauth" || provider?.type === "oidc") && provider.redirectProxyUrl) {
    try {
      isOnRedirectProxy = new URL(provider.redirectProxyUrl).origin === url.origin;
    } catch {
      throw new TypeError(`redirectProxyUrl must be a valid URL. Received: ${provider.redirectProxyUrl}`);
    }
  }
  const options3 = {
    debug: false,
    pages: {},
    theme: {
      colorScheme: "auto",
      logo: "",
      brandColor: "",
      buttonText: ""
    },
    // Custom options override defaults
    ...authOptions,
    // These computed settings can have values in userOptions but we override them
    // and are request-specific.
    url,
    action,
    // @ts-expect-errors
    provider,
    cookies: {
      ...defaultCookies(authOptions.useSecureCookies ?? url.protocol === "https:"),
      // Allow user cookie options to override any cookie settings above
      ...authOptions.cookies
    },
    providers: providers2,
    // Session options
    session: {
      // If no adapter specified, force use of JSON Web Tokens (stateless)
      strategy: authOptions.adapter ? "database" : "jwt",
      maxAge,
      updateAge: 24 * 60 * 60,
      generateSessionToken: () => crypto.randomUUID(),
      ...authOptions.session
    },
    // JWT options
    jwt: {
      // Asserted in assert.ts
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      secret: authOptions.secret,
      maxAge: authOptions.session?.maxAge ?? maxAge,
      encode: encode4,
      decode: decode4,
      ...authOptions.jwt
    },
    // Event messages
    events: eventsErrorHandler(authOptions.events ?? {}, logger),
    adapter: adapterErrorHandler(authOptions.adapter, logger),
    // Callback functions
    callbacks: { ...defaultCallbacks, ...authOptions.callbacks },
    logger,
    callbackUrl: url.origin,
    isOnRedirectProxy
  };
  const cookies = [];
  if (!csrfDisabled) {
    const { csrfToken, cookie: csrfCookie, csrfTokenVerified } = await createCSRFToken({
      options: options3,
      cookieValue: reqCookies?.[options3.cookies.csrfToken.name],
      isPost,
      bodyValue: reqCsrfToken
    });
    options3.csrfToken = csrfToken;
    options3.csrfTokenVerified = csrfTokenVerified;
    if (csrfCookie) {
      cookies.push({
        name: options3.cookies.csrfToken.name,
        value: csrfCookie,
        options: options3.cookies.csrfToken.options
      });
    }
  }
  const { callbackUrl, callbackUrlCookie } = await createCallbackUrl({
    options: options3,
    cookieValue: reqCookies?.[options3.cookies.callbackUrl.name],
    paramValue: reqCallbackUrl
  });
  options3.callbackUrl = callbackUrl;
  if (callbackUrlCookie) {
    cookies.push({
      name: options3.cookies.callbackUrl.name,
      value: callbackUrlCookie,
      options: options3.cookies.callbackUrl.options
    });
  }
  return { options: options3, cookies };
}
function eventsErrorHandler(methods, logger2) {
  return Object.keys(methods).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        const method = methods[name];
        return await method(...args);
      } catch (e2) {
        logger2.error(new EventError(e2));
      }
    };
    return acc;
  }, {});
}
function adapterErrorHandler(adapter, logger2) {
  if (!adapter)
    return;
  return Object.keys(adapter).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        logger2.debug(`adapter_${name}`, { args });
        const method = adapter[name];
        return await method(...args);
      } catch (e2) {
        const error2 = new AdapterError(e2);
        logger2.error(error2);
        throw error2;
      }
    };
    return acc;
  }, {});
}
var init_init = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/init.js"() {
    init_jwt();
    init_callback_url();
    init_cookie();
    init_csrf_token();
    init_default_callbacks();
    init_errors();
    init_providers();
    init_logger();
    init_parse_url();
  }
});

// node_modules/.pnpm/preact@10.11.3/node_modules/preact/dist/preact.module.js
function s(n3, l3) {
  for (var u3 in l3)
    n3[u3] = l3[u3];
  return n3;
}
function a(n3) {
  var l3 = n3.parentNode;
  l3 && l3.removeChild(n3);
}
function v(n3, i3, t2, o4, r3) {
  var f3 = { type: n3, props: i3, key: t2, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function p(n3) {
  return n3.children;
}
function d(n3, l3) {
  this.props = n3, this.context = l3;
}
function _(n3, l3) {
  if (null == l3)
    return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
  for (var u3; l3 < n3.__k.length; l3++)
    if (null != (u3 = n3.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n3.type ? _(n3) : null;
}
function k(n3) {
  var l3, u3;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
      if (null != (u3 = n3.__k[l3]) && null != u3.__e) {
        n3.__e = n3.__c.base = u3.__e;
        break;
      }
    return k(n3);
  }
}
function b(n3) {
  (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n3; g.__r = t.length; )
    n3 = t.sort(function(n4, l3) {
      return n4.__v.__b - l3.__v.__b;
    }), t = [], n3.some(function(n4) {
      var l3, u3, i3, t2, o4, r3;
      n4.__d && (o4 = (t2 = (l3 = n4).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t2)).__v = t2.__v + 1, j(r3, t2, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t2.__h ? [o4] : null, u3, null == o4 ? _(t2) : o4, t2.__h), z(u3, t2), t2.__e != o4 && k(t2)));
    });
}
function w(n3, l3, u3, i3, t2, o4, r3, c3, s4, a3) {
  var h2, y2, d3, k3, b3, g3, w3, x2 = i3 && i3.__k || e, C3 = x2.length;
  for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
    if (null != (k3 = u3.__k[h2] = null == (k3 = l3[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
      if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x2[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
        x2[h2] = void 0;
      else
        for (y2 = 0; y2 < C3; y2++) {
          if ((d3 = x2[y2]) && k3.key == d3.key && k3.type === d3.type) {
            x2[y2] = void 0;
            break;
          }
          d3 = null;
        }
      j(n3, k3, d3 = d3 || f, t2, o4, r3, c3, s4, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s4 = m(k3, s4, n3) : s4 = A(n3, k3, d3, x2, b3, s4), "function" == typeof u3.type && (u3.__d = s4)) : s4 && d3.__e == s4 && s4.parentNode != n3 && (s4 = _(d3));
    }
  for (u3.__e = g3, h2 = C3; h2--; )
    null != x2[h2] && N(x2[h2], x2[h2]);
  if (w3)
    for (h2 = 0; h2 < w3.length; h2++)
      M(w3[h2], w3[++h2], w3[++h2]);
}
function m(n3, l3, u3) {
  for (var i3, t2 = n3.__k, o4 = 0; t2 && o4 < t2.length; o4++)
    (i3 = t2[o4]) && (i3.__ = n3, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t2, i3.__e, l3));
  return l3;
}
function A(n3, l3, u3, i3, t2, o4) {
  var r3, f3, e2;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t2 != o4 || null == t2.parentNode)
    n:
      if (null == o4 || o4.parentNode !== n3)
        n3.appendChild(t2), r3 = null;
      else {
        for (f3 = o4, e2 = 0; (f3 = f3.nextSibling) && e2 < i3.length; e2 += 1)
          if (f3 == t2)
            break n;
        n3.insertBefore(t2, o4), r3 = o4;
      }
  return void 0 !== r3 ? r3 : t2.nextSibling;
}
function C(n3, l3, u3, i3, t2) {
  var o4;
  for (o4 in u3)
    "children" === o4 || "key" === o4 || o4 in l3 || H(n3, o4, null, u3[o4], i3);
  for (o4 in l3)
    t2 && "function" != typeof l3[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l3[o4] || H(n3, o4, l3[o4], u3[o4], i3);
}
function $(n3, l3, u3) {
  "-" === l3[0] ? n3.setProperty(l3, u3) : n3[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n3, l3, u3, i3, t2) {
  var o4;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n3.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n3.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n3.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n3.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o4 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n3 ? l3.toLowerCase().slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o4] = u3, u3 ? i3 || n3.addEventListener(l3, o4 ? T : I, o4) : n3.removeEventListener(l3, o4 ? T : I, o4);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t2)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n3)
        try {
          n3[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n4) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n3.removeAttribute(l3) : n3.setAttribute(l3, u3));
    }
}
function I(n3) {
  this.l[n3.type + false](l.event ? l.event(n3) : n3);
}
function T(n3) {
  this.l[n3.type + true](l.event ? l.event(n3) : n3);
}
function j(n3, u3, i3, t2, o4, r3, f3, e2, c3) {
  var a3, h2, v3, y2, _4, k3, b3, g3, m3, x2, A2, C3, $2, H2, I2, T2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e2 = u3.__e = i3.__e, u3.__h = null, r3 = [e2]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof T2) {
        if (g3 = u3.props, m3 = (a3 = T2.contextType) && t2[a3.__c], x2 = a3 ? m3 ? m3.props.value : a3.__ : t2, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u3.__c = h2 = new T2(g3, x2) : (u3.__c = h2 = new d(g3, x2), h2.constructor = T2, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v3 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, T2.getDerivedStateFromProps(g3, h2.__s))), y2 = h2.props, _4 = h2.state, v3)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g3 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x2) || u3.__v === i3.__v) {
            for (h2.props = g3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n4) {
              n4 && (n4.__ = u3);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f3.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _4, k3);
          });
        }
        if (h2.context = x2, h2.props = g3, h2.__v = u3, h2.__P = n3, C3 = l.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C3 && C3(u3), a3 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C3 && C3(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s(s({}, t2), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y2, _4)), I2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n3, Array.isArray(I2) ? I2 : [I2], u3, i3, t2, o4, r3, f3, e2, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t2, o4, r3, f3, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n4) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e2, u3.__h = !!c3, r3[r3.indexOf(e2)] = null), l.__e(n4, u3, i3);
  }
}
function z(n3, u3) {
  l.__c && l.__c(u3, n3), n3.some(function(u4) {
    try {
      n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
        n4.call(u4);
      });
    } catch (n4) {
      l.__e(n4, u4.__v);
    }
  });
}
function L(l3, u3, i3, t2, o4, r3, e2, c3) {
  var s4, h2, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
  if ("svg" === d3 && (o4 = true), null != r3) {
    for (; k3 < r3.length; k3++)
      if ((s4 = r3[k3]) && "setAttribute" in s4 == !!d3 && (d3 ? s4.localName === d3 : 3 === s4.nodeType)) {
        l3 = s4, r3[k3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
  }
  if (null === d3)
    y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h2 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
          y2[l3.attributes[k3].name] = l3.attributes[k3].value;
      (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y2, o4, c3), v3)
      u3.__k = [];
    else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t2, o4 && "foreignObject" !== d3, r3, e2, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k3 = r3.length; k3--; )
        null != r3[k3] && a(r3[k3]);
    c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
  }
  return l3;
}
function M(n3, u3, i3) {
  try {
    "function" == typeof n3 ? n3(u3) : n3.current = u3;
  } catch (n4) {
    l.__e(n4, i3);
  }
}
function N(n3, u3, i3) {
  var t2, o4;
  if (l.unmount && l.unmount(n3), (t2 = n3.ref) && (t2.current && t2.current !== n3.__e || M(t2, null, u3)), null != (t2 = n3.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u3);
      }
    t2.base = t2.__P = null, n3.__c = void 0;
  }
  if (t2 = n3.__k)
    for (o4 = 0; o4 < t2.length; o4++)
      t2[o4] && N(t2[o4], u3, i3 || "function" != typeof n3.type);
  i3 || null == n3.__e || a(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
}
function O(n3, l3, u3) {
  return this.constructor(n3, u3);
}
var n, l, u, i, t, o, r, f, e, c;
var init_preact_module = __esm({
  "node_modules/.pnpm/preact@10.11.3/node_modules/preact/dist/preact.module.js"() {
    f = {};
    e = [];
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = e.slice, l = { __e: function(n3, l3, u3, i3) {
      for (var t2, o4, r3; l3 = l3.__; )
        if ((t2 = l3.__c) && !t2.__)
          try {
            if ((o4 = t2.constructor) && null != o4.getDerivedStateFromError && (t2.setState(o4.getDerivedStateFromError(n3)), r3 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n3, i3 || {}), r3 = t2.__d), r3)
              return t2.__E = t2;
          } catch (l4) {
            n3 = l4;
          }
      throw n3;
    } }, u = 0, i = function(n3) {
      return null != n3 && void 0 === n3.constructor;
    }, d.prototype.setState = function(n3, l3) {
      var u3;
      u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n3 && (n3 = n3(s({}, u3), this.props)), n3 && s(u3, n3), null != n3 && this.__v && (l3 && this._sb.push(l3), b(this));
    }, d.prototype.forceUpdate = function(n3) {
      this.__v && (this.__e = true, n3 && this.__h.push(n3), b(this));
    }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
  }
});

// node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.11.3/node_modules/preact-render-to-string/dist/index.mjs
function l2(e2) {
  if (false === a2.test(e2 += ""))
    return e2;
  for (var t2 = 0, r3 = 0, n3 = "", o4 = ""; r3 < e2.length; r3++) {
    switch (e2.charCodeAt(r3)) {
      case 34:
        o4 = "&quot;";
        break;
      case 38:
        o4 = "&amp;";
        break;
      case 60:
        o4 = "&lt;";
        break;
      default:
        continue;
    }
    r3 !== t2 && (n3 += e2.slice(t2, r3)), n3 += o4, t2 = r3 + 1;
  }
  return r3 !== t2 && (n3 += e2.slice(t2, r3)), n3;
}
function p2(e2) {
  var t2 = "";
  for (var n3 in e2) {
    var o4 = e2[n3];
    null != o4 && "" !== o4 && (t2 && (t2 += " "), t2 += "-" == n3[0] ? n3 : c2[n3] || (c2[n3] = n3.replace(u2, "-$1").toLowerCase()), t2 = "number" == typeof o4 && false === r2.test(n3) ? t2 + ": " + o4 + "px;" : t2 + ": " + o4 + ";");
  }
  return t2 || void 0;
}
function _2(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(_2, e2) : null != t2 && false !== t2 && e2.push(t2), e2;
}
function d2() {
  this.__d = true;
}
function v2(e2, t2) {
  return { __v: e2, context: t2, props: e2.props, setState: d2, forceUpdate: d2, __d: true, __h: [] };
}
function h(e2, t2) {
  var r3 = e2.contextType, n3 = r3 && t2[r3.__c];
  return null != r3 ? n3 ? n3.props.value : r3.__ : t2;
}
function y(r3, a3, c3, u3, d3, m3) {
  if (null == r3 || "boolean" == typeof r3)
    return "";
  if ("object" != typeof r3)
    return l2(r3);
  var b3 = c3.pretty, x2 = b3 && "string" == typeof b3 ? b3 : "	";
  if (Array.isArray(r3)) {
    for (var k3 = "", S2 = 0; S2 < r3.length; S2++)
      b3 && S2 > 0 && (k3 += "\n"), k3 += y(r3[S2], a3, c3, u3, d3, m3);
    return k3;
  }
  var w3, C3 = r3.type, O3 = r3.props, j3 = false;
  if ("function" == typeof C3) {
    if (j3 = true, !c3.shallow || !u3 && false !== c3.renderRootComponent) {
      if (C3 === p) {
        var A2 = [];
        return _2(A2, r3.props.children), y(A2, a3, c3, false !== c3.shallowHighOrder, d3, m3);
      }
      var F, H2 = r3.__c = v2(r3, a3);
      l.__b && l.__b(r3);
      var M2 = l.__r;
      if (C3.prototype && "function" == typeof C3.prototype.render) {
        var L2 = h(C3, a3);
        (H2 = r3.__c = new C3(O3, L2)).__v = r3, H2._dirty = H2.__d = true, H2.props = O3, null == H2.state && (H2.state = {}), null == H2._nextState && null == H2.__s && (H2._nextState = H2.__s = H2.state), H2.context = L2, C3.getDerivedStateFromProps ? H2.state = Object.assign({}, H2.state, C3.getDerivedStateFromProps(H2.props, H2.state)) : H2.componentWillMount && (H2.componentWillMount(), H2.state = H2._nextState !== H2.state ? H2._nextState : H2.__s !== H2.state ? H2.__s : H2.state), M2 && M2(r3), F = H2.render(H2.props, H2.state, H2.context);
      } else
        for (var T2 = h(C3, a3), E = 0; H2.__d && E++ < 25; )
          H2.__d = false, M2 && M2(r3), F = C3.call(r3.__c, O3, T2);
      return H2.getChildContext && (a3 = Object.assign({}, a3, H2.getChildContext())), l.diffed && l.diffed(r3), y(F, a3, c3, false !== c3.shallowHighOrder, d3, m3);
    }
    C3 = (w3 = C3).displayName || w3 !== Function && w3.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r4 = -1, n3 = g2.length; n3--; )
          if (g2[n3] === e2) {
            r4 = n3;
            break;
          }
        r4 < 0 && (r4 = g2.push(e2) - 1), t2 = "UnnamedComponent" + r4;
      }
      return t2;
    }(w3);
  }
  var $2, D, N2 = "<" + C3;
  if (O3) {
    var P = Object.keys(O3);
    c3 && true === c3.sortAttributes && P.sort();
    for (var W = 0; W < P.length; W++) {
      var I2 = P[W], R = O3[I2];
      if ("children" !== I2) {
        if (!o2.test(I2) && (c3 && c3.allAttributes || "key" !== I2 && "ref" !== I2 && "__self" !== I2 && "__source" !== I2)) {
          if ("defaultValue" === I2)
            I2 = "value";
          else if ("defaultChecked" === I2)
            I2 = "checked";
          else if ("defaultSelected" === I2)
            I2 = "selected";
          else if ("className" === I2) {
            if (void 0 !== O3.class)
              continue;
            I2 = "class";
          } else
            d3 && i2.test(I2) && (I2 = I2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === I2) {
            if (O3.for)
              continue;
            I2 = "for";
          }
          "style" === I2 && R && "object" == typeof R && (R = p2(R)), "a" === I2[0] && "r" === I2[1] && "boolean" == typeof R && (R = String(R));
          var U = c3.attributeHook && c3.attributeHook(I2, R, a3, c3, j3);
          if (U || "" === U)
            N2 += U;
          else if ("dangerouslySetInnerHTML" === I2)
            D = R && R.__html;
          else if ("textarea" === C3 && "value" === I2)
            $2 = R;
          else if ((R || 0 === R || "" === R) && "function" != typeof R) {
            if (!(true !== R && "" !== R || (R = I2, c3 && c3.xml))) {
              N2 = N2 + " " + I2;
              continue;
            }
            if ("value" === I2) {
              if ("select" === C3) {
                m3 = R;
                continue;
              }
              "option" === C3 && m3 == R && void 0 === O3.selected && (N2 += " selected");
            }
            N2 = N2 + " " + I2 + '="' + l2(R) + '"';
          }
        }
      } else
        $2 = R;
    }
  }
  if (b3) {
    var V = N2.replace(/\n\s*/, " ");
    V === N2 || ~V.indexOf("\n") ? b3 && ~N2.indexOf("\n") && (N2 += "\n") : N2 = V;
  }
  if (N2 += ">", o2.test(C3))
    throw new Error(C3 + " is not a valid HTML tag name in " + N2);
  var q, z2 = n2.test(C3) || c3.voidElements && c3.voidElements.test(C3), Z = [];
  if (D)
    b3 && f2(D) && (D = "\n" + x2 + s2(D, x2)), N2 += D;
  else if (null != $2 && _2(q = [], $2).length) {
    for (var B = b3 && ~N2.indexOf("\n"), G = false, J = 0; J < q.length; J++) {
      var K = q[J];
      if (null != K && false !== K) {
        var Q = y(K, a3, c3, true, "svg" === C3 || "foreignObject" !== C3 && d3, m3);
        if (b3 && !B && f2(Q) && (B = true), Q)
          if (b3) {
            var X = Q.length > 0 && "<" != Q[0];
            G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
          } else
            Z.push(Q);
      }
    }
    if (b3 && B)
      for (var Y = Z.length; Y--; )
        Z[Y] = "\n" + x2 + s2(Z[Y], x2);
  }
  if (Z.length || D)
    N2 += Z.join("");
  else if (c3 && c3.xml)
    return N2.substring(0, N2.length - 1) + " />";
  return !z2 || q || D ? (b3 && ~N2.indexOf("\n") && (N2 += "\n"), N2 = N2 + "</" + C3 + ">") : N2 = N2.replace(/>$/, " />"), N2;
}
function k2(e2, r3, n3) {
  r3 = r3 || {};
  var o4, i3 = l.__s;
  return l.__s = true, o4 = n3 && (n3.pretty || n3.voidElements || n3.sortAttributes || n3.shallow || n3.allAttributes || n3.xml || n3.attributeHook) ? y(e2, r3, n3) : j2(e2, r3, false, void 0), l.__c && l.__c(e2, x), l.__s = i3, x.length = 0, o4;
}
function S(e2, t2) {
  return "className" === e2 ? "class" : "htmlFor" === e2 ? "for" : "defaultValue" === e2 ? "value" : "defaultChecked" === e2 ? "checked" : "defaultSelected" === e2 ? "selected" : t2 && i2.test(e2) ? e2.toLowerCase().replace(/^xlink:?/, "xlink:") : e2;
}
function w2(e2, t2) {
  return "style" === e2 && null != t2 && "object" == typeof t2 ? p2(t2) : "a" === e2[0] && "r" === e2[1] && "boolean" == typeof t2 ? String(t2) : t2;
}
function j2(r3, i3, a3, s4) {
  if (null == r3 || true === r3 || false === r3 || "" === r3)
    return "";
  if ("object" != typeof r3)
    return l2(r3);
  if (C2(r3)) {
    for (var f3 = "", c3 = 0; c3 < r3.length; c3++)
      f3 += j2(r3[c3], i3, a3, s4);
    return f3;
  }
  l.__b && l.__b(r3);
  var u3 = r3.type, p3 = r3.props;
  if ("function" == typeof u3) {
    if (u3 === p)
      return j2(r3.props.children, i3, a3, s4);
    var _4;
    _4 = u3.prototype && "function" == typeof u3.prototype.render ? function(e2, r4) {
      var n3 = e2.type, o4 = h(n3, r4), i4 = new n3(e2.props, o4);
      e2.__c = i4, i4.__v = e2, i4.__d = true, i4.props = e2.props, null == i4.state && (i4.state = {}), null == i4.__s && (i4.__s = i4.state), i4.context = o4, n3.getDerivedStateFromProps ? i4.state = O2({}, i4.state, n3.getDerivedStateFromProps(i4.props, i4.state)) : i4.componentWillMount && (i4.componentWillMount(), i4.state = i4.__s !== i4.state ? i4.__s : i4.state);
      var a4 = l.__r;
      return a4 && a4(e2), i4.render(i4.props, i4.state, i4.context);
    }(r3, i3) : function(e2, r4) {
      var n3, o4 = v2(e2, r4), i4 = h(e2.type, r4);
      e2.__c = o4;
      for (var a4 = l.__r, l3 = 0; o4.__d && l3++ < 25; )
        o4.__d = false, a4 && a4(e2), n3 = e2.type.call(o4, e2.props, i4);
      return n3;
    }(r3, i3);
    var d3 = r3.__c;
    d3.getChildContext && (i3 = O2({}, i3, d3.getChildContext()));
    var g3 = j2(_4, i3, a3, s4);
    return l.diffed && l.diffed(r3), g3;
  }
  var y2, m3, b3 = "<";
  if (b3 += u3, p3)
    for (var x2 in y2 = p3.children, p3) {
      var k3 = p3[x2];
      if (!("key" === x2 || "ref" === x2 || "__self" === x2 || "__source" === x2 || "children" === x2 || "className" === x2 && "class" in p3 || "htmlFor" === x2 && "for" in p3 || o2.test(x2))) {
        if (k3 = w2(x2 = S(x2, a3), k3), "dangerouslySetInnerHTML" === x2)
          m3 = k3 && k3.__html;
        else if ("textarea" === u3 && "value" === x2)
          y2 = k3;
        else if ((k3 || 0 === k3 || "" === k3) && "function" != typeof k3) {
          if (true === k3 || "" === k3) {
            k3 = x2, b3 = b3 + " " + x2;
            continue;
          }
          if ("value" === x2) {
            if ("select" === u3) {
              s4 = k3;
              continue;
            }
            "option" !== u3 || s4 != k3 || "selected" in p3 || (b3 += " selected");
          }
          b3 = b3 + " " + x2 + '="' + l2(k3) + '"';
        }
      }
    }
  var A2 = b3;
  if (b3 += ">", o2.test(u3))
    throw new Error(u3 + " is not a valid HTML tag name in " + b3);
  var F = "", H2 = false;
  if (m3)
    F += m3, H2 = true;
  else if ("string" == typeof y2)
    F += l2(y2), H2 = true;
  else if (C2(y2))
    for (var M2 = 0; M2 < y2.length; M2++) {
      var L2 = y2[M2];
      if (null != L2 && false !== L2) {
        var T2 = j2(L2, i3, "svg" === u3 || "foreignObject" !== u3 && a3, s4);
        T2 && (F += T2, H2 = true);
      }
    }
  else if (null != y2 && false !== y2 && true !== y2) {
    var E = j2(y2, i3, "svg" === u3 || "foreignObject" !== u3 && a3, s4);
    E && (F += E, H2 = true);
  }
  if (l.diffed && l.diffed(r3), H2)
    b3 += F;
  else if (n2.test(u3))
    return A2 + " />";
  return b3 + "</" + u3 + ">";
}
var r2, n2, o2, i2, a2, s2, f2, c2, u2, g2, m2, b2, x, C2, O2;
var init_dist = __esm({
  "node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.11.3/node_modules/preact-render-to-string/dist/index.mjs"() {
    init_preact_module();
    r2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
    n2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    o2 = /[\s\n\\/='"\0<>]/;
    i2 = /^xlink:?./;
    a2 = /["&<]/;
    s2 = function(e2, t2) {
      return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
    };
    f2 = function(e2, t2, r3) {
      return String(e2).length > (t2 || 40) || !r3 && -1 !== String(e2).indexOf("\n") || -1 !== String(e2).indexOf("<");
    };
    c2 = {};
    u2 = /([A-Z])/g;
    g2 = [];
    m2 = { shallow: true };
    k2.render = k2;
    b2 = function(e2, t2) {
      return k2(e2, t2, m2);
    };
    x = [];
    C2 = Array.isArray;
    O2 = Object.assign;
    k2.shallowRender = b2;
  }
});

// node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
function o3(o4, e2, n3, t2, f3) {
  var l3, s4, u3 = {};
  for (s4 in e2)
    "ref" == s4 ? l3 = e2[s4] : u3[s4] = e2[s4];
  var a3 = { type: o4, props: u3, key: n3, ref: l3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f3, __self: t2 };
  if ("function" == typeof o4 && (l3 = o4.defaultProps))
    for (s4 in l3)
      void 0 === u3[s4] && (u3[s4] = l3[s4]);
  return l.vnode && l.vnode(a3), a3;
}
var _3;
var init_jsxRuntime_module = __esm({
  "node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    init_preact_module();
    init_preact_module();
    _3 = 0;
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/error.js
function ErrorPage(props) {
  const { url, error: error2 = "default", theme } = props;
  const signinPageUrl = `${url}/signin`;
  const errors = {
    default: {
      status: 200,
      heading: "Error",
      message: o3("p", { children: o3("a", { className: "site", href: url?.origin, children: url?.host }) })
    },
    configuration: {
      status: 500,
      heading: "Server error",
      message: o3("div", { children: [o3("p", { children: "There is a problem with the server configuration." }), o3("p", { children: "Check the server logs for more information." })] })
    },
    accessdenied: {
      status: 403,
      heading: "Access Denied",
      message: o3("div", { children: [o3("p", { children: "You do not have permission to sign in." }), o3("p", { children: o3("a", { className: "button", href: signinPageUrl, children: "Sign in" }) })] })
    },
    verification: {
      status: 403,
      heading: "Unable to sign in",
      message: o3("div", { children: [o3("p", { children: "The sign in link is no longer valid." }), o3("p", { children: "It may have been used already or it may have expired." })] }),
      signin: o3("p", { children: o3("a", { className: "button", href: signinPageUrl, children: "Sign in" }) })
    }
  };
  const { status, heading, message: message2, signin: signin2 } = errors[error2.toLowerCase()] ?? errors.default;
  return {
    status,
    html: o3("div", { className: "error", children: [theme?.brandColor && o3("style", { dangerouslySetInnerHTML: {
      __html: `
        :root {
          --brand-color: ${theme?.brandColor}
        }
      `
    } }), o3("div", { className: "card", children: [theme?.logo && o3("img", { src: theme?.logo, alt: "Logo", className: "logo" }), o3("h1", { children: heading }), o3("div", { className: "message", children: message2 }), signin2] })] })
  };
}
var init_error2 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/error.js"() {
    init_jsxRuntime_module();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/signin.js
function SigninPage(props) {
  const { csrfToken, providers: providers2 = [], callbackUrl, theme, email: email2, error: errorType } = props;
  if (typeof document !== "undefined" && theme.brandColor) {
    document.documentElement.style.setProperty("--brand-color", theme.brandColor);
  }
  if (typeof document !== "undefined" && theme.buttonText) {
    document.documentElement.style.setProperty("--button-text-color", theme.buttonText);
  }
  const error2 = errorType && (signinErrors[errorType.toLowerCase()] ?? signinErrors.default);
  const logos = "https://authjs.dev/img/providers";
  return o3("div", { className: "signin", children: [theme.brandColor && o3("style", { dangerouslySetInnerHTML: {
    __html: `:root {--brand-color: ${theme.brandColor}}`
  } }), theme.buttonText && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
  } }), o3("div", { className: "card", children: [error2 && o3("div", { className: "error", children: o3("p", { children: error2 }) }), providers2.map((provider, i3) => o3("div", { className: "provider", children: [provider.type === "oauth" || provider.type === "oidc" ? o3("form", { action: provider.signinUrl, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), callbackUrl && o3("input", { type: "hidden", name: "callbackUrl", value: callbackUrl }), o3("button", { type: "submit", className: "button", style: {
    "--provider-bg": provider.style?.bg ?? "",
    "--provider-dark-bg": provider.style?.bgDark ?? "",
    "--provider-color": provider.style?.text ?? "",
    "--provider-dark-color": provider.style?.textDark ?? "",
    gap: 8
  }, children: [provider.style?.logo && o3("img", { loading: "lazy", height: 24, width: 24, id: "provider-logo", src: `${provider.style.logo.startsWith("/") ? logos : ""}${provider.style.logo}` }), provider.style?.logoDark && o3("img", { loading: "lazy", height: 24, width: 24, id: "provider-logo-dark", src: `${provider.style.logo.startsWith("/") ? logos : ""}${provider.style.logoDark}` }), o3("span", { children: ["Sign in with ", provider.name] })] })] }) : null, (provider.type === "email" || provider.type === "credentials") && i3 > 0 && providers2[i3 - 1].type !== "email" && providers2[i3 - 1].type !== "credentials" && o3("hr", {}), provider.type === "email" && o3("form", { action: provider.signinUrl, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), o3("label", { className: "section-header", htmlFor: `input-email-for-${provider.id}-provider`, children: "Email" }), o3("input", { id: `input-email-for-${provider.id}-provider`, autoFocus: true, type: "email", name: "email", value: email2, placeholder: "email@example.com", required: true }), o3("button", { type: "submit", children: ["Sign in with ", provider.name] })] }), provider.type === "credentials" && o3("form", { action: provider.callbackUrl, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), Object.keys(provider.credentials).map((credential) => {
    return o3("div", { children: [o3("label", { className: "section-header", htmlFor: `input-${credential}-for-${provider.id}-provider`, children: provider.credentials[credential].label ?? credential }), o3("input", { name: credential, id: `input-${credential}-for-${provider.id}-provider`, type: provider.credentials[credential].type ?? "text", placeholder: provider.credentials[credential].placeholder ?? "", ...provider.credentials[credential] })] }, `input-group-${provider.id}`);
  }), o3("button", { id: "submitButton", type: "submit", children: ["Sign in with ", provider.name] })] }), (provider.type === "email" || provider.type === "credentials") && i3 + 1 < providers2.length && o3("hr", {})] }, provider.id))] })] });
}
var signinErrors;
var init_signin = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/signin.js"() {
    init_jsxRuntime_module();
    signinErrors = {
      default: "Unable to sign in.",
      signin: "Try signing in with a different account.",
      oauthsignin: "Try signing in with a different account.",
      oauthcallbackerror: "Try signing in with a different account.",
      oauthcreateaccount: "Try signing in with a different account.",
      emailcreateaccount: "Try signing in with a different account.",
      callback: "Try signing in with a different account.",
      oauthaccountnotlinked: "To confirm your identity, sign in with the same account you used originally.",
      emailsignin: "The e-mail could not be sent.",
      credentialssignin: "Sign in failed. Check the details you provided are correct.",
      sessionrequired: "Please sign in to access this page."
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/signout.js
function SignoutPage(props) {
  const { url, csrfToken, theme } = props;
  return o3("div", { className: "signout", children: [theme.brandColor && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
  } }), theme.buttonText && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
  } }), o3("div", { className: "card", children: [theme.logo && o3("img", { src: theme.logo, alt: "Logo", className: "logo" }), o3("h1", { children: "Signout" }), o3("p", { children: "Are you sure you want to sign out?" }), o3("form", { action: `${url}/signout`, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), o3("button", { id: "submitButton", type: "submit", children: "Sign out" })] })] })] });
}
var init_signout = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/signout.js"() {
    init_jsxRuntime_module();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/styles.js
var styles_default;
var init_styles = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/styles.js"() {
    styles_default = `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #ececec;
  --color-background-card: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-separator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #161b22;
  --color-background-card: #0d1117;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-separator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #161b22;
    --color-background-card: #0d1117;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-separator: #444;
  }
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

h1 {
  font-weight: 400;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

p {
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background-card);
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
}

input[type]:focus {
    box-shadow: none;
  }

p {
  margin: 0 0 1.5rem 0;
  padding: 0 1rem;
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button span {
  flex-grow: 1;
}

button,
a.button {
  margin: 0 0 0.75rem 0;
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg, var(--color-background-card));
  font-size: 1.1rem;
  min-height: 62px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  transition: all 0.1s ease-in-out;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 450px) {

button,
a.button {
    font-size: 0.9rem
}
  }

button:hover, a.button:hover {
    cursor: pointer;
  }

button:active, a.button:active {
    cursor: pointer;
  }

button #provider-logo, a.button #provider-logo {
    width: 25px;
    display: block;
  }

button #provider-logo-dark, a.button #provider-logo-dark {
    display: none;
  }

#submitButton {
  color: var(--button-text-color, var(--color-info-text));
  background-color: var(--brand-color, var(--color-info));
  width: 100%;
}

@media (prefers-color-scheme: dark) {
  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary));
    background-color: var(--provider-dark-bg, var(--color-background));
  }
  #provider-logo {
    display: none !important;
  }
  #provider-logo-dark {
    width: 25px;
    display: block !important;
  }
}

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
}

.page > div {
    text-align: center;
  }

.error a.button {
    display: inline-block;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-separator);
    margin: 2rem auto 1rem auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background-card);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.7rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-error);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin > div,
  .signin form {

    max-width: 300px;
}

.logo {
  display: inline-block;
  max-width: 150px;
  margin-top: 20px;
  margin-bottom: 25px;
  max-height: 70px;
}

@media screen and (min-width: 450px) {

.card {
    width: 350px
}
  }

@media screen and (max-width: 450px) {

.card {
    width: 200px
}
  }

.card {
  margin: 20px 0 20px 0;
  background-color: var(--color-background-card);
  border-radius: 30px;
  padding: 20px 50px;
}

.card .header {
    color: var(--color-primary);
  }

.section-header {
  color: var(--color-text);
}
`;
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/verify-request.js
function VerifyRequestPage(props) {
  const { url, theme } = props;
  return o3("div", { className: "verify-request", children: [theme.brandColor && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
  } }), o3("div", { className: "card", children: [theme.logo && o3("img", { src: theme.logo, alt: "Logo", className: "logo" }), o3("h1", { children: "Check your email" }), o3("p", { children: "A sign in link has been sent to your email address." }), o3("p", { children: o3("a", { className: "site", href: url.origin, children: url.host }) })] })] });
}
var init_verify_request = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/verify-request.js"() {
    init_jsxRuntime_module();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/index.js
function send({ html, title, status, cookies, theme }) {
  return {
    cookies,
    status,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${styles_default}</style><title>${title}</title></head><body class="__next-auth-theme-${theme?.colorScheme ?? "auto"}"><div class="page">${k2(html)}</div></body></html>`
  };
}
function renderPage(params) {
  const { url, theme, query, cookies } = params;
  return {
    signin(props) {
      return send({
        cookies,
        theme,
        html: SigninPage({
          csrfToken: params.csrfToken,
          // We only want to render providers
          providers: params.providers?.filter((provider) => (
            // Always render oauth and email type providers
            ["email", "oauth", "oidc"].includes(provider.type) || // Only render credentials type provider if credentials are defined
            provider.type === "credentials" && provider.credentials || // Don't render other provider types
            false
          )),
          callbackUrl: params.callbackUrl,
          theme,
          ...query,
          ...props
        }),
        title: "Sign In"
      });
    },
    signout(props) {
      return send({
        cookies,
        theme,
        html: SignoutPage({
          csrfToken: params.csrfToken,
          url,
          theme,
          ...props
        }),
        title: "Sign Out"
      });
    },
    verifyRequest(props) {
      return send({
        cookies,
        theme,
        html: VerifyRequestPage({ url, theme, ...props }),
        title: "Verify Request"
      });
    },
    error(props) {
      return send({
        cookies,
        theme,
        ...ErrorPage({ url, theme, ...props }),
        title: "Error"
      });
    }
  };
}
var init_pages = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/pages/index.js"() {
    init_dist();
    init_error2();
    init_signin();
    init_signout();
    init_styles();
    init_verify_request();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/date.js
function fromDate(time, date = Date.now()) {
  return new Date(date + time * 1e3);
}
var init_date = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/utils/date.js"() {
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/callback-handler.js
async function handleLogin(sessionToken, _profile, _account, options3) {
  if (!_account?.providerAccountId || !_account.type)
    throw new Error("Missing or invalid provider account");
  if (!["email", "oauth", "oidc"].includes(_account.type))
    throw new Error("Provider not supported");
  const { adapter, jwt: jwt2, events, session: { strategy: sessionStrategy, generateSessionToken } } = options3;
  if (!adapter) {
    return { user: _profile, account: _account };
  }
  const profile = _profile;
  let account = _account;
  const { createUser, updateUser, getUser, getUserByAccount, getUserByEmail, linkAccount, createSession, getSessionAndUser, deleteSession } = adapter;
  let session2 = null;
  let user = null;
  let isNewUser = false;
  const useJwtSession = sessionStrategy === "jwt";
  if (sessionToken) {
    if (useJwtSession) {
      try {
        session2 = await jwt2.decode({ ...jwt2, token: sessionToken });
        if (session2 && "sub" in session2 && session2.sub) {
          user = await getUser(session2.sub);
        }
      } catch {
      }
    } else {
      const userAndSession = await getSessionAndUser(sessionToken);
      if (userAndSession) {
        session2 = userAndSession.session;
        user = userAndSession.user;
      }
    }
  }
  if (account.type === "email") {
    const userByEmail = await getUserByEmail(profile.email);
    if (userByEmail) {
      if (user?.id !== userByEmail.id && !useJwtSession && sessionToken) {
        await deleteSession(sessionToken);
      }
      user = await updateUser({ id: userByEmail.id, emailVerified: /* @__PURE__ */ new Date() });
      await events.updateUser?.({ user });
    } else {
      const { id: _4, ...newUser } = { ...profile, emailVerified: /* @__PURE__ */ new Date() };
      user = await createUser(newUser);
      await events.createUser?.({ user });
      isNewUser = true;
    }
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: fromDate(options3.session.maxAge)
    });
    return { session: session2, user, isNewUser };
  }
  const userByAccount = await getUserByAccount({
    providerAccountId: account.providerAccountId,
    provider: account.provider
  });
  if (userByAccount) {
    if (user) {
      if (userByAccount.id === user.id) {
        return { session: session2, user, isNewUser };
      }
      throw new OAuthAccountNotLinked("The account is already associated with another user", { provider: account.provider });
    }
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: userByAccount.id,
      expires: fromDate(options3.session.maxAge)
    });
    return { session: session2, user: userByAccount, isNewUser };
  } else {
    const { provider: p3 } = options3;
    const { type, provider, providerAccountId, userId, ...tokenSet } = account;
    const defaults = { providerAccountId, provider, type, userId };
    account = Object.assign(p3.account(tokenSet) ?? {}, defaults);
    if (user) {
      await linkAccount({ ...account, userId: user.id });
      await events.linkAccount?.({ user, account, profile });
      return { session: session2, user, isNewUser };
    }
    const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;
    if (userByEmail) {
      const provider2 = options3.provider;
      if (provider2?.allowDangerousEmailAccountLinking) {
        user = userByEmail;
      } else {
        throw new OAuthAccountNotLinked("Another account already exists with the same e-mail address", { provider: account.provider });
      }
    } else {
      const { id: _4, ...newUser } = { ...profile, emailVerified: null };
      user = await createUser(newUser);
    }
    await events.createUser?.({ user });
    await linkAccount({ ...account, userId: user.id });
    await events.linkAccount?.({ user, account, profile });
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: fromDate(options3.session.maxAge)
    });
    return { session: session2, user, isNewUser: true };
  }
}
var init_callback_handler = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/callback-handler.js"() {
    init_errors();
    init_date();
  }
});

// node_modules/.pnpm/oauth4webapi@2.3.0/node_modules/oauth4webapi/build/index.js
function buf(input) {
  if (typeof input === "string") {
    return encoder4.encode(input);
  }
  return decoder3.decode(input);
}
function encodeBase64Url(input) {
  if (input instanceof ArrayBuffer) {
    input = new Uint8Array(input);
  }
  const arr = [];
  for (let i3 = 0; i3 < input.byteLength; i3 += CHUNK_SIZE2) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i3, i3 + CHUNK_SIZE2)));
  }
  return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function decodeBase64Url(input) {
  try {
    const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let i3 = 0; i3 < binary.length; i3++) {
      bytes[i3] = binary.charCodeAt(i3);
    }
    return bytes;
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
function b64u(input) {
  if (typeof input === "string") {
    return decodeBase64Url(input);
  }
  return encodeBase64Url(input);
}
function isCryptoKey2(key2) {
  return key2 instanceof CryptoKey;
}
function isPrivateKey(key2) {
  return isCryptoKey2(key2) && key2.type === "private";
}
function isPublicKey(key2) {
  return isCryptoKey2(key2) && key2.type === "public";
}
function processDpopNonce(response) {
  const url = new URL(response.url);
  if (response.headers.has("dpop-nonce")) {
    dpopNonces.set(url.origin, response.headers.get("dpop-nonce"));
  }
  return response;
}
function isJsonObject(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    return false;
  }
  return true;
}
function prepareHeaders(input) {
  if (input !== void 0 && !(input instanceof Headers)) {
    throw new TypeError('"options.headers" must be an instance of Headers');
  }
  const headers = new Headers(input);
  if (USER_AGENT && !headers.has("user-agent")) {
    headers.set("user-agent", USER_AGENT);
  }
  if (headers.has("authorization")) {
    throw new TypeError('"options.headers" must not include the "authorization" header name');
  }
  if (headers.has("dpop")) {
    throw new TypeError('"options.headers" must not include the "dpop" header name');
  }
  return headers;
}
function signal(value) {
  if (typeof value === "function") {
    value = value();
  }
  if (!(value instanceof AbortSignal)) {
    throw new TypeError('"options.signal" must return or be an instance of AbortSignal');
  }
  return value;
}
async function discoveryRequest(issuerIdentifier, options3) {
  if (!(issuerIdentifier instanceof URL)) {
    throw new TypeError('"issuerIdentifier" must be an instance of URL');
  }
  if (issuerIdentifier.protocol !== "https:" && issuerIdentifier.protocol !== "http:") {
    throw new TypeError('"issuer.protocol" must be "https:" or "http:"');
  }
  const url = new URL(issuerIdentifier.href);
  switch (options3?.algorithm) {
    case void 0:
    case "oidc":
      url.pathname = `${url.pathname}/.well-known/openid-configuration`.replace("//", "/");
      break;
    case "oauth2":
      if (url.pathname === "/") {
        url.pathname = `.well-known/oauth-authorization-server`;
      } else {
        url.pathname = `.well-known/oauth-authorization-server/${url.pathname}`.replace("//", "/");
      }
      break;
    default:
      throw new TypeError('"options.algorithm" must be "oidc" (default), or "oauth2"');
  }
  const headers = prepareHeaders(options3?.headers);
  headers.set("accept", "application/json");
  return fetch(url.href, {
    headers,
    method: "GET",
    redirect: "manual",
    signal: options3?.signal ? signal(options3.signal) : null
  }).then(processDpopNonce);
}
function validateString(input) {
  return typeof input === "string" && input.length !== 0;
}
async function processDiscoveryResponse(expectedIssuerIdentifier, response) {
  if (!(expectedIssuerIdentifier instanceof URL)) {
    throw new TypeError('"expectedIssuer" must be an instance of URL');
  }
  if (!(response instanceof Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (response.status !== 200) {
    throw new OPE('"response" is not a conform Authorization Server Metadata response');
  }
  assertReadableResponse(response);
  let json2;
  try {
    json2 = await response.json();
  } catch {
    throw new OPE('failed to parse "response" body as JSON');
  }
  if (!isJsonObject(json2)) {
    throw new OPE('"response" body must be a top level object');
  }
  if (!validateString(json2.issuer)) {
    throw new OPE('"response" body "issuer" property must be a non-empty string');
  }
  if (new URL(json2.issuer).href !== expectedIssuerIdentifier.href) {
    throw new OPE('"response" body "issuer" does not match "expectedIssuer"');
  }
  return json2;
}
function randomBytes() {
  return b64u(crypto.getRandomValues(new Uint8Array(32)));
}
function generateRandomCodeVerifier() {
  return randomBytes();
}
function generateRandomState() {
  return randomBytes();
}
function generateRandomNonce() {
  return randomBytes();
}
async function calculatePKCECodeChallenge(codeVerifier) {
  if (!validateString(codeVerifier)) {
    throw new TypeError('"codeVerifier" must be a non-empty string');
  }
  return b64u(await crypto.subtle.digest({ name: "SHA-256" }, buf(codeVerifier)));
}
function getKeyAndKid(input) {
  if (input instanceof CryptoKey) {
    return { key: input };
  }
  if (!(input?.key instanceof CryptoKey)) {
    return {};
  }
  if (input.kid !== void 0 && !validateString(input.kid)) {
    throw new TypeError('"kid" must be a non-empty string');
  }
  return { key: input.key, kid: input.kid };
}
function formUrlEncode(token) {
  return encodeURIComponent(token).replace(/%20/g, "+");
}
function clientSecretBasic(clientId, clientSecret) {
  const username = formUrlEncode(clientId);
  const password = formUrlEncode(clientSecret);
  const credentials = btoa(`${username}:${password}`);
  return `Basic ${credentials}`;
}
function psAlg(key2) {
  switch (key2.algorithm.hash.name) {
    case "SHA-256":
      return "PS256";
    case "SHA-384":
      return "PS384";
    case "SHA-512":
      return "PS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
  }
}
function rsAlg(key2) {
  switch (key2.algorithm.hash.name) {
    case "SHA-256":
      return "RS256";
    case "SHA-384":
      return "RS384";
    case "SHA-512":
      return "RS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
  }
}
function esAlg(key2) {
  switch (key2.algorithm.namedCurve) {
    case "P-256":
      return "ES256";
    case "P-384":
      return "ES384";
    case "P-521":
      return "ES512";
    default:
      throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve");
  }
}
function keyToJws(key2) {
  switch (key2.algorithm.name) {
    case "RSA-PSS":
      return psAlg(key2);
    case "RSASSA-PKCS1-v1_5":
      return rsAlg(key2);
    case "ECDSA":
      return esAlg(key2);
    case "Ed25519":
    case "Ed448":
      return "EdDSA";
    default:
      throw new UnsupportedOperationError("unsupported CryptoKey algorithm name");
  }
}
function getClockSkew(client) {
  if (Number.isFinite(client[clockSkew])) {
    return client[clockSkew];
  }
  return 0;
}
function getClockTolerance(client) {
  const tolerance = client[clockTolerance];
  if (Number.isFinite(tolerance) && Math.sign(tolerance) !== -1) {
    return tolerance;
  }
  return 30;
}
function epochTime() {
  return Math.floor(Date.now() / 1e3);
}
function clientAssertion(as, client) {
  const now2 = epochTime() + getClockSkew(client);
  return {
    jti: randomBytes(),
    aud: [as.issuer, as.token_endpoint],
    exp: now2 + 60,
    iat: now2,
    nbf: now2,
    iss: client.client_id,
    sub: client.client_id
  };
}
async function privateKeyJwt(as, client, key2, kid) {
  return jwt({
    alg: keyToJws(key2),
    kid
  }, clientAssertion(as, client), key2);
}
function assertAs(as) {
  if (typeof as !== "object" || as === null) {
    throw new TypeError('"as" must be an object');
  }
  if (!validateString(as.issuer)) {
    throw new TypeError('"as.issuer" property must be a non-empty string');
  }
  return true;
}
function assertClient(client) {
  if (typeof client !== "object" || client === null) {
    throw new TypeError('"client" must be an object');
  }
  if (!validateString(client.client_id)) {
    throw new TypeError('"client.client_id" property must be a non-empty string');
  }
  return true;
}
function assertClientSecret(clientSecret) {
  if (!validateString(clientSecret)) {
    throw new TypeError('"client.client_secret" property must be a non-empty string');
  }
  return clientSecret;
}
function assertNoClientPrivateKey(clientAuthMethod, clientPrivateKey) {
  if (clientPrivateKey !== void 0) {
    throw new TypeError(`"options.clientPrivateKey" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
  }
}
function assertNoClientSecret(clientAuthMethod, clientSecret) {
  if (clientSecret !== void 0) {
    throw new TypeError(`"client.client_secret" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
  }
}
async function clientAuthentication(as, client, body, headers, clientPrivateKey) {
  body.delete("client_secret");
  body.delete("client_assertion_type");
  body.delete("client_assertion");
  switch (client.token_endpoint_auth_method) {
    case void 0:
    case "client_secret_basic": {
      assertNoClientPrivateKey("client_secret_basic", clientPrivateKey);
      headers.set("authorization", clientSecretBasic(client.client_id, assertClientSecret(client.client_secret)));
      break;
    }
    case "client_secret_post": {
      assertNoClientPrivateKey("client_secret_post", clientPrivateKey);
      body.set("client_id", client.client_id);
      body.set("client_secret", assertClientSecret(client.client_secret));
      break;
    }
    case "private_key_jwt": {
      assertNoClientSecret("private_key_jwt", client.client_secret);
      if (clientPrivateKey === void 0) {
        throw new TypeError('"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"');
      }
      const { key: key2, kid } = getKeyAndKid(clientPrivateKey);
      if (!isPrivateKey(key2)) {
        throw new TypeError('"options.clientPrivateKey.key" must be a private CryptoKey');
      }
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", await privateKeyJwt(as, client, key2, kid));
      break;
    }
    case "none": {
      assertNoClientSecret("none", client.client_secret);
      assertNoClientPrivateKey("none", clientPrivateKey);
      body.set("client_id", client.client_id);
      break;
    }
    default:
      throw new UnsupportedOperationError("unsupported client token_endpoint_auth_method");
  }
}
async function jwt(header, claimsSet, key2) {
  if (!key2.usages.includes("sign")) {
    throw new TypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"');
  }
  const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(claimsSet)))}`;
  const signature = b64u(await crypto.subtle.sign(keyToSubtle(key2), key2, buf(input)));
  return `${input}.${signature}`;
}
async function dpopProofJwt(headers, options3, url, htm, clockSkew2, accessToken) {
  const { privateKey, publicKey, nonce: nonce2 = dpopNonces.get(url.origin) } = options3;
  if (!isPrivateKey(privateKey)) {
    throw new TypeError('"DPoP.privateKey" must be a private CryptoKey');
  }
  if (!isPublicKey(publicKey)) {
    throw new TypeError('"DPoP.publicKey" must be a public CryptoKey');
  }
  if (nonce2 !== void 0 && !validateString(nonce2)) {
    throw new TypeError('"DPoP.nonce" must be a non-empty string or undefined');
  }
  if (!publicKey.extractable) {
    throw new TypeError('"DPoP.publicKey.extractable" must be true');
  }
  const now2 = epochTime() + clockSkew2;
  const proof = await jwt({
    alg: keyToJws(privateKey),
    typ: "dpop+jwt",
    jwk: await publicJwk(publicKey)
  }, {
    iat: now2,
    jti: randomBytes(),
    htm,
    nonce: nonce2,
    htu: `${url.origin}${url.pathname}`,
    ath: accessToken ? b64u(await crypto.subtle.digest({ name: "SHA-256" }, buf(accessToken))) : void 0
  }, privateKey);
  headers.set("dpop", proof);
}
async function publicJwk(key2) {
  jwkCache || (jwkCache = /* @__PURE__ */ new WeakMap());
  if (jwkCache.has(key2)) {
    return jwkCache.get(key2);
  }
  const { kty, e: e2, n: n3, x: x2, y: y2, crv } = await crypto.subtle.exportKey("jwk", key2);
  const jwk = { kty, e: e2, n: n3, x: x2, y: y2, crv };
  jwkCache.set(key2, jwk);
  return jwk;
}
function isOAuth2Error(input) {
  const value = input;
  if (typeof value !== "object" || Array.isArray(value) || value === null) {
    return false;
  }
  return value.error !== void 0;
}
function unquote(value) {
  if (value.length >= 2 && value[0] === '"' && value[value.length - 1] === '"') {
    return value.slice(1, -1);
  }
  return value;
}
function wwwAuth(scheme, params) {
  const arr = params.split(SPLIT_REGEXP).slice(1);
  if (!arr.length) {
    return { scheme: scheme.toLowerCase(), parameters: {} };
  }
  arr[arr.length - 1] = arr[arr.length - 1].replace(/,$/, "");
  const parameters = {};
  for (let i3 = 1; i3 < arr.length; i3 += 2) {
    const idx = i3;
    if (arr[idx][0] === '"') {
      while (arr[idx].slice(-1) !== '"' && ++i3 < arr.length) {
        arr[idx] += arr[i3];
      }
    }
    const key2 = arr[idx - 1].replace(/^(?:, ?)|=$/g, "").toLowerCase();
    parameters[key2] = unquote(arr[idx]);
  }
  return {
    scheme: scheme.toLowerCase(),
    parameters
  };
}
function parseWwwAuthenticateChallenges(response) {
  if (!(response instanceof Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (!response.headers.has("www-authenticate")) {
    return void 0;
  }
  const header = response.headers.get("www-authenticate");
  const result = [];
  for (const { 1: scheme, index: index5 } of header.matchAll(SCHEMES_REGEXP)) {
    result.push([scheme, index5]);
  }
  if (!result.length) {
    return void 0;
  }
  const challenges = result.map(([scheme, indexOf], i3, others) => {
    const next = others[i3 + 1];
    let parameters;
    if (next) {
      parameters = header.slice(indexOf, next[1]);
    } else {
      parameters = header.slice(indexOf);
    }
    return wwwAuth(scheme, parameters);
  });
  return challenges;
}
async function protectedResourceRequest(accessToken, method, url, headers, body, options3) {
  if (!validateString(accessToken)) {
    throw new TypeError('"accessToken" must be a non-empty string');
  }
  if (!(url instanceof URL)) {
    throw new TypeError('"url" must be an instance of URL');
  }
  headers = prepareHeaders(headers);
  if (options3?.DPoP === void 0) {
    headers.set("authorization", `Bearer ${accessToken}`);
  } else {
    await dpopProofJwt(headers, options3.DPoP, url, "GET", getClockSkew({ [clockSkew]: options3?.clockSkew }), accessToken);
    headers.set("authorization", `DPoP ${accessToken}`);
  }
  return fetch(url.href, {
    body,
    headers,
    method,
    redirect: "manual",
    signal: options3?.signal ? signal(options3.signal) : null
  }).then(processDpopNonce);
}
async function userInfoRequest(as, client, accessToken, options3) {
  assertAs(as);
  assertClient(client);
  if (typeof as.userinfo_endpoint !== "string") {
    throw new TypeError('"as.userinfo_endpoint" must be a string');
  }
  const url = new URL(as.userinfo_endpoint);
  const headers = prepareHeaders(options3?.headers);
  if (client.userinfo_signed_response_alg) {
    headers.set("accept", "application/jwt");
  } else {
    headers.set("accept", "application/json");
    headers.append("accept", "application/jwt");
  }
  return protectedResourceRequest(accessToken, "GET", url, headers, null, {
    ...options3,
    clockSkew: getClockSkew(client)
  });
}
async function authenticatedRequest(as, client, method, url, body, headers, options3) {
  await clientAuthentication(as, client, body, headers, options3?.clientPrivateKey);
  headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
  return fetch(url.href, {
    body,
    headers,
    method,
    redirect: "manual",
    signal: options3?.signal ? signal(options3.signal) : null
  }).then(processDpopNonce);
}
async function tokenEndpointRequest(as, client, grantType, parameters, options3) {
  if (typeof as.token_endpoint !== "string") {
    throw new TypeError('"as.token_endpoint" must be a string');
  }
  const url = new URL(as.token_endpoint);
  parameters.set("grant_type", grantType);
  const headers = prepareHeaders(options3?.headers);
  headers.set("accept", "application/json");
  if (options3?.DPoP !== void 0) {
    await dpopProofJwt(headers, options3.DPoP, url, "POST", getClockSkew(client));
  }
  return authenticatedRequest(as, client, "POST", url, parameters, headers, options3);
}
function getValidatedIdTokenClaims(ref) {
  if (!ref.id_token) {
    return void 0;
  }
  const claims = idTokenClaims.get(ref);
  if (!claims) {
    throw new TypeError('"ref" was already garbage collected or did not resolve from the proper sources');
  }
  return claims;
}
async function processGenericAccessTokenResponse(as, client, response, ignoreIdToken = false, ignoreRefreshToken = false) {
  assertAs(as);
  assertClient(client);
  if (!(response instanceof Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (response.status !== 200) {
    let err;
    if (err = await handleOAuthBodyError(response)) {
      return err;
    }
    throw new OPE('"response" is not a conform Token Endpoint response');
  }
  assertReadableResponse(response);
  let json2;
  try {
    json2 = await response.json();
  } catch {
    throw new OPE('failed to parse "response" body as JSON');
  }
  if (!isJsonObject(json2)) {
    throw new OPE('"response" body must be a top level object');
  }
  if (!validateString(json2.access_token)) {
    throw new OPE('"response" body "access_token" property must be a non-empty string');
  }
  if (!validateString(json2.token_type)) {
    throw new OPE('"response" body "token_type" property must be a non-empty string');
  }
  json2.token_type = json2.token_type.toLowerCase();
  if (json2.token_type !== "dpop" && json2.token_type !== "bearer") {
    throw new UnsupportedOperationError("unsupported `token_type` value");
  }
  if (json2.expires_in !== void 0 && (typeof json2.expires_in !== "number" || json2.expires_in <= 0)) {
    throw new OPE('"response" body "expires_in" property must be a positive number');
  }
  if (!ignoreRefreshToken && json2.refresh_token !== void 0 && !validateString(json2.refresh_token)) {
    throw new OPE('"response" body "refresh_token" property must be a non-empty string');
  }
  if (json2.scope !== void 0 && typeof json2.scope !== "string") {
    throw new OPE('"response" body "scope" property must be a string');
  }
  if (!ignoreIdToken) {
    if (json2.id_token !== void 0 && !validateString(json2.id_token)) {
      throw new OPE('"response" body "id_token" property must be a non-empty string');
    }
    if (json2.id_token) {
      const { claims } = await validateJwt(json2.id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported), noSignatureCheck, getClockSkew(client), getClockTolerance(client)).then(validatePresence.bind(void 0, ["aud", "exp", "iat", "iss", "sub"])).then(validateIssuer.bind(void 0, as.issuer)).then(validateAudience.bind(void 0, client.client_id));
      if (Array.isArray(claims.aud) && claims.aud.length !== 1 && claims.azp !== client.client_id) {
        throw new OPE('unexpected ID Token "azp" (authorized party) claim value');
      }
      if (client.require_auth_time && typeof claims.auth_time !== "number") {
        throw new OPE('unexpected ID Token "auth_time" (authentication time) claim value');
      }
      idTokenClaims.set(json2, claims);
    }
  }
  return json2;
}
function validateAudience(expected, result) {
  if (Array.isArray(result.claims.aud)) {
    if (!result.claims.aud.includes(expected)) {
      throw new OPE('unexpected JWT "aud" (audience) claim value');
    }
  } else if (result.claims.aud !== expected) {
    throw new OPE('unexpected JWT "aud" (audience) claim value');
  }
  return result;
}
function validateIssuer(expected, result) {
  if (result.claims.iss !== expected) {
    throw new OPE('unexpected JWT "iss" (issuer) claim value');
  }
  return result;
}
function brand(searchParams) {
  branded.add(searchParams);
  return searchParams;
}
async function authorizationCodeGrantRequest(as, client, callbackParameters, redirectUri, codeVerifier, options3) {
  assertAs(as);
  assertClient(client);
  if (!branded.has(callbackParameters)) {
    throw new TypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()');
  }
  if (!validateString(redirectUri)) {
    throw new TypeError('"redirectUri" must be a non-empty string');
  }
  if (!validateString(codeVerifier)) {
    throw new TypeError('"codeVerifier" must be a non-empty string');
  }
  const code2 = getURLSearchParameter(callbackParameters, "code");
  if (!code2) {
    throw new OPE('no authorization code in "callbackParameters"');
  }
  const parameters = new URLSearchParams(options3?.additionalParameters);
  parameters.set("redirect_uri", redirectUri);
  parameters.set("code_verifier", codeVerifier);
  parameters.set("code", code2);
  return tokenEndpointRequest(as, client, "authorization_code", parameters, options3);
}
function validatePresence(required, result) {
  for (const claim of required) {
    if (result.claims[claim] === void 0) {
      throw new OPE(`JWT "${claim}" (${claimNames[claim]}) claim missing`);
    }
  }
  return result;
}
async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge) {
  const result = await processGenericAccessTokenResponse(as, client, response);
  if (isOAuth2Error(result)) {
    return result;
  }
  if (!validateString(result.id_token)) {
    throw new OPE('"response" body "id_token" property must be a non-empty string');
  }
  maxAge ?? (maxAge = client.default_max_age ?? skipAuthTimeCheck);
  const claims = getValidatedIdTokenClaims(result);
  if ((client.require_auth_time || maxAge !== skipAuthTimeCheck) && claims.auth_time === void 0) {
    throw new OPE('ID Token "auth_time" (authentication time) claim missing');
  }
  if (maxAge !== skipAuthTimeCheck) {
    if (typeof maxAge !== "number" || maxAge < 0) {
      throw new TypeError('"options.max_age" must be a non-negative number');
    }
    const now2 = epochTime() + getClockSkew(client);
    const tolerance = getClockTolerance(client);
    if (claims.auth_time + maxAge < now2 - tolerance) {
      throw new OPE("too much time has elapsed since the last End-User authentication");
    }
  }
  switch (expectedNonce) {
    case void 0:
    case expectNoNonce:
      if (claims.nonce !== void 0) {
        throw new OPE('unexpected ID Token "nonce" claim value');
      }
      break;
    default:
      if (!validateString(expectedNonce)) {
        throw new TypeError('"expectedNonce" must be a non-empty string');
      }
      if (claims.nonce === void 0) {
        throw new OPE('ID Token "nonce" claim missing');
      }
      if (claims.nonce !== expectedNonce) {
        throw new OPE('unexpected ID Token "nonce" claim value');
      }
  }
  return result;
}
async function processAuthorizationCodeOAuth2Response(as, client, response) {
  const result = await processGenericAccessTokenResponse(as, client, response, true);
  if (isOAuth2Error(result)) {
    return result;
  }
  if (result.id_token !== void 0) {
    if (typeof result.id_token === "string" && result.id_token.length) {
      throw new OPE("Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing");
    }
    delete result.id_token;
  }
  return result;
}
function assertReadableResponse(response) {
  if (response.bodyUsed) {
    throw new TypeError('"response" body has been used already');
  }
}
async function handleOAuthBodyError(response) {
  if (response.status > 399 && response.status < 500) {
    assertReadableResponse(response);
    try {
      const json2 = await response.json();
      if (isJsonObject(json2) && typeof json2.error === "string" && json2.error.length) {
        if (json2.error_description !== void 0 && typeof json2.error_description !== "string") {
          delete json2.error_description;
        }
        if (json2.error_uri !== void 0 && typeof json2.error_uri !== "string") {
          delete json2.error_uri;
        }
        if (json2.algs !== void 0 && typeof json2.algs !== "string") {
          delete json2.algs;
        }
        if (json2.scope !== void 0 && typeof json2.scope !== "string") {
          delete json2.scope;
        }
        return json2;
      }
    } catch {
    }
  }
  return void 0;
}
function checkRsaKeyAlgorithm(algorithm) {
  if (typeof algorithm.modulusLength !== "number" || algorithm.modulusLength < 2048) {
    throw new OPE(`${algorithm.name} modulusLength must be at least 2048 bits`);
  }
}
function ecdsaHashName(namedCurve) {
  switch (namedCurve) {
    case "P-256":
      return "SHA-256";
    case "P-384":
      return "SHA-384";
    case "P-521":
      return "SHA-512";
    default:
      throw new UnsupportedOperationError();
  }
}
function keyToSubtle(key2) {
  switch (key2.algorithm.name) {
    case "ECDSA":
      return {
        name: key2.algorithm.name,
        hash: { name: ecdsaHashName(key2.algorithm.namedCurve) }
      };
    case "RSA-PSS": {
      checkRsaKeyAlgorithm(key2.algorithm);
      switch (key2.algorithm.hash.name) {
        case "SHA-256":
        case "SHA-384":
        case "SHA-512":
          return {
            name: key2.algorithm.name,
            saltLength: parseInt(key2.algorithm.hash.name.slice(-3), 10) >> 3
          };
        default:
          throw new UnsupportedOperationError();
      }
    }
    case "RSASSA-PKCS1-v1_5":
      checkRsaKeyAlgorithm(key2.algorithm);
      return { name: key2.algorithm.name };
    case "Ed448":
    case "Ed25519":
      return { name: key2.algorithm.name };
  }
  throw new UnsupportedOperationError();
}
async function validateJwt(jws, checkAlg, getKey, clockSkew2, clockTolerance2) {
  const { 0: protectedHeader, 1: payload, 2: encodedSignature, length } = jws.split(".");
  if (length === 5) {
    throw new UnsupportedOperationError("JWE structure JWTs are not supported");
  }
  if (length !== 3) {
    throw new OPE("Invalid JWT");
  }
  let header;
  try {
    header = JSON.parse(buf(b64u(protectedHeader)));
  } catch {
    throw new OPE("failed to parse JWT Header body as base64url encoded JSON");
  }
  if (!isJsonObject(header)) {
    throw new OPE("JWT Header must be a top level object");
  }
  checkAlg(header);
  if (header.crit !== void 0) {
    throw new OPE('unexpected JWT "crit" header parameter');
  }
  const signature = b64u(encodedSignature);
  if (getKey !== noSignatureCheck) {
    const key2 = await getKey(header);
    const input = `${protectedHeader}.${payload}`;
    const verified = await crypto.subtle.verify(keyToSubtle(key2), key2, signature, buf(input));
    if (!verified) {
      throw new OPE("JWT signature verification failed");
    }
  }
  let claims;
  try {
    claims = JSON.parse(buf(b64u(payload)));
  } catch {
    throw new OPE("failed to parse JWT Payload body as base64url encoded JSON");
  }
  if (!isJsonObject(claims)) {
    throw new OPE("JWT Payload must be a top level object");
  }
  const now2 = epochTime() + clockSkew2;
  if (claims.exp !== void 0) {
    if (typeof claims.exp !== "number") {
      throw new OPE('unexpected JWT "exp" (expiration time) claim type');
    }
    if (claims.exp <= now2 - clockTolerance2) {
      throw new OPE('unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()');
    }
  }
  if (claims.iat !== void 0) {
    if (typeof claims.iat !== "number") {
      throw new OPE('unexpected JWT "iat" (issued at) claim type');
    }
  }
  if (claims.iss !== void 0) {
    if (typeof claims.iss !== "string") {
      throw new OPE('unexpected JWT "iss" (issuer) claim type');
    }
  }
  if (claims.nbf !== void 0) {
    if (typeof claims.nbf !== "number") {
      throw new OPE('unexpected JWT "nbf" (not before) claim type');
    }
    if (claims.nbf > now2 + clockTolerance2) {
      throw new OPE('unexpected JWT "nbf" (not before) claim value, timestamp is > now()');
    }
  }
  if (claims.aud !== void 0) {
    if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) {
      throw new OPE('unexpected JWT "aud" (audience) claim type');
    }
  }
  return { header, claims, signature };
}
function checkSigningAlgorithm(client, issuer, header) {
  if (client !== void 0) {
    if (header.alg !== client) {
      throw new OPE('unexpected JWT "alg" header parameter');
    }
    return;
  }
  if (Array.isArray(issuer)) {
    if (!issuer.includes(header.alg)) {
      throw new OPE('unexpected JWT "alg" header parameter');
    }
    return;
  }
  if (header.alg !== "RS256") {
    throw new OPE('unexpected JWT "alg" header parameter');
  }
}
function getURLSearchParameter(parameters, name) {
  const { 0: value, length } = parameters.getAll(name);
  if (length > 1) {
    throw new OPE(`"${name}" parameter must be provided only once`);
  }
  return value;
}
function validateAuthResponse(as, client, parameters, expectedState) {
  assertAs(as);
  assertClient(client);
  if (parameters instanceof URL) {
    parameters = parameters.searchParams;
  }
  if (!(parameters instanceof URLSearchParams)) {
    throw new TypeError('"parameters" must be an instance of URLSearchParams, or URL');
  }
  if (getURLSearchParameter(parameters, "response")) {
    throw new OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()');
  }
  const iss = getURLSearchParameter(parameters, "iss");
  const state2 = getURLSearchParameter(parameters, "state");
  if (!iss && as.authorization_response_iss_parameter_supported) {
    throw new OPE('response parameter "iss" (issuer) missing');
  }
  if (iss && iss !== as.issuer) {
    throw new OPE('unexpected "iss" (issuer) response parameter value');
  }
  switch (expectedState) {
    case void 0:
    case expectNoState:
      if (state2 !== void 0) {
        throw new OPE('unexpected "state" response parameter encountered');
      }
      break;
    case skipStateCheck:
      break;
    default:
      if (!validateString(expectedState)) {
        throw new OPE('"expectedState" must be a non-empty string');
      }
      if (state2 === void 0) {
        throw new OPE('response parameter "state" missing');
      }
      if (state2 !== expectedState) {
        throw new OPE('unexpected "state" response parameter value');
      }
  }
  const error2 = getURLSearchParameter(parameters, "error");
  if (error2) {
    return {
      error: error2,
      error_description: getURLSearchParameter(parameters, "error_description"),
      error_uri: getURLSearchParameter(parameters, "error_uri")
    };
  }
  const id_token = getURLSearchParameter(parameters, "id_token");
  const token = getURLSearchParameter(parameters, "token");
  if (id_token !== void 0 || token !== void 0) {
    throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
  }
  return brand(new URLSearchParams(parameters));
}
var USER_AGENT, clockSkew, clockTolerance, encoder4, decoder3, CHUNK_SIZE2, LRU, UnsupportedOperationError, OperationProcessingError, OPE, dpopNonces, jwkCache, SPLIT_REGEXP, SCHEMES_REGEXP, skipSubjectCheck, idTokenClaims, branded, claimNames, expectNoNonce, skipAuthTimeCheck, noSignatureCheck, skipStateCheck, expectNoState;
var init_build = __esm({
  "node_modules/.pnpm/oauth4webapi@2.3.0/node_modules/oauth4webapi/build/index.js"() {
    if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
      const NAME = "oauth4webapi";
      const VERSION2 = "v2.3.0";
      USER_AGENT = `${NAME}/${VERSION2}`;
    }
    clockSkew = Symbol();
    clockTolerance = Symbol();
    encoder4 = new TextEncoder();
    decoder3 = new TextDecoder();
    CHUNK_SIZE2 = 32768;
    LRU = class {
      constructor(maxSize) {
        this.cache = /* @__PURE__ */ new Map();
        this._cache = /* @__PURE__ */ new Map();
        this.maxSize = maxSize;
      }
      get(key2) {
        let v3 = this.cache.get(key2);
        if (v3) {
          return v3;
        }
        if (v3 = this._cache.get(key2)) {
          this.update(key2, v3);
          return v3;
        }
        return void 0;
      }
      has(key2) {
        return this.cache.has(key2) || this._cache.has(key2);
      }
      set(key2, value) {
        if (this.cache.has(key2)) {
          this.cache.set(key2, value);
        } else {
          this.update(key2, value);
        }
        return this;
      }
      delete(key2) {
        if (this.cache.has(key2)) {
          return this.cache.delete(key2);
        }
        if (this._cache.has(key2)) {
          return this._cache.delete(key2);
        }
        return false;
      }
      update(key2, value) {
        this.cache.set(key2, value);
        if (this.cache.size >= this.maxSize) {
          this._cache = this.cache;
          this.cache = /* @__PURE__ */ new Map();
        }
      }
    };
    UnsupportedOperationError = class extends Error {
      constructor(message2) {
        super(message2 ?? "operation not supported");
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    OperationProcessingError = class extends Error {
      constructor(message2) {
        super(message2);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    OPE = OperationProcessingError;
    dpopNonces = new LRU(100);
    SPLIT_REGEXP = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/;
    SCHEMES_REGEXP = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
    skipSubjectCheck = Symbol();
    idTokenClaims = /* @__PURE__ */ new WeakMap();
    branded = /* @__PURE__ */ new WeakSet();
    claimNames = {
      aud: "audience",
      exp: "expiration time",
      iat: "issued at",
      iss: "issuer",
      sub: "subject"
    };
    expectNoNonce = Symbol();
    skipAuthTimeCheck = Symbol();
    noSignatureCheck = Symbol();
    skipStateCheck = Symbol();
    expectNoState = Symbol();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/checks.js
async function signCookie(type, value, maxAge, options3, data2) {
  const { cookies, logger: logger2 } = options3;
  logger2.debug(`CREATE_${type.toUpperCase()}`, { value, maxAge });
  const expires = /* @__PURE__ */ new Date();
  expires.setTime(expires.getTime() + maxAge * 1e3);
  const token = { value };
  if (type === "state" && data2)
    token.data = data2;
  return {
    name: cookies[type].name,
    value: await encode4({ ...options3.jwt, maxAge, token }),
    options: { ...cookies[type].options, expires }
  };
}
function decodeState(value) {
  try {
    const decoder4 = new TextDecoder();
    return JSON.parse(decoder4.decode(base64url_exports2.decode(value)));
  } catch {
  }
}
var PKCE_MAX_AGE, pkce, STATE_MAX_AGE, state, NONCE_MAX_AGE, nonce;
var init_checks = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/checks.js"() {
    init_browser();
    init_build();
    init_errors();
    init_jwt();
    PKCE_MAX_AGE = 60 * 15;
    pkce = {
      async create(options3) {
        const code_verifier = generateRandomCodeVerifier();
        const value = await calculatePKCECodeChallenge(code_verifier);
        const maxAge = PKCE_MAX_AGE;
        const cookie = await signCookie("pkceCodeVerifier", code_verifier, maxAge, options3);
        return { cookie, value };
      },
      /**
       * Returns code_verifier if the provider is configured to use PKCE,
       * and clears the container cookie afterwards.
       * An error is thrown if the code_verifier is missing or invalid.
       * @see https://www.rfc-editor.org/rfc/rfc7636
       * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#pkce
       */
      async use(cookies, resCookies, options3) {
        const { provider } = options3;
        if (!provider?.checks?.includes("pkce"))
          return;
        const codeVerifier = cookies?.[options3.cookies.pkceCodeVerifier.name];
        if (!codeVerifier)
          throw new InvalidCheck("PKCE code_verifier cookie was missing.");
        const value = await decode4({
          ...options3.jwt,
          token: codeVerifier
        });
        if (!value?.value)
          throw new InvalidCheck("PKCE code_verifier value could not be parsed.");
        resCookies.push({
          name: options3.cookies.pkceCodeVerifier.name,
          value: "",
          options: { ...options3.cookies.pkceCodeVerifier.options, maxAge: 0 }
        });
        return value.value;
      }
    };
    STATE_MAX_AGE = 60 * 15;
    state = {
      async create(options3, data2) {
        const { provider } = options3;
        if (!provider.checks.includes("state")) {
          if (data2) {
            throw new InvalidCheck("State data was provided but the provider is not configured to use state.");
          }
          return;
        }
        const encodedState = base64url_exports2.encode(JSON.stringify({ ...data2, random: generateRandomState() }));
        const maxAge = STATE_MAX_AGE;
        const cookie = await signCookie("state", encodedState, maxAge, options3, data2);
        return { cookie, value: encodedState };
      },
      /**
       * Returns state if the provider is configured to use state,
       * and clears the container cookie afterwards.
       * An error is thrown if the state is missing or invalid.
       * @see https://www.rfc-editor.org/rfc/rfc6749#section-10.12
       * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.1
       */
      async use(cookies, resCookies, options3, paramRandom) {
        const { provider } = options3;
        if (!provider.checks.includes("state"))
          return;
        const state2 = cookies?.[options3.cookies.state.name];
        if (!state2)
          throw new InvalidCheck("State cookie was missing.");
        const encodedState = await decode4({
          ...options3.jwt,
          token: state2
        });
        if (!encodedState?.value)
          throw new InvalidCheck("State (cookie) value could not be parsed.");
        const decodedState = decodeState(encodedState.value);
        if (!decodedState)
          throw new InvalidCheck("State (encoded) value could not be parsed.");
        if (decodedState.random !== paramRandom)
          throw new InvalidCheck(`Random state values did not match. Expected: ${decodedState.random}. Got: ${paramRandom}`);
        resCookies.push({
          name: options3.cookies.state.name,
          value: "",
          options: { ...options3.cookies.state.options, maxAge: 0 }
        });
        return encodedState.value;
      }
    };
    NONCE_MAX_AGE = 60 * 15;
    nonce = {
      async create(options3) {
        if (!options3.provider.checks.includes("nonce"))
          return;
        const value = generateRandomNonce();
        const maxAge = NONCE_MAX_AGE;
        const cookie = await signCookie("nonce", value, maxAge, options3);
        return { cookie, value };
      },
      /**
       * Returns nonce if the provider is configured to use nonce,
       * and clears the container cookie afterwards.
       * An error is thrown if the nonce is missing or invalid.
       * @see https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes
       * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#nonce
       */
      async use(cookies, resCookies, options3) {
        const { provider } = options3;
        if (!provider?.checks?.includes("nonce"))
          return;
        const nonce2 = cookies?.[options3.cookies.nonce.name];
        if (!nonce2)
          throw new InvalidCheck("Nonce cookie was missing.");
        const value = await decode4({ ...options3.jwt, token: nonce2 });
        if (!value?.value)
          throw new InvalidCheck("Nonce value could not be parsed.");
        resCookies.push({
          name: options3.cookies.nonce.name,
          value: "",
          options: { ...options3.cookies.nonce.options, maxAge: 0 }
        });
        return value.value;
      }
    };
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/callback.js
async function handleOAuth(query, cookies, options3, randomState) {
  const { logger: logger2, provider } = options3;
  let as;
  const { token, userinfo } = provider;
  if ((!token?.url || token.url.host === "authjs.dev") && (!userinfo?.url || userinfo.url.host === "authjs.dev")) {
    const issuer = new URL(provider.issuer);
    const discoveryResponse = await discoveryRequest(issuer);
    const discoveredAs = await processDiscoveryResponse(issuer, discoveryResponse);
    if (!discoveredAs.token_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a token endpoint.");
    if (!discoveredAs.userinfo_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a userinfo endpoint.");
    as = discoveredAs;
  } else {
    as = {
      issuer: provider.issuer ?? "https://authjs.dev",
      token_endpoint: token?.url.toString(),
      userinfo_endpoint: userinfo?.url.toString()
    };
  }
  const client = {
    client_id: provider.clientId,
    client_secret: provider.clientSecret,
    ...provider.client
  };
  const resCookies = [];
  const state2 = await state.use(cookies, resCookies, options3, randomState);
  const codeGrantParams = validateAuthResponse(as, client, new URLSearchParams(query), provider.checks.includes("state") ? state2 : skipStateCheck);
  if (isOAuth2Error(codeGrantParams)) {
    const cause = { providerId: provider.id, ...codeGrantParams };
    logger2.debug("OAuthCallbackError", cause);
    throw new OAuthCallbackError("OAuth Provider returned an error", cause);
  }
  const codeVerifier = await pkce.use(cookies, resCookies, options3);
  let redirect_uri = provider.callbackUrl;
  if (!options3.isOnRedirectProxy && provider.redirectProxyUrl) {
    redirect_uri = provider.redirectProxyUrl;
  }
  let codeGrantResponse = await authorizationCodeGrantRequest(
    as,
    client,
    codeGrantParams,
    redirect_uri,
    codeVerifier ?? "auth"
    // TODO: review fallback code verifier
  );
  if (provider.token?.conform) {
    codeGrantResponse = await provider.token.conform(codeGrantResponse.clone()) ?? codeGrantResponse;
  }
  let challenges;
  if (challenges = parseWwwAuthenticateChallenges(codeGrantResponse)) {
    for (const challenge of challenges) {
      console.log("challenge", challenge);
    }
    throw new Error("TODO: Handle www-authenticate challenges as needed");
  }
  let profile;
  let tokens;
  if (provider.type === "oidc") {
    const nonce2 = await nonce.use(cookies, resCookies, options3);
    const result = await processAuthorizationCodeOpenIDResponse(as, client, codeGrantResponse, nonce2 ?? expectNoNonce);
    if (isOAuth2Error(result)) {
      console.log("error", result);
      throw new Error("TODO: Handle OIDC response body error");
    }
    profile = getValidatedIdTokenClaims(result);
    tokens = result;
  } else {
    tokens = await processAuthorizationCodeOAuth2Response(as, client, codeGrantResponse);
    if (isOAuth2Error(tokens)) {
      console.log("error", tokens);
      throw new Error("TODO: Handle OAuth 2.0 response body error");
    }
    if (userinfo?.request) {
      profile = await userinfo.request({ tokens, provider });
    } else if (userinfo?.url) {
      const userinfoResponse = await userInfoRequest(as, client, tokens.access_token);
      profile = await userinfoResponse.json();
    } else {
      throw new TypeError("No userinfo endpoint configured");
    }
  }
  if (tokens.expires_in) {
    tokens.expires_at = Math.floor(Date.now() / 1e3) + Number(tokens.expires_in);
  }
  const profileResult = await getUserAndAccount(profile, provider, tokens, logger2);
  return { ...profileResult, profile, cookies: resCookies };
}
async function getUserAndAccount(OAuthProfile, provider, tokens, logger2) {
  try {
    const user = await provider.profile(OAuthProfile, tokens);
    user.email = user.email?.toLowerCase();
    if (!user.id) {
      throw new TypeError(`User id is missing in ${provider.name} OAuth profile response`);
    }
    return {
      user,
      account: {
        provider: provider.id,
        type: provider.type,
        providerAccountId: user.id.toString(),
        ...tokens
      }
    };
  } catch (e2) {
    logger2.debug("getProfile error details", OAuthProfile);
    logger2.error(new OAuthProfileParseError(e2, { provider: provider.id }));
  }
}
var init_callback = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/callback.js"() {
    init_checks();
    init_build();
    init_errors();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/handle-state.js
function handleState(query, provider, isOnRedirectProxy) {
  let randomState;
  let proxyRedirect;
  if (provider.redirectProxyUrl && !query?.state) {
    throw new InvalidCheck("Missing state in query, but required for redirect proxy");
  }
  const state2 = decodeState(query?.state);
  randomState = state2?.random;
  if (isOnRedirectProxy) {
    if (!state2?.origin)
      return { randomState };
    proxyRedirect = `${state2.origin}?${new URLSearchParams(query)}`;
  }
  return { randomState, proxyRedirect };
}
var init_handle_state = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/handle-state.js"() {
    init_errors();
    init_checks();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/shared.js
async function handleAuthorized(params, { url, logger: logger2, callbacks: { signIn } }) {
  try {
    const authorized = await signIn(params);
    if (!authorized) {
      url.pathname += "/error";
      logger2.debug("User not authorized", params);
      url.searchParams.set("error", "AccessDenied");
      return { status: 403, redirect: url.toString() };
    }
  } catch (e2) {
    url.pathname += "/error";
    const error2 = new AuthorizedCallbackError(e2);
    logger2.error(error2);
    url.searchParams.set("error", "Configuration");
    return { status: 500, redirect: url.toString() };
  }
}
var init_shared = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/shared.js"() {
    init_errors();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/callback.js
async function callback(params) {
  const { options: options3, query, body, method, headers, sessionStore } = params;
  const { provider, adapter, url, callbackUrl, pages, jwt: jwt2, events, callbacks, session: { strategy: sessionStrategy, maxAge: sessionMaxAge }, logger: logger2 } = options3;
  const cookies = [];
  const useJwtSession = sessionStrategy === "jwt";
  try {
    if (provider.type === "oauth" || provider.type === "oidc") {
      const { proxyRedirect, randomState } = handleState(query, provider, options3.isOnRedirectProxy);
      if (proxyRedirect) {
        logger2.debug("proxy redirect", { proxyRedirect, randomState });
        return { redirect: proxyRedirect };
      }
      const authorizationResult = await handleOAuth(query, params.cookies, options3, randomState);
      if (authorizationResult.cookies.length) {
        cookies.push(...authorizationResult.cookies);
      }
      logger2.debug("authorization result", authorizationResult);
      const { user: userFromProvider, account, profile: OAuthProfile } = authorizationResult;
      if (!userFromProvider || !account || !OAuthProfile) {
        return { redirect: `${url}/signin`, cookies };
      }
      let userByAccountOrFromProvider;
      if (adapter) {
        const { getUserByAccount } = adapter;
        const userByAccount = await getUserByAccount({
          providerAccountId: account.providerAccountId,
          provider: provider.id
        });
        if (userByAccount)
          userByAccountOrFromProvider = userByAccount;
      }
      const unauthorizedOrError = await handleAuthorized({
        user: userByAccountOrFromProvider,
        account,
        profile: OAuthProfile
      }, options3);
      if (unauthorizedOrError)
        return { ...unauthorizedOrError, cookies };
      const { user, session: session2, isNewUser } = await handleLogin(sessionStore.value, userFromProvider, account, options3);
      if (useJwtSession) {
        const defaultToken = {
          name: user.name,
          email: user.email,
          picture: user.image,
          sub: user.id?.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user,
          account,
          profile: OAuthProfile,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const newToken = await jwt2.encode({ ...jwt2, token });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options3.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options3.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({ user, account, profile: OAuthProfile, isNewUser });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "email") {
      const token = query?.token;
      const identifier = query?.email;
      if (!token || !identifier) {
        const e2 = new TypeError("Missing token or email. The sign-in URL was manually opened without token/identifier or the link was not sent correctly in the email.", { cause: { hasToken: !!token, hasEmail: !!identifier } });
        e2.name = "Configuration";
        throw e2;
      }
      const secret = provider.secret ?? options3.secret;
      const invite = await adapter.useVerificationToken({
        identifier,
        token: await createHash(`${token}${secret}`)
      });
      const hasInvite = !!invite;
      const expired = invite ? invite.expires.valueOf() < Date.now() : void 0;
      const invalidInvite = !hasInvite || expired;
      if (invalidInvite)
        throw new Verification({ hasInvite, expired });
      const user = await adapter.getUserByEmail(identifier) ?? {
        id: identifier,
        email: identifier,
        emailVerified: null
      };
      const account = {
        providerAccountId: user.email,
        userId: user.id,
        type: "email",
        provider: provider.id
      };
      const unauthorizedOrError = await handleAuthorized({ user, account }, options3);
      if (unauthorizedOrError)
        return { ...unauthorizedOrError, cookies };
      const { user: loggedInUser, session: session2, isNewUser } = await handleLogin(sessionStore.value, user, account, options3);
      if (useJwtSession) {
        const defaultToken = {
          name: loggedInUser.name,
          email: loggedInUser.email,
          picture: loggedInUser.image,
          sub: loggedInUser.id?.toString()
        };
        const token2 = await callbacks.jwt({
          token: defaultToken,
          user: loggedInUser,
          account,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token2 === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const newToken = await jwt2.encode({ ...jwt2, token: token2 });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options3.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options3.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({ user: loggedInUser, account, isNewUser });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "credentials" && method === "POST") {
      const credentials = body ?? {};
      Object.entries(query ?? {}).forEach(([k3, v3]) => url.searchParams.set(k3, v3));
      const user = await provider.authorize(
        credentials,
        // prettier-ignore
        new Request(url, { headers, method, body: JSON.stringify(body) })
      );
      if (!user) {
        return {
          status: 401,
          redirect: `${url}/error?${new URLSearchParams({
            error: "CredentialsSignin",
            provider: provider.id
          })}`,
          cookies
        };
      }
      const account = {
        providerAccountId: user.id,
        type: "credentials",
        provider: provider.id
      };
      const unauthorizedOrError = await handleAuthorized({ user, account, credentials }, options3);
      if (unauthorizedOrError)
        return { ...unauthorizedOrError, cookies };
      const defaultToken = {
        name: user.name,
        email: user.email,
        picture: user.image,
        sub: user.id?.toString()
      };
      const token = await callbacks.jwt({
        token: defaultToken,
        user,
        // @ts-expect-error
        account,
        isNewUser: false,
        trigger: "signIn"
      });
      if (token === null) {
        cookies.push(...sessionStore.clean());
      } else {
        const newToken = await jwt2.encode({ ...jwt2, token });
        const cookieExpires = /* @__PURE__ */ new Date();
        cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
        const sessionCookies = sessionStore.chunk(newToken, {
          expires: cookieExpires
        });
        cookies.push(...sessionCookies);
      }
      await events.signIn?.({ user, account });
      return { redirect: callbackUrl, cookies };
    }
    return {
      status: 500,
      body: `Error: Callback for provider type ${provider.type} not supported`,
      cookies
    };
  } catch (e2) {
    if (e2 instanceof OAuthCallbackError) {
      logger2.error(e2);
      url.searchParams.set("error", OAuthCallbackError.name);
      url.pathname += "/signin";
      return { redirect: url.toString(), cookies };
    }
    const error2 = new CallbackRouteError(e2, { provider: provider.id });
    logger2.debug("callback route error details", { method, query, body });
    logger2.error(error2);
    url.searchParams.set("error", CallbackRouteError.name);
    url.pathname += "/error";
    return { redirect: url.toString(), cookies };
  }
}
var init_callback2 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/callback.js"() {
    init_errors();
    init_callback_handler();
    init_callback();
    init_handle_state();
    init_web2();
    init_shared();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/providers.js
function providers(providers2) {
  return {
    headers: { "Content-Type": "application/json" },
    body: providers2.reduce((acc, { id, name, type, signinUrl, callbackUrl }) => {
      acc[id] = { id, name, type, signinUrl, callbackUrl };
      return acc;
    }, {})
  };
}
var init_providers2 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/providers.js"() {
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/session.js
async function session(params) {
  const { options: options3, sessionStore, newSession, isUpdate } = params;
  const { adapter, jwt: jwt2, events, callbacks, logger: logger2, session: { strategy: sessionStrategy, maxAge: sessionMaxAge } } = options3;
  const response = {
    body: null,
    headers: { "Content-Type": "application/json" },
    cookies: []
  };
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return response;
  if (sessionStrategy === "jwt") {
    try {
      const decodedToken = await jwt2.decode({ ...jwt2, token: sessionToken });
      if (!decodedToken)
        throw new Error("Invalid JWT");
      const token = await callbacks.jwt({
        token: decodedToken,
        ...isUpdate && { trigger: "update" },
        session: newSession
      });
      const newExpires = fromDate(sessionMaxAge);
      if (token !== null) {
        const session2 = {
          user: { name: token.name, email: token.email, image: token.picture },
          expires: newExpires.toISOString()
        };
        const newSession2 = await callbacks.session({ session: session2, token });
        response.body = newSession2;
        const newToken = await jwt2.encode({
          ...jwt2,
          token
        });
        const sessionCookies = sessionStore.chunk(newToken, {
          expires: newExpires
        });
        response.cookies?.push(...sessionCookies);
        await events.session?.({ session: newSession2, token });
      } else {
        response.cookies?.push(...sessionStore.clean());
      }
    } catch (e2) {
      logger2.error(new JWTSessionError(e2));
      response.cookies?.push(...sessionStore.clean());
    }
    return response;
  }
  try {
    const { getSessionAndUser, deleteSession, updateSession } = adapter;
    let userAndSession = await getSessionAndUser(sessionToken);
    if (userAndSession && userAndSession.session.expires.valueOf() < Date.now()) {
      await deleteSession(sessionToken);
      userAndSession = null;
    }
    if (userAndSession) {
      const { user, session: session2 } = userAndSession;
      const sessionUpdateAge = options3.session.updateAge;
      const sessionIsDueToBeUpdatedDate = session2.expires.valueOf() - sessionMaxAge * 1e3 + sessionUpdateAge * 1e3;
      const newExpires = fromDate(sessionMaxAge);
      if (sessionIsDueToBeUpdatedDate <= Date.now()) {
        await updateSession({
          sessionToken,
          expires: newExpires
        });
      }
      const sessionPayload = await callbacks.session({
        // By default, only exposes a limited subset of information to the client
        // as needed for presentation purposes (e.g. "you are logged in as...").
        session: {
          user: { name: user.name, email: user.email, image: user.image },
          expires: session2.expires.toISOString()
        },
        user,
        newSession,
        ...isUpdate ? { trigger: "update" } : {}
      });
      response.body = sessionPayload;
      response.cookies?.push({
        name: options3.cookies.sessionToken.name,
        value: sessionToken,
        options: {
          ...options3.cookies.sessionToken.options,
          expires: newExpires
        }
      });
      await events.session?.({ session: sessionPayload });
    } else if (sessionToken) {
      response.cookies?.push(...sessionStore.clean());
    }
  } catch (e2) {
    logger2.error(new SessionTokenError(e2));
  }
  return response;
}
var init_session = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/session.js"() {
    init_errors();
    init_date();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/email/signin.js
async function email(identifier, options3, request) {
  const { url, adapter, provider, callbackUrl, theme } = options3;
  const token = await provider.generateVerificationToken?.() ?? randomString(32);
  const ONE_DAY_IN_SECONDS = 86400;
  const expires = new Date(Date.now() + (provider.maxAge ?? ONE_DAY_IN_SECONDS) * 1e3);
  const params = new URLSearchParams({ callbackUrl, token, email: identifier });
  const _url = `${url}/callback/${provider.id}?${params}`;
  const secret = provider.secret ?? options3.secret;
  await Promise.all([
    provider.sendVerificationRequest({
      identifier,
      token,
      expires,
      url: _url,
      provider,
      theme,
      request: toRequest(request)
    }),
    // @ts-expect-error -- Verified in `assertConfig`.
    adapter.createVerificationToken?.({
      identifier,
      token: await createHash(`${token}${secret}`),
      expires
    })
  ]);
  return `${url}/verify-request?${new URLSearchParams({
    provider: provider.id,
    type: provider.type
  })}`;
}
var init_signin2 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/email/signin.js"() {
    init_web2();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/authorization-url.js
async function getAuthorizationUrl(query, options3) {
  const { logger: logger2, provider } = options3;
  let url = provider.authorization?.url;
  let as;
  if (!url || url.host === "authjs.dev") {
    const issuer = new URL(provider.issuer);
    const discoveryResponse = await discoveryRequest(issuer);
    const as2 = await processDiscoveryResponse(issuer, discoveryResponse);
    if (!as2.authorization_endpoint) {
      throw new TypeError("Authorization server did not provide an authorization endpoint.");
    }
    url = new URL(as2.authorization_endpoint);
  }
  const authParams = url.searchParams;
  let redirect_uri = provider.callbackUrl;
  let data2;
  if (!options3.isOnRedirectProxy && provider.redirectProxyUrl) {
    redirect_uri = provider.redirectProxyUrl;
    data2 = { origin: provider.callbackUrl };
    logger2.debug("using redirect proxy", { redirect_uri, data: data2 });
  }
  const params = Object.assign({
    response_type: "code",
    // clientId can technically be undefined, should we check this in assert.ts or rely on the Authorization Server to do it?
    client_id: provider.clientId,
    redirect_uri,
    // @ts-expect-error TODO:
    ...provider.authorization?.params
  }, Object.fromEntries(provider.authorization?.url.searchParams ?? []), query);
  for (const k3 in params)
    authParams.set(k3, params[k3]);
  const cookies = [];
  const state2 = await state.create(options3, data2);
  if (state2) {
    authParams.set("state", state2.value);
    cookies.push(state2.cookie);
  }
  if (provider.checks?.includes("pkce")) {
    if (as && !as.code_challenge_methods_supported?.includes("S256")) {
      if (provider.type === "oidc")
        provider.checks = ["nonce"];
    } else {
      const { value, cookie } = await pkce.create(options3);
      authParams.set("code_challenge", value);
      authParams.set("code_challenge_method", "S256");
      cookies.push(cookie);
    }
  }
  const nonce2 = await nonce.create(options3);
  if (nonce2) {
    authParams.set("nonce", nonce2.value);
    cookies.push(nonce2.cookie);
  }
  if (provider.type === "oidc" && !url.searchParams.has("scope")) {
    url.searchParams.set("scope", "openid profile email");
  }
  logger2.debug("authorization url is ready", { url, cookies, provider });
  return { redirect: url.toString(), cookies };
}
var init_authorization_url = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/oauth/authorization-url.js"() {
    init_checks();
    init_build();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/signin.js
async function signin(request, options3) {
  const { query, body } = request;
  const { url, logger: logger2, provider } = options3;
  try {
    if (provider.type === "oauth" || provider.type === "oidc") {
      return await getAuthorizationUrl(query, options3);
    } else if (provider.type === "email") {
      const normalizer = provider.normalizeIdentifier ?? defaultNormalizer;
      const email2 = normalizer(body?.email);
      const user = await options3.adapter.getUserByEmail(email2) ?? {
        id: email2,
        email: email2,
        emailVerified: null
      };
      const account = {
        providerAccountId: email2,
        userId: user.id,
        type: "email",
        provider: provider.id
      };
      const unauthorizedOrError = await handleAuthorized({ user, account, email: { verificationRequest: true } }, options3);
      if (unauthorizedOrError)
        return unauthorizedOrError;
      const redirect2 = await email(email2, options3, request);
      return { redirect: redirect2 };
    }
    return { redirect: `${url}/signin` };
  } catch (e2) {
    const error2 = new SignInError(e2, { provider: provider.id });
    logger2.error(error2);
    const code2 = provider.type === "email" ? "EmailSignin" : "OAuthSignin";
    url.searchParams.set("error", code2);
    url.pathname += "/signin";
    return { redirect: url.toString() };
  }
}
function defaultNormalizer(email2) {
  if (!email2)
    throw new Error("Missing email from request body.");
  let [local, domain] = email2.toLowerCase().trim().split("@");
  domain = domain.split(",")[0];
  return `${local}@${domain}`;
}
var init_signin3 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/signin.js"() {
    init_signin2();
    init_errors();
    init_authorization_url();
    init_shared();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/signout.js
async function signout(sessionStore, options3) {
  const { jwt: jwt2, events, callbackUrl: redirect2, logger: logger2, session: session2 } = options3;
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return { redirect: redirect2 };
  try {
    if (session2.strategy === "jwt") {
      const token = await jwt2.decode({ ...jwt2, token: sessionToken });
      await events.signOut?.({ token });
    } else {
      const session3 = await options3.adapter?.deleteSession(sessionToken);
      await events.signOut?.({ session: session3 });
    }
  } catch (e2) {
    logger2.error(new SignOutError(e2));
  }
  return { redirect: redirect2, cookies: sessionStore.clean() };
}
var init_signout2 = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/signout.js"() {
    init_errors();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/index.js
var init_routes = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/routes/index.js"() {
    init_callback2();
    init_providers2();
    init_session();
    init_signin3();
    init_signout2();
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/index.js
async function AuthInternal(request, authOptions) {
  const { action, providerId, error: error2, method } = request;
  const csrfDisabled = authOptions.skipCSRFCheck === skipCSRFCheck;
  const { options: options3, cookies } = await init2({
    authOptions,
    action,
    providerId,
    url: request.url,
    callbackUrl: request.body?.callbackUrl ?? request.query?.callbackUrl,
    csrfToken: request.body?.csrfToken,
    cookies: request.cookies,
    isPost: method === "POST",
    csrfDisabled
  });
  const sessionStore = new SessionStore(options3.cookies.sessionToken, request, options3.logger);
  if (method === "GET") {
    const render = renderPage({ ...options3, query: request.query, cookies });
    const { pages } = options3;
    switch (action) {
      case "providers":
        return await providers(options3.providers);
      case "session": {
        const session2 = await session({ sessionStore, options: options3 });
        if (session2.cookies)
          cookies.push(...session2.cookies);
        return { ...session2, cookies };
      }
      case "csrf": {
        if (csrfDisabled) {
          options3.logger.warn("csrf-disabled");
          cookies.push({
            name: options3.cookies.csrfToken.name,
            value: "",
            options: { ...options3.cookies.csrfToken.options, maxAge: 0 }
          });
          return { status: 404, cookies };
        }
        return {
          headers: { "Content-Type": "application/json" },
          body: { csrfToken: options3.csrfToken },
          cookies
        };
      }
      case "signin":
        if (pages.signIn) {
          let signinUrl = `${pages.signIn}${pages.signIn.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: options3.callbackUrl })}`;
          if (error2)
            signinUrl = `${signinUrl}&${new URLSearchParams({ error: error2 })}`;
          return { redirect: signinUrl, cookies };
        }
        return render.signin();
      case "signout":
        if (pages.signOut)
          return { redirect: pages.signOut, cookies };
        return render.signout();
      case "callback":
        if (options3.provider) {
          const callback2 = await callback({
            body: request.body,
            query: request.query,
            headers: request.headers,
            cookies: request.cookies,
            method,
            options: options3,
            sessionStore
          });
          if (callback2.cookies)
            cookies.push(...callback2.cookies);
          return { ...callback2, cookies };
        }
        break;
      case "verify-request":
        if (pages.verifyRequest) {
          return { redirect: pages.verifyRequest, cookies };
        }
        return render.verifyRequest();
      case "error":
        if ([
          "Signin",
          "OAuthCreateAccount",
          "EmailCreateAccount",
          "Callback",
          "OAuthAccountNotLinked",
          "SessionRequired"
        ].includes(error2)) {
          return { redirect: `${options3.url}/signin?error=${error2}`, cookies };
        }
        if (pages.error) {
          return {
            redirect: `${pages.error}${pages.error.includes("?") ? "&" : "?"}error=${error2}`,
            cookies
          };
        }
        return render.error({ error: error2 });
      default:
    }
  } else {
    switch (action) {
      case "signin":
        if ((csrfDisabled || options3.csrfTokenVerified) && options3.provider) {
          const signin2 = await signin(request, options3);
          if (signin2.cookies)
            cookies.push(...signin2.cookies);
          return { ...signin2, cookies };
        }
        return { redirect: `${options3.url}/signin?csrf=true`, cookies };
      case "signout":
        if (csrfDisabled || options3.csrfTokenVerified) {
          const signout2 = await signout(sessionStore, options3);
          if (signout2.cookies)
            cookies.push(...signout2.cookies);
          return { ...signout2, cookies };
        }
        return { redirect: `${options3.url}/signout?csrf=true`, cookies };
      case "callback":
        if (options3.provider) {
          if (options3.provider.type === "credentials" && !csrfDisabled && !options3.csrfTokenVerified) {
            return { redirect: `${options3.url}/signin?csrf=true`, cookies };
          }
          const callback2 = await callback({
            body: request.body,
            query: request.query,
            headers: request.headers,
            cookies: request.cookies,
            method,
            options: options3,
            sessionStore
          });
          if (callback2.cookies)
            cookies.push(...callback2.cookies);
          return { ...callback2, cookies };
        }
        break;
      case "session": {
        if (options3.csrfTokenVerified) {
          const session2 = await session({
            options: options3,
            sessionStore,
            newSession: request.body?.data,
            isUpdate: true
          });
          if (session2.cookies)
            cookies.push(...session2.cookies);
          return { ...session2, cookies };
        }
        return { status: 400, cookies };
      }
      default:
    }
  }
  throw new UnknownAction(`Cannot handle action: ${action}`);
}
var skipCSRFCheck;
var init_lib = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/lib/index.js"() {
    init_errors();
    init_cookie();
    init_init();
    init_pages();
    init_routes();
    skipCSRFCheck = Symbol("skip-csrf-check");
  }
});

// node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/index.js
async function Auth(request, config) {
  setLogger(config.logger, config.debug);
  const internalRequest = await toInternalRequest(request);
  if (internalRequest instanceof Error) {
    logger.error(internalRequest);
    return new Response(`Error: This action with HTTP ${request.method} is not supported.`, { status: 400 });
  }
  const assertionResult = assertConfig(internalRequest, config);
  if (Array.isArray(assertionResult)) {
    assertionResult.forEach(logger.warn);
  } else if (assertionResult instanceof Error) {
    logger.error(assertionResult);
    const htmlPages = ["signin", "signout", "error", "verify-request"];
    if (!htmlPages.includes(internalRequest.action) || internalRequest.method !== "GET") {
      return new Response(JSON.stringify({
        message: "There was a problem with the server configuration. Check the server logs for more information.",
        code: assertionResult.name
      }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
    const { pages, theme } = config;
    const authOnErrorPage = pages?.error && internalRequest.url.searchParams.get("callbackUrl")?.startsWith(pages.error);
    if (!pages?.error || authOnErrorPage) {
      if (authOnErrorPage) {
        logger.error(new ErrorPageLoop(`The error page ${pages?.error} should not require authentication`));
      }
      const render = renderPage({ theme });
      const page2 = render.error({ error: "Configuration" });
      return toResponse(page2);
    }
    return Response.redirect(`${pages.error}?error=Configuration`);
  }
  const internalResponse = await AuthInternal(internalRequest, config);
  const response = await toResponse(internalResponse);
  const redirect2 = response.headers.get("Location");
  if (request.headers.has("X-Auth-Return-Redirect") && redirect2) {
    response.headers.delete("Location");
    response.headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ url: redirect2 }), {
      headers: response.headers
    });
  }
  return response;
}
var init_core = __esm({
  "node_modules/.pnpm/@auth+core@0.10.0/node_modules/@auth/core/index.js"() {
    init_assert();
    init_errors();
    init_lib();
    init_pages();
    init_logger();
    init_web2();
  }
});

// .svelte-kit/output/server/chunks/hooks.server.js
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: () => handle
});
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i3, event2, parent_options) {
      const handle2 = handlers[i3];
      return handle2({
        event: event2,
        resolve: (event3, options3) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options3?.transformPageChunk) {
              html = await options3.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options3?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options3?.preload;
          return i3 < length - 1 ? apply_handle(i3 + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
async function getSession(req, config) {
  config.secret ?? (config.secret = private_env.AUTH_SECRET);
  config.trustHost ?? (config.trustHost = true);
  const prefix = config.prefix ?? "/auth";
  const url = new URL(prefix + "/session", req.url);
  const request = new Request(url, { headers: req.headers });
  const response = await Auth(request, config);
  const { status = 200 } = response;
  const data2 = await response.json();
  if (!data2 || !Object.keys(data2).length)
    return null;
  if (status === 200)
    return data2;
  throw new Error(data2.message);
}
function AuthHandle(svelteKitAuthOptions) {
  return async function({ event, resolve }) {
    var _a;
    const authOptions = typeof svelteKitAuthOptions === "object" ? svelteKitAuthOptions : await svelteKitAuthOptions(event);
    const { prefix = "/auth" } = authOptions;
    const { url, request } = event;
    (_a = event.locals).getSession ?? (_a.getSession = () => getSession(request, authOptions));
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions2.includes(action) || !url.pathname.startsWith(prefix + "/")) {
      return resolve(event);
    }
    return Auth(request, authOptions);
  };
}
function SvelteKitAuth(options3) {
  if (typeof options3 === "object") {
    options3.secret ?? (options3.secret = private_env.AUTH_SECRET);
    options3.trustHost ?? (options3.trustHost = !!(private_env.AUTH_TRUST_HOST ?? private_env.VERCEL ?? dev));
  }
  return AuthHandle(options3);
}
var import_ratelimit, dev, GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET, actions2, checks, authMiddleWare, handle;
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
    init_nodejs();
    import_ratelimit = __toESM(require_dist2(), 1);
    init_chunks();
    init_google();
    init_prod_ssr();
    init_internal();
    init_core();
    dev = DEV;
    GOOGLE_ID = "737733258687-oltu3uq51uegvgto90lnm3uc4kdcl42n.apps.googleusercontent.com";
    GOOGLE_SECRET = "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";
    AUTH_SECRET = "61f6c860a7908d09514cdfd7f51a4f92";
    actions2 = [
      "providers",
      "session",
      "csrf",
      "signin",
      "signout",
      "callback",
      "verify-request",
      "error"
    ];
    checks = async ({ event, resolve }) => {
      const response = await resolve(event);
      return response;
    };
    authMiddleWare = SvelteKitAuth({
      secret: AUTH_SECRET,
      providers: [
        Google({
          clientId: GOOGLE_ID,
          clientSecret: GOOGLE_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.announcements.readonly https://www.googleapis.com/auth/classroom.rosters.readonly"
            }
          }
        })
      ],
      callbacks: {
        async redirect() {
          return "/feed";
        },
        async jwt({ token, account }) {
          if (account) {
            return {
              ...token,
              access_token: account.access_token,
              expires_at: Math.floor(
                Date.now() / 1e3 + account.expires_in
              ),
              refresh_token: account.refresh_token
            };
          } else if (Date.now() < Number(token.expires_at) * 1e3) {
            return token;
          } else {
            try {
              const searchParams = new URLSearchParams({
                client_id: GOOGLE_ID,
                client_secret: GOOGLE_SECRET,
                grant_type: "refresh_token",
                refresh_token: token.refresh_token
              });
              const response = await fetch(
                "https://oauth2.googleapis.com/token",
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: searchParams,
                  method: "POST"
                }
              );
              const tokens = await response.json();
              if (!response.ok)
                throw tokens;
              return {
                ...token,
                // Keep the previous token properties
                access_token: tokens.access_token,
                expires_at: Math.floor(
                  Date.now() / 1e3 + tokens.expires_in
                ),
                // Fall back to old refresh token, but note that
                // many providers may only allow using a refresh token once.
                refresh_token: tokens.refresh_token ?? token.refresh_token
              };
            } catch (error2) {
              console.error("Error refreshing access token", error2);
              return { ...token, error: "RefreshAccessTokenError" };
            }
          }
        },
        async session({ session: session2, token }) {
          session2.error = token.error;
          session2.access_token = token.access_token;
          session2.refresh_token = token.refresh_token;
          return session2;
        }
      }
    });
    handle = sequence(authMiddleWare, checks);
  }
});

// .svelte-kit/output/server/chunks/internal.js
function reset2() {
  base = initial.base;
  assets = initial.assets;
}
function set_private_env(environment) {
  private_env = environment;
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function get_hooks() {
  return Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports));
}
var base, assets, initial, private_env, public_env, Root, options;
var init_internal = __esm({
  ".svelte-kit/output/server/chunks/internal.js"() {
    init_ssr();
    base = "";
    assets = base;
    initial = { base, assets };
    private_env = {};
    public_env = {};
    Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { stores } = $$props;
      let { page: page2 } = $$props;
      let { constructors } = $$props;
      let { components = [] } = $$props;
      let { form } = $$props;
      let { data_0 = null } = $$props;
      let { data_1 = null } = $$props;
      {
        setContext("__svelte__", stores);
      }
      afterUpdate(stores.page.notify);
      if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
        $$bindings.stores(stores);
      if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
        $$bindings.page(page2);
      if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
        $$bindings.constructors(constructors);
      if ($$props.components === void 0 && $$bindings.components && components !== void 0)
        $$bindings.components(components);
      if ($$props.form === void 0 && $$bindings.form && form !== void 0)
        $$bindings.form(form);
      if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
        $$bindings.data_0(data_0);
      if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
        $$bindings.data_1(data_1);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        {
          stores.page.set(page2);
        }
        $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
          $$result,
          { data: data_0, this: components[0] },
          {
            this: ($$value) => {
              components[0] = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
                $$result,
                { data: data_1, form, this: components[1] },
                {
                  this: ($$value) => {
                    components[1] = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
          $$result,
          { data: data_0, form, this: components[0] },
          {
            this: ($$value) => {
              components[0] = $$value;
              $$settled = false;
            }
          },
          {}
        )}`} ${``}`;
      } while (!$$settled);
      return $$rendered;
    });
    options = {
      app_template_contains_nonce: false,
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf_check_origin: true,
      track_server_fetches: false,
      embedded: false,
      env_public_prefix: "PUBLIC_",
      env_private_prefix: "",
      hooks: null,
      // added lazily, via `get_hooks`
      preload_strategy: "modulepreload",
      root: Root,
      service_worker: false,
      templates: {
        app: ({ head, body, assets: assets2, nonce: nonce2, env }) => '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <link rel="icon" href="' + assets2 + '/favicon.png" />\n        <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />\n        <meta name="viewport" content="width=device-width" />\n        ' + head + '\n    </head>\n    <body data-sveltekit-preload-data="hover">\n        <div style="display: contents">' + body + "</div>\n    </body>\n</html>\n",
        error: ({ status, message: message2 }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message2 + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message2 + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
      },
      version_hash: "ydueeq"
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i3 = 0; i3 < subscriber_queue.length; i3 += 2) {
            subscriber_queue[i3][0](subscriber_queue[i3 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_ssr();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  load: () => load
});
var load;
var init_layout_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.server.ts.js"() {
    load = async (event) => {
      const session2 = await event.locals.getSession();
      return {
        session: session2
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var pwaInfo, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let webManifest;
      webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
      return `${$$result.head += `<!-- HEAD_svelte-nfny5e_START --><!-- HTML_TAG_START -->${webManifest}<!-- HTML_TAG_END --><!-- HEAD_svelte-nfny5e_END -->`, ""} <main>${slots.default ? slots.default({}) : ``}</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  server: () => layout_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets
});
var index, component_cache, component, server_id, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_server_ts();
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    server_id = "src/routes/+layout.server.ts";
    imports = ["_app/immutable/nodes/0.e0e1d7a8.js", "_app/immutable/chunks/scheduler.433f0f0f.js", "_app/immutable/chunks/index.339c83b0.js"];
    stylesheets = ["_app/immutable/assets/0.6b72d574.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/chunks/stores.js
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_ssr();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.8cb0a9e2.js", "_app/immutable/chunks/scheduler.433f0f0f.js", "_app/immutable/chunks/index.339c83b0.js", "_app/immutable/chunks/stores.a608d631.js", "_app/immutable/chunks/singletons.2f50626b.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_ssr();
    init_stores();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      $$unsubscribe_page();
      return `<div class="w-screen"><div class="flex-col-center lg:flex-row"><div class="h-screen lg:h-full flex-col-center"><div class="flex-col-center gap-y-8 lg:w-min px-6"><h1 class="text-center text-4xl font-bold" data-svelte-h="svelte-r1kv0t">Check announcements of all your enrolled google classrooms
                    sorted by last updated time!</h1> <button class="btn btn-primary" data-svelte-h="svelte-1s9uzpt">Get Started</button></div></div> <div class="h-screen lg:max-h-screen lg:p-8" data-svelte-h="svelte-1h0c936"><img src="/page-shot.webp" alt="hero" class="rounded-lg shadow-2xl object-contain h-full" id="page-shot"></div></div> <div class="lg:flex-row-center" data-svelte-h="svelte-10z03ct"><div class="h-screen w-full bg-base-200 lg:p-16 lg:text-xl lg:basis-1/2"><div class="h-full flex-col-center mx-12 lg:mx-0"><h2 class="text-4xl text-center">How does it work ?</h2> <p class="my-4">As soon as the page is loaded, announcements from all the
                    courses are fetched concurrently!</p> <p>A caching mechanism is set in place to make the app as fast
                    as it can be. If one user fetched announcements from a
                    course then in the next minute anyone who tries to fetch
                    announcements from the same course will get a cached
                    response, making the google api the only bottleneck.</p></div></div> <div class="h-screen flex-col-center lg:p-16 lg:text-xl mx-12 lg:mx-0 lg:basis-1/2"><h2 class="text-4xl text-center">What are the limitations ?</h2> <p class="my-4">For each particular course only the latest 5 announcements are
                fetched as the purpose of this app is to have a quick glance at
                the latest announcements.</p> <p>The google classroom api that is used to fetch the announcements
                only allows a limited number of requests for free. To ensure all
                the users get equal usage, the app enforces the limitation of
                maximum 100 requests per day.</p></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    imports3 = ["_app/immutable/nodes/2.871d6326.js", "_app/immutable/chunks/scheduler.433f0f0f.js", "_app/immutable/chunks/index.339c83b0.js", "_app/immutable/chunks/navigation.4a14f299.js", "_app/immutable/chunks/singletons.2f50626b.js", "_app/immutable/chunks/stores.a608d631.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/feed/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load2
});
var load2;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/feed/_page.server.ts.js"() {
    init_chunks();
    load2 = async (event) => {
      const session2 = await event.locals.getSession();
      if (!session2?.user)
        throw redirect(307, "/");
      return { session: session2 };
    };
  }
});

// .svelte-kit/output/server/entries/pages/feed/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
function format_date(inputDateString) {
  const dateObject = new Date(inputDateString);
  const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale;
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formatter = Intl.DateTimeFormat(currentLocale, {
    ...options2,
    timeZone: currentTimeZone
  });
  const formattedDate = formatter.format(dateObject);
  return formattedDate;
}
var options2, localStore, PostCard, course_map, sel_courses, sidebar_visible, NavBar, SideBar, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/feed/_page.svelte.js"() {
    init_ssr();
    init_index2();
    init_stores();
    options2 = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    localStore = {
      get: (key2, fallback) => {
        return fallback;
      },
      set: (key2, value) => {
        return;
      }
    };
    PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { item } = $$props;
      let { course_name } = $$props;
      if ($$props.item === void 0 && $$bindings.item && item !== void 0)
        $$bindings.item(item);
      if ($$props.course_name === void 0 && $$bindings.course_name && course_name !== void 0)
        $$bindings.course_name(course_name);
      return `<div class="card-body"><h2 class="card-title">${escape(course_name)}</h2> <p class="whitespace-pre-line">${escape(item.text)}</p> <div class="flex"><div class="justify-start">${escape(format_date(item.updateTime))}</div> <div class="card-actions justify-end ml-auto"><a class="link w-4 h-4 md:scale-125"${add_attribute("href", item.alternateLink, 0)} target="_blank"><svg class="fill-accent hover:scale-125" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path></svg></a></div></div></div>`;
    });
    course_map = writable(/* @__PURE__ */ new Map());
    sel_courses = writable([]);
    sidebar_visible = writable(false);
    NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $sidebar_visible, $$unsubscribe_sidebar_visible;
      let $page, $$unsubscribe_page;
      $$unsubscribe_sidebar_visible = subscribe(sidebar_visible, (value) => $sidebar_visible = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let log_out_modal;
      $$unsubscribe_sidebar_visible();
      $$unsubscribe_page();
      return `<div class="flex justify-center items-center sticky top-0 w-full h-[6vh] bg-base-300 z-10"><div class="mr-auto"><button class="ml-2 p-4 group"><svg id="menusvg" class="${[
        "w-6 h-6 transition-transform group-hover:fill-info",
        " " + (!$sidebar_visible ? "rotate-180" : "")
      ].join(" ").trim()}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"></path></svg></button> <button class="group p-4">${`<svg class="h-6 w-6 group-hover:fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"></path></svg>`}</button></div> <div class="mr-auto" data-svelte-h="svelte-10qyayu"><span class="normal-case text-xl mx-auto hidden md:inline">Classroom Feed</span></div> <a target="_blank" href="/" class="btn btn-sm btn-outline" data-svelte-h="svelte-18civ0u">about</a> <div class="dropdown dropdown-bottom dropdown-end"><label tabindex="0"><div class="w-10 mx-6"><img class="object-contain rounded-full border-2 border-base-content hover:scale-105 hover:cursor-pointer"${add_attribute("src", $page.data.session.user?.image, 0)} alt="avatar"></div></label> <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-3xl bg-base-200 rounded-box w-52"><li><button data-svelte-h="svelte-9oyede">Log Out</button></li></ul></div> <dialog class="modal"${add_attribute("this", log_out_modal, 0)}><form method="dialog" class="modal-box"><p class="py-4 font-bold" data-svelte-h="svelte-18d3zld">Are you sure you want to log out ?</p> <div class="modal-action"><button class="btn btn-error btn-outline" data-svelte-h="svelte-4s13oa">Log Out</button> <button class="btn btn-success btn-outline w-28" data-svelte-h="svelte-b0deoi">Close</button></div></form> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-9i9e7k"><button>close</button></form></dialog></div>`;
    });
    SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $sel_courses, $$unsubscribe_sel_courses;
      let $course_map, $$unsubscribe_course_map;
      $$unsubscribe_sel_courses = subscribe(sel_courses, (value) => $sel_courses = value);
      $$unsubscribe_course_map = subscribe(course_map, (value) => $course_map = value);
      {
        localStore.set("sel_courses", [...new Set($sel_courses)]);
      }
      $$unsubscribe_sel_courses();
      $$unsubscribe_course_map();
      return `<aside class="flex flex-col gap-y-2 justify-center items-center md:sticky md:top-[6vh] w-full md:w-72 max-h-[94vh] p-4 bg-base-200"><span class="font-bold mb-2" data-svelte-h="svelte-iwnt9o">Course Filters</span> <div class="flex justify-between gap-2"><button class="btn btn-outline btn-xs flex-grow" data-svelte-h="svelte-1gnxz2e">Select All</button> <button class="btn btn-outline btn-xs flex-grow float-right" data-svelte-h="svelte-1841ugp">Deselect All</button></div> <div class="overflow-auto w-full scroll-green px-2">${$course_map ? `${each($course_map, ([id, course]) => {
        return `<div class="form-control"><label class="cursor-pointer label"><span class="label-text">${escape(course.name)}</span> <input type="checkbox"${add_attribute("value", id, 0)} class="checkbox-xs checkbox-success" name="courses"${~$sel_courses.indexOf(id) ? add_attribute("checked", true, 1) : ""}></label> </div>`;
      })}` : ``}</div> <a href="https://classroom.google.com/a/not-turned-in/all" target="_blank" class="mt-auto btn btn-outline btn-sm w-full h-2" data-svelte-h="svelte-n2hr9m">Assignments</a></aside>`;
    });
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $sel_courses, $$unsubscribe_sel_courses;
      let $sidebar_visible, $$unsubscribe_sidebar_visible;
      let $course_map, $$unsubscribe_course_map;
      $$unsubscribe_sel_courses = subscribe(sel_courses, (value) => $sel_courses = value);
      $$unsubscribe_sidebar_visible = subscribe(sidebar_visible, (value) => $sidebar_visible = value);
      $$unsubscribe_course_map = subscribe(course_map, (value) => $course_map = value);
      let courses_promise;
      let all_posts = [];
      let filtered_posts = [];
      let total_courses = 0;
      let posts_fetched = 0;
      let posts_promises;
      {
        if (all_posts?.length) {
          const course_set = new Set($sel_courses);
          filtered_posts = all_posts.filter((post) => course_set.has(post.courseId));
        }
      }
      $$unsubscribe_sel_courses();
      $$unsubscribe_sidebar_visible();
      $$unsubscribe_course_map();
      return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <main class="min-h-[94vh] flex flex-col md:flex-row">${$sidebar_visible ? `${validate_component(SideBar, "SideBar").$$render($$result, {}, {}, {})}` : ``} <div class="flex-grow flex flex-col justify-start items-center mx-6">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ` <span class="animate-pulse" data-svelte-h="svelte-z85vno">Checking classroom enrollments</span> `;
        }
        return function() {
          return ``;
        }();
      }(courses_promise)} ${``} ${``} ${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ` <div class="flex flex-col justify-center items-center"><span class="block">Fetched posts from ${escape(posts_fetched)} / ${escape(total_courses)} courses</span> ${`<progress class="progress progress-success w-56 md:w-72"></progress>`}</div> `;
        }
        return function() {
          return ``;
        }();
      }(posts_promises)} <div class="w-full">${each(filtered_posts, (item) => {
        return `<div class="card bg-base-100 shadow-xl shadow-base-300 my-4">${validate_component(PostCard, "PostCard").$$render(
          $$result,
          {
            item,
            course_name: $course_map.get(item.courseId).name
          },
          {},
          {}
        )} </div>`;
      })}</div></div></main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  server: () => page_server_ts_exports,
  server_id: () => server_id2,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, server_id2, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_server_ts();
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    server_id2 = "src/routes/feed/+page.server.ts";
    imports4 = ["_app/immutable/nodes/3.eb1e85d5.js", "_app/immutable/chunks/scheduler.433f0f0f.js", "_app/immutable/chunks/index.339c83b0.js", "_app/immutable/chunks/singletons.2f50626b.js", "_app/immutable/chunks/navigation.4a14f299.js", "_app/immutable/chunks/stores.a608d631.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/chunks/helpers.js
function get_announcements(courseId) {
  return data.announcements.filter((item) => item.courseId === courseId);
}
function get_courses() {
  return data.courses;
}
async function fetch_courses() {
  const fetched_courses = get_courses().slice(0, 3);
  const courses2 = {};
  fetched_courses.forEach((course) => courses2[course.id] = course);
  await delay();
  return courses2;
}
async function delay(ms) {
  return;
}
var courses, data;
var init_helpers = __esm({
  ".svelte-kit/output/server/chunks/helpers.js"() {
    courses = [
      {
        id: "1",
        name: "Machine Learning"
      },
      {
        id: "2",
        name: "Data Structure"
      },
      {
        id: "5",
        name: "Database Management"
      },
      {
        id: "3",
        name: "Web Development"
      },
      {
        id: "4",
        name: "Artificial Intelligence"
      },
      {
        id: "6",
        name: "Mobile App Development"
      },
      {
        id: "7",
        name: "Computer Networks"
      },
      {
        id: "8",
        name: "Software Engineering"
      },
      {
        id: "9",
        name: "Operating Systems"
      },
      {
        id: "10",
        name: "Cybersecurity"
      },
      {
        id: "11",
        name: "Cloud Computing"
      },
      {
        id: "12",
        name: "Game Development"
      },
      {
        id: "13",
        name: "Data Science"
      },
      {
        id: "14",
        name: "Robotics"
      },
      {
        id: "15",
        name: "Computer Graphics"
      },
      {
        id: "16",
        name: "Natural Language Processing"
      },
      {
        id: "17",
        name: "Big Data Analytics"
      },
      {
        id: "18",
        name: "Blockchain Technology"
      },
      {
        id: "19",
        name: "Internet of Things"
      },
      {
        id: "20",
        name: "Augmented Reality"
      },
      {
        id: "21",
        name: "Virtual Reality"
      },
      {
        id: "22",
        name: "Data Mining"
      },
      {
        id: "23",
        name: "Computer Vision"
      },
      {
        id: "24",
        name: "Quantum Computing"
      },
      {
        id: "25",
        name: "Network Security"
      },
      {
        id: "26",
        name: "Parallel Computing"
      },
      {
        id: "27",
        name: "Distributed Systems"
      },
      {
        id: "28",
        name: "Embedded Systems"
      },
      {
        id: "29",
        name: "Human-Computer Interaction"
      },
      {
        id: "30",
        name: "Computer Architecture"
      },
      {
        id: "31",
        name: "Software Testing"
      },
      {
        id: "32",
        name: "Artificial Neural Networks"
      },
      {
        id: "33",
        name: "Cloud Security"
      },
      {
        id: "34",
        name: "Wireless Communication"
      },
      {
        id: "35",
        name: "Cryptography"
      },
      {
        id: "36",
        name: "Geographic Information Systems"
      },
      {
        id: "37",
        name: "Bioinformatics"
      },
      {
        id: "38",
        name: "Computer Ethics"
      },
      {
        id: "39",
        name: "Data Warehousing"
      },
      {
        id: "40",
        name: "Information Retrieval"
      },
      {
        id: "41",
        name: "Cloud Database Management"
      },
      {
        id: "42",
        name: "Computer Animation"
      },
      {
        id: "43",
        name: "Network Programming"
      },
      {
        id: "44",
        name: "Software Development Methodologies"
      },
      {
        id: "45",
        name: "Computer Algebra Systems"
      }
    ];
    data = {
      courses,
      announcements: [
        {
          courseId: "1",
          id: "1-1",
          text: "Reminder for class test #1\nDate: 26 July 2023 (Wednesday)\nTime: 02.00 PM to 02.30 PM\nSyllabus: All covered topics upto Week 4.\nRoom: 508 & 510",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDAz",
          creationTime: "2023-07-25T11:18:02.968Z",
          updateTime: "2023-07-25T11:18:02.941Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-2",
          text: "This is a different announcement for testing purposes.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA0",
          creationTime: "2023-07-25T13:35:46.572Z",
          updateTime: "2023-07-25T13:35:46.572Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-3",
          text: "Important announcement: Please read carefully.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA1",
          creationTime: "2023-07-25T15:42:31.128Z",
          updateTime: "2023-07-25T15:42:31.128Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-4",
          text: "Urgent: Assignment submission deadline extended.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA2",
          creationTime: "2023-07-26T06:50:19.760Z",
          updateTime: "2023-07-26T06:50:19.760Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-5",
          text: "Reminder: Guest lecture tomorrow at 10 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA3",
          creationTime: "2023-07-26T13:27:58.213Z",
          updateTime: "2023-07-26T13:27:58.213Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-6",
          text: "Welcome to the course! First lecture at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA4",
          creationTime: "2023-07-26T12:05:30.531Z",
          updateTime: "2023-07-26T12:05:30.531Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-7",
          text: "Reminder: Submit your assignment by 11:59 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA5",
          creationTime: "2023-07-27T09:30:15.224Z",
          updateTime: "2023-07-27T09:30:15.224Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-8",
          text: "Important: Guest speaker tomorrow at 2 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA6",
          creationTime: "2023-07-28T14:40:42.782Z",
          updateTime: "2023-07-28T14:40:42.782Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-9",
          text: "Urgent: Class canceled for today.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA7",
          creationTime: "2023-07-29T10:15:20.945Z",
          updateTime: "2023-07-29T10:15:20.945Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "1",
          id: "1-10",
          text: "Reminder: Group project presentation next week.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA8",
          creationTime: "2023-07-30T12:35:05.217Z",
          updateTime: "2023-07-30T12:35:05.217Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-1",
          text: "Todays class will start from 10:30 am\n Room no 301.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDAz",
          creationTime: "2023-07-25T11:18:02.968Z",
          updateTime: "2023-07-26T03:19:02.941Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-2",
          text: "Reminder: Quiz tomorrow at 10 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA0",
          creationTime: "2023-07-25T14:30:55.283Z",
          updateTime: "2023-07-25T14:30:55.283Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-3",
          text: "Update: Please bring your lab equipment.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA1",
          creationTime: "2023-07-25T17:55:10.732Z",
          updateTime: "2023-07-25T17:55:10.732Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-4",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA2",
          creationTime: "2023-07-26T09:21:45.906Z",
          updateTime: "2023-07-26T09:21:45.906Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-6",
          text: "Reminder: Group project submission due next week.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA9",
          creationTime: "2023-07-31T09:55:38.374Z",
          updateTime: "2023-07-31T09:55:38.374Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-7",
          text: "Important: Office hours canceled for today.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDEw",
          creationTime: "2023-08-01T14:20:57.511Z",
          updateTime: "2023-08-01T14:20:57.511Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-8",
          text: "Update: Quiz rescheduled to 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDEy",
          creationTime: "2023-08-02T10:45:16.709Z",
          updateTime: "2023-08-02T10:45:16.709Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-9",
          text: "Urgent: Lab session moved to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDEz",
          creationTime: "2023-08-03T12:15:24.822Z",
          updateTime: "2023-08-03T12:15:24.822Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "2",
          id: "2-10",
          text: "Reminder: Final exam on August 10th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDE0",
          creationTime: "2023-08-04T14:50:35.955Z",
          updateTime: "2023-08-04T14:50:35.955Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "102228857692621657049"
        },
        {
          courseId: "3",
          id: "3-1",
          text: "Welcome to Course 3! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-1",
          creationTime: "2023-08-10T09:00:00.000Z",
          updateTime: "2023-08-10T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "3",
          id: "3-2",
          text: "Assignment reminder: Submit by August 15th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-2",
          creationTime: "2023-08-11T14:30:00.000Z",
          updateTime: "2023-08-11T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "3",
          id: "3-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-3",
          creationTime: "2023-08-12T17:45:00.000Z",
          updateTime: "2023-08-12T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "3",
          id: "3-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-4",
          creationTime: "2023-08-13T12:15:00.000Z",
          updateTime: "2023-08-13T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "3",
          id: "3-5",
          text: "Reminder: Final exam on August 20th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-5",
          creationTime: "2023-08-14T08:30:00.000Z",
          updateTime: "2023-08-14T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "3",
          id: "3-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-6",
          creationTime: "2023-08-15T16:45:00.000Z",
          updateTime: "2023-08-15T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "3",
          id: "3-7",
          text: "Reminder: Course project presentation on August 22nd.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-3/announcement-7",
          creationTime: "2023-08-16T11:30:00.000Z",
          updateTime: "2023-08-16T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "4",
          id: "4-1",
          text: "Welcome to Course 4! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-1",
          creationTime: "2023-08-05T09:00:00.000Z",
          updateTime: "2023-08-05T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "4",
          id: "4-2",
          text: "Reminder: Assignment due on August 15th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-2",
          creationTime: "2023-08-06T14:30:00.000Z",
          updateTime: "2023-08-06T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "4",
          id: "4-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-3",
          creationTime: "2023-08-07T17:45:00.000Z",
          updateTime: "2023-08-07T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "4",
          id: "4-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-4",
          creationTime: "2023-08-08T12:15:00.000Z",
          updateTime: "2023-08-08T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "4",
          id: "4-5",
          text: "Reminder: Final exam on August 20th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-5",
          creationTime: "2023-08-09T08:30:00.000Z",
          updateTime: "2023-08-09T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "4",
          id: "4-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-6",
          creationTime: "2023-08-10T16:45:00.000Z",
          updateTime: "2023-08-10T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "4",
          id: "4-7",
          text: "Reminder: Course project presentation on August 22nd.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-4/announcement-7",
          creationTime: "2023-08-11T11:30:00.000Z",
          updateTime: "2023-08-11T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "5",
          id: "5-1",
          text: "Hello Everyone!\n There will be no classes this week.\n However, next week you will give a project idea presentation on your Database project with your group.\n So take this week to prepare for that.\n",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-1",
          creationTime: "2023-07-22T09:00:00.000Z",
          updateTime: "2023-07-25T02:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "5",
          id: "5-2",
          text: "Reminder: Assignment due on August 18th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-2",
          creationTime: "2023-08-13T14:30:00.000Z",
          updateTime: "2023-08-13T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "5",
          id: "5-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-3",
          creationTime: "2023-08-14T17:45:00.000Z",
          updateTime: "2023-08-14T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "5",
          id: "5-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-4",
          creationTime: "2023-08-15T12:15:00.000Z",
          updateTime: "2023-08-15T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "5",
          id: "5-5",
          text: "Reminder: Final exam on August 23rd.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-5",
          creationTime: "2023-08-16T08:30:00.000Z",
          updateTime: "2023-08-16T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "5",
          id: "5-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-6",
          creationTime: "2023-08-17T16:45:00.000Z",
          updateTime: "2023-08-17T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "5",
          id: "5-7",
          text: "Reminder: Course project presentation on August 25th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-5/announcement-7",
          creationTime: "2023-08-18T11:30:00.000Z",
          updateTime: "2023-08-18T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "6",
          id: "6-1",
          text: "Welcome to Course 6! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-1",
          creationTime: "2023-08-19T09:00:00.000Z",
          updateTime: "2023-08-19T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "6",
          id: "6-2",
          text: "Reminder: Assignment due on August 25th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-2",
          creationTime: "2023-08-20T14:30:00.000Z",
          updateTime: "2023-08-20T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "6",
          id: "6-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-3",
          creationTime: "2023-08-21T17:45:00.000Z",
          updateTime: "2023-08-21T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "6",
          id: "6-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-4",
          creationTime: "2023-08-22T12:15:00.000Z",
          updateTime: "2023-08-22T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "6",
          id: "6-5",
          text: "Reminder: Final exam on August 28th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-5",
          creationTime: "2023-08-23T08:30:00.000Z",
          updateTime: "2023-08-23T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "6",
          id: "6-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-6",
          creationTime: "2023-08-24T16:45:00.000Z",
          updateTime: "2023-08-24T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "6",
          id: "6-7",
          text: "Reminder: Course project presentation on September 1st.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-6/announcement-7",
          creationTime: "2023-08-25T11:30:00.000Z",
          updateTime: "2023-08-25T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "7",
          id: "7-1",
          text: "Welcome to Course 7! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-1",
          creationTime: "2023-08-26T09:00:00.000Z",
          updateTime: "2023-08-26T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "7",
          id: "7-2",
          text: "Reminder: Assignment due on September 1st.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-2",
          creationTime: "2023-08-27T14:30:00.000Z",
          updateTime: "2023-08-27T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "7",
          id: "7-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-3",
          creationTime: "2023-08-28T17:45:00.000Z",
          updateTime: "2023-08-28T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "7",
          id: "7-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-4",
          creationTime: "2023-08-29T12:15:00.000Z",
          updateTime: "2023-08-29T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "7",
          id: "7-5",
          text: "Reminder: Final exam on September 4th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-5",
          creationTime: "2023-08-30T08:30:00.000Z",
          updateTime: "2023-08-30T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "7",
          id: "7-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-6",
          creationTime: "2023-08-31T16:45:00.000Z",
          updateTime: "2023-08-31T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "7",
          id: "7-7",
          text: "Reminder: Course project presentation on September 7th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-7/announcement-7",
          creationTime: "2023-09-01T11:30:00.000Z",
          updateTime: "2023-09-01T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "8",
          id: "8-1",
          text: "Welcome to Course 8! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-1",
          creationTime: "2023-09-02T09:00:00.000Z",
          updateTime: "2023-09-02T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "8",
          id: "8-2",
          text: "Reminder: Assignment due on September 8th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-2",
          creationTime: "2023-09-03T14:30:00.000Z",
          updateTime: "2023-09-03T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "8",
          id: "8-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-3",
          creationTime: "2023-09-04T17:45:00.000Z",
          updateTime: "2023-09-04T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "8",
          id: "8-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-4",
          creationTime: "2023-09-05T12:15:00.000Z",
          updateTime: "2023-09-05T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "8",
          id: "8-5",
          text: "Reminder: Final exam on September 11th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-5",
          creationTime: "2023-09-06T08:30:00.000Z",
          updateTime: "2023-09-06T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "8",
          id: "8-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-6",
          creationTime: "2023-09-07T16:45:00.000Z",
          updateTime: "2023-09-07T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "8",
          id: "8-7",
          text: "Reminder: Course project presentation on September 14th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-8/announcement-7",
          creationTime: "2023-09-08T11:30:00.000Z",
          updateTime: "2023-09-08T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "9",
          id: "9-1",
          text: "Welcome to Course 9! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-1",
          creationTime: "2023-09-09T09:00:00.000Z",
          updateTime: "2023-09-09T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "9",
          id: "9-2",
          text: "Reminder: Assignment due on September 15th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-2",
          creationTime: "2023-09-10T14:30:00.000Z",
          updateTime: "2023-09-10T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "9",
          id: "9-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-3",
          creationTime: "2023-09-11T17:45:00.000Z",
          updateTime: "2023-09-11T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "9",
          id: "9-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-4",
          creationTime: "2023-09-12T12:15:00.000Z",
          updateTime: "2023-09-12T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "9",
          id: "9-5",
          text: "Reminder: Final exam on September 18th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-5",
          creationTime: "2023-09-13T08:30:00.000Z",
          updateTime: "2023-09-13T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "9",
          id: "9-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-6",
          creationTime: "2023-09-14T16:45:00.000Z",
          updateTime: "2023-09-14T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "9",
          id: "9-7",
          text: "Reminder: Course project presentation on September 21st.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-9/announcement-7",
          creationTime: "2023-09-15T11:30:00.000Z",
          updateTime: "2023-09-15T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "10",
          id: "10-1",
          text: "Welcome to Course 10! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-1",
          creationTime: "2023-09-16T09:00:00.000Z",
          updateTime: "2023-09-16T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "10",
          id: "10-2",
          text: "Reminder: Assignment due on September 22nd.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-2",
          creationTime: "2023-09-17T14:30:00.000Z",
          updateTime: "2023-09-17T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "10",
          id: "10-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-3",
          creationTime: "2023-09-18T17:45:00.000Z",
          updateTime: "2023-09-18T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "10",
          id: "10-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-4",
          creationTime: "2023-09-19T12:15:00.000Z",
          updateTime: "2023-09-19T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "10",
          id: "10-5",
          text: "Reminder: Final exam on September 25th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-5",
          creationTime: "2023-09-20T08:30:00.000Z",
          updateTime: "2023-09-20T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "10",
          id: "10-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-6",
          creationTime: "2023-09-21T16:45:00.000Z",
          updateTime: "2023-09-21T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "10",
          id: "10-7",
          text: "Reminder: Course project presentation on September 28th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-10/announcement-7",
          creationTime: "2023-09-22T11:30:00.000Z",
          updateTime: "2023-09-22T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "11",
          id: "11-1",
          text: "Welcome to Course 11! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-1",
          creationTime: "2023-09-23T09:00:00.000Z",
          updateTime: "2023-09-23T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "11",
          id: "11-2",
          text: "Reminder: Assignment due on September 29th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-2",
          creationTime: "2023-09-24T14:30:00.000Z",
          updateTime: "2023-09-24T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "11",
          id: "11-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-3",
          creationTime: "2023-09-25T17:45:00.000Z",
          updateTime: "2023-09-25T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "11",
          id: "11-4",
          text: "Lab session update: Time changed to 11 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-4",
          creationTime: "2023-09-26T12:15:00.000Z",
          updateTime: "2023-09-26T12:15:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-4"
        },
        {
          courseId: "11",
          id: "11-5",
          text: "Reminder: Final exam on October 2nd.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-5",
          creationTime: "2023-09-27T08:30:00.000Z",
          updateTime: "2023-09-27T08:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-5"
        },
        {
          courseId: "11",
          id: "11-6",
          text: "Important: Course survey to be filled by 5 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-6",
          creationTime: "2023-09-28T16:45:00.000Z",
          updateTime: "2023-09-28T16:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-6"
        },
        {
          courseId: "11",
          id: "11-7",
          text: "Reminder: Course project presentation on October 5th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-11/announcement-7",
          creationTime: "2023-09-29T11:30:00.000Z",
          updateTime: "2023-09-29T11:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-7"
        },
        {
          courseId: "12",
          id: "12-1",
          text: "Welcome to Course 12! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-12/announcement-1",
          creationTime: "2023-09-30T09:00:00.000Z",
          updateTime: "2023-09-30T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "12",
          id: "12-2",
          text: "Reminder: Assignment due on October 6th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-12/announcement-2",
          creationTime: "2023-10-01T14:30:00.000Z",
          updateTime: "2023-10-01T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "12",
          id: "12-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-12/announcement-3",
          creationTime: "2023-10-02T17:45:00.000Z",
          updateTime: "2023-10-02T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 13
        {
          courseId: "13",
          id: "13-1",
          text: "Welcome to Course 13! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-13/announcement-1",
          creationTime: "2023-10-03T09:00:00.000Z",
          updateTime: "2023-10-03T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "13",
          id: "13-2",
          text: "Reminder: Assignment due on October 9th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-13/announcement-2",
          creationTime: "2023-10-04T14:30:00.000Z",
          updateTime: "2023-10-04T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "13",
          id: "13-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-13/announcement-3",
          creationTime: "2023-10-05T17:45:00.000Z",
          updateTime: "2023-10-05T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 14
        {
          courseId: "14",
          id: "14-1",
          text: "Welcome to Course 14! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-14/announcement-1",
          creationTime: "2023-10-06T09:00:00.000Z",
          updateTime: "2023-10-06T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "14",
          id: "14-2",
          text: "Reminder: Assignment due on October 12th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-14/announcement-2",
          creationTime: "2023-10-07T14:30:00.000Z",
          updateTime: "2023-10-07T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "14",
          id: "14-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-14/announcement-3",
          creationTime: "2023-10-08T17:45:00.000Z",
          updateTime: "2023-10-08T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 15
        {
          courseId: "15",
          id: "15-1",
          text: "Welcome to Course 15! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-15/announcement-1",
          creationTime: "2023-10-09T09:00:00.000Z",
          updateTime: "2023-10-09T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 16
        {
          courseId: "16",
          id: "16-1",
          text: "Welcome to Course 16! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-16/announcement-1",
          creationTime: "2023-10-16T09:00:00.000Z",
          updateTime: "2023-10-16T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 17
        {
          courseId: "17",
          id: "17-1",
          text: "Welcome to Course 17! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-17/announcement-1",
          creationTime: "2023-10-23T09:00:00.000Z",
          updateTime: "2023-10-23T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 18
        {
          courseId: "18",
          id: "18-1",
          text: "Welcome to Course 18! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-18/announcement-1",
          creationTime: "2023-10-30T09:00:00.000Z",
          updateTime: "2023-10-30T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 19
        {
          courseId: "19",
          id: "19-1",
          text: "Welcome to Course 19! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-19/announcement-1",
          creationTime: "2023-11-06T09:00:00.000Z",
          updateTime: "2023-11-06T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 20
        {
          courseId: "20",
          id: "20-1",
          text: "Welcome to Course 20! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-20/announcement-1",
          creationTime: "2023-11-13T09:00:00.000Z",
          updateTime: "2023-11-13T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 21
        {
          courseId: "21",
          id: "21-1",
          text: "Welcome to Course 21! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-21/announcement-1",
          creationTime: "2023-11-20T09:00:00.000Z",
          updateTime: "2023-11-20T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 22
        {
          courseId: "22",
          id: "22-1",
          text: "Welcome to Course 22! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-22/announcement-1",
          creationTime: "2023-11-27T09:00:00.000Z",
          updateTime: "2023-11-27T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 23
        {
          courseId: "23",
          id: "23-1",
          text: "Welcome to Course 23! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-23/announcement-1",
          creationTime: "2023-12-04T09:00:00.000Z",
          updateTime: "2023-12-04T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 24
        {
          courseId: "24",
          id: "24-1",
          text: "Welcome to Course 24! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-24/announcement-1",
          creationTime: "2023-12-11T09:00:00.000Z",
          updateTime: "2023-12-11T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 25
        {
          courseId: "25",
          id: "25-1",
          text: "Welcome to Course 25! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-25/announcement-1",
          creationTime: "2023-12-18T09:00:00.000Z",
          updateTime: "2023-12-18T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "26",
          id: "26-1",
          text: "Welcome to Course 26! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-26/announcement-1",
          creationTime: "2023-12-25T09:00:00.000Z",
          updateTime: "2023-12-25T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "26",
          id: "26-2",
          text: "Reminder: Assignment due on January 1st.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-26/announcement-2",
          creationTime: "2023-12-26T14:30:00.000Z",
          updateTime: "2023-12-26T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "26",
          id: "26-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-26/announcement-3",
          creationTime: "2023-12-27T17:45:00.000Z",
          updateTime: "2023-12-27T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 27
        {
          courseId: "27",
          id: "27-1",
          text: "Welcome to Course 27! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-27/announcement-1",
          creationTime: "2023-12-28T09:00:00.000Z",
          updateTime: "2023-12-28T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "27",
          id: "27-2",
          text: "Reminder: Assignment due on January 4th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-27/announcement-2",
          creationTime: "2023-12-29T14:30:00.000Z",
          updateTime: "2023-12-29T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "27",
          id: "27-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-27/announcement-3",
          creationTime: "2023-12-30T17:45:00.000Z",
          updateTime: "2023-12-30T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 28
        {
          courseId: "28",
          id: "28-1",
          text: "Welcome to Course 28! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-28/announcement-1",
          creationTime: "2023-12-31T09:00:00.000Z",
          updateTime: "2023-12-31T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "28",
          id: "28-2",
          text: "Reminder: Assignment due on January 7th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-28/announcement-2",
          creationTime: "2024-01-01T14:30:00.000Z",
          updateTime: "2024-01-01T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "28",
          id: "28-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-28/announcement-3",
          creationTime: "2024-01-02T17:45:00.000Z",
          updateTime: "2024-01-02T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 29
        {
          courseId: "29",
          id: "29-1",
          text: "Welcome to Course 29! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-29/announcement-1",
          creationTime: "2024-01-03T09:00:00.000Z",
          updateTime: "2024-01-03T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "29",
          id: "29-2",
          text: "Reminder: Assignment due on January 10th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-29/announcement-2",
          creationTime: "2024-01-04T14:30:00.000Z",
          updateTime: "2024-01-04T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "29",
          id: "29-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-29/announcement-3",
          creationTime: "2024-01-05T17:45:00.000Z",
          updateTime: "2024-01-05T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 30
        {
          courseId: "30",
          id: "30-1",
          text: "Welcome to Course 30! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-30/announcement-1",
          creationTime: "2024-01-06T09:00:00.000Z",
          updateTime: "2024-01-06T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "30",
          id: "30-2",
          text: "Reminder: Assignment due on January 13th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-30/announcement-2",
          creationTime: "2024-01-07T14:30:00.000Z",
          updateTime: "2024-01-07T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "30",
          id: "30-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-30/announcement-3",
          creationTime: "2024-01-08T17:45:00.000Z",
          updateTime: "2024-01-08T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 31
        {
          courseId: "31",
          id: "31-1",
          text: "Welcome to Course 31! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-31/announcement-1",
          creationTime: "2024-01-09T09:00:00.000Z",
          updateTime: "2024-01-09T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "31",
          id: "31-2",
          text: "Reminder: Assignment due on January 16th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-31/announcement-2",
          creationTime: "2024-01-10T14:30:00.000Z",
          updateTime: "2024-01-10T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "31",
          id: "31-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-31/announcement-3",
          creationTime: "2024-01-11T17:45:00.000Z",
          updateTime: "2024-01-11T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        // Announcements for courseId 32
        {
          courseId: "32",
          id: "32-1",
          text: "Welcome to Course 32! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-32/announcement-1",
          creationTime: "2024-01-12T09:00:00.000Z",
          updateTime: "2024-01-12T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        {
          courseId: "32",
          id: "32-2",
          text: "Reminder: Assignment due on January 19th.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-32/announcement-2",
          creationTime: "2024-01-13T14:30:00.000Z",
          updateTime: "2024-01-13T14:30:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-2"
        },
        {
          courseId: "32",
          id: "32-3",
          text: "Important: Group project meeting at 3 PM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-32/announcement-3",
          creationTime: "2024-01-14T17:45:00.000Z",
          updateTime: "2024-01-14T17:45:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-3"
        },
        {
          courseId: "33",
          id: "33-1",
          text: "Welcome to Course 33! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-33/announcement-1",
          creationTime: "2024-01-16T09:00:00.000Z",
          updateTime: "2024-01-16T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 34
        {
          courseId: "34",
          id: "34-1",
          text: "Welcome to Course 34! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-34/announcement-1",
          creationTime: "2024-01-17T09:00:00.000Z",
          updateTime: "2024-01-17T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 35
        {
          courseId: "35",
          id: "35-1",
          text: "Welcome to Course 35! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-35/announcement-1",
          creationTime: "2024-01-18T09:00:00.000Z",
          updateTime: "2024-01-18T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 36
        {
          courseId: "36",
          id: "36-1",
          text: "Welcome to Course 36! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-36/announcement-1",
          creationTime: "2024-01-19T09:00:00.000Z",
          updateTime: "2024-01-19T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 37
        {
          courseId: "37",
          id: "37-1",
          text: "Welcome to Course 37! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-37/announcement-1",
          creationTime: "2024-01-20T09:00:00.000Z",
          updateTime: "2024-01-20T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 38
        {
          courseId: "38",
          id: "38-1",
          text: "Welcome to Course 38! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-38/announcement-1",
          creationTime: "2024-01-21T09:00:00.000Z",
          updateTime: "2024-01-21T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 39
        {
          courseId: "39",
          id: "39-1",
          text: "Welcome to Course 39! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-39/announcement-1",
          creationTime: "2024-01-22T09:00:00.000Z",
          updateTime: "2024-01-22T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 40
        {
          courseId: "40",
          id: "40-1",
          text: "Welcome to Course 40! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-40/announcement-1",
          creationTime: "2024-01-23T09:00:00.000Z",
          updateTime: "2024-01-23T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 41
        {
          courseId: "41",
          id: "41-1",
          text: "Welcome to Course 41! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-41/announcement-1",
          creationTime: "2024-01-24T09:00:00.000Z",
          updateTime: "2024-01-24T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 42
        {
          courseId: "42",
          id: "42-1",
          text: "Welcome to Course 42! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-42/announcement-1",
          creationTime: "2024-01-25T09:00:00.000Z",
          updateTime: "2024-01-25T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 43
        {
          courseId: "43",
          id: "43-1",
          text: "Welcome to Course 43! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-43/announcement-1",
          creationTime: "2024-01-26T09:00:00.000Z",
          updateTime: "2024-01-26T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 44
        {
          courseId: "44",
          id: "44-1",
          text: "Welcome to Course 44! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-44/announcement-1",
          creationTime: "2024-01-27T09:00:00.000Z",
          updateTime: "2024-01-27T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        },
        // Announcements for courseId 45
        {
          courseId: "45",
          id: "45-1",
          text: "Welcome to Course 45! Lecture starts at 9 AM.",
          state: "PUBLISHED",
          alternateLink: "https://classroom.google.com/c/course-45/announcement-1",
          creationTime: "2024-01-28T09:00:00.000Z",
          updateTime: "2024-01-28T09:00:00.000Z",
          assigneeMode: "ALL_STUDENTS",
          creatorUserId: "user-1"
        }
      ]
    };
  }
});

// .svelte-kit/output/server/entries/endpoints/api/courses/_server.ts.js
var server_ts_exports = {};
__export(server_ts_exports, {
  GET: () => GET
});
var GET;
var init_server_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/courses/_server.ts.js"() {
    init_helpers();
    init_chunks();
    init_nodejs();
    GET = async ({ getClientAddress, cookies, url }) => {
      let courses2;
      {
        courses2 = await fetch_courses();
      }
      return json({ data: courses2 }, { status: 200 });
    };
  }
});

// .svelte-kit/output/server/entries/endpoints/api/posts/_courseId_/_server.ts.js
var server_ts_exports2 = {};
__export(server_ts_exports2, {
  GET: () => GET2
});
function get_posts(courseId) {
  return get_announcements(courseId).slice(0, 1);
}
var GET2;
var init_server_ts2 = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/posts/_courseId_/_server.ts.js"() {
    init_helpers();
    init_chunks();
    init_nodejs();
    GET2 = async ({ params, cookies }) => {
      let courseId = params.courseId;
      let posts;
      const last_fetched = Number(cookies.get(courseId));
      {
        await delay();
        posts = get_posts(courseId);
      }
      let updated2 = false;
      if (posts?.length) {
        const latest_post_time = new Date(posts[0].updateTime).getTime();
        if (!!last_fetched && !!latest_post_time) {
          updated2 = latest_post_time > last_fetched;
        }
      }
      cookies.set(courseId, Date.now().toString());
      return json({ data: posts, updated: updated2 }, { status: 200 });
    };
  }
});

// .svelte-kit/output/server/index.js
init_prod_ssr();
init_internal();
init_chunks();
init_index2();
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD"
]);
var PAGE_METHODS = /* @__PURE__ */ new Set(["GET", "POST", "HEAD"]);
function negotiate(accept, types2) {
  const parts = [];
  accept.split(",").forEach((str, i3) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i: i3 });
    }
  });
  parts.sort((a3, b3) => {
    if (a3.q !== b3.q) {
      return b3.q - a3.q;
    }
    if (a3.subtype === "*" !== (b3.subtype === "*")) {
      return a3.subtype === "*" ? 1 : -1;
    }
    if (a3.type === "*" !== (b3.type === "*")) {
      return a3.type === "*" ? 1 : -1;
    }
    return a3.i - b3.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types2) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types2) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types2.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = 0;
  for (let i3 = 0; i3 < params.length; i3 += 1) {
    const param = params[i3];
    let value = values[i3 - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i3 - buffered, i3 + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i3 + 1];
      const next_value = values[i3 + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = Array.from(ENDPOINT_METHODS).filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options22, status, message2) {
  let page2 = options22.templates.error({ status, message: message2 });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options22, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options22, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options22, status, body.message);
}
async function handle_error_and_jsonify(event, options22, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options22.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return new Response(void 0, {
        status: e2.status,
        headers: { location: e2.location }
      });
    }
    throw e2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.has(method) && !PAGE_METHODS.has(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback2) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback2();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message2, keys) {
    super(message2);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i3 = 0; i3 < len; i3 += 1) {
    const char = str[i3];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i3) + replacement;
      last_pos = i3 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i3) => {
            keys.push(`[${i3}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive$1(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a3, b3) => b3[1] - a3[1]).forEach((entry, i3) => {
    names.set(entry[0], get_name(i3));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive$1(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v3, i3) => i3 in thing ? stringify2(v3) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive$1(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v3, i3) => {
            statements.push(`${name}[${i3}]=${stringify2(v3)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v3) => `add(${stringify2(v3)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k3, v3]) => `set(${stringify2(k3)}, ${stringify2(v3)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c3) {
  return escaped[c3] || c3;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive$1(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p3 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index22 = p3++;
    indexes.set(thing, index22);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index22] = `["${key2}",${flatten(value2)}]`;
        return index22;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i3 = 0; i3 < thing.length; i3 += 1) {
            if (i3 > 0)
              str += ",";
            if (i3 in thing) {
              keys.push(`[${i3}]`);
              str += flatten(thing[i3]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index22] = str;
    return index22;
  }
  const index5 = flatten(value);
  if (index5 < 0)
    return `${index5}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options22, server2) {
  const actions3 = server2?.actions;
  if (!actions3) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options22, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions3);
  try {
    const data2 = await call_action(event, actions3);
    if (false)
      ;
    if (data2 instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data2.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data2.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data2 ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data2,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options22, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect2) {
  return action_json({
    type: "redirect",
    status: redirect2.status,
    location: redirect2.location
  });
}
function action_json(data2, init22) {
  return json(data2, init22);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions3 = server2?.actions;
  if (!actions3) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions3);
  try {
    const data2 = await call_action(event, actions3);
    if (false)
      ;
    if (data2 instanceof ActionFailure) {
      return {
        type: "failure",
        status: data2.status,
        data: data2.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data: data2
      };
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions3) {
  if (actions3.default && Object.keys(actions3).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions3) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions3[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data2, route_id) {
  return try_deserialize(data2, uneval, route_id);
}
function stringify_action_response(data2, route_id) {
  return try_deserialize(data2, stringify, route_id);
}
function try_deserialize(data2, fn, route_id) {
  try {
    return fn(data2);
  } catch (e2) {
    const error2 = (
      /** @type {any} */
      e2
    );
    if ("path" in error2) {
      let message2 = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message2 += ` (data.${error2.path})`;
      throw new Error(message2);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function load_server_data({
  event,
  state: state2,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state2.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init22) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init22);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data2 = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data: data2,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data2 = result ? await unwrap_promises(result) : null;
  return data2;
}
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  return async (input, init22) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init22?.headers;
    let response = await event.fetch(input, init22);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init22?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init22?.body
              ),
              request_headers: cloned_headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder4 = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder4.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i3 = value.length;
      while (i3)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i3);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i3 = buffer.length;
      while (i3)
        hash2 = hash2 * 33 ^ buffer[--i3];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s3 = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data2) {
  if (!key[0])
    precompute();
  const out = init3.slice(0);
  const array2 = encode$1(data2);
  for (let i3 = 0; i3 < array2.length; i3 += 16) {
    const w3 = array2.subarray(i3, i3 + 16);
    let tmp;
    let a3;
    let b3;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w3[i22];
      } else {
        a3 = w3[i22 + 1 & 15];
        b3 = w3[i22 + 14 & 15];
        tmp = w3[i22 & 15] = (a3 >>> 7 ^ a3 >>> 18 ^ a3 >>> 3 ^ a3 << 25 ^ a3 << 14) + (b3 >>> 17 ^ b3 >>> 19 ^ b3 >>> 10 ^ b3 << 15 ^ b3 << 13) + w3[i22 & 15] + w3[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init3 = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  let prime = 2;
  for (let i3 = 0; i3 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i3 < 8) {
        init3[i3] = frac(prime ** (1 / 2));
      }
      key[i3] = frac(prime ** (1 / 3));
      i3++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i3 = 0; i3 < bytes.length; i3 += 4) {
    const a3 = bytes[i3 + 0];
    const b3 = bytes[i3 + 1];
    const c3 = bytes[i3 + 2];
    const d3 = bytes[i3 + 3];
    bytes[i3 + 0] = d3;
    bytes[i3 + 1] = c3;
    bytes[i3 + 2] = b3;
    bytes[i3 + 3] = a3;
  }
}
function encode$1(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l3 = bytes.length;
  let result = "";
  let i3;
  for (i3 = 2; i3 < l3; i3 += 3) {
    result += chars[bytes[i3 - 2] >> 2];
    result += chars[(bytes[i3 - 2] & 3) << 4 | bytes[i3 - 1] >> 4];
    result += chars[(bytes[i3 - 1] & 15) << 2 | bytes[i3] >> 6];
    result += chars[bytes[i3] & 63];
  }
  if (i3 === l3 + 1) {
    result += chars[bytes[i3 - 2] >> 2];
    result += chars[(bytes[i3 - 2] & 3) << 4];
    result += "==";
  }
  if (i3 === l3) {
    result += chars[bytes[i3 - 2] >> 2];
    result += chars[(bytes[i3 - 2] & 3) << 4 | bytes[i3 - 1] >> 4];
    result += chars[(bytes[i3 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce2) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d3 = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d3["script-src"] || d3["default-src"];
    const effective_style_src = d3["style-src"] || d3["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce2);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce2) {
    super(use_hashes, directives, nonce2);
    if (Object.values(directives).filter((v3) => !!v3).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f3, r3) => {
    fulfil = f3;
    reject = r3;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options22,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state2.prerendering) {
    if (options22.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options22.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets5 = new Set(client.stylesheets);
  const fonts5 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s3(base);
  if (!state2.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s3(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data22 = {};
    for (let i3 = 0; i3 < branch.length; i3 += 1) {
      data22 = { ...data22, ...branch[i3].data };
      props[`data_${i3}`] = data22;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data22,
      form: form_value
    };
    {
      try {
        rendered = options22.root.render(props);
      } finally {
        reset2();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets5.add(url);
      for (const url of node.fonts)
        fonts5.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k3, v3]) => inline_styles.set(k3, v3));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options22.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global2 = `__sveltekit_${options22.version_hash}`;
  const { data: data2, chunks } = get_data(
    event,
    options22,
    branch.map((b3) => b3.server_data),
    global2
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options22.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state2.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s3(assets)}`,
      `base: ${base_expression}`,
      `env: ${s3(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global2} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data2};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options22.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s3(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s3(prefixed(client.start))}),
						import(${s3(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options22.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options22.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options22, nodes, global2) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data2) => ({ data: data2 })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options22, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data: data2, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data: data2, error: error2 }, replacer);
          } catch (e2) {
            error2 = await handle_error_and_jsonify(
              event,
              options22,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data2 = void 0;
            str = uneval({ id, data: data2, error: error2 }, replacer);
          }
          push(`<script>${global2}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global2}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e2) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e2
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options22,
  manifest: manifest2,
  state: state2,
  status,
  error: error2,
  resolve_opts
}) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        state: state2,
        node: default_layout,
        parent: async () => ({}),
        track_server_fetches: options22.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data2 = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data: data2
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options22,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options22, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return redirect_response(e2.status, e2.location);
    }
    return static_error_page(
      options22,
      e2 instanceof HttpError ? e2.status : 500,
      (await handle_error_and_jsonify(event, options22, e2)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder5 = new TextEncoder();
async function render_data(event, route, options22, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n3, i3) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n3 == void 0 ? n3 : await manifest2._.nodes[n3]();
          return load_server_data({
            event: new_event,
            state: state2,
            node,
            parent: async () => {
              const data22 = {};
              for (let j3 = 0; j3 < i3; j3 += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j3]()
                );
                if (parent) {
                  Object.assign(data22, parent.data);
                }
              }
              return data22;
            },
            track_server_fetches: options22.track_server_fetches
          });
        } catch (e2) {
          aborted = true;
          throw e2;
        }
      });
    });
    const promises = functions.map(async (fn, i3) => {
      if (!invalidated[i3]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p3, i3) => p3.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i3 + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options22, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data: data2, chunks } = get_data_json(event, options22, nodes);
    if (!chunks) {
      return json_response(data2);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder5.encode(data2));
          for await (const chunk of chunks) {
            controller.enqueue(encoder5.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e2) {
    const error2 = normalize_error(e2);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options22, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect2) {
  return json_response({
    type: "redirect",
    location: redirect2.location
  });
}
function get_data_json(event, options22, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e2) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options22,
              /** @type {any} */
              e2
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e2) {
              const error2 = await handle_error_and_jsonify(
                event,
                options22,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e2) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e2
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options22, manifest2, state2, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options22, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n3) => n3 == void 0 ? n3 : manifest2._.nodes[n3]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options22,
        manifest: manifest2,
        state: state2,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i3) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state: state2,
            node,
            parent: async () => {
              const data2 = {};
              for (let j3 = 0; j3 < i3; j3 += 1) {
                const parent = await server_promises[j3];
                if (parent)
                  Object.assign(data2, await parent.data);
              }
              return data2;
            },
            track_server_fetches: options22.track_server_fetches
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i3) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data2 = {};
              for (let j3 = 0; j3 < i3; j3 += 1) {
                Object.assign(data2, await load_promises[j3]);
              }
              return data2;
            },
            resolve_opts,
            server_data_promise: server_promises[i3],
            state: state2,
            csr
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    for (const p3 of server_promises)
      p3.catch(() => {
      });
    for (const p3 of load_promises)
      p3.catch(() => {
      });
    for (let i3 = 0; i3 < nodes.length; i3 += 1) {
      const node = nodes[i3];
      if (node) {
        try {
          const server_data = await server_promises[i3];
          const data2 = await load_promises[i3];
          branch.push({ node, server_data, data: data2 });
        } catch (e2) {
          const err = normalize_error(e2);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options22, err);
          while (i3--) {
            if (page2.errors[i3]) {
              const index5 = (
                /** @type {number} */
                page2.errors[i3]
              );
              const node2 = await manifest2._.nodes[index5]();
              let j3 = i3;
              while (!branch[j3])
                j3 -= 1;
              return await render_response({
                event,
                options: options22,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j3 + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options22, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state2.prerendering && should_prerender_data) {
      let { data: data2, chunks } = get_data_json(
        event,
        options22,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data2 += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data2),
        body: data2
      });
    }
    return await render_response({
      event,
      options: options22,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e2) {
    return await respond_with_error({
      event,
      options: options22,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e2,
      resolve_opts
    });
  }
}
var parse_1 = parse$1;
var serialize_1 = serialize2;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options22) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options22 || {};
  var dec = opt.decode || decode5;
  var index5 = 0;
  while (index5 < str.length) {
    var eqIdx = str.indexOf("=", index5);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index5);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index5, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index5 = endIdx + 1;
  }
  return obj;
}
function serialize2(name, val, options22) {
  var opt = options22 || {};
  var enc = opt.encode || encode5;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode5(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode5(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode22) {
  try {
    return decode22(str);
  } catch (e2) {
    return str;
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = parse_1(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c3 = new_cookies[name];
      if (c3 && domain_matches(url.hostname, c3.options.domain) && path_matches(url.pathname, c3.options.path)) {
        return c3.value;
      }
      const decoder4 = opts?.decode || decodeURIComponent;
      const req_cookies = parse_1(header, { decode: decoder4 });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder4 = opts?.decode || decodeURIComponent;
      const cookies2 = parse_1(header, { decode: decoder4 });
      for (const c3 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c3.options.domain) && path_matches(url.pathname, c3.options.path)) {
          cookies2[c3.name] = c3.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return serialize_1(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = parse_1(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, opts) {
    const path = opts.path ?? default_path;
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options22 } = new_cookie;
    headers.append("set-cookie", serialize_1(name, value, options22));
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options22) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options22 = options22 ? Object.assign({}, defaultParseOptions, options22) : defaultParseOptions;
  try {
    value = options22.decodeValues ? decodeURIComponent(value) : value;
  } catch (e2) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e2
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
function parse2(input, options22) {
  options22 = options22 ? Object.assign({}, defaultParseOptions, options22) : defaultParseOptions;
  if (!input) {
    if (!options22.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      input = input.headers["set-cookie"];
    } else {
      var sch = input.headers[Object.keys(input.headers).find(function(key2) {
        return key2.toLowerCase() === "set-cookie";
      })];
      if (!sch && input.headers.cookie && !options22.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options22 = options22 ? Object.assign({}, defaultParseOptions, options22) : defaultParseOptions;
  if (!options22.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options22);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options22);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse2;
setCookie.exports.parse = parse2;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function create_fetch({ event, options: options22, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  return async (info, init22) => {
    const original_request = normalize_fetch_input(info, init22, event.url);
    let mode = (info instanceof Request ? info.mode : init22?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init22?.credentials) ?? "same-origin";
    return await options22.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init32) => {
        const request = normalize_fetch_input(info2, init32, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init32?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init32?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options22, manifest2, {
          ...state2,
          depth: state2.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of splitCookiesString_1(set_cookie)) {
            const { name, value, ...options3 } = parseString_1(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init22, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init22);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options22, manifest2, state2) {
  const url = new URL(request.url);
  if (options22.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state2.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state2.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n3) => n3 == void 0 ? n3 : manifest2._.nodes[n3]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options22,
      manifest: manifest2,
      state: state2,
      get_cookie_header,
      set_internal
    });
    if (state2.prerendering && !state2.prerendering.fallback)
      disable_search(url);
    const response = await options22.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state2.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e2) : route?.page && is_action_json_request(event) ? action_json_redirect(e2) : redirect_response(e2.status, e2.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options22, e2);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options22,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options22,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state2);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options22, manifest2, state2, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v3) => v3.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options22,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e2) {
      return await handle_fatal_error(event2, options22, e2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k3]) => k3.startsWith(private_prefix) && (public_prefix === "" || !k3.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k3]) => k3.startsWith(public_prefix) && (private_prefix === "" || !k3.startsWith(private_prefix))
    )
  );
}
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve }) => resolve(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options22) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options22,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["apple-touch-icon-180x180.png", "favicon.ico", "favicon.png", "final.png", "maskable-icon-512x512.png", "page-shot.webp", "pwa-192x192.png", "pwa-512x512.png", "pwa-64x64.png", "service-worker.js"]),
    mimeTypes: { ".png": "image/png", ".ico": "image/vnd.microsoft.icon", ".webp": "image/webp" },
    _: {
      client: { "start": "_app/immutable/entry/start.3fad91f0.js", "app": "_app/immutable/entry/app.ba286bf6.js", "imports": ["_app/immutable/entry/start.3fad91f0.js", "_app/immutable/chunks/scheduler.433f0f0f.js", "_app/immutable/chunks/singletons.2f50626b.js", "_app/immutable/entry/app.ba286bf6.js", "_app/immutable/chunks/scheduler.433f0f0f.js", "_app/immutable/chunks/index.339c83b0.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/api/courses",
          pattern: /^\/api\/courses\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts(), server_ts_exports)))
        },
        {
          id: "/api/posts/[courseId]",
          pattern: /^\/api\/posts\/([^/]+?)\/?$/,
          params: [{ "name": "courseId", "optional": false, "rest": false, "chained": false }],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts2(), server_ts_exports2)))
        },
        {
          id: "/feed",
          pattern: /^\/feed\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();

// .svelte-kit/vercel-tmp/fn/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
