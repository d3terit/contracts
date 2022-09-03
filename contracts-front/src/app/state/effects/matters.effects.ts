import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ControlService } from 'src/app/modules/private/services/control.service';
@Injectable()
export class MatterEffects {
  loadMatters$ = createEffect((): any =>
  this.actions$.pipe(
    ofType('[Matters data] Load matters'),
    mergeMap((action: any) =>
      from(
        this.control.getMatters(
          action.userData.page,
          action.userData.perPage,
          action.userData.userId,
          "name"
        )
      ).pipe(
        map(
          (data) => ({
            type: '[Matters data] Loaded matters',
            matters: data,
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )
);
  loadMatter$ = createEffect((): any =>
    this.actions$.pipe(
      ofType('[Matters data] Load matter'),
      mergeMap((action: any) =>
        from(
          this.control.getMatter(
            action.id,
            action.userId
          )
        ).pipe(
          map(
            (data) => ({
              type: '[Matters data] Loaded matter',
              currentMatter: data.items[0],
            }),
            catchError(() => EMPTY)
          )
        )
      )
    )
  );
  createMatter$ = createEffect((): any =>
    this.actions$.pipe(
      ofType('[Matters data] Create matter'),
      mergeMap((action: any) =>
        from(
          this.control.createMatter(
            action.matter.name,
            action.matter.intensity,
            action.matter.hidden,
            action.matter.creator
          )
        ).pipe(
          map(
            (data) => ({
              type: '[Matters data] Created matter',
              matter: {
                id: data["id"],
                name: data['name'],
                intensity: data['intensity'],
                hidden: data['hidden'],
              },
            }),
            catchError(() => EMPTY)
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private control: ControlService) {}
}
