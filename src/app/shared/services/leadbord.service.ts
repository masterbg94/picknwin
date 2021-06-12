import {Injectable} from '@angular/core';
import {of} from 'rxjs';

import {LeadbordMock} from '../mock/leadbord.mock';

@Injectable({providedIn: 'root'})
export class LeadbordService {
  constructor() {
  }

  getLeadbordData() {
    return of(LeadbordMock);
  }
}
