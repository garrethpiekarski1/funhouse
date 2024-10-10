export default function LoggedInInteraction({ mobile }: { mobile: boolean }) {
  const loggedIn = false;

  const displayMobileMessaging = () => {
    if (!loggedIn) {
      return <span style={{ color: "white" }}>Log In</span>;
    }
    return <span style={{ color: "white" }}>Log Out</span>;
  };

  const displayDesktopMessaging = () => {
    if (!loggedIn) {
      return <span style={{ color: "white" }}>Sign In</span>;
    }
    return <span style={{ color: "white" }}>Hello, APP_USER!</span>;
  };

  return mobile ? displayMobileMessaging() : displayDesktopMessaging();
}
