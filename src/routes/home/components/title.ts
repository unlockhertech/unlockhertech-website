"use client";
import { Row } from "@/UI/Atoms/Row";
import Link from "next/link";
import styled from "styled-components";

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.headerFont};
  color: ${({ theme }) => theme.green};
  text-align: center;
  font-size: 10rem;
`;

export const TitleBackground = styled(Row)`
  background: ${({ theme }) => theme.pink};
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.green};
  text-decoration: none;
  margin: 0 2rem 0 0;
  &:last-of-type {
    margin: 0;
  }
`;
