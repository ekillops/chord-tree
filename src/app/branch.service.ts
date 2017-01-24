import { Injectable } from '@angular/core';
import { Branch } from './branch.model';
import { BRANCHES } from './branches';

@Injectable()

export class BranchService {

  constructor() { }

  getBranches(): Branch[] {
    return BRANCHES;
  }
  
}
