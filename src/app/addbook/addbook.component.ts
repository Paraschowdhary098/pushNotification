import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import {Book} from '../Models/Book';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  constructor(private bookService:BookServiceService) { }

  bookForm = new FormGroup({
    'author': new FormControl('',{validators:[Validators.required,Validators.pattern(/^[a-zA-Z]{1,}$/)]}),
    'book': new FormControl('',{validators:[Validators.required,Validators.pattern(/^[a-zA-Z]{6,}$/)]})
  })

  ngOnInit(): void {
  }

  submitedForm(){
    console.log(this.bookForm.value);
    let book = {
      author:this.bookForm.value.author,
      book:this.bookForm.value.book
    }
    console.log(book);
    this.bookService.addBooks(book);

  }

}
