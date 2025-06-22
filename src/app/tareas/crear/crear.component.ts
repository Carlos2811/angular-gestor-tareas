import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaService } from '../tarea.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tareaService: TareaService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      completed: new FormControl(false)
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
  if (this.form.valid) {
    console.log(this.form.value); // revisa si completed aparece como true/false
    this.tareaService.crearTarea(this.form.value).subscribe(
      res => {
        console.log('Tarea creada:', res);
        this.router.navigate(['/tareas/index']);
      },
      err => console.error('Error al crear tarea:', err)
    );
  }
  }
}
