import { Router } from "express";
import { addTaskToProject, addToProject, createProject, deleteOneProject, viewOneProject, viewProject } from "./Controller";

const router: Router = Router();

router.route("/create-project").post(createProject)
router.route("/view-project").get(viewProject);
router.route("view-one-project/:ProjectId").get(viewOneProject);
router.route("/delete-one-project/:ProjectId").delete(deleteOneProject)
router.route("/add-to-project/:ProjectId").patch(addToProject)
router.route("/add-task-to-project/:ProjectId").patch(addTaskToProject)

export default router;