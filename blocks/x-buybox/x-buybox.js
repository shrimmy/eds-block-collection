
export default async function decorate(block) {

  window.__BuyBox__ = getData();
  
  // add jquery
  const jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';
  block.appendChild(jqueryScript);

  // add buybox
  const buyboxScript = document.createElement('script');
  //buyboxScript.src = '/blocks/x-buybox/buybox-clientlib.js';
  buyboxScript.src = 'https://www.microsoft.com/etc.clientlibs/microsoft/components/content/buybox/v1/buybox/clientlibs/clientlib.min.ACSHASHbdc4eca9fa666fb9142d5695deaf7f30.js';
  block.appendChild(buyboxScript);

/*   const buybox = new BuyBox();
  block.appendChild(buybox); */
}

function getData() {
  return {
      "isBusinessUserSignedIn": false,
      "product": {
          "productId": "92fp8q09qhxc",
          "title": "Surface Pen",
          "description": "Experience natural on-screen writing with Surface Pen, which has a traditional barrel style with precision ink on one end and a rubber eraser on the other. Designed to meet a range of mobility needs, you can customize your Surface Pen with 3D-printed pen grips available through Shapeways.¹,²\n\nCompatible with a wide variety of Surface devices.³",
          "productType": "Devices",
          "skuOrder": {
              "0": [
                  "4VRG"
              ]
          },
          "skuInfo": {
              "4VRG": {
                  "skuId": "4VRG",
                  "affirmation": null,
                  "availabilityId": null,
                  "badge": null,
                  "price": null,
                  "pricingMessage": "Surface Pen is currently not available.",
                  "euPricingMessage": null,
                  "title": "Surface Pen - Ice Blue",
                  "description": "Experience natural on-screen writing with Surface Pen, which has a traditional barrel style with precision ink on one end and a rubber eraser on the other. Designed to meet a range of mobility needs, you can customize your Surface Pen with 3D-printed pen grips available through Shapeways.¹,²\n\nCompatible with a wide variety of Surface devices.³",
                  "wishlist": {
                      "action": "AddToWishList",
                      "actionText": "Add to wish list",
                      "actionTextSecondary": "On wish list",
                      "behaviorTag": 83,
                      "disabled": false
                  },
                  "action": {
                      "action": "AddToCart",
                      "actionText": "Not Available",
                      "behaviorTag": 81,
                      "disabled": true
                  },
                  "displayImage": {
                      "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p12j?ver=a89e",
                      "purpose": "tile",
                      "alt": "An ice blue Surface Pen",
                      "background": "",
                      "height": 2000,
                      "width": 2000,
                      "imagePosition": "0",
                      "system": "rtdam"
                  },
                  "galleryImages": [
                      {
                          "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p3xu?ver=38d8",
                          "purpose": "screenshot",
                          "alt": "A poppy red Surface Pen",
                          "background": "",
                          "height": 1994,
                          "width": 160,
                          "imagePosition": "1",
                          "system": "rtdam"
                      },
                      {
                          "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p12j?ver=0ebc",
                          "purpose": "screenshot",
                          "alt": "An ice blue Surface Pen",
                          "background": "",
                          "height": 1994,
                          "width": 160,
                          "imagePosition": "2",
                          "system": "rtdam"
                      }
                  ],
                  "remediation": null,
                  "shippingMessage": "Free 2-3 day shipping. Free returns.",
                  "publisherName": null,
                  "eddMessage": null,
                  "discountMessage": null,
                  "enableBuyNowModal": false,
                  "ctaDescription": "Out of stock"
              }
          },
          "images": [
              {
                  "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p12j?ver=a89e",
                  "purpose": "tile",
                  "alt": "An ice blue Surface Pen",
                  "background": "",
                  "height": 2000,
                  "width": 2000,
                  "imagePosition": "0",
                  "system": "rtdam"
              },
              {
                  "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p3xu?ver=38d8",
                  "purpose": "screenshot",
                  "alt": "A poppy red Surface Pen",
                  "background": "",
                  "height": 1994,
                  "width": 160,
                  "imagePosition": "1",
                  "system": "rtdam"
              },
              {
                  "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p12j?ver=0ebc",
                  "purpose": "screenshot",
                  "alt": "An ice blue Surface Pen",
                  "background": "",
                  "height": 1994,
                  "width": 160,
                  "imagePosition": "2",
                  "system": "rtdam"
              }
          ],
          "isDualCTA": false,
          "displayImage": {
              "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p3xu?ver=38d8",
              "purpose": "screenshot",
              "alt": "A poppy red Surface Pen",
              "background": "",
              "height": 1994,
              "width": 160,
              "imagePosition": "1",
              "system": "rtdam"
          },
          "galleryImages": [
              {
                  "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p3xu?ver=38d8",
                  "purpose": "screenshot",
                  "alt": "A poppy red Surface Pen",
                  "background": "",
                  "height": 1994,
                  "width": 160,
                  "imagePosition": "1",
                  "system": "rtdam"
              },
              {
                  "uri": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3p12j?ver=0ebc",
                  "purpose": "screenshot",
                  "alt": "An ice blue Surface Pen",
                  "background": "",
                  "height": 1994,
                  "width": 160,
                  "imagePosition": "2",
                  "system": "rtdam"
              }
          ],
          "action": null,
          "wishlist": null,
          "badge": null,
          "shippingMessage": null,
          "price": null,
          "pricingMessage": null,
          "remediation": null,
          "contentRating": null,
          "category": "Devices",
          "type": "Devices",
          "family": "Devices",
          "hideEddMessage": true,
          "sourceCatalog": "Cat1"
      },
      "requestParams": {
          "productId": "92fp8q09qhxc",
          "locale": "en-us",
          "deviceFamily": null
      },
      "selectorInfo": [],
      "useProductInfo": false,
      "disableGallery": false,
      "hideTileImage": false,
      "hideWishlist": false,
      "hideColorPicker": false,
      "enableQuickHrefs": true,
      "enableUcsExp": false,
      "noLineBreaks": false,
      "addToCartHash": {
          "cV": "CASMicrosoftCV1cfa279b.1.1.0",
          "muid": "86ECCF2AFDD74E9BB760CD6A8A4C5D5C",
          "atcHash": "060191D60EBC137AE0D21EFF75BF0AC0ADEB5FB515A47295073E4BA8A3E22D83"
      },
      "exposeAddToCartHash": true,
      "isGrabGoEnabled": false,
      "useOnlyTitle": false,
      "hidePrice": false,
      "promoBannerBelow": [
          {
              "heading": "Why buy from Microsoft Store",
              "body": "<p>We offer free 2-3 day shipping, 60-day returns, and one-on-one help with shopping, setup, and training. Plus, if we lower our price on a physical product within 60 days from delivery, contact us and we’ll honor a price adjustment.</p>\r\n",
              "link": {
                  "ctatext": "Learn more about why to buy from Microsoft Store",
                  "nonTranslatableCtaText": "Learn more about why to buy from Microsoft Store",
                  "hyperlink": "https://www.microsoft.com/en-us/store/b/why-microsoft-store",
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "arialabel": "Learn more about why to buy from Microsoft Store",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              },
              "secondaryLink": {
                  "ctatext": "Book your online appointment",
                  "nonTranslatableCtaText": "Book your online appointment",
                  "hyperlink": "https://www.microsoft.com/en-us/store/b/online-computer-shopping-appointments",
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "arialabel": "Book a shopping appointment",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              }
          },
          {
              "body": "<p><b>Looking for other colors?<br />\r\n</b><a href=\"https://www.microsoft.com/en-us/d/surface-pen/8zl5c82qmg6b?activetab=pivot:overviewtab\" class=\"ms-rte-link\" aria-label=\"Shop for Surface Pen in other colors now.\">Shop now &gt;</a></p>\r\n<p><b>60-day price protection<br />\r\n</b>Enjoy price protection for 60 days from your delivery date. If we drop the price of a physical product or you find it lower at an eligible retailer, contact us and we'll honor a one-time price adjustment. Exclusions apply.</p>\r\n",
              "link": {
                  "ctatext": "Learn more ",
                  "nonTranslatableCtaText": "Learn more ",
                  "hyperlink": "https://www.microsoft.com/en-us/store/b/price-protection?icid=SurfaceAcc_AddBuybox_CTA_StorePromise_06242024",
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "arialabel": "Learn more about Price Protection",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              },
              "secondaryLink": {
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              }
          }
      ],
      "promoBannerBelowPrice": [
          {
              "body": "<p>Flexible payments available with PayPal and Citizens Pay®. </p>\r\n",
              "link": {
                  "ctatext": "Learn more",
                  "nonTranslatableCtaText": "Learn more",
                  "hyperlink": "https://www.microsoft.com/en-us/store/b/payment-financing-options",
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "arialabel": "Learn more about flexible payment options",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              }
          }
      ],
      "promoBannerRight": [
          {
              "body": "<p>Buying for your Business? Go to</p>\r\n",
              "link": {
                  "ctatext": "Surface Pen for Business",
                  "nonTranslatableCtaText": "Surface Pen for Business",
                  "hyperlink": "https://www.microsoft.com/en-us/d/surface-pen-for-business/8zwvhmb5wx21/D9ZX",
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              }
          },
          {
              "link": {
                  "ctatext": "Get started with 3D printing",
                  "nonTranslatableCtaText": "Get started with 3D printing",
                  "hyperlink": "https://support.microsoft.com/en-us/surface/use-3d-printed-grips-for-microsoft-pens-dc9fd947-8694-4aae-a1ff-a61b4f713f11",
                  "openInNewTab": "_self",
                  "styleoption": "cta",
                  "useForModal": false,
                  "dataBehavior": 0,
                  "htmlAttributes": [],
                  "encodeQueryParams": false
              }
          }
      ],
      "disableMoreOrLess": false,
      "pageTheme": "main-light",
      "buyboxStaticStrings": {
          "PRODUCT_INFORMATION": "Product Information for {0}",
          "ORIGINAL_PRICE_WAS": "Original price was",
          "BEFORE_YOU_BUY": "Before you buy",
          "BUY_NOW_ERROR_STATE_MESSAGE": "An unexpected error has occurred. Please try again later.",
          "AND_NOW_PRICE_IS": "and now price is",
          "CLOSE": "Close",
          "VIEW_WISH_LIST": "View wish list",
          "FETCH_DEVICES": "Fetching eligible devices",
          "IMAGES": "images",
          "FETCH_DEVICES_ERROR": "Something happened on our end. Waiting a bit might help.",
          "SIGN_UP": "Sign Up",
          "INSTALL_ATTEMPT_MESSAGE": "We're attempting to install on your selected device(s).",
          "WISH_LIST_ADDED_MESSAGE": "This was added to your wishlist.",
          "CLOSE_DIALOG_WINDOW": "Close dialog window",
          "SIGN_IN": "Sign In",
          "CHOOSE_YOUR_COLOR": "Choose your color",
          "BUSINESS_PRICING_ELIGIBILITY_MESSAGE": "Get exclusive business discounts and expert support with a work account.",
          "WITH_ZIPCODE_WITH_SHIPPING_METHOD": "Get it as soon as {0} to {1} when you choose {2}",
          "OPEN_GALLERY": "Open gallery",
          "THANK_YOU": "Thank you!",
          "SHOW_LESS_ABOUT": "Show less about",
          "BUSINESS_CART_DISCOUNT_MESSAGE": "Need more? Purchase up to 25 of this item in cart.",
          "WHERE_DO_YOU_WANT_TO_INSTALL": "Where do you want to install?",
          "LESS": "Less",
          "STATIC_BUNDLE_INCLUDES": "The bundle includes",
          "NO_DEVICES_MESSAGE": "It looks like you don't have any applicable device(s) linked to your Microsoft account. To install, sign in on a device with your Microsoft account.",
          "WITHOUT_ZIPCODE_WITH_SHIPPING_METHOD": "Get it as soon as {0} when you choose {1}",
          "INSTALL_MESSAGE": "We'll install it automatically on all the devices you select.",
          "CHOOSE_YOUR_CONFIGURATION": "Choose your configuration",
          "BUSINESS_MESSAGE_FOR_ANONYMOUS_USER": "Are you a business customer? Shop with a {0} work account {1} to get exclusive discounts and expert support.",
          "SUBMIT_REQUEST": "Submitting request to install product on selected devices.",
          "BUSINESS_SIGN_IN_MESSAGE": "Please {0} with Business account to get additional business discount or {1} to create a new business account.",
          "ON_WISH_LIST": "On wish list",
          "CONTINUE_SHOPPING": "Continue shopping",
          "INSTALL_NOW": "Install Now",
          "READ_MORE_ABOUT": "Read more about",
          "SHIPPING_METHODTYPE_EXPEDITED": "expedited shipping",
          "CLOSE_GALLERY_WINDOW": "Close gallery window",
          "ADD_TO_CART_SUPPORT_PHONE_NUMBER": "1-877-696-7786",
          "SHIPPING_METHODTYPE_EXPRESS": "express shipping",
          "OK": "Ok",
          "OR": "Or",
          "SHOW_MORE_ABOUT": "Show more about",
          "SHIPPING_METHODTYPE_SELECT": "select shipping",
          "ADDING": "Adding",
          "RATING_BOARD_MESSAGE": "Rating Board {0}, {1}. Rated {2}.",
          "VIEW_CART": "View cart",
          "WITH_ZIPCODE_WITHOUT_SHIPPING_METHOD": "Get it as soon as {0} to {1}",
          "PTI_PUSH_ERROR": "Something happened on our end. Waiting a bit might help.",
          "TRY_AGAIN": "Try that again",
          "WISH_LIST": "Wish list",
          "CV_SUPPORT_TEXT2": "Please save the following error code(s) so that our support advocates may be able to better assist you:",
          "MORE": "More",
          "CV_SUPPORT_TEXT1": "If you need any additional assistance, please contact Microsoft Store Support at ",
          "CV": "CV:",
          "CANCEL": "Cancel",
          "WITHOUT_ZIPCODE_WITHOUT_SHIPPING_METHOD": "Get it as soon as {0}",
          "OUT_OF_STOCK": "Out of stock",
          "WISH_LIST_SHARING_MESSAGE": "You added {0} to your wish list. You can share this list with others.",
          "GET_MORE_INFO": "Get more info"
      },
      "showBusinessUserValuePropMessage": false,
      "hideBusinessUserValuePropMessage": true,
      "geoLocation": "georegion=244,country_code=US,region_code=AZ,city=TEMPE,dma=753,msa=6200,areacode=480,county=MARICOPA,fips=04013,lat=33.4148,long=-111.9088,timezone=MST,zip=85280-85285+85287,continent=NA,throughput=vhigh,bw=5000,asnum=20940,location_id=0",
      "dccApiEndpoint": "https://dcc.mp.microsoft.com:443/v1.0/deliverycost/"
  }
}