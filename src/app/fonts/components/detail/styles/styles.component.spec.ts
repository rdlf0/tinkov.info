import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesComponent } from './styles.component';
import { Component, Input } from '@angular/core';
import { Widget } from '../../../models/widget';

describe('StylesComponent', () => {
    let component: StylesComponent;
    let fixture: ComponentFixture<StylesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StylesComponent,
                ControlBarStubComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StylesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-fonts-control-bar', template: '' })
class ControlBarStubComponent {
    @Input() widgets: Widget[];
    @Input() resetter: boolean;
}
