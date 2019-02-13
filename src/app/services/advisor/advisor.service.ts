import { Injectable } from '@angular/core';
import { Advisor } from '../../models/advisor/advisor.model';
import { HttpClient } from '@angular/common/http';
import { ADVISOR_API } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {

  constructor(
    public http: HttpClient
  ) { }

  createAdvisor(advisor: Advisor) {
    const url = ADVISOR_API + '/advisors';
    return this.http.post( url, advisor );
  }
}
