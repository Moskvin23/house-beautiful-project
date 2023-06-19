import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { images, variables } from "../../../constants"

function HeroRight() {
  const HeroRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    width: 50%;
    height: 100%;
    @media (min-width: 100px) and (max-width: 900px) {
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  `
  const HeroRightImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    @media (min-width: 100px) and (max-width: 600px) {
      width: 100%;
      height: 15rem;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      width: 100%;
      height: 30rem;
    }
  `
  const HeroRightImage = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    @media (min-width: 100px) and (max-width: 900px) {
      width: 50vw;
    }
  `
  const HeroRightContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.25rem;
    position: absolute;
    top: 64%;
    @media (min-width: 100px) and (max-width: 900px) {
      top: 9%;
    }
    @media (min-width: 900px) and (max-width: 1100px) {
      top: 58%;
    }
  `
  const HeroInfohHighlight = styled.div`
    display: none;
    @media (min-width: 100px) and (max-width: 900px) {
      display: block;
      margin-left: 1rem;
      margin-bottom: 3.25rem;
      font-size: 18px;
      color: #ffffff;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      margin-bottom: 15.25rem;
      font-size: 18px;
    }
  `
  const HeroRightInfo = styled.div`
    margin-left: 2rem;
    width: 5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.75rem;
    @media (min-width: 100px) and (max-width: 900px) {
      margin-left: 1rem;
      width: 3.5rem;
    }
    @media (min-width: 550px) and (max-width: 900px) {
      margin-left: 1.5rem;
      width: 3.5rem;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      width: 3.7rem;
    }
  `
  const HeroInfoTitle = styled.div`
    padding: 0.6rem 0.9rem;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.sevenFont};
    opacity: 0.8;
    cursor: default;
    @media (min-width: 100px) and (max-width: 900px) {
      padding: 0.4rem 0.55rem;
      font-size: 14px;
      opacity: 0.8;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.55rem 0.6rem;
      font-size: 16px;
    }
  `
  const HeroRightSofa = styled.div`
    margin-left: 2rem;
    font-weight: 400;
    font-size: 42px;
    color: #000;
    @media (min-width: 100px) and (max-width: 900px) {
      margin-left: 1rem;
      font-size: 26px;
    }
    @media (min-width: 550px) and (max-width: 900px) {
      margin-left: 1.5rem;
      font-size: 26px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 36px;
    }
  `
  const HeroRightButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.5rem;
    margin-left: 2rem;
    width: 10.5rem;
    background-color: ${variables.primaryBackground};
    border-radius: 0.75rem;
    cursor: pointer;
    &:hover {
      background-color: ${variables.primaryBackgroundHover};
      transition: all 0.2s ease-in-out;
    }
    @media (min-width: 100px) and (max-width: 900px) {
      margin-left: 1rem;
      width: 8.75rem;
    }
    @media (min-width: 550px) and (max-width: 900px) {
      margin-left: 1.4rem;
      width: 8.75rem;
    }
  `
  const HeroButtonTitle = styled.div`
    padding: 0.8rem 0 0.8rem 1.1rem;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    @media (min-width: 100px) and (max-width: 900px) {
      font-size: 12px;
      padding-left: 0.8rem;
    }
  `
  const HeroButtonIcon = styled.img`
    margin-left: 1.1rem;
    width: 6px;
    height: 10px;
  `
  return (
    <HeroRight>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <HeroRightImageContainer>
          <HeroRightImage src={images.heroimage} />
          <HeroRightContainer>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <HeroInfohHighlight>HIGHLIGHTED PRODUCT</HeroInfohHighlight>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <HeroRightInfo>
                <HeroInfoTitle>$779</HeroInfoTitle>
              </HeroRightInfo>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <HeroRightSofa>Killers-Mr. Brightside </HeroRightSofa>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: "tween" }}>
                <HeroRightButton></HeroRightButton>
              </motion.div>
            </motion.div>
          </HeroRightContainer>
        </HeroRightImageContainer>
      </motion.div>
    </HeroRight>
  )
}

export default HeroRight
