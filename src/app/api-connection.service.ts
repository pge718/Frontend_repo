import { Injectable, ComponentFactoryResolver } from '@angular/core';
import {HttpClient , HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  

  constructor( private http:HttpClient, private httpc:HttpClientModule) { }

  onSignup(data)
  {
    console.log(data);
    const insert_user= this.http.post(`http://localhost:64994/api/auth/signup`,data);
    return insert_user;
  }

  onLogin(data)
  {
    const login_user = this.http.post(`http://localhost:64994/api/auth/login`, data);
    return login_user;
  }

  GetPersonalDetails()
  {
    let email = window.localStorage.getItem('username');
    const allData = this.http.get(`http://localhost:64994/api/PersonalDetails/${email}`);
    return allData;
  }

  onInsertPersonalDetails(data)
  {
    console.log(data);
    let email = window.localStorage.getItem('username');
    const post_details=this.http.post(`http://localhost:64994/api/PersonalDetails/profile/`, data);
    return post_details;
  }

  OnUpdatepersonalDetails(data)
  {
    const update_details=this.http.put(`http://localhost:64994/api/PersonalDetails`, data);
    return update_details;
  }

  OnDeletePersonalDetails(data)
  {
    const delete_obj= this.http.delete(``);
    return delete_obj;
    }

    GetEducationDetails()
  {
    let email = window.localStorage.getItem('username');
    const allData = this.http.get(`http://localhost:64994/api/Education/${email}`);
    return allData;
  }

  onInsertEducationalDetails(details)
  {
    let email = window.localStorage.getItem('username');
    const edu_details= this.http.post(`http://localhost:64994/api/education/education`, details);
    return edu_details;
  }

  onUpdateEducationalDetails(Edata)
  {
    const update_details=this.http.put(`http://localhost:64994/api/education`, Edata);
    return update_details;
  }
  onInsertKeySkills(skillset)
  {
    const skills= this.http.post(`http://localhost:64994/api/KeySkills`, skillset);
    return skills;
  }
  onUpdateKeySkills(skillset)
  {
    const update_keyskills=this.http.put(`http://localhost:64994/api/KeySkills`, skillset);
    return update_keyskills;
  }

  showProfile()
  {
    const result=this.http.get(`http://localhost:64994/api/showprofile/${JSON.parse(localStorage.getItem('username'))}`);
    return result;
  }

}
