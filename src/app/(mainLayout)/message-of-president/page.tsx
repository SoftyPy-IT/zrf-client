'use client';

import React from 'react';
import MessagePresident from './MessagePresident';
import { useLanguage } from '@/provider/LanguageProvider';
import { useMessageData } from '@/hooks/useMessageData';
import MessageBanner from '../message-of-vice-president/_components/MessageBanner';

const Message = () => {
  const { language } = useLanguage();
  const { messageData, loading, error } = useMessageData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div>

      <MessageBanner title={language === 'ENG' ? 'Message from the President' : 'প্রেসিডেন্টের বার্তা'} text={language === 'ENG' ? 'Ziaur Rahman Foundation' : 'জিয়াউর রহমান ফাউন্ডেশন'} />
      <MessagePresident messageData={messageData} language={language} />
    </div>
  );
};

export default Message;
