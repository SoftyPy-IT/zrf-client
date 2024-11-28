'use client'

import { Share } from '@mui/icons-material';
import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import facebook from '../../assets/icon/facebook.png';
import linkedIn from '../../assets/icon/linkedin.png';
import instagram from '../../assets/icon/instagram.png';
import { useState } from 'react';
import ShareModal from './ShareModal';
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from 'next/link';


const ShareLink = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    const urlToShare = "https://facebook.com";
    const title = "Facebook!";

    return (
        <>
            <div className="socialMedia flex-col md:flex-row gap-5 lg:gap-0 flex ">
                <div className="flex items-center space-x-3">



                    <div className="flex gap-5 p-5">
                        <span onClick={handleOpen} className='cursor-pointer'><Share /> </span>
                        <span>Share</span>
                        {/* <span className="cursor-pointer">
                            <Link href='https://www.facebook.com/webnpfamily'>
                                <FacebookIcon fontSize="small" />
                            </Link>
                        </span>
                        <span className="cursor-pointer">
                            <Link href='https://x.com/i/flow/login?redirect_after_login=%2Fwebnpfamily'>
                                <XIcon fontSize="small" />
                            </Link>

                        </span>
                        <span className="cursor-pointer">
                            <InstagramIcon fontSize="small" />
                        </span>
                        <span className="cursor-pointer">
                            <LinkedInIcon fontSize="small" />
                        </span> */}
                    </div>
                </div>
            </div>

            {
                open && <ShareModal close={handleClose} />
            }
        </>
    );
};

export default ShareLink;
