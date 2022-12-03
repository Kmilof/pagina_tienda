import { Injectable } from '@angular/core';
import { deleteObject, getDownloadURL, getStorage, ref, UploadResult, uploadString } from 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private response:UploadResult;

  private storage=getStorage();

  constructor() { }

  async uploadImage(name:string,image:any){
    try{
      let referenceImage=ref(this.storage,'Products/'+name);
      this.response=await uploadString(referenceImage,image,'data_url')
      .then(resp=>{
        return resp
      })
      return this.response
    }
    catch(error){
      console.log(error);
      return this.response
    }
  }
  
  obtainImage(response:UploadResult){
    return getDownloadURL(response.ref);
  }

  deleteImage(image:string){
    let reference=ref(this.storage,image);
    deleteObject(reference).then(answer=>{
      alert('Imagen Eliminada');
    })
    .catch(error=>{
      alert('Error: '+error);
    })
  }
  



}
