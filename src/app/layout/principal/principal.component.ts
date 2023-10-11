import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  title = 'Foodpet';
  name: string = '';
  valor: string;

  capturarValor() {
    // Obtener el valor del input
    //let inputElement = document.getElementById("miCampo");
    //this.valor = inputElement.value;

    // Mostrar el valor capturado en un elemento <span>
    let valorCapturadoElement = document.getElementById("valorCapturado");
    console.log("valor de name = "+ this.name)
    valorCapturadoElement.textContent = this.name;
  }
}
