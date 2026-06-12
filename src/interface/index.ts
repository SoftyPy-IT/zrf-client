
export interface TeamMember {
    name: string;
    contact: string;
}

export interface FormData {
    full_name: string;
    date_of_birth: string;
    gender: string;
    mobile_number: string;
    email: string;
    division: string;
    current_class_year: string;
    institution_name: string;
    institution_address: string;
    district: string;
    mentor_name: string;
    mentor_contact: string;
    project_title: string;
    scientific_field: string;
    project_abstract: string;
    objectives: string;
    innovation_novelty: string;
    expected_impact: string;
    project_type: 'individual' | 'team';
    team_members: TeamMember[];
    pdfFile: File | null;
    proposalFile: File | null;
    photoFiles: File[];
    video_link: string;
    info_correct: boolean;
    project_original: boolean;
    agree_rules: boolean;
}