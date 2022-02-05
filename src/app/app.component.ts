import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'DIGITAL-CLOCK_ANGULAR';
  public sec: string = "0";
  public min: string = "0";
  public hrs: string = "0";
  public day: string = "0";

  ngOnInit(): void {
    setInterval(() => {
      this.tick();  
    }, 1000);
  }

  private tick() {
    const date = new Date();
    // this.title = date.toLocaleTimeString();
    this.sec = date.getSeconds()+"";
    this.min = date.getMinutes()+"";
    // console.log(this.min);
    this.hrs =  date.getHours()+"";
    this.day = date.getDay()+"";
  }
}
