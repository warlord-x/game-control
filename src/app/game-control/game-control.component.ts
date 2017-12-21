import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter = 0;
  intevalVar;
  @Output() gameStartEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onStartClick() {

/*    setTimeout((counter) => {
      counter  = 0;
      console.log(counter);
      counter = counter + 1;
      this.gameStartEvent.emit(counter);
    }, 1000);*/

    this.intevalVar = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      this.gameStartEvent.emit(this.counter);
    }, 1000 );
  }

  onStopClick() {
    clearInterval(this.intevalVar);
  }

}
