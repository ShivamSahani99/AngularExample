import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Program for Get,Post and Delete in local storage.';
  constructor(public localStorageService: LocalStorageService) { }
  firstname: string = '';
  lastname: string = '';
  age: number = 1;

  queryKey: string = '';
  removeKey: string = '';

  queryResult: any = '';

  public person = { firstName: this.firstname, lastName: this.lastname, age: this.age }

  public addPerson() {
    this.person.firstName = this.firstname
    this.person.age = this.age;
    this.person.lastName = this.lastname;
    this.localStorageService.setItem(this.firstname, JSON.stringify(this.person))
  }
  getPerson(nameToRemove: any) {
    this.queryResult = this.localStorageService.getItem(nameToRemove);
  }
  deletePerson(nameToDelete: string) {
    this.localStorageService.removeItem(nameToDelete);
  }

}
