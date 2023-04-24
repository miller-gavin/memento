import * as React from "react";
import styled from "styled-components";


const StyledMementoMoriCounter = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
`

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
      {`Memento Mori: ${yearsLeft} years / ${weeksLeft} weeks / ${daysLeft} :)`}
    </StyledMementoMoriCounter>
  );
}
