import { Component } from '@angular/core';

@Component({
  selector: 'app-page-benefit',
  templateUrl: './page-benefit.component.html',
  styleUrls: ['./page-benefit.component.css']
})
export class PageBenefitComponent {

  choice :number=0;
  choiceComponent(number: number){
    this.choice=number;
  }
}
