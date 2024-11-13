import ZRFForm from '@/components/Forms/Form';
import ZRFInput from '@/components/Forms/Input';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

const MembershipForm = () => {
    const handleSubmit = async (data: FieldValues) => {

    };

    return (
        <ZRFForm onSubmit={handleSubmit}>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="name" label="Name" size="medium" fullWidth />
                </Grid>


                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="email" label="Email" size="medium" fullWidth />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="address" label="Address" size="medium" fullWidth />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="phone" label="Phone" size="medium" fullWidth />
                </Grid>
                

                
                <Grid item xs={12} container justifyContent="center">
                    <Button sx={{width:'200px'}} variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </ZRFForm>
    );
};

export default MembershipForm;
