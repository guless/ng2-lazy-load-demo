/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './my-app.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/router/src/directives/router_outlet';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/core/src/security';
const nodeDebugInfos_MyApp_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.MyApp],import1.MyApp,{})];
var renderType_MyApp_Host:import2.RenderComponentType = (null as any);
class _View_MyApp_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _MyApp_0_4:import1.MyApp;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_MyApp_Host0,renderType_MyApp_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MyApp_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-app',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyApp_0_4 = new import1.MyApp();
    this._appEl_0.initComponent(this._MyApp_0_4,[],compView_0);
    compView_0.create(this._MyApp_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.MyApp) && (0 === requestNodeIndex))) { return this._MyApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_MyApp_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_MyApp_Host === (null as any))) { (renderType_MyApp_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_MyApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAppNgFactory:import10.ComponentFactory<import1.MyApp> = new import10.ComponentFactory<import1.MyApp>('my-app',viewFactory_MyApp_Host0,import1.MyApp);
const styles_MyApp:any[] = ['h1[_ngcontent-%COMP%] {\n      color: green;\n    }'];
const nodeDebugInfos_MyApp0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import11.RouterLinkWithHref],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import11.RouterLinkWithHref],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import11.RouterLinkWithHref],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import12.RouterOutlet],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_MyApp:import2.RenderComponentType = (null as any);
class _View_MyApp0 extends import3.DebugAppView<import1.MyApp> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _RouterLinkWithHref_6_3:import11.RouterLinkWithHref;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _RouterLinkWithHref_9_3:import11.RouterLinkWithHref;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _RouterLinkWithHref_12_3:import11.RouterLinkWithHref;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  /*private*/ _appEl_15:import4.AppElement;
  _RouterOutlet_15_5:import12.RouterOutlet;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_MyApp0,renderType_MyApp,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MyApp0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',this.debug(1,1,2));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',this.debug(2,1,7));
    this._el_3 = this.renderer.createElement(this._el_1,'h1',this.debug(3,2,4));
    this._text_4 = this.renderer.createText(this._el_3,'Hello',this.debug(4,2,8));
    this._text_5 = this.renderer.createText(this._el_1,'\n    ',this.debug(5,2,18));
    this._el_6 = this.renderer.createElement(this._el_1,'a',this.debug(6,3,4));
    this.renderer.setElementAttribute(this._el_6,'routerLink','/top');
    this._RouterLinkWithHref_6_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_7 = this.renderer.createText(this._el_6,'top',this.debug(7,3,25));
    this._text_8 = this.renderer.createText(this._el_1,'\n    ',this.debug(8,3,32));
    this._el_9 = this.renderer.createElement(this._el_1,'a',this.debug(9,4,4));
    this.renderer.setElementAttribute(this._el_9,'routerLink','/about');
    this._RouterLinkWithHref_9_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_10 = this.renderer.createText(this._el_9,'about',this.debug(10,4,27));
    this._text_11 = this.renderer.createText(this._el_1,'\n    ',this.debug(11,4,36));
    this._el_12 = this.renderer.createElement(this._el_1,'a',this.debug(12,5,4));
    this.renderer.setElementAttribute(this._el_12,'routerLink','/sub/detail');
    this._RouterLinkWithHref_12_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_13 = this.renderer.createText(this._el_12,'sub detail',this.debug(13,5,32));
    this._text_14 = this.renderer.createText(this._el_1,'\n    ',this.debug(14,5,46));
    this._el_15 = this.renderer.createElement(this._el_1,'router-outlet',this.debug(15,6,4));
    this._appEl_15 = new import4.AppElement(15,1,this,this._el_15);
    this._RouterOutlet_15_5 = new import12.RouterOutlet(this.parentInjector.get(import16.RouterOutletMap),this._appEl_15.vcRef,this.parentInjector.get(import17.ComponentFactoryResolver),(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n  ',this.debug(16,6,35));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(17,7,8));
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkWithHref_6_3; }
    if (((token === import11.RouterLinkWithHref) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._RouterLinkWithHref_9_3; }
    if (((token === import11.RouterLinkWithHref) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._RouterLinkWithHref_12_3; }
    if (((token === import12.RouterOutlet) && (15 === requestNodeIndex))) { return this._RouterOutlet_15_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    this.debug(6,3,4);
    changes = (null as any);
    this.debug(6,3,7);
    const currVal_1:any = '/top';
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_6_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_6_3.ngOnChanges(changes); }
    this.debug(9,4,4);
    changes = (null as any);
    this.debug(9,4,7);
    const currVal_4:any = '/about';
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkWithHref_9_3.routerLink = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_9_3.ngOnChanges(changes); }
    this.debug(12,5,4);
    changes = (null as any);
    this.debug(12,5,7);
    const currVal_7:any = '/sub/detail';
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._RouterLinkWithHref_12_3.routerLink = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_12_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(6,3,4);
    const currVal_2:any = this._RouterLinkWithHref_6_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_6,'href',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.debug(9,4,4);
    const currVal_5:any = this._RouterLinkWithHref_9_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_9,'href',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_5));
      this._expr_5 = currVal_5;
    }
    this.debug(12,5,4);
    const currVal_8:any = this._RouterLinkWithHref_12_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_12,'href',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_8));
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(6,3,4);
    this._RouterLinkWithHref_6_3.ngOnDestroy();
    this.debug(9,4,4);
    this._RouterLinkWithHref_9_3.ngOnDestroy();
    this.debug(12,5,4);
    this._RouterLinkWithHref_12_3.ngOnDestroy();
    this.debug(15,6,4);
    this._RouterOutlet_15_5.ngOnDestroy();
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(6,3,4);
    const pd_0:any = ((<any>this._RouterLinkWithHref_6_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(9,4,4);
    const pd_0:any = ((<any>this._RouterLinkWithHref_9_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(12,5,4);
    const pd_0:any = ((<any>this._RouterLinkWithHref_12_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MyApp0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.MyApp> {
  if ((renderType_MyApp === (null as any))) { (renderType_MyApp = viewUtils.createRenderComponentType('/Users/yosuke/workspaces/javascript/ng2-studies/routing-with-lazy-load/src/app/my-app.component.ts class MyApp - inline template',0,import9.ViewEncapsulation.Emulated,styles_MyApp,{})); }
  return new _View_MyApp0(viewUtils,parentInjector,declarationEl);
}