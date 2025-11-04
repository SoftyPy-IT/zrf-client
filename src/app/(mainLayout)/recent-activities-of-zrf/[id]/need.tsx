// import { Metadata } from "next";
// import SingleActivityPage from "../_components/SingleActivityPage";
// import { stripHtml } from "@/utils/stripHtml";

// interface ActivityParams {
//   params: {
//     id: string;
//   };
// }

// export async function generateMetadata({
//   params,
// }: ActivityParams): Promise<Metadata> {
//   const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
//   const id = params.id;

//   const res = await fetch(`${baseApi}/activity/${id}`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     return {
//       title: "Activity Not Found",
//       description: "The requested activity could not be loaded.",
//     };
//   }

//   const data = await res.json();
//   const activity = data?.data || {};

//   const title = activity.bangla_title || activity.english_title || "Activity";

//   const rawDescription =
//     activity.bangla_description || activity.english_description || "";
//   const description = stripHtml(rawDescription);

//   const imgUrl =
//     activity?.bng_Images?.[0] ||
//     activity?.eng_images?.[0] ||
//     "/default-image.jpg";

//   const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/activity/${id}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       url: shareUrl,
//       images: [
//         {
//           url: imgUrl,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [imgUrl],
//     },
//   };
// }

// export default function Page() {
//   return (
//     <div>
//       <SingleActivityPage />
//     </div>
//   );
// }
