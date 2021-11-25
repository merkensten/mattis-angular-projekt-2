import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    p0: this.textService.TextData[this.id].paragraph0,
    p1: this.textService.TextData[this.id].paragraph1,
    p2: this.textService.TextData[this.id].paragraph2,
    p3: this.textService.TextData[this.id].paragraph3,
    p4: this.textService.TextData[this.id].paragraph4,
    p5: this.textService.TextData[this.id].paragraph5,
    p6: this.textService.TextData[this.id].paragraph6,
    p7: this.textService.TextData[this.id].paragraph7,
    p8: this.textService.TextData[this.id].paragraph8,
    p9: this.textService.TextData[this.id].paragraph9,
    s1: this.textService.TextData[this.id].subheading1,
    s2: this.textService.TextData[this.id].subheading2,
    s3: this.textService.TextData[this.id].subheading3,
    s4: this.textService.TextData[this.id].subheading4,
    s5: this.textService.TextData[this.id].subheading5,
    s6: this.textService.TextData[this.id].subheading6,
    s7: this.textService.TextData[this.id].subheading7,
    s8: this.textService.TextData[this.id].subheading8,
    s9: this.textService.TextData[this.id].subheading9,
    img1: this.textService.TextData[this.id].img1,
    img2: this.textService.TextData[this.id].img2,
    img3: this.textService.TextData[this.id].img3,
  };

  onChangeText(f: NgForm) {
    const formData = f.value;
    this.textService.setNewTitle(formData, this.content);
  }

  onResetText() {
    this.textService.resetTitle(this.content, this.id);
  }
}
