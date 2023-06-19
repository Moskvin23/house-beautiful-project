import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { variables } from "../../../constants"

function FurnitureRight() {
  const Container = styled.div`
    display: grid;
    justify-items: flex-start;
    align-items: center;
    gap: 3rem;
    margin-left: 3%;
    padding-right: 3%;
    width: 35%;
    @media (max-width: 992px) {
      display: grid;
      justify-items: center;
      align-items: center;
      gap: 0.5rem;
      width: 90%;
    }
  `
  const Header = styled.div``
  const HeaderTitle = styled.span`
    font-weight: 400;
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      font-size: 18px;
    }
  `
  const Middle = styled.div`
    width: 30rem;
    @media (max-width: 992px) {
      text-align: center;
      width: 60%;
      margin-bottom: 1rem;
    }
  `
  const MiddleTitle = styled.span`
    font-weight: 700;
    font-size: 48px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      font-size: 22px;
    }
  `
  const Footer = styled.div``
  const FooterItem = styled.div`
    display: grid;
    padding: 1.25rem 1rem;
    width: 25.3rem;
    background-color: ${(props) => (props.isOpen ? variables.secondaryFunction : "none")};
    cursor: pointer;
    @media (max-width: 992px) {
      margin-right: 0;
      width: auto;
      margin-left: 0;
    }
  `
  const ItemTitle = styled.span`
    font-weight: 700;
    font-size: 18px;
  `
  const ItemSubtitle = styled.span`
    display: ${(props) => (props.active ? "block" : "none")};
    padding-top: 0.75rem;
    font-weight: 400;
    font-size: 14px;
  `

  const [isItemActive, setIsItemActive] = useState([false, true, false, false])

  return (
    <Container>
      <Header>
        <HeaderTitle>Categories</HeaderTitle>
      </Header>
      <Middle>
        <MiddleTitle>Furniture Sets</MiddleTitle>
      </Middle>
      <Footer>
        <motion.div
          whileInView={isItemActive[0] ? { opacity: [0.5, 1] } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <FooterItem
            onClick={() => setIsItemActive([true, false, false, false])}
            isOpen={isItemActive[0]}>
            <motion.div
              whileInView={isItemActive[0] ? { scale: 0.95 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <ItemTitle>Cassina</ItemTitle>
              <ItemSubtitle active={isItemActive[0]}>
                With over 90 years of history and its headquarters in Meda, Cassina is the
                quintessence of Italian design.
              </ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
        <motion.div
          whileInView={isItemActive[1] ? { opacity: [0.5, 1] } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <FooterItem
            onClick={() => setIsItemActive([false, true, false, false])}
            isOpen={isItemActive[1]}>
            <motion.div
              whileInView={isItemActive[1] ? { scale: 0.95 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <ItemTitle>Poliform</ItemTitle>
              <ItemSubtitle active={isItemActive[1]}>
                Simplicity, sophistication, familiarity. Poliform is everything we would like our
                home to be.
              </ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
        <motion.div
          whileInView={isItemActive[2] ? { opacity: [0.5, 1] } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <FooterItem
            onClick={() => setIsItemActive([false, false, true, false])}
            isOpen={isItemActive[2]}>
            <motion.div
              whileInView={isItemActive[2] ? { scale: 0.95 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <ItemTitle>Poltrona Frau</ItemTitle>
              <ItemSubtitle active={isItemActive[2]}>
                Poltrona Frau is the epitome of Italian design. Founded in 1912 by Renzo Frau, the
                company represents the Italian values.
              </ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
        <motion.div
          whileInView={isItemActive[3] ? { opacity: [0.5, 1] } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <FooterItem
            onClick={() => setIsItemActive([false, false, false, true])}
            isOpen={isItemActive[3]}>
            <motion.div
              whileInView={isItemActive[3] ? { scale: 0.95 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <ItemTitle>B&B Italia</ItemTitle>
              <ItemSubtitle active={isItemActive[3]}>
                B&B Italia represents the history and culture of Italian design. A leader in the
                residential, public and contract sectors.
              </ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
      </Footer>
    </Container>
  )
}

export default FurnitureRight
