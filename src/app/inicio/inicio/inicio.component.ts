import { Component, OnInit } from '@angular/core';
import { EspanolService } from 'src/app/services/espanol.service';
import { InglesService } from 'src/app/services/ingles.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public palabrasEsp: any = [];
  public palabrasEng: any = [];

  constructor(private espanolService: EspanolService,
    private inglesService: InglesService) { }

  ngOnInit(): void {
    this.espanolService.cargarPalabrasEsp()
        .subscribe( resp => {

          console.log(resp);
          this.palabrasEsp = resp;

        })

    this.inglesService.cargarPalabrasEng()
    .subscribe( resp => {
      
      console.log(resp);
      this.palabrasEng = resp

    })    
  }

}
