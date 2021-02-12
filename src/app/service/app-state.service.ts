import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TAB_CONFIGURATION} from '../core/constants';
import {SessionConfig} from '../model/session.config.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private configApplied: Subject<void> = new Subject<void>();

  private sessionConfig: BehaviorSubject<SessionConfig> = new BehaviorSubject<SessionConfig>(null);

  constructor() { }

  public subscribeSessionConfig(): Observable<SessionConfig> {
    return this.sessionConfig.asObservable()
  }

  public setSessionConfig(config: SessionConfig) {
    this.sessionConfig.next(config);
  }

  public applyConfig() {
    this.configApplied.next();
  }


}
