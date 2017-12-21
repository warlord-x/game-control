import { Component } from '@angular/core';
import {OddComponent} from './odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  oddComponentList: number[] = [];

  listenGameStart(event: any) {
    console.log('listening to : ' + event);
    if ( 1 === event % 2 ) {
     this.oddComponentList.push(event);
    }
  }

}
