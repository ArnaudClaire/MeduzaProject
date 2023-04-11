import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {
  
  constructor(private fb: FormBuilder, private projectService: ProjectService, private uploadService: FileUploadService) { }

  mediaForm!: FormGroup;
  projects: any;
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  CRUDProject = "";

  ngOnInit() {
    this.projectService.getProjects().then((data) => {
      this.projects=data;
    });
  }

  async onSubmit() {
    switch(this.CRUDProject) { 
      case "add": { 
          this.projectService.addNewProject(this.mediaForm.value);
          this.CRUDProject="get";
        break; 
      } 
      case "upt": { 
          this.projectService.updateProject(this.mediaForm.controls['id'].toString(),this.mediaForm.value);
          this.CRUDProject="get";
        break; 
      } 
      case "del": { 
          this.projectService.deleteProject(this.mediaForm.value);
          this.CRUDProject="get";
        break;  
      } 
      default: { 
          this.CRUDProject="get";
        break; 
      } 
    } 
  }

  refresh=(): void =>{
    this.projectService.getProjects().then((projects) => {
      this.projects = projects;
    });
  }
}
