"use client";

import { countryList } from "@/constant/country";
import {
    AccountBalance,
    CheckCircle,
    CreditCard,
    Payments,
    Security,
    VolunteerActivism,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputAdornment,
    InputLabel,
    Link,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";

interface DonationFormProps {
    language: string;
    onSubmit: (data: any) => Promise<void>;
    isProcessing: boolean;
    allCheckboxesChecked: boolean;
    selectedCountry: any;
    setSelectedCountry: (country: any) => void;
    mobileNumber: string;
    setMobileNumber: (number: string) => void;
    whatsappNumber: string;
    setWhatsappNumber: (number: string) => void;
    donorInfo: { fullName: string; email: string };
    handleDonorInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    certifyInfo: boolean;
    setCertifyInfo: (value: boolean) => void;
    agreePolicy: boolean;
    setAgreePolicy: (value: boolean) => void;
    agreeTerms: boolean;
    setAgreeTerms: (value: boolean) => void;
    customAmount: string;
    handleCustomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    getTotalAmount: () => number;
    handleCountryChange: (event: any) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({
    onSubmit,
    isProcessing,
    allCheckboxesChecked,
    selectedCountry,
    setSelectedCountry,
    mobileNumber,
    setMobileNumber,
    whatsappNumber,
    setWhatsappNumber,
    donorInfo,
    handleDonorInfoChange,
    certifyInfo,
    setCertifyInfo,
    agreePolicy,
    setAgreePolicy,
    agreeTerms,
    setAgreeTerms,
    customAmount,
    handleCustomAmountChange,
    getTotalAmount,
    handleCountryChange,
}) => {
    const impactStats = [
        { icon: <SchoolIcon />, number: "15,000+", label: "Students Supported" },
        { icon: <LocalHospitalIcon />, number: "50,000+", label: "Medical Aid Provided" },
        { icon: <WaterDropIcon />, number: "100+", label: "Clean Water Projects" },
        { icon: <ForestIcon />, number: "25,000+", label: "Trees Planted" },
    ];

    return (
        <>
            {/* Impact Stats */}
            <Grid container spacing={3} sx={{ mb: 6 }}>
                {impactStats.map((stat, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <Paper
                            sx={{
                                p: 3,
                                textAlign: "center",
                                background: "rgba(255, 255, 255, 0.9)",
                                borderRadius: 3,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "#216740",
                                    width: 60,
                                    height: 60,
                                    mx: "auto",
                                    mb: 2,
                                }}
                            >
                                {stat.icon}
                            </Avatar>
                            <Typography variant="h4" fontWeight="bold" color="#216740">
                                {stat.number}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {stat.label}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Main Donation Card */}
            <Paper
                sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
            >
                <Grid container>
                    {/* Left Side - Donation Form */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ p: { xs: 3, md: 5 } }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                                Complete Your Donation
                            </Typography>

                            {/* Amount Selection */}
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Donation Amount
                            </Typography>
                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        label="Custom Amount (BDT)"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">৳</InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Donor Information */}
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
                                Your Information
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="fullName"
                                        value={donorInfo.fullName}
                                        onChange={handleDonorInfoChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={donorInfo.email}
                                        onChange={handleDonorInfoChange}
                                        required
                                    />
                                </Grid>

                                {/* Mobile Number */}
                                <Grid item xs={12}>
                                    <Typography variant="body2" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
                                        Mobile Number
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                        <FormControl sx={{ width: "140px" }}>
                                            <InputLabel>Country Code</InputLabel>
                                            <Select
                                                value={selectedCountry.code}
                                                onChange={handleCountryChange}
                                                label="Country Code"
                                                renderValue={(value) => {
                                                    const country = countryList.find((c) => c.code === value);
                                                    return `${country?.flag} ${country?.code}`;
                                                }}
                                            >
                                                {countryList.map((country) => (
                                                    <MenuItem key={country.code} value={country.code}>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                            <span>{country.flag}</span>
                                                            <span>{country.code}</span>
                                                            <Typography variant="caption" color="text.secondary">
                                                                ({country.name})
                                                            </Typography>
                                                        </Box>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            fullWidth
                                            placeholder={selectedCountry.example}
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            helperText={`Example: ${selectedCountry.example}`}
                                        />
                                    </Box>
                                </Grid>

                                {/* WhatsApp Number */}
                                <Grid item xs={12}>
                                    <Typography variant="body2" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
                                        WhatsApp Number (Optional)
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                        <FormControl sx={{ width: "140px" }}>
                                            <InputLabel>Country Code</InputLabel>
                                            <Select
                                                value={selectedCountry.code}
                                                onChange={handleCountryChange}
                                                label="Country Code"
                                            >
                                                {countryList.map((country) => (
                                                    <MenuItem key={country.code} value={country.code}>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                            <span>{country.flag}</span>
                                                            <span>{country.code}</span>
                                                        </Box>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            fullWidth
                                            placeholder={selectedCountry.example}
                                            value={whatsappNumber}
                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                            helperText={`Example: ${selectedCountry.example} (Optional)`}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* Checkboxes */}
                            <Box sx={{ mt: 4, mb: 3 }}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                                    Please confirm the following:
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={certifyInfo}
                                                onChange={(e) => setCertifyInfo(e.target.checked)}
                                                sx={{ color: "#216740", "&.Mui-checked": { color: "#216740" } }}
                                            />
                                        }
                                        label={
                                            <Typography variant="body2">
                                                I certify that the above provided information is correct. I am a{" "}
                                                {selectedCountry.name} citizen and I do hereby declare that the
                                                contributions are from my personal fund.
                                            </Typography>
                                        }
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={agreePolicy}
                                                onChange={(e) => setAgreePolicy(e.target.checked)}
                                                sx={{ color: "#216740", "&.Mui-checked": { color: "#216740" } }}
                                            />
                                        }
                                        label={
                                            <Typography variant="body2">
                                                I agree to the{" "}
                                                <Link href="/privacy-policy" color="#216740" underline="hover" target="_blank">
                                                    Privacy Policy
                                                </Link>
                                            </Typography>
                                        }
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={agreeTerms}
                                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                                sx={{ color: "#216740", "&.Mui-checked": { color: "#216740" } }}
                                            />
                                        }
                                        label={
                                            <Typography variant="body2">
                                                I agree to the{" "}
                                                <Link href="/terms-and-conditions" color="#216740" underline="hover" target="_blank">
                                                    Terms & Conditions
                                                </Link>
                                            </Typography>
                                        }
                                    />
                                </FormGroup>
                            </Box>

                            {/* Payment Note */}
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                                <Payments sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
                                You will be redirected to SSLCommerz secure payment page with 37+ payment options.
                            </Typography>

                            <Paper sx={{ p: 3, bgcolor: "#", borderRadius: 2, mb: 3 }}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    Donation Summary
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                    <Typography variant="body2" color="text.secondary">Donation Amount</Typography>
                                    <Typography variant="body1" fontWeight="bold">৳{getTotalAmount().toLocaleString()}</Typography>
                                </Box>
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                                    <Typography variant="body2" fontWeight="bold">Total</Typography>
                                    <Typography variant="h6" fontWeight="bold" color="#216740">
                                        ৳{getTotalAmount().toLocaleString()}
                                    </Typography>
                                </Box>
                            </Paper>

                            <Button
                                variant="contained"
                                fullWidth
                                onClick={onSubmit}
                                disabled={isProcessing || !allCheckboxesChecked}
                                sx={{
                                    py: 2,
                                    borderRadius: 2,
                                    bgcolor: "#FEC909",
                                    color: "#216740",
                                    fontWeight: "bold",
                                    fontSize: "1.1rem",
                                    "&:hover": { bgcolor: "#e5b508" },
                                    "&.Mui-disabled": { bgcolor: "#f5f5f5", color: "#999" },
                                }}
                            >
                                {isProcessing ? <CircularProgress size={24} sx={{ color: "#216740" }} /> : "Proceed to Payment"}
                            </Button>

                            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                                <Security sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
                                Secured by SSLCommerz - Your transaction is safe and encrypted
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side - Impact Preview */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            background: "linear-gradient(135deg, #216740 0%, #1a5533 100%)",
                            color: "white",
                            p: { xs: 3, md: 5 },
                        }}
                    >
                        <Box sx={{ textAlign: "center", mb: 4 }}>
                            <VolunteerActivism sx={{ fontSize: 60, color: "#FEC909", mb: 2 }} />
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Your Donation Changes Lives
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                                What your donation can do:
                            </Typography>
                            {[
                                { amount: 500, impact: "Provides educational materials for 1 child" },
                                { amount: 2000, impact: "Monthly food support for a family" },
                                { amount: 5000, impact: "Medical treatment for a patient" },
                                { amount: 10000, impact: "Clean water facility for a community" },
                            ].map((item, idx) => (
                                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 2, p: 1, borderRadius: 2, bgcolor: "rgba(255,255,255,0.1)" }}>
                                    <CheckCircle sx={{ fontSize: 20, mr: 2, color: "#FEC909" }} />
                                    <Box>
                                        <Typography variant="body2" fontWeight="bold">৳{item.amount.toLocaleString()}</Typography>
                                        <Typography variant="caption" sx={{ opacity: 0.9 }}>{item.impact}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 3 }} />

                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                                100% of your donation goes directly to those in need
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                                <CreditCard sx={{ fontSize: 20 }} />
                                <AccountBalance sx={{ fontSize: 20 }} />
                                <Payments sx={{ fontSize: 20 }} />
                                <Typography variant="caption">+ 34 more payment methods</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

// Missing icons - add these imports or use MUI icons
const SchoolIcon = () => <span>🎓</span>;
const LocalHospitalIcon = () => <span>🏥</span>;
const WaterDropIcon = () => <span>💧</span>;
const ForestIcon = () => <span>🌳</span>;

export default DonationForm;