import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from 'src/app/shared/services/sidebar-menu/sidebar-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceSidebar : SidebarMenuService ) { }

  ngOnInit(): void {
    this.serviceSidebar.enviarMensajeObservable.subscribe(mensaje => {
      console.log("adios",mensaje);
    }); 
  }

}
