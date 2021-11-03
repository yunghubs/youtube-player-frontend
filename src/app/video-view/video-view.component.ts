import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent  {

  @Input('parentData') public videoId: any;
  

  }


