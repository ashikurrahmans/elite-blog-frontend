import React from "react";

const HomeFaq = ({ faqTitle, faqDescription, faq }) => {
  return (
    <>
      <section className="bg-gray-100 ">
        <div className="w-9/12 mx-auto py-10 text-white flex flex-col justify-center p-4 md:p-8">

          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            {faqTitle}
          </h2>
          <p>{faqDescription}</p>
          {/* <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            {faq?.map((item, i) => {
              return (
                <div key={i}>
                  <h3 className="font-semibold text-2xl my-4">{item.title}</h3>
                  <p className="mt-1 dark:text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div> */}
          <div className="dark:bg-gray-800 dark:text-gray-100 text-black">
          
              <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 ">
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Why should I use Elite Dental Studio USA?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                    Simply because we are #1. Unlike other labs, we only commit to excellence in all areas of our business. 
From the quality of our services, to our great customer care, to our technology, you can trust us. 
Plus we make all Restorations in USA. 

                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer ">
                  How do I send my first case?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                    Go to our Menu "Send a Case" and download RX’s. Schedule a pick up by clicking on "Pick Up and Delivery Request". 
If you are outside our pick up area, under " Request Ship Label" you can order Shipping labels.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  What are your turnaround times?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    7-10 working days for most restorative cases.
14 working days for implant cases.
Please call for complicated and large cases.
We can expedite rush cases in 3-6 days (please call for extra charge and confirmation).
                    </p>
                
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  How do I send you my Custom Patient shade images?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Send to info@elitedentalstudiousa.com
                    </p>
                
                  </div>
                </details>



                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Do you prefer digital impressions or physical analog impressions?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Both 
                    </p>
                
                  </div>
                </details>    <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Do you accept rush cases?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Of course. However, additional charges may apply to any rush case. Contact Elite

Dental Studio to discuss your specific needs. 

1(844) 686-5534 Toll-Free
(678) 943-8888 Local
                    </p>
                
                  </div>
                </details>   
                 <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Do you do pick-up and delivery for local dentists?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    We do provide pick-up and delivery services for the dental offices on our regular route. 
If you are not on our regular route schedule, please contact us to schedule a pick-up 
or click Send a Case in menu. Then Request Ship Label. 
                    </p>
                
                  </div>
                </details>    
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  What shipping methods do you use?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                   For all non-local and out-of-state dental offices, we use UPS as our courier of choice. 
We are happy to offer U.S.P.S. or FedEx as a shipping option as well.

                    </p>
                
                  </div>
                </details>   
                 <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  What are your payment terms?             
                      </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Open account terms can be extended to dental offices with appropriate bank and credit references. 
Terms are net 30 days in accordance with the statement date. Past due accounts are subject to a 1.8% interest rate. 
And we now accept Visa®, MasterCard®, American Express® and Discover® Card payments.

                    </p>
                
                  </div>
                </details>    <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  DOES YOUR LABORATORY OFFER NO-PREP/MINIMAL PREP RESTORATIONS?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    EDS offers several restorations to accommodate the unique esthetic demands for conservaive dentistry. Before fabrication of 
minimal/no-prep cases, we require study models, photos, and a waxup of the case to help you shape patient expectations for the results. 
After evaluation, we will recommend treatment options that will yield the most predictable, esthetic results for the case.
Please feel free to caal us at :   1 (844) 686-5534
                    </p>
                
                  </div>
                </details>   
                 <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  
Does EDS accept digital files from intraoral scanners?

                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Absolutely! EDS accepts scans from all major scanners including 3Shape Trios, Cadent iTero, 3M True Definition, Planmeca, Sirona, and E4D. 
EDS embraces and encourages dentists to embrace the digital workflow. For any questions on how best to integrate digital technology 
into your practice please feel free to contact our team.
1(844) 686-5534
                    </p>
                
                  </div>
                </details>   
                
                 <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Are your dental lab materials approved by the FDA & ADA?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Yes! We only use the highest quality materials that meet both standards.
                    </p>
                
                  </div>
                </details>  
                  <details>
                  <summary className="py-2 outline-none cursor-pointer">
                 
How does Elite Dental Studio USA (EDS) ensure quality control?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Quick turn around time is important, but it should never be a sacrifice when it comes to quality. 
We make sure that the quality of materials are always high and measured.
                    </p>
                
                  </div>
                </details>    <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Do you send dental work internationally?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    No we do not! All of our work is handled at our Georgia USA based Dental Lab.
                    </p>
                
                  </div>
                </details>    <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Do you take cases from other states?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Yes. We take cases nationwide. We are based in Georgia, USA and use UPS with insurance.
                    </p>
                
                  </div>
                </details>    <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  Are you on social media?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Yes we are. You can visit our social networks on Facebook, Instagram, and Youtube.
                    </p>
                
                  </div>
                </details>    <details>
                  <summary className="py-2 outline-none cursor-pointer">
                  How do I send you my Custom Patient shade images?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                    Send to info@elitedentalstudiousa.com
                    </p>
                
                  </div>
                </details>






















              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomeFaq;
