import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.css']
})
export class AdvisorComponent implements OnInit {

  forma: FormGroup;
  constructor() { }

  ngOnInit() {

    this.forma = new FormGroup({
      name: new FormControl( null, [Validators.maxLength(50),
        Validators.minLength(6), Validators.required]),
      specialty: new FormControl(null, [Validators.maxLength(50),
        Validators.minLength(6), Validators.required])
    });
  }

}
