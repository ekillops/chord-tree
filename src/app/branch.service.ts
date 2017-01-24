import { Injectable } from '@angular/core';
import { Branch } from './branch.model';
import { BRANCHES } from './branches';

@Injectable()

export class BranchService {

  constructor() { }

  getBranches(): Branch[] {
    return BRANCHES;
  }

  getBranchById(targetId: number): Branch {
    for (let i = 0; i < BRANCHES.length; i++) {
      if (BRANCHES[i].id === targetId) {
        return BRANCHES[i];
      }
    }
  }

}
