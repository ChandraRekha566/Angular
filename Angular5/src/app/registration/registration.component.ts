import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   registrationForm: FormGroup;
   countries = ['India', 'US','UK'];
   skills = ['HTML', 'CSS', 'Angular'];
   constructor(private _fb:FormBuilder,private _dataservice:DataService,private _router:Router) {
   }
   ngOnInit(): void {
       this.registrationForm = this._fb.group({
           userName: new FormControl(''),
           userId: new FormControl(''),
           country: new FormControl(''),
           address: new FormControl(''),
           gender: new FormControl(''),
           skills: this._fb.array(this.skills.map(s => this._fb.control(false)))
       });
   }
   onSubmit(){
       console.log(this.registrationForm);
       console.log(this.registrationForm.value);
       console.log(this.registrationForm.controls.skills.value);
       const selectedSkills = this.registrationForm.value.skills
        .map((checked, index) => checked ? this.skills[index] : null)
        .filter(value => value !==null);
        console.log(selectedSkills);
        console.log(this.registrationForm.value.country);

        if(this.registrationForm.value.country !== 'India'){
            this._router.navigate(['/errorInfo']);
            return
        }
        let data = this.registrationForm.value;
        data.skills = selectedSkills
        this._dataservice.setRegistrationData(this.registrationForm.value);
        this._router.navigate(['/shared']);
   }
}