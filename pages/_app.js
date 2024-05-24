import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
