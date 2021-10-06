import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import "./ColapseWrapper.css"

const ColapseWrapper = ({ classes, title, children, isColapsed = false, setIsColapsed }) => {
    return (
        <div className={`${classes} colapse-wrapper`}>
            <div
                className="colapse-wrapper-header"
                onClick={setIsColapsed}
            >
                <h4 className="colapse-wrapper-title">{title}</h4>
                {
                    isColapsed
                        ? <IoIosArrowUp className="colapse-wrapper-icon" />
                        : <IoIosArrowDown className="colapse-wrapper-icon" />
                }
            </div>
            {
                isColapsed &&
                <div className="colapse-wrapper-body">
                    {children}
                </div>
            }
        </div>
    )
}

export { ColapseWrapper }