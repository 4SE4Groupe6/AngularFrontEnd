import { Component, OnInit } from '@angular/core';
import { invitation } from '../model/invitation.model';
import { ActivatedRoute,Router } from '@angular/router';
import { InvitationService } from '../services/invitation.service';

@Component({
  selector: 'app-update-invitation',
  templateUrl: './update-invitation.component.html',
  styles: [
  ]
})
export class UpdateInvitationComponent implements OnInit {
  currentInvitation = new invitation();
  invitationId:any;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private invitationService: InvitationService,
              private activatedRute: ActivatedRoute) { }

  ngOnInit(): void {
    this.invitationService.consulterInvitatio(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{this.currentInvitation = prod; })
  }


  updateInvitation() {
    this.invitationService.updateInvitation(this.currentInvitation).subscribe (() => {
        this.router.navigate(['invitations']);
      },(error) => { alert("Problème lors de la modification !");

    });

  }

}
