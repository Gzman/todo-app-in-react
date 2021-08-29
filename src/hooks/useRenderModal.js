
import { useState } from "react"

const useRenderModal = () => {
    const [shouldRenderModal, setShouldRenderModal] = useState(false);

    const renderModal = () => {
        setShouldRenderModal(true);
    }

    const closeModal = () => {
        setShouldRenderModal(false);
    }

    const toggleRenderModal = () => {
        setShouldRenderModal(render => !render);
    }

    return {
        shouldRenderModal,
        renderModal,
        closeModal,
        toggleRenderModal,
    }
}

export { useRenderModal }