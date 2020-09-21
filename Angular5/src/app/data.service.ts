import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})
export class DataService {
    registrationData:any;
    constructor() { }

    getRegistrationData() {
        return this.registrationData;
    }

    setRegistrationData(data) {
        this.registrationData=data;
    }
}