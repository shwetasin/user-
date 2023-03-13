import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';
import { ApiService } from 'src/app/api.service';
import { StorageService } from 'src/app/services/storage.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage {

  createForm: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private router: Router,
    private service: ServiceNameService,
    private apiService: ApiService,
    private storage: StorageService
  ) {

    this.createForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.required])),
      age: new FormControl('', Validators.compose([Validators.required])),



    });
  }


  onSubmit(value: any) {

//     
  }










}