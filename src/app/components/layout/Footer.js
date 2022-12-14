import styled from "styled-components";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Newsletter } from "../About";
import { Wrapper } from "../../theme/style";
import * as Routes from "../../routes";

const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.primaryGreen};
  margin-top: ${({ theme }) => theme.margins.large};
  margin-bottom: ${({ theme }) => theme.margins.normal};
  padding-top: 2rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

`;

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.medium};

  @media (min-width: 768px) {
    flex-basis: 30%;
  }
`;

const NewsletterContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: -3rem;
    flex-basis: 66%;
  }
`;

const LogoFooter = styled.svg``;

const ImageSection = styled.section`
  margin-bottom: ${({ theme }) => theme.margins.medium};
`;

const FollowSection = styled.section`
  margin-bottom: ${({ theme }) => theme.margins.medium};

  svg {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-right: ${({ theme }) => theme.margins.normal};
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const LegalsSection = styled.section`
  margin-bottom: ${({ theme }) => theme.margins.medium};
`;

const LegalsText = styled.p``;

const LegalLinks = styled.div`
  margin-top: 1rem;
`;

const LegalsLink = styled(Link)`
  margin-top: 3rem;
  text-decoration: underline;
  font-size: 1.2rem;

  :last-child {
    margin-left: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <ImageSection>
          <Wrapper>
            <LogoFooter
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="88.257"
            >
              <g data-name="Group 117">
                <g data-name="Group 112">
                  <g data-name="Group 74">
                    <path
                      data-name="Path 36"
                      d="m8.101 61.44-3.336-3.336a.829.829 0 0 0-1.154 0L.242 61.473a.817.817 0 0 0 1.154 1.154l3.369-3.368H3.611l3.336 3.335a.817.817 0 0 0 1.154-1.154Z"
                      fill="#161615"
                    />
                  </g>
                  <g data-name="Group 108">
                    <path
                      data-name="Path 35"
                      d="m46.263 26.885 3.335 3.335a.829.829 0 0 0 1.155 0l3.368-3.369a.817.817 0 0 0-1.154-1.154l-3.369 3.369h1.155l-3.336-3.336a.817.817 0 0 0-1.154 1.155Z"
                      fill="#273618"
                    />
                    <g data-name="Group 106">
                      <g data-name="Group 13">
                        <path
                          data-name="Path 31"
                          d="M4.517 37.088V25.699a27.7 27.7 0 0 1 .625-6.623 22.229 22.229 0 0 1 4.4-8.845 22.337 22.337 0 0 1 39.48 11.435 61.4 61.4 0 0 1 .153 7.043 1.021 1.021 0 0 0 2.041 0c0-2.108.093-4.243-.082-6.345A24.367 24.367 0 0 0 2.48 24.416c-.018 4.223 0 8.446 0 12.669a1.021 1.021 0 0 0 2.041 0Z"
                          fill="#273618"
                        />
                      </g>
                      <g data-name="Group 14">
                        <path
                          data-name="Path 32"
                          d="M2.545 36.327c4.45-.015 35.963-.031 40.413.008.824.007 1.1-.18 1.093-1.051a2.433 2.433 0 0 1 2.448-2.451q2.794-.071 5.589.016a1.123 1.123 0 0 1 .86.638c.084.543-.393.707-.9.705-1.725 0-3.449.006-5.174 0a1.38 1.38 0 0 0-1.5 1.1h6.612c.482 0 .957.075.976.655.022.644-.486.72-.994.721h-5.841c-.412 0-.776-.011-.78.582s.345.6.767.6H52.121c.47.007.924.189.815.69a1.128 1.128 0 0 1-.851.649c-1.89.061-3.782.033-5.672.034h-.9c.013.889.389 1.246 1.322 1.257 1.53.018 3.059 0 4.589.006.222 0 .445.007.667 0 .469-.013.934.145.859.645a1.142 1.142 0 0 1-.827.676 20 20 0 0 1-2.415.034c-1 0-2 .02-3-.006a2.512 2.512 0 0 1-2.677-2.746c.018-.8-.248-.968-.993-.962-4.422.032-36.066.313-40.488.313"
                          fill="#273618"
                        />
                      </g>
                      <g data-name="Group 15">
                        <path
                          data-name="Path 33"
                          d="M3.151 59.55c0 2.108-.092 4.242.083 6.345a24.367 24.367 0 0 0 48.654-2.052c.017-4.223 0-8.446 0-12.67a1.021 1.021 0 0 0-2.041 0v11.386a27.661 27.661 0 0 1-.626 6.623 22.211 22.211 0 0 1-4.4 8.844 22.337 22.337 0 0 1-39.48-11.434 61.417 61.417 0 0 1-.153-7.043 1.021 1.021 0 0 0-2.041 0Z"
                          fill="#273618"
                        />
                      </g>
                      <g data-name="Group 16">
                        <path
                          data-name="Path 34"
                          d="M51.818 51.931c-4.45.014-35.963.031-40.412-.009-.824-.007-1.1.18-1.093 1.052a2.434 2.434 0 0 1-2.449 2.451q-2.793.071-5.588-.016a1.123 1.123 0 0 1-.86-.638c-.084-.544.392-.707.9-.706 1.724 0 3.449-.006 5.173 0a1.379 1.379 0 0 0 1.5-1.1H2.377c-.482 0-.957-.076-.976-.655-.021-.644.487-.72.994-.721h5.841c.413 0 .777.011.781-.581s-.346-.6-.767-.6H2.243c-.47-.006-.925-.189-.815-.689a1.13 1.13 0 0 1 .851-.65c1.889-.06 3.781-.032 5.672-.033h.9c-.012-.889-.389-1.246-1.322-1.257-1.53-.019-3.059-.005-4.589-.006-.223 0-.445-.007-.668 0-.469.012-.933-.145-.858-.646a1.142 1.142 0 0 1 .826-.675 20.006 20.006 0 0 1 2.416-.034c1 0 2-.02 3 .006a2.512 2.512 0 0 1 2.677 2.746c-.018.8.248.967.993.962 4.421-.032 36.065-.313 40.487-.313"
                          fill="#273618"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g data-name="Group 114">
                  <text
                    data-name="Farmers Without Borders"
                    transform="translate(69 9.129)"
                    fill="#273618"
                    fontSize="16"
                    fontFamily="LibreBaskerville-Bold, Libre Baskerville"
                    fontWeight="700"
                  >
                    <tspan x="0" y="16">
                      FARMERS
                    </tspan>
                    <tspan x="0" y="41">
                      WITHOUT
                    </tspan>
                    <tspan x="0" y="66">
                      BORDERS
                    </tspan>
                  </text>
                </g>
              </g>
            </LogoFooter>
          </Wrapper>
        </ImageSection>

        <LegalsSection>
          <Wrapper>
            <LegalsText>Farmers without Borders</LegalsText>

            <LegalsText>All Rights Reserved ?? 2021</LegalsText>

            <LegalLinks>
              <LegalsLink to={Routes.COOKIES}>Cookies</LegalsLink>

              <LegalsLink to={Routes.PRIVACY}>Privacy Policy</LegalsLink>
            </LegalLinks>
          </Wrapper>
        </LegalsSection>

        <FollowSection>
          <Wrapper>
            <h2>Follow us on:</h2>

            <Link
              to={{
                pathname:
                  "https://www.facebook.com/farmerswithoutbordersproject",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </Link>

            <Link
              to={{
                pathname:
                  "https://www.instagram.com/farmerswithoutbordersproject",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </Link>

            <Link
              to={{
                pathname:
                  "https://www.twitter.com/farmerswithoutbordersproject",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </Link>
          </Wrapper>
        </FollowSection>
      </Container>
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
    </FooterContainer>
  );
};

export default Footer;
