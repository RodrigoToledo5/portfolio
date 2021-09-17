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
  title: 'Actualmente estoy estudiando Ingeniería biomédica.',
  subtitle: "Mis comienzos en la programación",
  description: "Siempre me apasionó el impacto que tiene la tecnología y la ciencia en la sociedad y por eso decidi comenzar mis estudios hace unos años en dicha carrera, fue donde comenzó mi pasión por programar y gracias a un gran profesor que supo transmitirme en ese momento esa pasión que el mismo tiene cuando arranque con C++."
}, {
  title: 'Full Stack Web Developer Bootcam SoyHenry',
  subtitle: "El trabajo en equipo y el compañerismo",
  description: "Hace muy poco termine la bootcam SoyHenry en la cual tuve una experiencia expecional, con grandes compañeros y profesores, gracias a ellos, hoy me encuentro en busqueda laboral, aprendí todo el camino que conlleva a la construcción de una página web desde el front end, pasando por el backend hasta su base de datos."
}, {
  title: 'Mi historia con Python',
  subtitle: "Amigos en internet",
  description: "Después de haber terminado de cursar C++ en la universidad, decidí investigar sobre el mundo de Python, luego en un juego me hice unos amigos que me enseñaron alguna que otras cosas que me ayudaron mucho, llegue a implementar un par de boots de telegram que ejecutaban funciones en mi PC a través del servicio de mensajería de telegram, en una maquina virtual que tenia armada con Ubuntu"
}, {
  title: 'Workshops',
  subtitle: "Cuando quedas con el gustro de la programación",
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
  link: "https://github.com/RodrigoToledo5/Wikitour"
}, {
  title: "Plataforma de consultas médicas",
  description: "Se realizo con Node.js y Express para el backend, el ORM Sequelize, y Postgresql como base de datos, también se implanto React.js, Redux, MaterialUi para el frontend.",
  imagen: "proyecto-consultancespace.png",
  link: "https://github.com/RodrigoToledo5/ConsultanceSpace",
  video: "https://youtu.be/lk7HXFEFXrc"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2RiNTQwZmJhNWQ5OGVmZTUzNDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFDLENBQ2hCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxZQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBRGdCLEVBS2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBTGdCLEVBU2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxPQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBVGdCLEVBYWhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxRQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBYmdCLEVBaUJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsUUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQWpCZ0IsRUFxQmhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBckJnQixFQXlCaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFdBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0F6QmdCLEVBNkJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsWUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQTdCZ0IsRUFpQ2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxLQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBakNnQixFQXFDaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFFBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0FyQ2dCLENBQWI7QUEwQ0EsSUFBTUMsWUFBWSxHQUFDLENBQ3RCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxvREFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsa0NBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBRHNCLEVBT3RCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQywyQ0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsd0NBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBUHNCLEVBWXRCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQyx3QkFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsb0JBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBWnNCLEVBaUJ0QjtBQUNJRixFQUFBQSxLQUFLLEVBQUMsV0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsZ0RBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDLHVtQkFIaEI7QUFJSUMsRUFBQUEsSUFBSSxFQUFDLElBSlQ7QUFLSUMsRUFBQUEsRUFBRSxFQUFDO0FBTFAsQ0FqQnNCLENBQW5CO0FBeUJBLElBQU1DLE9BQU8sR0FBQyxDQUNqQjtBQUNJTCxFQUFBQSxLQUFLLEVBQUMsOEJBRFY7QUFFSUUsRUFBQUEsV0FBVyxFQUFDLGdMQUZoQjtBQUdJSSxFQUFBQSxNQUFNLEVBQUMsc0JBSFg7QUFJSUMsRUFBQUEsSUFBSSxFQUFDO0FBSlQsQ0FEaUIsRUFPakI7QUFDSVAsRUFBQUEsS0FBSyxFQUFDLDJDQURWO0FBRUlFLEVBQUFBLFdBQVcsRUFBQyxrS0FGaEI7QUFHSUksRUFBQUEsTUFBTSxFQUFDLG1CQUhYO0FBSUlDLEVBQUFBLElBQUksRUFBQztBQUpULENBUGlCLEVBYWpCO0FBQ0lQLEVBQUFBLEtBQUssRUFBQyxpQ0FEVjtBQUVJRSxFQUFBQSxXQUFXLEVBQUMsd0tBRmhCO0FBR0lJLEVBQUFBLE1BQU0sRUFBQywrQkFIWDtBQUlJQyxFQUFBQSxJQUFJLEVBQUMsb0RBSlQ7QUFLSUMsRUFBQUEsS0FBSyxFQUFDO0FBTFYsQ0FiaUIsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHM9W1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1JlYWN0anMnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonUmVkdXgnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonTm9kZWpzJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J05leHRqcycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1NlcXVlbGl6ZScsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidQb3N0Z3Jlc3FsJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J0MrKycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidQeXRob24nLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuXVxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jaWVzPVtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonQWN0dWFsbWVudGUgZXN0b3kgZXN0dWRpYW5kbyBJbmdlbmllcsOtYSBiaW9tw6lkaWNhLicsXHJcbiAgICAgICAgc3VidGl0bGU6XCJNaXMgY29taWVuem9zIGVuIGxhIHByb2dyYW1hY2nDs25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlNpZW1wcmUgbWUgYXBhc2lvbsOzIGVsIGltcGFjdG8gcXVlIHRpZW5lIGxhIHRlY25vbG9nw61hIHkgbGEgY2llbmNpYSBlbiBsYSBzb2NpZWRhZCB5IHBvciBlc28gZGVjaWRpIGNvbWVuemFyIG1pcyBlc3R1ZGlvcyBoYWNlIHVub3MgYcOxb3MgZW4gZGljaGEgY2FycmVyYSwgZnVlIGRvbmRlIGNvbWVuesOzIG1pIHBhc2nDs24gcG9yIHByb2dyYW1hciB5IGdyYWNpYXMgYSB1biBncmFuIHByb2Zlc29yIHF1ZSBzdXBvIHRyYW5zbWl0aXJtZSBlbiBlc2UgbW9tZW50byBlc2EgcGFzacOzbiBxdWUgZWwgbWlzbW8gdGllbmUgY3VhbmRvIGFycmFucXVlIGNvbiBDKysuXCIsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIEJvb3RjYW0gU295SGVucnknLFxyXG4gICAgICAgIHN1YnRpdGxlOlwiRWwgdHJhYmFqbyBlbiBlcXVpcG8geSBlbCBjb21wYcOxZXJpc21vXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJIYWNlIG11eSBwb2NvIHRlcm1pbmUgbGEgYm9vdGNhbSBTb3lIZW5yeSBlbiBsYSBjdWFsIHR1dmUgdW5hIGV4cGVyaWVuY2lhIGV4cGVjaW9uYWwsIGNvbiBncmFuZGVzIGNvbXBhw7Flcm9zIHkgcHJvZmVzb3JlcywgZ3JhY2lhcyBhIGVsbG9zLCBob3kgbWUgZW5jdWVudHJvIGVuIGJ1c3F1ZWRhIGxhYm9yYWwsIGFwcmVuZMOtIHRvZG8gZWwgY2FtaW5vIHF1ZSBjb25sbGV2YSBhIGxhIGNvbnN0cnVjY2nDs24gZGUgdW5hIHDDoWdpbmEgd2ViIGRlc2RlIGVsIGZyb250IGVuZCwgcGFzYW5kbyBwb3IgZWwgYmFja2VuZCBoYXN0YSBzdSBiYXNlIGRlIGRhdG9zLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonTWkgaGlzdG9yaWEgY29uIFB5dGhvbicsXHJcbiAgICAgICAgc3VidGl0bGU6XCJBbWlnb3MgZW4gaW50ZXJuZXRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkRlc3B1w6lzIGRlIGhhYmVyIHRlcm1pbmFkbyBkZSBjdXJzYXIgQysrIGVuIGxhIHVuaXZlcnNpZGFkLCBkZWNpZMOtIGludmVzdGlnYXIgc29icmUgZWwgbXVuZG8gZGUgUHl0aG9uLCBsdWVnbyBlbiB1biBqdWVnbyBtZSBoaWNlIHVub3MgYW1pZ29zIHF1ZSBtZSBlbnNlw7Fhcm9uIGFsZ3VuYSBxdWUgb3RyYXMgY29zYXMgcXVlIG1lIGF5dWRhcm9uIG11Y2hvLCBsbGVndWUgYSBpbXBsZW1lbnRhciB1biBwYXIgZGUgYm9vdHMgZGUgdGVsZWdyYW0gcXVlIGVqZWN1dGFiYW4gZnVuY2lvbmVzIGVuIG1pIFBDIGEgdHJhdsOpcyBkZWwgc2VydmljaW8gZGUgbWVuc2FqZXLDrWEgZGUgdGVsZWdyYW0sIGVuIHVuYSBtYXF1aW5hIHZpcnR1YWwgcXVlIHRlbmlhIGFybWFkYSBjb24gVWJ1bnR1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOidXb3Jrc2hvcHMnLFxyXG4gICAgICAgIHN1YnRpdGxlOlwiQ3VhbmRvIHF1ZWRhcyBjb24gZWwgZ3VzdHJvIGRlIGxhIHByb2dyYW1hY2nDs25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gVGhlIHBvaW50IG9mIHVzaW5nIExvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAnQ29udGVudCBoZXJlLCBjb250ZW50IGhlcmUnLCBtYWtpbmcgaXQgbG9vayBsaWtlIHJlYWRhYmxlIEVuZ2xpc2guIE1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICdsb3JlbSBpcHN1bScgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluIHRoZWlyIGluZmFuY3kuIFZhcmlvdXMgdmVyc2lvbnMgaGF2ZSBldm9sdmVkIG92ZXIgdGhlIHllYXJzLCBzb21ldGltZXMgYnkgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS5cIixcclxuICAgICAgICBmcm9tOjIwMDAsXHJcbiAgICAgICAgdG86MjAwNVxyXG4gICAgfSxcclxuXVxyXG5leHBvcnQgY29uc3QgcHJvamVjdD1bXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJKdWVnbyBkZSBQb2tlbW9uIFJlYWN0LVJlZHV4XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJFcyB1biBqdWVnbyBkZSBwb2tlbW9uIGRvbmRlIHB1ZWRlcyBjYXB0dXJhciBwb2tlbW9uZXMgeSBsdWNoYXIgY29uIGVsbG9zLCBzZSByZWxpesOzIGltcGxlbWVudGFuZG8gUmVhY3QganMgeSBSZWR1eCwgdXRpbGl6YW5kbyB1bmEgQXBpIFJFU1QgcGFyYSBvYnRlbmVyIGxvcyBkYXRvcyBuZWNlc2FyaW9zXCIsXHJcbiAgICAgICAgaW1hZ2VuOlwicHJveWVjdG8tcG9rZW1vbi5wbmdcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9wb2tlcmFuZG9tc3RhdHMudmVyY2VsLmFwcFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiV2lraSBGdWxsIFN0YWNrIGRlIGFjdGl2aWRhZGVzIHR1cmlzdGljYXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkltcGxlbWVudGFkYSBjb24gTm9kZS5qcyB5IEV4cHJlc3MgcGFyYSBlbCBzZXJ2aWRvciBkZSBiYWNrZW5kLCBlbCBPUk0gU2VxdWVsaXplIHkgUG9zdGdyZXNxbCBjb21vIGJhc2UgZGUgZGF0b3MsIHBhcmEgZWwgZnJvbnRlbmQgc2UgdXRpbGl6w7MgUmVhY3QuanMgeSBSZWR1eC4gXCIsXHJcbiAgICAgICAgaW1hZ2VuOlwicHJveWVjdG8td2lraS5wbmdcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9naXRodWIuY29tL1JvZHJpZ29Ub2xlZG81L1dpa2l0b3VyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJQbGF0YWZvcm1hIGRlIGNvbnN1bHRhcyBtw6lkaWNhc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiU2UgcmVhbGl6byBjb24gTm9kZS5qcyB5IEV4cHJlc3MgcGFyYSBlbCBiYWNrZW5kLCBlbCBPUk0gU2VxdWVsaXplLCB5IFBvc3RncmVzcWwgY29tbyBiYXNlIGRlIGRhdG9zLCB0YW1iacOpbiBzZSBpbXBsYW50byBSZWFjdC5qcywgUmVkdXgsIE1hdGVyaWFsVWkgcGFyYSBlbCBmcm9udGVuZC5cIixcclxuICAgICAgICBpbWFnZW46XCJwcm95ZWN0by1jb25zdWx0YW5jZXNwYWNlLnBuZ1wiLFxyXG4gICAgICAgIGxpbms6XCJodHRwczovL2dpdGh1Yi5jb20vUm9kcmlnb1RvbGVkbzUvQ29uc3VsdGFuY2VTcGFjZVwiLFxyXG4gICAgICAgIHZpZGVvOlwiaHR0cHM6Ly95b3V0dS5iZS9sazdIWEZFRlhyY1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbl0iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWplIiwiZXhwZXJpZW5jaWVzIiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdCIsImltYWdlbiIsImxpbmsiLCJ2aWRlbyJdLCJzb3VyY2VSb290IjoiIn0=