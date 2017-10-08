import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../json-placeholder-api/post/post';
import { CommentService } from '../../json-placeholder-api/comment/comment.service';
import { Comment } from '../../json-placeholder-api/comment/comment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input()
    public post: Post;
    public showComments: boolean;
    public comments: Observable<Comment[]>;

    constructor(private commentService: CommentService) {
    }

    ngOnInit() {
        if (this.post) {
            this.comments = this.commentService.getCommentsForPost(this.post.id);
        }
    }

    public toggleComments(): void {
        this.showComments = !this.showComments;
    }

    public onAddComment(newComment: Comment): void {
        newComment.postId = this.post.id;
        this.comments = this.commentService.addCommentForPost(newComment, this.post.id)
            .mergeMap<Comment, Comment[]>(() => {
                return this.commentService.getCommentsForPost(this.post.id);
            });
    }
}
