import React from "react"
import styled from "styled-components"

import { images, variables } from "../../../constants"
function Left() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    @media (min-width: 100px) and (max-width: 1100px) {
      justify-content: center;
      width: 100%;
    }
  `
  const Container = styled.div`
    display: grid;
    justify-items: start;
    align-items: start;
    gap: 2rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      justify-items: center;
    }
  `
  const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  `
  const HeaderIconContainer = styled.div`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
  `
  const HeaderIcon = styled.img`
    width: 100%;
    height: 100%;
  `
  const HeaderTitle = styled.span`
    font-weight: 700;
    font-size: 16px;
    color: ${variables.primaryFont};
  `
  const MainPharagrap = styled.span`
    margin-bottom: 1.5rem;
    width: 32.3rem;
    font-weight: 400;
    font-size: 16px;
    color: ${variables.sixthFont};
    @media (min-width: 100px) and (max-width: 1100px) {
      text-align: center;
      width: 90%;
    }
  `
  const FooterText = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${variables.sixthFont};
    @media (min-width: 100px) and (max-width: 1100px) {
      display: none;
    }
  `
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderTitle>House Beautiful</HeaderTitle>
        </HeaderContainer>
        <MainPharagrap>
          We want beauty to be accessible to anyone and for this reason we guarantee the best price
          on every design product. Our mission is to make your furniture purchase easy and fast.
        </MainPharagrap>
      </Container>
    </Wrapper>
  )
}

export default Left
