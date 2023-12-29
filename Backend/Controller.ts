import { Request, Response } from "express";
import TaskModel from "./TaskModel";
import  {ObjectId}  from "mongodb";

export const createProject = async(req: Request, res: Response)=>{
try {
    const Project = await TaskModel.create({
        Task:{
            todo:{
                title: "todo",
                data: [],
            },

            Progress:{
                title: "todo",
                data: [],
            },
        },
    });

    return res.status(201).json({
        message: "Project Created",
        data: Project
    });
} catch (error) {
    return res.status(404).json({
        message: "Error"
    });
}
}

export const viewProject = async (req: Request, res:Response) =>{
try {
    const Project = await TaskModel.find();
    return res.status(200).json({
        message: "Project Found",
        data: Project
    })
} catch (error) {
    return res.status(404).json({
        message: "Error"
    });
}
}

export const viewOneProject = async(req: Request, res: Response)=>{
    try {
        const {ProjectId} = req.params
        const Project = await TaskModel.findById(ProjectId);

        return res.status(200).json({
            message: "One Project Found",
            data: Project
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error"
        });
    }
}

export const deleteOneProject = async (req:Request, res:Response)=>{
try {
    const {ProjectId} = req.params;
    const Project = await TaskModel.findByIdAndDelete(ProjectId);

    return res.status(200).json({
        message: "One Project Deleted",
        data: Project,
    });
} catch (error) {
    return res.status(404).json({
        message: "Error"
    })
}
};

export const addTaskToProject = async (req: Request, res: Response) =>{
    try {
        const {ProjectId} = req.params;
        const {title} = req.body

        const Project: any = await TaskModel.findById(ProjectId)

        const newProject = await TaskModel.findByIdAndUpdate(ProjectId, {
            task: {
                ...Project?.task,
                todo: {
                    ...Project?.task.todo,
                    data: [
                        ...Project?.task.todo.data,
                        {id: new ObjectId(), task: title },
                    ],
                },
            }
        },
        {new: true}
        );
        console.log(Project?.task.todo.data);
        console.log(Project?.task.todo);
        return res.status(200).json({
            message: "One Task Has Been Added",
            data: newProject,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error"
        })
    }
}

export  const addToProject = async (req: Request, res: Response)=>{
    try {
        const {ProjectId} = req.params;
        const { title } = req.body
        const Project: any = await TaskModel.findById(ProjectId)

        let file ={
            [title]:{
                id: title,
                data: [],
            },
        };
        const newProject = await TaskModel.findByIdAndUpdate(ProjectId, {
            task:{
                ...Project?.task,

                [title]:{
                    id: title,
                    data: [],
                },
            },
        },
        {new: true}
        );
        console.log(Project?.task);
        return res.status(200).json({
            messge: "One Project Added",
            data: newProject
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error"
        });
    }
}