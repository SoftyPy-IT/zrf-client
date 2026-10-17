"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import Container from "@/components/share/Container";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { useLanguage } from "@/provider/LanguageProvider";
import { stripHtml } from "@/utils/stripHtml";
import truncateText from "@/utils/truncate";
import portrait from "@/assets/images/tarek-rahman/tarek2.jpg";
import Modal from "./Modal";

type TBioMilestone = {
  id: number;
  image: typeof portrait;
  bangla_title: string;
  english_title: string;
  bangla_content: string;
  english_content: string;
};

/**
 * Milestones are local editorial copy (there is no endpoint behind this page),
 * so both languages live beside each other and are selected by the provider.
 */
const biography: TBioMilestone[] = [
  {
    id: 1,
    image: portrait,
    bangla_title: "১৯৯১ সালের জাতীয় নির্বাচনে তারেক রহমানের ভূমিকা",
    english_title: "Tarique Rahman's role in the 1991 national election",
    bangla_content:
      "১৯৯১ সালের জাতীয় নির্বাচনের সময়, যখন স্বৈরাচারী শাসন থেকে গণতান্ত্রিক সরকারে রূপান্তর ঘটছিল তখন তারেক রহমান সক্রিয়ভাবে দলের পক্ষে সমর্থন জোগাড় করেছিলেন। তিনি বিএনপির জাতীয় প্রচারাভিযান কৌশল কমিটির সদস্য ছিলেন এবং তার মা খালেদা জিয়া যে পাঁচটি আসনে প্রতিদ্বন্দ্বিতা করছিলেন সেখানে নির্বাচনী প্রচারণার সমন্বয়ের দায়িত্বও পালন করেন। সেই সময়ে তিনি সক্রিয়ভাবে বগুড়ার বিএনপি ইউনিটগুলোকে সংগঠিত করেন এবং রাজনীতিকে আরও শক্তিশালী, কর্মীবান্ধব ও উন্নয়নমুখী করতে সহজাত সংস্কৃতি পরিবর্তন করেন",
    english_content:
      "During the 1991 national election, as the country moved from autocratic rule to democratic government, Tarique Rahman worked actively to build support for the party. He was a member of the BNP's national campaign strategy committee and also coordinated the election campaign in the five constituencies contested by his mother, Khaleda Zia. At that time he organised the BNP units in Bogura and helped shape a culture of politics that was stronger, more worker-friendly and more development-oriented.",
  },
  {
    id: 2,
    image: portrait,
    bangla_title: "১৯৯৬ সালের নির্বাচন: ভূমিকা ও সিদ্ধান্ত",
    english_title: "The 1996 election: role and decision",
    bangla_content:
      "১৯৯১ সালের জাতীয় নির্বাচনে বিএনপির সাফল্য এবং নতুন সরকার গঠনের পর, তারেক রহমানকে তার অবদানের স্বীকৃতি হিসাবে দলের সিনিয়র ভূমিকার প্রস্তাব দেওয়া হয়েছিল। তবে তৃণমূল পর্যায়ে দলকে শক্তিশালী করতে পর্যাপ্ত সময় পাওয়ার জন্য তিনি উচ্চ পদে অনীহা প্রকাশ করেন। বহু বছর ধরে তিনি বিএনপির বগুড়া ইউনিটের উন্নয়নে তৎপর ছিলেন। ১৯৯৬ সালের জাতীয় নির্বাচনের সময়, দলের তৃণমূল এবং সিনিয়র নেতৃত্ব রহমানকে বগুড়া থেকে একটি আসনে প্রতিদ্বন্দ্বিতা করার জন্য অনুরোধ করেছিল। কিন্তু তিনি তৃণমূল পর্যায়ে তার কাজকে আরও এগিয়ে নেওয়া এবং তার মায়ের জন্য নির্বাচনী প্রচারণার সমন্বয় করার লক্ষ্যে প্রস্তাবটি প্রত্যাখ্যান করেন।",
    english_content:
      "After the BNP's success in the 1991 national election and the formation of a new government, Tarique Rahman was offered a senior role in the party in recognition of his contribution. He was, however, reluctant to take high office, wishing to have enough time to strengthen the party at the grassroots. For many years he worked for the development of the BNP's Bogura unit. During the 1996 national election, both the grassroots and the senior leadership of the party asked Rahman to contest a constituency from Bogura. He declined the offer in order to carry his work at the grassroots further and to coordinate the election campaign for his mother.",
  },
  {
    id: 3,
    image: portrait,
    bangla_title:
      "১৯৯৬-২০০১ সালের আওয়ামী লীগ সরকারের বিরুদ্ধে আন্দোলন",
    english_title:
      "The movement against the Awami League government, 1996–2001",
    bangla_content:
      "১৯৯৬-২০০১ সালে আওয়ামী লীগ সরকারের শাসনামলে, তারেক রহমান সরকারের কর্মকাণ্ডের বিরুদ্ধে আন্দোলন গড়ে তোলেন। তিনি সক্রিয়ভাবে অর্থনৈতিক বঞ্চনার সমস্যাগুলি মোকাবেলা করার জন্য প্রচারণা চালান এবং গ্রামীণ এলাকায় বসবাসকারী জনগণের দুর্দশার কথা প্রকাশ করার লক্ষ্যে দেশব্যাপী পরামর্শমূলক কর্মসূচিতে সফল হন। এই বৃহৎ পরিসরের কর্মসূচী, বাংলাদেশের ইতিহাসে এই প্রকৃতির প্রথম, সরকারের বিরুদ্ধে গণসংহতি গড়ে তোলে, যা ফলস্বরূপ, বিএনপিকে ক্ষমতায় ফেরাতে সহায়ক ভূমিকা পালন করে। খোলা পরিষদের মাধ্যমে নেতা নির্বাচনের জন্য তিনি বগুড়ায় গোপন ব্যালট পদ্ধতি প্রতিষ্ঠা করেন।",
    english_content:
      "During the Awami League government of 1996–2001, Tarique Rahman built a movement against the actions of the government. He campaigned actively against the problems of economic deprivation and succeeded in holding nationwide consultative programmes to highlight the plight of people living in rural areas. This large-scale programme — the first of its kind in the history of Bangladesh — built public solidarity against the government and, in turn, helped return the BNP to power. In Bogura he established the secret ballot for electing leaders through open councils.",
  },
  {
    id: 4,
    image: portrait,
    bangla_title: "জিয়াউর রহমান ফাউন্ডেশন ও রাজনৈতিক কর্মকাণ্ড",
    english_title: "The Ziaur Rahman Foundation and political activity",
    bangla_content:
      "২০০০ সালের ১৪  এপ্রিল, ১লা বৈশাখ, খুলনা জেলার দীঘলিয়া ও রূপসা থানায় আয়োজিত স্বাস্থ্যমেলার সফল আয়োজন দিয়ে যাত্রা শুরু হয় এই সংগঠনের। “একটি উদ্যোগ, একটু চেষ্টা, এনে দেবে সচ্ছলতা, দেশে আসবে স্বনির্ভরতা” এই স্লোগানকে মূলমন্ত্র ধরে যাত্রা শুরু করা জিয়াউর রহমান ফাউন্ডেশন-এর ভিশনারি প্রেসিডেন্ট জনাব তারেক রহমান বিশ্বাস করেন আমাদের দেশের প্রতিটি মানুষ যদি ছোট ছোট উদ্যোগ গ্রহণ করেন তাহলে এই দেশে অর্থনৈতিক উন্নতি আসবেই। এ লক্ষ্যে তিনি প্রাথমিক অবস্থায় জিয়াউর রহমান ফাউন্ডেশনের মাধ্যমে স্বাস্থ্যখাতে, শিক্ষাখাতে, কৃষিখাতে বিভিন্ন ধরনের সেবামূলক প্রকল্প গ্রহণ করেন। ২০০১ সালে অনুষ্ঠিত জাতীয় নির্বাচনে, দলটি দুই-তৃতীয়াংশ সংখ্যাগরিষ্ঠতা নিয়ে ব্যাপক বিজয় লাভ করে। সরকারের মধ্যে অবস্থান নেওয়ার জন্য দলের তৃণমূলের পাশাপাশি জাতীয় নেতৃত্বের পক্ষ থেকে রহমানের ওপর ব্যাপক চাপ ছিল। কিন্তু তিনি বারবার রাজি না হয়ে দলের মধ্যে কাজ করে যাওয়ার অঙ্গীকার করেন। জুন ২০০২ সালে, তিনি বিএনপির স্থায়ী কমিটি কর্তৃক যুগ্ম মহাসচিব নিযুক্ত হন। সিনিয়র যুগ্ম সাধারণ সম্পাদক হিসেবে দায়িত্ব নেওয়ার পর, রহমান দলের কর্মীদের দৃষ্টিভঙ্গি সম্পর্কে সচেতন হওয়ার লক্ষ্যে দেশের প্রতিটি জেলায় “তৃণমূল পর্যায়ের সম্মেলন” এর পাশাপাশি “বিভাগীয় সম্মেলন” এবং “উপজেলা সম্মেলন” নামে একটি কর্মসূচি চালু করেন। সারাদেশে দলের শতাধিক সভায়ও তিনি যোগ দেন, সেই সব সভায় দলের নেতারা তার সঙ্গে ছিলেন। ২০০২ সালে গোপালগঞ্জ জেলার টুঙ্গিপাড়া উপজেলা সফরকালে, বঙ্গবন্ধু শেখ মুজিবুর রহমানের সমাধি পরিদর্শন করেন যা রাজনৈতিক সহনশীলতা পরিচয়। এসময় তিনি বিভিন্ন সমাবেশে উপস্থিতদের উদ্দেশ্যে ব্যক্তিগতভাবে প্রতিক্রিয়া পত্রে স্বাক্ষর করেন। এই প্রতিক্রিয়া পত্রগুলিতে আঞ্চলিকভাবে নির্দিষ্ট সমস্যা এবং সেগুলি কীভাবে সমাধান করা যায় সে সম্পর্কে আলোচনা রয়েছে। এপ্রিলের প্রথম সপ্তাহে ১৮,০০০টি চিঠি স্বাক্ষরিত হয়। তিনি ২০০৯ সালে বিএনপির ৫ম জাতীয় কাউন্সিলে রহমান রহমানকে দলের সিনিয়র ভাইস-চেয়ারম্যান নির্বাচিত করেন।",
    english_content:
      "The organisation began its journey on 14 April 2000 — Pahela Baishakh — with a successful health camp held in the Dighalia and Rupsha upazilas of Khulna district. Guided by the motto “A small initiative, a little effort will bring prosperity and make the country self-reliant”, the visionary president of the Ziaur Rahman Foundation, Mr Tarique Rahman, believes that if every person in our country takes small initiatives, economic progress will certainly follow. With that aim he launched a range of service projects in health, education and agriculture through the Ziaur Rahman Foundation. In the 2001 national election the party won a landslide victory with a two-thirds majority. There was heavy pressure on Rahman, from both the grassroots and the national leadership of the party, to take a position in the government. He repeatedly declined and pledged to keep working within the party. In June 2002 he was appointed Joint Secretary General by the BNP's Standing Committee. After taking charge as Senior Joint Secretary General, Rahman launched a programme of “grassroots conferences”, along with “divisional conferences” and “upazila conferences”, in every district of the country so that he could understand the outlook of party workers. He also attended more than a hundred party meetings across the country, where party leaders accompanied him. In 2002, during a visit to Tungipara upazila in Gopalganj district, he visited the mausoleum of Bangabandhu Sheikh Mujibur Rahman — an expression of political tolerance. He also personally signed reply letters addressed to those present at various rallies. Those letters discussed regionally specific problems and how they could be solved; in the first week of April 18,000 letters were signed. At the BNP's fifth national council in 2009 he was elected Senior Vice-Chairman of the party.",
  },
  {
    id: 5,
    image: portrait,
    bangla_title: "কল্যাণ সংস্থা প্রতিষ্ঠা ও রাজনৈতিক কর্মকাণ্ড",
    english_title: "Founding welfare organisations and political activity",
    bangla_content:
      "তারেক রহমান বিভিন্ন কল্যাণ সংস্থা প্রতিষ্ঠায়ও অবদান রাখেন। হাঁস-মুরগি, দুগ্ধ ও মৎস্য খামার প্রতিষ্ঠার মাধ্যমে দরিদ্র জনগোষ্ঠীকে নানাভাবে স্বাবলম্বী হতে উদ্বুদ্ধ করতে তিনি দেশের বিভিন্ন স্থানে যান। ৪ জানুয়ারী ২০১৪-এ, ইউটিউবে পোস্ট করা একটি ভিডিও বার্তায়, রহমান বাংলাদেশে ৫ জানুয়ারির সাধারণ নির্বাচন বয়কটের আহ্বান জানান। তিনি বলেন, “সময় এসেছে আমাদের সকলের ৫ জানুয়ারির নির্বাচন প্রতিরোধ ও বর্জন করার। ব্যক্তিগত স্বার্থে নয়, দেশের অস্তিত্বের স্বার্থে।” ১ সেপ্টেম্বর ২০০৮-এ রহমানের মা খালেদা জিয়ার মুক্তির পর, তিনি সেন্ট জন’স উডের একটি বেসরকারি হাসপাতাল ওয়েলিংটন হাসপাতালে বিদেশী চিকিৎসার জন্য লন্ডন, যুক্তরাজ্যের উদ্দেশ্যে যাত্রা  করবেন। সেনাবাহিনী সমর্থিত ১/১১ অন্তর্বর্তীকালীন সরকার এর সময় উনার উপর অমানুষিক নির্যাতন করা হয়।",
    english_content:
      "Tarique Rahman also contributed to the founding of various welfare organisations. He travelled to different parts of the country to inspire poor communities to become self-reliant in many ways, including through poultry, dairy and fisheries farms. In a video message posted on YouTube on 4 January 2014, Rahman called for a boycott of the 5 January general election in Bangladesh. He said, “The time has come for all of us to resist and boycott the 5 January election — not for personal interest, but for the sake of the country's existence.” After the release of his mother, Khaleda Zia, on 1 September 2008, he travelled to London in the United Kingdom for medical treatment at Wellington Hospital, a private hospital in St John's Wood. During the army-backed 1/11 interim government he was subjected to inhuman treatment.",
  },
  {
    id: 6,
    image: portrait,
    bangla_title: "রাজনৈতিক উদ্দেশ্যপ্রণোদিত মামলা",
    english_title: "Politically motivated cases",
    bangla_content:
      "দুর্নীতি দমন কমিশন তারেক রহমান এবং ব্যবসায়িক অংশীদার গিয়াসউদ্দিন আল মামুনের বিরুদ্ধে ১২ টি মামলা করেছে, যা রাজনৈতিকভাবে উদ্দেশ্যপ্রণোদিত এবং তারেক রহমানকে বাংলাদেশের রাজনীতিতে অংশগ্রহণ থেকে বিরত রাখার জন্য অতীতের তত্ত্বাবধায়ক সরকারের ষড়যন্ত্রের অংশ। তবে তার বিরুদ্ধে আনা সব অভিযোগ এখনো কমিশনে প্রমাণিত হয়নি। ১৬ অক্টোবর ২০০৯-এ হাইকোর্ট একটি রুল জারি করে সরকার এবং দুর্নীতি দমন কমিশন বাংলাদেশকে ব্যাখ্যা করতে বলে যে কেন খালেদা জিয়া ও রহমানের বিরুদ্ধে জিয়া অরফানেজ ট্রাস্ট দুর্নীতি মামলাটি জিয়ার দায়ের করা একটি পিটিশনে বাতিল করা হবে না। ২০ নভেম্বর ২০০৯, বিএনপি ছাত্র ফ্রন্ট জাতীয়তাবাদী ছাত্রদল (জেসিডি) তার পৈতৃক জেলা বগুড়ায় রহমানের ৪২ তম জন্মদিন পালনে সাত দিনব্যাপী অনুষ্ঠানের আয়োজন করে। অনুষ্ঠানে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন বিএনপি চেয়ারপারসন খালেদা জিয়া।",
    english_content:
      "The Anti-Corruption Commission filed 12 cases against Tarique Rahman and his business partner Giasuddin Al Mamun — cases that are politically motivated and part of a conspiracy by a past caretaker government to keep Tarique Rahman away from Bangladesh's politics. None of the allegations brought against him has yet been proved before the commission. On 16 October 2009 the High Court issued a rule asking the government and the Anti-Corruption Commission of Bangladesh to explain why the Zia Orphanage Trust corruption case against Khaleda Zia and Rahman should not be quashed on a petition filed by Zia. On 20 November 2009, the BNP's student front, the Jatiyatabadi Chhatra Dal (JCD), held a seven-day programme in Rahman's ancestral district of Bogura to mark his 42nd birthday. The BNP Chairperson, Khaleda Zia, attended the event as chief guest.",
  },
  {
    id: 7,
    image: portrait,
    bangla_title: "খালেদা জিয়া ও তারেক রহমানের পরিস্থিতি",
    english_title: "The situation of Khaleda Zia and Tarique Rahman",
    bangla_content:
      "খালেদা জিয়া বলেন, তার ছেলে বিদেশ থেকে চিকিৎসা শেষে দেশে ফিরে সক্রিয় রাজনীতিতে অংশ নেবেন। তিনি বগুড়া যাওয়ার পথে কয়েকটি জনসভায় ভাষণ দেন এবং অভিযোগ করেন যে বর্তমান সরকার তার ছেলে যাতে দেশে ফিরতে না পারে সেজন্য তাকে হয়রানি করার চেষ্টা করছে। তিনি বলেন, “তারেক দেশের উন্নয়নের জন্য কাজ করেছেন, কিন্তু জাতীয় ও আন্তর্জাতিক ষড়যন্ত্রের অংশ হিসাবে তাকে ধ্বংস করার জন্য প্রচুর মামলা করা হয়েছিল।” তিনি আরও যোগ করেন, “২০০৭ সালের ৭ মার্চ তাকে তুলে নেওয়া হয়।  আমার ঠিক সামনেই একটি গাড়িতে। কিন্তু হেফাজতের পর আমার ছেলেকে স্ট্রেচারে চিকিৎসার জন্য বিদেশে পাঠাতে হয়েছে । চিকিৎসকরা বলেছেন তার সুস্থ হতে আরও সময় লাগবে” তিনি অভিযোগ করেন যে গত তত্ত্বাবধায়ক সরকার মিথ্যা মামলা করেছে। অনুষ্ঠানে বিএনপি মহাসচিব খন্দকার দেলোয়ার হোসেন বলেন, বর্তমান সরকারের জনপ্রিয়তা তলানিতে গিয়ে ঠেকেছে এবং তারা এখন তারেক রহমানকে হুমকি মনে করছে। তিনি আরও বলেন, তিনি যাতে ফিরতে না পারেন সেজন্য নতুন মামলা করা হচ্ছে।",
    english_content:
      "Khaleda Zia said that her son would return home after completing his treatment abroad and take part in active politics. Speaking at several public meetings on her way to Bogura, she alleged that the present government was trying to harass her son so that he could not return to the country. She said, “Tarique has worked for the development of the country, but as part of a national and international conspiracy a great many cases were filed to destroy him.” She added, “On 7 March 2007 he was picked up — in a car right in front of me. After his detention my son had to be sent abroad on a stretcher for treatment. Doctors have said it will take more time for him to recover.” She alleged that the previous caretaker government had filed false cases. At the event, BNP Secretary General Khandaker Delwar Hossain said that the popularity of the present government had hit rock bottom and that it now regarded Tarique Rahman as a threat. He added that new cases were being filed to prevent him from returning.",
  },
  {
    id: 8,
    image: portrait,
    bangla_title: "দায়িত্ব গ্রহণ ও আন্তর্জাতিক যোগাযোগ",
    english_title: "Taking up responsibility and international engagement",
    bangla_content:
      "৮ ডিসেম্বর ২০০৯-এ বাংলাদেশ জাতীয়তাবাদী দলের ৫ তম জাতীয় কাউন্সিলে, রহমানকে দলের সিনিয়র ভাইস চেয়ারম্যান হিসাবে ঘোষণা করা হয়। তিনি লন্ডন থেকে জায়ান্ট স্ক্রিনের মাধ্যমে হাজির হয়ে বাংলাদেশের জনগণ এবং বাংলাদেশ জাতীয়তাবাদী দলের নেতাকর্মীদের উদ্দেশ্যে একটি সংক্ষিপ্ত বক্তৃতা করেন। রহমান স্বীকার করেন, তার চিকিৎসা এখনো চলছে। সুস্থ হয়ে বাংলাদেশে ফিরে নেতাকর্মীদের সঙ্গে যোগ দেবেন বলে আশা প্রকাশ করেন তিনি। ২৫ জুলাই ২০১৩, তারেক রহমানকে লন্ডনে দলের প্রবাসী সমর্থকদের দ্বারা আয়োজিত একটি ইফতার পার্টিতে আমন্ত্রণ জানানো হয়েছিল। তিনি তার ধারনা শেয়ার করেন এবং বাংলাদেশের উন্নয়নে উন্নয়ন কার্যক্রম পরিচালনার রূপরেখা দেন। ২০১৩ সালের সেপ্টেম্বরে, মার্কিন যুক্তরাষ্ট্র সরকারের কিছু প্রতিনিধি রহমানের সাথে দেখা করেন এবং কিছু দ্বিপাক্ষিক বিষয় নিয়ে আলোচনা করেন। রহমান তাদের জঙ্গিবাদের বিরুদ্ধে তার অবস্থানের আশ্বাস দেন।",
    english_content:
      "On 8 December 2009, at the fifth national council of the Bangladesh Nationalist Party, Rahman was declared the party's Senior Vice-Chairman. Appearing from London on a giant screen, he delivered a short address to the people of Bangladesh and to the leaders and activists of the BNP. Rahman acknowledged that his treatment was still continuing and expressed the hope that he would return to Bangladesh in good health and join the party's leaders and activists. On 25 July 2013, Tarique Rahman was invited to an iftar party organised in London by the party's expatriate supporters. He shared his views and outlined a framework for carrying out development work for the progress of Bangladesh. In September 2013, some representatives of the United States government met Rahman and discussed a number of bilateral issues. Rahman assured them of his position against militancy.",
  },
  {
    id: 9,
    image: portrait,
    bangla_title: "মামলা হতে খালাস ও সুপ্রিম কোর্টে মামলা স্থগিত",
    english_title:
      "Acquittal in a case and suspension of proceedings in the Supreme Court",
    bangla_content:
      "৭ জুন ২০০৭ তারিখে তারক রহমান এবং ব্যবসায়িক অংশীদার গিয়াসউদ্দিন আল মামুনের বিরুদ্ধে ঢাকার একটি আদালতে বাংলাদেশ দুর্নীতি দমন কমিশন কর্তৃক একটি মানি লন্ডারিং মামলা দায়ের করা হয়। ১৮ নভেম্বর ২০১৩ তারিখে আদালতের দেওয়া রায়ে, ২০.৪১ কোটি টাকার মামলায় রহমানকে খালাস দেওয়া হয়। বাংলাদেশ দুর্নীতি দমন কমিশনের সদস্য মোহাম্মদ শাহাবুদ্দিন রায় প্রত্যাখ্যান করে বলেছেন: “তারেক ও মামুনের অপরাধে সমান ভূমিকা ছিল। তাই আইনগতভাবে পার্থক্য করার সুযোগ নেই।” এটি ছিল সতেরটি মামলার একটিতে প্রথম রায়। এর মধ্যে ১২টি মামলা স্থগিত করেছে বাংলাদেশ সুপ্রিম কোর্ট। বিএনপির কর্মকর্তা ও নেতারা দাবি করেছেন যে এই রায় তার নির্দোষতার প্রমাণ এবং তার দুর্নীতির সাথে কোন সম্পৃক্ততা নেই এবং রহমানের বিরুদ্ধে সমস্ত মামলা “রাজনৈতিক উদ্দেশ্যপ্রণোদিত”।",
    english_content:
      "On 7 June 2007, the Anti-Corruption Commission of Bangladesh filed a money laundering case against Tarique Rahman and his business partner Giasuddin Al Mamun in a Dhaka court. In a verdict delivered on 18 November 2013, Rahman was acquitted in the case involving Tk 20.41 crore. Member of the Anti-Corruption Commission Mohammad Shahabuddin rejected the verdict, saying: “Tareque and Mamun played an equal role in the offence. Therefore there is no scope to differentiate between them in law.” It was the first verdict in one of seventeen cases; of these, 12 cases had been stayed by the Supreme Court of Bangladesh. BNP officials and leaders claimed that the verdict proved his innocence and that he had no involvement in corruption, and that all the cases against Rahman were “politically motivated”.",
  },
  {
    id: 10,
    image: portrait,
    bangla_title: "মার্কিন দূতাবাসের অভিমত",
    english_title: "Observations of the US embassy",
    bangla_content:
      "৩ নভেম্বর ২০০৮-এ, একটি ফাঁস হওয়া মার্কিন দূতাবাসের তারে বলা হয় যে ঢাকার দূতাবাস বিশ্বাস করে যে রহমান “মহারাজনৈতিক দুর্নীতির জন্য দোষী যা মার্কিন জাতীয় স্বার্থের উপর মারাত্মক বিরূপ প্রভাব ফেলেছে”। ১৭ নভেম্বর ২০১৩ তারিখে বাংলাদেশের একটি মেট্রোপলিটন আদালতের দেওয়া রায়ে, আদালতের বিচারক বলেছিলেন যে খাদিজা ইসলাম, যিনি মামুনকে টাকা দিয়েছিলেন তিনি আদালতকে বলেননি যে তারেক রহমান ঘুষ চেয়েছিলেন বা তাকে দেওয়ার জন্য তাকে চাপ দিয়েছিলেন। কোম্পানী কাজ তারেক রহমান ১৬৪ ধারায় আদালতে স্বীকারোক্তিমূলক জবানবন্দি দেননি এবং আদালতে এমন কোনো নথি উপস্থাপন করা হয়নি যা প্রমাণ করে যে তিনি টাকা নিয়েছেন। তিনি বলেন, তারেক রহমান, মামুনের মাধ্যমে খাদিজাকে টাকা দাবি করার জন্য চাপ দিয়েছিলেন এমন দাবিও বিশ্বাসযোগ্য নয়। ৯ ডিসেম্বর রহমানের বিরুদ্ধে রেড নোটিশ প্রত্যাহার করা হয়।",
    english_content:
      "On 3 November 2008, a leaked US embassy cable said that the embassy in Dhaka believed Rahman was “guilty of mega political corruption which has had a seriously adverse effect on US national interests”. In a verdict delivered by a metropolitan court in Bangladesh on 17 November 2013, the judge said that Khadiza Islam, who had given money to Mamun, had not told the court that Tarique Rahman had asked for a bribe or pressured her to pay it. Tarique Rahman did not give a confessional statement to the court under Section 164, and no document was produced in court proving that he had received the money. The judge said the claim that Tarique Rahman had pressured Khadiza, through Mamun, to demand money was also not credible. On 9 December the red notice against Rahman was withdrawn.",
  },
  {
    id: 11,
    image: portrait,
    bangla_title: "রাজনৈতিক কর্মকাণ্ড",
    english_title: "Political activity",
    bangla_content:
      "জিয়া প্রাসাদ রাজনীতিক ছিলেন না এবং মন্ত্রীসভার বেশ কিছু বৈঠক করেন ঢাকা থেকে দূরে, দেশের বিভিন্ন গুরুত্বপূর্ণ স্থানে। এইরকম প্রথম বৈঠকটি হয়েছিল সিলেটে ১২ অক্টোবর ১৯৭৯। সেনাবাহিনীতে চাকরির অভিজ্ঞতার সুবাদে তিনি দীর্ঘ পথ পায়ে হেঁটে ভ্রমণে অভ্যস্ত ছিলেন। প্রায়ই তিনি গ্রামবাংলার এবড়োথেবড়ো পথ অনায়াসে পাড়ি দিয়েছেন। জিয়া এ ধরণের সফরে যেতেন উন্নয়ন প্রকল্পের অগ্রগতি পরিদর্শন করতে এবং জনগণের মন বুঝতে। জিয়ার এই 'জানার জন্য হাঁটা' অনুশীলনের শুরু ২৮ জানুয়ারি ১৯৭৭। সেদিন তিনি সিলেটের হাওড় অঞ্চলের শুকনো এলাকার ২২ মেইল পথ পায়ে হেঁটে অতিক্রম করেন। এই রকম শেষ পদযাত্রাটি ২১ এপ্রিল ১৯৮০ বগুড়া সার্কিটহাউজ থেকে শুরু করে একটানা সাত মেইল পথ অতিক্রম করে। রাজশাহী বিভাগের সকল সংসদ সদস্য সেই কাফেলায় তাদের নেতার সাথে শামিল হয়েছিলেন। অন্য যেভাবে জিয়া নিজেকে জনগণের কাছে নিয়ে গিয়েছেন সেগুলোর মধ্যে ছিল বিশেষ ট্রেনে করে ভ্রমণ। এ ধরণের ট্রেনযাত্রা তিনি শুরু করেন ১৯৮০ সালের শেষ দিকে। ৫ অক্টোবর একটি বিশেষ ট্রেনযোগে ঢাকা থেকে দুই দিনের সফরে উত্তরাঞ্চলের শহর দিনাজপুর যাত্রা করেন জিয়া।",
    english_content:
      "Zia was not a palace politician, and several cabinet meetings were held far from Dhaka, at important locations around the country. The first such meeting was held in Sylhet on 12 October 1979. Thanks to his experience in the army, he was accustomed to travelling long distances on foot. He often crossed the rough, uneven paths of rural Bengal with ease. Zia would make such trips to inspect the progress of development projects and to understand the minds of the people. Zia's practice of “walking to know” began on 28 January 1977, when he walked 22 miles through the dry area of the haor region of Sylhet. The last such walk began on 21 April 1980 from the Bogura Circuit House and covered seven miles without a break. All the members of parliament from the Rajshahi division joined their leader in that caravan. Another way in which Zia took himself to the people was by travelling on special trains, a practice he began in late 1980. On 5 October Zia travelled by a special train from Dhaka to the northern town of Dinajpur on a two-day visit.",
  },
  {
    id: 12,
    image: portrait,
    bangla_title: "দ্য পলিটিক্যাল থট অফ তারেক রহমান",
    english_title: "The Political Thought of Tarique Rahman",
    bangla_content:
      "বাংলাদেশ পলিসি ফোরাম কেমব্রিজ, একটি অলাভজনক সংস্থা, ২০১৩ সালে দ্য পলিটিক্যাল থট অফ তারেক রহমান শিরোনামে ১৭ টি নিবন্ধের একটি সংকলন প্রকাশ করে। বইটি জুন ২০১৩ সালে কেমব্রিজ বিশ্ববিদ্যালয়ে চালু করা হয়েছিল। আগস্ট ২০১৩ সালে, নিউ ইয়র্ক সিটির কলম্বিয়া বিশ্ববিদ্যালয়ে একটি আমেরিকান সংস্করণ চালু করা হয়েছিল, তারপরে অস্ট্রেলিয়ান, কানাডিয়ান এবং জার্মান সংস্করণগুলি যথাক্রমে নিউ সাউথ ওয়েলস বিশ্ববিদ্যালয়, টরন্টো বিশ্ববিদ্যালয় এবং উলম বিশ্ববিদ্যালয়ে সেপ্টেম্বর এবং অক্টোবর ২০১৩ এর মধ্যে চালু হয়েছিল। ২০১৮ নির্বাচনের সময় উনি লন্ডন থেকে দলকে নেতৃত্ব দেন। নির্বাচন পরবর্তী সময়ে দলকে সু-সংগঠিত করার লক্ষ্যে দিন রাত পরিশ্রম করে যাচ্ছেন এবং নেতৃত্ব দিচ্ছেন। দ্রুত সময়ের মধ্যে কমিটি করন, প্রত্যেকটা অনুষ্ঠানে নিজে ভার্চুয়ালি উপস্থিত থেকে তৃণমুল পর্যায়ের নেতৃবৃন্দদের সাথে মতবিনিময় উল্লেখযোগ্য। সম্প্রতি উনার “টেইক ব্যাক বাংলাদেশ” সর্বসাধারনের মাঝে ব্যাপক সাড়া জাগিয়েছে। রাষ্ট্র মেরামতের লক্ষ্যে মিডিয়া সেল গঠন করে সকল শ্রেনী-পেষার মানুষকে এক করে বি এন পি এর ভিশন সম্পর্কে উদ্ভুদ্ধ করা হচ্ছে। উনার নেতৃত্বে বাংলাদেসশ জাতীয়তাবাদী দল এই মুহুর্তে অনেক শক্তিশালী ও ঐক্যবদ্ধ।",
    english_content:
      "Bangladesh Policy Forum Cambridge, a non-profit organisation, published a collection of 17 essays in 2013 titled The Political Thought of Tarique Rahman. The book was launched at Cambridge University in June 2013. In August 2013 an American edition was launched at Columbia University in New York City, followed by Australian, Canadian and German editions launched at the University of New South Wales, the University of Toronto and Ulm University respectively between September and October 2013. During the 2018 election he led the party from London. In the post-election period he has been working day and night to organise the party well and to provide leadership. Notable among his efforts are the rapid formation of committees and his virtual presence at every programme to exchange views with grassroots leaders. Recently his “Take Back Bangladesh” campaign has drawn a wide response from the general public. To repair the state, a media cell has been formed to unite people of all classes and professions and to inspire them about the BNP's vision. Under his leadership the Bangladesh Nationalist Party is at present much stronger and more united.",
  },
];

/** Milestone numbers read in Bangla numerals when the page is in Bangla. */
const toBanglaDigits = (value: string) =>
  value.replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

/**
 * Tarique Rahman — short profile.
 *
 * The dark opening carries the portrait and a concise introduction, the profile
 * is an editorial two-part prose column, and the political milestones are a
 * calm three-up grid that opens each entry in full.
 */
const TariqueRahmanBio = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
    image: typeof portrait;
  } | null>(null);

  const handleOpen = (
    title: string,
    content: string,
    image: typeof portrait,
  ) => {
    setModalContent({ title, content, image });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const introParagraphs = [
    {
      eyebrow: isBn ? "পরিবার" : "Family",
      title: isBn ? "জন্ম ও পরিবার" : "Birth and family",
      body: isBn
        ? "তারেক রহমান, বীর মুক্তিযোদ্ধা ও শহীদ রাষ্ট্রপতি জিয়াউর রহমান ও খালেদা জিয়ার প্রথম ছেলে। তিনি ১৯৬৫ সালের ২০ নভেম্বর জন্মগ্রহণ করেন। তার বাবা ছিলেন বাংলাদেশের ৭ম রাষ্ট্রপতি এবং তার মা বাংলাদেশের প্রথম মহিলা প্রধানমন্ত্রী হিসেবে দায়িত্ব পালন করেন। উনার আদরের একমাত্র ছোট ভাই মরহুম আরাফাত রহমান কোকো। তিনি বাংলাদেশ নৌবাহিনীর প্রাক্তন নৌবাহিনী প্রধান রিয়ার অ্যাডমিরাল মাহবুব আলী খানের কনিষ্ঠ কন্যা চিকিৎসক জুবাইদা রহমানকে বিয়ে করেন। তাদের একটি মেয়ে, জাইমা রহমান। রাজনৈতিক প্রতিহিংসার শিকার হয়ে তিনি এখন লন্ডনে অবস্থান করছেন এবং সেখান থেকে দিন রাত পরিশ্রম করে দলকে সু-সংগঠিত করছেন এবং নেতৃত্ব দিচ্ছেন।"
        : "Tarique Rahman is the eldest son of Bir Muktijoddha and Shaheed President Ziaur Rahman and Begum Khaleda Zia. He was born on 20 November 1965. His father served as the seventh President of Bangladesh, and his mother served as the first woman Prime Minister of the country. His only younger brother was the late Arafat Rahman Koko. He is married to Dr Zubaida Rahman, the youngest daughter of former Chief of Naval Staff Rear Admiral Mahbub Ali Khan. They have one daughter, Zaima Rahman. A victim of political persecution, he now resides in London, from where he works day and night to organise the party and provide it with leadership.",
    },
    {
      eyebrow: isBn ? "শিক্ষা" : "Education",
      title: isBn
        ? "শিক্ষা ও রাজনৈতিক জীবনের সূচনা"
        : "Education and the beginning of public life",
      body: isBn
        ? "তিনি সেন্ট জোসেফ উচ্চ মাধ্যমিক বিদ্যালয় (ঢাকা) এবং ঢাকা রেসিডেন্সিয়াল মডেল কলেজে পড়াশোনা করেছেন। প্রথমে তিনি ১৯৮৪ সালে ঢাকা বিশ্ববিদ্যালয়ে আইন বিভাগে ভর্তি হন তারপর বিশ্ববিদ্যালয়ের লোক প্রশাসন বিভাগে স্থানান্তরিত হন। ১৯৮৮ সালে, তারেক রহমান দলের গাবতলী উপজেলার প্রাথমিক সদস্য এবং পরে বগুড়া জেলা কমিটির সদস্য হিসাবে তার রাজনৈতিক জীবন শুরু করেন।"
        : "He studied at St Joseph Higher Secondary School (Dhaka) and Dhaka Residential Model College. He enrolled in the Department of Law at the University of Dhaka in 1984 and later transferred to the university's Department of Public Administration. In 1988, Tarique Rahman began his political life as a primary member of the party's Gabtali upazila unit and later as a member of the Bogura district committee.",
    },
  ];

  return (
    <>
      <CommonBanner
        title={isBn ? "তারেক রহমান" : "Tarique Rahman"}
        subtitle={
          isBn
            ? "দেশনায়ক তারেক রহমান — সংক্ষিপ্ত পরিচিতি ও রাজনৈতিক জীবন"
            : "A short profile and political journey of Tarique Rahman"
        }
      />

      {/* ---------------------------------------------------------------- */}
      {/* Portrait and introduction                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-brand-900">
        <div className="h-1 w-full bg-gold-rule" />

        <Container>
          <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
            <div className="lg:col-span-5">
              <figure className="mx-auto w-full max-w-[300px]">
                <div className="relative aspect-[6/7] overflow-hidden rounded-panel bg-white ring-1 ring-white/10">
                  <Image
                    src={portrait}
                    alt={
                      isBn
                        ? "তারেক রহমানের প্রতিকৃতি"
                        : "Portrait of Tarique Rahman"
                    }
                    fill
                    priority
                    sizes="(max-width: 1024px) 300px, 300px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-center text-[12.5px] leading-relaxed text-brand-200">
                  {isBn
                    ? "তারেক রহমান · প্রেসিডেন্ট, জিয়াউর রহমান ফাউন্ডেশন"
                    : "Tarique Rahman · President, Ziaur Rahman Foundation"}
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                align="left"
                tone="dark"
                eyebrow={isBn ? "দেশনায়ক" : "National leader"}
                title={isBn ? "তারেক রহমান" : "Tarique Rahman"}
              />

              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-300">
                {isBn ? "জন্ম ২০ নভেম্বর ১৯৬৫" : "Born 20 November 1965"}
              </p>

              <p className="mt-6 max-w-2xl text-[14.5px] leading-[1.85] text-brand-100">
                {isBn
                  ? "তারেক রহমান শহীদ রাষ্ট্রপতি জিয়াউর রহমান ও দেশনেত্রী বেগম খালেদা জিয়ার জ্যেষ্ঠ পুত্র। রাজনীতিবিদ এবং জিয়াউর রহমান ফাউন্ডেশনের ভিশনারি প্রেসিডেন্ট হিসেবে তিনি তৃণমূল পর্যায়ে দলকে সংগঠিত করা, গণতান্ত্রিক রাজনীতিকে শক্তিশালী করা এবং বাংলাদেশের মানুষের সেবায় নিজের জনজীবন উৎসর্গ করেছেন।"
                  : "Tarique Rahman is the eldest son of Shaheed President Ziaur Rahman and Deshnetri Begum Khaleda Zia. A politician and the visionary president of the Ziaur Rahman Foundation, he has devoted his public life to organising the party at the grassroots, strengthening democratic politics and serving the people of Bangladesh."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Profile                                                           */}
      {/* ---------------------------------------------------------------- */}
      <PageBody>
        <SectionHeading
          align="center"
          eyebrow={isBn ? "পরিচিতি" : "Profile"}
          title={
            isBn
              ? "তারেক রহমানের সংক্ষিপ্ত পরিচিতি"
              : "A short profile of Tarique Rahman"
          }
          subtitle={
            isBn
              ? "দেশনায়ক তারেক রহমান — তাঁর পরিবার, শিক্ষা ও জনজীবন।"
              : "National leader Tarique Rahman — his family, education and public life."
          }
          className="mx-auto max-w-3xl"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {introParagraphs.map((section, index) => (
            <React.Fragment key={section.title}>
              {index > 0 && (
                <hr className="my-12 border-t border-gold-500/30" />
              )}

              <section>
                <SectionHeading
                  align="left"
                  eyebrow={section.eyebrow}
                  title={section.title}
                />
                <p className="mt-6 text-[14.5px] leading-[1.85] text-slate-600">
                  {section.body}
                </p>
              </section>
            </React.Fragment>
          ))}
        </div>
      </PageBody>

      {/* ---------------------------------------------------------------- */}
      {/* Political milestones                                              */}
      {/* ---------------------------------------------------------------- */}
      <PageBody tone="slate" className="border-y border-slate-200">
        <SectionHeading
          align="left"
          eyebrow={isBn ? "রাজনৈতিক জীবন" : "Political life"}
          title={
            isBn
              ? "রাজনৈতিক জীবন ও মাইলফলক"
              : "Political life and milestones"
          }
          subtitle={
            isBn
              ? "দলীয় নেতৃত্ব ও জনসেবার দীর্ঘ পথচলার বারোটি গুরুত্বপূর্ণ অধ্যায় — প্রতিটি মাইলফলক সম্পূর্ণ পড়া যাবে।"
              : "Twelve chapters from a long career in party leadership and public service — each milestone can be read in full."
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {biography.map((item, index) => {
            const title = isBn ? item.bangla_title : item.english_title;
            const content = isBn
              ? item.bangla_content
              : item.english_content;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={item.id}
                className="surface-card surface-card-hover flex flex-col p-5 sm:p-6"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-600">
                  {isBn
                    ? `মাইলফলক ${toBanglaDigits(number)}`
                    : `Milestone ${number}`}
                </span>

                <h3 className="mt-3 text-[16px] font-bold leading-snug text-slate-900">
                  {title}
                </h3>

                <p className="clamp-3 mt-3 text-[13.5px] leading-relaxed text-slate-600">
                  {truncateText(stripHtml(content), 220)}
                </p>

                <button
                  type="button"
                  onClick={() => handleOpen(title, content, item.image)}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-left text-[13px] font-bold text-brand-700 transition-colors hover:text-brand-800"
                >
                  {isBn ? "বিস্তারিত পড়ুন" : "Read more"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </PageBody>

      {modalContent && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          title={modalContent.title}
        >
          <div className="mx-auto mb-5 w-full max-w-[180px] overflow-hidden rounded-card bg-slate-100 ring-1 ring-slate-200">
            <Image
              src={modalContent.image}
              alt={modalContent.title}
              width={300}
              height={350}
              sizes="180px"
              className="h-auto w-full"
            />
          </div>
          <p className="text-[14.5px] leading-[1.85] text-slate-600">
            {modalContent.content}
          </p>
        </Modal>
      )}
    </>
  );
};

export default TariqueRahmanBio;
