import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomePrincipal,
  Image,
  LeftHomePrincipal,
  CenterHomePrincipal,
  RightHomePrincipal,
} from "../../../../Style/Style/Styling";
import ContentImage from "../../../Home/ContentImage";
import Widgets from "./Widgets";

export default function Principal({ device }) {
  const [titre, setTitre] = useState({});
  const onImageChange = (titre, description) => {
    setTitre({
      titre: titre,
      description: description,
    });
  };
  return (
    <HomePrincipal mobile={device === "MOBILE"}>
      {device === "MOBILE" ? (
        <div style={{display: 'block'}}>
          <ContentImage onImageChange={onImageChange} titre={titre?.titre}/>
          <div style={{padding: "5px"}}>
            <Widgets mobile={true}/>
          </div>
        </div>
      ) : (
        <>
          <LeftHomePrincipal>
            <Image src="https://res.cloudinary.com/faceshop/image/upload/v1621266807/FSJDA/Publicite_cqsvcu.png" />
          </LeftHomePrincipal>
          <CenterHomePrincipal>
            <ContentImage onImageChange={onImageChange} titre={titre?.titre}/>
          </CenterHomePrincipal>
          <RightHomePrincipal>
            <Widgets />
          </RightHomePrincipal>
        </>
      )}
    </HomePrincipal>
  );
}
