import Container from "@/components/share/Container";
import "./Impact.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import programm from '../../../../../src/assets/images/program/project4.png'
import Image from "next/image";
import { Button } from "@mui/material";
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
          <div className="space-y-3 text-white">
            <h2 className="text-3xl font-bold ">Helping is Great Virtue for Every Human’s.</h2>
            <p className="text-white ">It has been determined through research that when we feel to help, and that someone authentically needs our assistance, and that no trick is being played on us, we reliably do intervene. Interestingly, it has been found that we are less likely to help an examination of the intrinsic worth of helping others, transcending cultural, religious, and societal boundaries.</p>
            <Button sx={{background:'#E3C80D'}}>Donate Now </Button>
          </div>
          <Image src={programm} alt="Programm" width={1000} height={300} />
        </div>
      </Container>
    </div>
  );
};

export default ImpactSection;
