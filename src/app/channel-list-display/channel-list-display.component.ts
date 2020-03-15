import { Component, OnInit, Input } from '@angular/core';
import { ChannelModel } from '../models/channel.model';


@Component({
  selector: 'app-channel-list-display',
  templateUrl: './channel-list-display.component.html',
  styleUrls: ['./channel-list-display.component.scss']
})
export class ChannelListDisplayComponent implements OnInit {

  @Input()
  channelInfo: ChannelModel[];

  constructor() { }

  ngOnInit() {
  }

}
