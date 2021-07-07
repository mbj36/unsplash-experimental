import styled from "styled-components";

export const AppStyles = styled.div`
    margin: auto;
    width: 70%;
    height: 100%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const SearchFilter = styled.div`
    width: 100%;
    display: flex;
    margin-top: 4%;
    margin-bottom: 2%;
    align-items: baseline;
`;

export const Line = styled.hr``;
