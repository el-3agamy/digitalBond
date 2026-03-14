import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { FormStateService } from '../services/form-state.service';

export const formGuardGuard: CanActivateFn = (route, state) => {
  const formService = inject(FormStateService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  const isBrowser = isPlatformBrowser(platformId);
  const isServer = isPlatformServer(platformId);
  
  console.log(`[FormGuard] Path: ${state.url} | Submitted: ${formService.getSubmitted()} | Env: ${isServer ? 'SERVER' : 'BROWSER'}`);

  if (formService.getSubmitted()) {
    return true; 
  } else {
    console.warn(`[FormGuard] Non-submitted access. Redirecting from ${state.url} to /`);
    return router.parseUrl('/'); 
  }
};
