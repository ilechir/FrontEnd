import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadIamge($event: any, nombre: string){
    const file = $event.target.files[0]
    const imgREF = ref(this.storage, `imagen/`+ nombre)
    uploadBytes(imgREF, file).then(response => (this.getImg())).catch(error => console.log(error))
  }

  getImg(){
    const imgREF = ref(this.storage, 'images')
    list(imgREF)
    .then(async response => { for(let item of response.items){ this.url = await getDownloadURL(item);
    console.log("La URL es  " + this.url); } } )
    .catch(error => console.log(error))
  }

}
