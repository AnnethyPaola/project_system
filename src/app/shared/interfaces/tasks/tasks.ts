import { TasksLevel } from "../../enums/tasks/tasks-level.enum";
import { TasksStatus } from "../../enums/tasks/tasks-status.enum";
import { Base } from "../base";

export interface Tasks extends Base {
    code:string,
    title: string;
    description: string;
    score: number;
    status: TasksStatus;
    level: TasksLevel;
}
