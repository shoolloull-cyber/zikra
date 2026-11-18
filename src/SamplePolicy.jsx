import React from 'react';
import {useLanguage} from './Language';
export default function SamplePolicy({expanded=false}){
 const {lang}=useLanguage();

 if(expanded){
   return <div className="full-policy">
     <h3>{lang==='en'?'Return & Exchange Policy':'سياسة الإرجاع والاستبدال'}</h3>
     <p className="policy-intro">{lang==='en'?'At ZIKRA, fragrance is more than a product — it is an experience. Because choosing a scent is deeply personal, we have created our return policy around two things: giving you room to discover your fragrance, while preserving the quality and integrity of every bottle we create.':'في ذكري، العطر مش مجرد منتج — ده تجربة. ولأن اختيار العطر حاجة شخصية، عملنا سياسة الإرجاع بتاعتنا حوالين حاجتين: نديك مساحة تكتشف عطرك، ونحافظ على جودة كل زجاجة بنصنعها.'}</p>

     <details className="policy-section">
       <summary>01 — {lang==='en'?'Discover It First':'اكتشفه الأول'}</summary>
       <p>{lang==='en'?'Every 50ml fragrance comes with a complimentary 3ml tester of the same scent. We encourage you to experience the tester on your skin and give the fragrance time to develop before opening your full-size bottle.':'كل عطر 50 مل بييجي معاه تيستر مجاني 3 مل من نفس العطر. بنشجعك تجرب التيستر على جلدك وتدي العطر وقت يتطور قبل ما تفتح الزجاجة الكاملة.'}</p>
       <p>{lang==='en'?'Fragrance can unfold differently from the first spray to the dry-down, and we believe you should have the chance to discover it properly.':'العطر ممكن يتغير من أول بخة لحد الـ dry-down، وإحنا بنؤمن إنك لازم يكون عندك الفرصة تكتشفه صح.'}</p>
       <p>{lang==='en'?'Once the 50ml bottle has been opened or used, it cannot be returned or exchanged. For this reason, we recommend keeping the full-size bottle sealed until you are certain it is the fragrance for you.':'لما الزجاجة الـ 50 مل تتفتح أو تتستخدم، مش بنقدر نرجعها أو نبدلها. عشان كده بننصحك تخلي الزجاجة الكبيرة مقفولة لحد ما تتأكد إن ده العطر المناسب ليك.'}</p>
     </details>

     <details className="policy-section">
       <summary>02 — {lang==='en'?'Returns & Exchanges':'الإرجاع والاستبدال'}</summary>
       <p>{lang==='en'?'If you decide that your unopened fragrance is not the right choice, you may request a return or exchange within 14 days of receiving your order.':'لو قررت إن العطر اللي مفتحتوش مش الاختيار الصح، تقدر تطلب إرجاع أو استبدال خلال 14 يوم من استلام طلبك.'}</p>
       <p><strong>{lang==='en'?'To be eligible:':'عشان تكون مؤهل:'}</strong></p>
       <ul>
         <li>{lang==='en'?'The 50ml bottle must remain completely unopened and unused':'الزجاجة الـ 50 مل لازم تفضل مقفولة تمامًا ومتستخدمتش'}</li>
         <li>{lang==='en'?'The fragrance must be in its original packaging':'العطر لازم يكون في تغليفه الأصلي'}</li>
         <li>{lang==='en'?'The box, labels, seals, and included accessories must remain intact':'العلبة والملصقات والأختام والإكسسوارات لازم تفضل سليمة'}</li>
         <li>{lang==='en'?'The product must be returned in the same condition in which it was delivered':'المنتج لازم يترجع بنفس الحالة اللي اتسلم بيها'}</li>
       </ul>
       <p>{lang==='en'?'Every return is reviewed before approval. Products that do not meet these conditions may not be accepted.':'كل إرجاع بيتراجع قبل الموافقة. المنتجات اللي مبتستوفيش الشروط دي ممكن متتقبلش.'}</p>
     </details>

     <details className="policy-section">
       <summary>03 — {lang==='en'?'What Cannot Be Returned':'اللي مش بيترجع'}</summary>
       <p>{lang==='en'?'For hygienic and integrity reasons, we are unable to accept returns or exchanges for:':'لأسباب صحية وسلامة المنتج، مش بنقدر نقبل إرجاع أو استبدال:'}</p>
       <ul>
         <li>{lang==='en'?'Opened or used 50ml fragrances':'عطور 50 مل مفتوحة أو مستخدمة'}</li>
         <li>{lang==='en'?'3ml testers and samples':'تيسترات وعينات 3 مل'}</li>
         <li>{lang==='en'?'Products damaged after delivery':'منتجات اتلفت بعد التسليم'}</li>
         <li>{lang==='en'?'Products that have been altered or tampered with':'منتجات اتعدلت أو اتلاعب بيها'}</li>
         <li>{lang==='en'?'Items clearly identified as non-returnable at the time of purchase':'منتجات محددة كغير قابلة للإرجاع وقت الشراء'}</li>
       </ul>
       <p>{lang==='en'?'Please note that fragrance preference is subjective. If the scent does not feel right after opening the bottle, we cannot accept it as a return. This is exactly why we provide the 3ml tester.':'خد بالك إن تفضيل العطر حاجة شخصية. لو العطر مش مناسب بعد فتح الزجاجة، مش هنقدر نقبله كإرجاع. ده بالظبط السبب إننا بنديك تيستر 3 مل.'}</p>
     </details>

     <details className="policy-section">
       <summary>04 — {lang==='en'?'If Your Order Arrives Differently':'لو الطلب وصل مختلف'}</summary>
       <p>{lang==='en'?'We want every ZIKRA order to reach you exactly as intended. If your order arrives damaged, defective, incomplete, or incorrect, please contact ZIKRA Customer Support within 24 hours of delivery.':'إحنا عايزين كل طلب ذكري يوصلك زي ما المفروض بالظبط. لو طلبك وصل تالف أو فيه عيب أو ناقص أو غلط، تواصل مع دعم ذكري خلال 24 ساعة من التسليم.'}</p>
       <p><strong>{lang==='en'?'To help us assess the issue, please provide:':'عشان نقدر نقيّم المشكلة، ابعتلنا:'}</strong></p>
       <ul>
         <li>{lang==='en'?'Your order number':'رقم طلبك'}</li>
         <li>{lang==='en'?'Clear photographs of the product':'صور واضحة للمنتج'}</li>
         <li>{lang==='en'?'Clear photographs of the packaging':'صور واضحة للتغليف'}</li>
         <li>{lang==='en'?'A short description of what went wrong':'وصف قصير للمشكلة'}</li>
       </ul>
       <p>{lang==='en'?'Depending on the case, we may ask for additional photographs, videos, or for the product to be returned for inspection. Once the claim has been reviewed and verified, we may offer a replacement (if available) or a full refund.':'حسب الحالة، ممكن نطلب صور أو فيديوهات إضافية، أو إن المنتج يترجع للفحص. بعد مراجعة والتحقق من الشكوى، ممكن نقدملك بديل (لو متوفر) أو استرداد كامل.'}</p>
     </details>

     <details className="policy-section">
       <summary>05 — {lang==='en'?'Return Shipping':'شحن الإرجاع'}</summary>
       <p><strong>{lang==='en'?'If you simply changed your mind:':'لو غيرت رأيك:'}</strong></p>
       <p>{lang==='en'?'The customer is responsible for the return shipping cost if the return is due to a change of mind, personal fragrance preference, the scent not being suitable, or product no longer needed.':'العميل مسؤول عن تكلفة شحن الإرجاع لو الإرجاع بسبب تغيير الرأي أو تفضيل شخصي للعطر أو إن العطر مش مناسب أو المنتج مبقاش محتاجه.'}</p>
       <p><strong>{lang==='en'?'If something went wrong with your order:':'لو فيه مشكلة في طلبك:'}</strong></p>
       <p>{lang==='en'?'ZIKRA will cover the return shipping when the issue is confirmed to be caused by: an incorrect item being sent, missing items or accessories, verified product defects, or damage during shipping.':'ذكري هتغطي شحن الإرجاع لما المشكلة تتأكد إنها بسبب: منتج غلط اتبعت، أصناف أو إكسسوارات ناقصة، عيوب في المنتج متأكد منها، أو تلف حصل أثناء الشحن.'}</p>
     </details>

     <details className="policy-section">
       <summary>06 — {lang==='en'?'Refunds':'الاسترداد'}</summary>
       <p>{lang==='en'?'Once a return has been received, inspected, and approved, the refund will be issued through the online payment method used for the original purchase.':'بعد ما الإرجاع يتستلم ويتفحص ويتوافق عليه، الاسترداد هيتعمل من خلال وسيلة الدفع الأونلاين اللي اتستخدمت في الشراء الأصلي.'}</p>
       <p>{lang==='en'?'For Cash on Delivery orders, the returned product must first reach ZIKRA and pass inspection. The refund will be processed only after the return has been approved through e-wallet or instapay transaction.':'لطلبات الدفع عند الاستلام، المنتج المرجع لازم يوصل ذكري الأول ويعدي الفحص. الاسترداد هيتعمل بس بعد ما الإرجاع يتوافق عليه من خلال المحفظة الإلكترونية.'}</p>
       <p>{lang==='en'?'Refunds are processed within 7–14 business days after the returned product has been received, inspected, and approved. Your bank or payment provider may require an additional 3–5 business days.':'الاسترداد بيتعمل خلال 7-14 يوم عمل بعد ما المنتج المرجع يتستلم ويتفحص ويتوافق عليه. البنك أو مزود الدفع ممكن يحتاج 3-5 أيام عمل إضافية.'}</p>
     </details>

     <details className="policy-section">
       <summary>07 — {lang==='en'?'Shipping Fees':'رسوم الشحن'}</summary>
       <p>{lang==='en'?'Original delivery fees are refundable only when the return is confirmed to be the result of: an incorrect item, missing items, verified damage during delivery, or a verified manufacturing or quality issue.':'رسوم التوصيل الأصلية بترجع بس لما الإرجاع يتأكد إنه نتيجة: منتج غلط، أصناف ناقصة، تلف متأكد منه أثناء التوصيل، أو عيب تصنيع أو جودة متأكد منه.'}</p>
       <p>{lang==='en'?'Original shipping fees are not refundable when the return is due to: change of mind, personal fragrance preference, the fragrance not being suitable, no longer needing the product, or an issue that cannot be verified following inspection.':'رسوم الشحن الأصلية مش بترجع لما الإرجاع يكون بسبب: تغيير الرأي، تفضيل شخصي للعطر، العطر مش مناسب، المنتج مبقاش محتاجه، أو مشكلة مقدرناش نتأكد منها بعد الفحص.'}</p>
     </details>

     <details className="policy-section">
       <summary>08 — {lang==='en'?'How to Begin a Return':'إزاي تبدأ إرجاع'}</summary>
       <ol>
         <li><strong>{lang==='en'?'Contact ZIKRA Customer Support':'تواصل مع دعم ذكري'}</strong> — {lang==='en'?'Include your order number and the reason for your request.':'اكتب رقم طلبك وسبب طلبك.'}</li>
         <li><strong>{lang==='en'?'Wait for confirmation':'استنى التأكيد'}</strong> — {lang==='en'?'Our team will review your request and confirm whether it meets the return conditions.':'فريقنا هيراجع طلبك ويأكد لو مستوفي شروط الإرجاع.'}</li>
         <li><strong>{lang==='en'?'Follow the return instructions':'اتبع تعليمات الإرجاع'}</strong> — {lang==='en'?'If approved, you will receive the instructions needed to return your order.':'لو اتوافق، هتستلم التعليمات اللي محتاجها ترجع طلبك.'}</li>
       </ol>
       <p>{lang==='en'?'Please do not send a product back without receiving confirmation and return instructions from ZIKRA.':'من فضلك متبعتش منتج من غير ما تستلم تأكيد وتعليمات الإرجاع من ذكري.'}</p>
     </details>

     <details className="policy-section">
       <summary>09 — {lang==='en'?'Order Cancellation':'إلغاء الطلب'}</summary>
       <p>{lang==='en'?'Orders may be cancelled within 24 hours of placing the order, provided they have not already been processed or shipped.':'الطلبات ممكن تتلغي خلال 24 ساعة من وقت الطلب، بشرط إنها لسه متتعالجتش أو اتشحنت.'}</p>
       <p>{lang==='en'?'Once an order has entered processing or has been handed to the shipping provider, cancellation may no longer be possible. If the order has already been shipped, our standard return policy will apply.':'لما الطلب يدخل مرحلة التجهيز أو يتسلم لشركة الشحن، الإلغاء ممكن يكون مش متاح. لو الطلب اتشحن بالفعل، سياسة الإرجاع العادية هتتطبق.'}</p>
     </details>

     <details className="policy-section">
       <summary>10 — {lang==='en'?'Cash on Delivery':'الدفع عند الاستلام'}</summary>
       <p>{lang==='en'?'To maintain a reliable delivery experience, ZIKRA may restrict Cash on Delivery for customers who repeatedly refuse or cancel orders without a valid reason.':'عشان نحافظ على تجربة توصيل موثوقة، ذكري ممكن تقيد الدفع عند الاستلام للعملاء اللي بيرفضوا أو بيلغوا طلبات بشكل متكرر من غير سبب.'}</p>
       <p>{lang==='en'?'Depending on the circumstances, this may result in COD being unavailable for future orders or prepaid payment being required for future purchases.':'حسب الظروف، ده ممكن يأدي لإن الدفع عند الاستلام يبقى مش متاح لطلبات المستقبل أو إن الدفع المقدم يكون مطلوب.'}</p>
     </details>

     <details className="policy-section">
       <summary>11 — {lang==='en'?'Protecting the Integrity of the Policy':'حماية نزاهة السياسة'}</summary>
       <p>{lang==='en'?'Our return policy exists to create a fair experience for both you and ZIKRA. We reserve the right to restrict returns or certain payment and delivery options in cases of repeated or suspected misuse, including: excessive or repeated returns, returning products in a different condition, repeated cancellations, repeated refusal of dispatched orders, or attempting to return products not purchased from ZIKRA.':'سياسة الإرجاع بتاعتنا موجودة عشان نعمل تجربة عادلة ليك ولذكري. بنحتفظ بحقنا في تقييد الإرجاع أو بعض خيارات الدفع والتوصيل في حالات الاستخدام المتكرر أو المشتبه فيه.'}</p>
     </details>

     <details className="policy-section">
       <summary>12 — {lang==='en'?'Unauthorized Returns':'إرجاعات غير مصرح بيها'}</summary>
       <p>{lang==='en'?'ZIKRA cannot guarantee a refund, replacement, or return for products that were sent without prior authorization, were not purchased directly from ZIKRA, cannot be matched to a valid ZIKRA order, or were returned without following our return instructions.':'ذكري مش بتضمن استرداد أو بديل أو إرجاع لمنتجات اتبعتت من غير إذن مسبق، أو مش متشترية من ذكري مباشرة، أو مقدرناش نطابقها بطلب ذكري صالح، أو اترجعت من غير ما تتبع تعليمات الإرجاع.'}</p>
       <p>{lang==='en'?'Please always contact our team before sending anything back.':'من فضلك دايمًا تواصل مع فريقنا قبل ما تبعت أي حاجة.'}</p>
     </details>

     <div className="policy-closing">
       <h4>{lang==='en'?'A Note From ZIKRA':'كلمة من ذكري'}</h4>
       <p>{lang==='en'?'We believe choosing a fragrance should never feel rushed. That is why every 50ml bottle comes with its own 3ml tester — a small invitation to take your time, wear the fragrance, let it settle, and decide if it belongs with you.':'إحنا بنؤمن إن اختيار العطر مفروض مايكونش مستعجل. عشان كده كل زجاجة 50 مل بتيجي بتيستر 3 مل — دعوة صغيرة تاخد وقتك، تلبس العطر، تسيبه يثبت، وتقرر لو هو ليك.'}</p>
       <p><em>{lang==='en'?'Try the scent. Let it unfold. Then open the bottle.':'جرّب العطر. سيبه يتكشف. وبعدين افتح الزجاجة.'}</em></p>
       <p><strong>{lang==='en'?'ZIKRA — Where memories linger.':'ذكري — حيث الذكريات باقية.'}</strong></p>
     </div>
   </div>;
 }

 return <details className="sample-policy">
   <summary>{lang==='en'?'Why the samples? Trial & returns policy':'ليه العينات؟ سياسة التجربة والإرجاع'}</summary>
   <p>{lang==='en'? 'Every bottle includes a matching 2 ml tester so you can try the fragrance before opening the full-size bottle. Orders of one bottle receive one extra sample of your choice; orders of two or more receive two extra samples. All samples are free.':'كل قطعة معاها تيستر مطابق 2 مل تلقائيًا عشان تجرّب العطر قبل فتح العبوة الأساسية. طلب قطعة واحدة معاه عينة إضافية تختارها، وطلب قطعتين أو أكتر معاه عينتين إضافيتين. كل العينات مجانية.'}</p>
   <p>{lang==='en'?'If the fragrance is not for you, keep the full-size bottle unopened and its packaging intact, then contact us on WhatsApp to arrange a return. Opening a complimentary sample does not mean opening the main product.':'لو العطر مش مناسب ليك، احتفظ بالعبوة الأساسية مغلقة وبتغليفها السليم، وتواصل معانا على واتساب لترتيب الإرجاع. فتح العينة المجانية مش معناه فتح المنتج الأساسي.'}</p>
 </details>;
}
