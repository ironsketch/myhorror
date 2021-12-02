import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private httpClient: HttpClient) {
    }

    loadMovies(): Observable<MovieModel[]> {
        const allMovies: MovieModel[] = [];
        return this.httpClient.get('assets/files/movies.txt', {responseType: 'text'}).pipe(map((data) => {
            const movies = data.split('=====================');
            movies.forEach(movie => {
                const newMovie = new MovieModel();
                const movieInfo = movie.split('\n');
                movieInfo.forEach(info => {
                    const eachData = info.split(':');
                    const name = eachData[0];
                    const data = eachData[1];
                    this.buildMovie(newMovie, name, data);
                });
                allMovies.push(newMovie);
            });
            return allMovies;

        }));
    }

    buildMovie(movie: MovieModel, name: string, data: string): void {
        switch(name) {
            case 'title': {
                movie.title = data.replace('\r', '');
                break;
            } 
            case 'description': {
                movie.description = data.replace('\r', '');
                break;
            } 
            case 'genre': {
                movie.genre = data.replace('\r', '').split(',');
                break;
            } 
            case 'stars': {
                const star = parseInt(data.replace('\r', ''));
                for( let i = 0; i < star; i++) {
                    movie.stars.push(i);
                }
                break;
            }
            case 'pros': {
                movie.pros = data.replace('\r', '');
                break;
            }
            case 'cons': {
                movie.cons = data.replace('\r', '');
                break;
            }
            case 'poster': {
                movie.poster = data.replace('\r', '');
                break;
            }
        }
    }
}
