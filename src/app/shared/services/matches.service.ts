import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {API_KEY} from '../../api.config';

@Injectable({providedIn: 'root'})
export class MatchesService {
  constructor(private httpClient: HttpClient) {
  }

  getAllMatches() {
    return this.httpClient.get(API_KEY + '/matches');
  }
}
