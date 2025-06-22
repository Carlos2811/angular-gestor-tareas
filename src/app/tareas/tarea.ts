export interface Tarea {
  id?: number; // El ID puede ser opcional al crear una nueva tarea
  title: string;  // Título de la tarea 
  description: string;    // Descripción de la tarea
  completed: boolean;  // ✅ Añadido el campo completed para indicar si la tarea está completada        
} 
