import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledContainer = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    
    img {
        height: 4.8rem;
        width: 4.8rem;
        border-radius: 50%;
    }

    strong {
        color: #E1E1E6;
    }

    p::before {
        content: '';
        padding: .4rem;
        background-color: #00B37E;
    }

    p {
        color: #00B37E;
    }
`