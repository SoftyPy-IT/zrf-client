// app/api/set-language/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { language } = await request.json();

        // Validate language
        if (language !== 'ENG' && language !== 'BNG') {
            return NextResponse.json(
                { error: 'Invalid language' },
                { status: 400 }
            );
        }

        // Set cookie
        cookies().set('language', language, {
            path: '/',
            maxAge: 31536000, // 1 year
            sameSite: 'lax',
            httpOnly: false, // Allow client to read it
            secure: process.env.NODE_ENV === 'production',
        });

        return NextResponse.json({ success: true, language });
    } catch (error) {
        console.error('Error setting language cookie:', error);
        return NextResponse.json(
            { error: 'Failed to set language' },
            { status: 500 }
        );
    }
}