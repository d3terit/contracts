import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/public/services/authentication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
@Injectable()
export class ProfileEffects {
  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType('[Profile data] Load profile'),
      exhaustMap((action: any) =>
        from(
          this.authService.getUserData(
            action.authData.id,
            action.authData.token
          )
        ).pipe(
          map((data) => data.profile? ({
            type: '[Profile data] Loaded success',
            profile: {
              userId: data.id,
              email: data.email,
              name: data.profile['name'],
              avatar: data.profile['name'],
              verified: data.verified,
            },
          }): EMPTY),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}
}
