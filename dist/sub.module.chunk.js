webpackJsonp([0],{280:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=o(602),s=o(600),r=o(601),c=function t(){e(this,t)};c=__decorate([a.NgModule({imports:[u.subRouting],declarations:[s.SubAppComponent,r.SubHomeComponent]}),__metadata("design:paramtypes",[])],c),n.SubModule=c},600:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=function t(){e(this,t)};u=__decorate([a.Component({selector:"sub-home",template:"\n    <h2>Sub App</h2>\n    <router-outlet></router-outlet>\n  "}),__metadata("design:paramtypes",[])],u),n.SubAppComponent=u},601:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=function t(){e(this,t)};u=__decorate([a.Component({selector:"sub-home",template:"\n    <h3>Sub Home Component</h3>\n  "}),__metadata("design:paramtypes",[])],u),n.SubHomeComponent=u},602:function(t,n,o){"use strict";var e=o(281),a=o(600),u=o(601);n.subRoutes=[{path:"",component:a.SubAppComponent,children:[{path:"",component:u.SubHomeComponent}]}],n.subRouting=e.RouterModule.forChild(n.subRoutes)}});
//# sourceMappingURL=sub.module.chunk.js.map