import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as FontListComponent } from './components/fonts/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailComponent as FontDetailComponent } from './components/fonts/detail/detail.component';

const routes: Routes = [
    { path: 'fonts', component: FontListComponent },
    { path: 'fonts/:id', component: FontDetailComponent },
    { path: '', component: HomepageComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        FontListComponent,
        FontDetailComponent,
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
