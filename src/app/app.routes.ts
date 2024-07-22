import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ProjectsComponent } from './_pages/projects/projects.component';
import { EducationComponent } from './_pages/education/education.component';
import { CalculatorComponent } from './_pages/calculator/calculator.component';
import { ContactUsComponent } from './_pages/contact-us/contact-us.component';
import { TodoListComponent } from './_pages/todo-list/todo-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'todo', component: TodoListComponent}
];
