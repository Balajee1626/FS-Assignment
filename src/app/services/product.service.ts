// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) { }

  // Method to get product details by ID
  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }

  addRating(productId: string, rating: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${productId}/rating`, { rating });
  }

  addComment(productId: string, comment: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${productId}/comment`, { text: comment });
  }
}
