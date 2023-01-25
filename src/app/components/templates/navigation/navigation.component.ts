import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  signedIn: Boolean = false;

  login() {
    this.signedIn = true;
  }

  signOut() {
    this.signedIn = false;
  }
}
