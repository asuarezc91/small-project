import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {
  mensaje : boolean;
  //Nos permite enviar mensajes a múltiples observadores
  private enviarMensajeSubject = new Subject<boolean>();
  //Variable auxiliar que nos permite simplificar para que nuestros componentes puedan subscribirse al subject, nuestros componentes gracias
  //a esta variable se van a subscribir a la variable enviarMensajeSubject
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor() { }

//logica necesaria para enviar un mensaje a todos los componentes que se hayan subscrito al subject 
  enviarMensaje(mensaje: boolean){
    console.log("entra"); 
    debugger; 
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje); 
  }
}


 
 