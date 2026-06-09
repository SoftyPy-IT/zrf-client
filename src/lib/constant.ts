export const registrationSearchableFields = [
    'full_name',
    'email',
    'project_title',
    'institution_name',
    'district',
    'scientific_field',
];

export const scientificFields = [
    'Physics',
    'Chemistry',
    'Biology',
    'Mathematics',
    'Environmental Science',
    'Agriculture',
    'Robotics & AI',
    'Health Science',
    'Engineering & Innovation',
    'Others',
] as const;

export const divisions = ['A', 'B', 'C'] as const;
export const genders = ['Male', 'Female', 'Other'] as const;
export const registrationStatuses = ['pending', 'approved', 'rejected'] as const;
