import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.scss'
})
export class Ejercicio4Component {

  numero = {
    valor: 0,
    factorial: 1,
  }

  mostrarResultado = false;

  calcularFactorial() {
    const numero = this.numero.valor;

    if (numero === 0 || numero === 1) {
      this.numero.factorial = 1;
    } else {
      this.numero.factorial = this.factorial(numero);
    }

    this.mostrarResultado = true;
  }

  factorial (n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

}
