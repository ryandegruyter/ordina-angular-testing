import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

    @Output()
    public onAddComment = new EventEmitter<Comment>();

    public onSubmit(commentForm: NgForm): void {
        this.onAddComment.emit(commentForm.value);
        commentForm.resetForm();
    }

}
