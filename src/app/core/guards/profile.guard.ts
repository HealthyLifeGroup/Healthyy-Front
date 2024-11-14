import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserProfileService } from '../services/user-profile.service';

export const profileGuard: CanActivateFn = (route, state) => {
  const profileService = inject(UserProfileService);
  const router = inject(Router);

  if(profileService.existsProfile()){
    router.navigate(['/customer/home']);
    return false;
  }else{
    return true;
  }

};
