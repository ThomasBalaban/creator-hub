import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  signedIn: Boolean = false;

  login() {
    this.signedIn = true;
  }

  signOut() {
    this.signedIn = false;
  }
}
