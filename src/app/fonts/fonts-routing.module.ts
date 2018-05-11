import { RouterModule, Routes } from '@angular/router';
import { FontsComponent } from './fonts.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';

const fontsRoutes: Routes = [
    {
        path: 'fonts',
        component: FontsComponent,
        children: [
            {
                path: '',
                component: ListComponent,
            },
            {
                path: ':id',
                component: DetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(fontsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FontsRoutingModule {}
