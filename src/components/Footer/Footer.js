import { FooterContainer, FooterLink, FooterP } from './styles';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <center>
          © City Delicatssen <br />
          Contact: (402) 373-8189 | Email:{' '}
          <FooterLink href='mailto:citydelicatessen@email.ca'>
            citydelicatessen@email.ca
          </FooterLink>{' '}
          <br />
          <FooterP>
            Icons made by{' '}
            <FooterLink href='https://www.freepik.com' title='Freepik'>
              Freepik
            </FooterLink>{' '}
            from{' '}
            <FooterLink href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </FooterLink>
          </FooterP>
        </center>
      </FooterContainer>
    </>
  );
};

export default Footer;
