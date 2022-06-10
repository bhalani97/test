import React from "react";

import { BarData } from "./chartData.js";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const BlogPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-lato mx-[auto] w-[100%]">
        <Column className="items-start justify-start w-[100%]">
          <Column className="items-center w-[100%]">
            <header className="w-[100%]">
              <Stack className="lg:h-[124px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] h-[211px] w-[100%]">
                <Stack className="absolute lg:h-[124px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] h-[211px] inset-[0] w-[100%]">
                  <Row className="absolute bg-gray_100 items-start justify-start top-[0] w-[100%]">
                    <Image
                      src={"images/img_envelopeopent_8.svg"}
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[32.5px] lg:ml-[277px] xl:ml-[316px] 2xl:ml-[356px] 3xl:ml-[427px] ml-[475px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] mt-[25.5px] object-contain lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px] w-[30px]"
                      alt="envelopeopent"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`youremail@gmail.com`}</Text>
                    <Image
                      src={"images/img_mobilealt_8.svg"}
                      className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] ml-[59px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] object-contain w-[1%]"
                      alt="mobilealt"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] ml-[31.12px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`(671) 555-0110`}</Text>
                  </Row>
                  <Stack className="absolute bottom-[0] xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] h-[162px] lg:h-[95px] left-[0] w-[23%]">
                    <Image
                      src={"images/img_rectangle49_8.svg"}
                      className="absolute xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] h-[162px] lg:h-[95px] inset-[0] object-cover w-[100%]"
                      alt="Rectangle49"
                    />
                    <Row className="absolute h-[max-content] inset-y-[0] items-end justify-center left-[12%] my-[auto] w-[66%]">
                      <div className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]">
                        <ResponsiveContainer>
                          <BarChart data={BarData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <RechartsTooltip />
                            <RechartsLegend />
                            <Bar dataKey="c0" fill="#6666ff" />
                            <Bar dataKey="c1" fill="#4da6ff" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
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
            <Stack className="bg-gray_300 lg:h-[405px] xl:h-[463px] 2xl:h-[521px] 3xl:h-[625px] h-[693px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] mt-[200px] mx-[auto] w-[61%]">
              <Image
                src={"images/img_play.svg"}
                className="absolute xl:h-[103px] 2xl:h-[115px] 3xl:h-[138px] h-[153px] lg:h-[90px] inset-x-[44%] inset-y-[39%] object-contain w-[12%]"
                alt="play"
              />
            </Stack>
          </Column>
          <Text className="font-extrabold lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] lg:mx-[219px] xl:mx-[251px] 2xl:mx-[282px] 3xl:mx-[339px] mx-[377px] lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Laborum magna nulla`}</Text>
          <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Text className="font-normal leading-lh17000 mx-[auto] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[61%]">{`Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation deserunt...`}</Text>
            <List
              className="gap-[0] min-h-[auto] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[58%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] my-[34px] shadow-bs1 w-[100%]">
                <div className="bg-gray_300 lg:h-[247px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[381px] h-[422px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] ml-[23.5px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] my-[22px] lg:w-[246px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[380px] w-[422px]"></div>
                <Column className="items-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[21px] mr-[23.5px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[54%]">
                  <Text className="font-extrabold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Laborum magna nulla`}</Text>
                  <Text className="font-normal leading-lh17000 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[100%]">{`Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation deserunt...`}</Text>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Column className="w-[100%]">
                        <Line className="bg-gray_200 h-[3px] w-[100%]" />
                      </Column>
                      <Row className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[94%]">
                        <div className="bg-gray_300 lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[82px] rounded-radius50 lg:w-[47px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px] w-[82px]"></div>
                        <Column className="items-start justify-start lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] w-[35%]">
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Paula Ramsey`}</Text>
                          <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`September 24, 2020`}</Text>
                        </Column>
                        <Image
                          src={"images/img_frame121.svg"}
                          className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[156px] ml-[174px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain w-[15%]"
                          alt="Frame121"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] my-[34px] shadow-bs1 w-[100%]">
                <div className="bg-gray_300 lg:h-[247px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[381px] h-[422px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] ml-[23.5px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] my-[22px] lg:w-[246px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[380px] w-[422px]"></div>
                <Column className="items-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[21px] mr-[23.5px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[54%]">
                  <Text className="font-extrabold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Laborum magna nulla`}</Text>
                  <Text className="font-normal leading-lh17000 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[100%]">{`Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation deserunt...`}</Text>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Column className="w-[100%]">
                        <Line className="bg-gray_200 h-[3px] w-[100%]" />
                      </Column>
                      <Row className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[94%]">
                        <div className="bg-gray_300 lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[82px] rounded-radius50 lg:w-[47px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px] w-[82px]"></div>
                        <Column className="items-start justify-start lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] w-[35%]">
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Paula Ramsey`}</Text>
                          <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`September 24, 2020`}</Text>
                        </Column>
                        <Image
                          src={"images/img_frame121_1.svg"}
                          className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[156px] ml-[174px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain w-[15%]"
                          alt="Frame121"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] my-[34px] shadow-bs1 w-[100%]">
                <div className="bg-gray_300 lg:h-[247px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[381px] h-[422px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] ml-[23.5px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] my-[22px] lg:w-[246px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[380px] w-[422px]"></div>
                <Column className="items-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[21px] mr-[23.5px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[54%]">
                  <Text className="font-extrabold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs24 xl:text-fs28 2xl:text-fs31 3xl:text-fs37 text-fs42 text-indigo_900 text-left uppercase w-[auto]">{`Laborum magna nulla`}</Text>
                  <Text className="font-normal leading-lh17000 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[100%]">{`Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation deserunt...`}</Text>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Column className="w-[100%]">
                        <Line className="bg-gray_200 h-[3px] w-[100%]" />
                      </Column>
                      <Row className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[94%]">
                        <div className="bg-gray_300 lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[82px] rounded-radius50 lg:w-[47px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px] w-[82px]"></div>
                        <Column className="items-start justify-start lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] w-[35%]">
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`Paula Ramsey`}</Text>
                          <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left w-[auto]">{`September 24, 2020`}</Text>
                        </Column>
                        <Image
                          src={"images/img_frame121_2.svg"}
                          className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[156px] ml-[174px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain w-[15%]"
                          alt="Frame121"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </List>
            <Row className="items-center justify-center 2xl:mt-[102px] 3xl:mt-[122px] mt-[136px] lg:mt-[79px] xl:mt-[90px] mx-[auto] w-[54%]">
              <Row className="items-center justify-between w-[100%]">
                <div className="w-[19%] input-wrap">
                  <Image
                    src={"images/img_arrow_down_null_glyph.svg"}
                    className="absolute h-[30px] left-[45px] lg:h-[18px] lg:left-[26px] xl:h-[21px] xl:left-[30px] 2xl:h-[23px] 2xl:left-[33px] 3xl:h-[28px] 3xl:left-[40px] my-[auto] inset-y-[0]"
                    alt="Arrow Down / null / Glyph: "
                  />
                  <Button className="bg-deep_orange_500 font-bold lg:pb-[20px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] pb-[35.1px] 3xl:pl-[108px] pl-[120px] lg:pl-[70px] xl:pl-[80px] 2xl:pl-[90px] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] pt-[34.1px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[100%]">{`Before`}</Button>
                </div>
                <Row className="items-start justify-center lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] w-[34%]">
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] not-italic opacity-op35 lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left lg:tracking-ls17 xl:tracking-ls20 2xl:tracking-ls23 3xl:tracking-ls27 tracking-ls30800000000000004 w-[auto]">{`1`}</Text>
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] not-italic opacity-op6 lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left lg:tracking-ls17 xl:tracking-ls20 2xl:tracking-ls23 3xl:tracking-ls27 tracking-ls30800000000000004 w-[auto]">{`2`}</Text>
                  <Text className="font-bold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] text-deep_orange_500 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left lg:tracking-ls19 xl:tracking-ls22 2xl:tracking-ls25 3xl:tracking-ls30 tracking-ls336 w-[auto]">{`3`}</Text>
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] ml-[71px] not-italic opacity-op6 lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left lg:tracking-ls17 xl:tracking-ls20 2xl:tracking-ls23 3xl:tracking-ls27 tracking-ls30800000000000004 w-[auto]">{`4`}</Text>
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] not-italic opacity-op35 lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-indigo_900 text-left lg:tracking-ls17 xl:tracking-ls20 2xl:tracking-ls23 3xl:tracking-ls27 tracking-ls30800000000000004 w-[auto]">{`5`}</Text>
                </Row>
                <div className="w-[19%] input-wrap">
                  <Image
                    src={"images/img_arrow_down_null_glyph_1.svg"}
                    className="absolute h-[30px] right-[61px] lg:h-[18px] lg:right-[35px] xl:h-[21px] xl:right-[40px] 2xl:h-[23px] 2xl:right-[45px] 3xl:h-[28px] 3xl:right-[54px] my-[auto] inset-y-[0]"
                    alt="Arrow Down / null / Glyph: "
                  />
                  <Button className="bg-deep_orange_500 font-bold xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.6px] lg:pr-[106px] xl:pr-[121px] 2xl:pr-[136px] 3xl:pr-[163px] pr-[182px] xl:pt-[18px] 2xl:pt-[20px] 3xl:pt-[24px] pt-[27.6px] lg:py-[16px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-white_A700 w-[100%]">{`Next`}</Button>
                </div>
              </Row>
            </Row>
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
                          src={"images/img_chevronright_7.svg"}
                          className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                          alt="chevronright"
                        />
                        <Text className="font-bold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`About Us`}</Text>
                      </Row>
                      <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                        <Image
                          src={"images/img_chevronright_8.svg"}
                          className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                          alt="chevronright"
                        />
                        <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Our Team`}</Text>
                      </Row>
                      <Column className="lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_chevronright_8.svg"}
                            className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15px] lg:h-[9px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] object-contain w-[6%]"
                            alt="chevronright"
                          />
                          <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Pricing Plans`}</Text>
                        </Row>
                      </Column>
                      <Row className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                        <Image
                          src={"images/img_chevronright_8.svg"}
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
                    name="Group109"
                    placeholder={`Copyright © 2020. All right reserved`}
                  ></Input>
                  <Row className="absolute bottom-[31%] inset-x-[0] items-center justify-evenly top-[30%] w-[100%]">
                    <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left text-white_A700 w-[auto]">{`Compatible With:`}</Text>
                    <Image
                      src={"images/img_frame116_8.svg"}
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[6%]"
                      alt="Frame116"
                    />
                  </Row>
                </Stack>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default BlogPage;
