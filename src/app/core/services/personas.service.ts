//usar el modulo httpclient para consumir y enviar datos al servicio 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personas } from '../models/personas.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService { 


  constructor(private http: HttpClient) { }

  createPersonas(persona: Personas){
    return this.http.post('http://190.60.101.59:6003/api/Personas', persona);
  }

}