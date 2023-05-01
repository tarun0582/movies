import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http: HttpClient = inject(HttpClient);
  constructor() { }
  getMovies(){
   
      return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=7064b20a5bfe960aec0dd3ceaaaf82c9&page=1&language=en-US&region=US');
    
  }
}
