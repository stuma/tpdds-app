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

export class Localidad {
  id: Number;
  nombre_localidad: String;
  codigo_postal: Number;
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

  getCondicionesIva() {
    return this.http.get(environment.apiUrl + 'enumcondivas')
      .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getFormasPago() {
    return this.http.get(environment.apiUrl + 'enumformapagos')
      .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getMedidasSeguridad() {
    return this.http.get(environment.apiUrl + 'medidasseguridads')
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getSexos() {
    return this.http.get(environment.apiUrl + 'enumsexos')
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getTipoDni() {
    return this.http.get(environment.apiUrl + 'enumtipodnis')
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
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

  getLocalidades() {
    return this.http.get(environment.apiUrl + 'localidades')
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }

  getProvincias() {
    return this.http.get(environment.apiUrl + 'provincias')
      .toPromise()
      .then((datos: any) => {
        return datos;
      })
      .catch(error => {
        throw new Error('Data Loading Error');
      });
  }
}
