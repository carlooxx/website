import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;
export const StyledDescription = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const StyledImg = styled.div`font-weight
flex: 1;
z-index: 2;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: hover;
}
`;
export const StyledHide = styled.div`object-fit
overflow: hidden;
`;
