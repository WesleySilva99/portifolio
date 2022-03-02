import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Experience} from "../model/Experience";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  readonly apiURL: string = 'http://localhost:8080/api/v1/experiencia';

  constructor(private http: HttpClient) {

  }

  listaTodos():Observable<Experience[]>{

    return this.http.get<Experience[]>(`${ this.apiURL }`);

  }

}
