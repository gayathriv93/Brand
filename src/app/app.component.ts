import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './Popups/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'brandyuva';
  Show: boolean = false; // hidden by default
  showCookieBar = true
  // cookie : any
  constructor(public dialog: MatDialog) {}

  toggleShow() {

    this.Show = !this.Show;

  }
  accepted() {
    localStorage.setItem('cookie', '1');
  }

  openDialog():void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '40%',
    });

  }



ngOnInit() {
  const cookiedata = localStorage.getItem('cookie');
  console.log(cookiedata);
  if (cookiedata == '1') {
    this.showCookieBar = false;
  }
}
}

