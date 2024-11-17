
export type TBanner = {
    _id: string,
    thumnailImages: string[],
    english_title: string;
    bangla_title: string,
    english_short_description: string,
    bangla_short_description: string,
    category: string,
    date: string,
  };
  export type TActivity = {
    _id:string,
    img_tagline_bangla: string;
    img_tagline_english: string;
    admin_name: string;
    date: string; 
    bangla_title: string;
    english_title: string;
    bangla_short_description: string;
    english_short_description: string;
    bangla_description: string;
    english_description: string;
    meta_title: string;
    meta_keywords: string[];
    meta_description: string;
    thumnail_img:string,
    eng_images:string[],
    bng_Images:string[],
    slug:string,
    category:string,

  };
  export type TProgramm = {
    _id:string,
    admin_name: string;
    date: string; 
    bangla_title: string;
    english_title: string;
    bangla_short_description: string;
    english_short_description: string;
   
  };
  