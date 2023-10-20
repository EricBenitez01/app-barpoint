import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})


export class UsersService {

    private baseUrl = 'http://localhost:3002';

    constructor(private http: HttpClient, private authService: AuthService) { }

    getAllUsers(): Observable<UsersResponse> {
        return this.http.get<UsersResponse>(`${this.baseUrl}/users`);
    } 

    createUser(data: User): Observable<UsersResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario.
            })
        };
        return this.http.post<UsersResponse>(`${this.baseUrl}/users`, data, httpOptions);
    }

    userLogin(data: UserLogin): Observable<UserAuthResponse> {
        return this.authService.login(data.email, data.password);
    }

}

export interface User {
    username: string,
    email: string,
    birthday: string,
    address: string,
    gender: string,
    password: string,
    rolFK: number
}
export interface UserLogin {
    email: string; 
    password: string;
}

export interface UsersResponse {
    ok: boolean;
    meta: any; // Tipo de los metadatos, puedes ajustarlo si conoces la estructura exacta
    data: User[]; // Tipo de los datos, puedes ajustarlo si conoces la estructura exacta
}

export interface UserAuthResponse {
    ok: boolean;
    msg: string;
    token: string; 
}