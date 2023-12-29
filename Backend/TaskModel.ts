import { Schema, Document, model } from "mongoose";

interface iTask{
    task: {};
}

interface iTaskData extends iTask, Document {}

const TaskModel = new Schema(
    {
        Task:{
            type: {},
        },
   
    },
    {timestamps: true}
);

export default model<iTaskData>("Tasks", TaskModel);