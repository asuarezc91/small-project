import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualsModule } from './visuals/visual.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarMenuService } from './services/sidebar-menu/sidebar-menu.service';



@NgModule({
  declarations: [],
  providers: [SidebarMenuService],
  imports: [
    CommonModule,
    VisualsModule,
    NgbModule
  ],
  exports: [
    VisualsModule,
    NgbModule,
  ]
})
export class SharedModule { }