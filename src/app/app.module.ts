import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as FontListComponent } from './fonts/list/list.component';

const routes: Routes = [
    { path: 'fonts', component: FontListComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        FontListComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
