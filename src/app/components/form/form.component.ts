import { Component, OnInit } from '@angular/core';
import { Personas } from '../../core/models/personas.model';
import { PersonasService } from '../../core/services/personas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //declarando varible vacia funto con su interfaz o dto 
  personas: Personas[] = [];

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonasService) { 
      this.buildForm();
    }

  ngOnInit() {
  }

  //declaracion de builform
  private buildForm() {
    this.form = this.formBuilder.group({
      Documento:['', [Validators.required]],
      Nombres: ['', [Validators.required]],
      Apellidos: ['', [Validators.required]],
      Telefono: ['', [Validators.required]],
      Correo: ['', [Validators.required]],
      Direccion: ['', [Validators.required]]
    });
  }

  //obtengo los datos del ngsubmit y los envio a la peticion creada en los servicios
  createPersona(event: Event){
    event.preventDefault();

    if (this.form.valid) {
      this.personaService.createPersonas(this.form.value).subscribe(data =>{
        console.log(data);
      });
    }

}

}
