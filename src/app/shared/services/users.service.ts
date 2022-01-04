import {Injectable} from "@angular/core";
import {AddUserQuery, CountryCodeType, User} from "../models/user.model";
import {v4 as idGenerator} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      id: 'aasdf2234324',
      name: 'Jānis',
      surname: 'Leo',
      country: CountryCodeType.LV,

    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User | undefined {
    return this.users.find(user => user.id = id)
  }

  addUser(query: AddUserQuery): User[] {
    const newUser = {
      id: idGenerator(),
      ...query
    }
    this.users.push(newUser);
    return this.users;
  }

  editUser(query: AddUserQuery, id: string): User[] {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {...user, ...query}
      } else {
        return user
      }
    });
    return this.users
  }

  deleteUser(index: number): User[] {
      const newUsers = this.users.filter((user, i) => index !== i);
      return this.users = [...newUsers];
  }
}
