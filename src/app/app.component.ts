import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: StorageService,
    private router: Router

  ) {

    this.storage.getFromStorage('userlogin').then((data: any) => {
      if (data! = null || data != undefined) {
        this.router.navigate(['/home'])

      } else {
        // this.router.navigate(['/login'])
        this.router.navigate(['/home'])

      }
    });
  }



}
