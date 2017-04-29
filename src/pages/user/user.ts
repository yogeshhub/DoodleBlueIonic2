import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public contactsfound: Array<any>;
  public myInput: string = '';
  public shouldShowCancel: boolean = true;
  public sample: Array<any> = [{'displayName': 'yogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'zogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'xogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'fogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'vogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'sogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'gyogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"},
    {'displayName': 'lyogesh', 'phoneNumbers':["8489487710"],photos:"http://placeholders.org/50"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {}
  public showContacts()
  {
    this.contacts.find(['*']).then((contact) => {
      if( contact !== null && contact !== undefined){
        this.contactsfound = contact.sort((a,b) => {
          if( a !== null && a !== undefined && b !== null && b !== undefined){
            return a.displayName.localeCompare(b.displayName);
          }
        });
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad User');
  }

  public addUser()
  {
    this.navCtrl.push('AddUser');
  }

  public onInput(searchTerm)
  {
    this.contactsfound = this.contactsfound.filter((item) => {
      return item.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  public onCancel()
  {
    this.showContacts();
  }
}
