import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  constructor() { }

  book = {
    "quotes": [
      {
        "quote": "Either write something worth reading or do something worth writing.", "author": "Benjamin Franklin"
      },
      {
        "quote": "Nothing is impossible, the word itself says, “I’m possible!”", "author": "–Audrey Hepburn"
      },
      {
        "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"
      },
      {
        "quote": "If you can dream it, you can achieve it.", "author": "Zig Ziglar"
      }
    ]
  }

}
