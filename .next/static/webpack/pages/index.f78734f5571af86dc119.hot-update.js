"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "experiencies": function() { return /* binding */ experiencies; },
/* harmony export */   "project": function() { return /* binding */ project; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skills = [{
  skill: 'Javascript',
  percentaje: 100
}, {
  skill: 'Reactjs',
  percentaje: 100
}, {
  skill: 'Redux',
  percentaje: 100
}, {
  skill: 'Nodejs',
  percentaje: 100
}, {
  skill: 'Nextjs',
  percentaje: 100
}, {
  skill: 'Express',
  percentaje: 100
}, {
  skill: 'Sequelize',
  percentaje: 100
}, {
  skill: 'Postgresql',
  percentaje: 100
}, {
  skill: 'C++',
  percentaje: 100
}, {
  skill: 'Python',
  percentaje: 100
}];
var experiencies = [{
  title: 'Software developer at Microsoft',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  from: 2000,
  to: 2005
}, {
  title: 'Software developer at Microsoft',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  from: 2000,
  to: 2005
}, {
  title: 'Software developer at Microsoft',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  from: 2000,
  to: 2005
}, {
  title: 'Software developer at Microsoft',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  from: 2000,
  to: 2005
}];
var project = [{
  title: "Juego de Pokemon React-Redux",
  description: "Es un juego de pokemon donde puedes capturar pokemones y luchar con ellos, se relizó implementando React js y Redux, utilizando una Api REST para obtener los datos necesarios",
  imagen: "proyecto-pokemon.png",
  link: "https://pokerandomstats.vercel.app"
}, {
  title: "Wiki Full Stack de actividades turisticas",
  description: "Implementada con Node.js y Express para el servidor de backend, el ORM Sequelize y Postgresql como base de datos, para el frontend se utilizó React.js y Redux. ",
  imagen: "proyecto-wiki.png",
  link: "https://pokerandomstats.vercel.app"
}, {
  title: "Plataforma de consultas médicas",
  description: "Se realizo con Node.js y Express para el backend, el ORM Sequelize, y Postgresql como base de datos, también se implanto React.js, Redux, MaterialUi para el frontend.",
  imagen: "proyecto-consultancespace.png",
  link: "https://pokerandomstats.vercel.app"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjc4NzM0ZjU1NzFhZjg2ZGMxMTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFDLENBQ2hCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxZQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBRGdCLEVBS2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBTGdCLEVBU2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxPQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBVGdCLEVBYWhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxRQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBYmdCLEVBaUJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsUUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQWpCZ0IsRUFxQmhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBckJnQixFQXlCaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFdBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0F6QmdCLEVBNkJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsWUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQTdCZ0IsRUFpQ2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxLQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBakNnQixFQXFDaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFFBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0FyQ2dCLENBQWI7QUEwQ0EsSUFBTUMsWUFBWSxHQUFDLENBQ3RCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxpQ0FEVjtBQUVJQyxFQUFBQSxXQUFXLEVBQUMsdW1CQUZoQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUMsSUFIVDtBQUlJQyxFQUFBQSxFQUFFLEVBQUM7QUFKUCxDQURzQixFQU90QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUMsaUNBRFY7QUFFSUMsRUFBQUEsV0FBVyxFQUFDLHVtQkFGaEI7QUFHSUMsRUFBQUEsSUFBSSxFQUFDLElBSFQ7QUFJSUMsRUFBQUEsRUFBRSxFQUFDO0FBSlAsQ0FQc0IsRUFhdEI7QUFDSUgsRUFBQUEsS0FBSyxFQUFDLGlDQURWO0FBRUlDLEVBQUFBLFdBQVcsRUFBQyx1bUJBRmhCO0FBR0lDLEVBQUFBLElBQUksRUFBQyxJQUhUO0FBSUlDLEVBQUFBLEVBQUUsRUFBQztBQUpQLENBYnNCLEVBbUJ0QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUMsaUNBRFY7QUFFSUMsRUFBQUEsV0FBVyxFQUFDLHVtQkFGaEI7QUFHSUMsRUFBQUEsSUFBSSxFQUFDLElBSFQ7QUFJSUMsRUFBQUEsRUFBRSxFQUFDO0FBSlAsQ0FuQnNCLENBQW5CO0FBMEJBLElBQU1DLE9BQU8sR0FBQyxDQUNqQjtBQUNJSixFQUFBQSxLQUFLLEVBQUMsOEJBRFY7QUFFSUMsRUFBQUEsV0FBVyxFQUFDLGdMQUZoQjtBQUdJSSxFQUFBQSxNQUFNLEVBQUMsc0JBSFg7QUFJSUMsRUFBQUEsSUFBSSxFQUFDO0FBSlQsQ0FEaUIsRUFPakI7QUFDSU4sRUFBQUEsS0FBSyxFQUFDLDJDQURWO0FBRUlDLEVBQUFBLFdBQVcsRUFBQyxrS0FGaEI7QUFHSUksRUFBQUEsTUFBTSxFQUFDLG1CQUhYO0FBSUlDLEVBQUFBLElBQUksRUFBQztBQUpULENBUGlCLEVBYWpCO0FBQ0lOLEVBQUFBLEtBQUssRUFBQyxpQ0FEVjtBQUVJQyxFQUFBQSxXQUFXLEVBQUMsd0tBRmhCO0FBR0lJLEVBQUFBLE1BQU0sRUFBQywrQkFIWDtBQUlJQyxFQUFBQSxJQUFJLEVBQUM7QUFKVCxDQWJpQixDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscz1bXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonUmVhY3RqcycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidSZWR1eCcsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidOb2RlanMnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonTmV4dGpzJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonU2VxdWVsaXplJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1Bvc3RncmVzcWwnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonQysrJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1B5dGhvbicsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG5dXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNpZXM9W1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOidTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgTWljcm9zb2Z0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gVGhlIHBvaW50IG9mIHVzaW5nIExvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAnQ29udGVudCBoZXJlLCBjb250ZW50IGhlcmUnLCBtYWtpbmcgaXQgbG9vayBsaWtlIHJlYWRhYmxlIEVuZ2xpc2guIE1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICdsb3JlbSBpcHN1bScgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluIHRoZWlyIGluZmFuY3kuIFZhcmlvdXMgdmVyc2lvbnMgaGF2ZSBldm9sdmVkIG92ZXIgdGhlIHllYXJzLCBzb21ldGltZXMgYnkgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS5cIixcclxuICAgICAgICBmcm9tOjIwMDAsXHJcbiAgICAgICAgdG86MjAwNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonU29mdHdhcmUgZGV2ZWxvcGVyIGF0IE1pY3Jvc29mdCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LiBWYXJpb3VzIHZlcnNpb25zIGhhdmUgZXZvbHZlZCBvdmVyIHRoZSB5ZWFycywgc29tZXRpbWVzIGJ5IGFjY2lkZW50LCBzb21ldGltZXMgb24gcHVycG9zZSAoaW5qZWN0ZWQgaHVtb3VyIGFuZCB0aGUgbGlrZSkuXCIsXHJcbiAgICAgICAgZnJvbToyMDAwLFxyXG4gICAgICAgIHRvOjIwMDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J1NvZnR3YXJlIGRldmVsb3BlciBhdCBNaWNyb3NvZnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBUaGUgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3Mgbm9ybWFsIGRpc3RyaWJ1dGlvbiBvZiBsZXR0ZXJzLCBhcyBvcHBvc2VkIHRvIHVzaW5nICdDb250ZW50IGhlcmUsIGNvbnRlbnQgaGVyZScsIG1ha2luZyBpdCBsb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wIHB1Ymxpc2hpbmcgcGFja2FnZXMgYW5kIHdlYiBwYWdlIGVkaXRvcnMgbm93IHVzZSBMb3JlbSBJcHN1bSBhcyB0aGVpciBkZWZhdWx0IG1vZGVsIHRleHQsIGFuZCBhIHNlYXJjaCBmb3IgJ2xvcmVtIGlwc3VtJyB3aWxsIHVuY292ZXIgbWFueSB3ZWIgc2l0ZXMgc3RpbGwgaW4gdGhlaXIgaW5mYW5jeS4gVmFyaW91cyB2ZXJzaW9ucyBoYXZlIGV2b2x2ZWQgb3ZlciB0aGUgeWVhcnMsIHNvbWV0aW1lcyBieSBhY2NpZGVudCwgc29tZXRpbWVzIG9uIHB1cnBvc2UgKGluamVjdGVkIGh1bW91ciBhbmQgdGhlIGxpa2UpLlwiLFxyXG4gICAgICAgIGZyb206MjAwMCxcclxuICAgICAgICB0bzoyMDA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOidTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgTWljcm9zb2Z0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gVGhlIHBvaW50IG9mIHVzaW5nIExvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAnQ29udGVudCBoZXJlLCBjb250ZW50IGhlcmUnLCBtYWtpbmcgaXQgbG9vayBsaWtlIHJlYWRhYmxlIEVuZ2xpc2guIE1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICdsb3JlbSBpcHN1bScgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluIHRoZWlyIGluZmFuY3kuIFZhcmlvdXMgdmVyc2lvbnMgaGF2ZSBldm9sdmVkIG92ZXIgdGhlIHllYXJzLCBzb21ldGltZXMgYnkgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS5cIixcclxuICAgICAgICBmcm9tOjIwMDAsXHJcbiAgICAgICAgdG86MjAwNVxyXG4gICAgfSxcclxuXVxyXG5leHBvcnQgY29uc3QgcHJvamVjdD1bXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJKdWVnbyBkZSBQb2tlbW9uIFJlYWN0LVJlZHV4XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJFcyB1biBqdWVnbyBkZSBwb2tlbW9uIGRvbmRlIHB1ZWRlcyBjYXB0dXJhciBwb2tlbW9uZXMgeSBsdWNoYXIgY29uIGVsbG9zLCBzZSByZWxpesOzIGltcGxlbWVudGFuZG8gUmVhY3QganMgeSBSZWR1eCwgdXRpbGl6YW5kbyB1bmEgQXBpIFJFU1QgcGFyYSBvYnRlbmVyIGxvcyBkYXRvcyBuZWNlc2FyaW9zXCIsXHJcbiAgICAgICAgaW1hZ2VuOlwicHJveWVjdG8tcG9rZW1vbi5wbmdcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9wb2tlcmFuZG9tc3RhdHMudmVyY2VsLmFwcFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiV2lraSBGdWxsIFN0YWNrIGRlIGFjdGl2aWRhZGVzIHR1cmlzdGljYXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkltcGxlbWVudGFkYSBjb24gTm9kZS5qcyB5IEV4cHJlc3MgcGFyYSBlbCBzZXJ2aWRvciBkZSBiYWNrZW5kLCBlbCBPUk0gU2VxdWVsaXplIHkgUG9zdGdyZXNxbCBjb21vIGJhc2UgZGUgZGF0b3MsIHBhcmEgZWwgZnJvbnRlbmQgc2UgdXRpbGl6w7MgUmVhY3QuanMgeSBSZWR1eC4gXCIsXHJcbiAgICAgICAgaW1hZ2VuOlwicHJveWVjdG8td2lraS5wbmdcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9wb2tlcmFuZG9tc3RhdHMudmVyY2VsLmFwcFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUGxhdGFmb3JtYSBkZSBjb25zdWx0YXMgbcOpZGljYXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlNlIHJlYWxpem8gY29uIE5vZGUuanMgeSBFeHByZXNzIHBhcmEgZWwgYmFja2VuZCwgZWwgT1JNIFNlcXVlbGl6ZSwgeSBQb3N0Z3Jlc3FsIGNvbW8gYmFzZSBkZSBkYXRvcywgdGFtYmnDqW4gc2UgaW1wbGFudG8gUmVhY3QuanMsIFJlZHV4LCBNYXRlcmlhbFVpIHBhcmEgZWwgZnJvbnRlbmQuXCIsXHJcbiAgICAgICAgaW1hZ2VuOlwicHJveWVjdG8tY29uc3VsdGFuY2VzcGFjZS5wbmdcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9wb2tlcmFuZG9tc3RhdHMudmVyY2VsLmFwcFwiXHJcbiAgICB9LFxyXG4gICAgXHJcbl0iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWplIiwiZXhwZXJpZW5jaWVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb2plY3QiLCJpbWFnZW4iLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==