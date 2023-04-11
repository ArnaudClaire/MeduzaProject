import { ProjectService } from './../project.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  constructor(private formBuilder: FormBuilder, private projectService : ProjectService) {
    this.formControl = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
    }
    @Input() refresh: any;
    @Input() project: Project= { id: '', title: '', description: '', url: '' };
    formControl: FormGroup;
    showModal = false;
    toggleModal(){
      this.showModal = !this.showModal;
    }

    ngOnInit(): void {
      if(this.formControl.controls['title']){
        this.formControl.controls['title'].setValue(this.project.title);
        this.formControl.controls['description'].setValue(this.project.description);
        this.formControl.controls['url'].setValue(this.project.url);
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
