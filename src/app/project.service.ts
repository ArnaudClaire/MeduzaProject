import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {}
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  auth = getAuth();

  async getProjects() {
    try {
      const projectsCol = collection(this.db, 'project');
      const projectSnapshot = await getDocs(projectsCol);
      const projectList = projectSnapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return {id,...data } as Project;
      });
      return projectList;
    }
    catch (error) {
      console.log(error);
    }
    return [];
  }

  async addNewProject(data : any) {
    const projectsCol = collection(this.db, 'project');
    await addDoc(projectsCol, data).catch((error) => {console.log(error)});
  }

  async deleteProject(id : string) {
    const projectsCol = collection(this.db, 'project');
    await deleteDoc(doc(projectsCol, id)).catch((error) => {console.log(error)});
  }

  async updateProject(id : string, data : any) {
    const projectsCol = collection(this.db, 'project');
    await updateDoc(doc(projectsCol, id), data).catch((error) => {console.log(error)});
  }
}
