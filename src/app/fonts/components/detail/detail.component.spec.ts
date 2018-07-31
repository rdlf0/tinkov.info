import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { FontService } from '../../services/font.service';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../../testing/activated-route-stub';
import { Component, Input } from '@angular/core';
import { Font } from '../../models/font';

describe('DetailComponent', () => {
    let component: DetailComponent;
    let fixture: ComponentFixture<DetailComponent>;
    const activatedRoute = new ActivatedRouteStub();

    beforeEach(async(() => {
        const fontServiceSpy = jasmine.createSpyObj('FontService', ['getFontByProperty']);

        activatedRoute.setParamMap({ slug: 'test-font' });

        TestBed.configureTestingModule({
            declarations: [
                DetailComponent,
                FontDetailsStyleStubComponent,
                FontDetailsDetailsStubComponent,
                FontDetailsInspirationStubComponent,
                FontDetailsTryStubComponent
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRoute },
                { provide: FontService, useValue: fontServiceSpy }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-font-detail-styles', template: '' })
class FontDetailsStyleStubComponent {
    @Input() font: Font;
}

@Component({ selector: 'app-font-detail-details', template: '' })
class FontDetailsDetailsStubComponent {}

@Component({ selector: 'app-font-detail-inspiration', template: '' })
class FontDetailsInspirationStubComponent {}

@Component({ selector: 'app-font-detail-try', template: '' })
class FontDetailsTryStubComponent {}
