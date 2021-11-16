import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
})
export class KontaktComponent {
  public getCurrentRoute() {
    return window.location.pathname;
  }

  onSubmit(f: NgForm) {
    const formData = f.value;
    console.log(
      `Nytt meddelande från kontakforumläret - Namn : ${formData.namn}, Email: ${formData.email}, Meddelande: ${formData.message}`
    );
  }
}
