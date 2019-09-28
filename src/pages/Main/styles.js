import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: flex-end;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
    }

    small {
      margin-bottom: 5px;
    }
  }
`;

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Error = styled.small`
  display: ${props => (props.error ? 'block' : 'none')};
  color: #ef4430;
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading === 'true' && true,
}))`
  background: #1e2434;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 5px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading === 'true' &&
    css`
      svg {
        animation: ${Rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;

      span {
        margin-right: 5px;
      }
    }

    & + li {
      border-top: 1px solid #ddd;
    }

    a {
      font-size: 16px;
      color: #1e2434;
      text-decoration: none;
    }
  }
`;
