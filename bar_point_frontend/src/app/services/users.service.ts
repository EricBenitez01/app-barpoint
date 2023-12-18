import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    private baseUrl = 'https://barpoint-6cc8.onrender.com/api';

    constructor(private http: HttpClient, private authService: AuthService) { }

    getAllUsers(): Observable<UsersResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };

        return this.http.get<UsersResponse>(`${this.baseUrl}/users`, httpOptions);
    } 

    createUser(data: User): Observable<UsersResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
        return this.http.post<UsersResponse>(`${this.baseUrl}/users`, data, httpOptions);
    }
    getUser(userId: number): Observable<UsersResponse> {
        const httpOptions = {
            headers: new HttpHeaders ({
                'Content-Type': 'application/json',

            })
        };
        return this.http.get<UsersResponse>(`${this.baseUrl}/users/detail/${userId}`, httpOptions)
    } 
   


    searchUserByUsername(data: String): Observable<UsersResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
        return this.http.get<UsersResponse>(`${this.baseUrl}/users/searchUser/${data}`, httpOptions);
    }
}

export interface User {
    username: string,
    email: string,
    birthday: string,
    address: string,
    gender: string,
    password: string,
    rolfk: number
}

export interface UsersResponse {
    ok: boolean;
    meta: any; // Tipo de los metadatos, puedes ajustarlo si conoces la estructura exacta
    data: User[]; // Tipo de los datos, puedes ajustarlo si conoces la estructura exacta
}