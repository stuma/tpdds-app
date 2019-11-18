

import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTabPanelModule, DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';

import { Company, Service } from 'src/app/pages/alta-poliza/poliza.service';


@Component({
    selector: 'app-poliza',
    templateUrl: 'src/app/pages/alta-poliza/poliza.component.html',
    styleUrls: ['src/app/pages/alta-poliza/poliza.component.scss'],
    providers: [Service],
    preserveWhitespaces: true
})
export class PolizaComponent {
    companies: Company[];
    itemCount: number;

    constructor(service: Service) {
        this.companies = service.getCompanies();
        this.itemCount = this.companies.length;
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxTabPanelModule,
        DxCheckBoxModule,
        DxTemplateModule
    ],
    declarations: [PolizaComponent],
    bootstrap: [PolizaComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
