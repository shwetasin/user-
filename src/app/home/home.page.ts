import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service'
import { Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quotesList: any = [];
  isModalOpen = false;

  constructor(
    private service: ServiceNameService,
    private router: Router,
    private storage: StorageService,
    private apiService: ApiService,
    private nav: NavController,
  ) { }

  ionViewWillEnter() {
    this.Viewall();
  }

    routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/single/' + data.id]);

  }

  Viewall() {

    this.apiService.getData('https://dummyjson.com/quotes').subscribe({
      next: (res: any) => {
        console.log("Response:", res);
        this.quotesList = res.quotes;
        console.log("QuotesList", this.quotesList);
      },
      error: (err) => {
        console.log(err.error);
      }
    });

    

  }


  Logout() {

    this.storage.removeFromStorage("userlogin");
    this.service.presentAlert("remove successfully.");
    this.router.navigate(['/login']);


  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
