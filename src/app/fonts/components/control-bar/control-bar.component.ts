import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { WidgetResetService } from '../../services/control-bar/widget-reset.service';
import { WidgetFactoryService } from '../../services/control-bar/widget-factory.service';
import { Widget } from '../../models/widget';
import { WidgetDirective } from './widgets/widget.directive';
import { AbstractWidgetComponent } from './widgets/widget.component';

@Component({
    selector: 'app-fonts-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.css'],
    providers: [WidgetResetService, WidgetFactoryService]
})
export class ControlBarComponent implements OnInit {

    @Input() widgets: string[];
    @Input() resetter = false;

    @ViewChild(WidgetDirective, {static: true}) widgetsHost: WidgetDirective;

    private widgetObjects: Widget[] = [];

    constructor(
        private widgetFactoryService: WidgetFactoryService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        this.convertWidgetsToObjects();
        this.loadWidgets();
    }

    private convertWidgetsToObjects() {
        for (const widget of this.widgets) {
            const widgetObject = this.widgetFactoryService.getWidget(widget);
            if (widgetObject) {
                this.widgetObjects.push(widgetObject);
            }
        }
    }

    loadWidgets(): void {
        for (const widget of this.widgetObjects) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.type);
            const componentRef = this.widgetsHost.viewContainerRef.createComponent(componentFactory);

            (<AbstractWidgetComponent<any>>componentRef.instance).widgetName = widget.name;
            (<AbstractWidgetComponent<any>>componentRef.instance).defaultValue = widget.defaultValue;
            (<AbstractWidgetComponent<any>>componentRef.instance).data = widget.data;
        }
    }
}
