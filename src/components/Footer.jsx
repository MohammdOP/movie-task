import {
  FooterContainer,
  FooterContent,
  FooterLogoContainer,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterLink,
  JoinCommunityAnchor,
} from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogoContainer>
          <FooterLogo
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB Logo"
          />

          <JoinCommunityAnchor href="#">Join the Community</JoinCommunityAnchor>
        </FooterLogoContainer>
        <FooterSections>
          <FooterSection>
            <h3>THE BASICS</h3>
            <FooterLink href="#">About TMDB</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Support Forums</FooterLink>
            <FooterLink href="#">API</FooterLink>
            <FooterLink href="#">System Status</FooterLink>
          </FooterSection>
          <FooterSection>
            <h3>Get Involved</h3>
            <FooterLink href="#">Contribution Bible</FooterLink>
            <FooterLink href="#">Add New Movie</FooterLink>
            <FooterLink href="#">Add New TV Show</FooterLink>
          </FooterSection>
          <FooterSection>
            <h3>Community</h3>
            <FooterLink href="#">Guidelines</FooterLink>
            <FooterLink href="#">Discussions</FooterLink>
            <FooterLink href="#">Leaderboard</FooterLink>
          </FooterSection>
          <FooterSection>
            <h3>Legal</h3>
            <FooterLink href="#">Terms of Use</FooterLink>
            <FooterLink href="#">API Terms of Use</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">DMCA Policy</FooterLink>
          </FooterSection>
        </FooterSections>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
