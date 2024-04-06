import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snackBar: MatSnackBar) { }


  openSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    })
  }
}
