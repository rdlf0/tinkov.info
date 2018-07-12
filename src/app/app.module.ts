import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FontsModule } from './fonts/fonts.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { APP_CONFIG, APP_DI_CONFIG } from './app.config';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FontsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BreadcrumbComponent,
        HomepageComponent
    ],
    providers: [{ provide: APP_CONFIG, useValue: APP_DI_CONFIG }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
