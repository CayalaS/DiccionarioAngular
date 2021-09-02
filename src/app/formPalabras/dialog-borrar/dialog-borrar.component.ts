import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-borrar',
  templateUrl: './dialog-borrar.component.html',
  styleUrls: ['./dialog-borrar.component.scss']
})
export class DialogBorrarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
