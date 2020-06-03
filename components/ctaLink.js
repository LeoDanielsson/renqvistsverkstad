import styled from 'styled-components';
import { gold, white, copper } from '../colors';
import Link from 'next/link';

const StyledCtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ inverted }) => (inverted ? white : gold)};
  cursor: pointer;
  text-align: right;
  padding: 8px 0;
  line-height: 1;
  border-bottom: 1px solid ${({ inverted }) => (inverted ? white : gold)};
  &:hover {
    color: ${({ inverted }) => (inverted ? gold : white)};
    border-color: ${({ inverted }) => (inverted ? gold : white)};
  }
`;

const CtaLink = ({ href, inverted, children }) => (
  <Link href={href}>
    <StyledCtaLink inverted={inverted}>
      {children}{' '}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentcolor'
        width='1em'
        height='1em'
      >
        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
        <path d='M0 0h24v24H0z' fill='none' />
      </svg>
    </StyledCtaLink>
  </Link>
);

export default CtaLink;
