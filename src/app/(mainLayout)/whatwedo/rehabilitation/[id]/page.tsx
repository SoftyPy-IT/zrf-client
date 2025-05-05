// "use client";

// import React, { useEffect, useState } from "react";
// import { useLanguage } from "@/provider/LanguageProvider";
// import SingleRehabilitation from "../_components/SingleRehabilitation";
// interface paramsId {
//   params: {
//     id: string;
//   };
// }
// const Rehabilitation = ({ params }: paramsId) => {
//   const { language } = useLanguage();
//   const { id } = params;

//   const [data, setData] = useState(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo/${id}`
//         );
//         const result = await res.json();
//         if (result?.data) {
//           setData(result.data);
//         } else {
//           setError("Report data not found");
//         }
//       } catch (error) {
//         setError("An error occurred while fetching data.");
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }
//   return (
//     <>
//       <>
//         {data && (
//           <SingleRehabilitation language={language} whatWedoData={data} />
//         )}
//       </>
//     </>
//   );
// };

// export default Rehabilitation;

import { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleRehabilitation from "../_components/SingleRehabilitation";


type Props = {
  params: {
    id: string;
  };
};

async function getProjectData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo/${id}`,
      {
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (result?.data) return result.data;
    return null;
  } catch (error) {
    return null;
  }
}

// Optional: Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProjectData(params.id);

  if (!data) return {};

  return {
    title: data.english_title || "Project Details",
    openGraph: {
      title: data.english_title,
      images: data.eng_images ? [{ url: data.eng_images }] : [],
    },
  };
}

const Rehabilitation = async ({ params }: Props) => {
  const data = await getProjectData(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <SingleRehabilitation whatWedoData={data} />
    </div>
  );
};

export default Rehabilitation;

