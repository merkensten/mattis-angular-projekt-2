import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextService } from '../../text.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent {
  constructor(private textService: TextService) {}

  id = 1;
  content = {
    title: this.textService.TextData[this.id].title,
    p1: this.textService.TextData[this.id].paragraph1,
    p2: this.textService.TextData[this.id].paragraph2,
    p3: this.textService.TextData[this.id].paragraph3,
  };

  onChangeText(f: NgForm) {
    const formData = f.value;
    this.textService.setNewTitle(formData, this.content);
  }

  onResetText() {
    this.textService.resetTitle(this.content, this.id);
  }
}
