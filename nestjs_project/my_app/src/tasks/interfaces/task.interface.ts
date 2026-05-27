export interface Task{
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  projectId: string;
  assignedTo?: number; // user id
}