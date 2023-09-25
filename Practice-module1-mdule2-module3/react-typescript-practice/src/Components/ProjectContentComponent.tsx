import React from "react";

export default function ProjectContent({ children }: projectContentProps) {
  return (
    <>
      <h3>Top</h3>
      {children}
      <h3>Bottom</h3>
    </>
  );
}

interface projectContentProps {
  children: React.ReactNode;
}
