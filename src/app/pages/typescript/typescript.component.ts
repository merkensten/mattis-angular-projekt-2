import { Component, OnInit } from '@angular/core';
import { TextService } from '../../text.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css'],
})
export class TypescriptComponent {
  constructor(private textService: TextService) {}
  id = 4;
  content = {
    title: this.textService.TextData[this.id].title,
    p1: this.textService.TextData[this.id].paragraph1,
    p2: this.textService.TextData[this.id].paragraph2,
    p3: this.textService.TextData[this.id].paragraph3,
    p4: this.textService.TextData[this.id].paragraph4,
  };
}
