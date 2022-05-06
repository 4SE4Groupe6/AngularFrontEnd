import { Injectable } from '@angular/core';
import { invitation } from '../model/invitation.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  apiURL: string = 'http://localhost:8091/SpringSecurity/invitation/api' ;



  invitations: invitation[];
Inv:invitation;


  constructor(private http : HttpClient) {

  }


  listeInvitation(): Observable<invitation[]>{
    return this.http.get<invitation[]>(this.apiURL);
  }


  ajouterInvitation( prod: invitation):Observable<invitation>{
    return this.http.post<invitation>(this.apiURL, prod, httpOptions);
  }


  supprimerInvitation(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterInvitatio(id: number): Observable<invitation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<invitation>(url);
  }



  updateInvitation(prod :invitation) : Observable<invitation>
  {
    return this.http.put<invitation>(this.apiURL+`/${prod.invitationId}`, prod, httpOptions);
  }




}
