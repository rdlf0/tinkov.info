import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FontsRoutingModule } from './fonts-routing.module';
import { ListComponent as FontListComponent } from './components/list/list.component';
import { DetailComponent as FontDetailComponent } from './components/detail/detail.component';
import { FontsComponent } from './fonts.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { StylesComponent } from './components/detail/styles/styles.component';
import { InspirationComponent } from './components/detail/inspiration/inspiration.component';
import { DetailsComponent } from './components/detail/details/details.component';
import { TryComponent } from './components/detail/try/try.component';
import { FontService } from './services/font.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        // Remove when the backend is ready
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        FontsRoutingModule,
    ],
    declarations: [
        FontsComponent,
        FontListComponent,
        FontDetailComponent,
        ControlBarComponent,
        StylesComponent,
        InspirationComponent,
        DetailsComponent,
        TryComponent
    ],
    providers: [
        FontService
    ]
})
export class FontsModule {

}