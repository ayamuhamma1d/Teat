import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-trending-subject',
  templateUrl: './trending-subject.component.html',
  styleUrls: ['./trending-subject.component.css']
})
export class TrendingSubjectComponent {
  trendingBooks: Books[] = [];
  searchTerm: string = ''
  dataSource: any;
  constructor( private _bookService: BookService){

    }
  ngOnInit(): void {

  }
  // @Output() ClickEventEmmit: EventEmitter<any> = new EventEmitter();

 getData(subject:string) {
  console.log(subject);

    this._bookService.getTrending(subject).subscribe({
      next: (data) => {
        console.log(data);
        console.log(data.works)
        this.trendingBooks = data.works;
      }
    })
}
}

