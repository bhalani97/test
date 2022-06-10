import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const OurTeamsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-lato mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Stack className="lg:h-[124px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] h-[211px] w-[100%]">
              <Stack className="absolute lg:h-[124px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] h-[211px] inset-[0] w-[100%]">
                <Row className="absolute bg-gray_100 items-start justify-start top-[0] w-[100%]">
                  <Image
                    src={"images/img_envelopeopent_2.svg"}
                    className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[32.5px] lg:ml-[277px] xl:ml-[316px] 2xl:ml-[356px] 3xl:ml-[427px] ml-[475px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] mt-[25.5px] object-contain lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px] w-[30px]"
                    alt="envelopeopent"
                  />
                  <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`youremail@gmail.com`}</Text>
                  <Image
                    src={"images/img_mobilealt_2.svg"}
                    className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] ml-[59px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] object-contain w-[1%]"
                    alt="mobilealt"
                  />
                  <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] ml-[31.12px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`(671) 555-0110`}</Text>
                </Row>
                <Stack className="absolute bottom-[0] xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] h-[162px] lg:h-[95px] left-[0] w-[23%]">
                  <Image
                    src={"images/img_rectangle49_2.svg"}
                    className="absolute xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] h-[162px] lg:h-[95px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle49"
                  />
                  <Row className="absolute h-[max-content] inset-y-[0] items-end justify-center left-[12%] my-[auto] w-[66%]">
                    <Image
                      src={"images/img_frame64.svg"}
                      className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                      alt="Frame64"
                    />
                    <Column className="items-start justify-start lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] w-[69%]">
                      <Text className="font-bold text-deep_orange_500 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`YOURLOGO`}</Text>
                      <Text className="font-bold lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_500 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left tracking-ls1 w-[auto]">{`YOUR SLOGAN HERE`}</Text>
                    </Column>
                  </Row>
                </Stack>
              </Stack>
              <Row className="absolute bg-indigo_900 bottom-[0] items-center justify-end w-[100%]">
                <Row className="items-center justify-center lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[47%]">
                  <Text className="font-bold text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Home`}</Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Pages`}</Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Services`}</Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Projects`}</Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Blog`}</Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Contact Us`}</Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[auto]">{`Career`}</Text>
                </Row>
                <Button className="bg-deep_orange_500 font-bold lg:mb-[18px] 2xl:mb-[23px] mb-[31px] lg:ml-[181px] xl:ml-[207px] 2xl:ml-[233px] 3xl:ml-[280px] ml-[311px] lg:mr-[47px] xl:mr-[54px] 2xl:mr-[61px] 3xl:mr-[73px] mr-[82px] lg:mt-[17px] 2xl:mt-[22px] mt-[30px] xl:my-[20px] 3xl:my-[27px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19.6px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[13px] 3xl:pt-[16px] pt-[18.6px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[8%]">{`Sign In`}</Button>
              </Row>
            </Stack>
          </header>
          <Text className="font-extrabold lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] mt-[200px] mx-[auto] text-center lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 uppercase w-[auto]">{`Our Teams`}</Text>
          <Text className="font-extrabold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] mx-[auto] text-center lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 uppercase w-[auto]">{`Laboris commodo consequat`}</Text>
          <Text className="font-normal leading-lh17000 lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 w-[41%]">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
          <Grid className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-2 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[61%]">
            <Column className="lg:h-[333px] xl:h-[381px] 2xl:h-[428px] 3xl:h-[514px] h-[570px] shadow-bs1 w-[100%]">
              <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
              <Row className="bg-white_A700 items-center justify-between w-[100%]">
                <Column className="mb-[61px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] mt-[60px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[48%]">
                  <Text className="font-extrabold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Voluptate exercitation`}</Text>
                </Column>
                <Button className="bg-gray_600_19 font-normal lg:mb-[45px] 2xl:mb-[58px] 3xl:mb-[69px] mb-[77.5px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[44px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76.5px] xl:my-[51px] not-italic 3xl:py-[11px] py-[12.72px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius62 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-indigo_900 w-[24%]">{`View`}</Button>
              </Row>
            </Column>
            <Column className="lg:h-[333px] xl:h-[381px] 2xl:h-[428px] 3xl:h-[514px] h-[570px] shadow-bs1 w-[100%]">
              <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
              <Row className="bg-white_A700 items-center justify-between w-[100%]">
                <Column className="mb-[61px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] mt-[60px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[48%]">
                  <Text className="font-extrabold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Voluptate exercitation`}</Text>
                </Column>
                <Button className="bg-gray_600_19 font-normal lg:mb-[45px] 2xl:mb-[58px] 3xl:mb-[69px] mb-[77.5px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[44px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76.5px] xl:my-[51px] not-italic 3xl:py-[11px] py-[12.72px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius62 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-indigo_900 w-[24%]">{`View`}</Button>
              </Row>
            </Column>
            <Column className="lg:h-[333px] xl:h-[381px] 2xl:h-[428px] 3xl:h-[514px] h-[570px] shadow-bs1 w-[100%]">
              <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
              <Row className="bg-white_A700 items-center justify-between w-[100%]">
                <Column className="mb-[61px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] mt-[60px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[48%]">
                  <Text className="font-extrabold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Voluptate exercitation`}</Text>
                </Column>
                <Button className="bg-gray_600_19 font-normal lg:mb-[45px] 2xl:mb-[58px] 3xl:mb-[69px] mb-[77.5px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[44px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76.5px] xl:my-[51px] not-italic 3xl:py-[11px] py-[12.72px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius62 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-indigo_900 w-[24%]">{`View`}</Button>
              </Row>
            </Column>
            <Column className="lg:h-[333px] xl:h-[381px] 2xl:h-[428px] 3xl:h-[514px] h-[570px] shadow-bs1 w-[100%]">
              <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
              <Row className="bg-white_A700 items-center justify-between w-[100%]">
                <Column className="mb-[61px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] mt-[60px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[48%]">
                  <Text className="font-extrabold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Voluptate exercitation`}</Text>
                </Column>
                <Button className="bg-gray_600_19 font-normal lg:mb-[45px] 2xl:mb-[58px] 3xl:mb-[69px] mb-[77.5px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[44px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76.5px] xl:my-[51px] not-italic 3xl:py-[11px] py-[12.72px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius62 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-indigo_900 w-[24%]">{`View`}</Button>
              </Row>
            </Column>
            <Column className="lg:h-[333px] xl:h-[381px] 2xl:h-[428px] 3xl:h-[514px] h-[570px] shadow-bs1 w-[100%]">
              <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
              <Row className="bg-white_A700 items-center justify-between w-[100%]">
                <Column className="mb-[61px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] mt-[60px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[48%]">
                  <Text className="font-extrabold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Voluptate exercitation`}</Text>
                </Column>
                <Button className="bg-gray_600_19 font-normal lg:mb-[45px] 2xl:mb-[58px] 3xl:mb-[69px] mb-[77.5px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[44px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76.5px] xl:my-[51px] not-italic 3xl:py-[11px] py-[12.72px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius62 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-indigo_900 w-[24%]">{`View`}</Button>
              </Row>
            </Column>
            <Column className="lg:h-[333px] xl:h-[381px] 2xl:h-[428px] 3xl:h-[514px] h-[570px] shadow-bs1 w-[100%]">
              <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
              <Row className="bg-white_A700 items-center justify-between w-[100%]">
                <Column className="mb-[61px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] mt-[60px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[48%]">
                  <Text className="font-extrabold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Voluptate exercitation`}</Text>
                </Column>
                <Button className="bg-gray_600_19 font-normal lg:mb-[45px] 2xl:mb-[58px] 3xl:mb-[69px] mb-[77.5px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[44px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76.5px] xl:my-[51px] not-italic 3xl:py-[11px] py-[12.72px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius62 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-indigo_900 w-[24%]">{`View`}</Button>
              </Row>
            </Column>
          </Grid>
          <Image
            src={"images/img_group111_1.svg"}
            className="lg:h-[200px] xl:h-[229px] 2xl:h-[257px] 3xl:h-[308px] h-[342px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] mt-[200px] object-cover w-[100%]"
            alt="Group111"
          />
          <Column className="items-start justify-start lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] mt-[200px] w-[100%]">
            <Text className="font-extrabold lg:mx-[218px] xl:mx-[250px] 2xl:mx-[281px] 3xl:mx-[337px] mx-[375px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Blog`}</Text>
            <Text className="font-extrabold leading-lh14000 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:mx-[218px] xl:mx-[250px] 2xl:mx-[281px] 3xl:mx-[337px] mx-[375px] lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[27%]">{`Laboris commodo consequat`}</Text>
            <Column className="items-end mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
              <List
                className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-3 min-h-[auto] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[80%]"
                orientation="horizontal"
              >
                <Column className="shadow-bs1 w-[100%]">
                  <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
                  <Column className="bg-white_A700 items-start justify-center lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] lg:py-[23px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] py-[40px] w-[100%]">
                    <Text className="font-extrabold lg:mx-[33px] xl:mx-[38px] 2xl:mx-[43px] 3xl:mx-[52px] mx-[58px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Finance Manager`}</Text>
                    <Column className="items-center lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] w-[100%]">
                      <Column className="items-start justify-start mx-[auto] w-[83%]">
                        <Text className="font-extrabold lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Lorem ipsum dolor`}</Text>
                        <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[43%]">
                          <Row className="items-start justify-between w-[33%]">
                            <Image
                              src={"images/img_commentdots.svg"}
                              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mb-[1px] object-contain lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px] w-[35px]"
                              alt="commentdots"
                            />
                            <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`25`}</Text>
                          </Row>
                          <Row className="items-start justify-between lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] w-[45%]">
                            <Image
                              src={"images/img_eye_6.svg"}
                              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mb-[1px] object-contain w-[37%]"
                              alt="eye"
                            />
                            <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`125k`}</Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="shadow-bs1 w-[100%]">
                  <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
                  <Column className="bg-white_A700 items-start justify-center lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] lg:py-[23px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] py-[40px] w-[100%]">
                    <Text className="font-extrabold lg:mx-[33px] xl:mx-[38px] 2xl:mx-[43px] 3xl:mx-[52px] mx-[58px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Finance Manager`}</Text>
                    <Column className="items-center lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] w-[100%]">
                      <Column className="items-start justify-start mx-[auto] w-[83%]">
                        <Text className="font-extrabold lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Lorem ipsum dolor`}</Text>
                        <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[43%]">
                          <Row className="items-start justify-between w-[33%]">
                            <Image
                              src={"images/img_commentdots.svg"}
                              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mb-[1px] object-contain lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px] w-[35px]"
                              alt="commentdots"
                            />
                            <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`25`}</Text>
                          </Row>
                          <Row className="items-start justify-between lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] w-[45%]">
                            <Image
                              src={"images/img_eye_7.svg"}
                              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mb-[1px] object-contain w-[37%]"
                              alt="eye"
                            />
                            <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`125k`}</Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="shadow-bs1 w-[100%]">
                  <div className="bg-gray_300 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] w-[100%]"></div>
                  <Column className="bg-white_A700 items-start justify-center lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] lg:py-[23px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] py-[40px] w-[100%]">
                    <Text className="font-extrabold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Finance Manager`}</Text>
                    <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] w-[60%]">
                      <Text className="font-extrabold lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Lorem ipsum dolor`}</Text>
                      <Column className="xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Row className="items-start justify-between w-[91%]">
                            <Image
                              src={"images/img_commentdots.svg"}
                              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mb-[1px] object-contain lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px] w-[35px]"
                              alt="commentdots"
                            />
                            <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`25`}</Text>
                          </Row>
                          <Row className="items-start justify-between w-[1%]">
                            <Line className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mb-[1px] w-[1px]" />
                            <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`125k`}</Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
          <footer className="lg:mt-[193px] xl:mt-[220px] 2xl:mt-[248px] 3xl:mt-[298px] mt-[331px] w-[100%]">
            <Column className="bg-bluegray_900 items-center justify-end shadow-bs1 w-[100%]">
              <Row className="items-start justify-evenly lg:mt-[120px] xl:mt-[138px] 2xl:mt-[155px] 3xl:mt-[186px] mt-[207px] w-[100%]">
                <Column className="items-start justify-start lg:mb-[53px] xl:mb-[60px] 2xl:mb-[68px] 3xl:mb-[81px] mb-[91px] w-[14%]">
                  <Text className="font-bold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-left text-white_A700 w-[auto]">{`About Us`}</Text>
                  <Text className="font-normal leading-lh17000 lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]">{`Lorem ipsum dolor sit amet, consectet ur adipisicing elit, incididunt ut labore.`}</Text>
                  <Button className="bg-deep_orange_500 font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.6px] xl:pt-[18px] 2xl:pt-[20px] 3xl:pt-[24px] pt-[27.6px] lg:py-[16px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[87%]">{`Join Us`}</Button>
                </Column>
                <Column className="items-start justify-start w-[14%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-left text-white_A700 w-[auto]">{`Contact Us`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-normal leading-lh17000 not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                      <Text className="font-normal not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[auto]">{`deanna.curtis@example.com`}</Text>
                      <Text className="font-normal not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[auto]">{`(671) 555-0110`}</Text>
                    </Column>
                  </Column>
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-left text-white_A700 w-[auto]">{`Opening Hours`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-normal not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[auto]">{`Mon - Sat 8:00 - 17:30,`}</Text>
                      <Text className="font-normal not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[auto]">{`Sunday - CLOSED`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] 3xl:mb-[84px] mb-[94px] w-[9%]">
                  <Text className="font-bold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-left text-white_A700 w-[auto]">{`Userfull Links`}</Text>
                  <Column className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[87%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src={"images/img_chevronright_1.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-bold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`About Us`}</Text>
                    </Row>
                    <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Image
                        src={"images/img_chevronright_1.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Our Team`}</Text>
                    </Row>
                    <Column className="lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src={"images/img_chevronright_1.svg"}
                          className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                          alt="chevronright"
                        />
                        <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Pricing Plans`}</Text>
                      </Row>
                    </Column>
                    <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Image
                        src={"images/img_chevronright_1.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                    </Row>
                    <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Image
                        src={"images/img_chevronright_1.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`404 Page`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="items-start justify-start xl:mb-[112px] 2xl:mb-[126px] 3xl:mb-[152px] mb-[168.92px] lg:mb-[98px] w-[14%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-left text-white_A700 w-[auto]">{`Our Project`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Stack className="2xl:h-[103px] 3xl:h-[123px] h-[136.08008px] lg:h-[80px] xl:h-[91px] w-[100%]">
                      <Image
                        src={"images/img_vector.svg"}
                        className="absolute 2xl:h-[103px] 3xl:h-[123px] h-[136.08px] lg:h-[80px] xl:h-[91px] inset-[0] object-cover opacity-op5 w-[100%]"
                        alt="Vector"
                      />
                      <Column className="absolute bottom-[26%] left-[10%] right-[auto] top-[15%] w-[61%]">
                        <Column className="w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Image
                              src={"images/img_locationfilled.svg"}
                              className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[20px] mb-[1px] object-contain lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px] w-[20px]"
                              alt="LocationFilled"
                            />
                            <Image
                              src={"images/img_locationfilled.svg"}
                              className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[20px] mt-[1px] object-contain lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px] w-[20px]"
                              alt="LocationFilled"
                            />
                          </Row>
                        </Column>
                        <Stack className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[20px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] w-[100%]">
                          <Image
                            src={"images/img_locationfilled.svg"}
                            className="absolute lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[20px] left-[auto] object-contain right-[25%] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px] w-[20px]"
                            alt="LocationFilled"
                          />
                        </Stack>
                      </Column>
                    </Stack>
                  </Column>
                </Column>
              </Row>
              <Stack className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] h-[94px] 2xl:mt-[100px] 3xl:mt-[120px] mt-[134px] lg:mt-[78px] xl:mt-[89px] mx-[auto] w-[61%]">
                <Input
                  className="absolute bg-gray_901 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[21px] xl:pb-[24px] 2xl:pb-[27px] 3xl:pb-[33px] pb-[36.7px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pl-[30px] lg:pt-[20px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[32px] pt-[35.7px] lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                  name="Group40"
                  placeholder={`Copyright © 2020. All right reserved`}
                ></Input>
                <Row className="absolute bottom-[31%] inset-x-[0] items-center justify-evenly top-[30%] w-[100%]">
                  <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Compatible With:`}</Text>
                  <Image
                    src={"images/img_frame116_2.svg"}
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[6%]"
                    alt="Frame116"
                  />
                </Row>
              </Stack>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default OurTeamsPage;
