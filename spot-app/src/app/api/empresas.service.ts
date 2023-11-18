import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor() { }


  getEmpresas(): any[] {
    return [
      {
        "id": 1,
        "name": "Carlita",
        "icon": "assets/images/salon.png",
        "sucursal": "Santiago Centro"
      },
      {
        "id": 2,
        "name": "Manito de Gato",
        "icon": "assets/images/manicure.png",
        "sucursal": "Santiago Centro"
      },
      {
        "id": 3,
        "name": "Chascon",
        "icon": "assets/images/beauty.png",
        "sucursal": "Santiago Centro"
      }
      ]
  }

}
