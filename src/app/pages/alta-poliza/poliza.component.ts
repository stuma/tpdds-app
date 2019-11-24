import {Component} from '@angular/core';
import {Company, Service} from 'src/app/pages/alta-poliza/poliza.service';
import { DxFormModule } from 'devextreme-angular';
import { DxTabsModule} from 'devextreme-angular';


export class Poliza {
  id: number;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.scss'],
  providers: [Service],
  preserveWhitespaces: true
})
export class PolizaComponent {
  companies: Company[];
  itemCount: number;
  poliza: Poliza;
  companyData: any;
  tabPanelOptions: any;
  provinciaDataSource: any;
  provincia: any;
  localidadDataSource: any;
  localidad: any;
  marcaDataSource: any;
  marca: any;
  modeloDataSource: any;
  modelo: any;
  tipoDocDataSource: any;
  tipoDocumento: any;
  checkBoxValue: any;
  indeterminateValue: any;
  tipoCoberturaDataSource: any;
  tipoCobertura: any;
  formaPagoDataSource: any;
  formaPago: any;

  constructor(service: Service) {
    this.companies = service.getCompanies();
    this.itemCount = this.companies.length;
    this.poliza = {
      id: 1,
      nombre: 'Sebastián',
      apellido: 'Tuma'
    };
  }
}
