import APPCONFIG from "../config/appConfig.json";
export default function Footer() {
  const appConfig = APPCONFIG;
  const year = new Date().getFullYear();
  return (
    <footer className="fixed-bottom text-center">
      &copy;{year.toString()} - {appConfig.appTitle} by {appConfig.author}
    </footer>
  );
}
