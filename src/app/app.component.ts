import { Component, OnInit } from '@angular/core';
import { AssigmentData } from './assigment-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  module1: AssigmentData[] = [];
  module2: AssigmentData[] = [];
  module3: AssigmentData[] = [];
  module4: AssigmentData[] = [];
  module5: AssigmentData[] = [];
  module6: AssigmentData[] = [];
  pre = '';
  baseHref = 'https://github.com/JavascriptBootcamp/group4/tree/master/modules/';

  modules = [
    {
      moduleNum: 1,
      subject: 'Basic javaScript',
      numAssigment: 33,
      module: this.module1,
      href: '01%20JavaScript%20Programming'
    },
    { moduleNum: 2,
      subject: 'Git',
      numAssigment: 9,
      module: this.module2 ,
      href: '02%20Git'
    },
    {
      moduleNum: 3,
      subject: 'Front End Basic',
      numAssigment: 59,
      module: this.module3,
      href: '03%20Front%20End%20Development'
    },
    {
      moduleNum: 4,
      subject: 'Advanced Javascript',
      numAssigment: 9,
      module: this.module4,
      href: '04%20Advanced%20Javascript'
    },
    {
      moduleNum: 5,
      subject: 'ES6 and Typescript',
      numAssigment: 6,
      module: this.module5,
      href: '05%20ES6%20and%20Typescript'
    },
    { moduleNum: 6,
      subject: 'Angular',
      numAssigment: 19,
      module: this.module6 ,
      href: '06%20Angular'}
  ];

  constructor() {}

  ngOnInit() {

    for (let module of this.modules) {
      for (let i = 1; i <= module.numAssigment; i++) {
        if ( module.moduleNum === 3 && i < 10 ) {
          this.pre = '0';
        } else {
          this.pre = '';
        }

        module.module.push(
          new AssigmentData(
            i,
            `subject ${i}`,
            `${this.baseHref}${module.href}/Assignments/${this.pre}${i}`,
            null
          )
        );
      }
    }

  }
}
