import { ProjectService } from './../project.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file-upload';
//le sanitizer permet de convertir une url en url sécurisée
// import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  constructor(private formBuilder: FormBuilder, private projectService: ProjectService,private uploadService: FileUploadService) {
    this.formControl = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      file: [null, Validators.required],
    });
  }

  @Input() refresh: any;
  @Input() isMainShop: boolean = false;
  formControl: FormGroup;
  showModal = false;
  base64Output : string="";
  videoSrc: string="";
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  onVideoSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.videoSrc = reader.result as string;
      };
    }
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }
  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
  
  toggleModal(){
    this.showModal = !this.showModal;
  }
  goToSite(){
    window.location.href = "/Meduza-home";
  }

  async onSubmit() {
    if (this.formControl.valid) {

        await this.projectService.addNewProject(this.formControl.value).then(() => { this.refresh() });
        this.formControl.reset();
        this.toggleModal();

    } else {
      console.error('Le formulaire est invalide');
    }
  }
}
