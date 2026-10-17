import { Metadata } from "next";
import InitiativesHomePage from "./_components/InitiativesHomePage";

export const metadata: Metadata = {
  title: "Initiatives | Ziaur Rahman Foundation",
  description:
    "Explore the initiatives of Ziaur Rahman Foundation in education, health services, disaster relief and community empowerment across Bangladesh.",
};

const InitiativesPage = () => <InitiativesHomePage />;

export default InitiativesPage;
