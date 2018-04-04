webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <router-outlet></router-outlet>\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">&copy;2018 Workout Plan</p>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__success_success_component__ = __webpack_require__("./src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workout_plan_workout_plan_component__ = __webpack_require__("./src/app/workout-plan/workout-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__session_session_component__ = __webpack_require__("./src/app/session/session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_form_service__ = __webpack_require__("./src/app/service/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var FIREBASE_MODULES = [
    __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__env_environment__["a" /* environment */].config.firebase),
    __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */],
    __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_7__workout_plan_workout_plan_component__["a" /* WorkoutPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_13__session_session_component__["a" /* SessionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                FIREBASE_MODULES,
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* AppRoutesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__service_form_service__["a" /* FormService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workout_plan_workout_plan_component__ = __webpack_require__("./src/app/workout-plan/workout-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_success_component__ = __webpack_require__("./src/app/success/success.component.ts");



var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__workout_plan_workout_plan_component__["a" /* WorkoutPlanComponent */]
    },
    {
        path: 'success',
        component: __WEBPACK_IMPORTED_MODULE_2__success_success_component__["a" /* SuccessComponent */]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/service/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormService = /** @class */ (function () {
    function FormService(_afs, router) {
        this._afs = _afs;
        this.router = router;
    }
    FormService.prototype.saveWorkoutPlan = function (workoutPlanData) {
        var _this = this;
        this.workoutCollectionRef = this._afs.collection('Workout');
        this.sessionCollectionRef = this._afs.collection('Session');
        var sessionPlan = {};
        var workouts;
        for (var i in workoutPlanData) {
            if (i === 'sessions') {
                workouts = workoutPlanData[i];
            }
            else {
                sessionPlan[i] = workoutPlanData[i];
            }
        }
        var sessionId = sessionPlan['name'].split(' ').join('');
        this.sessionCollectionRef
            .doc(sessionId)
            .set(sessionPlan)
            .then(function (res) {
            _this.router.navigate(['/success']);
            return true;
        })
            .catch(function (error) {
            console.log('error occurred', error);
        })
            .then(function (res) {
            if (res) {
                workouts.forEach(function (workout) {
                    workout['session'] = _this._afs.doc("Session/" + sessionId).ref;
                    return _this.workoutCollectionRef
                        .doc(sessionId + workout['offset'])
                        .set(workout)
                        .then(function (workoutDone) { return workoutDone; });
                });
            }
        });
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/session/session.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"sessionForm\">\n    <div class=\"row border border-gray rounded p-3\">\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label>Offset</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"offset\">\n          </div>\n          <div class=\"form-group\">\n              <label>Titolo Giorno</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n          </div>\n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label>Descrizione Giorno</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"description\">\n          </div>\n          <div class=\"form-group\">\n              <label>Durata MIN</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"duration\">\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/session/session.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/session/session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionComponent = /** @class */ (function () {
    function SessionComponent() {
    }
    SessionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('sessionForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], SessionComponent.prototype, "sessionForm", void 0);
    SessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-session',
            template: __webpack_require__("./src/app/session/session.component.html"),
            styles: [__webpack_require__("./src/app/session/session.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-auto my-5\">\n  <div class=\"row py-5 text-center\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"alert alert-success\" role=\"alert\">\n        <h4 class=\"alert-heading\">Successfully Submitted!</h4>\n        <hr>\n        <a [routerLink]=\"['']\" class=\"btn btn-primary\">Create New Plan</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/success/success.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("./src/app/success/success.component.html"),
            styles: [__webpack_require__("./src/app/success/success.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/workout-plan/workout-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container-fluid jumbotron bg-gray\">\n  <div class=\"col-md-8 offset-md-2\">\n    <h4 class=\"mb-3 text-center\">INSERIMENTO WORKOUT (SESSION)</h4>\n    <form [formGroup]=\"workoutForm\" novalidate (ngSubmit)=\"save(workoutForm.value)\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Nome Workout</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n          </div>\n          <div class=\"form-group\">\n            <label>Nome Trainer</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"trainer_name\">\n          </div>\n          <div class=\"form-group\">\n            <label>Durata MIN</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"duration\">\n          </div>\n          <div class=\"form-group\">\n            <label>Categoria</label>\n            <p>\n              <input type=\"radio\" value=\"0\" formControlName=\"difficulty\"> Bianco\n              <input type=\"radio\" value=\"1\" formControlName=\"difficulty\"> verde\n              <input type=\"radio\" value=\"2\" formControlName=\"difficulty\"> giallo\n              <input type=\"radio\" value=\"3\" formControlName=\"difficulty\"> rosso\n              <input type=\"radio\" value=\"4\" formControlName=\"difficulty\"> nero\n           </p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Cover Link</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"cover_link\">\n          </div>\n          <div class=\"form-group\">\n            <label>Descrizione</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"description\">\n          </div>\n          <div class=\"form-group\">\n            <label>Tools</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"tools\">\n          </div>\n          <div class=\"form-group\">\n            <label>Link Alla Pagina</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"page_link\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label for=\"\"><h5>Obiettivo</h5></label>\n        </div>\n      </div>\n      <div class=\"row  border-bottom py-2\">\n            <div class=\"col-md-4\" *ngFor=\"let goals of goals.controls; let i=index\">\n              <div class=\"form-group-small\">\n                <input type=\"checkbox\" [formControl]=\"goals\" /> {{workout.goals[i].name}}\n              </div>\n            </div>\n      </div>\n      <!--addresses-->\n      <div class=\"row pt-2\">\n        <div class=\"col-md-12\">\n          <label for=\"\"><h5>INSERIMENTO GIORNALIRO (WORKOUT)</h5></label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div formArrayName=\"sessions\">\n            <div *ngFor=\"let session of workoutForm.controls.sessions.controls; let i=index\" class=\"panel panel-default\">\n              <div class=\"panel-heading text-right\">\n                <span class=\"pull-right\" *ngIf=\"workoutForm.controls.sessions.controls.length > 1\" (click)=\"removeSession(i)\">X</span>\n              </div>\n              <div class=\"panel-body\" [formGroupName]=\"i\">\n                <app-session [sessionForm]=\"workoutForm.controls.sessions.controls[i]\"></app-session>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"margin-20 my-2\">\n        <a (click)=\"addSession()\" class=\"btn btn-dark text-white btn-sm\">\n          NUOVO GIORNO\n        </a>\n      </div>\n\n      <div class=\"margin-20 text-center\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!workoutForm.valid\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/workout-plan/workout-plan.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/workout-plan/workout-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/app/service/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutPlanComponent = /** @class */ (function () {
    function WorkoutPlanComponent(_fb, formService) {
        this._fb = _fb;
        this.formService = formService;
        this.workout = {
            goals: [
                { name: 'Dimagrimento', selected: false, id: 0 },
                { name: 'tonificazione', selected: false, id: 1 },
                { name: 'aumento mass', selected: false, id: 2 }
            ]
        };
    }
    WorkoutPlanComponent.prototype.ngOnInit = function () {
        this.workoutForm = this._fb.group({
            name: [''],
            trainer_name: [''],
            duration: [''],
            cover_link: [''],
            description: [''],
            difficulty: [''],
            goals: this.buildGoals(),
            tools: [''],
            page_link: [''],
            sessions: this._fb.array([])
        });
        this.addSession();
    };
    WorkoutPlanComponent.prototype.buildGoals = function () {
        var _this = this;
        var arr = this.workout.goals.map(function (skill) {
            return _this._fb.control(skill.selected);
        });
        return this._fb.array(arr);
    };
    Object.defineProperty(WorkoutPlanComponent.prototype, "goals", {
        get: function () {
            return this.workoutForm.get('goals');
        },
        enumerable: true,
        configurable: true
    });
    WorkoutPlanComponent.prototype.initSession = function () {
        return this._fb.group({
            offset: [''],
            title: [''],
            description: [''],
            duration: ['']
        });
    };
    WorkoutPlanComponent.prototype.addSession = function () {
        var control = this.workoutForm.controls['sessions'];
        var addrCtrl = this.initSession();
        control.push(addrCtrl);
    };
    WorkoutPlanComponent.prototype.removeSession = function (i) {
        var control = this.workoutForm.controls['addresses'];
        control.removeAt(i);
    };
    WorkoutPlanComponent.prototype.save = function (formValue) {
        var _this = this;
        var goals = [];
        formValue.goals.map(function (selected, i) {
            if (selected) {
                goals.push(_this.workout.goals[i].id);
            }
        });
        formValue.goals = goals;
        formValue.difficulty = +formValue.difficulty;
        this.formService.saveWorkoutPlan(formValue);
    };
    WorkoutPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workout-plan',
            template: __webpack_require__("./src/app/workout-plan/workout-plan.component.html"),
            styles: [__webpack_require__("./src/app/workout-plan/workout-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__service_form_service__["a" /* FormService */]])
    ], WorkoutPlanComponent);
    return WorkoutPlanComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    config: {
        firebase: {
            apiKey: "AIzaSyAuNzLtgMgNLABtObtEAna73Jzny00IzvA",
            authDomain: "leo-ios.firebaseapp.com",
            databaseURL: "https://leo-ios.firebaseio.com",
            projectId: "leo-ios",
            storageBucket: "leo-ios.appspot.com",
            messagingSenderId: "919418957403"
        }
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map