import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
