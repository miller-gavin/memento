import * as React from "react";
import styled from "styled-components";

const StyledLinksList = styled.ul`
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: fit-content;
  z-index: 1;
`;

const StyledLink = styled.li`
  font-family: "Cutive Mono", monospace;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface Link {
  section: string;
  title: string;
  url: string;
}

const sections = {
  general: "General",
  chat: "Chat",
  zen: "Zen",
  codingBlogs: "Coding Blogs",
};

const links: Record<string, Link[]> = {
  codingBlogs: [
    {
      section: sections.codingBlogs,
      title: "Dan Luu",
      url: "http://danluu.com/",
    },
    {
      section: sections.codingBlogs,
      title: "Hacker Noon",
      url: "https://hackernoon.com/",
    },
  ],
  general: [
    {
      section: sections.general,
      title: "Hacker News",
      url: "https://news.ycombinator.com/",
    },
  ],
  chat: [
    {
      section: sections.chat,
      title: "Sqwok",
      url: "https://sqwok.im/",
    },
  ],
  zen: [
    {
      section: sections.zen,
      title: "Unsplash",
      url: "https://unsplash.com/",
    },
  ],
};

export function LinksList(): JSX.Element {
  return (
    <StyledLinksList>
      <StyledLink>
        <span>{sections.general}</span>
        {links.general.map((link) => (
          <a href={link.url}>{link.title}</a>
        ))}
      </StyledLink>

      <StyledLink>
        <span>{sections.chat}</span>
        {links.chat.map((link) => (
          <a href={link.url}>{link.title}</a>
        ))}
      </StyledLink>

      <StyledLink>
        <span>{sections.zen}</span>
        {links.zen.map((link) => (
          <a href={link.url}>{link.title}</a>
        ))}
      </StyledLink>

      <StyledLink>
        <span>{sections.codingBlogs}</span>
        {links.codingBlogs.map((link) => (
          <a href={link.url}>{link.title}</a>
        ))}
      </StyledLink>
    </StyledLinksList>
  );
}
