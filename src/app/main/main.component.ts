import { Component, OnInit } from '@angular/core';
import {MatCardHarness} from '@angular/material/card/testing';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class MainComponent implements OnInit {
constructor() {

 }
  ngOnInit(): void {

  }

}
/**
 * @title Card with multiple sections
 */
export class CardFancyExample { }


