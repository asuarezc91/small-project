import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from '../shared/shared.module';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [MapComponent,HeaderComponent,MenuSidebarComponent],
  imports: [
    SharedModule,
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [MapComponent,HeaderComponent,MenuSidebarComponent]
})
export class CoreModule { }



