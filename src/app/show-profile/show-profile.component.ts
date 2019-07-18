import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  constructor(private service:ApiConnectionService) { }
  firstname;
  data;
  fathername;
  mobilenumber;
  gender;
  nationality;
  country;
  state;
  city;
  lastname;
  gradDegree;
  postGradDegree;
  gradPercent;
  postGradPercent;
  othercertifications;
  keyskills;
  newdata;

  ngOnInit() {
    this.service.showProfile().subscribe(res => {
      console.log(res["reg"]);
      console.log(res["edu"]);
      console.log(res["skills"]);
      console.log(res["user"]);
      this.firstname = res["user"].fName;
      this.lastname=res["user"].lName;
      this. fathername=res["reg"].father_name;
      this. mobilenumber=res["reg"].contact;
      this. nationality=res["reg"].nationality;
      this. country=res["reg"].country;
      this. gender=res["reg"].gender;
      this. city=res["reg"].city;
      this.state=res["reg"].state;
      this.gradDegree=res["edu"].bachelor_course;
      this.postGradDegree=res["edu"].postGrad_course;
      this.gradPercent=res["edu"].ug_percentage;
      this.postGradPercent=res["edu"].pg_percentage;
      this.othercertifications=res["skills"].other_certifications;
      this.keyskills=res["skills"].skills;






    });

  }
}
