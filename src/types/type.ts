export type TBanner = {
  _id: string;
  thumnailImages: string[];
  english_title: string;
  bangla_title: string;
  english_short_description: string;
  bangla_short_description: string;
  category: string;
  date: string;
};
export type TActivity = {
  _id: string;
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
  thumnail_img: string;
  eng_images: string[];
  bng_Images: string[];
  slug: string;
  category: string;
};
export type TProgramm = {
  _id: string;
  admin_name: string;
  date: string;
  bangla_title: string;
  english_title: string;
  bangla_short_description: string;
  english_short_description: string;
};

export type TProject = {
  _id: string;
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
  thumnail_img: string;
  eng_images: string[];
  bng_Images: string[];
  slug: string;
};

export type TEbook = {
  _id: string;
  name: string;
  ebook: string;
  title: string;
  post_by: string;
  author: string;
  category: string[];
  sub_category: string[];
  tag: string[];
  published_date: string;
  images: string[];
};

export interface TVideo {
  _id: string,
  video_url: string;
  video_title_bangla: string;
  video_title_english: string;
  thumnailImages: string[];
}
export type TImgGallery = {
  _id: string;
  title_of_bangla: string;
  title_of_english: string;
  slug: string;
  thumnailImages: string[];
};
export type TMessage = {
  filter: any;
  _id:string,
  admin_name: string;
  date: string;
  name_bangla: string;
  name_english: string;
  designation_bangla: string;
  designation_english: string;
  bangla_description: string;
  english_description: string;
  bng_Images: string[];
  slug: string;
  category:string,
};
export type TAbout = {
  category_bn: string;
  _id:string,
  title_bangla: string;
  title_english: string;
  description_banlga: string;
  description_enlgish: string;
  category: string;
  images: string[];
  date:string;
  admin_name:string;
};
export type TIntroduction = {
  _id:string,
  admin_name: string;
  date: string; 
  bangla_title: string;
  english_title: string;
  bangla_description: string;
  english_description: string;
  eng_images:string[],
  bng_images:string[],
  createdAt:string,

};
export type TWhatWeDo = {
  _id:string;
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
export type TCommitte = {
  _id:string,
  bangla_name: string;
  english_name: string;
  designation_bangla: string;
  designation_english: string;
  images: string[];
  category: string; 
  date:string,
  committee:string,
  createdAt:string,
};
export type TOverview = {
  _id:string,
  year_count_bangla: string;
  year_count_english: string;
  year_text_bangla: string;
  year_text_english: string;
  donation_count_bangla: string;
  donation_count_english: string;
  donation_text_banlga: string;
  donation_text_english: string;
  complete_project_count_bangla: string;
  complete_project_count_english: string;
  complete_project_text_english: string;
  complete_project_text_bangla: string;
  volunteer_count_bangla: string;
  volunteer_count_english: string;
  volunteer_text_english: string;
  volunteer_text_bangla: string;
  images: string[];
  description_bangla: string;
  description_english: string;
};
