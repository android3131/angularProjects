import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter();

  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }
}