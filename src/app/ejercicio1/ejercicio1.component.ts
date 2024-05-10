import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.scss'
})
export class Ejercicio1Component {

  computadora = {
    numero: 0,
    descuento: 0,
    total:0
  }

  mostrarResultado = false;

  calcularVenta() {
    const precio: number = 11000.00;
    let descuento: number;
    
    if (this.computadora.numero < 5) {
      descuento = 0.1;
    } else if (this.computadora.numero < 10) {
      descuento = 0.2;
    } else {
      descuento = 0.4;
    }

    this.computadora.descuento = precio * this.computadora.numero * descuento;
    this.computadora.total = this.computadora.numero * precio - this.computadora.descuento;
    this.mostrarResultado = true;
  }

}
