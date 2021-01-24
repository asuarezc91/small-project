import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalProductComponent } from './components/local-product/local-product.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarMenuService } from 'src/app/shared/services/sidebar-menu/sidebar-menu.service';
import { MenuSidebarComponent } from 'src/app/core/menu-sidebar/menu-sidebar.component';


// import { VisualsModule } from 'src/app/shared/visuals/visuals.module';

//Because is the "local-product" page  ----> "RouterModule.forChild(["   in imports 

@NgModule({
  // providers: [SidebarMenuService],
  declarations: [LocalProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LocalProductComponent
      }
    ]),
    SharedModule,
    // VisualsModule
  ],
  exports: [
    
  ]
})

export class LocalProductModule { }