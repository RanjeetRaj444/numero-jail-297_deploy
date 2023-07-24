import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/studybuddy_logo.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import LoginModal from "../Pages/LoginModal";
import SignupModal from "../Pages/SignupModal";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_SUCCESS } from "../Redux/Login_Signup/actionType";
const Navbar = () => {
  const isAuth =useSelector((store)=>store.authReducer.isAuth)
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("auth",isAuth)

  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const dispatch= useDispatch()
  return (
    <DIV className="navbar">
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody display={"flex"} flexDirection={"column"} gap={"20px"}>
            <div
              style={{ display: "flex", gap: "20px", flexDirection: "column" }}
              className="navigate"
            >
              <Link to={"/"}>Home</Link>
              <Popover>
                <PopoverTrigger>
                  <Text>Subjects</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <div className="navigate">
                      <Link to={"/"}>Home</Link>
                      <Popover>
                        <PopoverTrigger>
                          <Text>Subjects</Text>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody>
                            <div className="drawer">
                              <Text className="option">Exams</Text>
                              <Text className="option">
                                Arts and Humanities
                              </Text>
                              <Text className="option">Languages</Text>
                              <Text className="option">Math</Text>
                              <Text className="option">Science</Text>
                              <Text className="option">Social Science</Text>
                              <Text className="option">Other</Text>
                            </div>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Link to={"/explanations"}>Expert solutions</Link>
            </div>
            {!isAuth?<div style={{ display: "flex", gap: "20px" }} className="navButton">
              <Button
                onClick={() => {
                  setLoginOpen(true);
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  setSignupOpen(true);
                }}
              >
                Signup
              </Button>
            </div>:<Button onClick={()=>dispatch({type:LOGOUT_SUCCESS})}>logout</Button>}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="left">
        <div style={{ width: "22%" }}>
          <img src={logo} alt="images" />
        </div>
        <Button className="hambergerButton" colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <div className="navigate">
          <Link to={"/"}>Home</Link>
          <Popover>
            <PopoverTrigger>
              <Text>Subjects</Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <div className="drawer">
                  <Text className="option">Exams</Text>
                  <Text className="option">Arts and Humanities</Text>
                  <Text className="option">Languages</Text>
                  <Text className="option">Math</Text>
                  <Text className="option">Science</Text>
                  <Text className="option">Social Science</Text>
                  <Text className="option">Other</Text>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Link to={"/explanations"}>Expert solutions</Link>
        </div>
      </div>
      <div className="searchBox">
        <InputGroup>
          <InputLeftElement pointerEvents="auto">
            <Icon as={FaSearch} color="gray.600" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search textbooks, questions"
            borderRadius="full"
            backgroundColor={"gray.100"}
            _placeholder={{ color: "gray.600", fontWeight: "semibold" }}
          />
        </InputGroup>
      </div>
      {!isAuth?<div  className="navButton">
              <Button
                onClick={() => {
                  setLoginOpen(true);
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  setSignupOpen(true);
                }}
              >
                Signup
              </Button>
            </div>:<Button onClick={()=>dispatch({type:LOGOUT_SUCCESS})}>logout</Button>}
      <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <SignupModal signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: white;
  .left {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navButton {
    width: 12.5%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .navigate {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .option {
    padding: 10px;
    border-radius: 12px;
  }
  .option:hover {
    background-color: #aaa7a7;
  }
  .hambergerButton {
    display: none;
  }
  @media only screen and (max-width: 1100px) {
    .left {
      justify-content: flex-start;
      gap: 20px;
      /* display: ; */
    }
    .hambergerButton {
      display: block;
    }
    .navigate {
      display: none;
    }
    .navButton {
      width: 100%;
      display: none;
    }
  }
`;

export default Navbar;
