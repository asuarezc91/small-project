import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from 'src/app/shared/services/sidebar-menu/sidebar-menu.service';

@Component({
  selector: 'app-local-product',
  templateUrl: './local-product.component.html',
  styleUrls: ['./local-product.component.css']
})
export class LocalProductComponent implements OnInit {

  mensaje: boolean = false; 

  constructor(private serviceSidebar : SidebarMenuService ) { }

  ngOnInit(): void {
    this.serviceSidebar.enviarMensajeObservable.subscribe(mensaje => {
      console.log("recibe local",mensaje);
    }); 
  }

  cambioTexto (){
    debugger; 
    this.mensaje = true; 
    this.serviceSidebar.enviarMensaje(this.mensaje); 
  }


 


}
