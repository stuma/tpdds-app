import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: Object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: null,
      LastName: null,
      Prefix: null,
      Position: null,
      Picture: null,
      BirthDate: null,
      HireDate: null,
      /* tslint:disable-next-line:max-line-length */
      Notes: null,
      Address: null
    };
  }
}
