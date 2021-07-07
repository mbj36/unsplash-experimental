import styled from "styled-components";

export const ModalStyles = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    padding: 30px;
    z-index: 1000;
    height: 800px;
    width: 1000px;
    @media (max-width: 768px) {
        width: 300px;
        height: auto;
    }
`;

export const OverlayStyles = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalBody = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    height: 800px;
    width: 1000px;
    @media (max-width: 768px) {
        height: 200px;
    }
`;

export const CrossSvg = styled.img`
    cursor: pointer;
`;
