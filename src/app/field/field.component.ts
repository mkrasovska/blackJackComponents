import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  host: { class: 'game-field' }
})

export class FieldComponent implements OnInit {
  @Output() public cardTaken: EventEmitter<void> = new EventEmitter();
  @Output() public gameStopped: EventEmitter<void> = new EventEmitter();
  @Input() public gameInProgress: boolean;
  @Input() public cardsPlayerOne: TCard[];
  @Input() public cardsPlayerTwo: TCard[];

  public takeCard() {
    this.cardTaken.emit();
  }

  public stopGame() {
    this.gameStopped.emit();
  }

  ngOnInit() {}
}
