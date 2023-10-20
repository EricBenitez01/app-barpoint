import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthResponse } from './users.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private tokenKey: string = 'auth_bigbangdevs';
    private apiUrl: string = 'http://localhost:3002';  

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<UserAuthResponse> {
        const requestData = {
            email: email, 
            password: password
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        let response = this.http.post<UserAuthResponse>(`${this.apiUrl}/authUser`, requestData, httpOptions);
        response.subscribe(
            (token) => {
                this.setToken(token.token)
            }
        )
        return response;
    }

    logout(): void {
        this.removeToken();
    }

    setToken(token: string): void {
        // Se almacena el token en localStorage
        localStorage.setItem(this.tokenKey, token);
        console.log(token);
    }

    removeToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

}