import { BookService } from './../book.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { Component, Input } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Books } from '../books';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private _httpClient: HttpClient,  private _bookService:BookService) {
    this.bookSearch = new FormControl('');

  }
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry_potter' },
    { name: 'Crypto' },
  ];
  bookSearch: FormControl;
  searchText = ''
  dataSource: any;
  trendingBooks: Books[] = [];
  searchTerm: string = ''

  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),
      ).
      subscribe((value: string) => {
      });
  }
  @Input()


  getData(subject: string) {
    console.log(subject.toLowerCase());

    this._bookService.getTrending(subject.toLowerCase()).subscribe({
      next: (data) => {
        console.log(data);
        console.log(data.works)
        this.trendingBooks = data.works;
      }
    })
  }
}


