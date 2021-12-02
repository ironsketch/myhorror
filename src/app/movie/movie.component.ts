import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { Helper } from '../services/helper.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    @Input() movie: MovieModel = new MovieModel();

    constructor() { 
    }
    
    ngOnInit(): void {
    }
    

}
