export class List {
    public title: string;
    public description: string;
    public tasks: string[];
    constructor(title: string, description: string, tasks: string[]) {
        this.title = title;
        this.description = description;
        this.tasks = tasks;
    }
}
