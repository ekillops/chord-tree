import { Component, OnInit } from '@angular/core';
import { TreeComponent } from '../tree/tree.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router) { }

  goToBranch(branchId: number): void {
    this.router.navigate(['branches', branchId]);
  }

}
