import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {FormService} from '../service/form.service';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.scss']
})
export class WorkoutPlanComponent implements OnInit {

    public workoutForm: FormGroup;

    workout = {
      goals: [
        { name: 'Dimagrimento',  selected: false, id: 0 },
        { name: 'tonificazione',  selected: false, id: 1 },
        { name: 'aumento mass',  selected: false, id: 2 }
      ]
    }

    constructor(private _fb: FormBuilder, private formService: FormService) { }

    ngOnInit() {
        this.workoutForm = this._fb.group({
            name: [''],
            trainer_name: [''],
            duration: [''],
            cover_link: [''],
            description: [''],
            difficulty: [''],
            goals: this.buildGoals(),
            tools: [''],
            page_link: [''],
            sessions: this._fb.array([])
        });
        this.addSession();
    }

    buildGoals(){
      const arr = this.workout.goals.map(skill => {
        return this._fb.control(skill.selected);
      });
      return this._fb.array(arr);
    }

    get goals() {
      return this.workoutForm.get('goals');
    }

    initSession() {
        return this._fb.group({
          offset: [''],
          title: [''],
          description: [''],
          duration: ['']
        });
    }

    addSession() {
        const control = <FormArray>this.workoutForm.controls['sessions'];
        const addrCtrl = this.initSession();
        control.push(addrCtrl);
    }

    removeSession(i: number) {
        const control = <FormArray>this.workoutForm.controls['addresses'];
        control.removeAt(i);
    }

    save(formValue: any) {
        const goals = [];
        formValue.goals.map((selected, i) => {
          if(selected) {
            goals.push(this.workout.goals[i].id);
          }
        });

        formValue.goals = goals;
        formValue.difficulty = +formValue.difficulty;
        this.formService.saveWorkoutPlan(formValue);
    }

}
