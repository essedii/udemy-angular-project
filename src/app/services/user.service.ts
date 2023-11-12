import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.development'
import { Observable } from "rxjs";
import { User } from "../classes/User";

@Injectable({
    providedIn:'root'
})
export class UserService {
    // users: IUser[] = [
    //     {
    //         id: 1,
    //         name: 'Giulio',
    //         lastName: 'Andreotti',
    //         fiscalCode: 'DLSUTIH604RMZ',
    //         email: 'a@abstract.gmail.com',
    //         phone: '1291981821',
    //         province:'RM',
    //         age: 45
    //     },
    //     {   
    //         id: 2,
    //         name: 'Antonio',
    //         lastName: 'Ricci',
    //         fiscalCode: 'REFUTIH345RMS',
    //         email: 'b@afefferact.gmail.com',
    //         phone: '1434324321',
    //         province:'NA',
    //         age: 54
    //     },
    //     {
    //         id: 3,
    //         name: 'Valerio',
    //         lastName: 'Rossi',
    //         fiscalCode: 'GETTTIH604RMZ',
    //         email: 'b@bdfract.gmail.com',
    //         phone: '5461291821',
    //         province:'TO',
    //         age: 53
    //     }
    // ]
    apiUrl = environment.APIURL;
    constructor(private http: HttpClient) {

    }

    getUsers():Observable<IUser[]> {
        return this.http.get<IUser[]>(this.apiUrl);
    }

    getUser(id: number):Observable<IUser>{
        return this.http.get<User>(this.apiUrl + '/' + id);
    }

    deleteUser(user: IUser) {
        return this.http.delete<User>(this.apiUrl + '/' + user.id);
    }

    updateUser(user: IUser):Observable<IUser> {
        return this.http.put<User>(this.apiUrl + '/' + user.id, user);
    }

    createUser(user: IUser):Observable<IUser>  {
        return this.http.post<User>(this.apiUrl, user);
    }
}