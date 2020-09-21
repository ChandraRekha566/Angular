import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error-info',
    templateUrl: './error-info.component.html'
})
export class ErrorInfoComponent implements OnInit {

    constructor(private _router:Router) { }
    ngOnInit(): void {
    }
    goBack(){
        this._router.navigate(['/registration'])
    }
}