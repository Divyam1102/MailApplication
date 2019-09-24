import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { formatDate} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class EmailApiService {

  mydate = new Date()
  constructor(private http: HttpClient, private router: Router) { }

  verifyLogin(email, password){
    const object = {
      email: email,
      password: password
    }
    this.http.post('http://localhost:4000/loginEmail', object).subscribe(res=>{
      this.router.navigate(['/inbox',email])
    })
  }

  inbox(email){
    const url = "http://localhost:4000/Inbox/"+email
    return this.http.get(url).pipe((map(res=>{
      console.log(res)
      return res;
    })))
  }

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

  sentEmail(email){
    const url = "http://localhost:4000/sent/"+email
    return this.http.get(url).pipe((map(res=>{
      console.log(res)
      return res; 
    })))
  }

  deleteEmail(id){
    const url = "http://localhost:4000/delete"
    return this.http.delete(url).pipe((map(res=>{
      console.log(res)
      return res; 
    })))
  }
}
