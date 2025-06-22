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
  form!: FormGroup; // Formulario reactivo para crear tarea
      
  /**
   * Constructor de la clase CrearComponent
   *
   * @param tareaService Servicio para manejar tareas
   * @param router Router para navegación
   */
  constructor(
    public tareaService: TareaService, // Servicio para manejar tareas
    private router: Router // Router para navegación
  ) { }
      
  /**
   * Método que se ejecuta al inicializar el componente
   *
   * @return void
   */
  ngOnInit(): void {
    this.form = new FormGroup({
    title: new FormControl('', [Validators.required]), // Campo de título requerido
      description: new FormControl('', Validators.required), // Campo de descripción requerido
      completed: new FormControl(false)
    });
  }
      
  /**
   * Getter para acceder a los controles del formulario
   *
   * @return {any} Controles del formulario
   */
  get f(){
    return this.form.controls;
  }

    
  /**
   * Método para enviar el formulario
   *
   * @return void
   */
  submit() {
  if (this.form.valid) {
    console.log(this.form.value); // revisa si completed aparece como true/false
    this.tareaService.crearTarea(this.form.value).subscribe(
      res => {
        console.log('Tarea creada:', res);
        this.router.navigate(['/tareas/index']); // Redirige a la lista de tareas después de crear una nueva
      },
      err => console.error('Error al crear tarea:', err)
    );
  }
  }
}
