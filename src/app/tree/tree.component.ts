import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from '../branch.model';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [BranchService]
})
export class TreeComponent implements OnInit {
  branches: Branch[];

  constructor(private router: Router, private branchService: BranchService) { }

  ngOnInit() {
    this.branches = this.branchService.getBranches();
  }

  goToDetailPage(clickedBranch: Branch) {
   this.router.navigate(['branches', clickedBranch.id]);
 }

}
