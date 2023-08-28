import React from "react";
import Image from "next/image";
import insta from '../../assets/insta.svg'
import linkedin from "../../assets/linkedin.svg";
import githubmark from "../../assets/githubmark.svg";
import twitter from "../../assets/twitter.svg";

const SocialHandles = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Image src={githubmark}  alt="img"/>
      <Image src={insta} alt="img" />
      <Image src={twitter}  alt="img"/>
      <Image src={linkedin}  alt="img"/>
    </div>
  );
};

export default SocialHandles;
