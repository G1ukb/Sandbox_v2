import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() title: string = "Title";
  @Input() description: string = "description";
  @Input() creationDate: Date = new Date();
  @Input() duration: number = 0;
  @Input() authors: string[] = ["Test author"];

  @Input() buttonText: string = "";
  @Input() iconName: string = "";
  @Input() isEditable: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

}

@Pipe({
  name: 'timePipe'
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    let hours: number = Math.floor(value / 60);
    let minutes: number = Math.floor(value % 60);

    return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ' hours';
  }
}
