
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ITerceros } from '../../Interfaces/i-terceros';
import { TercerosService } from '../../Services/terceros-servicios';

declare const Swal: any;
 
 
@Component({
  selector: 'app-terceros',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './terceros.html',
  styleUrl: './terceros.css'
})
export class Terceros {
  lista_terceros$!: ITerceros[];
 
  constructor(private tercerosServicio: TercerosService) {}
 
  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.tercerosServicio.getAll().subscribe((terceros) => {
      this.lista_terceros$ = terceros;
    });
  }
 
  eliminarCliente(id: number) {
    Swal.fire({
      title: 'Terceros',
      text: 'Esta seguro que desea eliminar este registro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#838688ff',
      confirmButtonText: 'Eliminar!!!!!!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.tercerosServicio.delete(id).subscribe((id) => {
          if (id > 0) {
            this.cargaTabla();
            Swal.fire(
              'Cliente Eliminado!',
              'Gracias por confiar en nuestros servicios!.',
              'success'
            );
          }
        });
      }
    });
  }
 
  variables_sesion(id: number) {
    sessionStorage.setItem('id_cliente', id.toString());
  }
  eliminarvariable() {
    sessionStorage.removeItem('id_cliente');
  }

}