import Container from "@/components/share/Container";
import {
  School,
  HealthAndSafety,
  VolunteerActivism,
  LocalLibrary,
  Agriculture,
  Handshake,
  Water,
  Forest,
} from "@mui/icons-material";
import ProgramBanner from "./_components/ProgramBanner";

const page = () => {
  const programs = [
    {
      title: "Education for All",
      description:
        "Providing educational opportunities for underprivileged children.",
      icon: <School fontSize="large" className="text-blue-500" />,
    },
    {
      title: "Healthcare Initiative",
      description: "Providing medical assistance and healthcare services.",
      icon: <HealthAndSafety fontSize="large" className="text-green-500" />,
    },
    {
      title: "Volunteer Programs",
      description: "Engaging volunteers in various social initiatives.",
      icon: <VolunteerActivism fontSize="large" className="text-red-500" />,
    },
    {
      title: "Library Services",
      description:
        "Establishing libraries and educational resources in rural areas",
      icon: <LocalLibrary fontSize="large" className="text-yellow-500" />,
    },
    {
      title: "Agricultural Development Project",
      description:
        "Supporting farmers and providing modern agricultural technology.",
      icon: <Agriculture fontSize="large" className="text-green-500" />,
    },
    {
      title: "Water Conservation Initiative ",
      description:
        "Ensuring safe water supply and promoting water conservation.",
      icon: <Water fontSize="large" className="text-blue-400" />,
    },
    {
      title: "Forest Conservation Program",
      description:
        "Preserving forests and participating in eco-friendly initiatives",
      icon: <Forest fontSize="large" className="text-green-500" />,
    },
    {
      title: "Collaboration Program",
      description:
        "Partnering with various institutions and organizations for social development.",
      icon: <Handshake fontSize="large" className="text-purple-500" />,
    },
  ];

  return (
    <div>
      <ProgramBanner />
      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
