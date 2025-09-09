
import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup,  FormsModule,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TercerosService } from '../../../Services/terceros-servicios';

declare const Swal: any;

@Component({
  selector: 'app-crear',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
templateUrl: './crear.html',
  styleUrl: './crear.css',
})

export class Crear implements OnInit {

  terceroform: FormGroup = new FormGroup({});
  titulo_formulario = 'Registro de nuevo cliente';
  id: number = 0;
  Editar: boolean = false;

  constructor(
    private clienteServicio: TercerosService,
    private navegacion: Router,
    private parametros: ActivatedRoute
  ) {
    this.terceroform = new FormGroup({
      
      nombres: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      cedula_ruc: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),      

    });

    this.parametros.params.subscribe((parametros) => {
      if (parametros['id']) {
        //actualizar
        this.titulo_formulario = 'Actualizar datos de cliente';
        this.id = parametros['id'];
        this.Editar = true;
        this.clienteServicio.getById(this.id).subscribe((cliente) => {
          this.terceroform.patchValue(cliente);
        });
      } else {
        //nuevo cliente
        this.terceroform.reset();
      }
    });
  }

  ngOnInit() {}
  enviar() {
    if (this.terceroform.invalid) {
      console.log('Formulario invalido');
      return;
    }
    Swal.fire({
      title: 'Desea guardar la informacion del cliente?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
      icon: 'question',
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (this.Editar == true) {
          const cliente = this.terceroform.value;
          cliente.id = this.id;
          this.clienteServicio
          .update(cliente)
            .subscribe((cliente) => {
              if (cliente == null) {
                Swal.fire('Clientes', 'Error al guardar', 'error');
              }
              Swal.fire('Clientes', 'Se guardo con exito', 'success');
              this.terceroform.reset();
              this.navegacion.navigate(['']);
            });
        } else {
          const cliente = this.terceroform.value;
          
          console.log(cliente)

          this.clienteServicio
          .create(cliente)
            .subscribe((uncliente) => {
              Swal.fire('Clientes', 'Se guardo con exito', 'success');
              this.terceroform.reset();
              this.navegacion.navigate(['']);
            });
        }
      } else if (result.isDenied) {
        Swal.fire('Clientes', 'El usuario cancelo la operacion', 'success');
      }
    });
  }
}