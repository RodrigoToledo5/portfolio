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
  title: 'Workshops en SoyHenry',
  subtitle: "Muchos conocimientos",
  description: "En las ultimas semanas de la bootcam tuve la oportunidad de parcipar en varios workshops de diversas tematicas como Typescript, React, Native,Teoría de redes, Deployment, Github, Buenas practicas de programación."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWI5N2I1NzFmZmQ5MWZmMTgwMzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFDLENBQ2hCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxZQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBRGdCLEVBS2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBTGdCLEVBU2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxPQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBVGdCLEVBYWhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxRQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBYmdCLEVBaUJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsUUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQWpCZ0IsRUFxQmhCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxTQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBckJnQixFQXlCaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFdBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0F6QmdCLEVBNkJoQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUMsWUFEVjtBQUVJQyxFQUFBQSxVQUFVLEVBQUM7QUFGZixDQTdCZ0IsRUFpQ2hCO0FBQ0lELEVBQUFBLEtBQUssRUFBQyxLQURWO0FBRUlDLEVBQUFBLFVBQVUsRUFBQztBQUZmLENBakNnQixFQXFDaEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFDLFFBRFY7QUFFSUMsRUFBQUEsVUFBVSxFQUFDO0FBRmYsQ0FyQ2dCLENBQWI7QUEwQ0EsSUFBTUMsWUFBWSxHQUFDLENBQ3RCO0FBQ0lDLEVBQUFBLEtBQUssRUFBQyxvREFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsa0NBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBRHNCLEVBT3RCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQywyQ0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsd0NBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBUHNCLEVBWXRCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQyx1QkFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsc0JBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBWnNCLEVBaUJ0QjtBQUNJRixFQUFBQSxLQUFLLEVBQUMsd0JBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFDLG9CQUZiO0FBR0lDLEVBQUFBLFdBQVcsRUFBQztBQUhoQixDQWpCc0IsRUFzQnRCO0FBQ0lGLEVBQUFBLEtBQUssRUFBQyx3Q0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUMsbUJBRmI7QUFHSUMsRUFBQUEsV0FBVyxFQUFDO0FBSGhCLENBdEJzQixFQTJCdEI7QUFDSUYsRUFBQUEsS0FBSyxFQUFDLGdCQURWO0FBRUlDLEVBQUFBLFFBQVEsRUFBQywrQkFGYjtBQUdJQyxFQUFBQSxXQUFXLEVBQUM7QUFIaEIsQ0EzQnNCLENBQW5CO0FBaUNBLElBQU1DLE9BQU8sR0FBQyxDQUNqQjtBQUNJSCxFQUFBQSxLQUFLLEVBQUMsOEJBRFY7QUFFSUUsRUFBQUEsV0FBVyxFQUFDLGdMQUZoQjtBQUdJRSxFQUFBQSxNQUFNLEVBQUMsc0JBSFg7QUFJSUMsRUFBQUEsSUFBSSxFQUFDO0FBSlQsQ0FEaUIsRUFPakI7QUFDSUwsRUFBQUEsS0FBSyxFQUFDLDJDQURWO0FBRUlFLEVBQUFBLFdBQVcsRUFBQyxrS0FGaEI7QUFHSUUsRUFBQUEsTUFBTSxFQUFDLG1CQUhYO0FBSUlDLEVBQUFBLElBQUksRUFBQztBQUpULENBUGlCLEVBYWpCO0FBQ0lMLEVBQUFBLEtBQUssRUFBQyxpQ0FEVjtBQUVJRSxFQUFBQSxXQUFXLEVBQUMsd0tBRmhCO0FBR0lFLEVBQUFBLE1BQU0sRUFBQywrQkFIWDtBQUlJQyxFQUFBQSxJQUFJLEVBQUMsb0RBSlQ7QUFLSUMsRUFBQUEsS0FBSyxFQUFDO0FBTFYsQ0FiaUIsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHM9W1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1JlYWN0anMnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonUmVkdXgnLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDonTm9kZWpzJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J05leHRqcycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J1NlcXVlbGl6ZScsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidQb3N0Z3Jlc3FsJyxcclxuICAgICAgICBwZXJjZW50YWplOjEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6J0MrKycsXHJcbiAgICAgICAgcGVyY2VudGFqZToxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOidQeXRob24nLFxyXG4gICAgICAgIHBlcmNlbnRhamU6MTAwLFxyXG4gICAgfSxcclxuXVxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jaWVzPVtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonQWN0dWFsbWVudGUgZXN0b3kgZXN0dWRpYW5kbyBJbmdlbmllcsOtYSBiaW9tw6lkaWNhLicsXHJcbiAgICAgICAgc3VidGl0bGU6XCJNaXMgY29taWVuem9zIGVuIGxhIHByb2dyYW1hY2nDs25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlNpZW1wcmUgbWUgYXBhc2lvbsOzIGVsIGltcGFjdG8gcXVlIHRpZW5lIGxhIHRlY25vbG9nw61hIHkgbGEgY2llbmNpYSBlbiBsYSBzb2NpZWRhZCB5IHBvciBlc28gZGVjaWRpIGNvbWVuemFyIG1pcyBlc3R1ZGlvcyBoYWNlIHVub3MgYcOxb3MgZW4gZGljaGEgY2FycmVyYSwgZnVlIGRvbmRlIGNvbWVuesOzIG1pIHBhc2nDs24gcG9yIHByb2dyYW1hciB5IGdyYWNpYXMgYSB1biBncmFuIHByb2Zlc29yIHF1ZSBzdXBvIHRyYW5zbWl0aXJtZSBlbiBlc2UgbW9tZW50byBlc2EgcGFzacOzbiBxdWUgZWwgbWlzbW8gdGllbmUgY3VhbmRvIGFycmFucXVlIGNvbiBDKysuXCIsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIEJvb3RjYW0gU295SGVucnknLFxyXG4gICAgICAgIHN1YnRpdGxlOlwiRWwgdHJhYmFqbyBlbiBlcXVpcG8geSBlbCBjb21wYcOxZXJpc21vXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJIYWNlIG11eSBwb2NvIHRlcm1pbmUgbGEgYm9vdGNhbSBTb3lIZW5yeSBlbiBsYSBjdWFsIHR1dmUgdW5hIGV4cGVyaWVuY2lhIGV4cGVjaW9uYWwsIGNvbiBncmFuZGVzIGNvbXBhw7Flcm9zIHkgcHJvZmVzb3JlcywgZ3JhY2lhcyBhIGVsbG9zLCBob3kgbWUgZW5jdWVudHJvIGVuIGJ1c3F1ZWRhIGxhYm9yYWwsIGFwcmVuZMOtIHRvZG8gZWwgY2FtaW5vIHF1ZSBjb25sbGV2YSBhIGxhIGNvbnN0cnVjY2nDs24gZGUgdW5hIHDDoWdpbmEgd2ViIGRlc2RlIGVsIGZyb250IGVuZCwgcGFzYW5kbyBwb3IgZWwgYmFja2VuZCBoYXN0YSBzdSBiYXNlIGRlIGRhdG9zLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonV29ya3Nob3BzIGVuIFNveUhlbnJ5JyxcclxuICAgICAgICBzdWJ0aXRsZTpcIk11Y2hvcyBjb25vY2ltaWVudG9zXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJFbiBsYXMgdWx0aW1hcyBzZW1hbmFzIGRlIGxhIGJvb3RjYW0gdHV2ZSBsYSBvcG9ydHVuaWRhZCBkZSBwYXJjaXBhciBlbiB2YXJpb3Mgd29ya3Nob3BzIGRlIGRpdmVyc2FzIHRlbWF0aWNhcyBjb21vIFR5cGVzY3JpcHQsIFJlYWN0LCBOYXRpdmUsVGVvcsOtYSBkZSByZWRlcywgRGVwbG95bWVudCwgR2l0aHViLCBCdWVuYXMgcHJhY3RpY2FzIGRlIHByb2dyYW1hY2nDs24uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOidNaSBoaXN0b3JpYSBjb24gUHl0aG9uJyxcclxuICAgICAgICBzdWJ0aXRsZTpcIkFtaWdvcyBlbiBpbnRlcm5ldFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiRGVzcHXDqXMgZGUgaGFiZXIgdGVybWluYWRvIGRlIGN1cnNhciBDKysgZW4gbGEgdW5pdmVyc2lkYWQsIGRlY2lkw60gaW52ZXN0aWdhciBzb2JyZSBlbCBtdW5kbyBkZSBQeXRob24sIGx1ZWdvIGVuIHVuIGp1ZWdvIG1lIGhpY2UgdW5vcyBhbWlnb3MgcXVlIG1lIGVuc2XDsWFyb24gYWxndW5hIHF1ZSBvdHJhcyBjb3NhcyBxdWUgbWUgYXl1ZGFyb24gbXVjaG8sIGxsZWd1ZSBhIGltcGxlbWVudGFyIHVuIHBhciBkZSBib290cyBkZSB0ZWxlZ3JhbSBxdWUgZWplY3V0YWJhbiBmdW5jaW9uZXMgZW4gbWkgUEMgYSB0cmF2w6lzIGRlbCBzZXJ2aWNpbyBkZSBtZW5zYWplcsOtYSBkZSB0ZWxlZ3JhbSwgZW4gdW5hIG1hcXVpbmEgdmlydHVhbCBxdWUgdGVuaWEgYXJtYWRhIGNvbiBVYnVudHVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J1dvcmtzaG9wIHBsYXRhZm9ybWFzIGRlIGdlc3Rpw7NuIG3DqWRpY2EnLFxyXG4gICAgICAgIHN1YnRpdGxlOlwiRW4gbWkgdW5pdmVyc2lkYWRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlBhcnRpY2lwZSBlbiB1biB3b3Jrc2hvcCBlbiBlbCBjdWFsIHRyYXRhYmEgZWwgdGVtYSBkZSBzb2Z0d2FyZXMgb3JpZW50YWRvcyBhIGxhIGdlc3Rpw7NuIGRlIGhvc3BpdGFsZXMgeSBwbGF0YWZvcm1hcyBtZWRpY2FzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOidDaWJlcnNlZ3VyaWRhZCcsXHJcbiAgICAgICAgc3VidGl0bGU6XCJFbiBsYSB1bml2ZXJzaWRhZCBkZSBsYSBVQURFUlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiUGFydGljaXDDqSBlbiB1biB3b3Jrc2hvcCBlbiBlbCBjdWFsIHNlIHRyYXRhYmEgZWwgdGVtYSBzb2JyZSBlbCB1c28gZGUgaG9uZXkgcG9zdCBwYXJhIGxhIHByb3RlY2Npw7NuIGRlIHNlcnZpZG9yZXMseSBoYWNraW5nIGV0aWNvXCIsXHJcbiAgICB9LFxyXG5dXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0PVtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIkp1ZWdvIGRlIFBva2Vtb24gUmVhY3QtUmVkdXhcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkVzIHVuIGp1ZWdvIGRlIHBva2Vtb24gZG9uZGUgcHVlZGVzIGNhcHR1cmFyIHBva2Vtb25lcyB5IGx1Y2hhciBjb24gZWxsb3MsIHNlIHJlbGl6w7MgaW1wbGVtZW50YW5kbyBSZWFjdCBqcyB5IFJlZHV4LCB1dGlsaXphbmRvIHVuYSBBcGkgUkVTVCBwYXJhIG9idGVuZXIgbG9zIGRhdG9zIG5lY2VzYXJpb3NcIixcclxuICAgICAgICBpbWFnZW46XCJwcm95ZWN0by1wb2tlbW9uLnBuZ1wiLFxyXG4gICAgICAgIGxpbms6XCJodHRwczovL3Bva2VyYW5kb21zdGF0cy52ZXJjZWwuYXBwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJXaWtpIEZ1bGwgU3RhY2sgZGUgYWN0aXZpZGFkZXMgdHVyaXN0aWNhc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiSW1wbGVtZW50YWRhIGNvbiBOb2RlLmpzIHkgRXhwcmVzcyBwYXJhIGVsIHNlcnZpZG9yIGRlIGJhY2tlbmQsIGVsIE9STSBTZXF1ZWxpemUgeSBQb3N0Z3Jlc3FsIGNvbW8gYmFzZSBkZSBkYXRvcywgcGFyYSBlbCBmcm9udGVuZCBzZSB1dGlsaXrDsyBSZWFjdC5qcyB5IFJlZHV4LiBcIixcclxuICAgICAgICBpbWFnZW46XCJwcm95ZWN0by13aWtpLnBuZ1wiLFxyXG4gICAgICAgIGxpbms6XCJodHRwczovL2dpdGh1Yi5jb20vUm9kcmlnb1RvbGVkbzUvV2lraXRvdXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlBsYXRhZm9ybWEgZGUgY29uc3VsdGFzIG3DqWRpY2FzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJTZSByZWFsaXpvIGNvbiBOb2RlLmpzIHkgRXhwcmVzcyBwYXJhIGVsIGJhY2tlbmQsIGVsIE9STSBTZXF1ZWxpemUsIHkgUG9zdGdyZXNxbCBjb21vIGJhc2UgZGUgZGF0b3MsIHRhbWJpw6luIHNlIGltcGxhbnRvIFJlYWN0LmpzLCBSZWR1eCwgTWF0ZXJpYWxVaSBwYXJhIGVsIGZyb250ZW5kLlwiLFxyXG4gICAgICAgIGltYWdlbjpcInByb3llY3RvLWNvbnN1bHRhbmNlc3BhY2UucG5nXCIsXHJcbiAgICAgICAgbGluazpcImh0dHBzOi8vZ2l0aHViLmNvbS9Sb2RyaWdvVG9sZWRvNS9Db25zdWx0YW5jZVNwYWNlXCIsXHJcbiAgICAgICAgdmlkZW86XCJodHRwczovL3lvdXR1LmJlL2xrN0hYRkVGWHJjXCJcclxuICAgIH0sXHJcbiAgICBcclxuXSJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhamUiLCJleHBlcmllbmNpZXMiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0IiwiaW1hZ2VuIiwibGluayIsInZpZGVvIl0sInNvdXJjZVJvb3QiOiIifQ==