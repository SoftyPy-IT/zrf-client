import { Metadata } from "next";
import RehabilitationHomePage from "./_components/RehabilitationHomePage";

export const metadata: Metadata = {
  title: "Rehabilitation Programmes | Ziaur Rahman Foundation",
  description:
    "Ziaur Rahman Foundation's rehabilitation programmes restore lives through medical treatment, recovery support and compassionate community care.",
};

const RehabilitationPage = () => <RehabilitationHomePage />;

export default RehabilitationPage;
