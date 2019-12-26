import {Injectable} from '@angular/core';
import {HttpClient, HttpXhrBackend} from 'node_modules/@angular/common/http';
import {environment} from 'src/environments/environment';

const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

class SiniestrosFC {
}

class FactoresCaracteristicas {
}

class AjustesPorKm {
}

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
  id: number;
  dni: number;
  nombre: string;
  apellido: string;
  domicilio: string;
  tipoDoc: TipoDni;
}

export class EstadoCivil {
  id: number;
  descripcion: string;
}

export class CondicionIva {
  id: number;
  descripcion: string;
}

export class TipoDni {
  id: number;
  descripcion: string;
}

export class EstadoCliente {
  id: number;
  descripcion: string;
}

export class EstadoPoliza {
  id: number;
  descripcion: string;
}

export class FormaPago {
  id: number;
  descripcion: string;
}

export class Sexo {
  id: number;
  descripcion: string;
}

export class Provincia {
  id: number;
  nombreProvincia: string;
}

export class Localidad {
  id: number;
  nombre: string;
  codigoPostal: number;
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

export class MedidasSeguridad {
  id: number;
  descripcion: string;
  factor: number;
}

export class Marca {
  id: number;
  nombre: string;
}

export class Modelo {
  id: number;
  nombre: string;
  roboPorModelo: number;
  marca: Marca;
}

export class Hijo {
  id: number;
  dni: number;
  fechaNac: Date;
  estadoCivil: EstadoCivil;
  sexo: Sexo;
}

export class TipoCobertura {
  id: number;
  nombre: string;
  descripcion: string;
  valor: number;
}

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
      nombre: '',
      apellido: '',
      domicilio: '',
      tipoDoc: null
    };
    return cliente;
  }

  getHijo() {
    let hijo: Hijo = {
      id: null,
      dni: null,
      fechaNac: null,
      estadoCivil: null,
      sexo: null
    };
    return hijo;
  }

  getEstadoCivil() {
    return this.http.get(environment.apiUrl + 'enumestadocivils')
      .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getClienteById(cliente) {
    console.log(cliente);
    return this.http.get(environment.apiUrl + 'clientes/' + cliente)
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getMedidasSeguridad(){
    return this.http.get(environment.apiUrl + 'medidasseguridads')
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }
}
