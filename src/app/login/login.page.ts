import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';
import { ApiService } from 'src/app/api.service';
import { StorageService } from 'src/app/services/storage.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private router: Router,
    private service: ServiceNameService,
    private apiService: ApiService,
    private storage: StorageService

  ) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),



    });

  }

  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/addpost/' + data.userId]);

  }
  onSubmit(value: any) {
    this.service.showLoading("Please Wait ...");
    this.apiService.sendData('https://dummyjson.com/auth/login', value).subscribe({
    next: (res: any) => {
      this.service.dismissLoader();
        if (res && res != null) {
          console.log("Response:", res);
          this.storage.setIntoStorage('userlogin', res).then((value: any) => {
            this.loginForm.reset();
            this.service.presentAlert("Login successfully.");
            this.router.navigate(['/home']);
          }
          )
        };
      },
      error: (err) => {
        console.log(err.error);
        this.service.dismissLoader();
        this.service.presentAlert("Invaild Data.");
      }
    });


  }

  Signup(){
    
  }



}
