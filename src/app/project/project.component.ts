import { Project } from './../project';
import { Component, Input } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  constructor(private uploadService: FileUploadService ) {}

  @Input() project: Project= { id:'', title: '', description: '', file: '', checked: false };
  
  file:FileUpload = {
    key: '', 
    name: '', 
    url: '', 
    file: null,
    type: ''
  };
  ngOnChanges(): void {
    // this.getSafeVideoUrl();
    // console.log("cc",this.project.file)
    this.uploadService.getFile(this.project.file.split(`C:\\fakepath\\`)[1]).then(
      (data: FileUpload) => {
        if (data) {
          this.file = data;
          console.log("file",this.file);
        }
      }
    );
  }
}
