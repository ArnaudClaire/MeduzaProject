import { Project } from './../project';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  constructor(private sanitizer: DomSanitizer, private uploadService: FileUploadService ) {}

  @Input() project: Project= { id:'', title: '', description: '', file: '' };
  
  file:FileUpload = {
    key: '', 
    name: '', 
    url: '', 
    file: null,
    type: ''
  };
  ngOnInit(): void {
    this.getSafeVideoUrl();
  }

  videoUrl: string = '';

  async getSafeVideoUrl() {
    console.log("project",this.project);
    await this.uploadService.getFile(this.project.file.split(`C:\\fakepath\\`)[1]).then(
      (data: FileUpload) => {
        if (data) {
          this.file = data;
          console.log("file",this.file);
        }
      }
    );
    console.log("file",this.file);
  }
}
