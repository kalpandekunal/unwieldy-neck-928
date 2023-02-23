import { Box, Image, Text } from "@chakra-ui/react";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Box>
        <Box className="about-flex">
          <Box  className="bigbasket">
            <Text fontSize={18} color="#000000">Help</Text>
            <Text className="hover">Order atatus</Text>
            <Text className="hover">About us</Text>
            <Text className="hover">Contact us</Text>
            <Text className="hover">PWarranty</Text>
            <Text className="hover">FAQs</Text>
            <Text className="hover">Sitemap</Text>
            
          </Box>

          <Box className="help">
            <Text fontSize={18} color="#000000">Support</Text>
            <Text className="hover">WhatGeek</Text>
            <Text className="hover">Shipping guide</Text>
            <Text className="hover">Payment information</Text>
            <Text className="hover">Wholesale</Text>
            <Text className="hover">Blog</Text>
            <Text className="hover">Affiliates</Text>

          </Box>

          <Box className="download_app">
            <Text fontSize={18} color="#000000" mb="10px">
              Download The App
            </Text>
            <Box className="download_child" gap="10px">
              <Image
                w="100%"
                h="100%"
                mb="10px"
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"
                alt="google play store"
              />
              <Image w="100%" h="100%" src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt="apple app store" />
              <Image w="100%" h="100%" src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt="play store" />
              <Image w="100%" h="100%" src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt="Geekbuying app store" />

            </Box>
          </Box>

          <Box className="social-media">
            <Text fontSize={18} color="#000000" mb="10px">
              Connect With Us
            </Text>
            <Box className="social_child">
              <Image width={200} height={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTTnp6oHCQm6jqEB4AKvm7fF1kNUFrxkhVw&usqp=CAU" alt="facebook" />
              {/* <Image width={10} height={10} src="" alt="painter" />
              <Image width={10} height={10} src="{twitter}" alt="twitter" />
              <Image width={10} height={10} src="{instagram}" alt="instagram" /> */}
            </Box>
          </Box>
        </Box>

        <Box className="about-flex-2">
          <Box className="P-category">
            <Text fontSize={18} color="#000000">POPULAR CATEGORIES:</Text>
            <Text>
            ENGWE sculpfun laserpecker FOSSiBOT Power Station powkiddy Roborock Geekbuying Coupon MINISFORUM led projector eleglide mini laptop JJRC electric scooter Mite Cleaner oukitel ado ebike tablet Creality Ender-3 V2 Laser Cutters
            </Text>
          </Box>

          

          
          <Box className="P-options">
            <Text fontSize={18}  color="#000000">PAYMENT OPTIONS:</Text>
            <Box className="options">
              <Image w={100} h={10} src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="icons" />
              <Image w={100} h={10} src="https://cdn.pixabay.com/photo/2017/08/02/11/09/electronic-payments-2570939__480.jpg" alt="icons" />
              <Image w={100} h={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yxYld95f3DhTbcjkzffPVZrVTfiiK1Gl2A&usqp=CAU" alt="icons" />
              <Image w={100} h={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhmveSDHQhWGJ5jN7AtR-nbLTYDbrOv9A4A&usqp=CAU" alt="icons" />
              <Image w={100} h={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPcCBQZwH1tGTJD2zw8Hh47Hqz8NDQeqqjQ&usqp=CAU" alt="icons" />
              <Image w={100} h={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOxPk6rxJ0tVAcDZJ3aZ4ymqpnPvdTaqObw&usqp=CAU" alt="icons" />
            </Box>
          </Box>
        </Box>

        <Box w="100%" bg="#eaeaea" h="30px" >
          <Text w="82%" margin="auto" textAlign="center" alignItems="center" fontSize={13} color="#777474" >Copyright © 2012-2023 Geekbuying.com. All rights reserved.</Text>
        </Box>
      </Box>
    </div>
  );
};
export default Footer;