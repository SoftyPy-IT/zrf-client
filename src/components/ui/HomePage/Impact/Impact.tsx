import Container from "@/components/share/Container";
import "./Impact.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Statistics from "../Statistics/Statistics";

const ImpactSection = () => {
  const impactData = [
    {
      title: "সহায়তা প্রাপ্ত মানুষ",
      value: "২৫,০০০+",
      description: "আমরা হাজারো মানুষের পাশে দাঁড়িয়েছি।",
    },
    {
      title: "স্বেচ্ছাসেবক",
      value: "৫০০+",
      description: "নিবেদিত স্বেচ্ছাসেবক বিভিন্ন অঞ্চলে সাহায্য করছেন।",
    },
    {
      title: "সম্পন্ন প্রকল্প",
      value: "১২০+",
      description: "বিভিন্ন স্বাস্থ্য ও শিক্ষা প্রকল্প সফলভাবে সম্পন্ন হয়েছে।",
    },
    {
      title: "প্রদানকৃত তহবিল",
      value: "$১মি+",
      description: "বিভিন্ন কল্যাণমূলক প্রকল্পের জন্য তহবিল সংগ্রহ করা হয়েছে।",
    },
  ];

  return (
    <div className="impact-bg  py-32  ">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-16 items-center mt-10 ">
          <div>
            <h2 className="text-3xl font-bold mb-7 text-white uppercase border-l-4 border-yellow-600 pl-2 rounded-t-full">
              উল্লেখযোগ্য কার্যক্রম
            </h2>
            <ul className="text-white space-y-3">
              <li>
                <CheckCircleOutlineIcon className="text-yellow-600" /> ঠোঁটকাটা,
                তালুকাটা এবং পোড়া রোগীদের জন্য প্লাস্টিক সার্জারি ক্যাম্পের
                আয়োজন
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-yellow-600" /> দারিদ্র্য
                বিমোচন কর্মসূচির অংশ হিসেবে হাঁস-মুরগি, ছাগল ও মাছের পোনা বিতরণ
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-yellow-600" /> গণতন্ত্র
                পুনরুদ্ধারের আন্দোলনে পঙ্গুত্ববরণকারী নেতা কর্মীদের কৃত্রিম পা
                প্রতিস্থাপন
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-yellow-600" />{" "}
                রিহ্যাবিলিটেশন কমিটির মাধ্যমে নির্যাতিত কর্মীদের চিকিৎসা সেবা
                প্রদান করা
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-yellow-600" /> ২৪ ঘন্টা
                মোবাইল হটলাইন সেবার মাধ্যমে বিশেষজ্ঞ চিকিৎসা সেবা প্রদান করা
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-yellow-600" /> গুম খুন
                নির্যাতিত বিএনপির কর্মীদের পরিবারকে শিক্ষা সহায়তা ও চিকিৎসা
                প্রদান
              </li>
            </ul>
            {/* <button className="bg-yellow-600 px-6 py-2 text-white rounded-full mt-7 uppercase">
              এখনই অনুদান দিন
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
            {impactData.map((item, index) => (
              <div key={index} className="border p-5 text-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-4xl font-bold text-yellow-600 mb-4">
                  {item.value}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImpactSection;
