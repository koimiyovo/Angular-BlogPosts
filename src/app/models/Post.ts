export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(_title: string, _content: string) {
        this.title = _title;
        this.content = _content;
        this.loveIts = 0;
        this.created_at = new Date();
    }
}
