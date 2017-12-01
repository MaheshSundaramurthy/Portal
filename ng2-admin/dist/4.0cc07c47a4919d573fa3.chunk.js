webpackJsonp([4],{1506:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),i=a(11),e=a(287),s=a(21),r=a(678),l=(a.n(r),a(284)),c=a(283),p=a(1518),d=a(1550),u=a(1569);a.d(t,"LoginModule",(function(){return g}));var g=(function(){function n(){}return n})();g=__decorate([a.i(o.NgModule)({imports:[i.CommonModule,e.a,s.b,s.a,r.LaddaModule,l.a,c.a,u.a],declarations:[p.a,d.a]})],g)},1518:function(n,t,a){"use strict";var o=a(0),i=a(27),e=a(21),s=a(31),r=a(189),l=(a.n(r),a(65)),c=a(1571),p=a(1562);a.n(p);a.d(t,"a",(function(){return d}));var d=(function(n){function t(t){var a=n.call(this,t)||this;return a.injector=t,a.submitted=!1,a.inProgress=!1,a.formTitle="login.title",a.router=t.get(i.c),a.route=t.get(i.b),a.fb=t.get(e.j),a.toastr=t.get(r.ToastsManager),a.auth=t.get(l.a),a.translate=t.get(s.c),a.form=a.fb.group({username:["",e.i.compose([e.i.required,e.i.minLength(1)])],password:["",e.i.compose([e.i.required,e.i.minLength(1)])]}),a.username=a.form.controls.username,a.password=a.form.controls.password,a.authEndpoint=a.appState.get("microservices").authentication.paths.individual,a.routerNavigationSubscription=a.router.events.filter((function(n){return n instanceof i.d})).subscribe((function(n){n.url.startsWith("/login")||(console.log("NavigationStart URL:",n.url),a.redirectUrl=n.url)})),a}return __extends(t,n),t.prototype.ngOnInit=function(){n.prototype.ngOnInit.call(this),this.redirectUrl=this.route.snapshot.queryParams.redirectUrl||"/",console.log("Redirect URL",this.redirectUrl)},t.prototype.ngOnDestroy=function(){this.routerNavigationSubscription&&this.routerNavigationSubscription.unsubscribe(),n.prototype.ngOnDestroy.call(this)},t.prototype.onAppCmsContent=function(){console.log("appCmsContent: ",this.appState.get("appCmsContent")),this.appTitle=this.appState.get("appCmsContent",{}).texts["portal-title"]},t.prototype.onSubmit=function(n){var t=this;this.submitted=!0,this.inProgress=!0,this.form.valid&&this.auth.login(this.authEndpoint,n.username,n.password).finally((function(){t.inProgress=!1})).subscribe((function(n){n&&(t.toastr.success(t.translate.instant("ds.messages.loginSucceeded")),t.router.navigateByUrl(t.redirectUrl))}),(function(n){t.toastr.error(t.translate.instant("ds.messages.loginFailed")+" "+n.message)}))},t})(c.a);d=__decorate([a.i(o.Component)({selector:"login",template:a(1561),host:{id:"login",class:"individual-login"}}),__metadata("design:paramtypes",[o.Injector])],d)},1550:function(n,t,a){"use strict";var o=a(0),i=a(1518),e=a(1562);a.n(e);a.d(t,"a",(function(){return s}));var s=(function(n){function t(t){var a=n.call(this,t)||this;return a.injector=t,a.formTitle="login.organizationFormTitle",a.authEndpoint=a.appState.get("microservices").authentication.paths.orgnaization,a}return __extends(t,n),t})(i.a);s=__decorate([a.i(o.Component)({selector:"organization-login",template:a(1561),host:{id:"login",class:"organization-login"}}),__metadata("design:paramtypes",[o.Injector])],s)},1561:function(n,t){n.exports='<div class="auth-main">\n\n  <div class="header-block">\n    <a routerLink="/pages/services/list" class="al-logo clearfix">\n      <img src="{{ ( \'app/digitalstate-logo-dark.png\' | baAppPicture ) }}" />\n    </a>\n  </div>\n\n  <div class="auth-block">\n    <h2 *ngIf="appTitle" class="text-center">{{ appTitle[lang] }}</h2>\n    <h1 translate>{{ formTitle }}</h1>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal">\n      <div class="form-group row" [ngClass]="{\'has-error\': (!username.valid && username.touched), \'has-success\': (username.valid && username.touched)}">\n        <label for="inputusername" class="col-sm-3 control-label" translate>{{\'login.username\'}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="username" type="username" class="form-control" id="inputusername" placeholder="{{\'login.username\' | translate}} / {{\'login.email\' | translate}}">\n        </div>\n      </div>\n      <div class="form-group row" [ngClass]="{\'has-error\': (!password.valid && password.touched), \'has-success\': (password.valid && password.touched)}">\n        <label for="inputPassword3" class="col-sm-3 control-label" translate>{{\'login.password\'}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="password" type="password" class="form-control" id="inputPassword3">\n        </div>\n      </div>\n      <div class="form-group row">\n        <div class="offset-sm-3 col-sm-9">\n          <button [disabled]="!form.valid || inProgress" [ladda]="inProgress" type="submit" class="btn btn-primary btn-auth">{{\'login.signIn\' | translate}}</button>\n          \x3c!--<a routerLink="/login" class="forgot-pass" translate>{{\'login.forgotPassword\'}}</a>--\x3e\n        </div>\n      </div>\n    </form>\n\n    <div class="auth-sep"><span><span translate>{{\'login.signInSocialPrompt\'}}</span></span></div>\n\n    <div class="al-share-auth">\n      <ul class="al-share clearfix">\n        <li><i class="socicon socicon-facebook" title="{{\'login.signInFacebook\' | translate}}"></i></li>\n        <li><i class="socicon socicon-google" title="{{\'login.signInGooglePlus\' | translate}}"></i></li>\n        <li><i class="socicon socicon-twitter" title="{{\'login.signInTwitter\' | translate}}"></i></li>\n        <li><i class="socicon socicon-linkedin" title="{{\'login.signInLinkedIn\' | translate}}"></i></li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class="footer-block">\n    <div class="row">\n      <div class="col-8">\n        <span class="auth-link">\n          {{\'login.signUpPrompt\' | translate}} <br />\n          <a routerLink="/register" translate>{{\'login.signUpLink\'}}</a>\n        </span>\n      </div>\n      <div class="col-4">\n        <ds-language-switcher></ds-language-switcher>\n      </div>\n    </div>\n\n    <div class="auth-sep mt-0">\n      <span>\n        <span>\n          <a id="organization-link" routerLink="/login/organization">{{ \'login.organizationLoginLink\' | translate }}</a>\n          <a id="individual-link" routerLink="/login">{{ \'login.individualLoginLink\' | translate }}</a>\n        </span>\n      </span>\n    </div>\n\n\n    \x3c!--<div class="auth-sep"><span><span translate>{{\'login.signFromAppText\'}}</span></span></div>--\x3e\n\n    \x3c!--<div class="al-share-auth">--\x3e\n      \x3c!--<ul class="al-share clearfix">--\x3e\n        \x3c!--<li><i class="socicon socicon-facebook" title="{{\'login.shareOnFacebook\' | translate}}"></i></li>--\x3e\n        \x3c!--<li><i class="socicon socicon-twitter" title="{{\'login.shareOnTwitter\' | translate}}"></i></li>--\x3e\n        \x3c!--<li><i class="socicon socicon-google" title="{{\'login.shareOnGooglePlus\' | translate}}"></i></li>--\x3e\n      \x3c!--</ul>--\x3e\n    \x3c!--</div>--\x3e\n\n  </div>\n</div>\n'},1562:function(n,t,a){var o=a(1588);"string"==typeof o&&(o=[[n.i,o,""]]);a(41)(o,{});o.locals&&(n.exports=o.locals)},1569:function(n,t,a){"use strict";var o=a(27),i=a(1518),e=a(1550);a.d(t,"a",(function(){return r}));var s=[{path:"",component:i.a},{path:"organization",component:e.a}],r=o.a.forChild(s)},1571:function(n,t,a){"use strict";var o=a(1572),i=a(38),e=a(1);a.n(e);a.d(t,"a",(function(){return s}));var s=(function(n){function t(t){var a=n.call(this,t)||this;return a.appState=t.get(i.a),a}return __extends(t,n),t.prototype.ngOnInit=function(){var t=this;n.prototype.ngOnInit.call(this),this.appState.get("appCmsContent")?this.onAppCmsContent():this.appContentTimerSubscription=e.Observable.timer(0,100).subscribe((function(n){t.appState.get("appCmsContent")&&(t.onAppCmsContent(),t.appContentTimerSubscription.unsubscribe())}))},t.prototype.ngOnDestroy=function(){n.prototype.ngOnDestroy.call(this),this.appContentTimerSubscription&&this.appContentTimerSubscription.unsubscribe()},t.prototype.onAppCmsContent=function(){},t})(o.a)},1572:function(n,t,a){"use strict";var o=a(31);a.d(t,"a",(function(){return i}));var i=(function(){function n(n){this.translate=n.get(o.c)}return n.prototype.ngOnInit=function(){var n=this;this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(t){n.lang=n.translate.currentLang,n.onLanguageChange(t.lang)}))},n.prototype.ngOnDestroy=function(){this.languageChangeSubscriber&&this.languageChangeSubscriber.unsubscribe()},n.prototype.onLanguageChange=function(n){},n})()},1588:function(n,t){n.exports='.h-center{position:absolute;left:50%;transform:translateX(-50%)}.v-center{position:absolute;top:50%;transform:translateY(-50%)}@media (min-width: 576px){.v-center-sm{position:absolute;top:50%;transform:translateY(-50%)}}@media (min-width: 768px){.v-center-md{position:absolute;top:50%;transform:translateY(-50%)}}@media (min-width: 992px){.v-center-lg{position:absolute;top:50%;transform:translateY(-50%)}}@media (min-width: 1200px){.v-center-xl{position:absolute;top:50%;transform:translateY(-50%)}}.disable-v-center{position:relative;top:unset;left:unset;transform:none}.auth-main{display:-webkit-box;display:-moz-box;display:box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-moz-box-orient:vertical;box-orient:vertical;-webkit-box-direction:normal;-moz-box-direction:normal;box-direction:normal;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;-ms-flex-direction:column;-webkit-align-self:center;-moz-align-self:center;align-self:center;-ms-flex-item-align:center;width:100%}.header-block{width:570px;margin:0 auto;border-radius:5px;background-color:#fff;padding:32px}@media (max-width: 659px){.header-block{width:100%}}.header-block a.al-logo{text-align:center;float:none}.header-block a.al-logo img{margin-left:0;height:26px}.footer-block{width:570px;position:relative;margin:1rem auto 0;padding:16px;border-radius:5px}@media (max-width: 659px){.footer-block{width:100%}}.footer-block .ds-language-switcher{float:right}.footer-block .ds-language-switcher .al-dropdown ul.dropdown-menu.language-dropdown{max-width:10rem;top:23px;padding:0.25rem 0;border-radius:0px}.footer-block .ds-language-switcher .al-dropdown ul.dropdown-menu.language-dropdown:after{display:none}.footer-block .ds-language-switcher .al-dropdown>a{color:#67a4c8;white-space:nowrap}.footer-block .ds-language-switcher .al-dropdown>a:hover{color:#588baa}.footer-block .ds-language-switcher .al-dropdown a#language-dd .language-name{font-size:18px}.auth-block{width:570px;margin:0 auto;border-radius:5px;background:rgba(0,0,0,0.05);color:#666;padding:32px}@media (max-width: 659px){.auth-block{width:100%}}.auth-block h1{font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:18px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#67a4c8}.auth-block a:hover{color:#588baa}.auth-block .control-label{line-height:1.3em;display:flex;align-self:center;padding-top:11px;color:#666}.auth-block .form-group{margin-bottom:18px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:18px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:18px;margin-bottom:33px}.auth-sep{margin-top:60px;margin-bottom:24px;line-height:20px;font-size:18px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#666}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px lightgray;content:"";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:36px;border-radius:5px}.btn-auth{color:#fff !important}#login{display:-webkit-box;display:-moz-box;display:box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1 auto;-moz-flex:1 auto;-ms-flex:1 auto;flex:1 auto}.individual-login #individual-link{display:none}.organization-login #organization-link{display:none}\n'}});