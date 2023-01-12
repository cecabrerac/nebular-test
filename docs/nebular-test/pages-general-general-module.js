(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-general-module"],{

/***/ "7g3V":
/*!******************************************************************!*\
  !*** ./src/app/pages/general/unsuscribe/unsuscribe.component.ts ***!
  \******************************************************************/
/*! exports provided: UnsuscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsuscribeComponent", function() { return UnsuscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UnsuscribeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccione una opci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnsuscribeComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccione una opci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnsuscribeComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccione una opci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnsuscribeComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Se requiere un comentario de al menos 7 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UnsuscribeComponent {
    constructor(fb) {
        this.fb = fb;
        this.loading = true;
        this.submitted = false;
        this.answersForm = this.fb.group({
            pregunta1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pregunta2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pregunta3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comentario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
        });
    }
    onSubmit() {
        this.submitted = true;
        // Transforma información en formato JSON:
        this.stringifiedData = JSON.stringify(this.answersForm.value);
        console.log(this.stringifiedData); // Prueba de salida de datos json por consola.
    }
    get pregunta1() {
        return this.answersForm.get('pregunta1');
    }
    get pregunta2() {
        return this.answersForm.get('pregunta2');
    }
    get pregunta3() {
        return this.answersForm.get('pregunta3');
    }
    get comentario() {
        return this.answersForm.get('comentario');
    }
    ngOnInit() {
        this.loading = false;
    }
}
UnsuscribeComponent.ɵfac = function UnsuscribeComponent_Factory(t) { return new (t || UnsuscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
UnsuscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnsuscribeComponent, selectors: [["app-unsuscribe"]], decls: 76, vars: 13, consts: [[3, "hidden"], ["size", "medium", "accent", "success", "nbSpinnerStatus", "success", "nbSpinnerSize", "large", 1, "own-scroll", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], ["id", "pregunta1"], ["type", "radio", "id", "pregunta1", "formControlName", "pregunta1", "name", "pregunta1", 1, "form-control"], ["value", "Muy satisfecho"], ["value", "Satisfecho"], ["value", "Poco satisfecho"], ["value", "Nada satisfecho"], [1, "alert"], [4, "ngIf"], ["id", "pregunta2"], ["type", "radio", "id", "pregunta2", "formControlName", "pregunta2", "name", "pregunta2", 1, "form-control"], ["value", "Muy probable"], ["value", "Probable"], ["value", "Poco probable"], ["value", "Nada probable"], ["id", "pregunta3"], ["type", "radio", "id", "pregunta3", "formControlName", "pregunta3", "name", "pregunta3", 1, "form-control"], ["value", "Muy buena"], ["value", "Buena"], ["value", "Regular"], ["value", "Mala"], ["id", "comentario"], [1, "comentario"], ["nbInput", "", "fullWidth", "", "id", "comentario", "formControlName", "comentario", "name", "comentario", "placeholder", "Escribe aqu\u00ED tu comentario (m\u00EDnimo 7 caracteres)", 1, "form-control"], [1, "btnDespedida"], ["nbButton", "", "type", "submit", 3, "disabled"], ["id", "despedida", 3, "hidden"], ["nbButton", "", "type", "button", 3, "click"]], template: function UnsuscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Retirarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ayudanos a mejorar: por favor responde esta breve encuesta y dejanos tu comentario acerca de nuestros servicios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UnsuscribeComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cu\u00E1n satisfecho se encuentra de la empresa en general?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-radio", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Muy satisfecho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-radio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Satisfecho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-radio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Poco satisfecho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-radio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nada satisfecho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UnsuscribeComponent_div_23_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cu\u00E1n probable es que recomiende nuestros productos o servicios?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-radio-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Muy probable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-radio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Probable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-radio", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Poco probable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-radio", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nada probable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UnsuscribeComponent_div_38_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nb-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Como calificar\u00EDa la calidad de la atenci\u00F3n recibida?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-radio-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nb-radio", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Muy buena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nb-radio", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Buena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-radio", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nb-radio", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Mala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UnsuscribeComponent_div_53_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "D\u00E9janos un comentario adicional?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UnsuscribeComponent_div_60_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Esperamos que regreses pronto!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Acabas de enviar la siguiente informaci\u00F3n en formato JSON:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnsuscribeComponent_Template_button_click_74_listener() { return ctx.submitted = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Editar respuestas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.answersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pregunta1 && ctx.pregunta1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pregunta2 && ctx.pregunta2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pregunta3 && ctx.pregunta3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comentario && ctx.comentario.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.answersForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.answersForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 11, ctx.answersForm.value));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nnb-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nnb-card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.alert[_ngcontent-%COMP%] {\n  color: #ff3c3c;\n  margin-left: 1.6rem;\n}\n\n.btnDespedida[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC91bnN1c2NyaWJlL3Vuc3VzY3JpYmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwvdW5zdXNjcmliZS91bnN1c2NyaWJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxubmItcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxubmItY2FyZC1oZWFkZXIgaDYge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCA2MCwgNjApO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjZyZW07XHJcbn1cclxuXHJcbi5idG5EZXNwZWRpZGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsuscribeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unsuscribe',
                templateUrl: './unsuscribe.component.html',
                styleUrls: ['./unsuscribe.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "9XAT":
/*!************************************************************!*\
  !*** ./src/app/pages/general/payment/payment.component.ts ***!
  \************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payment-visa/payment-visa.component */ "mm3K");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");




class PaymentComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openVisa() {
        this.dialogService.open(_payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_1__["PaymentVisaComponent"]);
    }
    ngOnInit() { }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 11, vars: 0, consts: [[1, "paySelection"], ["nbButton", "", "type", "button", 3, "click"], ["nbButton", "", "type", " button"], ["nbButton", "", "type", "button"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Por favor elija su forma de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tarjeta de cr\u00E9dito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_5_listener() { return ctx.openVisa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Visa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mastercard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "American Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: [".paySelection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZW5lcmFsL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXlTZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "R7qX":
/*!*********************************************************!*\
  !*** ./src/app/pages/general/general-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GeneralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoutingModule", function() { return GeneralRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.component */ "THQA");
/* harmony import */ var _graficas_graficas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graficas/graficas.component */ "0PcI");
/* harmony import */ var _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-box/select-box.component */ "lwaJ");
/* harmony import */ var _unsuscribe_unsuscribe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unsuscribe/unsuscribe.component */ "7g3V");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "9XAT");
/* harmony import */ var _payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-visa/payment-visa.component */ "mm3K");










const routes = [
    {
        path: '',
        component: _general_component__WEBPACK_IMPORTED_MODULE_2__["GeneralComponent"],
        children: [
            { path: 'select', component: _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_4__["SelectBoxComponent"] },
            { path: 'graficas', component: _graficas_graficas_component__WEBPACK_IMPORTED_MODULE_3__["GraficasComponent"] },
            { path: 'unsuscribe', component: _unsuscribe_unsuscribe_component__WEBPACK_IMPORTED_MODULE_5__["UnsuscribeComponent"] },
            { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"] },
            { path: 'visa', component: _payment_visa_payment_visa_component__WEBPACK_IMPORTED_MODULE_7__["PaymentVisaComponent"] },
        ],
    },
];
class GeneralRoutingModule {
}
GeneralRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRoutingModule });
GeneralRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRoutingModule_Factory(t) { return new (t || GeneralRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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


class PaymentVisaComponent {
    constructor() { }
    // close() {
    //   this.dialogRef.close();
    // }
    ngOnInit() {
        this.codePen();
    }
    codePen() {
        //the JavaScript CodePen code goes here
        const form = document.querySelector('.form');
        const name = document.getElementById('name');
        const number = document.getElementById('number');
        const date = document.getElementById('date');
        const cvv = document.getElementById('cvv');
        const visa = document.querySelector('.card');
        /*  SHOW ERROR  */
        function showError(element, error) {
            if (error === true) {
                element.style.opacity = '1';
            }
            else {
                element.style.opacity = '0';
            }
        }
        /*  CHANGE THE FORMAT NAME  */
        name.addEventListener('input', function () {
            let alert1 = document.getElementById('alert-1');
            let error = this.innerHTML === '';
            showError(alert1, error);
            document.getElementById('card-name').textContent = this.innerHTML;
        });
        /*  CHANGE THE FORMAT CARD NUMBER*/
        number.addEventListener('input', function (e) {
            this.innerHTML = numberAutoFormat();
            //show error when is different of 16 numbers and 3 white space
            let error = this.innerHTML.length !== 19;
            let alert2 = document.getElementById('alert-2');
            showError(alert2, error);
            document.querySelector('.card__number').textContent = this.innerHTML;
        });
        function numberAutoFormat() {
            let valueNumber = number.innerHTML;
            // if white space change to ''. If is not a number between 0-9 change to ''
            let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            // the value got min of 4 digits and max of 16
            let matches = v.match(/\d{4,16}/g);
            let match = (matches && matches[0]) || '';
            let parts = [];
            for (let i = 0; i < match.length; i += 4) {
                // after 4 digits add a new element to the Array
                // e.g. "4510023" -> [4510, 023]
                parts.push(match.substring(i, i + 4));
            }
            if (parts.length) {
                // add a white space after 4 digits
                return parts.join(' ');
            }
            else {
                return valueNumber;
            }
        }
        /*  CHANGE THE FORMAT DATE  */
        date.addEventListener('input', function (e) {
            this.innerHTML = dateAutoFormat();
            // show error if is not a valid date
            let alert3 = document.getElementById('alert-3');
            showError(alert3, isNotDate(this));
            let dateNumber = date.innerHTML.match(/\d{2,4}/g);
            document.getElementById('month').textContent = dateNumber[0];
            document.getElementById('year').textContent = dateNumber[1];
        });
        function isNotDate(element) {
            let actualDate = new Date();
            let month = actualDate.getMonth() + 1; // start january 0 we need to add + 1
            let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
            let dateNumber = element.value.match(/\d{2,4}/g);
            let monthNumber = Number(dateNumber[0]);
            let yearNumber = Number(dateNumber[1]);
            if (element.value === '' ||
                monthNumber < 1 ||
                monthNumber > 12 ||
                yearNumber < year ||
                (monthNumber <= month && yearNumber === year)) {
                return true;
            }
            else {
                return false;
            }
        }
        function dateAutoFormat() {
            let dateValue = date.innerHTML;
            // if white space -> change to ''. If is not a number between 0-9 -> change to ''
            let v = dateValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            // min of 2 digits and max of 4
            let matches = v.match(/\d{2,4}/g);
            let match = (matches && matches[0]) || '';
            let parts = [];
            for (let i = 0; i < match.length; i += 2) {
                // after 4 digits add a new element to the Array
                // e.g. "4510023" -> [4510, 023]
                parts.push(match.substring(i, i + 2));
            }
            if (parts.length) {
                // add a white space after 4 digits
                return parts.join('/');
            }
            else {
                return dateValue;
            }
        }
        /*  CHANGE THE FORMAT CVV  */
        cvv.addEventListener('input', function (e) {
            let alert4 = document.getElementById('alert-4');
            let error = this.innerHTML.length < 3;
            showError(alert4, error);
        });
        /* CHECK IF KEY PRESSED IS A NUMBER (input of card number, date and cvv) */
        function isNumeric(event) {
            if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode > 31) {
                return false;
            }
        }
        /*  VALIDATION FORM WHEN PRESS THE BUTTON   */
        form.addEventListener('submit', function (e) {
            // 1. if there is not any name
            // 2. if the length of the number card is not valid (16 numbers and 3 white space)
            // 3. if is not a valid date (4 number and "/" or is not a valid date)
            // 4. if is not a valid cvv
            if (name.innerHTML === '' ||
                number.innerHTML.length !== 19 ||
                date.innerHTML.length !== 5 ||
                isNotDate(date) === true ||
                cvv.innerHTML.length < 3) {
                e.preventDefault();
            }
            // 5. if any input is empty show the alert of that input
            let input = document.querySelectorAll('input');
            for (let i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    // input[i].nextElementSibling.style.opacity = '1';
                }
            }
        });
    }
}
PaymentVisaComponent.ɵfac = function PaymentVisaComponent_Factory(t) { return new (t || PaymentVisaComponent)(); };
PaymentVisaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentVisaComponent, selectors: [["app-payment-visa"]], decls: 105, vars: 0, consts: [[1, "container"], [1, "payment"], [1, "payment__shadow-dots"], [1, "payment__dots"], ["width", "65", "height", "115", "viewBox", "0 0 65 115", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "17.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "2.5", "r", "2.5", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 17.5 12.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 32.5 12.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 47.5 12.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 17.5 42.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 47.5 62.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "2.5", "r", "2.5", "transform", "rotate(90 62.5 2.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "82.5", "r", "2.5", "transform", "rotate(90 47.5 82.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 62.5 22.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 47.5 42.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 32.5 42.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 32.5 62.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 17.5 22.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 32.5 22.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 47.5 22.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 17.5 52.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "72.5", "r", "2.5", "transform", "rotate(90 17.5 72.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "72.5", "r", "2.5", "transform", "rotate(90 47.5 72.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 62.5 12.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "92.5", "r", "2.5", "transform", "rotate(90 47.5 92.5)", "fill", "#E0ECF7"], ["cx", "62.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 62.5 32.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 47.5 52.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 32.5 52.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 17.5 32.5)", "fill", "#E0ECF7"], ["cx", "32.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 32.5 32.5)", "fill", "#E0ECF7"], ["cx", "47.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 47.5 32.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 17.5 62.5)", "fill", "#E0ECF7"], ["cx", "17.5", "cy", "82.5", "r", "2.5", "transform", "rotate(90 17.5 82.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "92.5", "r", "2.5", "transform", "rotate(90 2.5 92.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "112.5", "r", "2.5", "transform", "rotate(90 2.5 112.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "72.5", "r", "2.5", "transform", "rotate(90 2.5 72.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "82.5", "r", "2.5", "transform", "rotate(90 2.5 82.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "102.5", "r", "2.5", "transform", "rotate(90 2.5 102.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "12.5", "r", "2.5", "transform", "rotate(90 2.5 12.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "42.5", "r", "2.5", "transform", "rotate(90 2.5 42.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "22.5", "r", "2.5", "transform", "rotate(90 2.5 22.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "52.5", "r", "2.5", "transform", "rotate(90 2.5 52.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "32.5", "r", "2.5", "transform", "rotate(90 2.5 32.5)", "fill", "#E0ECF7"], ["cx", "2.5", "cy", "62.5", "r", "2.5", "transform", "rotate(90 2.5 62.5)", "fill", "#E0ECF7"], [1, "card"], [1, "card__visa"], ["enable-background", "new 0 0 291.764 291.764", "version", "1.1", "viewbox", "5 70 290 200", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 1, "visa"], ["d", "m119.26 100.23l-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896 0.1-3.756 4.24-7.604 13.485-7.604 7.604-0.191 13.193 1.596 17.433 3.374l2.124 0.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-0.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-0.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152 0.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c0.474 0.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zm-160.86-54.796l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021h-24.764v-0.01z", "fill", "#FFFFFF", 1, "svgcolor"], ["d", "m51.916 111.98c-1.787-6.948-7.486-11.634-15.226-11.734h-36.316l-0.374 1.686c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z", "fill", "#FFFFFF", 1, "svgtipcolor"], [1, "card__number"], [1, "card__name"], ["id", "card-name"], [1, "card__expiry"], ["id", "month"], ["id", "year"], [1, "form"], [1, "form__name", "form__detail"], ["for", "name"], ["type", "text", "placeholder", "Mrs Kate Smith", "id", "name", "maxlength", "24"], ["id", "alert-1", 1, "alert"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.3163 9.00362C11.8593 10.0175 11.1335 11.25 9.99343 11.25H2.00657C0.866539 11.25 0.140732 10.0175 0.683711 9.00362L4.67714 1.54691C5.24618 0.484362 6.75381 0.484362 7.32286 1.54691L11.3163 9.00362ZM5.06238 4.49805C5.02858 3.95721 5.4581 3.5 6 3.5C6.5419 3.5 6.97142 3.95721 6.93762 4.49805L6.79678 6.75146C6.77049 7.17221 6.42157 7.5 6 7.5C5.57843 7.5 5.22951 7.17221 5.20322 6.75146L5.06238 4.49805ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10C6.55228 10 7 9.55229 7 9C7 8.44772 6.55228 8 6 8Z", "fill", "#FF6A96"], [1, "form__number", "form__detail"], ["for", "number"], ["type", "text", "placeholder", "0000 0000 0000 0000", "id", "number", "onkeypress", "return isNumeric(event)"], ["id", "alert-2", 1, "alert"], [1, "form__expiry", "form__detail"], ["for", "date"], ["type", "text", "placeholder", "MM/YY", "id", "date", "onkeypress", "return isNumeric(event)"], ["id", "alert-3", 1, "alert"], [1, "form__cvv", "form__detail"], ["for", "cvv"], ["type", "password", "placeholder", "0000", "id", "cvv", "maxlength", "4", "onkeypress", "return isNumeric(event)"], ["id", "alert-4", 1, "alert"], ["type", "submit", 1, "form__btn"]], template: function PaymentVisaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "circle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "circle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "0000\u00A00000\u00A00000\u00A00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Card Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mrs Kate Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Valid Thru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "MM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "YY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cardholder Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Full name required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Invalid card number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Exp Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Invalid date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "CVV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Invalid CVV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]:root {\n  --primary-light: #8e8aff;\n  --primary: #655dff;\n  --primary-dark: #4f46f8;\n  --secondary: #17c9ff;\n  --alert: #ff6a96;\n  --greyLight-1: #e0ecf7;\n  --greyLight-2: #c8dbf0;\n  --greyDark-1: #92acc4;\n  --greyDark-2: #5a768f;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 45%;\n  overflow-y: scroll;\n  background: var(--greyLight-1);\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.03rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.payment[_ngcontent-%COMP%] {\n  width: 74.8rem;\n  height: 48rem;\n  border-color: gray;\n  border-radius: 0.8rem;\n  background: #6e6da7;\n  display: grid;\n  grid-template-columns: 32rem 24.8rem;\n  padding: 2rem 3rem;\n  grid-gap: 3rem;\n  align-items: center;\n  position: relative;\n}\n\n.payment__dots[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 4rem;\n}\n\n.payment__shadow-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 4rem;\n  width: 6.5rem;\n  height: 11.5rem;\n  background: linear-gradient(to bottom, #e0ecf700 0%, #ffffff 100%);\n  z-index: 200;\n}\n\n.card[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  width: 32rem;\n  height: 20rem;\n  border-radius: 1rem;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  padding: 0 2rem;\n  align-items: center;\n  color: #ffffff;\n  background: linear-gradient(to bottom, var(--secondary) 0%, var(--primary) 50%);\n  box-shadow: -0.6rem 0.6rem 1.8rem #4f46f83d;\n  border: 1px solid #ffffff;\n  z-index: 200;\n  position: relative;\n}\n\n.card__visa[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n  grid-column: 2/3;\n  overflow: hidden;\n  width: 20rem;\n  height: auto;\n}\n\n.card__number[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n  grid-column: 1/3;\n  grid-row: 2/3;\n  font-size: 1.8rem;\n  letter-spacing: 0.12rem;\n}\n\n.card__name[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n}\n\n.card__name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  margin-bottom: 0.8rem;\n  font-weight: 300;\n}\n\n.card__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.card__expiry[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  justify-self: flex-end;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.card__expiry[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  margin-bottom: 0.8rem;\n  font-weight: 300;\n}\n\n.card__expiry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.form[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: repeat(2, 11rem);\n  grid-template-rows: repeat(5, min-content);\n  grid-column-gap: 2.8rem;\n  grid-row-gap: 1rem;\n  color: var(--greyDark-2);\n}\n\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  grid-column: 1/3;\n  line-height: 1;\n  margin-bottom: 1.4rem;\n  font-family: \"Inter\", sans-serif;\n}\n\n.form__detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  padding-bottom: 0.2rem;\n  color: var(--greyDark-1);\n}\n\n.form__name[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  justify-self: stretch;\n}\n\n.form__number[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 3/4;\n  justify-self: stretch;\n}\n\n.form__expiry[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 4/5;\n}\n\n.form__cvv[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  grid-row: 4/5;\n  justify-self: flex-end;\n  width: 100%;\n}\n\n.form__cvv[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.form__cvv[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  top: -0.4rem;\n  left: 2.4rem;\n  color: var(--greyDark-1);\n}\n\n.form__btn[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 5/6;\n  height: 3.8rem;\n  border-radius: 0.6rem;\n  border: none;\n  background: var(--primary);\n  color: #ffffff;\n  justify-self: stretch;\n  font-family: inherit;\n  font-size: 1.6rem;\n  cursor: pointer;\n}\n\n.form__btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form__btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n\n.form[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  top: 3.4rem;\n  margin-left: 1rem;\n  color: var(--primary-light);\n  stroke: var(--primary);\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  pointer-events: none;\n  font-size: 1.4rem;\n  padding: 0 0 1rem 0;\n  line-height: 1;\n  color: var(--greyDark-1);\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1rem 4rem;\n  border: none;\n  background: transparent;\n  border-radius: 0.6rem;\n  border: 1px solid var(--greyLight-2);\n  color: var(--greyDark-2);\n  font-family: inherit;\n  font-size: 1.4rem;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--greyLight-1);\n  font-size: inherit;\n  letter-spacing: 0.12rem;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--primary-light);\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 1.2rem;\n  color: var(--alert);\n  margin-top: 0.6rem;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n}\n\n.alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.dribbble[_ngcontent-%COMP%] {\n  position: fixed;\n  font-size: 36px;\n  right: 20px;\n  bottom: 20px;\n  color: #ea4c89;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC9wYXltZW50LXZpc2EvcGF5bWVudC12aXNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtFQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLCtFQUFBO0VBS0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxGOztBQU9FO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMSjs7QUFPRTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUxKOztBQU9FO0VBQ0UsYUFBQTtBQUxKOztBQU9JO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMTjs7QUFPSTtFQUNFLGlCQUFBO0FBTE47O0FBUUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQU5KOztBQU9JO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMTjs7QUFPSTtFQUNFLGlCQUFBO0FBTE47O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBUEY7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQVBKOztBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFSSjs7QUFXRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBVEo7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQVRKOztBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBVEo7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFUSjs7QUFVSTtFQUNFLGFBQUE7QUFSTjs7QUFXSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFUTjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVko7O0FBV0k7RUFDRSxhQUFBO0FBVE47O0FBV0k7RUFDRSwrQkFBQTtBQVROOztBQWFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQVhKOztBQWNFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBWko7O0FBZUU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFlSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWJOOztBQWVJO0VBQ0UsYUFBQTtBQWJOOztBQWVJO0VBQ0Usc0NBQUE7QUFiTjs7QUFrQkE7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFmRjs7QUFnQkU7RUFDRSxvQkFBQTtBQWRKOztBQWtCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBZkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZW5lcmFsL3BheW1lbnQtdmlzYS9wYXltZW50LXZpc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjOGU4YWZmO1xyXG4gIC0tcHJpbWFyeTogIzY1NWRmZjtcclxuICAtLXByaW1hcnktZGFyazogIzRmNDZmODtcclxuICAtLXNlY29uZGFyeTogIzE3YzlmZjtcclxuICAtLWFsZXJ0OiAjZmY2YTk2O1xyXG4gIC0tZ3JleUxpZ2h0LTE6ICNlMGVjZjc7XHJcbiAgLS1ncmV5TGlnaHQtMjogI2M4ZGJmMDtcclxuICAtLWdyZXlEYXJrLTE6ICM5MmFjYzQ7XHJcbiAgLS1ncmV5RGFyay0yOiAjNWE3NjhmO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogNDUlOyAvLyAxcmVtID0gMTBweCAgICAxMDAlID0gMTZweFxyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5TGlnaHQtMSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBheW1lbnQge1xyXG4gIHdpZHRoOiA3NC44cmVtO1xyXG4gIGhlaWdodDogNDhyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICBiYWNrZ3JvdW5kOiAjNmU2ZGE3O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnJlbSAyNC44cmVtO1xyXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICBncmlkLWdhcDogM3JlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fZG90cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIGxlZnQ6IDRyZW07XHJcbiAgfVxyXG5cclxuICAmX19zaGFkb3ctZG90cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIGxlZnQ6IDRyZW07XHJcbiAgICB3aWR0aDogNi41cmVtO1xyXG4gICAgaGVpZ2h0OiAxMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2UwZWNmNzAwIDAlLCAjZmZmZmZmIDEwMCUpO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICB3aWR0aDogMzJyZW07XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1zZWNvbmRhcnkpIDAlLFxyXG4gICAgdmFyKC0tcHJpbWFyeSkgNTAlXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAtMC42cmVtIDAuNnJlbSAxLjhyZW0gIzRmNDZmODNkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fdmlzYSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgJl9fbnVtYmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIG1vbm9zcGFjZTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XHJcbiAgfVxyXG4gICZfX25hbWUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fZXhwaXJ5IHtcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMXJlbSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWluLWNvbnRlbnQpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMi44cmVtO1xyXG4gIGdyaWQtcm93LWdhcDogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tZ3JleURhcmstMik7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS40cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gICZfX2RldGFpbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5RGFyay0xKTtcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xyXG4gIH1cclxuICAmX19udW1iZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xyXG4gIH1cclxuICAmX19leHBpcnkge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xyXG4gIH1cclxuICAmX19jdnYge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIHRvcDogLTAuNHJlbTtcclxuICAgICAgbGVmdDogMi40cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JleURhcmstMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2J0biB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICBncmlkLXJvdzogNSAvIDY7XHJcbiAgICBoZWlnaHQ6IDMuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRvcDogMy40cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgICBzdHJva2U6IHZhcigtLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5RGFyay0xKTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlMaWdodC0yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5RGFyay0yKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JleUxpZ2h0LTEpO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcclxuICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmRyaWJiYmxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBjb2xvcjogI2VhNGM4OTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentVisaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-visa',
                templateUrl: './payment-visa.component.html',
                styleUrls: ['./payment-visa.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yebe":
/*!*************************************************!*\
  !*** ./src/app/pages/general/general.module.ts ***!
  \*************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _general_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-routing.module */ "R7qX");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _unsuscribe_unsuscribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unsuscribe/unsuscribe.component */ "7g3V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "9XAT");









class GeneralModule {
}
GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _general_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_unsuscribe_unsuscribe_component__WEBPACK_IMPORTED_MODULE_4__["UnsuscribeComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _general_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_unsuscribe_unsuscribe_component__WEBPACK_IMPORTED_MODULE_4__["UnsuscribeComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _general_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogModule"].forRoot(),
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-general-general-module.js.map