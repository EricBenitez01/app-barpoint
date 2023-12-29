import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export enum RolesEnum {
    UserRole = 'user', 
    SuperUserRole = 'superUser',
    BusinessRole = 'business'
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private tokenKey: string = 'auth_bigbangdevs';
    private apiUrl: string = 'https://barpoint-6cc8.onrender.com/api';  

    constructor(private http: HttpClient) {}

    async loginUser(email: string, password: string, businessId: number): Promise<any> {
        const requestData = {
            email: email, 
            password: password,
            businessId: businessId
        };

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        try {
            const authResponse = await this.http.post<any>(`${this.apiUrl}/authUser`, requestData, httpOptions).toPromise();
            // Se almacena el token
            this.setToken(authResponse.token);
            return authResponse;
        } catch (error) {
            console.log(error);
        }
    }

    async loginBusiness(email: string, password: string): Promise<any> {
        const requestData = {
            email: email, 
            password: password
        };

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        try {
            const authResponse = await this.http.post<any>(`${this.apiUrl}/authBusiness`, requestData, httpOptions).toPromise();
            // Se almacena el token
            this.setToken(authResponse.token);
            return authResponse;
        } catch (error) {
            console.log(error);
        }
    }

    logout(): void {
        this.removeToken();
    }

    setToken(token: string): void {
        // Se almacena el token en localStorage
        localStorage.setItem(this.tokenKey, token);
    }

    removeToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        const token = this.getToken();
        return !!token;
    }

    getRole(): RolesEnum | null {
        // Se obtiene el rol almacenado en el token
        const token = this.getToken();

        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            let rol: RolesEnum;

            // Se recupera del payload el rol y se determina según RolesEnum
            if ('rol' in tokenData) {
                switch (tokenData.rol) {
                    case 1:
                        rol = RolesEnum.UserRole;
                        break;
                    case 2:
                        rol = RolesEnum.SuperUserRole;
                        break;
                    default:
                        rol = RolesEnum.BusinessRole;
                        break;
                }
                console.log("Rol obtenido: " + rol);
                return rol;
            }
        }
        return null;
    }
}
