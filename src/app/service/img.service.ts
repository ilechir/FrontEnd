import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, nombre: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ nombre)
    uploadBytes(imgRef, file).then(response => (this.getImg())).catch(error => console.log(error))
  }

  getImg(){
    const imgRef = ref(this.storage, 'imagen')
    list(imgRef)
    .then(async response => { for(let item of response.items){ this.url = await getDownloadURL(item);
    console.log("La URL es  " + this.url); } } )
    .catch(error => console.log(error))
  }

}
