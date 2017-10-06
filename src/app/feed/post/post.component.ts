import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../json-placeholder-api/post/post';
import { CommentService } from '../../json-placeholder-api/comment/comment.service';
import { Comment } from '../../json-placeholder-api/comment/comment';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input()
    public post: Post;
    public showComments: boolean;

    constructor(
        private commentService: CommentService
    ) { }

    ngOnInit() { }

    public toggleComments(): void {
        this.showComments = !this.showComments;
    }

}
