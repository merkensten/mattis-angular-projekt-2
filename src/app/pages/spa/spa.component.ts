import { Component } from '@angular/core';
import { TextService } from '../../text.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css'],
})
export class SpaComponent {
  constructor(private textService: TextService) {}
  id = 2;
  content = {
    title: this.textService.TextData[this.id].title,
    p1: this.textService.TextData[this.id].paragraph1,
    p2: this.textService.TextData[this.id].paragraph2,
  };
}
