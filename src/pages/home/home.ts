import { Component } from '@angular/core';
import { NavController,IonicPage, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private currentUser: any;
  rootPage:any = 'UserPage';

  constructor(public navCtrl: NavController, public auth: AuthService, public navParams: NavParams) {
      this.auth = auth;
      //this.loggedUser = this.auth.getUserInfo();
    this.currentUser = this.navParams.data.email;
  }
  public addUser()
  {
    this.navCtrl.push('UserPage');
  }

  public logout() {
    this.auth.logout().subscribe(allowed => {
        if (allowed) {
          this.navCtrl.setRoot('LoginPage');
        }
      });
  }
}
