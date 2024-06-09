import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements AfterViewInit, OnInit {

  registrationForm!: FormGroup;
  
  constructor(){
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup ({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      niveauScolaire: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(){

  }

  ngAfterViewInit() {
    feather.replace(); // Replace icons with SVGs after rendering
  }
}
