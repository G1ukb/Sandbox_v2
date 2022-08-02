import {Component, Input, OnInit} from '@angular/core';
import {CourseCardComponent} from "./course-card/course-card.component";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: CourseCardComponent[] = [{
    authors: [],
    creationDate: new Date(),
    description: "",
    duration: 0,
    title: "",
    buttonText: "Show course",
    iconName: "",
    isEditable: false,
    ngOnInit(): void {
    }
  }];

  // @Output()
  // public myOutput = new EventEmitter<MouseEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

  displayModal:boolean = false;
  displayStyle:string = "none";

  onPress() {
    this.displayStyle === "block" ? this.displayStyle = "none" : this.displayStyle = "block";
    this.displayModal = !this.displayModal;
  }

  modalChange($event: string) {
    this.onPress();
  }

  modalOutput($event: boolean) {
    alert("You press " + $event)
  }
}
