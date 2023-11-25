import React from "react";
import "../assets/css/HomeBtn.css";

type HomeBtnProps = {
  content: string;
  color?: string;
  href?: string;
};

const HomeBtn = (props: HomeBtnProps): React.ReactElement => {
  const styles = {
    "--content": props.content,
    "--color": props.color ?? "hsl(var(--accent-clr))",
  } as React.CSSProperties;

  return (
    <a className="home-btn" href={props.href} style={styles}>
      {props.content}
    </a>
  );
};

export default HomeBtn;
