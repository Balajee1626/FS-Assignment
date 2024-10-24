// product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null = null;
  product: any = {};
  currentRating: number = 0;
  newComment: string = '';
  comments: any[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.getProductDetails(this.productId);
    }
  }

  // Fetch product details by ID
  getProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe(
      (response: any) => {
        this.product = response;
        this.comments = this.product.comments || [];
      },
      (error: any) => {
        this.errorMessage = 'Error fetching product details.';
      }
    );
  }

  // Submit a star rating
  submitRating(): void {
    if (this.currentRating > 0 && this.productId) {
      this.productService.addRating(this.productId, this.currentRating).subscribe(
        () => {
          alert('Rating submitted successfully');
          this.currentRating = 0; // Reset rating after submission
        },
        (error: any) => {
          this.errorMessage = 'Failed to submit rating.';
        }
      );
    }
  }

  // Submit a comment
  submitComment(): void {
    if (this.newComment && this.productId) {
      this.productService.addComment(this.productId, this.newComment).subscribe(
        () => {
          alert('Comment submitted successfully');
          this.comments.push({ text: this.newComment, date: new Date() });
          this.newComment = ''; // Clear the comment field after submission
        },
        (error: any) => {
          this.errorMessage = 'Failed to submit comment.';
        }
      );
    }
  }
}
