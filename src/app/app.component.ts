import { Component } from '@angular/core';
import { MovieModel } from './models/movie.model';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'My Horror';
    movies: MovieModel[] = [];
    filteredMovies: MovieModel[] = [];
    
    constructor(private dataService: DataService) {
        this.dataService.loadMovies().subscribe(response => {
            this.movies = response;
            console.log(this.movies);
        });
    }

    showMovies(name: string): void {
        this.filteredMovies = [];
        this.filteredMovies = this.movies.filter(movie => movie.genre?.includes(name));
    }

    filteredMoviesIsEmpty(): boolean {
        return this.filteredMovies.length === 0;
    }
}
