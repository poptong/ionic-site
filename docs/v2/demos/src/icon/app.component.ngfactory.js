var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/grid/grid';
import * as import15 from 'ionic-angular/components/icon/icon';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/components/nav/nav';
import * as import28 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import29 from 'ionic-angular/navigation/nav-controller-base';
import * as import30 from '@angular/core/src/linker/component_factory_resolver';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from 'ionic-angular/transitions/transition-controller';
import * as import33 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = ['.icon-demo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n\n  .icon-demo[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n    height: 100%;\n    flex-wrap: wrap;\n  }\n\n  .icon-demo[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n    text-align: center;\n    padding: 10px 5px;\n  }'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import19.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import22.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Icon', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'icon-demo');
        this.renderer.setElementAttribute(this._el_9, 'text-center', '');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import23.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-row', null);
        this._Row_11_3 = new import14.Row();
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_13_3 = new import14.Col();
        this._el_14 = this.renderer.createElement(this._el_13, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_14, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_14, 'name', 'ionic');
        this.renderer.setElementAttribute(this._el_14, 'role', 'img');
        this._Icon_14_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_14), this.renderer);
        this._text_15 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_16_3 = new import14.Col();
        this._el_17 = this.renderer.createElement(this._el_16, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_17, 'name', 'logo-angular');
        this.renderer.setElementAttribute(this._el_17, 'role', 'img');
        this._Icon_17_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_17), this.renderer);
        this._text_18 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_19_3 = new import14.Col();
        this._el_20 = this.renderer.createElement(this._el_19, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_20, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_20, 'name', 'heart');
        this.renderer.setElementAttribute(this._el_20, 'role', 'img');
        this._Icon_20_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_20), this.renderer);
        this._text_21 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_22_3 = new import14.Col();
        this._el_23 = this.renderer.createElement(this._el_22, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_23, 'name', 'ionitron');
        this.renderer.setElementAttribute(this._el_23, 'role', 'img');
        this._Icon_23_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_25 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_25_3 = new import14.Col();
        this._el_26 = this.renderer.createElement(this._el_25, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_26, 'color', 'vibrant');
        this.renderer.setElementAttribute(this._el_26, 'name', 'happy');
        this.renderer.setElementAttribute(this._el_26, 'role', 'img');
        this._Icon_26_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_26), this.renderer);
        this._text_27 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_28 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_28_3 = new import14.Col();
        this._el_29 = this.renderer.createElement(this._el_28, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_29, 'name', 'people');
        this.renderer.setElementAttribute(this._el_29, 'role', 'img');
        this._Icon_29_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_29), this.renderer);
        this._text_30 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_31 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_31_3 = new import14.Col();
        this._el_32 = this.renderer.createElement(this._el_31, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_32, 'name', 'person');
        this.renderer.setElementAttribute(this._el_32, 'role', 'img');
        this._Icon_32_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_32), this.renderer);
        this._text_33 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_34 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_34_3 = new import14.Col();
        this._el_35 = this.renderer.createElement(this._el_34, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_35, 'name', 'contact');
        this.renderer.setElementAttribute(this._el_35, 'role', 'img');
        this._Icon_35_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_35), this.renderer);
        this._text_36 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_37 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_37_3 = new import14.Col();
        this._el_38 = this.renderer.createElement(this._el_37, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_38, 'name', 'apps');
        this.renderer.setElementAttribute(this._el_38, 'role', 'img');
        this._Icon_38_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_38), this.renderer);
        this._text_39 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_40 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_40_3 = new import14.Col();
        this._el_41 = this.renderer.createElement(this._el_40, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_41, 'name', 'lock');
        this.renderer.setElementAttribute(this._el_41, 'role', 'img');
        this._Icon_41_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_41), this.renderer);
        this._text_42 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_43 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_43_3 = new import14.Col();
        this._el_44 = this.renderer.createElement(this._el_43, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_44, 'color', 'bright');
        this.renderer.setElementAttribute(this._el_44, 'name', 'key');
        this.renderer.setElementAttribute(this._el_44, 'role', 'img');
        this._Icon_44_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_44), this.renderer);
        this._text_45 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_46 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_46_3 = new import14.Col();
        this._el_47 = this.renderer.createElement(this._el_46, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_47, 'name', 'unlock');
        this.renderer.setElementAttribute(this._el_47, 'role', 'img');
        this._Icon_47_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_47), this.renderer);
        this._text_48 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_49 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_49_3 = new import14.Col();
        this._el_50 = this.renderer.createElement(this._el_49, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_50, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_50, 'name', 'map');
        this.renderer.setElementAttribute(this._el_50, 'role', 'img');
        this._Icon_50_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_50), this.renderer);
        this._text_51 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_52 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_52_3 = new import14.Col();
        this._el_53 = this.renderer.createElement(this._el_52, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_53, 'name', 'navigate');
        this.renderer.setElementAttribute(this._el_53, 'role', 'img');
        this._Icon_53_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_53), this.renderer);
        this._text_54 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_55 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_55_3 = new import14.Col();
        this._el_56 = this.renderer.createElement(this._el_55, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_56, 'name', 'pin');
        this.renderer.setElementAttribute(this._el_56, 'role', 'img');
        this._Icon_56_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_56), this.renderer);
        this._text_57 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_58 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_58_3 = new import14.Col();
        this._el_59 = this.renderer.createElement(this._el_58, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_59, 'name', 'locate');
        this.renderer.setElementAttribute(this._el_59, 'role', 'img');
        this._Icon_59_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_59), this.renderer);
        this._text_60 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_61 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_61_3 = new import14.Col();
        this._el_62 = this.renderer.createElement(this._el_61, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_62, 'name', 'mic');
        this.renderer.setElementAttribute(this._el_62, 'role', 'img');
        this._Icon_62_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_62), this.renderer);
        this._text_63 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_64 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_64_3 = new import14.Col();
        this._el_65 = this.renderer.createElement(this._el_64, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_65, 'color', 'vibrant');
        this.renderer.setElementAttribute(this._el_65, 'name', 'musical-notes');
        this.renderer.setElementAttribute(this._el_65, 'role', 'img');
        this._Icon_65_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_65), this.renderer);
        this._text_66 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_67 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_67_3 = new import14.Col();
        this._el_68 = this.renderer.createElement(this._el_67, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_68, 'name', 'volume-up');
        this.renderer.setElementAttribute(this._el_68, 'role', 'img');
        this._Icon_68_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_68), this.renderer);
        this._text_69 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_70_3 = new import14.Col();
        this._el_71 = this.renderer.createElement(this._el_70, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_71, 'name', 'microphone');
        this.renderer.setElementAttribute(this._el_71, 'role', 'img');
        this._Icon_71_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_71), this.renderer);
        this._text_72 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_73 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_73_3 = new import14.Col();
        this._el_74 = this.renderer.createElement(this._el_73, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_74, 'color', 'bright');
        this.renderer.setElementAttribute(this._el_74, 'name', 'cafe');
        this.renderer.setElementAttribute(this._el_74, 'role', 'img');
        this._Icon_74_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_74), this.renderer);
        this._text_75 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_76 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_76_3 = new import14.Col();
        this._el_77 = this.renderer.createElement(this._el_76, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_77, 'name', 'calculator');
        this.renderer.setElementAttribute(this._el_77, 'role', 'img');
        this._Icon_77_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_77), this.renderer);
        this._text_78 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_79 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_79_3 = new import14.Col();
        this._el_80 = this.renderer.createElement(this._el_79, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_80, 'name', 'bus');
        this.renderer.setElementAttribute(this._el_80, 'role', 'img');
        this._Icon_80_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_80), this.renderer);
        this._text_81 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_82 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_82_3 = new import14.Col();
        this._el_83 = this.renderer.createElement(this._el_82, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_83, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_83, 'name', 'wine');
        this.renderer.setElementAttribute(this._el_83, 'role', 'img');
        this._Icon_83_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_83), this.renderer);
        this._text_84 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_85 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_85_3 = new import14.Col();
        this._el_86 = this.renderer.createElement(this._el_85, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_86, 'name', 'camera');
        this.renderer.setElementAttribute(this._el_86, 'role', 'img');
        this._Icon_86_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_86), this.renderer);
        this._text_87 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_88 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_88_3 = new import14.Col();
        this._el_89 = this.renderer.createElement(this._el_88, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_89, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_89, 'name', 'image');
        this.renderer.setElementAttribute(this._el_89, 'role', 'img');
        this._Icon_89_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_89), this.renderer);
        this._text_90 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_91 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_91_3 = new import14.Col();
        this._el_92 = this.renderer.createElement(this._el_91, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_92, 'color', 'bright');
        this.renderer.setElementAttribute(this._el_92, 'name', 'star');
        this.renderer.setElementAttribute(this._el_92, 'role', 'img');
        this._Icon_92_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_92), this.renderer);
        this._text_93 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_94 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_94_3 = new import14.Col();
        this._el_95 = this.renderer.createElement(this._el_94, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_95, 'name', 'pin');
        this.renderer.setElementAttribute(this._el_95, 'role', 'img');
        this._Icon_95_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_95), this.renderer);
        this._text_96 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_97 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_97_3 = new import14.Col();
        this._el_98 = this.renderer.createElement(this._el_97, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_98, 'color', 'vibrant');
        this.renderer.setElementAttribute(this._el_98, 'name', 'arrow-dropup-circle');
        this.renderer.setElementAttribute(this._el_98, 'role', 'img');
        this._Icon_98_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_98), this.renderer);
        this._text_99 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_100 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_100_3 = new import14.Col();
        this._el_101 = this.renderer.createElement(this._el_100, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_101, 'name', 'arrow-back');
        this.renderer.setElementAttribute(this._el_101, 'role', 'img');
        this._Icon_101_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_101), this.renderer);
        this._text_102 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_103 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_103_3 = new import14.Col();
        this._el_104 = this.renderer.createElement(this._el_103, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_104, 'name', 'arrow-dropdown');
        this.renderer.setElementAttribute(this._el_104, 'role', 'img');
        this._Icon_104_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_104), this.renderer);
        this._text_105 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_106 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_106_3 = new import14.Col();
        this._el_107 = this.renderer.createElement(this._el_106, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_107, 'name', 'arrow-forward');
        this.renderer.setElementAttribute(this._el_107, 'role', 'img');
        this._Icon_107_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_107), this.renderer);
        this._text_108 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_109 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_109_3 = new import14.Col();
        this._el_110 = this.renderer.createElement(this._el_109, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_110, 'name', 'cloud');
        this.renderer.setElementAttribute(this._el_110, 'role', 'img');
        this._Icon_110_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_110), this.renderer);
        this._text_111 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_112 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_112_3 = new import14.Col();
        this._el_113 = this.renderer.createElement(this._el_112, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_113, 'color', 'bright');
        this.renderer.setElementAttribute(this._el_113, 'name', 'sunny');
        this.renderer.setElementAttribute(this._el_113, 'role', 'img');
        this._Icon_113_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_113), this.renderer);
        this._text_114 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_115 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_115_3 = new import14.Col();
        this._el_116 = this.renderer.createElement(this._el_115, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_116, 'name', 'umbrella');
        this.renderer.setElementAttribute(this._el_116, 'role', 'img');
        this._Icon_116_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_116), this.renderer);
        this._text_117 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_118 = this.renderer.createElement(this._el_11, 'ion-col', null);
        this._Col_118_3 = new import14.Col();
        this._el_119 = this.renderer.createElement(this._el_118, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_119, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_119, 'name', 'rainy');
        this.renderer.setElementAttribute(this._el_119, 'role', 'img');
        this._Icon_119_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_119), this.renderer);
        this._text_120 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_121 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_121
            ]),
            []
        ], null);
        this._text_122 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_123 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        this._expr_60 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        this._expr_62 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_64 = import7.UNINITIALIZED;
        this._expr_65 = import7.UNINITIALIZED;
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        this._expr_68 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        this._expr_72 = import7.UNINITIALIZED;
        this._expr_73 = import7.UNINITIALIZED;
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        this._expr_78 = import7.UNINITIALIZED;
        this._expr_79 = import7.UNINITIALIZED;
        this._expr_80 = import7.UNINITIALIZED;
        this._expr_81 = import7.UNINITIALIZED;
        this._expr_82 = import7.UNINITIALIZED;
        this._expr_83 = import7.UNINITIALIZED;
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        this._expr_88 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._el_65,
            this._text_66,
            this._el_67,
            this._el_68,
            this._text_69,
            this._el_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._el_74,
            this._text_75,
            this._el_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._el_80,
            this._text_81,
            this._el_82,
            this._el_83,
            this._text_84,
            this._el_85,
            this._el_86,
            this._text_87,
            this._el_88,
            this._el_89,
            this._text_90,
            this._el_91,
            this._el_92,
            this._text_93,
            this._el_94,
            this._el_95,
            this._text_96,
            this._el_97,
            this._el_98,
            this._text_99,
            this._el_100,
            this._el_101,
            this._text_102,
            this._el_103,
            this._el_104,
            this._text_105,
            this._el_106,
            this._el_107,
            this._text_108,
            this._el_109,
            this._el_110,
            this._text_111,
            this._el_112,
            this._el_113,
            this._text_114,
            this._el_115,
            this._el_116,
            this._text_117,
            this._el_118,
            this._el_119,
            this._text_120,
            this._text_121,
            this._text_122,
            this._text_123
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import15.Icon) && (14 === requestNodeIndex))) {
            return this._Icon_14_3;
        }
        if (((token === import14.Col) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Col_13_3;
        }
        if (((token === import15.Icon) && (17 === requestNodeIndex))) {
            return this._Icon_17_3;
        }
        if (((token === import14.Col) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Col_16_3;
        }
        if (((token === import15.Icon) && (20 === requestNodeIndex))) {
            return this._Icon_20_3;
        }
        if (((token === import14.Col) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Col_19_3;
        }
        if (((token === import15.Icon) && (23 === requestNodeIndex))) {
            return this._Icon_23_3;
        }
        if (((token === import14.Col) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Col_22_3;
        }
        if (((token === import15.Icon) && (26 === requestNodeIndex))) {
            return this._Icon_26_3;
        }
        if (((token === import14.Col) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Col_25_3;
        }
        if (((token === import15.Icon) && (29 === requestNodeIndex))) {
            return this._Icon_29_3;
        }
        if (((token === import14.Col) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Col_28_3;
        }
        if (((token === import15.Icon) && (32 === requestNodeIndex))) {
            return this._Icon_32_3;
        }
        if (((token === import14.Col) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Col_31_3;
        }
        if (((token === import15.Icon) && (35 === requestNodeIndex))) {
            return this._Icon_35_3;
        }
        if (((token === import14.Col) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Col_34_3;
        }
        if (((token === import15.Icon) && (38 === requestNodeIndex))) {
            return this._Icon_38_3;
        }
        if (((token === import14.Col) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Col_37_3;
        }
        if (((token === import15.Icon) && (41 === requestNodeIndex))) {
            return this._Icon_41_3;
        }
        if (((token === import14.Col) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._Col_40_3;
        }
        if (((token === import15.Icon) && (44 === requestNodeIndex))) {
            return this._Icon_44_3;
        }
        if (((token === import14.Col) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Col_43_3;
        }
        if (((token === import15.Icon) && (47 === requestNodeIndex))) {
            return this._Icon_47_3;
        }
        if (((token === import14.Col) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Col_46_3;
        }
        if (((token === import15.Icon) && (50 === requestNodeIndex))) {
            return this._Icon_50_3;
        }
        if (((token === import14.Col) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._Col_49_3;
        }
        if (((token === import15.Icon) && (53 === requestNodeIndex))) {
            return this._Icon_53_3;
        }
        if (((token === import14.Col) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Col_52_3;
        }
        if (((token === import15.Icon) && (56 === requestNodeIndex))) {
            return this._Icon_56_3;
        }
        if (((token === import14.Col) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Col_55_3;
        }
        if (((token === import15.Icon) && (59 === requestNodeIndex))) {
            return this._Icon_59_3;
        }
        if (((token === import14.Col) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Col_58_3;
        }
        if (((token === import15.Icon) && (62 === requestNodeIndex))) {
            return this._Icon_62_3;
        }
        if (((token === import14.Col) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._Col_61_3;
        }
        if (((token === import15.Icon) && (65 === requestNodeIndex))) {
            return this._Icon_65_3;
        }
        if (((token === import14.Col) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Col_64_3;
        }
        if (((token === import15.Icon) && (68 === requestNodeIndex))) {
            return this._Icon_68_3;
        }
        if (((token === import14.Col) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Col_67_3;
        }
        if (((token === import15.Icon) && (71 === requestNodeIndex))) {
            return this._Icon_71_3;
        }
        if (((token === import14.Col) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._Col_70_3;
        }
        if (((token === import15.Icon) && (74 === requestNodeIndex))) {
            return this._Icon_74_3;
        }
        if (((token === import14.Col) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._Col_73_3;
        }
        if (((token === import15.Icon) && (77 === requestNodeIndex))) {
            return this._Icon_77_3;
        }
        if (((token === import14.Col) && ((76 <= requestNodeIndex) && (requestNodeIndex <= 77)))) {
            return this._Col_76_3;
        }
        if (((token === import15.Icon) && (80 === requestNodeIndex))) {
            return this._Icon_80_3;
        }
        if (((token === import14.Col) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._Col_79_3;
        }
        if (((token === import15.Icon) && (83 === requestNodeIndex))) {
            return this._Icon_83_3;
        }
        if (((token === import14.Col) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._Col_82_3;
        }
        if (((token === import15.Icon) && (86 === requestNodeIndex))) {
            return this._Icon_86_3;
        }
        if (((token === import14.Col) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Col_85_3;
        }
        if (((token === import15.Icon) && (89 === requestNodeIndex))) {
            return this._Icon_89_3;
        }
        if (((token === import14.Col) && ((88 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._Col_88_3;
        }
        if (((token === import15.Icon) && (92 === requestNodeIndex))) {
            return this._Icon_92_3;
        }
        if (((token === import14.Col) && ((91 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._Col_91_3;
        }
        if (((token === import15.Icon) && (95 === requestNodeIndex))) {
            return this._Icon_95_3;
        }
        if (((token === import14.Col) && ((94 <= requestNodeIndex) && (requestNodeIndex <= 95)))) {
            return this._Col_94_3;
        }
        if (((token === import15.Icon) && (98 === requestNodeIndex))) {
            return this._Icon_98_3;
        }
        if (((token === import14.Col) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._Col_97_3;
        }
        if (((token === import15.Icon) && (101 === requestNodeIndex))) {
            return this._Icon_101_3;
        }
        if (((token === import14.Col) && ((100 <= requestNodeIndex) && (requestNodeIndex <= 101)))) {
            return this._Col_100_3;
        }
        if (((token === import15.Icon) && (104 === requestNodeIndex))) {
            return this._Icon_104_3;
        }
        if (((token === import14.Col) && ((103 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._Col_103_3;
        }
        if (((token === import15.Icon) && (107 === requestNodeIndex))) {
            return this._Icon_107_3;
        }
        if (((token === import14.Col) && ((106 <= requestNodeIndex) && (requestNodeIndex <= 107)))) {
            return this._Col_106_3;
        }
        if (((token === import15.Icon) && (110 === requestNodeIndex))) {
            return this._Icon_110_3;
        }
        if (((token === import14.Col) && ((109 <= requestNodeIndex) && (requestNodeIndex <= 110)))) {
            return this._Col_109_3;
        }
        if (((token === import15.Icon) && (113 === requestNodeIndex))) {
            return this._Icon_113_3;
        }
        if (((token === import14.Col) && ((112 <= requestNodeIndex) && (requestNodeIndex <= 113)))) {
            return this._Col_112_3;
        }
        if (((token === import15.Icon) && (116 === requestNodeIndex))) {
            return this._Icon_116_3;
        }
        if (((token === import14.Col) && ((115 <= requestNodeIndex) && (requestNodeIndex <= 116)))) {
            return this._Col_115_3;
        }
        if (((token === import15.Icon) && (119 === requestNodeIndex))) {
            return this._Icon_119_3;
        }
        if (((token === import14.Col) && ((118 <= requestNodeIndex) && (requestNodeIndex <= 119)))) {
            return this._Col_118_3;
        }
        if (((token === import14.Row) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._Row_11_3;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 121)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        var currVal_3 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Icon_14_3.color = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = 'ionic';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Icon_14_3.name = currVal_4;
            this._expr_4 = currVal_4;
        }
        var currVal_6 = 'logo-angular';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_17_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_8 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Icon_20_3.color = currVal_8;
            this._expr_8 = currVal_8;
        }
        var currVal_9 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Icon_20_3.name = currVal_9;
            this._expr_9 = currVal_9;
        }
        var currVal_11 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._Icon_23_3.color = currVal_11;
            this._expr_11 = currVal_11;
        }
        var currVal_12 = 'ionitron';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Icon_23_3.name = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_14 = 'vibrant';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Icon_26_3.color = currVal_14;
            this._expr_14 = currVal_14;
        }
        var currVal_15 = 'happy';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Icon_26_3.name = currVal_15;
            this._expr_15 = currVal_15;
        }
        var currVal_17 = 'people';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Icon_29_3.name = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_19 = 'person';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Icon_32_3.name = currVal_19;
            this._expr_19 = currVal_19;
        }
        var currVal_21 = 'contact';
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._Icon_35_3.name = currVal_21;
            this._expr_21 = currVal_21;
        }
        var currVal_23 = 'apps';
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._Icon_38_3.name = currVal_23;
            this._expr_23 = currVal_23;
        }
        var currVal_25 = 'lock';
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this._Icon_41_3.name = currVal_25;
            this._expr_25 = currVal_25;
        }
        var currVal_27 = 'bright';
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this._Icon_44_3.color = currVal_27;
            this._expr_27 = currVal_27;
        }
        var currVal_28 = 'key';
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this._Icon_44_3.name = currVal_28;
            this._expr_28 = currVal_28;
        }
        var currVal_30 = 'unlock';
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this._Icon_47_3.name = currVal_30;
            this._expr_30 = currVal_30;
        }
        var currVal_32 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._Icon_50_3.color = currVal_32;
            this._expr_32 = currVal_32;
        }
        var currVal_33 = 'map';
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this._Icon_50_3.name = currVal_33;
            this._expr_33 = currVal_33;
        }
        var currVal_35 = 'navigate';
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._Icon_53_3.name = currVal_35;
            this._expr_35 = currVal_35;
        }
        var currVal_37 = 'pin';
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this._Icon_56_3.name = currVal_37;
            this._expr_37 = currVal_37;
        }
        var currVal_39 = 'locate';
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this._Icon_59_3.name = currVal_39;
            this._expr_39 = currVal_39;
        }
        var currVal_41 = 'mic';
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this._Icon_62_3.name = currVal_41;
            this._expr_41 = currVal_41;
        }
        var currVal_43 = 'vibrant';
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this._Icon_65_3.color = currVal_43;
            this._expr_43 = currVal_43;
        }
        var currVal_44 = 'musical-notes';
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this._Icon_65_3.name = currVal_44;
            this._expr_44 = currVal_44;
        }
        var currVal_46 = 'volume-up';
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this._Icon_68_3.name = currVal_46;
            this._expr_46 = currVal_46;
        }
        var currVal_48 = 'microphone';
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this._Icon_71_3.name = currVal_48;
            this._expr_48 = currVal_48;
        }
        var currVal_50 = 'bright';
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this._Icon_74_3.color = currVal_50;
            this._expr_50 = currVal_50;
        }
        var currVal_51 = 'cafe';
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this._Icon_74_3.name = currVal_51;
            this._expr_51 = currVal_51;
        }
        var currVal_53 = 'calculator';
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this._Icon_77_3.name = currVal_53;
            this._expr_53 = currVal_53;
        }
        var currVal_55 = 'bus';
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this._Icon_80_3.name = currVal_55;
            this._expr_55 = currVal_55;
        }
        var currVal_57 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this._Icon_83_3.color = currVal_57;
            this._expr_57 = currVal_57;
        }
        var currVal_58 = 'wine';
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this._Icon_83_3.name = currVal_58;
            this._expr_58 = currVal_58;
        }
        var currVal_60 = 'camera';
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this._Icon_86_3.name = currVal_60;
            this._expr_60 = currVal_60;
        }
        var currVal_62 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this._Icon_89_3.color = currVal_62;
            this._expr_62 = currVal_62;
        }
        var currVal_63 = 'image';
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this._Icon_89_3.name = currVal_63;
            this._expr_63 = currVal_63;
        }
        var currVal_65 = 'bright';
        if (import4.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this._Icon_92_3.color = currVal_65;
            this._expr_65 = currVal_65;
        }
        var currVal_66 = 'star';
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this._Icon_92_3.name = currVal_66;
            this._expr_66 = currVal_66;
        }
        var currVal_68 = 'pin';
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this._Icon_95_3.name = currVal_68;
            this._expr_68 = currVal_68;
        }
        var currVal_70 = 'vibrant';
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this._Icon_98_3.color = currVal_70;
            this._expr_70 = currVal_70;
        }
        var currVal_71 = 'arrow-dropup-circle';
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this._Icon_98_3.name = currVal_71;
            this._expr_71 = currVal_71;
        }
        var currVal_73 = 'arrow-back';
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this._Icon_101_3.name = currVal_73;
            this._expr_73 = currVal_73;
        }
        var currVal_75 = 'arrow-dropdown';
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this._Icon_104_3.name = currVal_75;
            this._expr_75 = currVal_75;
        }
        var currVal_77 = 'arrow-forward';
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this._Icon_107_3.name = currVal_77;
            this._expr_77 = currVal_77;
        }
        var currVal_79 = 'cloud';
        if (import4.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this._Icon_110_3.name = currVal_79;
            this._expr_79 = currVal_79;
        }
        var currVal_81 = 'bright';
        if (import4.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this._Icon_113_3.color = currVal_81;
            this._expr_81 = currVal_81;
        }
        var currVal_82 = 'sunny';
        if (import4.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this._Icon_113_3.name = currVal_82;
            this._expr_82 = currVal_82;
        }
        var currVal_84 = 'umbrella';
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this._Icon_116_3.name = currVal_84;
            this._expr_84 = currVal_84;
        }
        var currVal_86 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this._Icon_119_3.color = currVal_86;
            this._expr_86 = currVal_86;
        }
        var currVal_87 = 'rainy';
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this._Icon_119_3.name = currVal_87;
            this._expr_87 = currVal_87;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._Icon_14_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_14, 'hide', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_17_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_17, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_10 = this._Icon_20_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_20, 'hide', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_13 = this._Icon_23_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_23, 'hide', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_16 = this._Icon_26_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_26, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_18 = this._Icon_29_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_29, 'hide', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_20 = this._Icon_32_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_32, 'hide', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_22 = this._Icon_35_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_35, 'hide', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_24 = this._Icon_38_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_38, 'hide', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_26 = this._Icon_41_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_41, 'hide', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_29 = this._Icon_44_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_44, 'hide', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_31 = this._Icon_47_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_47, 'hide', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_34 = this._Icon_50_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_50, 'hide', currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_36 = this._Icon_53_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_53, 'hide', currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_38 = this._Icon_56_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_56, 'hide', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_40 = this._Icon_59_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementClass(this._el_59, 'hide', currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_42 = this._Icon_62_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementClass(this._el_62, 'hide', currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_45 = this._Icon_65_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_65, 'hide', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_47 = this._Icon_68_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementClass(this._el_68, 'hide', currVal_47);
            this._expr_47 = currVal_47;
        }
        var currVal_49 = this._Icon_71_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_71, 'hide', currVal_49);
            this._expr_49 = currVal_49;
        }
        var currVal_52 = this._Icon_74_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setElementClass(this._el_74, 'hide', currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_54 = this._Icon_77_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementClass(this._el_77, 'hide', currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_56 = this._Icon_80_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_80, 'hide', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_59 = this._Icon_83_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementClass(this._el_83, 'hide', currVal_59);
            this._expr_59 = currVal_59;
        }
        var currVal_61 = this._Icon_86_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setElementClass(this._el_86, 'hide', currVal_61);
            this._expr_61 = currVal_61;
        }
        var currVal_64 = this._Icon_89_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setElementClass(this._el_89, 'hide', currVal_64);
            this._expr_64 = currVal_64;
        }
        var currVal_67 = this._Icon_92_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this.renderer.setElementClass(this._el_92, 'hide', currVal_67);
            this._expr_67 = currVal_67;
        }
        var currVal_69 = this._Icon_95_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_95, 'hide', currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_72 = this._Icon_98_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this.renderer.setElementClass(this._el_98, 'hide', currVal_72);
            this._expr_72 = currVal_72;
        }
        var currVal_74 = this._Icon_101_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this.renderer.setElementClass(this._el_101, 'hide', currVal_74);
            this._expr_74 = currVal_74;
        }
        var currVal_76 = this._Icon_104_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setElementClass(this._el_104, 'hide', currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_78 = this._Icon_107_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementClass(this._el_107, 'hide', currVal_78);
            this._expr_78 = currVal_78;
        }
        var currVal_80 = this._Icon_110_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this.renderer.setElementClass(this._el_110, 'hide', currVal_80);
            this._expr_80 = currVal_80;
        }
        var currVal_83 = this._Icon_113_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setElementClass(this._el_113, 'hide', currVal_83);
            this._expr_83 = currVal_83;
        }
        var currVal_85 = this._Icon_116_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this.renderer.setElementClass(this._el_116, 'hide', currVal_85);
            this._expr_85 = currVal_85;
        }
        var currVal_88 = this._Icon_119_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setElementClass(this._el_119, 'hide', currVal_88);
            this._expr_88 = currVal_88;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_14_3.ngOnDestroy();
        this._Icon_17_3.ngOnDestroy();
        this._Icon_20_3.ngOnDestroy();
        this._Icon_23_3.ngOnDestroy();
        this._Icon_26_3.ngOnDestroy();
        this._Icon_29_3.ngOnDestroy();
        this._Icon_32_3.ngOnDestroy();
        this._Icon_35_3.ngOnDestroy();
        this._Icon_38_3.ngOnDestroy();
        this._Icon_41_3.ngOnDestroy();
        this._Icon_44_3.ngOnDestroy();
        this._Icon_47_3.ngOnDestroy();
        this._Icon_50_3.ngOnDestroy();
        this._Icon_53_3.ngOnDestroy();
        this._Icon_56_3.ngOnDestroy();
        this._Icon_59_3.ngOnDestroy();
        this._Icon_62_3.ngOnDestroy();
        this._Icon_65_3.ngOnDestroy();
        this._Icon_68_3.ngOnDestroy();
        this._Icon_71_3.ngOnDestroy();
        this._Icon_74_3.ngOnDestroy();
        this._Icon_77_3.ngOnDestroy();
        this._Icon_80_3.ngOnDestroy();
        this._Icon_83_3.ngOnDestroy();
        this._Icon_86_3.ngOnDestroy();
        this._Icon_89_3.ngOnDestroy();
        this._Icon_92_3.ngOnDestroy();
        this._Icon_95_3.ngOnDestroy();
        this._Icon_98_3.ngOnDestroy();
        this._Icon_101_3.ngOnDestroy();
        this._Icon_104_3.ngOnDestroy();
        this._Icon_107_3.ngOnDestroy();
        this._Icon_110_3.ngOnDestroy();
        this._Icon_113_3.ngOnDestroy();
        this._Icon_116_3.ngOnDestroy();
        this._Icon_119_3.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import28.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import27.Nav(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import29.NavControllerBase, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_0), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import33.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
