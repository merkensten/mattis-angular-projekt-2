import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextService } from '../../text.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private textService: TextService) {}
  id = 0;
  content = {
    title: this.textService.TextData[this.id].title,
    h2: this.textService.TextData[this.id].heading2,
    p1: this.textService.TextData[this.id].paragraph1,
    p2: this.textService.TextData[this.id].paragraph2,
    p3: this.textService.TextData[this.id].paragraph3,
    img: this.textService.TextData[this.id].img,
  };

  public getCurrentRoute() {
    return window.location.pathname;
  }

  onChangeText(f: NgForm) {
    const formData = f.value;
    this.textService.setNewTitle(formData, this.content);
  }

  onResetText() {
    this.textService.resetTitle(this.content, this.id);
  }
}
