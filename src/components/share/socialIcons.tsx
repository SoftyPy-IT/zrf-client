import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

/**
 * Shared icon map keyed by the `name` field in `socials` (src/lib/site.ts) so the
 * header, drawer and footer always render the same iconography.
 */
export const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon sx={{ fontSize: 17 }} />,
  YouTube: <YouTubeIcon sx={{ fontSize: 18 }} />,
  X: <XIcon sx={{ fontSize: 16 }} />,
  Instagram: <InstagramIcon sx={{ fontSize: 17 }} />,
  LinkedIn: <LinkedInIcon sx={{ fontSize: 17 }} />,
};
