import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FontsRoutingModule } from './fonts-routing.module';
import { ListComponent as FontListComponent } from './components/list/list.component';
import { ItemComponent as FontListItemComponent } from './components/list/item/item.component';
import { DetailComponent as FontDetailComponent } from './components/detail/detail.component';
import { FontsComponent } from './fonts.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { StylesComponent } from './components/detail/styles/styles.component';
import { InspirationComponent } from './components/detail/inspiration/inspiration.component';
import { DetailsComponent } from './components/detail/details/details.component';
import { TryComponent } from './components/detail/try/try.component';
import { FontService } from './services/font.service';
import { SliderComponent as WidgetSlider } from './components/control-bar/widgets/slider/slider.component';
import { MatSliderModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        // Remove when the backend is ready
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        MatSliderModule,
        FontsRoutingModule,
    ],
    declarations: [
        FontsComponent,
        FontListComponent,
        FontListItemComponent,
        FontDetailComponent,
        ControlBarComponent,
        StylesComponent,
        InspirationComponent,
        DetailsComponent,
        TryComponent,
        WidgetSlider
    ],
    providers: [
        FontService
    ]
})
export class FontsModule {

}
