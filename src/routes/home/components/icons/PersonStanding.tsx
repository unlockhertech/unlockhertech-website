"use client";
import { JSX } from "react";
import styled from "styled-components";

//TODO : Add alt text

const SVG = styled.svg`
  transform: scaleX(-1);
  max-height: 40rem;
  max-width: 30rem;
  height: auto;
  flex-shrink: 0;
  width: auto;
`;

export function PersonStanding(): JSX.Element {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 380 480">
      <g fill="none" fillRule="evenodd">
        <path
          fill="rgba(71, 70, 31, 0.59)"
          d="M144.26227 65.49013c-4.6079-5.40875-7.72664-12.03725-7.2055-19.46468 1.50156-21.40047 31.29176-16.69264 37.08657-5.89152 5.79481 10.80112 5.10624 38.19907-2.38304 40.12953-2.98671.76986-9.3493-1.116-15.82493-5.01915L160 104h-24l8.26227-38.50987Z"
        />
        <path
          fill="#5F9DE3"
          d="M176.4091 44.98363c-.23774-1.40005-.81874-2.95479-1.28754-4.27937-.6044-1.70755-1.51906-3.24713-2.52562-4.69812-1.89504-2.73178-4.16837-5.19865-6.67834-7.24608-4.58478-3.73983-10.42098-5.89697-16.16017-5.19644-2.89773.35368-5.71068 1.459-8.10489 3.29876-2.16314 1.66224-4.24383 4.10917-7.04485 4.28499-3.04774.19114-5.84147-2.4989-8.28574-4.16029-2.75592-1.87298-5.68773-3.23776-8.90873-3.76828-5.39592-.88844-10.465.93462-14.18378 5.3617-3.95729 4.71106-6.83393 11.61983-4.23516 17.86196.48306 1.16035 1.1045 2.13857 1.99639 2.94934.81796.74346 2.06721 1.53446 2.39886 2.72241.35226 1.26274-.70002 2.89176-1.10807 4.03115-.58457 1.63242-1.06453 3.34594-.8939 5.12028.28035 2.9139 2.11154 5.6956 4.04516 7.61083 1.96772 1.94897 4.38951 3.06655 6.9762 3.58173 1.7272.34397 3.49236.53375 5.24776.40462.87143-.06406 1.64041-.30615 2.48472-.49866.82105-.18723 1.27993.03084 1.97655.48111 3.23603 2.09207 6.71553 2.90147 10.45213 2.59038 3.15359-.2627 6.78837-1.02695 9.36095-3.18768 2.85697-2.39974 2.8001-5.70889 2.12781-9.24445.71227.353 2.68277.57157 1.50527-.83546-.46647-.55726-1.34781-.78401-1.94633-1.1118-.69692-.38161-1.40454-.87481-1.9457-1.49732-2.18516-2.51355.02184-7.6289 2.76831-8.47185 4.0805-1.25235 4.99407 4.51839 7.90698 6.01111 1.67481.8583 3.4268-.31483 4.68164-1.51266 1.68086-1.60465 2.82643-3.73045 3.81548-5.89373.8147-1.7815 1.57284-3.58804 2.4032-5.36067.38775-.8278 1.73014-3.16792 1.056-4.1039 2.92267-.5828 6.17792.63171 8.69503 2.22445 1.04034.65845 1.8335 1.38437 2.38847 2.54676.11887.24908.37768.98948.70266 1.0198.60502.05656.37891-.68282.31925-1.03462"
        />
      </g>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#191847"
          d="m128 187 36.25496 127.22691L190.70696 408H210l-28.10903-221z"
        />
        <path
          fill="#2F3676"
          d="M118.30434 187c-.83857 65.57422-3.6981 101.34019-4.57856 107.2979-.88047 5.9577-14.1936 43.8584-39.93942 113.7021h19.98629c32.77638-67.0031 51.073-104.9038 54.88985-113.7021C152.47935 285.49957 164.2585 249.73361 182 187h-63.69566Z"
        />
        <path
          fill="#191847"
          d="m72 426 1-21h21c9.9576 7 22.9576 12.66667 39 17v4H95l-13-2v2H72ZM188 426l1-21h21c9.9576 7 22.9576 12.66667 39 17v4h-38l-13-2v2h-10Z"
        />
      </g>
      <g fill="none" fillRule="evenodd">
        <path
          fill="rgba(71, 70, 31, 0.59)"
          d="m220 159.61709 36.23457-15.91292c6.34745-6.32515 12.47682-11.13256 18.3881-14.42222 1.7676-.56274 4.78743-.73275 1.5655 3.97322-3.22194 4.70597-6.39928 9.80084-5.11188 11.45013 1.2874 1.64928 5.01672-.17108 6.49006 2.51098.98222 1.78803-5.30406 3.9269-18.85886 6.4166l-27.13755 20.8064L220 159.61709ZM73.50828 164 94 168.06584c-20.60792 38.40522-31.65957 58.76-33.15497 61.06436-3.36464 5.1848-.22536 14.68704.93427 19.69098-7.2749 1.69344-4.4059-9.25617-13.61214-6.97-8.40304 2.08672-15.5278 7.44199-23.36328.21956-.96333-.88796-1.66853-3.66345 1.61594-5.087 8.18281-3.54655 20.27222-10.1874 22.23252-12.76564 2.67322-3.5159 10.95853-23.5886 24.85594-60.2181Z"
        />
        <path
          fill="#DB2721"
          d="m149.695 87.33203 8.64712-1.48317c18.83426 18.2701 26.52017 62.1636 39.07186 67.97364 11.8671 5.49315 28.68962.1775 48.68584-7l6.12372 13.68209c-18.1685 19.65599-56.87433 36.26226-72.56345 26.78206-25.08364-15.15688-30.87434-69.29296-29.9651-99.95462Z"
        />
        <path
          fill="#DDE3E9"
          d="M112 196h76.51145c3.49618 0 2.8374-5.04836 2.332-7.5958-5.83286-29.40043-28.60215-61.09268-28.60215-102.94347L140.1718 82C121.91749 111.3584 115.60483 147.50455 112 196Z"
        />
        <path
          fill="#FF4133"
          d="M104.36875 166.23317C88.77138 194.36783 75.66095 214.62344 65.03745 227L49 223.85882C59.3306 159.79067 89.24661 112.5044 138.74805 82h8.73835c19.81252 67.53695 25.27448 112.53695 16.38589 135H95c1.08963-16.43655 4.5834-33.8188 9.36876-50.76683Z"
        />
      </g>
    </SVG>
  );
}
