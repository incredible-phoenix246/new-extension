(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    o,
    i,
    a,
    c,
    s,
    p,
    d,
    u,
    l,
    f,
    m = {
      767: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i)()(o());
        a.push([
          n.id,
          '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nbody,\nhtml {\n  border-radius: 10px !important;\n}\n.main {\n  padding: 20px;\n  width: 250px;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header .logo img {\n  width: 70%;\n}\n\n.header .assets {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 20px;\n}\n\n.main-container {\n  margin-bottom: 20px;\n  padding-right: 30px;\n}\n.main-container h2 {\n  color: #413c6d;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: "Work Sans", sans-serif;\n  line-height: normal;\n}\n.tabs {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  text-align: center;\n}\n\n.tabs .computer {\n  color: #928fab;\n}\n\n/* .tabs .computer:hover,\n.tabs .current:hover {\n  border: 1px solid #120b48;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 5px;\n} */\n\n.tabs .current {\n  color: #120b48;\n}\n\n.tabs .current p {\n  font-weight: 600;\n}\n\n.tabs .computer i {\n  font-weight: 300;\n}\n\n.camera,\n.audio {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #120b48;\n  padding: 0px 10px;\n  border-radius: 10px;\n  margin-top: 20px;\n}\n\n.video,\n.mic {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  color: #120b48;\n}\n\n.video p,\n.mic p {\n  font-weight: 600;\n}\n\n.btn-record {\n  width: 100%;\n  background-color: #120b48;\n  border-radius: 10px;\n  text-transform: capitalize;\n  padding: 10px;\n  margin-top: 20px;\n}\n\n.no {\n  min-width: 600px;\n  min-height: 439px;\n  padding: 24px 24px 36px 24px;\n}\n',
          "",
        ]);
        const c = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var p = 0; p < n.length; p++) {
                var d = [].concat(n[p]);
                (r && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var s = n[c],
              p = r.base ? s[0] + r.base : s[0],
              d = i[p] || 0,
              u = "".concat(p, " ").concat(d);
            i[p] = d + 1;
            var l = t(u),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== l) e[l].references++, e[l].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: u, updater: m, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              e[c].references--;
            }
            for (var s = r(n, o), p = 0; p < i.length; p++) {
              var d = t(i[p]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      655: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    x = {};
  function v(n) {
    var e = x[n];
    if (void 0 !== e) return e.exports;
    var t = (x[n] = { id: n, exports: {} });
    return m[n](t, t.exports, v), t.exports;
  }
  (v.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return v.d(e, { a: e }), e;
  }),
    (v.d = (n, e) => {
      for (var t in e)
        v.o(e, t) &&
          !v.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (v.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (v.nc = void 0),
    (n = v(379)),
    (e = v.n(n)),
    (t = v(795)),
    (r = v.n(t)),
    (o = v(569)),
    (i = v.n(o)),
    (a = v(565)),
    (c = v.n(a)),
    (s = v(216)),
    (p = v.n(s)),
    (d = v(655)),
    (u = v.n(d)),
    (l = v(767)),
    ((f = {}).styleTagTransform = u()),
    (f.setAttributes = c()),
    (f.insert = i().bind(null, "head")),
    (f.domAPI = r()),
    (f.insertStyleElement = p()),
    e()(l.Z, f),
    l.Z && l.Z.locals && l.Z.locals;
})();
