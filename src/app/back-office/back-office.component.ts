import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {
  
  constructor(private fb: FormBuilder) { }

  mediaForm!: FormGroup;

  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  CRUDProject = "";
  ngOnInit() {
    this.mediaForm = this.fb.group({
      mediaUrl: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  async addProject() {
    const newMedia = {
      mediaUrl: this.mediaForm.value.mediaUrl,
      title: this.mediaForm.value.title,
      description: this.mediaForm.value.description,
    };
    const productsCol = collection(this.db, 'shopProducts');
    await addDoc(productsCol, newMedia);
  }
  

  async deleteProject() {
    const productsCol = collection(this.db, 'shopProducts');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
  }

  async updProject(data : any) {
    const productsCol = collection(this.db, 'shopProducts');
    await addDoc(productsCol, data);
  }
}
