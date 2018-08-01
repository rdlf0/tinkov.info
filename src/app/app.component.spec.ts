import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { AppConfig } from './AppConfig';
import { APP_CONFIG } from './app.config';

describe('AppComponent', () => {
    let configStub: Partial<AppConfig>;
    configStub = {
        title: 'Tinkov'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BreadcrumbStubComponent,
                RouterOutletStubComponent
            ],
            providers: [
                { provide: APP_CONFIG, use_value: configStub }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});

@Component({ selector: 'app-breadcrumb', template: '' })
class BreadcrumbStubComponent {}

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {}
