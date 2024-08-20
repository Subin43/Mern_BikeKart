import React from 'react';
const images = [
  {
    id: 1,
    src: "https://img.freepik.com/premium-vector/vector-motorcycle-sports-bike-logo-design_600323-955.jpg",
    alt: "Motor Bike Icon",
  },
  {
    id:2,
    src: "https://c4.wallpaperflare.com/wallpaper/129/22/327/hands-greeting-handshake-wallpaper-preview.jpg",
    alt: "Find" ,
  },
  {
    id:3,
    src: "https://media.istockphoto.com/id/1386156190/photo/indian-farmer-sitting-on-his-new-bike-and-showing-money.jpg?s=612x612&w=0&k=20&c=oUDpmNlfoH6a809BNnpKmsNCVuOm7EyxIHDMMFbpfGU=",
    alt: "Your Bike"
  },
  {
    id:4,
    src: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg",
    alt: "Bike "
  },
  {
    id:5,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/buy-bike_reserve_bike.webp",
    alt: "Find"
  },
  {
    id:6,
    src: "https://beepkart.com/images/half_sleeve_man.webp",
    alt: "Test drive"
  },
  {
    id:7,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/buy-pay-and-own-it.webp",
    alt: "Test drive"
  },
  {
    id:8,
    src: "https://w0.peakpx.com/wallpaper/35/252/HD-wallpaper-vespa-piaggio-scooter-bike-vespa-piaggio.jpg",
    alt: "Test drive"
  },
  {
    id:9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTNEqxaWafu2_fQd2FVtIirSplb67uGG7GJTVLR7eVZRCuWMBg8hVdP9c3cvA-wDHLDw&usqp=CAU",
    alt: "Test drive"
  },
  {
    id:10,
    src: "https://4kwallpapers.com/images/wallpapers/ktm-rc-390-sports-bikes-2022-white-background-4480x2520-6437.jpg",
    alt: "Test drive"
  },
  {
    id:11,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecu6XFkAK-u6FXrIAOmQRfHvoYuRs3oRfLQHwGDkaVsGe7IjkFoEfr-km2zJJ2r4oDBQ&usqp=CAU",
    alt: "Test drive"
  },
  {
    id:12,
    src: "https://animationvisarts.com/wp-content/uploads/2024/01/Frame-30-6.png",
    alt: "Tvs"
  },
  {
    id:13,
    src: "https://i.pinimg.com/originals/4f/f5/09/4ff509a7f661b99574cb6b0d86e14232.png",
    alt: "Yamaha"
  },
  {
    id:14,
    src: "https://logos-world.net/wp-content/uploads/2022/12/Bajaj-Auto-Logo.png",
    alt: "Bajaj"
  },
  {
    id:15,
    src: "https://logowik.com/content/uploads/images/hero-motocorp-horizontal9418.logowik.com.webp",
    alt: "Hero"
  },
  {
    id:16,
    src: "https://e7.pngegg.com/pngimages/803/550/png-clipart-logo-royal-enfield-enfield-cycle-co-ltd-brand-font-royal-enfield-logo-text-orange.png",
    alt: "Royal"
  },
  {
    id:17,
    src: "https://download.logo.wine/logo/Suzuki_Motorcycle_India_Limited/Suzuki_Motorcycle_India_Limited-Logo.wine.png",
    alt: "Susuki"
  },
  {
    id:18,
    src: "https://w7.pngwing.com/pngs/914/767/png-transparent-ktm-yamaha-motor-company-motorcycle-bicycle-logo-motorcycle-angle-text-orange-thumbnail.png",
    alt: "KTM"
  },
  {
    id:19,
    src: "https://stat.overdrive.in/wp-content/odgallery/2021/10/61208_2022_KTM-RC-200_STD_3.jpg",
    alt: "RC "
  },
  {
    id:20,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/aboutUsBikes2023.webp",
    alt: "Mascot "
  },
  {
    id:21,
    src: "https://beepkart.com/images/our_misson_desktop.webp",
    alt: "Mascot "
  },
  {
    id:22,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/aboutUsComeJoin2023.webp",
    alt: "Mascot "
  },
  {
    id:23,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/refurb-what.webp",
    alt: "Refurb "
  },
  {
    id:24,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/refurb-process-1.webp",
    alt: "step1 "
  },
  {
    id:25,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/refurb-process-2.webp",
    alt: "Step2 "
  },
  {
    id:26,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/refurb-process-3.webp",
    alt: "Step3 "
  },

    {
      id:27,
      src: "https://d1mm9h6qsl0np.cloudfront.net/images/refrub-glimpse-1.webp",
      alt: "Step3 "
    },   
   {
    id:28,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/refrub-glimpse-2.webp",
    alt: "Step3 "
  },
  {
    id:29,
    src: "https://d1mm9h6qsl0np.cloudfront.net/images/refrub-glimpse-3.webp",
    alt: "Step3 "
  },
  {
    id:30,
    src: "https://beepkart.com/images/refurb-screwdriver-man.webp",
    alt: "Step3 "
  },
  
];

const ImageComponent = ({ imageId,style}) => {
  const image = images.find(img => img.id === imageId);
  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <>
      <img 
        src={image.src}
        alt={image.alt} 
        style={style}/>
    </>
  );
};

export default ImageComponent;
