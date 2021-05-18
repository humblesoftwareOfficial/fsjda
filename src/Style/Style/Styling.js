import styled from "styled-components";

export const ContentHeader = styled("div")`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid white;
`;

export const LeftHeader = styled("div")`
  width: ${(props) => (props.mobile ? "65%" : "33%")};
  background-color: #fff;
  border-radius: 5px;
  color: rgb(11, 24, 34);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  &:hover {
    background-color: #face0c;
  }
`;

export const CenterHeader = styled("div")`
  width: ${(props) => (props.mobile ? "35%" : "34%")};
  text-align: ${(props) => (props.mobile ? "start" : "center")};
`;

export const RightHeader = styled("div")`
  width: 33%;
  display: ${(props) => (props.mobile ? "none" : "")};
  text-align: right;
  border-radius: 5px;
`;

export const IconSocialNetwork = styled("div")`
  width: ${(props) => (props.mobile ? "20px" : "40px")};
  height: ${(props) => (props.mobile ? "20px" : "40px")};
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  background-color: white;
  cursor: pointer;
`;

export const TitleHeader = styled("div")`
  font-size: 3.1vmin;
  color: rgb(11, 24, 34);
  font-weight: bold;
`;

export const AddressText = styled("div")`
  font-size: 1.5vmin;
  color: white;
`;

export const HomePrincipal = styled("div")`
  width: 100%;
  background-color: rgb(22, 42, 58);
  padding: 20px;
  display: flex;
  margin-top: 5px
`;
export const LeftHomePrincipal = styled("div")`
  width: 30%;
  margin: 5px;
`;

export const CenterHomePrincipal = styled("div")`
  width: 30%;
  margin: 5px;
`;

export const RightHomePrincipal = styled("div")`
  width: 40%;
  margin: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  overflow: hidden;
  overflow-y: auto;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  height: 34.5vw;
`;

export const Image = styled("img")`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
