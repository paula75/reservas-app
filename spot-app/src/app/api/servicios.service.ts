import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  getServicios(): any[] {
    return [
      {
        "id": 1,
        "name": "Peluqueria",
        "icon": "assets/images/salon.png"
      },
      {
        "id": 2,
        "name": "Manicure",
        "icon": "assets/images/manicure.png"
      },
      {
        "id": 3,
        "name": "Cuidados",
        "icon": "assets/images/beauty.png"
      },
      {
        "id": 4,
        "name": "Pedicure",
        "icon": "assets/images/pedicure.png"
      },
      ]
  }
  
  
  
}
