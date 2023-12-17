import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UsersResponse } from './users.service';

@Injectable({
	providedIn: 'root'
})

export class TransactionService {
	private baseUrl = 'http://localhost:3001/api';

	constructor(
		private http: HttpClient, 
		private authService: AuthService
	) { }

    transaction(data: any): Observable<transactionResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
    
        return this.http.post<transactionResponse>(`${this.baseUrl}/transaction`, data, httpOptions);
    }

}

export interface Transaction {
    id: number,
    userFK: number,
    businessFK: number,
    transaction_typeFK: number
}

export interface transactionResponse {
	ok: boolean;
	meta: any; 
	data: Transaction[];
}
/* const { userEmail, businessId, transactionTypeId, transactionValue, benefitId } = req.body; */