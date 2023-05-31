import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-devis',
  templateUrl: './page-devis.component.html',
  styleUrls: ['./page-devis.component.css']
})
export class PageDevisComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.contactForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      nickname: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  onSubmit() {

  }
}
