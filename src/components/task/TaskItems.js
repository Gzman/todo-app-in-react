import React from "react"
import { TaskItem } from "../task/TaskItem"
import { taskSorting } from "../../buisnesslogic/sortTasks"

const TaskItems = ({ project, projects, editTask, removeTask, moveTask, sortKey }) => {
    const sortFunction = taskSorting[sortKey];
    return (
        <>
            {
                project
                    ?.tasks
                    .sort(sortFunction)
                    .map((task) =>
                        <TaskItem
                            key={task.id}
                            name={task.name}
                            description={task.description}
                            dueDate={task.dueDate}
                            priority={task.priority}
                            isComplete={task.isComplete}
                            editTask={(...args) => editTask(project.id, task.id, ...args, task.isComplete)}
                            removeTask={() => removeTask(project.id, task.id)}
                            moveTask={(destinationId) => moveTask(project.id, destinationId, task.id)}
                            projectId={project.id}
                            projectList={projects.map((project) => ({ id: project.id, name: project.name }))}
                        />
                    )
            }
        </>
    )
}

export { TaskItems }