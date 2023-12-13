import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {adjectives, animals, uniqueNamesGenerator} from "unique-names-generator";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private activeUsers: string[] = [this.randomName, this.randomName]
  // Een BehaviorSubject kan gebruikt worden om een long-lived observable te maken waar je zelf updates in stuurt.
  // Hiermee kan je afnemende componenten updaten met de laatste staat van de gebruikerslijst.
  private userListSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.activeUsers);
  private userLeaveSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get randomName(): string{
    return uniqueNamesGenerator({dictionaries: [adjectives, animals]});
  }

  constructor() {
  }

  listActiveUsers(): Observable<string[]> {
    //Een subject heeft een methode om een observable (read only, dus) versie te maken van een subject.
    return this.userListSubject.asObservable();
  }

  userLeaveNotifications(): Observable<string> {
    return this.userLeaveSubject.asObservable();
  }

  removeUserFromChat(leavingUser: string) {
    this.activeUsers = this.activeUsers.filter((user) => user !== leavingUser);
    //Omdat we hier net de lijst hebben veranderd naar een nieuwe lijst (met een nieuwe reference), moeten we
    //De afnemende componenten informeren dat er een nieuwe lijst is waar ze naar moeten kijken. Anders worden
    //updates niet verwerkt.
    this.userListSubject.next(this.activeUsers);
    this.userLeaveSubject.next(leavingUser);
  }

  addUserToChat(userName: string = this.randomName) {
    //Hier hoef je geen subject.next aan te roepen, aangezien push een in-place operatie is voor arrays, waardoor
    //De reference niet update.
    this.activeUsers.push(userName);
  }
}
