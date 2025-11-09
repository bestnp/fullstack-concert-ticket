(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelReservation",
    ()=>cancelReservation,
    "createConcert",
    ()=>createConcert,
    "createUser",
    ()=>createUser,
    "deleteConcert",
    ()=>deleteConcert,
    "ensureDemoUser",
    ()=>ensureDemoUser,
    "getConcerts",
    ()=>getConcerts,
    "getReservationHistory",
    ()=>getReservationHistory,
    "getUsers",
    ()=>getUsers,
    "reserveConcert",
    ()=>reserveConcert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000") ?? 'http://localhost:3001';
async function request(path, options = {}) {
    const { json, headers, ...rest } = options;
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...rest,
        headers: {
            'Content-Type': 'application/json',
            ...headers ?? {}
        },
        body: json !== undefined ? JSON.stringify(json) : rest.body
    });
    if (!response.ok) {
        let message = response.statusText;
        try {
            const errorBody = await response.json();
            message = errorBody.message ?? message;
        } catch  {
        // ignore JSON parse errors
        }
        throw new Error(message);
    }
    if (response.status === 204) {
        // @ts-expect-error – allow void return
        return undefined;
    }
    return response.json();
}
async function getConcerts(params) {
    const searchParams = new URLSearchParams();
    if (params?.userId) {
        searchParams.set('userId', params.userId);
    }
    const query = searchParams.toString();
    const path = `/concerts${query ? `?${query}` : ''}`;
    return request(path);
}
async function createConcert(input) {
    return request('/concerts', {
        method: 'POST',
        json: input
    });
}
async function deleteConcert(concertId) {
    return request(`/concerts/${concertId}`, {
        method: 'DELETE'
    });
}
async function reserveConcert(input) {
    return request('/reservations', {
        method: 'POST',
        json: input
    });
}
async function cancelReservation(input) {
    return request('/reservations/cancel', {
        method: 'POST',
        json: input
    });
}
async function getReservationHistory(userId) {
    const path = userId ? `/reservations/history?userId=${encodeURIComponent(userId)}` : '/reservations/history';
    return request(path);
}
async function getUsers() {
    return request('/users');
}
async function createUser(input) {
    return request('/users', {
        method: 'POST',
        json: input
    });
}
const DEMO_USER_EMAIL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_USER_EMAIL ?? 'sara.john@example.com';
const DEMO_USER_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_USER_NAME ?? 'Sara John';
async function ensureDemoUser() {
    const users = await getUsers();
    const existing = users.find((user)=>user.email === DEMO_USER_EMAIL);
    if (existing) {
        return existing;
    }
    return createUser({
        email: DEMO_USER_EMAIL,
        fullName: DEMO_USER_NAME,
        role: 'USER'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/AwardIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AwardIcon",
    ()=>AwardIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function AwardIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "09e5470920ffae7af55af2a73cd0cd6b949930dc298fa2e33b2343f90f4d0459") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09e5470920ffae7af55af2a73cd0cd6b949930dc298fa2e33b2343f90f4d0459";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 40 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.9997 24.9993C26.443 24.9993 31.6663 19.776 31.6663 13.3327C31.6663 6.88936 26.443 1.66602 19.9997 1.66602C13.5564 1.66602 8.33301 6.88936 8.33301 13.3327C8.33301 19.776 13.5564 24.9993 19.9997 24.9993Z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/AwardIcon.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.6837 23.1495L11.667 38.3328L20.0003 33.3328L28.3337 38.3328L26.317 23.1328",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/AwardIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] !== className || $[10] !== rest || $[11] !== size || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/AwardIcon.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[9] = className;
        $[10] = rest;
        $[11] = size;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = AwardIcon;
var _c;
__turbopack_context__.k.register(_c, "AwardIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/CheckCircleIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircleIcon",
    ()=>CheckCircleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CheckCircleIcon(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "931e28a76544ac707e655db6028e581dab2541dcd0fa8773720fff9f4bccf833") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "931e28a76544ac707e655db6028e581dab2541dcd0fa8773720fff9f4bccf833";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 20 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    const clipPathId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const t3 = `url(#${clipPathId})`;
    let t4;
    if ($[6] !== color) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 0.3125C4.64973 0.3125 0.3125 4.64973 0.3125 10C0.3125 15.3503 4.64973 19.6875 10 19.6875C15.3503 19.6875 19.6875 15.3503 19.6875 10C19.6875 4.64973 15.3503 0.3125 10 0.3125ZM10 2.1875C14.3177 2.1875 17.8125 5.68168 17.8125 10C17.8125 14.3177 14.3183 17.8125 10 17.8125C5.68234 17.8125 2.1875 14.3183 2.1875 10C2.1875 5.68234 5.68168 2.1875 10 2.1875ZM15.4767 7.27605L14.5964 6.38863C14.4141 6.20484 14.1173 6.20363 13.9335 6.38598L8.41195 11.8632L6.07633 9.50859C5.89402 9.3248 5.59723 9.32359 5.41344 9.5059L4.52598 10.3862C4.34219 10.5685 4.34098 10.8653 4.52332 11.0491L8.06945 14.624C8.25176 14.8078 8.54855 14.809 8.73234 14.6266L15.4741 7.93898C15.6579 7.75664 15.659 7.45984 15.4767 7.27605Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/icons/CheckCircleIcon.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/icons/CheckCircleIcon.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            width: "20",
            height: "20",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/src/icons/CheckCircleIcon.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== clipPathId) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                id: clipPathId,
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/icons/CheckCircleIcon.tsx",
                lineNumber: 64,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/icons/CheckCircleIcon.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[12] = clipPathId;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== className || $[15] !== rest || $[16] !== size || $[17] !== t5 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/CheckCircleIcon.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[14] = className;
        $[15] = rest;
        $[16] = size;
        $[17] = t5;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_s(CheckCircleIcon, "o9rA8l5dG+MR/3MtUIBvK0tSLe0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = CheckCircleIcon;
var _c;
__turbopack_context__.k.register(_c, "CheckCircleIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/HomeIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeIcon",
    ()=>HomeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function HomeIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "ff93b3010178228038b3de34d0910a93f3015131f689b559c54e2474079b7c89") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ff93b3010178228038b3de34d0910a93f3015131f689b559c54e2474079b7c89";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 24 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/HomeIcon.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 22V12H15V22",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/HomeIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] !== className || $[10] !== rest || $[11] !== size || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/HomeIcon.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[9] = className;
        $[10] = rest;
        $[11] = size;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = HomeIcon;
var _c;
__turbopack_context__.k.register(_c, "HomeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/InboxIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InboxIcon",
    ()=>InboxIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function InboxIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "f03216e9d55c9d6bb6ab20485467e843e45566bff133740645ef53e99f1dd05e") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f03216e9d55c9d6bb6ab20485467e843e45566bff133740645ef53e99f1dd05e";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 24 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 12H16L14 15H10L8 12H2",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/InboxIcon.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/InboxIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] !== className || $[10] !== rest || $[11] !== size || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/InboxIcon.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[9] = className;
        $[10] = rest;
        $[11] = size;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = InboxIcon;
var _c;
__turbopack_context__.k.register(_c, "InboxIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/LogOutIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOutIcon",
    ()=>LogOutIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function LogOutIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "42cefb7be24096f4b7c48f9d81fd44205d37124a4bf4742cd06b951fa9016e0c") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42cefb7be24096f4b7c48f9d81fd44205d37124a4bf4742cd06b951fa9016e0c";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 24 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    let t5;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/LogOutIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 17L21 12L16 7",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/LogOutIcon.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12H9",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/LogOutIcon.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] !== className || $[11] !== rest || $[12] !== size || $[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/LogOutIcon.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[10] = className;
        $[11] = rest;
        $[12] = size;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c = LogOutIcon;
var _c;
__turbopack_context__.k.register(_c, "LogOutIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/RefreshCcwIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCcwIcon",
    ()=>RefreshCcwIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function RefreshCcwIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "c12cccea73b63ea13a73c093f60b00ff87375c956b57c85dfb7cfbdd5e3c9581") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c12cccea73b63ea13a73c093f60b00ff87375c956b57c85dfb7cfbdd5e3c9581";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 24 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    let t5;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 4V10H7",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/RefreshCcwIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23 20V14H17",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/RefreshCcwIcon.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.49 8.99959C19.9828 7.56637 19.1209 6.28499 17.9845 5.27501C16.8482 4.26502 15.4745 3.55935 13.9917 3.22385C12.5089 2.88834 10.9652 2.93393 9.50481 3.35636C8.04437 3.77879 6.71475 4.5643 5.64 5.63959L1 9.99959M23 13.9996L18.36 18.3596C17.2853 19.4349 15.9556 20.2204 14.4952 20.6428C13.0348 21.0652 11.4911 21.1108 10.0083 20.7753C8.52547 20.4398 7.1518 19.7342 6.01547 18.7242C4.87913 17.7142 4.01717 16.4328 3.51 14.9996",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/RefreshCcwIcon.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] !== className || $[11] !== rest || $[12] !== size || $[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/RefreshCcwIcon.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[10] = className;
        $[11] = rest;
        $[12] = size;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c = RefreshCcwIcon;
var _c;
__turbopack_context__.k.register(_c, "RefreshCcwIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/SaveIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveIcon",
    ()=>SaveIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function SaveIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "ada513bf26854cecf98dc52dfd76e357292cb3f21c4e514d58e790c6a5d020b9") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ada513bf26854cecf98dc52dfd76e357292cb3f21c4e514d58e790c6a5d020b9";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 24 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    let t5;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/SaveIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 21V13H7V21",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/SaveIcon.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 3V8H15",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/SaveIcon.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] !== className || $[11] !== rest || $[12] !== size || $[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/SaveIcon.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[10] = className;
        $[11] = rest;
        $[12] = size;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c = SaveIcon;
var _c;
__turbopack_context__.k.register(_c, "SaveIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/Trash2Icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2Icon",
    ()=>Trash2Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Trash2Icon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "e85cb28b54a7760d9f255224066dec433dbfe035b343896c1f0e3e686d3780f5") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e85cb28b54a7760d9f255224066dec433dbfe035b343896c1f0e3e686d3780f5";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 24 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 6H5H21",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/Trash2Icon.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/Trash2Icon.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 11V17",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/Trash2Icon.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 11V17",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/Trash2Icon.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
    }
    let t7;
    if ($[11] !== className || $[12] !== rest || $[13] !== size || $[14] !== t3 || $[15] !== t4 || $[16] !== t5 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/Trash2Icon.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[11] = className;
        $[12] = rest;
        $[13] = size;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    return t7;
}
_c = Trash2Icon;
var _c;
__turbopack_context__.k.register(_c, "Trash2Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/UserIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserIcon",
    ()=>UserIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function UserIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "0e9f15236ecf950b93b89751240e660ce1ca444a69a2bb9294b05631f4baf50c") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e9f15236ecf950b93b89751240e660ce1ca444a69a2bb9294b05631f4baf50c";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 32 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7478 20 21.3333 20H10.6667C9.25219 20 7.89563 20.5619 6.89544 21.5621C5.89525 22.5623 5.33334 23.9188 5.33334 25.3333V28",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/UserIcon.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/UserIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] !== className || $[10] !== rest || $[11] !== size || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/UserIcon.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[9] = className;
        $[10] = rest;
        $[11] = size;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = UserIcon;
var _c;
__turbopack_context__.k.register(_c, "UserIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/XCircleIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircleIcon",
    ()=>XCircleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function XCircleIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "1aa973b678936fe88e215c91526a84a9e1231bac9428234a2b4418eaccda2048") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aa973b678936fe88e215c91526a84a9e1231bac9428234a2b4418eaccda2048";
    }
    let className;
    let rest;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, secondaryColor: t3, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const size = t1 === undefined ? 48 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    const secondaryColor = t3 === undefined ? "white" : t3;
    let t4;
    if ($[7] !== color) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/icons/XCircleIcon.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[7] = color;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== secondaryColor) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M26.5444 24L32.4724 18.072C32.7903 17.7308 32.9634 17.2795 32.9552 16.8132C32.947 16.3468 32.7581 15.9019 32.4283 15.5721C32.0985 15.2423 31.6535 15.0534 31.1872 15.0452C30.7209 15.037 30.2696 15.2101 29.9284 15.528L24.0004 21.456L18.0724 15.528C17.7311 15.2101 17.2798 15.037 16.8135 15.0452C16.3472 15.0534 15.9023 15.2423 15.5725 15.5721C15.2427 15.9019 15.0538 16.3468 15.0455 16.8132C15.0373 17.2795 15.2104 17.7308 15.5284 18.072L21.4564 24L15.5284 29.928C15.1913 30.2655 15.002 30.723 15.002 31.2C15.002 31.677 15.1913 32.1345 15.5284 32.472C15.8659 32.8091 16.3234 32.9984 16.8004 32.9984C17.2774 32.9984 17.7349 32.8091 18.0724 32.472L24.0004 26.544L29.9284 32.472C30.2659 32.8091 30.7234 32.9984 31.2004 32.9984C31.6774 32.9984 32.1349 32.8091 32.4724 32.472C32.8094 32.1345 32.9988 31.677 32.9988 31.2C32.9988 30.723 32.8094 30.2655 32.4724 29.928L26.5444 24Z",
            fill: secondaryColor
        }, void 0, false, {
            fileName: "[project]/src/icons/XCircleIcon.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[9] = secondaryColor;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== className || $[12] !== rest || $[13] !== size || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/XCircleIcon.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[11] = className;
        $[12] = rest;
        $[13] = size;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c = XCircleIcon;
var _c;
__turbopack_context__.k.register(_c, "XCircleIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/XCircleLightIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircleLightIcon",
    ()=>XCircleLightIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function XCircleLightIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "95f77f6a158be1b711f5b5acd291d02776df66471e50ad3e44d06dbeb20c77bd") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f77f6a158be1b711f5b5acd291d02776df66471e50ad3e44d06dbeb20c77bd";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 40 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    let t4;
    let t5;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/XCircleLightIcon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M25 15L15 25",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/XCircleLightIcon.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 15L25 25",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/XCircleLightIcon.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] !== className || $[11] !== rest || $[12] !== size || $[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/XCircleLightIcon.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[10] = className;
        $[11] = rest;
        $[12] = size;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c = XCircleLightIcon;
var _c;
__turbopack_context__.k.register(_c, "XCircleLightIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/XIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>XIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function XIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "4fb779f2f21d1f1fda57c1ef7462f625c76c5c457d46968d01f2c5f42b4beaab") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fb779f2f21d1f1fda57c1ef7462f625c76c5c457d46968d01f2c5f42b4beaab";
    }
    let className;
    let rest;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, className, ...rest } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = rest;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        rest = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const size = t1 === undefined ? 28 : t1;
    const color = t2 === undefined ? "currentColor" : t2;
    let t3;
    if ($[6] !== color) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.8334 9.34175L18.6584 8.16675L14.0001 12.8251L9.34175 8.16675L8.16675 9.34175L12.8251 14.0001L8.16675 18.6584L9.34175 19.8334L14.0001 15.1751L18.6584 19.8334L19.8334 18.6584L15.1751 14.0001L19.8334 9.34175Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/icons/XIcon.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[6] = color;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== className || $[9] !== rest || $[10] !== size || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 28 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            ...rest,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/icons/XIcon.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[8] = className;
        $[9] = rest;
        $[10] = size;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = XIcon;
var _c;
__turbopack_context__.k.register(_c, "XIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$AwardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/AwardIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$CheckCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/CheckCircleIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/HomeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$InboxIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/InboxIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$LogOutIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/LogOutIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$RefreshCcwIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/RefreshCcwIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$SaveIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/SaveIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Trash2Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/Trash2Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/UserIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/XCircleIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XCircleLightIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/XCircleLightIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/XIcon.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const VARIANT_STYLES = {
    primary: "bg-[#1692EC] text-white border-transparent hover:bg-[#147ED0]",
    danger: "bg-[#F96464] text-white border-transparent hover:bg-[#e25656]",
    neutral: "bg-gray-200 text-gray-900 border-transparent hover:bg-gray-300",
    outline: "bg-white text-[#101828] border-[#D0D5DD] hover:bg-[#F7F9FB]"
};
const SIZE_STYLES = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-7 py-4 text-lg"
};
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "6c1bd6a1da4887f9c8425eac7690bdd815234aa473af994f3776b35540978614") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c1bd6a1da4887f9c8425eac7690bdd815234aa473af994f3776b35540978614";
    }
    let Icon;
    let backgroundColor;
    let borderColor;
    let className;
    let rest;
    let t1;
    let t2;
    let t3;
    let text;
    let textColor;
    if ($[1] !== t0) {
        ({ icon: Icon, text, variant: t1, iconPosition: t2, size: t3, backgroundColor, textColor, borderColor, className, ...rest } = t0);
        $[1] = t0;
        $[2] = Icon;
        $[3] = backgroundColor;
        $[4] = borderColor;
        $[5] = className;
        $[6] = rest;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = text;
        $[11] = textColor;
    } else {
        Icon = $[2];
        backgroundColor = $[3];
        borderColor = $[4];
        className = $[5];
        rest = $[6];
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        text = $[10];
        textColor = $[11];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const iconPosition = t2 === undefined ? "left" : t2;
    const size = t3 === undefined ? "md" : t3;
    const variantClass = VARIANT_STYLES[variant];
    const sizeClass = SIZE_STYLES[size];
    const hasIcon = Boolean(Icon);
    const iconColor = textColor ?? "currentColor";
    let t4;
    if ($[12] !== Icon || $[13] !== hasIcon || $[14] !== iconColor) {
        t4 = hasIcon && Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 20,
            color: iconColor,
            className: "shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/Button.tsx",
            lineNumber: 90,
            columnNumber: 28
        }, this) : null;
        $[12] = Icon;
        $[13] = hasIcon;
        $[14] = iconColor;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    const iconElement = t4;
    const contentClass = hasIcon ? "justify-start" : "justify-center";
    let t5;
    if ($[16] !== backgroundColor || $[17] !== variant) {
        t5 = backgroundColor && variant !== "outline" ? {
            backgroundColor
        } : {};
        $[16] = backgroundColor;
        $[17] = variant;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== textColor) {
        t6 = textColor ? {
            color: textColor
        } : {};
        $[19] = textColor;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== borderColor) {
        t7 = borderColor ? {
            borderColor
        } : {};
        $[21] = borderColor;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== t5 || $[24] !== t6 || $[25] !== t7) {
        t8 = {
            ...t5,
            ...t6,
            ...t7
        };
        $[23] = t5;
        $[24] = t6;
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    const dynamicStyle = t8;
    const t9 = `inline-flex items-center ${contentClass} gap-3 rounded-[4px] border font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${variantClass} ${sizeClass} ${className ?? ""}`;
    let t10;
    if ($[27] !== t9) {
        t10 = t9.trim();
        $[27] = t9;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    const t11 = iconElement && iconPosition === "left" ? iconElement : null;
    let t12;
    if ($[29] !== text) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/Button.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[29] = text;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    const t13 = iconElement && iconPosition === "right" ? iconElement : null;
    let t14;
    if ($[31] !== dynamicStyle || $[32] !== rest || $[33] !== t10 || $[34] !== t11 || $[35] !== t12 || $[36] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            style: dynamicStyle,
            className: t10,
            ...rest,
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Button.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[31] = dynamicStyle;
        $[32] = rest;
        $[33] = t10;
        $[34] = t11;
        $[35] = t12;
        $[36] = t13;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    return t14;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DashboardCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardCard",
    ()=>DashboardCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const SIZE_DIMENSIONS = {
    base: {
        width: 350,
        height: 234
    },
    small: {
        width: 300,
        height: 200
    },
    large: {
        width: 420,
        height: 260
    }
};
function DashboardCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "c675434535dbe054848f7ff2446501888426281d35c2eea4598058bfcdba4dfc") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c675434535dbe054848f7ff2446501888426281d35c2eea4598058bfcdba4dfc";
    }
    const { icon: Icon, text, number, color: t1, textColor: t2, size: t3, className } = t0;
    const color = t1 === undefined ? "var(--color-reserve)" : t1;
    const textColor = t2 === undefined ? "#ffffff" : t2;
    const size = t3 === undefined ? "base" : t3;
    const dimensions = SIZE_DIMENSIONS[size];
    let t4;
    if ($[1] !== color || $[2] !== dimensions.height || $[3] !== dimensions.width || $[4] !== textColor) {
        t4 = {
            width: dimensions.width,
            height: dimensions.height,
            backgroundColor: color,
            color: textColor
        };
        $[1] = color;
        $[2] = dimensions.height;
        $[3] = dimensions.width;
        $[4] = textColor;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `flex flex-col justify-center rounded-2xl p-6 shadow-sm ${className ?? ""}`;
    let t6;
    if ($[6] !== t5) {
        t6 = t5.trim();
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== Icon || $[9] !== textColor) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 40,
                color: textColor
            }, void 0, false, {
                fileName: "[project]/src/components/DashboardCard.tsx",
                lineNumber: 82,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/DashboardCard.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[8] = Icon;
        $[9] = textColor;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== textColor) {
        t8 = {
            color: textColor
        };
        $[11] = textColor;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t8 || $[14] !== text) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[24px] font-regular",
            style: t8,
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/DashboardCard.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = text;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== textColor) {
        t10 = {
            color: textColor
        };
        $[16] = textColor;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== number || $[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[60px] font-regular",
            style: t10,
            children: number
        }, void 0, false, {
            fileName: "[project]/src/components/DashboardCard.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[18] = number;
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t7 || $[23] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center gap-4 text-center",
            children: [
                t7,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DashboardCard.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t7;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t12 || $[26] !== t4 || $[27] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            style: t4,
            className: t6,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/DashboardCard.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t4;
        $[27] = t6;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    return t13;
}
_c = DashboardCard;
var _c;
__turbopack_context__.k.register(_c, "DashboardCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Tabs(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "0485d80a7c2da630d5cc0fdfd6d436c31ee5134605914b8923eebff430fc70e3") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0485d80a7c2da630d5cc0fdfd6d436c31ee5134605914b8923eebff430fc70e3";
    }
    const { overviewLabel, createLabel, defaultActive: t1, onChange } = t0;
    const defaultActive = t1 === undefined ? "overview" : t1;
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultActive);
    let t2;
    if ($[1] !== onChange) {
        t2 = ({
            "Tabs[handleClick]": (key)=>{
                setActive(key);
                onChange?.(key);
            }
        })["Tabs[handleClick]"];
        $[1] = onChange;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleClick = t2;
    let t3;
    if ($[3] !== active) {
        t3 = ({
            "Tabs[tabClass]": (key_0)=>`relative cursor-pointer px-3 pb-2 text-lg font-regular transition-colors ${active === key_0 ? "text-[#1692ec] font-semibold" : "text-[#5C5C5C]"}`
        })["Tabs[tabClass]"];
        $[3] = active;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const tabClass = t3;
    const t4 = tabClass("overview");
    let t5;
    if ($[5] !== handleClick) {
        t5 = ({
            "Tabs[<button>.onClick]": ()=>handleClick("overview")
        })["Tabs[<button>.onClick]"];
        $[5] = handleClick;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== active) {
        t6 = active === "overview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#1692ec]"
        }, void 0, false, {
            fileName: "[project]/src/components/Tabs.tsx",
            lineNumber: 66,
            columnNumber: 34
        }, this) : null;
        $[7] = active;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== overviewLabel || $[10] !== t4 || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t4,
            onClick: t5,
            children: [
                overviewLabel,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Tabs.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = overviewLabel;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = tabClass("create");
    let t9;
    if ($[14] !== handleClick) {
        t9 = ({
            "Tabs[<button>.onClick]": ()=>handleClick("create")
        })["Tabs[<button>.onClick]"];
        $[14] = handleClick;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== active) {
        t10 = active === "create" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#1692ec]"
        }, void 0, false, {
            fileName: "[project]/src/components/Tabs.tsx",
            lineNumber: 96,
            columnNumber: 33
        }, this) : null;
        $[16] = active;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== createLabel || $[19] !== t10 || $[20] !== t8 || $[21] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t8,
            onClick: t9,
            children: [
                createLabel,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Tabs.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[18] = createLabel;
        $[19] = t10;
        $[20] = t8;
        $[21] = t9;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-8 ",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Tabs.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t7;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    return t12;
}
_s(Tabs, "+T+JhJAYsainQiB+RBNI4n61mlw=");
_c = Tabs;
var _c;
__turbopack_context__.k.register(_c, "Tabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
;
;
;
function Modal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "8f136eef84c58263f5656c54f11d8a95eecf1fe177514c5ff294e38879d98e03") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f136eef84c58263f5656c54f11d8a95eecf1fe177514c5ff294e38879d98e03";
    }
    const { open, title, description, highlight, icon: Icon, iconColor: t1, iconSize: t2, onClose, primaryAction, secondaryAction } = t0;
    const iconColor = t1 === undefined ? "#F96464" : t1;
    const iconSize = t2 === undefined ? 44 : t2;
    if (!open) {
        return null;
    }
    let t3;
    if ($[1] !== onClose) {
        t3 = ({
            "Modal[handleContainerClick]": ()=>{
                onClose?.();
            }
        })["Modal[handleContainerClick]"];
        $[1] = onClose;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const handleContainerClick = t3;
    const handleContentClick = _ModalHandleContentClick;
    let t4;
    if ($[3] !== Icon || $[4] !== iconColor || $[5] !== iconSize) {
        t4 = Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: iconSize,
                color: iconColor
            }, void 0, false, {
                fileName: "[project]/src/components/Modal.tsx",
                lineNumber: 64,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 64,
            columnNumber: 17
        }, this) : null;
        $[3] = Icon;
        $[4] = iconColor;
        $[5] = iconSize;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-6 text-2xl font-semibold text-black",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-base text-gray-600",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[9] = description;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== highlight) {
        t7 = highlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xl font-semibold text-black",
            children: [
                "“",
                highlight,
                "”"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 90,
            columnNumber: 22
        }, this) : null;
        $[11] = highlight;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== secondaryAction) {
        t8 = secondaryAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            text: secondaryAction.text,
            icon: secondaryAction.icon,
            variant: secondaryAction.variant ?? "outline",
            className: "w-full sm:w-40",
            onClick: secondaryAction.onClick
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 98,
            columnNumber: 28
        }, this) : null;
        $[13] = secondaryAction;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const t9 = primaryAction.icon;
    const t10 = primaryAction.variant ?? "danger";
    let t11;
    if ($[15] !== primaryAction.onClick || $[16] !== primaryAction.text || $[17] !== t10 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            text: primaryAction.text,
            icon: t9,
            variant: t10,
            className: "w-full sm:w-40",
            onClick: primaryAction.onClick
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[15] = primaryAction.onClick;
        $[16] = primaryAction.text;
        $[17] = t10;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11 || $[21] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t8;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t4 || $[25] !== t5 || $[26] !== t6 || $[27] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-[24px] bg-white p-10 shadow-xl",
            onClick: handleContentClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center",
                children: [
                    t4,
                    t5,
                    t6,
                    t7,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modal.tsx",
                lineNumber: 128,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t4;
        $[25] = t5;
        $[26] = t6;
        $[27] = t7;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== handleContainerClick || $[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4",
            onClick: handleContainerClick,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[29] = handleContainerClick;
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    return t14;
}
_c = Modal;
function _ModalHandleContentClick(event) {
    event.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/icons/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$CheckCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/CheckCircleIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/XIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const VARIANT_STYLES = {
    success: "bg-[#D0E7D2] text-[#000000]",
    error: "bg-[#FEE2E2] text-[#000000]",
    info: "bg-[#E0F2FE] text-[#000000]"
};
function Toast(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "ba3a4e698403a4c84b4fb2a6fa15a215a55c839b509bf90af8070e5955a4274d") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba3a4e698403a4c84b4fb2a6fa15a215a55c839b509bf90af8070e5955a4274d";
    }
    const { open, message, onClose, duration: t1, variant: t2 } = t0;
    const duration = t1 === undefined ? 3000 : t1;
    const variant = t2 === undefined ? "success" : t2;
    let t3;
    let t4;
    if ($[1] !== duration || $[2] !== onClose || $[3] !== open) {
        t3 = ({
            "Toast[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const timeout = window.setTimeout({
                    "Toast[useEffect() > window.setTimeout()]": ()=>{
                        onClose();
                    }
                }["Toast[useEffect() > window.setTimeout()]"], duration);
                return ()=>window.clearTimeout(timeout);
            }
        })["Toast[useEffect()]"];
        t4 = [
            open,
            duration,
            onClose
        ];
        $[1] = duration;
        $[2] = onClose;
        $[3] = open;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (!open) {
        return null;
    }
    const t5 = `flex min-w-[240px] max-w-sm min-h-[52px] max-h-[52px] items-center gap-3 rounded-lg px-4 py-3 shadow-md ${VARIANT_STYLES[variant]}`;
    let t6;
    if ($[6] !== variant) {
        t6 = variant === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            className: "text-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$CheckCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircleIcon"], {
                size: 20,
                color: "#00A743"
            }, void 0, false, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 69,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 69,
            columnNumber: 34
        }, this) : variant === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            className: "text-lg",
            children: "⚠️"
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 69,
            columnNumber: 156
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            className: "text-lg",
            children: "ℹ️"
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 69,
            columnNumber: 213
        }, this);
        $[6] = variant;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== message) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex-1 text-sm font-medium",
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[8] = message;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {
            size: 20,
            color: "#1E4620"
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== onClose) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "text-sm font-semibold text-current transition-opacity hover:opacity-70",
            "aria-label": "Close notification",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[11] = onClose;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t5 || $[14] !== t6 || $[15] !== t7 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-6 right-6 z-50 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t5,
                children: [
                    t6,
                    t7,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 100,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Toast.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/icons/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/HomeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$InboxIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/InboxIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$LogOutIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/LogOutIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$RefreshCcwIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/RefreshCcwIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const NAVIGATION = {
    admin: [
        {
            key: 'home',
            label: 'Home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeIcon"],
            href: '/'
        },
        {
            key: 'history',
            label: 'History',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$InboxIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InboxIcon"],
            href: '/history'
        }
    ],
    user: [
        {
            key: 'user-home',
            label: 'Home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeIcon"],
            href: '/user'
        },
        {
            key: 'user-history',
            label: 'History',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$InboxIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InboxIcon"],
            href: '/user/history'
        }
    ]
};
const ROLE_TITLE = {
    admin: 'Admin',
    user: 'User'
};
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "bcf5942b294e7cb845f78bd6173d73a814acabbe370b4de7d7ecca992fe5cf82") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bcf5942b294e7cb845f78bd6173d73a814acabbe370b4de7d7ecca992fe5cf82";
    }
    const { initialRole: t1 } = t0;
    const initialRole = t1 === undefined ? "admin" : t1;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialRole);
    const determineKey = _SidebarDetermineKey;
    let t2;
    if ($[1] !== initialRole || $[2] !== pathname) {
        t2 = ({
            "Sidebar[useState()]": ()=>determineKey(initialRole, pathname)
        })["Sidebar[useState()]"];
        $[1] = initialRole;
        $[2] = pathname;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [activeKey, setActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const navItems = NAVIGATION[role];
    let t3;
    let t4;
    if ($[4] !== pathname || $[5] !== role) {
        t3 = ({
            "Sidebar[useEffect()]": ()=>{
                setActiveKey(determineKey(role, pathname));
            }
        })["Sidebar[useEffect()]"];
        t4 = [
            pathname,
            role
        ];
        $[4] = pathname;
        $[5] = role;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== router) {
        t5 = ({
            "Sidebar[handleNavClick]": (item_0)=>{
                setActiveKey(item_0.key);
                if (item_0.href) {
                    router.push(item_0.href);
                }
            }
        })["Sidebar[handleNavClick]"];
        $[8] = router;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleNavClick = t5;
    let t6;
    if ($[10] !== role || $[11] !== router) {
        t6 = ({
            "Sidebar[handleSwitchRole]": ()=>{
                setRole({
                    "Sidebar[handleSwitchRole > setRole()]": (prev)=>{
                        const nextRole = prev === "admin" ? "user" : "admin";
                        setActiveKey(NAVIGATION[nextRole][0]?.key ?? "");
                        return nextRole;
                    }
                }["Sidebar[handleSwitchRole > setRole()]"]);
                const nextRoute = role === "admin" ? "/user" : "/";
                router.push(nextRoute);
            }
        })["Sidebar[handleSwitchRole]"];
        $[10] = role;
        $[11] = router;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleSwitchRole = t6;
    const currentRoleTitle = ROLE_TITLE[role];
    const switchLabel = role === "admin" ? "Switch to user" : "Switch to admin";
    let t7;
    if ($[13] !== currentRoleTitle) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[40px] font-semibold text-black p-[24px] mt-[40px]",
                children: currentRoleTitle
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 136,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[13] = currentRoleTitle;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== activeKey || $[16] !== handleNavClick || $[17] !== navItems) {
        let t9;
        if ($[19] !== activeKey || $[20] !== handleNavClick) {
            t9 = ({
                "Sidebar[navItems.map()]": (item_1)=>{
                    const IconComponent = item_1.icon;
                    const isActive = activeKey === item_1.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "Sidebar[navItems.map() > <button>.onClick]": ()=>handleNavClick(item_1)
                        }["Sidebar[navItems.map() > <button>.onClick]"],
                        className: `flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium transition-colors ${isActive ? "bg-[#EAF5F9] text-black" : "text-black hover:bg-gray-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                size: 20,
                                color: isActive ? "black" : "currentColor",
                                className: "shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 152,
                                columnNumber: 276
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item_1.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 152,
                                columnNumber: 368
                            }, this)
                        ]
                    }, item_1.key, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 150,
                        columnNumber: 18
                    }, this);
                }
            })["Sidebar[navItems.map()]"];
            $[19] = activeKey;
            $[20] = handleNavClick;
            $[21] = t9;
        } else {
            t9 = $[21];
        }
        t8 = navItems.map(t9);
        $[15] = activeKey;
        $[16] = handleNavClick;
        $[17] = navItems;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$RefreshCcwIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshCcwIcon"], {
            size: 20,
            className: "shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== switchLabel) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: switchLabel
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[23] = switchLabel;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== handleSwitchRole || $[26] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleSwitchRole,
            className: "flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium text-black transition-colors hover:bg-gray-100",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[25] = handleSwitchRole;
        $[26] = t10;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11 || $[29] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "space-y-2",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t8;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t12 || $[32] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t7;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto pt-8 mb-[40px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium text-black transition-colors hover:bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$LogOutIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogOutIcon"], {
                        size: 20,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 213,
                        columnNumber: 243
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 213,
                        columnNumber: 288
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 213,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "fixed left-0 top-0 flex h-screen w-[240px] flex-col border-r border-gray-200 bg-white px-[8px]",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[35] = t13;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    return t15;
}
_s(Sidebar, "LKeJMVyysGLZtANIFFwEH+3j9ZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
function _SidebarDetermineKey(currentRole, path) {
    const navList = NAVIGATION[currentRole];
    let bestMatch;
    navList.forEach({
        "Sidebar[determineKey > navList.forEach()]": (item)=>{
            if (!item.href) {
                return;
            }
            if (item.href === "/") {
                if (path === "/") {
                    bestMatch = item;
                }
                return;
            }
            if (path === item.href) {
                bestMatch = item;
                return;
            }
            if (path.startsWith(item.href)) {
                if (!bestMatch || (bestMatch.href?.length ?? 0) < item.href.length) {
                    bestMatch = item;
                }
            }
        }
    }["Sidebar[determineKey > navList.forEach()]"]);
    return bestMatch?.key ?? navList[0]?.key ?? "";
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConcertCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConcertCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConcertCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConcertCard",
    ()=>ConcertCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/icons/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Trash2Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/Trash2Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/UserIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/XCircleIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ConcertCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "789b199af4dc0c6d0d1bd69234aa893966b7ac06827f7aa3838788f39be8e7d2") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "789b199af4dc0c6d0d1bd69234aa893966b7ac06827f7aa3838788f39be8e7d2";
    }
    const { name, description, totalSeats, onConfirmDelete } = t0;
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ConcertCard[handleDelete]": ()=>{
                setModalOpen(true);
            }
        })["ConcertCard[handleDelete]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleDelete = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ConcertCard[handleClose]": ()=>{
                setModalOpen(false);
            }
        })["ConcertCard[handleClose]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleClose = t2;
    let t3;
    if ($[3] !== onConfirmDelete) {
        t3 = ({
            "ConcertCard[confirmDelete]": ()=>{
                onConfirmDelete?.();
                setModalOpen(false);
            }
        })["ConcertCard[confirmDelete]"];
        $[3] = onConfirmDelete;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const confirmDelete = t3;
    let t4;
    if ($[5] !== name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-[#E4E7EC] pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-semibold text-[#1692EC]",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/ConcertCard.tsx",
                lineNumber: 68,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = name;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base leading-relaxed text-[#101828]",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[7] = description;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== totalSeats) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-[#101828]",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base font-medium",
                    children: totalSeats
                }, void 0, false, {
                    fileName: "[project]/src/components/ConcertCard.tsx",
                    lineNumber: 91,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[10] = totalSeats;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            text: "Delete",
            variant: "danger",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Trash2Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trash2Icon"],
            onClick: handleDelete
        }, void 0, false, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex items-center justify-between",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            text: "Cancel",
            variant: "outline",
            onClick: handleClose
        };
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== confirmDelete) {
        t11 = {
            text: "Yes, Delete",
            variant: "danger",
            onClick: confirmDelete
        };
        $[16] = confirmDelete;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== modalOpen || $[19] !== name || $[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            open: modalOpen,
            title: "Are you sure to delete?",
            description: "Please confirm you want to remove this concert.",
            highlight: name,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XCircleIcon"],
            iconColor: "#F96464",
            iconSize: 48,
            onClose: handleClose,
            secondaryAction: t10,
            primaryAction: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[18] = modalOpen;
        $[19] = name;
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12 || $[23] !== t4 || $[24] !== t5 || $[25] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-[#D0D5DD] bg-white p-6 shadow-sm",
            children: [
                t4,
                t5,
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ConcertCard.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t4;
        $[24] = t5;
        $[25] = t9;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    return t13;
}
_s(ConcertCard, "CMfkJY0oHKX43wkRh7WkxSiVV1E=");
_c = ConcertCard;
var _c;
__turbopack_context__.k.register(_c, "ConcertCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/icons/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$AwardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/AwardIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$SaveIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/SaveIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/UserIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XCircleLightIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/XCircleLightIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConcertCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConcertCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Dashboard() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [concerts, setConcerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingConcerts, setLoadingConcerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingHistory, setLoadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        totalSeats: '',
        description: ''
    });
    const showToast = (message, variant = 'success')=>{
        setToast({
            message,
            variant
        });
    };
    const handleCloseToast = ()=>{
        setToast(null);
    };
    const handleFormChange = (key, value)=>{
        setFormValues((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const loadConcerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Dashboard.useCallback[loadConcerts]": async ()=>{
            setLoadingConcerts(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConcerts"])();
                setConcerts(data.map({
                    "Dashboard.useCallback[loadConcerts]": ({ id, name, description, totalSeats, reservedSeats, availableSeats })=>({
                            id,
                            name,
                            description,
                            totalSeats,
                            reservedSeats,
                            availableSeats
                        })
                }["Dashboard.useCallback[loadConcerts]"]));
            } catch (error) {
                console.error(error);
                showToast('Failed to load concerts', 'error');
            } finally{
                setLoadingConcerts(false);
            }
        }
    }["Dashboard.useCallback[loadConcerts]"], []);
    const loadHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Dashboard.useCallback[loadHistory]": async ()=>{
            setLoadingHistory(true);
            try {
                const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReservationHistory"])();
                setHistory(entries);
            } catch (error_0) {
                console.error(error_0);
                showToast('Failed to load reservation history', 'error');
            } finally{
                setLoadingHistory(false);
            }
        }
    }["Dashboard.useCallback[loadHistory]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            void loadConcerts();
            void loadHistory();
        }
    }["Dashboard.useEffect"], [
        loadConcerts,
        loadHistory
    ]);
    const handleDelete = async (id_0, name_0)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteConcert"])(id_0);
            setConcerts((prev_0)=>prev_0.filter((concert)=>concert.id !== id_0));
            await loadHistory();
            showToast(`Deleted ${name_0} successfully`);
        } catch (error_1) {
            console.error(error_1);
            showToast('Failed to delete concert', 'error');
        }
    };
    const handleCreateSubmit = async (event)=>{
        event.preventDefault();
        const trimmedName = formValues.name.trim();
        const trimmedDescription = formValues.description.trim();
        const seatsValue = formValues.totalSeats.trim();
        if (!trimmedName || !trimmedDescription || !seatsValue) {
            showToast('Please fill in all fields before saving.', 'error');
            return;
        }
        const parsedSeats = Number(seatsValue);
        const totalSeats_0 = Number.isFinite(parsedSeats) && parsedSeats >= 0 ? Math.floor(parsedSeats) : 0;
        try {
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConcert"])({
                name: trimmedName,
                description: trimmedDescription,
                totalSeats: totalSeats_0
            });
            setConcerts((prev_1)=>[
                    ...prev_1,
                    {
                        id: created.id,
                        name: created.name,
                        description: created.description,
                        totalSeats: created.totalSeats,
                        reservedSeats: created.reservedSeats,
                        availableSeats: created.totalSeats - created.reservedSeats
                    }
                ]);
            setFormValues({
                name: '',
                totalSeats: '',
                description: ''
            });
            setActiveTab('overview');
            showToast(`Created ${trimmedName} successfully`);
        } catch (error_2) {
            console.error(error_2);
            showToast('Failed to create concert', 'error');
        }
    };
    const totalSeats_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[totalSeats_1]": ()=>concerts.reduce({
                "Dashboard.useMemo[totalSeats_1]": (sum, concert_0)=>sum + concert_0.totalSeats
            }["Dashboard.useMemo[totalSeats_1]"], 0)
    }["Dashboard.useMemo[totalSeats_1]"], [
        concerts
    ]);
    const totalReserved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[totalReserved]": ()=>concerts.reduce({
                "Dashboard.useMemo[totalReserved]": (sum_0, concert_1)=>sum_0 + (concert_1.totalSeats - concert_1.availableSeats)
            }["Dashboard.useMemo[totalReserved]"], 0)
    }["Dashboard.useMemo[totalReserved]"], [
        concerts
    ]);
    const totalCancelled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[totalCancelled]": ()=>history.filter({
                "Dashboard.useMemo[totalCancelled]": (entry)=>entry.action === 'CANCEL'
            }["Dashboard.useMemo[totalCancelled]"]).length
    }["Dashboard.useMemo[totalCancelled]"], [
        history
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-1 flex-col gap-10 px-10 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                open: Boolean(toast),
                message: toast?.message ?? '',
                variant: toast?.variant ?? 'success',
                onClose: handleCloseToast
            }, void 0, false, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6 md:flex-nowrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardCard"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"],
                        text: "Total of seats",
                        number: totalSeats_1,
                        color: "#0070A4",
                        size: "base"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardCard"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$AwardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AwardIcon"],
                        text: "Reserved",
                        number: totalReserved,
                        color: "#00A58B",
                        size: "base"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardCard"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$XCircleLightIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XCircleLightIcon"],
                        text: "Cancel",
                        number: loadingHistory ? 0 : totalCancelled,
                        color: "#F96464",
                        size: "base"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto w-full max-w-5xl space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        overviewLabel: "Overview",
                        createLabel: "Create",
                        defaultActive: activeTab,
                        onChange: (key_0)=>setActiveTab(key_0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    activeTab === 'overview' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: loadingConcerts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-[#D0D5DD] bg-white p-10 text-center text-[#667085]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading concerts..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 150,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Dashboard.tsx",
                            lineNumber: 149,
                            columnNumber: 32
                        }, this) : concerts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-dashed border-[#D0D5DD] bg-white p-10 text-center text-[#667085]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No concerts available."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 152,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Dashboard.tsx",
                            lineNumber: 151,
                            columnNumber: 48
                        }, this) : concerts.map((concert_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConcertCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConcertCard"], {
                                name: concert_2.name,
                                description: concert_2.description,
                                totalSeats: concert_2.totalSeats,
                                onConfirmDelete: ()=>handleDelete(concert_2.id, concert_2.name)
                            }, concert_2.id, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 153,
                                columnNumber: 50
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 148,
                        columnNumber: 37
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleCreateSubmit,
                        className: "rounded-2xl border border-[#D0D5DD] bg-white p-10 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[40px] font-semibold text-[#1692EC]",
                                        children: "Create"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 h-[1px] w-[942px] rounded-full bg-[#C2C2C2]",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[24px] font-regular text-[#101828]",
                                                htmlFor: "concert-name",
                                                children: "Concert Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Dashboard.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "concert-name",
                                                type: "text",
                                                placeholder: "Please input concert name",
                                                value: formValues.name,
                                                onChange: (event_0)=>handleFormChange('name', event_0.target.value),
                                                className: "rounded-md border border-[#D0D5DD] px-3 py-2 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Dashboard.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[24px] font-regular text-[#101828]",
                                                htmlFor: "total-seats",
                                                children: "Total of seat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Dashboard.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "total-seats",
                                                        type: "number",
                                                        min: 0,
                                                        placeholder: "Please input seats",
                                                        value: formValues.totalSeats,
                                                        onChange: (event_1)=>handleFormChange('totalSeats', event_1.target.value),
                                                        className: "w-full rounded-md border border-[#D0D5DD] px-3 py-2 pr-10 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Dashboard.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                        size: 18,
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Dashboard.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Dashboard.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[24px] font-regular text-[#101828]",
                                        htmlFor: "concert-description",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "concert-description",
                                        placeholder: "Please input description",
                                        value: formValues.description,
                                        onChange: (event_2)=>handleFormChange('description', event_2.target.value),
                                        rows: 4,
                                        className: "w-full rounded-md border border-[#D0D5DD] px-3 py-2 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    text: "Save",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$SaveIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveIcon"],
                                    backgroundColor: "#1692EC",
                                    textColor: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Dashboard.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 154,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Dashboard.tsx",
        lineNumber: 136,
        columnNumber: 10
    }, this);
}
_s(Dashboard, "r+Os/IEH1GC5jUJDMDPkjIPAluA=");
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_205b3cb2._.js.map