import { Injectable } from '@angular/core';
import {Book} from './Models/Book';
import {HttpClient} from '@angular/common/http';
import {tap,map} from 'rxjs/operators';
import {from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books:Book[]=[];
  installprompt;
  constructor(private http:HttpClient) {
    // window.addEventListener('beforeinstallprompt',(e)=>{
    //   this.installprompt = e;
    // })
  }
  addBooks(book){
    console.log('in service'+book.author);
    this.books.push(book)
  }

  getBooks(){
    return this.books;
  }

  getComments():any{
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(
      tap(data=>{
        console.log(data);
      }),
      map(data=>{
        let comments:any = data;
        return from(comments)
      }))
  }

  sendNotification(email,subEnd){
    let payload = {
      email:email,
      sub:subEnd
    }
    this.http.post("http://localhost:3000/notification",payload);
  }
}
