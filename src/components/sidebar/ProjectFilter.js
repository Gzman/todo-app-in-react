import React from "react"
import { useHistory } from "react-router-dom"
import { ProjectItem } from "../project/ProjectItem"
import { ROUTES } from "../../constants/routes"
import { FILTER } from "../../constants/filter"
import { useProjectMenuContext } from "../../context/projectMenuContext"
import "./SideBar.css"

const ProjectFilter = ({ editProject }) => {
    const history = useHistory();
    const { setIsProjectMenuOpen } = useProjectMenuContext();
    return (
        <div className="project-filter">
            <ProjectItem
                id="inbox"
                name="Inbox"
                editProject={editProject}
            />
            <button className="project-filter-btn" onClick={() => {
                history.replace(`/${ROUTES.FILTER}/${FILTER.TODAY.key}`);
                setIsProjectMenuOpen(false);
            }}>
                Today
            </button>
            <button className="project-filter-btn" onClick={() => {
                history.replace(`/${ROUTES.FILTER}/${FILTER.THIS_WEEK.key}`);
                setIsProjectMenuOpen(false);
            }}>
                Week
            </button>
            <button className="project-filter-btn" onClick={() => {
                history.replace(`/${ROUTES.FILTER}/${FILTER.THIS_MONTH.key}`);
                setIsProjectMenuOpen(false);
            }}>
                Month
            </button>
        </div>
    )
}

export { ProjectFilter }