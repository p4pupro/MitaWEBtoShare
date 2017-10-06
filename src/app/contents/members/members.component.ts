import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';
import {AF} from '../../servicios/af';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  name: any;
  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private router: Router, public afService: AF) {
    this.messages = this.af.database.list('messages');
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = afService.displayName;
      }
    });

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('home');
  }

  getUser() {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
    return this.name;
  }

  isYou(email) {
    if (email === this.afService.email) {
      return true;
     } else {
      return false;
    }
  }
  isMe(email) {
    if (email === this.afService.email) {
      return false;
    } else {
      return true;
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { console.log('Scroll to bottom failed') }
  }

  // I forgot to add this but thanks for letting me know in the comments so I could update it!
  sendMessage() {
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }


  ngOnInit() {
  }
}
