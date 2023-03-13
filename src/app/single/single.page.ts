import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ServiceNameService } from '../service-name.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  quotesList:any = [];

  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private service: ServiceNameService,
    private loadingCtrl: LoadingController
  ) { }

  routeclick(id: any) {
    console.log(id)
    this.router.navigate(['/single/' + id]);

  }

  ngOnInit() {
    this.singlequotes();
  }

  singlequotes(){

    let id = this.actRoute.snapshot.paramMap.get('id');
    this.service.showLoading('Please wait...');
    console.log(id, "route data is here ");
    this.apiService.getData('https://dummyjson.com/quotes/' + id).subscribe({
      next: (res: any) => {
        if(res != null){
          console.log("Response:", res);
          this.service.dismissLoader();
          this.quotesList = res;
          console.log("QuotesList", this.quotesList);
        }
        
      },
      error: (err) => {
        this.service.dismissLoader();
        console.log(err.error);
        
      }
    });
    
  }

  

}
