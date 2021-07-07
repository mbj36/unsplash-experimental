import styled from "styled-components";

export const SearchInput = styled.input`
    height: 20px;
    font-size: 17px;
    margin-bottom: 1%;
    padding: 6px;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #d6d6d6;
    font-family: Poppins;
`;

export const SearchDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 2%;
    margin-bottom: 2%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    height: auto;
    background-color: #ffe72a;
    color: #1e5af6;
    padding: 5px;
    font-size: 16px;
    border-radius: 8px;
    align-items: center;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    font-weight: 600;
    outline: none;
    border: none;
    box-sizing: border-box;
    justify-content: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    font-family: Poppins;
`;

export const Filters = styled.div`
    height: auto;
    background: #ffe72a;
    color: #1e5af6;
    font-family: Poppins;
    font-weight: 600;
    padding: 20px;
    border-radius: 10px;
    margin-top: 1%;
    margin-bottom: 1%;
`;

export const Stack = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const VerticalStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: middle;
`;

export const Heading = styled.h3`
    font-size: 16px;
`;

export const RadioInput = styled.input``;

export const Div = styled.div`
    margin: 5px;

    label {
        margin-left: 5px;
    }
`;

export const Label = styled.label``;
