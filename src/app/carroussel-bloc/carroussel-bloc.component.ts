import { Component, Input } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';
import { Project } from './../project';

@Component({
  selector: 'app-carroussel-bloc',
  templateUrl: './carroussel-bloc.component.html',
  styleUrls: ['./carroussel-bloc.component.css']
})
export class CarrousselBlocComponent {
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
