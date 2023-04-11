import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable, from, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { FileUpload } from './file-upload';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    if (!fileUpload.file) {
      throw new Error('File is null');
    }
  
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
  
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file?.name || '';
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
  
    return uploadTask.percentageChanges();
  }
  
  

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }
  
  async getFile(key: string): Promise<FileUpload> {
    const itemRef = this.storage.ref(`${this.basePath}/${key}`);
    const url = await itemRef.getDownloadURL().toPromise();
    const metadata = await itemRef.getMetadata().toPromise();
    const fileUpload: FileUpload = {
      key: key,
      name: metadata.name || '',
      url: url,
      file: metadata.contentType ? new File([], metadata.name || '') : null,
      type: metadata.contentType || ''
    };
    return fileUpload;
  }
  
  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}