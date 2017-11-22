webpackJsonp([4],{1505:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o(0),i=o(11),e=o(286),s=o(21),r=o(677),l=(o.n(r),o(282)),c=o(281),p=o(1517),u=o(1549),d=o(1568);o.d(n,"LoginModule",(function(){return g}));var g=(function(){function t(){}return t})();g=__decorate([o.i(a.NgModule)({imports:[i.CommonModule,e.a,s.b,s.a,r.LaddaModule,l.a,c.a,d.a],declarations:[p.a,u.a]})],g)},1517:function(t,n,o){"use strict";var a=o(0),i=o(27),e=o(21),s=o(31),r=o(187),l=(o.n(r),o(75)),c=o(1570),p=o(1561);o.n(p);o.d(n,"a",(function(){return u}));var u=(function(t){function n(n){var o=t.call(this,n)||this;return o.injector=n,o.submitted=!1,o.inProgress=!1,o.formTitle="login.title",o.router=n.get(i.c),o.route=n.get(i.b),o.fb=n.get(e.j),o.toastr=n.get(r.ToastsManager),o.auth=n.get(l.a),o.translate=n.get(s.c),o.form=o.fb.group({username:["",e.i.compose([e.i.required,e.i.minLength(1)])],password:["",e.i.compose([e.i.required,e.i.minLength(1)])]}),o.username=o.form.controls.username,o.password=o.form.controls.password,o.authEndpoint=o.appState.get("microservices").authentication.paths.individual,o.routerNavigationSubscription=o.router.events.filter((function(t){return t instanceof i.d})).subscribe((function(t){t.url.startsWith("/login")||(console.log("NavigationStart URL:",t.url),o.redirectUrl=t.url)})),o}return __extends(n,t),n.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.redirectUrl=this.route.snapshot.queryParams.redirectUrl||"/",console.log("Redirect URL",this.redirectUrl)},n.prototype.ngOnDestroy=function(){this.routerNavigationSubscription&&this.routerNavigationSubscription.unsubscribe(),t.prototype.ngOnDestroy.call(this)},n.prototype.onAppCmsContent=function(){console.log("appCmsContent: ",this.appState.get("appCmsContent")),this.appTitle=this.appState.get("appCmsContent",{}).texts["portal-title"]},n.prototype.onSubmit=function(t){var n=this;this.submitted=!0,this.inProgress=!0,this.form.valid&&this.auth.login(this.authEndpoint,t.username,t.password).finally((function(){n.inProgress=!1})).subscribe((function(t){t&&(n.toastr.success(n.translate.instant("ds.messages.loginSucceeded")),n.router.navigateByUrl(n.redirectUrl))}),(function(t){n.toastr.error(n.translate.instant("ds.messages.loginFailed")+" "+t.message)}))},n})(c.a);u=__decorate([o.i(a.Component)({selector:"login",template:o(1560),host:{id:"login"}}),__metadata("design:paramtypes",[a.Injector])],u)},1549:function(t,n,o){"use strict";var a=o(0),i=o(1517),e=o(1561);o.n(e);o.d(n,"a",(function(){return s}));var s=(function(t){function n(n){var o=t.call(this,n)||this;return o.injector=n,o.formTitle="login.organizationFormTitle",o.authEndpoint=o.appState.get("microservices").authentication.paths.orgnaization,o}return __extends(n,t),n.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),console.log("This is the OrgnizationLogin component")},n})(i.a);s=__decorate([o.i(a.Component)({selector:"organization-login",template:o(1560),host:{id:"login",class:"organization-login"}}),__metadata("design:paramtypes",[a.Injector])],s)},1560:function(t,n){t.exports='<div class="auth-main">\n\n  <div class="header-block">\n    <a routerLink="/pages/services/list" class="al-logo clearfix">\n      <img src="{{ ( \'app/digitalstate-logo-dark.png\' | baAppPicture ) }}" />\n    </a>\n  </div>\n\n  <div class="auth-block">\n    <h2 *ngIf="appTitle" class="text-center">{{ appTitle[lang] }}</h2>\n    <h1 translate>{{ formTitle }}</h1>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal">\n      <div class="form-group row" [ngClass]="{\'has-error\': (!username.valid && username.touched), \'has-success\': (username.valid && username.touched)}">\n        <label for="inputusername" class="col-sm-3 control-label" translate>{{\'login.username\'}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="username" type="username" class="form-control" id="inputusername" placeholder="{{\'login.username\' | translate}} / {{\'login.email\' | translate}}">\n        </div>\n      </div>\n      <div class="form-group row" [ngClass]="{\'has-error\': (!password.valid && password.touched), \'has-success\': (password.valid && password.touched)}">\n        <label for="inputPassword3" class="col-sm-3 control-label" translate>{{\'login.password\'}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="password" type="password" class="form-control" id="inputPassword3">\n        </div>\n      </div>\n      <div class="form-group row">\n        <div class="offset-sm-3 col-sm-9">\n          <button [disabled]="!form.valid || inProgress" [ladda]="inProgress" type="submit" class="btn btn-primary btn-auth">{{\'login.signIn\' | translate}}</button>\n          \x3c!--<a routerLink="/login" class="forgot-pass" translate>{{\'login.forgotPassword\'}}</a>--\x3e\n        </div>\n      </div>\n    </form>\n\n    <div class="auth-sep"><span><span translate>{{\'login.signInSocialPrompt\'}}</span></span></div>\n\n    <div class="al-share-auth">\n      <ul class="al-share clearfix">\n        <li><i class="socicon socicon-facebook" title="{{\'login.signInFacebook\' | translate}}"></i></li>\n        <li><i class="socicon socicon-google" title="{{\'login.signInGooglePlus\' | translate}}"></i></li>\n        <li><i class="socicon socicon-twitter" title="{{\'login.signInTwitter\' | translate}}"></i></li>\n        <li><i class="socicon socicon-linkedin" title="{{\'login.signInLinkedIn\' | translate}}"></i></li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class="footer-block">\n    <div class="row">\n      <div class="col-8">\n        <span class="auth-link">\n          {{\'login.signUpPrompt\' | translate}} <br />\n          <a routerLink="/register" translate>{{\'login.signUpLink\'}}</a>\n        </span>\n      </div>\n      <div class="col-4">\n        <ds-language-switcher></ds-language-switcher>\n      </div>\n    </div>\n\n    <div id="organiztion-link-container" class="auth-sep mt-0">\n      <span>\n        <span translate>\n          <a routerLink="/login/organization">{{ \'login.organizationLoginLink\' | translate }}</a>\n        </span>\n      </span>\n    </div>\n\n\n    \x3c!--<div class="auth-sep"><span><span translate>{{\'login.signFromAppText\'}}</span></span></div>--\x3e\n\n    \x3c!--<div class="al-share-auth">--\x3e\n      \x3c!--<ul class="al-share clearfix">--\x3e\n        \x3c!--<li><i class="socicon socicon-facebook" title="{{\'login.shareOnFacebook\' | translate}}"></i></li>--\x3e\n        \x3c!--<li><i class="socicon socicon-twitter" title="{{\'login.shareOnTwitter\' | translate}}"></i></li>--\x3e\n        \x3c!--<li><i class="socicon socicon-google" title="{{\'login.shareOnGooglePlus\' | translate}}"></i></li>--\x3e\n      \x3c!--</ul>--\x3e\n    \x3c!--</div>--\x3e\n\n  </div>\n</div>\n'},1561:function(t,n,o){var a=o(1587);"string"==typeof a&&(a=[[t.i,a,""]]);o(41)(a,{});a.locals&&(t.exports=a.locals)},1568:function(t,n,o){"use strict";var a=o(27),i=o(1517),e=o(1549);o.d(n,"a",(function(){return r}));var s=[{path:"",component:i.a},{path:"organization",component:e.a}],r=a.a.forChild(s)},1570:function(t,n,o){"use strict";var a=o(1571),i=o(40),e=o(1);o.n(e);o.d(n,"a",(function(){return s}));var s=(function(t){function n(n){var o=t.call(this,n)||this;return o.appState=n.get(i.a),o}return __extends(n,t),n.prototype.ngOnInit=function(){var n=this;t.prototype.ngOnInit.call(this),this.appState.get("appCmsContent")?this.onAppCmsContent():this.appContentTimerSubscription=e.Observable.timer(0,100).subscribe((function(t){n.appState.get("appCmsContent")&&(n.onAppCmsContent(),n.appContentTimerSubscription.unsubscribe())}))},n.prototype.ngOnDestroy=function(){t.prototype.ngOnDestroy.call(this),this.appContentTimerSubscription&&this.appContentTimerSubscription.unsubscribe()},n.prototype.onAppCmsContent=function(){},n})(a.a)},1571:function(t,n,o){"use strict";var a=o(31);o.d(n,"a",(function(){return i}));var i=(function(){function t(t){this.translate=t.get(a.c)}return t.prototype.ngOnInit=function(){var t=this;this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(n){t.lang=t.translate.currentLang,t.onLanguageChange(n.lang)}))},t.prototype.ngOnDestroy=function(){this.languageChangeSubscriber&&this.languageChangeSubscriber.unsubscribe()},t.prototype.onLanguageChange=function(t){},t})()},1587:function(t,n){t.exports='.h-center{position:absolute;left:50%;transform:translateX(-50%)}.v-center{position:absolute;top:50%;transform:translateY(-50%)}@media (min-width: 576px){.v-center-sm{position:absolute;top:50%;transform:translateY(-50%)}}@media (min-width: 768px){.v-center-md{position:absolute;top:50%;transform:translateY(-50%)}}@media (min-width: 992px){.v-center-lg{position:absolute;top:50%;transform:translateY(-50%)}}@media (min-width: 1200px){.v-center-xl{position:absolute;top:50%;transform:translateY(-50%)}}.disable-v-center{position:relative;top:unset;left:unset;transform:none}.auth-main{display:-webkit-box;display:-moz-box;display:box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-moz-box-orient:vertical;box-orient:vertical;-webkit-box-direction:normal;-moz-box-direction:normal;box-direction:normal;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;-ms-flex-direction:column;-webkit-align-self:center;-moz-align-self:center;align-self:center;-ms-flex-item-align:center;width:100%}.header-block{width:570px;margin:0 auto;border-radius:5px;background-color:#fff;padding:32px}@media (max-width: 659px){.header-block{width:100%}}.header-block a.al-logo{text-align:center;float:none}.header-block a.al-logo img{margin-left:0;height:26px}.footer-block{width:570px;position:relative;margin:1rem auto 0;padding:16px;border-radius:5px}@media (max-width: 659px){.footer-block{width:100%}}.footer-block .ds-language-switcher{float:right}.footer-block .ds-language-switcher .al-dropdown ul.dropdown-menu.language-dropdown{max-width:10rem;top:23px;padding:0.25rem 0;border-radius:0px}.footer-block .ds-language-switcher .al-dropdown ul.dropdown-menu.language-dropdown:after{display:none}.footer-block .ds-language-switcher .al-dropdown>a{color:#67a4c8;white-space:nowrap}.footer-block .ds-language-switcher .al-dropdown>a:hover{color:#588baa}.footer-block .ds-language-switcher .al-dropdown a#language-dd .language-name{font-size:18px}.auth-block{width:570px;margin:0 auto;border-radius:5px;background:rgba(0,0,0,0.05);color:#666;padding:32px}@media (max-width: 659px){.auth-block{width:100%}}.auth-block h1{font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:18px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#67a4c8}.auth-block a:hover{color:#588baa}.auth-block .control-label{line-height:1.3em;display:flex;align-self:center;padding-top:11px;color:#666}.auth-block .form-group{margin-bottom:18px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:18px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:18px;margin-bottom:33px}.auth-sep{margin-top:60px;margin-bottom:24px;line-height:20px;font-size:18px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#666}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px lightgray;content:"";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:36px;border-radius:5px}.btn-auth{color:#fff !important}#login{display:-webkit-box;display:-moz-box;display:box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1 auto;-moz-flex:1 auto;-ms-flex:1 auto;flex:1 auto}.organization-login #organiztion-link-container{display:none}\n'}});