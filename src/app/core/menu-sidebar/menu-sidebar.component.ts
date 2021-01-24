import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from 'src/app/shared/services/sidebar-menu/sidebar-menu.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
  mensaje: boolean = false;

  constructor(private serviceSidebar : SidebarMenuService ) { }

  ngOnInit(): void {
    this.serviceSidebar.enviarMensajeObservable.subscribe(mensaje => {
      this.mensaje = mensaje;
      console.log("eeeeeeeeee",this.mensaje);
    }); 
  }


  cambioTexto (){
    debugger; 
    this.mensaje = true; 
    this.serviceSidebar.enviarMensaje(this.mensaje); 
  }


}
