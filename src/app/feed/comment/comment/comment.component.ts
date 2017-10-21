import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Comment} from '../../../json-placeholder-api/comment/comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
    @Input()
    comment: Comment;

    @Output()
    onIconClick: EventEmitter<Event> = new EventEmitter();
}
