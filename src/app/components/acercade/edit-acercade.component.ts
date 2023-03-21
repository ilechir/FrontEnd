import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImgService } from 'src/app/service/img.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {

  personas: persona = null

  constructor(private personaService: PersonaService, private router: Router, private activatedRouter: ActivatedRoute, public imgService: ImgService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe({next: (data) => { this.personas = data; },
    error: (err) => { alert('Fallo al editar'); this.router.navigate(['']); }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personas.img = this.imgService.url
    this.personaService.update(id, this.personas).subscribe({next: (data) => {this.router.navigate(['']); },
    error: (err) => { alert('Error al modificar Acerda de '); this.router.navigate(['']); }
  })
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const nombre = "perfil_" + id;
    this.imgService.uploadImage($event, nombre)
  }


}
