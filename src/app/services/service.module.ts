import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdvisorService
} from './service.idex';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClient
  ],
  declarations: [],
  providers: [
    AdvisorService
  ]
})
export class ServiceModule { }
