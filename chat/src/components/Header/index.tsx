import { X } from "phosphor-react";
import { StyledContainer, StyledHeader } from "./style";

export function Header() {
    return (
        <StyledHeader>

            <StyledContainer>
                <img src="https://picsum.photos/200/300" alt="imagem-perfil" />
                <div>
                    <strong>Cecilia Sassaki</strong>
                    <p>Online</p>
                </div>
            </StyledContainer>

            <div>
                <X />
            </div>



        </StyledHeader>
    )
}