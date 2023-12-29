import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UsersResponse } from './users.service';

@Injectable({
	providedIn: 'root'
})
export class BusinessService {
	private baseUrl = 'https://barpoint-6cc8.onrender.com/api';

	constructor(
		private http: HttpClient,
		private authService: AuthService
	) { }

	getAllBusinesses(): Observable<BusinessResponse> {
		return this.http.get<BusinessResponse>(`${this.baseUrl}/businesses`);
	}

	createBusinesses(data: Business): Observable<BusinessResponse> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};
		console.log(data);

		return this.http.post<BusinessResponse>(`${this.baseUrl}/businesses/create`, data, httpOptions);
	}

	editBusinesses(businessId: number, menu:any): Observable<Business> {
		const formData = new FormData();
		formData.append('menu', menu);
        return this.http.put<Business>(`${this.baseUrl}/businesses/${businessId}`, formData);
    }

	getBusiness(businessId: number): Observable<BusinessResponse> {
        const httpOptions = {
            headers: new HttpHeaders ({
                'Content-Type': 'application/json',

            })
        };
        return this.http.get<BusinessResponse>(`${this.baseUrl}/businesses/${businessId}`, httpOptions)
    }

	searchUserByBusinessname(data: String): Observable<Business[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};
		return this.http.post<Business[]>(`${this.baseUrl}/businesses`, data, httpOptions);
	}

	getBusinessUsers(businessId: number): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				// Puedes agregar otras cabeceras personalizadas si es necesario
			})
		};

		return this.http.get<any>(`${this.baseUrl}/users/${businessId}`, httpOptions);
	}

	getDashboardStatus(businessId: number): Observable<dashboardStatus> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				// Puedes agregar otras cabeceras personalizadas si es necesario
			})
		};
	
		return this.http.get<dashboardStatus>(`${this.baseUrl}/dashboard/${businessId}`, httpOptions);
	}
}

export interface BusinessUsers {
	order?: string,
	businessId: number
}

export interface Business {
	name: string,
	lastname: string,
	cuit: number,
	phone: number,
	businessName: string,
	email: string,
	adress: string,
	password: string,
	rolFK: number,
	menu?: any;
}

export interface BusinessResponse {
	ok: boolean;
	meta: any; // Tipo de los metadatos, puedes ajustarlo si conoces la estructura exacta
	data: Business[]; // Tipo de los datos, puedes ajustarlo si conoces la estructura exacta
}

export interface dashboardStatus {
	users: number;
	userPointsLastMonth: number;
	userPointsLastWeek: number;
	benefitCreated: number;
}