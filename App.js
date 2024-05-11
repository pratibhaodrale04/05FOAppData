import React from "react";
import ReactDOM from "react-dom";

//1. HeaderComponent
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img
          id="logo-img"
          src="https://maayaofbath.co.uk/wp-content/uploads/2022/02/maya-logo.svg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Buffet Menu</li>
          <li>Festive Menu</li>
          <li>Book Table</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


//3. RestaurantCardComponent
// const RestaurantCardComponent = (props)=>{
//     const { restData } = props;
//     console.log("props-----",props);
//     console.log("name----restData----",restData[0]);
//     // console.log("avgRating--------",restData.info.avgRating);
//     // console.log("deliveryTime--------",restData.info.sla.deliveryTime);
//     return <>
//         <div className="rest-cards">
//             <img className="rest-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
//             + restData.info.cloudinaryImageId}></img>
//             <h2> {restData.info.name}</h2>
//             <h5 id="header4">{restData.info.cuisines.join(",")}</h5>
//             <h4 id="header4">{restData.info.avgRating} stars</h4>
//             <h4 id="header4">{restData.info.sla.deliveryTime}</h4>
//         </div>
//     </>
// }

//3.1 Destructuring an Array while reading a data
const RestaurantCardComponent = (props)=>{
    const { restData } = props;
    // console.log("name----restData----",restData[0]);
    // console.log("avgRating--------",restData.info.avgRating);
    // console.log("deliveryTime--------",restData.info.sla.deliveryTime);
    const { cloudinaryImageId, name, cuisines, avgRating } = restData?.info;
    const { deliveryTime } = restData?.info.sla;
    return <>
        <div className="rest-cards">
            <img className="rest-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            + cloudinaryImageId}></img>
            <h2> {name}</h2>
            <h5 id="header4">{cuisines.join(",")}</h5>
            <h4 id="header4">{avgRating} stars</h4>
            <h4 id="header4">{deliveryTime}</h4>
        </div>
    </>
}



// Restaurant data
const restListData =  [
    {
      info: {
        id: "10576",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹350 for two",
        cuisines: [
          "Pizzas"
        ],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 04:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "426",
        name: "Hotel Empire",
        cloudinaryImageId: "gswvotfmtwj47y7o7nqh",
        locality: "HSR Layout",
        areaName: "HSR Layout",
        costForTwo: "₹450 for two",
        cuisines: [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        avgRating: 4.2,
        parentId: "3945",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "ABOVE ₹500",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hotel-empire-hsr-layout-bangalore-426",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "65797",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹300 for two",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        avgRating: 4.4,
        parentId: "371281",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 04:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "23680",
        name: "McDonald's",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/bd7c088d-d147-48e4-9a6f-91d8447986f7_23680.jpg",
        locality: "Murgesh Pallya",
        areaName: "Indiranagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:45:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-murgesh-pallya-indiranagar-bangalore-23680",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "59627",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "ntjshqsv2k7vxtv7vmib",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹251 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.3,
        parentId: "4961",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-koramangala-bangalore-59627",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "439636",
        name: "Madno - House of Sundaes",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/3/0f8128ab-51fd-4a4e-81cc-19c3a5fc4d2b_439636.jpg",
        locality: "5th Block",
        areaName: "Koramangala",
        costForTwo: "₹250 for two",
        cuisines: [
          "Ice Cream",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.1,
        veg: true,
        parentId: "264082",
        avgRatingString: "4.1",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 04:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/madno-house-of-sundaes-5th-block-koramangala-bangalore-439636",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "442032",
        name: "Keventers Ice Cream",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/c225a4e8-4b98-4c14-939b-361c7bcae118_442032.JPG",
        locality: "7th Block",
        areaName: "Koramangala",
        costForTwo: "₹200 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.5,
        veg: true,
        parentId: "272044",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/keventers-ice-cream-7th-block-koramangala-bangalore-442032",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "656392",
        name: "Subway",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/e0ab56c3-3d8e-4214-8705-240795d737c0_656392.jpg",
        locality: "1st Block",
        areaName: "Koramangala",
        costForTwo: "₹350 for two",
        cuisines: [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.2,
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-1st-block-koramangala-bangalore-656392",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "74444",
        name: "Samosa Party",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹100 for two",
        cuisines: [
          "Fast Food",
          "Snacks",
          "Beverages",
          "Chaat",
          "North Indian",
          "Street Food",
          "Sweets",
          "Desserts",
          "Punjabi",
          "Bakery"
        ],
        avgRating: 4.3,
        parentId: "6364",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-18 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "5934",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹350 for two",
        cuisines: [
          "Burgers",
          "American"
        ],
        avgRating: 4.2,
        parentId: "166",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 06:55:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "735653",
        name: "GetAWay-Ice Creams & Desserts",
        cloudinaryImageId: "8194c8fed09497bce3714d2586653545",
        locality: "Keb Colony",
        areaName: "BTM",
        costForTwo: "₹250 for two",
        cuisines: [
          "Ice Cream",
          "Desserts",
          "Healthy Food",
          "Sweets"
        ],
        avgRating: 4,
        veg: true,
        parentId: "354819",
        avgRatingString: "4.0",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 23:59:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-keb-colony-btm-bangalore-735653",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "192273",
        name: "McCafe by McDonald's",
        cloudinaryImageId: "hqtxfkccp3plhmj41vfz",
        locality: "7th Sector",
        areaName: "HSR Layout",
        costForTwo: "₹250 for two",
        cuisines: [
          "Beverages",
          "Desserts"
        ],
        avgRating: 4.9,
        parentId: "8263",
        avgRatingString: "4.9",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 04:45:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mccafe-by-mcdonalds-7th-sector-hsr-layout-bangalore-192273",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "395208",
        name: "McDonald's Gourmet Burger Collection",
        cloudinaryImageId: "hll0sm7xga5krgpgfgpl",
        locality: "Murgesh Pallya",
        areaName: "Indiranagar",
        costForTwo: "₹600 for two",
        cuisines: [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        avgRating: 4.2,
        parentId: "10761",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 42,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:45:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-murgesh-pallya-indiranagar-bangalore-395208",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "739117",
        name: "Boba Bhai",
        cloudinaryImageId: "b0471f6ae8ec204260755f55d35c626e",
        locality: "Industrial Layout ward",
        areaName: "Kormangla",
        costForTwo: "₹200 for two",
        cuisines: [
          "Burgers",
          "Beverages",
          "Fast Food",
          "Street Food"
        ],
        avgRating: 4.3,
        parentId: "361235",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-18 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/boba-bhai-industrial-layout-ward-kormangla-bangalore-739117",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "751353",
        name: "Tim Hortons Coffee",
        cloudinaryImageId: "26c8263d346b308a6a62c003d1d9eca1",
        locality: "8TH BLOCK",
        areaName: "KORAMANGALA",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Desserts",
          "Cafe",
          "Fast Food",
          "Continental",
          "Bakery",
          "Pastas"
        ],
        avgRating: 4.3,
        parentId: "258236",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 06:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/tim-hortons-coffee-8th-block-koramangala-bangalore-751353",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "739118",
        name: "Seoul Mate Korean Burgers",
        cloudinaryImageId: "d6a8cb3cae80e0a496e2d7fdbbbc1adb",
        locality: "Industrial Layout ward",
        areaName: "Kormangla",
        costForTwo: "₹200 for two",
        cuisines: [
          "Burgers",
          "Bubble Tea",
          "Beverages",
          "Fast Food",
          "Street Food"
        ],
        avgRating: 4.2,
        parentId: "372969",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-18 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/seoul-mate-korean-burgers-industrial-layout-ward-kormangla-bangalore-739118",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "837866",
        name: "The Pizza Project by Oven Story",
        cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
        locality: "Jakkasandra",
        areaName: "Hsr Layout 5th Sector",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pizzas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.5,
        parentId: "497031",
        avgRatingString: "4.5",
        totalRatingsString: "9",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹75 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-pizza-project-by-oven-story-jakkasandra-hsr-layout-5th-sector-bangalore-837866",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "566263",
        name: "Faasos Signature Wraps & Rolls",
        cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
        locality: "Jakkasandra",
        areaName: "Hsr Layout 5th Sector",
        costForTwo: "₹350 for two",
        cuisines: [
          "Fast Food",
          "Snacks",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.2,
        parentId: "340366",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-jakkasandra-hsr-layout-5th-sector-bangalore-566263",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "826444",
        name: "Pastas By Pizza Hut",
        cloudinaryImageId: "67d17abfeb3a5da6103b9424f6dbe973",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pastas"
        ],
        avgRating: 3.7,
        parentId: "306806",
        avgRatingString: "3.7",
        totalRatingsString: "10+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 04:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-koramangala-bangalore-826444",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "575030",
        name: "Veg Daawat by Behrouz",
        cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
        locality: "1st Block",
        areaName: "Koramangala",
        costForTwo: "₹700 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4,
        veg: true,
        parentId: "344904",
        avgRatingString: "4.0",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-12 03:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/veg-daawat-by-behrouz-1st-block-koramangala-bangalore-575030",
        type: "WEBLINK"
      }
    }
  ]


//2. BodyComponent
const BodyComponent = ()=>{
    return <>
    <div className="search-bar">
    <h1>SEARCH</h1>
    </div>
    <div className="rest-container">
    {/* use Array.map() to iterate list */}
    {
        restListData.map((restaurant)=>(
            <RestaurantCardComponent key={restaurant.info.id} restData={restaurant} />
                )) 
    }
       </div>
    </>
}


const MainComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
