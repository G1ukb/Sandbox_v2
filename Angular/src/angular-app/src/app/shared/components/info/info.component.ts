import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() title:string = "Your list is empty";
  @Input() infoText:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
