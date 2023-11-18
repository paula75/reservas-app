import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/api/empresas.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  empresas : any[] = [];

  constructor(
    private empresaService: EmpresasService
  ) { }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas() {
    this.empresas = this.empresaService.getEmpresas();
  }

}
