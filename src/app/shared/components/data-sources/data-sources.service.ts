import {Injectable} from '@angular/core';
import {HttpClient, HttpXhrBackend} from 'node_modules/@angular/common/http';
import {environment} from 'src/environments/environment';

const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

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

  export class TipoCobertura {
    id: number;
    nombre: string;
    descripcion: string;
    valor: number;
  }

  @Injectable({
    providedIn: 'root',
  })
  export class DataSourceService {
  
    constructor(private http: HttpClient) {
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