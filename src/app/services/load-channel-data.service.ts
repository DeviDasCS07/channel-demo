import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChannelModel } from '../models/channel.model';


@Injectable({
  providedIn: 'root'
})
export class LoadChannelDataService {

  constructor(private readonly httpClient: HttpClient) { }

  public getChannelData(): Observable<ChannelModel[]> {
    const filePath = `assets/data/channel.json`;
    return this.httpClient.get<ChannelModel[]>(filePath);
  }
}
