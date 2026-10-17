import { Metadata } from "next";
import CovidHomePage from "./_components/CovidHomePage";

export const metadata: Metadata = {
  title: "COVID-19 Relief & Support | Ziaur Rahman Foundation",
  description:
    "Ziaur Rahman Foundation's COVID-19 relief work — medical assistance, education and community outreach for people affected by the pandemic.",
};

const CovidPage = () => <CovidHomePage />;

export default CovidPage;
