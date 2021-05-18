import React, { useState } from "react";
import {
  HomePrincipal,
  Image,
  LeftHomePrincipal,
  CenterHomePrincipal,
  RightHomePrincipal,
} from "../../../../Style/Style/Styling";
import ContentImage from "../../../Home/ContentImage";
import Widgets from "./Widgets";
export default function Principal() {
  const [titre, setTitre] = useState({});
  const onImageChange = (titre, description) => {
    setTitre({
      titre: titre,
      description: description,
    });
  };
  return (
    <HomePrincipal>
      <LeftHomePrincipal>
        <Image src="https://res.cloudinary.com/faceshop/image/upload/v1621266807/FSJDA/Publicite_cqsvcu.png" />
      </LeftHomePrincipal>
      <CenterHomePrincipal>
        <ContentImage onImageChange={onImageChange} />
      </CenterHomePrincipal>
      <RightHomePrincipal>
          <Widgets/>
      </RightHomePrincipal>
    </HomePrincipal>
  );
}
