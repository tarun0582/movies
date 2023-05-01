import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http: HttpClient = inject(HttpClient);
  params:any
  params2:any
  details:any={
    page:'1'
  }
  constructor() { }
  getMovies(){
    this.params = new HttpParams()
    .set('api_key', '7064b20a5bfe960aec0dd3ceaaaf82c9').append('page', '2')
      return this.http.get('https://api.themoviedb.org/3/movie/now_playing',{params:this.params});
    
  }
}
