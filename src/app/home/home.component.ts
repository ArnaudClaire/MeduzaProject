import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

import { Project } from '../project';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private projectService: ProjectService,private uploadService:FileUploadService) { }

  project: Project= { id:'', title: '', description: '', file: '', checked: false };
  file:FileUpload = {
    key: '', 
    name: '', 
    url: '', 
    file: null,
    type: ''
  };
  ngOnInit() : void {
    this.projectService.getCheckedProject()
      .then((data) => {
        this.project = data[0];
        console.log(data);
        console.log(this.project);
        this.uploadService.getFile(this.project.file.split(`C:\\fakepath\\`)[1]).then(
          (data: FileUpload) => {
            if (data) {
              this.file = data;
              console.log("file",this.file);
            }
          }
        );
      });
  }
}
