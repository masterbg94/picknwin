import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {API_HOME} from '../../api.config';
import {Observable} from 'rxjs';
import {Matches} from '../models/matches';

@Injectable({providedIn: 'root'})
export class MatchesService {
  constructor(private httpClient: HttpClient) {
  }

  getAllMatches(): Observable<Matches> {
    return this.httpClient.get<Matches>(API_HOME + '/matches');
  }
}
