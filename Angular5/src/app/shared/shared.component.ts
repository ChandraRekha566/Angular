import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
    
    registrationData:any;
    constructor(private _dataService:DataService) { }

    ngOnInit(): void{
        this.registrationData = this._dataService.getRegistrationData();
        console.log(this.registrationData);

    }
}