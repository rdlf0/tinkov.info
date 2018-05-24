import { RouterModule, Routes } from '@angular/router';
import { FontsComponent } from './fonts.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { Font } from './models/font';

const fontsRoutes: Routes = [
    {
        path: 'fonts',
        component: FontsComponent,
        data: {
            breadcrumb: { label: 'Fonts' }
        },
        children: [
            {
                path: '',
                component: ListComponent,
                data: {
                    breadcrumb: null,
                }
            },
            {
                path: ':slug',
                component: DetailComponent,
                data: {
                    breadcrumb: { label: ':name', model: Font }
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fontsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FontsRoutingModule {}
