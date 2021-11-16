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
  content = {
    title: this.textService.TextData[0].title,
    h2: this.textService.TextData[0].heading2,
    p1: this.textService.TextData[0].paragraph1,
    p2: this.textService.TextData[0].paragraph2,
    p3: this.textService.TextData[0].paragraph3,
    img: this.textService.TextData[0].img,
  };

  public getCurrentRoute() {
    return window.location.pathname;
  }

  onChangeText(f: NgForm) {
    const formData = f.value;
    console.log(formData);
    this.content.title = formData.text;
  }

  onResetText() {
    this.content.title = this.textService.TextData[0].title;
  }
}
