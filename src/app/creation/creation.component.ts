import { Project } from './../project';
import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {
  constructor( private projectService:ProjectService, private uploadService: FileUploadService) { }

  projects: Array<Project> = [];
  file:FileUpload = {
    key: '', 
    name: '', 
    url: '', 
    file: null,
    type: ''
  };

  files: Array<FileUpload> = [];

  ngOnInit() {
    this.projectService.getProjects().then((data) => {
      this.projects=data;
    });
  }
}
