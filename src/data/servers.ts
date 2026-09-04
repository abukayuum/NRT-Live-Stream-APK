import { ServerNode, FaqItem } from '../types';

export const SERVER_NODES: ServerNode[] = [
  {
    id: 'srv-us',
    name: 'US-East UltraCDN Edge',
    location: 'New York, USA',
    regionCode: 'US',
    ping: 14,
    load: 42,
    bandwidth: '40 Gbps Direct Fiber',
    status: 'online',
    activeStreams: 28450
  },
  {
    id: 'srv-eu',
    name: 'Europe Central Backbone',
    location: 'Frankfurt, Germany',
    regionCode: 'EU',
    ping: 21,
    load: 48,
    bandwidth: '50 Gbps Redundant',
    status: 'online',
    activeStreams: 34120
  },
  {
    id: 'srv-sg',
    name: 'Asia Pacific Primary Cluster',
    location: 'Singapore (Equinix)',
    regionCode: 'APAC',
    ping: 18,
    load: 55,
    bandwidth: '40 Gbps Low-Latency',
    status: 'online',
    activeStreams: 41800
  },
  {
    id: 'srv-sa',
    name: 'South Asia Sports Hub',
    location: 'Mumbai & Dhaka Gateway',
    regionCode: 'SA',
    ping: 16,
    load: 64,
    bandwidth: '30 Gbps Dedicated Sports',
    status: 'online',
    activeStreams: 49500
  },
  {
    id: 'srv-me',
    name: 'Middle East beIN Gateway',
    location: 'Dubai, UAE',
    regionCode: 'ME',
    ping: 24,
    load: 39,
    bandwidth: '25 Gbps High-Throughput',
    status: 'online',
    activeStreams: 19800
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is NRT STREAM and what devices are supported?',
    questionBn: 'NRT STREAM কি এবং কোন কোন ডিভাইসে এটি চলবে?',
    answer: 'NRT STREAM is a high-speed live TV and worldwide sports streaming server network. The Android application works flawlessly on Android TV (Sony, TCL, Xiaomi, Hisense), Google TV, Amazon Fire TV Stick, Mi Box, Formuler, and all Android smartphones/tablets from Android 7.0 up to Android 15+.',
    answerBn: 'NRT STREAM হচ্ছে একটি আল্ট্রা-ফাস্ট লাইভ টিভি ও স্পোর্টস স্ট্রিমিং সার্ভার প্ল্যাটফর্ম। এটি Android TV, Google TV, Fire TV Stick, Mi Box, এবং অ্যান্ড্রয়েড ৭.০ থেকে শুরু করে লেটেস্ট অ্যান্ড্রয়েড ১৫+ মোবাইল এবং ট্যাবলেটে মসৃণভাবে চলে।',
    category: 'general'
  },
  {
    question: 'How do I install NRT STREAM on Android TV or Firestick?',
    questionBn: 'Android TV অথবা Firestick-এ NRT STREAM কীভাবে ইনস্টল করব?',
    answer: 'Simply install the "Downloader" app from your TV Play Store or Amazon AppStore, open Downloader, type the Downloader Code 984210 (or visit our official GitHub releases), and click Go. The APK will automatically download and prompt you to install. No USB drive required!',
    answerBn: 'আপনার টিভি বা ফায়ারস্টিকে "Downloader" অ্যাপটি অপেন করুন, কোড ৯৮৪২১০ (984210) লিখুন অথবা গিটহাব রিলিজ থেকে সরাসরি ডাউনলোড করুন। অ্যাপটি সরাসরি ডাউনলোড হয়ে ইনস্টল হয়ে যাবে।',
    category: 'installation'
  },
  {
    question: 'Are all live sports and international channels included?',
    questionBn: 'এখানে কি সব ধরনের লাইভ খেলাধুলা এবং আন্তর্জাতিক চ্যানেল পাওয়া যাবে?',
    answer: 'Yes! NRT STREAM integrates multi-source TV servers streaming live sports (Premier League, UEFA Champions League, La Liga, IPL, ICC Cricket, NBA, F1, UFC, WWE) and over 5,000 global live TV channels across news, entertainment, and movies with zero buffering.',
    answerBn: 'হ্যাঁ! NRT STREAM-এ মাল্টিপল ডেডিকেটেড সার্ভার ইন্টিগ্রেট করা রয়েছে। বিশ্বকাপ ক্রিকেট, আইপিএল, প্রিমিয়ার লীগ, চ্যাম্পিয়ন্স লীগ, রেসলিং সহ বিশ্বের ৫০০০+ লাইভ চ্যানেল নো-বাফারিং স্ট্রিমে দেখতে পাবেন।',
    category: 'servers'
  },
  {
    question: 'Why is there no buffering during major sports matches?',
    questionBn: 'বড় খেলার সময় কোনো বাফারিং হয় না কেন?',
    answer: 'Our infrastructure uses intelligent multi-server auto-routing with edge caching in 5 global continents. If a particular upstream server encounters heavy traffic, NRT STREAM seamlessly shifts your stream in milliseconds to an idle redundant edge server without interrupting your match.',
    answerBn: 'আমাদের রয়েছে গ্লোবাল এজ সিডিএন এবং অটো-ফেলওভার প্রযুক্তি। কোনো একটি সার্ভারে চাপ বাড়লে মুহূর্তের মধ্যে অটোমেটিক ব্যাকআপ সার্ভারে সুইচ করে, যার ফলে লাইভ খেলার মাঝেও কোনো বাফারিং হয় না।',
    category: 'servers'
  },
  {
    question: 'Is the APK safe to download from GitHub Releases?',
    questionBn: 'GitHub Releases থেকে এই APK ডাউনলোড করা কি নিরাপদ?',
    answer: '100% safe, verified, and secure. The APK package is clean, does not require root access, contains zero intrusive ad-trackers, and is distributed directly via the official GitHub repository (abukayuum/NRT-Live-Stream-APK) with SHA-256 integrity checksums.',
    answerBn: 'শতভাগ নিরাপদ ও ভেরিফাইড। এতে কোনো রুট অ্যাক্সেস দরকার নেই, ম্যালওয়্যার নেই। আমাদের অফিসিয়াল গিটহাব রিপোজিটরি (abukayuum/NRT-Live-Stream-APK) থেকে সরাসরি নিরাপদ রিলিজ নামিয়ে নিতে পারেন।',
    category: 'general'
  },
  {
    question: 'Is NRT STREAM ready for Vercel deployment?',
    questionBn: 'এই পোর্টালটি কি Vercel-এ হোস্ট করার জন্য প্রস্তুত?',
    answer: 'Yes, this landing page is pre-configured and optimized for 1-click Vercel deployment with lightning-fast edge static delivery, zero-lag asset routing, and responsive viewing across all devices.',
    answerBn: 'হ্যাঁ, এই পুরো ল্যান্ডিং পেজটি Vercel-এ ১-ক্লিকে ডিপ্লয় করার জন্য প্রস্তুত এবং আল্ট্রা-ফাস্ট এজ ডেলিভারির সাথে নির্বিঘ্নে কাজ করে।',
    category: 'troubleshooting'
  }
];
