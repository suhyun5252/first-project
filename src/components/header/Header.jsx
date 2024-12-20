import { Link, useNavigate } from "react-router-dom";
// import { WrapDiv } from "../common";
import {
  GnbUl,
  HeaderDiv,
  HeaderWrapDiv,
  LoginDiv,
  LoginOutDiv,
} from "./headerStyle";
import Logo from "../Logo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderDiv>
      <HeaderWrapDiv>
        <div className="left">
          <Link to={"/"}>
            <Logo />
          </Link>
          <GnbUl>
            <li className="menu">
              <Link to={"/about"}>다녀ALL</Link>
            </li>
            <li className="menu">
              <Link to={"/guide"}>이용방법</Link>
            </li>
            <li className="menu">
              <Link to={"/planning"}>일정만들기</Link>
            </li>
            <li className="menu">
              <Link to={"/board"}>여행로그</Link>
            </li>
          </GnbUl>
        </div>
        <div className="right">
          <LoginOutDiv>
            <Link to={"/auth/signup"} className="signup-btn">
              회원가입
            </Link>
            <button
              onClick={() => {
                navigate("/auth");
              }}
            >
              로그인
            </button>
          </LoginOutDiv>
          <LoginDiv>
            <Link to={"/myinfo"}>마이페이지</Link>
            <ul>
              <li>
                <Link to={"/myplanlist"}>내일정</Link>
              </li>
              <li>
                <Link to={"/myinfo"}>내정보</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  로그아웃
                </button>
              </li>
            </ul>
          </LoginDiv>
        </div>
      </HeaderWrapDiv>
    </HeaderDiv>
  );
};

export default Header;
