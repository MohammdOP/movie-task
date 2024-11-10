import { NotFoundContainer, Message, HomeLink } from "./NotFoundPage.styles";

function NotFoundPage() {
  return (
    <>
      <NotFoundContainer>
        <h1>404 - Page Not Found</h1>
        <Message>The page you are looking for does not exist.</Message>
        <HomeLink to="/">Return to Home</HomeLink>
      </NotFoundContainer>
    </>
  );
}

export default NotFoundPage;
