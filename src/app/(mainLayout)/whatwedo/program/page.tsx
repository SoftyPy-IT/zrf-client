import { Metadata } from "next";
import Program from "./_components/Program";

export const metadata: Metadata = {
  title: "Programmes | Ziaur Rahman Foundation",
  description:
    "Explore the programmes of Ziaur Rahman Foundation, uplifting communities across Bangladesh through medical care, relief and social initiatives.",
};

const ProgramPage = () => <Program />;

export default ProgramPage;
