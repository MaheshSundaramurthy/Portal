webpackJsonp([3],{1593:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(11),s=n(22),o=n(286),a=(n.n(o),n(757)),c=n(1656),l=n(1606),u=n(285),p=n(1604),d=n(287),h=n(1636),m=n(1634),f=n(1633),g=n(1635);n.d(e,"MICROSERVICE_NAME",(function(){return y})),n.d(e,"DsTaskModule",(function(){return v}));var y="tasks",v=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getMicroserviceName=function(){return y},e})(p.a);v=__decorate([n.i(i.NgModule)({imports:[r.CommonModule,s.a,a.b,o.NgxDatatableModule,d.a,c.a],declarations:[h.a,m.a,f.a,g.a],providers:[l.a,u.a,u.c]})],v)},1598:function(t,e,n){"use strict";var i=n(29),r=n(11),s=n(26),o=n(136),a=(n.n(o),n(77)),c=n(33),l=n(137),u=n(39),p=(n.n(u),n(23)),d=n.n(p);n.d(e,"a",(function(){return h}));var h=(function(){function t(t){this.injector=t,this.router=t.get(i.c),this.route=t.get(i.b),this.globalState=this.injector.get(a.a),this.appState=this.injector.get(c.a),this.location=t.get(r.Location),this.translate=t.get(s.c),this.toastr=t.get(o.ToastsManager),this.config=this.appState.get("config")}return t.prototype.ngOnInit=function(){this.pageTitle&&this.applyPageTitle(),this.isInitialized=!0},t.prototype.applyPageTitle=function(t){var e=this,n=t||this.pageTitle;n&&setTimeout((function(){e.globalState.notifyDataChanged("menu.activeLink",{title:n})}))},t.prototype.generateBackLink=function(){return this.entityParent&&(this.backLink||(this.backLink=new l.a),this.backLink.routerLink=["/","pages",this.entityParentUrlPrefix,this.entityParent.uuid,"show"],this.entityParent.hasOwnProperty("title")&&(this.backLink.text=this.entityParent.title[this.translate.currentLang])),this.backLink},t.prototype.getEmptyBackLink=function(){return new l.a},t.prototype.getTranslatedPropertyValue=function(t,e){if(d()(t))return d()(t[e])&&t[e][this.translate.currentLang]?t[e][this.translate.currentLang]:t[e]},t})()},1599:function(t,e,n){"use strict";var i=n(29),r=n(34),s=n(138),o=n(136),a=(n.n(o),n(26)),c=n(759),l=n(1598),u=n(39),p=(n.n(u),n(1));n.n(p);n.d(e,"a",(function(){return d}));var d=(function(t){function e(e,n){var r=t.call(this,e)||this;return r.microserviceConfig=n,r.actions=[{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-primary btn-with-icon",iconClass:"ion-edit",visible:!0,routerLink:["../edit"],region:"header"},{name:"delete",title:"ds.microservices.entity.action.delete",class:"btn btn-danger btn-with-icon",iconClass:"ion-android-delete",visible:!0,region:"footer"}],r.entityMetadata={},r.router=r.injector.get(i.c),r.route=r.injector.get(i.b),r.translate=r.injector.get(a.c),r.modal=r.injector.get(s.c),r.toastr=r.injector.get(o.ToastsManager),r}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(t){e.lang=t.lang,e.updateTranslations(t.lang)})),this.prepareEntity().subscribe()},e.prototype.ngOnDestroy=function(){this.languageChangeSubscriber&&(this.languageChangeSubscriber.unsubscribe(),this.languageChangeSubscriber=void 0)},e.prototype.prepareEntity=function(){var t=this;return this.route.params.flatMap((function(e){if(t.entity)return p.Observable.of({entity:t.entity,entityParent:t.entityParent});var n=e.id,i=e[t.entityParentUrlParam];return t.entityApiService.getOne(t.entityUrlPrefix,n).flatMap((function(e){return t.entity=e,t.onEntityPrepared(),t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return p.Observable.of({entity:e,entityParent:t})}))})).catch((function(e){throw e instanceof r.Response?t.onPrepareEntityError(e):console.warn("Unexpected error occurred while fetching entity: "+e),e}))}))},e.prototype.prepareEntityParent=function(t,e){var n=this;return t&&e?this.entityApiService.getOne(t,e).flatMap((function(t){return n.entityParent=t,n.generateBackLink(),p.Observable.of(t)})):p.Observable.of({})},e.prototype.onPrepareEntityError=function(t){var e=this.translate.instant("ds.messages.http."+t.status);this.toastr.error(e)},e.prototype.handleEntityEvent=function(t){switch(t.action.name){case"delete":this.onDelete();break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},e.prototype.onDelete=function(){var t=this,e=this.modal.open(c.a,{size:"lg"});e.componentInstance.modalHeader="Confirm",e.componentInstance.modalContent="Are you sure you want to delete this entity?",e.componentInstance.actions=[{command:"yes",label:"Yes"},{command:"no",label:"No"}],e.result.then((function(e){console.log(e),"yes"===e.command&&t.entity.remove().subscribe((function(e){t.onEntityDeleteSuccess(e)}),(function(e){t.onEntityDeleteError(e)}))}),(function(t){}))},e.prototype.updateTranslations=function(t){this.onEntityPrepared(),this.entityParent&&this.generateBackLink()},e.prototype.onEntityDeleteSuccess=function(t){console.log("Entity deleted successfully, server response: ",t),this.toastr.success("Entity deleted successfully"),this.router.navigate(["../../list"],{relativeTo:this.route})},e.prototype.onEntityDeleteError=function(t){console.error("Failed to delete entity",t),this.toastr.error("Failed to delete entity")},e.prototype.onEntityPrepared=function(){""!==this.pageTitle&&this.entity&&this.entity.title&&(this.entity.title.hasOwnProperty(this.translate.currentLang)?this.pageTitle=this.entity.title[this.translate.currentLang]:this.pageTitle=this.entity.title)},e.prototype.setActionVisibility=function(t,e){this.actions=this.actions.map((function(n){switch(n.name){case t:n.visible=e}return n}))},e})(l.a)},1601:function(t,e,n){"use strict";(function(t){var i=n(0),r=n(756),s=n(1603),o=n(1598),a=n(39),c=(n.n(a),n(39)),l=(n.n(c),n(106));n.n(l);n.d(e,"a",(function(){return u}));var u=(function(e){function i(t,n){var i=e.call(this,t)||this;return i.microserviceConfig=n,i.rows=[],i.columns=[],i.sorts=[],i.pager=new r.a,i.pagingMode=r.b.APPEND,i.size=10,i.scrollDebounceTime=1e3,i.timeSinceLastScroll=0,i.datatableAttributes={columnMode:"force",rowHeight:"auto",headerHeight:90,footerHeight:50,externalPaging:!0,externalSorting:!0},i.headerActions=[{name:"create",title:"ds.microservices.entity.action.create",class:"btn btn-primary btn-with-icon",iconClass:"ion-android-add-circle",visible:!0,routerLink:["../create"]},{name:"refresh",title:"ds.microservices.entity.action.refresh",class:"btn btn-secondary btn-with-icon",iconClass:"ion-android-refresh",visible:!1}],i.actions=[{name:"show",title:"ds.microservices.entity.action.show",class:"btn btn-default btn-with-icon",iconClass:"ion-eye",visible:!0},{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-default btn-with-icon",iconClass:"ion-edit",visible:!0}],i.filters={},i.filterStream=new c.Subject,i.entityMetadata={},i}return __extends(i,e),i.prototype.ngOnInit=function(){var t=this;e.prototype.ngOnInit.call(this),this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(e){t.lang=e.lang,t.updateTranslations(e.lang)})),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.pager.size=this.size,this.setupUi(),this.setupList(),this.postSetupList(),this.setupQuery(),this.filterStream.distinctUntilChanged((function(t,e){return t.filterProperty===e.filterProperty&&t.filterValue===e.filterValue})).map((function(e){return t.assignFilterValue(e)})).debounceTime(500).subscribe((function(){return t.doFilter()})),this.setPage({offset:1})},i.prototype.ngOnDestroy=function(){this.languageChangeSubscriber.unsubscribe()},i.prototype.ngAfterViewInit=function(){},i.prototype.setupQuery=function(){this.query=s.a.forUrl(this.microserviceConfig.settings.entrypoint.url,this.entityUrlPrefix).withPager(this.pager)},i.prototype.setupUi=function(){},i.prototype.setupList=function(){},i.prototype.postSetupList=function(){this.updateTranslations(this.translate.currentLang)},i.prototype.refreshList=function(){var t=this;this.loading=!0,this.entityApiService.getList(this.query).subscribe((function(e){switch(t.pager=e.pager,t.pagingMode){case r.b.REPLACE:t.rows=t.preprocessRowsData(e.data);break;case r.b.APPEND:t.rows=t.rows.concat(t.preprocessRowsData(e.data))}t.loading=!1}))},i.prototype.handleHeaderEvent=function(t){var e=this.entityParentUrlPrefix?"../"+this.entityUrlPrefix:"../";switch(t.action.name){case"refresh":this.refreshList();break;case"create":this.router.navigate([e,"create"],{relativeTo:this.route});break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},i.prototype.preprocessRowsData=function(t){var e,n=this;return t&&(e=t.map((function(t){return t._={actions:n.actions},t})).filter((function(t){return t.hasOwnProperty("title")&&t.title.hasOwnProperty(n.translate.currentLang)}))),e},i.prototype.onFilterValueChange=function(t){var e=t.column.prop,n=t.event.target.value;this.filterStream.next({filterProperty:e,filterValue:n})},i.prototype.assignFilterValue=function(t){return console.log("assignFilterValue: ",t),this.filters[t.filterProperty]=t.filterValue,t},i.prototype.doFilter=function(){var t=this;Object.keys(this.filters).forEach((function(e){var i=t.filters[e];null==i||n.i(l.isString)(i)&&0===i.length?(delete t.filters[e],t.query.unsetFilter(e)):(t.filters[e]=i,t.query.setFilter(e,t.filters[e]))})),console.log(this.filters),this.refreshList()},i.prototype.setPage=function(t){this.pager.pageNumber=t.offset,this.refreshList()},i.prototype.removeItem=function(t){n.i(l.remove)(this.rows,t)},i.prototype.fetchNextPage=function(){this.pager.pageNumber<this.pager.totalPages&&this.setPage({offset:this.pager.pageNumber+1})},i.prototype.onSort=function(t){console.log("base-list.component::onSort",t),t.column.prop&&(this.query.unsetOrder(),this.query.setOrder(t.column.prop,t.newValue),this.refreshList())},i.prototype.onScrollDown=function(e){var n=(new Date).getTime();if(!this.loading&&n>this.timeSinceLastScroll+this.scrollDebounceTime){var i=t(document).height();(i-(t(window).height()+t(window).scrollTop()))/i==0&&(this.timeSinceLastScroll=n,this.fetchNextPage())}},i.prototype.updateTranslations=function(t){},i})(o.a);__decorate([n.i(i.ViewChild)("headerTpl"),__metadata("design:type",i.TemplateRef)],u.prototype,"headerTpl",void 0),__decorate([n.i(i.ViewChild)("textCellTpl"),__metadata("design:type",i.TemplateRef)],u.prototype,"textCellTpl",void 0),__decorate([n.i(i.ViewChild)("actionsTpl"),__metadata("design:type",i.TemplateRef)],u.prototype,"actionsCellTpl",void 0)}).call(e,n(10))},1602:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",(function(){return r}));var r=(function(){function t(){}return t})();r=__decorate([n.i(i.Component)({selector:"ds-entity",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],r)},1603:function(t,e,n){"use strict";var i=n(756);n.d(e,"a",(function(){return r}));var r=(function(){function t(t){this.pager=new i.a,this.filters={},this.orders={},this.enableParamItemsPerPage=!0,this.path=t}return t.forUrl=function(e,n){var i=new t(n);return i.urlPrefix=e,i},t.prototype.withPath=function(t){return this.path=t,this},t.prototype.withFilter=function(t,e){return this.setFilter(t,e)},t.prototype.setFilter=function(t,e){return this.filters[t]=e,this},t.prototype.unsetFilter=function(t){delete this.filters[t]},t.prototype.withOrder=function(t,e){return this.setOrder(t,e)},t.prototype.setOrder=function(t,e){return this.orders[t]=e,this},t.prototype.unsetOrder=function(t){if(t)delete this.orders[t];else for(var e in this.orders)delete this.orders[e]},t.prototype.withPager=function(t){return this.pager=t,this},t.prototype.getFullPath=function(){return this.urlPrefix+this.path},t.prototype.buildParameters=function(){var t={};if(this.pager&&(Object.assign(t,{page:this.pager.pageNumber}),this.enableParamItemsPerPage&&(t.limit=this.pager.size)),this.filters&&Object.assign(t,this.filters),this.orders)for(var e in this.orders)t["order["+e+"]"]=this.orders[e];return t},t})()},1604:function(t,e,n){"use strict";var i=n(0),r=n(11),s=n(22),o=n(33),a=n(288),c=n(286),l=(n.n(c),n(757)),u=n(285);n.d(e,"a",(function(){return p}));var p=(function(){function t(t,e){this.appState=t,this.msConfig=e,this.microserviceName=null,e.name=this.getMicroserviceName(),e.settings=this.appState.get("microservices")[e.name]}return t})();p=__decorate([n.i(i.NgModule)({imports:[r.CommonModule,s.a,a.a,l.b,c.NgxDatatableModule],declarations:[],providers:[u.a,u.c]}),__metadata("design:paramtypes",[o.a,u.a])],p)},1606:function(t,e,n){"use strict";var i=n(0),r=n(285),s=n(189),o=n(39);n.n(o);n.d(e,"a",(function(){return a}));var a=(function(t){function e(e){var n=t.call(this,e)||this;return n.restangular=e,n}return __extends(e,t),e})(s.a);a=__decorate([n.i(i.Injectable)(),__param(0,n.i(i.Inject)(r.d)),__metadata("design:paramtypes",[Object])],a)},1633:function(t,e,n){"use strict";var i=n(0),r=n(29),s=n(11),o=n(34),a=n(138),c=n(136),l=(n.n(c),n(285)),u=n(107),p=n(1606),d=n(1599),h=n(39),m=(n.n(h),n(1)),f=(n.n(m),n(139)),g=(n.n(f),n(105)),y=n.n(g),v=n(137);n.d(e,"a",(function(){return b}));var b=(function(t){function e(e,n,r,s,o,a,c,l,u){var p=t.call(this,e,o)||this;return p.injector=e,p.route=n,p.http=r,p.location=s,p.microserviceConfig=o,p.entityApiService=a,p.cms=c,p.modal=l,p.toastr=u,p.entityUrlPrefix="tasks",p.headerTitle="general.menu.tasks",p.headerSubtitle=null,p.isActivated=!1,p.isFormRendered=!1,p.applyPageTitle(),p.backLink=new v.a(["..","show"],"ds.microservices.entity.types.task"),p.formioLanguageEmitter=new i.EventEmitter,p}return __extends(e,t),e.prototype.prepareEntity=function(){var e=this;return t.prototype.prepareEntity.call(this).flatMap((function(t){return e.activate(),m.Observable.empty()}))},e.prototype.activate=function(){var t=this;if(!this.isActivated){this.isActivated=!0;var e=this.entity.uuid;this.entityApiService.one("tasks",e).customGET("form").subscribe((function(e){t.formioOptions={i18n:{}},t.cms.getFormioFormTranslations(e.id).subscribe((function(e){y()(e)||(t.formioOptions.i18n=e)}),(function(t){console.warn("Error while fetching form translations",t)}),(function(){t.formioFormSchema={components:e.schema}}))}),(function(e){t.handleActivationRequestError(e)}))}},e.prototype.switchFormLanguage=function(t){this.formioLanguageEmitter.emit(t)},e.prototype.navigateBack=function(){this.location.back()},e.prototype.onFormioFormRender=function(t){this.isFormRendered=!0,this.switchFormLanguage(this.translate.currentLang)},e.prototype.onFormioFormSubmit=function(t){var e=this,n={data:t.data};this.entityApiService.one("tasks",this.entity.uuid).customPUT(n,"submission").subscribe((function(t){e.status="success",e.statusMessage="ds.microservices.entity.task.submissionSuccess"}),(function(t){e.handleSubmissionRequestError(t)}))},e.prototype.onFormioFormInvalid=function(t){console.log("onFormioFormInvalid: ",t)},e.prototype.handleActivationRequestError=function(t){this.status="failure";try{var e=n.i(f.isFunction)(t.json)?t.json():null;e&&e.message&&(this.toastr.error(e.message),this.statusMessage=e.message)}catch(t){this.statusMessage="ds.microservices.entity.task.activationFailure"}},e.prototype.handleSubmissionRequestError=function(t){this.status="failure";try{var e=n.i(f.isFunction)(t.json)?t.json():null;e&&e.message&&(this.toastr.error(e.message),this.statusMessage=e.message)}catch(t){this.statusMessage="ds.microservices.entity.task.submissionFailure"}},e})(d.a);b=__decorate([n.i(i.Component)({selector:"ds-task-activate",template:n(1686)}),__metadata("design:paramtypes",[i.Injector,r.b,o.Http,s.Location,l.a,p.a,u.a,a.c,c.ToastsManager])],b)},1634:function(t,e,n){"use strict";var i=n(0),r=n(138),s=n(285),o=n(290),a=n(760),c=n(1606),l=n(1601),u=n(39),p=(n.n(u),n(1));n.n(p);n.d(e,"a",(function(){return d}));var d=(function(t){function e(e,n,i,r,s){var o=t.call(this,e,n)||this;return o.formioApiService=r,o.modal=s,o.entityUrlPrefix="tasks",o.pageTitle="general.menu.tasks",o.entityApiService=i,o.formioApiService.setEntityApiService(i),o}return __extends(e,t),e.prototype.ngOnDestroy=function(){this.formioModal&&this.formioModal.close(),t.prototype.ngOnDestroy.call(this)},e.prototype.setupQuery=function(){t.prototype.setupQuery.call(this),this.query.setFilter("order[priority]","desc")},e.prototype.preprocessRowsData=function(t){var e,n=this;return t&&(e=t.map((function(t){return t._={actions:n.actions},t}))),e},e.prototype.activateFormioForm=function(t){this.openModalIFrame(t)},e.prototype.openModalIFrame=function(t){this.selectedRow=t;var e={size:"lg",windowClass:"formio-modal-frame"},n=[this.getTranslatedPropertyValue(this.selectedRow,"title")];this.formioModal=this.modal.open(a.a,e),this.iFrameModalComponent=this.formioModal.componentInstance,this.iFrameModalComponent.setFormioController(this),this.iFrameModalComponent.setBreadcrumbs(n)},e.prototype.requestFormioForm=function(){return this.formioApiService.getForm("tasks",this.selectedRow.uuid)},e.prototype.submitFormioForm=function(t){var e=this;return this.formioApiService.submitFormUsingPut("tasks",this.selectedRow.uuid,t,"submission").flatMap((function(t){return e.formioModal.close(),e.toastr.success(e.translate.instant("ds.microservices.entity.task.submissionSuccess")),e.removeItem({uuid:e.selectedRow.uuid}),p.Observable.of(t)}))},e.prototype.handleFormioFormEvent=function(t,e){},e})(l.a);d=__decorate([n.i(i.Component)({selector:"ds-task-list",template:n(1687)}),__metadata("design:paramtypes",[i.Injector,s.a,c.a,o.a,r.c])],d)},1635:function(t,e,n){"use strict";var i=n(0),r=n(285),s=n(290),o=n(760),a=n(1599),c=n(1606),l=n(137),u=n(39),p=(n.n(u),n(1));n.n(p);n.d(e,"a",(function(){return d}));var d=(function(t){function e(e,n,i,r){var s=t.call(this,e,n)||this;return s.formioApiService=r,s.entityUrlPrefix="tasks",s.entityApiService=i,s.formioApiService.setEntityApiService(i),s}return __extends(e,t),e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.backLink=new l.a(["/pages/tasks"],"general.menu.tasks")},e.prototype.ngOnDestroy=function(){this.formioModal&&this.formioModal.close(),t.prototype.ngOnDestroy.call(this)},e.prototype.activateFormioForm=function(){this.openModalIFrame()},e.prototype.openModalIFrame=function(){var t={size:"lg",windowClass:"formio-modal-frame"},e=[this.getTranslatedPropertyValue(this.entity,"title")];this.formioModal=this.modal.open(o.a,t),this.iFrameModalComponent=this.formioModal.componentInstance,this.iFrameModalComponent.setFormioController(this),this.iFrameModalComponent.setBreadcrumbs(e)},e.prototype.requestFormioForm=function(){return this.formioApiService.getForm("tasks",this.entity.uuid)},e.prototype.submitFormioForm=function(t){var e=this;return this.formioApiService.submitFormUsingPost("tasks",this.entity.uuid,t).flatMap((function(t){return e.formioModal.close(),e.toastr.success(e.translate.instant("ds.microservices.entity.task.submissionSuccess")),p.Observable.of(t)}))},e.prototype.handleFormioFormEvent=function(t,e){},e})(a.a);d=__decorate([n.i(i.Component)({selector:"ds-task-show",template:n(1688)}),__metadata("design:paramtypes",[i.Injector,r.a,c.a,s.a])],d)},1636:function(t,e,n){"use strict";var i=n(0),r=n(1602);n.d(e,"a",(function(){return s}));var s=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e})(r.a);s=__decorate([n.i(i.Component)({selector:"ds-task",template:"<router-outlet></router-outlet>"})],s)},1656:function(t,e,n){"use strict";var i=n(29),r=n(1636),s=n(1634),o=n(1633),a=n(1635);n.d(e,"a",(function(){return l}));var c=[{path:"",component:r.a,children:[{path:"",redirectTo:"/pages/tasks/list",pathMatch:"full"},{path:"list",component:s.a},{path:":id/activate",component:o.a},{path:":id/show",component:a.a}]}],l=i.a.forChild(c)},1686:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<back-link *ngIf="backLink" [link]="backLink"></back-link>\n\n<div class="card">\n\t\x3c!--<div class="card-header">--\x3e\n\t\t\x3c!--<h3 class="card-title" translate>general.menu.scenario_activation</h3>--\x3e\n\t\x3c!--</div>--\x3e\n\n\t<div class="card-block">\n\t\t<div class="switcher-container clearfix">\n\t\t\t<ds-language-switcher-dropdown\n\t\t\t\t\t*ngIf="isFormRendered && !status"\n\t\t\t\t\tclass="float-right"\n\t\t\t\t\t(onLanguageChange)="switchFormLanguage($event)">\n\t\t\t</ds-language-switcher-dropdown>\n\t\t</div>\n\n\t\t<md-progress-spinner [hidden]="isFormRendered || status" mode="indeterminate"></md-progress-spinner>\n\n\t\t<formio\n\t\t\t\tclass="formio"\n\t\t\t\t[form]="formioFormSchema"\n\t\t\t\t[options]="formioOptions"\n\t\t\t\t[language]="formioLanguageEmitter"\n\t\t\t\t[hidden]="status"\n\t\t\t\t(submit)="onFormioFormSubmit($event)"\n\t\t\t\t(render)="onFormioFormRender($event)"\n\t\t\t\t(invalid)="onFormioFormInvalid($event)"\n\t\t\t\t(error)="onFormioFormError($event)">\n\t\t</formio>\n\n\t\t<div *ngIf="status"\n\t\t\t class="status"\n\t\t\t [ngClass]="status"\n\t\t\t [innerHtml]="statusMessage | translate">\n\t\t</div>\n\t</div>\n</div>\n\n<div>\n\t<button class="btn btn-secondary" [routerLink]="[\'../../list\']">\x3c!-- back to the Service and Scenarios list --\x3e\n\t\t{{\'ds.microservices.entity.action.back\' | translate}}\n\t</button>\n</div>\n'},1687:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<div *ngIf="!loading && (rows.length === 0)" class="list-empty">{{ \'ds.messages.emptyList\' | translate }}</div>\n\n<div class="card container-fluid mt-5">\n\t<div class="row">\n\t\t<div class="col p-0">\n\t\t\t<div infiniteScroll (scrolled)="onScrollDown($event)" class="list-group simple-list infinite-scroll-list">\n\t\t\t\t<a *ngFor="let row of rows" (click)="activateFormioForm(row)" href="javascript:;" class="list-group-item justify-content-between has-left-icon m-0 mr-xs-4 ml-xs-4">\n\t\t\t\t\t<span class="left-icon pull-left fa fa-dot-circle-o" [ngClass]="{\'priority-high\': row.priority >= 80 }"></span>\n\t\t\t\t\t<div class="data-container d-inline-block w-100 pr-5">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-md-8">\n\t\t\t\t\t\t\t\t<h2 class="font-weight-normal mb-0">{{ row.title }}</h2>\n\t\t\t\t\t\t\t\t<div class="mt-2 text-grayed-out">\n\t\t\t\t\t\t\t\t\t<a class="fa fa-info-circle" [routerLink]="[\'..\', row.uuid, \'show\']"></a>\n\t\t\t\t\t\t\t\t\t<span class="small">\n\t\t\t\t\t\t\t\t\t\t{{ \'general.created\' | translate }}\n\t\t\t\t\t\t\t\t\t\t<relative-time [timeInput]="row.createdAt"></relative-time>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-4">\n\t\t\t\t\t\t\t\t\x3c!--<div class="small text-grayed-out v-center no-transform position-md-right-0 position-relative position-md-absolute">{{row.customId}}</div>--\x3e\n\t\t\t\t\t\t\t\t<div class="small text-grayed-out mt-0 v-center-md float-md-right position-right-md-0">\n\t\t\t\t\t\t\t\t\t<span class="nowrap">\n\t\t\t\t\t\t\t\t\t\t{{ \'general.due\' | translate }}\n\t\t\t\t\t\t\t\t\t\t<relative-time [timeInput]="row.dueAt"></relative-time>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="right-icon pull-right v-center"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<a [hidden]="loading || pager.pageNumber >= pager.totalPages"\n   class="btn btn-default"\n   (click)="fetchNextPage()">\n\t<i class="fa fa-chevron-circle-down"></i>\n\t<span>{{ \'general.more\' | translate }}</span>\n</a>\n\n<md-progress-spinner [hidden]="!loading" mode="indeterminate"></md-progress-spinner>\n'},1688:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<back-link *ngIf="backLink" [link]="backLink"></back-link>\n\n<md-progress-spinner [hidden]="entity" mode="indeterminate"></md-progress-spinner>\n\n<div *ngIf="entity" class="mt-4 mb-5">\n\t<div class="prop-set primary-props mb-4">\n\t\t<div *ngIf="entity.description" class="row">\n\t\t\t<div class="col-sm-12">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.description\' | translate }}</dt>\n\t\t\t\t\t<dd class="ws-pre-line">{{ entity.description }}</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl translate>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.createdAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.createdAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.followUpAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.followUpAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.dueAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.dueAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.priority\' | translate }}</dt>\n\t\t\t\t\t<dd>{{ entity.priority }}</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row mt-4">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<a class="btn btn-primary"\n\t\t\t\t   (click)="activateFormioForm()"\n\t\t\t\t   href="javascript:;"\n\t\t\t\t   title="{{ \'ds.microservices.entity.action.activate\' | translate }}">\n\t\t\t\t\t{{ \'ds.microservices.entity.action.activate\' | translate }}\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}});