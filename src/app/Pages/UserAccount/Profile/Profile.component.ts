import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/Models/User';
import { SessionService } from 'src/app/shared/Services/Session.service';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = this.sessionService.getUserLoggedIn();
  constructor(
    private sessionService: SessionService) { }

  ngOnInit() {
  }

}
