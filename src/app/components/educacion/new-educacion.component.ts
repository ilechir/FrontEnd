import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  nombreE: string;
  descripcionE: string;

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE)
    this.sEducacion.save(educacion).subscribe({next: (data) => { alert('Educacion agregada correctamente'); this.router.navigate(['']);
   },
    error: (err) => { alert('Fallo en agregar la educacion'); this.router.navigate(['']);
     }
    });
  }

}
