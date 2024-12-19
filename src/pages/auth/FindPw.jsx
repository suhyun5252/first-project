import { Link } from "react-router-dom";
import { JoinDiv, LayerDiv, LoginDiv } from "../../components/common";
import LayerLogo from "../../components/layer/LayerLogo";

import FindPassword from "../../components/auth/FindPassword";

function FindPw() {
  return (
    <LoginDiv>
      <LayerDiv>
        {/* 로고 */}
        <LayerLogo />
        {/* 비밀번호 찾기 */}
        <FindPassword></FindPassword>

        <JoinDiv>
          <Link to={"/auth/signup"}>로그인화면 가기</Link>
        </JoinDiv>
      </LayerDiv>
    </LoginDiv>
  );
}

export default FindPw;
