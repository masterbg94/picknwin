import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {API_HOME} from '../../api.config';

@Injectable({providedIn: 'root'})
export class MatchesService {
  constructor(private httpClient: HttpClient) {
  }

  getAllMatches() {
    return this.httpClient.get(API_HOME + '/matches');
  }
}
