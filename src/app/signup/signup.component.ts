import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConnectionService } from '../api-connection.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email;
  firstname;
  lastname;
  pwd;
  repwd;
  data;

  constructor(private router: Router, private service: ApiConnectionService) { }

  ngOnInit() {
  }
  validemail() {
    var regex = "[A-Za-z0-9._]*[@][a-zA-Z0-9.]*[.][a-zA-Z.]*";
    if (this.email.match(regex)) {
      return true;
    }
    else {
      return false;
    }
  }
  validPwd() {
    if (this.pwd.match(this.repwd)) {
      return true;
    }
    else {
      return false;
    }
  }

  OnSignUp() {
    if ((this.validemail()) && (this.firstname.length >= 3) && (this.lastname.length >= 3) && (this.validPwd())) {
      this.data = {
        FName: this.firstname,
        LName: this.lastname,
        email: this.email,
        password: this.pwd
      };

      this.service.onSignup(this.data).subscribe(res => {
        if (!res) {
          console.log(res);
        }

        else {
          alert('Invalid values');
        }
      });
      this.router.navigate(['/']);

    }
    else {
      alert("Please enter valid credentials");
    }
  }
}
