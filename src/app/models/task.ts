export class Task {
    TaskId: number;
    ProjectId: number;
    TaskName: string;
    Priority: number;
    ParentTaskId: number;
    StartDate: Date;
    EndDate: Date;
    Status: string;
    isEnded: boolean;
}
