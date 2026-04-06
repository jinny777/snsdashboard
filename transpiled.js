import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/dashboard.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2cdb0ad3"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=2cdb0ad3"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useMemo = __vite__cjsImport3_react["useMemo"]; const useRef = __vite__cjsImport3_react["useRef"];
import { supabase, DEMO_MODE } from "/supabase.js";
const Icons = {
  Home: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 25,
      columnNumber: 158
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points: "9 22 9 12 15 12 15 22" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 25,
      columnNumber: 217
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 25,
    columnNumber: 15
  }, this),
  Search: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("circle", { cx: "11", cy: "11", r: "8" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 26,
      columnNumber: 160
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 26,
      columnNumber: 192
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 26,
    columnNumber: 17
  }, this),
  Calendar: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 27,
      columnNumber: 162
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "16", y1: "2", x2: "16", y2: "6" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 27,
      columnNumber: 219
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "8", y1: "2", x2: "8", y2: "6" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 27,
      columnNumber: 257
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "3", y1: "10", x2: "21", y2: "10" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 27,
      columnNumber: 293
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 27,
    columnNumber: 19
  }, this),
  Edit: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 28,
      columnNumber: 158
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 28,
      columnNumber: 229
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 28,
    columnNumber: 15
  }, this),
  Send: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("line", { x1: "22", y1: "2", x2: "11", y2: "13" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 29,
      columnNumber: 158
    }, this),
    /* @__PURE__ */ jsxDEV("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 29,
      columnNumber: 197
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 29,
    columnNumber: 15
  }, this),
  MessageCircle: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxDEV("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 30,
    columnNumber: 167
  }, this) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 30,
    columnNumber: 24
  }, this),
  BarChart: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("line", { x1: "12", y1: "20", x2: "12", y2: "10" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 31,
      columnNumber: 162
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "18", y1: "20", x2: "18", y2: "4" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 31,
      columnNumber: 202
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "6", y1: "20", x2: "6", y2: "16" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 31,
      columnNumber: 241
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 31,
    columnNumber: 19
  }, this),
  Zap: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxDEV("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 32,
    columnNumber: 157
  }, this) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 32,
    columnNumber: 14
  }, this),
  Settings: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("circle", { cx: "12", cy: "12", r: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 33,
      columnNumber: 162
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 33,
      columnNumber: 194
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 33,
    columnNumber: 19
  }, this),
  TrendUp: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 34,
      columnNumber: 163
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points: "17 6 23 6 23 12" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 34,
      columnNumber: 213
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 34,
    columnNumber: 18
  }, this),
  TrendDown: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("polyline", { points: "23 18 13.5 8.5 8.5 13.5 1 6" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 35,
      columnNumber: 165
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points: "17 18 23 18 23 12" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 35,
      columnNumber: 214
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 35,
    columnNumber: 20
  }, this),
  Plus: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("line", { x1: "12", y1: "5", x2: "12", y2: "19" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 36,
      columnNumber: 160
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "5", y1: "12", x2: "19", y2: "12" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 36,
      columnNumber: 199
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 36,
    columnNumber: 15
  }, this),
  Check: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxDEV("polyline", { points: "20 6 9 17 4 12" }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 37,
    columnNumber: 161
  }, this) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 37,
    columnNumber: 16
  }, this),
  Clock: () => /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("circle", { cx: "12", cy: "12", r: "10" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 38,
      columnNumber: 159
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points: "12 6 12 12 16 14" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 38,
      columnNumber: 192
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 38,
    columnNumber: 16
  }, this),
  Eye: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 39,
      columnNumber: 157
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "12", cy: "12", r: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 39,
      columnNumber: 214
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 39,
    columnNumber: 14
  }, this),
  Heart: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxDEV("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 40,
    columnNumber: 159
  }, this) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 40,
    columnNumber: 16
  }, this),
  Share: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("circle", { cx: "18", cy: "5", r: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 41,
      columnNumber: 159
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "6", cy: "12", r: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 41,
      columnNumber: 190
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "18", cy: "19", r: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 41,
      columnNumber: 221
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 41,
      columnNumber: 253
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 41,
      columnNumber: 304
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 41,
    columnNumber: 16
  }, this),
  ChevronRight: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxDEV("polyline", { points: "9 18 15 12 9 6" }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 42,
    columnNumber: 166
  }, this) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 42,
    columnNumber: 23
  }, this),
  AlertTriangle: () => /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 43,
      columnNumber: 167
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "12", y1: "9", x2: "12", y2: "13" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 43,
      columnNumber: 268
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 43,
      columnNumber: 307
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 43,
    columnNumber: 24
  }, this),
  ExternalLink: () => /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 44,
      columnNumber: 166
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points: "15 3 21 3 21 9" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 44,
      columnNumber: 235
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "10", y1: "14", x2: "21", y2: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 44,
      columnNumber: 271
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 44,
    columnNumber: 23
  }, this),
  Copy: () => /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 45,
      columnNumber: 158
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 45,
      columnNumber: 215
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 45,
    columnNumber: 15
  }, this),
  Download: () => /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 46,
      columnNumber: 162
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points: "7 10 12 15 17 10" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 46,
      columnNumber: 216
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "12", y1: "15", x2: "12", y2: "3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 46,
      columnNumber: 254
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 46,
    columnNumber: 19
  }, this),
  Key: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxDEV("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 47,
    columnNumber: 157
  }, this) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 47,
    columnNumber: 14
  }, this),
  Link2: () => /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 48,
      columnNumber: 159
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "8", y1: "12", x2: "16", y2: "12" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 48,
      columnNumber: 247
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 48,
    columnNumber: 16
  }, this),
  EyeOff: () => /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 49,
      columnNumber: 160
    }, this),
    /* @__PURE__ */ jsxDEV("line", { x1: "1", y1: "1", x2: "23", y2: "23" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 49,
      columnNumber: 353
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 49,
    columnNumber: 17
  }, this)
};
const PLATFORMS = {
  instagram: { name: "Instagram", color: "#E1306C", bg: "#E1306C15", icon: "📸" },
  facebook: { name: "Facebook", color: "#1877F2", bg: "#1877F215", icon: "👤" },
  twitter: { name: "X (Twitter)", color: "#14171A", bg: "#14171A12", icon: "𝕏" },
  threads: { name: "Threads", color: "#6B7280", bg: "#6B728015", icon: "🔗" },
  youtube: { name: "YouTube", color: "#FF0000", bg: "#FF000012", icon: "▶️" }
};
const MOCK_KPI = [
  { label: "총 팔로워", value: "128,430", change: "+2.4%", up: true },
  { label: "이번 주 도달", value: "45,200", change: "+12.1%", up: true },
  { label: "인게이지먼트율", value: "4.7%", change: "-0.3%", up: false },
  { label: "예약 대기", value: "7건", change: "", up: true }
];
const MOCK_CALENDAR = [
  { day: 10, platform: "instagram", title: "신제품 런칭 캐러셀", status: "approved" },
  { day: 10, platform: "facebook", title: "신제품 런칭 포스트", status: "approved" },
  { day: 11, platform: "twitter", title: "트렌드 밈 콘텐츠", status: "draft" },
  { day: 12, platform: "youtube", title: "제품 리뷰 숏츠", status: "review" },
  { day: 13, platform: "instagram", title: "브랜드 스토리 릴스", status: "draft" },
  { day: 14, platform: "threads", title: "주간 인사이트 스레드", status: "approved" },
  { day: 15, platform: "twitter", title: "이벤트 공지", status: "draft" },
  { day: 16, platform: "instagram", title: "UGC 리그램", status: "review" }
];
const MOCK_COMMENTS = [
  { platform: "instagram", user: "김민수", text: "이 제품 색상 다른 것도 있나요?", sentiment: "neutral", time: "5분 전", replied: false },
  { platform: "instagram", user: "이서연", text: "진짜 너무 예뻐요!! 바로 구매했어요 💕", sentiment: "positive", time: "12분 전", replied: false },
  { platform: "facebook", user: "박지훈", text: "배송이 3일째 안 오는데 어떻게 된 건가요?", sentiment: "negative", time: "23분 전", replied: false },
  { platform: "twitter", user: "최유나", text: "할인 이벤트 언제 또 하나요?", sentiment: "neutral", time: "1시간 전", replied: true },
  { platform: "youtube", user: "정태우", text: "영상 퀄리티 미쳤다 ㄷㄷ", sentiment: "positive", time: "2시간 전", replied: true },
  { platform: "threads", user: "한소희", text: "이런 브랜드 처음 봐요 팔로우 합니다", sentiment: "positive", time: "3시간 전", replied: false }
];
const MOCK_POSTS_RANKING = [
  { title: "여름 신상 캐러셀", platform: "instagram", reach: 12400, engage: 890, rate: "7.2%", format: "캐러셀" },
  { title: "제품 비하인드 릴스", platform: "instagram", reach: 9800, engage: 720, rate: "7.3%", format: "릴스" },
  { title: "브랜드 스토리 영상", platform: "youtube", reach: 8200, engage: 410, rate: "5.0%", format: "영상" },
  { title: "이벤트 공지 포스트", platform: "facebook", reach: 6500, engage: 280, rate: "4.3%", format: "이미지" },
  { title: "트렌드 밈 트윗", platform: "twitter", reach: 15200, engage: 1100, rate: "7.2%", format: "텍스트" }
];
const MOCK_CONTENTS_DATA = [
  {
    id: 1,
    registrant: "양승현",
    registeredAt: "2026-03-20",
    title: "Antigravity 라이브러리 소개",
    masterText: "Antigravity(안티그래비티)는 파이썬 기반의 웹 자동화 라이브러리입니다. 기존의 Selenium이나 Playwright와 달리, 사람처럼 자연스러운 브라우저 조작이 가능하며 봇 탐지를 우회할 수 있습니다.",
    status: "scheduled",
    scheduledAt: "2026-03-22 14:00",
    platforms: ["twitter", "youtube", "facebook"],
    platformDrafts: {
      twitter: "🚀 웹 자동화의 새 패러다임, Antigravity 출시!\n\n봇 탐지 없이 자연스럽게 브라우저를 조작하는 Python 라이브러리. 마케터, 데이터 분석가 모두 코딩 최소화로 반복 업무를 자동화할 수 있습니다.\n\n#Antigravity #Python #자동화",
      youtube: "Antigravity 라이브러리 완전 정복 | 봇 탐지 우회 자동화 도구\n\n✅ 이 영상에서 배울 내용:\n- Antigravity가 기존 도구와 다른 점\n- 설치 및 첫 번째 스크립트 작성\n- SNS 자동화 실전 예제\n\n#자동화 #Python",
      facebook: "🎉 Antigravity 라이브러리를 소개합니다!\n\nPython 기반으로 웹 자동화를 더 쉽고 안전하게. 코딩 경험이 없어도 반복 업무를 자동화할 수 있어요.",
      instagram: "",
      threads: ""
    }
  },
  {
    id: 2,
    registrant: "양승현",
    registeredAt: "2026-03-21",
    title: "봇 탐지 우회 기능 소개",
    masterText: "기존 Selenium이나 Playwright와 달리, Antigravity는 사람처럼 자연스러운 브라우저 조작이 가능하며 봇 감지 시스템을 자연스럽게 통과합니다.",
    status: "draft",
    scheduledAt: null,
    platforms: ["instagram", "threads"],
    platformDrafts: {
      twitter: "",
      youtube: "",
      facebook: "",
      instagram: "🤖 봇도 사람처럼?\n\n기존 자동화 도구들과 달리 Antigravity는 실제 사람의 행동 패턴을 완벽하게 모방합니다.\n\n#자동화 #Python #봇탐지",
      threads: "봇 탐지 우회가 가능한 웹 자동화 라이브러리가 있다면 믿으시겠나요?\n\nAntigravity는 실제 브라우저 환경에서 인간의 행동을 재현합니다. 자연스러운 마우스 이동, 키보드 딜레이까지 모두 구현했습니다."
    }
  },
  {
    id: 3,
    registrant: "양승현",
    registeredAt: "2026-03-19",
    title: "주간 업데이트 공지",
    masterText: "이번 주 Antigravity v1.2 업데이트가 출시되었습니다. 성능 개선, 버그 수정, Instagram API 지원이 새롭게 추가되었습니다.",
    status: "published",
    scheduledAt: "2026-03-20 10:00",
    platforms: ["twitter", "facebook", "instagram", "threads", "youtube"],
    platformDrafts: {}
  },
  {
    id: 4,
    registrant: "양승현",
    registeredAt: "2026-03-18",
    title: "사용 사례 - 마케팅 자동화편",
    masterText: "SNS 콘텐츠 자동 발행, 경쟁사 모니터링, 리뷰/댓글 자동 수집 등 마케팅 실무에서 Antigravity를 활용하는 다양한 사례를 소개합니다.",
    status: "review",
    scheduledAt: "2026-03-28 18:00",
    platforms: ["instagram", "youtube", "facebook"],
    platformDrafts: {
      twitter: "",
      youtube: "마케터를 위한 Antigravity 완전 활용법 | SNS 자동화 실전편\n\n실제 마케팅 현장에서 Antigravity를 활용하는 5가지 방법을 공개합니다.",
      facebook: "마케팅 자동화, 이제 Antigravity로 해결하세요!\n\n경쟁사 모니터링부터 SNS 멀티채널 발행까지, 반복 업무를 자동화해서 크리에이티브에 집중하세요.",
      instagram: "마케터의 필수 도구 🛠️\n\nAntigravity 하나로 SNS 자동화, 데이터 수집, 경쟁사 모니터링까지!\n\n#마케팅자동화 #SNS마케팅 #Python",
      threads: ""
    }
  }
];
const MOCK_MEMBERS = [
  { id: 1, name: "양승현", email: "yang@antigravity.io", joinedAt: "2026-03-01", approvalStatus: "approved", role: "admin" },
  { id: 2, name: "김지원", email: "jiwon@antigravity.io", joinedAt: "2026-03-15", approvalStatus: "approved", role: "operator" },
  { id: 3, name: "박민준", email: "minjun@example.com", joinedAt: "2026-03-20", approvalStatus: "pending", role: "operator" },
  { id: 4, name: "이서연", email: "seoyeon@example.com", joinedAt: "2026-03-21", approvalStatus: "pending", role: "operator" }
];
const MOCK_COMPETITORS = [
  { name: "경쟁사 A", followers: "245K", postFreq: "일 2회", topFormat: "릴스", engageRate: "5.1%" },
  { name: "경쟁사 B", followers: "189K", postFreq: "일 1회", topFormat: "캐러셀", engageRate: "4.8%" },
  { name: "경쟁사 C", followers: "92K", postFreq: "주 4회", topFormat: "이미지", engageRate: "6.2%" }
];
const MOCK_TRENDS = [
  { keyword: "#여름코디", volume: "↑ 340%", status: "급상승" },
  { keyword: "#데일리룩", volume: "↑ 12%", status: "상승" },
  { keyword: "#OOTD", volume: "→ 0%", status: "유지" },
  { keyword: "#미니멀패션", volume: "↑ 89%", status: "상승" },
  { keyword: "#빈티지무드", volume: "↓ 15%", status: "하락" }
];
const MOCK_CHANNEL_STATS = {
  instagram: { views: 12400, likes: 890, comments: 145, shares: 230, saves: 560 },
  facebook: { views: 6500, likes: 280, comments: 67, shares: 145, saves: 0 },
  twitter: { views: 15200, likes: 1100, comments: 320, shares: 890, saves: 0 },
  threads: { views: 3200, likes: 210, comments: 45, shares: 80, saves: 0 },
  youtube: { views: 8200, likes: 410, comments: 89, shares: 120, saves: 340 }
};
const MOCK_CONTENT_STATS = [
  { title: "Antigravity 라이브러리 소개", platform: "twitter", views: 4200, likes: 340, comments: 89, shares: 210, saves: 0 },
  { title: "Antigravity 라이브러리 소개", platform: "youtube", views: 3100, likes: 180, comments: 42, shares: 60, saves: 120 },
  { title: "봇 탐지 우회 기능 소개", platform: "instagram", views: 5800, likes: 420, comments: 67, shares: 95, saves: 280 },
  { title: "봇 탐지 우회 기능 소개", platform: "threads", views: 2400, likes: 190, comments: 38, shares: 72, saves: 0 },
  { title: "주간 업데이트 공지", platform: "facebook", views: 2100, likes: 98, comments: 23, shares: 45, saves: 0 },
  { title: "사용 사례 - 마케팅 자동화편", platform: "instagram", views: 6600, likes: 470, comments: 78, shares: 135, saves: 280 },
  { title: "사용 사례 - 마케팅 자동화편", platform: "youtube", views: 5100, likes: 230, comments: 47, shares: 60, saves: 220 }
];
const MiniBarChart = ({ data, color = "#6366f1", height = 100 }) => {
  const max = Math.max(...data);
  return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "flex-end", gap: 3, height, padding: "8px 0" }, children: data.map(
    (v, i) => /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: 32,
          height: `${v / max * 100}%`,
          background: `linear-gradient(180deg, ${color}, ${color}88)`,
          borderRadius: "4px 4px 2px 2px",
          minHeight: 4,
          transition: "height 0.6s cubic-bezier(0.4,0,0.2,1)"
        }
      },
      void 0,
      false,
      {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 210,
        columnNumber: 11
      },
      this
    ) }, i, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 209,
      columnNumber: 7
    }, this)
  ) }, void 0, false, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 207,
    columnNumber: 5
  }, this);
};
_c = MiniBarChart;
const MiniLineChart = ({ data, color = "#6366f1", height = 80 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => `${i / (data.length - 1) * 100},${100 - (v - min) / range * 80 - 10}`).join(" ");
  return /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 100 100", style: { width: "100%", height }, preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsxDEV("defs", { children: /* @__PURE__ */ jsxDEV("linearGradient", { id: `lg-${color.replace("#", "")}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxDEV("stop", { offset: "0%", stopColor: color, stopOpacity: "0.3" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 236,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("stop", { offset: "100%", stopColor: color, stopOpacity: "0" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 237,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 235,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("polygon", { points: `0,100 ${points} 100,100`, fill: `url(#lg-${color.replace("#", "")})` }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 240,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("polyline", { points, fill: "none", stroke: color, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 241,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 233,
    columnNumber: 5
  }, this);
};
_c2 = MiniLineChart;
const METRIC_COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6"];
const MetricsLineChart = ({ labels, series, height = 200 }) => {
  const PL = 8, PR = 24, PT = 16, PB = 44;
  const VW = 600, VH = height;
  const CW = VW - PL - PR;
  const CH = VH - PT - PB;
  const getX = (i) => PL + (labels.length <= 1 ? CW / 2 : i / (labels.length - 1) * CW);
  const getY = (v, min, max) => PT + CH - (v - min) / (max - min || 1) * CH;
  return /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 20 }, children: [
    /* @__PURE__ */ jsxDEV("svg", { viewBox: `0 0 ${VW} ${VH}`, style: { width: "100%", height }, children: [
      [0, 0.25, 0.5, 0.75, 1].map(
        (t) => /* @__PURE__ */ jsxDEV("line", { x1: PL, x2: VW - PR, y1: PT + CH * (1 - t), y2: PT + CH * (1 - t), stroke: "#f1f5f9", strokeWidth: "1" }, t, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 262,
          columnNumber: 9
        }, this)
      ),
      series.map((s, si) => {
        const color = METRIC_COLORS[si % METRIC_COLORS.length];
        const max = Math.max(...s.data, 1);
        const min = Math.min(...s.data, 0);
        const pts = s.data.map((v, i) => `${getX(i)},${getY(v, min, max)}`).join(" ");
        return /* @__PURE__ */ jsxDEV("g", { children: [
          /* @__PURE__ */ jsxDEV("polyline", { points: pts, fill: "none", stroke: color, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          s.data.map(
            (v, i) => /* @__PURE__ */ jsxDEV("circle", { cx: getX(i), cy: getY(v, min, max), r: "4.5", fill: color, stroke: "#fff", strokeWidth: "2" }, i, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 274,
              columnNumber: 15
            }, this)
          )
        ] }, si, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 271,
          columnNumber: 13
        }, this);
      }),
      labels.map(
        (l, i) => /* @__PURE__ */ jsxDEV("text", { x: getX(i), y: VH - PB + 20, textAnchor: "middle", fontSize: "12", fill: "#94a3b8", children: l.length > 9 ? l.slice(0, 8) + "…" : l }, i, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 281,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 20, flexWrap: "wrap", paddingLeft: PL, marginTop: 4 }, children: series.map(
      (s, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 20, height: 3, borderRadius: 2, background: METRIC_COLORS[i % METRIC_COLORS.length] } }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 290,
          columnNumber: 13
        }, this),
        s.name
      ] }, i, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 289,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 287,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 258,
    columnNumber: 5
  }, this);
};
_c3 = MetricsLineChart;
export default function SNSDashboard() {
  _s();
  const [activeMenu, setActiveMenu] = useState("contents");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [multiUseInput, setMultiUseInput] = useState(`Antigravity(안티그래비티)는 파이썬 기반의 웹 자동화 라이브러리입니다. 기존의 Selenium이나 Playwright와 달리, 사람처럼 자연스러운 브라우저 조작이 가능하며 봇 탐지를 우회할 수 있습니다. 마케터, 데이터 분석가, 업무 자동화가 필요한 실무자들이 코딩 없이도 반복적인 웹 작업을 자동화할 수 있도록 설계되었습니다.

주요 특징으로는 첫째, 실제 브라우저 환경에서 동작하여 로그인, 클릭, 스크롤, 입력 등 사람의 행동을 그대로 재현합니다. 둘째, 봇 감지 시스템을 자연스럽게 통과하여 SNS 자동화, 데이터 수집 등에 활용할 수 있습니다. 셋째, Python만 알면 누구나 쉽게 시작할 수 있으며, 복잡한 워크플로우도 간단한 코드로 구현 가능합니다.

활용 사례로는 SNS 콘텐츠 자동 발행, 경쟁사 모니터링, 리뷰/댓글 자동 수집, 반복적인 관리자 업무 자동화 등이 있습니다. 특히 마케팅 실무에서는 여러 SNS 채널에 동시에 콘텐츠를 배포하고, 성과 데이터를 자동으로 수집·분석하는 워크플로우를 구축하는 데 매우 유용합니다.`);
  const [generatedContent, setGeneratedContent] = useState(null);
  const [benchmarkUrl, setBenchmarkUrl] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState(["instagram", "facebook", "twitter", "threads", "youtube"]);
  const [commentFilter, setCommentFilter] = useState("all");
  const [calendarMonth] = useState("2026년 3월");
  const [analysisView, setAnalysisView] = useState("overview");
  const [showBenchmarkResult, setShowBenchmarkResult] = useState(false);
  const [publishChecked, setPublishChecked] = useState({});
  const [aiInsight, setAiInsight] = useState(false);
  const [contentsView, setContentsView] = useState("list");
  const [editingContent, setEditingContent] = useState(null);
  const [contentFilter, setContentFilter] = useState("all");
  const [contentEditTab, setContentEditTab] = useState("twitter");
  const [publishMode, setPublishMode] = useState("now");
  const [contentsList, setContentsList] = useState([]);
  const dbToContent = (row) => ({
    id: row.id,
    title: row.title || "",
    masterText: row.master_text || "",
    status: row.status || "draft",
    scheduledAt: row.scheduled_at ? row.scheduled_at.replace("T", " ").slice(0, 16) : null,
    platforms: row.platforms || [],
    platformDrafts: row.platform_drafts || {},
    publishResults: row.publish_results || {},
    registrant: row.registrant || "",
    registeredAt: row.registered_at || "",
    firstPublishedAt: row.first_published_at ? row.first_published_at.replace("T", " ").slice(0, 16) : null,
    updatedAt: row.updated_at ? row.updated_at.replace("T", " ").slice(0, 16) : null
  });
  const contentToDb = (c) => ({
    title: c.title,
    master_text: c.masterText,
    status: c.status,
    scheduled_at: c.scheduledAt || null,
    platforms: c.platforms,
    platform_drafts: c.platformDrafts,
    publish_results: c.publishResults || {},
    registrant: c.registrant,
    registered_at: c.registeredAt || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    first_published_at: c.firstPublishedAt || null,
    updated_at: c.updatedAt || null
  });
  useEffect(() => {
    if (DEMO_MODE) {
      setContentsList(MOCK_CONTENTS_DATA);
      return;
    }
    supabase.from("contents").select("*").order("id", { ascending: false }).then(({ data, error }) => {
      if (error) {
        console.error("콘텐츠 불러오기 오류:", error);
        return;
      }
      setContentsList((data || []).map(dbToContent));
    });
  }, []);
  const AI_TOOLS_DEFAULT = [
    { icon: "🤖", label: "ChatGPT로 작성", url: "https://chat.openai.com", desc: "내 GPTs 활용" },
    { icon: "✨", label: "Gemini로 작성", url: "https://gemini.google.com", desc: "내 Gems 활용" },
    { icon: "🎨", label: "Canva 이미지", url: "https://www.canva.com", desc: "SNS 맞춤 디자인" },
    { icon: "🎬", label: "CapCut 영상", url: "https://www.capcut.com", desc: "숏츠/릴스 제작" },
    { icon: "🖼️", label: "Ideogram AI", url: "https://ideogram.ai", desc: "AI 이미지 생성" }
  ];
  const [aiTools, setAiTools] = useState(AI_TOOLS_DEFAULT);
  useEffect(() => {
    supabase.from("settings").select("value").eq("key", "ai_tools").single().then(({ data }) => {
      if (data?.value) setAiTools(data.value);
    });
  }, []);
  const saveAiToolsToDb = async (updated) => {
    setAiTools(updated);
    await supabase.from("settings").upsert({ key: "ai_tools", value: updated, updated_at: (/* @__PURE__ */ new Date()).toISOString() });
  };
  const [aiToolEditMode, setAiToolEditMode] = useState(null);
  const [aiToolEditData, setAiToolEditData] = useState({ icon: "", label: "", url: "", desc: "" });
  const [draftPlatformOrder, setDraftPlatformOrder] = useState(() => {
    const saved = localStorage.getItem("draftPlatformOrder");
    return saved ? JSON.parse(saved) : ["twitter", "youtube", "facebook", "instagram", "threads"];
  });
  const draftPlatformDragRef = useRef(null);
  const [draftPrompts, setDraftPrompts] = useState([]);
  const [selectedPromptId, setSelectedPromptId] = useState(null);
  const [draftPromptEdit, setDraftPromptEdit] = useState({ title: "", content: "" });
  const [draftGenPlatforms, setDraftGenPlatforms] = useState(["twitter", "youtube", "facebook", "instagram", "threads"]);
  const [isDraftGenerating, setIsDraftGenerating] = useState(false);
  const [optimizationTab, setOptimizationTab] = useState("pattern");
  useEffect(() => {
    supabase.from("settings").select("value").eq("key", "draft_prompts").single().then(({ data }) => {
      if (data?.value) {
        setDraftPrompts(data.value);
        if (data.value.length > 0) {
          setSelectedPromptId(data.value[0].id);
          setDraftPromptEdit({ title: data.value[0].title, content: data.value[0].content });
        }
      } else {
        setSelectedPromptId("new");
      }
    });
  }, []);
  const saveDraftPromptsToDb = async (updated) => {
    setDraftPrompts(updated);
    const { error } = await supabase.from("settings").upsert({ key: "draft_prompts", value: updated, updated_at: (/* @__PURE__ */ new Date()).toISOString() });
    if (error) throw new Error(error.message);
  };
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPlatforms, setSearchPlatforms] = useState(["twitter", "youtube", "facebook", "instagram", "threads"]);
  const [searchStatuses, setSearchStatuses] = useState([]);
  const [searchRegDate, setSearchRegDate] = useState("");
  const [searchPubDate, setSearchPubDate] = useState("");
  const [searchRegistrant, setSearchRegistrant] = useState("");
  const ALL_PLATFORMS = ["twitter", "youtube", "facebook", "instagram", "threads"];
  const [appliedSearch, setAppliedSearch] = useState({ title: "", platforms: ALL_PLATFORMS, statuses: [], regDate: "", pubDate: "", registrant: "" });
  const [contentsCalView, setContentsCalView] = useState("month");
  const [contentsCalYear, setContentsCalYear] = useState(2026);
  const [contentsCalMonth, setContentsCalMonth] = useState(2);
  const [contentsCalSelectedDay, setContentsCalSelectedDay] = useState(22);
  const [contentsCalPlatforms, setContentsCalPlatforms] = useState(["twitter", "youtube", "facebook", "instagram", "threads"]);
  const [authState, setAuthState] = useState("approved");
  const [authForm, setAuthForm] = useState({ email: "", password: "", name: "" });
  const [authError, setAuthError] = useState("");
  const [membersList, setMembersList] = useState([]);
  const [homeChannelPlatforms, setHomeChannelPlatforms] = useState(["twitter", "youtube", "facebook", "instagram", "threads"]);
  const [homeChannelStartDate, setHomeChannelStartDate] = useState("2026-03-15");
  const [homeChannelEndDate, setHomeChannelEndDate] = useState("2026-03-22");
  const [homeContentPlatforms, setHomeContentPlatforms] = useState(["twitter", "youtube", "facebook", "instagram", "threads"]);
  const [homeContentStartDate, setHomeContentStartDate] = useState("2026-03-15");
  const [homeContentEndDate, setHomeContentEndDate] = useState("2026-03-22");
  const [homeContentTitle, setHomeContentTitle] = useState("");
  const menuItems = [
    { id: "home", label: "홈", icon: Icons.Home },
    { id: "contents", label: "콘텐츠 관리", icon: Icons.Edit },
    { id: "community", label: "커뮤니티", icon: Icons.MessageCircle },
    { id: "research", label: "리서치", icon: Icons.Search }
  ];
  const statusColors = { approved: "#10b981", draft: "#94a3b8", review: "#f59e0b" };
  const statusLabels = { approved: "승인완료", draft: "초안", review: "검토중" };
  const sentimentColors = { positive: "#10b981", negative: "#ef4444", neutral: "#94a3b8" };
  const sentimentLabels = { positive: "긍정", negative: "부정", neutral: "중립" };
  const [isGenerating, setIsGenerating] = useState(false);
  const [integrationTab, setIntegrationTab] = useState("sns");
  const [snsOrder, setSnsOrder] = useState(() => {
    const saved = localStorage.getItem("snsOrder");
    return saved ? JSON.parse(saved) : ["twitter", "youtube", "facebook", "instagram", "threads"];
  });
  const dragSnsRef = useRef(null);
  const [serviceCredentials, setServiceCredentials] = useState({
    supabase: { projectUrl: "", publishableKey: "", anonKeyLegacy: "" },
    github: { personalAccessToken: "", owner: "", repo: "" },
    vercel: { accessToken: "", projectId: "", orgId: "" },
    googleSheet: { spreadsheetId: "", serviceAccountEmail: "", privateKey: "" },
    openai: { apiKey: "" }
  });
  const [serviceSaveStatus, setServiceSaveStatus] = useState({});
  const [snsCredentials, setSnsCredentials] = useState({
    facebook: { pageAccessToken: "", pageId: "" },
    twitter: { bearerToken: "", consumerKey: "", consumerKeySecret: "", accessToken: "", accessTokenSecret: "", clientId: "", clientSecret: "" },
    threads: { appId: "", accessToken: "" },
    instagram: { accessToken: "", userId: "" },
    youtube: { clientId: "", clientSecret: "" }
  });
  const [snsSaveStatus, setSnsSaveStatus] = useState({});
  const [showTokens, setShowTokens] = useState({});
  useEffect(() => {
    const loadCredentials = async () => {
      const [{ data: snsData }, { data: svcData }, { data: membersData }] = await Promise.all(
        [
          supabase.from("sns_credentials").select("platform, credentials"),
          supabase.from("service_credentials").select("service, credentials"),
          supabase.from("members").select("*").order("created_at", { ascending: true })
        ]
      );
      if (membersData?.length) {
        setMembersList(membersData.map((m) => ({
          id: m.id,
          name: m.name,
          email: m.email,
          joinedAt: m.joined_at,
          approvalStatus: m.approval_status,
          role: m.role
        })));
      }
      if (snsData?.length) {
        const loaded = {};
        snsData.forEach((row) => {
          loaded[row.platform] = row.credentials;
        });
        setSnsCredentials((prev) => {
          const merged = { ...prev };
          Object.keys(loaded).forEach((p) => {
            merged[p] = { ...prev[p], ...loaded[p] };
          });
          return merged;
        });
      }
      if (svcData?.length) {
        const loaded = {};
        svcData.forEach((row) => {
          loaded[row.service] = row.credentials;
        });
        setServiceCredentials((prev) => {
          const merged = { ...prev };
          Object.keys(loaded).forEach((s) => {
            merged[s] = { ...prev[s], ...loaded[s] };
          });
          return merged;
        });
      }
    };
    loadCredentials();
  }, []);
  const handleDraftGenerate = async () => {
    if (!editingContent?.masterText?.trim()) {
      alert("마스터 글을 입력해주세요.\n마스터 글이 있어야 초안을 생성할 수 있습니다.");
      return;
    }
    if (!draftPromptEdit.content.trim()) {
      alert("프롬프트를 선택하거나 입력해주세요.\n왼쪽 목록에서 프롬프트를 선택하거나 내용을 직접 입력해주세요.");
      return;
    }
    if (draftGenPlatforms.length === 0) {
      alert("생성할 플랫폼을 하나 이상 선택해주세요.");
      return;
    }
    const apiKey = serviceCredentials.openai?.apiKey?.trim();
    if (!apiKey) {
      alert("OpenAI API 키가 없습니다.\n연동 관리 > 서비스 연동 > OpenAI에서 키를 저장해주세요.");
      return;
    }
    setIsDraftGenerating(true);
    const PLATFORM_NAMES = { twitter: "X (Twitter)", youtube: "YouTube 커뮤니티", facebook: "Facebook", instagram: "Instagram", threads: "Threads" };
    const PLATFORM_GUIDES = {
      twitter: "140자 이내, 간결하고 임팩트 있게, 해시태그 3개 이하",
      youtube: "200자 이내, 친근하고 상세하게, 유튜브 커뮤니티 게시글 형식",
      facebook: "공감형·커뮤니티 친화적, 질문으로 마무리, 이모지 적절히 사용",
      instagram: "감성적·비주얼 중심, 줄바꿈 활용, 해시태그 10개 이하",
      threads: "짧고 대화체, 200자 이내, 가볍게 읽히는 톤"
    };
    const platformList = draftGenPlatforms.map((p) => `- ${PLATFORM_NAMES[p]}: ${PLATFORM_GUIDES[p]}`).join("\n");
    const promptInstruction = draftPromptEdit.content.trim();
    const systemPrompt = `당신은 SNS 콘텐츠 전문가입니다. 주어진 마스터 글을 각 플랫폼에 맞게 재작성해주세요.

추가 지침: ${promptInstruction}

플랫폼별 요구사항:
${platformList}

응답 형식: 반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이 JSON만 출력하세요.
{
  ${draftGenPlatforms.map((p) => `"${p}": "해당 플랫폼용 글"`).join(",\n  ")}
}`;
    try {
      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `마스터 글:
${editingContent.masterText}` }
          ],
          temperature: 0.7
        })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error?.message || `API 오류 ${resp.status}`);
      const raw = data.choices[0].message.content.trim();
      const jsonStr = raw.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
      const generated = JSON.parse(jsonStr);
      setEditingContent((prev) => ({
        ...prev,
        platformDrafts: { ...prev.platformDrafts, ...generated }
      }));
    } catch (e) {
      alert(`초안 생성 실패: ${e.message}`);
    } finally {
      setIsDraftGenerating(false);
    }
  };
  const handleGenerate = () => {
    if (!multiUseInput.trim()) return;
    setGeneratedContent(null);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedContent({
        instagram: {
          text: `📸 코딩 몰라도 SNS 자동화 가능합니다

솔직히 매일 5개 채널에 콘텐츠 올리는 거,
너무 귀찮지 않으셨나요? 🤦‍♀️

Antigravity를 만나고 나서
저는 이 모든 걸 자동화했습니다.

✅ 로그인부터 글 작성, 발행까지 자동
✅ 사람처럼 움직여서 차단 걱정 NO
✅ Python 기초만 알면 바로 시작
✅ 댓글, 조회수 수집까지 한 번에

마케터가 진짜 해야 할 일은
'반복 작업'이 아니라 '전략'이잖아요.

🔗 자세한 내용은 프로필 링크에서!

#Antigravity #안티그래비티 #업무자동화
#SNS자동화 #마케팅자동화 #파이썬
#웹자동화 #마케터필수템 #생산성`,
          charCount: 412,
          hashtags: 9,
          format: "캐러셀 10장 권장",
          tip: "첫 장에 후킹 문구, 마지막 장에 CTA 배치"
        },
        facebook: {
          text: `여러분, 혹시 매일 SNS 채널마다 같은 내용을 복붙하고 계신가요? 😅

저도 그랬습니다. 인스타, 페북, X, 스레드, 유튜브... 5개 채널을 운영하면서 하루의 절반을 단순 반복 작업에 쓰고 있었어요.

그러다 발견한 게 Antigravity(안티그래비티)입니다.

Antigravity는 파이썬 기반의 웹 자동화 도구인데요, 기존 자동화 도구들과 다른 점이 있습니다:

🔹 실제 브라우저에서 사람처럼 동작해서 봇 차단을 걱정할 필요가 없습니다
🔹 로그인 → 글 작성 → 발행까지 전 과정을 자동화할 수 있습니다
🔹 경쟁사 모니터링, 댓글/리뷰 수집, 성과 데이터 분석까지 가능합니다

특히 마케팅 실무자라면, 콘텐츠를 한 번 만들어서 여러 채널에 자동 배포하고 성과까지 자동 수집하는 워크플로우를 만들 수 있다는 게 가장 큰 메리트입니다.

Python 기초만 알면 시작할 수 있어서, 개발자가 아닌 마케터도 충분히 활용 가능합니다.

👉 더 자세한 내용이 궁금하시면 댓글이나 DM 주세요!

여러분은 SNS 운영에서 가장 귀찮은 작업이 뭔가요? 댓글로 알려주세요 👇`,
          charCount: 680,
          hashtags: 0,
          format: "링크 포스트 (썸네일 이미지 포함)",
          tip: "질문형 마무리로 댓글 유도 — 페북 알고리즘 반응 ↑"
        },
        twitter: {
          text: `🧵 마케터인데 아직도 SNS 5개 채널에 수동으로 올리고 계신가요?

Antigravity 하나면 끝납니다.

알려드릴게요 👇

---

1/ Antigravity는 파이썬 기반 웹 자동화 라이브러리입니다.

Selenium과 다른 점?
→ 사람처럼 브라우저를 조작해서 봇 탐지에 안 걸립니다.

---

2/ 마케터가 할 수 있는 것들:

• 콘텐츠 자동 발행 (인스타/페북/X/스레드)
• 경쟁사 SNS 자동 모니터링
• 댓글·조회수·좋아요 자동 수집
• 성과 데이터 자동 분석

---

3/ "나 코딩 못하는데?"

Python 기초만 알면 됩니다.
print("hello") 칠 줄 알면 시작 가능.

---

4/ 핵심은 이겁니다:

마케터의 시간은 '반복 작업'이 아니라
'전략과 크리에이티브'에 써야 합니다.

Antigravity = 반복 작업 제거 도구 🔥

---

5/ 관심 있으면 🔄 리포스트 + 팔로우

다음 스레드에서 실제 자동화 코드를 공유할게요.

#Antigravity #SNS자동화 #마케팅`,
          charCount: 520,
          hashtags: 3,
          format: "스레드 (5개 트윗)",
          tip: "1번 트윗에서 호기심 유발, 마지막에 CTA 배치"
        },
        threads: {
          text: `SNS 5개 채널 운영하는 마케터인데요,
솔직히 매일 같은 글 복붙하는 거 너무 지쳤거든요.

그래서 Antigravity라는 걸 써봤는데...
이게 진짜 사람처럼 브라우저를 조작해요.

로그인 → 글 작성 → 발행
이 전체 과정이 자동.

봇 차단? 사람처럼 움직여서 걸리지도 않음.

Python 기초만 알면 되고,
경쟁사 모니터링이나 댓글 수집도 가능.

마케터가 반복 작업에 시간 쓰는 건
진짜 아까운 거 아닌가요?

궁금한 거 있으면 물어보세요 ✋`,
          charCount: 298,
          hashtags: 0,
          format: "텍스트 포스트",
          tip: "Threads는 해시태그 효과 낮음 — 대화체로 공감 유도"
        },
        youtube: {
          text: `📺 제목:
코딩 몰라도 SNS 자동화? Antigravity 완전 정복 | 마케터 필수 도구

📋 설명:
마케터라면 꼭 알아야 할 SNS 자동화 도구, Antigravity를 소개합니다.

Selenium, Playwright와는 차원이 다른 웹 자동화 — 사람처럼 브라우저를 조작하기 때문에 봇 탐지를 자연스럽게 통과합니다.

이 영상에서 다루는 내용:
• Antigravity가 뭔지, 왜 다른 도구와 다른지
• 마케터가 실무에서 활용하는 구체적 사례
• 실제 자동화 코드 시연 (따라하기 가능)

Python 기초만 알면 누구나 시작할 수 있습니다.

⏱ 타임스탬프:
00:00 인트로 — SNS 운영의 고통
01:20 Antigravity란?
03:45 기존 도구와의 차이점
06:10 실무 활용 사례 4가지
09:30 라이브 코딩 시연
13:00 마케터를 위한 꿀팁
15:20 정리 및 다음 영상 예고

🏷 태그:
Antigravity, 안티그래비티, SNS 자동화, 웹 자동화, 파이썬 자동화, 마케팅 자동화, Selenium 대안, 업무 자동화, 마케터 도구, Python 마케팅

🔔 구독과 좋아요는 큰 힘이 됩니다!`,
          charCount: 720,
          hashtags: 10,
          format: "롱폼 영상 (15~20분) + 숏츠 클립 3개",
          tip: "숏츠용 하이라이트: 봇탐지 우회 장면, 자동 발행 시연, Before/After 비교"
        }
      });
    }, 1500);
  };
  const styles = {
    app: {
      display: "flex",
      height: "100vh",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', -apple-system, sans-serif",
      background: "#f8f9fc",
      color: "#1a1a2e",
      overflow: "hidden"
    },
    sidebar: {
      width: sidebarCollapsed ? 64 : 220,
      background: "linear-gradient(195deg, #0f0f23 0%, #1a1a3e 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
      flexShrink: 0,
      overflow: "hidden"
    },
    logo: {
      padding: sidebarCollapsed ? "20px 12px" : "20px 20px",
      borderBottom: "1px solid #ffffff12",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      whiteSpace: "nowrap"
    },
    menuItem: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: sidebarCollapsed ? "12px 20px" : "11px 20px",
      cursor: "pointer",
      background: active ? "linear-gradient(90deg, #6366f120, #6366f108)" : "transparent",
      borderLeft: active ? "3px solid #818cf8" : "3px solid transparent",
      color: active ? "#c7d2fe" : "#94a3b8",
      fontSize: 14,
      fontWeight: active ? 600 : 400,
      transition: "all 0.2s",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }),
    main: {
      flex: 1,
      overflow: "auto",
      padding: "28px 32px"
    },
    pageTitle: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 6,
      color: "#0f0f23",
      letterSpacing: "-0.02em"
    },
    pageSubtitle: {
      fontSize: 13,
      color: "#64748b",
      marginBottom: 24
    },
    card: {
      background: "#fff",
      borderRadius: 14,
      padding: "22px 24px",
      boxShadow: "0 1px 3px #0000000a, 0 1px 2px #0000000f",
      border: "1px solid #e8eaf0"
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: 600,
      color: "#374151",
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 8
    },
    grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
    grid3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 },
    grid4: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 },
    btn: (primary) => ({
      padding: "9px 18px",
      borderRadius: 8,
      border: primary ? "none" : "1px solid #d1d5db",
      background: primary ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#fff",
      color: primary ? "#fff" : "#374151",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      transition: "all 0.2s"
    }),
    btnSm: (primary) => ({
      padding: "5px 12px",
      borderRadius: 6,
      border: primary ? "none" : "1px solid #d1d5db",
      background: primary ? "#6366f1" : "#fff",
      color: primary ? "#fff" : "#374151",
      fontSize: 12,
      fontWeight: 500,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }),
    input: {
      width: "100%",
      padding: "10px 14px",
      borderRadius: 8,
      border: "1px solid #d1d5db",
      fontSize: 13,
      outline: "none",
      fontFamily: "inherit",
      boxSizing: "border-box"
    },
    textarea: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 10,
      border: "1px solid #d1d5db",
      fontSize: 13,
      outline: "none",
      fontFamily: "inherit",
      resize: "vertical",
      minHeight: 120,
      boxSizing: "border-box",
      lineHeight: 1.6
    },
    badge: (color) => ({
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 10px",
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 600,
      background: color + "18",
      color
    }),
    tag: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 500,
      background: "#f1f5f9",
      color: "#475569",
      gap: 4
    },
    platformDot: (color) => ({
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: color,
      flexShrink: 0
    }),
    tabBar: {
      display: "flex",
      gap: 2,
      background: "#f1f5f9",
      borderRadius: 10,
      padding: 3,
      marginBottom: 20
    },
    tab: (active) => ({
      padding: "8px 16px",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: active ? 600 : 400,
      color: active ? "#1a1a2e" : "#64748b",
      background: active ? "#fff" : "transparent",
      border: "none",
      cursor: "pointer",
      boxShadow: active ? "0 1px 3px #0000000d" : "none",
      transition: "all 0.2s"
    })
  };
  const renderHome = () => {
    const channelRows = Object.entries(MOCK_CHANNEL_STATS).filter(([p]) => homeChannelPlatforms.includes(p));
    const contentGrouped = MOCK_CONTENT_STATS.filter((r) => homeContentPlatforms.includes(r.platform)).filter((r) => !homeContentTitle.trim() || r.title.includes(homeContentTitle.trim())).reduce((acc, r) => {
      const existing = acc.find((x) => x.title === r.title);
      if (existing) {
        existing.platforms.push(r.platform);
        existing.views += r.views;
        existing.likes += r.likes;
        existing.comments += r.comments;
        existing.shares += r.shares;
        existing.saves += r.saves;
      } else {
        acc.push({ title: r.title, platforms: [r.platform], views: r.views, likes: r.likes, comments: r.comments, shares: r.shares, saves: r.saves });
      }
      return acc;
    }, []);
    const metricsTh = { padding: "10px 14px", fontSize: 12, fontWeight: 600, color: "#64748b", textAlign: "right", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", whiteSpace: "nowrap" };
    const metricsThNo = { ...metricsTh, textAlign: "center", width: 48 };
    const metricsTd = { padding: "10px 14px", fontSize: 13, textAlign: "right", borderBottom: "1px solid #f1f5f9" };
    const metricsTdNo = { ...metricsTd, textAlign: "center", color: "#94a3b8", fontWeight: 500 };
    const channelChartLabels = channelRows.map(([key]) => PLATFORMS[key].name);
    const channelChartSeries = [
      { name: "조회", data: channelRows.map(([, s]) => s.views) },
      { name: "좋아요", data: channelRows.map(([, s]) => s.likes) },
      { name: "댓글", data: channelRows.map(([, s]) => s.comments) },
      { name: "공유하기", data: channelRows.map(([, s]) => s.shares) },
      { name: "저장", data: channelRows.map(([, s]) => s.saves) }
    ];
    const contentChartLabels = contentGrouped.map((_, i) => `No.${i + 1}`);
    const contentChartSeries = [
      { name: "조회", data: contentGrouped.map((r) => r.views) },
      { name: "좋아요", data: contentGrouped.map((r) => r.likes) },
      { name: "댓글", data: contentGrouped.map((r) => r.comments) },
      { name: "공유하기", data: contentGrouped.map((r) => r.shares) },
      { name: "저장", data: contentGrouped.map((r) => r.saves) }
    ];
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 24 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 16 }, children: "📊 채널별 성과" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 916,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "#f8fafc", borderRadius: 10, padding: "16px 20px", marginBottom: 16, border: "1px solid #e2e8f0" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600, color: "#374151", minWidth: 56 }, children: "플랫폼" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 921,
              columnNumber: 15
            }, this),
            Object.entries(PLATFORMS).map(([key, p]) => {
              const on = homeChannelPlatforms.includes(key);
              return /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setHomeChannelPlatforms((prev) => on ? prev.filter((x) => x !== key) : [...prev, key]),
                  style: { display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", border: `1px solid ${on ? p.color : "#d1d5db"}`, background: on ? p.color : "#fff", color: on ? "#fff" : "#374151", transition: "all 0.15s" },
                  children: [
                    p.icon,
                    " ",
                    p.name
                  ]
                },
                key,
                true,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 925,
                  columnNumber: 19
                },
                this
              );
            })
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 920,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600, color: "#374151", minWidth: 56 }, children: "조회 기간" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 933,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "date",
                value: homeChannelStartDate,
                onChange: (e) => setHomeChannelStartDate(e.target.value),
                style: { border: "1px solid #d1d5db", borderRadius: 6, padding: "5px 10px", fontSize: 13 }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 934,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, color: "#64748b" }, children: "~" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 936,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "date",
                value: homeChannelEndDate,
                onChange: (e) => setHomeChannelEndDate(e.target.value),
                style: { border: "1px solid #d1d5db", borderRadius: 6, padding: "5px 10px", fontSize: 13 }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 937,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { style: { marginLeft: "auto", display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    setHomeChannelPlatforms(["twitter", "youtube", "facebook", "instagram", "threads"]);
                    setHomeChannelStartDate("2026-03-15");
                    setHomeChannelEndDate("2026-03-22");
                  },
                  style: { padding: "6px 16px", border: "1px solid #d1d5db", borderRadius: 6, background: "#fff", fontSize: 13, cursor: "pointer" },
                  children: "초기화"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 940,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("button", { style: { padding: "6px 16px", border: "none", borderRadius: 6, background: "#6366f1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }, children: "검색" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 944,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 939,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 932,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 919,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { style: metricsThNo, children: "No" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 954,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: { ...metricsTh, textAlign: "left" }, children: "채널" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 955,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "조회" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 956,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "좋아요" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 957,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "댓글" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 958,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "공유하기" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 959,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "저장" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 960,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 953,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 952,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: channelRows.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", { colSpan: 7, style: { textAlign: "center", padding: 32, color: "#94a3b8", fontSize: 13 }, children: "조회 결과가 없습니다" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 965,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 965,
            columnNumber: 17
          }, this) : channelRows.map(
            ([key, stat], i) => /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { style: metricsTdNo, children: i + 1 }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 968,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 14px", borderBottom: "1px solid #f1f5f9" }, children: /* @__PURE__ */ jsxDEV("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { color: PLATFORMS[key].color }, children: PLATFORMS[key].icon }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 971,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 500 }, children: PLATFORMS[key].name }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 972,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 970,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 969,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: stat.views.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 975,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: stat.likes.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 976,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: stat.comments.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 977,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: stat.shares.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 978,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: stat.saves > 0 ? stat.saves.toLocaleString() : "-" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 979,
                columnNumber: 21
              }, this)
            ] }, key, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 967,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 963,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 951,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 950,
          columnNumber: 11
        }, this),
        channelRows.length > 0 && /* @__PURE__ */ jsxDEV(MetricsLineChart, { labels: channelChartLabels, series: channelChartSeries, height: 200 }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 988,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 915,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 16 }, children: "📋 콘텐츠별 성과" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 994,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "#f8fafc", borderRadius: 10, padding: "16px 20px", marginBottom: 16, border: "1px solid #e2e8f0" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600, color: "#374151", minWidth: 56 }, children: "플랫폼" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 999,
              columnNumber: 15
            }, this),
            Object.entries(PLATFORMS).map(([key, p]) => {
              const on = homeContentPlatforms.includes(key);
              return /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setHomeContentPlatforms((prev) => on ? prev.filter((x) => x !== key) : [...prev, key]),
                  style: { display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", border: `1px solid ${on ? p.color : "#d1d5db"}`, background: on ? p.color : "#fff", color: on ? "#fff" : "#374151", transition: "all 0.15s" },
                  children: [
                    p.icon,
                    " ",
                    p.name
                  ]
                },
                key,
                true,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1003,
                  columnNumber: 19
                },
                this
              );
            })
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 998,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600, color: "#374151", minWidth: 56 }, children: "조회 기간" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1011,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "date",
                value: homeContentStartDate,
                onChange: (e) => setHomeContentStartDate(e.target.value),
                style: { border: "1px solid #d1d5db", borderRadius: 6, padding: "5px 10px", fontSize: 13 }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1012,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, color: "#64748b" }, children: "~" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1014,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "date",
                value: homeContentEndDate,
                onChange: (e) => setHomeContentEndDate(e.target.value),
                style: { border: "1px solid #d1d5db", borderRadius: 6, padding: "5px 10px", fontSize: 13 }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1015,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "콘텐츠 제목 검색",
                value: homeContentTitle,
                onChange: (e) => setHomeContentTitle(e.target.value),
                style: { border: "1px solid #d1d5db", borderRadius: 6, padding: "5px 10px", fontSize: 13, width: 180 }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1017,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { style: { marginLeft: "auto", display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    setHomeContentPlatforms(["twitter", "youtube", "facebook", "instagram", "threads"]);
                    setHomeContentStartDate("2026-03-15");
                    setHomeContentEndDate("2026-03-22");
                    setHomeContentTitle("");
                  },
                  style: { padding: "6px 16px", border: "1px solid #d1d5db", borderRadius: 6, background: "#fff", fontSize: 13, cursor: "pointer" },
                  children: "초기화"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1025,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("button", { style: { padding: "6px 16px", border: "none", borderRadius: 6, background: "#6366f1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }, children: "검색" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1029,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1024,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1010,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 997,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { style: metricsThNo, children: "No" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1039,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: { ...metricsTh, textAlign: "left" }, children: "콘텐츠 제목" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1040,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: { ...metricsTh, textAlign: "left" }, children: "채널" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1041,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "조회" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1042,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "좋아요" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1043,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "댓글" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1044,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "공유하기" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1045,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { style: metricsTh, children: "저장" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1046,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1038,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1037,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: contentGrouped.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", { colSpan: 8, style: { textAlign: "center", padding: 32, color: "#94a3b8", fontSize: 13 }, children: "조회 결과가 없습니다" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1051,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1051,
            columnNumber: 17
          }, this) : contentGrouped.map(
            (row, i) => /* @__PURE__ */ jsxDEV("tr", { style: { background: i % 2 === 0 ? "#fff" : "#fafafa" }, children: [
              /* @__PURE__ */ jsxDEV("td", { style: metricsTdNo, children: i + 1 }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1054,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 14px", borderBottom: "1px solid #f1f5f9", fontSize: 13 }, children: row.title }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1055,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 14px", borderBottom: "1px solid #f1f5f9" }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" }, children: row.platforms.map(
                (p) => /* @__PURE__ */ jsxDEV("span", { title: PLATFORMS[p].name, style: { color: PLATFORMS[p].color, fontSize: 15 }, children: PLATFORMS[p].icon }, p, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1059,
                  columnNumber: 23
                }, this)
              ) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1057,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1056,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: row.views.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1063,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: row.likes.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1064,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: row.comments.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1065,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: row.shares.toLocaleString() }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1066,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: metricsTd, children: row.saves > 0 ? row.saves.toLocaleString() : "-" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1067,
                columnNumber: 21
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1053,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1049,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1036,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1035,
          columnNumber: 11
        }, this),
        contentGrouped.length > 0 && /* @__PURE__ */ jsxDEV(MetricsLineChart, { labels: contentChartLabels, series: contentChartSeries, height: 200 }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1076,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 993,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 913,
      columnNumber: 7
    }, this);
  };
  const renderResearch = () => /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "리서치 & 기획" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 1088,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "경쟁사 벤치마킹, 트렌드 탐색, 레퍼런스 수집" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 1089,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🔍 경쟁사 벤치마킹 분석" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1093,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 10, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            style: { ...styles.input, flex: 1 },
            placeholder: "분석할 SNS 계정 URL을 입력하세요 (예: instagram.com/brandname)",
            value: benchmarkUrl,
            onChange: (e) => setBenchmarkUrl(e.target.value)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1095,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("button", { style: styles.btn(true), onClick: () => setShowBenchmarkResult(true), children: [
          /* @__PURE__ */ jsxDEV(Icons.Search, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1102,
            columnNumber: 13
          }, this),
          " 분석하기"
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1094,
        columnNumber: 9
      }, this),
      showBenchmarkResult && /* @__PURE__ */ jsxDEV("div", { style: { background: "#f8fafc", borderRadius: 10, padding: 20, border: "1px solid #e8eaf0" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, marginBottom: 14, color: "#6366f1" }, children: "📋 분석 결과 — @competitor_brand" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: styles.grid3, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", marginBottom: 4 }, children: "콘텐츠 유형 비중" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13 }, children: "교육형 45% · 프로모션 30% · UGC 25%" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1112,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", marginBottom: 4 }, children: "주력 포맷" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1115,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13 }, children: "캐러셀 (인게이지먼트 2.3배 ↑)" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", marginBottom: 4 }, children: "게시 패턴" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1119,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13 }, children: "주 5회 · 주로 화/목/토 오후 7시" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1120,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1118,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 14, padding: "12px 14px", background: "#ede9fe", borderRadius: 8, fontSize: 13, color: "#5b21b6", lineHeight: 1.6 }, children: [
          "💡 ",
          /* @__PURE__ */ jsxDEV("strong", { children: "AI 인사이트:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1124,
            columnNumber: 18
          }, this),
          " 이 계정은 교육형 캐러셀 콘텐츠에서 가장 높은 인게이지먼트를 보입니다. 해시태그는 니치 태그(팔로워 1만~10만 규모)를 주로 활용하여 도달률을 높이고 있습니다. 톤앤매너는 친근하고 전문적인 균형을 유지합니다."
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1123,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1107,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 1092,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.grid2, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🔥 트렌드 키워드" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: MOCK_TRENDS.map(
          (t, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", borderRadius: 8, background: "#f8fafc" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 500 }, children: t.keyword }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#64748b" }, children: t.volume }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1139,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: styles.badge(t.status === "급상승" ? "#ef4444" : t.status === "상승" ? "#10b981" : t.status === "하락" ? "#94a3b8" : "#64748b"), children: t.status }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1140,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1138,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1136,
            columnNumber: 11
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1134,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "📊 경쟁사 비교" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { style: { borderBottom: "1px solid #e8eaf0" }, children: ["계정", "팔로워", "게시빈도", "주력포맷", "인게이지먼트"].map(
            (h) => /* @__PURE__ */ jsxDEV("th", { style: { textAlign: "left", padding: "8px 6px", fontSize: 11, fontWeight: 600, color: "#94a3b8" }, children: h }, h, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1154,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1152,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1151,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: MOCK_COMPETITORS.map(
            (c, i) => /* @__PURE__ */ jsxDEV("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 6px", fontWeight: 500 }, children: c.name }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1161,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 6px" }, children: c.followers }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1162,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 6px" }, children: c.postFreq }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1163,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 6px" }, children: /* @__PURE__ */ jsxDEV("span", { style: styles.tag, children: c.topFormat }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1164,
                columnNumber: 55
              }, this) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1164,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "10px 6px", fontWeight: 600, color: "#6366f1" }, children: c.engageRate }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1165,
                columnNumber: 19
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1160,
              columnNumber: 13
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1158,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1148,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 1130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 1087,
    columnNumber: 3
  }, this);
  const renderCalendar = () => {
    const daysInMonth = 31;
    const firstDay = 6;
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "콘텐츠 캘린더" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { style: styles.btn(true), children: [
          /* @__PURE__ */ jsxDEV(Icons.Plus, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1189,
            columnNumber: 44
          }, this),
          " 일정 추가"
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1189,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: [
        calendarMonth,
        " · 콘텐츠 게시 일정을 관리하세요"
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0, marginBottom: 8 }, children: ["일", "월", "화", "수", "목", "금", "토"].map(
          (d) => /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", fontSize: 12, fontWeight: 600, color: "#94a3b8", padding: "8px 0" }, children: d }, d, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1197,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }, children: days.map((day, i) => {
          const events = day ? MOCK_CALENDAR.filter((e) => e.day === day) : [];
          const isToday = day === 9;
          return /* @__PURE__ */ jsxDEV("div", { style: {
            minHeight: 90,
            padding: "6px 8px",
            borderRadius: 8,
            background: isToday ? "#ede9fe" : day ? "#fafbfd" : "transparent",
            border: isToday ? "2px solid #8b5cf6" : day ? "1px solid #f1f5f9" : "none"
          }, children: day && /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: isToday ? 700 : 400, color: isToday ? "#6366f1" : "#64748b", marginBottom: 4 }, children: day }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1215,
              columnNumber: 23
            }, this),
            events.map(
              (ev, j) => /* @__PURE__ */ jsxDEV("div", { style: {
                fontSize: 10,
                padding: "3px 6px",
                borderRadius: 4,
                marginBottom: 2,
                background: PLATFORMS[ev.platform].bg,
                borderLeft: `3px solid ${PLATFORMS[ev.platform].color}`,
                color: "#374151",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer"
              }, children: ev.title }, j, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1217,
                columnNumber: 21
              }, this)
            )
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1214,
            columnNumber: 19
          }, this) }, i, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1206,
            columnNumber: 17
          }, this);
        }) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1201,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginTop: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🎯 시즌 이벤트 알림" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1243,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" }, children: [
          { date: "3/14", event: "화이트데이", color: "#ec4899" },
          { date: "4/5", event: "식목일", color: "#22c55e" },
          { date: "5/5", event: "어린이날", color: "#f59e0b" },
          { date: "5/8", event: "어버이날", color: "#ef4444" }
        ].map(
          (s, i) => /* @__PURE__ */ jsxDEV("div", { style: { padding: "10px 16px", borderRadius: 10, background: s.color + "10", border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 600, color: s.color }, children: s.date }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1252,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13 }, children: s.event }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#94a3b8" }, children: "콘텐츠 준비 권장" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1254,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1251,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1244,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1242,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 1186,
      columnNumber: 7
    }, this);
  };
  const renderContents = () => {
    const STATUS_LABELS = { draft: "초안", review: "검토중", scheduled: "예약", published: "발행완료" };
    const STATUS_COLORS = { draft: "#94a3b8", review: "#f59e0b", scheduled: "#6366f1", published: "#10b981" };
    const saveAiTool = () => {
      if (!aiToolEditData.label.trim() || !aiToolEditData.url.trim()) return;
      const updated = aiToolEditMode === "add" ? [...aiTools, aiToolEditData] : aiTools.map((t, i) => i === aiToolEditMode ? aiToolEditData : t);
      saveAiToolsToDb(updated);
      setAiToolEditMode(null);
      setAiToolEditData({ icon: "", label: "", url: "", desc: "" });
    };
    const deleteAiTool = (index) => {
      const updated = aiTools.filter((_, i) => i !== index);
      saveAiToolsToDb(updated);
    };
    const handleDraftDragStart = (id) => {
      draftPlatformDragRef.current = id;
    };
    const handleDraftDragOver = (e) => {
      e.preventDefault();
    };
    const handleDraftDrop = (targetId) => {
      const draggedId = draftPlatformDragRef.current;
      if (!draggedId || draggedId === targetId) return;
      setDraftPlatformOrder((prev) => {
        const next = [...prev];
        const from = next.indexOf(draggedId);
        const to = next.indexOf(targetId);
        next.splice(from, 1);
        next.splice(to, 0, draggedId);
        localStorage.setItem("draftPlatformOrder", JSON.stringify(next));
        return next;
      });
      draftPlatformDragRef.current = null;
    };
    if (contentsView === "edit" && editingContent) {
      const content = editingContent;
      const updateContent = (field, value) => setEditingContent((prev) => ({ ...prev, [field]: value }));
      const updateDraft = (platform, value) => setEditingContent((prev) => ({
        ...prev,
        platformDrafts: { ...prev.platformDrafts, [platform]: value }
      }));
      const togglePlatform = (p) => {
        const next = content.platforms.includes(p) ? content.platforms.filter((x) => x !== p) : [...content.platforms, p];
        updateContent("platforms", next);
      };
      const handleSaveContent = async (statusOverride) => {
        const toSave = { ...content, ...statusOverride ? { status: statusOverride } : {} };
        if (statusOverride === "published") {
          const results = {};
          if (toSave.platforms?.includes("twitter") && toSave.platformDrafts?.twitter?.trim()) {
            try {
              const { data, error } = await supabase.functions.invoke("post-x", {
                body: { text: toSave.platformDrafts.twitter }
              });
              if (error) throw new Error(error.message);
              if (data?.success) {
                results.twitter = `발행완료 ${(/* @__PURE__ */ new Date()).toLocaleDateString("ko-KR")} | ${data.url}`;
                alert(`✅ X 발행 완료!
${data.url}`);
              } else {
                results.twitter = `오류: ${data?.error}`;
                alert(`❌ X 발행 실패: ${data?.error}`);
              }
            } catch (e) {
              results.twitter = `오류: ${e.message}`;
              alert(`❌ X 발행 오류: ${e.message}`);
            }
          } else if (toSave.platforms?.includes("twitter")) {
            alert("X 글을 입력해주세요.");
            return;
          }
          toSave.publishResults = { ...toSave.publishResults, ...results };
          const now = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16);
          if (!toSave.firstPublishedAt) {
            toSave.firstPublishedAt = now;
          } else {
            toSave.updatedAt = now;
          }
        }
        if (!toSave.id) {
          const { data, error } = await supabase.from("contents").insert(contentToDb(toSave)).select().single();
          if (error) {
            alert("저장 오류: " + error.message);
            return;
          }
          setContentsList((prev) => [dbToContent(data), ...prev]);
        } else {
          const { error } = await supabase.from("contents").update(contentToDb(toSave)).eq("id", toSave.id);
          if (error) {
            alert("저장 오류: " + error.message);
            return;
          }
          setContentsList((prev) => prev.map((c) => c.id === toSave.id ? toSave : c));
        }
        setContentsView("list");
      };
      return /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }, children: [
          /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btnSm(false), padding: "8px 16px" }, onClick: () => setContentsView("list"), children: "← 목록" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1376,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: content.id ? "콘텐츠 편집" : "새 콘텐츠" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1379,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1375,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: /* @__PURE__ */ jsxDEV(
          "input",
          {
            style: { ...styles.input, fontSize: 16, fontWeight: 600, border: "none", padding: "4px 0", background: "transparent", boxSizing: "border-box" },
            placeholder: "제목을 입력하세요 (예: 신제품 런칭 공지)",
            value: content.title,
            onChange: (e) => updateContent("title", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1384,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1383,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", marginBottom: 14 }, children: /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "✍️ 마스터 글 & AI 작성 도구" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1395,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1394,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }, children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#94a3b8", marginBottom: 8 }, children: "원본 내용을 자유롭게 작성하세요. 이걸 기반으로 각 SNS용 초안을 자동 생성할 수 있습니다." }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1400,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  style: { ...styles.textarea, minHeight: 180 },
                  placeholder: "블로그 포스트, 보도자료, 제품 설명 등 어떤 형태든 괜찮습니다.",
                  value: content.masterText,
                  onChange: (e) => updateContent("masterText", e.target.value)
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1401,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1399,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, color: "#374151" }, children: "🔗 AI 작성 도구 바로가기" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1411,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    style: { ...styles.btnSm(aiToolEditMode === "add"), fontSize: 11 },
                    onClick: () => {
                      if (aiToolEditMode === "add") {
                        setAiToolEditMode(null);
                      } else {
                        setAiToolEditMode("add");
                        setAiToolEditData({ icon: "🔧", label: "", url: "", desc: "" });
                      }
                    },
                    children: aiToolEditMode === "add" ? "취소" : "+ 추가"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1412,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1410,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#94a3b8", marginBottom: 10 }, children: "외부 AI 도구에서 글·이미지·영상을 만들고 아래 SNS 카드에 붙여넣으세요." }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1422,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: aiToolEditMode !== null ? 14 : 0 }, children: aiTools.map(
                (tool, i) => /* @__PURE__ */ jsxDEV("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ jsxDEV(
                    "a",
                    {
                      href: tool.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 12px",
                        paddingRight: 40,
                        borderRadius: 8,
                        background: aiToolEditMode === i ? "#ede9fe" : "#f8fafc",
                        border: `1px solid ${aiToolEditMode === i ? "#c7d2fe" : "#e8eaf0"}`,
                        textDecoration: "none",
                        color: "#374151",
                        fontSize: 12,
                        fontWeight: 500,
                        transition: "all 0.15s"
                      },
                      onMouseEnter: (e) => {
                        if (aiToolEditMode !== i) e.currentTarget.style.background = "#f1f5f9";
                      },
                      onMouseLeave: (e) => {
                        if (aiToolEditMode !== i) e.currentTarget.style.background = "#f8fafc";
                      },
                      children: [
                        /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18, flexShrink: 0 }, children: tool.icon }, void 0, false, {
                          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                          lineNumber: 1441,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, minWidth: 0 }, children: [
                          /* @__PURE__ */ jsxDEV("div", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: tool.label }, void 0, false, {
                            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                            lineNumber: 1443,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#94a3b8", marginTop: 1 }, children: tool.desc }, void 0, false, {
                            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                            lineNumber: 1444,
                            columnNumber: 27
                          }, this)
                        ] }, void 0, true, {
                          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                          lineNumber: 1442,
                          columnNumber: 25
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1426,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      style: { position: "absolute", top: 8, right: 6, padding: "2px 5px", fontSize: 10, borderRadius: 4, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", color: "#6366f1" },
                      onClick: (e) => {
                        e.preventDefault();
                        setAiToolEditMode(i);
                        setAiToolEditData({ ...tool });
                      },
                      children: "수정"
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1447,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, i, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1425,
                  columnNumber: 19
                }, this)
              ) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1423,
                columnNumber: 17
              }, this),
              aiToolEditMode !== null && /* @__PURE__ */ jsxDEV("div", { style: { padding: 14, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }, children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, marginBottom: 12 }, children: aiToolEditMode === "add" ? "도구 추가" : "도구 수정" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1456,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "80px 1fr", gap: 8, marginBottom: 8 }, children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b", marginBottom: 3 }, children: "이모지" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1461,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        style: { ...styles.input, textAlign: "center", fontSize: 20, padding: "6px" },
                        placeholder: "🔧",
                        value: aiToolEditData.icon,
                        onChange: (e) => setAiToolEditData((prev) => ({ ...prev, icon: e.target.value }))
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 1462,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1460,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b", marginBottom: 3 }, children: "서비스명" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1470,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        style: styles.input,
                        placeholder: "예: ChatGPT로 작성",
                        value: aiToolEditData.label,
                        onChange: (e) => setAiToolEditData((prev) => ({ ...prev, label: e.target.value }))
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 1471,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1469,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1459,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 8 }, children: [
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b", marginBottom: 3 }, children: "이동 링크 (URL)" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1480,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      style: styles.input,
                      placeholder: "https://...",
                      value: aiToolEditData.url,
                      onChange: (e) => setAiToolEditData((prev) => ({ ...prev, url: e.target.value }))
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1481,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1479,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b", marginBottom: 3 }, children: "서비스 설명" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1489,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      style: styles.input,
                      placeholder: "예: 내 GPTs 활용",
                      value: aiToolEditData.desc,
                      onChange: (e) => setAiToolEditData((prev) => ({ ...prev, desc: e.target.value }))
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1490,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1488,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, justifyContent: "space-between" }, children: [
                  /* @__PURE__ */ jsxDEV("div", { children: aiToolEditMode !== "add" && /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      style: { ...styles.btnSm(false), color: "#ef4444", borderColor: "#fecaca" },
                      onClick: () => {
                        deleteAiTool(aiToolEditMode);
                        setAiToolEditMode(null);
                      },
                      children: "삭제"
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1500,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1498,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6 }, children: [
                    /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(false), onClick: () => setAiToolEditMode(null), children: "취소" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1507,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(true), onClick: saveAiTool, children: "저장" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1508,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1506,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1497,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1455,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1409,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1397,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1393,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", marginBottom: 14 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "✨ 초안 자동 생성" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1520,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#94a3b8", marginLeft: 8 }, children: "마스터 글을 기반으로 각 SNS에 맞는 초안을 자동으로 작성합니다." }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1521,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1519,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "280px 1fr", gap: 0, alignItems: "stretch", border: "1px solid #e8eaf0", borderRadius: 10, overflow: "hidden" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { borderRight: "1px solid #e8eaf0", background: "#f8fafc" }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 14px", borderBottom: "1px solid #e8eaf0" }, children: /* @__PURE__ */ jsxDEV(
                "button",
                {
                  style: {
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "1px dashed #c7d2fe",
                    background: selectedPromptId === "new" ? "#ede9fe" : "#fff",
                    color: "#6366f1",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6
                  },
                  onClick: () => {
                    setSelectedPromptId("new");
                    setDraftPromptEdit({ title: "", content: "" });
                  },
                  children: "+ 새 프롬프트 만들기"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1528,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1527,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { overflowY: "auto", maxHeight: 340 }, children: draftPrompts.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { padding: "24px 14px", fontSize: 11, color: "#94a3b8", textAlign: "center" }, children: "저장된 프롬프트가 없습니다." }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1542,
                columnNumber: 19
              }, this) : draftPrompts.map(
                (p) => /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    onClick: () => {
                      setSelectedPromptId(p.id);
                      setDraftPromptEdit({ title: p.title, content: p.content });
                    },
                    style: {
                      padding: "12px 14px",
                      cursor: "pointer",
                      borderBottom: "1px solid #e8eaf0",
                      background: selectedPromptId === p.id ? "#ede9fe" : "transparent",
                      borderLeft: selectedPromptId === p.id ? "3px solid #6366f1" : "3px solid transparent",
                      transition: "all 0.12s"
                    },
                    onMouseEnter: (e) => {
                      if (selectedPromptId !== p.id) e.currentTarget.style.background = "#f1f5f9";
                    },
                    onMouseLeave: (e) => {
                      if (selectedPromptId !== p.id) e.currentTarget.style.background = "transparent";
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 600, color: selectedPromptId === p.id ? "#4f46e5" : "#374151", marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: p.title }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 1559,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: p.content }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 1560,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  p.id,
                  true,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1547,
                    columnNumber: 19
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1540,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1526,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { padding: 20 }, children: selectedPromptId === null ? /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 200, color: "#94a3b8", fontSize: 13 }, children: "왼쪽에서 프롬프트를 선택하거나 새로 만드세요." }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1570,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }, children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151" }, children: selectedPromptId === "new" ? "새 프롬프트" : "프롬프트 수정" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1577,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 } }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1580,
                  columnNumber: 23
                }, this),
                selectedPromptId !== "new" && /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    style: { ...styles.btnSm(false), color: "#ef4444", borderColor: "#fecaca", fontSize: 11 },
                    onClick: () => {
                      const updated = draftPrompts.filter((x) => x.id !== selectedPromptId);
                      saveDraftPromptsToDb(updated);
                      if (updated.length > 0) {
                        setSelectedPromptId(updated[0].id);
                        setDraftPromptEdit({ title: updated[0].title, content: updated[0].content });
                      } else {
                        setSelectedPromptId("new");
                        setDraftPromptEdit({ title: "", content: "" });
                      }
                    },
                    children: "삭제"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1582,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    style: { ...styles.btnSm(true), fontSize: 11 },
                    onClick: async () => {
                      if (!draftPromptEdit.title.trim()) {
                        alert("프롬프트 제목을 입력해주세요.");
                        return;
                      }
                      if (!draftPromptEdit.content.trim()) {
                        alert("프롬프트 내용을 입력해주세요.");
                        return;
                      }
                      let updated;
                      let savedId;
                      if (selectedPromptId === "new") {
                        savedId = Date.now();
                        updated = [...draftPrompts, { id: savedId, title: draftPromptEdit.title.trim(), content: draftPromptEdit.content.trim() }];
                      } else {
                        savedId = selectedPromptId;
                        updated = draftPrompts.map((x) => x.id === selectedPromptId ? { ...x, title: draftPromptEdit.title.trim(), content: draftPromptEdit.content.trim() } : x);
                      }
                      try {
                        await saveDraftPromptsToDb(updated);
                        setSelectedPromptId(savedId);
                        alert("프롬프트가 저장되었습니다.");
                      } catch (e) {
                        alert(`저장 실패: ${e.message}`);
                      }
                    },
                    children: "💾 저장"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1592,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1576,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "프롬프트 제목" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1624,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  style: { ...styles.input, marginBottom: 12 },
                  placeholder: "예: 기본 SNS 최적화",
                  value: draftPromptEdit.title,
                  onChange: (e) => setDraftPromptEdit((prev) => ({ ...prev, title: e.target.value }))
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1625,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "프롬프트 내용" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1631,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  style: { ...styles.textarea, minHeight: 90, fontSize: 12, marginBottom: 16 },
                  placeholder: "각 SNS 플랫폼의 특성에 맞게 최적화해주세요...",
                  value: draftPromptEdit.content,
                  onChange: (e) => setDraftPromptEdit((prev) => ({ ...prev, content: e.target.value }))
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1632,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { style: { borderTop: "1px solid #f1f5f9", marginBottom: 14 } }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1640,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 8 }, children: "생성할 플랫폼 선택" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1643,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }, children: draftPlatformOrder.map(
                (p) => /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setDraftGenPlatforms(
                      (prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
                    ),
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11,
                      fontWeight: 600,
                      background: draftGenPlatforms.includes(p) ? PLATFORMS[p].color : "#f1f5f9",
                      color: draftGenPlatforms.includes(p) ? "#fff" : "#94a3b8",
                      transition: "all 0.15s"
                    },
                    children: [
                      PLATFORMS[p].icon,
                      " ",
                      PLATFORMS[p].name
                    ]
                  },
                  p,
                  true,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1646,
                    columnNumber: 21
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1644,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  style: {
                    ...styles.btn(true),
                    width: "100%",
                    justifyContent: "center",
                    background: isDraftGenerating ? "#94a3b8" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    borderColor: "transparent",
                    opacity: isDraftGenerating ? 0.8 : 1,
                    pointerEvents: isDraftGenerating ? "none" : "auto"
                  },
                  onClick: handleDraftGenerate,
                  children: isDraftGenerating ? "✨ 생성 중..." : "✨ 초안 생성하기"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1666,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1574,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1568,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1523,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1518,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "📱 SNS 별 글쓰기 및 발행" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1685,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8" }, children: "⠿ 드래그로 순서 변경 · 자동 저장" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1686,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1684,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14, padding: "10px 12px", background: "#f8fafc", borderRadius: 8, border: "1px solid #e8eaf0" }, children: draftPlatformOrder.map(
            (p) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => togglePlatform(p),
                style: {
                  ...styles.btnSm(content.platforms.includes(p)),
                  background: content.platforms.includes(p) ? PLATFORMS[p].color : "#fff",
                  color: content.platforms.includes(p) ? "#fff" : "#64748b",
                  border: `1px solid ${content.platforms.includes(p) ? PLATFORMS[p].color : "#d1d5db"}`,
                  fontSize: 12
                },
                children: [
                  PLATFORMS[p].icon,
                  " ",
                  PLATFORMS[p].name
                ]
              },
              p,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1691,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1689,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#94a3b8", marginBottom: 16 }, children: "각 SNS에 맞는 글을 작성하고 발행 여부를 체크하세요." }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1706,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }, children: draftPlatformOrder.map(
            (p) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                draggable: true,
                onDragStart: () => handleDraftDragStart(p),
                onDragOver: handleDraftDragOver,
                onDrop: () => handleDraftDrop(p),
                style: {
                  borderRadius: 10,
                  border: `1px solid ${content.platforms.includes(p) ? PLATFORMS[p].color + "50" : "#e8eaf0"}`,
                  overflow: "hidden",
                  opacity: content.platforms.includes(p) ? 1 : 0.55,
                  transition: "opacity 0.15s, border-color 0.15s"
                },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "9px 12px",
                    background: content.platforms.includes(p) ? `linear-gradient(135deg, ${PLATFORMS[p].color}14, ${PLATFORMS[p].color}06)` : "#f8fafc",
                    borderBottom: `1px solid ${PLATFORMS[p].color}15`,
                    cursor: "grab",
                    userSelect: "none"
                  }, children: [
                    /* @__PURE__ */ jsxDEV("span", { style: { color: "#b0b8c8", fontSize: 14 }, children: "⠿" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1732,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 15 }, children: PLATFORMS[p].icon }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1733,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 700, color: "#1a1a2e" }, children: PLATFORMS[p].name }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1734,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }, children: [
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "checkbox",
                          id: `card-include-${p}`,
                          checked: content.platforms.includes(p),
                          onChange: () => togglePlatform(p),
                          style: { width: 13, height: 13, accentColor: PLATFORMS[p].color, cursor: "pointer" },
                          onClick: (e) => e.stopPropagation()
                        },
                        void 0,
                        false,
                        {
                          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                          lineNumber: 1736,
                          columnNumber: 23
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV("label", { htmlFor: `card-include-${p}`, style: { fontSize: 11, color: "#64748b", cursor: "pointer" }, children: "발행" }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 1744,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1735,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1723,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { padding: "10px 12px", background: "#fff" }, children: [
                    /* @__PURE__ */ jsxDEV(
                      "textarea",
                      {
                        style: { ...styles.textarea, minHeight: 120, fontSize: 12, border: "none", padding: 0, background: "transparent", resize: "vertical" },
                        placeholder: `${PLATFORMS[p].name}용 글을 입력하세요...`,
                        value: content.platformDrafts[p] || "",
                        onChange: (e) => updateDraft(p, e.target.value)
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 1748,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#cbd5e1", textAlign: "right", marginTop: 4 }, children: [
                      (content.platformDrafts[p] || "").length,
                      "자"
                    ] }, void 0, true, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1754,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1747,
                    columnNumber: 19
                  }, this)
                ]
              },
              p,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1709,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1707,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1683,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
          /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "📤 발행 유형" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1765,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 10, marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                onClick: () => setPublishMode("now"),
                style: {
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 10,
                  cursor: "pointer",
                  border: `2px solid ${publishMode === "now" ? "#6366f1" : "#e2e8f0"}`,
                  background: publishMode === "now" ? "#eef2ff" : "#f8fafc",
                  transition: "all 0.15s"
                },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }, children: [
                    /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18 }, children: "📤" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1778,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 700, color: publishMode === "now" ? "#6366f1" : "#374151" }, children: "즉시 발행" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1779,
                      columnNumber: 19
                    }, this),
                    publishMode === "now" && /* @__PURE__ */ jsxDEV("span", { style: { marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#6366f1", display: "inline-block" } }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1780,
                      columnNumber: 45
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1777,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8" }, children: "저장과 동시에 SNS에 바로 게시합니다" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1782,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1768,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                onClick: () => setPublishMode("schedule"),
                style: {
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 10,
                  cursor: "pointer",
                  border: `2px solid ${publishMode === "schedule" ? "#f59e0b" : "#e2e8f0"}`,
                  background: publishMode === "schedule" ? "#fffbeb" : "#f8fafc",
                  transition: "all 0.15s"
                },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }, children: [
                    /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18 }, children: "🕐" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1795,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 700, color: publishMode === "schedule" ? "#d97706" : "#374151" }, children: "예약 발행" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1796,
                      columnNumber: 19
                    }, this),
                    publishMode === "schedule" && /* @__PURE__ */ jsxDEV("span", { style: { marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", display: "inline-block" } }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1797,
                      columnNumber: 50
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1794,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8" }, children: "지정한 날짜·시간에 자동으로 게시합니다" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1799,
                    columnNumber: 17
                  }, this),
                  publishMode === "schedule" && /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      type: "datetime-local",
                      style: { ...styles.input, marginTop: 10, fontSize: 12 },
                      value: content.scheduledAt ? content.scheduledAt.replace(" ", "T") : "",
                      onChange: (e) => updateContent("scheduledAt", e.target.value.replace("T", " ")),
                      onClick: (e) => e.stopPropagation()
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 1801,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1785,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1766,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, paddingTop: 16, borderTop: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ jsxDEV("button", { style: styles.btn(false), onClick: () => setContentsView("list"), children: "취소" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1812,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("button", { style: styles.btn(false), onClick: () => handleSaveContent("draft"), children: [
              /* @__PURE__ */ jsxDEV(Icons.Download, {}, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1814,
                columnNumber: 17
              }, this),
              " 초안 저장"
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1813,
              columnNumber: 15
            }, this),
            publishMode === "now" ? /* @__PURE__ */ jsxDEV(
              "button",
              {
                style: { ...styles.btn(true), background: "#6366f1", borderColor: "#6366f1" },
                onClick: () => handleSaveContent("published"),
                children: [
                  /* @__PURE__ */ jsxDEV(Icons.Send, {}, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1821,
                    columnNumber: 19
                  }, this),
                  " 지금 발행"
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1817,
                columnNumber: 15
              },
              this
            ) : /* @__PURE__ */ jsxDEV(
              "button",
              {
                style: { ...styles.btn(true), background: "#f59e0b", borderColor: "#f59e0b" },
                onClick: () => handleSaveContent("scheduled"),
                children: [
                  /* @__PURE__ */ jsxDEV(Icons.Clock, {}, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1828,
                    columnNumber: 19
                  }, this),
                  " 예약 등록"
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1824,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1811,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1764,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1373,
        columnNumber: 9
      }, this);
    }
    const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
    const getFirstDayOfMonth = (y, m) => new Date(y, m, 1).getDay();
    const MONTH_NAMES = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];
    const handleCalPrev = () => {
      if (contentsCalView === "year") {
        setContentsCalYear((y) => y - 1);
        return;
      }
      if (contentsCalView === "day") {
        const d = new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay - 1);
        setContentsCalYear(d.getFullYear());
        setContentsCalMonth(d.getMonth());
        setContentsCalSelectedDay(d.getDate());
        return;
      }
      if (contentsCalView === "week") {
        const d = new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay - 7);
        setContentsCalYear(d.getFullYear());
        setContentsCalMonth(d.getMonth());
        setContentsCalSelectedDay(d.getDate());
        return;
      }
      if (contentsCalMonth === 0) {
        setContentsCalYear((y) => y - 1);
        setContentsCalMonth(11);
      } else
        setContentsCalMonth((m) => m - 1);
    };
    const handleCalNext = () => {
      if (contentsCalView === "year") {
        setContentsCalYear((y) => y + 1);
        return;
      }
      if (contentsCalView === "day") {
        const d = new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay + 1);
        setContentsCalYear(d.getFullYear());
        setContentsCalMonth(d.getMonth());
        setContentsCalSelectedDay(d.getDate());
        return;
      }
      if (contentsCalView === "week") {
        const d = new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay + 7);
        setContentsCalYear(d.getFullYear());
        setContentsCalMonth(d.getMonth());
        setContentsCalSelectedDay(d.getDate());
        return;
      }
      if (contentsCalMonth === 11) {
        setContentsCalYear((y) => y + 1);
        setContentsCalMonth(0);
      } else
        setContentsCalMonth((m) => m + 1);
    };
    const handleCalToday = () => {
      setContentsCalYear(2026);
      setContentsCalMonth(2);
      setContentsCalSelectedDay(22);
    };
    const getPostsForDate = (dateStr) => contentsList.filter((c) => {
      const matchDate = c.firstPublishedAt?.startsWith(dateStr) || !c.firstPublishedAt && c.scheduledAt?.startsWith(dateStr);
      return matchDate && c.platforms.some((p) => contentsCalPlatforms.includes(p));
    });
    const buildMonthGrid = () => {
      const firstDay = getFirstDayOfMonth(contentsCalYear, contentsCalMonth);
      const daysCount = getDaysInMonth(contentsCalYear, contentsCalMonth);
      const weeks = [];
      let days = Array(firstDay).fill(null);
      for (let d = 1; d <= daysCount; d++) {
        days.push(d);
        if (days.length === 7) {
          weeks.push(days);
          days = [];
        }
      }
      if (days.length) {
        while (days.length < 7) days.push(null);
        weeks.push(days);
      }
      return weeks;
    };
    const STATUS_FILTER_OPTIONS = [
      { key: "draft", label: "초안" },
      { key: "scheduled", label: "예약" },
      { key: "published", label: "발행완료" }
    ];
    const togglePlatformFilter = (k) => setSearchPlatforms((prev) => prev.includes(k) ? prev.filter((p) => p !== k) : [...prev, k]);
    const toggleStatusFilter = (k) => setSearchStatuses((prev) => prev.includes(k) ? prev.filter((s) => s !== k) : [...prev, k]);
    const { title: af_title, platforms: af_platforms, statuses: af_statuses, regDate: af_regDate, pubDate: af_pubDate, registrant: af_registrant } = appliedSearch;
    const filtered = contentsList.filter((c) => {
      if (af_title && !c.title.toLowerCase().includes(af_title.toLowerCase())) return false;
      const allSelected = ALL_PLATFORMS.every((p) => af_platforms.includes(p));
      if (!allSelected && !c.platforms.some((p) => af_platforms.includes(p))) return false;
      if (af_statuses.length > 0 && !af_statuses.includes(c.status)) return false;
      if (af_registrant && !(c.registrant || "").toLowerCase().includes(af_registrant.toLowerCase())) return false;
      if (af_regDate && !(c.firstPublishedAt || "").startsWith(af_regDate)) return false;
      if (af_pubDate && !(c.updatedAt || "").startsWith(af_pubDate)) return false;
      return true;
    });
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "콘텐츠 관리" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1915,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "콘텐츠를 작성하고, 각 SNS에 맞게 편집하고, 예약·즉시 발행하세요" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1916,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1914,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            style: { ...styles.btn(true), padding: "10px 20px", fontSize: 14 },
            onClick: () => {
              const blank = { id: null, title: "", masterText: "", status: "draft", scheduledAt: null, registrant: "나", registeredAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), platforms: ["twitter", "youtube", "facebook", "instagram", "threads"], platformDrafts: { twitter: "", youtube: "", facebook: "", instagram: "", threads: "" } };
              setEditingContent(blank);
              setContentEditTab("twitter");
              setPublishMode("now");
              setContentsView("edit");
            },
            children: [
              /* @__PURE__ */ jsxDEV(Icons.Plus, {}, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1923,
                columnNumber: 13
              }, this),
              " 새 콘텐츠"
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1918,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1913,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.cardTitle, marginBottom: 16 }, children: "검색 조건" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1929,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 12, marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "제목" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1933,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("input", { style: styles.input, placeholder: "제목 검색...", value: searchTitle, onChange: (e) => setSearchTitle(e.target.value) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1934,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1932,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "최초 발행일" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1937,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("input", { type: "date", style: { ...styles.input, fontSize: 12 }, value: searchRegDate, onChange: (e) => setSearchRegDate(e.target.value) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1938,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1936,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "수정일" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1941,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("input", { type: "date", style: { ...styles.input, fontSize: 12 }, value: searchPubDate, onChange: (e) => setSearchPubDate(e.target.value) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1942,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1940,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "등록자" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1945,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("input", { style: styles.input, placeholder: "등록자 검색...", value: searchRegistrant, onChange: (e) => setSearchRegistrant(e.target.value) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1946,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1944,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1931,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 8 }, children: "플랫폼" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1951,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: Object.entries(PLATFORMS).map(([k, v]) => {
            const on = searchPlatforms.includes(k);
            return /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => togglePlatformFilter(k),
                style: { display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", border: `1px solid ${on ? v.color : "#d1d5db"}`, background: on ? v.color : "#fff", color: on ? "#fff" : "#374151", transition: "all 0.15s" },
                children: [
                  v.icon,
                  " ",
                  v.name
                ]
              },
              k,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1956,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1952,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1950,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 8 }, children: "상태" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1966,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxDEV("label", { style: { display: "flex", alignItems: "center", gap: 6, cursor: "pointer", userSelect: "none" }, children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "checkbox",
                  checked: searchStatuses.length === 0,
                  onChange: () => setSearchStatuses([]),
                  style: { width: 14, height: 14, accentColor: "#6366f1", cursor: "pointer" }
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1969,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 500, color: searchStatuses.length === 0 ? "#6366f1" : "#374151" }, children: "전체" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1971,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1968,
              columnNumber: 15
            }, this),
            STATUS_FILTER_OPTIONS.map(
              (o) => /* @__PURE__ */ jsxDEV("label", { style: { display: "flex", alignItems: "center", gap: 6, cursor: "pointer", userSelect: "none" }, children: [
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "checkbox",
                    checked: searchStatuses.includes(o.key),
                    onChange: () => toggleStatusFilter(o.key),
                    style: { width: 14, height: 14, accentColor: STATUS_COLORS[o.key], cursor: "pointer" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 1975,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 500, color: searchStatuses.includes(o.key) ? STATUS_COLORS[o.key] : "#374151" }, children: o.label }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 1977,
                  columnNumber: 19
                }, this)
              ] }, o.key, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 1974,
                columnNumber: 15
              }, this)
            )
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1967,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1965,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, paddingTop: 12, borderTop: "1px solid #f1f5f9" }, children: [
          /* @__PURE__ */ jsxDEV("button", { style: styles.btn(false), onClick: () => {
            setSearchTitle("");
            setSearchPlatforms(ALL_PLATFORMS);
            setSearchStatuses([]);
            setSearchRegDate("");
            setSearchPubDate("");
            setSearchRegistrant("");
            setAppliedSearch({ title: "", platforms: ALL_PLATFORMS, statuses: [], regDate: "", pubDate: "", registrant: "" });
          }, children: "초기화" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1984,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { style: styles.btn(true), onClick: () => {
            setAppliedSearch({ title: searchTitle, platforms: searchPlatforms, statuses: searchStatuses, regDate: searchRegDate, pubDate: searchPubDate, registrant: searchRegistrant });
          }, children: [
            /* @__PURE__ */ jsxDEV(Icons.Search, {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 1993,
              columnNumber: 15
            }, this),
            " 검색"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 1990,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 1983,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1928,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.cardTitle, marginBottom: 16 }, children: "콘텐츠 목록" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2e3,
          columnNumber: 11
        }, this),
        filtered.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "48px 0", color: "#94a3b8" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 40, marginBottom: 12 }, children: "📝" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2003,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14 }, children: "콘텐츠가 없습니다" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2004,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, marginTop: 4 }, children: "검색 조건을 변경하거나 [+ 새 콘텐츠]로 시작하세요" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2005,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2002,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 12 }, children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { style: { borderBottom: "2px solid #e8eaf0" }, children: ["No", "제목", "플랫폼", "등록자", "최초 발행일", "수정일", "상태", "관리"].map(
            (h) => /* @__PURE__ */ jsxDEV("th", { style: { padding: "10px 12px", textAlign: h === "관리" ? "center" : "left", fontSize: 11, fontWeight: 600, color: "#94a3b8", whiteSpace: "nowrap", textTransform: "uppercase" }, children: h }, h, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2013,
              columnNumber: 19
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2011,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2010,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: filtered.map(
            (content, i) => /* @__PURE__ */ jsxDEV(
              "tr",
              {
                style: { borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none" },
                onMouseEnter: (e) => e.currentTarget.style.background = "#fafbfd",
                onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
                children: [
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", color: "#94a3b8", whiteSpace: "nowrap" }, children: i + 1 }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2024,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", maxWidth: 260 }, children: [
                    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 2 }, children: content.title || "(제목 없음)" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2026,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: content.masterText ? content.masterText.slice(0, 55) + "..." : "마스터 글 없음" }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2027,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2025,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", whiteSpace: "nowrap" }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 2 }, children: content.platforms.map((p) => /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 15 }, title: PLATFORMS[p].name, children: PLATFORMS[p].icon }, p, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2033,
                    columnNumber: 57
                  }, this)) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2032,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2031,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", color: "#64748b", whiteSpace: "nowrap" }, children: content.registrant || "-" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2036,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", color: "#64748b", whiteSpace: "nowrap" }, children: content.firstPublishedAt ? content.firstPublishedAt.slice(0, 16) : /* @__PURE__ */ jsxDEV("span", { style: { color: "#cbd5e1" }, children: "-" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2038,
                    columnNumber: 93
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2037,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", color: "#64748b", whiteSpace: "nowrap" }, children: content.updatedAt ? content.updatedAt.slice(0, 16) : /* @__PURE__ */ jsxDEV("span", { style: { color: "#cbd5e1" }, children: "-" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2041,
                    columnNumber: 79
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2040,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 12px", whiteSpace: "nowrap" }, children: /* @__PURE__ */ jsxDEV("span", { style: styles.badge(STATUS_COLORS[content.status]), children: STATUS_LABELS[content.status] }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2044,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2043,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px", whiteSpace: "nowrap" }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 4, justifyContent: "center" }, children: [
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        style: { ...styles.btnSm(false), fontSize: 11, padding: "4px 8px" },
                        onClick: () => {
                          setEditingContent({ ...content });
                          setContentEditTab("twitter");
                          setPublishMode(content.scheduledAt ? "schedule" : "now");
                          setContentsView("edit");
                        },
                        children: "편집"
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2048,
                        columnNumber: 27
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        style: { ...styles.btnSm(false), fontSize: 11, padding: "4px 8px", color: "#ef4444", borderColor: "#fecaca" },
                        onClick: async () => {
                          if (window.confirm(`"${content.title || "(제목 없음)"}"을(를) 삭제하시겠습니까?`)) {
                            const { error } = await supabase.from("contents").delete().eq("id", content.id);
                            if (error) {
                              alert("삭제 오류: " + error.message);
                              return;
                            }
                            setContentsList((prev) => prev.filter((c) => c.id !== content.id));
                          }
                        },
                        children: "삭제"
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2052,
                        columnNumber: 27
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        style: { ...styles.btnSm(false), fontSize: 11, padding: "4px 8px", background: "#6366f1", color: "#fff", border: "none" },
                        onClick: async () => {
                          if (content.platforms?.includes("twitter") && content.platformDrafts?.twitter?.trim()) {
                            try {
                              const { data, error: error2 } = await supabase.functions.invoke("post-x", {
                                body: { text: content.platformDrafts.twitter }
                              });
                              if (error2) throw new Error(error2.message);
                              if (data?.success) {
                                alert(`✅ X 발행 완료!
${data.url}`);
                              } else {
                                alert(`❌ X 발행 실패: ${data?.error}`);
                                return;
                              }
                            } catch (e) {
                              alert(`❌ X 발행 오류: ${e.message}`);
                              return;
                            }
                          }
                          const now = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16);
                          const updateFields = { status: "published" };
                          if (!content.firstPublishedAt) updateFields.first_published_at = now;
                          else
                            updateFields.updated_at = now;
                          const { error } = await supabase.from("contents").update(updateFields).eq("id", content.id);
                          if (error) {
                            alert("발행 상태 저장 오류: " + error.message);
                            return;
                          }
                          const updated = { ...content, status: "published", firstPublishedAt: content.firstPublishedAt || now, updatedAt: content.firstPublishedAt ? now : content.updatedAt };
                          setContentsList((prev) => prev.map((c) => c.id === content.id ? updated : c));
                        },
                        children: "즉시발행"
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2062,
                        columnNumber: 27
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2047,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2046,
                    columnNumber: 23
                  }, this)
                ]
              },
              content.id,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2019,
                columnNumber: 17
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2017,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2009,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2008,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 1999,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { ...styles.cardTitle, marginBottom: 0 }, children: "캘린더" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0 10px", borderBottom: "1px solid #f1f5f9" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 22, fontWeight: 700, color: "#1a1a2e", minWidth: 130 }, children: contentsCalView === "year" ? `${contentsCalYear}년` : `${contentsCalYear}년 ${MONTH_NAMES[contentsCalMonth]}` }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2111,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 3 }, children: [
              /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btnSm(false), padding: "5px 9px", fontSize: 16, lineHeight: 1 }, onClick: handleCalPrev, children: "‹" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2115,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btnSm(false), padding: "5px 11px", fontSize: 12 }, onClick: handleCalToday, children: "오늘" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2116,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btnSm(false), padding: "5px 9px", fontSize: 16, lineHeight: 1 }, onClick: handleCalNext, children: "›" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2117,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2114,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2110,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 3, background: "#f1f5f9", borderRadius: 8, padding: 3 }, children: [{ key: "day", label: "일" }, { key: "week", label: "주" }, { key: "month", label: "월" }, { key: "year", label: "연" }].map(
            (v) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => setContentsCalView(v.key),
                style: { padding: "5px 14px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, background: contentsCalView === v.key ? "#fff" : "transparent", color: contentsCalView === v.key ? "#6366f1" : "#64748b", boxShadow: contentsCalView === v.key ? "0 1px 3px #0000001a" : "none", transition: "all 0.15s" },
                children: v.label
              },
              v.key,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2123,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2121,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", padding: "10px 0 14px" }, children: [
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 600, color: "#94a3b8", marginRight: 2 }, children: "SNS:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2133,
            columnNumber: 13
          }, this),
          Object.entries(PLATFORMS).map(([k, v]) => {
            const on = contentsCalPlatforms.includes(k);
            return /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => setContentsCalPlatforms((prev) => on ? prev.filter((p) => p !== k) : [...prev, k]),
                style: { display: "flex", alignItems: "center", gap: 5, padding: "4px 11px", borderRadius: 100, fontSize: 11, fontWeight: 600, border: `1px solid ${on ? v.color : "#d1d5db"}`, cursor: "pointer", background: on ? v.color : "#fff", color: on ? "#fff" : "#374151", transition: "all 0.15s" },
                children: [
                  v.icon,
                  " ",
                  v.name
                ]
              },
              k,
              true,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2137,
                columnNumber: 17
              },
              this
            );
          })
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2132,
          columnNumber: 11
        }, this),
        contentsCalView === "month" && (() => {
          const weeks = buildMonthGrid();
          return /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", borderBottom: "1px solid #f1f5f9", marginBottom: 2 }, children: DAY_NAMES.map(
              (d, i) => /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", fontSize: 11, fontWeight: 600, padding: "6px 0", color: i === 0 ? "#ef4444" : i === 6 ? "#6366f1" : "#94a3b8" }, children: d }, d, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2153,
                columnNumber: 19
              }, this)
            ) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2151,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }, children: weeks.flat().map((day, idx) => {
              const dateStr = day ? `${contentsCalYear}-${String(contentsCalMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : null;
              const posts = dateStr ? getPostsForDate(dateStr) : [];
              const isToday = dateStr === "2026-03-22";
              const isSelected = day === contentsCalSelectedDay;
              const dow = idx % 7;
              return /* @__PURE__ */ jsxDEV(
                "div",
                {
                  onClick: () => {
                    if (day) setContentsCalSelectedDay(day);
                  },
                  style: { minHeight: 84, padding: "6px 8px", background: isToday ? "#ede9fe" : isSelected ? "#f8f7ff" : "#fafbfd", border: `1.5px solid ${isToday ? "#818cf8" : isSelected ? "#a5b4fc" : "#e8eaf0"}`, borderRadius: 6, opacity: day ? 1 : 0.15, cursor: day ? "pointer" : "default", transition: "border-color 0.1s" },
                  children: day && /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: isToday ? 700 : 400, color: isToday ? "#6366f1" : dow === 0 ? "#ef4444" : dow === 6 ? "#818cf8" : "#374151", marginBottom: 3 }, children: day }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2168,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
                      posts.slice(0, 3).map((post, pi) => {
                        const p = post.platforms.find((pl) => contentsCalPlatforms.includes(pl)) || post.platforms[0];
                        return /* @__PURE__ */ jsxDEV(
                          "div",
                          {
                            title: post.title,
                            onClick: (e) => {
                              e.stopPropagation();
                              setEditingContent({ ...post });
                              setContentEditTab("twitter");
                              setPublishMode("schedule");
                              setContentsView("edit");
                            },
                            style: { fontSize: 10, padding: "2px 5px", borderRadius: 3, background: PLATFORMS[p]?.color + "20", color: PLATFORMS[p]?.color, borderLeft: `2px solid ${PLATFORMS[p]?.color}`, cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 500 },
                            children: [
                              PLATFORMS[p]?.icon,
                              " ",
                              post.title
                            ]
                          },
                          pi,
                          true,
                          {
                            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                            lineNumber: 2173,
                            columnNumber: 33
                          },
                          this
                        );
                      }),
                      posts.length > 3 && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#94a3b8" }, children: [
                        "+",
                        posts.length - 3,
                        "건"
                      ] }, void 0, true, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2180,
                        columnNumber: 50
                      }, this)
                    ] }, void 0, true, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2169,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2167,
                    columnNumber: 33
                  }, this)
                },
                idx,
                false,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2164,
                  columnNumber: 23
                },
                this
              );
            }) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2156,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2150,
            columnNumber: 15
          }, this);
        })(),
        contentsCalView === "week" && (() => {
          const selDate = new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay);
          const dowSel = selDate.getDay();
          return /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }, children: Array.from({ length: 7 }, (_, i) => {
            const d = new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay - dowSel + i);
            const ds = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
            const posts = getPostsForDate(ds);
            const isToday = ds === "2026-03-22";
            return /* @__PURE__ */ jsxDEV("div", { style: { minHeight: 160, padding: "8px", background: isToday ? "#ede9fe" : "#fafbfd", border: `1px solid ${isToday ? "#818cf8" : "#e8eaf0"}`, borderRadius: 6 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, marginBottom: 6, color: i === 0 ? "#ef4444" : i === 6 ? "#6366f1" : "#64748b" }, children: [
                DAY_NAMES[i],
                " ",
                d.getDate()
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2204,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: posts.map((post, pi) => {
                const p = post.platforms.find((pl) => contentsCalPlatforms.includes(pl)) || post.platforms[0];
                return /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    onClick: () => {
                      setEditingContent({ ...post });
                      setContentsView("edit");
                    },
                    style: { fontSize: 10, padding: "3px 6px", borderRadius: 4, background: PLATFORMS[p]?.color + "18", color: PLATFORMS[p]?.color, borderLeft: `3px solid ${PLATFORMS[p]?.color}`, cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                    children: [
                      PLATFORMS[p]?.icon,
                      " ",
                      post.title
                    ]
                  },
                  pi,
                  true,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2211,
                    columnNumber: 29
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2207,
                columnNumber: 23
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2203,
              columnNumber: 21
            }, this);
          }) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2196,
            columnNumber: 15
          }, this);
        })(),
        contentsCalView === "day" && (() => {
          const dateStr = `${contentsCalYear}-${String(contentsCalMonth + 1).padStart(2, "0")}-${String(contentsCalSelectedDay).padStart(2, "0")}`;
          const posts = getPostsForDate(dateStr);
          return /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", fontSize: 15, fontWeight: 700, color: "#374151", padding: "12px 0 16px" }, children: [
              contentsCalYear,
              "년 ",
              MONTH_NAMES[contentsCalMonth],
              " ",
              contentsCalSelectedDay,
              "일 (",
              DAY_NAMES[new Date(contentsCalYear, contentsCalMonth, contentsCalSelectedDay).getDay()],
              ")"
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2231,
              columnNumber: 17
            }, this),
            posts.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "32px 0", color: "#cbd5e1" }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 32, marginBottom: 8 }, children: "📅" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2236,
                columnNumber: 21
              }, this),
              "예약된 콘텐츠가 없습니다"
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2235,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: posts.map(
              (post, pi) => /* @__PURE__ */ jsxDEV(
                "div",
                {
                  onClick: () => {
                    setEditingContent({ ...post });
                    setContentsView("edit");
                  },
                  style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 8, background: "#f8fafc", border: "1px solid #e8eaf0", cursor: "pointer" },
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 4 }, children: post.platforms.map((p) => /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18 }, children: PLATFORMS[p]?.icon }, p, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2244,
                      columnNumber: 93
                    }, this)) }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2244,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
                      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600 }, children: post.title }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2246,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", marginTop: 2 }, children: post.scheduledAt }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2247,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2245,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { style: styles.badge(STATUS_COLORS[post.status]), children: STATUS_LABELS[post.status] }, void 0, false, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 2249,
                      columnNumber: 25
                    }, this)
                  ]
                },
                pi,
                true,
                {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2242,
                  columnNumber: 19
                },
                this
              )
            ) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2240,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2230,
            columnNumber: 15
          }, this);
        })(),
        contentsCalView === "year" && /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }, children: Array.from({ length: 12 }, (_, m) => {
          const cnt = contentsList.filter((c) => c.scheduledAt?.startsWith(`${contentsCalYear}-${String(m + 1).padStart(2, "0")}`)).length;
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              onClick: () => {
                setContentsCalMonth(m);
                setContentsCalView("month");
              },
              style: { padding: "16px", borderRadius: 8, background: "#fafbfd", border: "1px solid #e8eaf0", cursor: "pointer", textAlign: "center", transition: "all 0.15s" },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#ede9fe";
                e.currentTarget.style.borderColor = "#c7d2fe";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "#fafbfd";
                e.currentTarget.style.borderColor = "#e8eaf0";
              },
              children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }, children: MONTH_NAMES[m] }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2269,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 22, fontWeight: 700, color: cnt > 0 ? "#6366f1" : "#cbd5e1" }, children: cnt }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2270,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#94a3b8" }, children: "건" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2271,
                  columnNumber: 21
                }, this)
              ]
            },
            m,
            true,
            {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2264,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2260,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 1911,
      columnNumber: 7
    }, this);
  };
  const renderCreate = () => /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "콘텐츠 제작" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2287,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "원소스 멀티유즈 — 하나의 원본으로 모든 채널용 콘텐츠를 자동 생성합니다" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "✍️ 원본 콘텐츠 입력" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2291,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          style: styles.textarea,
          placeholder: "원본 글을 입력하세요. 블로그 포스트, 보도자료, 제품 설명 등 어떤 형태든 괜찮습니다. AI가 각 플랫폼에 최적화된 형태로 변환합니다.",
          value: multiUseInput,
          onChange: (e) => setMultiUseInput(e.target.value)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2292,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6 }, children: Object.entries(PLATFORMS).map(
          ([key, p]) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setSelectedPlatforms((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]),
              style: {
                ...styles.btnSm(selectedPlatforms.includes(key)),
                background: selectedPlatforms.includes(key) ? p.color : "#f1f5f9",
                color: selectedPlatforms.includes(key) ? "#fff" : "#64748b",
                border: "none"
              },
              children: [
                p.icon,
                " ",
                p.name
              ]
            },
            key,
            true,
            {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2301,
              columnNumber: 11
            },
            this
          )
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2299,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { style: styles.btn(true), onClick: handleGenerate, children: [
          /* @__PURE__ */ jsxDEV(Icons.Zap, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2316,
            columnNumber: 13
          }, this),
          " AI 변환하기"
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2315,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2298,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🎨 톤앤매너 프리셋" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2323,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: ["공식적 · 전문적", "친근한 · 유머러스", "감성적 · 스토리텔링", "간결한 · 팩트 중심", "+ 커스텀 추가"].map(
        (tone, i) => /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btnSm(i === 1), borderRadius: 100 }, children: tone }, i, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2326,
          columnNumber: 9
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2324,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2322,
      columnNumber: 7
    }, this),
    isGenerating && /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, textAlign: "center", padding: "48px 24px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "inline-flex", gap: 8, marginBottom: 16 }, children: [0, 1, 2].map(
        (i) => /* @__PURE__ */ jsxDEV("div", { style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#6366f1",
          animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`
        } }, i, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2336,
          columnNumber: 9
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2334,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "#64748b", fontWeight: 500 }, children: "AI가 5개 플랫폼에 맞게 콘텐츠를 변환하고 있습니다..." }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2343,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("style", { children: `@keyframes pulse { 0%,100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }` }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2344,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2333,
      columnNumber: 5
    }, this),
    generatedContent && !isGenerating && /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: {
        ...styles.card,
        background: "linear-gradient(135deg, #ede9fe, #e0e7ff)",
        border: "1px solid #c7d2fe",
        marginBottom: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 15, fontWeight: 700, color: "#3730a3", marginBottom: 4 }, children: "✅ 5개 플랫폼 콘텐츠 생성 완료" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2362,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#6366f1" }, children: "원본 글을 각 플랫폼의 특성에 맞게 톤, 길이, 포맷, 해시태그를 최적화했습니다" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2363,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2361,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("button", { style: styles.btn(false), children: [
            /* @__PURE__ */ jsxDEV(Icons.Copy, {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2366,
              columnNumber: 49
            }, this),
            " 전체 복사"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2366,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { style: styles.btn(true), children: [
            /* @__PURE__ */ jsxDEV(Icons.Send, {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2367,
              columnNumber: 48
            }, this),
            " 발행 화면으로"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2367,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2365,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2352,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: Object.entries(generatedContent).filter(([key]) => selectedPlatforms.includes(key)).map(
        ([key, data]) => /* @__PURE__ */ jsxDEV("div", { style: {
          ...styles.card,
          padding: 0,
          overflow: "hidden",
          border: `1px solid ${PLATFORMS[key].color}25`
        }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            background: `linear-gradient(135deg, ${PLATFORMS[key].color}10, ${PLATFORMS[key].color}05)`,
            borderBottom: `1px solid ${PLATFORMS[key].color}15`
          }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                background: PLATFORMS[key].color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#fff"
              }, children: PLATFORMS[key].icon }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2390,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 700, color: "#1a1a2e" }, children: PLATFORMS[key].name }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2397,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b" }, children: data.format }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2398,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2396,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2389,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6 }, children: [
              /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(false), children: [
                /* @__PURE__ */ jsxDEV(Icons.Copy, {}, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2402,
                  columnNumber: 57
                }, this),
                " 복사"
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2402,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(false), children: [
                /* @__PURE__ */ jsxDEV(Icons.Edit, {}, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2403,
                  columnNumber: 57
                }, this),
                " 수정"
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2403,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("button", { style: {
                ...styles.btnSm(false),
                background: PLATFORMS[key].color,
                color: "#fff",
                border: "none"
              }, children: [
                /* @__PURE__ */ jsxDEV(Icons.Send, {}, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2409,
                  columnNumber: 18
                }, this),
                " 예약 발행"
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2404,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2401,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2381,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, padding: "18px 20px" }, children: /* @__PURE__ */ jsxDEV("pre", { style: {
              fontSize: 13,
              color: "#374151",
              whiteSpace: "pre-wrap",
              lineHeight: 1.8,
              margin: 0,
              fontFamily: "inherit",
              maxHeight: 320,
              overflowY: "auto"
            }, children: data.text }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2416,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2415,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: {
              width: 200,
              flexShrink: 0,
              padding: "18px 16px",
              background: "#f8fafc",
              borderLeft: "1px solid #e8eaf0",
              display: "flex",
              flexDirection: "column",
              gap: 12
            }, children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: 4 }, children: "글자 수" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2433,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 18, fontWeight: 700, color: "#1a1a2e" }, children: [
                  data.charCount,
                  /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 400, color: "#94a3b8" }, children: "자" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2434,
                    columnNumber: 104
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2434,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2432,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: 4 }, children: "해시태그" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2437,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 18, fontWeight: 700, color: "#1a1a2e" }, children: [
                  data.hashtags,
                  /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 400, color: "#94a3b8" }, children: "개" }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2438,
                    columnNumber: 103
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2438,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2436,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: 4 }, children: "권장 포맷" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2441,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 500, color: "#374151" }, children: data.format }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2442,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2440,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: {
                marginTop: "auto",
                padding: "10px 12px",
                borderRadius: 8,
                background: "#fef3c7",
                border: "1px solid #fde68a"
              }, children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, fontWeight: 600, color: "#92400e", marginBottom: 3 }, children: "💡 TIP" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2451,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#78350f", lineHeight: 1.5 }, children: data.tip }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2452,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2444,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2425,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2413,
            columnNumber: 17
          }, this)
        ] }, key, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2374,
          columnNumber: 9
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2372,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2350,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 2286,
    columnNumber: 3
  }, this);
  const renderCommunity = () => {
    const filtered = commentFilter === "all" ? MOCK_COMMENTS : MOCK_COMMENTS.filter((c) => c.sentiment === commentFilter);
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "커뮤니티 관리" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2472,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "모든 채널의 댓글과 DM을 한 곳에서 관리하세요" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2473,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.grid3, marginBottom: 20 }, children: [
        { label: "긍정 댓글", count: 24, pct: "58%", color: "#10b981" },
        { label: "부정 댓글", count: 5, pct: "12%", color: "#ef4444" },
        { label: "미답변", count: 8, pct: "", color: "#f59e0b" }
      ].map(
        (s, i) => /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, borderLeft: `4px solid ${s.color}`, padding: "16px 18px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#64748b" }, children: s.label }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2483,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 24, fontWeight: 700, marginTop: 4 }, children: [
            s.count,
            " ",
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, color: "#94a3b8", fontWeight: 400 }, children: s.pct }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2484,
              columnNumber: 86
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2484,
            columnNumber: 15
          }, this)
        ] }, i, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2482,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2476,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "💬 통합 인박스" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2492,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 4 }, children: [{ key: "all", label: "전체" }, { key: "negative", label: "부정" }, { key: "positive", label: "긍정" }, { key: "neutral", label: "중립" }].map(
            (f) => /* @__PURE__ */ jsxDEV("button", { style: styles.tab(commentFilter === f.key), onClick: () => setCommentFilter(f.key), children: f.label }, f.key, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2495,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2493,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2491,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: filtered.map(
          (c, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 12, padding: "14px 16px", borderRadius: 10, background: c.sentiment === "negative" ? "#fef2f2" : "#f8fafc", border: "1px solid #e8eaf0" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { ...styles.platformDot(PLATFORMS[c.platform].color), marginTop: 4 } }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2502,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600 }, children: c.user }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2505,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#94a3b8" }, children: PLATFORMS[c.platform].name }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2506,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#94a3b8" }, children: c.time }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2507,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { ...styles.badge(sentimentColors[c.sentiment]), marginLeft: "auto" }, children: sentimentLabels[c.sentiment] }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2508,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2504,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151", marginBottom: 10, lineHeight: 1.5 }, children: c.text }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2510,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(true), children: [
                  /* @__PURE__ */ jsxDEV(Icons.Zap, {}, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2512,
                    columnNumber: 56
                  }, this),
                  " AI 답글 생성"
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2512,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(false), children: "직접 답글" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2513,
                  columnNumber: 21
                }, this),
                c.replied && /* @__PURE__ */ jsxDEV("span", { style: { ...styles.badge("#10b981"), marginLeft: 4 }, children: "답변완료" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2514,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2511,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2503,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2501,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2499,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2490,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2471,
      columnNumber: 7
    }, this);
  };
  const renderAnalytics = () => /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "성과 분석" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2531,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV("button", { style: styles.btn(false), onClick: () => setAiInsight(true), children: [
          /* @__PURE__ */ jsxDEV(Icons.Zap, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2533,
            columnNumber: 80
          }, this),
          " AI 인사이트"
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2533,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { style: styles.btn(true), children: [
          /* @__PURE__ */ jsxDEV(Icons.Download, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2534,
            columnNumber: 44
          }, this),
          " 보고서 생성"
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2534,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2532,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2530,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "크로스 채널 성과를 분석하고 인사이트를 도출합니다" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2537,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.tabBar, children: [{ key: "overview", label: "전체 개요" }, { key: "channel", label: "채널별 상세" }, { key: "content", label: "콘텐츠별 성과" }].map(
      (t) => /* @__PURE__ */ jsxDEV("button", { style: styles.tab(analysisView === t.key), onClick: () => setAnalysisView(t.key), children: t.label }, t.key, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2542,
        columnNumber: 7
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2540,
      columnNumber: 7
    }, this),
    aiInsight && /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, background: "linear-gradient(135deg, #ede9fe, #fae8ff)", border: "1px solid #c4b5fd", marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🤖 AI 인사이트 리포트" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2550,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setAiInsight(false), style: { background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#94a3b8" }, children: "✕" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2551,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2549,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, lineHeight: 1.8, color: "#374151" }, children: [
        /* @__PURE__ */ jsxDEV("p", { style: { margin: "0 0 10px" }, children: [
          "📈 ",
          /* @__PURE__ */ jsxDEV("strong", { children: "이번 주 핵심 분석:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2554,
            columnNumber: 50
          }, this),
          " 전체 인게이지먼트율이 전주 대비 12.1% 상승했습니다."
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2554,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { margin: "0 0 10px" }, children: [
          "🏆 ",
          /* @__PURE__ */ jsxDEV("strong", { children: "최고 성과:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2555,
            columnNumber: 50
          }, this),
          " 화요일 인스타그램 밈 콘텐츠가 도달 15,200을 기록하며 이번 주 최고 성과를 보였습니다. 유머러스한 톤의 콘텐츠가 평균 대비 2.1배 높은 공유율을 기록하고 있습니다."
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2555,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { margin: "0 0 10px" }, children: [
          "💡 ",
          /* @__PURE__ */ jsxDEV("strong", { children: "포맷 분석:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2556,
            columnNumber: 50
          }, this),
          " 캐러셀 포맷이 단일 이미지 대비 1.8배, 릴스가 2.3배 높은 저장률을 보여줍니다."
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2556,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { margin: 0 }, children: [
          "📋 ",
          /* @__PURE__ */ jsxDEV("strong", { children: "추천 액션:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2557,
            columnNumber: 41
          }, this),
          " ① 유머/밈 콘텐츠를 주 2회로 확대 ② 캐러셀 형식을 교육 콘텐츠에 적극 활용 ③ X(Twitter)의 인게이지먼트가 낮으므로 스레드 형식의 심층 콘텐츠 테스트 권장"
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2557,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2553,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2548,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.grid2, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "📊 채널별 도달 추이 (최근 7일)" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2565,
          columnNumber: 11
        }, this),
        Object.entries(PLATFORMS).map(
          ([key, p]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, width: 70, color: "#64748b" }, children: [
              p.icon,
              " ",
              p.name.split(" ")[0]
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2568,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, height: 24, background: "#f1f5f9", borderRadius: 6, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV("div", { style: {
              height: "100%",
              width: `${Math.random() * 60 + 30}%`,
              background: `linear-gradient(90deg, ${p.color}cc, ${p.color})`,
              borderRadius: 6,
              transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)"
            } }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2570,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2569,
              columnNumber: 15
            }, this)
          ] }, key, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2567,
            columnNumber: 9
          }, this)
        )
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2564,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "📈 인게이지먼트율 비교" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2583,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(MiniBarChart, { data: [4.7, 3.2, 5.1, 2.8, 4], color: "#8b5cf6", height: 140 }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2584,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", padding: "0 4px", fontSize: 11, color: "#94a3b8" }, children: Object.values(PLATFORMS).map((p) => /* @__PURE__ */ jsxDEV("span", { children: p.icon }, p.name, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2586,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2585,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2582,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2563,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginTop: 16 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🏆 콘텐츠 성과 랭킹" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2593,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { style: { borderBottom: "2px solid #e8eaf0" }, children: ["순위", "콘텐츠", "채널", "도달", "인게이지먼트", "비율", "포맷"].map(
          (h) => /* @__PURE__ */ jsxDEV("th", { style: { textAlign: "left", padding: "10px 8px", fontSize: 11, fontWeight: 600, color: "#94a3b8" }, children: h }, h, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2598,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2596,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2595,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: MOCK_POSTS_RANKING.map(
          (post, i) => /* @__PURE__ */ jsxDEV("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px", fontWeight: 700, color: i < 3 ? "#6366f1" : "#94a3b8" }, children: i + 1 }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2605,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px", fontWeight: 500 }, children: post.title }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2606,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px" }, children: /* @__PURE__ */ jsxDEV("span", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: styles.platformDot(PLATFORMS[post.platform].color) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2609,
                columnNumber: 21
              }, this),
              PLATFORMS[post.platform].name
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2608,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2607,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px" }, children: post.reach.toLocaleString() }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2613,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px" }, children: post.engage.toLocaleString() }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2614,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px", fontWeight: 600, color: "#10b981" }, children: post.rate }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2615,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { padding: "12px 8px" }, children: /* @__PURE__ */ jsxDEV("span", { style: styles.tag, children: post.format }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2616,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2616,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2604,
            columnNumber: 11
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2602,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2594,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2592,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 2529,
    columnNumber: 3
  }, this);
  const renderOptimize = () => /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "전략 최적화" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2630,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "데이터 기반으로 다음 전략을 수립하고 성과를 극대화하세요" }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2631,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.tabBar, children: [{ key: "pattern", label: "성과 패턴 분석" }, { key: "recommend", label: "AI 콘텐츠 추천" }, { key: "position", label: "경쟁사 포지셔닝" }].map(
      (t) => /* @__PURE__ */ jsxDEV("button", { style: styles.tab(optimizationTab === t.key), onClick: () => setOptimizationTab(t.key), children: t.label }, t.key, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2635,
        columnNumber: 7
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2633,
      columnNumber: 7
    }, this),
    optimizationTab === "pattern" && /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🎯 최고 성과 조합 TOP 3" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2642,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: styles.grid3, children: [
          { rank: "🥇", day: "화요일", time: "19:00", format: "캐러셀", topic: "교육형", avgRate: "7.8%" },
          { rank: "🥈", day: "목요일", time: "20:00", format: "릴스", topic: "비하인드", avgRate: "7.2%" },
          { rank: "🥉", day: "토요일", time: "11:00", format: "밈/유머", topic: "트렌드", avgRate: "6.9%" }
        ].map(
          (combo, i) => /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, background: i === 0 ? "linear-gradient(135deg, #fef3c7, #fef9c3)" : "#fafbfd", border: i === 0 ? "1px solid #fbbf2433" : "1px solid #e8eaf0" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 20, marginBottom: 8 }, children: combo.rank }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2650,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { color: "#64748b" }, children: "요일" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2653,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600 }, children: [
                  combo.day,
                  " ",
                  combo.time
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2653,
                  columnNumber: 67
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2652,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { color: "#64748b" }, children: "포맷" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2656,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600 }, children: combo.format }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2656,
                  columnNumber: 67
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2655,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { color: "#64748b" }, children: "주제" }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2659,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600 }, children: combo.topic }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2659,
                  columnNumber: 67
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2658,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 4, padding: "6px 10px", borderRadius: 6, background: "#10b98118", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#10b981" }, children: [
                "평균 ",
                combo.avgRate
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2661,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2651,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2649,
            columnNumber: 11
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2643,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2641,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
        /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "📊 요일·시간대별 인게이지먼트 히트맵" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2671,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "60px repeat(7, 1fr)", gap: 3, minWidth: 500 }, children: [
          /* @__PURE__ */ jsxDEV("div", {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2674,
            columnNumber: 17
          }, this),
          ["월", "화", "수", "목", "금", "토", "일"].map(
            (d) => /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", fontSize: 11, fontWeight: 600, color: "#94a3b8", padding: 6 }, children: d }, d, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2676,
              columnNumber: 13
            }, this)
          ),
          ["09시", "12시", "15시", "18시", "21시"].map(
            (time, ti) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", padding: 6, display: "flex", alignItems: "center" }, children: time }, `t-${ti}`, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2680,
                columnNumber: 21
              }, this),
              [0.2, 0.8, 0.4, 0.9, 0.3, 0.7, 0.5, 0.1, 0.6, 0.3, 0.7, 0.2, 0.5, 0.4, 0.3, 0.5, 0.6, 0.8, 0.4, 0.6, 0.3, 0.4, 0.7, 0.5, 0.9, 0.3, 0.8, 0.2, 0.5, 0.9, 0.7, 0.6, 0.4, 0.3, 0.8].slice(ti * 7, ti * 7 + 7).map(
                (v, di) => /* @__PURE__ */ jsxDEV("div", { style: {
                  height: 36,
                  borderRadius: 6,
                  background: `rgba(99, 102, 241, ${v * 0.8 + 0.1})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: v > 0.5 ? "#fff" : "#6366f1",
                  fontWeight: 600
                }, children: [
                  (v * 10).toFixed(1),
                  "%"
                ] }, `${ti}-${di}`, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2682,
                  columnNumber: 15
                }, this)
              )
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2679,
              columnNumber: 13
            }, this)
          )
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2673,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2672,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2670,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2640,
      columnNumber: 5
    }, this),
    optimizationTab === "recommend" && /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "💡 AI 콘텐츠 추천 — 다음 주" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2706,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        { day: "월요일", topic: "주간 트렌드 큐레이션", format: "캐러셀", platform: "instagram", reason: "월요일 교육형 콘텐츠 성과 우수" },
        { day: "화요일", topic: "제품 활용 팁 릴스", format: "릴스/숏츠", platform: "instagram", reason: "화요일 저녁 릴스 인게이지먼트 최고" },
        { day: "수요일", topic: "고객 후기 리그램", format: "UGC", platform: "facebook", reason: "UGC 콘텐츠 신뢰도 상승 효과" },
        { day: "목요일", topic: "업계 인사이트 스레드", format: "스레드", platform: "twitter", reason: "X 인게이지먼트 개선을 위한 장문 콘텐츠 테스트" },
        { day: "금요일", topic: "주말 이벤트 티저", format: "이미지", platform: "threads", reason: "금요일 프로모션 콘텐츠 도달률 높음" }
      ].map(
        (rec, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 10, background: "#f8fafc", border: "1px solid #e8eaf0" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { width: 48, height: 48, borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700, flexShrink: 0 }, children: rec.day.slice(0, 1) }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2716,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600 }, children: rec.topic }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2718,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, marginTop: 4 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: styles.tag, children: rec.format }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2720,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: styles.tag, children: [
                PLATFORMS[rec.platform]?.icon,
                " ",
                PLATFORMS[rec.platform]?.name
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2721,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2719,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b", marginTop: 4 }, children: [
              "📊 ",
              rec.reason
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2723,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2717,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("button", { style: styles.btnSm(true), children: "캘린더에 추가" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2725,
            columnNumber: 17
          }, this)
        ] }, i, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2715,
          columnNumber: 9
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2707,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2705,
      columnNumber: 5
    }, this),
    optimizationTab === "position" && /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.cardTitle, children: "🎯 경쟁사 대비 포지셔닝" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2734,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { padding: 16, borderRadius: 10, background: "#f0fdf4", border: "1px solid #bbf7d0" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, color: "#16a34a", marginBottom: 8 }, children: "💪 강점" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2737,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#374151", lineHeight: 1.8 }, children: [
            "• 캐러셀 콘텐츠 인게이지먼트율 업계 평균 대비 1.5배",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2739,
              columnNumber: 48
            }, this),
            "• 교육형 콘텐츠에서 독보적 전문성 인정",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2740,
              columnNumber: 39
            }, this),
            "• 댓글 응답률 92%로 커뮤니티 관리 우수"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2738,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2736,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { padding: 16, borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, color: "#dc2626", marginBottom: 8 }, children: "⚠️ 약점" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2745,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#374151", lineHeight: 1.8 }, children: [
            "• 영상 콘텐츠(릴스/숏츠) 비중이 경쟁사 대비 낮음",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2747,
              columnNumber: 46
            }, this),
            "• X(Twitter) 채널 인게이지먼트 업계 평균 이하",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2748,
              columnNumber: 48
            }, this),
            "• 게시 빈도가 경쟁사 B 대비 40% 낮음"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2746,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2744,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { padding: 16, borderRadius: 10, background: "#ede9fe", border: "1px solid #c4b5fd" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, color: "#7c3aed", marginBottom: 8 }, children: "🚀 기회" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2753,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#374151", lineHeight: 1.8 }, children: [
            "• Threads 채널 초기 진입 — 경쟁사 부재",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2755,
              columnNumber: 44
            }, this),
            "• 밈/유머 콘텐츠 테스트 결과 높은 공유율 확인",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2756,
              columnNumber: 44
            }, this),
            "• 유튜브 숏츠 알고리즘 강화 시기 활용"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2754,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2752,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { padding: 16, borderRadius: 10, background: "#fef9c3", border: "1px solid #fde68a" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600, color: "#ca8a04", marginBottom: 8 }, children: "🔒 위협" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2761,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#374151", lineHeight: 1.8 }, children: [
            "• 경쟁사 C의 높은 인게이지먼트율(6.2%) 추격",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2763,
              columnNumber: 45
            }, this),
            "• 인스타그램 알고리즘 변경으로 도달 감소 추세",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2764,
              columnNumber: 43
            }, this),
            "• 업계 전반 광고 단가 상승"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2762,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 2760,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2735,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 2733,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 2629,
    columnNumber: 3
  }, this);
  const renderSnsIntegration = () => {
    const serviceFields = {
      supabase: {
        label: "Supabase",
        icon: "⚡",
        color: "#3ecf8e",
        url: "https://supabase.com",
        note: "supabase.com → Project Settings → API",
        desc: "PostgreSQL 기반의 오픈소스 백엔드 서비스. 데이터베이스, 인증, 스토리지, 실시간 기능을 제공하며 SNS 대시보드의 모든 데이터를 저장하고 관리하는 핵심 인프라입니다.",
        fields: [
          { key: "projectUrl", label: "Project URL", placeholder: "https://xxxx.supabase.co", secret: false },
          { key: "publishableKey", label: "Publishable Key", placeholder: "eyJhbGciOiJIUzI1NiIs...", secret: true },
          { key: "anonKeyLegacy", label: "Anon Key (Legacy)", placeholder: "eyJhbGciOiJIUzI1NiIs...", secret: true }
        ]
      },
      github: {
        label: "GitHub",
        icon: "🐙",
        color: "#24292e",
        url: "https://github.com",
        note: "github.com → Settings → Developer settings → Personal access tokens",
        desc: "전 세계 개발자가 사용하는 코드 저장소 플랫폼. SNS 대시보드의 소스코드를 버전 관리하고, 변경 이력을 추적하거나 Vercel 자동 배포의 트리거로 활용됩니다.",
        fields: [
          { key: "personalAccessToken", label: "Personal Access Token", placeholder: "ghp_xxxxxxxxxxxx", secret: true },
          { key: "owner", label: "Owner (유저명/조직명)", placeholder: "myusername", secret: false },
          { key: "repo", label: "Repository", placeholder: "my-repo", secret: false }
        ]
      },
      vercel: {
        label: "Vercel",
        icon: "▲",
        color: "#000000",
        url: "https://vercel.com",
        note: "vercel.com → Account Settings → Tokens",
        desc: "프론트엔드 특화 클라우드 배포 플랫폼. GitHub와 연동하면 코드를 푸시할 때마다 SNS 대시보드를 자동으로 빌드하고 전 세계 CDN에 즉시 배포해줍니다.",
        fields: [
          { key: "accessToken", label: "Access Token", placeholder: "xxxxxxxxxxxxxxxxxxxxxxxx", secret: true },
          { key: "projectId", label: "Project ID", placeholder: "prj_xxxxxxxxxxxx", secret: false },
          { key: "orgId", label: "Org ID (팀)", placeholder: "team_xxxxxxxxxxxx", secret: false }
        ]
      },
      googleSheet: {
        label: "Google Spreadsheet",
        icon: "📊",
        color: "#34a853",
        url: "https://sheets.google.com",
        note: "Google Cloud Console → 서비스 계정 → 키 생성 (JSON)",
        desc: "구글이 제공하는 클라우드 기반 스프레드시트. SNS 콘텐츠 발행 일정, 성과 데이터를 시트에서 직접 관리하거나 대시보드와 양방향 데이터 동기화에 활용됩니다.",
        fields: [
          { key: "spreadsheetId", label: "Spreadsheet ID", placeholder: "1IjmqpRxS_00CLrN...", secret: false },
          { key: "serviceAccountEmail", label: "Service Account Email", placeholder: "xxx@project.iam.gserviceaccount.com", secret: false },
          { key: "privateKey", label: "Private Key", placeholder: "-----BEGIN RSA PRIVATE KEY-----", secret: true }
        ]
      },
      openai: {
        label: "OpenAI",
        icon: "🤖",
        color: "#10a37f",
        url: "https://platform.openai.com",
        note: "platform.openai.com → API keys → Create new secret key",
        desc: "OpenAI의 GPT 모델을 활용해 마스터 글을 각 SNS 플랫폼에 맞는 초안으로 자동 변환합니다. API 키를 저장하면 [초안 생성하기] 버튼이 실제 AI로 동작합니다.",
        fields: [
          { key: "apiKey", label: "API Key", placeholder: "sk-proj-xxxxxxxxxxxxxxxxxxxx", secret: true }
        ]
      }
    };
    const handleServiceCredentialChange = (service, fieldKey, value) => {
      setServiceCredentials((prev) => ({
        ...prev,
        [service]: { ...prev[service], [fieldKey]: value }
      }));
      if (serviceSaveStatus[service] === "saved") {
        setServiceSaveStatus((prev) => ({ ...prev, [service]: null }));
      }
    };
    const handleServiceSave = async (service) => {
      setServiceSaveStatus((prev) => ({ ...prev, [service]: "saving" }));
      const { error } = await supabase.from("service_credentials").upsert({
        service,
        credentials: serviceCredentials[service],
        is_connected: Object.values(serviceCredentials[service]).some((v) => v.trim() !== ""),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }, { onConflict: "service" });
      setServiceSaveStatus((prev) => ({ ...prev, [service]: error ? null : "saved" }));
      if (error) alert(`저장 실패: ${error.message}`);
    };
    const isServiceConnected = (service) => Object.values(serviceCredentials[service]).some((v) => v.trim() !== "");
    const platformFields = [
      {
        id: "twitter",
        label: "X (Twitter)",
        icon: "𝕏",
        color: "#14171A",
        url: "https://developer.twitter.com",
        note: "developer.twitter.com → Project & App → Keys and Tokens",
        fields: [
          { key: "bearerToken", label: "Bearer Token", group: "앱 전용 인증", placeholder: "AAAAAAAAAAAAAAAAAAAAAxxxxx...", secret: true },
          { key: "consumerKey", label: "소비자 키", group: "OAuth 1.0 키", placeholder: "xxxxxxxxxxxxxxxxxxxx", secret: true, pair: "start", pairBg: "#eff6ff", pairBorder: "#bfdbfe" },
          { key: "consumerKeySecret", label: "Consumer Key Secret", group: "OAuth 1.0 키", placeholder: "xxxxxxxxxxxxxxxxxxxx", secret: true, pair: "end" },
          { key: "accessToken", label: "액세스 토큰", group: "OAuth 1.0 키", placeholder: "000000000-xxxxxxxxxx", secret: true, pair: "start", pairBg: "#f3f4f6", pairBorder: "#d1d5db" },
          { key: "accessTokenSecret", label: "액세스 토큰 시크릿", group: "OAuth 1.0 키", placeholder: "xxxxxxxxxxxxxxxxxxxx", secret: true, pair: "end" },
          { key: "clientId", label: "클라이언트 ID", group: "OAuth 2.0 키", placeholder: "MklKRnJkM1E1dDlEWTJ4...", secret: true },
          { key: "clientSecret", label: "클라이언트 시크릿", group: "OAuth 2.0 키", placeholder: "xxxxxxxxxxxxxxxxxxxx", secret: true }
        ]
      },
      {
        id: "youtube",
        label: "YouTube",
        icon: "▶️",
        color: "#FF0000",
        url: "https://console.cloud.google.com",
        note: "Google Cloud Console → OAuth 2.0 클라이언트 ID 생성 (youtube_auth.py로 토큰 발급)",
        fields: [
          { key: "clientId", label: "Client ID", placeholder: "xxxxxx.apps.googleusercontent.com", secret: false },
          { key: "clientSecret", label: "Client Secret", placeholder: "GOCSPX-xxxxxxxxxx", secret: true }
        ]
      },
      {
        id: "facebook",
        label: "Facebook",
        icon: "👤",
        color: "#1877F2",
        url: "https://developers.facebook.com",
        note: "Meta 개발자 콘솔 → 앱 → 페이지 액세스 토큰 생성",
        fields: [
          { key: "pageAccessToken", label: "Page Access Token", placeholder: "EAAxxxxxx...", secret: true },
          { key: "pageId", label: "Page ID", placeholder: "123456789012345", secret: false }
        ]
      },
      {
        id: "instagram",
        label: "Instagram",
        icon: "📸",
        color: "#E1306C",
        url: "https://developers.facebook.com/docs/instagram-api",
        note: "Meta 개발자 콘솔 → Instagram Basic Display API → 액세스 토큰 생성",
        fields: [
          { key: "accessToken", label: "Access Token", placeholder: "EAAxxxxxx...", secret: true },
          { key: "userId", label: "Instagram User ID", placeholder: "17841400000000000", secret: false }
        ]
      },
      {
        id: "threads",
        label: "Threads",
        icon: "🔗",
        color: "#000000",
        url: "https://developers.facebook.com/docs/threads",
        note: "Meta 개발자 콘솔 → Threads API 앱 → 액세스 토큰 생성",
        fields: [
          { key: "appId", label: "App ID", placeholder: "1323468196478327", secret: false },
          { key: "accessToken", label: "Access Token", placeholder: "EAAxxxxxx...", secret: true }
        ]
      }
    ];
    const handleDragStart = (id) => {
      dragSnsRef.current = id;
    };
    const handleDragOver = (e) => {
      e.preventDefault();
    };
    const handleDrop = (targetId) => {
      const draggedId = dragSnsRef.current;
      if (!draggedId || draggedId === targetId) return;
      setSnsOrder((prev) => {
        const next = [...prev];
        const from = next.indexOf(draggedId);
        const to = next.indexOf(targetId);
        next.splice(from, 1);
        next.splice(to, 0, draggedId);
        localStorage.setItem("snsOrder", JSON.stringify(next));
        return next;
      });
      dragSnsRef.current = null;
    };
    const handleCredentialChange = (platform, fieldKey, value) => {
      setSnsCredentials((prev) => ({
        ...prev,
        [platform]: { ...prev[platform], [fieldKey]: value }
      }));
      if (snsSaveStatus[platform] === "saved") {
        setSnsSaveStatus((prev) => ({ ...prev, [platform]: null }));
      }
    };
    const handleSave = async (platform) => {
      setSnsSaveStatus((prev) => ({ ...prev, [platform]: "saving" }));
      const { error } = await supabase.from("sns_credentials").upsert({
        platform,
        credentials: snsCredentials[platform],
        is_connected: Object.values(snsCredentials[platform]).some((v) => v.trim() !== ""),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }, { onConflict: "platform" });
      setSnsSaveStatus((prev) => ({ ...prev, [platform]: error ? null : "saved" }));
      if (error) alert(`저장 실패: ${error.message}`);
    };
    const toggleTokenVisibility = (key) => {
      setShowTokens((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    const isConnected = (platform) => {
      const creds = snsCredentials[platform];
      return Object.values(creds).some((v) => v.trim() !== "");
    };
    const renderCredentialCard = ({ key, platform, connected, saveStatus, credentials, onFieldChange, onSave, tokenPrefix, draggable, onDragStart, onDragOver, onDrop }) => /* @__PURE__ */ jsxDEV(
      "div",
      {
        draggable: !!draggable,
        onDragStart,
        onDragOver,
        onDrop,
        style: {
          ...styles.card,
          border: connected ? `1px solid ${platform.color}40` : "1px solid #e8eaf0",
          cursor: draggable ? "grab" : "default",
          transition: "box-shadow 0.15s"
        },
        children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", marginBottom: 20 }, children: [
            draggable && /* @__PURE__ */ jsxDEV("div", { style: { marginRight: 10, color: "#cbd5e1", fontSize: 16, cursor: "grab", userSelect: "none" }, children: "⠿" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2972,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: {
                width: 40,
                height: 40,
                borderRadius: 10,
                background: platform.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                color: "#fff",
                flexShrink: 0
              }, children: platform.icon }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2975,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: platform.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { fontSize: 15, fontWeight: 700, color: "#1a1a2e", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 },
                    onMouseEnter: (e) => e.currentTarget.style.color = platform.color,
                    onMouseLeave: (e) => e.currentTarget.style.color = "#1a1a2e",
                    children: [
                      platform.label,
                      " ",
                      /* @__PURE__ */ jsxDEV(Icons.ExternalLink, {}, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 2990,
                        columnNumber: 34
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 2982,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#94a3b8", marginTop: 2 }, children: platform.note }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 2992,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 2981,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2974,
              columnNumber: 11
            }, this),
            connected && /* @__PURE__ */ jsxDEV("div", { style: { marginLeft: "auto", fontSize: 11, fontWeight: 600, color: "#10b981", background: "#d1fae5", padding: "3px 10px", borderRadius: 100 }, children: "연결됨" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 2996,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 2970,
            columnNumber: 9
          }, this),
          platform.desc && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#94a3b8", lineHeight: 1.7, marginBottom: 16 }, children: platform.desc }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3004,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: (() => {
            const hasGroup = platform.fields.some((f) => f.group);
            if (!hasGroup) {
              return /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }, children: platform.fields.map((field) => {
                const tokenKey = `${tokenPrefix}-${field.key}`;
                const isVisible = showTokens[tokenKey];
                return /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 500, color: "#374151", marginBottom: 6 }, children: field.label }, void 0, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 3022,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { position: "relative" }, children: [
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        type: field.secret && !isVisible ? "password" : "text",
                        style: { ...styles.input, paddingRight: field.secret ? 38 : 14, fontFamily: field.secret && !isVisible ? "monospace" : "inherit" },
                        placeholder: field.placeholder,
                        value: credentials[field.key] ?? "",
                        onChange: (e) => onFieldChange(field.key, e.target.value)
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3024,
                        columnNumber: 27
                      },
                      this
                    ),
                    field.secret && /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => toggleTokenVisibility(tokenKey),
                        style: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: 0 },
                        children: isVisible ? /* @__PURE__ */ jsxDEV(Icons.Eye, {}, void 0, false, {
                          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                          lineNumber: 3034,
                          columnNumber: 44
                        }, this) : /* @__PURE__ */ jsxDEV(Icons.EyeOff, {}, void 0, false, {
                          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                          lineNumber: 3034,
                          columnNumber: 60
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3032,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 3023,
                    columnNumber: 25
                  }, this)
                ] }, field.key, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3021,
                  columnNumber: 21
                }, this);
              }) }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3016,
                columnNumber: 15
              }, this);
            }
            const groups = platform.fields.reduce((acc, field) => {
              const g = field.group || "";
              if (!acc.find((x) => x.name === g)) acc.push({ name: g, fields: [] });
              acc.find((x) => x.name === g).fields.push(field);
              return acc;
            }, []);
            const renderFieldInput = (field) => {
              const tokenKey = `${tokenPrefix}-${field.key}`;
              const isVisible = showTokens[tokenKey];
              return /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 500, color: "#374151", marginBottom: 6 }, children: field.label }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3056,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      type: field.secret && !isVisible ? "password" : "text",
                      style: { ...styles.input, paddingRight: field.secret ? 38 : 14, fontFamily: field.secret && !isVisible ? "monospace" : "inherit" },
                      placeholder: field.placeholder,
                      value: credentials[field.key] ?? "",
                      onChange: (e) => onFieldChange(field.key, e.target.value)
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 3058,
                      columnNumber: 21
                    },
                    this
                  ),
                  field.secret && /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => toggleTokenVisibility(tokenKey),
                      style: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: 0 },
                      children: isVisible ? /* @__PURE__ */ jsxDEV(Icons.Eye, {}, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3068,
                        columnNumber: 38
                      }, this) : /* @__PURE__ */ jsxDEV(Icons.EyeOff, {}, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3068,
                        columnNumber: 54
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 3066,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3057,
                  columnNumber: 19
                }, this)
              ] }, field.key, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3055,
                columnNumber: 15
              }, this);
            };
            return groups.map((group) => {
              const rows = [];
              let fi = 0;
              while (fi < group.fields.length) {
                const f = group.fields[fi];
                const next = group.fields[fi + 1];
                if (f.pair === "start" && next?.pair === "end") {
                  rows.push(
                    /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 8, border: `1px solid ${f.pairBorder ?? "#e0e4ef"}`, background: f.pairBg ?? "#f8fafc", overflow: "hidden", marginBottom: 4 }, children: [
                      /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 14px", borderRight: `2px solid ${f.pairBorder ?? "#c7d2fe"}` }, children: renderFieldInput(f) }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3086,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 14px" }, children: renderFieldInput(next) }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3089,
                        columnNumber: 23
                      }, this)
                    ] }, `pair-${f.key}`, true, {
                      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                      lineNumber: 3085,
                      columnNumber: 19
                    }, this)
                  );
                  fi += 2;
                } else {
                  rows.push(/* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 4 }, children: renderFieldInput(f) }, f.key, false, {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 3096,
                    columnNumber: 27
                  }, this));
                  fi += 1;
                }
              }
              return /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 14 }, children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, paddingBottom: 4, borderBottom: "1px solid #e8eaf0" }, children: group.name }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3102,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: rows }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3105,
                  columnNumber: 19
                }, this)
              ] }, group.name, true, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3101,
                columnNumber: 15
              }, this);
            });
          })() }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3010,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 10 }, children: [
            saveStatus === "saved" && /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#10b981", display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ jsxDEV(Icons.Check, {}, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3118,
                columnNumber: 15
              }, this),
              " 저장 완료"
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3117,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                style: {
                  ...styles.btn(true),
                  opacity: saveStatus === "saving" ? 0.7 : 1,
                  pointerEvents: saveStatus === "saving" ? "none" : "auto"
                },
                onClick: onSave,
                children: saveStatus === "saving" ? "저장 중..." : "저장"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3121,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3115,
            columnNumber: 9
          }, this)
        ]
      },
      key,
      true,
      {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 2956,
        columnNumber: 5
      },
      this
    );
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "연동 관리" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "API 키를 입력하고 저장하세요. 키는 암호화되어 DB에 저장됩니다." }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "14px 18px",
        borderRadius: 10,
        marginBottom: 24,
        background: "#fef9c3",
        border: "1px solid #fde68a"
      }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 18, flexShrink: 0 }, children: "🔐" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#78350f", lineHeight: 1.6 }, children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "보안 안내:" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3148,
            columnNumber: 13
          }, this),
          " API 키는 화면에 입력한 후 [저장] 버튼을 클릭해야 DB에 반영됩니다. 입력된 키는 AES-256으로 암호화 저장되며, 소스코드(.env)에는 저장되지 않습니다."
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3147,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 4, marginBottom: 24, background: "#f1f5f9", borderRadius: 10, padding: 4 }, children: [
        { id: "sns", label: "SNS 연동", icon: "📱" },
        { id: "service", label: "서비스 연동", icon: "🔧" }
      ].map(
        (tab) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setIntegrationTab(tab.id),
            style: {
              flex: 1,
              padding: "8px 0",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              background: integrationTab === tab.id ? "#fff" : "transparent",
              color: integrationTab === tab.id ? "#1a1a2e" : "#64748b",
              boxShadow: integrationTab === tab.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.15s"
            },
            children: [
              tab.icon,
              " ",
              tab.label
            ]
          },
          tab.id,
          true,
          {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3159,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3154,
        columnNumber: 9
      }, this),
      integrationTab === "sns" && /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: snsOrder.map((id) => {
        const platform = platformFields.find((p) => p.id === id);
        if (!platform) return null;
        return renderCredentialCard({
          key: platform.id,
          platform,
          connected: isConnected(platform.id),
          saveStatus: snsSaveStatus[platform.id],
          credentials: snsCredentials[platform.id],
          onFieldChange: (fieldKey, value) => handleCredentialChange(platform.id, fieldKey, value),
          onSave: () => handleSave(platform.id),
          tokenPrefix: platform.id,
          draggable: true,
          onDragStart: () => handleDragStart(platform.id),
          onDragOver: handleDragOver,
          onDrop: () => handleDrop(platform.id)
        });
      }) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3178,
        columnNumber: 9
      }, this),
      integrationTab === "service" && /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: Object.entries(serviceFields).map(
        ([serviceKey, service]) => renderCredentialCard({
          key: serviceKey,
          platform: service,
          connected: isServiceConnected(serviceKey),
          saveStatus: serviceSaveStatus[serviceKey],
          credentials: serviceCredentials[serviceKey],
          onFieldChange: (fieldKey, value) => handleServiceCredentialChange(serviceKey, fieldKey, value),
          onSave: () => handleServiceSave(serviceKey),
          tokenPrefix: `svc-${serviceKey}`
        })
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3202,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3136,
      columnNumber: 7
    }, this);
  };
  const renderMembers = () => {
    const APPROVAL_COLORS = { pending: "#f59e0b", approved: "#10b981", rejected: "#ef4444" };
    const ROLE_COLORS = { admin: "#6366f1", operator: "#64748b" };
    const pendingCount = membersList.filter((m) => m.approvalStatus === "pending").length;
    const updateApproval = async (id, val) => {
      setMembersList((prev) => prev.map((m) => m.id === id ? { ...m, approvalStatus: val } : m));
      await supabase.from("members").update({ approval_status: val }).eq("id", id);
    };
    const updateRole = async (id, val) => {
      setMembersList((prev) => prev.map((m) => m.id === id ? { ...m, role: val } : m));
      await supabase.from("members").update({ role: val }).eq("id", id);
    };
    const deleteMember = async (id, name) => {
      if (window.confirm(`"${name}"을(를) 삭제하시겠습니까?`)) {
        setMembersList((prev) => prev.filter((m) => m.id !== id));
        await supabase.from("members").delete().eq("id", id);
      }
    };
    const approvalSelectStyle = (status) => ({
      padding: "5px 8px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer",
      border: `1px solid ${APPROVAL_COLORS[status] || "#e2e8f0"}`,
      background: (APPROVAL_COLORS[status] || "#94a3b8") + "18",
      color: APPROVAL_COLORS[status] || "#94a3b8",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2394a3b8'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 8px center",
      paddingRight: 22
    });
    const roleSelectStyle = (role) => ({
      padding: "5px 8px",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer",
      border: `1px solid ${role === "admin" ? "#c7d2fe" : "#e2e8f0"}`,
      background: role === "admin" ? "#6366f115" : "#f1f5f9",
      color: ROLE_COLORS[role] || "#64748b",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2394a3b8'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 8px center",
      paddingRight: 22
    });
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { style: styles.pageTitle, children: "회원 관리" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3270,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: styles.pageSubtitle, children: "대시보드 접근 권한을 관리합니다" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3271,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3269,
          columnNumber: 11
        }, this),
        pendingCount > 0 && /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, background: "#fef3c7", border: "1px solid #fde68a" }, children: [
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 14 }, children: "⏳" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600, color: "#92400e" }, children: [
            "승인 대기 ",
            pendingCount,
            "명"
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3276,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3274,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3268,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: styles.card, children: /* @__PURE__ */ jsxDEV("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { style: { borderBottom: "2px solid #e8eaf0" }, children: ["No", "이름", "이메일 주소", "가입일", "승인 상태", "권한", "관리"].map(
          (h) => /* @__PURE__ */ jsxDEV("th", { style: { padding: "10px 14px", textAlign: h === "관리" ? "center" : "left", fontSize: 11, fontWeight: 600, color: "#94a3b8", whiteSpace: "nowrap", textTransform: "uppercase" }, children: h }, h, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3287,
            columnNumber: 19
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3285,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3284,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: membersList.map(
          (member, i) => /* @__PURE__ */ jsxDEV(
            "tr",
            {
              style: { borderBottom: i < membersList.length - 1 ? "1px solid #f1f5f9" : "none" },
              onMouseEnter: (e) => e.currentTarget.style.background = "#fafbfd",
              onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
              children: [
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 14px", color: "#94a3b8", whiteSpace: "nowrap" }, children: i + 1 }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3298,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 14px", fontWeight: 600, color: "#1a1a2e", whiteSpace: "nowrap" }, children: member.name }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3299,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 14px", color: "#64748b" }, children: member.email }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3300,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 14px", color: "#64748b", whiteSpace: "nowrap" }, children: member.joinedAt }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3301,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 14px", whiteSpace: "nowrap" }, children: /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    value: member.approvalStatus,
                    onChange: (e) => updateApproval(member.id, e.target.value),
                    style: approvalSelectStyle(member.approvalStatus),
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "approved", children: "승인 완료" }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3308,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("option", { value: "pending", children: "가입 대기" }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3309,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("option", { value: "rejected", children: "거부" }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3310,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 3303,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3302,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 14px", whiteSpace: "nowrap" }, children: /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    value: member.role,
                    onChange: (e) => updateRole(member.id, e.target.value),
                    style: roleSelectStyle(member.role),
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "admin", children: "관리자" }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3319,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("option", { value: "operator", children: "운영자" }, void 0, false, {
                        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                        lineNumber: 3320,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 3314,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3313,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { padding: "14px 10px", whiteSpace: "nowrap", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    style: { ...styles.btnSm(false), fontSize: 11, padding: "4px 8px", color: "#ef4444", borderColor: "#fecaca" },
                    onClick: () => deleteMember(member.id, member.name),
                    children: "삭제"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                    lineNumber: 3324,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                  lineNumber: 3323,
                  columnNumber: 21
                }, this)
              ]
            },
            member.id,
            true,
            {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3293,
              columnNumber: 17
            },
            this
          )
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3291,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3283,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3282,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3281,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { ...styles.card, marginTop: 20, background: "linear-gradient(135deg, #f0f4ff, #faf5ff)", border: "1px solid #e0e7ff" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 12 }, children: "💡 회원가입 & 인증 구조 (Supabase Auth 연동 가이드)" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3340,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }, children: [
          { step: "1", title: "회원가입", desc: "이메일/비밀번호로 가입 → Supabase Auth 계정 생성 + members 테이블에 pending 상태로 등록" },
          { step: "2", title: "가입 대기", desc: "로그인 후 '관리자 승인 대기 중' 화면 표시. 대시보드 접근 불가" },
          { step: "3", title: "관리자 승인", desc: "관리자가 이 화면에서 [승인] 클릭 → approval_status = approved 업데이트" },
          { step: "4", title: "접근 허용", desc: "승인된 사용자만 대시보드 진입. 권한(관리자/운영자)에 따라 메뉴 차등 노출 가능" }
        ].map(
          (s) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 10 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { width: 24, height: 24, borderRadius: "50%", background: "#6366f1", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: s.step }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3349,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 2 }, children: s.title }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3351,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#64748b", lineHeight: 1.5 }, children: s.desc }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3352,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3350,
              columnNumber: 17
            }, this)
          ] }, s.step, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3348,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3341,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3339,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3267,
      columnNumber: 7
    }, this);
  };
  const renderPage = () => {
    switch (activeMenu) {
      case "home":
        return renderHome();
      case "contents":
        return renderContents();
      case "community":
        return renderCommunity();
      case "research":
        return renderResearch();
      case "sns-integration":
        return renderSnsIntegration();
      case "members":
        return renderMembers();
      default:
        return renderHome();
    }
  };
  const handleLogin = () => {
    setAuthError("");
    if (!authForm.email || !authForm.password) {
      setAuthError("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    if (authForm.email === "admin@test.com" && authForm.password === "1234") {
      setAuthState("approved");
    } else {
      setAuthError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };
  const handleSignup = () => {
    setAuthError("");
    if (!authForm.name || !authForm.email || !authForm.password) {
      setAuthError("모든 항목을 입력해주세요.");
      return;
    }
    setMembersList((prev) => [...prev, { id: Date.now(), name: authForm.name, email: authForm.email, joinedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), approvalStatus: "pending", role: "operator" }]);
    setAuthState("pending");
  };
  const authCardStyle = { background: "#fff", borderRadius: 20, padding: "40px 44px", width: 400, boxShadow: "0 25px 50px rgba(0,0,0,0.35)" };
  if (authState === "logged-out") {
    return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "linear-gradient(195deg, #0f0f23 0%, #1a1a3e 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { style: authCardStyle, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #818cf8, #c084fc)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#fff" }, children: "S" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3406,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18, fontWeight: 700, color: "#1a1a2e" }, children: "SNS 대시보드" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3407,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3405,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }, children: "로그인" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3409,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#64748b", marginBottom: 24 }, children: "관리자 승인을 받은 계정만 접근 가능합니다" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3410,
        columnNumber: 11
      }, this),
      authError && /* @__PURE__ */ jsxDEV("div", { style: { padding: "10px 14px", borderRadius: 8, background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", fontSize: 12, marginBottom: 14 }, children: authError }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3411,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "이메일" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3413,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("input", { style: styles.input, type: "email", placeholder: "이메일 주소", value: authForm.email, onChange: (e) => setAuthForm((p) => ({ ...p, email: e.target.value })), onKeyDown: (e) => e.key === "Enter" && handleLogin() }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3414,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3412,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "비밀번호" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3417,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("input", { style: styles.input, type: "password", placeholder: "비밀번호", value: authForm.password, onChange: (e) => setAuthForm((p) => ({ ...p, password: e.target.value })), onKeyDown: (e) => e.key === "Enter" && handleLogin() }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3418,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3416,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btn(true), width: "100%", justifyContent: "center", padding: "12px" }, onClick: handleLogin, children: "로그인" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3420,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", marginTop: 16, fontSize: 12, color: "#94a3b8" }, children: [
        "계정이 없으신가요?",
        " ",
        /* @__PURE__ */ jsxDEV("span", { style: { color: "#6366f1", fontWeight: 600, cursor: "pointer" }, onClick: () => {
          setAuthForm({ email: "", password: "", name: "" });
          setAuthError("");
          setAuthState("signup");
        }, children: "회원가입" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3425,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3423,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 16, padding: "10px 14px", borderRadius: 8, background: "#f8fafc", fontSize: 11, color: "#94a3b8" }, children: "테스트 계정: admin@test.com / 1234" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3429,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3404,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3403,
      columnNumber: 7
    }, this);
  }
  if (authState === "signup") {
    return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "linear-gradient(195deg, #0f0f23 0%, #1a1a3e 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { style: authCardStyle, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #818cf8, #c084fc)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#fff" }, children: "S" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3442,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18, fontWeight: 700, color: "#1a1a2e" }, children: "SNS 대시보드" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3443,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3441,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }, children: "회원가입" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3445,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#64748b", marginBottom: 24 }, children: "가입 후 관리자 승인이 완료되면 이용 가능합니다" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3446,
        columnNumber: 11
      }, this),
      authError && /* @__PURE__ */ jsxDEV("div", { style: { padding: "10px 14px", borderRadius: 8, background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", fontSize: 12, marginBottom: 14 }, children: authError }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3447,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "이름" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3449,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("input", { style: styles.input, placeholder: "이름", value: authForm.name, onChange: (e) => setAuthForm((p) => ({ ...p, name: e.target.value })) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3450,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3448,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "이메일" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3453,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("input", { style: styles.input, type: "email", placeholder: "이메일 주소", value: authForm.email, onChange: (e) => setAuthForm((p) => ({ ...p, email: e.target.value })) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3454,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3452,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 4 }, children: "비밀번호" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3457,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("input", { style: styles.input, type: "password", placeholder: "비밀번호 (8자 이상)", value: authForm.password, onChange: (e) => setAuthForm((p) => ({ ...p, password: e.target.value })) }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3458,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3456,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btn(true), width: "100%", justifyContent: "center", padding: "12px" }, onClick: handleSignup, children: "가입 신청" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3460,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", marginTop: 16, fontSize: 12, color: "#94a3b8" }, children: [
        "이미 계정이 있으신가요?",
        " ",
        /* @__PURE__ */ jsxDEV("span", { style: { color: "#6366f1", fontWeight: 600, cursor: "pointer" }, onClick: () => {
          setAuthForm({ email: "", password: "", name: "" });
          setAuthError("");
          setAuthState("logged-out");
        }, children: "로그인" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3465,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3463,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3440,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3439,
      columnNumber: 7
    }, this);
  }
  if (authState === "pending") {
    return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "linear-gradient(195deg, #0f0f23 0%, #1a1a3e 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { style: { ...authCardStyle, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 48, marginBottom: 16 }, children: "⏳" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3478,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }, children: "승인 대기 중" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3479,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 28 }, children: [
        "가입 신청이 완료되었습니다.",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3481,
          columnNumber: 28
        }, this),
        "관리자 승인 후 대시보드를 이용하실 수 있습니다."
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3480,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { style: { ...styles.btn(false), width: "100%", justifyContent: "center" }, onClick: () => {
        setAuthState("logged-out");
        setAuthForm({ email: "", password: "", name: "" });
      }, children: "로그인 화면으로" }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3484,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3477,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3476,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { style: styles.app, children: [
    /* @__PURE__ */ jsxDEV("div", { style: styles.sidebar, children: [
      /* @__PURE__ */ jsxDEV("div", { style: styles.logo, onClick: () => setSidebarCollapsed(!sidebarCollapsed), children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #818cf8, #c084fc)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", flexShrink: 0 }, children: "S" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3497,
          columnNumber: 11
        }, this),
        !sidebarCollapsed && /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }, children: "SNS 대시보드" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3498,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3496,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 0", flex: 1, overflowY: "auto" }, children: [
        menuItems.map(
          (item) => /* @__PURE__ */ jsxDEV("div", { style: styles.menuItem(activeMenu === item.id), onClick: () => setActiveMenu(item.id), children: [
            /* @__PURE__ */ jsxDEV(item.icon, {}, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3504,
              columnNumber: 15
            }, this),
            !sidebarCollapsed && /* @__PURE__ */ jsxDEV("span", { children: item.label }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3505,
              columnNumber: 37
            }, this)
          ] }, item.id, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3503,
            columnNumber: 11
          }, this)
        ),
        /* @__PURE__ */ jsxDEV("div", { style: { borderTop: "1px solid #ffffff12", margin: "10px 0" } }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3510,
          columnNumber: 11
        }, this),
        !sidebarCollapsed && /* @__PURE__ */ jsxDEV("div", { style: { padding: "4px 20px 6px", fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" }, children: "관리" }, void 0, false, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3512,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: styles.menuItem(activeMenu === "sns-integration"), onClick: () => setActiveMenu("sns-integration"), children: [
          /* @__PURE__ */ jsxDEV(Icons.Key, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3517,
            columnNumber: 13
          }, this),
          !sidebarCollapsed && /* @__PURE__ */ jsxDEV("span", { children: "연동 관리" }, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3518,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3516,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: styles.menuItem(activeMenu === "members"), onClick: () => setActiveMenu("members"), children: [
          /* @__PURE__ */ jsxDEV(Icons.Settings, {}, void 0, false, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3521,
            columnNumber: 13
          }, this),
          !sidebarCollapsed && /* @__PURE__ */ jsxDEV("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            "회원 관리",
            membersList.filter((m) => m.approvalStatus === "pending").length > 0 && /* @__PURE__ */ jsxDEV("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 16, height: 16, borderRadius: 8, background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: 700, padding: "0 4px" }, children: membersList.filter((m) => m.approvalStatus === "pending").length }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3526,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
            lineNumber: 3523,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3520,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3501,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { borderTop: "1px solid #ffffff12", padding: "12px 0" }, children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          style: { display: "flex", alignItems: "center", gap: 10, padding: sidebarCollapsed ? "10px 18px" : "10px 20px", cursor: "pointer" },
          onClick: () => setAuthState("logged-out"),
          children: [
            /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#94a3b8", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3539,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("polyline", { points: "16 17 21 12 16 7" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3539,
                columnNumber: 67
              }, this),
              /* @__PURE__ */ jsxDEV("line", { x1: "21", y1: "12", x2: "9", y2: "12" }, void 0, false, {
                fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
                lineNumber: 3539,
                columnNumber: 105
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3538,
              columnNumber: 13
            }, this),
            !sidebarCollapsed && /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, color: "#94a3b8" }, children: "로그아웃" }, void 0, false, {
              fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
              lineNumber: 3541,
              columnNumber: 35
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
          lineNumber: 3536,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
        lineNumber: 3535,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3495,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: styles.main, children: renderPage() }, void 0, false, {
      fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
      lineNumber: 3547,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx",
    lineNumber: 3493,
    columnNumber: 5
  }, this);
}
_s(SNSDashboard, "7rXx/E0EgGCYmTce+CpHsld18og=");
_c4 = SNSDashboard;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "MiniBarChart");
$RefreshReg$(_c2, "MiniLineChart");
$RefreshReg$(_c3, "MetricsLineChart");
$RefreshReg$(_c4, "SNSDashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/khjye/OneDrive/바탕 화면/sns-dashboard-study-main/sns-dashboard-study-main/dashboard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ05vVixXQUFXO0FBQUEsVUFDWEMsVUFBVTtBQUFBLFVBQ1Y3VSxRQUFRO0FBQUEsVUFDUjhVLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQXJXLFNBQVM7QUFBQSxVQUNQZSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ05vVixXQUFXO0FBQUEsVUFDWEMsVUFBVTtBQUFBLFVBQ1Y3VSxRQUFRO0FBQUEsVUFDUjhVLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQXBXLFNBQVM7QUFBQSxVQUNQYyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ05vVixXQUFXO0FBQUEsVUFDWEMsVUFBVTtBQUFBLFVBQ1Y3VSxRQUFRO0FBQUEsVUFDUjhVLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQW5XLFNBQVM7QUFBQSxVQUNQYSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDTm9WLFdBQVc7QUFBQSxVQUNYQyxVQUFVO0FBQUEsVUFDVjdVLFFBQVE7QUFBQSxVQUNSOFUsS0FBSztB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QUFVLEdBQUcsb0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXFEO0FBQUE7QUFBQTtBQUFBLFFBTDdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1BLEtBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVFBO0FBQUEsU0FoREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWlEQTtBQUFBLElBR0EsdUJBQUMsU0FBSSxPQUFPMFcsT0FBT2MsTUFDaEJtUixxQkFBVyxLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLE9BeERGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F5REE7QUFFSjtBQUFDNWhCLEdBcHJHdUJELGNBQVk7QUFBQSxNQUFaQTtBQUFZLElBQUFsQyxJQUFBUSxLQUFBeUIsS0FBQW1pQjtBQUFBLGFBQUFwa0IsSUFBQTtBQUFBLGFBQUFRLEtBQUE7QUFBQSxhQUFBeUIsS0FBQTtBQUFBLGFBQUFtaUIsS0FBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInN1cGFiYXNlIiwiREVNT19NT0RFIiwiSWNvbnMiLCJIb21lIiwiU2VhcmNoIiwiQ2FsZW5kYXIiLCJFZGl0IiwiU2VuZCIsIk1lc3NhZ2VDaXJjbGUiLCJCYXJDaGFydCIsIlphcCIsIlNldHRpbmdzIiwiVHJlbmRVcCIsIlRyZW5kRG93biIsIlBsdXMiLCJDaGVjayIsIkNsb2NrIiwiRXllIiwiSGVhcnQiLCJTaGFyZSIsIkNoZXZyb25SaWdodCIsIkFsZXJ0VHJpYW5nbGUiLCJFeHRlcm5hbExpbmsiLCJDb3B5IiwiRG93bmxvYWQiLCJLZXkiLCJMaW5rMiIsIkV5ZU9mZiIsIlBMQVRGT1JNUyIsImluc3RhZ3JhbSIsIm5hbWUiLCJjb2xvciIsImJnIiwiaWNvbiIsImZhY2Vib29rIiwidHdpdHRlciIsInRocmVhZHMiLCJ5b3V0dWJlIiwiTU9DS19LUEkiLCJsYWJlbCIsInZhbHVlIiwiY2hhbmdlIiwidXAiLCJNT0NLX0NBTEVOREFSIiwiZGF5IiwicGxhdGZvcm0iLCJ0aXRsZSIsInN0YXR1cyIsIk1PQ0tfQ09NTUVOVFMiLCJ1c2VyIiwidGV4dCIsInNlbnRpbWVudCIsInRpbWUiLCJyZXBsaWVkIiwiTU9DS19QT1NUU19SQU5LSU5HIiwicmVhY2giLCJlbmdhZ2UiLCJyYXRlIiwiZm9ybWF0IiwiTU9DS19DT05URU5UU19EQVRBIiwiaWQiLCJyZWdpc3RyYW50IiwicmVnaXN0ZXJlZEF0IiwibWFzdGVyVGV4dCIsInNjaGVkdWxlZEF0IiwicGxhdGZvcm1zIiwicGxhdGZvcm1EcmFmdHMiLCJNT0NLX01FTUJFUlMiLCJlbWFpbCIsImpvaW5lZEF0IiwiYXBwcm92YWxTdGF0dXMiLCJyb2xlIiwiTU9DS19DT01QRVRJVE9SUyIsImZvbGxvd2VycyIsInBvc3RGcmVxIiwidG9wRm9ybWF0IiwiZW5nYWdlUmF0ZSIsIk1PQ0tfVFJFTkRTIiwia2V5d29yZCIsInZvbHVtZSIsIk1PQ0tfQ0hBTk5FTF9TVEFUUyIsInZpZXdzIiwibGlrZXMiLCJjb21tZW50cyIsInNoYXJlcyIsInNhdmVzIiwiTU9DS19DT05URU5UX1NUQVRTIiwiTWluaUJhckNoYXJ0IiwiZGF0YSIsImhlaWdodCIsIm1heCIsIk1hdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsInBhZGRpbmciLCJtYXAiLCJ2IiwiaSIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtYXhXaWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5IZWlnaHQiLCJ0cmFuc2l0aW9uIiwiX2MiLCJNaW5pTGluZUNoYXJ0IiwibWluIiwicmFuZ2UiLCJwb2ludHMiLCJsZW5ndGgiLCJqb2luIiwicmVwbGFjZSIsIl9jMiIsIk1FVFJJQ19DT0xPUlMiLCJNZXRyaWNzTGluZUNoYXJ0IiwibGFiZWxzIiwic2VyaWVzIiwiUEwiLCJQUiIsIlBUIiwiUEIiLCJWVyIsIlZIIiwiQ1ciLCJDSCIsImdldFgiLCJnZXRZIiwibWFyZ2luVG9wIiwidCIsInMiLCJzaSIsInB0cyIsImwiLCJzbGljZSIsImZsZXhXcmFwIiwicGFkZGluZ0xlZnQiLCJmb250U2l6ZSIsIl9jMyIsIlNOU0Rhc2hib2FyZCIsIl9zIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJzaWRlYmFyQ29sbGFwc2VkIiwic2V0U2lkZWJhckNvbGxhcHNlZCIsIm11bHRpVXNlSW5wdXQiLCJzZXRNdWx0aVVzZUlucHV0IiwiZ2VuZXJhdGVkQ29udGVudCIsInNldEdlbmVyYXRlZENvbnRlbnQiLCJiZW5jaG1hcmtVcmwiLCJzZXRCZW5jaG1hcmtVcmwiLCJzZWxlY3RlZFBsYXRmb3JtcyIsInNldFNlbGVjdGVkUGxhdGZvcm1zIiwiY29tbWVudEZpbHRlciIsInNldENvbW1lbnRGaWx0ZXIiLCJjYWxlbmRhck1vbnRoIiwiYW5hbHlzaXNWaWV3Iiwic2V0QW5hbHlzaXNWaWV3Iiwic2hvd0JlbmNobWFya1Jlc3VsdCIsInNldFNob3dCZW5jaG1hcmtSZXN1bHQiLCJwdWJsaXNoQ2hlY2tlZCIsInNldFB1Ymxpc2hDaGVja2VkIiwiYWlJbnNpZ2h0Iiwic2V0QWlJbnNpZ2h0IiwiY29udGVudHNWaWV3Iiwic2V0Q29udGVudHNWaWV3IiwiZWRpdGluZ0NvbnRlbnQiLCJzZXRFZGl0aW5nQ29udGVudCIsImNvbnRlbnRGaWx0ZXIiLCJzZXRDb250ZW50RmlsdGVyIiwiY29udGVudEVkaXRUYWIiLCJzZXRDb250ZW50RWRpdFRhYiIsInB1Ymxpc2hNb2RlIiwic2V0UHVibGlzaE1vZGUiLCJjb250ZW50c0xpc3QiLCJzZXRDb250ZW50c0xpc3QiLCJkYlRvQ29udGVudCIsInJvdyIsIm1hc3Rlcl90ZXh0Iiwic2NoZWR1bGVkX2F0IiwicGxhdGZvcm1fZHJhZnRzIiwicHVibGlzaFJlc3VsdHMiLCJwdWJsaXNoX3Jlc3VsdHMiLCJyZWdpc3RlcmVkX2F0IiwiZmlyc3RQdWJsaXNoZWRBdCIsImZpcnN0X3B1Ymxpc2hlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJjb250ZW50VG9EYiIsImMiLCJEYXRlIiwidG9JU09TdHJpbmciLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJ0aGVuIiwiZXJyb3IiLCJjb25zb2xlIiwiQUlfVE9PTFNfREVGQVVMVCIsInVybCIsImRlc2MiLCJhaVRvb2xzIiwic2V0QWlUb29scyIsImVxIiwic2luZ2xlIiwic2F2ZUFpVG9vbHNUb0RiIiwidXBkYXRlZCIsInVwc2VydCIsImtleSIsImFpVG9vbEVkaXRNb2RlIiwic2V0QWlUb29sRWRpdE1vZGUiLCJhaVRvb2xFZGl0RGF0YSIsInNldEFpVG9vbEVkaXREYXRhIiwiZHJhZnRQbGF0Zm9ybU9yZGVyIiwic2V0RHJhZnRQbGF0Zm9ybU9yZGVyIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZHJhZnRQbGF0Zm9ybURyYWdSZWYiLCJkcmFmdFByb21wdHMiLCJzZXREcmFmdFByb21wdHMiLCJzZWxlY3RlZFByb21wdElkIiwic2V0U2VsZWN0ZWRQcm9tcHRJZCIsImRyYWZ0UHJvbXB0RWRpdCIsInNldERyYWZ0UHJvbXB0RWRpdCIsImNvbnRlbnQiLCJkcmFmdEdlblBsYXRmb3JtcyIsInNldERyYWZ0R2VuUGxhdGZvcm1zIiwiaXNEcmFmdEdlbmVyYXRpbmciLCJzZXRJc0RyYWZ0R2VuZXJhdGluZyIsIm9wdGltaXphdGlvblRhYiIsInNldE9wdGltaXphdGlvblRhYiIsInNhdmVEcmFmdFByb21wdHNUb0RiIiwiRXJyb3IiLCJtZXNzYWdlIiwic2VhcmNoVGl0bGUiLCJzZXRTZWFyY2hUaXRsZSIsInNlYXJjaFBsYXRmb3JtcyIsInNldFNlYXJjaFBsYXRmb3JtcyIsInNlYXJjaFN0YXR1c2VzIiwic2V0U2VhcmNoU3RhdHVzZXMiLCJzZWFyY2hSZWdEYXRlIiwic2V0U2VhcmNoUmVnRGF0ZSIsInNlYXJjaFB1YkRhdGUiLCJzZXRTZWFyY2hQdWJEYXRlIiwic2VhcmNoUmVnaXN0cmFudCIsInNldFNlYXJjaFJlZ2lzdHJhbnQiLCJBTExfUExBVEZPUk1TIiwiYXBwbGllZFNlYXJjaCIsInNldEFwcGxpZWRTZWFyY2giLCJzdGF0dXNlcyIsInJlZ0RhdGUiLCJwdWJEYXRlIiwiY29udGVudHNDYWxWaWV3Iiwic2V0Q29udGVudHNDYWxWaWV3IiwiY29udGVudHNDYWxZZWFyIiwic2V0Q29udGVudHNDYWxZZWFyIiwiY29udGVudHNDYWxNb250aCIsInNldENvbnRlbnRzQ2FsTW9udGgiLCJjb250ZW50c0NhbFNlbGVjdGVkRGF5Iiwic2V0Q29udGVudHNDYWxTZWxlY3RlZERheSIsImNvbnRlbnRzQ2FsUGxhdGZvcm1zIiwic2V0Q29udGVudHNDYWxQbGF0Zm9ybXMiLCJhdXRoU3RhdGUiLCJzZXRBdXRoU3RhdGUiLCJhdXRoRm9ybSIsInNldEF1dGhGb3JtIiwicGFzc3dvcmQiLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJtZW1iZXJzTGlzdCIsInNldE1lbWJlcnNMaXN0IiwiaG9tZUNoYW5uZWxQbGF0Zm9ybXMiLCJzZXRIb21lQ2hhbm5lbFBsYXRmb3JtcyIsImhvbWVDaGFubmVsU3RhcnREYXRlIiwic2V0SG9tZUNoYW5uZWxTdGFydERhdGUiLCJob21lQ2hhbm5lbEVuZERhdGUiLCJzZXRIb21lQ2hhbm5lbEVuZERhdGUiLCJob21lQ29udGVudFBsYXRmb3JtcyIsInNldEhvbWVDb250ZW50UGxhdGZvcm1zIiwiaG9tZUNvbnRlbnRTdGFydERhdGUiLCJzZXRIb21lQ29udGVudFN0YXJ0RGF0ZSIsImhvbWVDb250ZW50RW5kRGF0ZSIsInNldEhvbWVDb250ZW50RW5kRGF0ZSIsImhvbWVDb250ZW50VGl0bGUiLCJzZXRIb21lQ29udGVudFRpdGxlIiwibWVudUl0ZW1zIiwic3RhdHVzQ29sb3JzIiwiYXBwcm92ZWQiLCJkcmFmdCIsInJldmlldyIsInN0YXR1c0xhYmVscyIsInNlbnRpbWVudENvbG9ycyIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJuZXV0cmFsIiwic2VudGltZW50TGFiZWxzIiwiaXNHZW5lcmF0aW5nIiwic2V0SXNHZW5lcmF0aW5nIiwiaW50ZWdyYXRpb25UYWIiLCJzZXRJbnRlZ3JhdGlvblRhYiIsInNuc09yZGVyIiwic2V0U25zT3JkZXIiLCJkcmFnU25zUmVmIiwic2VydmljZUNyZWRlbnRpYWxzIiwic2V0U2VydmljZUNyZWRlbnRpYWxzIiwicHJvamVjdFVybCIsInB1Ymxpc2hhYmxlS2V5IiwiYW5vbktleUxlZ2FjeSIsImdpdGh1YiIsInBlcnNvbmFsQWNjZXNzVG9rZW4iLCJvd25lciIsInJlcG8iLCJ2ZXJjZWwiLCJhY2Nlc3NUb2tlbiIsInByb2plY3RJZCIsIm9yZ0lkIiwiZ29vZ2xlU2hlZXQiLCJzcHJlYWRzaGVldElkIiwic2VydmljZUFjY291bnRFbWFpbCIsInByaXZhdGVLZXkiLCJvcGVuYWkiLCJhcGlLZXkiLCJzZXJ2aWNlU2F2ZVN0YXR1cyIsInNldFNlcnZpY2VTYXZlU3RhdHVzIiwic25zQ3JlZGVudGlhbHMiLCJzZXRTbnNDcmVkZW50aWFscyIsInBhZ2VBY2Nlc3NUb2tlbiIsInBhZ2VJZCIsImJlYXJlclRva2VuIiwiY29uc3VtZXJLZXkiLCJjb25zdW1lcktleVNlY3JldCIsImFjY2Vzc1Rva2VuU2VjcmV0IiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJhcHBJZCIsInVzZXJJZCIsInNuc1NhdmVTdGF0dXMiLCJzZXRTbnNTYXZlU3RhdHVzIiwic2hvd1Rva2VucyIsInNldFNob3dUb2tlbnMiLCJsb2FkQ3JlZGVudGlhbHMiLCJzbnNEYXRhIiwic3ZjRGF0YSIsIm1lbWJlcnNEYXRhIiwiUHJvbWlzZSIsImFsbCIsIm0iLCJqb2luZWRfYXQiLCJhcHByb3ZhbF9zdGF0dXMiLCJsb2FkZWQiLCJmb3JFYWNoIiwiY3JlZGVudGlhbHMiLCJwcmV2IiwibWVyZ2VkIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJzZXJ2aWNlIiwiaGFuZGxlRHJhZnRHZW5lcmF0ZSIsInRyaW0iLCJhbGVydCIsIlBMQVRGT1JNX05BTUVTIiwiUExBVEZPUk1fR1VJREVTIiwicGxhdGZvcm1MaXN0IiwicHJvbXB0SW5zdHJ1Y3Rpb24iLCJzeXN0ZW1Qcm9tcHQiLCJyZXNwIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsIm1vZGVsIiwibWVzc2FnZXMiLCJ0ZW1wZXJhdHVyZSIsImpzb24iLCJvayIsInJhdyIsImNob2ljZXMiLCJqc29uU3RyIiwiZ2VuZXJhdGVkIiwiZSIsImhhbmRsZUdlbmVyYXRlIiwic2V0VGltZW91dCIsImNoYXJDb3VudCIsImhhc2h0YWdzIiwidGlwIiwic3R5bGVzIiwiYXBwIiwiZm9udEZhbWlseSIsIm92ZXJmbG93Iiwic2lkZWJhciIsImZsZXhTaHJpbmsiLCJsb2dvIiwiYm9yZGVyQm90dG9tIiwiY3Vyc29yIiwid2hpdGVTcGFjZSIsIm1lbnVJdGVtIiwiYWN0aXZlIiwiYm9yZGVyTGVmdCIsImZvbnRXZWlnaHQiLCJtYWluIiwicGFnZVRpdGxlIiwibWFyZ2luQm90dG9tIiwibGV0dGVyU3BhY2luZyIsInBhZ2VTdWJ0aXRsZSIsImNhcmQiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJjYXJkVGl0bGUiLCJncmlkMiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkMyIsImdyaWQ0IiwiYnRuIiwicHJpbWFyeSIsImJ0blNtIiwiaW5wdXQiLCJvdXRsaW5lIiwiYm94U2l6aW5nIiwidGV4dGFyZWEiLCJyZXNpemUiLCJsaW5lSGVpZ2h0IiwiYmFkZ2UiLCJ0YWciLCJwbGF0Zm9ybURvdCIsInRhYkJhciIsInRhYiIsInJlbmRlckhvbWUiLCJjaGFubmVsUm93cyIsImVudHJpZXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNvbnRlbnRHcm91cGVkIiwiciIsInJlZHVjZSIsImFjYyIsImV4aXN0aW5nIiwiZmluZCIsIngiLCJwdXNoIiwibWV0cmljc1RoIiwidGV4dEFsaWduIiwibWV0cmljc1RoTm8iLCJtZXRyaWNzVGQiLCJtZXRyaWNzVGRObyIsImNoYW5uZWxDaGFydExhYmVscyIsImNoYW5uZWxDaGFydFNlcmllcyIsImNvbnRlbnRDaGFydExhYmVscyIsIl8iLCJjb250ZW50Q2hhcnRTZXJpZXMiLCJtaW5XaWR0aCIsIm9uIiwidGFyZ2V0IiwibWFyZ2luTGVmdCIsIm92ZXJmbG93WCIsImJvcmRlckNvbGxhcHNlIiwic3RhdCIsInRvTG9jYWxlU3RyaW5nIiwicmVuZGVyUmVzZWFyY2giLCJqdXN0aWZ5Q29udGVudCIsImgiLCJyZW5kZXJDYWxlbmRhciIsImRheXNJbk1vbnRoIiwiZmlyc3REYXkiLCJkYXlzIiwiZCIsImV2ZW50cyIsImlzVG9kYXkiLCJldiIsImoiLCJ0ZXh0T3ZlcmZsb3ciLCJkYXRlIiwiZXZlbnQiLCJyZW5kZXJDb250ZW50cyIsIlNUQVRVU19MQUJFTFMiLCJzY2hlZHVsZWQiLCJwdWJsaXNoZWQiLCJTVEFUVVNfQ09MT1JTIiwic2F2ZUFpVG9vbCIsImRlbGV0ZUFpVG9vbCIsImluZGV4IiwiaGFuZGxlRHJhZnREcmFnU3RhcnQiLCJjdXJyZW50IiwiaGFuZGxlRHJhZnREcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlRHJhZnREcm9wIiwidGFyZ2V0SWQiLCJkcmFnZ2VkSWQiLCJuZXh0IiwiaW5kZXhPZiIsInRvIiwic3BsaWNlIiwic2V0SXRlbSIsInVwZGF0ZUNvbnRlbnQiLCJmaWVsZCIsInVwZGF0ZURyYWZ0IiwidG9nZ2xlUGxhdGZvcm0iLCJoYW5kbGVTYXZlQ29udGVudCIsInN0YXR1c092ZXJyaWRlIiwidG9TYXZlIiwicmVzdWx0cyIsImZ1bmN0aW9ucyIsImludm9rZSIsInN1Y2Nlc3MiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJub3ciLCJpbnNlcnQiLCJ1cGRhdGUiLCJ0b29sIiwicG9zaXRpb24iLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJzdHlsZSIsInRvcCIsInJpZ2h0IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSaWdodCIsIm92ZXJmbG93WSIsIm1heEhlaWdodCIsInNhdmVkSWQiLCJib3JkZXJUb3AiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsInVzZXJTZWxlY3QiLCJhY2NlbnRDb2xvciIsInN0b3BQcm9wYWdhdGlvbiIsInBhZGRpbmdUb3AiLCJnZXREYXlzSW5Nb250aCIsInkiLCJnZXREYXRlIiwiZ2V0Rmlyc3REYXlPZk1vbnRoIiwiZ2V0RGF5IiwiTU9OVEhfTkFNRVMiLCJEQVlfTkFNRVMiLCJoYW5kbGVDYWxQcmV2IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImhhbmRsZUNhbE5leHQiLCJoYW5kbGVDYWxUb2RheSIsImdldFBvc3RzRm9yRGF0ZSIsImRhdGVTdHIiLCJtYXRjaERhdGUiLCJzdGFydHNXaXRoIiwic29tZSIsImJ1aWxkTW9udGhHcmlkIiwiZGF5c0NvdW50Iiwid2Vla3MiLCJBcnJheSIsImZpbGwiLCJTVEFUVVNfRklMVEVSX09QVElPTlMiLCJ0b2dnbGVQbGF0Zm9ybUZpbHRlciIsImsiLCJ0b2dnbGVTdGF0dXNGaWx0ZXIiLCJhZl90aXRsZSIsImFmX3BsYXRmb3JtcyIsImFmX3N0YXR1c2VzIiwiYWZfcmVnRGF0ZSIsImFmX3B1YkRhdGUiLCJhZl9yZWdpc3RyYW50IiwiZmlsdGVyZWQiLCJ0b0xvd2VyQ2FzZSIsImFsbFNlbGVjdGVkIiwiZXZlcnkiLCJibGFuayIsIm8iLCJ0ZXh0VHJhbnNmb3JtIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZSIsInVwZGF0ZUZpZWxkcyIsIm1hcmdpblJpZ2h0IiwiZmxhdCIsImlkeCIsIlN0cmluZyIsInBhZFN0YXJ0IiwicG9zdHMiLCJpc1NlbGVjdGVkIiwiZG93IiwicG9zdCIsInBpIiwicGwiLCJzZWxEYXRlIiwiZG93U2VsIiwiZHMiLCJjbnQiLCJyZW5kZXJDcmVhdGUiLCJ0b25lIiwiYW5pbWF0aW9uIiwibWFyZ2luIiwicmVuZGVyQ29tbXVuaXR5IiwiY291bnQiLCJwY3QiLCJmIiwicmVuZGVyQW5hbHl0aWNzIiwic3BsaXQiLCJyYW5kb20iLCJ2YWx1ZXMiLCJyZW5kZXJPcHRpbWl6ZSIsInJhbmsiLCJ0b3BpYyIsImF2Z1JhdGUiLCJjb21ibyIsInRpIiwiZGkiLCJ0b0ZpeGVkIiwicmVhc29uIiwicmVjIiwicmVuZGVyU25zSW50ZWdyYXRpb24iLCJzZXJ2aWNlRmllbGRzIiwibm90ZSIsImZpZWxkcyIsInBsYWNlaG9sZGVyIiwic2VjcmV0IiwiaGFuZGxlU2VydmljZUNyZWRlbnRpYWxDaGFuZ2UiLCJmaWVsZEtleSIsImhhbmRsZVNlcnZpY2VTYXZlIiwiaXNfY29ubmVjdGVkIiwib25Db25mbGljdCIsImlzU2VydmljZUNvbm5lY3RlZCIsInBsYXRmb3JtRmllbGRzIiwiZ3JvdXAiLCJwYWlyIiwicGFpckJnIiwicGFpckJvcmRlciIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJvcCIsImhhbmRsZUNyZWRlbnRpYWxDaGFuZ2UiLCJoYW5kbGVTYXZlIiwidG9nZ2xlVG9rZW5WaXNpYmlsaXR5IiwiaXNDb25uZWN0ZWQiLCJjcmVkcyIsInJlbmRlckNyZWRlbnRpYWxDYXJkIiwiY29ubmVjdGVkIiwic2F2ZVN0YXR1cyIsIm9uRmllbGRDaGFuZ2UiLCJvblNhdmUiLCJ0b2tlblByZWZpeCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJvcCIsImhhc0dyb3VwIiwidG9rZW5LZXkiLCJpc1Zpc2libGUiLCJ0cmFuc2Zvcm0iLCJncm91cHMiLCJnIiwicmVuZGVyRmllbGRJbnB1dCIsInJvd3MiLCJmaSIsInBhZGRpbmdCb3R0b20iLCJzZXJ2aWNlS2V5IiwicmVuZGVyTWVtYmVycyIsIkFQUFJPVkFMX0NPTE9SUyIsInBlbmRpbmciLCJyZWplY3RlZCIsIlJPTEVfQ09MT1JTIiwiYWRtaW4iLCJvcGVyYXRvciIsInBlbmRpbmdDb3VudCIsInVwZGF0ZUFwcHJvdmFsIiwidmFsIiwidXBkYXRlUm9sZSIsImRlbGV0ZU1lbWJlciIsImFwcHJvdmFsU2VsZWN0U3R5bGUiLCJhcHBlYXJhbmNlIiwiV2Via2l0QXBwZWFyYW5jZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJyb2xlU2VsZWN0U3R5bGUiLCJtZW1iZXIiLCJzdGVwIiwicmVuZGVyUGFnZSIsImhhbmRsZUxvZ2luIiwiaGFuZGxlU2lnbnVwIiwiYXV0aENhcmRTdHlsZSIsIml0ZW0iLCJfYzQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZGFzaGJvYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN1cGFiYXNlLCBERU1PX01PREUgfSBmcm9tIFwiLi9zdXBhYmFzZS5qc1wiO1xuXG4vLyAtLS0gSWNvbnMgKGlubGluZSBTVkcgY29tcG9uZW50cykgLS0tXG5jb25zdCBJY29ucyA9IHtcbiAgSG9tZTogKCkgPT4gPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0zIDlsOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnpcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjkgMjIgOSAxMiAxNSAxMiAxNSAyMlwiLz48L3N2Zz4sXG4gIFNlYXJjaDogKCkgPT4gPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PGNpcmNsZSBjeD1cIjExXCIgY3k9XCIxMVwiIHI9XCI4XCIvPjxsaW5lIHgxPVwiMjFcIiB5MT1cIjIxXCIgeDI9XCIxNi42NVwiIHkyPVwiMTYuNjVcIi8+PC9zdmc+LFxuICBDYWxlbmRhcjogKCkgPT4gPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHJlY3QgeD1cIjNcIiB5PVwiNFwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiLz48bGluZSB4MT1cIjE2XCIgeTE9XCIyXCIgeDI9XCIxNlwiIHkyPVwiNlwiLz48bGluZSB4MT1cIjhcIiB5MT1cIjJcIiB4Mj1cIjhcIiB5Mj1cIjZcIi8+PGxpbmUgeDE9XCIzXCIgeTE9XCIxMFwiIHgyPVwiMjFcIiB5Mj1cIjEwXCIvPjwvc3ZnPixcbiAgRWRpdDogKCkgPT4gPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcIi8+PHBhdGggZD1cIk0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXpcIi8+PC9zdmc+LFxuICBTZW5kOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48bGluZSB4MT1cIjIyXCIgeTE9XCIyXCIgeDI9XCIxMVwiIHkyPVwiMTNcIi8+PHBvbHlnb24gcG9pbnRzPVwiMjIgMiAxNSAyMiAxMSAxMyAyIDkgMjIgMlwiLz48L3N2Zz4sXG4gIE1lc3NhZ2VDaXJjbGU6ICgpID0+IDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMjEgMTEuNWE4LjM4IDguMzggMCAwIDEtLjkgMy44IDguNSA4LjUgMCAwIDEtNy42IDQuNyA4LjM4IDguMzggMCAwIDEtMy44LS45TDMgMjFsMS45LTUuN2E4LjM4IDguMzggMCAwIDEtLjktMy44IDguNSA4LjUgMCAwIDEgNC43LTcuNiA4LjM4IDguMzggMCAwIDEgMy44LS45aC41YTguNDggOC40OCAwIDAgMSA4IDh2LjV6XCIvPjwvc3ZnPixcbiAgQmFyQ2hhcnQ6ICgpID0+IDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjIwXCIgeDI9XCIxMlwiIHkyPVwiMTBcIi8+PGxpbmUgeDE9XCIxOFwiIHkxPVwiMjBcIiB4Mj1cIjE4XCIgeTI9XCI0XCIvPjxsaW5lIHgxPVwiNlwiIHkxPVwiMjBcIiB4Mj1cIjZcIiB5Mj1cIjE2XCIvPjwvc3ZnPixcbiAgWmFwOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cG9seWdvbiBwb2ludHM9XCIxMyAyIDMgMTQgMTIgMTQgMTEgMjIgMjEgMTAgMTIgMTAgMTMgMlwiLz48L3N2Zz4sXG4gIFNldHRpbmdzOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjNcIi8+PHBhdGggZD1cIk0xOS40IDE1YTEuNjUgMS42NSAwIDAgMCAuMzMgMS44MmwuMDYuMDZhMiAyIDAgMCAxIDAgMi44MyAyIDIgMCAwIDEtMi44MyAwbC0uMDYtLjA2YTEuNjUgMS42NSAwIDAgMC0xLjgyLS4zMyAxLjY1IDEuNjUgMCAwIDAtMSAxLjUxVjIxYTIgMiAwIDAgMS0yIDIgMiAyIDAgMCAxLTItMnYtLjA5QTEuNjUgMS42NSAwIDAgMCA5IDE5LjRhMS42NSAxLjY1IDAgMCAwLTEuODIuMzNsLS4wNi4wNmEyIDIgMCAwIDEtMi44MyAwIDIgMiAwIDAgMSAwLTIuODNsLjA2LS4wNkExLjY1IDEuNjUgMCAwIDAgNC42OCAxNWExLjY1IDEuNjUgMCAwIDAtMS41MS0xSDNhMiAyIDAgMCAxLTItMiAyIDIgMCAwIDEgMi0yaC4wOUExLjY1IDEuNjUgMCAwIDAgNC42IDlhMS42NSAxLjY1IDAgMCAwLS4zMy0xLjgybC0uMDYtLjA2YTIgMiAwIDAgMSAwLTIuODMgMiAyIDAgMCAxIDIuODMgMGwuMDYuMDZBMS42NSAxLjY1IDAgMCAwIDkgNC42OGExLjY1IDEuNjUgMCAwIDAgMS0xLjUxVjNhMiAyIDAgMCAxIDItMiAyIDIgMCAwIDEgMiAydi4wOWExLjY1IDEuNjUgMCAwIDAgMSAxLjUxIDEuNjUgMS42NSAwIDAgMCAxLjgyLS4zM2wuMDYtLjA2YTIgMiAwIDAgMSAyLjgzIDAgMiAyIDAgMCAxIDAgMi44M2wtLjA2LjA2QTEuNjUgMS42NSAwIDAgMCAxOS40IDlhMS42NSAxLjY1IDAgMCAwIDEuNTEgMUgyMWEyIDIgMCAwIDEgMiAyIDIgMiAwIDAgMS0yIDJoLS4wOWExLjY1IDEuNjUgMCAwIDAtMS41MSAxelwiLz48L3N2Zz4sXG4gIFRyZW5kVXA6ICgpID0+IDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyLjVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBvbHlsaW5lIHBvaW50cz1cIjIzIDYgMTMuNSAxNS41IDguNSAxMC41IDEgMThcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjE3IDYgMjMgNiAyMyAxMlwiLz48L3N2Zz4sXG4gIFRyZW5kRG93bjogKCkgPT4gPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjIuNVwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cG9seWxpbmUgcG9pbnRzPVwiMjMgMTggMTMuNSA4LjUgOC41IDEzLjUgMSA2XCIvPjxwb2x5bGluZSBwb2ludHM9XCIxNyAxOCAyMyAxOCAyMyAxMlwiLz48L3N2Zz4sXG4gIFBsdXM6ICgpID0+IDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyLjVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PGxpbmUgeDE9XCIxMlwiIHkxPVwiNVwiIHgyPVwiMTJcIiB5Mj1cIjE5XCIvPjxsaW5lIHgxPVwiNVwiIHkxPVwiMTJcIiB4Mj1cIjE5XCIgeTI9XCIxMlwiLz48L3N2Zz4sXG4gIENoZWNrOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMi41XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMCA2IDkgMTcgNCAxMlwiLz48L3N2Zz4sXG4gIENsb2NrOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIvPjxwb2x5bGluZSBwb2ludHM9XCIxMiA2IDEyIDEyIDE2IDE0XCIvPjwvc3ZnPixcbiAgRXllOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTEgMTJzNC04IDExLTggMTEgOCAxMSA4LTQgOC0xMSA4LTExLTgtMTEtOHpcIi8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIzXCIvPjwvc3ZnPixcbiAgSGVhcnQ6ICgpID0+IDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMjAuODQgNC42MWE1LjUgNS41IDAgMCAwLTcuNzggMEwxMiA1LjY3bC0xLjA2LTEuMDZhNS41IDUuNSAwIDAgMC03Ljc4IDcuNzhsMS4wNiAxLjA2TDEyIDIxLjIzbDcuNzgtNy43OCAxLjA2LTEuMDZhNS41IDUuNSAwIDAgMCAwLTcuNzh6XCIvPjwvc3ZnPixcbiAgU2hhcmU6ICgpID0+IDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxjaXJjbGUgY3g9XCIxOFwiIGN5PVwiNVwiIHI9XCIzXCIvPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCIxMlwiIHI9XCIzXCIvPjxjaXJjbGUgY3g9XCIxOFwiIGN5PVwiMTlcIiByPVwiM1wiLz48bGluZSB4MT1cIjguNTlcIiB5MT1cIjEzLjUxXCIgeDI9XCIxNS40MlwiIHkyPVwiMTcuNDlcIi8+PGxpbmUgeDE9XCIxNS40MVwiIHkxPVwiNi41MVwiIHgyPVwiOC41OVwiIHkyPVwiMTAuNDlcIi8+PC9zdmc+LFxuICBDaGV2cm9uUmlnaHQ6ICgpID0+IDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiLz48L3N2Zz4sXG4gIEFsZXJ0VHJpYW5nbGU6ICgpID0+IDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6XCIvPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjlcIiB4Mj1cIjEyXCIgeTI9XCIxM1wiLz48bGluZSB4MT1cIjEyXCIgeTE9XCIxN1wiIHgyPVwiMTIuMDFcIiB5Mj1cIjE3XCIvPjwvc3ZnPixcbiAgRXh0ZXJuYWxMaW5rOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDZcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjE1IDMgMjEgMyAyMSA5XCIvPjxsaW5lIHgxPVwiMTBcIiB5MT1cIjE0XCIgeDI9XCIyMVwiIHkyPVwiM1wiLz48L3N2Zz4sXG4gIENvcHk6ICgpID0+IDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxyZWN0IHg9XCI5XCIgeT1cIjlcIiB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiByeD1cIjJcIiByeT1cIjJcIi8+PHBhdGggZD1cIk01IDE1SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOWEyIDIgMCAwIDEgMiAydjFcIi8+PC9zdmc+LFxuICBEb3dubG9hZDogKCkgPT4gPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00XCIvPjxwb2x5bGluZSBwb2ludHM9XCI3IDEwIDEyIDE1IDE3IDEwXCIvPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjE1XCIgeDI9XCIxMlwiIHkyPVwiM1wiLz48L3N2Zz4sXG4gIEtleTogKCkgPT4gPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0yMSAybC0yIDJtLTcuNjEgNy42MWE1LjUgNS41IDAgMSAxLTcuNzc4IDcuNzc4IDUuNSA1LjUgMCAwIDEgNy43NzctNy43Nzd6bTAgMEwxNS41IDcuNW0wIDBsMyAzTDIyIDdsLTMtM20tMy41IDMuNUwxOSA0XCIvPjwvc3ZnPixcbiAgTGluazI6ICgpID0+IDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTUgN2gzYTUgNSAwIDAgMSA1IDUgNSA1IDAgMCAxLTUgNWgtM20tNiAwSDZhNSA1IDAgMCAxLTUtNSA1IDUgMCAwIDEgNS01aDNcIi8+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCIvPjwvc3ZnPixcbiAgRXllT2ZmOiAoKSA9PiA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMTIgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0XCIvPjxsaW5lIHgxPVwiMVwiIHkxPVwiMVwiIHgyPVwiMjNcIiB5Mj1cIjIzXCIvPjwvc3ZnPixcbn07XG5cbi8vIC0tLSBQbGF0Zm9ybSBjb2xvcnMgJiBkYXRhIC0tLVxuY29uc3QgUExBVEZPUk1TID0ge1xuICBpbnN0YWdyYW06IHsgbmFtZTogXCJJbnN0YWdyYW1cIiwgY29sb3I6IFwiI0UxMzA2Q1wiLCBiZzogXCIjRTEzMDZDMTVcIiwgaWNvbjogXCLwn5O4XCIgfSxcbiAgZmFjZWJvb2s6IHsgbmFtZTogXCJGYWNlYm9va1wiLCBjb2xvcjogXCIjMTg3N0YyXCIsIGJnOiBcIiMxODc3RjIxNVwiLCBpY29uOiBcIvCfkaRcIiB9LFxuICB0d2l0dGVyOiB7IG5hbWU6IFwiWCAoVHdpdHRlcilcIiwgY29sb3I6IFwiIzE0MTcxQVwiLCBiZzogXCIjMTQxNzFBMTJcIiwgaWNvbjogXCLwnZWPXCIgfSxcbiAgdGhyZWFkczogeyBuYW1lOiBcIlRocmVhZHNcIiwgY29sb3I6IFwiIzZCNzI4MFwiLCBiZzogXCIjNkI3MjgwMTVcIiwgaWNvbjogXCLwn5SXXCIgfSxcbiAgeW91dHViZTogeyBuYW1lOiBcIllvdVR1YmVcIiwgY29sb3I6IFwiI0ZGMDAwMFwiLCBiZzogXCIjRkYwMDAwMTJcIiwgaWNvbjogXCLilrbvuI9cIiB9LFxufTtcblxuLy8gLS0tIFNpbXVsYXRlZCBEYXRhIC0tLVxuY29uc3QgTU9DS19LUEkgPSBbXG4gIHsgbGFiZWw6IFwi7LSdIO2MlOuhnOybjFwiLCB2YWx1ZTogXCIxMjgsNDMwXCIsIGNoYW5nZTogXCIrMi40JVwiLCB1cDogdHJ1ZSB9LFxuICB7IGxhYmVsOiBcIuydtOuyiCDso7wg64+E64usXCIsIHZhbHVlOiBcIjQ1LDIwMFwiLCBjaGFuZ2U6IFwiKzEyLjElXCIsIHVwOiB0cnVlIH0sXG4gIHsgbGFiZWw6IFwi7J246rKM7J207KeA66i87Yq47JyoXCIsIHZhbHVlOiBcIjQuNyVcIiwgY2hhbmdlOiBcIi0wLjMlXCIsIHVwOiBmYWxzZSB9LFxuICB7IGxhYmVsOiBcIuyYiOyVvSDrjIDquLBcIiwgdmFsdWU6IFwiN+qxtFwiLCBjaGFuZ2U6IFwiXCIsIHVwOiB0cnVlIH0sXG5dO1xuXG5jb25zdCBNT0NLX0NBTEVOREFSID0gW1xuICB7IGRheTogMTAsIHBsYXRmb3JtOiBcImluc3RhZ3JhbVwiLCB0aXRsZTogXCLsi6DsoJztkogg65+w7LmtIOy6kOufrOyFgFwiLCBzdGF0dXM6IFwiYXBwcm92ZWRcIiB9LFxuICB7IGRheTogMTAsIHBsYXRmb3JtOiBcImZhY2Vib29rXCIsIHRpdGxlOiBcIuyLoOygnO2SiCDrn7Dsua0g7Y+s7Iqk7Yq4XCIsIHN0YXR1czogXCJhcHByb3ZlZFwiIH0sXG4gIHsgZGF5OiAxMSwgcGxhdGZvcm06IFwidHdpdHRlclwiLCB0aXRsZTogXCLtirjroIzrk5wg67CIIOy9mO2FkOy4oFwiLCBzdGF0dXM6IFwiZHJhZnRcIiB9LFxuICB7IGRheTogMTIsIHBsYXRmb3JtOiBcInlvdXR1YmVcIiwgdGl0bGU6IFwi7KCc7ZKIIOumrOu3sCDsiI/suKBcIiwgc3RhdHVzOiBcInJldmlld1wiIH0sXG4gIHsgZGF5OiAxMywgcGxhdGZvcm06IFwiaW5zdGFncmFtXCIsIHRpdGxlOiBcIuu4jOuenOuTnCDsiqTthqDrpqwg66a07IqkXCIsIHN0YXR1czogXCJkcmFmdFwiIH0sXG4gIHsgZGF5OiAxNCwgcGxhdGZvcm06IFwidGhyZWFkc1wiLCB0aXRsZTogXCLso7zqsIQg7J247IKs7J207Yq4IOyKpOugiOuTnFwiLCBzdGF0dXM6IFwiYXBwcm92ZWRcIiB9LFxuICB7IGRheTogMTUsIHBsYXRmb3JtOiBcInR3aXR0ZXJcIiwgdGl0bGU6IFwi7J2067Kk7Yq4IOqzteyngFwiLCBzdGF0dXM6IFwiZHJhZnRcIiB9LFxuICB7IGRheTogMTYsIHBsYXRmb3JtOiBcImluc3RhZ3JhbVwiLCB0aXRsZTogXCJVR0Mg66as6re4656oXCIsIHN0YXR1czogXCJyZXZpZXdcIiB9LFxuXTtcblxuY29uc3QgTU9DS19DT01NRU5UUyA9IFtcbiAgeyBwbGF0Zm9ybTogXCJpbnN0YWdyYW1cIiwgdXNlcjogXCLquYDrr7zsiJhcIiwgdGV4dDogXCLsnbQg7KCc7ZKIIOyDieyDgSDri6Trpbgg6rKD64+EIOyeiOuCmOyalD9cIiwgc2VudGltZW50OiBcIm5ldXRyYWxcIiwgdGltZTogXCI167aEIOyghFwiLCByZXBsaWVkOiBmYWxzZSB9LFxuICB7IHBsYXRmb3JtOiBcImluc3RhZ3JhbVwiLCB1c2VyOiBcIuydtOyEnOyXsFwiLCB0ZXh0OiBcIuynhOynnCDrhIjrrLQg7JiI67uQ7JqUISEg67CU66GcIOq1rOunpO2WiOyWtOyalCDwn5KVXCIsIHNlbnRpbWVudDogXCJwb3NpdGl2ZVwiLCB0aW1lOiBcIjEy67aEIOyghFwiLCByZXBsaWVkOiBmYWxzZSB9LFxuICB7IHBsYXRmb3JtOiBcImZhY2Vib29rXCIsIHVzZXI6IFwi67CV7KeA7ZuIXCIsIHRleHQ6IFwi67Cw7Iah7J20IDPsnbzsp7gg7JWIIOyYpOuKlOuNsCDslrTrlrvqsowg65CcIOqxtOqwgOyalD9cIiwgc2VudGltZW50OiBcIm5lZ2F0aXZlXCIsIHRpbWU6IFwiMjPrtoQg7KCEXCIsIHJlcGxpZWQ6IGZhbHNlIH0sXG4gIHsgcGxhdGZvcm06IFwidHdpdHRlclwiLCB1c2VyOiBcIuy1nOycoOuCmFwiLCB0ZXh0OiBcIu2VoOyduCDsnbTrsqTtirgg7Ja47KCcIOuYkCDtlZjrgpjsmpQ/XCIsIHNlbnRpbWVudDogXCJuZXV0cmFsXCIsIHRpbWU6IFwiMeyLnOqwhCDsoIRcIiwgcmVwbGllZDogdHJ1ZSB9LFxuICB7IHBsYXRmb3JtOiBcInlvdXR1YmVcIiwgdXNlcjogXCLsoJXtg5zsmrBcIiwgdGV4dDogXCLsmIHsg4Eg7YCE66as7YuwIOuvuOyzpOuLpCDjhLfjhLdcIiwgc2VudGltZW50OiBcInBvc2l0aXZlXCIsIHRpbWU6IFwiMuyLnOqwhCDsoIRcIiwgcmVwbGllZDogdHJ1ZSB9LFxuICB7IHBsYXRmb3JtOiBcInRocmVhZHNcIiwgdXNlcjogXCLtlZzshoztnaxcIiwgdGV4dDogXCLsnbTrn7Ag67iM656c65OcIOyymOydjCDrtJDsmpQg7YyU66Gc7JqwIO2VqeuLiOuLpFwiLCBzZW50aW1lbnQ6IFwicG9zaXRpdmVcIiwgdGltZTogXCIz7Iuc6rCEIOyghFwiLCByZXBsaWVkOiBmYWxzZSB9LFxuXTtcblxuY29uc3QgTU9DS19QT1NUU19SQU5LSU5HID0gW1xuICB7IHRpdGxlOiBcIuyXrOumhCDsi6Dsg4Eg7LqQ65+s7IWAXCIsIHBsYXRmb3JtOiBcImluc3RhZ3JhbVwiLCByZWFjaDogMTI0MDAsIGVuZ2FnZTogODkwLCByYXRlOiBcIjcuMiVcIiwgZm9ybWF0OiBcIuy6kOufrOyFgFwiIH0sXG4gIHsgdGl0bGU6IFwi7KCc7ZKIIOu5hO2VmOyduOuTnCDrprTsiqRcIiwgcGxhdGZvcm06IFwiaW5zdGFncmFtXCIsIHJlYWNoOiA5ODAwLCBlbmdhZ2U6IDcyMCwgcmF0ZTogXCI3LjMlXCIsIGZvcm1hdDogXCLrprTsiqRcIiB9LFxuICB7IHRpdGxlOiBcIuu4jOuenOuTnCDsiqTthqDrpqwg7JiB7IOBXCIsIHBsYXRmb3JtOiBcInlvdXR1YmVcIiwgcmVhY2g6IDgyMDAsIGVuZ2FnZTogNDEwLCByYXRlOiBcIjUuMCVcIiwgZm9ybWF0OiBcIuyYgeyDgVwiIH0sXG4gIHsgdGl0bGU6IFwi7J2067Kk7Yq4IOqzteyngCDtj6zsiqTtirhcIiwgcGxhdGZvcm06IFwiZmFjZWJvb2tcIiwgcmVhY2g6IDY1MDAsIGVuZ2FnZTogMjgwLCByYXRlOiBcIjQuMyVcIiwgZm9ybWF0OiBcIuydtOuvuOyngFwiIH0sXG4gIHsgdGl0bGU6IFwi7Yq466CM65OcIOuwiCDtirjsnJdcIiwgcGxhdGZvcm06IFwidHdpdHRlclwiLCByZWFjaDogMTUyMDAsIGVuZ2FnZTogMTEwMCwgcmF0ZTogXCI3LjIlXCIsIGZvcm1hdDogXCLthY3siqTtirhcIiB9LFxuXTtcblxuLy8gLS0tIOy9mO2FkOy4oCDqtIDrpqwg66qp7JeFIOuNsOydtO2EsCAtLS1cbmNvbnN0IE1PQ0tfQ09OVEVOVFNfREFUQSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHJlZ2lzdHJhbnQ6IFwi7JaR7Iq57ZiEXCIsXG4gICAgcmVnaXN0ZXJlZEF0OiBcIjIwMjYtMDMtMjBcIixcbiAgICB0aXRsZTogXCJBbnRpZ3Jhdml0eSDrnbzsnbTruIzrn6zrpqwg7IaM6rCcXCIsXG4gICAgbWFzdGVyVGV4dDogXCJBbnRpZ3Jhdml0eSjslYjti7Dqt7jrnpjruYTti7Ap64qUIO2MjOydtOyNrCDquLDrsJjsnZgg7Ju5IOyekOuPme2ZlCDrnbzsnbTruIzrn6zrpqzsnoXri4jri6QuIOq4sOyhtOydmCBTZWxlbml1beydtOuCmCBQbGF5d3JpZ2h07JmAIOuLrOumrCwg7IKs656M7LKY65+8IOyekOyXsOyKpOufrOyatCDruIzrnbzsmrDsoIAg7KGw7J6R7J20IOqwgOuKpe2VmOupsCDrtIcg7YOQ7KeA66W8IOyasO2ajO2VoCDsiJgg7J6I7Iq164uI64ukLlwiLFxuICAgIHN0YXR1czogXCJzY2hlZHVsZWRcIixcbiAgICBzY2hlZHVsZWRBdDogXCIyMDI2LTAzLTIyIDE0OjAwXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJ0d2l0dGVyXCIsIFwieW91dHViZVwiLCBcImZhY2Vib29rXCJdLFxuICAgIHBsYXRmb3JtRHJhZnRzOiB7XG4gICAgICB0d2l0dGVyOiBcIvCfmoAg7Ju5IOyekOuPme2ZlOydmCDsg4gg7Yyo65+s64uk7J6ELCBBbnRpZ3Jhdml0eSDstpzsi5whXFxuXFxu67SHIO2DkOyngCDsl4bsnbQg7J6Q7Jew7Iqk65+96rKMIOu4jOudvOyasOyggOulvCDsobDsnpHtlZjripQgUHl0aG9uIOudvOydtOu4jOufrOumrC4g66eI7LyA7YSwLCDrjbDsnbTthLAg67aE7ISd6rCAIOuqqOuRkCDsvZTrlKkg7LWc7IaM7ZmU66GcIOuwmOuztSDsl4XrrLTrpbwg7J6Q64+Z7ZmU7ZWgIOyImCDsnojsirXri4jri6QuXFxuXFxuI0FudGlncmF2aXR5ICNQeXRob24gI+yekOuPme2ZlFwiLFxuICAgICAgeW91dHViZTogXCJBbnRpZ3Jhdml0eSDrnbzsnbTruIzrn6zrpqwg7JmE7KCEIOygleuztSB8IOu0hyDtg5Dsp4Ag7Jqw7ZqMIOyekOuPme2ZlCDrj4TqtaxcXG5cXG7inIUg7J20IOyYgeyDgeyXkOyEnCDrsLDsmrgg64K07JqpOlxcbi0gQW50aWdyYXZpdHnqsIAg6riw7KG0IOuPhOq1rOyZgCDri6Trpbgg7KCQXFxuLSDshKTsuZgg67CPIOyyqyDrsojsp7gg7Iqk7YGs66a97Yq4IOyekeyEsVxcbi0gU05TIOyekOuPme2ZlCDsi6TsoIQg7JiI7KCcXFxuXFxuI+yekOuPme2ZlCAjUHl0aG9uXCIsXG4gICAgICBmYWNlYm9vazogXCLwn46JIEFudGlncmF2aXR5IOudvOydtOu4jOufrOumrOulvCDshozqsJztlanri4jri6QhXFxuXFxuUHl0aG9uIOq4sOuwmOycvOuhnCDsm7kg7J6Q64+Z7ZmU66W8IOuNlCDsib3qs6Ag7JWI7KCE7ZWY6rKMLiDsvZTrlKkg6rK97ZeY7J20IOyXhuyWtOuPhCDrsJjrs7Ug7JeF66y066W8IOyekOuPme2ZlO2VoCDsiJgg7J6I7Ja07JqULlwiLFxuICAgICAgaW5zdGFncmFtOiBcIlwiLFxuICAgICAgdGhyZWFkczogXCJcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgcmVnaXN0cmFudDogXCLslpHsirntmIRcIixcbiAgICByZWdpc3RlcmVkQXQ6IFwiMjAyNi0wMy0yMVwiLFxuICAgIHRpdGxlOiBcIuu0hyDtg5Dsp4Ag7Jqw7ZqMIOq4sOuKpSDshozqsJxcIixcbiAgICBtYXN0ZXJUZXh0OiBcIuq4sOyhtCBTZWxlbml1beydtOuCmCBQbGF5d3JpZ2h07JmAIOuLrOumrCwgQW50aWdyYXZpdHnripQg7IKs656M7LKY65+8IOyekOyXsOyKpOufrOyatCDruIzrnbzsmrDsoIAg7KGw7J6R7J20IOqwgOuKpe2VmOupsCDrtIcg6rCQ7KeAIOyLnOyKpO2FnOydhCDsnpDsl7DsiqTrn73qsowg7Ya16rO87ZWp64uI64ukLlwiLFxuICAgIHN0YXR1czogXCJkcmFmdFwiLFxuICAgIHNjaGVkdWxlZEF0OiBudWxsLFxuICAgIHBsYXRmb3JtczogW1wiaW5zdGFncmFtXCIsIFwidGhyZWFkc1wiXSxcbiAgICBwbGF0Zm9ybURyYWZ0czoge1xuICAgICAgdHdpdHRlcjogXCJcIixcbiAgICAgIHlvdXR1YmU6IFwiXCIsXG4gICAgICBmYWNlYm9vazogXCJcIixcbiAgICAgIGluc3RhZ3JhbTogXCLwn6SWIOu0h+uPhCDsgqzrnozsspjrn7w/XFxuXFxu6riw7KG0IOyekOuPme2ZlCDrj4Tqtazrk6Tqs7wg64us66asIEFudGlncmF2aXR564qUIOyLpOygnCDsgqzrnozsnZgg7ZaJ64+ZIO2MqO2EtOydhCDsmYTrsr3tlZjqsowg66qo67Cp7ZWp64uI64ukLlxcblxcbiPsnpDrj5ntmZQgI1B5dGhvbiAj67SH7YOQ7KeAXCIsXG4gICAgICB0aHJlYWRzOiBcIuu0hyDtg5Dsp4Ag7Jqw7ZqM6rCAIOqwgOuKpe2VnCDsm7kg7J6Q64+Z7ZmUIOudvOydtOu4jOufrOumrOqwgCDsnojri6TrqbQg66+/7Jy87Iuc6rKg64KY7JqUP1xcblxcbkFudGlncmF2aXR564qUIOyLpOygnCDruIzrnbzsmrDsoIAg7ZmY6rK97JeQ7IScIOyduOqwhOydmCDtlonrj5nsnYQg7J6s7ZiE7ZWp64uI64ukLiDsnpDsl7DsiqTrn6zsmrQg66eI7Jqw7IqkIOydtOuPmSwg7YKk67O065OcIOuUnOugiOydtOq5jOyngCDrqqjrkZAg6rWs7ZiE7ZaI7Iq164uI64ukLlwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICByZWdpc3RyYW50OiBcIuyWkeyKue2YhFwiLFxuICAgIHJlZ2lzdGVyZWRBdDogXCIyMDI2LTAzLTE5XCIsXG4gICAgdGl0bGU6IFwi7KO86rCEIOyXheuNsOydtO2KuCDqs7Xsp4BcIixcbiAgICBtYXN0ZXJUZXh0OiBcIuydtOuyiCDso7wgQW50aWdyYXZpdHkgdjEuMiDsl4XrjbDsnbTtirjqsIAg7Lac7Iuc65CY7JeI7Iq164uI64ukLiDshLHriqUg6rCc7ISgLCDrsoTqt7gg7IiY7KCVLCBJbnN0YWdyYW0gQVBJIOyngOybkOydtCDsg4jroa3qsowg7LaU6rCA65CY7JeI7Iq164uI64ukLlwiLFxuICAgIHN0YXR1czogXCJwdWJsaXNoZWRcIixcbiAgICBzY2hlZHVsZWRBdDogXCIyMDI2LTAzLTIwIDEwOjAwXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJ0d2l0dGVyXCIsIFwiZmFjZWJvb2tcIiwgXCJpbnN0YWdyYW1cIiwgXCJ0aHJlYWRzXCIsIFwieW91dHViZVwiXSxcbiAgICBwbGF0Zm9ybURyYWZ0czoge30sXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICByZWdpc3RyYW50OiBcIuyWkeyKue2YhFwiLFxuICAgIHJlZ2lzdGVyZWRBdDogXCIyMDI2LTAzLTE4XCIsXG4gICAgdGl0bGU6IFwi7IKs7JqpIOyCrOuhgCAtIOuniOy8gO2MhSDsnpDrj5ntmZTtjrhcIixcbiAgICBtYXN0ZXJUZXh0OiBcIlNOUyDsvZjthZDsuKAg7J6Q64+ZIOuwnO2WiSwg6rK97J+B7IKsIOuqqOuLiO2EsOungSwg66as67ewL+uMk+q4gCDsnpDrj5kg7IiY7KeRIOuTsSDrp4jsvIDtjIUg7Iuk66y07JeQ7IScIEFudGlncmF2aXR566W8IO2ZnOyaqe2VmOuKlCDri6TslpHtlZwg7IKs66GA66W8IOyGjOqwnO2VqeuLiOuLpC5cIixcbiAgICBzdGF0dXM6IFwicmV2aWV3XCIsXG4gICAgc2NoZWR1bGVkQXQ6IFwiMjAyNi0wMy0yOCAxODowMFwiLFxuICAgIHBsYXRmb3JtczogW1wiaW5zdGFncmFtXCIsIFwieW91dHViZVwiLCBcImZhY2Vib29rXCJdLFxuICAgIHBsYXRmb3JtRHJhZnRzOiB7XG4gICAgICB0d2l0dGVyOiBcIlwiLFxuICAgICAgeW91dHViZTogXCLrp4jsvIDthLDrpbwg7JyE7ZWcIEFudGlncmF2aXR5IOyZhOyghCDtmZzsmqnrspUgfCBTTlMg7J6Q64+Z7ZmUIOyLpOyghO2OuFxcblxcbuyLpOygnCDrp4jsvIDtjIUg7ZiE7J6l7JeQ7IScIEFudGlncmF2aXR566W8IO2ZnOyaqe2VmOuKlCA16rCA7KeAIOuwqeuyleydhCDqs7XqsJztlanri4jri6QuXCIsXG4gICAgICBmYWNlYm9vazogXCLrp4jsvIDtjIUg7J6Q64+Z7ZmULCDsnbTsoJwgQW50aWdyYXZpdHnroZwg7ZW06rKw7ZWY7IS47JqUIVxcblxcbuqyveyfgeyCrCDrqqjri4jthLDrp4HrtoDthLAgU05TIOupgO2LsOyxhOuEkCDrsJztlonquYzsp4AsIOuwmOuztSDsl4XrrLTrpbwg7J6Q64+Z7ZmU7ZW07IScIO2BrOumrOyXkOydtO2LsOu4jOyXkCDsp5HspJHtlZjshLjsmpQuXCIsXG4gICAgICBpbnN0YWdyYW06IFwi66eI7LyA7YSw7J2YIO2VhOyImCDrj4Tqtawg8J+boO+4j1xcblxcbkFudGlncmF2aXR5IO2VmOuCmOuhnCBTTlMg7J6Q64+Z7ZmULCDrjbDsnbTthLAg7IiY7KeRLCDqsr3sn4Hsgqwg66qo64uI7YSw66eB6rmM7KeAIVxcblxcbiPrp4jsvIDtjIXsnpDrj5ntmZQgI1NOU+uniOy8gO2MhSAjUHl0aG9uXCIsXG4gICAgICB0aHJlYWRzOiBcIlwiLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5jb25zdCBNT0NLX01FTUJFUlMgPSBbXG4gIHsgaWQ6IDEsIG5hbWU6IFwi7JaR7Iq57ZiEXCIsIGVtYWlsOiBcInlhbmdAYW50aWdyYXZpdHkuaW9cIiwgam9pbmVkQXQ6IFwiMjAyNi0wMy0wMVwiLCBhcHByb3ZhbFN0YXR1czogXCJhcHByb3ZlZFwiLCByb2xlOiBcImFkbWluXCIgfSxcbiAgeyBpZDogMiwgbmFtZTogXCLquYDsp4Dsm5BcIiwgZW1haWw6IFwiaml3b25AYW50aWdyYXZpdHkuaW9cIiwgam9pbmVkQXQ6IFwiMjAyNi0wMy0xNVwiLCBhcHByb3ZhbFN0YXR1czogXCJhcHByb3ZlZFwiLCByb2xlOiBcIm9wZXJhdG9yXCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCLrsJXrr7zspIBcIiwgZW1haWw6IFwibWluanVuQGV4YW1wbGUuY29tXCIsIGpvaW5lZEF0OiBcIjIwMjYtMDMtMjBcIiwgYXBwcm92YWxTdGF0dXM6IFwicGVuZGluZ1wiLCByb2xlOiBcIm9wZXJhdG9yXCIgfSxcbiAgeyBpZDogNCwgbmFtZTogXCLsnbTshJzsl7BcIiwgZW1haWw6IFwic2VveWVvbkBleGFtcGxlLmNvbVwiLCBqb2luZWRBdDogXCIyMDI2LTAzLTIxXCIsIGFwcHJvdmFsU3RhdHVzOiBcInBlbmRpbmdcIiwgcm9sZTogXCJvcGVyYXRvclwiIH0sXG5dO1xuXG5jb25zdCBNT0NLX0NPTVBFVElUT1JTID0gW1xuICB7IG5hbWU6IFwi6rK97J+B7IKsIEFcIiwgZm9sbG93ZXJzOiBcIjI0NUtcIiwgcG9zdEZyZXE6IFwi7J28IDLtmoxcIiwgdG9wRm9ybWF0OiBcIuumtOyKpFwiLCBlbmdhZ2VSYXRlOiBcIjUuMSVcIiB9LFxuICB7IG5hbWU6IFwi6rK97J+B7IKsIEJcIiwgZm9sbG93ZXJzOiBcIjE4OUtcIiwgcG9zdEZyZXE6IFwi7J28IDHtmoxcIiwgdG9wRm9ybWF0OiBcIuy6kOufrOyFgFwiLCBlbmdhZ2VSYXRlOiBcIjQuOCVcIiB9LFxuICB7IG5hbWU6IFwi6rK97J+B7IKsIENcIiwgZm9sbG93ZXJzOiBcIjkyS1wiLCBwb3N0RnJlcTogXCLso7wgNO2ajFwiLCB0b3BGb3JtYXQ6IFwi7J2066+47KeAXCIsIGVuZ2FnZVJhdGU6IFwiNi4yJVwiIH0sXG5dO1xuXG5jb25zdCBNT0NLX1RSRU5EUyA9IFtcbiAgeyBrZXl3b3JkOiBcIiPsl6zrpoTsvZTrlJRcIiwgdm9sdW1lOiBcIuKGkSAzNDAlXCIsIHN0YXR1czogXCLquInsg4HsirlcIiB9LFxuICB7IGtleXdvcmQ6IFwiI+uNsOydvOumrOujqVwiLCB2b2x1bWU6IFwi4oaRIDEyJVwiLCBzdGF0dXM6IFwi7IOB7Iq5XCIgfSxcbiAgeyBrZXl3b3JkOiBcIiNPT1REXCIsIHZvbHVtZTogXCLihpIgMCVcIiwgc3RhdHVzOiBcIuycoOyngFwiIH0sXG4gIHsga2V5d29yZDogXCIj66+464uI66mA7Yyo7IWYXCIsIHZvbHVtZTogXCLihpEgODklXCIsIHN0YXR1czogXCLsg4HsirlcIiB9LFxuICB7IGtleXdvcmQ6IFwiI+u5iO2LsOyngOustOuTnFwiLCB2b2x1bWU6IFwi4oaTIDE1JVwiLCBzdGF0dXM6IFwi7ZWY6529XCIgfSxcbl07XG5cbi8vIC0tLSDshLHqs7wg67aE7ISdIOuqqeyXhSDrjbDsnbTthLAgLS0tXG5jb25zdCBNT0NLX0NIQU5ORUxfU1RBVFMgPSB7XG4gIGluc3RhZ3JhbTogeyB2aWV3czogMTI0MDAsIGxpa2VzOiA4OTAsIGNvbW1lbnRzOiAxNDUsIHNoYXJlczogMjMwLCBzYXZlczogNTYwIH0sXG4gIGZhY2Vib29rOiAgeyB2aWV3czogNjUwMCwgIGxpa2VzOiAyODAsIGNvbW1lbnRzOiA2NywgIHNoYXJlczogMTQ1LCBzYXZlczogMCB9LFxuICB0d2l0dGVyOiAgIHsgdmlld3M6IDE1MjAwLCBsaWtlczogMTEwMCwgY29tbWVudHM6IDMyMCwgc2hhcmVzOiA4OTAsIHNhdmVzOiAwIH0sXG4gIHRocmVhZHM6ICAgeyB2aWV3czogMzIwMCwgIGxpa2VzOiAyMTAsIGNvbW1lbnRzOiA0NSwgIHNoYXJlczogODAsICBzYXZlczogMCB9LFxuICB5b3V0dWJlOiAgIHsgdmlld3M6IDgyMDAsICBsaWtlczogNDEwLCBjb21tZW50czogODksICBzaGFyZXM6IDEyMCwgc2F2ZXM6IDM0MCB9LFxufTtcblxuY29uc3QgTU9DS19DT05URU5UX1NUQVRTID0gW1xuICB7IHRpdGxlOiBcIkFudGlncmF2aXR5IOudvOydtOu4jOufrOumrCDshozqsJxcIiwgcGxhdGZvcm06IFwidHdpdHRlclwiLCAgIHZpZXdzOiA0MjAwLCBsaWtlczogMzQwLCBjb21tZW50czogODksIHNoYXJlczogMjEwLCBzYXZlczogMCB9LFxuICB7IHRpdGxlOiBcIkFudGlncmF2aXR5IOudvOydtOu4jOufrOumrCDshozqsJxcIiwgcGxhdGZvcm06IFwieW91dHViZVwiLCAgIHZpZXdzOiAzMTAwLCBsaWtlczogMTgwLCBjb21tZW50czogNDIsIHNoYXJlczogNjAsICBzYXZlczogMTIwIH0sXG4gIHsgdGl0bGU6IFwi67SHIO2DkOyngCDsmrDtmowg6riw64qlIOyGjOqwnFwiLCAgICAgIHBsYXRmb3JtOiBcImluc3RhZ3JhbVwiLCB2aWV3czogNTgwMCwgbGlrZXM6IDQyMCwgY29tbWVudHM6IDY3LCBzaGFyZXM6IDk1LCAgc2F2ZXM6IDI4MCB9LFxuICB7IHRpdGxlOiBcIuu0hyDtg5Dsp4Ag7Jqw7ZqMIOq4sOuKpSDshozqsJxcIiwgICAgICBwbGF0Zm9ybTogXCJ0aHJlYWRzXCIsICAgdmlld3M6IDI0MDAsIGxpa2VzOiAxOTAsIGNvbW1lbnRzOiAzOCwgc2hhcmVzOiA3MiwgIHNhdmVzOiAwIH0sXG4gIHsgdGl0bGU6IFwi7KO86rCEIOyXheuNsOydtO2KuCDqs7Xsp4BcIiwgICAgICAgICAgIHBsYXRmb3JtOiBcImZhY2Vib29rXCIsICB2aWV3czogMjEwMCwgbGlrZXM6IDk4LCAgY29tbWVudHM6IDIzLCBzaGFyZXM6IDQ1LCAgc2F2ZXM6IDAgfSxcbiAgeyB0aXRsZTogXCLsgqzsmqkg7IKs66GAIC0g66eI7LyA7YyFIOyekOuPme2ZlO2OuFwiLCBwbGF0Zm9ybTogXCJpbnN0YWdyYW1cIiwgdmlld3M6IDY2MDAsIGxpa2VzOiA0NzAsIGNvbW1lbnRzOiA3OCwgc2hhcmVzOiAxMzUsIHNhdmVzOiAyODAgfSxcbiAgeyB0aXRsZTogXCLsgqzsmqkg7IKs66GAIC0g66eI7LyA7YyFIOyekOuPme2ZlO2OuFwiLCBwbGF0Zm9ybTogXCJ5b3V0dWJlXCIsICAgdmlld3M6IDUxMDAsIGxpa2VzOiAyMzAsIGNvbW1lbnRzOiA0Nywgc2hhcmVzOiA2MCwgIHNhdmVzOiAyMjAgfSxcbl07XG5cbi8vIC0tLSBDaGFydCBjb21wb25lbnQgKHNpbXBsZSBiYXIvbGluZSB3aXRoIENTUykgLS0tXG5jb25zdCBNaW5pQmFyQ2hhcnQgPSAoeyBkYXRhLCBjb2xvciA9IFwiIzYzNjZmMVwiLCBoZWlnaHQgPSAxMDAgfSkgPT4ge1xuICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5kYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsIGdhcDogMywgaGVpZ2h0LCBwYWRkaW5nOiBcIjhweCAwXCIgfX0+XG4gICAgICB7ZGF0YS5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGZsZXg6IDEsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDQgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogMzIsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7KHYgLyBtYXgpICogMTAwfSVgLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJHtjb2xvcn0sICR7Y29sb3J9ODgpYCxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweCA0cHggMnB4IDJweFwiLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiaGVpZ2h0IDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWluaUxpbmVDaGFydCA9ICh7IGRhdGEsIGNvbG9yID0gXCIjNjM2NmYxXCIsIGhlaWdodCA9IDgwIH0pID0+IHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uZGF0YSk7XG4gIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLmRhdGEpO1xuICBjb25zdCByYW5nZSA9IG1heCAtIG1pbiB8fCAxO1xuICBjb25zdCBwb2ludHMgPSBkYXRhLm1hcCgodiwgaSkgPT4gYCR7KGkgLyAoZGF0YS5sZW5ndGggLSAxKSkgKiAxMDB9LCR7MTAwIC0gKCh2IC0gbWluKSAvIHJhbmdlKSAqIDgwIC0gMTB9YCkuam9pbihcIiBcIik7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodCB9fSBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD17YGxnLSR7Y29sb3IucmVwbGFjZShcIiNcIiwgXCJcIil9YH0geDE9XCIwXCIgeTE9XCIwXCIgeDI9XCIwXCIgeTI9XCIxXCI+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9e2NvbG9yfSBzdG9wT3BhY2l0eT1cIjAuM1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj17Y29sb3J9IHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICA8L2RlZnM+XG4gICAgICA8cG9seWdvbiBwb2ludHM9e2AwLDEwMCAke3BvaW50c30gMTAwLDEwMGB9IGZpbGw9e2B1cmwoI2xnLSR7Y29sb3IucmVwbGFjZShcIiNcIiwgXCJcIil9KWB9IC8+XG4gICAgICA8cG9seWxpbmUgcG9pbnRzPXtwb2ludHN9IGZpbGw9XCJub25lXCIgc3Ryb2tlPXtjb2xvcn0gc3Ryb2tlV2lkdGg9XCIyLjVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbi8vIOyEseqzvCDrtoTshJ3smqkg66mA7YuwIOudvOyduCDssKjtirggKOyngO2RnOuzhCDqsJzrs4Qg7KCV6rec7ZmUKVxuY29uc3QgTUVUUklDX0NPTE9SUyA9IFtcIiM2MzY2ZjFcIiwgXCIjZjU5ZTBiXCIsIFwiIzEwYjk4MVwiLCBcIiNlZjQ0NDRcIiwgXCIjOGI1Y2Y2XCJdO1xuXG5jb25zdCBNZXRyaWNzTGluZUNoYXJ0ID0gKHsgbGFiZWxzLCBzZXJpZXMsIGhlaWdodCA9IDIwMCB9KSA9PiB7XG4gIGNvbnN0IFBMID0gOCwgUFIgPSAyNCwgUFQgPSAxNiwgUEIgPSA0NDtcbiAgY29uc3QgVlcgPSA2MDAsIFZIID0gaGVpZ2h0O1xuICBjb25zdCBDVyA9IFZXIC0gUEwgLSBQUjtcbiAgY29uc3QgQ0ggPSBWSCAtIFBUIC0gUEI7XG4gIGNvbnN0IGdldFggPSAoaSkgPT4gUEwgKyAobGFiZWxzLmxlbmd0aCA8PSAxID8gQ1cgLyAyIDogKGkgLyAobGFiZWxzLmxlbmd0aCAtIDEpKSAqIENXKTtcbiAgY29uc3QgZ2V0WSA9ICh2LCBtaW4sIG1heCkgPT4gUFQgKyBDSCAtICgodiAtIG1pbikgLyAobWF4IC0gbWluIHx8IDEpKSAqIENIO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgPHN2ZyB2aWV3Qm94PXtgMCAwICR7Vld9ICR7Vkh9YH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQgfX0+XG4gICAgICAgIHsvKiDsiJjtj4kg6rKp7J6Q7ISgICovfVxuICAgICAgICB7WzAsIDAuMjUsIDAuNSwgMC43NSwgMV0ubWFwKHQgPT4gKFxuICAgICAgICAgIDxsaW5lIGtleT17dH0geDE9e1BMfSB4Mj17VlcgLSBQUn0geTE9e1BUICsgQ0ggKiAoMSAtIHQpfSB5Mj17UFQgKyBDSCAqICgxIC0gdCl9IHN0cm9rZT1cIiNmMWY1ZjlcIiBzdHJva2VXaWR0aD1cIjFcIiAvPlxuICAgICAgICApKX1cbiAgICAgICAgey8qIOyngO2RnOuzhCDshKAgKyDsoJAgKi99XG4gICAgICAgIHtzZXJpZXMubWFwKChzLCBzaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbG9yID0gTUVUUklDX0NPTE9SU1tzaSAlIE1FVFJJQ19DT0xPUlMubGVuZ3RoXTtcbiAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5zLmRhdGEsIDEpO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnMuZGF0YSwgMCk7XG4gICAgICAgICAgY29uc3QgcHRzID0gcy5kYXRhLm1hcCgodiwgaSkgPT4gYCR7Z2V0WChpKX0sJHtnZXRZKHYsIG1pbiwgbWF4KX1gKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGcga2V5PXtzaX0+XG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9e3B0c30gZmlsbD1cIm5vbmVcIiBzdHJva2U9e2NvbG9yfSBzdHJva2VXaWR0aD1cIjIuNVwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiAvPlxuICAgICAgICAgICAgICB7cy5kYXRhLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxjaXJjbGUga2V5PXtpfSBjeD17Z2V0WChpKX0gY3k9e2dldFkodiwgbWluLCBtYXgpfSByPVwiNC41XCIgZmlsbD17Y29sb3J9IHN0cm9rZT1cIiNmZmZcIiBzdHJva2VXaWR0aD1cIjJcIiAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgey8qIHjstpUg66CI7J2067iUICovfVxuICAgICAgICB7bGFiZWxzLm1hcCgobCwgaSkgPT4gKFxuICAgICAgICAgIDx0ZXh0IGtleT17aX0geD17Z2V0WChpKX0geT17VkggLSBQQiArIDIwfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCIgZm9udFNpemU9XCIxMlwiIGZpbGw9XCIjOTRhM2I4XCI+XG4gICAgICAgICAgICB7bC5sZW5ndGggPiA5ID8gbC5zbGljZSgwLCA4KSArIFwi4oCmXCIgOiBsfVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgKSl9XG4gICAgICA8L3N2Zz5cbiAgICAgIHsvKiDrspTroYAgKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDIwLCBmbGV4V3JhcDogXCJ3cmFwXCIsIHBhZGRpbmdMZWZ0OiBQTCwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICB7c2VyaWVzLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA2LCBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM2NDc0OGJcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDIwLCBoZWlnaHQ6IDMsIGJvcmRlclJhZGl1czogMiwgYmFja2dyb3VuZDogTUVUUklDX0NPTE9SU1tpICUgTUVUUklDX0NPTE9SUy5sZW5ndGhdIH19IC8+XG4gICAgICAgICAgICB7cy5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gLS0tIE1haW4gQXBwIC0tLVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU05TRGFzaGJvYXJkKCkge1xuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZShcImNvbnRlbnRzXCIpO1xuICBjb25zdCBbc2lkZWJhckNvbGxhcHNlZCwgc2V0U2lkZWJhckNvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttdWx0aVVzZUlucHV0LCBzZXRNdWx0aVVzZUlucHV0XSA9IHVzZVN0YXRlKGBBbnRpZ3Jhdml0eSjslYjti7Dqt7jrnpjruYTti7Ap64qUIO2MjOydtOyNrCDquLDrsJjsnZgg7Ju5IOyekOuPme2ZlCDrnbzsnbTruIzrn6zrpqzsnoXri4jri6QuIOq4sOyhtOydmCBTZWxlbml1beydtOuCmCBQbGF5d3JpZ2h07JmAIOuLrOumrCwg7IKs656M7LKY65+8IOyekOyXsOyKpOufrOyatCDruIzrnbzsmrDsoIAg7KGw7J6R7J20IOqwgOuKpe2VmOupsCDrtIcg7YOQ7KeA66W8IOyasO2ajO2VoCDsiJgg7J6I7Iq164uI64ukLiDrp4jsvIDthLAsIOuNsOydtO2EsCDrtoTshJ3qsIAsIOyXheustCDsnpDrj5ntmZTqsIAg7ZWE7JqU7ZWcIOyLpOustOyekOuTpOydtCDsvZTrlKkg7JeG7J2064+EIOuwmOuzteyggeyduCDsm7kg7J6R7JeF7J2EIOyekOuPme2ZlO2VoCDsiJgg7J6I64+E66GdIOyEpOqzhOuQmOyXiOyKteuLiOuLpC5cXG5cXG7so7zsmpQg7Yq57KeV7Jy866Gc64qUIOyyq+ynuCwg7Iuk7KCcIOu4jOudvOyasOyggCDtmZjqsr3sl5DshJwg64+Z7J6R7ZWY7JesIOuhnOq3uOyduCwg7YG066atLCDsiqTtgazroaQsIOyeheugpSDrk7Eg7IKs656M7J2YIO2WieuPmeydhCDqt7jrjIDroZwg7J6s7ZiE7ZWp64uI64ukLiDrkZjsp7gsIOu0hyDqsJDsp4Ag7Iuc7Iqk7YWc7J2EIOyekOyXsOyKpOufveqyjCDthrXqs7ztlZjsl6wgU05TIOyekOuPme2ZlCwg642w7J207YSwIOyImOynkSDrk7Hsl5Ag7Zmc7Jqp7ZWgIOyImCDsnojsirXri4jri6QuIOyFi+ynuCwgUHl0aG9u66eMIOyVjOuptCDriITqtazrgpgg7Im96rKMIOyLnOyeke2VoCDsiJgg7J6I7Jy866mwLCDrs7XsnqHtlZwg7JuM7YGs7ZSM66Gc7Jqw64+EIOqwhOuLqO2VnCDsvZTrk5zroZwg6rWs7ZiEIOqwgOuKpe2VqeuLiOuLpC5cXG5cXG7tmZzsmqkg7IKs66GA66Gc64qUIFNOUyDsvZjthZDsuKAg7J6Q64+ZIOuwnO2WiSwg6rK97J+B7IKsIOuqqOuLiO2EsOungSwg66as67ewL+uMk+q4gCDsnpDrj5kg7IiY7KeRLCDrsJjrs7XsoIHsnbgg6rSA66as7J6QIOyXheustCDsnpDrj5ntmZQg65Ox7J20IOyeiOyKteuLiOuLpC4g7Yq57Z6IIOuniOy8gO2MhSDsi6TrrLTsl5DshJzripQg7Jes65+sIFNOUyDssYTrhJDsl5Ag64+Z7Iuc7JeQIOy9mO2FkOy4oOulvCDrsLDtj6ztlZjqs6AsIOyEseqzvCDrjbDsnbTthLDrpbwg7J6Q64+Z7Jy866GcIOyImOynkcK367aE7ISd7ZWY64qUIOybjO2BrO2UjOuhnOyasOulvCDqtazstpXtlZjripQg642wIOunpOyasCDsnKDsmqntlanri4jri6QuYCk7XG4gIGNvbnN0IFtnZW5lcmF0ZWRDb250ZW50LCBzZXRHZW5lcmF0ZWRDb250ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYmVuY2htYXJrVXJsLCBzZXRCZW5jaG1hcmtVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFBsYXRmb3Jtcywgc2V0U2VsZWN0ZWRQbGF0Zm9ybXNdID0gdXNlU3RhdGUoW1wiaW5zdGFncmFtXCIsIFwiZmFjZWJvb2tcIiwgXCJ0d2l0dGVyXCIsIFwidGhyZWFkc1wiLCBcInlvdXR1YmVcIl0pO1xuICBjb25zdCBbY29tbWVudEZpbHRlciwgc2V0Q29tbWVudEZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW2NhbGVuZGFyTW9udGhdID0gdXNlU3RhdGUoXCIyMDI264WEIDPsm5RcIik7XG4gIGNvbnN0IFthbmFseXNpc1ZpZXcsIHNldEFuYWx5c2lzVmlld10gPSB1c2VTdGF0ZShcIm92ZXJ2aWV3XCIpO1xuICBjb25zdCBbc2hvd0JlbmNobWFya1Jlc3VsdCwgc2V0U2hvd0JlbmNobWFya1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwdWJsaXNoQ2hlY2tlZCwgc2V0UHVibGlzaENoZWNrZWRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbYWlJbnNpZ2h0LCBzZXRBaUluc2lnaHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOy9mO2FkOy4oCDqtIDrpqwg7IOB7YOcXG4gIGNvbnN0IFtjb250ZW50c1ZpZXcsIHNldENvbnRlbnRzVmlld10gPSB1c2VTdGF0ZShcImxpc3RcIik7IC8vIFwibGlzdFwiIHwgXCJlZGl0XCJcbiAgY29uc3QgW2VkaXRpbmdDb250ZW50LCBzZXRFZGl0aW5nQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRlbnRGaWx0ZXIsIHNldENvbnRlbnRGaWx0ZXJdID0gdXNlU3RhdGUoXCJhbGxcIik7XG4gIGNvbnN0IFtjb250ZW50RWRpdFRhYiwgc2V0Q29udGVudEVkaXRUYWJdID0gdXNlU3RhdGUoXCJ0d2l0dGVyXCIpO1xuICBjb25zdCBbcHVibGlzaE1vZGUsIHNldFB1Ymxpc2hNb2RlXSA9IHVzZVN0YXRlKFwibm93XCIpOyAvLyBcIm5vd1wiIHwgXCJzY2hlZHVsZVwiXG4gIGNvbnN0IFtjb250ZW50c0xpc3QsIHNldENvbnRlbnRzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gU3VwYWJhc2UgREIg4oaSIEpTIOuzgO2ZmCDtl6ztjbxcbiAgY29uc3QgZGJUb0NvbnRlbnQgPSAocm93KSA9PiAoe1xuICAgIGlkOiByb3cuaWQsXG4gICAgdGl0bGU6IHJvdy50aXRsZSB8fCBcIlwiLFxuICAgIG1hc3RlclRleHQ6IHJvdy5tYXN0ZXJfdGV4dCB8fCBcIlwiLFxuICAgIHN0YXR1czogcm93LnN0YXR1cyB8fCBcImRyYWZ0XCIsXG4gICAgc2NoZWR1bGVkQXQ6IHJvdy5zY2hlZHVsZWRfYXQgPyByb3cuc2NoZWR1bGVkX2F0LnJlcGxhY2UoXCJUXCIsIFwiIFwiKS5zbGljZSgwLCAxNikgOiBudWxsLFxuICAgIHBsYXRmb3Jtczogcm93LnBsYXRmb3JtcyB8fCBbXSxcbiAgICBwbGF0Zm9ybURyYWZ0czogcm93LnBsYXRmb3JtX2RyYWZ0cyB8fCB7fSxcbiAgICBwdWJsaXNoUmVzdWx0czogcm93LnB1Ymxpc2hfcmVzdWx0cyB8fCB7fSxcbiAgICByZWdpc3RyYW50OiByb3cucmVnaXN0cmFudCB8fCBcIlwiLFxuICAgIHJlZ2lzdGVyZWRBdDogcm93LnJlZ2lzdGVyZWRfYXQgfHwgXCJcIixcbiAgICBmaXJzdFB1Ymxpc2hlZEF0OiByb3cuZmlyc3RfcHVibGlzaGVkX2F0ID8gcm93LmZpcnN0X3B1Ymxpc2hlZF9hdC5yZXBsYWNlKFwiVFwiLCBcIiBcIikuc2xpY2UoMCwgMTYpIDogbnVsbCxcbiAgICB1cGRhdGVkQXQ6IHJvdy51cGRhdGVkX2F0ID8gcm93LnVwZGF0ZWRfYXQucmVwbGFjZShcIlRcIiwgXCIgXCIpLnNsaWNlKDAsIDE2KSA6IG51bGwsXG4gIH0pO1xuXG4gIC8vIEpTIOKGkiBTdXBhYmFzZSBEQiDrs4DtmZgg7Zes7Y28XG4gIGNvbnN0IGNvbnRlbnRUb0RiID0gKGMpID0+ICh7XG4gICAgdGl0bGU6IGMudGl0bGUsXG4gICAgbWFzdGVyX3RleHQ6IGMubWFzdGVyVGV4dCxcbiAgICBzdGF0dXM6IGMuc3RhdHVzLFxuICAgIHNjaGVkdWxlZF9hdDogYy5zY2hlZHVsZWRBdCB8fCBudWxsLFxuICAgIHBsYXRmb3JtczogYy5wbGF0Zm9ybXMsXG4gICAgcGxhdGZvcm1fZHJhZnRzOiBjLnBsYXRmb3JtRHJhZnRzLFxuICAgIHB1Ymxpc2hfcmVzdWx0czogYy5wdWJsaXNoUmVzdWx0cyB8fCB7fSxcbiAgICByZWdpc3RyYW50OiBjLnJlZ2lzdHJhbnQsXG4gICAgcmVnaXN0ZXJlZF9hdDogYy5yZWdpc3RlcmVkQXQgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICBmaXJzdF9wdWJsaXNoZWRfYXQ6IGMuZmlyc3RQdWJsaXNoZWRBdCB8fCBudWxsLFxuICAgIHVwZGF0ZWRfYXQ6IGMudXBkYXRlZEF0IHx8IG51bGwsXG4gIH0pO1xuXG4gIC8vIOy9mO2FkOy4oCDrqqnroZ0g67aI65+s7Jik6riwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKERFTU9fTU9ERSkge1xuICAgICAgc2V0Q29udGVudHNMaXN0KE1PQ0tfQ09OVEVOVFNfREFUQSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1cGFiYXNlLmZyb20oXCJjb250ZW50c1wiKS5zZWxlY3QoXCIqXCIpLm9yZGVyKFwiaWRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgICAudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgeyBjb25zb2xlLmVycm9yKFwi7L2Y7YWQ7LigIOu2iOufrOyYpOq4sCDsmKTrpZg6XCIsIGVycm9yKTsgcmV0dXJuOyB9XG4gICAgICAgIHNldENvbnRlbnRzTGlzdCgoZGF0YSB8fCBbXSkubWFwKGRiVG9Db250ZW50KSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIEFJIOuPhOq1rCDqtIDrpqwgKFN1cGFiYXNlIHNldHRpbmdzIOyYgeyGjSlcbiAgY29uc3QgQUlfVE9PTFNfREVGQVVMVCA9IFtcbiAgICB7IGljb246IFwi8J+kllwiLCBsYWJlbDogXCJDaGF0R1BU66GcIOyekeyEsVwiLCB1cmw6IFwiaHR0cHM6Ly9jaGF0Lm9wZW5haS5jb21cIiwgZGVzYzogXCLrgrQgR1BUcyDtmZzsmqlcIiB9LFxuICAgIHsgaWNvbjogXCLinKhcIiwgbGFiZWw6IFwiR2VtaW5p66GcIOyekeyEsVwiLCB1cmw6IFwiaHR0cHM6Ly9nZW1pbmkuZ29vZ2xlLmNvbVwiLCBkZXNjOiBcIuuCtCBHZW1zIO2ZnOyaqVwiIH0sXG4gICAgeyBpY29uOiBcIvCfjqhcIiwgbGFiZWw6IFwiQ2FudmEg7J2066+47KeAXCIsIHVybDogXCJodHRwczovL3d3dy5jYW52YS5jb21cIiwgZGVzYzogXCJTTlMg66ee7LakIOuUlOyekOyduFwiIH0sXG4gICAgeyBpY29uOiBcIvCfjqxcIiwgbGFiZWw6IFwiQ2FwQ3V0IOyYgeyDgVwiLCB1cmw6IFwiaHR0cHM6Ly93d3cuY2FwY3V0LmNvbVwiLCBkZXNjOiBcIuyIj+y4oC/rprTsiqQg7KCc7J6RXCIgfSxcbiAgICB7IGljb246IFwi8J+WvO+4j1wiLCBsYWJlbDogXCJJZGVvZ3JhbSBBSVwiLCB1cmw6IFwiaHR0cHM6Ly9pZGVvZ3JhbS5haVwiLCBkZXNjOiBcIkFJIOydtOuvuOyngCDsg53shLFcIiB9LFxuICBdO1xuICBjb25zdCBbYWlUb29scywgc2V0QWlUb29sc10gPSB1c2VTdGF0ZShBSV9UT09MU19ERUZBVUxUKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdXBhYmFzZS5mcm9tKFwic2V0dGluZ3NcIikuc2VsZWN0KFwidmFsdWVcIikuZXEoXCJrZXlcIiwgXCJhaV90b29sc1wiKS5zaW5nbGUoKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7IGlmIChkYXRhPy52YWx1ZSkgc2V0QWlUb29scyhkYXRhLnZhbHVlKTsgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgc2F2ZUFpVG9vbHNUb0RiID0gYXN5bmMgKHVwZGF0ZWQpID0+IHtcbiAgICBzZXRBaVRvb2xzKHVwZGF0ZWQpO1xuICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXR0aW5nc1wiKS51cHNlcnQoeyBrZXk6IFwiYWlfdG9vbHNcIiwgdmFsdWU6IHVwZGF0ZWQsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KTtcbiAgfTtcbiAgY29uc3QgW2FpVG9vbEVkaXRNb2RlLCBzZXRBaVRvb2xFZGl0TW9kZV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gbnVsbCB8IFwiYWRkXCIgfCBpbmRleFxuICBjb25zdCBbYWlUb29sRWRpdERhdGEsIHNldEFpVG9vbEVkaXREYXRhXSA9IHVzZVN0YXRlKHsgaWNvbjogXCJcIiwgbGFiZWw6IFwiXCIsIHVybDogXCJcIiwgZGVzYzogXCJcIiB9KTtcblxuICAvLyDtjrjsp5Eg7ZmU66m0IO2VmOuLqCDtlIzrnqvtj7wg7Lm065OcIOyInOyEnCAobG9jYWxTdG9yYWdlIOyYgeyGjSlcbiAgY29uc3QgW2RyYWZ0UGxhdGZvcm1PcmRlciwgc2V0RHJhZnRQbGF0Zm9ybU9yZGVyXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZHJhZnRQbGF0Zm9ybU9yZGVyXCIpO1xuICAgIHJldHVybiBzYXZlZCA/IEpTT04ucGFyc2Uoc2F2ZWQpIDogW1widHdpdHRlclwiLCBcInlvdXR1YmVcIiwgXCJmYWNlYm9va1wiLCBcImluc3RhZ3JhbVwiLCBcInRocmVhZHNcIl07XG4gIH0pO1xuICBjb25zdCBkcmFmdFBsYXRmb3JtRHJhZ1JlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyDstIjslYgg7J6Q64+ZIOyDneyEsVxuICBjb25zdCBbZHJhZnRQcm9tcHRzLCBzZXREcmFmdFByb21wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9tcHRJZCwgc2V0U2VsZWN0ZWRQcm9tcHRJZF0gPSB1c2VTdGF0ZShudWxsKTsgLy8gbnVsbCB8IFwibmV3XCIgfCBudW1iZXIoaWQpXG4gIGNvbnN0IFtkcmFmdFByb21wdEVkaXQsIHNldERyYWZ0UHJvbXB0RWRpdF0gPSB1c2VTdGF0ZSh7IHRpdGxlOiBcIlwiLCBjb250ZW50OiBcIlwiIH0pO1xuICBjb25zdCBbZHJhZnRHZW5QbGF0Zm9ybXMsIHNldERyYWZ0R2VuUGxhdGZvcm1zXSA9IHVzZVN0YXRlKFtcInR3aXR0ZXJcIiwgXCJ5b3V0dWJlXCIsIFwiZmFjZWJvb2tcIiwgXCJpbnN0YWdyYW1cIiwgXCJ0aHJlYWRzXCJdKTtcbiAgY29uc3QgW2lzRHJhZnRHZW5lcmF0aW5nLCBzZXRJc0RyYWZ0R2VuZXJhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcHRpbWl6YXRpb25UYWIsIHNldE9wdGltaXphdGlvblRhYl0gPSB1c2VTdGF0ZShcInBhdHRlcm5cIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3VwYWJhc2UuZnJvbShcInNldHRpbmdzXCIpLnNlbGVjdChcInZhbHVlXCIpLmVxKFwia2V5XCIsIFwiZHJhZnRfcHJvbXB0c1wiKS5zaW5nbGUoKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhPy52YWx1ZSkge1xuICAgICAgICAgIHNldERyYWZ0UHJvbXB0cyhkYXRhLnZhbHVlKTtcbiAgICAgICAgICAvLyDssqsg67KI7Ke4IO2UhOuhrO2UhO2KuCDsnpDrj5kg7ISg7YOdXG4gICAgICAgICAgaWYgKGRhdGEudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9tcHRJZChkYXRhLnZhbHVlWzBdLmlkKTtcbiAgICAgICAgICAgIHNldERyYWZ0UHJvbXB0RWRpdCh7IHRpdGxlOiBkYXRhLnZhbHVlWzBdLnRpdGxlLCBjb250ZW50OiBkYXRhLnZhbHVlWzBdLmNvbnRlbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOyggOyepeuQnCDtlITroaztlITtirgg7JeG7Jy866m0IOyDiCDtlITroaztlITtirgg66qo65Oc66GcIOyLnOyekVxuICAgICAgICAgIHNldFNlbGVjdGVkUHJvbXB0SWQoXCJuZXdcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IHNhdmVEcmFmdFByb21wdHNUb0RiID0gYXN5bmMgKHVwZGF0ZWQpID0+IHtcbiAgICBzZXREcmFmdFByb21wdHModXBkYXRlZCk7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInNldHRpbmdzXCIpLnVwc2VydCh7IGtleTogXCJkcmFmdF9wcm9tcHRzXCIsIHZhbHVlOiB1cGRhdGVkLCB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSk7XG4gICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gIH07XG5cbiAgLy8g7L2Y7YWQ7LigIOuqqeuhnSDqsoDsg4kg7IOB7YOcICjsnoXroKUg7KSRKVxuICBjb25zdCBbc2VhcmNoVGl0bGUsIHNldFNlYXJjaFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VhcmNoUGxhdGZvcm1zLCBzZXRTZWFyY2hQbGF0Zm9ybXNdID0gdXNlU3RhdGUoW1widHdpdHRlclwiLCBcInlvdXR1YmVcIiwgXCJmYWNlYm9va1wiLCBcImluc3RhZ3JhbVwiLCBcInRocmVhZHNcIl0pO1xuICBjb25zdCBbc2VhcmNoU3RhdHVzZXMsIHNldFNlYXJjaFN0YXR1c2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFJlZ0RhdGUsIHNldFNlYXJjaFJlZ0RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWFyY2hQdWJEYXRlLCBzZXRTZWFyY2hQdWJEYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VhcmNoUmVnaXN0cmFudCwgc2V0U2VhcmNoUmVnaXN0cmFudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8g6rKA7IOJIOuyhO2KvCDtgbTrpq0g7IucIOyggeyaqeuQmOuKlCDsi6TsoJwg7ZWE7YSwXG4gIGNvbnN0IEFMTF9QTEFURk9STVMgPSBbXCJ0d2l0dGVyXCIsIFwieW91dHViZVwiLCBcImZhY2Vib29rXCIsIFwiaW5zdGFncmFtXCIsIFwidGhyZWFkc1wiXTtcbiAgY29uc3QgW2FwcGxpZWRTZWFyY2gsIHNldEFwcGxpZWRTZWFyY2hdID0gdXNlU3RhdGUoeyB0aXRsZTogXCJcIiwgcGxhdGZvcm1zOiBBTExfUExBVEZPUk1TLCBzdGF0dXNlczogW10sIHJlZ0RhdGU6IFwiXCIsIHB1YkRhdGU6IFwiXCIsIHJlZ2lzdHJhbnQ6IFwiXCIgfSk7XG5cbiAgLy8g7L2Y7YWQ7LigIOy6mOumsOuNlCDsg4Htg5xcbiAgY29uc3QgW2NvbnRlbnRzQ2FsVmlldywgc2V0Q29udGVudHNDYWxWaWV3XSA9IHVzZVN0YXRlKFwibW9udGhcIik7XG4gIGNvbnN0IFtjb250ZW50c0NhbFllYXIsIHNldENvbnRlbnRzQ2FsWWVhcl0gPSB1c2VTdGF0ZSgyMDI2KTtcbiAgY29uc3QgW2NvbnRlbnRzQ2FsTW9udGgsIHNldENvbnRlbnRzQ2FsTW9udGhdID0gdXNlU3RhdGUoMik7IC8vIDAtaW5kZXhlZCwgMj0z7JuUXG4gIGNvbnN0IFtjb250ZW50c0NhbFNlbGVjdGVkRGF5LCBzZXRDb250ZW50c0NhbFNlbGVjdGVkRGF5XSA9IHVzZVN0YXRlKDIyKTsgLy8g7Jik64qYIOuCoOynnFxuICBjb25zdCBbY29udGVudHNDYWxQbGF0Zm9ybXMsIHNldENvbnRlbnRzQ2FsUGxhdGZvcm1zXSA9IHVzZVN0YXRlKFtcInR3aXR0ZXJcIiwgXCJ5b3V0dWJlXCIsIFwiZmFjZWJvb2tcIiwgXCJpbnN0YWdyYW1cIiwgXCJ0aHJlYWRzXCJdKTtcblxuICAvLyDsnbjspp0g7IOB7YOcIChTdXBhYmFzZSBBdXRoIOyXsOuPmSDsoIQgbW9jaylcbiAgY29uc3QgW2F1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlXSA9IHVzZVN0YXRlKFwiYXBwcm92ZWRcIik7IC8vIFwibG9nZ2VkLW91dFwiIHwgXCJzaWdudXBcIiB8IFwicGVuZGluZ1wiIHwgXCJhcHByb3ZlZFwiXG4gIGNvbnN0IFthdXRoRm9ybSwgc2V0QXV0aEZvcm1dID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIG5hbWU6IFwiXCIgfSk7XG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyDtmozsm5Ag6rSA66asXG4gIGNvbnN0IFttZW1iZXJzTGlzdCwgc2V0TWVtYmVyc0xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIO2ZiCAtIOyxhOuEkOuzhCDshLHqs7wg6rKA7IOJIOyDge2DnFxuICBjb25zdCBbaG9tZUNoYW5uZWxQbGF0Zm9ybXMsIHNldEhvbWVDaGFubmVsUGxhdGZvcm1zXSA9IHVzZVN0YXRlKFtcInR3aXR0ZXJcIiwgXCJ5b3V0dWJlXCIsIFwiZmFjZWJvb2tcIiwgXCJpbnN0YWdyYW1cIiwgXCJ0aHJlYWRzXCJdKTtcbiAgY29uc3QgW2hvbWVDaGFubmVsU3RhcnREYXRlLCBzZXRIb21lQ2hhbm5lbFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShcIjIwMjYtMDMtMTVcIik7XG4gIGNvbnN0IFtob21lQ2hhbm5lbEVuZERhdGUsIHNldEhvbWVDaGFubmVsRW5kRGF0ZV0gPSB1c2VTdGF0ZShcIjIwMjYtMDMtMjJcIik7XG5cbiAgLy8g7ZmIIC0g7L2Y7YWQ7Lig67OEIOyEseqzvCDqsoDsg4kg7IOB7YOcXG4gIGNvbnN0IFtob21lQ29udGVudFBsYXRmb3Jtcywgc2V0SG9tZUNvbnRlbnRQbGF0Zm9ybXNdID0gdXNlU3RhdGUoW1widHdpdHRlclwiLCBcInlvdXR1YmVcIiwgXCJmYWNlYm9va1wiLCBcImluc3RhZ3JhbVwiLCBcInRocmVhZHNcIl0pO1xuICBjb25zdCBbaG9tZUNvbnRlbnRTdGFydERhdGUsIHNldEhvbWVDb250ZW50U3RhcnREYXRlXSA9IHVzZVN0YXRlKFwiMjAyNi0wMy0xNVwiKTtcbiAgY29uc3QgW2hvbWVDb250ZW50RW5kRGF0ZSwgc2V0SG9tZUNvbnRlbnRFbmREYXRlXSA9IHVzZVN0YXRlKFwiMjAyNi0wMy0yMlwiKTtcbiAgY29uc3QgW2hvbWVDb250ZW50VGl0bGUsIHNldEhvbWVDb250ZW50VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHsgaWQ6IFwiaG9tZVwiLCBsYWJlbDogXCLtmYhcIiwgaWNvbjogSWNvbnMuSG9tZSB9LFxuICAgIHsgaWQ6IFwiY29udGVudHNcIiwgbGFiZWw6IFwi7L2Y7YWQ7LigIOq0gOumrFwiLCBpY29uOiBJY29ucy5FZGl0IH0sXG4gICAgeyBpZDogXCJjb21tdW5pdHlcIiwgbGFiZWw6IFwi7Luk666k64uI7YuwXCIsIGljb246IEljb25zLk1lc3NhZ2VDaXJjbGUgfSxcbiAgICB7IGlkOiBcInJlc2VhcmNoXCIsIGxhYmVsOiBcIuumrOyEnOy5mFwiLCBpY29uOiBJY29ucy5TZWFyY2ggfSxcbiAgXTtcblxuICBjb25zdCBzdGF0dXNDb2xvcnMgPSB7IGFwcHJvdmVkOiBcIiMxMGI5ODFcIiwgZHJhZnQ6IFwiIzk0YTNiOFwiLCByZXZpZXc6IFwiI2Y1OWUwYlwiIH07XG4gIGNvbnN0IHN0YXR1c0xhYmVscyA9IHsgYXBwcm92ZWQ6IFwi7Iq57J247JmE66OMXCIsIGRyYWZ0OiBcIuy0iOyViFwiLCByZXZpZXc6IFwi6rKA7Yag7KSRXCIgfTtcbiAgY29uc3Qgc2VudGltZW50Q29sb3JzID0geyBwb3NpdGl2ZTogXCIjMTBiOTgxXCIsIG5lZ2F0aXZlOiBcIiNlZjQ0NDRcIiwgbmV1dHJhbDogXCIjOTRhM2I4XCIgfTtcbiAgY29uc3Qgc2VudGltZW50TGFiZWxzID0geyBwb3NpdGl2ZTogXCLquI3soJVcIiwgbmVnYXRpdmU6IFwi67aA7KCVXCIsIG5ldXRyYWw6IFwi7KSR66a9XCIgfTtcblxuICBjb25zdCBbaXNHZW5lcmF0aW5nLCBzZXRJc0dlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOyXsOuPmSDqtIDrpqwg7YOtIOyDge2DnFxuICBjb25zdCBbaW50ZWdyYXRpb25UYWIsIHNldEludGVncmF0aW9uVGFiXSA9IHVzZVN0YXRlKFwic25zXCIpO1xuICAvLyBTTlMg7ZSM656r7Y+8IOyInOyEnCAo65Oc656Y6re4IOyVpCDrk5zroa3snLzroZwg67OA6rK9LCBsb2NhbFN0b3JhZ2Xsl5Ag7J6Q64+ZIOyggOyepSlcbiAgY29uc3QgW3Nuc09yZGVyLCBzZXRTbnNPcmRlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNuc09yZGVyXCIpO1xuICAgIHJldHVybiBzYXZlZCA/IEpTT04ucGFyc2Uoc2F2ZWQpIDogW1widHdpdHRlclwiLCBcInlvdXR1YmVcIiwgXCJmYWNlYm9va1wiLCBcImluc3RhZ3JhbVwiLCBcInRocmVhZHNcIl07XG4gIH0pO1xuICBjb25zdCBkcmFnU25zUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIOyEnOu5hOyKpCDsl7Drj5kg7J6Q6rKp7Kad66qFXG4gIGNvbnN0IFtzZXJ2aWNlQ3JlZGVudGlhbHMsIHNldFNlcnZpY2VDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XG4gICAgc3VwYWJhc2U6ICAgIHsgcHJvamVjdFVybDogXCJcIiwgcHVibGlzaGFibGVLZXk6IFwiXCIsIGFub25LZXlMZWdhY3k6IFwiXCIgfSxcbiAgICBnaXRodWI6ICAgICAgeyBwZXJzb25hbEFjY2Vzc1Rva2VuOiBcIlwiLCBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9LFxuICAgIHZlcmNlbDogICAgICB7IGFjY2Vzc1Rva2VuOiBcIlwiLCBwcm9qZWN0SWQ6IFwiXCIsIG9yZ0lkOiBcIlwiIH0sXG4gICAgZ29vZ2xlU2hlZXQ6IHsgc3ByZWFkc2hlZXRJZDogXCJcIiwgc2VydmljZUFjY291bnRFbWFpbDogXCJcIiwgcHJpdmF0ZUtleTogXCJcIiB9LFxuICAgIG9wZW5haTogICAgICB7IGFwaUtleTogXCJcIiB9LFxuICB9KTtcbiAgY29uc3QgW3NlcnZpY2VTYXZlU3RhdHVzLCBzZXRTZXJ2aWNlU2F2ZVN0YXR1c10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gU05TIOyXsOuPmSDqtIDrpqwg7IOB7YOcXG4gIGNvbnN0IFtzbnNDcmVkZW50aWFscywgc2V0U25zQ3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xuICAgIGZhY2Vib29rOiAgeyBwYWdlQWNjZXNzVG9rZW46IFwiXCIsIHBhZ2VJZDogXCJcIiB9LFxuICAgIHR3aXR0ZXI6ICAgeyBiZWFyZXJUb2tlbjogXCJcIiwgY29uc3VtZXJLZXk6IFwiXCIsIGNvbnN1bWVyS2V5U2VjcmV0OiBcIlwiLCBhY2Nlc3NUb2tlbjogXCJcIiwgYWNjZXNzVG9rZW5TZWNyZXQ6IFwiXCIsIGNsaWVudElkOiBcIlwiLCBjbGllbnRTZWNyZXQ6IFwiXCIgfSxcbiAgICB0aHJlYWRzOiAgIHsgYXBwSWQ6IFwiXCIsIGFjY2Vzc1Rva2VuOiBcIlwiIH0sXG4gICAgaW5zdGFncmFtOiB7IGFjY2Vzc1Rva2VuOiBcIlwiLCB1c2VySWQ6IFwiXCIgfSxcbiAgICB5b3V0dWJlOiAgIHsgY2xpZW50SWQ6IFwiXCIsIGNsaWVudFNlY3JldDogXCJcIiB9LFxuICB9KTtcbiAgY29uc3QgW3Nuc1NhdmVTdGF0dXMsIHNldFNuc1NhdmVTdGF0dXNdID0gdXNlU3RhdGUoe30pOyAvLyB7IGZhY2Vib29rOiBcInNhdmVkXCIgfCBcInNhdmluZ1wiIHwgbnVsbCB9XG4gIGNvbnN0IFtzaG93VG9rZW5zLCBzZXRTaG93VG9rZW5zXSA9IHVzZVN0YXRlKHt9KTsgICAgICAgLy8geyBcImZhY2Vib29rLXBhZ2VBY2Nlc3NUb2tlblwiOiB0cnVlIH1cblxuICAvLyDslbEg7Iuc7J6RIOyLnCBEQuyXkOyEnCDsnpDqsqnspp3rqoUg66Gc65OcXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENyZWRlbnRpYWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgW3sgZGF0YTogc25zRGF0YSB9LCB7IGRhdGE6IHN2Y0RhdGEgfSwgeyBkYXRhOiBtZW1iZXJzRGF0YSB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgc3VwYWJhc2UuZnJvbShcInNuc19jcmVkZW50aWFsc1wiKS5zZWxlY3QoXCJwbGF0Zm9ybSwgY3JlZGVudGlhbHNcIiksXG4gICAgICAgIHN1cGFiYXNlLmZyb20oXCJzZXJ2aWNlX2NyZWRlbnRpYWxzXCIpLnNlbGVjdChcInNlcnZpY2UsIGNyZWRlbnRpYWxzXCIpLFxuICAgICAgICBzdXBhYmFzZS5mcm9tKFwibWVtYmVyc1wiKS5zZWxlY3QoXCIqXCIpLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KSxcbiAgICAgIF0pO1xuXG4gICAgICBpZiAobWVtYmVyc0RhdGE/Lmxlbmd0aCkge1xuICAgICAgICBzZXRNZW1iZXJzTGlzdChtZW1iZXJzRGF0YS5tYXAobSA9PiAoe1xuICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgIG5hbWU6IG0ubmFtZSxcbiAgICAgICAgICBlbWFpbDogbS5lbWFpbCxcbiAgICAgICAgICBqb2luZWRBdDogbS5qb2luZWRfYXQsXG4gICAgICAgICAgYXBwcm92YWxTdGF0dXM6IG0uYXBwcm92YWxfc3RhdHVzLFxuICAgICAgICAgIHJvbGU6IG0ucm9sZSxcbiAgICAgICAgfSkpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNuc0RhdGE/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBsb2FkZWQgPSB7fTtcbiAgICAgICAgc25zRGF0YS5mb3JFYWNoKHJvdyA9PiB7IGxvYWRlZFtyb3cucGxhdGZvcm1dID0gcm93LmNyZWRlbnRpYWxzOyB9KTtcbiAgICAgICAgc2V0U25zQ3JlZGVudGlhbHMocHJldiA9PiB7XG4gICAgICAgICAgY29uc3QgbWVyZ2VkID0geyAuLi5wcmV2IH07XG4gICAgICAgICAgT2JqZWN0LmtleXMobG9hZGVkKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkW3BdID0geyAuLi5wcmV2W3BdLCAuLi5sb2FkZWRbcF0gfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN2Y0RhdGE/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBsb2FkZWQgPSB7fTtcbiAgICAgICAgc3ZjRGF0YS5mb3JFYWNoKHJvdyA9PiB7IGxvYWRlZFtyb3cuc2VydmljZV0gPSByb3cuY3JlZGVudGlhbHM7IH0pO1xuICAgICAgICBzZXRTZXJ2aWNlQ3JlZGVudGlhbHMocHJldiA9PiB7XG4gICAgICAgICAgY29uc3QgbWVyZ2VkID0geyAuLi5wcmV2IH07XG4gICAgICAgICAgT2JqZWN0LmtleXMobG9hZGVkKS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkW3NdID0geyAuLi5wcmV2W3NdLCAuLi5sb2FkZWRbc10gfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZENyZWRlbnRpYWxzKCk7XG4gIH0sIFtdKTtcblxuICAvLyDtjrjsp5Eg7ZmU66m0IOy0iOyViCDsnpDrj5kg7IOd7ISxIChPcGVuQUkgQVBJIO2YuOy2nClcbiAgY29uc3QgaGFuZGxlRHJhZnRHZW5lcmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWVkaXRpbmdDb250ZW50Py5tYXN0ZXJUZXh0Py50cmltKCkpIHtcbiAgICAgIGFsZXJ0KFwi66eI7Iqk7YSwIOq4gOydhCDsnoXroKXtlbTso7zshLjsmpQuXFxu66eI7Iqk7YSwIOq4gOydtCDsnojslrTslbwg7LSI7JWI7J2EIOyDneyEse2VoCDsiJgg7J6I7Iq164uI64ukLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFkcmFmdFByb21wdEVkaXQuY29udGVudC50cmltKCkpIHtcbiAgICAgIGFsZXJ0KFwi7ZSE66Gs7ZSE7Yq466W8IOyEoO2Dne2VmOqxsOuCmCDsnoXroKXtlbTso7zshLjsmpQuXFxu7Jm87Kq9IOuqqeuhneyXkOyEnCDtlITroaztlITtirjrpbwg7ISg7YOd7ZWY6rGw64KYIOuCtOyaqeydhCDsp4HsoJEg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRyYWZ0R2VuUGxhdGZvcm1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxlcnQoXCLsg53shLHtlaAg7ZSM656r7Y+87J2EIO2VmOuCmCDsnbTsg4Eg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBpS2V5ID0gc2VydmljZUNyZWRlbnRpYWxzLm9wZW5haT8uYXBpS2V5Py50cmltKCk7XG4gICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgIGFsZXJ0KFwiT3BlbkFJIEFQSSDtgqTqsIAg7JeG7Iq164uI64ukLlxcbuyXsOuPmSDqtIDrpqwgPiDshJzruYTsiqQg7Jew64+ZID4gT3BlbkFJ7JeQ7IScIO2CpOulvCDsoIDsnqXtlbTso7zshLjsmpQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzRHJhZnRHZW5lcmF0aW5nKHRydWUpO1xuXG4gICAgY29uc3QgUExBVEZPUk1fTkFNRVMgPSB7IHR3aXR0ZXI6IFwiWCAoVHdpdHRlcilcIiwgeW91dHViZTogXCJZb3VUdWJlIOy7pOuupOuLiO2LsFwiLCBmYWNlYm9vazogXCJGYWNlYm9va1wiLCBpbnN0YWdyYW06IFwiSW5zdGFncmFtXCIsIHRocmVhZHM6IFwiVGhyZWFkc1wiIH07XG4gICAgY29uc3QgUExBVEZPUk1fR1VJREVTID0ge1xuICAgICAgdHdpdHRlcjogICBcIjE0MOyekCDsnbTrgrQsIOqwhOqysO2VmOqzoCDsnoTtjKntirgg7J6I6rKMLCDtlbTsi5ztg5zqt7ggM+qwnCDsnbTtlZhcIixcbiAgICAgIHlvdXR1YmU6ICAgXCIyMDDsnpAg7J2064K0LCDsuZzqt7ztlZjqs6Ag7IOB7IS47ZWY6rKMLCDsnKDtipzruIwg7Luk666k64uI7YuwIOqyjOyLnOq4gCDtmJXsi51cIixcbiAgICAgIGZhY2Vib29rOiAgXCLqs7XqsJDtmJXCt+y7pOuupOuLiO2LsCDsuZztmZTsoIEsIOyniOusuOycvOuhnCDrp4jrrLTrpqwsIOydtOuqqOyngCDsoIHsoIjtnogg7IKs7JqpXCIsXG4gICAgICBpbnN0YWdyYW06IFwi6rCQ7ISx7KCBwrfruYTso7zslrwg7KSR7IusLCDspITrsJTqv4gg7Zmc7JqpLCDtlbTsi5ztg5zqt7ggMTDqsJwg7J207ZWYXCIsXG4gICAgICB0aHJlYWRzOiAgIFwi7Ken6rOgIOuMgO2ZlOyytCwgMjAw7J6QIOydtOuCtCwg6rCA67ON6rKMIOydve2eiOuKlCDthqRcIixcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhdGZvcm1MaXN0ID0gZHJhZnRHZW5QbGF0Zm9ybXNcbiAgICAgIC5tYXAocCA9PiBgLSAke1BMQVRGT1JNX05BTUVTW3BdfTogJHtQTEFURk9STV9HVUlERVNbcF19YClcbiAgICAgIC5qb2luKFwiXFxuXCIpO1xuXG4gICAgY29uc3QgcHJvbXB0SW5zdHJ1Y3Rpb24gPSBkcmFmdFByb21wdEVkaXQuY29udGVudC50cmltKCk7XG5cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBg64u57Iug7J2AIFNOUyDsvZjthZDsuKAg7KCE66y46rCA7J6F64uI64ukLiDso7zslrTsp4Qg66eI7Iqk7YSwIOq4gOydhCDqsIEg7ZSM656r7Y+87JeQIOunnuqyjCDsnqzsnpHshLHtlbTso7zshLjsmpQuXG5cbuy2lOqwgCDsp4Dsuag6ICR7cHJvbXB0SW5zdHJ1Y3Rpb259XG5cbu2UjOueq+2PvOuzhCDsmpTqtazsgqztla06XG4ke3BsYXRmb3JtTGlzdH1cblxu7J2R64u1IO2YleyLnTog67CY65Oc7IucIOyVhOuemCBKU09OIO2YleyLneycvOuhnOunjCDsnZHri7XtlZjshLjsmpQuIOuLpOuluCDthY3siqTtirgg7JeG7J20IEpTT07rp4wg7Lac66Cl7ZWY7IS47JqULlxue1xuICAke2RyYWZ0R2VuUGxhdGZvcm1zLm1hcChwID0+IGBcIiR7cH1cIjogXCLtlbTri7kg7ZSM656r7Y+87JqpIOq4gFwiYCkuam9pbihcIixcXG4gIFwiKX1cbn1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbW9kZWw6IFwiZ3B0LTRvLW1pbmlcIixcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGDrp4jsiqTthLAg6riAOlxcbiR7ZWRpdGluZ0NvbnRlbnQubWFzdGVyVGV4dH1gIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgICBpZiAoIXJlc3Aub2spIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yPy5tZXNzYWdlIHx8IGBBUEkg7Jik66WYICR7cmVzcC5zdGF0dXN9YCk7XG5cbiAgICAgIGNvbnN0IHJhdyA9IGRhdGEuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQudHJpbSgpO1xuICAgICAgY29uc3QganNvblN0ciA9IHJhdy5yZXBsYWNlKC9eYGBganNvblxcbj8vLCBcIlwiKS5yZXBsYWNlKC9cXG4/YGBgJC8sIFwiXCIpLnRyaW0oKTtcbiAgICAgIGNvbnN0IGdlbmVyYXRlZCA9IEpTT04ucGFyc2UoanNvblN0cik7XG5cbiAgICAgIHNldEVkaXRpbmdDb250ZW50KHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgcGxhdGZvcm1EcmFmdHM6IHsgLi4ucHJldi5wbGF0Zm9ybURyYWZ0cywgLi4uZ2VuZXJhdGVkIH0sXG4gICAgICB9KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWxlcnQoYOy0iOyViCDsg53shLEg7Iuk7YyoOiAke2UubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNEcmFmdEdlbmVyYXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZSA9ICgpID0+IHtcbiAgICBpZiAoIW11bHRpVXNlSW5wdXQudHJpbSgpKSByZXR1cm47XG4gICAgc2V0R2VuZXJhdGVkQ29udGVudChudWxsKTtcbiAgICBzZXRJc0dlbmVyYXRpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0dlbmVyYXRpbmcoZmFsc2UpO1xuICAgICAgc2V0R2VuZXJhdGVkQ29udGVudCh7XG4gICAgICAgIGluc3RhZ3JhbToge1xuICAgICAgICAgIHRleHQ6IGDwn5O4IOy9lOuUqSDrqrDrnbzrj4QgU05TIOyekOuPme2ZlCDqsIDriqXtlanri4jri6RcXG5cXG7shpTsp4Htnogg66ek7J28IDXqsJwg7LGE64SQ7JeQIOy9mO2FkOy4oCDsmKzrpqzripQg6rGwLFxcbuuEiOustCDqt4DssK7sp4Ag7JWK7Jy87IWo64KY7JqUPyDwn6Sm4oCN4pmA77iPXFxuXFxuQW50aWdyYXZpdHnrpbwg66eM64KY6rOgIOuCmOyEnFxcbuyggOuKlCDsnbQg66qo65OgIOqxuCDsnpDrj5ntmZTtlojsirXri4jri6QuXFxuXFxu4pyFIOuhnOq3uOyduOu2gO2EsCDquIAg7J6R7ISxLCDrsJztlonquYzsp4Ag7J6Q64+ZXFxu4pyFIOyCrOuejOyymOufvCDsm4Dsp4Hsl6zshJwg7LCo64uoIOqxseyglSBOT1xcbuKchSBQeXRob24g6riw7LSI66eMIOyVjOuptCDrsJTroZwg7Iuc7J6RXFxu4pyFIOuMk+q4gCwg7KGw7ZqM7IiYIOyImOynkeq5jOyngCDtlZwg67KI7JeQXFxuXFxu66eI7LyA7YSw6rCAIOynhOynnCDtlbTslbwg7ZWgIOydvOydgFxcbifrsJjrs7Ug7J6R7JeFJ+ydtCDslYTri4jrnbwgJ+yghOuetSfsnbTsnpbslYTsmpQuXFxuXFxu8J+UlyDsnpDshLjtlZwg64K07Jqp7J2AIO2UhOuhnO2VhCDrp4Htgazsl5DshJwhXFxuXFxuI0FudGlncmF2aXR5ICPslYjti7Dqt7jrnpjruYTti7AgI+yXheustOyekOuPme2ZlFxcbiNTTlPsnpDrj5ntmZQgI+uniOy8gO2MheyekOuPme2ZlCAj7YyM7J207I2sXFxuI+ybueyekOuPme2ZlCAj66eI7LyA7YSw7ZWE7IiY7YWcICPsg53sgrDshLFgLFxuICAgICAgICAgIGNoYXJDb3VudDogNDEyLFxuICAgICAgICAgIGhhc2h0YWdzOiA5LFxuICAgICAgICAgIGZvcm1hdDogXCLsupDrn6zshYAgMTDsnqUg6raM7J6lXCIsXG4gICAgICAgICAgdGlwOiBcIuyyqyDsnqXsl5Ag7ZuE7YK5IOusuOq1rCwg66eI7KeA66eJIOyepeyXkCBDVEEg67Cw7LmYXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2Vib29rOiB7XG4gICAgICAgICAgdGV4dDogYOyXrOufrOu2hCwg7Zi57IucIOunpOydvCBTTlMg7LGE64SQ66eI64ukIOqwmeydgCDrgrTsmqnsnYQg67O167aZ7ZWY6rOgIOqzhOyLoOqwgOyalD8g8J+YhVxcblxcbuyggOuPhCDqt7jrnqzsirXri4jri6QuIOyduOyKpO2DgCwg7Y6Y67aBLCBYLCDsiqTroIjrk5wsIOycoO2KnOu4jC4uLiA16rCcIOyxhOuEkOydhCDsmrTsmIHtlZjrqbTshJwg7ZWY66Oo7J2YIOygiOuwmOydhCDri6jsiJwg67CY67O1IOyekeyXheyXkCDsk7Dqs6Ag7J6I7JeI7Ja07JqULlxcblxcbuq3uOufrOuLpCDrsJzqsqztlZwg6rKMIEFudGlncmF2aXR5KOyViO2LsOq3uOuemOu5hO2LsCnsnoXri4jri6QuXFxuXFxuQW50aWdyYXZpdHnripQg7YyM7J207I2sIOq4sOuwmOydmCDsm7kg7J6Q64+Z7ZmUIOuPhOq1rOyduOuNsOyalCwg6riw7KG0IOyekOuPme2ZlCDrj4Tqtazrk6Tqs7wg64uk66W4IOygkOydtCDsnojsirXri4jri6Q6XFxuXFxu8J+UuSDsi6TsoJwg67iM65287Jqw7KCA7JeQ7IScIOyCrOuejOyymOufvCDrj5nsnpHtlbTshJwg67SHIOywqOuLqOydhCDqsbHsoJXtlaAg7ZWE7JqU6rCAIOyXhuyKteuLiOuLpFxcbvCflLkg66Gc6re47J24IOKGkiDquIAg7J6R7ISxIOKGkiDrsJztlonquYzsp4Ag7KCEIOqzvOygleydhCDsnpDrj5ntmZTtlaAg7IiYIOyeiOyKteuLiOuLpFxcbvCflLkg6rK97J+B7IKsIOuqqOuLiO2EsOungSwg64yT6riAL+umrOu3sCDsiJjsp5EsIOyEseqzvCDrjbDsnbTthLAg67aE7ISd6rmM7KeAIOqwgOuKpe2VqeuLiOuLpFxcblxcbu2Kue2eiCDrp4jsvIDtjIUg7Iuk66y07J6Q652866m0LCDsvZjthZDsuKDrpbwg7ZWcIOuyiCDrp4zrk6TslrTshJwg7Jes65+sIOyxhOuEkOyXkCDsnpDrj5kg67Cw7Y+s7ZWY6rOgIOyEseqzvOq5jOyngCDsnpDrj5kg7IiY7KeR7ZWY64qUIOybjO2BrO2UjOuhnOyasOulvCDrp4zrk6Qg7IiYIOyeiOuLpOuKlCDqsowg6rCA7J6lIO2BsCDrqZTrpqztirjsnoXri4jri6QuXFxuXFxuUHl0aG9uIOq4sOy0iOunjCDslYzrqbQg7Iuc7J6R7ZWgIOyImCDsnojslrTshJwsIOqwnOuwnOyekOqwgCDslYTri4wg66eI7LyA7YSw64+EIOy2qeu2hO2eiCDtmZzsmqkg6rCA64ql7ZWp64uI64ukLlxcblxcbvCfkYkg642UIOyekOyEuO2VnCDrgrTsmqnsnbQg6raB6riI7ZWY7Iuc66m0IOuMk+q4gOydtOuCmCBETSDso7zshLjsmpQhXFxuXFxu7Jes65+s67aE7J2AIFNOUyDsmrTsmIHsl5DshJwg6rCA7J6lIOq3gOywruydgCDsnpHsl4XsnbQg662U6rCA7JqUPyDrjJPquIDroZwg7JWM66Ck7KO87IS47JqUIPCfkYdgLFxuICAgICAgICAgIGNoYXJDb3VudDogNjgwLFxuICAgICAgICAgIGhhc2h0YWdzOiAwLFxuICAgICAgICAgIGZvcm1hdDogXCLrp4Htgawg7Y+s7Iqk7Yq4ICjsjbjrhKTsnbwg7J2066+47KeAIO2PrO2VqClcIixcbiAgICAgICAgICB0aXA6IFwi7KeI66y47ZiVIOuniOustOumrOuhnCDrjJPquIAg7Jyg64+EIOKAlCDtjpjrtoEg7JWM6rOg66as7KaYIOuwmOydkSDihpFcIixcbiAgICAgICAgfSxcbiAgICAgICAgdHdpdHRlcjoge1xuICAgICAgICAgIHRleHQ6IGDwn6e1IOuniOy8gO2EsOyduOuNsCDslYTsp4Hrj4QgU05TIDXqsJwg7LGE64SQ7JeQIOyImOuPmeycvOuhnCDsmKzrpqzqs6Ag6rOE7Iug6rCA7JqUP1xcblxcbkFudGlncmF2aXR5IO2VmOuCmOuptCDrgZ3rgqnri4jri6QuXFxuXFxu7JWM66Ck65Oc66a06rKM7JqUIPCfkYdcXG5cXG4tLS1cXG5cXG4xLyBBbnRpZ3Jhdml0eeuKlCDtjIzsnbTsjawg6riw67CYIOybuSDsnpDrj5ntmZQg65287J2067iM65+s66as7J6F64uI64ukLlxcblxcblNlbGVuaXVt6rO8IOuLpOuluCDsoJA/XFxu4oaSIOyCrOuejOyymOufvCDruIzrnbzsmrDsoIDrpbwg7KGw7J6R7ZW07IScIOu0hyDtg5Dsp4Dsl5Ag7JWIIOqxuOumveuLiOuLpC5cXG5cXG4tLS1cXG5cXG4yLyDrp4jsvIDthLDqsIAg7ZWgIOyImCDsnojripQg6rKD65OkOlxcblxcbuKAoiDsvZjthZDsuKAg7J6Q64+ZIOuwnO2WiSAo7J247Iqk7YOAL+2OmOu2gS9YL+yKpOugiOuTnClcXG7igKIg6rK97J+B7IKsIFNOUyDsnpDrj5kg66qo64uI7YSw66eBXFxu4oCiIOuMk+q4gMK37KGw7ZqM7IiYwrfsoovslYTsmpQg7J6Q64+ZIOyImOynkVxcbuKAoiDshLHqs7wg642w7J207YSwIOyekOuPmSDrtoTshJ1cXG5cXG4tLS1cXG5cXG4zLyBcIuuCmCDsvZTrlKkg66q77ZWY64qU642wP1wiXFxuXFxuUHl0aG9uIOq4sOy0iOunjCDslYzrqbQg65Cp64uI64ukLlxcbnByaW50KFwiaGVsbG9cIikg7LmgIOykhCDslYzrqbQg7Iuc7J6RIOqwgOuKpS5cXG5cXG4tLS1cXG5cXG40LyDtlbXsi6zsnYAg7J206rKB64uI64ukOlxcblxcbuuniOy8gO2EsOydmCDsi5zqsITsnYAgJ+uwmOuztSDsnpHsl4Un7J20IOyVhOuLiOudvFxcbifsoITrnrXqs7wg7YGs66as7JeQ7J207Yuw67iMJ+yXkCDsjajslbwg7ZWp64uI64ukLlxcblxcbkFudGlncmF2aXR5ID0g67CY67O1IOyekeyXhSDsoJzqsbAg64+E6rWsIPCflKVcXG5cXG4tLS1cXG5cXG41LyDqtIDsi6wg7J6I7Jy866m0IPCflIQg66as7Y+s7Iqk7Yq4ICsg7YyU66Gc7JqwXFxuXFxu64uk7J2MIOyKpOugiOuTnOyXkOyEnCDsi6TsoJwg7J6Q64+Z7ZmUIOy9lOuTnOulvCDqs7XsnKDtlaDqsozsmpQuXFxuXFxuI0FudGlncmF2aXR5ICNTTlPsnpDrj5ntmZQgI+uniOy8gO2MhWAsXG4gICAgICAgICAgY2hhckNvdW50OiA1MjAsXG4gICAgICAgICAgaGFzaHRhZ3M6IDMsXG4gICAgICAgICAgZm9ybWF0OiBcIuyKpOugiOuTnCAoNeqwnCDtirjsnJcpXCIsXG4gICAgICAgICAgdGlwOiBcIjHrsogg7Yq47JyX7JeQ7IScIO2YuOq4sOyLrCDsnKDrsJwsIOuniOyngOunieyXkCBDVEEg67Cw7LmYXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRocmVhZHM6IHtcbiAgICAgICAgICB0ZXh0OiBgU05TIDXqsJwg7LGE64SQIOyatOyYge2VmOuKlCDrp4jsvIDthLDsnbjrjbDsmpQsXFxu7IaU7KeB7Z6IIOunpOydvCDqsJnsnYAg6riAIOuzteu2me2VmOuKlCDqsbAg64SI66y0IOyngOyzpOqxsOuToOyalC5cXG5cXG7qt7jrnpjshJwgQW50aWdyYXZpdHnrnbzripQg6rG4IOyNqOu0pOuKlOuNsC4uLlxcbuydtOqyjCDsp4Tsp5wg7IKs656M7LKY65+8IOu4jOudvOyasOyggOulvCDsobDsnpHtlbTsmpQuXFxuXFxu66Gc6re47J24IOKGkiDquIAg7J6R7ISxIOKGkiDrsJztlolcXG7snbQg7KCE7LK0IOqzvOygleydtCDsnpDrj5kuXFxuXFxu67SHIOywqOuLqD8g7IKs656M7LKY65+8IOybgOyngeyXrOyEnCDqsbjrpqzsp4Drj4Qg7JWK7J2MLlxcblxcblB5dGhvbiDquLDstIjrp4wg7JWM66m0IOuQmOqzoCxcXG7qsr3sn4Hsgqwg66qo64uI7YSw66eB7J2064KYIOuMk+q4gCDsiJjsp5Hrj4Qg6rCA64qlLlxcblxcbuuniOy8gO2EsOqwgCDrsJjrs7Ug7J6R7JeF7JeQIOyLnOqwhCDsk7DripQg6rG0XFxu7KeE7KecIOyVhOq5jOyatCDqsbAg7JWE64uM6rCA7JqUP1xcblxcbuq2geq4iO2VnCDqsbAg7J6I7Jy866m0IOusvOyWtOuztOyEuOyalCDinItgLFxuICAgICAgICAgIGNoYXJDb3VudDogMjk4LFxuICAgICAgICAgIGhhc2h0YWdzOiAwLFxuICAgICAgICAgIGZvcm1hdDogXCLthY3siqTtirgg7Y+s7Iqk7Yq4XCIsXG4gICAgICAgICAgdGlwOiBcIlRocmVhZHPripQg7ZW07Iuc7YOc6re4IO2aqOqzvCDrgq7snYwg4oCUIOuMgO2ZlOyytOuhnCDqs7XqsJAg7Jyg64+EXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHlvdXR1YmU6IHtcbiAgICAgICAgICB0ZXh0OiBg8J+TuiDsoJzrqqk6XFxu7L2U65SpIOuqsOudvOuPhCBTTlMg7J6Q64+Z7ZmUPyBBbnRpZ3Jhdml0eSDsmYTsoIQg7KCV67O1IHwg66eI7LyA7YSwIO2VhOyImCDrj4TqtaxcXG5cXG7wn5OLIOyEpOuqhTpcXG7rp4jsvIDthLDrnbzrqbQg6rytIOyVjOyVhOyVvCDtlaAgU05TIOyekOuPme2ZlCDrj4TqtawsIEFudGlncmF2aXR566W8IOyGjOqwnO2VqeuLiOuLpC5cXG5cXG5TZWxlbml1bSwgUGxheXdyaWdodOyZgOuKlCDssKjsm5DsnbQg64uk66W4IOybuSDsnpDrj5ntmZQg4oCUIOyCrOuejOyymOufvCDruIzrnbzsmrDsoIDrpbwg7KGw7J6R7ZWY6riwIOuVjOusuOyXkCDrtIcg7YOQ7KeA66W8IOyekOyXsOyKpOufveqyjCDthrXqs7ztlanri4jri6QuXFxuXFxu7J20IOyYgeyDgeyXkOyEnCDri6Tro6jripQg64K07JqpOlxcbuKAoiBBbnRpZ3Jhdml0eeqwgCDrrZTsp4AsIOyZnCDri6Trpbgg64+E6rWs7JmAIOuLpOuluOyngFxcbuKAoiDrp4jsvIDthLDqsIAg7Iuk66y07JeQ7IScIO2ZnOyaqe2VmOuKlCDqtazssrTsoIEg7IKs66GAXFxu4oCiIOyLpOygnCDsnpDrj5ntmZQg7L2U65OcIOyLnOyXsCAo65Sw65287ZWY6riwIOqwgOuKpSlcXG5cXG5QeXRob24g6riw7LSI66eMIOyVjOuptCDriITqtazrgpgg7Iuc7J6R7ZWgIOyImCDsnojsirXri4jri6QuXFxuXFxu4o+xIO2DgOyehOyKpO2DrO2UhDpcXG4wMDowMCDsnbjtirjroZwg4oCUIFNOUyDsmrTsmIHsnZgg6rOg7Ya1XFxuMDE6MjAgQW50aWdyYXZpdHnrnoA/XFxuMDM6NDUg6riw7KG0IOuPhOq1rOyZgOydmCDssKjsnbTsoJBcXG4wNjoxMCDsi6TrrLQg7Zmc7JqpIOyCrOuhgCA06rCA7KeAXFxuMDk6MzAg65287J2067iMIOy9lOuUqSDsi5zsl7BcXG4xMzowMCDrp4jsvIDthLDrpbwg7JyE7ZWcIOq/gO2MgVxcbjE1OjIwIOygleumrCDrsI8g64uk7J2MIOyYgeyDgSDsmIjqs6BcXG5cXG7wn4+3IO2DnOq3uDpcXG5BbnRpZ3Jhdml0eSwg7JWI7Yuw6re4656Y67mE7YuwLCBTTlMg7J6Q64+Z7ZmULCDsm7kg7J6Q64+Z7ZmULCDtjIzsnbTsjawg7J6Q64+Z7ZmULCDrp4jsvIDtjIUg7J6Q64+Z7ZmULCBTZWxlbml1bSDrjIDslYgsIOyXheustCDsnpDrj5ntmZQsIOuniOy8gO2EsCDrj4TqtawsIFB5dGhvbiDrp4jsvIDtjIVcXG5cXG7wn5SUIOq1rOuPheqzvCDsoovslYTsmpTripQg7YGwIO2emOydtCDrkKnri4jri6QhYCxcbiAgICAgICAgICBjaGFyQ291bnQ6IDcyMCxcbiAgICAgICAgICBoYXNodGFnczogMTAsXG4gICAgICAgICAgZm9ybWF0OiBcIuuhse2PvCDsmIHsg4EgKDE1fjIw67aEKSArIOyIj+y4oCDtgbTrpr0gM+qwnFwiLFxuICAgICAgICAgIHRpcDogXCLsiI/suKDsmqkg7ZWY7J2065287J207Yq4OiDrtIftg5Dsp4Ag7Jqw7ZqMIOyepeuptCwg7J6Q64+ZIOuwnO2WiSDsi5zsl7AsIEJlZm9yZS9BZnRlciDruYTqtZBcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sIDE1MDApO1xuICB9O1xuXG4gIC8vIFN0eWxlc1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgYXBwOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgZm9udEZhbWlseTogXCInUHJldGVuZGFyZCcsICdBcHBsZSBTRCBHb3RoaWMgTmVvJywgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZlwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjZjhmOWZjXCIsXG4gICAgICBjb2xvcjogXCIjMWExYTJlXCIsXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB9LFxuICAgIHNpZGViYXI6IHtcbiAgICAgIHdpZHRoOiBzaWRlYmFyQ29sbGFwc2VkID8gNjQgOiAyMjAsXG4gICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxOTVkZWcsICMwZjBmMjMgMCUsICMxYTFhM2UgMTAwJSlcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpXCIsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICBwYWRkaW5nOiBzaWRlYmFyQ29sbGFwc2VkID8gXCIyMHB4IDEycHhcIiA6IFwiMjBweCAyMHB4XCIsXG4gICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmZmZmZmYxMlwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgZ2FwOiAxMCxcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIH0sXG4gICAgbWVudUl0ZW06IChhY3RpdmUpID0+ICh7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBnYXA6IDEyLFxuICAgICAgcGFkZGluZzogc2lkZWJhckNvbGxhcHNlZCA/IFwiMTJweCAyMHB4XCIgOiBcIjExcHggMjBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjM2NmYxMjAsICM2MzY2ZjEwOClcIiA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJvcmRlckxlZnQ6IGFjdGl2ZSA/IFwiM3B4IHNvbGlkICM4MThjZjhcIiA6IFwiM3B4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogYWN0aXZlID8gXCIjYzdkMmZlXCIgOiBcIiM5NGEzYjhcIixcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGZvbnRXZWlnaHQ6IGFjdGl2ZSA/IDYwMCA6IDQwMCxcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMnNcIixcbiAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB9KSxcbiAgICBtYWluOiB7XG4gICAgICBmbGV4OiAxLFxuICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgcGFkZGluZzogXCIyOHB4IDMycHhcIixcbiAgICB9LFxuICAgIHBhZ2VUaXRsZToge1xuICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWFyZ2luQm90dG9tOiA2LFxuICAgICAgY29sb3I6IFwiIzBmMGYyM1wiLFxuICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMmVtXCIsXG4gICAgfSxcbiAgICBwYWdlU3VidGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgIGNvbG9yOiBcIiM2NDc0OGJcIixcbiAgICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICAgIGJvcmRlclJhZGl1czogMTQsXG4gICAgICBwYWRkaW5nOiBcIjIycHggMjRweFwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDNweCAjMDAwMDAwMGEsIDAgMXB4IDJweCAjMDAwMDAwMGZcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2U4ZWFmMFwiLFxuICAgIH0sXG4gICAgY2FyZFRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBjb2xvcjogXCIjMzc0MTUxXCIsXG4gICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgZ2FwOiA4LFxuICAgIH0sXG4gICAgZ3JpZDI6IHsgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLCBnYXA6IDE2IH0sXG4gICAgZ3JpZDM6IHsgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnJcIiwgZ2FwOiAxNiB9LFxuICAgIGdyaWQ0OiB7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCg0LCAxZnIpXCIsIGdhcDogMTQgfSxcbiAgICBidG46IChwcmltYXJ5KSA9PiAoe1xuICAgICAgcGFkZGluZzogXCI5cHggMThweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgYm9yZGVyOiBwcmltYXJ5ID8gXCJub25lXCIgOiBcIjFweCBzb2xpZCAjZDFkNWRiXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBwcmltYXJ5ID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KVwiIDogXCIjZmZmXCIsXG4gICAgICBjb2xvcjogcHJpbWFyeSA/IFwiI2ZmZlwiIDogXCIjMzc0MTUxXCIsXG4gICAgICBmb250U2l6ZTogMTMsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGdhcDogNixcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMnNcIixcbiAgICB9KSxcbiAgICBidG5TbTogKHByaW1hcnkpID0+ICh7XG4gICAgICBwYWRkaW5nOiBcIjVweCAxMnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgICBib3JkZXI6IHByaW1hcnkgPyBcIm5vbmVcIiA6IFwiMXB4IHNvbGlkICNkMWQ1ZGJcIixcbiAgICAgIGJhY2tncm91bmQ6IHByaW1hcnkgPyBcIiM2MzY2ZjFcIiA6IFwiI2ZmZlwiLFxuICAgICAgY29sb3I6IHByaW1hcnkgPyBcIiNmZmZcIiA6IFwiIzM3NDE1MVwiLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBnYXA6IDQsXG4gICAgfSksXG4gICAgaW5wdXQ6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIHBhZGRpbmc6IFwiMTBweCAxNHB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkMWQ1ZGJcIixcbiAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIH0sXG4gICAgdGV4dGFyZWE6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIHBhZGRpbmc6IFwiMTJweCAxNHB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDFkNWRiXCIsXG4gICAgICBmb250U2l6ZTogMTMsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxuICAgICAgcmVzaXplOiBcInZlcnRpY2FsXCIsXG4gICAgICBtaW5IZWlnaHQ6IDEyMCxcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgfSxcbiAgICBiYWRnZTogKGNvbG9yKSA9PiAoe1xuICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiM3B4IDEwcHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogMTAwLFxuICAgICAgZm9udFNpemU6IDExLFxuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgYmFja2dyb3VuZDogY29sb3IgKyBcIjE4XCIsXG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgfSksXG4gICAgdGFnOiB7XG4gICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI0cHggMTBweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgICAgZm9udFNpemU6IDExLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYmFja2dyb3VuZDogXCIjZjFmNWY5XCIsXG4gICAgICBjb2xvcjogXCIjNDc1NTY5XCIsXG4gICAgICBnYXA6IDQsXG4gICAgfSxcbiAgICBwbGF0Zm9ybURvdDogKGNvbG9yKSA9PiAoe1xuICAgICAgd2lkdGg6IDgsXG4gICAgICBoZWlnaHQ6IDgsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgfSksXG4gICAgdGFiQmFyOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGdhcDogMixcbiAgICAgIGJhY2tncm91bmQ6IFwiI2YxZjVmOVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgIHBhZGRpbmc6IDMsXG4gICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIH0sXG4gICAgdGFiOiAoYWN0aXZlKSA9PiAoe1xuICAgICAgcGFkZGluZzogXCI4cHggMTZweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgZm9udFdlaWdodDogYWN0aXZlID8gNjAwIDogNDAwLFxuICAgICAgY29sb3I6IGFjdGl2ZSA/IFwiIzFhMWEyZVwiIDogXCIjNjQ3NDhiXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBhY3RpdmUgPyBcIiNmZmZcIiA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgYm94U2hhZG93OiBhY3RpdmUgPyBcIjAgMXB4IDNweCAjMDAwMDAwMGRcIiA6IFwibm9uZVwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yc1wiLFxuICAgIH0pLFxuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogSE9NRVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgICAvLyDssYTrhJDrs4Qg7ISx6rO8IO2VhO2EsOungVxuICAgIGNvbnN0IGNoYW5uZWxSb3dzID0gT2JqZWN0LmVudHJpZXMoTU9DS19DSEFOTkVMX1NUQVRTKS5maWx0ZXIoKFtwXSkgPT4gaG9tZUNoYW5uZWxQbGF0Zm9ybXMuaW5jbHVkZXMocCkpO1xuXG4gICAgLy8g7L2Y7YWQ7Lig67OEIOyEseqzvDog64+Z7J28IOygnOuqqeycvOuhnCDsp5Hqs4QgKO2UjOueq+2PvCDtlYTthLAg7KCB7JqpKVxuICAgIGNvbnN0IGNvbnRlbnRHcm91cGVkID0gTU9DS19DT05URU5UX1NUQVRTXG4gICAgICAuZmlsdGVyKHIgPT4gaG9tZUNvbnRlbnRQbGF0Zm9ybXMuaW5jbHVkZXMoci5wbGF0Zm9ybSkpXG4gICAgICAuZmlsdGVyKHIgPT4gIWhvbWVDb250ZW50VGl0bGUudHJpbSgpIHx8IHIudGl0bGUuaW5jbHVkZXMoaG9tZUNvbnRlbnRUaXRsZS50cmltKCkpKVxuICAgICAgLnJlZHVjZSgoYWNjLCByKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYWNjLmZpbmQoeCA9PiB4LnRpdGxlID09PSByLnRpdGxlKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgZXhpc3RpbmcucGxhdGZvcm1zLnB1c2goci5wbGF0Zm9ybSk7XG4gICAgICAgICAgZXhpc3Rpbmcudmlld3MgICAgKz0gci52aWV3cztcbiAgICAgICAgICBleGlzdGluZy5saWtlcyAgICArPSByLmxpa2VzO1xuICAgICAgICAgIGV4aXN0aW5nLmNvbW1lbnRzICs9IHIuY29tbWVudHM7XG4gICAgICAgICAgZXhpc3Rpbmcuc2hhcmVzICAgKz0gci5zaGFyZXM7XG4gICAgICAgICAgZXhpc3Rpbmcuc2F2ZXMgICAgKz0gci5zYXZlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2MucHVzaCh7IHRpdGxlOiByLnRpdGxlLCBwbGF0Zm9ybXM6IFtyLnBsYXRmb3JtXSwgdmlld3M6IHIudmlld3MsIGxpa2VzOiByLmxpa2VzLCBjb21tZW50czogci5jb21tZW50cywgc2hhcmVzOiByLnNoYXJlcywgc2F2ZXM6IHIuc2F2ZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG1ldHJpY3NUaCA9IHsgcGFkZGluZzogXCIxMHB4IDE0cHhcIiwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGJhY2tncm91bmQ6IFwiI2Y4ZmFmY1wiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlMmU4ZjBcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9O1xuICAgIGNvbnN0IG1ldHJpY3NUaE5vID0geyAuLi5tZXRyaWNzVGgsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgd2lkdGg6IDQ4IH07XG4gICAgY29uc3QgbWV0cmljc1RkID0geyBwYWRkaW5nOiBcIjEwcHggMTRweFwiLCBmb250U2l6ZTogMTMsIHRleHRBbGlnbjogXCJyaWdodFwiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiB9O1xuICAgIGNvbnN0IG1ldHJpY3NUZE5vID0geyAuLi5tZXRyaWNzVGQsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiIzk0YTNiOFwiLCBmb250V2VpZ2h0OiA1MDAgfTtcblxuICAgIC8vIOyxhOuEkOuzhCDssKjtirgg642w7J207YSwXG4gICAgY29uc3QgY2hhbm5lbENoYXJ0TGFiZWxzID0gY2hhbm5lbFJvd3MubWFwKChba2V5XSkgPT4gUExBVEZPUk1TW2tleV0ubmFtZSk7XG4gICAgY29uc3QgY2hhbm5lbENoYXJ0U2VyaWVzID0gW1xuICAgICAgeyBuYW1lOiBcIuyhsO2ajFwiLCAgICBkYXRhOiBjaGFubmVsUm93cy5tYXAoKFssc10pID0+IHMudmlld3MpIH0sXG4gICAgICB7IG5hbWU6IFwi7KKL7JWE7JqUXCIsICBkYXRhOiBjaGFubmVsUm93cy5tYXAoKFssc10pID0+IHMubGlrZXMpIH0sXG4gICAgICB7IG5hbWU6IFwi64yT6riAXCIsICAgIGRhdGE6IGNoYW5uZWxSb3dzLm1hcCgoWyxzXSkgPT4gcy5jb21tZW50cykgfSxcbiAgICAgIHsgbmFtZTogXCLqs7XsnKDtlZjquLBcIiwgZGF0YTogY2hhbm5lbFJvd3MubWFwKChbLHNdKSA9PiBzLnNoYXJlcykgfSxcbiAgICAgIHsgbmFtZTogXCLsoIDsnqVcIiwgICAgZGF0YTogY2hhbm5lbFJvd3MubWFwKChbLHNdKSA9PiBzLnNhdmVzKSB9LFxuICAgIF07XG5cbiAgICAvLyDsvZjthZDsuKDrs4Qg7LCo7Yq4IOuNsOydtO2EsCAoeOy2leydgCBOby4g67KI7Zi4KVxuICAgIGNvbnN0IGNvbnRlbnRDaGFydExhYmVscyA9IGNvbnRlbnRHcm91cGVkLm1hcCgoXywgaSkgPT4gYE5vLiR7aSArIDF9YCk7XG4gICAgY29uc3QgY29udGVudENoYXJ0U2VyaWVzID0gW1xuICAgICAgeyBuYW1lOiBcIuyhsO2ajFwiLCAgICBkYXRhOiBjb250ZW50R3JvdXBlZC5tYXAociA9PiByLnZpZXdzKSB9LFxuICAgICAgeyBuYW1lOiBcIuyii+yVhOyalFwiLCAgZGF0YTogY29udGVudEdyb3VwZWQubWFwKHIgPT4gci5saWtlcykgfSxcbiAgICAgIHsgbmFtZTogXCLrjJPquIBcIiwgICAgZGF0YTogY29udGVudEdyb3VwZWQubWFwKHIgPT4gci5jb21tZW50cykgfSxcbiAgICAgIHsgbmFtZTogXCLqs7XsnKDtlZjquLBcIiwgZGF0YTogY29udGVudEdyb3VwZWQubWFwKHIgPT4gci5zaGFyZXMpIH0sXG4gICAgICB7IG5hbWU6IFwi7KCA7J6lXCIsICAgIGRhdGE6IGNvbnRlbnRHcm91cGVkLm1hcChyID0+IHIuc2F2ZXMpIH0sXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Lyog7LGE64SQ67OEIOyEseqzvCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZCwgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMWExYTJlXCIsIG1hcmdpbkJvdHRvbTogMTYgfX0+8J+TiiDssYTrhJDrs4Qg7ISx6rO8PC9kaXY+XG5cbiAgICAgICAgICB7Lyog6rKA7IOJIOyhsOqxtCAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2Y4ZmFmY1wiLCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiBcIjE2cHggMjBweFwiLCBtYXJnaW5Cb3R0b206IDE2LCBib3JkZXI6IFwiMXB4IHNvbGlkICNlMmU4ZjBcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAxMiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzM3NDE1MVwiLCBtaW5XaWR0aDogNTYgfX0+7ZSM656r7Y+8PC9zcGFuPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoUExBVEZPUk1TKS5tYXAoKFtrZXksIHBdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb24gPSBob21lQ2hhbm5lbFBsYXRmb3Jtcy5pbmNsdWRlcyhrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17a2V5fSBvbkNsaWNrPXsoKSA9PiBzZXRIb21lQ2hhbm5lbFBsYXRmb3JtcyhwcmV2ID0+IG9uID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSBrZXkpIDogWy4uLnByZXYsIGtleV0pfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA1LCBwYWRkaW5nOiBcIjVweCAxMnB4XCIsIGJvcmRlclJhZGl1czogMTAwLCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiBcInBvaW50ZXJcIiwgYm9yZGVyOiBgMXB4IHNvbGlkICR7b24gPyBwLmNvbG9yIDogXCIjZDFkNWRiXCJ9YCwgYmFja2dyb3VuZDogb24gPyBwLmNvbG9yIDogXCIjZmZmXCIsIGNvbG9yOiBvbiA/IFwiI2ZmZlwiIDogXCIjMzc0MTUxXCIsIHRyYW5zaXRpb246IFwiYWxsIDAuMTVzXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwLmljb259IHtwLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzM3NDE1MVwiLCBtaW5XaWR0aDogNTYgfX0+7KGw7ZqMIOq4sOqwhDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2hvbWVDaGFubmVsU3RhcnREYXRlfSBvbkNoYW5nZT17ZSA9PiBzZXRIb21lQ2hhbm5lbFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDFkNWRiXCIsIGJvcmRlclJhZGl1czogNiwgcGFkZGluZzogXCI1cHggMTBweFwiLCBmb250U2l6ZTogMTMgfX0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjNjQ3NDhiXCIgfX0+fjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2hvbWVDaGFubmVsRW5kRGF0ZX0gb25DaGFuZ2U9e2UgPT4gc2V0SG9tZUNoYW5uZWxFbmREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNkMWQ1ZGJcIiwgYm9yZGVyUmFkaXVzOiA2LCBwYWRkaW5nOiBcIjVweCAxMHB4XCIsIGZvbnRTaXplOiAxMyB9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA4IH19PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0SG9tZUNoYW5uZWxQbGF0Zm9ybXMoW1widHdpdHRlclwiLFwieW91dHViZVwiLFwiZmFjZWJvb2tcIixcImluc3RhZ3JhbVwiLFwidGhyZWFkc1wiXSk7IHNldEhvbWVDaGFubmVsU3RhcnREYXRlKFwiMjAyNi0wMy0xNVwiKTsgc2V0SG9tZUNoYW5uZWxFbmREYXRlKFwiMjAyNi0wMy0yMlwiKTsgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNnB4IDE2cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDFkNWRiXCIsIGJvcmRlclJhZGl1czogNiwgYmFja2dyb3VuZDogXCIjZmZmXCIsIGZvbnRTaXplOiAxMywgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgID7stIjquLDtmZQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IHBhZGRpbmc6IFwiNnB4IDE2cHhcIiwgYm9yZGVyOiBcIm5vbmVcIiwgYm9yZGVyUmFkaXVzOiA2LCBiYWNrZ3JvdW5kOiBcIiM2MzY2ZjFcIiwgY29sb3I6IFwiI2ZmZlwiLCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT7qsoDsg4k8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiDssYTrhJDrs4Qg7YWM7J2067iUICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIgfX0+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e21ldHJpY3NUaE5vfT5ObzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgLi4ubWV0cmljc1RoLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PuyxhOuEkDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e21ldHJpY3NUaH0+7KGw7ZqMPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bWV0cmljc1RofT7soovslYTsmpQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXttZXRyaWNzVGh9PuuMk+q4gDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e21ldHJpY3NUaH0+6rO17Jyg7ZWY6riwPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bWV0cmljc1RofT7soIDsnqU8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7Y2hhbm5lbFJvd3MubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXs3fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IDMyLCBjb2xvcjogXCIjOTRhM2I4XCIsIGZvbnRTaXplOiAxMyB9fT7sobDtmowg6rKw6rO86rCAIOyXhuyKteuLiOuLpDwvdGQ+PC90cj5cbiAgICAgICAgICAgICAgICApIDogY2hhbm5lbFJvd3MubWFwKChba2V5LCBzdGF0XSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXttZXRyaWNzVGROb30+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTRweFwiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBQTEFURk9STVNba2V5XS5jb2xvciB9fT57UExBVEZPUk1TW2tleV0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDUwMCB9fT57UExBVEZPUk1TW2tleV0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e21ldHJpY3NUZH0+e3N0YXQudmlld3MudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e21ldHJpY3NUZH0+e3N0YXQubGlrZXMudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e21ldHJpY3NUZH0+e3N0YXQuY29tbWVudHMudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e21ldHJpY3NUZH0+e3N0YXQuc2hhcmVzLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXttZXRyaWNzVGR9PntzdGF0LnNhdmVzID4gMCA/IHN0YXQuc2F2ZXMudG9Mb2NhbGVTdHJpbmcoKSA6IFwiLVwifTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiDssYTrhJDrs4Qg7ISgIOq3uOuemO2UhCAqL31cbiAgICAgICAgICB7Y2hhbm5lbFJvd3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8TWV0cmljc0xpbmVDaGFydCBsYWJlbHM9e2NoYW5uZWxDaGFydExhYmVsc30gc2VyaWVzPXtjaGFubmVsQ2hhcnRTZXJpZXN9IGhlaWdodD17MjAwfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDsvZjthZDsuKDrs4Qg7ISx6rO8ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzFhMWEyZVwiLCBtYXJnaW5Cb3R0b206IDE2IH19PvCfk4sg7L2Y7YWQ7Lig67OEIOyEseqzvDwvZGl2PlxuXG4gICAgICAgICAgey8qIOqygOyDiSDsobDqsbQgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmOGZhZmNcIiwgYm9yZGVyUmFkaXVzOiAxMCwgcGFkZGluZzogXCIxNnB4IDIwcHhcIiwgbWFyZ2luQm90dG9tOiAxNiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTJlOGYwXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbWluV2lkdGg6IDU2IH19Pu2UjOueq+2PvDwvc3Bhbj5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKFBMQVRGT1JNUykubWFwKChba2V5LCBwXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uID0gaG9tZUNvbnRlbnRQbGF0Zm9ybXMuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2tleX0gb25DbGljaz17KCkgPT4gc2V0SG9tZUNvbnRlbnRQbGF0Zm9ybXMocHJldiA9PiBvbiA/IHByZXYuZmlsdGVyKHggPT4geCAhPT0ga2V5KSA6IFsuLi5wcmV2LCBrZXldKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNSwgcGFkZGluZzogXCI1cHggMTJweFwiLCBib3JkZXJSYWRpdXM6IDEwMCwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJvcmRlcjogYDFweCBzb2xpZCAke29uID8gcC5jb2xvciA6IFwiI2QxZDVkYlwifWAsIGJhY2tncm91bmQ6IG9uID8gcC5jb2xvciA6IFwiI2ZmZlwiLCBjb2xvcjogb24gPyBcIiNmZmZcIiA6IFwiIzM3NDE1MVwiLCB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiIH19PlxuICAgICAgICAgICAgICAgICAgICB7cC5pY29ufSB7cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbWluV2lkdGg6IDU2IH19PuyhsO2ajCDquLDqsIQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtob21lQ29udGVudFN0YXJ0RGF0ZX0gb25DaGFuZ2U9e2UgPT4gc2V0SG9tZUNvbnRlbnRTdGFydERhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2QxZDVkYlwiLCBib3JkZXJSYWRpdXM6IDYsIHBhZGRpbmc6IFwiNXB4IDEwcHhcIiwgZm9udFNpemU6IDEzIH19IC8+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzY0NzQ4YlwiIH19Pn48L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtob21lQ29udGVudEVuZERhdGV9IG9uQ2hhbmdlPXtlID0+IHNldEhvbWVDb250ZW50RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDFkNWRiXCIsIGJvcmRlclJhZGl1czogNiwgcGFkZGluZzogXCI1cHggMTBweFwiLCBmb250U2l6ZTogMTMgfX0gLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7L2Y7YWQ7LigIOygnOuqqSDqsoDsg4lcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtob21lQ29udGVudFRpdGxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvbWVDb250ZW50VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2QxZDVkYlwiLCBib3JkZXJSYWRpdXM6IDYsIHBhZGRpbmc6IFwiNXB4IDEwcHhcIiwgZm9udFNpemU6IDEzLCB3aWR0aDogMTgwIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDggfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRIb21lQ29udGVudFBsYXRmb3JtcyhbXCJ0d2l0dGVyXCIsXCJ5b3V0dWJlXCIsXCJmYWNlYm9va1wiLFwiaW5zdGFncmFtXCIsXCJ0aHJlYWRzXCJdKTsgc2V0SG9tZUNvbnRlbnRTdGFydERhdGUoXCIyMDI2LTAzLTE1XCIpOyBzZXRIb21lQ29udGVudEVuZERhdGUoXCIyMDI2LTAzLTIyXCIpOyBzZXRIb21lQ29udGVudFRpdGxlKFwiXCIpOyB9fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI2cHggMTZweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNkMWQ1ZGJcIiwgYm9yZGVyUmFkaXVzOiA2LCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgZm9udFNpemU6IDEzLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgPuy0iOq4sO2ZlDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcGFkZGluZzogXCI2cHggMTZweFwiLCBib3JkZXI6IFwibm9uZVwiLCBib3JkZXJSYWRpdXM6IDYsIGJhY2tncm91bmQ6IFwiIzYzNjZmMVwiLCBjb2xvcjogXCIjZmZmXCIsIGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PuqygOyDiTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIOy9mO2FkOy4oOuzhCDthYzsnbTruJQgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1g6IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiB9fT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bWV0cmljc1RoTm99Pk5vPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyAuLi5tZXRyaWNzVGgsIHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+7L2Y7YWQ7LigIOygnOuqqTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgLi4ubWV0cmljc1RoLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PuyxhOuEkDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e21ldHJpY3NUaH0+7KGw7ZqMPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bWV0cmljc1RofT7soovslYTsmpQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXttZXRyaWNzVGh9PuuMk+q4gDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e21ldHJpY3NUaH0+6rO17Jyg7ZWY6riwPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bWV0cmljc1RofT7soIDsnqU8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7Y29udGVudEdyb3VwZWQubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXs4fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IDMyLCBjb2xvcjogXCIjOTRhM2I4XCIsIGZvbnRTaXplOiAxMyB9fT7sobDtmowg6rKw6rO86rCAIOyXhuyKteuLiOuLpDwvdGQ+PC90cj5cbiAgICAgICAgICAgICAgICApIDogY29udGVudEdyb3VwZWQubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJhY2tncm91bmQ6IGkgJSAyID09PSAwID8gXCIjZmZmXCIgOiBcIiNmYWZhZmFcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXttZXRyaWNzVGROb30+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTRweFwiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiwgZm9udFNpemU6IDEzIH19Pntyb3cudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxNHB4XCIsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2YxZjVmOVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNCwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5wbGF0Zm9ybXMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3B9IHRpdGxlPXtQTEFURk9STVNbcF0ubmFtZX0gc3R5bGU9e3sgY29sb3I6IFBMQVRGT1JNU1twXS5jb2xvciwgZm9udFNpemU6IDE1IH19PntQTEFURk9STVNbcF0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXttZXRyaWNzVGR9Pntyb3cudmlld3MudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e21ldHJpY3NUZH0+e3Jvdy5saWtlcy50b0xvY2FsZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bWV0cmljc1RkfT57cm93LmNvbW1lbnRzLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXttZXRyaWNzVGR9Pntyb3cuc2hhcmVzLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXttZXRyaWNzVGR9Pntyb3cuc2F2ZXMgPiAwID8gcm93LnNhdmVzLnRvTG9jYWxlU3RyaW5nKCkgOiBcIi1cIn08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyog7L2Y7YWQ7Lig67OEIOyEoCDqt7jrnpjtlIQgKHjstpU6IE5vLiDrsojtmLgpICovfVxuICAgICAgICAgIHtjb250ZW50R3JvdXBlZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxNZXRyaWNzTGluZUNoYXJ0IGxhYmVscz17Y29udGVudENoYXJ0TGFiZWxzfSBzZXJpZXM9e2NvbnRlbnRDaGFydFNlcmllc30gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogUkVTRUFSQ0hcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHJlbmRlclJlc2VhcmNoID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT7rpqzshJzsuZggJiDquLDtmo08L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYWdlU3VidGl0bGV9PuqyveyfgeyCrCDrsqTsuZjrp4jtgrksIO2KuOugjOuTnCDtg5Dsg4ksIOugiO2NvOufsOyKpCDsiJjsp5E8L2Rpdj5cblxuICAgICAgey8qIEJlbmNobWFyayBUb29sICovfVxuICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZCwgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+UjSDqsr3sn4Hsgqwg67Kk7LmY66eI7YK5IOu2hOyEnTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0LCBmbGV4OiAxIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu2hOyEne2VoCBTTlMg6rOE7KCVIFVSTOydhCDsnoXroKXtlZjshLjsmpQgKOyYiDogaW5zdGFncmFtLmNvbS9icmFuZG5hbWUpXCJcbiAgICAgICAgICAgIHZhbHVlPXtiZW5jaG1hcmtVcmx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJlbmNobWFya1VybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnRuKHRydWUpfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmVuY2htYXJrUmVzdWx0KHRydWUpfT5cbiAgICAgICAgICAgIDxJY29ucy5TZWFyY2ggLz4g67aE7ISd7ZWY6riwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtzaG93QmVuY2htYXJrUmVzdWx0ICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2Y4ZmFmY1wiLCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiAyMCwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZThlYWYwXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDE0LCBjb2xvcjogXCIjNjM2NmYxXCIgfX0+8J+TiyDrtoTshJ0g6rKw6rO8IOKAlCBAY29tcGV0aXRvcl9icmFuZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmdyaWQzfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiLCBtYXJnaW5Cb3R0b206IDQgfX0+7L2Y7YWQ7LigIOycoO2YlSDruYTspJE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT7qtZDsnKHtmJUgNDUlIMK3IO2UhOuhnOuqqOyFmCAzMCUgwrcgVUdDIDI1JTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiLCBtYXJnaW5Cb3R0b206IDQgfX0+7KO866ClIO2PrOuntzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzIH19Puy6kOufrOyFgCAo7J246rKM7J207KeA66i87Yq4IDIuM+uwsCDihpEpPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjOTRhM2I4XCIsIG1hcmdpbkJvdHRvbTogNCB9fT7qsozsi5wg7Yyo7YS0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+7KO8IDXtmowgwrcg7KO866GcIO2ZlC/rqqkv7YagIOyYpO2bhCA37IucPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTQsIHBhZGRpbmc6IFwiMTJweCAxNHB4XCIsIGJhY2tncm91bmQ6IFwiI2VkZTlmZVwiLCBib3JkZXJSYWRpdXM6IDgsIGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzViMjFiNlwiLCBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgIPCfkqEgPHN0cm9uZz5BSSDsnbjsgqzsnbTtirg6PC9zdHJvbmc+IOydtCDqs4TsoJXsnYAg6rWQ7Jyh7ZiVIOy6kOufrOyFgCDsvZjthZDsuKDsl5DshJwg6rCA7J6lIOuGkuydgCDsnbjqsozsnbTsp4DrqLztirjrpbwg67O07J6F64uI64ukLiDtlbTsi5ztg5zqt7jripQg64uI7LmYIO2DnOq3uCjtjJTroZzsm4wgMeunjH4xMOunjCDqt5zrqqgp66W8IOyjvOuhnCDtmZzsmqntlZjsl6wg64+E64us66Wg7J2EIOuGkuydtOqzoCDsnojsirXri4jri6QuIO2GpOyVpOunpOuEiOuKlCDsuZzqt7ztlZjqs6Ag7KCE66y47KCB7J24IOq3oO2YleydhCDsnKDsp4Dtlanri4jri6QuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZ3JpZDJ9PlxuICAgICAgICB7LyogVHJlbmRzICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+UpSDtirjroIzrk5wg7YKk7JuM65OcPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiA4IH19PlxuICAgICAgICAgICAge01PQ0tfVFJFTkRTLm1hcCgodCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgcGFkZGluZzogXCI4cHggMTJweFwiLCBib3JkZXJSYWRpdXM6IDgsIGJhY2tncm91bmQ6IFwiI2Y4ZmFmY1wiIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNTAwIH19Pnt0LmtleXdvcmR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzY0NzQ4YlwiIH19Pnt0LnZvbHVtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmJhZGdlKHQuc3RhdHVzID09PSBcIuq4ieyDgeyKuVwiID8gXCIjZWY0NDQ0XCIgOiB0LnN0YXR1cyA9PT0gXCLsg4HsirlcIiA/IFwiIzEwYjk4MVwiIDogdC5zdGF0dXMgPT09IFwi7ZWY6529XCIgPyBcIiM5NGEzYjhcIiA6IFwiIzY0NzQ4YlwiKX0+e3Quc3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENvbXBldGl0b3IgVGFibGUgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn5OKIOqyveyfgeyCrCDruYTqtZA8L2Rpdj5cbiAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBmb250U2l6ZTogMTMgfX0+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlOGVhZjBcIiB9fT5cbiAgICAgICAgICAgICAgICB7W1wi6rOE7KCVXCIsIFwi7YyU66Gc7JuMXCIsIFwi6rKM7Iuc67mI64+EXCIsIFwi7KO866Cl7Y+s66e3XCIsIFwi7J246rKM7J207KeA66i87Yq4XCJdLm1hcChoID0+IChcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHBhZGRpbmc6IFwiOHB4IDZweFwiLCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzk0YTNiOFwiIH19PntofTwvdGg+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7TU9DS19DT01QRVRJVE9SUy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNnB4XCIsIGZvbnRXZWlnaHQ6IDUwMCB9fT57Yy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDZweFwiIH19PntjLmZvbGxvd2Vyc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA2cHhcIiB9fT57Yy5wb3N0RnJlcX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA2cHhcIiB9fT48c3BhbiBzdHlsZT17c3R5bGVzLnRhZ30+e2MudG9wRm9ybWF0fTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA2cHhcIiwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjM2NmYxXCIgfX0+e2MuZW5nYWdlUmF0ZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogQ0FMRU5EQVJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHJlbmRlckNhbGVuZGFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gMzE7XG4gICAgY29uc3QgZmlyc3REYXkgPSA2OyAvLyBNYXJjaCAyMDI2IHN0YXJ0cyBvbiBTdW5kYXkgKDAtaW5kZXhlZDogMD1TdW4pXG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3REYXk7IGkrKykgZGF5cy5wdXNoKG51bGwpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIGRheXMucHVzaChpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT7svZjthZDsuKAg7LqY66aw642UPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ0bih0cnVlKX0+PEljb25zLlBsdXMgLz4g7J287KCVIOy2lOqwgDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBhZ2VTdWJ0aXRsZX0+e2NhbGVuZGFyTW9udGh9IMK3IOy9mO2FkOy4oCDqsozsi5wg7J287KCV7J2EIOq0gOumrO2VmOyEuOyalDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICB7LyogQ2FsZW5kYXIgaGVhZGVyICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDcsIDFmcilcIiwgZ2FwOiAwLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICB7W1wi7J28XCIsIFwi7JuUXCIsIFwi7ZmUXCIsIFwi7IiYXCIsIFwi66qpXCIsIFwi6riIXCIsIFwi7YagXCJdLm1hcChkID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2R9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM5NGEzYjhcIiwgcGFkZGluZzogXCI4cHggMFwiIH19PntkfTwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIENhbGVuZGFyIGdyaWQgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNywgMWZyKVwiLCBnYXA6IDQgfX0+XG4gICAgICAgICAgICB7ZGF5cy5tYXAoKGRheSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBkYXkgPyBNT0NLX0NBTEVOREFSLmZpbHRlcihlID0+IGUuZGF5ID09PSBkYXkpIDogW107XG4gICAgICAgICAgICAgIGNvbnN0IGlzVG9kYXkgPSBkYXkgPT09IDk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDkwLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc1RvZGF5ID8gXCIjZWRlOWZlXCIgOiBkYXkgPyBcIiNmYWZiZmRcIiA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogaXNUb2RheSA/IFwiMnB4IHNvbGlkICM4YjVjZjZcIiA6IGRheSA/IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAge2RheSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IGlzVG9kYXkgPyA3MDAgOiA0MDAsIGNvbG9yOiBpc1RvZGF5ID8gXCIjNjM2NmYxXCIgOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA0IH19PntkYXl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjNweCA2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFBMQVRGT1JNU1tldi5wbGF0Zm9ybV0uYmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHtQTEFURk9STVNbZXYucGxhdGZvcm1dLmNvbG9yfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtldi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNlYXNvbiBFdmVudHMgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpblRvcDogMTYgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+OryDsi5zspowg7J2067Kk7Yq4IOyVjOumvDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTAsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgZGF0ZTogXCIzLzE0XCIsIGV2ZW50OiBcIu2ZlOydtO2KuOuNsOydtFwiLCBjb2xvcjogXCIjZWM0ODk5XCIgfSxcbiAgICAgICAgICAgICAgeyBkYXRlOiBcIjQvNVwiLCBldmVudDogXCLsi53rqqnsnbxcIiwgY29sb3I6IFwiIzIyYzU1ZVwiIH0sXG4gICAgICAgICAgICAgIHsgZGF0ZTogXCI1LzVcIiwgZXZlbnQ6IFwi7Ja066aw7J2064KgXCIsIGNvbG9yOiBcIiNmNTllMGJcIiB9LFxuICAgICAgICAgICAgICB7IGRhdGU6IFwiNS84XCIsIGV2ZW50OiBcIuyWtOuyhOydtOuCoFwiLCBjb2xvcjogXCIjZWY0NDQ0XCIgfSxcbiAgICAgICAgICAgIF0ubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTZweFwiLCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kOiBzLmNvbG9yICsgXCIxMFwiLCBib3JkZXI6IGAxcHggc29saWQgJHtzLmNvbG9yfTMwYCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IHMuY29sb3IgfX0+e3MuZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzIH19PntzLmV2ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM5NGEzYjhcIiB9fT7svZjthZDsuKAg7KSA67mEIOq2jOyepTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogQ09OVEVOVFMgKOy9mO2FkOy4oCDqtIDrpqwg4oCUIO2Gte2VqSlcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHJlbmRlckNvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IFNUQVRVU19MQUJFTFMgPSB7IGRyYWZ0OiBcIuy0iOyViFwiLCByZXZpZXc6IFwi6rKA7Yag7KSRXCIsIHNjaGVkdWxlZDogXCLsmIjslb1cIiwgcHVibGlzaGVkOiBcIuuwnO2WieyZhOujjFwiIH07XG4gICAgY29uc3QgU1RBVFVTX0NPTE9SUyA9IHsgZHJhZnQ6IFwiIzk0YTNiOFwiLCByZXZpZXc6IFwiI2Y1OWUwYlwiLCBzY2hlZHVsZWQ6IFwiIzYzNjZmMVwiLCBwdWJsaXNoZWQ6IFwiIzEwYjk4MVwiIH07XG5cbiAgICAvLyBBSSDrj4Tqtawg7J2465287J24IO2OuOynkSDtlbjrk6Trn6xcbiAgICBjb25zdCBzYXZlQWlUb29sID0gKCkgPT4ge1xuICAgICAgaWYgKCFhaVRvb2xFZGl0RGF0YS5sYWJlbC50cmltKCkgfHwgIWFpVG9vbEVkaXREYXRhLnVybC50cmltKCkpIHJldHVybjtcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhaVRvb2xFZGl0TW9kZSA9PT0gXCJhZGRcIlxuICAgICAgICA/IFsuLi5haVRvb2xzLCBhaVRvb2xFZGl0RGF0YV1cbiAgICAgICAgOiBhaVRvb2xzLm1hcCgodCwgaSkgPT4gaSA9PT0gYWlUb29sRWRpdE1vZGUgPyBhaVRvb2xFZGl0RGF0YSA6IHQpO1xuICAgICAgc2F2ZUFpVG9vbHNUb0RiKHVwZGF0ZWQpO1xuICAgICAgc2V0QWlUb29sRWRpdE1vZGUobnVsbCk7XG4gICAgICBzZXRBaVRvb2xFZGl0RGF0YSh7IGljb246IFwiXCIsIGxhYmVsOiBcIlwiLCB1cmw6IFwiXCIsIGRlc2M6IFwiXCIgfSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxldGVBaVRvb2wgPSAoaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhaVRvb2xzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgICAgc2F2ZUFpVG9vbHNUb0RiKHVwZGF0ZWQpO1xuICAgIH07XG5cbiAgICAvLyDtjrjsp5Eg7ZmU66m0IO2VmOuLqCDtlIzrnqvtj7wg7Lm065OcIOuTnOuemOq3uCDtlbjrk6Trn6xcbiAgICBjb25zdCBoYW5kbGVEcmFmdERyYWdTdGFydCA9IChpZCkgPT4geyBkcmFmdFBsYXRmb3JtRHJhZ1JlZi5jdXJyZW50ID0gaWQ7IH07XG4gICAgY29uc3QgaGFuZGxlRHJhZnREcmFnT3ZlciA9IChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcbiAgICBjb25zdCBoYW5kbGVEcmFmdERyb3AgPSAodGFyZ2V0SWQpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdnZWRJZCA9IGRyYWZ0UGxhdGZvcm1EcmFnUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIWRyYWdnZWRJZCB8fCBkcmFnZ2VkSWQgPT09IHRhcmdldElkKSByZXR1cm47XG4gICAgICBzZXREcmFmdFBsYXRmb3JtT3JkZXIocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4ucHJldl07XG4gICAgICAgIGNvbnN0IGZyb20gPSBuZXh0LmluZGV4T2YoZHJhZ2dlZElkKTtcbiAgICAgICAgY29uc3QgdG8gPSBuZXh0LmluZGV4T2YodGFyZ2V0SWQpO1xuICAgICAgICBuZXh0LnNwbGljZShmcm9tLCAxKTtcbiAgICAgICAgbmV4dC5zcGxpY2UodG8sIDAsIGRyYWdnZWRJZCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJhZnRQbGF0Zm9ybU9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KG5leHQpKTtcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICB9KTtcbiAgICAgIGRyYWZ0UGxhdGZvcm1EcmFnUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyDilIDilIAg7Y647KeRIOu3sCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICBpZiAoY29udGVudHNWaWV3ID09PSBcImVkaXRcIiAmJiBlZGl0aW5nQ29udGVudCkge1xuICAgICAgY29uc3QgY29udGVudCA9IGVkaXRpbmdDb250ZW50O1xuICAgICAgY29uc3QgdXBkYXRlQ29udGVudCA9IChmaWVsZCwgdmFsdWUpID0+IHNldEVkaXRpbmdDb250ZW50KHByZXYgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xuICAgICAgY29uc3QgdXBkYXRlRHJhZnQgPSAocGxhdGZvcm0sIHZhbHVlKSA9PiBzZXRFZGl0aW5nQ29udGVudChwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHBsYXRmb3JtRHJhZnRzOiB7IC4uLnByZXYucGxhdGZvcm1EcmFmdHMsIFtwbGF0Zm9ybV06IHZhbHVlIH0sXG4gICAgICB9KSk7XG4gICAgICBjb25zdCB0b2dnbGVQbGF0Zm9ybSA9IChwKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBjb250ZW50LnBsYXRmb3Jtcy5pbmNsdWRlcyhwKVxuICAgICAgICAgID8gY29udGVudC5wbGF0Zm9ybXMuZmlsdGVyKHggPT4geCAhPT0gcClcbiAgICAgICAgICA6IFsuLi5jb250ZW50LnBsYXRmb3JtcywgcF07XG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoXCJwbGF0Zm9ybXNcIiwgbmV4dCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgaGFuZGxlU2F2ZUNvbnRlbnQgPSBhc3luYyAoc3RhdHVzT3ZlcnJpZGUpID0+IHtcbiAgICAgICAgY29uc3QgdG9TYXZlID0geyAuLi5jb250ZW50LCAuLi4oc3RhdHVzT3ZlcnJpZGUgPyB7IHN0YXR1czogc3RhdHVzT3ZlcnJpZGUgfSA6IHt9KSB9O1xuXG4gICAgICAgIC8vIOymieyLnCDrsJztlok6IOyytO2BrOuQnCDtlIzrnqvtj7zsl5AgRWRnZSBGdW5jdGlvbiDtmLjstpxcbiAgICAgICAgaWYgKHN0YXR1c092ZXJyaWRlID09PSBcInB1Ymxpc2hlZFwiKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHt9O1xuXG4gICAgICAgICAgLy8gWCDrsJztlolcbiAgICAgICAgICBpZiAodG9TYXZlLnBsYXRmb3Jtcz8uaW5jbHVkZXMoXCJ0d2l0dGVyXCIpICYmIHRvU2F2ZS5wbGF0Zm9ybURyYWZ0cz8udHdpdHRlcj8udHJpbSgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mdW5jdGlvbnMuaW52b2tlKFwicG9zdC14XCIsIHtcbiAgICAgICAgICAgICAgICBib2R5OiB7IHRleHQ6IHRvU2F2ZS5wbGF0Zm9ybURyYWZ0cy50d2l0dGVyIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgaWYgKGRhdGE/LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnR3aXR0ZXIgPSBg67Cc7ZaJ7JmE66OMICR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJrby1LUlwiKX0gfCAke2RhdGEudXJsfWA7XG4gICAgICAgICAgICAgICAgYWxlcnQoYOKchSBYIOuwnO2WiSDsmYTro4whXFxuJHtkYXRhLnVybH1gKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnR3aXR0ZXIgPSBg7Jik66WYOiAke2RhdGE/LmVycm9yfWA7XG4gICAgICAgICAgICAgICAgYWxlcnQoYOKdjCBYIOuwnO2WiSDsi6TtjKg6ICR7ZGF0YT8uZXJyb3J9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0cy50d2l0dGVyID0gYOyYpOulmDogJHtlLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgICAgYWxlcnQoYOKdjCBYIOuwnO2WiSDsmKTrpZg6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodG9TYXZlLnBsYXRmb3Jtcz8uaW5jbHVkZXMoXCJ0d2l0dGVyXCIpKSB7XG4gICAgICAgICAgICBhbGVydChcIlgg6riA7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9TYXZlLnB1Ymxpc2hSZXN1bHRzID0geyAuLi50b1NhdmUucHVibGlzaFJlc3VsdHMsIC4uLnJlc3VsdHMgfTtcblxuICAgICAgICAgIC8vIOy1nOy0iCDrsJztlonsnbwgLyDsiJjsoJXsnbwg7J6Q64+ZIOq4sOuhnVxuICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKFwiVFwiLCBcIiBcIikuc2xpY2UoMCwgMTYpO1xuICAgICAgICAgIGlmICghdG9TYXZlLmZpcnN0UHVibGlzaGVkQXQpIHtcbiAgICAgICAgICAgIHRvU2F2ZS5maXJzdFB1Ymxpc2hlZEF0ID0gbm93O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b1NhdmUudXBkYXRlZEF0ID0gbm93O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9TYXZlLmlkKSB7XG4gICAgICAgICAgLy8g7Iug6recIOyggOyepVxuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJjb250ZW50c1wiKS5pbnNlcnQoY29udGVudFRvRGIodG9TYXZlKSkuc2VsZWN0KCkuc2luZ2xlKCk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7IGFsZXJ0KFwi7KCA7J6lIOyYpOulmDogXCIgKyBlcnJvci5tZXNzYWdlKTsgcmV0dXJuOyB9XG4gICAgICAgICAgc2V0Q29udGVudHNMaXN0KHByZXYgPT4gW2RiVG9Db250ZW50KGRhdGEpLCAuLi5wcmV2XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g7IiY7KCVIOyggOyepVxuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJjb250ZW50c1wiKS51cGRhdGUoY29udGVudFRvRGIodG9TYXZlKSkuZXEoXCJpZFwiLCB0b1NhdmUuaWQpO1xuICAgICAgICAgIGlmIChlcnJvcikgeyBhbGVydChcIuyggOyepSDsmKTrpZg6IFwiICsgZXJyb3IubWVzc2FnZSk7IHJldHVybjsgfVxuICAgICAgICAgIHNldENvbnRlbnRzTGlzdChwcmV2ID0+IHByZXYubWFwKGMgPT4gYy5pZCA9PT0gdG9TYXZlLmlkID8gdG9TYXZlIDogYykpO1xuICAgICAgICB9XG4gICAgICAgIHNldENvbnRlbnRzVmlldyhcImxpc3RcIik7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiDtjrjsp5Eg7Zek642UICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTIsIG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIHBhZGRpbmc6IFwiOHB4IDE2cHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDb250ZW50c1ZpZXcoXCJsaXN0XCIpfT5cbiAgICAgICAgICAgICAg4oaQIOuqqeuhnVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT57Y29udGVudC5pZCA/IFwi7L2Y7YWQ7LigIO2OuOynkVwiIDogXCLsg4gg7L2Y7YWQ7LigXCJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyog7KCc66qpICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0LCBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgYm9yZGVyOiBcIm5vbmVcIiwgcGFkZGluZzogXCI0cHggMFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZWY7IS47JqUICjsmIg6IOyLoOygnO2SiCDrn7Dsua0g6rO17KeAKVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50LnRpdGxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVDb250ZW50KFwidGl0bGVcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiDilIDilIDilIAg66eI7Iqk7YSwIOq4gCArIEFJIOuPhOq1rCDrsJTroZzqsIDquLAg4pSA4pSA4pSAICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7inI3vuI8g66eI7Iqk7YSwIOq4gCAmIEFJIOyekeyEsSDrj4Tqtaw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsIGdhcDogMTYsIGFsaWduSXRlbXM6IFwic3RhcnRcIiB9fT5cbiAgICAgICAgICAgICAgey8qIOyZvOyqvTog66eI7Iqk7YSwIOq4gCAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzk0YTNiOFwiLCBtYXJnaW5Cb3R0b206IDggfX0+7JuQ67O4IOuCtOyaqeydhCDsnpDsnKDroa3qsowg7J6R7ISx7ZWY7IS47JqULiDsnbTqsbgg6riw67CY7Jy866GcIOqwgSBTTlPsmqkg7LSI7JWI7J2EIOyekOuPmSDsg53shLHtlaAg7IiYIOyeiOyKteuLiOuLpC48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy50ZXh0YXJlYSwgbWluSGVpZ2h0OiAxODAgfX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67iU66Gc6re4IO2PrOyKpO2KuCwg67O064+E7J6Q66OMLCDsoJztkogg7ISk66qFIOuTsSDslrTrlqQg7ZiV7YOc65OgIOq0nOywruyKteuLiOuLpC5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnQubWFzdGVyVGV4dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUNvbnRlbnQoXCJtYXN0ZXJUZXh0XCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIOyYpOuluOyqvTogQUkg7J6R7ISxIOuPhOq1rCDrsJTroZzqsIDquLAgKi99XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjMzc0MTUxXCIgfX0+8J+UlyBBSSDsnpHshLEg64+E6rWsIOuwlOuhnOqwgOq4sDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnRuU20oYWlUb29sRWRpdE1vZGUgPT09IFwiYWRkXCIpLCBmb250U2l6ZTogMTEgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChhaVRvb2xFZGl0TW9kZSA9PT0gXCJhZGRcIikgeyBzZXRBaVRvb2xFZGl0TW9kZShudWxsKTsgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBzZXRBaVRvb2xFZGl0TW9kZShcImFkZFwiKTsgc2V0QWlUb29sRWRpdERhdGEoeyBpY29uOiBcIvCflKdcIiwgbGFiZWw6IFwiXCIsIHVybDogXCJcIiwgZGVzYzogXCJcIiB9KTsgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWlUb29sRWRpdE1vZGUgPT09IFwiYWRkXCIgPyBcIuy3qOyGjFwiIDogXCIrIOy2lOqwgFwifVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM5NGEzYjhcIiwgbWFyZ2luQm90dG9tOiAxMCB9fT7smbjrtoAgQUkg64+E6rWs7JeQ7IScIOq4gMK37J2066+47KeAwrfsmIHsg4HsnYQg66eM65Ok6rOgIOyVhOuemCBTTlMg7Lm065Oc7JeQIOu2meyXrOuEo+ycvOyEuOyalC48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIiwgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IGFpVG9vbEVkaXRNb2RlICE9PSBudWxsID8gMTQgOiAwIH19PlxuICAgICAgICAgICAgICAgICAge2FpVG9vbHMubWFwKCh0b29sLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0b29sLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIHBhZGRpbmdSaWdodDogNDAsIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYWlUb29sRWRpdE1vZGUgPT09IGkgPyBcIiNlZGU5ZmVcIiA6IFwiI2Y4ZmFmY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHthaVRvb2xFZGl0TW9kZSA9PT0gaSA/IFwiI2M3ZDJmZVwiIDogXCIjZThlYWYwXCJ9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCIjMzc0MTUxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgZm9udFdlaWdodDogNTAwLCB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiB7IGlmIChhaVRvb2xFZGl0TW9kZSAhPT0gaSkgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiNmMWY1ZjlcIjsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiB7IGlmIChhaVRvb2xFZGl0TW9kZSAhPT0gaSkgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiNmOGZhZmNcIjsgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTgsIGZsZXhTaHJpbms6IDAgfX0+e3Rvb2wuaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIG1pbldpZHRoOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiBcImhpZGRlblwiLCB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fT57dG9vbC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiBcIiM5NGEzYjhcIiwgbWFyZ2luVG9wOiAxIH19Pnt0b29sLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiA4LCByaWdodDogNiwgcGFkZGluZzogXCIycHggNXB4XCIsIGZvbnRTaXplOiAxMCwgYm9yZGVyUmFkaXVzOiA0LCBib3JkZXI6IFwiMXB4IHNvbGlkICNlMmU4ZjBcIiwgYmFja2dyb3VuZDogXCIjZmZmXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOiBcIiM2MzY2ZjFcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc2V0QWlUb29sRWRpdE1vZGUoaSk7IHNldEFpVG9vbEVkaXREYXRhKHsgLi4udG9vbCB9KTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+7IiY7KCVPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2FpVG9vbEVkaXRNb2RlICE9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTQsIGJvcmRlclJhZGl1czogMTAsIGJhY2tncm91bmQ6IFwiI2Y4ZmFmY1wiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlMmU4ZjBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YWlUb29sRWRpdE1vZGUgPT09IFwiYWRkXCIgPyBcIuuPhOq1rCDstpTqsIBcIiA6IFwi64+E6rWsIOyImOyglVwifVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI4MHB4IDFmclwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiAzIH19PuydtOuqqOyngDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5pbnB1dCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjAsIHBhZGRpbmc6IFwiNnB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLwn5SnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FpVG9vbEVkaXREYXRhLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFpVG9vbEVkaXREYXRhKHByZXYgPT4gKHsgLi4ucHJldiwgaWNvbjogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiAzIH19PuyEnOu5hOyKpOuqhTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiIOiBDaGF0R1BU66GcIOyekeyEsVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthaVRvb2xFZGl0RGF0YS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QWlUb29sRWRpdERhdGEocHJldiA9PiAoeyAuLi5wcmV2LCBsYWJlbDogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogMyB9fT7snbTrj5kg66eB7YGsIChVUkwpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovLy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWlUb29sRWRpdERhdGEudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QWlUb29sRWRpdERhdGEocHJldiA9PiAoeyAuLi5wcmV2LCB1cmw6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEyIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogMyB9fT7shJzruYTsiqQg7ISk66qFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmIg6IOuCtCBHUFRzIO2ZnOyaqVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWlUb29sRWRpdERhdGEuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFpVG9vbEVkaXREYXRhKHByZXYgPT4gKHsgLi4ucHJldiwgZGVzYzogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDYsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FpVG9vbEVkaXRNb2RlICE9PSBcImFkZFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIGNvbG9yOiBcIiNlZjQ0NDRcIiwgYm9yZGVyQ29sb3I6IFwiI2ZlY2FjYVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBkZWxldGVBaVRvb2woYWlUb29sRWRpdE1vZGUpOyBzZXRBaVRvb2xFZGl0TW9kZShudWxsKTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPuyCreygnDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnRuU20oZmFsc2UpfSBvbkNsaWNrPXsoKSA9PiBzZXRBaVRvb2xFZGl0TW9kZShudWxsKX0+7Leo7IaMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnRuU20odHJ1ZSl9IG9uQ2xpY2s9e3NhdmVBaVRvb2x9PuyggOyepTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyog4pSA4pSA4pSAIOy0iOyViCDsnpDrj5kg7IOd7ISxIOKUgOKUgOKUgCAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkLCBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiAxNCB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+4pyoIOy0iOyViCDsnpDrj5kg7IOd7ISxPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzk0YTNiOFwiLCBtYXJnaW5MZWZ0OiA4IH19PuuniOyKpO2EsCDquIDsnYQg6riw67CY7Jy866GcIOqwgSBTTlPsl5Ag66ee64qUIOy0iOyViOydhCDsnpDrj5nsnLzroZwg7J6R7ISx7ZWp64uI64ukLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyODBweCAxZnJcIiwgZ2FwOiAwLCBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZThlYWYwXCIsIGJvcmRlclJhZGl1czogMTAsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuXG4gICAgICAgICAgICAgIHsvKiDsmbzsqr06IO2UhOuhrO2UhO2KuCDrqqnroZ0gKi99XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICNlOGVhZjBcIiwgYmFja2dyb3VuZDogXCIjZjhmYWZjXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTRweFwiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlOGVhZjBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6IFwiMXB4IGRhc2hlZCAjYzdkMmZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2VsZWN0ZWRQcm9tcHRJZCA9PT0gXCJuZXdcIiA/IFwiI2VkZTlmZVwiIDogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzYzNjZmMVwiLCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGdhcDogNixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZFByb21wdElkKFwibmV3XCIpOyBzZXREcmFmdFByb21wdEVkaXQoeyB0aXRsZTogXCJcIiwgY29udGVudDogXCJcIiB9KTsgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgKyDsg4gg7ZSE66Gs7ZSE7Yq4IOunjOuTpOq4sFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1k6IFwiYXV0b1wiLCBtYXhIZWlnaHQ6IDM0MCB9fT5cbiAgICAgICAgICAgICAgICAgIHtkcmFmdFByb21wdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweCAxNHB4XCIsIGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAg7KCA7J6l65CcIO2UhOuhrO2UhO2KuOqwgCDsl4bsirXri4jri6QuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZHJhZnRQcm9tcHRzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWRQcm9tcHRJZChwLmlkKTsgc2V0RHJhZnRQcm9tcHRFZGl0KHsgdGl0bGU6IHAudGl0bGUsIGNvbnRlbnQ6IHAuY29udGVudCB9KTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweCAxNHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2U4ZWFmMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzZWxlY3RlZFByb21wdElkID09PSBwLmlkID8gXCIjZWRlOWZlXCIgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IHNlbGVjdGVkUHJvbXB0SWQgPT09IHAuaWQgPyBcIjNweCBzb2xpZCAjNjM2NmYxXCIgOiBcIjNweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjEyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiB7IGlmIChzZWxlY3RlZFByb21wdElkICE9PSBwLmlkKSBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2YxZjVmOVwiOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IHsgaWYgKHNlbGVjdGVkUHJvbXB0SWQgIT09IHAuaWQpIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiOyB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBzZWxlY3RlZFByb21wdElkID09PSBwLmlkID8gXCIjNGY0NmU1XCIgOiBcIiMzNzQxNTFcIiwgbWFyZ2luQm90dG9tOiAzLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+e3AudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+e3AuY29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiDsmKTrpbjsqr06IO2OuOynkSArIOyDneyEsSAqL31cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9tcHRJZCA9PT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBtaW5IZWlnaHQ6IDIwMCwgY29sb3I6IFwiIzk0YTNiOFwiLCBmb250U2l6ZTogMTMgfX0+XG4gICAgICAgICAgICAgICAgICAgIOyZvOyqveyXkOyEnCDtlITroaztlITtirjrpbwg7ISg7YOd7ZWY6rGw64KYIOyDiOuhnCDrp4zrk5zshLjsmpQuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgey8qIOygnOuqqSArIOuyhO2KvCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb21wdElkID09PSBcIm5ld1wiID8gXCLsg4gg7ZSE66Gs7ZSE7Yq4XCIgOiBcIu2UhOuhrO2UhO2KuCDsiJjsoJVcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9tcHRJZCAhPT0gXCJuZXdcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIGNvbG9yOiBcIiNlZjQ0NDRcIiwgYm9yZGVyQ29sb3I6IFwiI2ZlY2FjYVwiLCBmb250U2l6ZTogMTEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBkcmFmdFByb21wdHMuZmlsdGVyKHggPT4geC5pZCAhPT0gc2VsZWN0ZWRQcm9tcHRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZURyYWZ0UHJvbXB0c1RvRGIodXBkYXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWQubGVuZ3RoID4gMCkgeyBzZXRTZWxlY3RlZFByb21wdElkKHVwZGF0ZWRbMF0uaWQpOyBzZXREcmFmdFByb21wdEVkaXQoeyB0aXRsZTogdXBkYXRlZFswXS50aXRsZSwgY29udGVudDogdXBkYXRlZFswXS5jb250ZW50IH0pOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IHNldFNlbGVjdGVkUHJvbXB0SWQoXCJuZXdcIik7IHNldERyYWZ0UHJvbXB0RWRpdCh7IHRpdGxlOiBcIlwiLCBjb250ZW50OiBcIlwiIH0pOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+7IKt7KCcPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnRuU20odHJ1ZSksIGZvbnRTaXplOiAxMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWZ0UHJvbXB0RWRpdC50aXRsZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIu2UhOuhrO2UhO2KuCDsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFmdFByb21wdEVkaXQuY29udGVudC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIu2UhOuhrO2UhO2KuCDrgrTsmqnsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYXZlZElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQcm9tcHRJZCA9PT0gXCJuZXdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkSWQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSBbLi4uZHJhZnRQcm9tcHRzLCB7IGlkOiBzYXZlZElkLCB0aXRsZTogZHJhZnRQcm9tcHRFZGl0LnRpdGxlLnRyaW0oKSwgY29udGVudDogZHJhZnRQcm9tcHRFZGl0LmNvbnRlbnQudHJpbSgpIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkSWQgPSBzZWxlY3RlZFByb21wdElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSBkcmFmdFByb21wdHMubWFwKHggPT4geC5pZCA9PT0gc2VsZWN0ZWRQcm9tcHRJZCA/IHsgLi4ueCwgdGl0bGU6IGRyYWZ0UHJvbXB0RWRpdC50aXRsZS50cmltKCksIGNvbnRlbnQ6IGRyYWZ0UHJvbXB0RWRpdC5jb250ZW50LnRyaW0oKSB9IDogeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzYXZlRHJhZnRQcm9tcHRzVG9EYih1cGRhdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFByb21wdElkKHNhdmVkSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi7ZSE66Gs7ZSE7Yq46rCAIOyggOyepeuQmOyXiOyKteuLiOuLpC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChg7KCA7J6lIOyLpO2MqDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPvCfkr4g7KCA7J6lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiDtlITroaztlITtirgg7J6F66ClICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7tlITroaztlITtirgg7KCc66qpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5pbnB1dCwgbWFyZ2luQm90dG9tOiAxMiB9fVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiIOiDquLDrs7ggU05TIOy1nOygge2ZlFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RyYWZ0UHJvbXB0RWRpdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREcmFmdFByb21wdEVkaXQocHJldiA9PiAoeyAuLi5wcmV2LCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7tlITroaztlITtirgg64K07JqpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy50ZXh0YXJlYSwgbWluSGVpZ2h0OiA5MCwgZm9udFNpemU6IDEyLCBtYXJnaW5Cb3R0b206IDE2IH19XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLqsIEgU05TIO2UjOueq+2PvOydmCDtirnshLHsl5Ag66ee6rKMIOy1nOygge2ZlO2VtOyjvOyEuOyalC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RyYWZ0UHJvbXB0RWRpdC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERyYWZ0UHJvbXB0RWRpdChwcmV2ID0+ICh7IC4uLnByZXYsIGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICB7Lyog6rWs67aE7ISgICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclRvcDogXCIxcHggc29saWQgI2YxZjVmOVwiLCBtYXJnaW5Cb3R0b206IDE0IH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIO2UjOueq+2PvCDshKDtg50gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA4IH19PuyDneyEse2VoCDtlIzrnqvtj7wg7ISg7YOdPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNiwgZmxleFdyYXA6IFwid3JhcFwiLCBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtkcmFmdFBsYXRmb3JtT3JkZXIubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERyYWZ0R2VuUGxhdGZvcm1zKHByZXYgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LmluY2x1ZGVzKHApID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSBwKSA6IFsuLi5wcmV2LCBwXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHggMTBweFwiLCBib3JkZXJSYWRpdXM6IDEwMCwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkcmFmdEdlblBsYXRmb3Jtcy5pbmNsdWRlcyhwKSA/IFBMQVRGT1JNU1twXS5jb2xvciA6IFwiI2YxZjVmOVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkcmFmdEdlblBsYXRmb3Jtcy5pbmNsdWRlcyhwKSA/IFwiI2ZmZlwiIDogXCIjOTRhM2I4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4xNXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1BMQVRGT1JNU1twXS5pY29ufSB7UExBVEZPUk1TW3BdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIOy0iOyViCDsg53shLEg67KE7Yq8ICovfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5idG4odHJ1ZSksIHdpZHRoOiBcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc0RyYWZ0R2VuZXJhdGluZyA/IFwiIzk0YTNiOFwiIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzRHJhZnRHZW5lcmF0aW5nID8gMC44IDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGlzRHJhZnRHZW5lcmF0aW5nID8gXCJub25lXCIgOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYWZ0R2VuZXJhdGV9XG4gICAgICAgICAgICAgICAgICAgID57aXNEcmFmdEdlbmVyYXRpbmcgPyBcIuKcqCDsg53shLEg7KSRLi4uXCIgOiBcIuKcqCDstIjslYgg7IOd7ISx7ZWY6riwXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIOKUgOKUgOKUgCDtlZjri6g6IFNOUyDrs4Qg6riA7JOw6riwIOuwjyDrsJztlokg4pSA4pSA4pSAICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+TsSBTTlMg67OEIOq4gOyTsOq4sCDrsI8g67Cc7ZaJPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+4qC/IOuTnOuemOq3uOuhnCDsiJzshJwg67OA6rK9IMK3IOyekOuPmSDsoIDsnqU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIOuwnO2Wie2VoCDtlIzrnqvtj7wg7ISg7YOdICjsg4Hri6gg7J2064+ZKSAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNiwgZmxleFdyYXA6IFwid3JhcFwiLCBtYXJnaW5Cb3R0b206IDE0LCBwYWRkaW5nOiBcIjEwcHggMTJweFwiLCBiYWNrZ3JvdW5kOiBcIiNmOGZhZmNcIiwgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6IFwiMXB4IHNvbGlkICNlOGVhZjBcIiB9fT5cbiAgICAgICAgICAgICAge2RyYWZ0UGxhdGZvcm1PcmRlci5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtwfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUGxhdGZvcm0ocCl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMuYnRuU20oY29udGVudC5wbGF0Zm9ybXMuaW5jbHVkZXMocCkpLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb250ZW50LnBsYXRmb3Jtcy5pbmNsdWRlcyhwKSA/IFBMQVRGT1JNU1twXS5jb2xvciA6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29udGVudC5wbGF0Zm9ybXMuaW5jbHVkZXMocCkgPyBcIiNmZmZcIiA6IFwiIzY0NzQ4YlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb250ZW50LnBsYXRmb3Jtcy5pbmNsdWRlcyhwKSA/IFBMQVRGT1JNU1twXS5jb2xvciA6IFwiI2QxZDVkYlwifWAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1BMQVRGT1JNU1twXS5pY29ufSB7UExBVEZPUk1TW3BdLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzk0YTNiOFwiLCBtYXJnaW5Cb3R0b206IDE2IH19PuqwgSBTTlPsl5Ag66ee64qUIOq4gOydhCDsnpHshLHtlZjqs6Ag67Cc7ZaJIOyXrOu2gOulvCDssrTtgaztlZjshLjsmpQuPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCgzLCAxZnIpXCIsIGdhcDogMTIgfX0+XG4gICAgICAgICAgICAgIHtkcmFmdFBsYXRmb3JtT3JkZXIubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17cH1cbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IGhhbmRsZURyYWZ0RHJhZ1N0YXJ0KHApfVxuICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZnREcmFnT3Zlcn1cbiAgICAgICAgICAgICAgICAgIG9uRHJvcD17KCkgPT4gaGFuZGxlRHJhZnREcm9wKHApfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29udGVudC5wbGF0Zm9ybXMuaW5jbHVkZXMocCkgPyBQTEFURk9STVNbcF0uY29sb3IgKyBcIjUwXCIgOiBcIiNlOGVhZjBcIn1gLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogY29udGVudC5wbGF0Zm9ybXMuaW5jbHVkZXMocCkgPyAxIDogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuMTVzLCBib3JkZXItY29sb3IgMC4xNXNcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA3LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjlweCAxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbnRlbnQucGxhdGZvcm1zLmluY2x1ZGVzKHApXG4gICAgICAgICAgICAgICAgICAgICAgPyBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtQTEFURk9STVNbcF0uY29sb3J9MTQsICR7UExBVEZPUk1TW3BdLmNvbG9yfTA2KWBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiI2Y4ZmFmY1wiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtQTEFURk9STVNbcF0uY29sb3J9MTVgLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwiZ3JhYlwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjYjBiOGM4XCIsIGZvbnRTaXplOiAxNCB9fT7ioL88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxNSB9fT57UExBVEZPUk1TW3BdLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzFhMWEyZVwiIH19PntQTEFURk9STVNbcF0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BjYXJkLWluY2x1ZGUtJHtwfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb250ZW50LnBsYXRmb3Jtcy5pbmNsdWRlcyhwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVQbGF0Zm9ybShwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMywgaGVpZ2h0OiAxMywgYWNjZW50Q29sb3I6IFBMQVRGT1JNU1twXS5jb2xvciwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BjYXJkLWluY2x1ZGUtJHtwfWB9IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzY0NzQ4YlwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PuuwnO2WiTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMudGV4dGFyZWEsIG1pbkhlaWdodDogMTIwLCBmb250U2l6ZTogMTIsIGJvcmRlcjogXCJub25lXCIsIHBhZGRpbmc6IDAsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcmVzaXplOiBcInZlcnRpY2FsXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7UExBVEZPUk1TW3BdLm5hbWV97JqpIOq4gOydhCDsnoXroKXtlZjshLjsmpQuLi5gfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50LnBsYXRmb3JtRHJhZnRzW3BdIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRHJhZnQocCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6IFwiI2NiZDVlMVwiLCB0ZXh0QWxpZ246IFwicmlnaHRcIiwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHsoY29udGVudC5wbGF0Zm9ybURyYWZ0c1twXSB8fCBcIlwiKS5sZW5ndGh97J6QXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyog67Cc7ZaJIOyEpOyglSAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn5OkIOuwnO2WiSDsnKDtmJU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgIHsvKiDsponsi5wg67Cc7ZaJIOy5tOuTnCAqL31cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFB1Ymxpc2hNb2RlKFwibm93XCIpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmbGV4OiAxLCBwYWRkaW5nOiBcIjE0cHggMTZweFwiLCBib3JkZXJSYWRpdXM6IDEwLCBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7cHVibGlzaE1vZGUgPT09IFwibm93XCIgPyBcIiM2MzY2ZjFcIiA6IFwiI2UyZThmMFwifWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBwdWJsaXNoTW9kZSA9PT0gXCJub3dcIiA/IFwiI2VlZjJmZlwiIDogXCIjZjhmYWZjXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fT7wn5OkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBwdWJsaXNoTW9kZSA9PT0gXCJub3dcIiA/IFwiIzYzNjZmMVwiIDogXCIjMzc0MTUxXCIgfX0+7KaJ7IucIOuwnO2WiTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtwdWJsaXNoTW9kZSA9PT0gXCJub3dcIiAmJiA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgd2lkdGg6IDgsIGhlaWdodDogOCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBiYWNrZ3JvdW5kOiBcIiM2MzY2ZjFcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiIH19PuyggOyepeqzvCDrj5nsi5zsl5AgU05T7JeQIOuwlOuhnCDqsozsi5ztlanri4jri6Q8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiDsmIjslb0g67Cc7ZaJIOy5tOuTnCAqL31cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFB1Ymxpc2hNb2RlKFwic2NoZWR1bGVcIil9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEsIHBhZGRpbmc6IFwiMTRweCAxNnB4XCIsIGJvcmRlclJhZGl1czogMTAsIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGAycHggc29saWQgJHtwdWJsaXNoTW9kZSA9PT0gXCJzY2hlZHVsZVwiID8gXCIjZjU5ZTBiXCIgOiBcIiNlMmU4ZjBcIn1gLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcHVibGlzaE1vZGUgPT09IFwic2NoZWR1bGVcIiA/IFwiI2ZmZmJlYlwiIDogXCIjZjhmYWZjXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fT7wn5WQPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBwdWJsaXNoTW9kZSA9PT0gXCJzY2hlZHVsZVwiID8gXCIjZDk3NzA2XCIgOiBcIiMzNzQxNTFcIiB9fT7smIjslb0g67Cc7ZaJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAge3B1Ymxpc2hNb2RlID09PSBcInNjaGVkdWxlXCIgJiYgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHdpZHRoOiA4LCBoZWlnaHQ6IDgsIGJvcmRlclJhZGl1czogXCI1MCVcIiwgYmFja2dyb3VuZDogXCIjZjU5ZTBiXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM5NGEzYjhcIiB9fT7sp4DsoJXtlZwg64Kg7Kecwrfsi5zqsITsl5Ag7J6Q64+Z7Jy866GcIOqyjOyLnO2VqeuLiOuLpDwvZGl2PlxuICAgICAgICAgICAgICAgIHtwdWJsaXNoTW9kZSA9PT0gXCJzY2hlZHVsZVwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXQsIG1hcmdpblRvcDogMTAsIGZvbnRTaXplOiAxMiB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudC5zY2hlZHVsZWRBdCA/IGNvbnRlbnQuc2NoZWR1bGVkQXQucmVwbGFjZShcIiBcIiwgXCJUXCIpIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlQ29udGVudChcInNjaGVkdWxlZEF0XCIsIGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoXCJUXCIsIFwiIFwiKSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGdhcDogOCwgcGFkZGluZ1RvcDogMTYsIGJvcmRlclRvcDogXCIxcHggc29saWQgI2YxZjVmOVwiIH19PlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnRuKGZhbHNlKX0gb25DbGljaz17KCkgPT4gc2V0Q29udGVudHNWaWV3KFwibGlzdFwiKX0+7Leo7IaMPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG4oZmFsc2UpfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlQ29udGVudChcImRyYWZ0XCIpfT5cbiAgICAgICAgICAgICAgICA8SWNvbnMuRG93bmxvYWQgLz4g7LSI7JWIIOyggOyepVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge3B1Ymxpc2hNb2RlID09PSBcIm5vd1wiID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5idG4odHJ1ZSksIGJhY2tncm91bmQ6IFwiIzYzNjZmMVwiLCBib3JkZXJDb2xvcjogXCIjNjM2NmYxXCIgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmVDb250ZW50KFwicHVibGlzaGVkXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29ucy5TZW5kIC8+IOyngOq4iCDrsJztlolcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnRuKHRydWUpLCBiYWNrZ3JvdW5kOiBcIiNmNTllMGJcIiwgYm9yZGVyQ29sb3I6IFwiI2Y1OWUwYlwiIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlQ29udGVudChcInNjaGVkdWxlZFwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbnMuQ2xvY2sgLz4g7JiI7JW9IOuTseuhnVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyDilIDilIAg66qp66GdIOu3sCAo6riw67O4KSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICBjb25zdCBnZXREYXlzSW5Nb250aCA9ICh5LCBtKSA9PiBuZXcgRGF0ZSh5LCBtICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGdldEZpcnN0RGF5T2ZNb250aCA9ICh5LCBtKSA9PiBuZXcgRGF0ZSh5LCBtLCAxKS5nZXREYXkoKTtcbiAgICBjb25zdCBNT05USF9OQU1FUyA9IFtcIjHsm5RcIixcIjLsm5RcIixcIjPsm5RcIixcIjTsm5RcIixcIjXsm5RcIixcIjbsm5RcIixcIjfsm5RcIixcIjjsm5RcIixcIjnsm5RcIixcIjEw7JuUXCIsXCIxMeyblFwiLFwiMTLsm5RcIl07XG4gICAgY29uc3QgREFZX05BTUVTID0gW1wi7J28XCIsXCLsm5RcIixcIu2ZlFwiLFwi7IiYXCIsXCLrqqlcIixcIuq4iFwiLFwi7YagXCJdO1xuXG4gICAgY29uc3QgaGFuZGxlQ2FsUHJldiA9ICgpID0+IHtcbiAgICAgIGlmIChjb250ZW50c0NhbFZpZXcgPT09IFwieWVhclwiKSB7IHNldENvbnRlbnRzQ2FsWWVhcih5ID0+IHkgLSAxKTsgcmV0dXJuOyB9XG4gICAgICBpZiAoY29udGVudHNDYWxWaWV3ID09PSBcImRheVwiKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjb250ZW50c0NhbFllYXIsIGNvbnRlbnRzQ2FsTW9udGgsIGNvbnRlbnRzQ2FsU2VsZWN0ZWREYXkgLSAxKTtcbiAgICAgICAgc2V0Q29udGVudHNDYWxZZWFyKGQuZ2V0RnVsbFllYXIoKSk7IHNldENvbnRlbnRzQ2FsTW9udGgoZC5nZXRNb250aCgpKTsgc2V0Q29udGVudHNDYWxTZWxlY3RlZERheShkLmdldERhdGUoKSk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50c0NhbFZpZXcgPT09IFwid2Vla1wiKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjb250ZW50c0NhbFllYXIsIGNvbnRlbnRzQ2FsTW9udGgsIGNvbnRlbnRzQ2FsU2VsZWN0ZWREYXkgLSA3KTtcbiAgICAgICAgc2V0Q29udGVudHNDYWxZZWFyKGQuZ2V0RnVsbFllYXIoKSk7IHNldENvbnRlbnRzQ2FsTW9udGgoZC5nZXRNb250aCgpKTsgc2V0Q29udGVudHNDYWxTZWxlY3RlZERheShkLmdldERhdGUoKSk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50c0NhbE1vbnRoID09PSAwKSB7IHNldENvbnRlbnRzQ2FsWWVhcih5ID0+IHkgLSAxKTsgc2V0Q29udGVudHNDYWxNb250aCgxMSk7IH1cbiAgICAgIGVsc2Ugc2V0Q29udGVudHNDYWxNb250aChtID0+IG0gLSAxKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNhbE5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoY29udGVudHNDYWxWaWV3ID09PSBcInllYXJcIikgeyBzZXRDb250ZW50c0NhbFllYXIoeSA9PiB5ICsgMSk7IHJldHVybjsgfVxuICAgICAgaWYgKGNvbnRlbnRzQ2FsVmlldyA9PT0gXCJkYXlcIikge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoY29udGVudHNDYWxZZWFyLCBjb250ZW50c0NhbE1vbnRoLCBjb250ZW50c0NhbFNlbGVjdGVkRGF5ICsgMSk7XG4gICAgICAgIHNldENvbnRlbnRzQ2FsWWVhcihkLmdldEZ1bGxZZWFyKCkpOyBzZXRDb250ZW50c0NhbE1vbnRoKGQuZ2V0TW9udGgoKSk7IHNldENvbnRlbnRzQ2FsU2VsZWN0ZWREYXkoZC5nZXREYXRlKCkpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudHNDYWxWaWV3ID09PSBcIndlZWtcIikge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoY29udGVudHNDYWxZZWFyLCBjb250ZW50c0NhbE1vbnRoLCBjb250ZW50c0NhbFNlbGVjdGVkRGF5ICsgNyk7XG4gICAgICAgIHNldENvbnRlbnRzQ2FsWWVhcihkLmdldEZ1bGxZZWFyKCkpOyBzZXRDb250ZW50c0NhbE1vbnRoKGQuZ2V0TW9udGgoKSk7IHNldENvbnRlbnRzQ2FsU2VsZWN0ZWREYXkoZC5nZXREYXRlKCkpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudHNDYWxNb250aCA9PT0gMTEpIHsgc2V0Q29udGVudHNDYWxZZWFyKHkgPT4geSArIDEpOyBzZXRDb250ZW50c0NhbE1vbnRoKDApOyB9XG4gICAgICBlbHNlIHNldENvbnRlbnRzQ2FsTW9udGgobSA9PiBtICsgMSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDYWxUb2RheSA9ICgpID0+IHsgc2V0Q29udGVudHNDYWxZZWFyKDIwMjYpOyBzZXRDb250ZW50c0NhbE1vbnRoKDIpOyBzZXRDb250ZW50c0NhbFNlbGVjdGVkRGF5KDIyKTsgfTtcblxuICAgIGNvbnN0IGdldFBvc3RzRm9yRGF0ZSA9IChkYXRlU3RyKSA9PiBjb250ZW50c0xpc3QuZmlsdGVyKGMgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hEYXRlID0gYy5maXJzdFB1Ymxpc2hlZEF0Py5zdGFydHNXaXRoKGRhdGVTdHIpIHx8ICghYy5maXJzdFB1Ymxpc2hlZEF0ICYmIGMuc2NoZWR1bGVkQXQ/LnN0YXJ0c1dpdGgoZGF0ZVN0cikpO1xuICAgICAgcmV0dXJuIG1hdGNoRGF0ZSAmJiBjLnBsYXRmb3Jtcy5zb21lKHAgPT4gY29udGVudHNDYWxQbGF0Zm9ybXMuaW5jbHVkZXMocCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGJ1aWxkTW9udGhHcmlkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmlyc3REYXkgPSBnZXRGaXJzdERheU9mTW9udGgoY29udGVudHNDYWxZZWFyLCBjb250ZW50c0NhbE1vbnRoKTtcbiAgICAgIGNvbnN0IGRheXNDb3VudCA9IGdldERheXNJbk1vbnRoKGNvbnRlbnRzQ2FsWWVhciwgY29udGVudHNDYWxNb250aCk7XG4gICAgICBjb25zdCB3ZWVrcyA9IFtdO1xuICAgICAgbGV0IGRheXMgPSBBcnJheShmaXJzdERheSkuZmlsbChudWxsKTtcbiAgICAgIGZvciAobGV0IGQgPSAxOyBkIDw9IGRheXNDb3VudDsgZCsrKSB7XG4gICAgICAgIGRheXMucHVzaChkKTtcbiAgICAgICAgaWYgKGRheXMubGVuZ3RoID09PSA3KSB7IHdlZWtzLnB1c2goZGF5cyk7IGRheXMgPSBbXTsgfVxuICAgICAgfVxuICAgICAgaWYgKGRheXMubGVuZ3RoKSB7IHdoaWxlIChkYXlzLmxlbmd0aCA8IDcpIGRheXMucHVzaChudWxsKTsgd2Vla3MucHVzaChkYXlzKTsgfVxuICAgICAgcmV0dXJuIHdlZWtzO1xuICAgIH07XG5cbiAgICAvLyDsg4Htg5wg7ZWE7YSwIOyYteyFmCAoM+qwnClcbiAgICBjb25zdCBTVEFUVVNfRklMVEVSX09QVElPTlMgPSBbXG4gICAgICB7IGtleTogXCJkcmFmdFwiLCBsYWJlbDogXCLstIjslYhcIiB9LFxuICAgICAgeyBrZXk6IFwic2NoZWR1bGVkXCIsIGxhYmVsOiBcIuyYiOyVvVwiIH0sXG4gICAgICB7IGtleTogXCJwdWJsaXNoZWRcIiwgbGFiZWw6IFwi67Cc7ZaJ7JmE66OMXCIgfSxcbiAgICBdO1xuICAgIGNvbnN0IHRvZ2dsZVBsYXRmb3JtRmlsdGVyID0gKGspID0+IHNldFNlYXJjaFBsYXRmb3JtcyhwcmV2ID0+IHByZXYuaW5jbHVkZXMoaykgPyBwcmV2LmZpbHRlcihwID0+IHAgIT09IGspIDogWy4uLnByZXYsIGtdKTtcbiAgICBjb25zdCB0b2dnbGVTdGF0dXNGaWx0ZXIgPSAoaykgPT4gc2V0U2VhcmNoU3RhdHVzZXMocHJldiA9PiBwcmV2LmluY2x1ZGVzKGspID8gcHJldi5maWx0ZXIocyA9PiBzICE9PSBrKSA6IFsuLi5wcmV2LCBrXSk7XG5cbiAgICAvLyDtlYTthLDrp4EgKGFwcGxpZWRTZWFyY2gg6riw7KSAKVxuICAgIGNvbnN0IHsgdGl0bGU6IGFmX3RpdGxlLCBwbGF0Zm9ybXM6IGFmX3BsYXRmb3Jtcywgc3RhdHVzZXM6IGFmX3N0YXR1c2VzLCByZWdEYXRlOiBhZl9yZWdEYXRlLCBwdWJEYXRlOiBhZl9wdWJEYXRlLCByZWdpc3RyYW50OiBhZl9yZWdpc3RyYW50IH0gPSBhcHBsaWVkU2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gY29udGVudHNMaXN0LmZpbHRlcihjID0+IHtcbiAgICAgIGlmIChhZl90aXRsZSAmJiAhYy50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFmX3RpdGxlLnRvTG93ZXJDYXNlKCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IEFMTF9QTEFURk9STVMuZXZlcnkocCA9PiBhZl9wbGF0Zm9ybXMuaW5jbHVkZXMocCkpO1xuICAgICAgaWYgKCFhbGxTZWxlY3RlZCAmJiAhYy5wbGF0Zm9ybXMuc29tZShwID0+IGFmX3BsYXRmb3Jtcy5pbmNsdWRlcyhwKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChhZl9zdGF0dXNlcy5sZW5ndGggPiAwICYmICFhZl9zdGF0dXNlcy5pbmNsdWRlcyhjLnN0YXR1cykpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChhZl9yZWdpc3RyYW50ICYmICEoYy5yZWdpc3RyYW50IHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYWZfcmVnaXN0cmFudC50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGFmX3JlZ0RhdGUgJiYgIShjLmZpcnN0UHVibGlzaGVkQXQgfHwgXCJcIikuc3RhcnRzV2l0aChhZl9yZWdEYXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGFmX3B1YkRhdGUgJiYgIShjLnVwZGF0ZWRBdCB8fCBcIlwiKS5zdGFydHNXaXRoKGFmX3B1YkRhdGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Lyog7Zek642UICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLCBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT7svZjthZDsuKAg6rSA66asPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVN1YnRpdGxlfT7svZjthZDsuKDrpbwg7J6R7ISx7ZWY6rOgLCDqsIEgU05T7JeQIOunnuqyjCDtjrjsp5HtlZjqs6AsIOyYiOyVvcK37KaJ7IucIOuwnO2Wie2VmOyEuOyalDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgLi4uc3R5bGVzLmJ0bih0cnVlKSwgcGFkZGluZzogXCIxMHB4IDIwcHhcIiwgZm9udFNpemU6IDE0IH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGJsYW5rID0geyBpZDogbnVsbCwgdGl0bGU6IFwiXCIsIG1hc3RlclRleHQ6IFwiXCIsIHN0YXR1czogXCJkcmFmdFwiLCBzY2hlZHVsZWRBdDogbnVsbCwgcmVnaXN0cmFudDogXCLrgphcIiwgcmVnaXN0ZXJlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLCBwbGF0Zm9ybXM6IFtcInR3aXR0ZXJcIiwgXCJ5b3V0dWJlXCIsIFwiZmFjZWJvb2tcIiwgXCJpbnN0YWdyYW1cIiwgXCJ0aHJlYWRzXCJdLCBwbGF0Zm9ybURyYWZ0czogeyB0d2l0dGVyOiBcIlwiLCB5b3V0dWJlOiBcIlwiLCBmYWNlYm9vazogXCJcIiwgaW5zdGFncmFtOiBcIlwiLCB0aHJlYWRzOiBcIlwiIH0gfTtcbiAgICAgICAgICAgICAgc2V0RWRpdGluZ0NvbnRlbnQoYmxhbmspOyBzZXRDb250ZW50RWRpdFRhYihcInR3aXR0ZXJcIik7IHNldFB1Ymxpc2hNb2RlKFwibm93XCIpOyBzZXRDb250ZW50c1ZpZXcoXCJlZGl0XCIpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8SWNvbnMuUGx1cyAvPiDsg4gg7L2Y7YWQ7LigXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDqsoDsg4kg7KGw6rG0ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkLCBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmRUaXRsZSwgbWFyZ2luQm90dG9tOiAxNiB9fT7qsoDsg4kg7KGw6rG0PC9kaXY+XG4gICAgICAgICAgey8qIDHtlok6IOygnOuqqSAvIOy1nOy0iCDrsJztlonsnbwgLyDsiJjsoJXsnbwgLyDrk7HroZ3snpAgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyZnIgMWZyIDFmciAxZnJcIiwgZ2FwOiAxMiwgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA0IH19PuygnOuqqTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3N0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCLsoJzrqqkg6rKA7IOJLi4uXCIgdmFsdWU9e3NlYXJjaFRpdGxlfSBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hUaXRsZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA0IH19Puy1nOy0iCDrsJztlonsnbw8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0LCBmb250U2l6ZTogMTIgfX0gdmFsdWU9e3NlYXJjaFJlZ0RhdGV9IG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaFJlZ0RhdGUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7siJjsoJXsnbw8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0LCBmb250U2l6ZTogMTIgfX0gdmFsdWU9e3NlYXJjaFB1YkRhdGV9IG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaFB1YkRhdGUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7rk7HroZ3snpA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwi65Ox66Gd7J6QIOqygOyDiS4uLlwiIHZhbHVlPXtzZWFyY2hSZWdpc3RyYW50fSBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hSZWdpc3RyYW50KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiAy7ZaJOiDtlIzrnqvtj7wgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzY0NzQ4YlwiLCBtYXJnaW5Cb3R0b206IDggfX0+7ZSM656r7Y+8PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDYsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKFBMQVRGT1JNUykubWFwKChbaywgdl0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbiA9IHNlYXJjaFBsYXRmb3Jtcy5pbmNsdWRlcyhrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2t9IG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBsYXRmb3JtRmlsdGVyKGspfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA1LCBwYWRkaW5nOiBcIjVweCAxMnB4XCIsIGJvcmRlclJhZGl1czogMTAwLCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiBcInBvaW50ZXJcIiwgYm9yZGVyOiBgMXB4IHNvbGlkICR7b24gPyB2LmNvbG9yIDogXCIjZDFkNWRiXCJ9YCwgYmFja2dyb3VuZDogb24gPyB2LmNvbG9yIDogXCIjZmZmXCIsIGNvbG9yOiBvbiA/IFwiI2ZmZlwiIDogXCIjMzc0MTUxXCIsIHRyYW5zaXRpb246IFwiYWxsIDAuMTVzXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt2Lmljb259IHt2Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiAz7ZaJOiDsg4Htg5wg7LK07YGs67CV7IqkICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA4IH19PuyDge2DnDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAxNiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgdXNlclNlbGVjdDogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3NlYXJjaFN0YXR1c2VzLmxlbmd0aCA9PT0gMH0gb25DaGFuZ2U9eygpID0+IHNldFNlYXJjaFN0YXR1c2VzKFtdKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgYWNjZW50Q29sb3I6IFwiIzYzNjZmMVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBzZWFyY2hTdGF0dXNlcy5sZW5ndGggPT09IDAgPyBcIiM2MzY2ZjFcIiA6IFwiIzM3NDE1MVwiIH19PuyghOyytDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAge1NUQVRVU19GSUxURVJfT1BUSU9OUy5tYXAobyA9PiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17by5rZXl9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDYsIGN1cnNvcjogXCJwb2ludGVyXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3NlYXJjaFN0YXR1c2VzLmluY2x1ZGVzKG8ua2V5KX0gb25DaGFuZ2U9eygpID0+IHRvZ2dsZVN0YXR1c0ZpbHRlcihvLmtleSl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgYWNjZW50Q29sb3I6IFNUQVRVU19DT0xPUlNbby5rZXldLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHNlYXJjaFN0YXR1c2VzLmluY2x1ZGVzKG8ua2V5KSA/IFNUQVRVU19DT0xPUlNbby5rZXldIDogXCIjMzc0MTUxXCIgfX0+e28ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDTtlok6IOuyhO2KvCAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBnYXA6IDgsIHBhZGRpbmdUb3A6IDEyLCBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiB9fT5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG4oZmFsc2UpfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlYXJjaFRpdGxlKFwiXCIpOyBzZXRTZWFyY2hQbGF0Zm9ybXMoQUxMX1BMQVRGT1JNUyk7IHNldFNlYXJjaFN0YXR1c2VzKFtdKTsgc2V0U2VhcmNoUmVnRGF0ZShcIlwiKTsgc2V0U2VhcmNoUHViRGF0ZShcIlwiKTsgc2V0U2VhcmNoUmVnaXN0cmFudChcIlwiKTtcbiAgICAgICAgICAgICAgc2V0QXBwbGllZFNlYXJjaCh7IHRpdGxlOiBcIlwiLCBwbGF0Zm9ybXM6IEFMTF9QTEFURk9STVMsIHN0YXR1c2VzOiBbXSwgcmVnRGF0ZTogXCJcIiwgcHViRGF0ZTogXCJcIiwgcmVnaXN0cmFudDogXCJcIiB9KTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICDstIjquLDtmZRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ0bih0cnVlKX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRBcHBsaWVkU2VhcmNoKHsgdGl0bGU6IHNlYXJjaFRpdGxlLCBwbGF0Zm9ybXM6IHNlYXJjaFBsYXRmb3Jtcywgc3RhdHVzZXM6IHNlYXJjaFN0YXR1c2VzLCByZWdEYXRlOiBzZWFyY2hSZWdEYXRlLCBwdWJEYXRlOiBzZWFyY2hQdWJEYXRlLCByZWdpc3RyYW50OiBzZWFyY2hSZWdpc3RyYW50IH0pO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxJY29ucy5TZWFyY2ggLz4g6rKA7IOJXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIOy9mO2FkOy4oCDrqqnroZ0gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZFRpdGxlLCBtYXJnaW5Cb3R0b206IDE2IH19Puy9mO2FkOy4oCDrqqnroZ08L2Rpdj5cbiAgICAgICAgICB7ZmlsdGVyZWQubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNDhweCAwXCIsIGNvbG9yOiBcIiM5NGEzYjhcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogNDAsIG1hcmdpbkJvdHRvbTogMTIgfX0+8J+TnTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT7svZjthZDsuKDqsIAg7JeG7Iq164uI64ukPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDQgfX0+6rKA7IOJIOyhsOqxtOydhCDrs4Dqsr3tlZjqsbDrgpggWysg7IOIIOy9mO2FkOy4oF3roZwg7Iuc7J6R7ZWY7IS47JqUPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1g6IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBmb250U2l6ZTogMTIgfX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIycHggc29saWQgI2U4ZWFmMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7W1wiTm9cIiwgXCLsoJzrqqlcIiwgXCLtlIzrnqvtj7xcIiwgXCLrk7HroZ3snpBcIiwgXCLstZzstIgg67Cc7ZaJ7J28XCIsIFwi7IiY7KCV7J28XCIsIFwi7IOB7YOcXCIsIFwi6rSA66asXCJdLm1hcChoID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTJweFwiLCB0ZXh0QWxpZ246IGggPT09IFwi6rSA66asXCIgPyBcImNlbnRlclwiIDogXCJsZWZ0XCIsIGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjOTRhM2I4XCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0+e2h9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoY29udGVudCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtjb250ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogaSA8IGZpbHRlcmVkLmxlbmd0aCAtIDEgPyBcIjFweCBzb2xpZCAjZjFmNWY5XCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZhZmJmZFwifVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTJweFwiLCBjb2xvcjogXCIjOTRhM2I4XCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxMnB4XCIsIG1heFdpZHRoOiAyNjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjMWExYTJlXCIsIG1hcmdpbkJvdHRvbTogMiB9fT57Y29udGVudC50aXRsZSB8fCBcIijsoJzrqqkg7JeG7J2MKVwifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM5NGEzYjhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5tYXN0ZXJUZXh0ID8gY29udGVudC5tYXN0ZXJUZXh0LnNsaWNlKDAsIDU1KSArIFwiLi4uXCIgOiBcIuuniOyKpO2EsCDquIAg7JeG7J2MXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTJweFwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5wbGF0Zm9ybXMubWFwKHAgPT4gPHNwYW4ga2V5PXtwfSBzdHlsZT17eyBmb250U2l6ZTogMTUgfX0gdGl0bGU9e1BMQVRGT1JNU1twXS5uYW1lfT57UExBVEZPUk1TW3BdLmljb259PC9zcGFuPil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTJweFwiLCBjb2xvcjogXCIjNjQ3NDhiXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+e2NvbnRlbnQucmVnaXN0cmFudCB8fCBcIi1cIn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTJweFwiLCBjb2xvcjogXCIjNjQ3NDhiXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5maXJzdFB1Ymxpc2hlZEF0ID8gY29udGVudC5maXJzdFB1Ymxpc2hlZEF0LnNsaWNlKDAsIDE2KSA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNjYmQ1ZTFcIiB9fT4tPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTJweFwiLCBjb2xvcjogXCIjNjQ3NDhiXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC51cGRhdGVkQXQgPyBjb250ZW50LnVwZGF0ZWRBdC5zbGljZSgwLCAxNikgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjY2JkNWUxXCIgfX0+LTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDEycHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuYmFkZ2UoU1RBVFVTX0NPTE9SU1tjb250ZW50LnN0YXR1c10pfT57U1RBVFVTX0xBQkVMU1tjb250ZW50LnN0YXR1c119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCA4cHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNCwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgLi4uc3R5bGVzLmJ0blNtKGZhbHNlKSwgZm9udFNpemU6IDExLCBwYWRkaW5nOiBcIjRweCA4cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0RWRpdGluZ0NvbnRlbnQoeyAuLi5jb250ZW50IH0pOyBzZXRDb250ZW50RWRpdFRhYihcInR3aXR0ZXJcIik7IHNldFB1Ymxpc2hNb2RlKGNvbnRlbnQuc2NoZWR1bGVkQXQgPyBcInNjaGVkdWxlXCIgOiBcIm5vd1wiKTsgc2V0Q29udGVudHNWaWV3KFwiZWRpdFwiKTsgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7Y647KeRXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIGZvbnRTaXplOiAxMSwgcGFkZGluZzogXCI0cHggOHB4XCIsIGNvbG9yOiBcIiNlZjQ0NDRcIiwgYm9yZGVyQ29sb3I6IFwiI2ZlY2FjYVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKGBcIiR7Y29udGVudC50aXRsZSB8fCBcIijsoJzrqqkg7JeG7J2MKVwifVwi7J2EKOulvCkg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP2ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJjb250ZW50c1wiKS5kZWxldGUoKS5lcShcImlkXCIsIGNvbnRlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHsgYWxlcnQoXCLsgq3soJwg7Jik66WYOiBcIiArIGVycm9yLm1lc3NhZ2UpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHNMaXN0KHByZXYgPT4gcHJldi5maWx0ZXIoYyA9PiBjLmlkICE9PSBjb250ZW50LmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIGZvbnRTaXplOiAxMSwgcGFkZGluZzogXCI0cHggOHB4XCIsIGJhY2tncm91bmQ6IFwiIzYzNjZmMVwiLCBjb2xvcjogXCIjZmZmXCIsIGJvcmRlcjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBYIOuwnO2WiVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQucGxhdGZvcm1zPy5pbmNsdWRlcyhcInR3aXR0ZXJcIikgJiYgY29udGVudC5wbGF0Zm9ybURyYWZ0cz8udHdpdHRlcj8udHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnVuY3Rpb25zLmludm9rZShcInBvc3QteFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiB7IHRleHQ6IGNvbnRlbnQucGxhdGZvcm1EcmFmdHMudHdpdHRlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhPy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChg4pyFIFgg67Cc7ZaJIOyZhOujjCFcXG4ke2RhdGEudXJsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChg4p2MIFgg67Cc7ZaJIOyLpO2MqDogJHtkYXRhPy5lcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChg4p2MIFgg67Cc7ZaJIOyYpOulmDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZShcIlRcIiwgXCIgXCIpLnNsaWNlKDAsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUZpZWxkcyA9IHsgc3RhdHVzOiBcInB1Ymxpc2hlZFwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQuZmlyc3RQdWJsaXNoZWRBdCkgdXBkYXRlRmllbGRzLmZpcnN0X3B1Ymxpc2hlZF9hdCA9IG5vdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdXBkYXRlRmllbGRzLnVwZGF0ZWRfYXQgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiY29udGVudHNcIikudXBkYXRlKHVwZGF0ZUZpZWxkcykuZXEoXCJpZFwiLCBjb250ZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgeyBhbGVydChcIuuwnO2WiSDsg4Htg5wg7KCA7J6lIOyYpOulmDogXCIgKyBlcnJvci5tZXNzYWdlKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkID0geyAuLi5jb250ZW50LCBzdGF0dXM6IFwicHVibGlzaGVkXCIsIGZpcnN0UHVibGlzaGVkQXQ6IGNvbnRlbnQuZmlyc3RQdWJsaXNoZWRBdCB8fCBub3csIHVwZGF0ZWRBdDogY29udGVudC5maXJzdFB1Ymxpc2hlZEF0ID8gbm93IDogY29udGVudC51cGRhdGVkQXQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRzTGlzdChwcmV2ID0+IHByZXYubWFwKGMgPT4gYy5pZCA9PT0gY29udGVudC5pZCA/IHVwZGF0ZWQgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7KaJ7Iuc67Cc7ZaJXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyog7LqY66aw642UICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZFRpdGxlLCBtYXJnaW5Cb3R0b206IDAgfX0+7LqY66aw642UPC9kaXY+XG5cbiAgICAgICAgICB7Lyog6rWs6riAIOy6mOumsOuNlCDsiqTtg4Dsnbwg7Zek642UICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgcGFkZGluZzogXCIxNHB4IDAgMTBweFwiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiB9fT5cbiAgICAgICAgICAgIHsvKiDsmbzsqr06IOyXsOyblCArIOuEpOu5hOqyjOydtOyFmCAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTAgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMWExYTJlXCIsIG1pbldpZHRoOiAxMzAgfX0+XG4gICAgICAgICAgICAgICAge2NvbnRlbnRzQ2FsVmlldyA9PT0gXCJ5ZWFyXCIgPyBgJHtjb250ZW50c0NhbFllYXJ964WEYCA6IGAke2NvbnRlbnRzQ2FsWWVhcn3rhYQgJHtNT05USF9OQU1FU1tjb250ZW50c0NhbE1vbnRoXX1gfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMyB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIHBhZGRpbmc6IFwiNXB4IDlweFwiLCBmb250U2l6ZTogMTYsIGxpbmVIZWlnaHQ6IDEgfX0gb25DbGljaz17aGFuZGxlQ2FsUHJldn0+4oC5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyAuLi5zdHlsZXMuYnRuU20oZmFsc2UpLCBwYWRkaW5nOiBcIjVweCAxMXB4XCIsIGZvbnRTaXplOiAxMiB9fSBvbkNsaWNrPXtoYW5kbGVDYWxUb2RheX0+7Jik64qYPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyAuLi5zdHlsZXMuYnRuU20oZmFsc2UpLCBwYWRkaW5nOiBcIjVweCA5cHhcIiwgZm9udFNpemU6IDE2LCBsaW5lSGVpZ2h0OiAxIH19IG9uQ2xpY2s9e2hhbmRsZUNhbE5leHR9PuKAujwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIOyYpOuluOyqvTog67ewIO2DgOyehSAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMywgYmFja2dyb3VuZDogXCIjZjFmNWY5XCIsIGJvcmRlclJhZGl1czogOCwgcGFkZGluZzogMyB9fT5cbiAgICAgICAgICAgICAge1t7IGtleTogXCJkYXlcIiwgbGFiZWw6IFwi7J28XCIgfSwgeyBrZXk6IFwid2Vla1wiLCBsYWJlbDogXCLso7xcIiB9LCB7IGtleTogXCJtb250aFwiLCBsYWJlbDogXCLsm5RcIiB9LCB7IGtleTogXCJ5ZWFyXCIsIGxhYmVsOiBcIuyXsFwiIH1dLm1hcCh2ID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17di5rZXl9IG9uQ2xpY2s9eygpID0+IHNldENvbnRlbnRzQ2FsVmlldyh2LmtleSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAxNHB4XCIsIGJvcmRlclJhZGl1czogNiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGJhY2tncm91bmQ6IGNvbnRlbnRzQ2FsVmlldyA9PT0gdi5rZXkgPyBcIiNmZmZcIiA6IFwidHJhbnNwYXJlbnRcIiwgY29sb3I6IGNvbnRlbnRzQ2FsVmlldyA9PT0gdi5rZXkgPyBcIiM2MzY2ZjFcIiA6IFwiIzY0NzQ4YlwiLCBib3hTaGFkb3c6IGNvbnRlbnRzQ2FsVmlldyA9PT0gdi5rZXkgPyBcIjAgMXB4IDNweCAjMDAwMDAwMWFcIiA6IFwibm9uZVwiLCB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiIH19PlxuICAgICAgICAgICAgICAgICAge3YubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU05TIO2VhO2EsCDigJQg7Jew7JuUIOuwlOuhnCDslYTrnpggKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA2LCBmbGV4V3JhcDogXCJ3cmFwXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiMTBweCAwIDE0cHhcIiB9fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjOTRhM2I4XCIsIG1hcmdpblJpZ2h0OiAyIH19PlNOUzo8L3NwYW4+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoUExBVEZPUk1TKS5tYXAoKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvbiA9IGNvbnRlbnRzQ2FsUGxhdGZvcm1zLmluY2x1ZGVzKGspO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtrfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29udGVudHNDYWxQbGF0Zm9ybXMocHJldiA9PiBvbiA/IHByZXYuZmlsdGVyKHAgPT4gcCAhPT0gaykgOiBbLi4ucHJldiwga10pfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNSwgcGFkZGluZzogXCI0cHggMTFweFwiLCBib3JkZXJSYWRpdXM6IDEwMCwgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGJvcmRlcjogYDFweCBzb2xpZCAke29uID8gdi5jb2xvciA6IFwiI2QxZDVkYlwifWAsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJhY2tncm91bmQ6IG9uID8gdi5jb2xvciA6IFwiI2ZmZlwiLCBjb2xvcjogb24gPyBcIiNmZmZcIiA6IFwiIzM3NDE1MVwiLCB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiIH19PlxuICAgICAgICAgICAgICAgICAge3YuaWNvbn0ge3YubmFtZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIOyblOuzhCDqt7jrpqzrk5wgKi99XG4gICAgICAgICAge2NvbnRlbnRzQ2FsVmlldyA9PT0gXCJtb250aFwiICYmICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrcyA9IGJ1aWxkTW9udGhHcmlkKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDcsIDFmcilcIiwgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZjFmNWY5XCIsIG1hcmdpbkJvdHRvbTogMiB9fT5cbiAgICAgICAgICAgICAgICAgIHtEQVlfTkFNRVMubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkfSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBwYWRkaW5nOiBcIjZweCAwXCIsIGNvbG9yOiBpID09PSAwID8gXCIjZWY0NDQ0XCIgOiBpID09PSA2ID8gXCIjNjM2NmYxXCIgOiBcIiM5NGEzYjhcIiB9fT57ZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDcsIDFmcilcIiwgZ2FwOiAyIH19PlxuICAgICAgICAgICAgICAgICAge3dlZWtzLmZsYXQoKS5tYXAoKGRheSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBkYXkgPyBgJHtjb250ZW50c0NhbFllYXJ9LSR7U3RyaW5nKGNvbnRlbnRzQ2FsTW9udGggKyAxKS5wYWRTdGFydCgyLCBcIjBcIil9LSR7U3RyaW5nKGRheSkucGFkU3RhcnQoMiwgXCIwXCIpfWAgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0cyA9IGRhdGVTdHIgPyBnZXRQb3N0c0ZvckRhdGUoZGF0ZVN0cikgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNUb2RheSA9IGRhdGVTdHIgPT09IFwiMjAyNi0wMy0yMlwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gZGF5ID09PSBjb250ZW50c0NhbFNlbGVjdGVkRGF5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3cgPSBpZHggJSA3O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGlmIChkYXkpIHNldENvbnRlbnRzQ2FsU2VsZWN0ZWREYXkoZGF5KTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogODQsIHBhZGRpbmc6IFwiNnB4IDhweFwiLCBiYWNrZ3JvdW5kOiBpc1RvZGF5ID8gXCIjZWRlOWZlXCIgOiBpc1NlbGVjdGVkID8gXCIjZjhmN2ZmXCIgOiBcIiNmYWZiZmRcIiwgYm9yZGVyOiBgMS41cHggc29saWQgJHtpc1RvZGF5ID8gXCIjODE4Y2Y4XCIgOiBpc1NlbGVjdGVkID8gXCIjYTViNGZjXCIgOiBcIiNlOGVhZjBcIn1gLCBib3JkZXJSYWRpdXM6IDYsIG9wYWNpdHk6IGRheSA/IDEgOiAwLjE1LCBjdXJzb3I6IGRheSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIsIHRyYW5zaXRpb246IFwiYm9yZGVyLWNvbG9yIDAuMXNcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXkgJiYgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IGlzVG9kYXkgPyA3MDAgOiA0MDAsIGNvbG9yOiBpc1RvZGF5ID8gXCIjNjM2NmYxXCIgOiBkb3cgPT09IDAgPyBcIiNlZjQ0NDRcIiA6IGRvdyA9PT0gNiA/IFwiIzgxOGNmOFwiIDogXCIjMzc0MTUxXCIsIG1hcmdpbkJvdHRvbTogMyB9fT57ZGF5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLnNsaWNlKDAsIDMpLm1hcCgocG9zdCwgcGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwb3N0LnBsYXRmb3Jtcy5maW5kKHBsID0+IGNvbnRlbnRzQ2FsUGxhdGZvcm1zLmluY2x1ZGVzKHBsKSkgfHwgcG9zdC5wbGF0Zm9ybXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGl9IHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBzZXRFZGl0aW5nQ29udGVudCh7IC4uLnBvc3QgfSk7IHNldENvbnRlbnRFZGl0VGFiKFwidHdpdHRlclwiKTsgc2V0UHVibGlzaE1vZGUoXCJzY2hlZHVsZVwiKTsgc2V0Q29udGVudHNWaWV3KFwiZWRpdFwiKTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTAsIHBhZGRpbmc6IFwiMnB4IDVweFwiLCBib3JkZXJSYWRpdXM6IDMsIGJhY2tncm91bmQ6IFBMQVRGT1JNU1twXT8uY29sb3IgKyBcIjIwXCIsIGNvbG9yOiBQTEFURk9STVNbcF0/LmNvbG9yLCBib3JkZXJMZWZ0OiBgMnB4IHNvbGlkICR7UExBVEZPUk1TW3BdPy5jb2xvcn1gLCBjdXJzb3I6IFwicG9pbnRlclwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsIGZvbnRXZWlnaHQ6IDUwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UExBVEZPUk1TW3BdPy5pY29ufSB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPiAzICYmIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+K3twb3N0cy5sZW5ndGggLSAzfeqxtDwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz59XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKCl9XG5cbiAgICAgICAgICB7Lyog7KO867OEIOu3sCAqL31cbiAgICAgICAgICB7Y29udGVudHNDYWxWaWV3ID09PSBcIndlZWtcIiAmJiAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsRGF0ZSA9IG5ldyBEYXRlKGNvbnRlbnRzQ2FsWWVhciwgY29udGVudHNDYWxNb250aCwgY29udGVudHNDYWxTZWxlY3RlZERheSk7XG4gICAgICAgICAgICBjb25zdCBkb3dTZWwgPSBzZWxEYXRlLmdldERheSgpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNywgMWZyKVwiLCBnYXA6IDIgfX0+XG4gICAgICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDcgfSwgKF8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjb250ZW50c0NhbFllYXIsIGNvbnRlbnRzQ2FsTW9udGgsIGNvbnRlbnRzQ2FsU2VsZWN0ZWREYXkgLSBkb3dTZWwgKyBpKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRzID0gYCR7ZC5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIil9LSR7U3RyaW5nKGQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gZ2V0UG9zdHNGb3JEYXRlKGRzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVG9kYXkgPSBkcyA9PT0gXCIyMDI2LTAzLTIyXCI7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgbWluSGVpZ2h0OiAxNjAsIHBhZGRpbmc6IFwiOHB4XCIsIGJhY2tncm91bmQ6IGlzVG9kYXkgPyBcIiNlZGU5ZmVcIiA6IFwiI2ZhZmJmZFwiLCBib3JkZXI6IGAxcHggc29saWQgJHtpc1RvZGF5ID8gXCIjODE4Y2Y4XCIgOiBcIiNlOGVhZjBcIn1gLCBib3JkZXJSYWRpdXM6IDYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA2LCBjb2xvcjogaSA9PT0gMCA/IFwiI2VmNDQ0NFwiIDogaSA9PT0gNiA/IFwiIzYzNjZmMVwiIDogXCIjNjQ3NDhiXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7REFZX05BTUVTW2ldfSB7ZC5nZXREYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgcGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHBvc3QucGxhdGZvcm1zLmZpbmQocGwgPT4gY29udGVudHNDYWxQbGF0Zm9ybXMuaW5jbHVkZXMocGwpKSB8fCBwb3N0LnBsYXRmb3Jtc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGl9IG9uQ2xpY2s9eygpID0+IHsgc2V0RWRpdGluZ0NvbnRlbnQoeyAuLi5wb3N0IH0pOyBzZXRDb250ZW50c1ZpZXcoXCJlZGl0XCIpOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBwYWRkaW5nOiBcIjNweCA2cHhcIiwgYm9yZGVyUmFkaXVzOiA0LCBiYWNrZ3JvdW5kOiBQTEFURk9STVNbcF0/LmNvbG9yICsgXCIxOFwiLCBjb2xvcjogUExBVEZPUk1TW3BdPy5jb2xvciwgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke1BMQVRGT1JNU1twXT8uY29sb3J9YCwgY3Vyc29yOiBcInBvaW50ZXJcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1BMQVRGT1JNU1twXT8uaWNvbn0ge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkoKX1cblxuICAgICAgICAgIHsvKiDsnbzrs4Qg67ewICovfVxuICAgICAgICAgIHtjb250ZW50c0NhbFZpZXcgPT09IFwiZGF5XCIgJiYgKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBgJHtjb250ZW50c0NhbFllYXJ9LSR7U3RyaW5nKGNvbnRlbnRzQ2FsTW9udGggKyAxKS5wYWRTdGFydCgyLCBcIjBcIil9LSR7U3RyaW5nKGNvbnRlbnRzQ2FsU2VsZWN0ZWREYXkpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBnZXRQb3N0c0ZvckRhdGUoZGF0ZVN0cik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzM3NDE1MVwiLCBwYWRkaW5nOiBcIjEycHggMCAxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudHNDYWxZZWFyfeuFhCB7TU9OVEhfTkFNRVNbY29udGVudHNDYWxNb250aF19IHtjb250ZW50c0NhbFNlbGVjdGVkRGF5feydvCAoe0RBWV9OQU1FU1tuZXcgRGF0ZShjb250ZW50c0NhbFllYXIsIGNvbnRlbnRzQ2FsTW9udGgsIGNvbnRlbnRzQ2FsU2VsZWN0ZWREYXkpLmdldERheSgpXX0pXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3Bvc3RzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjMycHggMFwiLCBjb2xvcjogXCIjY2JkNWUxXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDMyLCBtYXJnaW5Cb3R0b206IDggfX0+8J+ThTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICDsmIjslb3rkJwg7L2Y7YWQ7Lig6rCAIOyXhuyKteuLiOuLpFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgcGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGl9IG9uQ2xpY2s9eygpID0+IHsgc2V0RWRpdGluZ0NvbnRlbnQoeyAuLi5wb3N0IH0pOyBzZXRDb250ZW50c1ZpZXcoXCJlZGl0XCIpOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTIsIHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogXCIjZjhmYWZjXCIsIGJvcmRlcjogXCIxcHggc29saWQgI2U4ZWFmMFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA0IH19Pntwb3N0LnBsYXRmb3Jtcy5tYXAocCA9PiA8c3BhbiBrZXk9e3B9IHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fT57UExBVEZPUk1TW3BdPy5pY29ufTwvc3Bhbj4pfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwIH19Pntwb3N0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiLCBtYXJnaW5Ub3A6IDIgfX0+e3Bvc3Quc2NoZWR1bGVkQXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuYmFkZ2UoU1RBVFVTX0NPTE9SU1twb3N0LnN0YXR1c10pfT57U1RBVFVTX0xBQkVMU1twb3N0LnN0YXR1c119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSgpfVxuXG4gICAgICAgICAgey8qIOyXsOuPhOuzhCDrt7AgKi99XG4gICAgICAgICAge2NvbnRlbnRzQ2FsVmlldyA9PT0gXCJ5ZWFyXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwgMWZyKVwiLCBnYXA6IDEyIH19PlxuICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKF8sIG0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbnQgPSBjb250ZW50c0xpc3QuZmlsdGVyKGMgPT4gYy5zY2hlZHVsZWRBdD8uc3RhcnRzV2l0aChgJHtjb250ZW50c0NhbFllYXJ9LSR7U3RyaW5nKG0gKyAxKS5wYWRTdGFydCgyLCBcIjBcIil9YCkpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e219XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0Q29udGVudHNDYWxNb250aChtKTsgc2V0Q29udGVudHNDYWxWaWV3KFwibW9udGhcIik7IH19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTZweFwiLCBib3JkZXJSYWRpdXM6IDgsIGJhY2tncm91bmQ6IFwiI2ZhZmJmZFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlOGVhZjBcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiB7IGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZWRlOWZlXCI7IGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2M3ZDJmZVwiOyB9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2UgPT4geyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZhZmJmZFwiOyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNlOGVhZjBcIjsgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbWFyZ2luQm90dG9tOiA2IH19PntNT05USF9OQU1FU1ttXX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IGNudCA+IDAgPyBcIiM2MzY2ZjFcIiA6IFwiI2NiZDVlMVwiIH19PntjbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+6rG0PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gIFBBR0U6IENSRUFURSAo6riw7KG0IOKAlCDsoJzqsbDrkKgsIHJlbmRlckNvbnRlbnRz66GcIO2Gte2VqSlcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHJlbmRlckNyZWF0ZSA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBhZ2VUaXRsZX0+7L2Y7YWQ7LigIOygnOyekTwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBhZ2VTdWJ0aXRsZX0+7JuQ7IaM7IqkIOupgO2LsOycoOymiCDigJQg7ZWY64KY7J2YIOybkOuzuOycvOuhnCDrqqjrk6Ag7LGE64SQ7JqpIOy9mO2FkOy4oOulvCDsnpDrj5kg7IOd7ISx7ZWp64uI64ukPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkVGl0bGV9PuKcje+4jyDsm5Drs7gg7L2Y7YWQ7LigIOyeheugpTwvZGl2PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLnRleHRhcmVhfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JuQ67O4IOq4gOydhCDsnoXroKXtlZjshLjsmpQuIOu4lOuhnOq3uCDtj6zsiqTtirgsIOuztOuPhOyekOujjCwg7KCc7ZKIIOyEpOuqhSDrk7Eg7Ja065akIO2Yle2DnOuToCDqtJzssK7sirXri4jri6QuIEFJ6rCAIOqwgSDtlIzrnqvtj7zsl5Ag7LWc7KCB7ZmU65CcIO2Yle2DnOuhnCDrs4DtmZjtlanri4jri6QuXCJcbiAgICAgICAgICB2YWx1ZT17bXVsdGlVc2VJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE11bHRpVXNlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMTQgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA2IH19PlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKFBMQVRGT1JNUykubWFwKChba2V5LCBwXSkgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQbGF0Zm9ybXMocHJldiA9PiBwcmV2LmluY2x1ZGVzKGtleSkgPyBwcmV2LmZpbHRlcihrID0+IGsgIT09IGtleSkgOiBbLi4ucHJldiwga2V5XSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5idG5TbShzZWxlY3RlZFBsYXRmb3Jtcy5pbmNsdWRlcyhrZXkpKSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNlbGVjdGVkUGxhdGZvcm1zLmluY2x1ZGVzKGtleSkgPyBwLmNvbG9yIDogXCIjZjFmNWY5XCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2VsZWN0ZWRQbGF0Zm9ybXMuaW5jbHVkZXMoa2V5KSA/IFwiI2ZmZlwiIDogXCIjNjQ3NDhiXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cC5pY29ufSB7cC5uYW1lfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG4odHJ1ZSl9IG9uQ2xpY2s9e2hhbmRsZUdlbmVyYXRlfT5cbiAgICAgICAgICAgIDxJY29ucy5aYXAgLz4gQUkg67OA7ZmY7ZWY6riwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBUb25lIFByZXNldHMgKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkLCBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn46oIO2GpOyVpOunpOuEiCDtlITrpqzshYs8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA4IH19PlxuICAgICAgICAgIHtbXCLqs7Xsi53soIEgwrcg7KCE66y47KCBXCIsIFwi7Lmc6re87ZWcIMK3IOycoOuouOufrOyKpFwiLCBcIuqwkOyEseyggSDCtyDsiqTthqDrpqzthZTrp4FcIiwgXCLqsITqsrDtlZwgwrcg7Yyp7Yq4IOykkeyLrFwiLCBcIisg7Luk7Iqk7YWAIOy2lOqwgFwiXS5tYXAoKHRvbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtpfSBzdHlsZT17eyAuLi5zdHlsZXMuYnRuU20oaSA9PT0gMSksIGJvcmRlclJhZGl1czogMTAwIH19Pnt0b25lfTwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTG9hZGluZyBBbmltYXRpb24gKi99XG4gICAgICB7aXNHZW5lcmF0aW5nICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjQ4cHggMjRweFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICB7WzAsIDEsIDJdLm1hcChpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyLCBoZWlnaHQ6IDEyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNjM2NmYxXCIsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgMS4ycyBlYXNlLWluLW91dCAke2kgKiAwLjJ9cyBpbmZpbml0ZWAsXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6IFwiIzY0NzQ4YlwiLCBmb250V2VpZ2h0OiA1MDAgfX0+QUnqsIAgNeqwnCDtlIzrnqvtj7zsl5Ag66ee6rKMIOy9mO2FkOy4oOulvCDrs4DtmZjtlZjqs6Ag7J6I7Iq164uI64ukLi4uPC9kaXY+XG4gICAgICAgICAgPHN0eWxlPntgQGtleWZyYW1lcyBwdWxzZSB7IDAlLDEwMCUgeyBvcGFjaXR5OiAwLjM7IHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfSA1MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH0gfWB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogR2VuZXJhdGVkIENvbnRlbnQgKi99XG4gICAgICB7Z2VuZXJhdGVkQ29udGVudCAmJiAhaXNHZW5lcmF0aW5nICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogU3VtbWFyeSBIZWFkZXIgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLmNhcmQsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZGU5ZmUsICNlMGU3ZmYpXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjN2QyZmVcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMzczMGEzXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7inIUgNeqwnCDtlIzrnqvtj7wg7L2Y7YWQ7LigIOyDneyEsSDsmYTro4w8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM2MzY2ZjFcIiB9fT7sm5Drs7gg6riA7J2EIOqwgSDtlIzrnqvtj7zsnZgg7Yq57ISx7JeQIOunnuqyjCDthqQsIOq4uOydtCwg7Y+s66e3LCDtlbTsi5ztg5zqt7jrpbwg7LWc7KCB7ZmU7ZaI7Iq164uI64ukPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ0bihmYWxzZSl9PjxJY29ucy5Db3B5IC8+IOyghOyytCDrs7Xsgqw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ0bih0cnVlKX0+PEljb25zLlNlbmQgLz4g67Cc7ZaJIO2ZlOuptOycvOuhnDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUGxhdGZvcm0gQ2FyZHMgLSBGdWxsIFdpZHRoIFN0YWNrICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMTYgfX0+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZ2VuZXJhdGVkQ29udGVudCkuZmlsdGVyKChba2V5XSkgPT4gc2VsZWN0ZWRQbGF0Zm9ybXMuaW5jbHVkZXMoa2V5KSkubWFwKChba2V5LCBkYXRhXSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5jYXJkLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UExBVEZPUk1TW2tleV0uY29sb3J9MjVgLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7LyogUGxhdGZvcm0gSGVhZGVyICovfVxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTRweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtQTEFURk9STVNba2V5XS5jb2xvcn0xMCwgJHtQTEFURk9STVNba2V5XS5jb2xvcn0wNSlgLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7UExBVEZPUk1TW2tleV0uY29sb3J9MTVgLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNiwgaGVpZ2h0OiAzNiwgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBQTEFURk9STVNba2V5XS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LCBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIH19PntQTEFURk9STVNba2V5XS5pY29ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxYTFhMmVcIiB9fT57UExBVEZPUk1TW2tleV0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzY0NzQ4YlwiIH19PntkYXRhLmZvcm1hdH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ0blNtKGZhbHNlKX0+PEljb25zLkNvcHkgLz4g67O17IKsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG5TbShmYWxzZSl9PjxJY29ucy5FZGl0IC8+IOyImOyglTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ0blNtKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBQTEFURk9STVNba2V5XS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgfX0+PEljb25zLlNlbmQgLz4g7JiI7JW9IOuwnO2WiTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgey8qIENvbnRlbnQgQm9keSAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIxOHB4IDIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHByZSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzM3NDE1MVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwicHJlLXdyYXBcIiwgbGluZUhlaWdodDogMS44LFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCwgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAzMjAsIG92ZXJmbG93WTogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIH19PntkYXRhLnRleHR9PC9wcmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIE1ldGEgU2lkZWJhciAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCwgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxOHB4IDE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjhmYWZjXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNlOGVhZjBcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMTIsXG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjOTRhM2I4XCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7quIDsnpAg7IiYPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTgsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzFhMWEyZVwiIH19PntkYXRhLmNoYXJDb3VudH08c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IFwiIzk0YTNiOFwiIH19PuyekDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzk0YTNiOFwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBtYXJnaW5Cb3R0b206IDQgfX0+7ZW07Iuc7YOc6re4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTgsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzFhMWEyZVwiIH19PntkYXRhLmhhc2h0YWdzfTxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNDAwLCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+6rCcPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjOTRhM2I4XCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7qtozsnqUg7Y+s66e3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IFwiIzM3NDE1MVwiIH19PntkYXRhLmZvcm1hdH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZlZjNjN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZkZTY4YVwiLFxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjOTI0MDBlXCIsIG1hcmdpbkJvdHRvbTogMyB9fT7wn5KhIFRJUDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjNzgzNTBmXCIsIGxpbmVIZWlnaHQ6IDEuNSB9fT57ZGF0YS50aXB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogQ09NTVVOSVRZXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCByZW5kZXJDb21tdW5pdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBjb21tZW50RmlsdGVyID09PSBcImFsbFwiID8gTU9DS19DT01NRU5UUyA6IE1PQ0tfQ09NTUVOVFMuZmlsdGVyKGMgPT4gYy5zZW50aW1lbnQgPT09IGNvbW1lbnRGaWx0ZXIpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT7su6TrrqTri4jti7Ag6rSA66asPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYWdlU3VidGl0bGV9PuuqqOuToCDssYTrhJDsnZgg64yT6riA6rO8IERN7J2EIO2VnCDqs7Psl5DshJwg6rSA66as7ZWY7IS47JqUPC9kaXY+XG5cbiAgICAgICAgey8qIFNlbnRpbWVudCBPdmVydmlldyAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuZ3JpZDMsIG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6riN7KCVIOuMk+q4gFwiLCBjb3VudDogMjQsIHBjdDogXCI1OCVcIiwgY29sb3I6IFwiIzEwYjk4MVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuu2gOyglSDrjJPquIBcIiwgY291bnQ6IDUsIHBjdDogXCIxMiVcIiwgY29sb3I6IFwiI2VmNDQ0NFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuuvuOuLteuzgFwiLCBjb3VudDogOCwgcGN0OiBcIlwiLCBjb2xvcjogXCIjZjU5ZTBiXCIgfSxcbiAgICAgICAgICBdLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkLCBib3JkZXJMZWZ0OiBgNHB4IHNvbGlkICR7cy5jb2xvcn1gLCBwYWRkaW5nOiBcIjE2cHggMThweFwiIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzY0NzQ4YlwiIH19PntzLmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgZm9udFdlaWdodDogNzAwLCBtYXJnaW5Ub3A6IDQgfX0+e3MuY291bnR9IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzk0YTNiOFwiLCBmb250V2VpZ2h0OiA0MDAgfX0+e3MucGN0fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRmlsdGVyICYgQ29tbWVudHMgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn5KsIO2Gte2VqSDsnbjrsJXsiqQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAge1t7IGtleTogXCJhbGxcIiwgbGFiZWw6IFwi7KCE7LK0XCIgfSwgeyBrZXk6IFwibmVnYXRpdmVcIiwgbGFiZWw6IFwi67aA7KCVXCIgfSwgeyBrZXk6IFwicG9zaXRpdmVcIiwgbGFiZWw6IFwi6riN7KCVXCIgfSwgeyBrZXk6IFwibmV1dHJhbFwiLCBsYWJlbDogXCLspJHrpr1cIiB9XS5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2Yua2V5fSBzdHlsZT17c3R5bGVzLnRhYihjb21tZW50RmlsdGVyID09PSBmLmtleSl9IG9uQ2xpY2s9eygpID0+IHNldENvbW1lbnRGaWx0ZXIoZi5rZXkpfT57Zi5sYWJlbH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEwIH19PlxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTIsIHBhZGRpbmc6IFwiMTRweCAxNnB4XCIsIGJvcmRlclJhZGl1czogMTAsIGJhY2tncm91bmQ6IGMuc2VudGltZW50ID09PSBcIm5lZ2F0aXZlXCIgPyBcIiNmZWYyZjJcIiA6IFwiI2Y4ZmFmY1wiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlOGVhZjBcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5wbGF0Zm9ybURvdChQTEFURk9STVNbYy5wbGF0Zm9ybV0uY29sb3IpLCBtYXJnaW5Ub3A6IDQgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAgfX0+e2MudXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiIH19PntQTEFURk9STVNbYy5wbGF0Zm9ybV0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzk0YTNiOFwiIH19PntjLnRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuYmFkZ2Uoc2VudGltZW50Q29sb3JzW2Muc2VudGltZW50XSksIG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PntzZW50aW1lbnRMYWJlbHNbYy5zZW50aW1lbnRdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbWFyZ2luQm90dG9tOiAxMCwgbGluZUhlaWdodDogMS41IH19PntjLnRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDYgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG5TbSh0cnVlKX0+PEljb25zLlphcCAvPiBBSSDri7XquIAg7IOd7ISxPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG5TbShmYWxzZSl9PuyngeygkSDri7XquIA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge2MucmVwbGllZCAmJiA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuYmFkZ2UoXCIjMTBiOTgxXCIpLCBtYXJnaW5MZWZ0OiA0IH19PuuLteuzgOyZhOujjDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogQU5BTFlUSUNTXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCByZW5kZXJBbmFseXRpY3MgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT7shLHqs7wg67aE7ISdPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogOCB9fT5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnRuKGZhbHNlKX0gb25DbGljaz17KCkgPT4gc2V0QWlJbnNpZ2h0KHRydWUpfT48SWNvbnMuWmFwIC8+IEFJIOyduOyCrOydtO2KuDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idG4odHJ1ZSl9PjxJY29ucy5Eb3dubG9hZCAvPiDrs7Tqs6DshJwg7IOd7ISxPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVN1YnRpdGxlfT7tgazroZzsiqQg7LGE64SQIOyEseqzvOulvCDrtoTshJ3tlZjqs6Ag7J247IKs7J207Yq466W8IOuPhOy2nO2VqeuLiOuLpDwvZGl2PlxuXG4gICAgICB7LyogVGFicyAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50YWJCYXJ9PlxuICAgICAgICB7W3sga2V5OiBcIm92ZXJ2aWV3XCIsIGxhYmVsOiBcIuyghOyytCDqsJzsmpRcIiB9LCB7IGtleTogXCJjaGFubmVsXCIsIGxhYmVsOiBcIuyxhOuEkOuzhCDsg4HshLhcIiB9LCB7IGtleTogXCJjb250ZW50XCIsIGxhYmVsOiBcIuy9mO2FkOy4oOuzhCDshLHqs7xcIiB9XS5tYXAodCA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e3Qua2V5fSBzdHlsZT17c3R5bGVzLnRhYihhbmFseXNpc1ZpZXcgPT09IHQua2V5KX0gb25DbGljaz17KCkgPT4gc2V0QW5hbHlzaXNWaWV3KHQua2V5KX0+e3QubGFiZWx9PC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBBSSBJbnNpZ2h0ICovfVxuICAgICAge2FpSW5zaWdodCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZTlmZSwgI2ZhZThmZilcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjYzRiNWZkXCIsIG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkVGl0bGV9PvCfpJYgQUkg7J247IKs7J207Yq4IOumrO2PrO2KuDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBaUluc2lnaHQoZmFsc2UpfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgZm9udFNpemU6IDE2LCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+4pyVPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGxpbmVIZWlnaHQ6IDEuOCwgY29sb3I6IFwiIzM3NDE1MVwiIH19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAxMHB4XCIgfX0+8J+TiCA8c3Ryb25nPuydtOuyiCDso7wg7ZW17IusIOu2hOyEnTo8L3N0cm9uZz4g7KCE7LK0IOyduOqyjOydtOyngOuovO2KuOycqOydtCDsoITso7wg64yA67mEIDEyLjElIOyDgeyKue2WiOyKteuLiOuLpC48L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDEwcHhcIiB9fT7wn4+GIDxzdHJvbmc+7LWc6rOgIOyEseqzvDo8L3N0cm9uZz4g7ZmU7JqU7J28IOyduOyKpO2DgOq3uOueqCDrsIgg7L2Y7YWQ7Lig6rCAIOuPhOuLrCAxNSwyMDDsnYQg6riw66Gd7ZWY66mwIOydtOuyiCDso7wg7LWc6rOgIOyEseqzvOulvCDrs7TsmIDsirXri4jri6QuIOycoOuouOufrOyKpO2VnCDthqTsnZgg7L2Y7YWQ7Lig6rCAIO2Pieq3oCDrjIDruYQgMi4x67CwIOuGkuydgCDqs7XsnKDsnKjsnYQg6riw66Gd7ZWY6rOgIOyeiOyKteuLiOuLpC48L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDEwcHhcIiB9fT7wn5KhIDxzdHJvbmc+7Y+s66e3IOu2hOyEnTo8L3N0cm9uZz4g7LqQ65+s7IWAIO2PrOunt+ydtCDri6jsnbwg7J2066+47KeAIOuMgOu5hCAxLjjrsLAsIOumtOyKpOqwgCAyLjPrsLAg64aS7J2AIOyggOyepeuloOydhCDrs7Tsl6zspI3ri4jri6QuPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PvCfk4sgPHN0cm9uZz7stpTsspwg7JWh7IWYOjwvc3Ryb25nPiDikaAg7Jyg66i4L+uwiCDsvZjthZDsuKDrpbwg7KO8IDLtmozroZwg7ZmV64yAIOKRoSDsupDrn6zshYAg7ZiV7Iud7J2EIOq1kOycoSDsvZjthZDsuKDsl5Ag7KCB6re5IO2ZnOyaqSDikaIgWChUd2l0dGVyKeydmCDsnbjqsozsnbTsp4DrqLztirjqsIAg64Ku7Jy866+A66GcIOyKpOugiOuTnCDtmJXsi53snZgg7Ius7Li1IOy9mO2FkOy4oCDthYzsiqTtirgg6raM7J6lPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBDaGFubmVsIENoYXJ0cyAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ncmlkMn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn5OKIOyxhOuEkOuzhCDrj4Tri6wg7LaU7J20ICjstZzqt7wgN+ydvCk8L2Rpdj5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoUExBVEZPUk1TKS5tYXAoKFtrZXksIHBdKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMCwgbWFyZ2luQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCB3aWR0aDogNzAsIGNvbG9yOiBcIiM2NDc0OGJcIiB9fT57cC5pY29ufSB7cC5uYW1lLnNwbGl0KFwiIFwiKVswXX08L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgaGVpZ2h0OiAyNCwgYmFja2dyb3VuZDogXCIjZjFmNWY5XCIsIGJvcmRlclJhZGl1czogNiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtNYXRoLnJhbmRvbSgpICogNjAgKyAzMH0lYCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7cC5jb2xvcn1jYywgJHtwLmNvbG9yfSlgLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAwLjhzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSlcIixcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+TiCDsnbjqsozsnbTsp4DrqLztirjsnKgg67mE6rWQPC9kaXY+XG4gICAgICAgICAgPE1pbmlCYXJDaGFydCBkYXRhPXtbNC43LCAzLjIsIDUuMSwgMi44LCA0LjBdfSBjb2xvcj1cIiM4YjVjZjZcIiBoZWlnaHQ9ezE0MH0gLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIHBhZGRpbmc6IFwiMCA0cHhcIiwgZm9udFNpemU6IDExLCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+XG4gICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhQTEFURk9STVMpLm1hcChwID0+IDxzcGFuIGtleT17cC5uYW1lfT57cC5pY29ufTwvc3Bhbj4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUG9zdCBSYW5raW5ncyAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpblRvcDogMTYgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkVGl0bGV9PvCfj4Yg7L2Y7YWQ7LigIOyEseqzvCDrnq3tgrk8L2Rpdj5cbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgZm9udFNpemU6IDEzIH19PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkICNlOGVhZjBcIiB9fT5cbiAgICAgICAgICAgICAge1tcIuyInOychFwiLCBcIuy9mO2FkOy4oFwiLCBcIuyxhOuEkFwiLCBcIuuPhOuLrFwiLCBcIuyduOqyjOydtOyngOuovO2KuFwiLCBcIuu5hOycqFwiLCBcIu2PrOunt1wiXS5tYXAoaCA9PiAoXG4gICAgICAgICAgICAgICAgPHRoIGtleT17aH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiwgcGFkZGluZzogXCIxMHB4IDhweFwiLCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzk0YTNiOFwiIH19PntofTwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtNT0NLX1BPU1RTX1JBTktJTkcubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2YxZjVmOVwiIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggOHB4XCIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IGkgPCAzID8gXCIjNjM2NmYxXCIgOiBcIiM5NGEzYjhcIiB9fT57aSArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDhweFwiLCBmb250V2VpZ2h0OiA1MDAgfX0+e3Bvc3QudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDhweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBsYXRmb3JtRG90KFBMQVRGT1JNU1twb3N0LnBsYXRmb3JtXS5jb2xvcil9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtQTEFURk9STVNbcG9zdC5wbGF0Zm9ybV0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggOHB4XCIgfX0+e3Bvc3QucmVhY2gudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggOHB4XCIgfX0+e3Bvc3QuZW5nYWdlLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDhweFwiLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMxMGI5ODFcIiB9fT57cG9zdC5yYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCA4cHhcIiB9fT48c3BhbiBzdHlsZT17c3R5bGVzLnRhZ30+e3Bvc3QuZm9ybWF0fTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTogT1BUSU1JWkVcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHJlbmRlck9wdGltaXplID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVRpdGxlfT7soITrnrUg7LWc7KCB7ZmUPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnZVN1YnRpdGxlfT7rjbDsnbTthLAg6riw67CY7Jy866GcIOuLpOydjCDsoITrnrXsnYQg7IiY66a97ZWY6rOgIOyEseqzvOulvCDqt7nrjIDtmZTtlZjshLjsmpQ8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRhYkJhcn0+XG4gICAgICAgIHtbeyBrZXk6IFwicGF0dGVyblwiLCBsYWJlbDogXCLshLHqs7wg7Yyo7YS0IOu2hOyEnVwiIH0sIHsga2V5OiBcInJlY29tbWVuZFwiLCBsYWJlbDogXCJBSSDsvZjthZDsuKAg7LaU7LKcXCIgfSwgeyBrZXk6IFwicG9zaXRpb25cIiwgbGFiZWw6IFwi6rK97J+B7IKsIO2PrOyngOyFlOuLnVwiIH1dLm1hcCh0ID0+IChcbiAgICAgICAgICA8YnV0dG9uIGtleT17dC5rZXl9IHN0eWxlPXtzdHlsZXMudGFiKG9wdGltaXphdGlvblRhYiA9PT0gdC5rZXkpfSBvbkNsaWNrPXsoKSA9PiBzZXRPcHRpbWl6YXRpb25UYWIodC5rZXkpfT57dC5sYWJlbH08L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge29wdGltaXphdGlvblRhYiA9PT0gXCJwYXR0ZXJuXCIgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmQsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn46vIOy1nOqzoCDshLHqs7wg7KGw7ZWpIFRPUCAzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZ3JpZDN9PlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgcmFuazogXCLwn6WHXCIsIGRheTogXCLtmZTsmpTsnbxcIiwgdGltZTogXCIxOTowMFwiLCBmb3JtYXQ6IFwi7LqQ65+s7IWAXCIsIHRvcGljOiBcIuq1kOycoe2YlVwiLCBhdmdSYXRlOiBcIjcuOCVcIiB9LFxuICAgICAgICAgICAgICAgIHsgcmFuazogXCLwn6WIXCIsIGRheTogXCLrqqnsmpTsnbxcIiwgdGltZTogXCIyMDowMFwiLCBmb3JtYXQ6IFwi66a07IqkXCIsIHRvcGljOiBcIuu5hO2VmOyduOuTnFwiLCBhdmdSYXRlOiBcIjcuMiVcIiB9LFxuICAgICAgICAgICAgICAgIHsgcmFuazogXCLwn6WJXCIsIGRheTogXCLthqDsmpTsnbxcIiwgdGltZTogXCIxMTowMFwiLCBmb3JtYXQ6IFwi67CIL+ycoOuouFwiLCB0b3BpYzogXCLtirjroIzrk5xcIiwgYXZnUmF0ZTogXCI2LjklXCIgfSxcbiAgICAgICAgICAgICAgXS5tYXAoKGNvbWJvLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkLCBiYWNrZ3JvdW5kOiBpID09PSAwID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmVmOWMzKVwiIDogXCIjZmFmYmZkXCIsIGJvcmRlcjogaSA9PT0gMCA/IFwiMXB4IHNvbGlkICNmYmJmMjQzM1wiIDogXCIxcHggc29saWQgI2U4ZWFmMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpbkJvdHRvbTogOCB9fT57Y29tYm8ucmFua308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBmb250U2l6ZTogMTIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzY0NzQ4YlwiIH19PuyalOydvDwvc3Bhbj48c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+e2NvbWJvLmRheX0ge2NvbWJvLnRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBmb250U2l6ZTogMTIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzY0NzQ4YlwiIH19Pu2PrOuntzwvc3Bhbj48c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+e2NvbWJvLmZvcm1hdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGZvbnRTaXplOiAxMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNjQ3NDhiXCIgfX0+7KO87KCcPC9zcGFuPjxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT57Y29tYm8udG9waWN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQsIHBhZGRpbmc6IFwiNnB4IDEwcHhcIiwgYm9yZGVyUmFkaXVzOiA2LCBiYWNrZ3JvdW5kOiBcIiMxMGI5ODExOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAxNCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMTBiOTgxXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAg7Y+J6regIHtjb21iby5hdmdSYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+TiiDsmpTsnbzCt+yLnOqwhOuMgOuzhCDsnbjqsozsnbTsp4DrqLztirgg7Z6I7Yq466e1PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNjBweCByZXBlYXQoNywgMWZyKVwiLCBnYXA6IDMsIG1pbldpZHRoOiA1MDAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgICAgIHtbXCLsm5RcIiwgXCLtmZRcIiwgXCLsiJhcIiwgXCLrqqlcIiwgXCLquIhcIiwgXCLthqBcIiwgXCLsnbxcIl0ubWFwKGQgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2R9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM5NGEzYjhcIiwgcGFkZGluZzogNiB9fT57ZH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7W1wiMDnsi5xcIiwgXCIxMuyLnFwiLCBcIjE17IucXCIsIFwiMTjsi5xcIiwgXCIyMeyLnFwiXS5tYXAoKHRpbWUsIHRpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHQtJHt0aX1gfSBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM5NGEzYjhcIiwgcGFkZGluZzogNiwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+e3RpbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtbMC4yLCAwLjgsIDAuNCwgMC45LCAwLjMsIDAuNywgMC41LCAwLjEsIDAuNiwgMC4zLCAwLjcsIDAuMiwgMC41LCAwLjQsIDAuMywgMC41LCAwLjYsIDAuOCwgMC40LCAwLjYsIDAuMywgMC40LCAwLjcsIDAuNSwgMC45LCAwLjMsIDAuOCwgMC4yLCAwLjUsIDAuOSwgMC43LCAwLjYsIDAuNCwgMC4zLCAwLjhdLnNsaWNlKHRpICogNywgdGkgKiA3ICsgNykubWFwKCh2LCBkaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHt0aX0tJHtkaX1gfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGByZ2JhKDk5LCAxMDIsIDI0MSwgJHt2ICogMC44ICsgMC4xfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdiA+IDAuNSA/IFwiI2ZmZlwiIDogXCIjNjM2NmYxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHYgKiAxMCkudG9GaXhlZCgxKX0lXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge29wdGltaXphdGlvblRhYiA9PT0gXCJyZWNvbW1lbmRcIiAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT7wn5KhIEFJIOy9mO2FkOy4oCDstpTsspwg4oCUIOuLpOydjCDso7w8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEyIH19PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBkYXk6IFwi7JuU7JqU7J28XCIsIHRvcGljOiBcIuyjvOqwhCDtirjroIzrk5wg7YGQ66CI7J207IWYXCIsIGZvcm1hdDogXCLsupDrn6zshYBcIiwgcGxhdGZvcm06IFwiaW5zdGFncmFtXCIsIHJlYXNvbjogXCLsm5TsmpTsnbwg6rWQ7Jyh7ZiVIOy9mO2FkOy4oCDshLHqs7wg7Jqw7IiYXCIgfSxcbiAgICAgICAgICAgICAgeyBkYXk6IFwi7ZmU7JqU7J28XCIsIHRvcGljOiBcIuygnO2SiCDtmZzsmqkg7YyBIOumtOyKpFwiLCBmb3JtYXQ6IFwi66a07IqkL+yIj+y4oFwiLCBwbGF0Zm9ybTogXCJpbnN0YWdyYW1cIiwgcmVhc29uOiBcIu2ZlOyalOydvCDsoIDrhYEg66a07IqkIOyduOqyjOydtOyngOuovO2KuCDstZzqs6BcIiB9LFxuICAgICAgICAgICAgICB7IGRheTogXCLsiJjsmpTsnbxcIiwgdG9waWM6IFwi6rOg6rCdIO2bhOq4sCDrpqzqt7jrnqhcIiwgZm9ybWF0OiBcIlVHQ1wiLCBwbGF0Zm9ybTogXCJmYWNlYm9va1wiLCByZWFzb246IFwiVUdDIOy9mO2FkOy4oCDsi6DrorDrj4Qg7IOB7Iq5IO2aqOqzvFwiIH0sXG4gICAgICAgICAgICAgIHsgZGF5OiBcIuuqqeyalOydvFwiLCB0b3BpYzogXCLsl4Xqs4Qg7J247IKs7J207Yq4IOyKpOugiOuTnFwiLCBmb3JtYXQ6IFwi7Iqk66CI65OcXCIsIHBsYXRmb3JtOiBcInR3aXR0ZXJcIiwgcmVhc29uOiBcIlgg7J246rKM7J207KeA66i87Yq4IOqwnOyEoOydhCDsnITtlZwg7J6l66y4IOy9mO2FkOy4oCDthYzsiqTtirhcIiB9LFxuICAgICAgICAgICAgICB7IGRheTogXCLquIjsmpTsnbxcIiwgdG9waWM6IFwi7KO866eQIOydtOuypO2KuCDti7DsoIBcIiwgZm9ybWF0OiBcIuydtOuvuOyngFwiLCBwbGF0Zm9ybTogXCJ0aHJlYWRzXCIsIHJlYXNvbjogXCLquIjsmpTsnbwg7ZSE66Gc66qo7IWYIOy9mO2FkOy4oCDrj4Tri6zrpaAg64aS7J2MXCIgfSxcbiAgICAgICAgICAgIF0ubWFwKChyZWMsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDE0LCBwYWRkaW5nOiBcIjE0cHggMTZweFwiLCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kOiBcIiNmOGZhZmNcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZThlYWYwXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNDgsIGhlaWdodDogNDgsIGJvcmRlclJhZGl1czogMTAsIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgIzhiNWNmNilcIiwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBjb2xvcjogXCIjZmZmXCIsIGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNzAwLCBmbGV4U2hyaW5rOiAwIH19PntyZWMuZGF5LnNsaWNlKDAsIDEpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA2MDAgfX0+e3JlYy50b3BpY308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNiwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnRhZ30+e3JlYy5mb3JtYXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnRhZ30+e1BMQVRGT1JNU1tyZWMucGxhdGZvcm1dPy5pY29ufSB7UExBVEZPUk1TW3JlYy5wbGF0Zm9ybV0/Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzY0NzQ4YlwiLCBtYXJnaW5Ub3A6IDQgfX0+8J+TiiB7cmVjLnJlYXNvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnRuU20odHJ1ZSl9Puy6mOumsOuNlOyXkCDstpTqsIA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7b3B0aW1pemF0aW9uVGFiID09PSBcInBvc2l0aW9uXCIgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+8J+OryDqsr3sn4Hsgqwg64yA67mEIO2PrOyngOyFlOuLnTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLCBnYXA6IDE2LCBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCIjZjBmZGY0XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2JiZjdkMFwiIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjMTZhMzRhXCIsIG1hcmdpbkJvdHRvbTogOCB9fT7wn5KqIOqwleygkDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzM3NDE1MVwiLCBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAg4oCiIOy6kOufrOyFgCDsvZjthZDsuKAg7J246rKM7J207KeA66i87Yq47JyoIOyXheqzhCDtj4nqt6Ag64yA67mEIDEuNeuwsDxiciAvPlxuICAgICAgICAgICAgICAgIOKAoiDqtZDsnKHtmJUg7L2Y7YWQ7Lig7JeQ7IScIOuPheuztOyggSDsoITrrLjshLEg7J247KCVPGJyIC8+XG4gICAgICAgICAgICAgICAg4oCiIOuMk+q4gCDsnZHri7XrpaAgOTIl66GcIOy7pOuupOuLiO2LsCDqtIDrpqwg7Jqw7IiYXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDE2LCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kOiBcIiNmZWYyZjJcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmVjYWNhXCIgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiNkYzI2MjZcIiwgbWFyZ2luQm90dG9tOiA4IH19PuKaoO+4jyDslb3soJA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbGluZUhlaWdodDogMS44IH19PlxuICAgICAgICAgICAgICAgIOKAoiDsmIHsg4Eg7L2Y7YWQ7LigKOumtOyKpC/siI/suKApIOu5hOykkeydtCDqsr3sn4Hsgqwg64yA67mEIOuCruydjDxiciAvPlxuICAgICAgICAgICAgICAgIOKAoiBYKFR3aXR0ZXIpIOyxhOuEkCDsnbjqsozsnbTsp4DrqLztirgg7JeF6rOEIO2Pieq3oCDsnbTtlZg8YnIgLz5cbiAgICAgICAgICAgICAgICDigKIg6rKM7IucIOu5iOuPhOqwgCDqsr3sn4HsgqwgQiDrjIDruYQgNDAlIOuCruydjFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCIjZWRlOWZlXCIsIGJvcmRlcjogXCIxcHggc29saWQgI2M0YjVmZFwiIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjN2MzYWVkXCIsIG1hcmdpbkJvdHRvbTogOCB9fT7wn5qAIOq4sO2ajDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzM3NDE1MVwiLCBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAg4oCiIFRocmVhZHMg7LGE64SQIOy0iOq4sCDsp4TsnoUg4oCUIOqyveyfgeyCrCDrtoDsnqw8YnIgLz5cbiAgICAgICAgICAgICAgICDigKIg67CIL+ycoOuouCDsvZjthZDsuKAg7YWM7Iqk7Yq4IOqysOqzvCDrhpLsnYAg6rO17Jyg7JyoIO2ZleyduDxiciAvPlxuICAgICAgICAgICAgICAgIOKAoiDsnKDtipzruIwg7IiP7LigIOyVjOqzoOumrOymmCDqsJXtmZQg7Iuc6riwIO2ZnOyaqVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCIjZmVmOWMzXCIsIGJvcmRlcjogXCIxcHggc29saWQgI2ZkZTY4YVwiIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjY2E4YTA0XCIsIG1hcmdpbkJvdHRvbTogOCB9fT7wn5SSIOychO2YkTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzM3NDE1MVwiLCBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAg4oCiIOqyveyfgeyCrCBD7J2YIOuGkuydgCDsnbjqsozsnbTsp4DrqLztirjsnKgoNi4yJSkg7LaU6rKpPGJyIC8+XG4gICAgICAgICAgICAgICAg4oCiIOyduOyKpO2DgOq3uOueqCDslYzqs6Drpqzsppgg67OA6rK97Jy866GcIOuPhOuLrCDqsJDshowg7LaU7IS4PGJyIC8+XG4gICAgICAgICAgICAgICAg4oCiIOyXheqzhCDsoITrsJgg6rSR6rOgIOuLqOqwgCDsg4HsirlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgUEFHRTog7Jew64+ZIOq0gOumrFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgcmVuZGVyU25zSW50ZWdyYXRpb24gPSAoKSA9PiB7XG4gICAgLy8g7ISc67mE7IqkIOyXsOuPmSDtlYTrk5wg7KCV7J2YXG4gICAgY29uc3Qgc2VydmljZUZpZWxkcyA9IHtcbiAgICAgIHN1cGFiYXNlOiB7XG4gICAgICAgIGxhYmVsOiBcIlN1cGFiYXNlXCIsIGljb246IFwi4pqhXCIsIGNvbG9yOiBcIiMzZWNmOGVcIiwgdXJsOiBcImh0dHBzOi8vc3VwYWJhc2UuY29tXCIsXG4gICAgICAgIG5vdGU6IFwic3VwYWJhc2UuY29tIOKGkiBQcm9qZWN0IFNldHRpbmdzIOKGkiBBUElcIixcbiAgICAgICAgZGVzYzogXCJQb3N0Z3JlU1FMIOq4sOuwmOydmCDsmKTtlIjshozsiqQg67Cx7JeU65OcIOyEnOu5hOyKpC4g642w7J207YSw67Kg7J207IqkLCDsnbjspp0sIOyKpO2GoOumrOyngCwg7Iuk7Iuc6rCEIOq4sOuKpeydhCDsoJzqs7XtlZjrqbAgU05TIOuMgOyLnOuztOuTnOydmCDrqqjrk6Ag642w7J207YSw66W8IOyggOyepe2VmOqzoCDqtIDrpqztlZjripQg7ZW17IusIOyduO2UhOudvOyeheuLiOuLpC5cIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBrZXk6IFwicHJvamVjdFVybFwiLCAgICAgbGFiZWw6IFwiUHJvamVjdCBVUkxcIiwgICAgICAgcGxhY2Vob2xkZXI6IFwiaHR0cHM6Ly94eHh4LnN1cGFiYXNlLmNvXCIsICBzZWNyZXQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBrZXk6IFwicHVibGlzaGFibGVLZXlcIiwgbGFiZWw6IFwiUHVibGlzaGFibGUgS2V5XCIsICAgcGxhY2Vob2xkZXI6IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXMuLi5cIiwgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgICAgeyBrZXk6IFwiYW5vbktleUxlZ2FjeVwiLCAgbGFiZWw6IFwiQW5vbiBLZXkgKExlZ2FjeSlcIiwgcGxhY2Vob2xkZXI6IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXMuLi5cIiwgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZ2l0aHViOiB7XG4gICAgICAgIGxhYmVsOiBcIkdpdEh1YlwiLCBpY29uOiBcIvCfkJlcIiwgY29sb3I6IFwiIzI0MjkyZVwiLCB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tXCIsXG4gICAgICAgIG5vdGU6IFwiZ2l0aHViLmNvbSDihpIgU2V0dGluZ3Mg4oaSIERldmVsb3BlciBzZXR0aW5ncyDihpIgUGVyc29uYWwgYWNjZXNzIHRva2Vuc1wiLFxuICAgICAgICBkZXNjOiBcIuyghCDshLjqs4Qg6rCc67Cc7J6Q6rCAIOyCrOyaqe2VmOuKlCDsvZTrk5wg7KCA7J6l7IaMIO2UjOueq+2PvC4gU05TIOuMgOyLnOuztOuTnOydmCDshozsiqTsvZTrk5zrpbwg67KE7KCEIOq0gOumrO2VmOqzoCwg67OA6rK9IOydtOugpeydhCDstpTsoIHtlZjqsbDrgpggVmVyY2VsIOyekOuPmSDrsLDtj6zsnZgg7Yq466as6rGw66GcIO2ZnOyaqeuQqeuLiOuLpC5cIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBrZXk6IFwicGVyc29uYWxBY2Nlc3NUb2tlblwiLCBsYWJlbDogXCJQZXJzb25hbCBBY2Nlc3MgVG9rZW5cIiwgcGxhY2Vob2xkZXI6IFwiZ2hwX3h4eHh4eHh4eHh4eFwiLCBzZWNyZXQ6IHRydWUgfSxcbiAgICAgICAgICB7IGtleTogXCJvd25lclwiLCAgICAgICAgICAgICAgIGxhYmVsOiBcIk93bmVyICjsnKDsoIDrqoUv7KGw7KeB66qFKVwiLCAgICBwbGFjZWhvbGRlcjogXCJteXVzZXJuYW1lXCIsIHNlY3JldDogZmFsc2UgfSxcbiAgICAgICAgICB7IGtleTogXCJyZXBvXCIsICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlcG9zaXRvcnlcIiwgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm15LXJlcG9cIiwgc2VjcmV0OiBmYWxzZSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHZlcmNlbDoge1xuICAgICAgICBsYWJlbDogXCJWZXJjZWxcIiwgaWNvbjogXCLilrJcIiwgY29sb3I6IFwiIzAwMDAwMFwiLCB1cmw6IFwiaHR0cHM6Ly92ZXJjZWwuY29tXCIsXG4gICAgICAgIG5vdGU6IFwidmVyY2VsLmNvbSDihpIgQWNjb3VudCBTZXR0aW5ncyDihpIgVG9rZW5zXCIsXG4gICAgICAgIGRlc2M6IFwi7ZSE66Gg7Yq47JeU65OcIO2Kue2ZlCDtgbTrnbzsmrDrk5wg67Cw7Y+sIO2UjOueq+2PvC4gR2l0SHVi7JmAIOyXsOuPme2VmOuptCDsvZTrk5zrpbwg7ZG47Iuc7ZWgIOuVjOuniOuLpCBTTlMg64yA7Iuc67O065Oc66W8IOyekOuPmeycvOuhnCDruYzrk5ztlZjqs6Ag7KCEIOyEuOqzhCBDRE7sl5Ag7KaJ7IucIOuwsO2PrO2VtOykjeuLiOuLpC5cIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBrZXk6IFwiYWNjZXNzVG9rZW5cIiwgbGFiZWw6IFwiQWNjZXNzIFRva2VuXCIsIHBsYWNlaG9sZGVyOiBcInh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiLCBzZWNyZXQ6IHRydWUgfSxcbiAgICAgICAgICB7IGtleTogXCJwcm9qZWN0SWRcIiwgICBsYWJlbDogXCJQcm9qZWN0IElEXCIsICAgcGxhY2Vob2xkZXI6IFwicHJqX3h4eHh4eHh4eHh4eFwiLCBzZWNyZXQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBrZXk6IFwib3JnSWRcIiwgICAgICAgbGFiZWw6IFwiT3JnIElEICjtjIApXCIsICBwbGFjZWhvbGRlcjogXCJ0ZWFtX3h4eHh4eHh4eHh4eFwiLCBzZWNyZXQ6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZ29vZ2xlU2hlZXQ6IHtcbiAgICAgICAgbGFiZWw6IFwiR29vZ2xlIFNwcmVhZHNoZWV0XCIsIGljb246IFwi8J+TilwiLCBjb2xvcjogXCIjMzRhODUzXCIsIHVybDogXCJodHRwczovL3NoZWV0cy5nb29nbGUuY29tXCIsXG4gICAgICAgIG5vdGU6IFwiR29vZ2xlIENsb3VkIENvbnNvbGUg4oaSIOyEnOu5hOyKpCDqs4TsoJUg4oaSIO2CpCDsg53shLEgKEpTT04pXCIsXG4gICAgICAgIGRlc2M6IFwi6rWs6riA7J20IOygnOqzte2VmOuKlCDtgbTrnbzsmrDrk5wg6riw67CYIOyKpO2UhOugiOuTnOyLnO2KuC4gU05TIOy9mO2FkOy4oCDrsJztlokg7J287KCVLCDshLHqs7wg642w7J207YSw66W8IOyLnO2KuOyXkOyEnCDsp4HsoJEg6rSA66as7ZWY6rGw64KYIOuMgOyLnOuztOuTnOyZgCDslpHrsKntlqUg642w7J207YSwIOuPmeq4sO2ZlOyXkCDtmZzsmqnrkKnri4jri6QuXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsga2V5OiBcInNwcmVhZHNoZWV0SWRcIiwgICAgICBsYWJlbDogXCJTcHJlYWRzaGVldCBJRFwiLCAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjFJam1xcFJ4U18wMENMck4uLi5cIiwgc2VjcmV0OiBmYWxzZSB9LFxuICAgICAgICAgIHsga2V5OiBcInNlcnZpY2VBY2NvdW50RW1haWxcIiwgbGFiZWw6IFwiU2VydmljZSBBY2NvdW50IEVtYWlsXCIsICBwbGFjZWhvbGRlcjogXCJ4eHhAcHJvamVjdC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiLCBzZWNyZXQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBrZXk6IFwicHJpdmF0ZUtleVwiLCAgICAgICAgIGxhYmVsOiBcIlByaXZhdGUgS2V5XCIsICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiLS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLVwiLCBzZWNyZXQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBvcGVuYWk6IHtcbiAgICAgICAgbGFiZWw6IFwiT3BlbkFJXCIsIGljb246IFwi8J+kllwiLCBjb2xvcjogXCIjMTBhMzdmXCIsIHVybDogXCJodHRwczovL3BsYXRmb3JtLm9wZW5haS5jb21cIixcbiAgICAgICAgbm90ZTogXCJwbGF0Zm9ybS5vcGVuYWkuY29tIOKGkiBBUEkga2V5cyDihpIgQ3JlYXRlIG5ldyBzZWNyZXQga2V5XCIsXG4gICAgICAgIGRlc2M6IFwiT3BlbkFJ7J2YIEdQVCDrqqjrjbjsnYQg7Zmc7Jqp7ZW0IOuniOyKpO2EsCDquIDsnYQg6rCBIFNOUyDtlIzrnqvtj7zsl5Ag66ee64qUIOy0iOyViOycvOuhnCDsnpDrj5kg67OA7ZmY7ZWp64uI64ukLiBBUEkg7YKk66W8IOyggOyepe2VmOuptCBb7LSI7JWIIOyDneyEse2VmOq4sF0g67KE7Yq87J20IOyLpOygnCBBSeuhnCDrj5nsnpHtlanri4jri6QuXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsga2V5OiBcImFwaUtleVwiLCBsYWJlbDogXCJBUEkgS2V5XCIsIHBsYWNlaG9sZGVyOiBcInNrLXByb2oteHh4eHh4eHh4eHh4eHh4eHh4eHhcIiwgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZXJ2aWNlQ3JlZGVudGlhbENoYW5nZSA9IChzZXJ2aWNlLCBmaWVsZEtleSwgdmFsdWUpID0+IHtcbiAgICAgIHNldFNlcnZpY2VDcmVkZW50aWFscyhwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIFtzZXJ2aWNlXTogeyAuLi5wcmV2W3NlcnZpY2VdLCBbZmllbGRLZXldOiB2YWx1ZSB9LFxuICAgICAgfSkpO1xuICAgICAgaWYgKHNlcnZpY2VTYXZlU3RhdHVzW3NlcnZpY2VdID09PSBcInNhdmVkXCIpIHtcbiAgICAgICAgc2V0U2VydmljZVNhdmVTdGF0dXMocHJldiA9PiAoeyAuLi5wcmV2LCBbc2VydmljZV06IG51bGwgfSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZXJ2aWNlU2F2ZSA9IGFzeW5jIChzZXJ2aWNlKSA9PiB7XG4gICAgICBzZXRTZXJ2aWNlU2F2ZVN0YXR1cyhwcmV2ID0+ICh7IC4uLnByZXYsIFtzZXJ2aWNlXTogXCJzYXZpbmdcIiB9KSk7XG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2VydmljZV9jcmVkZW50aWFsc1wiKS51cHNlcnQoe1xuICAgICAgICBzZXJ2aWNlLFxuICAgICAgICBjcmVkZW50aWFsczogc2VydmljZUNyZWRlbnRpYWxzW3NlcnZpY2VdLFxuICAgICAgICBpc19jb25uZWN0ZWQ6IE9iamVjdC52YWx1ZXMoc2VydmljZUNyZWRlbnRpYWxzW3NlcnZpY2VdKS5zb21lKHYgPT4gdi50cmltKCkgIT09IFwiXCIpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9LCB7IG9uQ29uZmxpY3Q6IFwic2VydmljZVwiIH0pO1xuICAgICAgc2V0U2VydmljZVNhdmVTdGF0dXMocHJldiA9PiAoeyAuLi5wcmV2LCBbc2VydmljZV06IGVycm9yID8gbnVsbCA6IFwic2F2ZWRcIiB9KSk7XG4gICAgICBpZiAoZXJyb3IpIGFsZXJ0KGDsoIDsnqUg7Iuk7YyoOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU2VydmljZUNvbm5lY3RlZCA9IChzZXJ2aWNlKSA9PlxuICAgICAgT2JqZWN0LnZhbHVlcyhzZXJ2aWNlQ3JlZGVudGlhbHNbc2VydmljZV0pLnNvbWUodiA9PiB2LnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICAvLyBTTlMg7ZSM656r7Y+867OEIOyeheugpSDtlYTrk5wg7KCV7J2YICjrhbjstpwg7Iic7IScOiBYIOKGkiBZb3VUdWJlIOKGkiBGYWNlYm9vayDihpIgSW5zdGFncmFtIOKGkiBUaHJlYWRzKVxuICAgIGNvbnN0IHBsYXRmb3JtRmllbGRzID0gW1xuICAgICAgeyBpZDogXCJ0d2l0dGVyXCIsXG4gICAgICAgIGxhYmVsOiBcIlggKFR3aXR0ZXIpXCIsIGljb246IFwi8J2Vj1wiLCBjb2xvcjogXCIjMTQxNzFBXCIsIHVybDogXCJodHRwczovL2RldmVsb3Blci50d2l0dGVyLmNvbVwiLFxuICAgICAgICBub3RlOiBcImRldmVsb3Blci50d2l0dGVyLmNvbSDihpIgUHJvamVjdCAmIEFwcCDihpIgS2V5cyBhbmQgVG9rZW5zXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsga2V5OiBcImJlYXJlclRva2VuXCIsICAgICAgbGFiZWw6IFwiQmVhcmVyIFRva2VuXCIsICAgICAgICBncm91cDogXCLslbEg7KCE7JqpIOyduOymnVwiLCAgcGxhY2Vob2xkZXI6IFwiQUFBQUFBQUFBQUFBQUFBQUFBQUFBeHh4eHguLi5cIiwgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgICAgeyBrZXk6IFwiY29uc3VtZXJLZXlcIiwgICAgICBsYWJlbDogXCLshozruYTsnpAg7YKkXCIsICAgICAgICAgICAgZ3JvdXA6IFwiT0F1dGggMS4wIO2CpFwiLCBwbGFjZWhvbGRlcjogXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eFwiLCAgICAgICAgICBzZWNyZXQ6IHRydWUsICBwYWlyOiBcInN0YXJ0XCIsIHBhaXJCZzogXCIjZWZmNmZmXCIsIHBhaXJCb3JkZXI6IFwiI2JmZGJmZVwiIH0sXG4gICAgICAgICAgeyBrZXk6IFwiY29uc3VtZXJLZXlTZWNyZXRcIixsYWJlbDogXCJDb25zdW1lciBLZXkgU2VjcmV0XCIsICBncm91cDogXCJPQXV0aCAxLjAg7YKkXCIsIHBsYWNlaG9sZGVyOiBcInh4eHh4eHh4eHh4eHh4eHh4eHh4XCIsICAgICAgICAgIHNlY3JldDogdHJ1ZSwgIHBhaXI6IFwiZW5kXCIgfSxcbiAgICAgICAgICB7IGtleTogXCJhY2Nlc3NUb2tlblwiLCAgICAgIGxhYmVsOiBcIuyVoeyEuOyKpCDthqDtgbBcIiwgICAgICAgICAgZ3JvdXA6IFwiT0F1dGggMS4wIO2CpFwiLCBwbGFjZWhvbGRlcjogXCIwMDAwMDAwMDAteHh4eHh4eHh4eFwiLCAgICAgICAgICBzZWNyZXQ6IHRydWUsICBwYWlyOiBcInN0YXJ0XCIsIHBhaXJCZzogXCIjZjNmNGY2XCIsIHBhaXJCb3JkZXI6IFwiI2QxZDVkYlwiIH0sXG4gICAgICAgICAgeyBrZXk6IFwiYWNjZXNzVG9rZW5TZWNyZXRcIixsYWJlbDogXCLslaHshLjsiqQg7Yag7YGwIOyLnO2BrOumv1wiLCAgIGdyb3VwOiBcIk9BdXRoIDEuMCDtgqRcIiwgcGxhY2Vob2xkZXI6IFwieHh4eHh4eHh4eHh4eHh4eHh4eHhcIiwgICAgICAgICAgc2VjcmV0OiB0cnVlLCAgcGFpcjogXCJlbmRcIiB9LFxuICAgICAgICAgIHsga2V5OiBcImNsaWVudElkXCIsICAgICAgICAgbGFiZWw6IFwi7YG065287J207Ja47Yq4IElEXCIsICAgICAgICBncm91cDogXCJPQXV0aCAyLjAg7YKkXCIsIHBsYWNlaG9sZGVyOiBcIk1rbEtSbkprTTFFMWREbEVXVEo0Li4uXCIsICAgICAgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgICAgeyBrZXk6IFwiY2xpZW50U2VjcmV0XCIsICAgICBsYWJlbDogXCLtgbTrnbzsnbTslrjtirgg7Iuc7YGs66a/XCIsICAgIGdyb3VwOiBcIk9BdXRoIDIuMCDtgqRcIiwgcGxhY2Vob2xkZXI6IFwieHh4eHh4eHh4eHh4eHh4eHh4eHhcIiwgICAgICAgICAgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBpZDogXCJ5b3V0dWJlXCIsXG4gICAgICAgIGxhYmVsOiBcIllvdVR1YmVcIiwgaWNvbjogXCLilrbvuI9cIiwgY29sb3I6IFwiI0ZGMDAwMFwiLCB1cmw6IFwiaHR0cHM6Ly9jb25zb2xlLmNsb3VkLmdvb2dsZS5jb21cIixcbiAgICAgICAgbm90ZTogXCJHb29nbGUgQ2xvdWQgQ29uc29sZSDihpIgT0F1dGggMi4wIO2BtOudvOydtOyWuO2KuCBJRCDsg53shLEgKHlvdXR1YmVfYXV0aC5weeuhnCDthqDtgbAg67Cc6riJKVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IGtleTogXCJjbGllbnRJZFwiLCAgICAgbGFiZWw6IFwiQ2xpZW50IElEXCIsICAgICBwbGFjZWhvbGRlcjogXCJ4eHh4eHguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIiwgc2VjcmV0OiBmYWxzZSB9LFxuICAgICAgICAgIHsga2V5OiBcImNsaWVudFNlY3JldFwiLCBsYWJlbDogXCJDbGllbnQgU2VjcmV0XCIsIHBsYWNlaG9sZGVyOiBcIkdPQ1NQWC14eHh4eHh4eHh4XCIsIHNlY3JldDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgaWQ6IFwiZmFjZWJvb2tcIixcbiAgICAgICAgbGFiZWw6IFwiRmFjZWJvb2tcIiwgaWNvbjogXCLwn5GkXCIsIGNvbG9yOiBcIiMxODc3RjJcIiwgdXJsOiBcImh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb21cIixcbiAgICAgICAgbm90ZTogXCJNZXRhIOqwnOuwnOyekCDsvZjshpQg4oaSIOyVsSDihpIg7Y6Y7J207KeAIOyVoeyEuOyKpCDthqDtgbAg7IOd7ISxXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsga2V5OiBcInBhZ2VBY2Nlc3NUb2tlblwiLCBsYWJlbDogXCJQYWdlIEFjY2VzcyBUb2tlblwiLCBwbGFjZWhvbGRlcjogXCJFQUF4eHh4eHguLi5cIiwgICAgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgICAgeyBrZXk6IFwicGFnZUlkXCIsICAgICAgICAgIGxhYmVsOiBcIlBhZ2UgSURcIiwgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjEyMzQ1Njc4OTAxMjM0NVwiLCBzZWNyZXQ6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBpZDogXCJpbnN0YWdyYW1cIixcbiAgICAgICAgbGFiZWw6IFwiSW5zdGFncmFtXCIsIGljb246IFwi8J+TuFwiLCBjb2xvcjogXCIjRTEzMDZDXCIsIHVybDogXCJodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW5zdGFncmFtLWFwaVwiLFxuICAgICAgICBub3RlOiBcIk1ldGEg6rCc67Cc7J6QIOy9mOyGlCDihpIgSW5zdGFncmFtIEJhc2ljIERpc3BsYXkgQVBJIOKGkiDslaHshLjsiqQg7Yag7YGwIOyDneyEsVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IGtleTogXCJhY2Nlc3NUb2tlblwiLCBsYWJlbDogXCJBY2Nlc3MgVG9rZW5cIiwgICAgICBwbGFjZWhvbGRlcjogXCJFQUF4eHh4eHguLi5cIiwgICAgICAgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgICAgeyBrZXk6IFwidXNlcklkXCIsICAgICAgbGFiZWw6IFwiSW5zdGFncmFtIFVzZXIgSURcIiwgcGxhY2Vob2xkZXI6IFwiMTc4NDE0MDAwMDAwMDAwMDBcIiwgc2VjcmV0OiBmYWxzZSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgaWQ6IFwidGhyZWFkc1wiLFxuICAgICAgICBsYWJlbDogXCJUaHJlYWRzXCIsIGljb246IFwi8J+Ul1wiLCBjb2xvcjogXCIjMDAwMDAwXCIsIHVybDogXCJodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvdGhyZWFkc1wiLFxuICAgICAgICBub3RlOiBcIk1ldGEg6rCc67Cc7J6QIOy9mOyGlCDihpIgVGhyZWFkcyBBUEkg7JWxIOKGkiDslaHshLjsiqQg7Yag7YGwIOyDneyEsVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IGtleTogXCJhcHBJZFwiLCAgICAgICBsYWJlbDogXCJBcHAgSURcIiwgICAgICAgcGxhY2Vob2xkZXI6IFwiMTMyMzQ2ODE5NjQ3ODMyN1wiLCBzZWNyZXQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBrZXk6IFwiYWNjZXNzVG9rZW5cIiwgbGFiZWw6IFwiQWNjZXNzIFRva2VuXCIsIHBsYWNlaG9sZGVyOiBcIkVBQXh4eHh4eC4uLlwiLCAgICAgc2VjcmV0OiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICAvLyDrk5zrnpjqt7gg7JWkIOuTnOuhrSDtlbjrk6Trn6xcbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoaWQpID0+IHsgZHJhZ1Nuc1JlZi5jdXJyZW50ID0gaWQ7IH07XG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgID0gKGUpICA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcbiAgICBjb25zdCBoYW5kbGVEcm9wICAgICAgPSAodGFyZ2V0SWQpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdnZWRJZCA9IGRyYWdTbnNSZWYuY3VycmVudDtcbiAgICAgIGlmICghZHJhZ2dlZElkIHx8IGRyYWdnZWRJZCA9PT0gdGFyZ2V0SWQpIHJldHVybjtcbiAgICAgIHNldFNuc09yZGVyKHByZXYgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnByZXZdO1xuICAgICAgICBjb25zdCBmcm9tID0gbmV4dC5pbmRleE9mKGRyYWdnZWRJZCk7XG4gICAgICAgIGNvbnN0IHRvICAgPSBuZXh0LmluZGV4T2YodGFyZ2V0SWQpO1xuICAgICAgICBuZXh0LnNwbGljZShmcm9tLCAxKTtcbiAgICAgICAgbmV4dC5zcGxpY2UodG8sIDAsIGRyYWdnZWRJZCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic25zT3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkobmV4dCkpOyAvLyDsnpDrj5kg7KCA7J6lXG4gICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgfSk7XG4gICAgICBkcmFnU25zUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDcmVkZW50aWFsQ2hhbmdlID0gKHBsYXRmb3JtLCBmaWVsZEtleSwgdmFsdWUpID0+IHtcbiAgICAgIHNldFNuc0NyZWRlbnRpYWxzKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW3BsYXRmb3JtXTogeyAuLi5wcmV2W3BsYXRmb3JtXSwgW2ZpZWxkS2V5XTogdmFsdWUgfSxcbiAgICAgIH0pKTtcbiAgICAgIC8vIOyggOyepSDsg4Htg5wg7LSI6riw7ZmUXG4gICAgICBpZiAoc25zU2F2ZVN0YXR1c1twbGF0Zm9ybV0gPT09IFwic2F2ZWRcIikge1xuICAgICAgICBzZXRTbnNTYXZlU3RhdHVzKHByZXYgPT4gKHsgLi4ucHJldiwgW3BsYXRmb3JtXTogbnVsbCB9KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAocGxhdGZvcm0pID0+IHtcbiAgICAgIHNldFNuc1NhdmVTdGF0dXMocHJldiA9PiAoeyAuLi5wcmV2LCBbcGxhdGZvcm1dOiBcInNhdmluZ1wiIH0pKTtcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzbnNfY3JlZGVudGlhbHNcIikudXBzZXJ0KHtcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIGNyZWRlbnRpYWxzOiBzbnNDcmVkZW50aWFsc1twbGF0Zm9ybV0sXG4gICAgICAgIGlzX2Nvbm5lY3RlZDogT2JqZWN0LnZhbHVlcyhzbnNDcmVkZW50aWFsc1twbGF0Zm9ybV0pLnNvbWUodiA9PiB2LnRyaW0oKSAhPT0gXCJcIiksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0sIHsgb25Db25mbGljdDogXCJwbGF0Zm9ybVwiIH0pO1xuICAgICAgc2V0U25zU2F2ZVN0YXR1cyhwcmV2ID0+ICh7IC4uLnByZXYsIFtwbGF0Zm9ybV06IGVycm9yID8gbnVsbCA6IFwic2F2ZWRcIiB9KSk7XG4gICAgICBpZiAoZXJyb3IpIGFsZXJ0KGDsoIDsnqUg7Iuk7YyoOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVRva2VuVmlzaWJpbGl0eSA9IChrZXkpID0+IHtcbiAgICAgIHNldFNob3dUb2tlbnMocHJldiA9PiAoeyAuLi5wcmV2LCBba2V5XTogIXByZXZba2V5XSB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gKHBsYXRmb3JtKSA9PiB7XG4gICAgICBjb25zdCBjcmVkcyA9IHNuc0NyZWRlbnRpYWxzW3BsYXRmb3JtXTtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGNyZWRzKS5zb21lKHYgPT4gdi50cmltKCkgIT09IFwiXCIpO1xuICAgIH07XG5cbiAgICAvLyDqs7XthrUg7J6Q6rKp7Kad66qFIOy5tOuTnCDroIzrjZTrn6xcbiAgICBjb25zdCByZW5kZXJDcmVkZW50aWFsQ2FyZCA9ICh7IGtleSwgcGxhdGZvcm0sIGNvbm5lY3RlZCwgc2F2ZVN0YXR1cywgY3JlZGVudGlhbHMsIG9uRmllbGRDaGFuZ2UsIG9uU2F2ZSwgdG9rZW5QcmVmaXgsIGRyYWdnYWJsZSwgb25EcmFnU3RhcnQsIG9uRHJhZ092ZXIsIG9uRHJvcCB9KSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICBkcmFnZ2FibGU9eyEhZHJhZ2dhYmxlfVxuICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnR9XG4gICAgICAgIG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9XG4gICAgICAgIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLnN0eWxlcy5jYXJkLFxuICAgICAgICAgIGJvcmRlcjogY29ubmVjdGVkID8gYDFweCBzb2xpZCAke3BsYXRmb3JtLmNvbG9yfTQwYCA6IFwiMXB4IHNvbGlkICNlOGVhZjBcIixcbiAgICAgICAgICBjdXJzb3I6IGRyYWdnYWJsZSA/IFwiZ3JhYlwiIDogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJib3gtc2hhZG93IDAuMTVzXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKiDtl6TrjZQgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAge2RyYWdnYWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCwgY29sb3I6IFwiI2NiZDVlMVwiLCBmb250U2l6ZTogMTYsIGN1cnNvcjogXCJncmFiXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19PuKgvzwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBwbGF0Zm9ybS5jb2xvcixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsIGNvbG9yOiBcIiNmZmZcIiwgZmxleFNocmluazogMCxcbiAgICAgICAgICAgIH19PntwbGF0Zm9ybS5pY29ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwbGF0Zm9ybS51cmx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzFhMWEyZVwiLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA0IH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtlID0+IGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9IHBsYXRmb3JtLmNvbG9yfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSBcIiMxYTFhMmVcIn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwbGF0Zm9ybS5sYWJlbH0gPEljb25zLkV4dGVybmFsTGluayAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjOTRhM2I4XCIsIG1hcmdpblRvcDogMiB9fT57cGxhdGZvcm0ubm90ZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMxMGI5ODFcIiwgYmFja2dyb3VuZDogXCIjZDFmYWU1XCIsIHBhZGRpbmc6IFwiM3B4IDEwcHhcIiwgYm9yZGVyUmFkaXVzOiAxMDAgfX0+XG4gICAgICAgICAgICAgIOyXsOqysOuQqFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIOyEnOu5hOyKpCDshKTrqoUgKi99XG4gICAgICAgIHtwbGF0Zm9ybS5kZXNjICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzk0YTNiOFwiLCBsaW5lSGVpZ2h0OiAxLjcsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICB7cGxhdGZvcm0uZGVzY31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7Lyog7J6F66ClIO2VhOuTnOuTpCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgLy8gZ3JvdXDsnbQg7J6I64qUIOqyveyasChYKSBncm91cCDtl6TrjZTrpbwg7ZGc7IucLCDsl4bripQg6rK97JqwIOq4sOyhtCAy7Je0IOq3uOumrOuTnFxuICAgICAgICAgICAgY29uc3QgaGFzR3JvdXAgPSBwbGF0Zm9ybS5maWVsZHMuc29tZShmID0+IGYuZ3JvdXApO1xuICAgICAgICAgICAgaWYgKCFoYXNHcm91cCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLCBnYXA6IDEyIH19PlxuICAgICAgICAgICAgICAgICAge3BsYXRmb3JtLmZpZWxkcy5tYXAoZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbktleSA9IGAke3Rva2VuUHJlZml4fS0ke2ZpZWxkLmtleX1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBzaG93VG9rZW5zW3Rva2VuS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGQua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbWFyZ2luQm90dG9tOiA2IH19PntmaWVsZC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZmllbGQuc2VjcmV0ICYmICFpc1Zpc2libGUgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXQsIHBhZGRpbmdSaWdodDogZmllbGQuc2VjcmV0ID8gMzggOiAxNCwgZm9udEZhbWlseTogZmllbGQuc2VjcmV0ICYmICFpc1Zpc2libGUgPyBcIm1vbm9zcGFjZVwiIDogXCJpbmhlcml0XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzW2ZpZWxkLmtleV0gPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmllbGRDaGFuZ2UoZmllbGQua2V5LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZC5zZWNyZXQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlVG9rZW5WaXNpYmlsaXR5KHRva2VuS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAxMCwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6IFwiIzk0YTNiOFwiLCBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzVmlzaWJsZSA/IDxJY29ucy5FeWUgLz4gOiA8SWNvbnMuRXllT2ZmIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGdyb3Vw7J20IOyeiOuKlCDqsr3smrA6IGdyb3Vw67OE66GcIOustuyWtOyEnCDtl6TrjZQgKyDtlYTrk5wg66CM642U66eBXG4gICAgICAgICAgICBjb25zdCBncm91cHMgPSBwbGF0Zm9ybS5maWVsZHMucmVkdWNlKChhY2MsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGcgPSBmaWVsZC5ncm91cCB8fCBcIlwiO1xuICAgICAgICAgICAgICBpZiAoIWFjYy5maW5kKHggPT4geC5uYW1lID09PSBnKSkgYWNjLnB1c2goeyBuYW1lOiBnLCBmaWVsZHM6IFtdIH0pO1xuICAgICAgICAgICAgICBhY2MuZmluZCh4ID0+IHgubmFtZSA9PT0gZykuZmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyRmllbGRJbnB1dCA9IChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b2tlbktleSA9IGAke3Rva2VuUHJlZml4fS0ke2ZpZWxkLmtleX1gO1xuICAgICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBzaG93VG9rZW5zW3Rva2VuS2V5XTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGQua2V5fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbWFyZ2luQm90dG9tOiA2IH19PntmaWVsZC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZmllbGQuc2VjcmV0ICYmICFpc1Zpc2libGUgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXQsIHBhZGRpbmdSaWdodDogZmllbGQuc2VjcmV0ID8gMzggOiAxNCwgZm9udEZhbWlseTogZmllbGQuc2VjcmV0ICYmICFpc1Zpc2libGUgPyBcIm1vbm9zcGFjZVwiIDogXCJpbmhlcml0XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzW2ZpZWxkLmtleV0gPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmllbGRDaGFuZ2UoZmllbGQua2V5LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZC5zZWNyZXQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlVG9rZW5WaXNpYmlsaXR5KHRva2VuS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAxMCwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6IFwiIzk0YTNiOFwiLCBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzVmlzaWJsZSA/IDxJY29ucy5FeWUgLz4gOiA8SWNvbnMuRXllT2ZmIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICAgIC8vIHBhaXI6IFwic3RhcnRcIiAvIFwiZW5kXCIg66GcIOustuyduCDtlYTrk5zripQg7ZWcIOyEuO2KuCDrsJXsiqTroZwg66CM642U66eBXG4gICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgbGV0IGZpID0gMDtcbiAgICAgICAgICAgICAgd2hpbGUgKGZpIDwgZ3JvdXAuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGYgPSBncm91cC5maWVsZHNbZmldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBncm91cC5maWVsZHNbZmkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoZi5wYWlyID09PSBcInN0YXJ0XCIgJiYgbmV4dD8ucGFpciA9PT0gXCJlbmRcIikge1xuICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHBhaXItJHtmLmtleX1gfSBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsIGJvcmRlclJhZGl1czogOCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Zi5wYWlyQm9yZGVyID8/IFwiI2UwZTRlZlwifWAsIGJhY2tncm91bmQ6IGYucGFpckJnID8/IFwiI2Y4ZmFmY1wiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgbWFyZ2luQm90dG9tOiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDE0cHhcIiwgYm9yZGVyUmlnaHQ6IGAycHggc29saWQgJHtmLnBhaXJCb3JkZXIgPz8gXCIjYzdkMmZlXCJ9YCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJGaWVsZElucHV0KGYpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDE0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJGaWVsZElucHV0KG5leHQpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBmaSArPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3dzLnB1c2goPGRpdiBrZXk9e2Yua2V5fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+e3JlbmRlckZpZWxkSW5wdXQoZil9PC9kaXY+KTtcbiAgICAgICAgICAgICAgICAgIGZpICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLm5hbWV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjNjM2NmYxXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IFwiMC4wNmVtXCIsIG1hcmdpbkJvdHRvbTogOCwgcGFkZGluZ0JvdHRvbTogNCwgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZThlYWYwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtncm91cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDggfX0+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSgpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyog7KCA7J6lIOuyhO2KvCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMCB9fT5cbiAgICAgICAgICB7c2F2ZVN0YXR1cyA9PT0gXCJzYXZlZFwiICYmIChcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzEwYjk4MVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA0IH19PlxuICAgICAgICAgICAgICA8SWNvbnMuQ2hlY2sgLz4g7KCA7J6lIOyZhOujjFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ0bih0cnVlKSxcbiAgICAgICAgICAgICAgb3BhY2l0eTogc2F2ZVN0YXR1cyA9PT0gXCJzYXZpbmdcIiA/IDAuNyA6IDEsXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IHNhdmVTdGF0dXMgPT09IFwic2F2aW5nXCIgPyBcIm5vbmVcIiA6IFwiYXV0b1wiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2F2ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2F2ZVN0YXR1cyA9PT0gXCJzYXZpbmdcIiA/IFwi7KCA7J6lIOykkS4uLlwiIDogXCLsoIDsnqVcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYWdlVGl0bGV9PuyXsOuPmSDqtIDrpqw8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBhZ2VTdWJ0aXRsZX0+QVBJIO2CpOulvCDsnoXroKXtlZjqs6Ag7KCA7J6l7ZWY7IS47JqULiDtgqTripQg7JWU7Zi47ZmU65CY7Ja0IERC7JeQIOyggOyepeuQqeuLiOuLpC48L2Rpdj5cblxuICAgICAgICB7Lyog67O07JWIIOyViOuCtCDrsLDrhIggKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsIGdhcDogMTIsXG4gICAgICAgICAgcGFkZGluZzogXCIxNHB4IDE4cHhcIiwgYm9yZGVyUmFkaXVzOiAxMCwgbWFyZ2luQm90dG9tOiAyNCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZWY5YzNcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmRlNjhhXCIsXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmbGV4U2hyaW5rOiAwIH19PvCflJA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzc4MzUwZlwiLCBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICA8c3Ryb25nPuuztOyViCDslYjrgrQ6PC9zdHJvbmc+IEFQSSDtgqTripQg7ZmU66m07JeQIOyeheugpe2VnCDtm4QgW+yggOyepV0g67KE7Yq87J2EIO2BtOumre2VtOyVvCBEQuyXkCDrsJjsmIHrkKnri4jri6QuXG4gICAgICAgICAgICDsnoXroKXrkJwg7YKk64qUIEFFUy0yNTbsnLzroZwg7JWU7Zi47ZmUIOyggOyepeuQmOupsCwg7IaM7Iqk7L2U65OcKC5lbnYp7JeQ64qUIOyggOyepeuQmOyngCDslYrsirXri4jri6QuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDtg60gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNCwgbWFyZ2luQm90dG9tOiAyNCwgYmFja2dyb3VuZDogXCIjZjFmNWY5XCIsIGJvcmRlclJhZGl1czogMTAsIHBhZGRpbmc6IDQgfX0+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsgaWQ6IFwic25zXCIsICAgICBsYWJlbDogXCJTTlMg7Jew64+ZXCIsICAgIGljb246IFwi8J+TsVwiIH0sXG4gICAgICAgICAgICB7IGlkOiBcInNlcnZpY2VcIiwgbGFiZWw6IFwi7ISc67mE7IqkIOyXsOuPmVwiLCAgaWNvbjogXCLwn5SnXCIgfSxcbiAgICAgICAgICBdLm1hcCh0YWIgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW50ZWdyYXRpb25UYWIodGFiLmlkKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmbGV4OiAxLCBwYWRkaW5nOiBcIjhweCAwXCIsIGJvcmRlclJhZGl1czogOCwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbnRlZ3JhdGlvblRhYiA9PT0gdGFiLmlkID8gXCIjZmZmXCIgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGludGVncmF0aW9uVGFiID09PSB0YWIuaWQgPyBcIiMxYTFhMmVcIiA6IFwiIzY0NzQ4YlwiLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogaW50ZWdyYXRpb25UYWIgPT09IHRhYi5pZCA/IFwiMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wOClcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMTVzXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0YWIuaWNvbn0ge3RhYi5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU05TIOyXsOuPmSDtg60gKi99XG4gICAgICAgIHtpbnRlZ3JhdGlvblRhYiA9PT0gXCJzbnNcIiAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxNiB9fT5cbiAgICAgICAgICAgIHtzbnNPcmRlci5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtRmllbGRzLmZpbmQocCA9PiBwLmlkID09PSBpZCk7XG4gICAgICAgICAgICAgIGlmICghcGxhdGZvcm0pIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQ3JlZGVudGlhbENhcmQoe1xuICAgICAgICAgICAgICAgIGtleTogcGxhdGZvcm0uaWQsXG4gICAgICAgICAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkOiBpc0Nvbm5lY3RlZChwbGF0Zm9ybS5pZCksXG4gICAgICAgICAgICAgICAgc2F2ZVN0YXR1czogc25zU2F2ZVN0YXR1c1twbGF0Zm9ybS5pZF0sXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IHNuc0NyZWRlbnRpYWxzW3BsYXRmb3JtLmlkXSxcbiAgICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlOiAoZmllbGRLZXksIHZhbHVlKSA9PiBoYW5kbGVDcmVkZW50aWFsQ2hhbmdlKHBsYXRmb3JtLmlkLCBmaWVsZEtleSwgdmFsdWUpLFxuICAgICAgICAgICAgICAgIG9uU2F2ZTogKCkgPT4gaGFuZGxlU2F2ZShwbGF0Zm9ybS5pZCksXG4gICAgICAgICAgICAgICAgdG9rZW5QcmVmaXg6IHBsYXRmb3JtLmlkLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydDogKCkgPT4gaGFuZGxlRHJhZ1N0YXJ0KHBsYXRmb3JtLmlkKSxcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyOiBoYW5kbGVEcmFnT3ZlcixcbiAgICAgICAgICAgICAgICBvbkRyb3A6ICgpID0+IGhhbmRsZURyb3AocGxhdGZvcm0uaWQpLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiDshJzruYTsiqQg7Jew64+ZIO2DrSAqL31cbiAgICAgICAge2ludGVncmF0aW9uVGFiID09PSBcInNlcnZpY2VcIiAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxNiB9fT5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhzZXJ2aWNlRmllbGRzKS5tYXAoKFtzZXJ2aWNlS2V5LCBzZXJ2aWNlXSkgPT5cbiAgICAgICAgICAgICAgcmVuZGVyQ3JlZGVudGlhbENhcmQoe1xuICAgICAgICAgICAgICAgIGtleTogc2VydmljZUtleSxcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybTogc2VydmljZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ6IGlzU2VydmljZUNvbm5lY3RlZChzZXJ2aWNlS2V5KSxcbiAgICAgICAgICAgICAgICBzYXZlU3RhdHVzOiBzZXJ2aWNlU2F2ZVN0YXR1c1tzZXJ2aWNlS2V5XSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogc2VydmljZUNyZWRlbnRpYWxzW3NlcnZpY2VLZXldLFxuICAgICAgICAgICAgICAgIG9uRmllbGRDaGFuZ2U6IChmaWVsZEtleSwgdmFsdWUpID0+IGhhbmRsZVNlcnZpY2VDcmVkZW50aWFsQ2hhbmdlKHNlcnZpY2VLZXksIGZpZWxkS2V5LCB2YWx1ZSksXG4gICAgICAgICAgICAgICAgb25TYXZlOiAoKSA9PiBoYW5kbGVTZXJ2aWNlU2F2ZShzZXJ2aWNlS2V5KSxcbiAgICAgICAgICAgICAgICB0b2tlblByZWZpeDogYHN2Yy0ke3NlcnZpY2VLZXl9YCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gIFBBR0U6IE1FTUJFUlMgKO2ajOybkCDqtIDrpqwpXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCByZW5kZXJNZW1iZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IEFQUFJPVkFMX0NPTE9SUyA9IHsgcGVuZGluZzogXCIjZjU5ZTBiXCIsIGFwcHJvdmVkOiBcIiMxMGI5ODFcIiwgcmVqZWN0ZWQ6IFwiI2VmNDQ0NFwiIH07XG4gICAgY29uc3QgUk9MRV9DT0xPUlMgPSB7IGFkbWluOiBcIiM2MzY2ZjFcIiwgb3BlcmF0b3I6IFwiIzY0NzQ4YlwiIH07XG5cbiAgICBjb25zdCBwZW5kaW5nQ291bnQgPSBtZW1iZXJzTGlzdC5maWx0ZXIobSA9PiBtLmFwcHJvdmFsU3RhdHVzID09PSBcInBlbmRpbmdcIikubGVuZ3RoO1xuXG4gICAgY29uc3QgdXBkYXRlQXBwcm92YWwgPSBhc3luYyAoaWQsIHZhbCkgPT4ge1xuICAgICAgc2V0TWVtYmVyc0xpc3QocHJldiA9PiBwcmV2Lm1hcChtID0+IG0uaWQgPT09IGlkID8geyAuLi5tLCBhcHByb3ZhbFN0YXR1czogdmFsIH0gOiBtKSk7XG4gICAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwibWVtYmVyc1wiKS51cGRhdGUoeyBhcHByb3ZhbF9zdGF0dXM6IHZhbCB9KS5lcShcImlkXCIsIGlkKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVJvbGUgPSBhc3luYyAoaWQsIHZhbCkgPT4ge1xuICAgICAgc2V0TWVtYmVyc0xpc3QocHJldiA9PiBwcmV2Lm1hcChtID0+IG0uaWQgPT09IGlkID8geyAuLi5tLCByb2xlOiB2YWwgfSA6IG0pKTtcbiAgICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJtZW1iZXJzXCIpLnVwZGF0ZSh7IHJvbGU6IHZhbCB9KS5lcShcImlkXCIsIGlkKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGV0ZU1lbWJlciA9IGFzeW5jIChpZCwgbmFtZSkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5jb25maXJtKGBcIiR7bmFtZX1cIuydhCjrpbwpIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9gKSkge1xuICAgICAgICBzZXRNZW1iZXJzTGlzdChwcmV2ID0+IHByZXYuZmlsdGVyKG0gPT4gbS5pZCAhPT0gaWQpKTtcbiAgICAgICAgYXdhaXQgc3VwYWJhc2UuZnJvbShcIm1lbWJlcnNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCBpZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcHJvdmFsU2VsZWN0U3R5bGUgPSAoc3RhdHVzKSA9PiAoe1xuICAgICAgcGFkZGluZzogXCI1cHggOHB4XCIsIGJvcmRlclJhZGl1czogMjAsIGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7QVBQUk9WQUxfQ09MT1JTW3N0YXR1c10gfHwgXCIjZTJlOGYwXCJ9YCxcbiAgICAgIGJhY2tncm91bmQ6IChBUFBST1ZBTF9DT0xPUlNbc3RhdHVzXSB8fCBcIiM5NGEzYjhcIikgKyBcIjE4XCIsXG4gICAgICBjb2xvcjogQVBQUk9WQUxfQ09MT1JTW3N0YXR1c10gfHwgXCIjOTRhM2I4XCIsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIiwgYXBwZWFyYW5jZTogXCJub25lXCIsIFdlYmtpdEFwcGVhcmFuY2U6IFwibm9uZVwiLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PSc2JyUzRSUzQ3BhdGggZD0nTTAgMGw1IDYgNS02eicgZmlsbD0nJTIzOTRhM2I4Jy8lM0UlM0Mvc3ZnJTNFXCIpYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsIGJhY2tncm91bmRQb3NpdGlvbjogXCJyaWdodCA4cHggY2VudGVyXCIsIHBhZGRpbmdSaWdodDogMjIsXG4gICAgfSk7XG5cbiAgICBjb25zdCByb2xlU2VsZWN0U3R5bGUgPSAocm9sZSkgPT4gKHtcbiAgICAgIHBhZGRpbmc6IFwiNXB4IDhweFwiLCBib3JkZXJSYWRpdXM6IDYsIGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7cm9sZSA9PT0gXCJhZG1pblwiID8gXCIjYzdkMmZlXCIgOiBcIiNlMmU4ZjBcIn1gLFxuICAgICAgYmFja2dyb3VuZDogcm9sZSA9PT0gXCJhZG1pblwiID8gXCIjNjM2NmYxMTVcIiA6IFwiI2YxZjVmOVwiLFxuICAgICAgY29sb3I6IFJPTEVfQ09MT1JTW3JvbGVdIHx8IFwiIzY0NzQ4YlwiLFxuICAgICAgb3V0bGluZTogXCJub25lXCIsIGFwcGVhcmFuY2U6IFwibm9uZVwiLCBXZWJraXRBcHBlYXJhbmNlOiBcIm5vbmVcIixcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAnIGhlaWdodD0nNiclM0UlM0NwYXRoIGQ9J00wIDBsNSA2IDUtNnonIGZpbGw9JyUyMzk0YTNiOCcvJTNFJTNDL3N2ZyUzRVwiKWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kUG9zaXRpb246IFwicmlnaHQgOHB4IGNlbnRlclwiLCBwYWRkaW5nUmlnaHQ6IDIyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsIG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYWdlVGl0bGV9Pu2ajOybkCDqtIDrpqw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYWdlU3VidGl0bGV9PuuMgOyLnOuztOuTnCDsoJHqt7wg6raM7ZWc7J2EIOq0gOumrO2VqeuLiOuLpDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtwZW5kaW5nQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCwgcGFkZGluZzogXCIxMHB4IDE2cHhcIiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCIjZmVmM2M3XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2ZkZTY4YVwiIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+4o+zPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzkyNDAwZVwiIH19PuyKueyduCDrjIDquLAge3BlbmRpbmdDb3VudH3rqoU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1g6IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgZm9udFNpemU6IDEzIH19PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIycHggc29saWQgI2U4ZWFmMFwiIH19PlxuICAgICAgICAgICAgICAgICAge1tcIk5vXCIsIFwi7J2066aEXCIsIFwi7J2066mU7J28IOyjvOyGjFwiLCBcIuqwgOyeheydvFwiLCBcIuyKueyduCDsg4Htg5xcIiwgXCLqtoztlZxcIiwgXCLqtIDrpqxcIl0ubWFwKGggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTRweFwiLCB0ZXh0QWxpZ246IGggPT09IFwi6rSA66asXCIgPyBcImNlbnRlclwiIDogXCJsZWZ0XCIsIGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjOTRhM2I4XCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0+e2h9PC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7bWVtYmVyc0xpc3QubWFwKChtZW1iZXIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21lbWJlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBpIDwgbWVtYmVyc0xpc3QubGVuZ3RoIC0gMSA/IFwiMXB4IHNvbGlkICNmMWY1ZjlcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZhZmJmZFwifVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2UgPT4gZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTRweFwiLCBjb2xvcjogXCIjOTRhM2I4XCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTRweFwiLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMxYTFhMmVcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fT57bWVtYmVyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTRweCAxNHB4XCIsIGNvbG9yOiBcIiM2NDc0OGJcIiB9fT57bWVtYmVyLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTRweFwiLCBjb2xvcjogXCIjNjQ3NDhiXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+e21lbWJlci5qb2luZWRBdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDE0cHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtYmVyLmFwcHJvdmFsU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlQXBwcm92YWwobWVtYmVyLmlkLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YXBwcm92YWxTZWxlY3RTdHlsZShtZW1iZXIuYXBwcm92YWxTdGF0dXMpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhcHByb3ZlZFwiPuyKueyduCDsmYTro4w8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+6rCA7J6FIOuMgOq4sDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlamVjdGVkXCI+6rGw67aAPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTRweFwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVJvbGUobWVtYmVyLmlkLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cm9sZVNlbGVjdFN0eWxlKG1lbWJlci5yb2xlKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRtaW5cIj7qtIDrpqzsnpA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcGVyYXRvclwiPuyatOyYgeyekDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDEwcHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5idG5TbShmYWxzZSksIGZvbnRTaXplOiAxMSwgcGFkZGluZzogXCI0cHggOHB4XCIsIGNvbG9yOiBcIiNlZjQ0NDRcIiwgYm9yZGVyQ29sb3I6IFwiI2ZlY2FjYVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVNZW1iZXIobWVtYmVyLmlkLCBtZW1iZXIubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIO2ajOybkOqwgOyehS/snbjspp0g6rWs7KGwIOyViOuCtCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZCwgbWFyZ2luVG9wOiAyMCwgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjBmNGZmLCAjZmFmNWZmKVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlMGU3ZmZcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMzc0MTUxXCIsIG1hcmdpbkJvdHRvbTogMTIgfX0+8J+SoSDtmozsm5DqsIDsnoUgJiDsnbjspp0g6rWs7KGwIChTdXBhYmFzZSBBdXRoIOyXsOuPmSDqsIDsnbTrk5wpPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsIGdhcDogMTYgfX0+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IHN0ZXA6IFwiMVwiLCB0aXRsZTogXCLtmozsm5DqsIDsnoVcIiwgZGVzYzogXCLsnbTrqZTsnbwv67mE67CA67KI7Zi466GcIOqwgOyehSDihpIgU3VwYWJhc2UgQXV0aCDqs4TsoJUg7IOd7ISxICsgbWVtYmVycyDthYzsnbTruJTsl5AgcGVuZGluZyDsg4Htg5zroZwg65Ox66GdXCIgfSxcbiAgICAgICAgICAgICAgeyBzdGVwOiBcIjJcIiwgdGl0bGU6IFwi6rCA7J6FIOuMgOq4sFwiLCBkZXNjOiBcIuuhnOq3uOyduCDtm4QgJ+q0gOumrOyekCDsirnsnbgg64yA6riwIOykkScg7ZmU66m0IO2RnOyLnC4g64yA7Iuc67O065OcIOygkeq3vCDrtojqsIBcIiB9LFxuICAgICAgICAgICAgICB7IHN0ZXA6IFwiM1wiLCB0aXRsZTogXCLqtIDrpqzsnpAg7Iq57J24XCIsIGRlc2M6IFwi6rSA66as7J6Q6rCAIOydtCDtmZTrqbTsl5DshJwgW+yKueyduF0g7YG066atIOKGkiBhcHByb3ZhbF9zdGF0dXMgPSBhcHByb3ZlZCDsl4XrjbDsnbTtirhcIiB9LFxuICAgICAgICAgICAgICB7IHN0ZXA6IFwiNFwiLCB0aXRsZTogXCLsoJHqt7wg7ZeI7JqpXCIsIGRlc2M6IFwi7Iq57J2465CcIOyCrOyaqeyekOunjCDrjIDsi5zrs7Trk5wg7KeE7J6FLiDqtoztlZwo6rSA66as7J6QL+yatOyYgeyekCnsl5Ag65Sw6528IOuplOuJtCDssKjrk7Eg64W47LacIOqwgOuKpVwiIH0sXG4gICAgICAgICAgICBdLm1hcChzID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Muc3RlcH0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMjQsIGhlaWdodDogMjQsIGJvcmRlclJhZGl1czogXCI1MCVcIiwgYmFja2dyb3VuZDogXCIjNjM2NmYxXCIsIGNvbG9yOiBcIiNmZmZcIiwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA3MDAsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZmxleFNocmluazogMCB9fT57cy5zdGVwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjMzc0MTUxXCIsIG1hcmdpbkJvdHRvbTogMiB9fT57cy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjNjQ3NDhiXCIsIGxpbmVIZWlnaHQ6IDEuNSB9fT57cy5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vICBSRU5ERVIgUEFHRVNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChhY3RpdmVNZW51KSB7XG4gICAgICBjYXNlIFwiaG9tZVwiOiByZXR1cm4gcmVuZGVySG9tZSgpO1xuICAgICAgY2FzZSBcImNvbnRlbnRzXCI6IHJldHVybiByZW5kZXJDb250ZW50cygpO1xuICAgICAgY2FzZSBcImNvbW11bml0eVwiOiByZXR1cm4gcmVuZGVyQ29tbXVuaXR5KCk7XG4gICAgICBjYXNlIFwicmVzZWFyY2hcIjogcmV0dXJuIHJlbmRlclJlc2VhcmNoKCk7XG4gICAgICBjYXNlIFwic25zLWludGVncmF0aW9uXCI6IHJldHVybiByZW5kZXJTbnNJbnRlZ3JhdGlvbigpO1xuICAgICAgY2FzZSBcIm1lbWJlcnNcIjogcmV0dXJuIHJlbmRlck1lbWJlcnMoKTtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiByZW5kZXJIb21lKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgQVVUSCBTQ1JFRU5TXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICBzZXRBdXRoRXJyb3IoXCJcIik7XG4gICAgaWYgKCFhdXRoRm9ybS5lbWFpbCB8fCAhYXV0aEZvcm0ucGFzc3dvcmQpIHsgc2V0QXV0aEVycm9yKFwi7J2066mU7J286rO8IOu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIpOyByZXR1cm47IH1cbiAgICAvLyBtb2NrOiBhZG1pbkB0ZXN0LmNvbSAvIDEyMzQg4oaSIOymieyLnCDsirnsnbhcbiAgICBpZiAoYXV0aEZvcm0uZW1haWwgPT09IFwiYWRtaW5AdGVzdC5jb21cIiAmJiBhdXRoRm9ybS5wYXNzd29yZCA9PT0gXCIxMjM0XCIpIHtcbiAgICAgIHNldEF1dGhTdGF0ZShcImFwcHJvdmVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBdXRoRXJyb3IoXCLsnbTrqZTsnbwg65iQ64qUIOu5hOuwgOuyiO2YuOqwgCDsmKzrsJTrpbTsp4Ag7JWK7Iq164uI64ukLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKCkgPT4ge1xuICAgIHNldEF1dGhFcnJvcihcIlwiKTtcbiAgICBpZiAoIWF1dGhGb3JtLm5hbWUgfHwgIWF1dGhGb3JtLmVtYWlsIHx8ICFhdXRoRm9ybS5wYXNzd29yZCkgeyBzZXRBdXRoRXJyb3IoXCLrqqjrk6Ag7ZWt66qp7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIik7IHJldHVybjsgfVxuICAgIC8vIG1vY2s6IOqwgOyehSDtm4QgcGVuZGluZyDsg4Htg5xcbiAgICBzZXRNZW1iZXJzTGlzdChwcmV2ID0+IFsuLi5wcmV2LCB7IGlkOiBEYXRlLm5vdygpLCBuYW1lOiBhdXRoRm9ybS5uYW1lLCBlbWFpbDogYXV0aEZvcm0uZW1haWwsIGpvaW5lZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLCBhcHByb3ZhbFN0YXR1czogXCJwZW5kaW5nXCIsIHJvbGU6IFwib3BlcmF0b3JcIiB9XSk7XG4gICAgc2V0QXV0aFN0YXRlKFwicGVuZGluZ1wiKTtcbiAgfTtcblxuICBjb25zdCBhdXRoQ2FyZFN0eWxlID0geyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgYm9yZGVyUmFkaXVzOiAyMCwgcGFkZGluZzogXCI0MHB4IDQ0cHhcIiwgd2lkdGg6IDQwMCwgYm94U2hhZG93OiBcIjAgMjVweCA1MHB4IHJnYmEoMCwwLDAsMC4zNSlcIiB9O1xuXG4gIGlmIChhdXRoU3RhdGUgPT09IFwibG9nZ2VkLW91dFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLCAjMGYwZjIzIDAlLCAjMWExYTNlIDEwMCUpXCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2F1dGhDYXJkU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMjggfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzNiwgaGVpZ2h0OiAzNiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODE4Y2Y4LCAjYzA4NGZjKVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogODAwLCBjb2xvcjogXCIjZmZmXCIgfX0+UzwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxYTFhMmVcIiB9fT5TTlMg64yA7Iuc67O065OcPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxYTFhMmVcIiwgbWFyZ2luQm90dG9tOiA2IH19PuuhnOq3uOyduDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogMjQgfX0+6rSA66as7J6QIOyKueyduOydhCDrsJvsnYAg6rOE7KCV66eMIOygkeq3vCDqsIDriqXtlanri4jri6Q8L2Rpdj5cbiAgICAgICAgICB7YXV0aEVycm9yICYmIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDE0cHhcIiwgYm9yZGVyUmFkaXVzOiA4LCBiYWNrZ3JvdW5kOiBcIiNmZWYyZjJcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmVjYWNhXCIsIGNvbG9yOiBcIiNlZjQ0NDRcIiwgZm9udFNpemU6IDEyLCBtYXJnaW5Cb3R0b206IDE0IH19PnthdXRoRXJyb3J9PC9kaXY+fVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA0IH19PuydtOuplOydvDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi7J2066mU7J28IOyjvOyGjFwiIHZhbHVlPXthdXRoRm9ybS5lbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0QXV0aEZvcm0ocCA9PiAoeyAuLi5wLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkpfSBvbktleURvd249e2UgPT4gZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBoYW5kbGVMb2dpbigpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiM2NDc0OGJcIiwgbWFyZ2luQm90dG9tOiA0IH19Puu5hOuwgOuyiO2YuDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCIgdmFsdWU9e2F1dGhGb3JtLnBhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRBdXRoRm9ybShwID0+ICh7IC4uLnAsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSl9IG9uS2V5RG93bj17ZSA9PiBlLmtleSA9PT0gXCJFbnRlclwiICYmIGhhbmRsZUxvZ2luKCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyAuLi5zdHlsZXMuYnRuKHRydWUpLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjEycHhcIiB9fSBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiAxNiwgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjOTRhM2I4XCIgfX0+XG4gICAgICAgICAgICDqs4TsoJXsnbQg7JeG7Jy87Iug6rCA7JqUP3tcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM2MzY2ZjFcIiwgZm9udFdlaWdodDogNjAwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0QXV0aEZvcm0oeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIG5hbWU6IFwiXCIgfSk7IHNldEF1dGhFcnJvcihcIlwiKTsgc2V0QXV0aFN0YXRlKFwic2lnbnVwXCIpOyB9fT5cbiAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2LCBwYWRkaW5nOiBcIjEwcHggMTRweFwiLCBib3JkZXJSYWRpdXM6IDgsIGJhY2tncm91bmQ6IFwiI2Y4ZmFmY1wiLCBmb250U2l6ZTogMTEsIGNvbG9yOiBcIiM5NGEzYjhcIiB9fT5cbiAgICAgICAgICAgIO2FjOyKpO2KuCDqs4TsoJU6IGFkbWluQHRlc3QuY29tIC8gMTIzNFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoYXV0aFN0YXRlID09PSBcInNpZ251cFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLCAjMGYwZjIzIDAlLCAjMWExYTNlIDEwMCUpXCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2F1dGhDYXJkU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMjggfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzNiwgaGVpZ2h0OiAzNiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODE4Y2Y4LCAjYzA4NGZjKVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogODAwLCBjb2xvcjogXCIjZmZmXCIgfX0+UzwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxYTFhMmVcIiB9fT5TTlMg64yA7Iuc67O065OcPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxYTFhMmVcIiwgbWFyZ2luQm90dG9tOiA2IH19Pu2ajOybkOqwgOyehTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogMjQgfX0+6rCA7J6FIO2bhCDqtIDrpqzsnpAg7Iq57J247J20IOyZhOujjOuQmOuptCDsnbTsmqkg6rCA64ql7ZWp64uI64ukPC9kaXY+XG4gICAgICAgICAge2F1dGhFcnJvciAmJiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxNHB4XCIsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogXCIjZmVmMmYyXCIsIGJvcmRlcjogXCIxcHggc29saWQgI2ZlY2FjYVwiLCBjb2xvcjogXCIjZWY0NDQ0XCIsIGZvbnRTaXplOiAxMiwgbWFyZ2luQm90dG9tOiAxNCB9fT57YXV0aEVycm9yfTwvZGl2Pn1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7snbTrpoQ8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0fSBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHZhbHVlPXthdXRoRm9ybS5uYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRBdXRoRm9ybShwID0+ICh7IC4uLnAsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7snbTrqZTsnbw8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0fSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIuydtOuplOydvCDso7zshoxcIiB2YWx1ZT17YXV0aEZvcm0uZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEF1dGhGb3JtKHAgPT4gKHsgLi4ucCwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjNjQ3NDhiXCIsIG1hcmdpbkJvdHRvbTogNCB9fT7ruYTrsIDrsojtmLg8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0fSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCAoOOyekCDsnbTsg4EpXCIgdmFsdWU9e2F1dGhGb3JtLnBhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRBdXRoRm9ybShwID0+ICh7IC4uLnAsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyAuLi5zdHlsZXMuYnRuKHRydWUpLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjEycHhcIiB9fSBvbkNsaWNrPXtoYW5kbGVTaWdudXB9PlxuICAgICAgICAgICAg6rCA7J6FIOyLoOyyrVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDE2LCBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM5NGEzYjhcIiB9fT5cbiAgICAgICAgICAgIOydtOuvuCDqs4TsoJXsnbQg7J6I7Jy87Iug6rCA7JqUP3tcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM2MzY2ZjFcIiwgZm9udFdlaWdodDogNjAwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0QXV0aEZvcm0oeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIG5hbWU6IFwiXCIgfSk7IHNldEF1dGhFcnJvcihcIlwiKTsgc2V0QXV0aFN0YXRlKFwibG9nZ2VkLW91dFwiKTsgfX0+XG4gICAgICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoYXV0aFN0YXRlID09PSBcInBlbmRpbmdcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDE5NWRlZywgIzBmMGYyMyAwJSwgIzFhMWEzZSAxMDAlKVwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmF1dGhDYXJkU3R5bGUsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA0OCwgbWFyZ2luQm90dG9tOiAxNiB9fT7ij7M8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMWExYTJlXCIsIG1hcmdpbkJvdHRvbTogOCB9fT7sirnsnbgg64yA6riwIOykkTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjNjQ3NDhiXCIsIGxpbmVIZWlnaHQ6IDEuNywgbWFyZ2luQm90dG9tOiAyOCB9fT5cbiAgICAgICAgICAgIOqwgOyehSDsi6Dssq3snbQg7JmE66OM65CY7JeI7Iq164uI64ukLjxiciAvPlxuICAgICAgICAgICAg6rSA66as7J6QIOyKueyduCDtm4Qg64yA7Iuc67O065Oc66W8IOydtOyaqe2VmOyLpCDsiJgg7J6I7Iq164uI64ukLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgLi4uc3R5bGVzLmJ0bihmYWxzZSksIHdpZHRoOiBcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRBdXRoU3RhdGUoXCJsb2dnZWQtb3V0XCIpOyBzZXRBdXRoRm9ybSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgbmFtZTogXCJcIiB9KTsgfX0+XG4gICAgICAgICAgICDroZzqt7jsnbgg7ZmU66m07Jy866GcXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmFwcH0+XG4gICAgICB7LyogU2lkZWJhciAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxvZ299IG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJDb2xsYXBzZWQoIXNpZGViYXJDb2xsYXBzZWQpfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyOCwgaGVpZ2h0OiAyOCwgYm9yZGVyUmFkaXVzOiA4LCBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4MThjZjgsICNjMDg0ZmMpXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBcIiNmZmZcIiwgZmxleFNocmluazogMCB9fT5TPC9kaXY+XG4gICAgICAgICAgeyFzaWRlYmFyQ29sbGFwc2VkICYmIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogNzAwLCBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAyZW1cIiB9fT5TTlMg64yA7Iuc67O065OcPC9zcGFuPn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMFwiLCBmbGV4OiAxLCBvdmVyZmxvd1k6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IHN0eWxlPXtzdHlsZXMubWVudUl0ZW0oYWN0aXZlTWVudSA9PT0gaXRlbS5pZCl9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoaXRlbS5pZCl9PlxuICAgICAgICAgICAgICA8aXRlbS5pY29uIC8+XG4gICAgICAgICAgICAgIHshc2lkZWJhckNvbGxhcHNlZCAmJiA8c3Bhbj57aXRlbS5sYWJlbH08L3NwYW4+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7Lyog6rSA66asIOyEueyFmCDqtazrtoTshKAgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNmZmZmZmYxMlwiLCBtYXJnaW46IFwiMTBweCAwXCIgfX0gLz5cbiAgICAgICAgICB7IXNpZGViYXJDb2xsYXBzZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjRweCAyMHB4IDZweFwiLCBmb250U2l6ZTogMTAsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzQ3NTU2OVwiLCBsZXR0ZXJTcGFjaW5nOiBcIjAuMDhlbVwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19PlxuICAgICAgICAgICAgICDqtIDrpqxcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1lbnVJdGVtKGFjdGl2ZU1lbnUgPT09IFwic25zLWludGVncmF0aW9uXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KFwic25zLWludGVncmF0aW9uXCIpfT5cbiAgICAgICAgICAgIDxJY29ucy5LZXkgLz5cbiAgICAgICAgICAgIHshc2lkZWJhckNvbGxhcHNlZCAmJiA8c3Bhbj7sl7Drj5kg6rSA66asPC9zcGFuPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubWVudUl0ZW0oYWN0aXZlTWVudSA9PT0gXCJtZW1iZXJzXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KFwibWVtYmVyc1wiKX0+XG4gICAgICAgICAgICA8SWNvbnMuU2V0dGluZ3MgLz5cbiAgICAgICAgICAgIHshc2lkZWJhckNvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDYgfX0+XG4gICAgICAgICAgICAgICAg7ZqM7JuQIOq0gOumrFxuICAgICAgICAgICAgICAgIHttZW1iZXJzTGlzdC5maWx0ZXIobSA9PiBtLmFwcHJvdmFsU3RhdHVzID09PSBcInBlbmRpbmdcIikubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtaW5XaWR0aDogMTYsIGhlaWdodDogMTYsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogXCIjZWY0NDQ0XCIsIGNvbG9yOiBcIiNmZmZcIiwgZm9udFNpemU6IDksIGZvbnRXZWlnaHQ6IDcwMCwgcGFkZGluZzogXCIwIDRweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7bWVtYmVyc0xpc3QuZmlsdGVyKG0gPT4gbS5hcHByb3ZhbFN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclRvcDogXCIxcHggc29saWQgI2ZmZmZmZjEyXCIsIHBhZGRpbmc6IFwiMTJweCAwXCIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMCwgcGFkZGluZzogc2lkZWJhckNvbGxhcHNlZCA/IFwiMTBweCAxOHB4XCIgOiBcIjEwcHggMjBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBdXRoU3RhdGUoXCJsb2dnZWQtb3V0XCIpfT5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzk0YTNiOFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNFwiLz48cG9seWxpbmUgcG9pbnRzPVwiMTYgMTcgMjEgMTIgMTYgN1wiLz48bGluZSB4MT1cIjIxXCIgeTE9XCIxMlwiIHgyPVwiOVwiIHkyPVwiMTJcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIHshc2lkZWJhckNvbGxhcHNlZCAmJiA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiBcIiM5NGEzYjhcIiB9fT7roZzqt7jslYTsm4M8L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFpbiBDb250ZW50ICovfVxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7cmVuZGVyUGFnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6IkM6L1VzZXJzL2toanllL09uZURyaXZlL+uwlO2DlSDtmZTrqbQvc25zLWRhc2hib2FyZC1zdHVkeS1tYWluL3Nucy1kYXNoYm9hcmQtc3R1ZHktbWFpbi9kYXNoYm9hcmQuanN4In0=