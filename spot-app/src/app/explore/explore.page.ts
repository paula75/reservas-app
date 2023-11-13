import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../api/servicios.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  servicios : any[] = [];

  constructor(
    private servicioService: ServiciosService
  ) { }

  ngOnInit() {
    this.getServicios();
  }
  
  getServicios() {
    this.servicios = this.servicioService.getServicios();

  }
}
