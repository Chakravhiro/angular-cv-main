import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-period',
  templateUrl: './life-period.component.html',
  styleUrls: ['./life-period.component.css']
})
export class LifePeriodComponent implements OnInit {

  @Input() dateText:string = "";
  @Input() place: string = "";
  @Input() position: string = "";
  @Input() Company: String= "";
  @Input() Company_url: String="";

  constructor() { }

  ngOnInit(): void {
  }

}
