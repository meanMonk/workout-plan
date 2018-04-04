import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Router} from '@angular/router';

@Injectable()
export class FormService {

  private workoutCollectionRef: AngularFirestoreCollection<any>;
  private sessionCollectionRef: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore,
              private router: Router) {
  }

  saveWorkoutPlan(workoutPlanData) {
    this.workoutCollectionRef = this._afs.collection('Workout');
    this.sessionCollectionRef = this._afs.collection('Session');

    const sessionPlan = {};
    let workouts;
    for (const i in workoutPlanData) {
      if (i === 'sessions') {
        workouts = workoutPlanData[i];
      } else {
        sessionPlan[i] = workoutPlanData [i];
      }
    }
    const sessionId = sessionPlan['name'].split(' ').join('');
    this.sessionCollectionRef
        .doc(sessionId)
        .set(sessionPlan)
        .then((res) => {
          this.router.navigate(['/success']);
          return true;
        })
        .catch((error) => {
          console.log('error occurred', error);
        })
        .then((res) => {
            if (res) {
              workouts.forEach((workout) => {
                              workout['session'] = this._afs.doc(`Session/${sessionId}`).ref;
                              return this.workoutCollectionRef
                                  .doc(sessionId + workout['offset'])
                                  .set(workout)
                                  .then(workoutDone => workoutDone);
                        });
            }
        });
  }

}
