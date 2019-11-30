import {Injectable} from '@angular/core';
import {Cliente} from '../../shared/components/Cliente/cliente.service';
import {Localidad} from '../../shared/components/Localidad/localidad.service';

export class Poliza {
  nroPoliza: any;
  kmAnio: any;
  importeTotal: any;
  importeDescuento: any;
  premio: any;
  sumaAsegurada: any;
  formaPago: any;
  montoTotalAbonar: any;
  siniestros: any;
  cliente: Cliente;
  localidad: Localidad;
  tipoCobertura: any;
  cuotas: any;
  hijos: any;
  vehiculo: Vehiculo;
}


@Injectable()
export class PolizaService {

}
