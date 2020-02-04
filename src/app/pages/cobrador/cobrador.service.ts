import {Injectable} from '@angular/core';
import {HttpClient, HttpXhrBackend} from 'node_modules/@angular/common/http';
import {environment} from 'src/environments/environment';
import { EstadoCivil, Sexo, Modelo, MedidasSeguridad, Localidad, TipoDni, CondicionIva, FormaPago, EstadoPoliza, TipoCobertura } from 'src/app/shared/components/data-sources/data-sources.service';

const http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

export class Cuota {
  id: number;
  numCuota: number;
  fechaVencimiento: Date;
  monto: number;
  recargos: number;
  bonificacionPagoAdelantado: number;
}


@Injectable({
  providedIn: 'root',
})
export class CobradorService {

  constructor(private http: HttpClient) {
  }

}
