import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TimeComponent } from './time.component';
import { Time } from "./time";


@Injectable()
export class TimeService {

  private urlBase = 'http://localhost:8080/api/time';

  private headers = new Headers(
    {'Content-Type': 'application/json' }
  );

  handleError : any;

  getTimes(): Promise<any> {
    return this.http.get(this.urlBase + "/")
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  createTime(nome: string): Promise<any> {
    var time = { nome: nome };
      
    return this.http.post(this.urlBase + "/criar", JSON.stringify(time), {
      headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);

  }

  updateTime(time: Time): Promise<Time> {
    const url =`${this.urlBase}` + "/atualizar/" + `${time.id}`;
    
    return this.http.put(url, JSON.stringify(time))
    .toPromise()
    .then(() => time)
    .catch(this.handleError);
  }

  deleteTime(id: number): Promise<void> {
    const url =`${this.urlBase}` + "/atualizar/" + id;

    return this.http.delete(url, { headers: this.headers })
    .toPromise()
    .then(() => null)
    .catch(this.handleError);

  }


  constructor(private http: Http) { }

}
