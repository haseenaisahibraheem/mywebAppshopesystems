import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="online_store">
        <li>
          <h3>ONLINE STORE</h3>
        </li>
        <li>MEN CLOTHING</li>
        <li>WOMEN CLOTHING</li>
        <li>MEN ACCEESSORIES</li>
        <li>WOMEN ACCEESSORIES</li>
      </ul>
      <ul className="helpful_links">
        <li>
          <h3>HELPFUL LINKS</h3>
        </li>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <ul className="partners">
        <li>
          <h3>PARTNERS</h3>
        </li>
        <li>ZARA</li>
        <li>PANTALOONS</li>
        <li>LEVIS</li>
        <li>UCB</li>
        <li>+MANY MORE</li>
      </ul>
      <ul className="address">
        <li>
          <h3>ADDRESS</h3>
        </li>
        <li>BUILDING 101</li>
        <li>CENTRAL AVENUE</li>
        <li>LA - 902722</li>
        <li>UNITED STATES</li>
      </ul>
    </footer>
  );
};

export default Footer;
