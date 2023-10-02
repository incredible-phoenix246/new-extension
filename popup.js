
(() => {
  "use strict";
  var e,
    t,
    n = {
      767: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          l = n.n(o)()(a());
        l.push([
          e.id,
          '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nbody,\nhtml {\n  border-radius: 10px !important;\n}\n.main {\n  padding: 20px;\n  width: 250px;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header .logo img {\n  width: 70%;\n}\n\n.header .assets {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 20px;\n}\n\n.main-container {\n  margin-bottom: 20px;\n  padding-right: 30px;\n}\n.main-container h2 {\n  color: #413c6d;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: "Work Sans", sans-serif;\n  line-height: normal;\n}\n.tabs {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  text-align: center;\n}\n\n.tabs .computer {\n  color: #928fab;\n}\n\n/* .tabs .computer:hover,\n.tabs .current:hover {\n  border: 1px solid #120b48;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 5px;\n} */\n\n.tabs .current {\n  color: #120b48;\n}\n\n.tabs .current p {\n  font-weight: 600;\n}\n\n.tabs .computer i {\n  font-weight: 300;\n}\n\n.camera,\n.audio {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #120b48;\n  padding: 0px 10px;\n  border-radius: 10px;\n  margin-top: 20px;\n}\n\n.video,\n.mic {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  color: #120b48;\n}\n\n.video p,\n.mic p {\n  font-weight: 600;\n}\n\n.btn-record {\n  width: 100%;\n  background-color: #120b48;\n  border-radius: 10px;\n  text-transform: capitalize;\n  padding: 10px;\n  margin-top: 20px;\n}\n\n.no {\n  min-width: 600px;\n  min-height: 439px;\n  padding: 24px 24px 36px 24px;\n}\n',
          "",
        ]);
        const i = l;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var l = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (l[u] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (r && l[c[0]]) ||
                  (void 0 !== o &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = o)),
                  n &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = n))
                      : (c[2] = n)),
                  a &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = a))
                      : (c[4] = "".concat(a))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      679: (e, t, n) => {
        var r = n(296),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          l = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          i = {};
        function u(e) {
          return r.isMemo(e) ? l : i[e.$$typeof] || a;
        }
        (i[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (i[r.Memo] = l);
        var s = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (h) {
              var a = p(n);
              a && a !== h && e(t, a, r);
            }
            var l = c(n);
            d && (l = l.concat(d(n)));
            for (var i = u(t), m = u(n), g = 0; g < l.length; ++g) {
              var y = l[g];
              if (!(o[y] || (r && r[y]) || (m && m[y]) || (i && i[y]))) {
                var v = f(n, y);
                try {
                  s(t, y, v);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      103: (e, t) => {
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          l = n ? Symbol.for("react.strict_mode") : 60108,
          i = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          s = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          v = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function k(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case o:
                  case i:
                  case l:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case f:
                      case g:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function x(e) {
          return k(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = s),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = o),
          (t.Lazy = g),
          (t.Memo = m),
          (t.Portal = a),
          (t.Profiler = i),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return x(e) || k(e) === c;
          }),
          (t.isConcurrentMode = x),
          (t.isContextConsumer = function (e) {
            return k(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return k(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return k(e) === f;
          }),
          (t.isFragment = function (e) {
            return k(e) === o;
          }),
          (t.isLazy = function (e) {
            return k(e) === g;
          }),
          (t.isMemo = function (e) {
            return k(e) === m;
          }),
          (t.isPortal = function (e) {
            return k(e) === a;
          }),
          (t.isProfiler = function (e) {
            return k(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return k(e) === l;
          }),
          (t.isSuspense = function (e) {
            return k(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === o ||
              e === d ||
              e === i ||
              e === l ||
              e === p ||
              e === h ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === m ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === f ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = k);
      },
      296: (e, t, n) => {
        e.exports = n(103);
      },
      448: (e, t, n) => {
        var r = n(294),
          a = n(840);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          z = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function $(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          F = Object.assign;
        function A(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var j = !1;
        function D(e, t) {
          if (!e || j) return "";
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var a = t.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return D(e.type, !1);
            case 11:
              return D(e.type.render, !1);
            case 1:
              return D(e.type, !0);
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case T:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case z:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (e) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" == typeof t)
                return t.displayName || t.name || null;
              if ("string" == typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" != typeof xe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), xe(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Pe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function ze(e, t) {
          return e(t);
        }
        function Te() {}
        var Oe = !1;
        function Ne(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return ze(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== Ee) && (Te(), Pe());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Le = !1;
          }
        function $e(e, t, n, r, a, o, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var Ie = !1,
          Fe = null,
          Ae = !1,
          je = null,
          De = {
            onError: function (e) {
              (Ie = !0), (Fe = e);
            },
          };
        function Be(e, t, n, r, a, o, l, i, u) {
          (Ie = !1), (Fe = null), $e.apply(De, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ve(e) !== e) throw Error(o(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return We(a), e;
                    if (l === r) return We(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null,
          lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2,
          st = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 != (o &= l) && (r = dt(o));
          } else 0 != (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 == (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          Et,
          Ct,
          _t = !1,
          Pt = [],
          zt = null,
          Tt = null,
          Ot = null,
          Nt = new Map(),
          Rt = new Map(),
          Lt = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function $t(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              zt = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          At(e) && n.delete(t);
        }
        function Dt() {
          (_t = !1),
            null !== zt && At(zt) && (zt = null),
            null !== Tt && At(Tt) && (Tt = null),
            null !== Ot && At(Ot) && (Ot = null),
            Nt.forEach(jt),
            Rt.forEach(jt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Dt)));
        }
        function Vt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== zt && Bt(zt, e),
              null !== Tt && Bt(Tt, e),
              null !== Ot && Bt(Ot, e),
              Nt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Lt.shift();
        }
        var Ut = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Ht(e, t, n, r) {
          var a = bt,
            o = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ut.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ut.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Wt) {
            var a = Gt(e, t, n, r);
            if (null === a) Wr(e, t, r, qt, n), $t(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (zt = It(zt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Tt = It(Tt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = It(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Nt.set(o, It(Nt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Rt.set(o, It(Rt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if (($t(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && kt(o),
                  null === (o = Gt(e, t, n, r)) && Wr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Gt(e, t, n, r) {
          if (((qt = null), null !== (e = va((e = ke(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          dn = F({}, sn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          gn = an(F({}, dn, { relatedTarget: 0 })),
          yn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          wn = an(F({}, sn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var _n = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(_n),
          zn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          On = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Nn),
          Ln = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          $n = null;
        c && "documentMode" in document && ($n = document.documentMode);
        var In = c && "TextEvent" in window && !$n,
          Fn = c && (!Mn || ($n && 8 < $n && 11 >= $n)),
          An = String.fromCharCode(32),
          jn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1,
          Un = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          _e(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Qn = null;
        function qn(e) {
          Ar(e, 0);
        }
        function Gn(e) {
          if (Q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" == typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (Qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Qn)) {
            var t = [];
            Hn(t, Qn, e, ke(e)), Ne(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Qn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var ir =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== q(r) ||
            ((r =
              "selectionStart" in (r = gr) && pr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (vr && ur(vr, r)) ||
              ((vr = r),
              0 < (r = Kr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var _r = Cr("animationend"),
          Pr = Cr("animationiteration"),
          zr = Cr("animationstart"),
          Tr = Cr("transitionend"),
          Or = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Lr = 0; Lr < Nr.length; Lr++) {
          var Mr = Nr[Lr];
          Rr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Rr(_r, "onAnimationEnd"),
          Rr(Pr, "onAnimationIteration"),
          Rr(zr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Tr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var $r =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat($r)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, s) {
              if ((Be.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(o(198));
                var c = Fe;
                (Ie = !1), (Fe = null), Ae || ((Ae = !0), (je = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, i, s), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, i, s), (o = u);
                }
            }
          }
          if (Ae) throw ((e = je), (Ae = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Dr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Dr(t, !1, e), Dr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Dr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = va(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = o,
              a = ke(n),
              l = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tn;
                    break;
                  case _r:
                  case Pr:
                  case zr:
                    u = yn;
                    break;
                  case Tr:
                    u = On;
                    break;
                  case "scroll":
                    u = fn;
                    break;
                  case "wheel":
                    u = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = zn;
                }
                var c = 0 != (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Re(h, f)) &&
                        c.push(Hr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  l.push({ event: i, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!va(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? va(s)
                          : null) &&
                        (s !== (d = Ve(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = zn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == u ? i : wa(u)),
                  (p = null == s ? i : wa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(f, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && qr(l, i, u, c, !1),
                  null !== s && null !== d && qr(l, d, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Yn;
              else if (Wn(i))
                if (Xn) g = lr;
                else {
                  g = ar;
                  var y = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Hn(l, g, n, a)
                  : (y && y(e, i, r),
                    "focusout" === e &&
                      (y = i._wrapperState) &&
                      y.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var v;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Dn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (v = en())
                    : ((Zt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Vn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: y }),
                  (v || null !== (v = Bn(n))) && (b.data = v))),
                (v = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((jn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Mn && Dn(e, t))
                          ? ((e = en()), (Jt = Zt = Xt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Ar(l, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift(Hr(e, o, a)),
              null != (o = Re(e, t)) && r.push(Hr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Re(n, o)) && l.unshift(Hr(n, u, i))
                : a || (null != (u = Re(n, o)) && l.push(Hr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" == typeof setTimeout ? setTimeout : void 0,
          aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" == typeof Promise ? Promise : void 0,
          la =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ya = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function _a(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Pa = {},
          za = Ea(Pa),
          Ta = Ea(!1),
          Oa = Pa;
        function Na(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null != e.childContextTypes;
        }
        function La() {
          Ca(Ta), Ca(za);
        }
        function Ma(e, t, n) {
          if (za.current !== Pa) throw Error(o(168));
          _a(za, t), _a(Ta, n);
        }
        function $a(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, U(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (Oa = za.current),
            _a(za, e),
            _a(Ta, Ta.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = $a(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ta),
              Ca(za),
              _a(za, e))
            : Ca(Ta),
            _a(Ta, n);
        }
        var Aa = null,
          ja = !1,
          Da = !1;
        function Ba(e) {
          null === Aa ? (Aa = [e]) : Aa.push(e);
        }
        function Va() {
          if (!Da && null !== Aa) {
            Da = !0;
            var e = 0,
              t = bt;
            try {
              var n = Aa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Aa = null), (ja = !1);
            } catch (t) {
              throw (null !== Aa && (Aa = Aa.slice(e + 1)), Qe(Je, Va), t);
            } finally {
              (bt = t), (Da = !1);
            }
          }
          return null;
        }
        var Ua = [],
          Wa = 0,
          Ha = null,
          Ka = 0,
          Qa = [],
          qa = 0,
          Ga = null,
          Ya = 1,
          Xa = "";
        function Za(e, t) {
          (Ua[Wa++] = Ka), (Ua[Wa++] = Ha), (Ha = e), (Ka = t);
        }
        function Ja(e, t, n) {
          (Qa[qa++] = Ya), (Qa[qa++] = Xa), (Qa[qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Xa;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === Ha; )
            (Ha = Ua[--Wa]), (Ua[Wa] = null), (Ka = Ua[--Wa]), (Ua[Wa] = null);
          for (; e === Ga; )
            (Ga = Qa[--qa]),
              (Qa[qa] = null),
              (Xa = Qa[--qa]),
              (Qa[qa] = null),
              (Ya = Qa[--qa]),
              (Qa[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Rs(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Rs(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vo = Ea(null),
          bo = null,
          wo = null,
          ko = null;
        function xo() {
          ko = wo = bo = null;
        }
        function So(e) {
          var t = vo.current;
          Ca(vo), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Co(e, t) {
          (bo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function _o(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Po = null;
        function zo(e) {
          null === Po ? (Po = [e]) : Po.push(e);
        }
        function To(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), zo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var No = !1;
        function Ro(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Mo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function $o(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & Tu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), zo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Io(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ao(e, t, n, r) {
          var a = e.updateQueue;
          No = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = s = u = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (h = m.payload)
                            ? h.call(p, d, f)
                            : h)
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      No = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fu |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function jo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" != typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Do = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Mo(r, a);
            (o.payload = t),
              null != n && (o.callback = n),
              null !== (t = $o(e, o, a)) && (rs(t, e, a, r), Io(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Mo(r, a);
            (o.tag = 1),
              (o.payload = t),
              null != n && (o.callback = n),
              null !== (t = $o(e, o, a)) && (rs(t, e, a, r), Io(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Mo(n, r);
            (a.tag = 2),
              null != t && (a.callback = t),
              null !== (t = $o(e, a, r)) && (rs(t, e, r, n), Io(t, e, r));
          },
        };
        function Uo(e, t, n, r, a, o, l) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                ur(n, r) &&
                ur(a, o)
              );
        }
        function Wo(e, t, n) {
          var r = !1,
            a = Pa,
            o = t.contextType;
          return (
            "object" == typeof o && null !== o
              ? (o = _o(o))
              : ((a = Ra(t) ? Oa : za.current),
                (o = (r = null != (r = t.contextTypes)) ? Na(e, a) : Pa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Ho(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Do), Ro(e);
          var o = t.contextType;
          "object" == typeof o && null !== o
            ? (a.context = _o(o))
            : ((o = Ra(t) ? Oa : za.current), (a.context = Na(e, o))),
            (a.state = e.memoizedState),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vo.enqueueReplaceState(a, a.state, null),
              Ao(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Do && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" != typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ms(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = As(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" == typeof o &&
                    null !== o &&
                    o.$$typeof === R &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = Qo(e, t, n)), (r.return = e), r)
              : (((r = $s(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = js(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Is(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = As("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = $s(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = js(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || $(t))
                return ((t = Is(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || $(n)) return null !== a ? null : d(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || $(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function m(a, o, i, u) {
            for (
              var s = null, c = null, d = o, m = (o = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = p(a, d, i[m], u);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(a, d),
                (o = l(y, o, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === i.length) return n(a, d), ao && Za(a, m), s;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) &&
                  ((o = l(d, o, m)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d));
              return ao && Za(a, m), s;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (g = h(d, a, m, i[m], u)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (o = l(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, m),
              s
            );
          }
          function g(a, i, u, s) {
            var c = $(u);
            if ("function" != typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var d = (c = null), m = i, g = (i = 0), y = null, v = u.next();
              null !== m && !v.done;
              g++, v = u.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, v.value, s);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = l(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(a, m), ao && Za(a, g), c;
            if (null === m) {
              for (; !v.done; g++, v = u.next())
                null !== (v = f(a, v.value, s)) &&
                  ((i = l(v, i, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ao && Za(a, g), c;
            }
            for (m = r(a, m); !v.done; g++, v = u.next())
              null !== (v = h(m, a, g, v.value, s)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (i = l(v, i, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, g),
              c
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" == typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              "object" == typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case k:
                  e: {
                    for (var s = l.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" == typeof s &&
                            null !== s &&
                            s.$$typeof === R &&
                            Go(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = Qo(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === S
                      ? (((o = Is(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = $s(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = Qo(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case x:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = js(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case R:
                  return e(r, o, (c = l._init)(l._payload), u);
              }
              if (te(l)) return m(r, o, l, u);
              if ($(l)) return g(r, o, l, u);
              qo(r, l);
            }
            return ("string" == typeof l && "" !== l) || "number" == typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = As(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Xo = Yo(!0),
          Zo = Yo(!1),
          Jo = {},
          el = Ea(Jo),
          tl = Ea(Jo),
          nl = Ea(Jo);
        function rl(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((_a(nl, t), _a(tl, e), _a(el, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(el), _a(el, t);
        }
        function ol() {
          Ca(el), Ca(tl), Ca(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (_a(tl, e), _a(el, n));
        }
        function il(e) {
          tl.current === e && (Ca(el), Ca(tl));
        }
        var ul = Ea(0);
        function sl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cl = [];
        function dl() {
          for (var e = 0; e < cl.length; e++)
            cl[e]._workInProgressVersionPrimary = null;
          cl.length = 0;
        }
        var fl = w.ReactCurrentDispatcher,
          pl = w.ReactCurrentBatchConfig,
          hl = 0,
          ml = null,
          gl = null,
          yl = null,
          vl = !1,
          bl = !1,
          wl = 0,
          kl = 0;
        function xl() {
          throw Error(o(321));
        }
        function Sl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function El(e, t, n, r, a, l) {
          if (
            ((hl = l),
            (ml = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (wl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (yl = gl = null),
                (t.updateQueue = null),
                (fl.current = si),
                (e = n(r, a));
            } while (bl);
          }
          if (
            ((fl.current = li),
            (t = null !== gl && null !== gl.next),
            (hl = 0),
            (yl = gl = ml = null),
            (vl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Cl() {
          var e = 0 !== wl;
          return (wl = 0), e;
        }
        function _l() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yl ? (ml.memoizedState = yl = e) : (yl = yl.next = e), yl
          );
        }
        function Pl() {
          if (null === gl) {
            var e = ml.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gl.next;
          var t = null === yl ? ml.memoizedState : yl.next;
          if (null !== t) (yl = t), (gl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (gl = e).memoizedState,
              baseState: gl.baseState,
              baseQueue: gl.baseQueue,
              queue: gl.queue,
              next: null,
            }),
              null === yl ? (ml.memoizedState = yl = e) : (yl = yl.next = e);
          }
          return yl;
        }
        function zl(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Tl(e) {
          var t = Pl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = gl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = l;
            do {
              var d = c.lane;
              if ((hl & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = f), (i = r)) : (s = s.next = f),
                  (ml.lanes |= d),
                  (Fu |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (ml.lanes |= l), (Fu |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ol(e) {
          var t = Pl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (wi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Nl() {}
        function Rl(e, t) {
          var n = ml,
            r = Pl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Wl($l.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== yl && 1 & yl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              jl(9, Ml.bind(null, n, r, a, t), void 0, null),
              null === Ou)
            )
              throw Error(o(349));
            0 != (30 & hl) || Ll(n, t, a);
          }
          return a;
        }
        function Ll(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ml(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Il(t) && Fl(e);
        }
        function $l(e, t, n) {
          return n(function () {
            Il(t) && Fl(e);
          });
        }
        function Il(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Fl(e) {
          var t = Oo(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Al(e) {
          var t = _l();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: zl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ml, e)),
            [t.memoizedState, e]
          );
        }
        function jl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Dl() {
          return Pl().memoizedState;
        }
        function Bl(e, t, n, r) {
          var a = _l();
          (ml.flags |= e),
            (a.memoizedState = jl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vl(e, t, n, r) {
          var a = Pl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== gl) {
            var l = gl.memoizedState;
            if (((o = l.destroy), null !== r && Sl(r, l.deps)))
              return void (a.memoizedState = jl(t, n, o, r));
          }
          (ml.flags |= e), (a.memoizedState = jl(1 | t, n, o, r));
        }
        function Ul(e, t) {
          return Bl(8390656, 8, e, t);
        }
        function Wl(e, t) {
          return Vl(2048, 8, e, t);
        }
        function Hl(e, t) {
          return Vl(4, 2, e, t);
        }
        function Kl(e, t) {
          return Vl(4, 4, e, t);
        }
        function Ql(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ql(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Vl(4, 4, Ql.bind(null, t, e), n)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var n = Pl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xl(e, t) {
          var n = Pl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zl(e, t, n) {
          return 0 == (21 & hl)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (ml.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Jl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pl.transition = r);
          }
        }
        function ei() {
          return Pl().memoizedState;
        }
        function ti(e, t, n) {
          var r = ns(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            ri(e)
              ? ai(t, n)
              : null !== (n = To(e, t, n, r)) &&
                (rs(n, e, r, ts()), oi(n, t, r));
        }
        function ni(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), zo(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (e) {}
            null !== (n = To(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === ml || (null !== t && t === ml);
        }
        function ai(e, t) {
          bl = vl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var li = {
            readContext: _o,
            useCallback: xl,
            useContext: xl,
            useEffect: xl,
            useImperativeHandle: xl,
            useInsertionEffect: xl,
            useLayoutEffect: xl,
            useMemo: xl,
            useReducer: xl,
            useRef: xl,
            useState: xl,
            useDebugValue: xl,
            useDeferredValue: xl,
            useTransition: xl,
            useMutableSource: xl,
            useSyncExternalStore: xl,
            useId: xl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: _o,
            useCallback: function (e, t) {
              return (_l().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: _o,
            useEffect: Ul,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Bl(4194308, 4, Ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = _l();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = _l();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, ml, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (_l().memoizedState = e);
            },
            useState: Al,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (_l().memoizedState = e);
            },
            useTransition: function () {
              var e = Al(!1),
                t = e[0];
              return (
                (e = Jl.bind(null, e[1])), (_l().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ml,
                a = _l();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ou)) throw Error(o(349));
                0 != (30 & hl) || Ll(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Ul($l.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                jl(9, Ml.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = _l(),
                t = Ou.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + n)),
                  0 < (n = wl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = kl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: _o,
            useCallback: Yl,
            useContext: _o,
            useEffect: Wl,
            useImperativeHandle: ql,
            useInsertionEffect: Hl,
            useLayoutEffect: Kl,
            useMemo: Xl,
            useReducer: Tl,
            useRef: Dl,
            useState: function () {
              return Tl(zl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Zl(Pl(), gl.memoizedState, e);
            },
            useTransition: function () {
              return [Tl(zl)[0], Pl().memoizedState];
            },
            useMutableSource: Nl,
            useSyncExternalStore: Rl,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: _o,
            useCallback: Yl,
            useContext: _o,
            useEffect: Wl,
            useImperativeHandle: ql,
            useInsertionEffect: Hl,
            useLayoutEffect: Kl,
            useMemo: Xl,
            useReducer: Ol,
            useRef: Dl,
            useState: function () {
              return Ol(zl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = Pl();
              return null === gl
                ? (t.memoizedState = e)
                : Zl(t, gl.memoizedState, e);
            },
            useTransition: function () {
              return [Ol(zl)[0], Pl().memoizedState];
            },
            useMutableSource: Nl,
            useSyncExternalStore: Rl,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var pi = "function" == typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = Mo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hu || ((Hu = !0), (Ku = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Mo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" == typeof o.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" != typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _s.bind(null, e, t, n)), t.then(e, e));
        }
        function yi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, r, a) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Mo(-1, 1)).tag = 2), $o(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function ki(e, t, n, r) {
          t.child = null === e ? Zo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function xi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = El(e, t, n, r, o, a)),
            (n = Cl()),
            null === e || wi
              ? (ao && n && eo(t), (t.flags |= 1), ki(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" != typeof o ||
              Ls(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = $s(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ei(e, t, o, r, a));
          }
          if (((o = e.child), 0 == (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Hi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ms(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
                return (t.lanes = e.lanes), Hi(e, t, a);
              0 != (131072 & e.flags) && (wi = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function Ci(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _a(Mu, Lu),
                (Lu |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _a(Mu, Lu),
                  (Lu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                _a(Mu, Lu),
                (Lu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _a(Mu, Lu),
              (Lu |= r);
          return ki(e, t, a, n), t.child;
        }
        function _i(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var o = Ra(n) ? Oa : za.current;
          return (
            (o = Na(t, o)),
            Co(t, a),
            (n = El(e, t, n, r, o, a)),
            (r = Cl()),
            null === e || wi
              ? (ao && r && eo(t), (t.flags |= 1), ki(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function zi(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            Ia(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            Wi(e, t), Wo(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? _o(s)
                : Na(t, (s = Ra(n) ? Oa : za.current));
            var c = n.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                "function" != typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Ho(t, l, r, s)),
              (No = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ao(t, r, l, a),
              (u = t.memoizedState),
              i !== r || f !== u || Ta.current || No
                ? ("function" == typeof c &&
                    (Bo(t, n, c, r), (u = t.memoizedState)),
                  (i = No || Uo(t, n, i, r, f, u, s))
                    ? (d ||
                        ("function" != typeof l.UNSAFE_componentWillMount &&
                          "function" != typeof l.componentWillMount) ||
                        ("function" == typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" == typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" == typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = s),
                  (r = i))
                : ("function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Lo(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : yo(t.type, i)),
              (l.props = s),
              (d = t.pendingProps),
              (f = l.context),
              (u =
                "object" == typeof (u = n.contextType) && null !== u
                  ? _o(u)
                  : Na(t, (u = Ra(n) ? Oa : za.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" == typeof p ||
              "function" == typeof l.getSnapshotBeforeUpdate) ||
              ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                "function" != typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== u) && Ho(t, l, r, u)),
              (No = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ao(t, r, l, a);
            var h = t.memoizedState;
            i !== d || f !== h || Ta.current || No
              ? ("function" == typeof p &&
                  (Bo(t, n, p, r), (h = t.memoizedState)),
                (s = No || Uo(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                      ("function" != typeof l.UNSAFE_componentWillUpdate &&
                        "function" != typeof l.componentWillUpdate) ||
                      ("function" == typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, u),
                      "function" == typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" == typeof l.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = s))
              : ("function" != typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ti(e, t, n, r, o, a);
        }
        function Ti(e, t, n, r, a, o) {
          _i(e, t);
          var l = 0 != (128 & t.flags);
          if (!r && !l) return a && Fa(t, n, !1), Hi(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i =
            l && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, i, o)))
              : ki(e, t, i, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Oi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Ni(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), ki(e, t, n, r), t.child;
        }
        var Ri,
          Li,
          Mi,
          $i,
          Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ai(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 != (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            _a(ul, 1 & l),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 == (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Fs(u, a, 0, null)),
                      (e = Is(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = Ii),
                      e)
                    : ji(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Di(e, t, i, (r = di(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Is(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 != (1 & t.mode) && Xo(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = Ii),
                    l);
              if (0 == (1 & t.mode)) return Di(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Di(e, t, i, (r = di((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 != (i & e.childLanes)), wi || u)) {
                if (null !== (r = Ou)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Oo(e, a), rs(r, e, a, -1));
                }
                return gs(), Di(e, t, i, (r = di(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = zs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[qa++] = Ya),
                    (Qa[qa++] = Xa),
                    (Qa[qa++] = Ga),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  ((t = ji(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 == (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ms(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Ms(r, i))
                : ((i = Is(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ii),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ms(i, { mode: "visible", children: a.children })),
            0 == (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function ji(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Di(e, t, n, r) {
          return (
            null !== r && mo(r),
            Xo(t, e.child, null, n),
            ((e = ji(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Vi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Ui(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ki(e, t, r.children, n), 0 != (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t);
                else if (19 === e.tag) Bi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_a(ul, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Vi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === sl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Vi(t, !0, n, null, o);
                break;
              case "together":
                Vi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wi(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ms((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ms(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ca(Ta),
                Ca(za),
                dl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (is(oo), (oo = null)))),
                Li(e, t),
                Qi(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Mi(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Qi(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 != (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < $r.length; a++) jr($r[a], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      Y(r, l), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), jr("invalid", r);
                  }
                  for (var u in (ve(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      "children" === u
                        ? "string" == typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" == typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          jr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), J(r, l, !0);
                      break;
                    case "textarea":
                      K(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ri(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < $r.length; a++) jr($r[a], e);
                        a = r;
                        break;
                      case "source":
                        jr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (a = r);
                        break;
                      case "details":
                        jr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), jr("invalid", e);
                    }
                    for (l in (ve(n, a), (s = a)))
                      if (s.hasOwnProperty(l)) {
                        var c = s[l];
                        "style" === l
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" == typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" == typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && jr("scroll", e)
                              : null != c && b(e, l, c, u));
                      }
                    switch (n) {
                      case "input":
                        K(e), J(e, r, !1);
                        break;
                      case "textarea":
                        K(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) $i(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (Ca(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 != (1 & t.mode) &&
                  0 == (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[fa] = t;
                  } else
                    ho(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (l = !1);
                } else null !== oo && (is(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !=
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & ul.current)
                        ? 0 === $u && ($u = 3)
                        : gs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                ol(),
                Li(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Qi(t),
                null
              );
            case 10:
              return So(t.type._context), Qi(t), null;
            case 19:
              if ((Ca(ul), null === (l = t.memoizedState))) return Qi(t), null;
              if (((r = 0 != (128 & t.flags)), null === (u = l.rendering)))
                if (r) Ki(l, !1);
                else {
                  if (0 !== $u || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = sl(e))) {
                        for (
                          t.flags |= 128,
                            Ki(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return _a(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Uu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ki(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ki(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Qi(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Uu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ki(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ul.current),
                  _a(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & Lu) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                Ca(Ta),
                Ca(za),
                dl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (Ca(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ri = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Li = function () {}),
          (Mi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (l = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(c, s))
                      : "children" === c
                      ? ("string" != typeof s && "number" != typeof s) ||
                        (l = l || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && jr("scroll", e),
                            l || u === s || (l = []))
                          : (l = l || []).push(c, s));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          ($i = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Xi = !1,
          Zi = "function" == typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Cs(e, t, n);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (n) {
            Cs(e, t, n);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var du = null,
          fu = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" == typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Xi || eu(n, t);
            case 6:
              var r = du,
                a = fu;
              (du = null),
                pu(e, t, n),
                (fu = a),
                null !== (du = r) &&
                  (fu
                    ? ((e = du),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : du.removeChild(n.stateNode));
              break;
            case 18:
              null !== du &&
                (fu
                  ? ((e = du),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Vt(e))
                  : ua(du, n.stateNode));
              break;
            case 4:
              (r = du),
                (a = fu),
                (du = n.stateNode.containerInfo),
                (fu = !0),
                pu(e, t, n),
                (du = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 != (2 & o) || 0 != (4 & o)) &&
                      tu(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Xi &&
                (eu(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Cs(n, t, e);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xi = (r = Xi) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Xi = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zi()),
              t.forEach(function (t) {
                var r = Ts.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (du = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (du = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === du) throw Error(o(160));
                hu(l, i, a), (du = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (e) {
                Cs(a, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), vu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (t) {
                  Cs(e, e.return, t);
                }
                try {
                  ru(5, e, e.return);
                } catch (t) {
                  Cs(e, e.return, t);
                }
              }
              break;
            case 1:
              gu(t, e), vu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                vu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (t) {
                  Cs(e, e.return, t);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      be(u, i);
                    var c = be(u, l);
                    for (i = 0; i < s.length; i += 2) {
                      var d = s[i],
                        f = s[i + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (u) {
                      case "input":
                        Z(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (t) {
                    Cs(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), vu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (t) {
                  Cs(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                vu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (t) {
                  Cs(e, e.return, t);
                }
              break;
            case 4:
            default:
              gu(t, e), vu(e);
              break;
            case 13:
              gu(t, e),
                vu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Vu = Xe())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xi = (c = Xi) || d), gu(t, e), (Xi = c))
                  : gu(t, e),
                vu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                )
                  for (Ji = e, d = e.child; null !== d; ) {
                    for (f = Ji = d; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" == typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              Cs(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : xu(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" == typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = f.stateNode),
                              (i =
                                null != (s = f.memoizedProps.style) &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (t) {
                        Cs(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (t) {
                        Cs(e, e.return, t);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), vu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function vu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  su(e, uu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (t) {
              Cs(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Ji = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Xi;
                i = Yi;
                var s = Xi;
                if (((Yi = l), (Xi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (l = Ji).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = l), (Ji = u))
                        : Su(a);
                for (; null !== o; ) (Ji = o), wu(o, t, n), (o = o.sibling);
                (Ji = a), (Yi = i), (Xi = s);
              }
              ku(e);
            } else
              0 != (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Ji = o))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && jo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        jo(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xi || (512 & t.flags && ou(t));
              } catch (e) {
                Cs(t, t.return, e);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function xu(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function Su(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (e) {
                    Cs(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Cs(t, a, e);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (e) {
                    Cs(t, o, e);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    ou(t);
                  } catch (e) {
                    Cs(t, l, e);
                  }
              }
            } catch (e) {
              Cs(t, t.return, e);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          _u = w.ReactCurrentDispatcher,
          Pu = w.ReactCurrentOwner,
          zu = w.ReactCurrentBatchConfig,
          Tu = 0,
          Ou = null,
          Nu = null,
          Ru = 0,
          Lu = 0,
          Mu = Ea(0),
          $u = 0,
          Iu = null,
          Fu = 0,
          Au = 0,
          ju = 0,
          Du = null,
          Bu = null,
          Vu = 0,
          Uu = 1 / 0,
          Wu = null,
          Hu = !1,
          Ku = null,
          Qu = null,
          qu = !1,
          Gu = null,
          Yu = 0,
          Xu = 0,
          Zu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 != (6 & Tu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ns(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & Tu) && 0 !== Ru
            ? Ru & -Ru
            : null !== go.transition
            ? (0 === es && (es = mt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Zu = null), Error(o(185)));
          yt(e, n, r),
            (0 != (2 & Tu) && e === Ou) ||
              (e === Ou && (0 == (2 & Tu) && (Au |= n), 4 === $u && us(e, Ru)),
              as(e, r),
              1 === n &&
                0 === Tu &&
                0 == (1 & t.mode) &&
                ((Uu = Xe() + 500), ja && Va()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 != (i & n) && 0 == (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Ou ? Ru : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (ja = !0), Ba(e);
                  })(ss.bind(null, e))
                : Ba(ss.bind(null, e)),
                la(function () {
                  0 == (6 & Tu) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Os(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Ju = -1), (es = 0), 0 != (6 & Tu))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ou ? Ru : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Tu;
            Tu |= 2;
            var l = ms();
            for (
              (Ou === e && Ru === t) ||
              ((Wu = null), (Uu = Xe() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (t) {
                hs(e, t);
              }
            xo(),
              (_u.current = l),
              (Tu = a),
              null !== Nu ? (t = 0) : ((Ou = null), (Ru = 0), (t = $u));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Iu), ps(e, 0), us(e, r), as(e, Xe()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = ls(e, l))),
                  1 === t))
              )
                throw ((n = Iu), ps(e, 0), us(e, r), as(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xs(e, Bu, Wu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Vu + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Bu, Wu), t);
                    break;
                  }
                  xs(e, Bu, Wu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xs.bind(null, e, Bu, Wu), r);
                    break;
                  }
                  xs(e, Bu, Wu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Xe()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Du;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Bu), (Bu = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function us(e, t) {
          for (
            t &= ~ju,
              t &= ~Au,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 != (6 & Tu)) throw Error(o(327));
          Ss();
          var t = ft(e, 0);
          if (0 == (1 & t)) return as(e, Xe()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Iu), ps(e, 0), us(e, t), as(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Bu, Wu),
            as(e, Xe()),
            null
          );
        }
        function cs(e, t) {
          var n = Tu;
          Tu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tu = n) && ((Uu = Xe() + 500), ja && Va());
          }
        }
        function ds(e) {
          null !== Gu && 0 === Gu.tag && 0 == (6 & Tu) && Ss();
          var t = Tu;
          Tu |= 1;
          var n = zu.transition,
            r = bt;
          try {
            if (((zu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (zu.transition = n), 0 == (6 & (Tu = t)) && Va();
          }
        }
        function fs() {
          (Lu = Mu.current), Ca(Mu);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Nu))
            for (n = Nu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && La();
                  break;
                case 3:
                  ol(), Ca(Ta), Ca(za), dl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  Ca(ul);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Ou = e),
            (Nu = e = Ms(e.current, null)),
            (Ru = Lu = t),
            ($u = 0),
            (Iu = null),
            (ju = Au = Fu = 0),
            (Bu = Du = null),
            null !== Po)
          ) {
            for (t = 0; t < Po.length; t++)
              if (null !== (r = (n = Po[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Po = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Nu;
            try {
              if ((xo(), (fl.current = li), vl)) {
                for (var r = ml.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vl = !1;
              }
              if (
                ((hl = 0),
                (yl = gl = ml = null),
                (bl = !1),
                (wl = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                ($u = 1), (Iu = t), (Nu = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ru),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" == typeof s &&
                    "function" == typeof s.then)
                ) {
                  var c = s,
                    d = u,
                    f = d.tag;
                  if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = yi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      vi(h, i, u, 0, t),
                      1 & h.mode && gi(l, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(s), (t.updateQueue = g);
                    } else m.add(s);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    gi(l, c, t), gs();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yi(i);
                  if (null !== y) {
                    0 == (65536 & y.flags) && (y.flags |= 256),
                      vi(y, i, u, 0, t),
                      mo(ci(s, u));
                    break e;
                  }
                }
                (l = s = ci(s, u)),
                  4 !== $u && ($u = 2),
                  null === Du ? (Du = [l]) : Du.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Fo(l, hi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var v = l.type,
                        b = l.stateNode;
                      if (
                        0 == (128 & l.flags) &&
                        ("function" == typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" == typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Fo(l, mi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              ks(n);
            } catch (e) {
              (t = e), Nu === n && null !== n && (Nu = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = _u.current;
          return (_u.current = li), null === e ? li : e;
        }
        function gs() {
          (0 !== $u && 3 !== $u && 2 !== $u) || ($u = 4),
            null === Ou ||
              (0 == (268435455 & Fu) && 0 == (268435455 & Au)) ||
              us(Ou, Ru);
        }
        function ys(e, t) {
          var n = Tu;
          Tu |= 2;
          var r = ms();
          for ((Ou === e && Ru === t) || ((Wu = null), ps(e, t)); ; )
            try {
              vs();
              break;
            } catch (t) {
              hs(e, t);
            }
          if ((xo(), (Tu = n), (_u.current = r), null !== Nu))
            throw Error(o(261));
          return (Ou = null), (Ru = 0), $u;
        }
        function vs() {
          for (; null !== Nu; ) ws(Nu);
        }
        function bs() {
          for (; null !== Nu && !Ge(); ) ws(Nu);
        }
        function ws(e) {
          var t = Eu(e.alternate, e, Lu);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (Nu = t),
            (Pu.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Lu))) return void (Nu = n);
            } else {
              if (null !== (n = Gi(n, t)))
                return (n.flags &= 32767), void (Nu = n);
              if (null === e) return ($u = 6), void (Nu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Nu = t);
            Nu = t = e;
          } while (null !== t);
          0 === $u && ($u = 5);
        }
        function xs(e, t, n) {
          var r = bt,
            a = zu.transition;
          try {
            (zu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Gu);
                if (0 != (6 & Tu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Ou && ((Nu = Ou = null), (Ru = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Os(tt, function () {
                      return Ss(), null;
                    })),
                  (l = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || l)
                ) {
                  (l = zu.transition), (zu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Tu;
                  (Tu |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (u = i + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (s = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === l && ++d === r && (s = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Ji = t;
                        null !== Ji;

                      )
                        if (
                          ((e = (t = Ji).child),
                          0 != (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 != (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : yo(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (e) {
                              Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (Tu = u),
                    (bt = i),
                    (zu.transition = l);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Gu = e), (Yu = a)),
                  0 === (l = e.pendingLanes) && (Qu = null),
                  (function (e) {
                    if (ot && "function" == typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 == (128 & e.current.flags)
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  as(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Hu) throw ((Hu = !1), (e = Ku), (Ku = null), e);
                0 != (1 & Yu) && 0 !== e.tag && Ss(),
                  0 != (1 & (l = e.pendingLanes))
                    ? e === Zu
                      ? Xu++
                      : ((Xu = 0), (Zu = e))
                    : (Xu = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (zu.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Gu) {
            var e = wt(Yu),
              t = zu.transition,
              n = bt;
            try {
              if (((zu.transition = null), (bt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Yu = 0), 0 != (6 & Tu)))
                  throw Error(o(331));
                var a = Tu;
                for (Tu |= 4, Ji = e.current; null !== Ji; ) {
                  var l = Ji,
                    i = l.child;
                  if (0 != (16 & Ji.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var d = Ji;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ji = f);
                          else
                            for (; null !== Ji; ) {
                              var p = (d = Ji).sibling,
                                h = d.return;
                              if ((lu(d), d === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Ji = l;
                    }
                  }
                  if (0 != (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 != (2048 & (l = Ji).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, l, l.return);
                        }
                      var v = l.sibling;
                      if (null !== v) {
                        (v.return = l.return), (Ji = v);
                        break e;
                      }
                      Ji = l.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var w = (i = Ji).child;
                  if (0 != (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Ji = w);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 != (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (e) {
                          Cs(u, u.return, e);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (Ji = k);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((Tu = a),
                  Va(),
                  ot && "function" == typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (zu.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = $o(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
        }
        function Cs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = $o(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _s(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ou === e &&
              (Ru & n) === n &&
              (4 === $u ||
              (3 === $u && (130023424 & Ru) === Ru && 500 > Xe() - Vu)
                ? ps(e, 0)
                : (ju |= n)),
            as(e, t);
        }
        function Ps(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Oo(e, t)) && (yt(e, t, n), as(e, n));
        }
        function zs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ps(e, n);
        }
        function Ts(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ps(e, n);
        }
        function Os(e, t) {
          return Qe(e, t);
        }
        function Ns(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Rs(e, t, n, r) {
          return new Ns(e, t, n, r);
        }
        function Ls(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ms(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function $s(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" == typeof e)) Ls(e) && (i = 1);
          else if ("string" == typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Is(n.children, a, l, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Rs(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case T:
                return (
                  ((e = Rs(13, n, t, a)).elementType = T), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Rs(19, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case L:
                return Fs(n, a, l, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      i = 10;
                      break e;
                    case P:
                      i = 9;
                      break e;
                    case z:
                      i = 11;
                      break e;
                    case N:
                      i = 14;
                      break e;
                    case R:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Rs(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Is(e, t, n, r) {
          return ((e = Rs(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Rs(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function As(e, t, n) {
          return ((e = Rs(6, e, null, t)).lanes = n), e;
        }
        function js(e, t, n) {
          return (
            ((t = Rs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ds(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Ds(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Rs(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ro(o),
            e
          );
        }
        function Vs(e) {
          if (!e) return Pa;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return $a(e, n, t);
          }
          return t;
        }
        function Us(e, t, n, r) {
          var a = t.current,
            o = ts(),
            l = ns(a);
          return (
            (n = Vs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Mo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = $o(a, t, l)) && (rs(e, a, l, o), Io(e, a, l)),
            l
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ks(e, t) {
          Hs(e, t), (e = e.alternate) && Hs(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current) wi = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Oi(t), ho();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Ra(t.type) && Ia(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        _a(vo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? Ai(e, t, n)
                            : (_a(ul, 1 & ul.current),
                              null !== (e = Hi(e, t, n)) ? e.sibling : null);
                        _a(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return Ui(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ci(e, t, n);
                    }
                    return Hi(e, t, n);
                  })(e, t, n)
                );
              wi = 0 != (131072 & e.flags);
            }
          else (wi = !1), ao && 0 != (1048576 & t.flags) && Ja(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wi(e, t), (e = t.pendingProps);
              var a = Na(t, za.current);
              Co(t, n), (a = El(null, t, r, e, a, n));
              var l = Cl();
              return (
                (t.flags |= 1),
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((l = !0), Ia(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ro(t),
                    (a.updater = Vo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Ti(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    ki(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Ls(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === z) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = zi(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                zi(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Oi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Lo(e, t),
                  Ao(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ni(e, t, r, n, (a = ci(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ni(e, t, r, n, (a = ci(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Zo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Hi(e, t, n);
                    break e;
                  }
                  ki(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                _i(e, t),
                ki(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Ai(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : ki(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xi(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  _a(vo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Ta.current) {
                      t = Hi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === l.tag) {
                              (s = Mo(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (s.next = s)
                                  : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              Eo(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Eo(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                ki(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = _o(a)))),
                (t.flags |= 1),
                ki(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Wi(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Ia(t)) : (e = !1),
                Co(t, n),
                Wo(t, r, a),
                Ko(t, r, a, n),
                Ti(null, t, r, !0, e, n)
              );
            case 19:
              return Ui(e, t, n);
            case 22:
              return Ci(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        "function" == typeof reportError && reportError;
        function Qs(e) {
          this._internalRoot = e;
        }
        function qs(e) {
          this._internalRoot = e;
        }
        function Gs() {}
        function Ys(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" == typeof a) {
              var i = a;
              a = function () {
                var e = Ws(l);
                i.call(e);
              };
            }
            Us(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" == typeof r) {
                  var o = r;
                  r = function () {
                    var e = Ws(l);
                    o.call(e);
                  };
                }
                var l = (function (e, t, n, r, a, o, l, i, u) {
                  return (
                    ((e = Bs(n, r, !0, e, 0, o, 0, i, u)).context = Vs(null)),
                    (n = e.current),
                    ((o = Mo((r = ts()), (a = ns(n)))).callback =
                      null != t ? t : null),
                    $o(n, o, a),
                    (e.current.lanes = a),
                    yt(e, a, r),
                    as(e, r),
                    e
                  );
                })(t, r, e, 0, null, !1, 0, "", Gs);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" == typeof r) {
                var i = r;
                r = function () {
                  var e = Ws(u);
                  i.call(e);
                };
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, "", Gs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                ds(function () {
                  Us(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(l);
        }
        (qs.prototype.render = Qs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Us(e, t, null, null);
          }),
          (qs.prototype.unmount = Qs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ds(function () {
                  Us(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (qs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    as(t, Xe()),
                    0 == (6 & Tu) && ((Uu = Xe() + 500), Va()));
                }
                break;
              case 13:
                ds(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Ks(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              null !== t && rs(t, e, 134217728, ts()), Ks(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Oo(e, t);
              null !== n && rs(n, e, t, ts()), Ks(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      Q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (ze = cs),
          (Te = ds);
        var Xs = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          Zs = {
            bundleType: Xs.bundleType,
            version: Xs.version,
            rendererPackageName: Xs.rendererPackageName,
            rendererConfig: Xs.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              Xs.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Js.isDisabled && Js.supportsFiber)
            try {
              (at = Js.inject(Zs)), (ot = Js);
            } catch (ce) {}
        }
        t.render = function (e, t, n) {
          if (
            !(function (e) {
              return !(
                !e ||
                (1 !== e.nodeType &&
                  9 !== e.nodeType &&
                  11 !== e.nodeType &&
                  (8 !== e.nodeType ||
                    " react-mount-point-unstable " !== e.nodeValue))
              );
            })(t)
          )
            throw Error(o(200));
          return Ys(null, e, t, !1, n);
        };
      },
      935: (e, t, n) => {
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      251: (e, t, n) => {
        var r = n(294),
          a = Symbol.for("react.element"),
          o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            u = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !i.hasOwnProperty(r) && (u[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === u[r] && (u[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: u,
            _owner: l.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      408: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              x.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: S.current,
          };
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function z(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + z(u, 0) : o),
              k(l)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  T(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (_(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + z((i = e[s]), s);
              u += T(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += T((i = i.value), t, a, (c = o + z(i, s++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          M = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                x.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      294: (e, t, n) => {
        e.exports = n(408);
      },
      893: (e, t, n) => {
        e.exports = n(251);
      },
      53: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" == typeof setTimeout ? setTimeout : null,
          v = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(s)) (m = !0), L(x);
            else {
              var t = r(c);
              null !== t && M(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), v(_), (_ = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), f = r(s);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var l = f.callback;
              if ("function" == typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof i
                    ? (f.callback = i)
                    : f === r(s) && a(s),
                  w(n);
              } else a(s);
              f = r(s);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && M(k, d.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          _ = -1,
          P = 5,
          z = -1;
        function T() {
          return !(t.unstable_now() - z < P);
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now();
            z = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" == typeof b)
          S = function () {
            b(O);
          };
        else if ("undefined" != typeof MessageChannel) {
          var N = new MessageChannel(),
            R = N.port2;
          (N.port1.onmessage = O),
            (S = function () {
              R.postMessage(null);
            });
        } else
          S = function () {
            y(O, 0);
          };
        function L(e) {
          (C = e), E || ((E = !0), S());
        }
        function M(e, n) {
          _ = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ((o =
                "object" == typeof o &&
                null !== o &&
                "number" == typeof (o = o.delay) &&
                0 < o
                  ? l + o
                  : l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (v(_), (_ = -1)) : (g = !0), M(k, o - l)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), L(x))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        e.exports = n(53);
      },
      427: (e, t, n) => {
        var r = n(379),
          a = n.n(r),
          o = n(795),
          l = n.n(o),
          i = n(569),
          u = n.n(i),
          s = n(565),
          c = n.n(s),
          d = n(216),
          f = n.n(d),
          p = n(655),
          h = n.n(p),
          m = n(767),
          g = {};
        (g.styleTagTransform = h()),
          (g.setAttributes = c()),
          (g.insert = u().bind(null, "head")),
          (g.domAPI = l()),
          (g.insertStyleElement = f()),
          a()(m.Z, g),
          m.Z && m.Z.locals && m.Z.locals;
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, l = [], i = 0; i < e.length; i++) {
            var u = e[i],
              s = r.base ? u[0] + r.base : u[0],
              c = o[s] || 0,
              d = "".concat(s, " ").concat(c);
            o[s] = c + 1;
            var f = n(d),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var h = a(p, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: h, references: 1 });
            }
            l.push(d);
          }
          return l;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var l = 0; l < o.length; l++) {
              var i = n(o[l]);
              t[i].references--;
            }
            for (var u = r(e, a), s = 0; s < o.length; s++) {
              var c = n(o[s]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            o = u;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      655: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { id: e, exports: {} });
    return n[e](o, o.exports, a), o.exports;
  }
  (a.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      a.r(o);
      var l = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => n[e]));
      return (l.default = () => n), a.d(o, l), o;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.nc = void 0),
    (() => {
      var e = a(294),
        t = a.t(e, 2),
        n = a(935),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = e.createContext && e.createContext(r),
        l = function () {
          return (
            (l =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            l.apply(this, arguments)
          );
        },
        i = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function u(t) {
        return (
          t &&
          t.map(function (t, n) {
            return e.createElement(t.tag, l({ key: n }, t.attr), u(t.child));
          })
        );
      }
      function s(t) {
        return function (n) {
          return e.createElement(c, l({ attr: l({}, t.attr) }, n), u(t.child));
        };
      }
      function c(t) {
        var n = function (n) {
          var r,
            a = t.attr,
            o = t.size,
            u = t.title,
            s = i(t, ["attr", "size", "title"]),
            c = o || n.size || "1em";
          return (
            n.className && (r = n.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            e.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                s,
                {
                  className: r,
                  style: l(l({ color: t.color || n.color }, n.style), t.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              u && e.createElement("title", null, u),
              t.children
            )
          );
        };
        return void 0 !== o
          ? e.createElement(o.Consumer, null, function (e) {
              return n(e);
            })
          : n(r);
      }
      function d(e) {
        return s({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
              },
            },
            { tag: "path", attr: { d: "M19 10v2a7 7 0 0 1-14 0v-2" } },
            { tag: "line", attr: { x1: "12", y1: "19", x2: "12", y2: "23" } },
            { tag: "line", attr: { x1: "8", y1: "23", x2: "16", y2: "23" } },
          ],
        })(e);
      }
      function f(e) {
        return s({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "3" } },
            {
              tag: "path",
              attr: {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
              },
            },
          ],
        })(e);
      }
      function p(e) {
        return s({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "polygon", attr: { points: "23 7 16 12 23 17 23 7" } },
            {
              tag: "rect",
              attr: {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2",
                ry: "2",
              },
            },
          ],
        })(e);
      }
      function h(e) {
        return s({
          tag: "svg",
          attr: {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            fillRule: "evenodd",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z",
              },
            },
          ],
        })(e);
      }
      function m(e) {
        return s({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z",
              },
            },
          ],
        })(e);
      }
      function g(e) {
        return s({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z",
              },
            },
          ],
        })(e);
      }
      function y(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function v() {
        return (
          (v = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          v.apply(this, arguments)
        );
      }
      function b(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = b(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      a(427);
      const w = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = b(e)) && (r && (r += " "), (r += t));
        return r;
      };
      function k(e, t, n = void 0) {
        const r = {};
        return (
          Object.keys(e).forEach((a) => {
            r[a] = e[a]
              .reduce((e, r) => {
                if (r) {
                  const a = t(r);
                  "" !== a && e.push(a), n && n[r] && e.push(n[r]);
                }
                return e;
              }, [])
              .join(" ");
          }),
          r
        );
      }
      function x(e) {
        let t = "https://mui.com/production-error/?code=" + e;
        for (let e = 1; e < arguments.length; e += 1)
          t += "&args[]=" + encodeURIComponent(arguments[e]);
        return (
          "Minified MUI error #" + e + "; visit " + t + " for the full message."
        );
      }
      function S(e, t = 0, n = 1) {
        return Math.min(Math.max(t, e), n);
      }
      function E(e) {
        if (e.type) return e;
        if ("#" === e.charAt(0))
          return E(
            (function (e) {
              e = e.slice(1);
              const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
              let n = e.match(t);
              return (
                n && 1 === n[0].length && (n = n.map((e) => e + e)),
                n
                  ? `rgb${4 === n.length ? "a" : ""}(${n
                      .map((e, t) =>
                        t < 3
                          ? parseInt(e, 16)
                          : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                      )
                      .join(", ")})`
                  : ""
              );
            })(e)
          );
        const t = e.indexOf("("),
          n = e.substring(0, t);
        if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n))
          throw new Error(x(9, e));
        let r,
          a = e.substring(t + 1, e.length - 1);
        if ("color" === n) {
          if (
            ((a = a.split(" ")),
            (r = a.shift()),
            4 === a.length && "/" === a[3].charAt(0) && (a[3] = a[3].slice(1)),
            -1 ===
              [
                "srgb",
                "display-p3",
                "a98-rgb",
                "prophoto-rgb",
                "rec-2020",
              ].indexOf(r))
          )
            throw new Error(x(10, r));
        } else a = a.split(",");
        return (
          (a = a.map((e) => parseFloat(e))),
          { type: n, values: a, colorSpace: r }
        );
      }
      function C(e) {
        const { type: t, colorSpace: n } = e;
        let { values: r } = e;
        return (
          -1 !== t.indexOf("rgb")
            ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
            : -1 !== t.indexOf("hsl") &&
              ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
          (r =
            -1 !== t.indexOf("color")
              ? `${n} ${r.join(" ")}`
              : `${r.join(", ")}`),
          `${t}(${r})`
        );
      }
      function _(e) {
        let t =
          "hsl" === (e = E(e)).type || "hsla" === e.type
            ? E(
                (function (e) {
                  e = E(e);
                  const { values: t } = e,
                    n = t[0],
                    r = t[1] / 100,
                    a = t[2] / 100,
                    o = r * Math.min(a, 1 - a),
                    l = (e, t = (e + n / 30) % 12) =>
                      a - o * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                  let i = "rgb";
                  const u = [
                    Math.round(255 * l(0)),
                    Math.round(255 * l(8)),
                    Math.round(255 * l(4)),
                  ];
                  return (
                    "hsla" === e.type && ((i += "a"), u.push(t[3])),
                    C({ type: i, values: u })
                  );
                })(e)
              ).values
            : e.values;
        return (
          (t = t.map(
            (t) => (
              "color" !== e.type && (t /= 255),
              t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
            )
          )),
          Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
        );
      }
      function P(e, t) {
        return (
          (e = E(e)),
          (t = S(t)),
          ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
          "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
          C(e)
        );
      }
      function z(e, t) {
        if (((e = E(e)), (t = S(t)), -1 !== e.type.indexOf("hsl")))
          e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
          for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
        return C(e);
      }
      function T(e, t) {
        if (((e = E(e)), (t = S(t)), -1 !== e.type.indexOf("hsl")))
          e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf("rgb"))
          for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
        else if (-1 !== e.type.indexOf("color"))
          for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
        return C(e);
      }
      function O(e) {
        if ("string" != typeof e) throw new Error(x(7));
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      const N = O;
      function R(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      var L =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        M = R(function (e) {
          return (
            L.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        $ = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {}
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        I = Math.abs,
        F = String.fromCharCode,
        A = Object.assign;
      function j(e) {
        return e.trim();
      }
      function D(e, t, n) {
        return e.replace(t, n);
      }
      function B(e, t) {
        return e.indexOf(t);
      }
      function V(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function U(e, t, n) {
        return e.slice(t, n);
      }
      function W(e) {
        return e.length;
      }
      function H(e) {
        return e.length;
      }
      function K(e, t) {
        return t.push(e), e;
      }
      var Q = 1,
        q = 1,
        G = 0,
        Y = 0,
        X = 0,
        Z = "";
      function J(e, t, n, r, a, o, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: Q,
          column: q,
          length: l,
          return: "",
        };
      }
      function ee(e, t) {
        return A(
          J("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function te() {
        return (X = Y > 0 ? V(Z, --Y) : 0), q--, 10 === X && ((q = 1), Q--), X;
      }
      function ne() {
        return (X = Y < G ? V(Z, Y++) : 0), q++, 10 === X && ((q = 1), Q++), X;
      }
      function re() {
        return V(Z, Y);
      }
      function ae() {
        return Y;
      }
      function oe(e, t) {
        return U(Z, e, t);
      }
      function le(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function ie(e) {
        return (Q = q = 1), (G = W((Z = e))), (Y = 0), [];
      }
      function ue(e) {
        return (Z = ""), e;
      }
      function se(e) {
        return j(oe(Y - 1, fe(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function ce(e) {
        for (; (X = re()) && X < 33; ) ne();
        return le(e) > 2 || le(X) > 3 ? "" : " ";
      }
      function de(e, t) {
        for (
          ;
          --t &&
          ne() &&
          !(X < 48 || X > 102 || (X > 57 && X < 65) || (X > 70 && X < 97));

        );
        return oe(e, ae() + (t < 6 && 32 == re() && 32 == ne()));
      }
      function fe(e) {
        for (; ne(); )
          switch (X) {
            case e:
              return Y;
            case 34:
            case 39:
              34 !== e && 39 !== e && fe(X);
              break;
            case 40:
              41 === e && fe(e);
              break;
            case 92:
              ne();
          }
        return Y;
      }
      function pe(e, t) {
        for (; ne() && e + X !== 57 && (e + X !== 84 || 47 !== re()); );
        return "/*" + oe(t, Y - 1) + "*" + F(47 === e ? e : ne());
      }
      function he(e) {
        for (; !le(re()); ) ne();
        return oe(e, Y);
      }
      var me = "-ms-",
        ge = "-moz-",
        ye = "-webkit-",
        ve = "comm",
        be = "rule",
        we = "decl",
        ke = "@keyframes";
      function xe(e, t) {
        for (var n = "", r = H(e), a = 0; a < r; a++)
          n += t(e[a], a, e, t) || "";
        return n;
      }
      function Se(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case we:
            return (e.return = e.return || e.value);
          case ve:
            return "";
          case ke:
            return (e.return = e.value + "{" + xe(e.children, r) + "}");
          case be:
            e.value = e.props.join(",");
        }
        return W((n = xe(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function Ee(e) {
        return ue(Ce("", null, null, null, [""], (e = ie(e)), 0, [0], e));
      }
      function Ce(e, t, n, r, a, o, l, i, u) {
        for (
          var s = 0,
            c = 0,
            d = l,
            f = 0,
            p = 0,
            h = 0,
            m = 1,
            g = 1,
            y = 1,
            v = 0,
            b = "",
            w = a,
            k = o,
            x = r,
            S = b;
          g;

        )
          switch (((h = v), (v = ne()))) {
            case 40:
              if (108 != h && 58 == V(S, d - 1)) {
                -1 != B((S += D(se(v), "&", "&\f")), "&\f") && (y = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              S += se(v);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              S += ce(h);
              break;
            case 92:
              S += de(ae() - 1, 7);
              continue;
            case 47:
              switch (re()) {
                case 42:
                case 47:
                  K(Pe(pe(ne(), ae()), t, n), u);
                  break;
                default:
                  S += "/";
              }
              break;
            case 123 * m:
              i[s++] = W(S) * y;
            case 125 * m:
            case 59:
            case 0:
              switch (v) {
                case 0:
                case 125:
                  g = 0;
                case 59 + c:
                  -1 == y && (S = D(S, /\f/g, "")),
                    p > 0 &&
                      W(S) - d &&
                      K(
                        p > 32
                          ? ze(S + ";", r, n, d - 1)
                          : ze(D(S, " ", "") + ";", r, n, d - 2),
                        u
                      );
                  break;
                case 59:
                  S += ";";
                default:
                  if (
                    (K(
                      (x = _e(S, t, n, s, c, a, i, b, (w = []), (k = []), d)),
                      o
                    ),
                    123 === v)
                  )
                    if (0 === c) Ce(S, t, x, x, w, o, d, i, k);
                    else
                      switch (99 === f && 110 === V(S, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Ce(
                            e,
                            x,
                            x,
                            r &&
                              K(_e(e, x, x, 0, 0, a, i, b, a, (w = []), d), k),
                            a,
                            k,
                            d,
                            i,
                            r ? w : k
                          );
                          break;
                        default:
                          Ce(S, x, x, x, [""], k, 0, i, k);
                      }
              }
              (s = c = p = 0), (m = y = 1), (b = S = ""), (d = l);
              break;
            case 58:
              (d = 1 + W(S)), (p = h);
            default:
              if (m < 1)
                if (123 == v) --m;
                else if (125 == v && 0 == m++ && 125 == te()) continue;
              switch (((S += F(v)), v * m)) {
                case 38:
                  y = c > 0 ? 1 : ((S += "\f"), -1);
                  break;
                case 44:
                  (i[s++] = (W(S) - 1) * y), (y = 1);
                  break;
                case 64:
                  45 === re() && (S += se(ne())),
                    (f = re()),
                    (c = d = W((b = S += he(ae())))),
                    v++;
                  break;
                case 45:
                  45 === h && 2 == W(S) && (m = 0);
              }
          }
        return o;
      }
      function _e(e, t, n, r, a, o, l, i, u, s, c) {
        for (
          var d = a - 1, f = 0 === a ? o : [""], p = H(f), h = 0, m = 0, g = 0;
          h < r;
          ++h
        )
          for (
            var y = 0, v = U(e, d + 1, (d = I((m = l[h])))), b = e;
            y < p;
            ++y
          )
            (b = j(m > 0 ? f[y] + " " + v : D(v, /&\f/g, f[y]))) &&
              (u[g++] = b);
        return J(e, t, n, 0 === a ? be : i, u, s, c);
      }
      function Pe(e, t, n) {
        return J(e, t, n, ve, F(X), U(e, 2, -2), 0);
      }
      function ze(e, t, n, r) {
        return J(e, t, n, we, U(e, 0, r), U(e, r + 1, -1), r);
      }
      var Te = function (e, t, n) {
          for (
            var r = 0, a = 0;
            (r = a), (a = re()), 38 === r && 12 === a && (t[n] = 1), !le(a);

          )
            ne();
          return oe(e, Y);
        },
        Oe = new WeakMap(),
        Ne = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || Oe.get(n)) &&
              !r
            ) {
              Oe.set(e, !0);
              for (
                var a = [],
                  o = (function (e, t) {
                    return ue(
                      (function (e, t) {
                        var n = -1,
                          r = 44;
                        do {
                          switch (le(r)) {
                            case 0:
                              38 === r && 12 === re() && (t[n] = 1),
                                (e[n] += Te(Y - 1, t, n));
                              break;
                            case 2:
                              e[n] += se(r);
                              break;
                            case 4:
                              if (44 === r) {
                                (e[++n] = 58 === re() ? "&\f" : ""),
                                  (t[n] = e[n].length);
                                break;
                              }
                            default:
                              e[n] += F(r);
                          }
                        } while ((r = ne()));
                        return e;
                      })(ie(e), t)
                    );
                  })(t, a),
                  l = n.props,
                  i = 0,
                  u = 0;
                i < o.length;
                i++
              )
                for (var s = 0; s < l.length; s++, u++)
                  e.props[u] = a[i]
                    ? o[i].replace(/&\f/g, l[s])
                    : l[s] + " " + o[i];
            }
          }
        },
        Re = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        };
      function Le(e, t) {
        switch (
          (function (e, t) {
            return 45 ^ V(e, 0)
              ? (((((((t << 2) ^ V(e, 0)) << 2) ^ V(e, 1)) << 2) ^ V(e, 2)) <<
                  2) ^
                  V(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return ye + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return ye + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return ye + e + ge + e + me + e + e;
          case 6828:
          case 4268:
            return ye + e + me + e + e;
          case 6165:
            return ye + e + me + "flex-" + e + e;
          case 5187:
            return (
              ye +
              e +
              D(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + me + "flex-$1$2") +
              e
            );
          case 5443:
            return ye + e + me + "flex-item-" + D(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              ye +
              e +
              me +
              "flex-line-pack" +
              D(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return ye + e + me + D(e, "shrink", "negative") + e;
          case 5292:
            return ye + e + me + D(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              ye +
              "box-" +
              D(e, "-grow", "") +
              ye +
              e +
              me +
              D(e, "grow", "positive") +
              e
            );
          case 4554:
            return ye + D(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
          case 6187:
            return (
              D(
                D(D(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return D(e, /(image-set\([^]*)/, ye + "$1$`$1");
          case 4968:
            return (
              D(
                D(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  ye + "box-pack:$3" + me + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              ye +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return D(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (W(e) - 1 - t > 6)
              switch (V(e, t + 1)) {
                case 109:
                  if (45 !== V(e, t + 4)) break;
                case 102:
                  return (
                    D(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        ye +
                        "$2-$3$1" +
                        ge +
                        (108 == V(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~B(e, "stretch")
                    ? Le(D(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== V(e, t + 1)) break;
          case 6444:
            switch (V(e, W(e) - 3 - (~B(e, "!important") && 10))) {
              case 107:
                return D(e, ":", ":" + ye) + e;
              case 101:
                return (
                  D(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      ye +
                      (45 === V(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      ye +
                      "$2$3$1" +
                      me +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (V(e, t + 11)) {
              case 114:
                return ye + e + me + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return ye + e + me + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return ye + e + me + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return ye + e + me + e + e;
        }
        return e;
      }
      var Me = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case we:
                  e.return = Le(e.value, e.length);
                  break;
                case ke:
                  return xe([ee(e, { value: D(e.value, "@", "@" + ye) })], r);
                case be:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = /(::plac\w+|:read-\w+)/.exec(e))
                            ? e[0]
                            : e;
                        })(t)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return xe(
                            [
                              ee(e, {
                                props: [D(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            r
                          );
                        case "::placeholder":
                          return xe(
                            [
                              ee(e, {
                                props: [
                                  D(t, /:(plac\w+)/, ":" + ye + "input-$1"),
                                ],
                              }),
                              ee(e, {
                                props: [D(t, /:(plac\w+)/, ":-moz-$1")],
                              }),
                              ee(e, {
                                props: [D(t, /:(plac\w+)/, me + "input-$1")],
                              }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        $e = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var r,
            a,
            o = e.stylisPlugins || Me,
            l = {},
            i = [];
          (r = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  l[t[n]] = !0;
                i.push(e);
              }
            );
          var u,
            s,
            c,
            d,
            f = [
              Se,
              ((d = function (e) {
                u.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && d(e));
              }),
            ],
            p =
              ((s = [Ne, Re].concat(o, f)),
              (c = H(s)),
              function (e, t, n, r) {
                for (var a = "", o = 0; o < c; o++) a += s[o](e, t, n, r) || "";
                return a;
              });
          a = function (e, t, n, r) {
            (u = n),
              xe(Ee(e ? e + "{" + t.styles + "}" : t.styles), p),
              r && (h.inserted[t.name] = !0);
          };
          var h = {
            key: t,
            sheet: new $({
              key: t,
              container: r,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: l,
            registered: {},
            insert: a,
          };
          return h.sheet.hydrate(i), h;
        },
        Ie = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        Fe = /[A-Z]|^ms/g,
        Ae = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        je = function (e) {
          return 45 === e.charCodeAt(1);
        },
        De = function (e) {
          return null != e && "boolean" != typeof e;
        },
        Be = R(function (e) {
          return je(e) ? e : e.replace(Fe, "-$&").toLowerCase();
        }),
        Ve = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(Ae, function (e, t, n) {
                  return (We = { name: t, styles: n, next: We }), t;
                });
          }
          return 1 === Ie[e] || je(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function Ue(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (We = { name: n.name, styles: n.styles, next: We }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (We = { name: r.name, styles: r.styles, next: We }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var a = 0; a < n.length; a++) r += Ue(e, t, n[a]) + ";";
              else
                for (var o in n) {
                  var l = n[o];
                  if ("object" != typeof l)
                    null != t && void 0 !== t[l]
                      ? (r += o + "{" + t[l] + "}")
                      : De(l) && (r += Be(o) + ":" + Ve(o, l) + ";");
                  else if (
                    !Array.isArray(l) ||
                    "string" != typeof l[0] ||
                    (null != t && void 0 !== t[l[0]])
                  ) {
                    var i = Ue(e, t, l);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        r += Be(o) + ":" + i + ";";
                        break;
                      default:
                        r += o + "{" + i + "}";
                    }
                  } else
                    for (var u = 0; u < l.length; u++)
                      De(l[u]) && (r += Be(o) + ":" + Ve(o, l[u]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var a = We,
                o = n(e);
              return (We = a), Ue(e, t, o);
            }
        }
        if (null == t) return n;
        var l = t[n];
        return void 0 !== l ? l : n;
      }
      var We,
        He = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Ke = function (e, t, n) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            a = "";
          We = void 0;
          var o = e[0];
          null == o || void 0 === o.raw
            ? ((r = !1), (a += Ue(n, t, o)))
            : (a += o[0]);
          for (var l = 1; l < e.length; l++)
            (a += Ue(n, t, e[l])), r && (a += o[l]);
          He.lastIndex = 0;
          for (var i, u = ""; null !== (i = He.exec(a)); ) u += "-" + i[1];
          var s =
            (function (e) {
              for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
                (t =
                  1540483477 *
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) +
                  ((59797 * (t >>> 16)) << 16)),
                  (n =
                    (1540483477 * (65535 & (t ^= t >>> 24)) +
                      ((59797 * (t >>> 16)) << 16)) ^
                    (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (a) {
                case 3:
                  n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                  n =
                    1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                    ((59797 * (n >>> 16)) << 16);
              }
              return (
                ((n =
                  1540483477 * (65535 & (n ^= n >>> 13)) +
                  ((59797 * (n >>> 16)) << 16)) ^
                  (n >>> 15)) >>>
                0
              ).toString(36);
            })(a) + u;
          return { name: s, styles: a, next: We };
        },
        Qe = !!t.useInsertionEffect && t.useInsertionEffect,
        qe =
          Qe ||
          function (e) {
            return e();
          },
        Ge =
          (Qe || e.useLayoutEffect,
          e.createContext(
            "undefined" != typeof HTMLElement ? $e({ key: "css" }) : null
          ));
      Ge.Provider;
      var Ye = e.createContext({}),
        Xe = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        Ze = M,
        Je = function (e) {
          return "theme" !== e;
        },
        et = function (e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? Ze : Je;
        },
        tt = function (e, t, n) {
          var r;
          if (t) {
            var a = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && a
                ? function (t) {
                    return e.__emotion_forwardProp(t) && a(t);
                  }
                : a;
          }
          return (
            "function" != typeof r && n && (r = e.__emotion_forwardProp), r
          );
        },
        nt = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            Xe(t, n, r),
            qe(function () {
              return (function (e, t, n) {
                Xe(e, t, n);
                var r = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                  var a = t;
                  do {
                    e.insert(t === a ? "." + r : "", a, e.sheet, !0),
                      (a = a.next);
                  } while (void 0 !== a);
                }
              })(t, n, r);
            }),
            null
          );
        },
        rt = function t(n, r) {
          var a,
            o,
            l = n.__emotion_real === n,
            i = (l && n.__emotion_base) || n;
          void 0 !== r && ((a = r.label), (o = r.target));
          var u = tt(n, r, l),
            s = u || et(i),
            c = !s("as");
          return function () {
            var d = arguments,
              f =
                l && void 0 !== n.__emotion_styles
                  ? n.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== a && f.push("label:" + a + ";"),
              null == d[0] || void 0 === d[0].raw)
            )
              f.push.apply(f, d);
            else {
              f.push(d[0][0]);
              for (var p = d.length, h = 1; h < p; h++) f.push(d[h], d[0][h]);
            }
            var m,
              g =
                ((m = function (t, n, r) {
                  var a,
                    l,
                    d,
                    p,
                    h = (c && t.as) || i,
                    m = "",
                    g = [],
                    y = t;
                  if (null == t.theme) {
                    for (var v in ((y = {}), t)) y[v] = t[v];
                    y.theme = e.useContext(Ye);
                  }
                  "string" == typeof t.className
                    ? ((a = n.registered),
                      (l = g),
                      (d = t.className),
                      (p = ""),
                      d.split(" ").forEach(function (e) {
                        void 0 !== a[e] ? l.push(a[e] + ";") : (p += e + " ");
                      }),
                      (m = p))
                    : null != t.className && (m = t.className + " ");
                  var b = Ke(f.concat(g), n.registered, y);
                  (m += n.key + "-" + b.name), void 0 !== o && (m += " " + o);
                  var w = c && void 0 === u ? et(h) : s,
                    k = {};
                  for (var x in t) (c && "as" === x) || (w(x) && (k[x] = t[x]));
                  return (
                    (k.className = m),
                    (k.ref = r),
                    e.createElement(
                      e.Fragment,
                      null,
                      e.createElement(nt, {
                        cache: n,
                        serialized: b,
                        isStringTag: "string" == typeof h,
                      }),
                      e.createElement(h, k)
                    )
                  );
                }),
                (0, e.forwardRef)(function (t, n) {
                  var r = (0, e.useContext)(Ge);
                  return m(t, r, n);
                }));
            return (
              (g.displayName =
                void 0 !== a
                  ? a
                  : "Styled(" +
                    ("string" == typeof i
                      ? i
                      : i.displayName || i.name || "Component") +
                    ")"),
              (g.defaultProps = n.defaultProps),
              (g.__emotion_real = g),
              (g.__emotion_base = i),
              (g.__emotion_styles = f),
              (g.__emotion_forwardProp = u),
              Object.defineProperty(g, "toString", {
                value: function () {
                  return "." + o;
                },
              }),
              (g.withComponent = function (e, n) {
                return t(
                  e,
                  v({}, r, n, { shouldForwardProp: tt(g, n, !0) })
                ).apply(void 0, f);
              }),
              g
            );
          };
        }.bind();
      function at(e) {
        return null !== e && "object" == typeof e && e.constructor === Object;
      }
      function ot(e) {
        if (!at(e)) return e;
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            t[n] = ot(e[n]);
          }),
          t
        );
      }
      function lt(e, t, n = { clone: !0 }) {
        const r = n.clone ? v({}, e) : e;
        return (
          at(e) &&
            at(t) &&
            Object.keys(t).forEach((a) => {
              "__proto__" !== a &&
                (at(t[a]) && a in e && at(e[a])
                  ? (r[a] = lt(e[a], t[a], n))
                  : n.clone
                  ? (r[a] = at(t[a]) ? ot(t[a]) : t[a])
                  : (r[a] = t[a]));
            }),
          r
        );
      }
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        rt[e] = rt(e);
      });
      const it = ["values", "unit", "step"],
        ut = { borderRadius: 4 },
        st = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        ct = {
          keys: ["xs", "sm", "md", "lg", "xl"],
          up: (e) => `@media (min-width:${st[e]}px)`,
        };
      function dt(e, t, n) {
        const r = e.theme || {};
        if (Array.isArray(t)) {
          const e = r.breakpoints || ct;
          return t.reduce((r, a, o) => ((r[e.up(e.keys[o])] = n(t[o])), r), {});
        }
        if ("object" == typeof t) {
          const e = r.breakpoints || ct;
          return Object.keys(t).reduce((r, a) => {
            if (-1 !== Object.keys(e.values || st).indexOf(a))
              r[e.up(a)] = n(t[a], a);
            else {
              const e = a;
              r[e] = t[e];
            }
            return r;
          }, {});
        }
        return n(t);
      }
      function ft(e, t, n = !0) {
        if (!t || "string" != typeof t) return null;
        if (e && e.vars && n) {
          const n = `vars.${t}`
            .split(".")
            .reduce((e, t) => (e && e[t] ? e[t] : null), e);
          if (null != n) return n;
        }
        return t
          .split(".")
          .reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
      }
      function pt(e, t, n, r = n) {
        let a;
        return (
          (a =
            "function" == typeof e
              ? e(n)
              : Array.isArray(e)
              ? e[n] || r
              : ft(e, n) || r),
          t && (a = t(a, r, e)),
          a
        );
      }
      const ht = function (e) {
          const {
              prop: t,
              cssProperty: n = e.prop,
              themeKey: r,
              transform: a,
            } = e,
            o = (e) => {
              if (null == e[t]) return null;
              const o = e[t],
                l = ft(e.theme, r) || {};
              return dt(e, o, (e) => {
                let r = pt(l, a, e);
                return (
                  e === r &&
                    "string" == typeof e &&
                    (r = pt(l, a, `${t}${"default" === e ? "" : O(e)}`, e)),
                  !1 === n ? r : { [n]: r }
                );
              });
            };
          return (o.propTypes = {}), (o.filterProps = [t]), o;
        },
        mt = function (e, t) {
          return t ? lt(e, t, { clone: !1 }) : e;
        },
        gt = { m: "margin", p: "padding" },
        yt = {
          t: "Top",
          r: "Right",
          b: "Bottom",
          l: "Left",
          x: ["Left", "Right"],
          y: ["Top", "Bottom"],
        },
        vt = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
        bt = (function (e) {
          const t = {};
          return (e) => (
            void 0 === t[e] &&
              (t[e] = ((e) => {
                if (e.length > 2) {
                  if (!vt[e]) return [e];
                  e = vt[e];
                }
                const [t, n] = e.split(""),
                  r = gt[t],
                  a = yt[n] || "";
                return Array.isArray(a) ? a.map((e) => r + e) : [r + a];
              })(e)),
            t[e]
          );
        })(),
        wt = [
          "m",
          "mt",
          "mr",
          "mb",
          "ml",
          "mx",
          "my",
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "marginInline",
          "marginInlineStart",
          "marginInlineEnd",
          "marginBlock",
          "marginBlockStart",
          "marginBlockEnd",
        ],
        kt = [
          "p",
          "pt",
          "pr",
          "pb",
          "pl",
          "px",
          "py",
          "padding",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "paddingX",
          "paddingY",
          "paddingInline",
          "paddingInlineStart",
          "paddingInlineEnd",
          "paddingBlock",
          "paddingBlockStart",
          "paddingBlockEnd",
        ],
        xt = [...wt, ...kt];
      function St(e, t, n, r) {
        var a;
        const o = null != (a = ft(e, t, !1)) ? a : n;
        return "number" == typeof o
          ? (e) => ("string" == typeof e ? e : o * e)
          : Array.isArray(o)
          ? (e) => ("string" == typeof e ? e : o[e])
          : "function" == typeof o
          ? o
          : () => {};
      }
      function Et(e) {
        return St(e, "spacing", 8);
      }
      function Ct(e, t) {
        if ("string" == typeof t || null == t) return t;
        const n = e(Math.abs(t));
        return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`;
      }
      function _t(e, t) {
        const n = Et(e.theme);
        return Object.keys(e)
          .map((r) =>
            (function (e, t, n, r) {
              if (-1 === t.indexOf(n)) return null;
              const a = (function (e, t) {
                return (n) => e.reduce((e, r) => ((e[r] = Ct(t, n)), e), {});
              })(bt(n), r);
              return dt(e, e[n], a);
            })(e, t, r, n)
          )
          .reduce(mt, {});
      }
      function Pt(e) {
        return _t(e, wt);
      }
      function zt(e) {
        return _t(e, kt);
      }
      function Tt(e) {
        return _t(e, xt);
      }
      (Pt.propTypes = {}),
        (Pt.filterProps = wt),
        (zt.propTypes = {}),
        (zt.filterProps = kt),
        (Tt.propTypes = {}),
        (Tt.filterProps = xt);
      const Ot = function (...e) {
        const t = e.reduce(
            (e, t) => (
              t.filterProps.forEach((n) => {
                e[n] = t;
              }),
              e
            ),
            {}
          ),
          n = (e) =>
            Object.keys(e).reduce((n, r) => (t[r] ? mt(n, t[r](e)) : n), {});
        return (
          (n.propTypes = {}),
          (n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), [])),
          n
        );
      };
      function Nt(e) {
        return "number" != typeof e ? e : `${e}px solid`;
      }
      const Rt = ht({ prop: "border", themeKey: "borders", transform: Nt }),
        Lt = ht({ prop: "borderTop", themeKey: "borders", transform: Nt }),
        Mt = ht({ prop: "borderRight", themeKey: "borders", transform: Nt }),
        $t = ht({ prop: "borderBottom", themeKey: "borders", transform: Nt }),
        It = ht({ prop: "borderLeft", themeKey: "borders", transform: Nt }),
        Ft = ht({ prop: "borderColor", themeKey: "palette" }),
        At = ht({ prop: "borderTopColor", themeKey: "palette" }),
        jt = ht({ prop: "borderRightColor", themeKey: "palette" }),
        Dt = ht({ prop: "borderBottomColor", themeKey: "palette" }),
        Bt = ht({ prop: "borderLeftColor", themeKey: "palette" }),
        Vt = (e) => {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            const t = St(e.theme, "shape.borderRadius", 4),
              n = (e) => ({ borderRadius: Ct(t, e) });
            return dt(e, e.borderRadius, n);
          }
          return null;
        };
      (Vt.propTypes = {}),
        (Vt.filterProps = ["borderRadius"]),
        Ot(Rt, Lt, Mt, $t, It, Ft, At, jt, Dt, Bt, Vt);
      const Ut = (e) => {
        if (void 0 !== e.gap && null !== e.gap) {
          const t = St(e.theme, "spacing", 8),
            n = (e) => ({ gap: Ct(t, e) });
          return dt(e, e.gap, n);
        }
        return null;
      };
      (Ut.propTypes = {}), (Ut.filterProps = ["gap"]);
      const Wt = (e) => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = St(e.theme, "spacing", 8),
            n = (e) => ({ columnGap: Ct(t, e) });
          return dt(e, e.columnGap, n);
        }
        return null;
      };
      (Wt.propTypes = {}), (Wt.filterProps = ["columnGap"]);
      const Ht = (e) => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = St(e.theme, "spacing", 8),
            n = (e) => ({ rowGap: Ct(t, e) });
          return dt(e, e.rowGap, n);
        }
        return null;
      };
      function Kt(e, t) {
        return "grey" === t ? t : e;
      }
      function Qt(e) {
        return e <= 1 && 0 !== e ? 100 * e + "%" : e;
      }
      (Ht.propTypes = {}),
        (Ht.filterProps = ["rowGap"]),
        Ot(
          Ut,
          Wt,
          Ht,
          ht({ prop: "gridColumn" }),
          ht({ prop: "gridRow" }),
          ht({ prop: "gridAutoFlow" }),
          ht({ prop: "gridAutoColumns" }),
          ht({ prop: "gridAutoRows" }),
          ht({ prop: "gridTemplateColumns" }),
          ht({ prop: "gridTemplateRows" }),
          ht({ prop: "gridTemplateAreas" }),
          ht({ prop: "gridArea" })
        ),
        Ot(
          ht({ prop: "color", themeKey: "palette", transform: Kt }),
          ht({
            prop: "bgcolor",
            cssProperty: "backgroundColor",
            themeKey: "palette",
            transform: Kt,
          }),
          ht({ prop: "backgroundColor", themeKey: "palette", transform: Kt })
        );
      const qt = ht({ prop: "width", transform: Qt }),
        Gt = (e) => {
          if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            const t = (t) => {
              var n, r;
              const a =
                (null == (n = e.theme) ||
                null == (n = n.breakpoints) ||
                null == (n = n.values)
                  ? void 0
                  : n[t]) || st[t];
              return a
                ? "px" !==
                  (null == (r = e.theme) || null == (r = r.breakpoints)
                    ? void 0
                    : r.unit)
                  ? { maxWidth: `${a}${e.theme.breakpoints.unit}` }
                  : { maxWidth: a }
                : { maxWidth: Qt(t) };
            };
            return dt(e, e.maxWidth, t);
          }
          return null;
        };
      Gt.filterProps = ["maxWidth"];
      const Yt = ht({ prop: "minWidth", transform: Qt }),
        Xt = ht({ prop: "height", transform: Qt }),
        Zt = ht({ prop: "maxHeight", transform: Qt }),
        Jt = ht({ prop: "minHeight", transform: Qt }),
        en =
          (ht({ prop: "size", cssProperty: "width", transform: Qt }),
          ht({ prop: "size", cssProperty: "height", transform: Qt }),
          Ot(qt, Gt, Yt, Xt, Zt, Jt, ht({ prop: "boxSizing" })),
          {
            border: { themeKey: "borders", transform: Nt },
            borderTop: { themeKey: "borders", transform: Nt },
            borderRight: { themeKey: "borders", transform: Nt },
            borderBottom: { themeKey: "borders", transform: Nt },
            borderLeft: { themeKey: "borders", transform: Nt },
            borderColor: { themeKey: "palette" },
            borderTopColor: { themeKey: "palette" },
            borderRightColor: { themeKey: "palette" },
            borderBottomColor: { themeKey: "palette" },
            borderLeftColor: { themeKey: "palette" },
            borderRadius: { themeKey: "shape.borderRadius", style: Vt },
            color: { themeKey: "palette", transform: Kt },
            bgcolor: {
              themeKey: "palette",
              cssProperty: "backgroundColor",
              transform: Kt,
            },
            backgroundColor: { themeKey: "palette", transform: Kt },
            p: { style: zt },
            pt: { style: zt },
            pr: { style: zt },
            pb: { style: zt },
            pl: { style: zt },
            px: { style: zt },
            py: { style: zt },
            padding: { style: zt },
            paddingTop: { style: zt },
            paddingRight: { style: zt },
            paddingBottom: { style: zt },
            paddingLeft: { style: zt },
            paddingX: { style: zt },
            paddingY: { style: zt },
            paddingInline: { style: zt },
            paddingInlineStart: { style: zt },
            paddingInlineEnd: { style: zt },
            paddingBlock: { style: zt },
            paddingBlockStart: { style: zt },
            paddingBlockEnd: { style: zt },
            m: { style: Pt },
            mt: { style: Pt },
            mr: { style: Pt },
            mb: { style: Pt },
            ml: { style: Pt },
            mx: { style: Pt },
            my: { style: Pt },
            margin: { style: Pt },
            marginTop: { style: Pt },
            marginRight: { style: Pt },
            marginBottom: { style: Pt },
            marginLeft: { style: Pt },
            marginX: { style: Pt },
            marginY: { style: Pt },
            marginInline: { style: Pt },
            marginInlineStart: { style: Pt },
            marginInlineEnd: { style: Pt },
            marginBlock: { style: Pt },
            marginBlockStart: { style: Pt },
            marginBlockEnd: { style: Pt },
            displayPrint: {
              cssProperty: !1,
              transform: (e) => ({ "@media print": { display: e } }),
            },
            display: {},
            overflow: {},
            textOverflow: {},
            visibility: {},
            whiteSpace: {},
            flexBasis: {},
            flexDirection: {},
            flexWrap: {},
            justifyContent: {},
            alignItems: {},
            alignContent: {},
            order: {},
            flex: {},
            flexGrow: {},
            flexShrink: {},
            alignSelf: {},
            justifyItems: {},
            justifySelf: {},
            gap: { style: Ut },
            rowGap: { style: Ht },
            columnGap: { style: Wt },
            gridColumn: {},
            gridRow: {},
            gridAutoFlow: {},
            gridAutoColumns: {},
            gridAutoRows: {},
            gridTemplateColumns: {},
            gridTemplateRows: {},
            gridTemplateAreas: {},
            gridArea: {},
            position: {},
            zIndex: { themeKey: "zIndex" },
            top: {},
            right: {},
            bottom: {},
            left: {},
            boxShadow: { themeKey: "shadows" },
            width: { transform: Qt },
            maxWidth: { style: Gt },
            minWidth: { transform: Qt },
            height: { transform: Qt },
            maxHeight: { transform: Qt },
            minHeight: { transform: Qt },
            boxSizing: {},
            fontFamily: { themeKey: "typography" },
            fontSize: { themeKey: "typography" },
            fontStyle: { themeKey: "typography" },
            fontWeight: { themeKey: "typography" },
            letterSpacing: {},
            textTransform: {},
            lineHeight: {},
            textAlign: {},
            typography: { cssProperty: !1, themeKey: "typography" },
          }),
        tn = (function () {
          function e(e, t, n, r) {
            const a = { [e]: t, theme: n },
              o = r[e];
            if (!o) return { [e]: t };
            const {
              cssProperty: l = e,
              themeKey: i,
              transform: u,
              style: s,
            } = o;
            if (null == t) return null;
            if ("typography" === i && "inherit" === t) return { [e]: t };
            const c = ft(n, i) || {};
            return s
              ? s(a)
              : dt(a, t, (t) => {
                  let n = pt(c, u, t);
                  return (
                    t === n &&
                      "string" == typeof t &&
                      (n = pt(c, u, `${e}${"default" === t ? "" : O(t)}`, t)),
                    !1 === l ? n : { [l]: n }
                  );
                });
          }
          return function t(n) {
            var r;
            const { sx: a, theme: o = {} } = n || {};
            if (!a) return null;
            const l = null != (r = o.unstable_sxConfig) ? r : en;
            function i(n) {
              let r = n;
              if ("function" == typeof n) r = n(o);
              else if ("object" != typeof n) return n;
              if (!r) return null;
              const a = (function (e = {}) {
                  var t;
                  return (
                    (null == (t = e.keys)
                      ? void 0
                      : t.reduce((t, n) => ((t[e.up(n)] = {}), t), {})) || {}
                  );
                })(o.breakpoints),
                i = Object.keys(a);
              let u = a;
              return (
                Object.keys(r).forEach((n) => {
                  const a = "function" == typeof (i = r[n]) ? i(o) : i;
                  var i;
                  if (null != a)
                    if ("object" == typeof a)
                      if (l[n]) u = mt(u, e(n, a, o, l));
                      else {
                        const e = dt({ theme: o }, a, (e) => ({ [n]: e }));
                        !(function (...e) {
                          const t = e.reduce(
                              (e, t) => e.concat(Object.keys(t)),
                              []
                            ),
                            n = new Set(t);
                          return e.every(
                            (e) => n.size === Object.keys(e).length
                          );
                        })(e, a)
                          ? (u = mt(u, e))
                          : (u[n] = t({ sx: a, theme: o }));
                      }
                    else u = mt(u, e(n, a, o, l));
                }),
                (s = u),
                i.reduce((e, t) => {
                  const n = e[t];
                  return (!n || 0 === Object.keys(n).length) && delete e[t], e;
                }, s)
              );
              var s;
            }
            return Array.isArray(a) ? a.map(i) : i(a);
          };
        })();
      tn.filterProps = ["sx"];
      const nn = tn,
        rn = ["breakpoints", "palette", "spacing", "shape"],
        an = function (e = {}, ...t) {
          const {
              breakpoints: n = {},
              palette: r = {},
              spacing: a,
              shape: o = {},
            } = e,
            l = y(e, rn),
            i = (function (e) {
              const {
                  values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
                  unit: n = "px",
                  step: r = 5,
                } = e,
                a = y(e, it),
                o = ((e) => {
                  const t =
                    Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
                  return (
                    t.sort((e, t) => e.val - t.val),
                    t.reduce((e, t) => v({}, e, { [t.key]: t.val }), {})
                  );
                })(t),
                l = Object.keys(o);
              function i(e) {
                return `@media (min-width:${
                  "number" == typeof t[e] ? t[e] : e
                }${n})`;
              }
              function u(e) {
                return `@media (max-width:${
                  ("number" == typeof t[e] ? t[e] : e) - r / 100
                }${n})`;
              }
              function s(e, a) {
                const o = l.indexOf(a);
                return `@media (min-width:${
                  "number" == typeof t[e] ? t[e] : e
                }${n}) and (max-width:${
                  (-1 !== o && "number" == typeof t[l[o]] ? t[l[o]] : a) -
                  r / 100
                }${n})`;
              }
              return v(
                {
                  keys: l,
                  values: o,
                  up: i,
                  down: u,
                  between: s,
                  only: function (e) {
                    return l.indexOf(e) + 1 < l.length
                      ? s(e, l[l.indexOf(e) + 1])
                      : i(e);
                  },
                  not: function (e) {
                    const t = l.indexOf(e);
                    return 0 === t
                      ? i(l[1])
                      : t === l.length - 1
                      ? u(l[t])
                      : s(e, l[l.indexOf(e) + 1]).replace(
                          "@media",
                          "@media not all and"
                        );
                  },
                  unit: n,
                },
                a
              );
            })(n),
            u = (function (e = 8) {
              if (e.mui) return e;
              const t = Et({ spacing: e }),
                n = (...e) =>
                  (0 === e.length ? [1] : e)
                    .map((e) => {
                      const n = t(e);
                      return "number" == typeof n ? `${n}px` : n;
                    })
                    .join(" ");
              return (n.mui = !0), n;
            })(a);
          let s = lt(
            {
              breakpoints: i,
              direction: "ltr",
              components: {},
              palette: v({ mode: "light" }, r),
              spacing: u,
              shape: v({}, ut, o),
            },
            l
          );
          return (
            (s = t.reduce((e, t) => lt(e, t), s)),
            (s.unstable_sxConfig = v(
              {},
              en,
              null == l ? void 0 : l.unstable_sxConfig
            )),
            (s.unstable_sx = function (e) {
              return nn({ sx: e, theme: this });
            }),
            s
          );
        },
        on = ["variant"];
      function ln(e) {
        return 0 === e.length;
      }
      function un(e) {
        const { variant: t } = e,
          n = y(e, on);
        let r = t || "";
        return (
          Object.keys(n)
            .sort()
            .forEach((t) => {
              r +=
                "color" === t
                  ? ln(r)
                    ? e[t]
                    : O(e[t])
                  : `${ln(r) ? t : O(t)}${O(e[t].toString())}`;
            }),
          r
        );
      }
      const sn = [
        "name",
        "slot",
        "skipVariantsResolver",
        "skipSx",
        "overridesResolver",
      ];
      function cn(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
      }
      const dn = an(),
        fn = (e) => (e ? e.charAt(0).toLowerCase() + e.slice(1) : e);
      function pn({ defaultTheme: e, theme: t, themeId: n }) {
        return (r = t), 0 === Object.keys(r).length ? e : t[n] || t;
        var r;
      }
      function hn(e) {
        return e ? (t, n) => n[e] : null;
      }
      const mn = { black: "#000", white: "#fff" },
        gn = {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A700: "#616161",
        },
        yn = {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
          A100: "#ea80fc",
          A200: "#e040fb",
          A400: "#d500f9",
          A700: "#aa00ff",
        },
        vn = {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
          A100: "#ff8a80",
          A200: "#ff5252",
          A400: "#ff1744",
          A700: "#d50000",
        },
        bn = {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
          A100: "#ffd180",
          A200: "#ffab40",
          A400: "#ff9100",
          A700: "#ff6d00",
        },
        wn = {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          A100: "#82b1ff",
          A200: "#448aff",
          A400: "#2979ff",
          A700: "#2962ff",
        },
        kn = {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
          A100: "#80d8ff",
          A200: "#40c4ff",
          A400: "#00b0ff",
          A700: "#0091ea",
        },
        xn = {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          A100: "#b9f6ca",
          A200: "#69f0ae",
          A400: "#00e676",
          A700: "#00c853",
        },
        Sn = ["mode", "contrastThreshold", "tonalOffset"],
        En = {
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
          },
          divider: "rgba(0, 0, 0, 0.12)",
          background: { paper: mn.white, default: mn.white },
          action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        Cn = {
          text: {
            primary: mn.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: { paper: "#121212", default: "#121212" },
          action: {
            active: mn.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        };
      function _n(e, t, n, r) {
        const a = r.light || r,
          o = r.dark || 1.5 * r;
        e[t] ||
          (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : "light" === t
            ? (e.light = T(e.main, a))
            : "dark" === t && (e.dark = z(e.main, o)));
      }
      const Pn = [
          "fontFamily",
          "fontSize",
          "fontWeightLight",
          "fontWeightRegular",
          "fontWeightMedium",
          "fontWeightBold",
          "htmlFontSize",
          "allVariants",
          "pxToRem",
        ],
        zn = { textTransform: "uppercase" },
        Tn = '"Roboto", "Helvetica", "Arial", sans-serif';
      function On(e, t) {
        const n = "function" == typeof t ? t(e) : t,
          {
            fontFamily: r = Tn,
            fontSize: a = 14,
            fontWeightLight: o = 300,
            fontWeightRegular: l = 400,
            fontWeightMedium: i = 500,
            fontWeightBold: u = 700,
            htmlFontSize: s = 16,
            allVariants: c,
            pxToRem: d,
          } = n,
          f = y(n, Pn),
          p = a / 14,
          h = d || ((e) => (e / s) * p + "rem"),
          m = (e, t, n, a, o) => {
            return v(
              { fontFamily: r, fontWeight: e, fontSize: h(t), lineHeight: n },
              r === Tn
                ? {
                    letterSpacing:
                      ((l = a / t), Math.round(1e5 * l) / 1e5 + "em"),
                  }
                : {},
              o,
              c
            );
            var l;
          },
          g = {
            h1: m(o, 96, 1.167, -1.5),
            h2: m(o, 60, 1.2, -0.5),
            h3: m(l, 48, 1.167, 0),
            h4: m(l, 34, 1.235, 0.25),
            h5: m(l, 24, 1.334, 0),
            h6: m(i, 20, 1.6, 0.15),
            subtitle1: m(l, 16, 1.75, 0.15),
            subtitle2: m(i, 14, 1.57, 0.1),
            body1: m(l, 16, 1.5, 0.15),
            body2: m(l, 14, 1.43, 0.15),
            button: m(i, 14, 1.75, 0.4, zn),
            caption: m(l, 12, 1.66, 0.4),
            overline: m(l, 12, 2.66, 1, zn),
            inherit: {
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          };
        return lt(
          v(
            {
              htmlFontSize: s,
              pxToRem: h,
              fontFamily: r,
              fontSize: a,
              fontWeightLight: o,
              fontWeightRegular: l,
              fontWeightMedium: i,
              fontWeightBold: u,
            },
            g
          ),
          f,
          { clone: !1 }
        );
      }
      function Nn(...e) {
        return [
          `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
          `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
          `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`,
        ].join(",");
      }
      const Rn = [
          "none",
          Nn(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
          Nn(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
          Nn(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
          Nn(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
          Nn(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
          Nn(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
          Nn(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
          Nn(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
          Nn(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
          Nn(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
          Nn(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
          Nn(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
          Nn(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
          Nn(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
          Nn(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
          Nn(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
          Nn(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
          Nn(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
          Nn(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
          Nn(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
          Nn(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
          Nn(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
          Nn(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
          Nn(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ],
        Ln = ["duration", "easing", "delay"],
        Mn = {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        $n = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        };
      function In(e) {
        return `${Math.round(e)}ms`;
      }
      function Fn(e) {
        if (!e) return 0;
        const t = e / 36;
        return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
      }
      function An(e) {
        const t = v({}, Mn, e.easing),
          n = v({}, $n, e.duration);
        return v(
          {
            getAutoHeightDuration: Fn,
            create: (e = ["all"], r = {}) => {
              const {
                duration: a = n.standard,
                easing: o = t.easeInOut,
                delay: l = 0,
              } = r;
              return (
                y(r, Ln),
                (Array.isArray(e) ? e : [e])
                  .map(
                    (e) =>
                      `${e} ${"string" == typeof a ? a : In(a)} ${o} ${
                        "string" == typeof l ? l : In(l)
                      }`
                  )
                  .join(",")
              );
            },
          },
          e,
          { easing: t, duration: n }
        );
      }
      const jn = {
          mobileStepper: 1e3,
          fab: 1050,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
        Dn = [
          "breakpoints",
          "mixins",
          "spacing",
          "palette",
          "transitions",
          "typography",
          "shape",
        ];
      const Bn = (function (e = {}, ...t) {
          const {
              mixins: n = {},
              palette: r = {},
              transitions: a = {},
              typography: o = {},
            } = e,
            l = y(e, Dn);
          if (e.vars) throw new Error(x(18));
          const i = (function (e) {
              const {
                  mode: t = "light",
                  contrastThreshold: n = 3,
                  tonalOffset: r = 0.2,
                } = e,
                a = y(e, Sn),
                o =
                  e.primary ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: wn[200], light: wn[50], dark: wn[400] }
                      : { main: wn[700], light: wn[400], dark: wn[800] };
                  })(t),
                l =
                  e.secondary ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: yn[200], light: yn[50], dark: yn[400] }
                      : { main: yn[500], light: yn[300], dark: yn[700] };
                  })(t),
                i =
                  e.error ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: vn[500], light: vn[300], dark: vn[700] }
                      : { main: vn[700], light: vn[400], dark: vn[800] };
                  })(t),
                u =
                  e.info ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: kn[400], light: kn[300], dark: kn[700] }
                      : { main: kn[700], light: kn[500], dark: kn[900] };
                  })(t),
                s =
                  e.success ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: xn[400], light: xn[300], dark: xn[700] }
                      : { main: xn[800], light: xn[500], dark: xn[900] };
                  })(t),
                c =
                  e.warning ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: bn[400], light: bn[300], dark: bn[700] }
                      : { main: "#ed6c02", light: bn[500], dark: bn[900] };
                  })(t);
              function d(e) {
                const t =
                  (function (e, t) {
                    const n = _(e),
                      r = _(t);
                    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
                  })(e, Cn.text.primary) >= n
                    ? Cn.text.primary
                    : En.text.primary;
                return t;
              }
              const f = ({
                  color: e,
                  name: t,
                  mainShade: n = 500,
                  lightShade: a = 300,
                  darkShade: o = 700,
                }) => {
                  if (
                    (!(e = v({}, e)).main && e[n] && (e.main = e[n]),
                    !e.hasOwnProperty("main"))
                  )
                    throw new Error(x(11, t ? ` (${t})` : "", n));
                  if ("string" != typeof e.main)
                    throw new Error(
                      x(12, t ? ` (${t})` : "", JSON.stringify(e.main))
                    );
                  return (
                    _n(e, "light", a, r),
                    _n(e, "dark", o, r),
                    e.contrastText || (e.contrastText = d(e.main)),
                    e
                  );
                },
                p = { dark: Cn, light: En };
              return lt(
                v(
                  {
                    common: v({}, mn),
                    mode: t,
                    primary: f({ color: o, name: "primary" }),
                    secondary: f({
                      color: l,
                      name: "secondary",
                      mainShade: "A400",
                      lightShade: "A200",
                      darkShade: "A700",
                    }),
                    error: f({ color: i, name: "error" }),
                    warning: f({ color: c, name: "warning" }),
                    info: f({ color: u, name: "info" }),
                    success: f({ color: s, name: "success" }),
                    grey: gn,
                    contrastThreshold: n,
                    getContrastText: d,
                    augmentColor: f,
                    tonalOffset: r,
                  },
                  p[t]
                ),
                a
              );
            })(r),
            u = an(e);
          let s = lt(u, {
            mixins:
              ((c = u.breakpoints),
              (d = n),
              v(
                {
                  toolbar: {
                    minHeight: 56,
                    [c.up("xs")]: {
                      "@media (orientation: landscape)": { minHeight: 48 },
                    },
                    [c.up("sm")]: { minHeight: 64 },
                  },
                },
                d
              )),
            palette: i,
            shadows: Rn.slice(),
            typography: On(i, o),
            transitions: An(a),
            zIndex: v({}, jn),
          });
          var c, d;
          return (
            (s = lt(s, l)),
            (s = t.reduce((e, t) => lt(e, t), s)),
            (s.unstable_sxConfig = v(
              {},
              en,
              null == l ? void 0 : l.unstable_sxConfig
            )),
            (s.unstable_sx = function (e) {
              return nn({ sx: e, theme: this });
            }),
            s
          );
        })(),
        Vn = "$$material",
        Un = (e) => cn(e) && "classes" !== e,
        Wn = (function (e = {}) {
          const {
              themeId: t,
              defaultTheme: n = dn,
              rootShouldForwardProp: r = cn,
              slotShouldForwardProp: a = cn,
            } = e,
            o = (e) =>
              nn(
                v({}, e, {
                  theme: pn(v({}, e, { defaultTheme: n, themeId: t })),
                })
              );
          return (
            (o.__mui_systemSx = !0),
            (e, l = {}) => {
              ((e, t) => {
                Array.isArray(e.__emotion_styles) &&
                  (e.__emotion_styles = e.__emotion_styles.filter(
                    (e) => !(null != e && e.__mui_systemSx)
                  ));
              })(e);
              const {
                  name: i,
                  slot: u,
                  skipVariantsResolver: s,
                  skipSx: c,
                  overridesResolver: d = hn(fn(u)),
                } = l,
                f = y(l, sn),
                p =
                  void 0 !== s ? s : (u && "Root" !== u && "root" !== u) || !1,
                h = c || !1;
              let m = cn;
              "Root" === u || "root" === u
                ? (m = r)
                : u
                ? (m = a)
                : (function (e) {
                    return "string" == typeof e && e.charCodeAt(0) > 96;
                  })(e) && (m = void 0);
              const g = (function (e, t) {
                  return rt(e, t);
                })(e, v({ shouldForwardProp: m, label: void 0 }, f)),
                b = (r, ...a) => {
                  const l = a
                    ? a.map((e) =>
                        "function" == typeof e && e.__emotion_real !== e
                          ? (r) =>
                              e(
                                v({}, r, {
                                  theme: pn(
                                    v({}, r, { defaultTheme: n, themeId: t })
                                  ),
                                })
                              )
                          : e
                      )
                    : [];
                  let u = r;
                  i &&
                    d &&
                    l.push((e) => {
                      const r = pn(v({}, e, { defaultTheme: n, themeId: t })),
                        a = ((e, t) =>
                          t.components &&
                          t.components[e] &&
                          t.components[e].styleOverrides
                            ? t.components[e].styleOverrides
                            : null)(i, r);
                      if (a) {
                        const t = {};
                        return (
                          Object.entries(a).forEach(([n, a]) => {
                            t[n] =
                              "function" == typeof a
                                ? a(v({}, e, { theme: r }))
                                : a;
                          }),
                          d(e, t)
                        );
                      }
                      return null;
                    }),
                    i &&
                      !p &&
                      l.push((e) => {
                        const r = pn(v({}, e, { defaultTheme: n, themeId: t }));
                        return ((e, t, n, r) => {
                          var a;
                          const { ownerState: o = {} } = e,
                            l = [],
                            i =
                              null == n ||
                              null == (a = n.components) ||
                              null == (a = a[r])
                                ? void 0
                                : a.variants;
                          return (
                            i &&
                              i.forEach((n) => {
                                let r = !0;
                                Object.keys(n.props).forEach((t) => {
                                  o[t] !== n.props[t] &&
                                    e[t] !== n.props[t] &&
                                    (r = !1);
                                }),
                                  r && l.push(t[un(n.props)]);
                              }),
                            l
                          );
                        })(
                          e,
                          ((e, t) => {
                            let n = [];
                            t &&
                              t.components &&
                              t.components[e] &&
                              t.components[e].variants &&
                              (n = t.components[e].variants);
                            const r = {};
                            return (
                              n.forEach((e) => {
                                const t = un(e.props);
                                r[t] = e.style;
                              }),
                              r
                            );
                          })(i, r),
                          r,
                          i
                        );
                      }),
                    h || l.push(o);
                  const s = l.length - a.length;
                  if (Array.isArray(r) && s > 0) {
                    const e = new Array(s).fill("");
                    (u = [...r, ...e]), (u.raw = [...r.raw, ...e]);
                  } else
                    "function" == typeof r &&
                      r.__emotion_real !== r &&
                      (u = (e) =>
                        r(
                          v({}, e, {
                            theme: pn(
                              v({}, e, { defaultTheme: n, themeId: t })
                            ),
                          })
                        ));
                  const c = g(u, ...l);
                  return e.muiName && (c.muiName = e.muiName), c;
                };
              return g.withConfig && (b.withConfig = g.withConfig), b;
            }
          );
        })({ themeId: Vn, defaultTheme: Bn, rootShouldForwardProp: Un }),
        Hn = Wn,
        Kn = e.createContext(void 0);
      function Qn(e, t) {
        const n = v({}, t);
        return (
          Object.keys(e).forEach((r) => {
            if (r.toString().match(/^(components|slots)$/))
              n[r] = v({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
              const a = e[r] || {},
                o = t[r];
              (n[r] = {}),
                o && Object.keys(o)
                  ? a && Object.keys(a)
                    ? ((n[r] = v({}, o)),
                      Object.keys(a).forEach((e) => {
                        n[r][e] = Qn(a[e], o[e]);
                      }))
                    : (n[r] = o)
                  : (n[r] = a);
            } else void 0 === n[r] && (n[r] = e[r]);
          }),
          n
        );
      }
      const qn = an(),
        Gn = function (t = qn) {
          return (function (t = null) {
            const n = e.useContext(Ye);
            return n && ((r = n), 0 !== Object.keys(r).length) ? n : t;
            var r;
          })(t);
        };
      function Yn({ props: e, name: t }) {
        return (function ({ props: e, name: t, defaultTheme: n, themeId: r }) {
          let a = Gn(n);
          r && (a = a[r] || a);
          const o = (function (e) {
            const { theme: t, name: n, props: r } = e;
            return t &&
              t.components &&
              t.components[n] &&
              t.components[n].defaultProps
              ? Qn(t.components[n].defaultProps, r)
              : r;
          })({ theme: a, name: t, props: e });
          return o;
        })({ props: e, name: t, defaultTheme: Bn, themeId: Vn });
      }
      const Xn = function (...t) {
          return e.useMemo(
            () =>
              t.every((e) => null == e)
                ? null
                : (e) => {
                    t.forEach((t) => {
                      !(function (e, t) {
                        "function" == typeof e ? e(t) : e && (e.current = t);
                      })(t, e);
                    });
                  },
            t
          );
        },
        Zn = "undefined" != typeof window ? e.useLayoutEffect : e.useEffect,
        Jn = function (t) {
          const n = e.useRef(t);
          return (
            Zn(() => {
              n.current = t;
            }),
            e.useCallback((...e) => (0, n.current)(...e), [])
          );
        };
      let er,
        tr = !0,
        nr = !1;
      const rr = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0,
      };
      function ar(e) {
        e.metaKey || e.altKey || e.ctrlKey || (tr = !0);
      }
      function or() {
        tr = !1;
      }
      function lr() {
        "hidden" === this.visibilityState && nr && (tr = !0);
      }
      const ir = function () {
        const t = e.useCallback((e) => {
            var t;
            null != e &&
              ((t = e.ownerDocument).addEventListener("keydown", ar, !0),
              t.addEventListener("mousedown", or, !0),
              t.addEventListener("pointerdown", or, !0),
              t.addEventListener("touchstart", or, !0),
              t.addEventListener("visibilitychange", lr, !0));
          }, []),
          n = e.useRef(!1);
        return {
          isFocusVisibleRef: n,
          onFocus: function (e) {
            return (
              !!(function (e) {
                const { target: t } = e;
                try {
                  return t.matches(":focus-visible");
                } catch (e) {}
                return (
                  tr ||
                  (function (e) {
                    const { type: t, tagName: n } = e;
                    return (
                      !("INPUT" !== n || !rr[t] || e.readOnly) ||
                      ("TEXTAREA" === n && !e.readOnly) ||
                      !!e.isContentEditable
                    );
                  })(t)
                );
              })(e) && ((n.current = !0), !0)
            );
          },
          onBlur: function () {
            return (
              !!n.current &&
              ((nr = !0),
              window.clearTimeout(er),
              (er = window.setTimeout(() => {
                nr = !1;
              }, 100)),
              (n.current = !1),
              !0)
            );
          },
          ref: t,
        };
      };
      function ur(e, t) {
        return (
          (ur = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ur(e, t)
        );
      }
      const sr = e.createContext(null);
      function cr(t, n) {
        var r = Object.create(null);
        return (
          t &&
            e.Children.map(t, function (e) {
              return e;
            }).forEach(function (t) {
              r[t.key] = (function (t) {
                return n && (0, e.isValidElement)(t) ? n(t) : t;
              })(t);
            }),
          r
        );
      }
      function dr(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function fr(t, n, r) {
        var a = cr(t.children),
          o = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
              a = Object.create(null),
              o = [];
            for (var l in e)
              l in t ? o.length && ((a[l] = o), (o = [])) : o.push(l);
            var i = {};
            for (var u in t) {
              if (a[u])
                for (r = 0; r < a[u].length; r++) {
                  var s = a[u][r];
                  i[a[u][r]] = n(s);
                }
              i[u] = n(u);
            }
            for (r = 0; r < o.length; r++) i[o[r]] = n(o[r]);
            return i;
          })(n, a);
        return (
          Object.keys(o).forEach(function (l) {
            var i = o[l];
            if ((0, e.isValidElement)(i)) {
              var u = l in n,
                s = l in a,
                c = n[l],
                d = (0, e.isValidElement)(c) && !c.props.in;
              !s || (u && !d)
                ? s || !u || d
                  ? s &&
                    u &&
                    (0, e.isValidElement)(c) &&
                    (o[l] = (0, e.cloneElement)(i, {
                      onExited: r.bind(null, i),
                      in: c.props.in,
                      exit: dr(i, "exit", t),
                      enter: dr(i, "enter", t),
                    }))
                  : (o[l] = (0, e.cloneElement)(i, { in: !1 }))
                : (o[l] = (0, e.cloneElement)(i, {
                    onExited: r.bind(null, i),
                    in: !0,
                    exit: dr(i, "exit", t),
                    enter: dr(i, "enter", t),
                  }));
            }
          }),
          o
        );
      }
      var pr =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        hr = (function (t) {
          var n, r;
          function a(e, n) {
            var r,
              a = (r = t.call(this, e, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: a,
                firstRender: !0,
              }),
              r
            );
          }
          (r = t),
            ((n = a).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            ur(n, r);
          var o = a.prototype;
          return (
            (o.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (o.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (a.getDerivedStateFromProps = function (t, n) {
              var r,
                a,
                o = n.children,
                l = n.handleExited;
              return {
                children: n.firstRender
                  ? ((r = t),
                    (a = l),
                    cr(r.children, function (t) {
                      return (0,
                      e.cloneElement)(t, { onExited: a.bind(null, t), in: !0, appear: dr(t, "appear", r), enter: dr(t, "enter", r), exit: dr(t, "exit", r) });
                    }))
                  : fr(t, o, l),
                firstRender: !1,
              };
            }),
            (o.handleExited = function (e, t) {
              var n = cr(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = v({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (o.render = function () {
              var t = this.props,
                n = t.component,
                r = t.childFactory,
                a = y(t, ["component", "childFactory"]),
                o = this.state.contextValue,
                l = pr(this.state.children).map(r);
              return (
                delete a.appear,
                delete a.enter,
                delete a.exit,
                null === n
                  ? e.createElement(sr.Provider, { value: o }, l)
                  : e.createElement(
                      sr.Provider,
                      { value: o },
                      e.createElement(n, a, l)
                    )
              );
            }),
            a
          );
        })(e.Component);
      (hr.propTypes = {}),
        (hr.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      const mr = hr;
      function gr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Ke(t);
      }
      a(679);
      var yr = function () {
          var e = gr.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function () {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
          };
        },
        vr = a(893);
      const br = (e) => e,
        wr = (() => {
          let e = br;
          return {
            configure(t) {
              e = t;
            },
            generate: (t) => e(t),
            reset() {
              e = br;
            },
          };
        })(),
        kr = {
          active: "active",
          checked: "checked",
          completed: "completed",
          disabled: "disabled",
          error: "error",
          expanded: "expanded",
          focused: "focused",
          focusVisible: "focusVisible",
          open: "open",
          readOnly: "readOnly",
          required: "required",
          selected: "selected",
        };
      function xr(e, t, n = "Mui") {
        const r = kr[t];
        return r ? `${n}-${r}` : `${wr.generate(e)}-${t}`;
      }
      function Sr(e, t, n = "Mui") {
        const r = {};
        return (
          t.forEach((t) => {
            r[t] = xr(e, t, n);
          }),
          r
        );
      }
      const Er = Sr("MuiTouchRipple", [
          "root",
          "ripple",
          "rippleVisible",
          "ripplePulsate",
          "child",
          "childLeaving",
          "childPulsate",
        ]),
        Cr = ["center", "classes", "className"];
      let _r,
        Pr,
        zr,
        Tr,
        Or = (e) => e;
      const Nr = yr(
          _r ||
            (_r = Or`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
        ),
        Rr = yr(
          Pr ||
            (Pr = Or`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
        ),
        Lr = yr(
          zr ||
            (zr = Or`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
        ),
        Mr = Hn("span", { name: "MuiTouchRipple", slot: "Root" })({
          overflow: "hidden",
          pointerEvents: "none",
          position: "absolute",
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "inherit",
        }),
        $r = Hn(
          function (t) {
            const {
                className: n,
                classes: r,
                pulsate: a = !1,
                rippleX: o,
                rippleY: l,
                rippleSize: i,
                in: u,
                onExited: s,
                timeout: c,
              } = t,
              [d, f] = e.useState(!1),
              p = w(n, r.ripple, r.rippleVisible, a && r.ripplePulsate),
              h = { width: i, height: i, top: -i / 2 + l, left: -i / 2 + o },
              m = w(r.child, d && r.childLeaving, a && r.childPulsate);
            return (
              u || d || f(!0),
              e.useEffect(() => {
                if (!u && null != s) {
                  const e = setTimeout(s, c);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }, [s, u, c]),
              (0, vr.jsx)("span", {
                className: p,
                style: h,
                children: (0, vr.jsx)("span", { className: m }),
              })
            );
          },
          { name: "MuiTouchRipple", slot: "Ripple" }
        )(
          Tr ||
            (Tr = Or`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
          Er.rippleVisible,
          Nr,
          550,
          ({ theme: e }) => e.transitions.easing.easeInOut,
          Er.ripplePulsate,
          ({ theme: e }) => e.transitions.duration.shorter,
          Er.child,
          Er.childLeaving,
          Rr,
          550,
          ({ theme: e }) => e.transitions.easing.easeInOut,
          Er.childPulsate,
          Lr,
          ({ theme: e }) => e.transitions.easing.easeInOut
        ),
        Ir = e.forwardRef(function (t, n) {
          const r = Yn({ props: t, name: "MuiTouchRipple" }),
            { center: a = !1, classes: o = {}, className: l } = r,
            i = y(r, Cr),
            [u, s] = e.useState([]),
            c = e.useRef(0),
            d = e.useRef(null);
          e.useEffect(() => {
            d.current && (d.current(), (d.current = null));
          }, [u]);
          const f = e.useRef(!1),
            p = e.useRef(0),
            h = e.useRef(null),
            m = e.useRef(null);
          e.useEffect(
            () => () => {
              p.current && clearTimeout(p.current);
            },
            []
          );
          const g = e.useCallback(
              (e) => {
                const {
                  pulsate: t,
                  rippleX: n,
                  rippleY: r,
                  rippleSize: a,
                  cb: l,
                } = e;
                s((e) => [
                  ...e,
                  (0, vr.jsx)(
                    $r,
                    {
                      classes: {
                        ripple: w(o.ripple, Er.ripple),
                        rippleVisible: w(o.rippleVisible, Er.rippleVisible),
                        ripplePulsate: w(o.ripplePulsate, Er.ripplePulsate),
                        child: w(o.child, Er.child),
                        childLeaving: w(o.childLeaving, Er.childLeaving),
                        childPulsate: w(o.childPulsate, Er.childPulsate),
                      },
                      timeout: 550,
                      pulsate: t,
                      rippleX: n,
                      rippleY: r,
                      rippleSize: a,
                    },
                    c.current
                  ),
                ]),
                  (c.current += 1),
                  (d.current = l);
              },
              [o]
            ),
            b = e.useCallback(
              (e = {}, t = {}, n = () => {}) => {
                const {
                  pulsate: r = !1,
                  center: o = a || t.pulsate,
                  fakeElement: l = !1,
                } = t;
                if ("mousedown" === (null == e ? void 0 : e.type) && f.current)
                  return void (f.current = !1);
                "touchstart" === (null == e ? void 0 : e.type) &&
                  (f.current = !0);
                const i = l ? null : m.current,
                  u = i
                    ? i.getBoundingClientRect()
                    : { width: 0, height: 0, left: 0, top: 0 };
                let s, c, d;
                if (
                  o ||
                  void 0 === e ||
                  (0 === e.clientX && 0 === e.clientY) ||
                  (!e.clientX && !e.touches)
                )
                  (s = Math.round(u.width / 2)), (c = Math.round(u.height / 2));
                else {
                  const { clientX: t, clientY: n } =
                    e.touches && e.touches.length > 0 ? e.touches[0] : e;
                  (s = Math.round(t - u.left)), (c = Math.round(n - u.top));
                }
                if (o)
                  (d = Math.sqrt((2 * u.width ** 2 + u.height ** 2) / 3)),
                    d % 2 == 0 && (d += 1);
                else {
                  const e =
                      2 * Math.max(Math.abs((i ? i.clientWidth : 0) - s), s) +
                      2,
                    t =
                      2 * Math.max(Math.abs((i ? i.clientHeight : 0) - c), c) +
                      2;
                  d = Math.sqrt(e ** 2 + t ** 2);
                }
                null != e && e.touches
                  ? null === h.current &&
                    ((h.current = () => {
                      g({
                        pulsate: r,
                        rippleX: s,
                        rippleY: c,
                        rippleSize: d,
                        cb: n,
                      });
                    }),
                    (p.current = setTimeout(() => {
                      h.current && (h.current(), (h.current = null));
                    }, 80)))
                  : g({
                      pulsate: r,
                      rippleX: s,
                      rippleY: c,
                      rippleSize: d,
                      cb: n,
                    });
              },
              [a, g]
            ),
            k = e.useCallback(() => {
              b({}, { pulsate: !0 });
            }, [b]),
            x = e.useCallback((e, t) => {
              if (
                (clearTimeout(p.current),
                "touchend" === (null == e ? void 0 : e.type) && h.current)
              )
                return (
                  h.current(),
                  (h.current = null),
                  void (p.current = setTimeout(() => {
                    x(e, t);
                  }))
                );
              (h.current = null),
                s((e) => (e.length > 0 ? e.slice(1) : e)),
                (d.current = t);
            }, []);
          return (
            e.useImperativeHandle(
              n,
              () => ({ pulsate: k, start: b, stop: x }),
              [k, b, x]
            ),
            (0, vr.jsx)(
              Mr,
              v({ className: w(Er.root, o.root, l), ref: m }, i, {
                children: (0, vr.jsx)(mr, {
                  component: null,
                  exit: !0,
                  children: u,
                }),
              })
            )
          );
        });
      function Fr(e) {
        return xr("MuiButtonBase", e);
      }
      const Ar = Sr("MuiButtonBase", ["root", "disabled", "focusVisible"]),
        jr = [
          "action",
          "centerRipple",
          "children",
          "className",
          "component",
          "disabled",
          "disableRipple",
          "disableTouchRipple",
          "focusRipple",
          "focusVisibleClassName",
          "LinkComponent",
          "onBlur",
          "onClick",
          "onContextMenu",
          "onDragLeave",
          "onFocus",
          "onFocusVisible",
          "onKeyDown",
          "onKeyUp",
          "onMouseDown",
          "onMouseLeave",
          "onMouseUp",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "tabIndex",
          "TouchRippleProps",
          "touchRippleRef",
          "type",
        ],
        Dr = Hn("button", {
          name: "MuiButtonBase",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          cursor: "pointer",
          userSelect: "none",
          verticalAlign: "middle",
          MozAppearance: "none",
          WebkitAppearance: "none",
          textDecoration: "none",
          color: "inherit",
          "&::-moz-focus-inner": { borderStyle: "none" },
          [`&.${Ar.disabled}`]: { pointerEvents: "none", cursor: "default" },
          "@media print": { colorAdjust: "exact" },
        }),
        Br = e.forwardRef(function (t, n) {
          const r = Yn({ props: t, name: "MuiButtonBase" }),
            {
              action: a,
              centerRipple: o = !1,
              children: l,
              className: i,
              component: u = "button",
              disabled: s = !1,
              disableRipple: c = !1,
              disableTouchRipple: d = !1,
              focusRipple: f = !1,
              LinkComponent: p = "a",
              onBlur: h,
              onClick: m,
              onContextMenu: g,
              onDragLeave: b,
              onFocus: x,
              onFocusVisible: S,
              onKeyDown: E,
              onKeyUp: C,
              onMouseDown: _,
              onMouseLeave: P,
              onMouseUp: z,
              onTouchEnd: T,
              onTouchMove: O,
              onTouchStart: N,
              tabIndex: R = 0,
              TouchRippleProps: L,
              touchRippleRef: M,
              type: $,
            } = r,
            I = y(r, jr),
            F = e.useRef(null),
            A = e.useRef(null),
            j = Xn(A, M),
            { isFocusVisibleRef: D, onFocus: B, onBlur: V, ref: U } = ir(),
            [W, H] = e.useState(!1);
          s && W && H(!1),
            e.useImperativeHandle(
              a,
              () => ({
                focusVisible: () => {
                  H(!0), F.current.focus();
                },
              }),
              []
            );
          const [K, Q] = e.useState(!1);
          e.useEffect(() => {
            Q(!0);
          }, []);
          const q = K && !c && !s;
          function G(e, t, n = d) {
            return Jn(
              (r) => (t && t(r), !n && A.current && A.current[e](r), !0)
            );
          }
          e.useEffect(() => {
            W && f && !c && K && A.current.pulsate();
          }, [c, f, W, K]);
          const Y = G("start", _),
            X = G("stop", g),
            Z = G("stop", b),
            J = G("stop", z),
            ee = G("stop", (e) => {
              W && e.preventDefault(), P && P(e);
            }),
            te = G("start", N),
            ne = G("stop", T),
            re = G("stop", O),
            ae = G(
              "stop",
              (e) => {
                V(e), !1 === D.current && H(!1), h && h(e);
              },
              !1
            ),
            oe = Jn((e) => {
              F.current || (F.current = e.currentTarget),
                B(e),
                !0 === D.current && (H(!0), S && S(e)),
                x && x(e);
            }),
            le = () => {
              const e = F.current;
              return u && "button" !== u && !("A" === e.tagName && e.href);
            },
            ie = e.useRef(!1),
            ue = Jn((e) => {
              f &&
                !ie.current &&
                W &&
                A.current &&
                " " === e.key &&
                ((ie.current = !0),
                A.current.stop(e, () => {
                  A.current.start(e);
                })),
                e.target === e.currentTarget &&
                  le() &&
                  " " === e.key &&
                  e.preventDefault(),
                E && E(e),
                e.target === e.currentTarget &&
                  le() &&
                  "Enter" === e.key &&
                  !s &&
                  (e.preventDefault(), m && m(e));
            }),
            se = Jn((e) => {
              f &&
                " " === e.key &&
                A.current &&
                W &&
                !e.defaultPrevented &&
                ((ie.current = !1),
                A.current.stop(e, () => {
                  A.current.pulsate(e);
                })),
                C && C(e),
                m &&
                  e.target === e.currentTarget &&
                  le() &&
                  " " === e.key &&
                  !e.defaultPrevented &&
                  m(e);
            });
          let ce = u;
          "button" === ce && (I.href || I.to) && (ce = p);
          const de = {};
          "button" === ce
            ? ((de.type = void 0 === $ ? "button" : $), (de.disabled = s))
            : (I.href || I.to || (de.role = "button"),
              s && (de["aria-disabled"] = s));
          const fe = Xn(n, U, F),
            pe = v({}, r, {
              centerRipple: o,
              component: u,
              disabled: s,
              disableRipple: c,
              disableTouchRipple: d,
              focusRipple: f,
              tabIndex: R,
              focusVisible: W,
            }),
            he = ((e) => {
              const {
                  disabled: t,
                  focusVisible: n,
                  focusVisibleClassName: r,
                  classes: a,
                } = e,
                o = k(
                  { root: ["root", t && "disabled", n && "focusVisible"] },
                  Fr,
                  a
                );
              return n && r && (o.root += ` ${r}`), o;
            })(pe);
          return (0,
          vr.jsxs)(Dr, v({ as: ce, className: w(he.root, i), ownerState: pe, onBlur: ae, onClick: m, onContextMenu: X, onFocus: oe, onKeyDown: ue, onKeyUp: se, onMouseDown: Y, onMouseLeave: ee, onMouseUp: J, onDragLeave: Z, onTouchEnd: ne, onTouchMove: re, onTouchStart: te, ref: fe, tabIndex: s ? -1 : R, type: $ }, de, I, { children: [l, q ? (0, vr.jsx)(Ir, v({ ref: j, center: o }, L)) : null] }));
        }),
        Vr = Br;
      function Ur(e) {
        return xr("PrivateSwitchBase", e);
      }
      Sr("PrivateSwitchBase", [
        "root",
        "checked",
        "disabled",
        "input",
        "edgeStart",
        "edgeEnd",
      ]);
      const Wr = [
          "autoFocus",
          "checked",
          "checkedIcon",
          "className",
          "defaultChecked",
          "disabled",
          "disableFocusRipple",
          "edge",
          "icon",
          "id",
          "inputProps",
          "inputRef",
          "name",
          "onBlur",
          "onChange",
          "onFocus",
          "readOnly",
          "required",
          "tabIndex",
          "type",
          "value",
        ],
        Hr = Hn(Vr)(({ ownerState: e }) =>
          v(
            { padding: 9, borderRadius: "50%" },
            "start" === e.edge && { marginLeft: "small" === e.size ? -3 : -12 },
            "end" === e.edge && { marginRight: "small" === e.size ? -3 : -12 }
          )
        ),
        Kr = Hn("input")({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        Qr = e.forwardRef(function (t, n) {
          const {
              autoFocus: r,
              checked: a,
              checkedIcon: o,
              className: l,
              defaultChecked: i,
              disabled: u,
              disableFocusRipple: s = !1,
              edge: c = !1,
              icon: d,
              id: f,
              inputProps: p,
              inputRef: h,
              name: m,
              onBlur: g,
              onChange: b,
              onFocus: x,
              readOnly: S,
              required: E = !1,
              tabIndex: C,
              type: _,
              value: P,
            } = t,
            z = y(t, Wr),
            [T, O] = (function ({
              controlled: t,
              default: n,
              name: r,
              state: a = "value",
            }) {
              const { current: o } = e.useRef(void 0 !== t),
                [l, i] = e.useState(n);
              return [
                o ? t : l,
                e.useCallback((e) => {
                  o || i(e);
                }, []),
              ];
            })({
              controlled: a,
              default: Boolean(i),
              name: "SwitchBase",
              state: "checked",
            }),
            R = e.useContext(Kn);
          let L = u;
          R && void 0 === L && (L = R.disabled);
          const M = "checkbox" === _ || "radio" === _,
            $ = v({}, t, {
              checked: T,
              disabled: L,
              disableFocusRipple: s,
              edge: c,
            }),
            I = ((e) => {
              const { classes: t, checked: n, disabled: r, edge: a } = e;
              return k(
                {
                  root: [
                    "root",
                    n && "checked",
                    r && "disabled",
                    a && `edge${N(a)}`,
                  ],
                  input: ["input"],
                },
                Ur,
                t
              );
            })($);
          return (0, vr.jsxs)(
            Hr,
            v(
              {
                component: "span",
                className: w(I.root, l),
                centerRipple: !0,
                focusRipple: !s,
                disabled: L,
                tabIndex: null,
                role: void 0,
                onFocus: (e) => {
                  x && x(e), R && R.onFocus && R.onFocus(e);
                },
                onBlur: (e) => {
                  g && g(e), R && R.onBlur && R.onBlur(e);
                },
                ownerState: $,
                ref: n,
              },
              z,
              {
                children: [
                  (0, vr.jsx)(
                    Kr,
                    v(
                      {
                        autoFocus: r,
                        checked: a,
                        defaultChecked: i,
                        className: I.input,
                        disabled: L,
                        id: M ? f : void 0,
                        name: m,
                        onChange: (e) => {
                          if (e.nativeEvent.defaultPrevented) return;
                          const t = e.target.checked;
                          O(t), b && b(e, t);
                        },
                        readOnly: S,
                        ref: h,
                        required: E,
                        ownerState: $,
                        tabIndex: C,
                        type: _,
                      },
                      "checkbox" === _ && void 0 === P ? {} : { value: P },
                      p
                    )
                  ),
                  T ? o : d,
                ],
              }
            )
          );
        });
      function qr(e) {
        return xr("MuiSwitch", e);
      }
      const Gr = Sr("MuiSwitch", [
          "root",
          "edgeStart",
          "edgeEnd",
          "switchBase",
          "colorPrimary",
          "colorSecondary",
          "sizeSmall",
          "sizeMedium",
          "checked",
          "disabled",
          "input",
          "thumb",
          "track",
        ]),
        Yr = ["className", "color", "edge", "size", "sx"],
        Xr = Hn("span", {
          name: "MuiSwitch",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              n.edge && t[`edge${N(n.edge)}`],
              t[`size${N(n.size)}`],
            ];
          },
        })(({ ownerState: e }) =>
          v(
            {
              display: "inline-flex",
              width: 58,
              height: 38,
              overflow: "hidden",
              padding: 12,
              boxSizing: "border-box",
              position: "relative",
              flexShrink: 0,
              zIndex: 0,
              verticalAlign: "middle",
              "@media print": { colorAdjust: "exact" },
            },
            "start" === e.edge && { marginLeft: -8 },
            "end" === e.edge && { marginRight: -8 },
            "small" === e.size && {
              width: 40,
              height: 24,
              padding: 7,
              [`& .${Gr.thumb}`]: { width: 16, height: 16 },
              [`& .${Gr.switchBase}`]: {
                padding: 4,
                [`&.${Gr.checked}`]: { transform: "translateX(16px)" },
              },
            }
          )
        ),
        Zr = Hn(Qr, {
          name: "MuiSwitch",
          slot: "SwitchBase",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.switchBase,
              { [`& .${Gr.input}`]: t.input },
              "default" !== n.color && t[`color${N(n.color)}`],
            ];
          },
        })(
          ({ theme: e }) => ({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            color: e.vars
              ? e.vars.palette.Switch.defaultColor
              : `${
                  "light" === e.palette.mode
                    ? e.palette.common.white
                    : e.palette.grey[300]
                }`,
            transition: e.transitions.create(["left", "transform"], {
              duration: e.transitions.duration.shortest,
            }),
            [`&.${Gr.checked}`]: { transform: "translateX(20px)" },
            [`&.${Gr.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch.defaultDisabledColor
                : `${
                    "light" === e.palette.mode
                      ? e.palette.grey[100]
                      : e.palette.grey[600]
                  }`,
            },
            [`&.${Gr.checked} + .${Gr.track}`]: { opacity: 0.5 },
            [`&.${Gr.disabled} + .${Gr.track}`]: {
              opacity: e.vars
                ? e.vars.opacity.switchTrackDisabled
                : "" + ("light" === e.palette.mode ? 0.12 : 0.2),
            },
            [`& .${Gr.input}`]: { left: "-100%", width: "300%" },
          }),
          ({ theme: e, ownerState: t }) =>
            v(
              {
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : P(e.palette.action.active, e.palette.action.hoverOpacity),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              "default" !== t.color && {
                [`&.${Gr.checked}`]: {
                  color: (e.vars || e).palette[t.color].main,
                  "&:hover": {
                    backgroundColor: e.vars
                      ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                          e.vars.palette.action.hoverOpacity
                        })`
                      : P(
                          e.palette[t.color].main,
                          e.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                  [`&.${Gr.disabled}`]: {
                    color: e.vars
                      ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                      : `${
                          "light" === e.palette.mode
                            ? T(e.palette[t.color].main, 0.62)
                            : z(e.palette[t.color].main, 0.55)
                        }`,
                  },
                },
                [`&.${Gr.checked} + .${Gr.track}`]: {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
            )
        ),
        Jr = Hn("span", {
          name: "MuiSwitch",
          slot: "Track",
          overridesResolver: (e, t) => t.track,
        })(({ theme: e }) => ({
          height: "100%",
          width: "100%",
          borderRadius: 7,
          zIndex: -1,
          transition: e.transitions.create(["opacity", "background-color"], {
            duration: e.transitions.duration.shortest,
          }),
          backgroundColor: e.vars
            ? e.vars.palette.common.onBackground
            : `${
                "light" === e.palette.mode
                  ? e.palette.common.black
                  : e.palette.common.white
              }`,
          opacity: e.vars
            ? e.vars.opacity.switchTrack
            : "" + ("light" === e.palette.mode ? 0.38 : 0.3),
        })),
        ea = Hn("span", {
          name: "MuiSwitch",
          slot: "Thumb",
          overridesResolver: (e, t) => t.thumb,
        })(({ theme: e }) => ({
          boxShadow: (e.vars || e).shadows[1],
          backgroundColor: "currentColor",
          width: 20,
          height: 20,
          borderRadius: "50%",
        })),
        ta = e.forwardRef(function (e, t) {
          const n = Yn({ props: e, name: "MuiSwitch" }),
            {
              className: r,
              color: a = "primary",
              edge: o = !1,
              size: l = "medium",
              sx: i,
            } = n,
            u = y(n, Yr),
            s = v({}, n, { color: a, edge: o, size: l }),
            c = ((e) => {
              const {
                classes: t,
                edge: n,
                size: r,
                color: a,
                checked: o,
                disabled: l,
              } = e;
              return v(
                {},
                t,
                k(
                  {
                    root: ["root", n && `edge${N(n)}`, `size${N(r)}`],
                    switchBase: [
                      "switchBase",
                      `color${N(a)}`,
                      o && "checked",
                      l && "disabled",
                    ],
                    thumb: ["thumb"],
                    track: ["track"],
                    input: ["input"],
                  },
                  qr,
                  t
                )
              );
            })(s),
            d = (0, vr.jsx)(ea, { className: c.thumb, ownerState: s });
          return (0,
          vr.jsxs)(Xr, { className: w(c.root, r), sx: i, ownerState: s, children: [(0, vr.jsx)(Zr, v({ type: "checkbox", icon: d, checkedIcon: d, ref: t, ownerState: s }, u, { classes: v({}, c, { root: c.switchBase }) })), (0, vr.jsx)(Jr, { className: c.track, ownerState: s })] });
        });
      function na(e) {
        return xr("MuiButton", e);
      }
      const ra = Sr("MuiButton", [
          "root",
          "text",
          "textInherit",
          "textPrimary",
          "textSecondary",
          "textSuccess",
          "textError",
          "textInfo",
          "textWarning",
          "outlined",
          "outlinedInherit",
          "outlinedPrimary",
          "outlinedSecondary",
          "outlinedSuccess",
          "outlinedError",
          "outlinedInfo",
          "outlinedWarning",
          "contained",
          "containedInherit",
          "containedPrimary",
          "containedSecondary",
          "containedSuccess",
          "containedError",
          "containedInfo",
          "containedWarning",
          "disableElevation",
          "focusVisible",
          "disabled",
          "colorInherit",
          "textSizeSmall",
          "textSizeMedium",
          "textSizeLarge",
          "outlinedSizeSmall",
          "outlinedSizeMedium",
          "outlinedSizeLarge",
          "containedSizeSmall",
          "containedSizeMedium",
          "containedSizeLarge",
          "sizeMedium",
          "sizeSmall",
          "sizeLarge",
          "fullWidth",
          "startIcon",
          "endIcon",
          "iconSizeSmall",
          "iconSizeMedium",
          "iconSizeLarge",
        ]),
        aa = e.createContext({}),
        oa = e.createContext(void 0),
        la = [
          "children",
          "color",
          "component",
          "className",
          "disabled",
          "disableElevation",
          "disableFocusRipple",
          "endIcon",
          "focusVisibleClassName",
          "fullWidth",
          "size",
          "startIcon",
          "type",
          "variant",
        ],
        ia = (e) =>
          v(
            {},
            "small" === e.size && { "& > *:nth-of-type(1)": { fontSize: 18 } },
            "medium" === e.size && { "& > *:nth-of-type(1)": { fontSize: 20 } },
            "large" === e.size && { "& > *:nth-of-type(1)": { fontSize: 22 } }
          ),
        ua = Hn(Vr, {
          shouldForwardProp: (e) => Un(e) || "classes" === e,
          name: "MuiButton",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.variant],
              t[`${n.variant}${N(n.color)}`],
              t[`size${N(n.size)}`],
              t[`${n.variant}Size${N(n.size)}`],
              "inherit" === n.color && t.colorInherit,
              n.disableElevation && t.disableElevation,
              n.fullWidth && t.fullWidth,
            ];
          },
        })(
          ({ theme: e, ownerState: t }) => {
            var n, r;
            const a =
                "light" === e.palette.mode
                  ? e.palette.grey[300]
                  : e.palette.grey[800],
              o =
                "light" === e.palette.mode
                  ? e.palette.grey.A100
                  : e.palette.grey[700];
            return v(
              {},
              e.typography.button,
              {
                minWidth: 64,
                padding: "6px 16px",
                borderRadius: (e.vars || e).shape.borderRadius,
                transition: e.transitions.create(
                  ["background-color", "box-shadow", "border-color", "color"],
                  { duration: e.transitions.duration.short }
                ),
                "&:hover": v(
                  {
                    textDecoration: "none",
                    backgroundColor: e.vars
                      ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : P(
                          e.palette.text.primary,
                          e.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                  "text" === t.variant &&
                    "inherit" !== t.color && {
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                            e.vars.palette.action.hoverOpacity
                          })`
                        : P(
                            e.palette[t.color].main,
                            e.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "outlined" === t.variant &&
                    "inherit" !== t.color && {
                      border: `1px solid ${
                        (e.vars || e).palette[t.color].main
                      }`,
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                            e.vars.palette.action.hoverOpacity
                          })`
                        : P(
                            e.palette[t.color].main,
                            e.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "contained" === t.variant && {
                    backgroundColor: e.vars
                      ? e.vars.palette.Button.inheritContainedHoverBg
                      : o,
                    boxShadow: (e.vars || e).shadows[4],
                    "@media (hover: none)": {
                      boxShadow: (e.vars || e).shadows[2],
                      backgroundColor: (e.vars || e).palette.grey[300],
                    },
                  },
                  "contained" === t.variant &&
                    "inherit" !== t.color && {
                      backgroundColor: (e.vars || e).palette[t.color].dark,
                      "@media (hover: none)": {
                        backgroundColor: (e.vars || e).palette[t.color].main,
                      },
                    }
                ),
                "&:active": v(
                  {},
                  "contained" === t.variant && {
                    boxShadow: (e.vars || e).shadows[8],
                  }
                ),
                [`&.${ra.focusVisible}`]: v(
                  {},
                  "contained" === t.variant && {
                    boxShadow: (e.vars || e).shadows[6],
                  }
                ),
                [`&.${ra.disabled}`]: v(
                  { color: (e.vars || e).palette.action.disabled },
                  "outlined" === t.variant && {
                    border: `1px solid ${
                      (e.vars || e).palette.action.disabledBackground
                    }`,
                  },
                  "contained" === t.variant && {
                    color: (e.vars || e).palette.action.disabled,
                    boxShadow: (e.vars || e).shadows[0],
                    backgroundColor: (e.vars || e).palette.action
                      .disabledBackground,
                  }
                ),
              },
              "text" === t.variant && { padding: "6px 8px" },
              "text" === t.variant &&
                "inherit" !== t.color && {
                  color: (e.vars || e).palette[t.color].main,
                },
              "outlined" === t.variant && {
                padding: "5px 15px",
                border: "1px solid currentColor",
              },
              "outlined" === t.variant &&
                "inherit" !== t.color && {
                  color: (e.vars || e).palette[t.color].main,
                  border: e.vars
                    ? `1px solid rgba(${
                        e.vars.palette[t.color].mainChannel
                      } / 0.5)`
                    : `1px solid ${P(e.palette[t.color].main, 0.5)}`,
                },
              "contained" === t.variant && {
                color: e.vars
                  ? e.vars.palette.text.primary
                  : null == (n = (r = e.palette).getContrastText)
                  ? void 0
                  : n.call(r, e.palette.grey[300]),
                backgroundColor: e.vars
                  ? e.vars.palette.Button.inheritContainedBg
                  : a,
                boxShadow: (e.vars || e).shadows[2],
              },
              "contained" === t.variant &&
                "inherit" !== t.color && {
                  color: (e.vars || e).palette[t.color].contrastText,
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              "inherit" === t.color && {
                color: "inherit",
                borderColor: "currentColor",
              },
              "small" === t.size &&
                "text" === t.variant && {
                  padding: "4px 5px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === t.size &&
                "text" === t.variant && {
                  padding: "8px 11px",
                  fontSize: e.typography.pxToRem(15),
                },
              "small" === t.size &&
                "outlined" === t.variant && {
                  padding: "3px 9px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === t.size &&
                "outlined" === t.variant && {
                  padding: "7px 21px",
                  fontSize: e.typography.pxToRem(15),
                },
              "small" === t.size &&
                "contained" === t.variant && {
                  padding: "4px 10px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === t.size &&
                "contained" === t.variant && {
                  padding: "8px 22px",
                  fontSize: e.typography.pxToRem(15),
                },
              t.fullWidth && { width: "100%" }
            );
          },
          ({ ownerState: e }) =>
            e.disableElevation && {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${ra.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${ra.disabled}`]: { boxShadow: "none" },
            }
        ),
        sa = Hn("span", {
          name: "MuiButton",
          slot: "StartIcon",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.startIcon, t[`iconSize${N(n.size)}`]];
          },
        })(({ ownerState: e }) =>
          v(
            { display: "inherit", marginRight: 8, marginLeft: -4 },
            "small" === e.size && { marginLeft: -2 },
            ia(e)
          )
        ),
        ca = Hn("span", {
          name: "MuiButton",
          slot: "EndIcon",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.endIcon, t[`iconSize${N(n.size)}`]];
          },
        })(({ ownerState: e }) =>
          v(
            { display: "inherit", marginRight: -4, marginLeft: 8 },
            "small" === e.size && { marginRight: -2 },
            ia(e)
          )
        ),
        da = e.forwardRef(function (t, n) {
          const r = e.useContext(aa),
            a = e.useContext(oa),
            o = Yn({ props: Qn(r, t), name: "MuiButton" }),
            {
              children: l,
              color: i = "primary",
              component: u = "button",
              className: s,
              disabled: c = !1,
              disableElevation: d = !1,
              disableFocusRipple: f = !1,
              endIcon: p,
              focusVisibleClassName: h,
              fullWidth: m = !1,
              size: g = "medium",
              startIcon: b,
              type: x,
              variant: S = "text",
            } = o,
            E = y(o, la),
            C = v({}, o, {
              color: i,
              component: u,
              disabled: c,
              disableElevation: d,
              disableFocusRipple: f,
              fullWidth: m,
              size: g,
              type: x,
              variant: S,
            }),
            _ = ((e) => {
              const {
                color: t,
                disableElevation: n,
                fullWidth: r,
                size: a,
                variant: o,
                classes: l,
              } = e;
              return v(
                {},
                l,
                k(
                  {
                    root: [
                      "root",
                      o,
                      `${o}${N(t)}`,
                      `size${N(a)}`,
                      `${o}Size${N(a)}`,
                      "inherit" === t && "colorInherit",
                      n && "disableElevation",
                      r && "fullWidth",
                    ],
                    label: ["label"],
                    startIcon: ["startIcon", `iconSize${N(a)}`],
                    endIcon: ["endIcon", `iconSize${N(a)}`],
                  },
                  na,
                  l
                )
              );
            })(C),
            P =
              b &&
              (0, vr.jsx)(sa, {
                className: _.startIcon,
                ownerState: C,
                children: b,
              }),
            z =
              p &&
              (0, vr.jsx)(ca, {
                className: _.endIcon,
                ownerState: C,
                children: p,
              }),
            T = a || "";
          return (0,
          vr.jsxs)(ua, v({ ownerState: C, className: w(r.className, _.root, s, T), component: u, disabled: c, focusRipple: !f, focusVisibleClassName: w(_.focusVisible, h), ref: n, type: x }, E, { classes: _, children: [P, l, z] }));
        });
      function fa(e) {
        return (
          (fa =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          fa(e)
        );
      }
      function pa() {
        pa = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          l = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (e) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var o = t && t.prototype instanceof y ? t : y,
            l = Object.create(o.prototype),
            i = new O(r || []);
          return a(l, "_invoke", { value: _(e, n, i) }), l;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          p = "suspendedYield",
          h = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        s(w, l, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(N([])));
        x && x !== n && r.call(x, l) && (w = x);
        var S = (b.prototype = y.prototype = Object.create(w));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function C(e, t) {
          function n(a, o, l, i) {
            var u = d(e[a], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                c = s.value;
              return c && "object" == fa(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, l, i);
                    },
                    function (e) {
                      n("throw", e, l, i);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (s.value = e), l(s);
                    },
                    function (e) {
                      return n("throw", e, l, i);
                    }
                  );
            }
            i(u.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function _(t, n, r) {
          var a = f;
          return function (o, l) {
            if (a === h) throw new Error("Generator is already running");
            if (a === m) {
              if ("throw" === o) throw l;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = l; ; ) {
              var i = r.delegate;
              if (i) {
                var u = P(i, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (a === f) throw ((a = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              a = h;
              var s = d(t, n, r);
              if ("normal" === s.type) {
                if (((a = r.done ? m : p), s.arg === g)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((a = m), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                P(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var o = d(a, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), g
            );
          var l = o.arg;
          return l
            ? l.done
              ? ((n[t.resultName] = l.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : l
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function z(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(z, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[l];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                o = function n() {
                  for (; ++a < t.length; )
                    if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(fa(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          a(S, "constructor", { value: b, configurable: !0 }),
          a(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = s(b, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(C.prototype),
          s(C.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = C),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var l = new C(c(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          E(S),
          s(S, u, "Generator"),
          s(S, l, function () {
            return this;
          }),
          s(S, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function a(r, a) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = e)),
                  !!a
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var l = this.tryEntries[o],
                  i = l.completion;
                if ("root" === l.tryLoc) return a("end");
                if (l.tryLoc <= this.prev) {
                  var u = r.call(l, "catchLoc"),
                    s = r.call(l, "finallyLoc");
                  if (u && s) {
                    if (this.prev < l.catchLoc) return a(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return a(l.finallyLoc);
                  } else if (u) {
                    if (this.prev < l.catchLoc) return a(l.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return a(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    T(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function ha(e, t, n, r, a, o, l) {
        try {
          var i = e[o](l),
            u = i.value;
        } catch (e) {
          return void n(e);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function ma(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              ha(o, r, a, l, i, "next", e);
            }
            function i(e) {
              ha(o, r, a, l, i, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function ga(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                l,
                i = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ya(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ya(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ya(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function va() {
        var t = ga((0, e.useState)(!1), 2),
          n = t[0],
          r = t[1],
          a = (0, e.useRef)(null),
          o = (0, e.useRef)(null),
          l = (0, e.useRef)([]),
          i = ga((0, e.useState)(null), 2),
          u = (i[0], i[1]),
          s = ga((0, e.useState)(!1), 2),
          c = s[0],
          y = s[1],
          v = ga((0, e.useState)(!1), 2),
          b = v[0],
          w = v[1],
          k = ga((0, e.useState)(""), 2),
          x = (k[0], k[1]),
          S = ga((0, e.useState)(null), 2),
          E = (S[0], S[1], ga((0, e.useState)(!1), 2)),
          C = E[0],
          _ = E[1],
          P = (function () {
            var e = ma(
              pa().mark(function e() {
                var t;
                return pa().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            _(!0),
                            (e.next = 4),
                            navigator.mediaDevices.getDisplayMedia({
                              video: c,
                              audio: b,
                            })
                          );
                        case 4:
                          (t = e.sent),
                            (o.current = t),
                            (a.current = new MediaRecorder(t)),
                            (a.current.ondataavailable = function (e) {
                              e.data.size > 0 &&
                                (l.current.push(e.data),
                                console.log(
                                  "screenChunks size inside ondataavailable:",
                                  l.current.length
                                ));
                            }),
                            (a.current.onstop = function () {
                              var e = new Blob(l.current, {
                                  type: "video/webm",
                                }),
                                t = URL.createObjectURL(e);
                              u(t),
                                chrome.runtime.sendMessage({
                                  action: "stopvideo",
                                });
                            }),
                            a.current.start(),
                            r(!0),
                            (e.next = 17);
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t0 = e.catch(0)),
                            console.error(
                              "Error starting screen recording:",
                              e.t0
                            ),
                            "NotAllowedError" === e.t0.name
                              ? x(
                                  "Permission denied: You need to grant permission to record your screen and audio."
                                )
                              : x(
                                  c
                                    ? "An error occurred while starting the recording."
                                    : "Camera permission needed"
                                );
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          z = (function () {
            var e = ma(
              pa().mark(function e(t) {
                var n, r, a, o, l, i;
                return pa().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (n = new FormData()).append("title", "myVideo"),
                            n.append("videoFile", t),
                            (e.next = 6),
                            fetch(
                              "https://screen-recorder.fly.dev/start",
                              { method: "POST", body: n }
                            )
                          );
                        case 6:
                          if (!(r = e.sent).ok) {
                            e.next = 21;
                            break;
                          }
                          return (e.next = 10), r.json();
                        case 10:
                          (a = e.sent),
                            (o = a.videoId),
                            (l = document.createElement("a")),
                            (i = encodeURIComponent(o)),
                            (l.href =
                              "https://help-me-out-new.vercel.app/video/undefined".concat(
                                i
                              )),
                            (l.innerText = "Click here to view your video"),
                            (l.target = "_blank"),
                            document.body.appendChild(l),
                            console.log("Video uploaded successfully"),
                            (e.next = 22);
                          break;
                        case 21:
                          console.error("Failed to upload video");
                        case 22:
                          e.next = 27;
                          break;
                        case 24:
                          (e.prev = 24),
                            (e.t0 = e.catch(0)),
                            console.error("Error uploading video:", e.t0);
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 24]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          T = C ? "no" : "main";
        return e.createElement(
          "div",
          { className: T },
          e.createElement(
            "div",
            { className: "header" },
            e.createElement(
              "div",
              { className: "logo" },
              e.createElement("img", {
                src: "/assets/logomain.png",
                alt: "logo",
              })
            ),
            e.createElement(
              "div",
              { className: "assets" },
              e.createElement(f, { color: "#120B48", size: 20 }),
              e.createElement(h, { color: "#B6B3C6", size: 20 })
            )
          ),
          e.createElement(
            "div",
            { className: "main-container" },
            e.createElement(
              "h2",
              null,
              "This extension helps you record and share help videos with ease."
            )
          ),
          e.createElement(
            "div",
            { className: "tabs" },
            e.createElement(
              "div",
              { className: "computer" },
              e.createElement(m, { size: 30 }),
              e.createElement("p", null, " Full Screen")
            ),
            e.createElement(
              "div",
              { className: "current" },
              e.createElement(g, { size: 30 }),
              e.createElement("p", null, "Current Tab")
            )
          ),
          e.createElement(
            "div",
            { className: "camera" },
            e.createElement(
              "div",
              { className: "video" },
              e.createElement(p, { size: 20 }),
              e.createElement("p", null, "Camera")
            ),
            e.createElement(
              "div",
              { className: "switch" },
              e.createElement(ta, {
                checked: c,
                onChange: function (e) {
                  y(e.target.checked);
                },
                style: { color: "#120b48" },
              })
            )
          ),
          e.createElement(
            "div",
            { className: "audio" },
            e.createElement(
              "div",
              { className: "mic" },
              e.createElement(d, { size: 20 }),
              e.createElement("p", null, "Audio")
            ),
            e.createElement(
              "div",
              { className: "switch" },
              e.createElement(ta, {
                checked: b,
                onChange: function (e) {
                  w(e.target.checked);
                },
                style: { color: "#120b48" },
              })
            )
          ),
          e.createElement(
            "div",
            null,
            e.createElement(
              da,
              {
                className: "btn-record",
                id: "start_screen_sharing",
                variant: "contained",
                onClick: n
                  ? function () {
                      a.current &&
                        n &&
                        (chrome.runtime.sendMessage({ action: "stopvideo" }),
                        a.current.stop(),
                        o.current.getTracks().forEach(function (e) {
                          return e.stop();
                        }),
                        r(!1),
                        (a.current.onstop = function () {
                          console.log("Recording stopped");
                          var e = new Blob(l.current, { type: "video/webm" }),
                            t = new File([e], "recorded.webm", {
                              type: "video/webm",
                            });
                          console.log("newScreenFile:", t), z(t);
                        }));
                    }
                  : P,
              },
              n ? "Stop Recording" : "Start Recording"
            )
          )
        );
      }
      (0, n.render)(
        e.createElement(va, null),
        document.getElementById("react-target")
      );
    })();
})();
