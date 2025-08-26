import { createContext, useContext } from 'react';

const Context = createContext(null);

const Header = ({ children }) => {
  const { test } = useContext(Context);
  return (
    <div
      style={{
        borderBottom: '1px solid black',
        padding: '.5rem',
        marginBottom: '.5rem',
      }}
    >
      {children}
      {test}
    </div>
  );
};

const Body = ({ children }) => {
  return <div style={{ padding: '.5rem' }}>{children}</div>;
};

const Footer = ({ children }) => {
  return (
    <div
      style={{
        borderTop: '1px solid black',
        padding: '.5rem',
        marginTop: '.5rem',
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ children, test }) => {
  return (
    <Context.Provider value={{ test }}>
      <div style={{ border: '1px solid black' }}>{children}</div>;
    </Context.Provider>
  );
};

export default Card;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
