import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brandyuva';
  Show: boolean = false ; // hidden by default


  toggleShow() {
  
  this.Show = ! this.Show;
  
  }
}
