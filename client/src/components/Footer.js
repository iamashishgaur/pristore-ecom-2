import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Social from "./Social";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Footercontainer = styled.div`
  width: 100%;
  background: var(--black);
  color: #000;
  bottom: 0;
  hr {
    width: 70%;
    display: flex;
    justify-content: center;
  }
`;
const FooterT = styled.div`
  display: flex;
  color: rgb(247, 247, 248);
  justify-content: space-around;
  padding: 30px 0px;
`;
const Prayagstudio = styled.div`
  & > p {
    margin-top: 2rem;
    width: 350px;
    letter-spacing: 1px;
    line-height: 25px;
  }
`;
const Sociallink = styled.div``;
const Demotext = styled.div``;
const FooterTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SubsTitle = styled(FooterTitle)`
  font-weight: 400;
`;
const Footernav = styled.div`
  margin-top: 1.5rem;
  li {
    list-style: none;
    line-height: 2rem;
    a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const FooterBar = styled(Footernav)`
  margin-top: 0px;
  color: white;
  text-align: center;
  padding: 15px 5rem;
`;
const CopyFooterTitle = styled.div`
  font-size: 15px;
  letter-spacing: 1px;
`;
const From = styled.div`
  width: 225px;
  margin: 15px 0;
  margin-bottom: 1.5rem;
  input {
    width: 100%;
    height: 50px;
    padding: 8px 15px;
    border-radius: 8px;
    /* border: none; */
    outline: none;
    box-shadow: 1.5px gray;
    &:focus {
      box-shadow: 1.5px red;
    }
  }
`;

const Scrolltop = styled.div`
  position: relative;
  svg {
    position: absolute;
    margin-top: -18px;
    width: 40px;
    height: 40px;
    color: white;
    right: 80px;
    color: #fff;
    fill: #4d12dc;
    cursor: pointer;
  }
`;
const Footer = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [visible, isVisible] = useState(false);

  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listentoscroll = () => {
    let heighttoHidden = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heighttoHidden) {
      isVisible(true);
    } else {
      isVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoscroll);
    return () => window.removeEventListener("scroll", listentoscroll);
  }, [visible]);
  return (
    <>
      <Footercontainer>
        <FooterT>
          <Prayagstudio>
            <FooterTitle>Pristore.in</FooterTitle>
            <p>
              Resume builder websites can be very useful for job seekers who are
              looking to create a resume quickly and efficiently. Many of these
              websites also provide tips and advice on how to write effective
              resumes and cover letters.
            </p>
          </Prayagstudio>
          <Sociallink>
            <FooterTitle>Services</FooterTitle>
            <Footernav>
              <li>
                <a href="/">Resume</a>
              </li>
              <li>
                <a href="/">Build Resume</a>
              </li>
              <li>
                <a href="/">Resume Sample</a>
              </li>
              <li>
                <a href="/">Cover Template</a>
              </li>
            </Footernav>
          </Sociallink>
          <Demotext>
            <FooterTitle>Quick Link</FooterTitle>
            <Footernav>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Term & Condition</a>
              </li>
            </Footernav>
          </Demotext>
          <Demotext>
            <FooterTitle>Stay Connected</FooterTitle>
            <Footernav>
              <SubsTitle>Subscribe News Latter</SubsTitle>
              <From>
                <input type="email" placeholder="enter email subscribe" />
              </From>
              {/* <Social /> */}
            </Footernav>
          </Demotext>
        </FooterT>
        <Scrolltop>
          <BsFillArrowUpCircleFill onClick={gotoTop} />
        </Scrolltop>
        <FooterBar>
          <CopyFooterTitle>
            Copyright &copy; All Right Resverd. 2023{" "}
          </CopyFooterTitle>
        </FooterBar>
      </Footercontainer>
    </>
  );
};

export default Footer;
