import { useState } from "react";

const useBlogs = () => {
	const [blogs] = useState<IBlogs[]>([
		{
			id: 0,
			title: "Why should you service your A/C regularly?",
			thumbnail: "/blogs/1.jpg",
			description: `<div><p>
            Any branded air conditioner is subjected to usual wear and tear and needs routine maintenance to perform properly. Whether you use your air conditioner throughout the year or only during summers, the air filters gather dust, pollen, and other airborne contaminants. Only a trained technician cleans all filters completely during AC service to make sure that pollutants are removed and only clean air is circulated throughout the room. To remove these pollutants, all major AC manufacturers suggest seasonal servicing, repairing and maintenance.
            <br/> <br/>
            HydroKleen Bangladesh offers low-priced, preventive maintenance service contracts in which they’ll clean and service your A/C unit and replace your air filter. We even offer discounts if you do servicing for an annual plan and will provide preferred scheduling to preventive maintenance customers.
            </p>
            <h1 className="blog-header">Why should you get your A/C inspected?</h1>
            <p>Inspections pay for themselves through improved energy efficiency, which saves money on utility bills, and a longer-lasting air conditioning unit. A yearly maintenance check by a licensed A/C expert can help reduce your monthly energy bill by up to 15 percent and help prevent earlier-than-normal breakdowns. <br/> 
            Replacing your air conditioner, by contrast, will cost huge amounts. A qualified technician can often find and address small problems with A/C units through a regular inspection that has been left unnoticed, could grow into larger, more expensive issues.
            </p>
            <h1 className="blog-header">An air conditioning maintenance inspection should include checking</h1>
            <ul className="blog-list">
                <li>The motor</li>
                <li>Blower</li>
                <li>Drain lines</li>
                <li>Coils</li>
                <li>Operating pressures</li>
                <li>Temperatures</li>
                <li>The return and supply lines</li>
                <li>Refrigerant levels</li>
                <li>Connections</li>
            </ul>
            <br/>
            <p>We at HydroKleen Bangladesh, check to make sure its technicians are licensed as A/C contractors and the company holds workers’ compensation to protect you in the event of an injury or if property damage occurs during the work.</p>
            <h1 className="blog-header">For More Details Kindly visit our website: https://hydrokleen.com.bd/ <br/><br/>Contact No – 01902464646</h1>
            </div>
            `,
		},
		{
			id: 1,
			title: "Best AC Cleaning Service Providers in Dhaka",
			thumbnail: "/blogs/2.jpg",
			description: `<div><p>
            Finding the right AC service specialists is not a piece of cake that takes care of your air conditioner system. Don't worry; let's shortlist the best AC service centres in Dhaka that reach out to the customers using calls and SMS. You can easily find, assess, and book AC service specialists from these leading AC service providers.</p>
            <h1 className="blog-header">Categories</h1>
            <ul className="blog-list">
                <li>HydroKleen Bangladesh</li>
                <li>Master Clean</li>
                <li>Drain lines</li>  
            </ul>
            <h1 className="blog-header">a)  HydroKleen Bangladesh
          </h1>
            <p>HydroKleen Bangladesh is known as an AC service provider specialising in all available air conditioner brands and models. Get hassle-free doorstep AC service within the same day with professional service partners. HydroKleen Bangladesh has a team of experienced, devoted service experts to serve your home luxury.<br/>
            HydroKleen Bangladesh is one of the best AC service providers in Dhaka that offers an extensive range of air conditioner services. The AC service team at HydroKleen Bangladesh helps you to overcome the air conditioner hassles at the best cost.<br/>
            For state-of-art AC service in Dhaka, choose AC Servicing experts from HydroKleen Bangladesh and limit AC breakdowns. Reach out to HydroKleen Bangladesh for low turnaround time and multiple short and long-term benefits like these-
            </p>
            <ul className="blog-list">
                <li> Internationally recognized (using Australian Technology) AC cleaning system</li>
                <li>Using HydroKleen Machine</li>
                <li>Using HydroKleen special cleaning Agent</li>
                <li>Using HydroKleen Anti-Bacterial Spray</li>
                <li>Check chill factor before clean
                </li>
                <li>Check air flow</li>
                <li>TCheck gas pressure</li>
                <li>Clean evaporator (coil)</li>
                <li>Clean and check drain (Water drop solution)</li>
                <li>Check chill factor after clean</li>
                <li>Check air flow after clean</li>
                <li>Clean condenser</li>
                <li>Clean up all mess</li>
            </ul>
            <h1 className="blog-header">b)  Master Clean
            </h1>
              <p>Master Clean wants to make your home better through outstanding AC Servicing in Dhaka. You can always count on us for:
              </p>
              <ul className="blog-list">
                  <li>High-quality services</li>
                  <li>Expert technicians</li>
                  <li>Friendly call centre representatives</li>
                  <li> Genuine parts and tools</li>
              </ul>
              <p>No matter what you need or how you want to elevate your Office & home, choose our experts.</p>
            <h1 className="blog-header">c)  AC Service BD
            </h1>
              <p>AC Service BD is an emerging AC service destination in Dhaka, having verified, young, and energetic service staff to deliver instant AC repair services. Experience the change with the lowest cost AC service and assured after-service warranty in Dhaka.</p>
              <ul className="blog-list">
                  <li>The reasonable AC service cost is worth spending</li>
                  <li>Get a top-rated AC service professional with a proven track record</li>
                  <li>They provide a post-service warranty for all AC model</li>
                  <li>Choose your preferred AC service date and time slot</li>
                  <li>They work to deliver the uttermost customer satisfaction</li>
              </ul>
            
           
            `,
		},
		{
			id: 2,
			title: "8 AC Maintenance Tips | HydroKleen Bangladesh",
			thumbnail: "/blogs/3.jpg",
			description: `<p>8 AC Maintenance Tips | HydroKleen Bangladesh<p>
            <h1 className="blog-header">Indoor AC Maintenance</h1>
            <p>Keeping track of the Indoor parts of your AC unit is simply as vital because of the outside.</p>
            <ul className="blog-list">
            <li>Clear the drain. Use special AC pan pills to keep your atmospheric phenomenon drain from hindering or use a store vacation to get rid of a clog if it’s already shaped.</li>
            <li>Check your filter. A top-quality filter is important for keeping dirt and dirt out of your blower. Typically, we tend to suggest that everyone check their filter after every 3 months. This enables your AC to figure expeditiously and avoids performance problems.</li>
            <li>Check for leaks. Sadly, not each AC maintenance service will perform reception. If you observe a leak in any of the refrigerant lines in your AC unit, you wish to use the assistance of an expert.</li>
            </ul>
            <h1 className="blog-header">Outdoor AC Maintenance</h1>
            <p>Your condenser unit might seem discouraging, however keeping this part clean and running with efficiency is pretty undemanding.</p>
            <ul className="blog-list">
            <li>Power off the unit. The safest and most accountable term to perform AC maintenance on your unit is to power it off before you start. By setting apart the facility offer, you’ll guarantee a deep clean and limit the danger of injury.</li>
            <li>Clear scrap. The less that would probably enter and clog the unit the higher. Removing the cap and taking a store holiday to the within of the condenser may be a good way to clear all the leaves, tree branches, gravel, and matter which will be built up in your unit.</li>
            <li>Clean the fins. The fins square measure the tiny metal prongs that defend the condenser coil. Householder expertise clogged fins on their air conditioners. You’ll use a hose (on a coffee setting) to get rid of any unwanted build up on the skin of your fins. If doable, it’s best to get rid of the lid of the condenser and spray from the inside out.</li>
            <li>Fix the fins. These delicate metal items square measure liable to being bent. To confirm they’re operating properly, you’ll use a table knife and (carefully) straighten the fins on the condenser unit. You may additionally purchase a fin comb, that may be a tiny tool which will drag and straighten several fins at only once.</li>
            <li>Check insulation on fluid pipes. The road that transfers the refrigerant through your air-con system ought to be coated by a layer of thick insulation. Generally, sun exposure will destroy these protecting linings. Check on this insulation often, because it keeps the refrigerant cold and protects something from happening to the pipe.</li>
            </ul>`,
		},
		{
			id: 3,
			title: "হাইড্রোক্লিন বাংলাদেশ এসি সার্ভিসিং-এ আপনি যে সেবা পাবেন",
			thumbnail: "/blogs/4.jpg",
			description: `<p>আমরা প্রতিটি সার্ভিস অত্যন্ত যন্ত-সহকারে, আধুনিক পদ্ধতিতে হাইড্রোক্লিন এসি সার্ভিস প্রদান করে থাকি। প্রতিটি এসি হাইড্রোক্লিন এর ক্ষেত্রে ১৯ টি ধাপে বা চেকলিস্ট অনুসরন করে সেবা প্রদান করা হয়। যা আপনার এসির এয়ার ফ্লো, কুলিং পাওয়ার এবং এসির লাইফস্প্যান বৃদ্ধি করবে। এই সার্ভিসের এর সাথে আপনি এসি চেক-আপ ফ্রী পেয়ে যাচ্ছেন।
            <br>এসি পরীক্ষা- নিরীক্ষার জন্য অত্যাধুনিক যন্ত্রপাতি ব্যবহার করে থাকি। যা এসির অবস্থা নির্ভুল ভাবে প্রদান করে। এতে কম সময়ে কার্যকরী সেবা দেয়া সম্ভব হয়। আমাদের এসি সার্ভিসিং এক্সপার্ট দ্বারা এসির এয়ার ফ্লো, টেম্পারেচার, গ্যাসের প্রেসার, ইলেক্ট্রিক লাইন এইগুলো স্বাভাবিক আছে কিনা তা চেক করা হয়।</p>
            <h1 className="blog-header">আমাদের হাইড্রোক্লিন সার্ভিসিং এর চেকলিস্টসমূহ</h1>
            <ul className="blog-list">
            <li>সার্ভিসিং-এর পূর্বে এসিটি ভালো মতো চেক করা</li>
            <li>সার্ভিসিং-এর পূর্বে এসির টেম্পারেচার চেক করা</li>
            <li>সার্ভিসিং-এর পূর্বে এসির এয়ার ফ্লো চেক করা</li>
            <li>কম্প্রেসারের গ্যাসের প্রেসার চেক করা</li>
            <li>এসির ফিল্টার পরিস্কার করা</li>
            <li>এসির কভার পরিস্কার করা</li>
            <li>এসির ভেতরের স্ক্রল ফ্যান ও তার চারপাশ হাইড্রোক্লিন করা</li>
            <li>ইভ্যাপরেটর (কয়েল) হাইড্রোক্লিন করা</li>
            <li>ড্রেন লাইন চেককরা ও পরিস্কার করা। (পানি পড়া সমস্যার সমাধান)</li>
            <li>এসিটি  রিএসেম্বল করা</li>
            <li>সার্ভিসিং-এর পর এসির টেম্পারেচার আগের থেকে কমেছে কিনা তা চেক করা</li>
            <li>সার্ভিসিং-এর পর এসির এয়ার ফ্লো বেড়েছে কিনা চেক করা</li>
            <li>স্পেসাল এন্টিব্যাক্টেরিয়াল স্প্রে প্রয়োগ। (অস্ট্রেলিয়ার জাতীয় এজমা কাউন্সিল  সার্টিফাইড)</li>
            <li>রিমোট চেক করা ও পরিস্কার করা</li>
            <li>এসির কন্ডেনসার ইউনিটটি হাইড্রোক্লিন করা</li>
            <li>বের হওয়া সব ময়লা পরিস্কার করা</li>
            <li>সার্ভিস স্টিকার প্রয়োগ করা</li>
            <li>এসির আনুসাঙ্গিক বা অন্য কোন সমস্যা থাকলে নোট ডাউন করা</li>
            <li>চেকলিস্ট প্রদান</li>
            </ul>
            <p>**উপরোক্ত চেকলিস্টটি সম্পন্ন করতে কোনো হিডেন চার্জ এর প্রয়োজন নেই</p>
            <p>**ঝুলন্ত কাজের ক্ষেত্রে ছয় তলা বিল্ডিং পর্যন্ত ফ্রি-চার্জ উপভোগ করতে পারছেন</p>
            <h1 className="blog-header">হাইড্রোক্লিন সার্ভিস প্রক্রিয়া</h1>
            <p>প্রথমেই আমাদের টেকনিশিয়ান আপনার কাছে জেনে নিবে এসি স্বাভাবিক ভাবে ঠান্ডা হচ্ছে কিনা?
            <br>এসি অন করে ভালভাবে চেক আপ করা হবে। যদি সব কিছু স্বাভাবিক থাকে, তাহলে এসি বন্ধ করে ইনডোরের বৈদ্যুতিক সংযোগ, কভার, ফিল্টার খুলবে। এরপর আমাদের বিশেষ হাইড্রোক্লিন ক্লিনিং এজেণ্ট দ্বারা হাইড্রোক্লিন এন্টি-ব্যাকটেরিয়াল স্প্রে দিয়ে এসিতে স্প্রে করা হবে। কিছুক্ষণ অপেক্ষা করে, অত্যাধুনিক হাইড্রোক্লিন মেশিন দিয়ে এসি ক্লিনিং শুরু হবে। আমাদের টেকনিশিয়ান শতভাগ এসি পরিস্কার হয়েছে কিনা তা নিশ্চিত করবে।
            <br>একই ভাবে এসির আউট ডোর ক্লিন করা হবে।
            <br>এসির যেকোন ধরনের সেবা নিতে এখনই কল করুন – 01902464646
            </p>`,
		},
		{
			id: 4,
			title: "এসি ব্যবহারে বিদ্যুৎ বিল কমানোর কিছু সহজ উপায়",
			thumbnail: "/blogs/5.jpg",
			description: `<p>গ্রীষ্মকালে শীতলতার পরশ পেতে এসির বিকল্প নেই। আর এসির যথাযথ ব্যবহার করতে না পারার কারণে ঘরের বিদ্যুৎ খরচের অনেকটাই চলে যায় সচেতনতার অভাবে। তবে আপনি চাইলেই কিন্তু এসির এই অতিরিক্ত বিদ্যুৎ খরচ অনেকটা কমিয়ে আনতে পারেন।
            <br>কীভাবে? চলুন জেনে নিই।
            </p>
            <h1 className="blog-header">এসি পরিষ্কার রাখুন</h1>
            <p>নিয়মিত এসি পরিষ্কার রাখুন। এসির ফিল্টারটি নিজেই মাসে অন্তত একবার পরিষ্কার করুন। ময়লার কারণে  এসি স্বাভাবিকভাবে চলতে পারে না। তাই বছরে কমপক্ষে একবার হাইড্রোক্লিন থেকে Cleaning সার্ভিস নিন।</p>
            <h1 className="blog-header">তাপমাত্রা নিয়ন্ত্রণে রাখুন</h1>
            <p>এসির তাপমাত্রা অবশ্যই ২৪ থেকে ২৬ ডিগ্রির মধ্যে রাখতে হবে। এসি যত কম তাপমাত্রায় চালানো হবে, তত বেশি চড়চড় করে বাড়বে বিদ্যুৎ বিল। এ কারনে লোড শেডিং হতে পারে। ঘুমাতে যাবার সময়ে তাপমাত্রা  সঠিক রাখুন।</p>
            <h1 className="blog-header">দরকার না হলে বন্ধ করে দিন</h1>
            <p>সব সময় এসি চালিয়ে রাখবেন না। গরম যখন অসহনীয় মনে হবে তখনই এসি ব্যবহার করুন। রুম থেকে বের হলে এসি বন্ধ করে দিন। বাইরে যাওয়ার সময় রুমের এসি বন্ধ হয়েছে কিনা তা ভালো করে দেখে নিন।</p>
            <h1 className="blog-header">ফ্যান ব্যবহার করুন</h1>
            <p>রান্না ঘরে এক্সহস্ট ফ্যান ব্যবহার করুন যাতে গরম সারা রুমে ছড়িয়ে না পড়ে। এসির তাপমাত্রা অতিরিক্ত না কমিয়ে ২৪ থেকে ২৬ ডিগ্রী রেখে, ফ্যান ছেড়ে দিন। এতে রুম দ্রুত ঠান্ডা হবে।</p>
            <h1 className="blog-header">জানালা-দরজা ভালোভাবে বন্ধ কিনা দেখুন</h1>
            <p>অনেক বাড়িতেই জানালা-দরজা এবং দেয়ালের মাঝে ছিদ্র বা  ফাঁকফোকর থাকে। এসবের কারণে রুম সহজে ঠান্ডা হতে পারে না। এসব ফাঁকফোকর বন্ধ করে ফেলুন। এতে এসি দ্রুত রুম ঠাণ্ডা করতে পারে।</p>
            <h1 className="blog-header">টাইমার ব্যবহার করুন</h1>
            <p>রুম অতিরিক্ত ঠাণ্ডা হয়ে গেলে তা শরীরে জন্য ক্ষতিকর। তাই রাতে স্লিপ মোডে অথবা এসিতে টাইমার ব্যবহার করুন যাতে রুম ঠান্ডা হয়ে গেলে আপনা থেকেই বন্ধ হয়ে যায়। প্রয়োজন অনুযায়ী আবার চালু হয়ে রুম ঠাণ্ডা করে। এতে বিদ্যুৎ সাশ্রয় হয়।</p>
            <h1 className="blog-header">দিনের বেলায় পর্দা ব্যবহার করুন</h1>
            <p>দিনের বেলা ঘরে তাপ ঢোকার উৎসগুলিকে বন্ধ করুন। জানালা ও দরজার সামনে ভারী সাদা পর্দা টানা থাকলে রোদে রুম গরম করতে পারে না। পর্দা ব্যবহার করলে রুমের ভেতরের তাপমাত্রা শতকরা ৪০ থেকে ৫০ ভাগ কমানো সম্ভব। সাদা পর্দা ব্যবহার করলে সূর্যের ৮০% তাপ ঘরে প্রবেশ করতে পারে না।  ফলে অনেক সময়ে এসি চালানোরই দরকার হয় না।</p>
            <h1 className="blog-header">আউট ডোর ইউনিট সঠিক স্থানে রাখুন</h1>
            <p>এসির আউট ডোর ইউনিট খোলা জায়গায় এবং ছায়াতে রাখলে একই সাথে বিদ্যুৎ বিল এবং এসির স্থায়িত বৃদ্ধি পায়। অনেকেই এ বিষয়ে তেমন সচেতন থাকেন না এবং বাইরে রোদের মধ্যে এই অংশটি রেখে দেন।</p>
            <h1 className="blog-header">ঘরের দরজা বন্ধ রাখুন</h1>
            <p>এসি চালানোর সময় রুমের দরজা – জানালা বন্ধ রাখুন। এতে রুম দ্রুত ঠাণ্ডা হয় এবং বিদ্যুৎ খরচ কম হয়ে থাকে ।</p>
            <p>এছাড়া গরমে এসিতে সাধারণত কিছু সমস্যা হয়ে থাকে যেমন: ঠাণ্ডা কমে যাওয়া, ভিতরে শব্দ হওয়া, এসি থেকে পানি পড়া ইত্যাদি।
            <br>এসির যেকোন ধরনের সমস্যায় আমাদেরকে কল করুন – 01902464646
            </p>`,
		},
		{
			id: 5,
			title: "এসি দুর্ঘটনা রোধে করণীয়",
			thumbnail: "/blogs/6.jpg",
			description: `<p>আমাদের দেশে এসির রক্ষণাবেক্ষণে খুব অবহেলা করা হয়। কিন্তু মনে রাখা দরকার, এই যন্ত্রটি কিন্তু বাসার অন্যসব যন্ত্রের মতো নয়। এসির জন্য রক্ষণাবেক্ষণ খুবই জরুরি। প্রতিমাসে ফিল্টার পরিষ্কার করা । বছরে অন্তত একবার হাইড্রোক্লিন করা এবং সম্পূর্ন সিস্টেম সঠিক ভাবে কাজ করছে কিনা তা হাইড্রোক্লিন প্রফেশনালদের দ্বারা চেক করানো উচিত। বিশেষ করে শীতের সময় দীর্ঘ কয়েকমাস বন্ধ থাকার পর এসি চালু করার আগে অবশ্যই Clean এবং চেক করে নেয়া উচিত।</p>
            <h1 className="blog-header">এসি বিস্ফোরণের কারণ</h1>
            <ul className="blog-list">
              <li>অনেক পুরনো বা নিম্নমানের এসি ব্যবহার</li>
              <li>এসির পাওয়ার কেব্‌ল সঠিক স্পেক–এর ব্যবহার না করলে</li>
              <li>এসির ভেতরে বা বাহিরের বৈদ্যুতিক সংযোগ নড়বড়ে থাকা, যা শর্টসার্কিটের তৈরি করতে পারে</li>
              <li>সঠিক রেটিংয়ের সার্কিট ব্রেকার ব্যবহার না করলে</li>
              <li>ইলেকট্রিক হাই ভোল্টেজের কারণে এসির ওপর অতিরিক্ত প্রেসার তৈরি হয়ে</li>
              <li>রুমের আকার অনুযায়ী এসি ব্যবহার না করা</li>
              <li>এসির কনডেনসারে ময়লা জমলে কম্প্রেসারে হাই টেম্পারেচার বা হাই প্রেশার তৈরি হয়ে</li>
              <li>কম্প্রেসরের ভেতরে ময়লা আটকে জ্যাম তৈরি হওয়া </li>
              <li>এসির ভেতরের পাইপে কোথাও জং বা ময়লা কারনে ব্লকেজ হয়ে এসির ভেতরে হাই প্রেশার তৈরি হয়ে কম্প্রেসার ব্লাস্ট হতে পারে</li>
              <li>এসির পাইপ থেকে গ্যাস লিক হয়ে গ্যাস এসির ভেতরে বা রুমে জমে থাকা</li>
              <li>দীর্ঘক্ষণ একটানা এসি চালানো, যার কারনে এসির প্রেশার বেড়ে গিয়ে সেটিকে গরম করে তোলে</li>
              <li>অনেকদিন এসির সার্ভিসিং না করানো</li>
              <li>ভালো আর্থিং ব্যবস্থা না থাকলে বজ্রপাত বা বৃষ্টির সময়ে এসি চালানো কিছুটা ঝুঁকিপূর্ণ, কারণ এটিও এসির দুর্ঘটনা ঘটাতে পারে</li>
              <li>এসি দুর্ঘটনার আরেকটি বড় কারণ রক্ষণাবেক্ষণের অভাব। ফলে কারিগরি ক্রুটির কারণে এসিতে আগুন ধরে যেতে পারে বা এসির গ্যাসে আগুন লেগে সেটি ঘরে ছড়িয়ে পড়তে পারে</li>
              <li>এসির ভেতরের যন্ত্রপাতি দুর্বল হওয়ার ফলে সেখানে কারিগরি ক্রুটি দেখা যায়, যা অনেক সময় আগুনের সূত্রপাত করতে পারে</li>
              <li>বর্তমানে এসিতে যে ধরনের গ্যাস ব্যবহার করা হচ্ছে, সেই গ্যাসে সহজে আগুন ধরে। ফলে কোন কারণে সেটি লিক হয়ে জমে থাকলে, সেখানে বৈদ্যুতিক কারণে আগুনের স্ফুলিঙ্গ তৈরি করতে পারে বা ম্যাচের কাঠি জ্বালালে বিস্ফোরণের ঘটনা ঘটতে পারে</li>
            </ul>
            <h1 className="blog-header">যেভাবে দুর্ঘটনা এড়ানো যেতে পারে</h1>
            <p>বিশেষজ্ঞরা বলছেন, এসি সঠিক ইন্সটলেশেন ও রক্ষণাবেক্ষণ অত্যন্ত জরুরি, যা বাংলাদেশে ততটা গুরুত্ব দেয়া হয় না। আর এসির দুর্ঘটনা রোধে এসির সঠিক ইনস্টলেশন এবং রক্ষনাবেক্ষনের জন্য হাইড্রোক্লিন বাংলাদেশ বেশ কিছু বছর ধরে সাফল্যের সাথে অসাধারণ সার্ভিসিং দিয়ে আসছে।</p>
            <ul className="blog-list">
              <li>পেশাদারদের মাধ্যমে নিয়মিত সার্ভিসিং করানো</li>
              <li>বৈদ্যুতিক সংযোগ, সকেট, সহ এসি নিয়মিতভাবে পরীক্ষা করা</li>
              <li>সঠিক স্পেকে এবং ভালো মানের পাওয়ার কেব্‌ল ব্যবহার করা</li>
              <li>সঠিক রেটিংয়ের সার্কিট ব্রেকার ব্যবহার করা</li>
              <li>নির্ভরযোগ্য ব্র্যান্ডের এসি কেনা</li>
              <li>রুমের আকার অনুযায়ী সঠিক মাত্রার এসি নির্ধারণ</li>
              <li>মাঝে মাঝে বিরতি দিয়ে এসি ব্যবহার করা</li>
              <li>হাই ভোল্টেজ এড়াতে বাড়িতে সার্কিট ব্রেকার ব্যবহার করা</li>
              <li>বৃষ্টি ও বজ্রপাতের সময় এসি বন্ধ রাখতে পারলে ভাল</li>
            </ul>
            <p>এসির যেকোন ধরনের সমস্যায় আমাদেরকে কল করুন – 01902464646</p>`,
		},
	]);

	return {
		blogs,
		getBlogById: (id: number | string) =>
			blogs.find((blog) => blog.id === parseInt(id as string)),
		getRelatedBlogs: (id: number | string) =>
			Array.from(
				blogs.filter((blog) => blog.id !== parseInt(id as string)),
				(b) => ({
					id: b.id,
					title: b.title,
					thumbnail: b.thumbnail,
				})
			),
	};
};

export default useBlogs;
