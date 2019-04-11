import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant';

@Injectable()
export class EtudiantService {

  constructor(private http:HttpClient) {}

  getAllEtudiants(){
    return this.http.get('http://localhost:8080/05_a_SpringMVCRest_SpringIoC_Hibernate/rest/etudiant/liste');
  }

  addEtudiant(e:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>('http://localhost:8080/05_a_SpringMVCRest_SpringIoC_Hibernate/rest/etudiant/add', e);
  }

  updateEtudiant(e:Etudiant):Observable<Etudiant>{
    return this.http.put<Etudiant>('http://localhost:8080/05_a_SpringMVCRest_SpringIoC_Hibernate/rest/etudiant/update', e);
  }

  deleteEtudiant(id:number):Observable<Etudiant>{
    return this.http.delete<Etudiant>(`http://localhost:8080/05_a_SpringMVCRest_SpringIoC_Hibernate/rest/etudiant/delete/${id}`);
  }

  findEtudiant(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>(`http://localhost:8080/05_a_SpringMVCRest_SpringIoC_Hibernate/rest/etudiant/search?id=${id}`);
  }
}
