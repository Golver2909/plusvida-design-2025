import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './modules/main/main-module';
import { RecipeModule } from './modules/recipe/recipe-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainModule, RecipeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plusvida-design-2.0');
}
