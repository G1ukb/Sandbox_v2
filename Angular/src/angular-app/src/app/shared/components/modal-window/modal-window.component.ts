import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalWindowComponent implements OnInit {

  @Input() title: string = "";
  @Input() message: string = "";
  @Input() okButtonText: string = "";
  @Input() cancelButtonText: string = "";
  @Input() displayStyle = "none";

  constructor() {}

  @Output() modalWindowOutput = new EventEmitter<boolean>();
  @Output() displayStyleEmitter = new EventEmitter<string>();
  closePopup(buttonClicked: boolean) {
    this.displayStyle = "none";
    this.displayStyleEmitter.emit("none");
    this.modalWindowOutput.emit(buttonClicked);
  }

  ngOnInit(): void {
  }

}
