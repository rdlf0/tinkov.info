import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FontService } from '../fonts/services/font.service';
import { Observable } from 'rxjs';

describe('BreadcrumbComponent', () => {
    let component: BreadcrumbComponent;
    let fixture: ComponentFixture<BreadcrumbComponent>;

    beforeEach(async(() => {
        const fontServiceSpy = jasmine.createSpyObj('FontService', ['getFontByProperty']);

        TestBed.configureTestingModule({
            declarations: [
                BreadcrumbComponent,
                RouterLinkDirectiveStub
            ],
            providers: [
                { provide: Router, useClass: MockRouter },
                { provide: ActivatedRoute, useValue: ActivatedRouteStub },
                { provide: FontService, useValue: fontServiceSpy }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

class MockRouter {
    public ne = new NavigationEnd(0, '', '');
    public events = new Observable(observer => {
        observer.next(this.ne);
        observer.complete();
    });
}
