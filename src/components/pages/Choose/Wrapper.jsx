import React from "react"
import styled from "styled-components"

import { variables } from "../../../constants"

import Section from "./Section"

function Wrapper() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 5rem;
    width: 100%;
    background-color: #f1e2d3;
    @media (min-width: 100px) and (max-width: 900px) {
      padding-top: 0;
    }
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 72rem;
    color: #313b2c;
    @media (min-width: 100px) and (max-width: 900px) {
      padding: 2rem 1.5rem;
      width: auto;
    }
  `
  return (
    <Container id="aboutUs">
      <Wrapper>
        <Section />
      </Wrapper>
    </Container>
  )
}

export default Wrapper
