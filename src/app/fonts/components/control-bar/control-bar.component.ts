import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { WidgetService } from '../../services/control-bar/widget.service';
import { WidgetFactoryService } from '../../services/control-bar/widget-factory.service';
import { Widget } from '../../models/widget';
import { WidgetDirective } from './widgets/widget.directive';
import { AbstractWidgetComponent } from './widgets/widget.component';

@Component({
    selector: 'app-fonts-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.css'],
    providers: [WidgetService, WidgetFactoryService]
})
export class ControlBarComponent implements OnInit {

    @Input() widgets: string[];
    @Input() resetter = false;

    @ViewChild(WidgetDirective) widgetsHost: WidgetDirective;

    private widgetObjects: Widget[] = [];

    constructor(
        private widgetFactoryService: WidgetFactoryService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        for (const widget of this.widgets) {
            const widgetObject = this.widgetFactoryService.getWidget(widget);
            if (widgetObject) {
                this.widgetObjects.push(widgetObject);
            }
        }

        this.loadWidgets();
    }

    loadWidgets(): void {
        for (const widget of this.widgetObjects) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.type);
            const componentRef = this.widgetsHost.viewContainerRef.createComponent(componentFactory);

            (<AbstractWidgetComponent<any>>componentRef.instance).widgetName = widget.name;

            for (const item of widget.data) {
                componentRef.instance[item.key] = item.value;
            }
        }
    }
}
