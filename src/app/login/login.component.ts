import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  pwd;
  data;
  constructor(private service: ApiConnectionService, private route : Router) { }

  ngOnInit() {
  }
  validemail()
  {
    var regex="[A-Za-z0-9._]*[@][a-zA-Z0-9.]*[.][a-zA-Z.]*";
    if(this.email.match(regex))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  OnLogin()
  {
    if((this.validemail())&&(this.pwd.length>=8))
    {
      this.data = {
        email: this.email,
        password: this.pwd
      }
      this.service.onLogin(this.data).subscribe(res => {
        if(res == true){
          window.localStorage.setItem('username', JSON.stringify(this.data.email));
          this.route.navigate(['/profile']);
        }
      });

    }
    else
    {
      alert("invalid credentials");
    }
  }

}
