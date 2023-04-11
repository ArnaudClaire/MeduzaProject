import { FormBuilder } from '@angular/forms';
import { ProjectService } from './../project.service';
import { Component, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent {
  constructor(private projectService : ProjectService) {}

  @Input() refresh: any;
  @Input() project: Project= { id: '', title: '', description: '', url: '' };
  @Input() isMainShop: boolean = false;
  showModal = false;

  async deleteProd(id: string) {

    await this.projectService.deleteProject(id);

    this.toggleModal();
    this.refresh();
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
}

