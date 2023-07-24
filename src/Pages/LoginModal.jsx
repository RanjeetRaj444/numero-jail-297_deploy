import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from 'react';
import LoginSignupBanner from "../Components/Login&Signup/LoginSignupBanner";

import LoginForm from "../Components/Login&Signup/LoginForm";
import { styled } from "styled-components";

const LoginModal = ({ loginOpen, setLoginOpen }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();


  return <DIV>
    <Modal isCentered isOpen={loginOpen} onClose={onClose}>
      <ModalOverlay
        bg='white'
        backdropFilter='blur(10px) '
        display={"flex"}
        alignItems={"center"}
      >
        <ModalCloseButton onClick={() => setLoginOpen(false)} />
        <LoginSignupBanner />
        <LoginForm />
      </ModalOverlay>
    </Modal >
  </DIV >
}

const DIV = styled.div`
  position: fixed;
  top: -50%;
  visibility: hidden;
 
`

export default LoginModal;