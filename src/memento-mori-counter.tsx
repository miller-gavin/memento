import * as React from "react";
import styled from "styled-components";

const StyledMementoMoriCounter = styled.div`
  font-family: "Cutive Mono", monospace;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin: 10px 20px;
  border-radius: 10px;
  display: flex;
`;

// this calculation is based on the average lifespan of a Scottish guy is ~ 78 years.
export function MementoMoriCounter(props: { birthday: string }) {
  // Parse the birthday string into a Date object
  const [day, month, year] = props.birthday.split("-");
  const birthDate = new Date(+year, +month - 1, +day);

  // Calculate the age in years
  const age = new Date(Date.now() - birthDate.getTime()).getFullYear() - 1970;

  // Calculate the years left until turning 78
  const yearsLeft = 78 - age;
  const weeksLeft = yearsLeft * 52;
  const daysLeft = weeksLeft * 7;

  return (
    <StyledMementoMoriCounter>
      {`Memento Mori:  ${daysLeft} days left, use them wisely :)`}
    </StyledMementoMoriCounter>
  );
}
