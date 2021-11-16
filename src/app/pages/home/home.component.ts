import { Component, OnInit } from '@angular/core';
import { TextData } from '../../shared/text-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  content = {
    title: TextData[0].title,
    h2: TextData[0].heading2,
    p1: TextData[0].paragraph1,
    p2: TextData[0].paragraph2,
    p3: TextData[0].paragraph3,
    img: TextData[0].img,
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
    this.content.title = TextData[0].title;
  }
}
