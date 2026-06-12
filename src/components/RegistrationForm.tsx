
'use client';

import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Container,
    FormControlLabel,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
    Stack,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Alert,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Chip,
    IconButton,
    Paper,
    Fade,
    Grow,
    LinearProgress,
    alpha,
    Snackbar,
    RadioGroup,
    Radio,
} from '@mui/material';
import {
    CloudUpload as CloudUploadIcon,
    Delete as DeleteIcon,
    Add as AddIcon,
    CheckCircle as CheckCircleIcon,
    NavigateNext as NavigateNextIcon,
    NavigateBefore as NavigateBeforeIcon,
    School as SchoolIcon,
    Person as PersonIcon,
    Group as GroupIcon,
    Science as ScienceIcon,
    Warning as WarningIcon,

    Image as ImageIcon,
} from '@mui/icons-material';

import { scientificFields, divisions, genders } from '@/lib/constant';
import { uploadMultipleFiles, uploadFile } from './Upload';
import axios from 'axios';
import registrationImg from '../../src/assets/images/registration.jpg';
import { useLanguage } from '@/provider/LanguageProvider';
import RegistrationDetailsModal from './RegistrationDetailsModal';
import { FormData, TeamMember } from '@/interface';




const getSteps = (language: string) => [
    { label: language === 'BNG' ? 'অংশগ্রহণকারীর তথ্য' : 'Participant Info', icon: PersonIcon, description: language === 'BNG' ? 'আপনার ব্যক্তিগত বিবরণ' : 'Your personal details' },
    { label: language === 'BNG' ? 'প্রতিষ্ঠানের তথ্য' : 'Institution Info', icon: SchoolIcon, description: language === 'BNG' ? 'আপনার স্কুল/কলেজের বিবরণ' : 'Your school/college details' },
    { label: language === 'BNG' ? 'প্রকল্পের বিবরণ' : 'Project Details', icon: ScienceIcon, description: language === 'BNG' ? 'আপনার প্রকল্প সম্পর্কে জানান' : 'Tell us about your project' },
    { label: language === 'BNG' ? 'দলের তথ্য' : 'Team Info', icon: GroupIcon, description: language === 'BNG' ? 'প্রকল্পের ধরন ও দলের সদস্য' : 'Project type & team members' },
    { label: language === 'BNG' ? 'ফাইল আপলোড' : 'Uploads', icon: CloudUploadIcon, description: language === 'BNG' ? 'প্রকল্পের ফাইল ও মিডিয়া' : 'Project files & media' },
    { label: language === 'BNG' ? 'ঘোষণাপত্র' : 'Declaration', icon: CheckCircleIcon, description: language === 'BNG' ? 'শর্তাবলী ও নিশ্চিতকরণ' : 'Terms & confirmation' },
];


const initialFormData: FormData = {
    full_name: '',
    date_of_birth: '',
    gender: '',
    mobile_number: '',
    email: '',
    division: '',
    current_class_year: '',
    institution_name: '',
    institution_address: '',
    district: '',
    mentor_name: '',
    mentor_contact: '',
    project_title: '',
    scientific_field: '',
    project_abstract: '',
    objectives: '',
    innovation_novelty: '',
    expected_impact: '',
    project_type: 'individual',
    team_members: [],
    pdfFile: null,
    proposalFile: null,
    photoFiles: [],
    video_link: '',
    info_correct: false,
    project_original: false,
    agree_rules: false,
};


const FILE_SIZE_LIMITS = {
    pdf: 10 * 1024 * 1024,
    proposal: 10 * 1024 * 1024,
    photo: 5 * 1024 * 1024,
};


const OptionalChip = ({ language }: { language: string }) => (
    <Chip
        label={language === 'BNG' ? 'ঐচ্ছিক' : 'Optional'}
        size="small"
        sx={{
            height: 18,
            fontSize: '0.65rem',
            ml: 0.5,
            backgroundColor: 'rgba(255,193,7,0.15)',
            color: '#FFC107',
            border: '1px solid rgba(255,193,7,0.4)',
        }}
    />
);

const RequiredLabel = ({ label, language }: { label: string; language: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
        <span>{label}</span>
        <Typography component="span" sx={{ color: '#f44336', lineHeight: 1 }}>*</Typography>
    </Box>
);

const OptionalLabel = ({ label, language }: { label: string; language: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span>{label}</span>
        <OptionalChip language={language} />
    </Box>
);

const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};


const getMinDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 100);
    return date.toISOString().split('T')[0];
};


const getMaxDate = () => {
    return new Date().toISOString().split('T')[0];
};


export default function RegistrationForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [dateError, setDateError] = useState('');
    const [fileErrors, setFileErrors] = useState<{ [key: string]: string }>({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error');
    const [openImageDialog, setOpenImageDialog] = useState(false);
    const { language } = useLanguage();

    const steps = getSteps(language);

    const showToast = (message: string, severity: 'error' | 'warning' | 'info' | 'success' = 'error') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const validateFileSize = (file: File, type: 'pdf' | 'proposal' | 'photo'): boolean => {
        const limit = FILE_SIZE_LIMITS[type];
        if (file.size > limit) {
            const errorMsg = language === 'BNG'
                ? `${file.name} খুব বড় (${formatFileSize(file.size)}). সর্বোচ্চ অনুমোদিত সাইজ ${formatFileSize(limit)}.`
                : `${file.name} is too large (${formatFileSize(file.size)}). Maximum allowed size is ${formatFileSize(limit)}.`;
            setFileErrors(prev => ({ ...prev, [type]: errorMsg }));
            showToast(errorMsg, 'error');
            return false;
        }
        setFileErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[type];
            return newErrors;
        });
        return true;
    };

    const handleChange = (e: any | { name?: string; value: any }) => {
        const { name, value } = e.target as any;

        if (name === 'date_of_birth') {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate > today) {
                setDateError('Date of birth cannot be in the future');
                return;
            } else {
                setDateError('');
            }
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        if (name) setTouchedFields(prev => new Set(prev).add(name));
    };

    const handleProjectTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as 'individual' | 'team';
        setFormData(prev => ({
            ...prev,
            project_type: value,
            team_members: value === 'individual' ? [] : prev.team_members,
        }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
        const updated = [...formData.team_members];
        updated[index] = { ...updated[index], [field]: value };
        setFormData(prev => ({
            ...prev,
            team_members: updated,
        }));
    };

    const addTeamMember = () => {
        setFormData(prev => ({
            ...prev,
            team_members: [...prev.team_members, { name: '', contact: '' }],
        }));
    };

    const removeTeamMember = (index: number) => {
        const updated = formData.team_members.filter((_, i) => i !== index);
        setFormData(prev => ({
            ...prev,
            team_members: updated,
        }));
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'pdf' | 'proposal' | 'photos') => {
        const { files } = e.target;
        if (!files) return;

        if (fileType === 'photos') {
            const photoArray = Array.from(files);
            let hasError = false;

            for (const photo of photoArray) {
                if (!validateFileSize(photo, 'photo')) {
                    hasError = true;
                    break;
                }
            }

            if (!hasError) {
                setFormData(prev => ({ ...prev, photoFiles: photoArray }));
                showToast(language === 'BNG' ? `${photoArray.length}টি ছবি নির্বাচিত হয়েছে` : `${photoArray.length} photo(s) selected successfully`, 'success');
            }
        } else if (fileType === 'pdf') {
            const pdfFile = files[0];
            if (validateFileSize(pdfFile, 'pdf')) {
                setFormData(prev => ({ ...prev, pdfFile: pdfFile }));
                showToast(language === 'BNG' ? 'PDF ফাইল নির্বাচিত হয়েছে' : 'PDF file selected successfully', 'success');
            } else {
                e.target.value = '';
            }
        } else if (fileType === 'proposal') {
            const proposalFile = files[0];
            if (validateFileSize(proposalFile, 'proposal')) {
                setFormData(prev => ({ ...prev, proposalFile: proposalFile }));
                showToast(language === 'BNG' ? 'প্রস্তাবনা ফাইল নির্বাচিত হয়েছে' : 'Proposal file selected successfully', 'success');
            } else {
                e.target.value = '';
            }
        }
    };

    const clearFile = (fileType: 'pdf' | 'proposal' | 'photos') => {
        if (fileType === 'photos') {
            setFormData(prev => ({ ...prev, photoFiles: [] }));
            setFileErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.photos;
                return newErrors;
            });
        } else if (fileType === 'pdf') {
            setFormData(prev => ({ ...prev, pdfFile: null }));
            setFileErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.pdf;
                return newErrors;
            });
        } else if (fileType === 'proposal') {
            setFormData(prev => ({ ...prev, proposalFile: null }));
            setFileErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.proposal;
                return newErrors;
            });
        }
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 0:
                if (!formData.full_name) { setError(language === 'BNG' ? 'পুরো নাম প্রয়োজন' : 'Full name is required'); return false; }
                if (!formData.email) { setError(language === 'BNG' ? 'ইমেইল প্রয়োজন' : 'Email is required'); return false; }
                if (!formData.mobile_number) { setError(language === 'BNG' ? 'মোবাইল নম্বর প্রয়োজন' : 'Mobile number is required'); return false; }
                if (!formData.date_of_birth) { setError(language === 'BNG' ? 'জন্ম তারিখ প্রয়োজন' : 'Date of birth is required'); return false; }
                if (dateError) { setError(dateError); return false; }
                if (!formData.gender) { setError(language === 'BNG' ? 'লিঙ্গ নির্বাচন প্রয়োজন' : 'Gender is required'); return false; }
                if (!formData.division) { setError(language === 'BNG' ? 'বিভাগ নির্বাচন প্রয়োজন' : 'Division is required'); return false; }
                if (!formData.current_class_year) { setError(language === 'BNG' ? 'বর্তমান শ্রেণী/বছর প্রয়োজন' : 'Current class/year is required'); return false; }
                return true;
            case 1:
                if (!formData.institution_name) { setError(language === 'BNG' ? 'প্রতিষ্ঠানের নাম প্রয়োজন' : 'Institution name is required'); return false; }
                if (!formData.institution_address) { setError(language === 'BNG' ? 'প্রতিষ্ঠানের ঠিকানা প্রয়োজন' : 'Institution address is required'); return false; }
                if (!formData.district) { setError(language === 'BNG' ? 'জেলা প্রয়োজন' : 'District is required'); return false; }
                return true;
            case 2:
                if (!formData.project_title) { setError(language === 'BNG' ? 'প্রকল্পের শিরোনাম প্রয়োজন' : 'Project title is required'); return false; }
                if (!formData.scientific_field) { setError(language === 'BNG' ? 'বৈজ্ঞানিক ক্ষেত্র নির্বাচন প্রয়োজন' : 'Scientific field is required'); return false; }
                if (!formData.project_abstract) { setError(language === 'BNG' ? 'প্রকল্পের সারসংক্ষেপ প্রয়োজন' : 'Project abstract is required'); return false; }
                if (!formData.objectives) { setError(language === 'BNG' ? 'উদ্দেশ্য প্রয়োজন' : 'Objectives are required'); return false; }
                if (!formData.innovation_novelty) { setError(language === 'BNG' ? 'উদ্ভাবন/নতুনত্ব প্রয়োজন' : 'Innovation & novelty is required'); return false; }
                if (!formData.expected_impact) { setError(language === 'BNG' ? 'প্রত্যাশিত প্রভাব প্রয়োজন' : 'Expected impact is required'); return false; }
                return true;
            case 3:
                if (formData.project_type === 'team') {
                    if (formData.team_members.length === 0) {
                        setError(language === 'BNG' ? 'কমপক্ষে একজন দলের সদস্য যোগ করুন' : 'Add at least one team member');
                        return false;
                    }
                    for (let i = 0; i < formData.team_members.length; i++) {
                        if (!formData.team_members[i].name) {
                            setError(language === 'BNG' ? `দলের সদস্য ${i + 1} এর নাম প্রয়োজন` : `Team member ${i + 1} name is required`);
                            return false;
                        }
                        if (!formData.team_members[i].contact) {
                            setError(language === 'BNG' ? `দলের সদস্য ${i + 1} এর যোগাযোগ প্রয়োজন` : `Team member ${i + 1} contact is required`);
                            return false;
                        }
                    }
                }
                return true;
            case 4:
                if (!formData.pdfFile) {
                    setError(language === 'BNG' ? 'প্রকল্পের সারাংশ PDF প্রয়োজন' : 'Project summary PDF is required');
                    return false;
                }
                if (Object.keys(fileErrors).length > 0) {
                    setError(language === 'BNG' ? 'ফাইলের সাইজের সমস্যা সমাধান করুন' : 'Please fix file size issues before proceeding');
                    return false;
                }
                return true;
            case 5:
                if (!formData.info_correct || !formData.project_original || !formData.agree_rules) {
                    setError(language === 'BNG' ? 'সব ঘোষণাপত্রে টিক দিতে হবে' : 'All declarations must be checked');
                    return false;
                }
                return true;
            default:
                return true;
        }
    };

    const handleNext = () => {
        setError('');
        if (validateStep(activeStep)) {
            setActiveStep(p => p + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(p => p - 1);
        setError('');
    };

    const handleSubmit = async () => {
        for (let i = 0; i <= 5; i++) {
            if (!validateStep(i)) {
                setActiveStep(i);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
        }

        if (formData.pdfFile && formData.pdfFile.size > FILE_SIZE_LIMITS.pdf) {
            const errorMsg = language === 'BNG'
                ? `PDF ফাইল খুব বড় (${formatFileSize(formData.pdfFile.size)}). সর্বোচ্চ সাইজ ${formatFileSize(FILE_SIZE_LIMITS.pdf)}.`
                : `PDF file is too large (${formatFileSize(formData.pdfFile.size)}). Maximum size is ${formatFileSize(FILE_SIZE_LIMITS.pdf)}.`;
            showToast(errorMsg, 'error');
            setError(errorMsg);
            setActiveStep(4);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (formData.proposalFile && formData.proposalFile.size > FILE_SIZE_LIMITS.proposal) {
            const errorMsg = language === 'BNG'
                ? `প্রস্তাবনা ফাইল খুব বড় (${formatFileSize(formData.proposalFile.size)}). সর্বোচ্চ সাইজ ${formatFileSize(FILE_SIZE_LIMITS.proposal)}.`
                : `Proposal file is too large (${formatFileSize(formData.proposalFile.size)}). Maximum size is ${formatFileSize(FILE_SIZE_LIMITS.proposal)}.`;
            showToast(errorMsg, 'error');
            setError(errorMsg);
            setActiveStep(4);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        for (const photo of formData.photoFiles) {
            if (photo.size > FILE_SIZE_LIMITS.photo) {
                const errorMsg = language === 'BNG'
                    ? `ছবি ${photo.name} খুব বড় (${formatFileSize(photo.size)}). প্রতি ছবির সর্বোচ্চ সাইজ ${formatFileSize(FILE_SIZE_LIMITS.photo)}.`
                    : `Photo ${photo.name} is too large (${formatFileSize(photo.size)}). Maximum size per photo is ${formatFileSize(FILE_SIZE_LIMITS.photo)}.`;
                showToast(errorMsg, 'error');
                setError(errorMsg);
                setActiveStep(4);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
        }

        try {
            setIsUploading(true);
            setError('');
            setUploadProgress(0);
            setUploadStatus(language === 'BNG' ? 'আপলোড প্রক্রিয়া শুরু হচ্ছে...' : 'Starting upload process...');

            const filesToUpload = [
                formData.pdfFile,
                formData.proposalFile,
                ...formData.photoFiles
            ].filter(f => f !== null);

            let uploadedCount = 0;
            const updateProgress = () => {
                uploadedCount++;
                setUploadProgress(Math.round((uploadedCount / filesToUpload.length) * 100));
            };

            setUploadStatus(language === 'BNG' ? 'প্রকল্পের সারাংশ PDF আপলোড হচ্ছে...' : 'Uploading project summary PDF...');
            let pdfUrl = '';
            if (formData.pdfFile) {
                try {
                    pdfUrl = await uploadFile(formData.pdfFile);
                    updateProgress();
                } catch (uploadErr: any) {
                    if (uploadErr.message?.includes('File size too large')) {
                        throw new Error(language === 'BNG' ? 'PDF ফাইল খুব বড়। সর্বোচ্চ সাইজ 10 MB.' : 'PDF file too large. Maximum size is 10 MB.');
                    }
                    throw uploadErr;
                }
            }

            setUploadStatus(language === 'BNG' ? 'প্রকল্পের প্রস্তাবনা আপলোড হচ্ছে...' : 'Uploading project proposal...');
            let proposalUrl = '';
            if (formData.proposalFile) {
                try {
                    proposalUrl = await uploadFile(formData.proposalFile);
                    updateProgress();
                } catch (uploadErr: any) {
                    if (uploadErr.message?.includes('File size too large')) {
                        throw new Error(language === 'BNG' ? 'প্রস্তাবনা ফাইল খুব বড়। সর্বোচ্চ সাইজ 10 MB.' : 'Proposal file too large. Maximum size is 10 MB.');
                    }
                    throw uploadErr;
                }
            }

            setUploadStatus(language === 'BNG' ? 'ছবি আপলোড হচ্ছে...' : 'Uploading images...');
            let photoUrls: string[] = [];
            if (formData.photoFiles.length > 0) {
                try {
                    photoUrls = await uploadMultipleFiles(formData.photoFiles);
                    updateProgress();
                } catch (uploadErr: any) {
                    if (uploadErr.message?.includes('File size too large')) {
                        throw new Error(language === 'BNG' ? 'এক বা একাধিক ছবি খুব বড়। প্রতি ছবির সর্বোচ্চ সাইজ 5 MB.' : 'One or more images are too large. Maximum size per image is 5 MB.');
                    }
                    throw uploadErr;
                }
            }

            setUploadStatus(language === 'BNG' ? 'রেজিস্ট্রেশন জমা দেওয়া হচ্ছে...' : 'Submitting registration...');

            const payload = {
                full_name: formData.full_name,
                date_of_birth: formData.date_of_birth,
                gender: formData.gender,
                mobile_number: formData.mobile_number,
                email: formData.email,
                division: formData.division,
                current_class_year: formData.current_class_year,
                institution_name: formData.institution_name,
                institution_address: formData.institution_address,
                district: formData.district,
                mentor_name: formData.mentor_name || undefined,
                mentor_contact: formData.mentor_contact || undefined,
                project_title: formData.project_title,
                scientific_field: formData.scientific_field,
                project_abstract: formData.project_abstract,
                objectives: formData.objectives,
                innovation_novelty: formData.innovation_novelty,
                expected_impact: formData.expected_impact,
                project_type: formData.project_type,
                team_member_count: formData.project_type === 'team' ? formData.team_members.length : 0,
                team_members: formData.project_type === 'team' ? formData.team_members : [],
                project_summary_pdf: pdfUrl,
                project_proposal: proposalUrl || undefined,
                photos_diagrams: photoUrls.length > 0 ? photoUrls : undefined,
                video_link: formData.video_link || undefined,
                info_correct: formData.info_correct,
                project_original: formData.project_original,
                agree_rules: formData.agree_rules,
            };

            const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'https://api.zrf.info/api/v1';
            const response = await axios.post(`${API_URL}/registrations`, payload, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 30000,
            });

            if (response.data.success || response.status === 201) {
                setUploadProgress(100);
                setUploadStatus('Success!');
                showToast(language === 'BNG' ? 'রেজিস্ট্রেশন সফল হয়েছে!' : 'Registration submitted successfully!', 'success');
                setShowSuccess(true);

                setTimeout(() => {
                    setFormData(initialFormData);
                    setActiveStep(0);
                    setTouchedFields(new Set());
                    setShowSuccess(false);
                    setUploadProgress(0);
                    setUploadStatus('');
                    setDateError('');
                    setFileErrors({});
                }, 3000);
            } else {
                throw new Error(response.data.message || (language === 'BNG' ? 'জমা দেওয়া ব্যর্থ হয়েছে' : 'Submission failed'));
            }

        } catch (err: any) {
            console.error('Submission error:', err);

            let errorMessage = language === 'BNG' ? 'জমা দেওয়া ব্যর্থ হয়েছে। আবার চেষ্টা করুন।' : 'Submission failed. Please try again.';

            if (err.code === 'ECONNABORTED') {
                errorMessage = language === 'BNG' ? 'সময় শেষ। আপনার সংযোগ পরীক্ষা করুন এবং আবার চেষ্টা করুন।' : 'Request timeout. Please check your connection and try again.';
            } else if (err.response) {
                if (err.response.data?.error?.message?.includes('File size too large')) {
                    errorMessage = language === 'BNG' ? 'ফাইল খুব বড়। PDF ফাইলের জন্য সর্বোচ্চ সাইজ 10 MB এবং ছবির জন্য 5 MB।' : 'File size too large. Maximum allowed size is 10 MB for PDF files and 5 MB for images.';
                } else {
                    errorMessage = err.response.data?.message ||
                        err.response.data?.error ||
                        `Server error (${err.response.status})`;
                }
            } else if (err.request) {
                errorMessage = language === 'BNG' ? 'সার্ভারে সংযোগ করা যাচ্ছে না। ব্যাকএন্ড চালু আছে কিনা যাচাই করুন।' : 'Cannot connect to server. Please check if the backend is running.';
            } else if (err.message) {
                errorMessage = err.message;
            }

            setError(errorMessage);
            showToast(errorMessage, 'error');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsUploading(false);
        }
    };

    const isLoading = isUploading;

    const getFieldError = (fieldName: string): boolean => {
        return touchedFields.has(fieldName) && !(formData as any)[fieldName];
    };

    const cardSx = {
        background: 'rgba(19, 38, 32, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(46, 139, 87, 0.3)',
        borderRadius: 3,
    };


    const renderSteps = () => steps.map((step, index) => {
        const Icon = step.icon;
        return (
            <Step key={step.label} sx={{ minWidth: { xs: 70, sm: 100, } }}>
                <StepLabel StepIconComponent={() => (
                    <Icon sx={{
                        fontSize: { xs: 28, md: 32 },

                        color: index <= activeStep ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                    }} />
                )}>
                    <Typography variant="caption" display="block" sx={{
                        mt: 1,
                        fontSize: { xs: '0.65rem', md: '0.75rem' },
                        fontWeight: 500
                    }}>
                        {step.label}
                    </Typography>
                </StepLabel>
            </Step>
        );
    });

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0a1a1a 0%, #0d2a2a 50%, #0a1a1a 100%)',
            py: 4,
        }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Header */}
                <Fade in timeout={800}>
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Typography variant="h2" sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #2E8B57 0%, #FEC909 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                            fontSize: { xs: '1rem', md: '3rem' },
                        }}>
                            {language === 'BNG' ? 'বিজ্ঞান মেলা রেজিস্ট্রেশন - ২০২৬' : 'Science Fair Registration - 2026'}
                        </Typography>
                    </Box>
                </Fade>

                {/* Info Button and Simple Banner */}
                <Fade in timeout={900}>
                    <Box sx={{ mb: 4 }}>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Button
                                variant="contained"
                                onClick={() => setOpenImageDialog(true)}

                                sx={{
                                    background: 'linear-gradient(135deg, #FEC909 0%, #FFD633 100%)',
                                    color: '#1A1A1A',
                                    fontWeight: 700,
                                    px: { md: 4, sm: 2 },
                                    py: { md: 1.5, sm: .5 },
                                    fontSize: { sm: '.5rem', md: '1rem' },
                                    borderRadius: 3,
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #FFD633 0%, #FEC909 100%)',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                {language === 'BNG' ? ' বিস্তারিত তথ্য দেখুন ' : ' View Details'}
                            </Button>
                        </Box>
                    </Box>
                </Fade>

                {/* Full Image Dialog - Modal */}
                <RegistrationDetailsModal
                    open={openImageDialog}
                    onClose={() => setOpenImageDialog(false)}
                    language={language}
                    imageSrc={registrationImg}
                />
                {/* Error Alert */}
                {error && (
                    <Fade in>
                        <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }} onClose={() => setError('')}>
                            {error}
                        </Alert>
                    </Fade>
                )}

                {/* Upload Progress */}
                {isUploading && (
                    <Fade in>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="body2" sx={{ color: '#C8E0D0', mb: 1 }}>
                                {uploadStatus} - {uploadProgress}%
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={uploadProgress}
                                sx={{
                                    borderRadius: 2,
                                    height: 8,
                                    backgroundColor: 'rgba(46,139,87,0.2)',
                                    '& .MuiLinearProgress-bar': { backgroundColor: '#2E8B57' },
                                }}
                            />
                        </Box>
                    </Fade>
                )}

                {/* Stepper */}
                <Card sx={{ mb: 4, ...cardSx }}>
                    <CardContent sx={{ px: { xs: 0, sm: 2 }, py: 2 }}>
                        {/* Scrollable Container for Stepper */}
                        <Box sx={{
                            display: 'flex',
                            overflowX: 'auto', // Scroll functionality
                            width: '100%',
                            alignItems: 'center',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#2E8B57 rgba(46,139,87,0.1)',
                            '&::-webkit-scrollbar': { height: '6px' },
                            '&::-webkit-scrollbar-track': { background: 'rgba(46,139,87,0.1)' },
                            '&::-webkit-scrollbar-thumb': { background: '#2E8B57', borderRadius: '10px' },
                            '&::-webkit-scrollbar-thumb:hover': { background: '#216740' },
                        }}>
                            <Stepper
                                activeStep={activeStep}
                                alternativeLabel
                                sx={{
                                    // Responsive Width Logic:
                                    // Mobile (xs): 'max-content' so it expands for scrolling
                                    // Desktop (md): '100%' so it stretches to fill width
                                    width: { xs: 'auto', md: '100%' },
                                    minWidth: { xs: 'max-content', md: '100%' },
                                    px: 2,
                                }}
                            >
                                {renderSteps()}
                            </Stepper>
                        </Box>
                    </CardContent>
                </Card>
                {/* Form Card */}
                <Grow in timeout={500}>
                    <Card sx={{ ...cardSx, overflow: 'hidden', mb: 4 }}>
                        <CardHeader
                            avatar={
                                <Box sx={{
                                    background: 'linear-gradient(135deg, #2E8B57 0%, #216740 100%)',
                                    borderRadius: 2, p: 1, display: 'inline-flex',
                                }}>
                                    {React.createElement(steps[activeStep].icon, { sx: { color: '#fff' } })}
                                </Box>
                            }
                            title={steps[activeStep].label}
                            subheader={steps[activeStep].description}
                            sx={{
                                borderBottom: '1px solid rgba(46,139,87,0.2)',
                                pb: 2,
                                background: alpha('#2E8B57', 0.05),
                            }}
                        />
                        <CardContent sx={{ p: 4 }}>
                            {activeStep === 0 && (
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'পূর্ণ নাম ' : 'Full Name'} language={language} />}
                                            name="full_name"
                                            value={formData.full_name}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('full_name'))}
                                            error={getFieldError('full_name')}
                                            helperText={getFieldError('full_name') ? (language === 'BNG' ? 'পূর্ণ নাম ' : 'Full name is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'ইমেইল' : 'Email'} language={language} />}
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('email'))}
                                            error={getFieldError('email')}
                                            helperText={getFieldError('email') ? (language === 'BNG' ? 'ইমেইল প্রয়োজন' : 'Email is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'মোবাইল নম্বর' : 'Mobile Number'} language={language} />}
                                            name="mobile_number"
                                            value={formData.mobile_number}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('mobile_number'))}
                                            error={getFieldError('mobile_number')}
                                            helperText={getFieldError('mobile_number') ? (language === 'BNG' ? 'মোবাইল নম্বর প্রয়োজন' : 'Mobile number is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'জন্ম তারিখ' : 'Date of Birth'} language={language} />}
                                            name="date_of_birth"
                                            type="date"
                                            value={formData.date_of_birth}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('date_of_birth'))}
                                            InputLabelProps={{ shrink: true }}
                                            error={!!dateError || getFieldError('date_of_birth')}
                                            helperText={dateError || (getFieldError('date_of_birth') ? (language === 'BNG' ? 'জন্ম তারিখ প্রয়োজন' : 'Date of birth is required') : '')}
                                            inputProps={{
                                                min: getMinDate(),
                                                max: getMaxDate()
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth error={getFieldError('gender')}>
                                            <InputLabel>{language === 'BNG' ? 'লিঙ্গ *' : 'Gender *'}</InputLabel>
                                            <Select name="gender" value={formData.gender} onChange={handleChange} label={language === 'BNG' ? 'লিঙ্গ *' : 'Gender *'}>
                                                {genders.map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                                            </Select>
                                            {getFieldError('gender') && <FormHelperText>{language === 'BNG' ? 'লিঙ্গ নির্বাচন প্রয়োজন' : 'Gender is required'}</FormHelperText>}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth error={getFieldError('division')}>
                                            <InputLabel>{language === 'BNG' ? 'বিভাগ *' : 'Division *'}</InputLabel>
                                            <Select name="division" value={formData.division} onChange={handleChange} label={language === 'BNG' ? 'বিভাগ *' : 'Division *'}>
                                                {divisions.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                                            </Select>
                                            {getFieldError('division') && <FormHelperText>{language === 'BNG' ? 'বিভাগ নির্বাচন প্রয়োজন' : 'Division is required'}</FormHelperText>}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'বর্তমান শ্রেণী / বছর' : 'Current Class / Year'} language={language} />}
                                            name="current_class_year"
                                            value={formData.current_class_year}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('current_class_year'))}
                                            error={getFieldError('current_class_year')}
                                            helperText={getFieldError('current_class_year') ? (language === 'BNG' ? 'বর্তমান শ্রেণী/বছর প্রয়োজন' : 'Current class/year is required') : ''}
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            {activeStep === 1 && (
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'প্রতিষ্ঠানের নাম' : 'Institution Name'} language={language} />}
                                            name="institution_name"
                                            value={formData.institution_name}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('institution_name'))}
                                            error={getFieldError('institution_name')}
                                            helperText={getFieldError('institution_name') ? (language === 'BNG' ? 'প্রতিষ্ঠানের নাম প্রয়োজন' : 'Institution name is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            label={<RequiredLabel label={language === 'BNG' ? 'প্রতিষ্ঠানের ঠিকানা' : 'Institution Address'} language={language} />}
                                            name="institution_address"
                                            value={formData.institution_address}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('institution_address'))}
                                            error={getFieldError('institution_address')}
                                            helperText={getFieldError('institution_address') ? (language === 'BNG' ? 'প্রতিষ্ঠানের ঠিকানা প্রয়োজন' : 'Institution address is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'জেলা' : 'District'} language={language} />}
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('district'))}
                                            error={getFieldError('district')}
                                            helperText={getFieldError('district') ? (language === 'BNG' ? 'জেলা প্রয়োজন' : 'District is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<OptionalLabel label={language === 'BNG' ? 'শিক্ষক / মেন্টরের নাম' : 'Teacher / Mentor Name'} language={language} />}
                                            name="mentor_name"
                                            value={formData.mentor_name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label={<OptionalLabel label={language === 'BNG' ? 'শিক্ষক / মেন্টরের যোগাযোগ' : 'Teacher / Mentor Contact'} language={language} />}
                                            name="mentor_contact"
                                            value={formData.mentor_contact}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            {activeStep === 2 && (
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label={<RequiredLabel label={language === 'BNG' ? 'প্রকল্পের শিরোনাম' : 'Project Title'} language={language} />}
                                            name="project_title"
                                            value={formData.project_title}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('project_title'))}
                                            error={getFieldError('project_title')}
                                            helperText={getFieldError('project_title') ? (language === 'BNG' ? 'প্রকল্পের শিরোনাম প্রয়োজন' : 'Project title is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth error={getFieldError('scientific_field')}>
                                            <InputLabel>{language === 'BNG' ? 'বৈজ্ঞানিক ক্ষেত্র *' : 'Scientific Field *'}</InputLabel>
                                            <Select name="scientific_field" value={formData.scientific_field} onChange={handleChange} label={language === 'BNG' ? 'বৈজ্ঞানিক ক্ষেত্র *' : 'Scientific Field *'}>
                                                {scientificFields.map(f => <MenuItem key={f} value={f}>{f}</MenuItem>)}
                                            </Select>
                                            {getFieldError('scientific_field') && <FormHelperText>{language === 'BNG' ? 'বৈজ্ঞানিক ক্ষেত্র নির্বাচন প্রয়োজন' : 'Scientific field is required'}</FormHelperText>}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={5}
                                            label={<RequiredLabel label={language === 'BNG' ? 'প্রকল্পের সারসংক্ষেপ' : 'Project Abstract'} language={language} />}
                                            name="project_abstract"
                                            value={formData.project_abstract}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('project_abstract'))}
                                            error={getFieldError('project_abstract')}
                                            helperText={getFieldError('project_abstract') ? (language === 'BNG' ? 'প্রকল্পের সারসংক্ষেপ প্রয়োজন' : 'Project abstract is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            label={<RequiredLabel label={language === 'BNG' ? 'উদ্দেশ্য' : 'Objectives'} language={language} />}
                                            name="objectives"
                                            value={formData.objectives}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('objectives'))}
                                            error={getFieldError('objectives')}
                                            helperText={getFieldError('objectives') ? (language === 'BNG' ? 'উদ্দেশ্য প্রয়োজন' : 'Objectives are required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            label={<RequiredLabel label={language === 'BNG' ? 'উদ্ভাবন / নতুনত্ব' : 'Innovation / Novelty'} language={language} />}
                                            name="innovation_novelty"
                                            value={formData.innovation_novelty}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('innovation_novelty'))}
                                            error={getFieldError('innovation_novelty')}
                                            helperText={getFieldError('innovation_novelty') ? (language === 'BNG' ? 'উদ্ভাবন/নতুনত্ব প্রয়োজন' : 'Innovation/novelty is required') : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            label={<RequiredLabel label={language === 'BNG' ? 'প্রত্যাশিত প্রভাব' : 'Expected Impact'} language={language} />}
                                            name="expected_impact"
                                            value={formData.expected_impact}
                                            onChange={handleChange}
                                            onBlur={() => setTouchedFields(prev => new Set(prev).add('expected_impact'))}
                                            error={getFieldError('expected_impact')}
                                            helperText={getFieldError('expected_impact') ? (language === 'BNG' ? 'প্রত্যাশিত প্রভাব প্রয়োজন' : 'Expected impact is required') : ''}
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            {activeStep === 3 && (
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Paper sx={{ p: 3, background: alpha('#2E8B57', 0.05), borderRadius: 2 }}>
                                            <Typography variant="subtitle1" sx={{ color: '#2E8B57', mb: 2, fontWeight: 600 }}>
                                                {language === 'BNG' ? 'প্রকল্পের ধরন' : 'Project Type'}
                                            </Typography>
                                            <RadioGroup value={formData.project_type} onChange={handleProjectTypeChange} sx={{ flexDirection: 'row', gap: 3 }}>
                                                <FormControlLabel
                                                    value="individual"
                                                    control={<Radio sx={{ color: '#2E8B57', '&.Mui-checked': { color: '#2E8B57' } }} />}
                                                    label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><PersonIcon /><span>{language === 'BNG' ? 'ব্যক্তিগত প্রকল্প' : 'Individual Project'}</span></Box>}
                                                />
                                                <FormControlLabel
                                                    value="team"
                                                    control={<Radio sx={{ color: '#2E8B57', '&.Mui-checked': { color: '#2E8B57' } }} />}
                                                    label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><GroupIcon /><span>{language === 'BNG' ? 'দলীয় প্রকল্প' : 'Team Project'}</span></Box>}
                                                />
                                            </RadioGroup>
                                        </Paper>
                                    </Grid>
                                    {formData.project_type === 'team' && (
                                        <>
                                            {formData.team_members.map((member, idx) => (
                                                <Grid item xs={12} key={idx}>
                                                    <Paper sx={{ p: 3, position: 'relative', background: alpha('#2E8B57', 0.08), borderRadius: 2 }}>
                                                        <Typography variant="subtitle1" sx={{ color: '#2E8B57', mb: 2 }}>{language === 'BNG' ? `দলের সদস্য ${idx + 1}` : `Team Member ${idx + 1}`}</Typography>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={6}>
                                                                <TextField fullWidth label={language === 'BNG' ? 'নাম *' : 'Name *'} value={member.name} onChange={e => handleTeamMemberChange(idx, 'name', e.target.value)} required />
                                                            </Grid>
                                                            <Grid item xs={12} md={6}>
                                                                <TextField fullWidth label={language === 'BNG' ? 'যোগাযোগ *' : 'Contact *'} value={member.contact} onChange={e => handleTeamMemberChange(idx, 'contact', e.target.value)} placeholder={language === 'BNG' ? 'ইমেইল বা ফোন নম্বর' : 'Email or Phone Number'} required />
                                                            </Grid>
                                                        </Grid>
                                                        <IconButton onClick={() => removeTeamMember(idx)} sx={{ position: 'absolute', top: 8, right: 8, color: '#f44336' }}><DeleteIcon /></IconButton>
                                                    </Paper>
                                                </Grid>
                                            ))}
                                            <Grid item xs={12}>
                                                <Button variant="outlined" onClick={addTeamMember} startIcon={<AddIcon />} sx={{ color: '#FEC909', borderColor: '#FEC909' }}>
                                                    {language === 'BNG' ? 'দলের সদস্য যোগ করুন' : 'Add Team Member'}
                                                </Button>
                                            </Grid>
                                        </>
                                    )}
                                    {formData.project_type === 'individual' && (
                                        <Grid item xs={12}>
                                            <Alert severity="info" sx={{ borderRadius: 2 }}>
                                                {language === 'BNG'
                                                    ? 'আপনি একটি ব্যক্তিগত প্রকল্প নির্বাচন করেছেন। আপনি পরবর্তী ধাপে যেতে পারেন।'
                                                    : 'You have selected an individual project. You can proceed to the next step.'}
                                            </Alert>
                                        </Grid>
                                    )}
                                </Grid>
                            )}

                            {activeStep === 4 && (
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Alert severity="info" sx={{ mb: 2 }}>
                                            <strong>{language === 'BNG' ? 'ফাইলের সাইজ সীমা:' : 'File Size Limits:'}</strong> {language === 'BNG' ? 'PDF ফাইল 10 MB পর্যন্ত, ছবি 5 MB পর্যন্ত' : 'PDF files up to 10 MB, Images up to 5 MB each'}
                                        </Alert>
                                    </Grid>
                                    {Object.keys(fileErrors).length > 0 && (
                                        <Grid item xs={12}>
                                            <Alert severity="error" sx={{ mb: 2 }}>
                                                {Object.values(fileErrors).map((err, idx) => (<Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><WarningIcon fontSize="small" />{err}</Box>))}
                                            </Alert>
                                        </Grid>
                                    )}
                                    <Grid item xs={12}>
                                        <Paper sx={{ p: 3, borderRadius: 2 }}>
                                            <Typography variant="subtitle1" sx={{ color: '#2E8B57', mb: 2 }}>
                                                {language === 'BNG' ? 'প্রকল্পের সারাংশ PDF' : 'Project Summary PDF'} <Typography component="span" color="error">*</Typography>
                                            </Typography>
                                            <Button variant="contained" component="label">{language === 'BNG' ? 'PDF নির্বাচন করুন' : 'Choose PDF'}<input hidden accept=".pdf" type="file" onChange={(e) => handleFileSelect(e, 'pdf')} /></Button>
                                            {formData.pdfFile && <Chip label={`${formData.pdfFile.name} (${formatFileSize(formData.pdfFile.size)})`} onDelete={() => clearFile('pdf')} sx={{ ml: 2 }} />}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper sx={{ p: 3, borderRadius: 2 }}>
                                            <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                                {language === 'BNG' ? 'প্রকল্পের প্রস্তাবনা' : 'Project Proposal'} <OptionalChip language={language} />
                                            </Typography>
                                            <Button variant="outlined" component="label">{language === 'BNG' ? 'ফাইল নির্বাচন করুন' : 'Choose File'}<input hidden accept=".pdf,.doc,.docx" type="file" onChange={(e) => handleFileSelect(e, 'proposal')} /></Button>
                                            {formData.proposalFile && <Chip label={`${formData.proposalFile.name} (${formatFileSize(formData.proposalFile.size)})`} onDelete={() => clearFile('proposal')} sx={{ ml: 2 }} />}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper sx={{ p: 3, borderRadius: 2 }}>
                                            <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                                {language === 'BNG' ? 'ছবি/ডায়াগ্রাম' : 'Photos/Diagrams'} <OptionalChip language={language} />
                                            </Typography>
                                            <Button variant="outlined" component="label">{language === 'BNG' ? 'ছবি নির্বাচন করুন' : 'Choose Images'}<input hidden accept="image/*" type="file" multiple onChange={(e) => handleFileSelect(e, 'photos')} /></Button>
                                            {formData.photoFiles.length > 0 && (<Box sx={{ mt: 1 }}>{formData.photoFiles.map((file, idx) => (<Chip key={idx} label={`${file.name} (${formatFileSize(file.size)})`} sx={{ m: 0.5 }} />))}<IconButton size="small" onClick={() => clearFile('photos')}><DeleteIcon fontSize="small" /></IconButton></Box>)}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label={<OptionalLabel label={language === 'BNG' ? 'ভিডিও লিংক' : 'Video Link'} language={language} />} name="video_link" value={formData.video_link} onChange={handleChange} placeholder="https://youtube.com/watch?v=..." />
                                    </Grid>
                                </Grid>
                            )}

                            {activeStep === 5 && (
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Paper sx={{ p: 4, borderRadius: 2 }}>
                                            <Typography variant="h6" sx={{ color: '#2E8B57', mb: 3 }}>
                                                {language === 'BNG' ? 'ঘোষণাপত্র' : 'Declaration'}
                                            </Typography>
                                            <Stack spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox name="info_correct" checked={formData.info_correct} onChange={handleCheckbox} sx={{ color: '#2E8B57' }} />}
                                                    label={language === 'BNG'
                                                        ? 'আমি ঘোষণা করছি যে প্রদত্ত সমস্ত তথ্য সঠিক এবং নির্ভুল।'
                                                        : 'I declare that all information provided is correct and accurate.'}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox name="project_original" checked={formData.project_original} onChange={handleCheckbox} sx={{ color: '#2E8B57' }} />}
                                                    label={language === 'BNG'
                                                        ? 'আমি নিশ্চিত করছি যে এই প্রকল্পটি আমার/আমাদের মূল কাজ।'
                                                        : 'I confirm that this project is my/our original work.'}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox name="agree_rules" checked={formData.agree_rules} onChange={handleCheckbox} sx={{ color: '#2E8B57' }} />}
                                                    label={language === 'BNG'
                                                        ? 'আমি ZRF বিজ্ঞান মেলার নিয়ম ও শর্তাবলী মেনে চলতে সম্মত আছি।'
                                                        : 'I agree to abide by the ZRF Science Fair rules and regulations.'}
                                                />
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            )}
                        </CardContent>
                    </Card>
                </Grow>

                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Button disabled={activeStep === 0 || isLoading} onClick={handleBack} startIcon={<NavigateBeforeIcon />} variant="outlined" sx={{ color: '#C8E0D0', borderColor: '#C8E0D0', '&:hover': { borderColor: '#2E8B57', backgroundColor: alpha('#2E8B57', 0.1) } }}>
                        {language === 'BNG' ? 'পিছনে' : 'Back'}
                    </Button>
                    {activeStep < steps.length - 1 ? (
                        <Button onClick={handleNext} endIcon={<NavigateNextIcon />} variant="contained" sx={{ background: 'linear-gradient(135deg, #2E8B57 0%, #216740 100%)', minWidth: 120, '&:hover': { background: 'linear-gradient(135deg, #216740 0%, #1a5232 100%)', transform: 'translateY(-2px)' } }}>
                            {language === 'BNG' ? 'পরবর্তী' : 'Next'}
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} disabled={isLoading || !formData.info_correct || !formData.project_original || !formData.agree_rules || Object.keys(fileErrors).length > 0} variant="contained" sx={{ background: 'linear-gradient(135deg, #FEC909 0%, #FFD633 100%)', color: '#1A1A1A', minWidth: 160, fontWeight: 700 }}>
                            {isLoading ? <CircularProgress size={22} sx={{ color: '#1A1A1A' }} /> : (language === 'BNG' ? 'রেজিস্ট্রেশন জমা দিন' : 'Submit Registration')}
                        </Button>
                    )}
                </Box>

                {/* Success Dialog */}
                <Dialog open={showSuccess} onClose={() => setShowSuccess(false)} PaperProps={{ sx: { background: 'linear-gradient(135deg, #132620 0%, #0d2a2a 100%)', borderRadius: 3, border: '1px solid rgba(46,139,87,0.3)' } }}>
                    <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
                        <CheckCircleIcon sx={{ fontSize: 64, color: '#2E8B57', mb: 1 }} />
                        <Typography variant="h5" sx={{ color: '#2E8B57', fontWeight: 600 }}>
                            {language === 'BNG' ? 'রেজিস্ট্রেশন সফল হয়েছে!' : 'Registration Successful!'}
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Typography sx={{ color: '#C8E0D0', textAlign: 'center' }}>
                            {language === 'BNG'
                                ? 'আপনার রেজিস্ট্রেশন সফলভাবে জমা দেওয়া হয়েছে। আপনি শীঘ্রই একটি নিশ্চিতকরণ ইমেইল পাবেন।'
                                : 'Your registration has been submitted successfully. You will receive a confirmation email shortly.'}
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                        <Button onClick={() => setShowSuccess(false)} variant="contained" sx={{ background: 'linear-gradient(135deg, #2E8B57 0%, #216740 100%)', px: 4 }}>
                            {language === 'BNG' ? 'বন্ধ করুন' : 'Close'}
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Snackbar */}
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%', borderRadius: 2 }}>{snackbarMessage}</Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}