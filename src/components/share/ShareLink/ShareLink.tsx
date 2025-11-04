"use client";

import { Share } from "@mui/icons-material";
import { useState } from "react";
import ShareModal from "./ShareModal";

type ShareProps = {
  shareUrl: string;
  title: string | undefined;
  hashtag: string;
  description?: string; // ✅ added
};

const ShareLink = ({ shareUrl, title, hashtag, description }: ShareProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex-col md:flex-row gap-5 lg:gap-0 flex">
        <div className="flex items-center space-x-3">
          <div className="flex gap-0 cursor-pointer" onClick={handleOpen}>
            <Share />
          </div>
        </div>
      </div>

      {open && (
        <ShareModal
          title={title || ""}
          shareUrl={shareUrl}
          hashtag={hashtag || ""}
          description={description || ""}
          close={handleClose}
        />
      )}
    </>
  );
};

export default ShareLink;
