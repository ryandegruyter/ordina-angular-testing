import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../json-placeholder-api/comment/comment';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
    @Input()
    public comments: Comment[];

    @Output()
    public createComment = new EventEmitter<Comment>();

    public onAddComment(comment: Comment) {
        this.createComment.emit(comment);
    }
}
