import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UsersResponse } from './users.service';

@Injectable({
	providedIn: 'root'
})

export class BenefitsService {
	private baseUrl = 'http://localhost:3001';

	constructor(
		private http: HttpClient, 
		private authService: AuthService
	) { }

    benefitsForaBusiness(data: number): Observable<BusinessResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
    
        return this.http.get<BusinessResponse>(`${this.baseUrl}/benefits/${data}`, httpOptions);
    }

    create(data: Benefit): Observable<Benefit> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
        return this.http.post<Benefit>(`${this.baseUrl}/benefits`, data, httpOptions);
    }

    edit(benefitId: number, data: Benefit): Observable<Benefit> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
    
        return this.http.put<Benefit>(`${this.baseUrl}/benefits/${benefitId}`, data, httpOptions);
    }

    delete(benefitId: number): Observable<Benefit> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
    
        return this.http.delete<Benefit>(`${this.baseUrl}/benefits/${benefitId}`, httpOptions);
    }
}

export interface Benefit {
    id?: number;
    businessFK?: number;
    benefitname: string;
    img?: string | null;
    discount?: number;
    points_req: string;
    description: string;
}

export interface BusinessResponse {
	ok: boolean;
	meta: any; 
	data: Benefit[];
}