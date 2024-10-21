import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

export type Person = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://randomuser.me/api/?results=50';
  private peopleSubject = new ReplaySubject(1); // שומר את הערך האחרון

  constructor(private http: HttpClient) { }

  fetchPeople() {
    this.http.get<{ results: Person[] }>(this.apiUrl).subscribe(
      (response) => {
        this.peopleSubject.next(response.results); // שמירת התוצאה ב-Subject
      },
      (error) => {
        console.error('Error fetching people data', error);
      }
    );
  }

  getPeopleSubject() {
    return this.peopleSubject.asObservable(); // חשיפה כ-Observable
  }
}