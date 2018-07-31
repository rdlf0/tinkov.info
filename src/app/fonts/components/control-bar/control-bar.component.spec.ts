import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBarComponent } from './control-bar.component';
import { Component } from '@angular/core';
import { WidgetFactoryService } from '../../services/control-bar/widget-factory.service';
import { APP_CONFIG, APP_DI_CONFIG } from '../../../app.config';

describe('ControlBarComponent', () => {
    let component: ControlBarComponent;
    let fixture: ComponentFixture<ControlBarComponent>;

    beforeEach(async(() => {
        const widgetFactoryServiceSpy = jasmine.createSpyObj('WidgetFactoryService', ['getWidget']);

        TestBed.configureTestingModule({
            declarations: [
                ControlBarComponent,
                WidgetResetterStubComponent
            ],
            providers: [
                { provide: APP_CONFIG, useValue: APP_DI_CONFIG },
                { provide: WidgetFactoryService, useValue: widgetFactoryServiceSpy }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ControlBarComponent);
        component = fixture.componentInstance;
        component.widgets = [];
        component.resetter = true;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-control-bar-widget-resetter', template: '' })
class WidgetResetterStubComponent {}
