import { FormBuilder } from '@angular/forms';
import { ProjectService } from './../project.service';
import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent {
  constructor(private projectService : ProjectService, private uploadService: FileUploadService ) {}

  @Input() fileUpload!: FileUpload;
  @Input() refresh: any;
  @Input() project: Project= { id:'', title: '', description: '', file: '' };
  @Input() isMainShop: boolean = false;
  showModal = false;

  async deleteProd(id: string, pathfile:string) {

    await this.projectService.deleteProject(id);
    // subscribe to the observable returned by getUpload method
    this.uploadService.getFile(this.project.file.split(`C:\\fakepath\\`)[1]).then(fileUpload => {
      if (fileUpload) {
        // pass the actual FileUpload object to deleteFile method
        this.uploadService.deleteFile(fileUpload);
      }
    });
    this.toggleModal();
    this.refresh();
    console.log("delete");
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
}

