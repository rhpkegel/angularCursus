import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {adjectives, animals, uniqueNamesGenerator} from "unique-names-generator";
import {User} from "./chat.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private activeUsers: User[] = []
  // Een BehaviorSubject kan gebruikt worden om een long-lived observable te maken waar je zelf updates in stuurt.
  // Hiermee kan je afnemende componenten updaten met de laatste staat van de gebruikerslijst.
  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.activeUsers);
  private userLeaveSubject: Subject<User> = new Subject<User>();
  private idCounter: number = 0;

  get randomUser(): User {
    return {
      voornaam: uniqueNamesGenerator({dictionaries: [adjectives]}),
      achternaam: uniqueNamesGenerator({dictionaries: [animals]})
    };
  }

  constructor() {
    this.addUserToChat();
  }

  listActiveUsers(): Observable<User[]> {
    //Een subject heeft een methode om een observable (read only, dus) versie te maken van een subject.
    return this.userListSubject.asObservable();
  }

  userLeaveNotifications(): Observable<User> {
    return this.userLeaveSubject.asObservable();
  }

  removeUserFromChat(leavingUserId: number) {
    const leavingUser = this.activeUsers.find(user => user.id === leavingUserId);
    if (leavingUser) {
      this.activeUsers = this.activeUsers.filter((user) => user.id !== leavingUserId);
      //Omdat we hier net de lijst hebben veranderd naar een nieuwe lijst (met een nieuwe reference), moeten we
      //De afnemende componenten informeren dat er een nieuwe lijst is waar ze naar moeten kijken. Anders worden
      //updates niet verwerkt.
      this.userListSubject.next(this.activeUsers);
      this.userLeaveSubject.next(leavingUser);
    }
  }

  addUserToChat(newUser: User = this.randomUser) {
    this.idCounter = this.idCounter++;
    newUser.id = this.idCounter;
    //Hier hoef je geen subject.next aan te roepen, aangezien push een in-place operatie is voor arrays, waardoor
    //De reference niet update.
    this.activeUsers.push(newUser);
  }
}
