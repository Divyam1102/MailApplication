import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { formatDate} from '@angular/common';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
@Injectable({
  providedIn: 'root'
})
export class EmailApiService {

  mydate = new Date()
  constructor(private http: HttpClient, private router: Router) { }
  //Login Verification
  verifyLogin(email, password){
    const object = {
      email: email,
      password: password
    }
    this.http.post('http://localhost:4000/loginEmail', object).subscribe(res=>{
      this.router.navigate(['/inbox',email])
    })
  }

  //Inbox

  inbox(email){
    const url = "http://localhost:4000/Inbox/"+email
    return this.http.get(url).pipe((map(res=>{
      console.log(res)
      return res;
    })))
  }


  //Compose Email
  composeEmail(t_email, f_email, message){
    var object = {
      t_email: t_email,
      f_email: f_email,
      message: message,
      date: this.mydate
    }
    this.http.post('http://localhost:4000/ComposeEmail', object).subscribe(res=>{
      this.router.navigate(['/inbox',f_email]);
    });
  }

  //Email Sent
  sentEmail(email){
    const url = "http://localhost:4000/sent/"+email
    return this.http.get(url).pipe((map(res=>{
      console.log(res)
      return res; 
    })))
  }
  //Email Deleted
  deleteEmail(id){
    const url = "http://localhost:4000/delete/"+id;
    return this.http.delete(url).pipe((map(res=>{
      console.log(res)
      return res; 
    })))

  }

  //Email Archived
  archiveMessage(id){
    console.log(id);
    const url = "http://localhost:4000/archive";

    return this.http.post("http://localhost:4000/archive", id).pipe(map(res=>{
      this.router.navigate(['/inbox',res])
    }))
  }

  //Search Email
  searchEmail(email){
    const url = "http://localhost:4000/search"+email;
    return this.http.get(url).pipe(map(res=>{
      return res;
    }))
  }

  routeEmail(email){
    this.router.navigate(['/search', email]);
  }
}
