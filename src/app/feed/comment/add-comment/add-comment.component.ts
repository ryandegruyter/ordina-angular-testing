import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../json-placeholder-api/comment/comment';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

    @Output()
    public onAddComment = new EventEmitter<Comment>();

    public comment = new Comment();

    public onSubmit(): void {
        this.onAddComment.emit(this.comment);
    }

}
