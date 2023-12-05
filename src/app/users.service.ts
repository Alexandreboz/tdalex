import { Injectable } from '@angular/core';
import {UserLdap} from "./models/user-ldap";
import {LDAP_USERS} from "./models/ldap-mock-data";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users: UserLdap[] = LDAP_USERS;
getUser(login: string) : Observable<UserLdap[]> {
  const user : UserLdap | undefined = this.users.find((user) => user.login === login);
  if (user !== undefined)
    return of(this.users);

  return  throwError(() => new Error('Utilisateur non trouvé'))
}
  constructor() { }
}
