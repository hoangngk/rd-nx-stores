import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'rd-nx-stores-book-collection',
  templateUrl: './book-collection.component.html',
  // styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book | undefined> | null = [];
  @Output() remove = new EventEmitter<string>();
}
