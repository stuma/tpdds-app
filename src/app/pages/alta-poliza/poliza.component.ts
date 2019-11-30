import {Component} from '@angular/core';
import {Poliza, PolizaService} from 'src/app/pages/alta-poliza/poliza.service';
import { DxFormModule } from 'devextreme-angular';
import { DxTabsModule} from 'devextreme-angular';


@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.scss'],
  providers: [PolizaService],
  preserveWhitespaces: true
})
export class PolizaComponent {

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

  constructor() {
  }
}
