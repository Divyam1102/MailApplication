import { Component, OnInit } from '@angular/core';
import ComposeMail from '../../models/Compose';
import { EmailApiService } from '../../service/email-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  sentmail: ComposeMail[]
  constructor(private es : EmailApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    const email = this.route.snapshot.params.email
    this.es.sentEmail(email).subscribe((data:ComposeMail[])=>{
      console.log(data)
      this.sentmail = data;
    });
  }

}
