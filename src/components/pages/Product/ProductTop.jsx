import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { variables } from "../../../constants"

function ProductTop() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
    margin-bottom: 2.5rem;
    width: 73rem;
    @media (max-width: 1100px) {
      gap: 24rem;
      width: 100vw;
      margin-left: 0;
    }
    @media (max-width: 900px) {
      gap: 10rem;
      width: 100vw;
      margin-left: 0;
    }
    @media (max-width: 500px) {
      gap: 1rem;
      width: 100vw;
      margin-left: 0;
    }
    @media (max-width: 400px) {
      gap: 0.2rem;
      width: 100vw;
      margin-left: 0;
    }
  `
  const Left = styled.div`
    display: grid;
    width: 100%;
    @media (max-width: 1100px) {
      width: auto;
    }
  `
  const LeftTitle = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #344649;
    @media (max-width: 1100px) {
      font-size: 14px;
    }
  `
  const LeftSubtitle = styled.span`
    font-weight: 700;
    font-size: 48px;
    color: black;
    @media (max-width: 1100px) {
      font-size: 18px;
    }
  `
  const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    @media (max-width: 1100px) {
      width: auto;
    }
  `
  const RightButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9rem;
    height: 3rem;
    background-color: ${variables.secondaryFunction};
    border-radius: 0.75rem;
    cursor: pointer;
    &:hover {
      background-color: ${variables.secondaryFunctionHover};
      transition: all 0.2 ease-in-out;
    }
    @media (max-width: 1100px) {
      width: 5rem;
      height: 2.5rem;
    }
  `
  const RightTitle = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: ${variables.primaryFont};
    @media (max-width: 1100px) {
      font-size: 12px;
    }
  `
  return (
    <Container>
      <Left>
        <LeftTitle>NEW PRODUCTS</LeftTitle>
        <LeftSubtitle>Discover the New Collections</LeftSubtitle>
      </Left>
    </Container>
  )
}

export default ProductTop
