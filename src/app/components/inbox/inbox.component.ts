import { Component, OnInit } from '@angular/core';
import inboxMail from '../../models/Inbox';
import { EmailApiService } from '../../service/email-api.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxmessage: inboxMail[]
  searchForm: FormGroup
  constructor(private fb : FormBuilder,private es: EmailApiService, private route: ActivatedRoute) { this.createForm() }

  ngOnInit() {
    const param = this.route.snapshot.params.email;
    this.es.inbox(param).subscribe((data:inboxMail[])=>{
      console.log(data)
      this.inboxmessage = data;
    });
  }

  createForm(){
    this.searchForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
    });
  }

  deleteMessage(id){
    this.es.deleteEmail(id).subscribe(res=>{console.log("Message Deleted")});
  }
  archiveMessage(id){
    this.es.archiveMessage(id).subscribe(res=>{console.log("Message Archived")})
  }

  searchEmail(){
    this.es.routeEmail(this.searchForm.value.email);
  }

  
}
