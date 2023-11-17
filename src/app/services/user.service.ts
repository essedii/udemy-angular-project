import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.development'
import { Observable } from "rxjs";
import { User } from "../classes/User";

export interface UsersResponse {
    data: User[];
    message: string;
}

export interface UserResponse {
    data: User;
    message: string;
}

@Injectable({
    providedIn:'root'
})
export class UserService {
    // apiUrl = environment.APIURL;
    apiUrl = "http://3.18.130.140:9072/users";
    constructor(private http: HttpClient) {

    }

    getUsers():Observable<UsersResponse> {
        return this.http.get<UsersResponse>(this.apiUrl);
    }

    getUser(id: number):Observable<UserResponse>{
        return this.http.get<UserResponse>(this.apiUrl + '/' + id);
    }

    deleteUser(user: IUser) {
        return this.http.delete<UserResponse>(this.apiUrl + '/' + user.id);
    }

    updateUser(user: IUser):Observable<UserResponse> {
        return this.http.put<UserResponse>(this.apiUrl + '/' + user.id, user);
    }

    createUser(user: IUser):Observable<UserResponse>  {
        return this.http.post<UserResponse>(this.apiUrl, user);
    }
}