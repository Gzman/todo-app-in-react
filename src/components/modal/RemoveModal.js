import { Modal } from "./Modal";
import "./RemoveModal.css"

const RemoveModal = ({ itemName, remove, shouldRenderModal, closeModal }) => {
    return (
        <Modal title={`Remove ${itemName}?`} render={shouldRenderModal} close={closeModal} >
            <div className="remove-modal">
                <button className="remove-modal-ok-btn" onClick={remove}>Ok</button>
                <button className="remove-modal-cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
        </Modal>
    )
}

export { RemoveModal }