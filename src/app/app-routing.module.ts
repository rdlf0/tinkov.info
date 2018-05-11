import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/components/homepage/homepage.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
