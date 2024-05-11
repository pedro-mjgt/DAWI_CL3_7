import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.scss'
})
export class Ejercicio3Component {
  numero = {
    valor: 0,
    bonificacion: 0
  };

  mostrarResultado = false;

  calcularBonificacion() {
    if (this.numero.valor >= 0 && this.numero.valor <= 1000) {
      this.numero.bonificacion = this.numero.valor * 0.10; // Bonificación del 10%
    } else if (this.numero.valor > 1000 && this.numero.valor <= 2000) {
      this.numero.bonificacion = this.numero.valor * 0.20; // Bonificación del 20%
    } else if (this.numero.valor > 2000 && this.numero.valor <= 3000) {
      this.numero.bonificacion = this.numero.valor * 0.30; // Bonificación del 30%
    } else {
      this.numero.bonificacion = 0; // No hay bonificación para montos mayores a 3000
    }
    this.mostrarResultado = true;
  }

  formatearBonificacion(): string {
    return this.numero.bonificacion.toFixed(2);
  }

}
