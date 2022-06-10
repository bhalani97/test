import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";

const OurProcessPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-lato mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Stack className="lg:h-[124px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] h-[211px] w-[100%]">
              <Stack className="absolute lg:h-[124px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] h-[211px] inset-[0] w-[100%]">
                <Row className="absolute bg-gray_100 items-start justify-start top-[0] w-[100%]">
                  <Image
                    src={"images/img_envelopeopent_11.svg"}
                    className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[32.5px] lg:ml-[277px] xl:ml-[316px] 2xl:ml-[356px] 3xl:ml-[427px] ml-[475px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] mt-[25.5px] object-contain lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px] w-[30px]"
                    alt="envelopeopent"
                  />
                  <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`youremail@gmail.com`}</Text>
                  <Image
                    src={"images/img_mobilealt_11.svg"}
                    className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] ml-[59px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] object-contain w-[1%]"
                    alt="mobilealt"
                  />
                  <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] ml-[31.12px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`(671) 555-0110`}</Text>
                </Row>
                <Stack className="absolute bottom-[0] xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] h-[162px] lg:h-[95px] left-[0] w-[23%]">
                  <Image
                    src={"images/img_rectangle49_11.svg"}
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
          <Column className="items-start justify-start lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] mt-[200px] w-[100%]">
            <Text className="font-extrabold lg:mx-[435px] xl:mx-[498px] 2xl:mx-[560px] 3xl:mx-[672px] mx-[747px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-right uppercase w-[auto]">{`About Us`}</Text>
            <Column className="2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
              <Row className="items-start justify-center w-[100%]">
                <Text className="font-extrabold leading-lh14000 xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-right uppercase w-[27%]">{`Laborum magna nulla duis`}</Text>
                <Line className="bg-deep_orange_500 3xl:h-[113px] h-[125px] lg:h-[73px] xl:h-[84px] 2xl:h-[94px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] w-[3px]" />
                <Text className="font-normal leading-lh17000 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] mt-[1px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[26%]">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
              </Row>
            </Column>
          </Column>
          <List
            className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-3 min-h-[auto] mt-[104px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] mx-[auto] w-[61%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 items-center justify-end shadow-bs1 w-[100%]">
              <Column className="items-start justify-start xl:ml-[34px] 3xl:ml-[46px] ml-[52px] xl:mr-[35px] 3xl:mr-[47px] mr-[52.5px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:mx-[30px] 2xl:mx-[39px] w-[72%]">
                <Image
                  src={"images/img_bordernone_9.svg"}
                  className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[63px] w-[70px]"
                  alt="bordernone"
                />
                <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-extrabold mr-[1px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                    <Text className="font-normal leading-lh17000 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[100%]">{`Voluptate exercitation incididunt aliquip deserunt`}</Text>
                  </Column>
                </Column>
              </Column>
              <div className="bg-deep_orange_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] w-[100%]"></div>
            </Column>
            <Column className="bg-white_A700 items-center justify-end shadow-bs1 w-[100%]">
              <Column className="items-start justify-start xl:ml-[34px] 3xl:ml-[46px] ml-[52px] xl:mr-[35px] 3xl:mr-[47px] mr-[52.5px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:mx-[30px] 2xl:mx-[39px] w-[72%]">
                <Image
                  src={"images/img_bordernone_10.svg"}
                  className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[63px] w-[70px]"
                  alt="bordernone"
                />
                <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-extrabold mr-[1px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                    <Text className="font-normal leading-lh17000 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[100%]">{`Voluptate exercitation incididunt aliquip deserunt`}</Text>
                  </Column>
                </Column>
              </Column>
              <div className="bg-deep_orange_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] w-[100%]"></div>
            </Column>
            <Column className="bg-white_A700 items-center justify-end shadow-bs1 w-[100%]">
              <Column className="items-start justify-start xl:ml-[34px] 3xl:ml-[46px] ml-[52px] xl:mr-[35px] 3xl:mr-[47px] mr-[52.5px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:mx-[30px] 2xl:mx-[39px] w-[72%]">
                <Image
                  src={"images/img_bordernone_11.svg"}
                  className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[63px] w-[70px]"
                  alt="bordernone"
                />
                <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-extrabold mr-[1px] lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 text-left uppercase w-[auto]">{`Miles Esther`}</Text>
                    <Text className="font-normal leading-lh17000 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[100%]">{`Voluptate exercitation incididunt aliquip deserunt`}</Text>
                  </Column>
                </Column>
              </Column>
              <div className="bg-deep_orange_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] w-[100%]"></div>
            </Column>
          </List>
          <Text className="font-extrabold lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] mt-[200px] mx-[auto] text-center lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 uppercase w-[auto]">{`Project`}</Text>
          <Text className="font-extrabold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] mx-[auto] text-center lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 uppercase w-[auto]">{`Laborum magna nulla duis`}</Text>
          <Text className="font-normal leading-lh17000 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 w-[41%]">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
          <List
            className="lg:gap-[57px] xl:gap-[66px] 2xl:gap-[74px] 3xl:gap-[89px] gap-[99px] grid grid-cols-3 min-h-[auto] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[61%]"
            orientation="horizontal"
          >
            <Stack className="lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] h-[324px] w-[100%]">
              <Row className="absolute h-[max-content] inset-y-[0] items-start justify-center my-[auto] right-[22%] w-[41%]">
                <Text className="font-extrabold lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-indigo_900 text-right w-[auto]">{`75`}</Text>
                <Text className="font-bold lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] text-deep_orange_500 lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-left w-[auto]">{`%`}</Text>
              </Row>
              <CircularProgressbar
                className="absolute lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] h-[324px] inset-[0] overflow-visible rounded-radius50 shadow-bs1 w-[100%]"
                value="50"
                counterClockwise
                name="Group134"
                strokeWidth={1}
                styles={{
                  trail: { strokeWidth: 1, stroke: "#f5f5f5" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    "transform-origin": "center",
                    stroke: "#ff5e14",
                  },
                }}
              ></CircularProgressbar>
            </Stack>
            <Stack className="lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] h-[324px] w-[100%]">
              <Row className="absolute h-[max-content] inset-y-[0] items-start justify-center my-[auto] right-[22%] w-[41%]">
                <Text className="font-extrabold lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-indigo_900 text-right w-[auto]">{`90`}</Text>
                <Text className="font-bold lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] text-deep_orange_500 lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-left w-[auto]">{`%`}</Text>
              </Row>
              <CircularProgressbar
                className="absolute lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] h-[324px] inset-[0] overflow-visible rounded-radius50 shadow-bs1 w-[100%]"
                value="50"
                counterClockwise
                name="Group135"
                strokeWidth={1}
                styles={{
                  trail: { strokeWidth: 1, stroke: "#f5f5f5" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    "transform-origin": "center",
                    stroke: "#ff5e14",
                  },
                }}
              ></CircularProgressbar>
            </Stack>
            <Stack className="lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] h-[324px] w-[100%]">
              <Row className="absolute h-[max-content] inset-y-[0] items-start justify-center my-[auto] right-[22%] w-[41%]">
                <Text className="font-extrabold lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-indigo_900 text-right w-[auto]">{`65`}</Text>
                <Text className="font-bold lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] text-deep_orange_500 lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-left w-[auto]">{`%`}</Text>
              </Row>
              <CircularProgressbar
                className="absolute lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] h-[324px] inset-[0] overflow-visible rounded-radius50 shadow-bs1 w-[100%]"
                value="50"
                counterClockwise
                name="Group136"
                strokeWidth={1}
                styles={{
                  trail: { strokeWidth: 1, stroke: "#f5f5f5" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    "transform-origin": "center",
                    stroke: "#ff5e14",
                  },
                }}
              ></CircularProgressbar>
            </Stack>
          </List>
          <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]">
            <Row className="items-center justify-center w-[61%]">
              <Column className="items-center w-[28%]">
                <Text className="font-extrabold mx-[auto] text-center lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 uppercase w-[auto]">{`Laborum magna`}</Text>
                <Text className="font-bold 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-indigo_900 w-[auto]">{`Magna nulla`}</Text>
              </Column>
              <Column className="items-center ml-[100px] lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] w-[28%]">
                <Text className="font-extrabold mx-[auto] text-center lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 uppercase w-[auto]">{`Laborum magna`}</Text>
                <Text className="font-bold 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-indigo_900 w-[auto]">{`Magna nulla`}</Text>
              </Column>
              <Column className="items-center ml-[100px] lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] w-[28%]">
                <Text className="font-extrabold mx-[auto] text-center lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-indigo_900 uppercase w-[auto]">{`Laborum magna`}</Text>
                <Text className="font-bold 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-indigo_900 w-[auto]">{`Magna nulla`}</Text>
              </Column>
            </Row>
          </Row>
          <Stack className="bg-deep_orange_500 lg:h-[285px] xl:h-[326px] 2xl:h-[367px] 3xl:h-[440px] h-[488px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[61%]">
            <Image
              src={"images/img_maskgroup_5.svg"}
              className="absolute lg:h-[285px] xl:h-[326px] 2xl:h-[367px] 3xl:h-[440px] h-[488px] inset-[0] object-cover w-[100%]"
              alt="MaskGroup"
            />
            <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
              <div className="bg-gray_300 lg:h-[149px] xl:h-[171px] 2xl:h-[192px] 3xl:h-[230px] h-[255px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:w-[148px] xl:w-[170px] 2xl:w-[191px] 3xl:w-[229px] w-[255px]"></div>
              <Column className="items-start justify-start lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[50px] lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] w-[56%]">
                <Text className="font-normal leading-lh17000 not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[100%]">{`'Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.'`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] w-[30%]">
                  <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`Howard Arlene`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] not-italic lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[auto]">{`Finance Manager`}</Text>
                </Column>
              </Column>
              <Image
                src={"images/img_group24.svg"}
                className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mt-[144px] xl:mt-[164px] 2xl:mt-[185px] 3xl:mt-[222px] mt-[247px] object-contain w-[13%]"
                alt="Group24"
              />
            </Row>
          </Stack>
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
                        src={"images/img_chevronright_2.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-bold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`About Us`}</Text>
                    </Row>
                    <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Image
                        src={"images/img_chevronright_2.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Our Team`}</Text>
                    </Row>
                    <Column className="lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src={"images/img_chevronright_2.svg"}
                          className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                          alt="chevronright"
                        />
                        <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Pricing Plans`}</Text>
                      </Row>
                    </Column>
                    <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Image
                        src={"images/img_chevronright_2.svg"}
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                        alt="chevronright"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                    </Row>
                    <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                      <Image
                        src={"images/img_chevronright_2.svg"}
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
                  name="Group133"
                  placeholder={`Copyright © 2020. All right reserved`}
                ></Input>
                <Row className="absolute bottom-[31%] inset-x-[0] items-center justify-evenly top-[30%] w-[100%]">
                  <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Compatible With:`}</Text>
                  <Image
                    src={"images/img_frame116_11.svg"}
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

export default OurProcessPage;
