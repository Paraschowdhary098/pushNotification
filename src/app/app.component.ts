import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {BookServiceService} from './book-service.service';
import {Book} from './Models/Book';
import {take} from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularReview';
  books:Book[];
  publicKey = "BPGr1obqRzkwt7ocarayUZPMJLNfeT5yMdMlnnEL3QSLBdlo2hEr6Q8eQlAvSl3_2_lR1jiCI2yDE3DqcbAgvIk";

  emailPushForm = new FormGroup({
    'email': new FormControl('',{validators:[Validators.required,Validators.pattern(/^[a-zA-Z]{1,}$/)]})
  })

  constructor(private bookService:BookServiceService, private changeRef:ChangeDetectorRef,private swPush:SwPush){}

  ngOnInit(){
    let subscription = this.bookService.getComments().subscribe(comments=>{
      comments.pipe(take(10)).subscribe(comments=>console.log(comments))
    });

  }

  submitedForm(){
    let subEnd;
    if(!this.swPush.isEnabled){
      console.log("Notification not enabled");
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey:this.publicKey
    })
    .then((sub) => subEnd = sub)
    .catch((err)=> console.log(err));

    this.bookService.sendNotification(this.emailPushForm.value.email,subEnd);
  }


}
