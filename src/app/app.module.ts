import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FontsModule } from './fonts/fonts.module';

@NgModule({
    imports: [
        BrowserModule,
        FontsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomepageComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
