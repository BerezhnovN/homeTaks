import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {
  constructor(private http: HttpClient) { }
  url = window.location.hostname

}
