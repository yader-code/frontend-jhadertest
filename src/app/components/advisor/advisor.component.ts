import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvisorService } from 'src/app/services/service.idex';
import { Advisor } from '../../models/advisor/advisor.model';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.css']
})
export class AdvisorComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _advisorService: AdvisorService,
    public router: Router
  ) { }

  ngOnInit() {

    this.forma = new FormGroup({
      name: new FormControl( null, [Validators.maxLength(50), Validators.required]),
      specialty: new FormControl(null, [Validators.maxLength(50),  Validators.required])
    });
  }

  registerAdvisor() {

    if (this.forma.invalid ) {
      swal('Importante', 'Debe llenar todos los campos', 'warning');
      return;
    }

    const advisor = new Advisor(
      this.forma.value.name,
      this.forma.value.specialty
    );

    this._advisorService.createAdvisor( advisor )
      .subscribe( resp => {
        console.log(resp);
    });

  }



}
