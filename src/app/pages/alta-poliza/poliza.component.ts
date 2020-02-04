import { Component, QueryList, ViewChildren, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Poliza, PolizaService, Cliente } from 'src/app/pages/alta-poliza/poliza.service';
import { DxDataGridComponent, DxFormComponent, DxFormModule, DxPopupComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import ArrayStore from 'devextreme/data/array_store';
import { DataSourceService } from 'src/app/shared/components/data-sources/data-sources.service';


@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.scss'],
  providers: [PolizaService],
  preserveWhitespaces: true
})
export class PolizaComponent implements OnInit {
  // @ts-ignore
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @ViewChildren(DxFormComponent) form: QueryList<DxFormComponent>;
  // @ts-ignore
  @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent;
  @ViewChildren(DxPopupComponent) verHijos: DxPopupComponent;


  dataSourceService: DataSourceService;
  polizaService: PolizaService;
  //
  provinciaDataSource: any = {};
  localidadDataSource: any = {};
  marcaDataSource: any = {};
  modeloDataSource: any = {};
  tipoDocDataSource: any = {};
  tipoCoberturaDataSource: any = {};
  formaPagoDataSource: any = {};
  hijosDataSource: any = {};
  sexoDataSource: any = {};
  estadoCivilDataSource: any = {};
  condicionIvaDataSource: any = {};
  medidasSeguridadDataSource: any = {};
  clientesDataSource: any = {};
  cuotasDataSource: any = {};
  //
  provincia: any;
  localidad: any;
  marca: any;
  modelo: any;
  tipoDocumento: any;
  cliente: Cliente;
  estadoCivil: any;
  hijo: any;
  sexo: any;
  poliza: Poliza;
  tipoCobertura: any;
  formaPago: any;
  buttonOptions: any;
  //
  agregarHijosVisible: boolean;
  verHijosVisible: boolean;
  buscarClienteVisible: boolean;
  verCuotasVisible: boolean;
  //
  popupHijosHeight: number;
  popupHijosWidth: number;
  etiquetaPopup: string;
  tabPanelOptions: any;
  checkBoxValue: any;
  gridHeight: any;
  tabSelectionChanged: any;
  baseUrl: any;

  constructor(polizaService: PolizaService, dataSourceService: DataSourceService) {

    this.polizaService = polizaService;
    this.dataSourceService = dataSourceService;

    this.provinciaDataSource = [];
    this.localidadDataSource = [];
    this.hijosDataSource = [];
    this.marcaDataSource = [];
    this.modeloDataSource = [];
    this.tipoDocDataSource = []; //
    this.tipoCoberturaDataSource = [];
    this.medidasSeguridadDataSource = []; //
    this.formaPagoDataSource = []; //
    this.sexoDataSource = []; //
    this.estadoCivilDataSource = []; //
    this.condicionIvaDataSource = []; //
    this.clientesDataSource = [];
    this.cuotasDataSource = [];
    this.tabPanelOptions = { selectedIndex: 0, activeStateEnabled: true, onSelectionChanged: this.tabSelectionChanged };
    this.baseUrl = environment.baseUrl;

    this.buscarClienteVisible = false;

    this.altaCliente = this.altaCliente.bind(this);
    this.buscarCliente = this.buscarCliente.bind(this);
    this.cerrarBuscarCliente = this.cerrarBuscarCliente.bind(this);
    this.medidasSeguridadChanged = this.medidasSeguridadChanged.bind(this);
    this.verHijo = this.verHijo.bind(this);
    this.verCuotas = this.verCuotas.bind(this);



  }

  ngOnInit() {

    this.popupHijosHeight = window.innerHeight - 50;
    this.popupHijosWidth = window.innerWidth - 50;
    this.verHijosVisible = false;
    this.verCuotasVisible = false;
    this.agregarHijosVisible = false;
    this.buscarClienteVisible = false;
    this.poliza = this.polizaService.getPoliza();
    this.cliente = this.polizaService.getCliente();
    this.hijo = this.polizaService.getHijo();

    this.dataSourceService.getTipoDni().then((response) => {
      this.tipoDocDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => { 
      console.log(error);
    });

    this.dataSourceService.getFormasPago().then((response) => {
      this.formaPagoDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getSexos().then((response) => {
      this.sexoDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getEstadoCivil().then((response) => {
      this.estadoCivilDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getCondicionesIva().then((response) => {
      this.condicionIvaDataSource = new ArrayStore({
        key: 'id',
        data: response.items
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getLocalidades().then((response) => {
      this.localidadDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getProvincias().then((response) => {
      this.provinciaDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.medidasSeguridadDataSource = new ArrayStore({
      key: 'id',
      data: this.dataSourceService.getMedidasSeguridad()
    });

  }

  altaCliente(){
    let result = confirm("<i>Desea dar de alta un nuevo cliente?</i>");
  }

  buscarCliente() {
    //clientesDataSource
    console.log("click buscar cliente");
    this.buscarClienteVisible = true;
    this.clientesDataSource = new ArrayStore({
      key: "id",
      data: []
    });
    this.buscarClienteVisible = true;
    /*this.polizaService.getClienteById(15).then((response) => {
      this.poliza.cliente = response;
    }).catch(error => {
      console.log(error);
    });*/
  }
  cerrarBuscarCliente() {
    this.buscarClienteVisible = false;
  }

  seleccionaCliente($event) {

  }

  cerrarVerHijos() {
    this.verHijosVisible = false;
  }

  cerrarAgregarHijos() {
    this.agregarHijosVisible = false;
  }

  agregarHijo() {
    this.agregarHijosVisible = true;
  }

  verHijo() {
    console.log("boton apretado");
    this.verHijosVisible = true;
  }

  medidasSeguridadChanged($event) {
    console.log($event);
    if ($event.itemData.selected) {
      //this.usuario.delegaciones.push($event.itemData);
    }
    else {
      //this.usuario.delegaciones.splice($event.itemData.itemIndex, 1);
    }

  }

  guardarPoliza() {
    /*if(this.form.instance.validate().isValid){
      if(this.poliza.id){ //editar
        this.liquidacionesStore.getStore().update(this.liquidacion.id, this.liquidacion).then((data: any)=> {
          this.liquidacion = data;
          this.dataGrid.instance.refresh();
          notify({
            message: "La poliza fue editada correctamente.",
            position: {
              my:"center top",
              at:"center top"
            }
          }, "success". 30000);
          this.cerrarModal();
        }).catch(error => {
          console.log(error);
        });
      }
    } else { //alta
        this.liquidacionesStore.getStore().insert(this.liquidacion).then((data: any) => {
          this.liquidacion = data;
          this.dataGrid.instance.refresh();
          notify({
            message: "La poliza fue creada correctamente.",
            position: {
              my: "center top",
              at: "center top"
            }
          }, "success", 3000);
        })catch(error => {
          console.log(error);
        });
    }*/
  }

  verCuotas(){
    this.verCuotasVisible = true;
    this.cuotasDataSource = new ArrayStore({
      key: "id",
      data:[] 
    })
  }



}
