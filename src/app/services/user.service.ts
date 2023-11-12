import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user";

@Injectable({
    providedIn:'root'
})
export class UserService {
    users: IUser[] = [
        {
            id: 1,
            name: 'Giulio',
            lastName: 'Andreotti',
            fiscalCode: 'DLSUTIH604RMZ',
            email: 'a@abstract.gmail.com',
            phone: '1291981821',
            province:'RM',
            age: 45
        },
        {   
            id: 2,
            name: 'Antonio',
            lastName: 'Ricci',
            fiscalCode: 'REFUTIH345RMS',
            email: 'b@afefferact.gmail.com',
            phone: '1434324321',
            province:'NA',
            age: 54
        },
        {
            id: 3,
            name: 'Valerio',
            lastName: 'Rossi',
            fiscalCode: 'GETTTIH604RMZ',
            email: 'b@bdfract.gmail.com',
            phone: '5461291821',
            province:'TO',
            age: 53
        }
    ]
  
    getUsers():IUser[] {
        return this.users;
    }

    getUser(id: number): IUser | undefined{
        return this.users.find(user=> user.id == id)
    }

    deleteUser(user: IUser) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1)
        }
    }

    updateUser(user: IUser) {
        const idx = this.users.findIndex((val)=>val.id === user.id);
        if (idx > -1) {
            this.users[idx] = user
        }
        return user
    }

    createUser(user: IUser) {
        this.users.splice(0, 0, user)
    }
}