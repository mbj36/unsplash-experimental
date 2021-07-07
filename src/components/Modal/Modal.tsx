import React from "react";
import crossIcon from "./cross.svg";
import {
    ModalStyles,
    OverlayStyles,
    ModalHeader,
    ModalBody,
    Image,
    CrossSvg,
} from "./Modal.styles";

function Modal({ selected, isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <>
            <OverlayStyles />
            <ModalStyles>
                <ModalHeader>
                    <div></div>
                    <CrossSvg
                        height="15"
                        src={crossIcon}
                        alt="close"
                        onClick={onClose}
                    />
                </ModalHeader>

                <ModalBody>
                    <Image
                        src={selected.urls.full}
                        alt={selected.alt_description}
                    />
                </ModalBody>
            </ModalStyles>
        </>
    );
}

export default Modal;
