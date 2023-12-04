import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Benefit, BenefitsService } from 'src/app/services/benefits.service';
import { Business } from 'src/app/services/business.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-transaction-popup',
    templateUrl: './transaction-popup.component.html',
    styleUrls: ['./transaction-popup.component.css']
})
export class TransactionPopupComponent {
    @Input()
    businessId: number = 1;
    selectedClient!: any;
    selectedTransactionType: string = 'canje';
    selectedPromotion!: any;
    pointsToAdd: number = 0;
    visible: boolean = false;
    searchTerm: string = '';
    searchResults: User[] = [];
    benefits: Benefit[] = [];
    data: any;

    constructor(private userService: UsersService, private benefitsService: BenefitsService, private transactionService: TransactionService ) { }

    ngOnInit() {
        this.benefitsForBusiness();
    }

    benefitsForBusiness() {
        this.benefitsService.benefitsForaBusiness(this.businessId).subscribe((result) => {
            this.benefits = result.data;
        })
    }
    searchClient(event: any) {
        this.userService.searchUserByUsername(event.query)
            .subscribe((result) => {
                this.searchResults = result.data;
            });
    }

    guardarTransaccion() {
        let transactionType;
        if (this.selectedClient === '') {
            alert('Se debe seleccionar un cliente');
        }
        
        if (this.selectedTransactionType == 'canje') {
            transactionType = 2
            this.data = {
                userEmail: this.selectedClient.email,
                businessId: this.businessId, 
                transactionTypeId:  transactionType, 
                transactionValue: this.selectedPromotion.points_req, //que coirno era esto   
                benefitId:  this.selectedPromotion.id
            }
        } else {
            transactionType = 1
            this.data = {
                userEmail: this.selectedClient.email,
                businessId: this.businessId, 
                transactionTypeId:  transactionType, 
                transactionValue: this.pointsToAdd, //que coirno era esto   
                benefitId:  null
            } 
            console.log(this.selectedTransactionType);
            
        }
        this.transactionService.transaction(this.data)
        this.visible = false;
        alert("La transaccion se realizo correctamente");
    }

    showDialog() {
        this.visible = true;
    }
}