import styled from 'styled-components';

export const Figure = styled.figure`
  margin: 50% auto;
  text-align: center;
  
  img {
    border-radius: 50%;
    display: inline-block;
    max-width: 10.5rem;
  }
  
  figcaption p {
    font-weight: 500;
  }
`;

export const ContainerHome = styled.div`
  .title {
    color: var(--black-01);
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: .125rem;
    line-height: 0;
    margin: 2rem 0;
    padding: 0 0 .5rem;
  }
  
  .subtitle {
    color: var(--text-muted);
    margin: 0 0 1.2rem;
  }
`;
