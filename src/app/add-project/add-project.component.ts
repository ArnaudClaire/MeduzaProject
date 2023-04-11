import { ProjectService } from './../project.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  constructor(private formBuilder: FormBuilder, private projectService: ProjectService) {
    this.formControl = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  @Input() refresh: any;
  @Input() isMainShop: boolean = false;
  formControl: FormGroup;
  showModal = false;
  base64Output : string="";

  toggleModal(){
    this.showModal = !this.showModal;
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
