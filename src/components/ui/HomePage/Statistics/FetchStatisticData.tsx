import React from "react";
import Container from "@/components/share/Container";
import FoundationIcon from "@mui/icons-material/EmojiEvents";
import DonationIcon from "@mui/icons-material/VolunteerActivism";
import PartnersIcon from "@mui/icons-material/Public";
import ProjectsIcon from "@mui/icons-material/AssignmentTurnedIn";
import { TOverview } from "@/types/type";

interface OverviewProps {
    overviewData: TOverview[];
    language: string;
}

const FetchStatisticData: React.FC<OverviewProps> = ({ overviewData, language }) => {
    const iconStyle = { fontSize: { xs: 40, lg: 60 } }
    const impactData = overviewData.map((item) => {
        const { year_count_english, year_text_english, year_count_bangla, year_text_bangla, volunteer_count_english, volunteer_text_english, volunteer_count_bangla, volunteer_text_bangla, complete_project_count_english, complete_project_text_english, complete_project_count_bangla, complete_project_text_bangla, donation_count_english, donation_text_english, donation_count_bangla, donation_text_banlga } = item;

        return [
            {
                title: language === "ENG" ? year_text_english : year_text_bangla,
                value: language === "ENG" ? year_count_english : year_count_bangla,
                icon: <FoundationIcon sx={iconStyle} />,
            },
            {
                title: language === "ENG" ? volunteer_text_english : volunteer_text_bangla,
                value: language === "ENG" ? volunteer_count_english : volunteer_count_bangla,
                icon: <DonationIcon sx={iconStyle} />,
            },
            {
                title: language === "ENG" ? complete_project_text_english : complete_project_text_bangla,
                value: language === "ENG" ? complete_project_count_english : complete_project_count_bangla,
                icon: <PartnersIcon sx={iconStyle} />,
            },
            {
                title: language === "ENG" ? donation_text_english : donation_text_banlga,
                value: language === "ENG" ? donation_count_english : donation_count_bangla,
                icon: <ProjectsIcon sx={iconStyle} />,
            },
        ];
    })[0];

    return (
        <Container>
            <div className="-mb-[100px] z-[99] relative">
                <div className="bg-white p-4  md:p-10 shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {impactData?.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center bg-white px-5 py-2  md:py-12 text-center border-b-4 border hover:border-green-600 transition duration-300 rounded-sm space-y-1"
                            >
                                <div className="text-green-600 text-xl md:text-5xl font-bold md:mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-700 font-semibold text-[12px] md:text-lg md:mb-4">
                                    {stat.title}
                                </div>
                                <div className="text-green-600 ">{stat.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FetchStatisticData;
