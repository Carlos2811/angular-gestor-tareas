import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaService } from '../tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../tarea';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  id!: number;
  tarea!: Tarea;

  // ✅ Inicializa el formulario con valores vacíos
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    completed: new FormControl(false)
  });
// 
// * Constructor de la clase EditarComponent
// /**
   
  constructor(
    public tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;

    if (!this.id) {
      console.error('ID no encontrado en la ruta.');
      this.router.navigate(['/tareas/index']);
      return;
    }
    // * Método para obtener los detalles de la tarea por ID
    // Llama al servicio para obtener la tarea por ID
    this.tareaService.find(this.id).subscribe({
      next: (data: Tarea) => {
        this.tarea = data;
        this.form = new FormGroup({
          title: new FormControl(data.title, Validators.required),
          description: new FormControl(data.description, Validators.required),
          completed: new FormControl(data.completed)
        });
      },
      error: (err) => {
        console.error('Error al obtener la tarea:', err);
        this.router.navigate(['/tareas/index']);
      }
    });
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) return;

    const tareaActualizada: Tarea = {
      ...this.tarea,
      ...this.form.value,
      id: this.id
    };
     // * Actualiza la tarea con los valores del formulario
    // Llama al servicio para actualizar la tarea
    this.tareaService.editarTarea(tareaActualizada).subscribe({
      next: () => {
        console.log('Tarea actualizada exitosamente!');
        this.router.navigateByUrl('/tareas/index');
      },
      error: (err) => {
        console.error('Error al actualizar la tarea:', err);
      }
    });
  }
}