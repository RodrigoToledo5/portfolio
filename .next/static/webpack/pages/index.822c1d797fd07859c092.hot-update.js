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
  title: 'Workshop plataformas de gestión médica',
  subtitle: "En mi universidad",
  description: "Participe en un workshop en el cual trataba el tema de softwares orientados a la gestión de hospitales y plataformas medicas"
}, {
  title: 'Ciberseguridad',
  subtitle: "En la universidad de la UADER",
  description: "Participé en un workshop en el cual se trataba el tema sobre el uso de honey post para la protección de servidores,y hacking etico"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODIyYzFkNzk3ZmQwNzg1OWMwOTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFDLENBQ2hCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxZQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBRGdCLEVBS2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBTGdCLEVBU2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxPQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBVGdCLEVBYWhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxRQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBYmdCLEVBaUJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsUUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQWpCZ0IsRUFxQmhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBckJnQixFQXlCaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFdBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0F6QmdCLEVBNkJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsWUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQTdCZ0IsRUFpQ2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxLQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBakNnQixFQXFDaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFFBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0FyQ2dCLENBQWI7QUEwQ0EsSUFBTUMsWUFBWSxHQUFDLENBQ3RCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxvREFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsa0NBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBRHNCLEVBT3RCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQywyQ0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsd0NBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBUHNCLEVBWXRCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQyx3QkFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsb0JBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBWnNCLEVBaUJ0QjtBQUNJRixFQUFBQSxLQUFLLEVBQUMsd0NBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFDLG1CQUZiO0FBR0lDLEVBQUFBLFdBQVcsRUFBQztBQUhoQixDQWpCc0IsRUFzQnRCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQyxnQkFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsK0JBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBdEJzQixDQUFuQjtBQTRCQSxJQUFNQyxPQUFPLEdBQUMsQ0FDakI7QUFDSUgsRUFBQUEsS0FBSyxFQUFDLDhCQURWO0FBRUlFLEVBQUFBLFdBQVcsRUFBQyxnTEFGaEI7QUFHSUUsRUFBQUEsTUFBTSxFQUFDLHNCQUhYO0FBSUlDLEVBQUFBLElBQUksRUFBQztBQUpULENBRGlCLEVBT2pCO0FBQ0lMLEVBQUFBLEtBQUssRUFBQywyQ0FEVjtBQUVJRSxFQUFBQSxXQUFXLEVBQUMsa0tBRmhCO0FBR0lFLEVBQUFBLE1BQU0sRUFBQyxtQkFIWDtBQUlJQyxFQUFBQSxJQUFJLEVBQUM7QUFKVCxDQVBpQixFQWFqQjtBQUNJTCxFQUFBQSxLQUFLLEVBQUMsaUNBRFY7QUFFSUUsRUFBQUEsV0FBVyxFQUFDLHdLQUZoQjtBQUdJRSxFQUFBQSxNQUFNLEVBQUMsK0JBSFg7QUFJSUMsRUFBQUEsSUFBSSxFQUFDLG9EQUpUO0FBS0lDLEVBQUFBLEtBQUssRUFBQztBQUxWLENBYmlCLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzPVtcclxuICAgIHtcclxuICAgICAgICBza2lsbDonSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidSZWFjdGpzJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1JlZHV4JyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J05vZGVqcycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidOZXh0anMnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonRXhwcmVzcycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidTZXF1ZWxpemUnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonUG9zdGdyZXNxbCcsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidDKysnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonUHl0aG9uJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2llcz1bXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J0FjdHVhbG1lbnRlIGVzdG95IGVzdHVkaWFuZG8gSW5nZW5pZXLDrWEgYmlvbcOpZGljYS4nLFxyXG4gICAgICAgIHN1YnRpdGxlOlwiTWlzIGNvbWllbnpvcyBlbiBsYSBwcm9ncmFtYWNpw7NuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJTaWVtcHJlIG1lIGFwYXNpb27DsyBlbCBpbXBhY3RvIHF1ZSB0aWVuZSBsYSB0ZWNub2xvZ8OtYSB5IGxhIGNpZW5jaWEgZW4gbGEgc29jaWVkYWQgeSBwb3IgZXNvIGRlY2lkaSBjb21lbnphciBtaXMgZXN0dWRpb3MgaGFjZSB1bm9zIGHDsW9zIGVuIGRpY2hhIGNhcnJlcmEsIGZ1ZSBkb25kZSBjb21lbnrDsyBtaSBwYXNpw7NuIHBvciBwcm9ncmFtYXIgeSBncmFjaWFzIGEgdW4gZ3JhbiBwcm9mZXNvciBxdWUgc3VwbyB0cmFuc21pdGlybWUgZW4gZXNlIG1vbWVudG8gZXNhIHBhc2nDs24gcXVlIGVsIG1pc21vIHRpZW5lIGN1YW5kbyBhcnJhbnF1ZSBjb24gQysrLlwiLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciBCb290Y2FtIFNveUhlbnJ5JyxcclxuICAgICAgICBzdWJ0aXRsZTpcIkVsIHRyYWJham8gZW4gZXF1aXBvIHkgZWwgY29tcGHDsWVyaXNtb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiSGFjZSBtdXkgcG9jbyB0ZXJtaW5lIGxhIGJvb3RjYW0gU295SGVucnkgZW4gbGEgY3VhbCB0dXZlIHVuYSBleHBlcmllbmNpYSBleHBlY2lvbmFsLCBjb24gZ3JhbmRlcyBjb21wYcOxZXJvcyB5IHByb2Zlc29yZXMsIGdyYWNpYXMgYSBlbGxvcywgaG95IG1lIGVuY3VlbnRybyBlbiBidXNxdWVkYSBsYWJvcmFsLCBhcHJlbmTDrSB0b2RvIGVsIGNhbWlubyBxdWUgY29ubGxldmEgYSBsYSBjb25zdHJ1Y2Npw7NuIGRlIHVuYSBww6FnaW5hIHdlYiBkZXNkZSBlbCBmcm9udCBlbmQsIHBhc2FuZG8gcG9yIGVsIGJhY2tlbmQgaGFzdGEgc3UgYmFzZSBkZSBkYXRvcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J01pIGhpc3RvcmlhIGNvbiBQeXRob24nLFxyXG4gICAgICAgIHN1YnRpdGxlOlwiQW1pZ29zIGVuIGludGVybmV0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJEZXNwdcOpcyBkZSBoYWJlciB0ZXJtaW5hZG8gZGUgY3Vyc2FyIEMrKyBlbiBsYSB1bml2ZXJzaWRhZCwgZGVjaWTDrSBpbnZlc3RpZ2FyIHNvYnJlIGVsIG11bmRvIGRlIFB5dGhvbiwgbHVlZ28gZW4gdW4ganVlZ28gbWUgaGljZSB1bm9zIGFtaWdvcyBxdWUgbWUgZW5zZcOxYXJvbiBhbGd1bmEgcXVlIG90cmFzIGNvc2FzIHF1ZSBtZSBheXVkYXJvbiBtdWNobywgbGxlZ3VlIGEgaW1wbGVtZW50YXIgdW4gcGFyIGRlIGJvb3RzIGRlIHRlbGVncmFtIHF1ZSBlamVjdXRhYmFuIGZ1bmNpb25lcyBlbiBtaSBQQyBhIHRyYXbDqXMgZGVsIHNlcnZpY2lvIGRlIG1lbnNhamVyw61hIGRlIHRlbGVncmFtLCBlbiB1bmEgbWFxdWluYSB2aXJ0dWFsIHF1ZSB0ZW5pYSBhcm1hZGEgY29uIFVidW50dVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonV29ya3Nob3AgcGxhdGFmb3JtYXMgZGUgZ2VzdGnDs24gbcOpZGljYScsXHJcbiAgICAgICAgc3VidGl0bGU6XCJFbiBtaSB1bml2ZXJzaWRhZFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiUGFydGljaXBlIGVuIHVuIHdvcmtzaG9wIGVuIGVsIGN1YWwgdHJhdGFiYSBlbCB0ZW1hIGRlIHNvZnR3YXJlcyBvcmllbnRhZG9zIGEgbGEgZ2VzdGnDs24gZGUgaG9zcGl0YWxlcyB5IHBsYXRhZm9ybWFzIG1lZGljYXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J0NpYmVyc2VndXJpZGFkJyxcclxuICAgICAgICBzdWJ0aXRsZTpcIkVuIGxhIHVuaXZlcnNpZGFkIGRlIGxhIFVBREVSXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJQYXJ0aWNpcMOpIGVuIHVuIHdvcmtzaG9wIGVuIGVsIGN1YWwgc2UgdHJhdGFiYSBlbCB0ZW1hIHNvYnJlIGVsIHVzbyBkZSBob25leSBwb3N0IHBhcmEgbGEgcHJvdGVjY2nDs24gZGUgc2Vydmlkb3Jlcyx5IGhhY2tpbmcgZXRpY29cIixcclxuICAgIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IHByb2plY3Q9W1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiSnVlZ28gZGUgUG9rZW1vbiBSZWFjdC1SZWR1eFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiRXMgdW4ganVlZ28gZGUgcG9rZW1vbiBkb25kZSBwdWVkZXMgY2FwdHVyYXIgcG9rZW1vbmVzIHkgbHVjaGFyIGNvbiBlbGxvcywgc2UgcmVsaXrDsyBpbXBsZW1lbnRhbmRvIFJlYWN0IGpzIHkgUmVkdXgsIHV0aWxpemFuZG8gdW5hIEFwaSBSRVNUIHBhcmEgb2J0ZW5lciBsb3MgZGF0b3MgbmVjZXNhcmlvc1wiLFxyXG4gICAgICAgIGltYWdlbjpcInByb3llY3RvLXBva2Vtb24ucG5nXCIsXHJcbiAgICAgICAgbGluazpcImh0dHBzOi8vcG9rZXJhbmRvbXN0YXRzLnZlcmNlbC5hcHBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIldpa2kgRnVsbCBTdGFjayBkZSBhY3RpdmlkYWRlcyB0dXJpc3RpY2FzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJJbXBsZW1lbnRhZGEgY29uIE5vZGUuanMgeSBFeHByZXNzIHBhcmEgZWwgc2Vydmlkb3IgZGUgYmFja2VuZCwgZWwgT1JNIFNlcXVlbGl6ZSB5IFBvc3RncmVzcWwgY29tbyBiYXNlIGRlIGRhdG9zLCBwYXJhIGVsIGZyb250ZW5kIHNlIHV0aWxpesOzIFJlYWN0LmpzIHkgUmVkdXguIFwiLFxyXG4gICAgICAgIGltYWdlbjpcInByb3llY3RvLXdpa2kucG5nXCIsXHJcbiAgICAgICAgbGluazpcImh0dHBzOi8vZ2l0aHViLmNvbS9Sb2RyaWdvVG9sZWRvNS9XaWtpdG91clwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUGxhdGFmb3JtYSBkZSBjb25zdWx0YXMgbcOpZGljYXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlNlIHJlYWxpem8gY29uIE5vZGUuanMgeSBFeHByZXNzIHBhcmEgZWwgYmFja2VuZCwgZWwgT1JNIFNlcXVlbGl6ZSwgeSBQb3N0Z3Jlc3FsIGNvbW8gYmFzZSBkZSBkYXRvcywgdGFtYmnDqW4gc2UgaW1wbGFudG8gUmVhY3QuanMsIFJlZHV4LCBNYXRlcmlhbFVpIHBhcmEgZWwgZnJvbnRlbmQuXCIsXHJcbiAgICAgICAgaW1hZ2VuOlwicHJveWVjdG8tY29uc3VsdGFuY2VzcGFjZS5wbmdcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9naXRodWIuY29tL1JvZHJpZ29Ub2xlZG81L0NvbnN1bHRhbmNlU3BhY2VcIixcclxuICAgICAgICB2aWRlbzpcImh0dHBzOi8veW91dHUuYmUvbGs3SFhGRUZYcmNcIlxyXG4gICAgfSxcclxuICAgIFxyXG5dIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFqZSIsImV4cGVyaWVuY2llcyIsInRpdGxlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3QiLCJpbWFnZW4iLCJsaW5rIiwidmlkZW8iXSwic291cmNlUm9vdCI6IiJ9