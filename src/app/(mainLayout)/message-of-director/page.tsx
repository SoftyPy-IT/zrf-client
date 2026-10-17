"use client";

import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useMessageData } from "@/hooks/useMessageData";
import MessageDirector from "./MessageDirector";
import MessageBanner from "../message-of-vice-president/_components/MessageBanner";

const Message = () => {
  const { language } = useLanguage();
  const { messageData, loading, error } = useMessageData();

  if (error) return null;

  return (
    <div>
      <MessageBanner
        title={
          language === "ENG"
            ? "Message of Executive Director"
            : "নির্বাহী পরিচালক এর বাণী"
        }
        text={
          language === "ENG"
            ? "Ziaur Rahman Foundation"
            : "জিয়াউর রহমান ফাউন্ডেশন"
        }
      />

      <MessageDirector
        messageData={messageData}
        language={language}
        loading={loading}
      />
    </div>
  );
};

export default Message;
