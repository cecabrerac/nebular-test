(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\2023\web-apps\nebular-test\src\main.ts */"zUnb");


/***/ }),

/***/ "0PcI":
/*!**************************************************************!*\
  !*** ./src/app/pages/general/graficas/graficas.component.ts ***!
  \**************************************************************/
/*! exports provided: GraficasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficasComponent", function() { return GraficasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GraficasComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraficasComponent.ɵfac = function GraficasComponent_Factory(t) { return new (t || GraficasComponent)(); };
GraficasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraficasComponent, selectors: [["app-graficas"]], decls: 5, vars: 0, consts: [[1, "col-xxxl-3", "col-md-6"]], template: function GraficasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "graficas works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwvZ3JhZmljYXMvZ3JhZmljYXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraficasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graficas',
                templateUrl: './graficas.component.html',
                styleUrls: ['./graficas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4Vsk":
/*!******************************************************!*\
  !*** ./src/app/pages/general/select-box/appUsers.ts ***!
  \******************************************************/
/*! exports provided: appUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appUsers", function() { return appUsers; });
const appUsers = [
    {
        id: 1,
        username: 'jperez',
        name: 'Juan Pérez',
        operation: '$1,100',
        gain: '$1.50',
        email: 'jperez@gmail.com',
        carros: [
            {
                marca: 'Ferrari',
                modelo: 1234,
                color: 'negro',
            },
            {
                marca: 'TEST',
                modelo: 1234,
                color: 'negro',
            },
        ],
    },
    {
        id: 2,
        username: 'wcastiblanco',
        name: 'William Castiblanco',
        operation: '$2,200',
        gain: '$2.50',
        email: 'wcastiblancoz@gmail.com',
        carros: [
            {
                marca: 'Toyota',
                modelo: 1994,
                color: 'negro',
            },
        ],
    },
    {
        id: 3,
        username: 'pmendieta',
        name: 'Pepita Mendieta',
        operation: '$3,300',
        gain: '$3.50',
        email: 'pmendietaz@gmail.com',
        carros: [
            {
                marca: 'Ford',
                modelo: 1954,
                color: 'negro',
            },
            {
                marca: 'Toyota',
                modelo: 1994,
                color: 'azul',
            },
            {
                marca: 'TEST',
                modelo: 1998,
                color: 'amarillo',
            },
        ],
    },
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'nebular-test';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "THQA":
/*!****************************************************!*\
  !*** ./src/app/pages/general/general.component.ts ***!
  \****************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class GeneralComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(); };
GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 27, vars: 0, consts: [["hasScroll", "true"], ["fixed", ""], ["routerLink", "/general/select", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/general/graficas", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/general/unsuscribe", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/general/payment", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/general/visa", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular Router App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Graficas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Retirarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pagar con visa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-layout-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Copyright \u00A9 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                templateUrl: './general.component.html',
                styleUrls: ['./general.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/eva-icons */ "tR1z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_general_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/general/general.component */ "THQA");
/* harmony import */ var _pages_general_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/general/select-box/select-box.component */ "lwaJ");
/* harmony import */ var _pages_general_graficas_graficas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/general/graficas/graficas.component */ "0PcI");
/* harmony import */ var _pages_general_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/general/user-details/user-details.component */ "mtXq");
/* harmony import */ var _pages_general_payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/general/payment-visa/payment-visa.component */ "mm3K");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({ name: 'dark' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forRoot(),
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _pages_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"],
        _pages_general_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_9__["SelectBoxComponent"],
        _pages_general_graficas_graficas_component__WEBPACK_IMPORTED_MODULE_10__["GraficasComponent"],
        _pages_general_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"],
        _pages_general_payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_12__["PaymentVisaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _pages_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"],
                    _pages_general_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_9__["SelectBoxComponent"],
                    _pages_general_graficas_graficas_component__WEBPACK_IMPORTED_MODULE_10__["GraficasComponent"],
                    _pages_general_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"],
                    _pages_general_payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_12__["PaymentVisaComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({ name: 'dark' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forRoot(),
                ],
                exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "lwaJ":
/*!******************************************************************!*\
  !*** ./src/app/pages/general/select-box/select-box.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBoxComponent", function() { return SelectBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appUsers */ "4Vsk");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SelectBoxComponent_nb_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r3.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", user_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r3.username, " ");
} }
function SelectBoxComponent_nb_user_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-user", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.nameUser)("title", ctx_r1.nameEmail);
} }
function SelectBoxComponent_nb_list_9_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Otra info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.modelo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.marca);
} }
function SelectBoxComponent_nb_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectBoxComponent_nb_list_9_nb_list_item_1_Template, 18, 4, "nb-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("threshold", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selectedUser);
} }
class SelectBoxComponent {
    constructor() {
        this.appUsers = _appUsers__WEBPACK_IMPORTED_MODULE_1__["appUsers"];
        this.loading = true;
    }
    onChange(event) {
        const selectedUserId = event;
        this.selectedUser = _appUsers__WEBPACK_IMPORTED_MODULE_1__["appUsers"].find((u) => u.id === selectedUserId);
    }
    ngOnInit() {
        this.loading = false;
    }
    getUser(event) {
        const selectedUsername = event;
        console.log(selectedUsername);
        this.findElement(selectedUsername);
    }
    findElement(username) {
        for (let i = 0; i < this.appUsers.length; i++) {
            const element = this.appUsers[i].username;
            if (element === username) {
                this.nameUser = this.appUsers[i].name;
                this.nameEmail = this.appUsers[i].email;
                this.selectedUser = this.appUsers[i].carros;
            }
        }
    }
}
SelectBoxComponent.ɵfac = function SelectBoxComponent_Factory(t) { return new (t || SelectBoxComponent)(); };
SelectBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectBoxComponent, selectors: [["app-select-box"]], decls: 10, vars: 5, consts: [["size", "medium", "accent", "success", "nbSpinnerStatus", "success", "nbSpinnerSize", "large", 1, "own-scroll", 3, "nbSpinner"], ["placeholder", "Select user", 3, "selected", "selectedChange"], ["placement", "right", 3, "value", 4, "ngFor", "ngForOf"], [3, "name", "title", 4, "ngIf"], ["nbInfiniteList", "", "class", "user-activity-list", 3, "threshold", 4, "ngIf"], ["placement", "right", 3, "value"], [3, "name", "title"], ["nbInfiniteList", "", 1, "user-activity-list", 3, "threshold"], [4, "ngFor", "ngForOf"], [1, "date"], [1, "visited-pages-count"], [1, "caption"], [1, "value"]], template: function SelectBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function SelectBoxComponent_Template_nb_select_selectedChange_6_listener($event) { ctx.getUser($event); return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectBoxComponent_nb_option_7_Template, 2, 3, "nb-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SelectBoxComponent_nb_user_8_Template, 1, 2, "nb-user", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectBoxComponent_nb_list_9_Template, 2, 2, "nb-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUser);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInfiniteListDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"]], styles: ["nb-layout-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n}\n\nnb-select[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n\nnb-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: normal;\n  border: none;\n  padding-top: nb-theme(card-header-with-select-padding-top);\n  padding-bottom: nb-theme(card-header-with-select-padding-bottom);\n}\n\nnb-list[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\nnb-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin: 0 -0.25rem;\n}\n\nnb-user[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n\n.date[_ngcontent-%COMP%], .visited-pages-count[_ngcontent-%COMP%], .value[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: nb-theme(color-success-default);\n}\n\n.infinite-cards[_ngcontent-%COMP%]   nb-card.own-scroll[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC9zZWxlY3QtYm94L3NlbGVjdC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBEQUFBO0VBQ0EsZ0VBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7O0VBRUUsa0JBQUE7QUFNRjs7QUFIQTs7O0VBR0UsbUJBQUE7RUFDQSxzQ0FBQTtBQU1GOztBQUZJO0VBQ0UsWUFBQTtBQUtOOztBQUFBO0VBQ0UsT0FBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZW5lcmFsL3NlbGVjdC1ib3gvc2VsZWN0LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWxheW91dC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcbm5iLXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG59XHJcbm5iLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmctdG9wOiBuYi10aGVtZShjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcCk7XHJcbiAgcGFkZGluZy1ib3R0b206IG5iLXRoZW1lKGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tKTtcclxufVxyXG5uYi1saXN0IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxubmItbGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAwIC0wLjI1cmVtO1xyXG59XHJcbm5iLXVzZXIsXHJcbm5iLXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZGF0ZSxcclxuLnZpc2l0ZWQtcGFnZXMtY291bnQsXHJcbi52YWx1ZSB7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBjb2xvcjogbmItdGhlbWUoY29sb3Itc3VjY2Vzcy1kZWZhdWx0KTtcclxufVxyXG4uaW5maW5pdGUtY2FyZHMge1xyXG4gIG5iLWNhcmQge1xyXG4gICAgJi5vd24tc2Nyb2xsIHtcclxuICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-box',
                templateUrl: './select-box.component.html',
                styleUrls: ['./select-box.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mm3K":
/*!**********************************************************************!*\
  !*** ./src/app/pages/general/payment-visa/payment-visa.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentVisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentVisaComponent", function() { return PaymentVisaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");




class PaymentVisaComponent {
    // constructor(protected ref: NbDialogRef<PaymentVisaComponent>) {}
    cancel() {
        // this.ref.close();
    }
    submit(name) {
        // this.ref.close(name);
    }
    ngOnInit() { }
}
PaymentVisaComponent.ɵfac = function PaymentVisaComponent_Factory(t) { return new (t || PaymentVisaComponent)(); };
PaymentVisaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentVisaComponent, selectors: [["app-payment-visa"]], decls: 112, vars: 0, consts: [[1, "container"], [1, "form-title"], [1, "visaCard-and-form"], [1, "dots-and-card"], [1, "payment-dots"], ["width", "65", "height", "115", "viewBox", "0 0 65 115", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "17.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 17.5 12.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 32.5 12.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 47.5 12.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 17.5 42.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 47.5 62.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "2.5", "r", "2.5", "transform", "rotate(90 62.5 2.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "82.5", "r", "2.5", "transform", "rotate(90 47.5 82.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 62.5 22.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 47.5 42.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 32.5 42.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 32.5 62.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 17.5 22.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 32.5 22.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 47.5 22.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 17.5 52.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "72.5", "r", "2.5", "transform", "rotate(90 17.5 72.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "72.5", "r", "2.5", "transform", "rotate(90 47.5 72.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 62.5 12.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "92.5", "r", "2.5", "transform", "rotate(90 47.5 92.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 62.5 32.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 47.5 52.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 32.5 52.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 17.5 32.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 32.5 32.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 47.5 32.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 17.5 62.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "82.5", "r", "2.5", "transform", "rotate(90 17.5 82.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "92.5", "r", "2.5", "transform", "rotate(90 2.5 92.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "112.5", "r", "2.5", "transform", "rotate(90 2.5 112.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "72.5", "r", "2.5", "transform", "rotate(90 2.5 72.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "82.5", "r", "2.5", "transform", "rotate(90 2.5 82.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "102.5", "r", "2.5", "transform", "rotate(90 2.5 102.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 2.5 12.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 2.5 42.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 2.5 22.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 2.5 52.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 2.5 32.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 2.5 62.5)", "fill", "#E0ECF7"], [1, "card"], [1, "card-logo"], ["src", "https://cdn-icons-png.flaticon.com/128/196/196578.png", "alt", "visa-logo"], [1, "card-number"], [1, "cardName-cardExp"], [1, "card-name"], ["id", "card-name"], [1, "card-expiry"], ["id", "month"], ["id", "year"], [1, "form-data"], [1, "form-name", "form-detail"], ["for", "name"], ["type", "text", "placeholder", "Mrs Kate Smith", "id", "name", "maxlength", "24"], ["cardHolderName", ""], ["id", "alert-1", 1, "alert"], [1, "form-number", "form-detail"], ["for", "number"], ["type", "text", "placeholder", "0000 0000 0000 0000", "id", "number", "onkeypress", "return isNumeric(event)"], ["cardNumber", ""], ["id", "alert-2", 1, "alert"], [1, "form-exp-and-cvv"], [1, "form-exp", "form-detail"], ["for", "date"], ["type", "text", "placeholder", "MM/YY", "id", "date", "onkeypress", "return isNumeric(event)"], ["expDate", ""], ["id", "alert-3", 1, "alert"], [1, "form-cvv", "form-detail"], ["for", "cvv"], ["type", "password", "placeholder", "0000", "id", "cvv", "maxlength", "4", "onkeypress", "return isNumeric(event)"], ["cvv", ""], ["id", "alert-4", 1, "alert"], [1, "buttons"], ["nbButton", "", "status", "danger", 1, "cancel", 3, "click"], ["status", "success", 1, "submit", 3, "click"]], template: function PaymentVisaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Visa Data Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "circle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "0000\u00A00000\u00A00000\u00A00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Card Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mrs Kate Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Valid Thru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "MM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "YY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Cardholder Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Full name required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 66, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Invalid card number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Exp Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Invalid date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "CVV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Invalid CVV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentVisaComponent_Template_button_click_108_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentVisaComponent_Template_button_click_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79); return ctx.submit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 688px;\n  background-color: #3e3a6b;\n  border-radius: 10px;\n  box-shadow: inset -2px 2px 2px white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  text-align: center;\n  padding-bottom: 6px;\n  color: white;\n  text-shadow: 2px 2px 2px black;\n  border-bottom: solid 1px white;\n}\n\n.visaCard-and-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 12px;\n  padding: 12px;\n}\n\n.dots-and-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 180px;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  color: #ffffff;\n  background: linear-gradient(to bottom, #17c9ff 0%, #655dff 50%);\n  box-shadow: -0.6rem 0.6rem 1.8rem #4f46f83d;\n  border: 1px solid #ffffff;\n  padding: 12px;\n}\n\n.card-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  justify-self: flex-end;\n  height: auto;\n}\n\n.card-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  height: auto;\n}\n\n.card-number[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1.2rem;\n  letter-spacing: 0.12rem;\n}\n\n.cardName-cardExp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n\n.card-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.card-expiry[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-expiry[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  text-align: right;\n}\n\n.card-expiry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: right;\n}\n\n.form-data[_ngcontent-%COMP%] {\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n}\n\n.form-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-exp-and-cvv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.form-exp[_ngcontent-%COMP%] {\n  width: 140px;\n}\n\n.form-cvv[_ngcontent-%COMP%] {\n  width: 140px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: space-evenly;\n  gap: 2rem;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 6px;\n  background-color: #5c0909;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.cancel[_ngcontent-%COMP%]:hover {\n  background-color: #914e4e;\n}\n\n.submit[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 6px;\n  background-color: darkgreen;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n  background-color: #039603;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-shadow: 2px 2px 2px #13073b;\n}\n\n.alert[_ngcontent-%COMP%] {\n  color: red;\n  text-shadow: 2px 2px 2px black;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 348px;\n  }\n\n  .visaCard-and-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC9wYXltZW50LXZpc2EvcGF5bWVudC12aXNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsK0RBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLFlBQUE7RUFFRjs7RUFDQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwvcGF5bWVudC12aXNhL3BheW1lbnQtdmlzYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA2ODhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDU4LCAxMDcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAycHggMnB4IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHdoaXRlO1xyXG59XHJcblxyXG4udmlzYUNhcmQtYW5kLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2x1bW4tZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5kb3RzLWFuZC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE3YzlmZiAwJSwgIzY1NWRmZiA1MCUpO1xyXG4gIGJveC1zaGFkb3c6IC0wLjZyZW0gMC42cmVtIDEuOHJlbSAjNGY0NmY4M2Q7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZC1sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWxvZ28gaW1nIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmQtbnVtYmVyIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XHJcbn1cclxuXHJcbi5jYXJkTmFtZS1jYXJkRXhwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jYXJkLW5hbWUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2FyZC1uYW1lIGgzIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jYXJkLW5hbWUgcCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZC1leHBpcnkge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2FyZC1leHBpcnkgaDMge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkLWV4cGlyeSBwIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi8vIEVTVElMT1MgUEFSQSBMQSBQQVJURSBERUwgRk9STVVMQVJJTzpcclxuXHJcbi5mb3JtLWRhdGEge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtLWRldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybS1leHAtYW5kLWN2diB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0tZXhwIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWN2diB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLmNhbmNlbCB7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOSwgOSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhbmNlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NSwgNzgsIDc4KTtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTUwLCAzKTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDE5LCA3LCA1OSk7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzQ4cHg7XHJcbiAgfVxyXG5cclxuICAudmlzYUNhcmQtYW5kLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentVisaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-visa',
                templateUrl: './payment-visa.component.html',
                styleUrls: ['./payment-visa.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "mtXq":
/*!**********************************************************************!*\
  !*** ./src/app/pages/general/user-details/user-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");



class UserDetailsComponent {
    constructor() { }
    ngOnInit() { }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], inputs: { userSelected: "userSelected" }, decls: 7, vars: 3, consts: [[1, "colored-column-warning"], [1, "colored-column-danger"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User selected: ", ctx.userSelected.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Operation: ", ctx.userSelected.operation, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gain: ", ctx.userSelected.gain, "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"]], styles: ["nb-layout-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWxheW91dC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-details',
                templateUrl: './user-details.component.html',
                styleUrls: ['./user-details.component.scss'],
            }]
    }], function () { return []; }, { userSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'general',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-general-general-module */ "pages-general-general-module").then(__webpack_require__.bind(null, /*! ./pages/general/general.module */ "yebe")).then((m) => m.GeneralModule),
    },
    {
        path: '**',
        redirectTo: 'general',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map