import {Component} from '@angular/core';
import {CourseCardComponent} from "./features/courses/course-card/course-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  mockedCourseList: CourseCardComponent[] = [{
    authors: ["Vasiliy Dobkin", "Nicolas Kim"],
    creationDate: new Date("8/3/2021"),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    duration: 160,
    title: "JavaScript",
    buttonText: "Test1",
    iconName: "",
    isEditable: true,
    ngOnInit(): void {}
  },{
    title: "Angular",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: new Date("10/11/2020"),
    duration: 210,
    authors: ["Anna Sidorenko", "Valentina Larina"],
    buttonText: "Test1",
    iconName: "",
    isEditable: true,
    ngOnInit(): void {
    }
  }
  ];
}
