import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { RouterLinkDirectiveStub } from '../../../../../testing/router-link-directive-stub';
import { WidgetUpdateService } from '../../../services/control-bar/widget-update.service';
import { from } from 'rxjs';
import { Font } from '../../../models/font';

describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    const defaultValues = [
        { widgetName: 'fontSize', value: 96 },
        { widgetName: 'lineHeight', value: 100 },
        { widgetName: 'letterSpacing', value: 0 },
        { widgetName: 'textAlign', value: 'left' }
    ];

    const widgetUpdateServiceStub: any = {
        valueUpdated$: from(defaultValues)
    };

    const testFont: Font = {
        id: 1,
        name: 'Test font',
        slug: 'test-font',
        directory: 'TestFont',
        alternatives: [],
        styles: [],
        stylesFree: [],
        list: {
            preview: {
                text: 'Test font',
                style: 'regular'
            }
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemComponent,
                RouterLinkDirectiveStub
            ],
            providers: [
                { provide: WidgetUpdateService, useValue: widgetUpdateServiceStub }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;
        component.font = testFont;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
