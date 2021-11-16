import { Component, OnInit } from '@angular/core';
import { TextService } from '../../text.service';

@Component({
  selector: 'app-angular-arkitektur',
  templateUrl: './angular-arkitektur.component.html',
  styleUrls: ['./angular-arkitektur.component.css'],
})
export class AngularArkitekturComponent {
  constructor(private textService: TextService) {}
  id = 3;
  content = {
    title: this.textService.TextData[this.id].title,
    p1: this.textService.TextData[this.id].paragraph1,
    p2: this.textService.TextData[this.id].paragraph2,
    p3: this.textService.TextData[this.id].paragraph3,
  };
}
