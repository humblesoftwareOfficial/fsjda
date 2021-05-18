import React from "react";
import {
  CenterHeader,
  ContentHeader,
  LeftHeader,
  RightHeader,
  TitleHeader,
  AddressText,
} from "../../../Style/Style/Styling";
import SocialIcons from "../Design/SocialIcons";
export default function Header({ mobile = false }) {
  const text = "Fédération Sénégalaise de Judo";
  return (
    <ContentHeader>
      <LeftHeader mobile={mobile}>
        <TitleHeader>{text.toUpperCase()}</TitleHeader>
        <small style={{ fontWeight: "bold" }}>
          {"&"} Disciplines Associées
        </small>
      </LeftHeader>
      <CenterHeader mobile={mobile}>
        <SocialIcons mobile={mobile}/>
      </CenterHeader>
      <RightHeader mobile={mobile}>
        <AddressText>152, rue Moussé Diop, B. P. 1867 0000 DAKAR</AddressText>
        <small >
          <a style={{ fontWeight: "bold", color: "white" }} href="mailto:sg@senegal-judo.com">contact@senegal-judo.com</a>
        </small>
      </RightHeader>
    </ContentHeader>
  );
}
