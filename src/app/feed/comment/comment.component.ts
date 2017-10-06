import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../json-placeholder-api/comment/comment.service';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../../json-placeholder-api/comment/comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input()
    private postId: number;
    public comments: Observable<Comment[]>;

    constructor(
        private commentService: CommentService
    ) { }

    ngOnInit() {
        this.comments = this.commentService.getCommentsForPost(this.postId);
    }

}
