import { Component, OnInit, Input } from '@angular/core';
import { AssigmentData } from '../assigment-data';


@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent implements OnInit {

@Input() modules;
@Input() subject: string;

  constructor() { }

  ngOnInit() {


  }


}
