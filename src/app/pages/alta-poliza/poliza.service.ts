import {Injectable} from '@angular/core';
import {HttpClient, HttpXhrBackend} from 'node_modules/@angular/common/http';
import {environment} from 'src/environments/environment';
import { EstadoCivil, Sexo, Modelo, MedidasSeguridad, Localidad, TipoDni, CondicionIva, FormaPago, EstadoPoliza, TipoCobertura } from 'src/app/shared/components/data-sources/data-sources.service';

const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

export class Poliza {
  nroPoliza: number;
  sumaAsegurada: number;
  kmAnio: number;
  fechaInicioVigencia: Date;
  fechaFinVigencia: Date;
  premio: number;
  importePorDescuento: number;
  ultimoDiaPago: Date;
  montoTotalAAbonar: number;
  ajusteskm: AjustesPorKm;
  factores: FactoresCaracteristicas;
  cliente: Cliente;
  tipoCobertura: TipoCobertura;
  localidad: Localidad;
  estadoPoliza: EstadoPoliza;
  formapago: FormaPago;
  idPoliza: Poliza;
  siniestroFC: SiniestrosFC;
  vehiculo: Vehiculo;
  listaHijos: Hijo[];
  listaCuotas: Cuota[];
}

export class Cliente {
  id: Number;
  dni: Number;
  cuil_cuit: Number;
  fecha_nac: Date;
  apellido: String;
  nombre: String;
  email: String;
  profesion: string;
  anio_registro: Number;
  enum_tipo_dni: TipoDni;
  enum_cond_iva: CondicionIva;
  direccion: Direccion;
  enum_estado_civil: EstadoCivil;
  enum_sexo: Sexo;
}

export class Direccion {
  id: number;
  nombreCalle: string;
  numCalle: number;
  numDpto: string;
  localidad: Localidad;
}

export class Vehiculo {
  id: number;
  anioVehiculo: number;
  motor: string;
  chasis: string;
  patente: string;
  modelo: Modelo;
  medidasSeguridad: MedidasSeguridad[];
}

export class Hijo {
  id: number;
  dni: number;
  fechaNac: Date;
  estadoCivil: EstadoCivil;
  sexo: Sexo;
}

export class Cuota {
  id: number;
  numCuota: number;
  fechaVencimiento: Date;
  monto: number;
  recargos: number;
  bonificacionPagoAdelantado: number;
}

class SiniestrosFC {
}

class FactoresCaracteristicas {
}

class AjustesPorKm {
}



@Injectable({
  providedIn: 'root',
})
export class PolizaService {

  constructor(private http: HttpClient) {
  }

  getPoliza() {
    const poliza: Poliza = {
      nroPoliza: null,
      sumaAsegurada: null,
      kmAnio: null,
      fechaInicioVigencia: null,
      fechaFinVigencia: null,
      premio: null,
      importePorDescuento: null,
      ultimoDiaPago: null,
      montoTotalAAbonar: null,
      ajusteskm: null,
      factores: null,
      cliente: null,
      tipoCobertura: null,
      localidad: null,
      estadoPoliza: null,
      formapago: null,
      idPoliza: null,
      siniestroFC: null,
      vehiculo: null,
      listaHijos: [],
      listaCuotas: []
    };
    return poliza;
  }

  getCliente() {
    const cliente: Cliente = {
        id: null,
        dni: null,
        cuil_cuit: null,
        fecha_nac: null,
        apellido: '',
        nombre: '',
        email: '',
        profesion: '',
        anio_registro: null,
        enum_tipo_dni: null,
        enum_cond_iva: null,
        direccion: null,
        enum_estado_civil: null,
        enum_sexo: null
      }
    ;
    return cliente;
  }

  getHijo() {
    const hijo: Hijo = {
      id: null,
      dni: null,
      fechaNac: null,
      estadoCivil: null,
      sexo: null
    };
    return hijo;
  }

  getClienteById(cliente) {
    return this.http.get(environment.apiUrl + 'clientes/' + cliente)
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }


}
