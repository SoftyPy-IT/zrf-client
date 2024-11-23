'use client';

import React from 'react';

import { useLanguage } from '@/provider/LanguageProvider';
import { useMessageData } from '@/hooks/useMessageData';
import MessageVicePresident from './MessageVicePresident';
import MessageBanner from './_components/MessageBanner';

const Message = () => {
  const { language } = useLanguage();
  const { messageData, loading, error } = useMessageData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div>

      <MessageBanner title={language === 'ENG' ? 'Message from Vice President' : 'ভাইস প্রেসিডেন্ট এর বাণী'} text={language === 'ENG' ? 'Ziaur Rahman Foundation' : 'জিয়াউর রহমান ফাউন্ডেশন'} />
      <MessageVicePresident messageData={messageData} language={language} />
    </div>
  );
};

export default Message;
