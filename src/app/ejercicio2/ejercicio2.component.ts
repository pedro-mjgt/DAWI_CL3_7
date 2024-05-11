import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.scss'
})
export class Ejercicio2Component {
  mes ={
    numeroMes: 0,
    nombreMes: ""
  };

  

  obtenerNombreMes() {
    const nombresMeses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Convertir numeroMes a Number
    const numeroMesNumber = Number(this.mes.numeroMes);

    if (numeroMesNumber >= 1 && numeroMesNumber <= 12) {
      this.mes.nombreMes = nombresMeses[numeroMesNumber - 1];
    } else {
      this.mes.nombreMes = 'Número de mes inválido';
    }
  }
}
