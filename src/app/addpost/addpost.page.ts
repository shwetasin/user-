import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ServiceNameService } from '../service-name.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage {
  postForm: FormGroup;

  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private service: ServiceNameService,
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
  ) { 

    this.postForm = new FormGroup({
      title: new FormControl('', Validators.compose([Validators.required])),
      // userId: new FormControl('', Validators.compose([Validators.required]))
    });
    console.log(this.postForm);
    
  }

  routeclick(id: any) {
    console.log(id)
    this.router.navigate(['/single/' + id]);

  }

 

  Onaddpost(){
    let userId = this.actRoute.snapshot.paramMap.get('userId');
    console.log("userId:", userId)
    let body:any={
      title:'I am in love with someone',
      userId:userId
    }
    this.apiService.sendData('https://dummyjson.com/posts/add',userId).subscribe({
      next: (res: any) => {
        if (res && res != null) {
          console.log("Response :", res)    
        };
      },
      error: (err) => {
        console.log(err.error);     
        // this.router.navigate(['/home/']);
      }
    });
  }

}
