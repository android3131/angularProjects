import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../people-service.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.fetchPeople(); // טוען את הנתונים    
    this.peopleService.getPeopleSubject().subscribe(data => {
      this.people = (data as Person[]);
    });
  }
}