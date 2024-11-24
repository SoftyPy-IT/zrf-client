'use client';

import React from 'react';

import { useLanguage } from '@/provider/LanguageProvider';
import { useMessageData } from '@/hooks/useMessageData';
import MessageDirector from './MessageDirector';
import MessageBanner from '../message-of-vice-president/_components/MessageBanner';
import Loader from '@/components/Loading/Loading';

const Message = () => {
  const { language } = useLanguage();
  const { messageData, loading, error } = useMessageData();
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }

  return (
    <div>
      <MessageBanner title={language === 'ENG' ? 'Message of Executive Director' : 'নির্বাহী পরিচালক এর বাণী'} text={language === 'ENG' ? 'Ziaur Rahman Foundation' : 'জিয়াউর রহমান ফাউন্ডেশন'} />

      <MessageDirector messageData={messageData} language={language} />
    </div>
  );
};

export default Message;
