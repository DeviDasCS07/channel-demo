import { Component, OnInit } from '@angular/core';
import { LoadChannelDataService } from './services/load-channel-data.service';

import { ChannelGroupByDateModel } from './models/channel-group-by-date.model';
import { ChannelModel } from './models/channel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'channel-demo';
  channelsGroupByDateInfo: any;
  constructor(private readonly _loadChannelDataService: LoadChannelDataService) {}

  public ngOnInit(): void {
    this._loadChannelDataService.getChannelData().subscribe(response => {
      this.groupByDate(response);
    });
  }

  private groupByDate(channelsInfo: ChannelModel[]): void {

    // @ts-ignore
    const resultObj: ChannelGroupByDateModel = {};
    channelsInfo.forEach((channelInfo) => {
        const date = channelInfo.time.split(' ')[0];
        if (resultObj[date]) {
          resultObj[date].push(channelInfo);
        } else {
          resultObj[date] = [channelInfo];
        }
      });
    this.channelsGroupByDateInfo = resultObj;
  }
}
