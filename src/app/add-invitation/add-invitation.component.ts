import { Component, OnInit } from '@angular/core';
import {invitation} from '../model/invitation.model';
import {InvitationService} from '../services/invitation.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-invitation',
  templateUrl: './add-invitation.component.html',
  styleUrls: ['./add-invitation.component.css']
})
export class AddInvitationComponent implements OnInit {

 newInvitation = new invitation();
 message !:string;
  constructor(private invitationService : InvitationService ,
              private router :Router,
  ) { }




  addInvitation(){
    this.invitationService.ajouterInvitation(this.newInvitation).subscribe(invi => {
      console.log(invi);

    });

    this.router.navigate(['invitations']).then(() => {
      window.location.reload();
    });



  }

ngOnInit(): void {
    }
}


