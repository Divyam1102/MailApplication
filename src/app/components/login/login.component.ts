import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {EmailApiService} from '../../service/email-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb : FormBuilder, private es : EmailApiService) { this.createForm(); }
  createForm(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  verifyLogin(){
    var email = this.loginForm.value.email;
    var password = this.loginForm.value.password;
    this.es.verifyLogin(email, password);
  }

  
}
