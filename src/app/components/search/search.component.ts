import { Component, OnInit } from '@angular/core';
import inboxMail from '../../models/Inbox';
import { EmailApiService } from '../../service/email-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inboxmessage: inboxMail[]
  constructor(private es: EmailApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.params.email;
    this.es.inbox(param).subscribe((data:inboxMail[])=>{
      console.log(data)
      this.inboxmessage = data;
    });
  }

}
