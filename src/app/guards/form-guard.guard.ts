import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormStateService } from '../services/form-state.service';

export const formGuardGuard: CanActivateFn = (route, state) => {
  const formService = inject(FormStateService);
  const router = inject(Router);

  if (formService.getSubmitted()) {
    return true; 
  } else {
    return router.parseUrl('/'); 
  }
};
