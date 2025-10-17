import { Component, OnInit } from '@angular/core';
import { PostDesign, Poster } from '../poster';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})
export class Post implements OnInit {
  post: PostDesign[] = [];

  newPost: Partial<PostDesign> = {
    title: '',
    body: '',
    userId: 1
  }

  editPostId: number | null = null;
  editPostData: Partial<PostDesign> = { title: '', body: '' };

  constructor(private postService: Poster) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(data => {
      this.post = data;
    });
  }

  submitPost() {
    if (!this.newPost.title || !this.newPost.body) return;

    this.postService.addPost(this.newPost).subscribe(data => {
      this.post.unshift(data);
      this.newPost.title = '';
      this.newPost.body = '';
    });
  }

  startEdit(p: PostDesign) {
    this.editPostId = p.id;
    this.editPostData = { title: p.title, body: p.body };
  }

  cancelEdit() {
    this.editPostId = null;
    this.editPostData = { title: '', body: '' };
  }

  updatePost() {
    if (this.editPostId === null) return;

    const updatedPost: PostDesign = {
      id: this.editPostId,
      userId: 1,
      title: this.editPostData.title || '',
      body: this.editPostData.body || ''
    };

    this.postService.updatePost(updatedPost).subscribe(() => {
      const index = this.post.findIndex(p => p.id === this.editPostId);
      if (index > -1) this.post[index] = updatedPost;
      this.cancelEdit();
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.post = this.post.filter(p => p.id !== id);
    });
  }
}
