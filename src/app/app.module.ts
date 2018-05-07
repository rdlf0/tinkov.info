import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as FontListComponent } from './components/fonts/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

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
        RouterModule.forRoot(routes, { enableTracing: true }),
        HttpClientModule,
        // Remove when the backend is ready
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
