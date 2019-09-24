import { Component, OnInit } from '@angular/core';
import inboxMail from '../../models/Inbox';
import { EmailApiService } from '../../service/email-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxmessage: inboxMail[]
  constructor(private es: EmailApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.params.email;
    this.es.inbox(param).subscribe((data:inboxMail[])=>{
      console.log(data)
      this.inboxmessage = data;
    });
  }

  deleteMessage(id){
    this.es.deleteEmail(id).subscribe(res=>{console.log("Message Deleted")});
  }

}
