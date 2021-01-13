import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {Book} from '../Models/Book';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.scss']
})
export class ShowbookComponent implements OnInit {
  books:Book[];

  constructor(private bookService:BookServiceService){}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

}
