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
  currentSlide = 0;
  projects: Array<Project> = [];
  file:FileUpload = {
    key: '', 
    name: '', 
    url: '', 
    file: null,
    type: ''
  };

  files: Array<FileUpload> = [];
  async ngOnInit() {
    await this.projectService.getProjects().then((data) => {
      this.projects=data;
      this.projects.forEach(async (project: Project) => {
        await this.uploadService.getFile(project.file.split(`C:\\fakepath\\`)[1]).then(
          (data: FileUpload) => {
            if (data) {
              this.file = data;
              this.files.push(this.file);
            }
          }
        );
      });
    });
    console.log(this.file);
  }
  
  onPreviousClick() {

    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.files.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);

  
  }

  onNextClick() {

      const next = this.currentSlide + 1;
      this.currentSlide = next === this.files.length ? 0 : next;
      console.log("next clicked, new current slide is: ", this.currentSlide);
  
  }
}
