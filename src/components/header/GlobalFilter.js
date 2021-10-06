import React from "react"
import { useHistory } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import { FILTER } from "../../constants/filter"
import { useProjectMenuContext } from "../../context/projectMenuContext"
import "./Header.css"

const GlobalFilter = ({ }) => {
    const history = useHistory();
    const { setIsProjectMenuOpen } = useProjectMenuContext();
    return (
        <div className="global-filter">
            <input
                className="global-filter-text"
                type="text"
                placeholder="Search Tasks"
                onChange={(e) => {
                    history.replace(`/${ROUTES.FILTER}/${FILTER.SEARCH.key}/?${FILTER.SEARCH.queryParam}=${e.target.value}`);
                    setIsProjectMenuOpen(false);
                }}
            />
            <div className="global-filter-actions">
                <button className="global-filter-complete-btn" onClick={() => {
                    history.replace(`/${ROUTES.FILTER}/${FILTER.COMPLETED.key}`)
                    setIsProjectMenuOpen(false);
                }}>
                    Complete
                </button>
                <button className="global-filter-critical-btn" onClick={() => {
                    history.replace(`/${ROUTES.FILTER}/${FILTER.CRITICAL.key}`)
                    setIsProjectMenuOpen(false);
                }}>
                    Critical
                </button>
                <button className="global-filter-expired-btn" onClick={() => {
                    history.replace(`/${ROUTES.FILTER}/${FILTER.EXPIRED.key}`);
                    setIsProjectMenuOpen(false);
                }}>
                    Expired
                </button>
                <button className="global-filter-all-btn" onClick={() => {
                    history.replace(`/${ROUTES.FILTER}/${FILTER.ALL.key}`);
                    setIsProjectMenuOpen(false);
                }}>
                    All
                </button>
            </div>
        </div>
    )
}

export { GlobalFilter }