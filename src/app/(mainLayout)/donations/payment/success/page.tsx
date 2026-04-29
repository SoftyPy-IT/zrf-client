// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Card,
//   CardContent,
//   Grid,
//   Divider,
//   CircularProgress,
//   Alert,
//   Chip,
// } from "@mui/material";
// import {
//   CheckCircle,
//   Receipt,
//   Email,
//   WhatsApp,
//   Facebook,
//   Twitter,
//   Home,
//   Download,
//   Print,
//   Share,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { useLanguage } from "@/provider/LanguageProvider";

// const PaymentSuccessPage = () => {
//   const { language } = useLanguage();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [donationDetails, setDonationDetails] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   const tran_id = searchParams.get("tran_id");
//   const amount = searchParams.get("amount");
//   const val_id = searchParams.get("val_id");

//   useEffect(() => {
//     // Fetch donation details from backend
//     const fetchDonationDetails = async () => {
//       if (!tran_id) {
//         setError("Transaction ID not found");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_API_URL}/donations/payment/status/${tran_id}`,
//         );
//         const data = await response.json();

//         if (data.success && data.data) {
//           setDonationDetails(data.data);
//         } else {
//           setError("Unable to fetch donation details");
//         }
//       } catch (err) {
//         console.error("Error fetching donation details:", err);
//         setError("Failed to load donation details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonationDetails();
//   }, [tran_id]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownloadReceipt = () => {
//     // Create receipt HTML
//     const receiptHtml = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Donation Receipt - Ziaur Rahman Foundation</title>
//         <style>
//           body { font-family: Arial, sans-serif; padding: 40px; }
//           .receipt { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; }
//           .header { text-align: center; border-bottom: 2px solid #216740; padding-bottom: 20px; }
//           .content { margin: 20px 0; }
//           .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
//           table { width: 100%; border-collapse: collapse; }
//           td { padding: 10px; }
//           .label { font-weight: bold; background: #f5f5f5; }
//         </style>
//       </body>
//       </html>
//     `;

//     const win = window.open();
//     win?.document.write(receiptHtml);
//     win?.document.close();
//     win?.print();
//   };

//   const shareOnSocial = (platform: string) => {
//     const text = encodeURIComponent(
//       `I just donated ৳${amount} to Ziaur Rahman Foundation! Join me in making a difference. 🎉`,
//     );
//     const url = encodeURIComponent(window.location.href);

//     let shareUrl = "";
//     switch (platform) {
//       case "facebook":
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
//         break;
//       case "twitter":
//         shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
//         break;
//       case "whatsapp":
//         shareUrl = `https://wa.me/?text=${text}%20${url}`;
//         break;
//     }

//     window.open(shareUrl, "_blank");
//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
//         }}
//       >
//         <CircularProgress sx={{ color: "#216740" }} />
//       </Box>
//     );
//   }

//   if (error || !donationDetails) {
//     return (
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
//           p: 3,
//         }}
//       >
//         <Paper sx={{ p: 4, textAlign: "center", maxWidth: 500 }}>
//           <Typography variant="h5" color="error" gutterBottom>
//             {language === "ENG"
//               ? "Something went wrong!"
//               : "কিছু একটা ভুল হয়েছে!"}
//           </Typography>
//           <Typography variant="body1" color="text.secondary" paragraph>
//             {error || "Unable to load donation details"}
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={() => router.push("/donate")}
//             sx={{ bgcolor: "#216740", "&:hover": { bgcolor: "#1a5533" } }}
//           >
//             {language === "ENG" ? "Back to Donation" : "দানে ফিরে যান"}
//           </Button>
//         </Paper>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
//         py: 8,
//       }}
//     >
//       <Container maxWidth="md">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Success Card */}
//           <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 3 }}>
//             {/* Header */}
//             <Box
//               sx={{
//                 background: "linear-gradient(135deg, #216740 0%, #1a5533 100%)",
//                 color: "white",
//                 p: 4,
//                 textAlign: "center",
//               }}
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//               >
//                 <CheckCircle sx={{ fontSize: 80, color: "#FEC909", mb: 2 }} />
//               </motion.div>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 {language === "ENG"
//                   ? "Payment Successful!"
//                   : "পেমেন্ট সফল হয়েছে!"}
//               </Typography>
//               <Typography variant="body1" sx={{ opacity: 0.9 }}>
//                 {language === "ENG"
//                   ? "Thank you for your generous donation"
//                   : "আপনার উদার দানের জন্য ধন্যবাদ"}
//               </Typography>
//             </Box>

//             {/* Content */}
//             <CardContent sx={{ p: 4 }}>
//               <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
//                 {language === "ENG"
//                   ? "Your donation has been successfully processed. A confirmation email has been sent to your inbox."
//                   : "আপনার দান সফলভাবে প্রক্রিয়া করা হয়েছে। একটি নিশ্চিতকরণ ইমেল আপনার ইনবক্সে পাঠানো হয়েছে।"}
//               </Alert>

//               {/* Donation Summary */}
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {language === "ENG" ? "Donation Summary" : "দানের সারাংশ"}
//               </Typography>

//               <Paper
//                 variant="outlined"
//                 sx={{ p: 3, mb: 3, bgcolor: "#f9f9f9" }}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         mb: 1,
//                       }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         {language === "ENG" ? "Transaction ID" : "লেনদেন আইডি"}
//                       </Typography>
//                       <Typography variant="body2" fontWeight="bold">
//                         {donationDetails.transaction_id || tran_id}
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         mb: 1,
//                       }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         {language === "ENG" ? "Donor Name" : "দাতার নাম"}
//                       </Typography>
//                       <Typography variant="body2" fontWeight="bold">
//                         {donationDetails.donor_name || "N/A"}
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         mb: 1,
//                       }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         {language === "ENG" ? "Email" : "ইমেইল"}
//                       </Typography>
//                       <Typography variant="body2" fontWeight="bold">
//                         {donationDetails.donor_email || "N/A"}
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         mb: 1,
//                       }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         {language === "ENG" ? "Amount" : "পরিমাণ"}
//                       </Typography>
//                       <Typography
//                         variant="h6"
//                         fontWeight="bold"
//                         color="#216740"
//                       >
//                         ৳{donationDetails.amount || amount}
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         mb: 1,
//                       }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         {language === "ENG"
//                           ? "Payment Status"
//                           : "পেমেন্ট স্ট্যাটাস"}
//                       </Typography>
//                       <Chip
//                         label={donationDetails.payment_status || "Success"}
//                         color="success"
//                         size="small"
//                       />
//                     </Box>
//                     <Divider />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Box
//                       sx={{ display: "flex", justifyContent: "space-between" }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         {language === "ENG" ? "Date" : "তারিখ"}
//                       </Typography>
//                       <Typography variant="body2">
//                         {new Date().toLocaleString()}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </Paper>

//               {/* Impact Message */}
//               <Box
//                 sx={{
//                   p: 3,
//                   bgcolor: "#FFF9E6",
//                   borderRadius: 2,
//                   mb: 3,
//                   borderLeft: "4px solid #FEC909",
//                 }}
//               >
//                 <Typography variant="body2" color="#216740">
//                   {language === "ENG"
//                     ? `Your donation of ৳${donationDetails.amount || amount} will help us provide essential support to those in need. Together, we can make a difference!`
//                     : `আপনার ${donationDetails.amount || amount} টাকার দান আমাদের প্রয়োজনীয় মানুষদের মৌলিক সহায়তা প্রদানে সাহায্য করবে। একসাথে, আমরা পরিবর্তন আনতে পারি!`}
//                 </Typography>
//               </Box>

//               {/* Action Buttons */}
//               <Grid container spacing={2} sx={{ mb: 3 }}>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Download />}
//                     onClick={handleDownloadReceipt}
//                     sx={{
//                       borderColor: "#216740",
//                       color: "#216740",
//                       "&:hover": {
//                         borderColor: "#1a5533",
//                         bgcolor: "rgba(33,103,64,0.1)",
//                       },
//                     }}
//                   >
//                     {language === "ENG" ? "Download Receipt" : "রসিদ ডাউনলোড"}
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Print />}
//                     onClick={handlePrint}
//                     sx={{
//                       borderColor: "#216740",
//                       color: "#216740",
//                       "&:hover": {
//                         borderColor: "#1a5533",
//                         bgcolor: "rgba(33,103,64,0.1)",
//                       },
//                     }}
//                   >
//                     {language === "ENG" ? "Print Receipt" : "রসিদ প্রিন্ট"}
//                   </Button>
//                 </Grid>
//               </Grid>

//               {/* Share Section */}
//               <Typography variant="subtitle2" gutterBottom>
//                 {language === "ENG"
//                   ? "Share your support"
//                   : "আপনার সমর্থন শেয়ার করুন"}
//               </Typography>
//               <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//                 <Button
//                   variant="contained"
//                   startIcon={<Facebook />}
//                   onClick={() => shareOnSocial("facebook")}
//                   sx={{ bgcolor: "#1877f2", "&:hover": { bgcolor: "#166fe5" } }}
//                 >
//                   Facebook
//                 </Button>
//                 <Button
//                   variant="contained"
//                   startIcon={<Twitter />}
//                   onClick={() => shareOnSocial("twitter")}
//                   sx={{ bgcolor: "#1DA1F2", "&:hover": { bgcolor: "#1a91da" } }}
//                 >
//                   Twitter
//                 </Button>
//                 <Button
//                   variant="contained"
//                   startIcon={<WhatsApp />}
//                   onClick={() => shareOnSocial("whatsapp")}
//                   sx={{ bgcolor: "#25D366", "&:hover": { bgcolor: "#20bd5a" } }}
//                 >
//                   WhatsApp
//                 </Button>
//               </Box>

//               {/* Navigation Buttons */}
//               <Divider sx={{ my: 3 }} />

//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     startIcon={<Home />}
//                     onClick={() => router.push("/")}
//                     sx={{
//                       bgcolor: "#216740",
//                       "&:hover": { bgcolor: "#1a5533" },
//                     }}
//                   >
//                     {language === "ENG" ? "Back to Home" : "হোমে ফিরে যান"}
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     startIcon={<Receipt />}
//                     onClick={() => router.push("/donate")}
//                     sx={{
//                       bgcolor: "#FEC909",
//                       color: "#216740",
//                       "&:hover": { bgcolor: "#e5b508" },
//                     }}
//                   >
//                     {language === "ENG" ? "Donate Again" : "আবার দান করুন"}
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default PaymentSuccessPage;
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
