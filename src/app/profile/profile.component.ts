import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryDataService } from '../country-data.service';
import { Router } from '@angular/router';
import { ApiConnectionService } from '../api-connection.service'
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  progress;
  @Output() public onUploadFinished = new EventEmitter();
  message;
  firstname;
  lastname;
  
  fathername;
  mobilenumber;
  gender;
  nationality;
  country;
  state;
  city;
  gradDegree;
  postGradDegree;
  gradPercent;
  postGradPercent;
  othercertifications;
  keyskills;
  // file;
  resume;
  personalerrormessage;
  educationerrormessage;
  certificateerrormessage;
  data;
  details;
  email;
  Edata;


  constructor(private country_data: CountryDataService, private router: Router, private service: ApiConnectionService, private http: HttpClient) { }

  ngOnInit() {
    this.email = JSON.parse(localStorage.getItem('username'));
    this.service.showProfile().subscribe(res => {
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
  onSubmit() {

    /*if (this.firstname === undefined || this.lastname === undefined || this.firstname.length < 3 || this.lastname.length < 3) {
      this.personalerrormessage = 'Invalid Name';
    } else if (this.DOB === undefined) {
      this.personalerrormessage = 'Invalid Date Of Birth';
    } else if (this.fathername === undefined || this.fathername.length < 3) {
      this.personalerrormessage = 'Invalid Father Name';
    } else if (this.mobilenumber === undefined || this.mobilenumber.length < 10) {
      this.personalerrormessage = 'Invalid Mobile Number';
    } else if (this.gender === undefined) {
      this.personalerrormessage = 'Please select Gender';
    } else if (this.nationality === undefined) {
      this.personalerrormessage = 'Please select Nationality';
    } else if (this.country === undefined) {
      this.personalerrormessage = 'Please select your Country';
    } else if (this.state === undefined || this.state.length < 3) {
      this.personalerrormessage = 'Enter Correct State';
    } else if (this.city === undefined || this.city.length < 3) {
      this.personalerrormessage = 'Enter Correct city Name';
    } else if (this.gradDegree === undefined) {
      this.educationerrormessage = 'Please select a Degree';
      this.personalerrormessage = '';
    } else if (this.gradPercent === undefined || this.gradPercent.length < 2) {
      this.educationerrormessage = 'Enter correct Percentage';
      this.personalerrormessage = '';
    } else if (this.postGradDegree === undefined) {
      this.educationerrormessage = 'Please select a Degree';
      this.personalerrormessage = '';
    } else if (this.postGradPercent === undefined || this.postGradPercent.length < 2) {
      this.educationerrormessage = 'Enter correct Percentage';
      this.personalerrormessage = '';
    } else if (this.keyskills === undefined || this.keyskills.length < 5) {
      this.certificateerrormessage = 'Invalid/Inadequate Key Skills';
      this.personalerrormessage = '';
      this.educationerrormessage = '';
    } else {
      this.certificateerrormessage = '';
      this.personalerrormessage = '';
      this.educationerrormessage = '';


      // Do Something Here
      alert('Profile Completed');


    }*/

    this.router.navigate(['/completed'])


  }

  onSubmitPersonalDetails() {
    if (this.firstname === undefined || this.lastname === undefined || this.firstname.length < 3 || this.lastname.length < 3) {
      this.personalerrormessage = 'Invalid Name';
    } else if (this.fathername === undefined || this.fathername.length < 3) {
      this.personalerrormessage = 'Invalid Father Name';
    } else if (this.mobilenumber === undefined || this.mobilenumber.length < 10) {
      this.personalerrormessage = 'Invalid Mobile Number';
    } else if (this.gender === undefined) {
      this.personalerrormessage = 'Please select Gender';
    } else if (this.nationality === undefined) {
      this.personalerrormessage = 'Please select Nationality';
    } else if (this.country === undefined) {
      this.personalerrormessage = 'Please select your Country';
    } else if (this.state === undefined || this.state.length < 3) {
      this.personalerrormessage = 'Enter Correct State';
    } else if (this.city === undefined || this.city.length < 3) {
      this.personalerrormessage = 'Enter Correct city Name';
    }
    else {
      this.data = {

        fname: this.firstname,
        lname: this.lastname,
        father_name: this.fathername,
        gender: this.gender,
        contact: this.mobilenumber,
        nationality: this.nationality,
        country: this.country,
        state: this.state,
        city: this.city,
        keyskills: this.keyskills,
        resume: this.resume,
        email: this.email
      };
  
      this.service.onInsertPersonalDetails(this.data).subscribe(res => {
        if (!res) {
         // window.localStorage.setItem('username', JSON.stringify(this.data.email));
          console.log(res);
        }
  
        else {
          console.log(res);
          alert('Invalid values');
        }
      });
      
      
      
      
      alert("personal details updated");

    }

  }

  OnUpdatePersonalDetails() {
    this.data = {

      fname: this.firstname,
      lname: this.lastname,
      father_name: this.fathername,
      gender: this.gender,
      contact: this.mobilenumber,
      nationality: this.nationality,
      country: this.country,
      state: this.state,
      city: this.city,
      keyskills: this.keyskills,
      resume: this.resume,
      email: this.email
    }
    this.service.OnUpdatepersonalDetails(this.data).subscribe(res => {
      if (!res) {
        console.log(res);
      }

      else {
        alert('Invalid values');
      }
    });
  }
  onSubmitEducationalDetails() {
    if (this.gradDegree === undefined) {
      this.educationerrormessage = 'Please select a Degree';
      this.personalerrormessage = '';
    } else if (this.gradPercent === undefined || this.gradPercent.length < 2) {
      this.educationerrormessage = 'Enter correct Percentage';
      this.personalerrormessage = '';
    } else if (this.postGradDegree === undefined) {
      this.educationerrormessage = 'Please select a Degree';
      this.personalerrormessage = '';
    } else if (this.postGradPercent === undefined || this.postGradPercent.length < 2) {
      this.educationerrormessage = 'Enter correct Percentage';
      this.personalerrormessage = '';
    }
    else {  


     
    alert(this.email);
    this.details =
      {
        Bachelor_course: this.gradDegree,
        Ug_percentage: this.gradPercent,
        PostGrad_course: this.postGradDegree,
        Pg_percentage: this.postGradPercent,
        email: this.email
      }
      console.log(this.details);
    this.service.onInsertEducationalDetails(this.details).subscribe(res => {
      if (!res) {
        console.log(res);
      }

      else {
        alert('Invalid values');
      }
    });
  }
  }

  OnUpdateEducation()
  {
    this.Edata={
      gradDegree:this.gradDegree,
      postGradDegree:this.postGradDegree,
      gradPercent:this.gradPercent,
      postGradPercent:this.postGradPercent,
      email:this.email

    }
    this.service.OnUpdatepersonalDetails(this.Edata).subscribe(res => {
      if (!res) {
        console.log(res);
      }

      else {
        alert('Invalid values');
      }
    });
  }

  OnUpdateKeySkills()
  {
    this.data={
      other_certifications:this.othercertifications,
      keyskills:this.keyskills,
      email:this.email
    }
    this.service.onUpdateKeySkills(this.data).subscribe(res=>{
      if(!res)
      {
        console.log(res);
      }

      else{
        alert('Invalid values');
      }
    });
  }

  onSubmitKeySkills() {
    if (this.keyskills === undefined || this.keyskills.length < 5) {
      this.certificateerrormessage = 'Invalid/Inadequate Key Skills';
      this.personalerrormessage = '';
      this.educationerrormessage = '';
    }
    else {
      this.details =
      {
        email: this.email,
        other_certifications: this.othercertifications,
        skills: this.keyskills
        
      }
      console.log(this.details);
      this.service.onInsertKeySkills(this.details).subscribe(res => {
        if (!res) {
          console.log(this.details);
        }
  
        else {
          alert('Invalid values');
        }
      });
    }
  }

  


  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
 
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log(formData.get('file'));
 
    this.http.post('http://localhost:64994/api/ResumeUpload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
}



