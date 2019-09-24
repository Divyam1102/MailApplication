import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {EmailApiService} from '../../service/email-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-composeemail',
  templateUrl: './composeemail.component.html',
  styleUrls: ['./composeemail.component.css']
})
export class ComposeemailComponent implements OnInit {
  composeForm: FormGroup;
  constructor(private fb : FormBuilder, private es : EmailApiService, private route:ActivatedRoute) { this.createForm();}
  
  createForm(){
    this.composeForm = this.fb.group({
      t_email: ['',[Validators.required,Validators.email]],
      f_email: ['',[Validators.required,Validators.email]],
      message: ['',[Validators.required]]
    });
  }

  ngOnInit() {
    const param = this.route.snapshot.params.email;
  }

  composeEmail(){
    var t_email = this.composeForm.value.t_email;
    var f_email = this.composeForm.value.f_email;
    var message = this.composeForm.value.message;
    this.es.composeEmail(t_email, f_email, message)
  }

}
