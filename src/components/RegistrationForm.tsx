// app/register/page.tsx
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
    Zoom,
    LinearProgress,
    alpha,
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
    AttachFile as AttachFileIcon,
    VideoLibrary as VideoLibraryIcon,
    Science as ScienceIcon,
    EmojiEvents as EmojiEventsIcon,
} from '@mui/icons-material';

import { scientificFields, divisions, genders } from '@/lib/constant';
import { useCreateRegistrationMutation } from '@/redux/api/allApi';
import { uploadMultipleFiles, uploadFile } from './Upload';
import axios from 'axios';
// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
    name: string;
    contact: string;
}

interface FormData {
    // Participant Information
    full_name: string;
    date_of_birth: string;
    gender: string;
    mobile_number: string;
    email: string;
    division: string;
    current_class_year: string;

    // Institution Information
    institution_name: string;
    institution_address: string;
    district: string;
    mentor_name: string;
    mentor_contact: string;

    // Project Information
    project_title: string;
    scientific_field: string;
    project_abstract: string;
    objectives: string;
    innovation_novelty: string;
    expected_impact: string;

    // Team Information
    is_team_project: boolean;
    team_members: TeamMember[];

    // Upload Section
    pdfFile: File | null;
    proposalFile: File | null;
    photoFiles: File[];
    video_link: string;

    // Declaration
    info_correct: boolean;
    project_original: boolean;
    agree_rules: boolean;
}

// ─── Steps ────────────────────────────────────────────────────────────────────

const steps = [
    { label: 'Participant Info', icon: PersonIcon, description: 'Your personal details' },
    { label: 'Institution Info', icon: SchoolIcon, description: 'Your school/college details' },
    { label: 'Project Details', icon: ScienceIcon, description: 'Tell us about your project' },
    { label: 'Team Info', icon: GroupIcon, description: 'Team members information' },
    { label: 'Uploads', icon: CloudUploadIcon, description: 'Project files & media' },
    { label: 'Declaration', icon: CheckCircleIcon, description: 'Terms & confirmation' },
];

// ─── Initial State ─────────────────────────────────────────────────────────────

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
    is_team_project: false,
    team_members: [],
    pdfFile: null,
    proposalFile: null,
    photoFiles: [],
    video_link: '',
    info_correct: false,
    project_original: false,
    agree_rules: false,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const OptionalChip = () => (
    <Chip
        label="Optional"
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

const RequiredLabel = ({ label }: { label: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
        <span>{label}</span>
        <Typography component="span" sx={{ color: '#f44336', lineHeight: 1 }}>*</Typography>
    </Box>
);

const OptionalLabel = ({ label }: { label: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span>{label}</span>
        <OptionalChip />
    </Box>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function RegistrationForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const [createRegistration, { isLoading: submitting }] = useCreateRegistrationMutation();

    // ── Field handlers ──────────────────────────────────────────────────────

    const handleChange = (e: any | { name?: string; value: any }) => {
        const { name, value } = e.target as any;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name) setTouchedFields(prev => new Set(prev).add(name));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name === 'is_team_project') {
            setFormData(prev => ({
                ...prev,
                is_team_project: checked,
                team_members: checked ? prev.team_members : [],
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: checked }));
        }
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

    // ── File handlers ─────────────────────────────────────────

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'pdf' | 'proposal' | 'photos') => {
        const { files } = e.target;
        if (!files) return;

        if (fileType === 'photos') {
            setFormData(prev => ({ ...prev, photoFiles: Array.from(files) }));
        } else if (fileType === 'pdf') {
            setFormData(prev => ({ ...prev, pdfFile: files[0] }));
        } else if (fileType === 'proposal') {
            setFormData(prev => ({ ...prev, proposalFile: files[0] }));
        }
    };

    const clearFile = (fileType: 'pdf' | 'proposal' | 'photos') => {
        if (fileType === 'photos') {
            setFormData(prev => ({ ...prev, photoFiles: [] }));
        } else if (fileType === 'pdf') {
            setFormData(prev => ({ ...prev, pdfFile: null }));
        } else if (fileType === 'proposal') {
            setFormData(prev => ({ ...prev, proposalFile: null }));
        }
    };

    // ── Validation ──────────────────────────────────────────────────────────

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 0:
                if (!formData.full_name) { setError('Full name is required'); return false; }
                if (!formData.email) { setError('Email is required'); return false; }
                if (!formData.mobile_number) { setError('Mobile number is required'); return false; }
                if (!formData.date_of_birth) { setError('Date of birth is required'); return false; }
                if (!formData.gender) { setError('Gender is required'); return false; }
                if (!formData.division) { setError('Division is required'); return false; }
                if (!formData.current_class_year) { setError('Current class/year is required'); return false; }
                return true;
            case 1:
                if (!formData.institution_name) { setError('Institution name is required'); return false; }
                if (!formData.institution_address) { setError('Institution address is required'); return false; }
                if (!formData.district) { setError('District is required'); return false; }
                return true;
            case 2:
                if (!formData.project_title) { setError('Project title is required'); return false; }
                if (!formData.scientific_field) { setError('Scientific field is required'); return false; }
                if (!formData.project_abstract) { setError('Project abstract is required'); return false; }
                if (!formData.objectives) { setError('Objectives are required'); return false; }
                if (!formData.innovation_novelty) { setError('Innovation & novelty is required'); return false; }
                if (!formData.expected_impact) { setError('Expected impact is required'); return false; }
                return true;
            case 3:
                if (formData.is_team_project) {
                    if (formData.team_members.length === 0) {
                        setError('Add at least one team member');
                        return false;
                    }
                    for (let i = 0; i < formData.team_members.length; i++) {
                        if (!formData.team_members[i].name) {
                            setError(`Team member ${i + 1} name is required`);
                            return false;
                        }
                        if (!formData.team_members[i].contact) {
                            setError(`Team member ${i + 1} contact is required`);
                            return false;
                        }
                    }
                }
                return true;
            case 4:
                if (!formData.pdfFile) {
                    setError('Project summary PDF is required');
                    return false;
                }
                return true;
            case 5:
                if (!formData.info_correct || !formData.project_original || !formData.agree_rules) {
                    setError('All declarations must be checked');
                    return false;
                }
                return true;
            default:
                return true;
        }
    };

    // ── Navigation ──────────────────────────────────────────────────────────

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

    // ── Submit with proper camelCase mapping ─────────────────────────────────

    // In your RegistrationForm component, update the handleSubmit function:

    const handleSubmit = async () => {
        // Validate all steps
        for (let i = 0; i <= 5; i++) {
            if (!validateStep(i)) {
                setActiveStep(i);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
        }

        try {
            setIsUploading(true);
            setError('');
            setUploadProgress(0);
            setUploadStatus('Starting upload process...');

            // Upload files
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

            // Upload PDF
            setUploadStatus('Uploading project summary PDF...');
            let pdfUrl = '';
            if (formData.pdfFile) {
                pdfUrl = await uploadFile(formData.pdfFile);
                updateProgress();
            }

            // Upload Proposal
            setUploadStatus('Uploading project proposal...');
            let proposalUrl = '';
            if (formData.proposalFile) {
                proposalUrl = await uploadFile(formData.proposalFile);
                updateProgress();
            }

            // Upload Images
            setUploadStatus('Uploading images...');
            let photoUrls: string[] = [];
            if (formData.photoFiles.length > 0) {
                photoUrls = await uploadMultipleFiles(formData.photoFiles);
                updateProgress();
            }

            setUploadStatus('Submitting registration...');

            // Prepare payload
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
                is_team_project: formData.is_team_project,
                team_member_count: formData.is_team_project ? formData.team_members.length : 0,
                team_members: formData.is_team_project ? formData.team_members : [],
                project_summary_pdf: pdfUrl,
                project_proposal: proposalUrl || undefined,
                photos_diagrams: photoUrls.length > 0 ? photoUrls : undefined,
                video_link: formData.video_link || undefined,
                info_correct: formData.info_correct,
                project_original: formData.project_original,
                agree_rules: formData.agree_rules,
            };

            console.log('Submitting payload:', payload);

            // Submit to backend
            const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'https://api.zrf.info/api/v1';
            const response = await axios.post(`${API_URL}/registrations`, payload, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 30000,
            });

            console.log('Server response:', response.data);

            if (response.data.success || response.status === 201) {
                setUploadProgress(100);
                setUploadStatus('Success!');
                setShowSuccess(true);

                // Reset form
                setTimeout(() => {
                    setFormData(initialFormData);
                    setActiveStep(0);
                    setTouchedFields(new Set());
                    setShowSuccess(false);
                    setUploadProgress(0);
                    setUploadStatus('');
                }, 3000);
            } else {
                throw new Error(response.data.message || 'Submission failed');
            }

        } catch (err: any) {
            console.error('Submission error:', err);

            let errorMessage = 'Submission failed. Please try again.';

            if (err.code === 'ECONNABORTED') {
                errorMessage = 'Request timeout. Please check your connection and try again.';
            } else if (err.response) {
                // Server responded with error
                errorMessage = err.response.data?.message ||
                    err.response.data?.error ||
                    `Server error (${err.response.status})`;

                // Log detailed error for debugging
                console.error('Error details:', {
                    status: err.response.status,
                    data: err.response.data,
                    headers: err.response.headers
                });
            } else if (err.request) {
                // No response received
                errorMessage = 'Cannot connect to server. Please check if the backend is running.';
            }

            setError(errorMessage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsUploading(false);
        }
    };
    const isLoading = submitting || isUploading;

    // ─── Helper to check if a field has error ───────────────────────────────
    const getFieldError = (fieldName: string): boolean => {
        return touchedFields.has(fieldName) && !(formData as any)[fieldName];
    };

    // ── Render Form Fields (same as before, but I'll show the key parts) ────

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Full Name" />}
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('full_name'))}
                                error={getFieldError('full_name')}
                                helperText={getFieldError('full_name') ? 'Full name is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Email" />}
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('email'))}
                                error={getFieldError('email')}
                                helperText={getFieldError('email') ? 'Email is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Mobile Number" />}
                                name="mobile_number"
                                value={formData.mobile_number}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('mobile_number'))}
                                error={getFieldError('mobile_number')}
                                helperText={getFieldError('mobile_number') ? 'Mobile number is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Date of Birth" />}
                                name="date_of_birth"
                                type="date"
                                value={formData.date_of_birth}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('date_of_birth'))}
                                InputLabelProps={{ shrink: true }}
                                error={getFieldError('date_of_birth')}
                                helperText={getFieldError('date_of_birth') ? 'Date of birth is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth error={getFieldError('gender')}>
                                <InputLabel>Gender *</InputLabel>
                                <Select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    label="Gender *"
                                >
                                    {genders.map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                                </Select>
                                {getFieldError('gender') && <FormHelperText>Gender is required</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth error={getFieldError('division')}>
                                <InputLabel>Division *</InputLabel>
                                <Select
                                    name="division"
                                    value={formData.division}
                                    onChange={handleChange}
                                    label="Division *"
                                >
                                    {divisions.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                                </Select>
                                {getFieldError('division') && <FormHelperText>Division is required</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Current Class / Year" />}
                                name="current_class_year"
                                value={formData.current_class_year}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('current_class_year'))}
                                error={getFieldError('current_class_year')}
                                helperText={getFieldError('current_class_year') ? 'Current class/year is required' : ''}
                            />
                        </Grid>
                    </Grid>
                );

            case 1:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Institution Name" />}
                                name="institution_name"
                                value={formData.institution_name}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('institution_name'))}
                                error={getFieldError('institution_name')}
                                helperText={getFieldError('institution_name') ? 'Institution name is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label={<RequiredLabel label="Institution Address" />}
                                name="institution_address"
                                value={formData.institution_address}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('institution_address'))}
                                error={getFieldError('institution_address')}
                                helperText={getFieldError('institution_address') ? 'Institution address is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="District" />}
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('district'))}
                                error={getFieldError('district')}
                                helperText={getFieldError('district') ? 'District is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<OptionalLabel label="Teacher / Mentor Name" />}
                                name="mentor_name"
                                value={formData.mentor_name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label={<OptionalLabel label="Teacher / Mentor Contact" />}
                                name="mentor_contact"
                                value={formData.mentor_contact}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                );

            case 2:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={<RequiredLabel label="Project Title" />}
                                name="project_title"
                                value={formData.project_title}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('project_title'))}
                                error={getFieldError('project_title')}
                                helperText={getFieldError('project_title') ? 'Project title is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth error={getFieldError('scientific_field')}>
                                <InputLabel>Scientific Field *</InputLabel>
                                <Select
                                    name="scientific_field"
                                    value={formData.scientific_field}
                                    onChange={handleChange}
                                    label="Scientific Field *"
                                >
                                    {scientificFields.map(f => <MenuItem key={f} value={f}>{f}</MenuItem>)}
                                </Select>
                                {getFieldError('scientific_field') && <FormHelperText>Scientific field is required</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={5}
                                label={<RequiredLabel label="Project Abstract" />}
                                name="project_abstract"
                                value={formData.project_abstract}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('project_abstract'))}
                                error={getFieldError('project_abstract')}
                                helperText={getFieldError('project_abstract') ? 'Project abstract is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label={<RequiredLabel label="Objectives" />}
                                name="objectives"
                                value={formData.objectives}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('objectives'))}
                                error={getFieldError('objectives')}
                                helperText={getFieldError('objectives') ? 'Objectives are required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label={<RequiredLabel label="Innovation / Novelty" />}
                                name="innovation_novelty"
                                value={formData.innovation_novelty}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('innovation_novelty'))}
                                error={getFieldError('innovation_novelty')}
                                helperText={getFieldError('innovation_novelty') ? 'Innovation/novelty is required' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label={<RequiredLabel label="Expected Impact" />}
                                name="expected_impact"
                                value={formData.expected_impact}
                                onChange={handleChange}
                                onBlur={() => setTouchedFields(prev => new Set(prev).add('expected_impact'))}
                                error={getFieldError('expected_impact')}
                                helperText={getFieldError('expected_impact') ? 'Expected impact is required' : ''}
                            />
                        </Grid>
                    </Grid>
                );

            case 3:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, background: alpha('#2E8B57', 0.05), borderRadius: 2 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="is_team_project"
                                            checked={formData.is_team_project}
                                            onChange={handleCheckbox}
                                            sx={{ color: '#2E8B57', '&.Mui-checked': { color: '#2E8B57' } }}
                                        />
                                    }
                                    label="This is a team project"
                                />
                            </Paper>
                        </Grid>
                        {formData.is_team_project && (
                            <>
                                {formData.team_members.map((member, idx) => (
                                    <Grid item xs={12} key={idx}>
                                        <Paper sx={{ p: 3, position: 'relative', background: alpha('#2E8B57', 0.08), borderRadius: 2 }}>
                                            <Typography variant="subtitle1" sx={{ color: '#2E8B57', mb: 2 }}>
                                                Team Member {idx + 1}
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="Name *"
                                                        value={member.name}
                                                        onChange={e => handleTeamMemberChange(idx, 'name', e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="Contact *"
                                                        value={member.contact}
                                                        onChange={e => handleTeamMemberChange(idx, 'contact', e.target.value)}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <IconButton
                                                onClick={() => removeTeamMember(idx)}
                                                sx={{ position: 'absolute', top: 8, right: 8, color: '#f44336' }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Paper>
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <Button
                                        variant="outlined"
                                        onClick={addTeamMember}
                                        startIcon={<AddIcon />}
                                        sx={{ color: '#FEC909', borderColor: '#FEC909' }}
                                    >
                                        Add Team Member
                                    </Button>
                                </Grid>
                            </>
                        )}
                    </Grid>
                );

            case 4:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Alert severity="info" sx={{ mb: 2 }}>
                                Files will be uploaded to Cloudinary when you submit
                            </Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="subtitle1" sx={{ color: '#2E8B57', mb: 2 }}>
                                    Project Summary PDF <Typography component="span" color="error">*</Typography>
                                </Typography>
                                <Button variant="contained" component="label">
                                    Choose PDF
                                    <input hidden accept=".pdf" type="file" onChange={(e) => handleFileSelect(e, 'pdf')} />
                                </Button>
                                {formData.pdfFile && (
                                    <Chip
                                        label={formData.pdfFile.name}
                                        onDelete={() => clearFile('pdf')}
                                        sx={{ ml: 2 }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                    Project Proposal <OptionalChip />
                                </Typography>
                                <Button variant="outlined" component="label">
                                    Choose File
                                    <input hidden accept=".pdf,.doc,.docx" type="file" onChange={(e) => handleFileSelect(e, 'proposal')} />
                                </Button>
                                {formData.proposalFile && (
                                    <Chip
                                        label={formData.proposalFile.name}
                                        onDelete={() => clearFile('proposal')}
                                        sx={{ ml: 2 }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                    Photos/Diagrams <OptionalChip />
                                </Typography>
                                <Button variant="outlined" component="label">
                                    Choose Images
                                    <input hidden accept="image/*" type="file" multiple onChange={(e) => handleFileSelect(e, 'photos')} />
                                </Button>
                                {formData.photoFiles.length > 0 && (
                                    <Chip
                                        label={`${formData.photoFiles.length} file(s)`}
                                        onDelete={() => clearFile('photos')}
                                        sx={{ ml: 2 }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={<OptionalLabel label="Video Link" />}
                                name="video_link"
                                value={formData.video_link}
                                onChange={handleChange}
                                placeholder="https://youtube.com/watch?v=..."
                            />
                        </Grid>
                    </Grid>
                );

            case 5:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 4, borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ color: '#2E8B57', mb: 3 }}>
                                    Declaration
                                </Typography>
                                <Stack spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="info_correct"
                                                checked={formData.info_correct}
                                                onChange={handleCheckbox}
                                                sx={{ color: '#2E8B57' }}
                                            />
                                        }
                                        label="I declare that all information provided is correct and accurate."
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="project_original"
                                                checked={formData.project_original}
                                                onChange={handleCheckbox}
                                                sx={{ color: '#2E8B57' }}
                                            />
                                        }
                                        label="I confirm that this project is my/our original work."
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="agree_rules"
                                                checked={formData.agree_rules}
                                                onChange={handleCheckbox}
                                                sx={{ color: '#2E8B57' }}
                                            />
                                        }
                                        label="I agree to abide by the ZRF Science Fair rules and regulations."
                                    />
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                );

            default:
                return null;
        }
    };

    const cardSx = {
        background: 'rgba(19, 38, 32, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(46, 139, 87, 0.3)',
        borderRadius: 3,
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0a1a1a 0%, #0d2a2a 50%, #0a1a1a 100%)',
            py: 4,
        }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Header */}
                <Fade in timeout={800}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Zoom in timeout={600}>
                            <EmojiEventsIcon sx={{
                                fontSize: 80,
                                color: '#FEC909',
                                mb: 2,
                                filter: 'drop-shadow(0 0 20px rgba(254,201,9,0.3))',
                            }} />
                        </Zoom>
                        <Typography variant="h2" sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #2E8B57 0%, #FEC909 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3.5rem' },
                        }}>
                            Science Project Registration
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#C8E0D0', maxWidth: 600, mx: 'auto' }}>
                            Join the next generation of innovators and showcase your scientific brilliance
                        </Typography>
                    </Box>
                </Fade>

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
                    <CardContent>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <Step key={step.label}>
                                        <StepLabel StepIconComponent={() => (
                                            <Icon sx={{
                                                fontSize: 32,
                                                color: index <= activeStep ? '#2E8B57' : 'rgba(46,139,87,0.3)',
                                            }} />
                                        )}>
                                            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                                {step.label}
                                            </Typography>
                                        </StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
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
                            {renderStepContent()}
                        </CardContent>
                    </Card>
                </Grow>

                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Button
                        disabled={activeStep === 0 || isLoading}
                        onClick={handleBack}
                        startIcon={<NavigateBeforeIcon />}
                        variant="outlined"
                        sx={{
                            color: '#C8E0D0', borderColor: '#C8E0D0',
                            '&:hover': { borderColor: '#2E8B57', backgroundColor: alpha('#2E8B57', 0.1) },
                        }}
                    >
                        Back
                    </Button>

                    {activeStep < steps.length - 1 ? (
                        <Button
                            onClick={handleNext}
                            endIcon={<NavigateNextIcon />}
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg, #2E8B57 0%, #216740 100%)',
                                minWidth: 120,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #216740 0%, #1a5232 100%)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            disabled={isLoading || !formData.info_correct || !formData.project_original || !formData.agree_rules}
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg, #FEC909 0%, #FFD633 100%)',
                                color: '#1A1A1A',
                                minWidth: 160,
                                fontWeight: 700,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #FFD633 0%, #FEC909 100%)',
                                    transform: 'translateY(-2px)',
                                },
                                '&.Mui-disabled': { opacity: 0.6 },
                            }}
                        >
                            {isLoading ? <CircularProgress size={22} sx={{ color: '#1A1A1A' }} /> : 'Submit Registration'}
                        </Button>
                    )}
                </Box>

                {/* Success Dialog */}
                <Dialog
                    open={showSuccess}
                    onClose={() => setShowSuccess(false)}
                    PaperProps={{
                        sx: {
                            background: 'linear-gradient(135deg, #132620 0%, #0d2a2a 100%)',
                            borderRadius: 3,
                            border: '1px solid rgba(46,139,87,0.3)',
                        },
                    }}
                >
                    <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
                        <CheckCircleIcon sx={{ fontSize: 64, color: '#2E8B57', mb: 1 }} />
                        <Typography variant="h5" sx={{ color: '#2E8B57', fontWeight: 600 }}>
                            Registration Successful!
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Typography sx={{ color: '#C8E0D0', textAlign: 'center' }}>
                            Your registration has been submitted successfully.
                            You will receive a confirmation email shortly.
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                        <Button
                            onClick={() => setShowSuccess(false)}
                            variant="contained"
                            sx={{ background: 'linear-gradient(135deg, #2E8B57 0%, #216740 100%)', px: 4 }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    );
}