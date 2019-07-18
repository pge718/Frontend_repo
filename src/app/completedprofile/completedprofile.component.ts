import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completedprofile',
  templateUrl: './completedprofile.component.html',
  styleUrls: ['./completedprofile.component.css']
})
export class CompletedprofileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onNext() {
    this.route.navigate[('/show-profile')];
  }

}
