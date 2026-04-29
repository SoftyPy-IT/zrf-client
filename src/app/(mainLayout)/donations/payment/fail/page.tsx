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
//   Alert,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   CircularProgress,
// } from "@mui/material";
// import {
//   Error,
//   ReportProblem,
//   CreditCard,
//   Refresh,
//   Home,
//   Help,
//   Phone,
//   Email,
//   ArrowBack,
//   Warning,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { useLanguage } from "@/provider/LanguageProvider";

// const PaymentFailPage = () => {
//   const { language } = useLanguage();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const error = searchParams.get("error");
//   const tran_id = searchParams.get("tran_id");

//   const commonIssues = [
//     {
//       icon: <CreditCard />,
//       title:
//         language === "ENG" ? "Insufficient Balance" : "অপর্যাপ্ত ব্যালেন্স",
//       description:
//         language === "ENG"
//           ? "Please check your card/bank balance and try again"
//           : "অনুগ্রহ করে আপনার কার্ড/ব্যাংক ব্যালেন্স চেক করে আবার চেষ্টা করুন",
//     },
//     {
//       icon: <Warning />,
//       title: language === "ENG" ? "Invalid Card Details" : "ভুল কার্ড তথ্য",
//       description:
//         language === "ENG"
//           ? "Make sure your card number, expiry date, and CVV are correct"
//           : "নিশ্চিত করুন আপনার কার্ড নম্বর, মেয়াদ শেষের তারিখ এবং CVV সঠিক আছে",
//     },
//     {
//       icon: <ReportProblem />,
//       title: language === "ENG" ? "Network Issue" : "নেটওয়ার্ক সমস্যা",
//       description:
//         language === "ENG"
//           ? "Check your internet connection and try again"
//           : "আপনার ইন্টারনেট সংযোগ চেক করে আবার চেষ্টা করুন",
//     },
//     {
//       icon: <Help />,
//       title:
//         language === "ENG" ? "Payment Gateway Error" : "পেমেন্ট গেটওয়ে সমস্যা",
//       description:
//         language === "ENG"
//           ? "Please try again after a few minutes"
//           : "অনুগ্রহ করে কয়েক মিনিট পরে আবার চেষ্টা করুন",
//     },
//   ];

//   const handleTryAgain = () => {
//     router.push("/donate");
//   };

//   const handleContactSupport = () => {
//     window.location.href = "mailto:support@zrf.org?subject=Payment%20Issue";
//   };

//   const handleGoBack = () => {
//     router.back();
//   };

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
//           {/* Error Card */}
//           <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 3 }}>
//             {/* Header */}
//             <Box
//               sx={{
//                 background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
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
//                 <Error sx={{ fontSize: 80, color: "#FEC909", mb: 2 }} />
//               </motion.div>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 {language === "ENG"
//                   ? "Payment Failed!"
//                   : "পেমেন্ট ব্যর্থ হয়েছে!"}
//               </Typography>
//               <Typography variant="body1" sx={{ opacity: 0.9 }}>
//                 {language === "ENG"
//                   ? "We couldn't process your payment. Please try again."
//                   : "আমরা আপনার পেমেন্ট প্রক্রিয়া করতে পারিনি। অনুগ্রহ করে আবার চেষ্টা করুন।"}
//               </Typography>
//             </Box>

//             {/* Content */}
//             <CardContent sx={{ p: 4 }}>
//               {/* Error Message */}
//               {error && (
//                 <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
//                   {error === "validation_failed"
//                     ? language === "ENG"
//                       ? "Payment validation failed. Please try again."
//                       : "পেমেন্ট ভ্যালিডেশন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
//                     : error === "payment_failed"
//                       ? language === "ENG"
//                         ? "Payment processing failed at gateway."
//                         : "গেটওয়েতে পেমেন্ট প্রক্রিয়াকরণ ব্যর্থ হয়েছে।"
//                       : error}
//                 </Alert>
//               )}

//               {/* Transaction ID (if available) */}
//               {tran_id && (
//                 <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
//                   <Typography variant="body2">
//                     {language === "ENG" ? "Transaction ID: " : "লেনদেন আইডি: "}
//                     <strong>{tran_id}</strong>
//                   </Typography>
//                 </Alert>
//               )}

//               {/* Help Message */}
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {language === "ENG"
//                   ? "What could have gone wrong?"
//                   : "কি ভুল হতে পারে?"}
//               </Typography>

//               <List sx={{ mb: 3 }}>
//                 {commonIssues.map((issue, index) => (
//                   <ListItem key={index}>
//                     <ListItemIcon>
//                       <issue.icon.type
//                         {...issue.icon.props}
//                         sx={{ color: "#FEC909" }}
//                       />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary={issue.title}
//                       secondary={issue.description}
//                     />
//                   </ListItem>
//                 ))}
//               </List>

//               {/* Suggested Actions */}
//               <Alert severity="warning" sx={{ mb: 3, borderRadius: 2 }}>
//                 <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
//                   {language === "ENG" ? "Important Note:" : "গুরুত্বপূর্ণ নোট:"}
//                 </Typography>
//                 <Typography variant="body2">
//                   {language === "ENG"
//                     ? "Your account has not been charged. You can safely try again with a different payment method or contact your bank if the issue persists."
//                     : "আপনার অ্যাকাউন্ট থেকে কোনো টাকা কাটা হয়নি। আপনি নিরাপদে অন্য পেমেন্ট পদ্ধতি দিয়ে আবার চেষ্টা করতে পারেন অথবা সমস্যা থাকলে আপনার ব্যাংকে যোগাযোগ করতে পারেন।"}
//                 </Typography>
//               </Alert>

//               {/* Action Buttons */}
//               <Grid container spacing={2} sx={{ mb: 3 }}>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     startIcon={<Refresh />}
//                     onClick={handleTryAgain}
//                     sx={{
//                       bgcolor: "#FEC909",
//                       color: "#216740",
//                       "&:hover": { bgcolor: "#e5b508" },
//                       py: 1.5,
//                     }}
//                   >
//                     {language === "ENG" ? "Try Again" : "আবার চেষ্টা করুন"}
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<ArrowBack />}
//                     onClick={handleGoBack}
//                     sx={{
//                       borderColor: "#216740",
//                       color: "#216740",
//                       "&:hover": {
//                         borderColor: "#1a5533",
//                         bgcolor: "rgba(33,103,64,0.1)",
//                       },
//                       py: 1.5,
//                     }}
//                   >
//                     {language === "ENG" ? "Go Back" : "পেছনে যান"}
//                   </Button>
//                 </Grid>
//               </Grid>

//               {/* Alternative Payment Methods */}
//               <Paper
//                 variant="outlined"
//                 sx={{ p: 3, mb: 3, bgcolor: "#f9f9f9" }}
//               >
//                 <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                   {language === "ENG"
//                     ? "Alternative Payment Methods"
//                     : "বিকল্প পেমেন্ট পদ্ধতি"}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {language === "ENG"
//                     ? "You can try these payment methods for your donation:"
//                     : "আপনার দানের জন্য এই পেমেন্ট পদ্ধতিগুলো试试 করতে পারেন:"}
//                 </Typography>
//                 <Grid container spacing={1}>
//                   <Grid item xs={6}>
//                     <Typography variant="body2">• Credit/Debit Card</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2">• bKash</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2">• Nagad</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2">• Rocket</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2">• Bank Transfer</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2">• Internet Banking</Typography>
//                   </Grid>
//                 </Grid>
//               </Paper>

//               {/* Support Section */}
//               <Box
//                 sx={{
//                   p: 3,
//                   bgcolor: "#FFF9E6",
//                   borderRadius: 2,
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
//                   {language === "ENG" ? "Need Help?" : "সাহায্য প্রয়োজন?"}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {language === "ENG"
//                     ? "Our support team is here to assist you"
//                     : "আমাদের সাপোর্ট টিম আপনাকে সাহায্য করতে এখানে আছে"}
//                 </Typography>
//                 <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//                   <Button
//                     variant="outlined"
//                     startIcon={<Phone />}
//                     onClick={() => (window.location.href = "tel:+880123456789")}
//                     size="small"
//                   >
//                     Call Us
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     startIcon={<Email />}
//                     onClick={handleContactSupport}
//                     size="small"
//                   >
//                     Email Support
//                   </Button>
//                 </Box>
//               </Box>

//               {/* Navigation */}
//               <Divider sx={{ my: 3 }} />

//               <Button
//                 fullWidth
//                 variant="text"
//                 startIcon={<Home />}
//                 onClick={() => router.push("/")}
//                 sx={{ color: "#216740" }}
//               >
//                 {language === "ENG" ? "Return to Homepage" : "হোমপেজে ফিরে যান"}
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Additional Tips */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <Paper sx={{ mt: 3, p: 3, borderRadius: 3, textAlign: "center" }}>
//               <Typography variant="body2" color="text.secondary">
//                 {language === "ENG"
//                   ? "Still having issues? You can also donate through bank transfer. Contact us for bank details."
//                   : "এখনও সমস্যা হচ্ছে? আপনি ব্যাংক ট্রান্সফারের মাধ্যমেও দান করতে পারেন। ব্যাংক বিবরণের জন্য আমাদের সাথে যোগাযোগ করুন।"}
//               </Typography>
//             </Paper>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default PaymentFailPage;

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
