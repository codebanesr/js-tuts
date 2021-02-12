import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  headingText = "Mahatma";
  subHeading = "Happiness is when what you think, what you say, and what you do are in harmony";
  toggle = true;
  status = 'Green';

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Green' : 'Red';
  }
}
