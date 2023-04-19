import { ProjectService } from './../project.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../project';
import { FileUpload } from '../file-upload';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  constructor(private formBuilder: FormBuilder, private projectService : ProjectService,private uploadService: FileUploadService) {
    this.formControl = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      file: [null],
      checkedBox: [false, Validators.required],
    });
    }
    @Input() refresh: any;
    @Input() project: Project= { id:'', title: '', description: '', file: '', checked: false };

    formControl: FormGroup;
    showModal = false;
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

    ngOnInit(): void {
      if(this.formControl.controls['title']){
        this.formControl.controls['title'].setValue(this.project.title);
        this.formControl.controls['description'].setValue(this.project.description);
        this.formControl.controls['file'].setValue(this.project.file);
        this.formControl.controls['checkedBox'].setValue(this.project.checked);
      }
      
    }

    async onSubmit() {
      if (this.formControl.valid) {

        await this.projectService.updateProject(this.project.id,this.formControl.value);

        this.formControl.reset();
        this.toggleModal();
        this.refresh();
      } else {
        console.error('Le formulaire est invalide');
      }
    }
}
