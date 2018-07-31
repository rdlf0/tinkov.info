import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { AppConfig } from '../../../AppConfig';
import { APP_CONFIG } from '../../../app.config';
import { Component, Input } from '@angular/core';
import { Widget } from '../../models/widget';
import { Font } from '../../models/font';
import { of } from 'rxjs';
import { FontService } from '../../services/font.service';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let getFontsSpy;

    beforeEach(async(() => {
        const fontService = jasmine.createSpyObj('FontService', ['getFonts']);
        getFontsSpy = fontService.getFonts.and.returnValue(of([new Font()]));

        let configStub: Partial<AppConfig>;
        configStub = {
            list: {
                controlBar: {
                    resetter: true,
                    widgets: []
                }
            }
        };

        TestBed.configureTestingModule({
            declarations: [
                ListComponent,
                ControlBarStubComponent,
                ListItemStubComponent
            ],
            providers: [
                { provide: FontService, useValue: fontService },
                { provide: APP_CONFIG, useValue: configStub }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(getFontsSpy.calls.any()).toBe(true, 'getFonts() called')
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-fonts-control-bar', template: '' })
class ControlBarStubComponent {
    @Input() widgets: Widget[];
    @Input() resetter: boolean;
}

@Component({ selector: 'app-fonts-list-item', template: '' })
class ListItemStubComponent {
    @Input() font: Font;
}
