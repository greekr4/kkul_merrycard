"use client";

import {
  Typography,
  Box,
  Slider,
  Link,
  Divider,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { SectionBox } from "./TemplateStyle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CustomCalendar from "./CustomCalendar";
import CountDown from "./CountDown";
import { FamillyContact } from "./FamillyContact";
import LoadingPage from "@/component/loading/LoadingPage";
import AnimatedSection from "@/component/common/AnimatedSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  BusAlert,
  CarCrash,
  ContentCopy,
  FortOutlined,
  LocalParking,
  LocalParkingRounded,
  SettingsPhoneSharp,
  Work,
} from "@mui/icons-material";

export default function ClassicTemplate({
  groom,
  bride,
  date,
  time,
  place,
  message,
}: {
  groom?: string;
  bride?: string;
  date?: string;
  time?: string;
  place?: string;
  message?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [openGroom, setOpenGroom] = useState(false);
  const [openBride, setOpenBride] = useState(false);
  const [copied, setCopied] = useState("");

  // 갤러리 이미지 배열
  const galleryImages = [
    "/images/sample1.webp",
    "/images/sample2.webp",
    "/images/sample3.webp",
    "/images/sample4.webp",
    "/images/sample5.webp",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // 계좌번호 복사 함수
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  if (!mounted) return <LoadingPage />;

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          bgcolor: "rgb(195, 214, 224)", // 전체 배경색
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 가운데 카드(모바일 화면) */}
        <Box
          sx={{
            width: { xs: "100vw", sm: 400 },
            height: { xs: "100dvh", sm: 700 },
            bgcolor: "rgb(237,236,231)",
            boxShadow: { sm: 6 },
            borderRadius: { sm: 4 },
            overflow: "hidden",
            position: "relative",
            my: { xs: 0, sm: 4 },
          }}
        >
          <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel
            effect="slide"
            modules={[Mousewheel, EffectFade, Pagination]}
            style={{ width: "100%", height: "100%" }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {/* 인트로 섹션 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection
                  isVisible={activeIndex === 0}
                  backgroundColor="rgb(237,236,231)"
                >
                  {/* 인트로 이미지 */}
                  <Box
                    sx={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      width: "100%",
                      height: { xs: "100dvh", sm: 700 },
                      backgroundImage: `url("/images/intro.jpg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
            {/* 인트로2 섹션 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection isVisible={activeIndex === 1}>
                  {/* 인트로 이미지2 */}
                  <Box
                    sx={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      width: "100%",
                      height: { xs: "100dvh", sm: 700 },
                      backgroundImage: `url("/images/intro2.jpg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
            {/* 달력 섹션 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection isVisible={activeIndex === 2}>
                  <Box>
                    <Typography
                      fontSize={24}
                      fontWeight={500}
                      textAlign="center"
                      mb={4}
                    >
                      WEDDING DAY
                    </Typography>
                    <CustomCalendar date={date || ""} />
                    <CountDown date={date || ""} />
                  </Box>
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
            {/* 양가 가족 섹션 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection isVisible={activeIndex === 3}>
                  <FamillyContact />
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
            {/* 사진갤러리 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection isVisible={activeIndex === 4}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      fontSize={24}
                      fontWeight={500}
                      textAlign="center"
                      mb={4}
                    >
                      PHOTO GALLERY
                    </Typography>
                    <Box
                      sx={{
                        width: "400px",
                        height: "350px",
                        overflow: "hidden",
                        borderRadius: "15px",
                      }}
                    >
                      <Swiper
                        key={"swiper"}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={false}
                        style={{ overflow: "visible" }}
                        loop={true}
                      >
                        {galleryImages?.map(
                          (subitem: string, index: number) => (
                            <SwiperSlide
                              key={`banner-${subitem}-${index}`}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "350px",
                                  height: "350px",
                                }}
                              >
                                <Box
                                  width="100%"
                                  height="100%"
                                  style={{
                                    borderRadius: "15px",
                                    backgroundImage: `url(${subitem})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                />
                              </Box>
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </Box>
                    <Typography
                      fontSize={14}
                      textAlign="center"
                      color="rgb(167, 167, 167)"
                      mt={4}
                    >
                      사진을 클릭하시면 전체 화면 보기가 가능합니다
                    </Typography>
                  </Box>
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
            {/* 찾아오는 길 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection isVisible={activeIndex === 5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      fontSize={24}
                      fontWeight={500}
                      textAlign="center"
                      mb={2}
                    >
                      LOCATION
                    </Typography>
                    <Typography fontSize={16} textAlign="center" mb={1}>
                      아펠가모 공덕
                    </Typography>
                    <Typography
                      fontSize={16}
                      textAlign="center"
                      mb={1}
                      color="#999"
                    >
                      마포구 마포대로 92 효성해링턴스퀘어 B동 6~7층
                    </Typography>
                    <Box
                      sx={{
                        width: "400px",
                        height: "200px",

                        backgroundColor: "rgb(255, 216, 21)",
                      }}
                    >
                      지도영역
                    </Box>
                    <Box mt={2} width="100%" px={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                        color="rgb(89, 194, 247)"
                      >
                        <CarCrash sx={{ fontSize: 22 }} />
                        <Typography fontSize={16} textAlign="center" pl={1}>
                          자차
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          mt: 1,
                        }}
                        color="rgb(88, 88, 88)"
                      >
                        <Typography fontSize={14} textAlign="center">
                          내비게이션 : '서울 웨스틴조선호텔' 검색
                        </Typography>
                        <Typography fontSize={14} textAlign="center">
                          서울시 중구 소공로 106 서울 웨스틴조선호텔
                        </Typography>
                      </Box>
                    </Box>
                    <Box mt={2} width="100%" px={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                        color="rgb(89, 194, 247)"
                      >
                        <BusAlert sx={{ fontSize: 22 }} />
                        <Typography fontSize={16} textAlign="center" pl={1}>
                          버스
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          mt: 1,
                        }}
                        color="rgb(88, 88, 88)"
                      >
                        <Typography fontSize={14} textAlign="center">
                          172(우리은행종로지점 방면)
                        </Typography>
                        <Typography fontSize={14} textAlign="center">
                          서울광장역 하차 → 데미타스커피 왼쪽 방면 → 도보 5분
                        </Typography>
                      </Box>
                    </Box>
                    <Box mt={2} width="100%" px={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                        color="rgb(89, 194, 247)"
                      >
                        <LocalParking sx={{ fontSize: 22 }} />
                        <Typography fontSize={16} textAlign="center" pl={1}>
                          주차
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          mt: 1,
                        }}
                        color="rgb(88, 88, 88)"
                      >
                        <Typography fontSize={14} textAlign="center">
                          알아서
                        </Typography>
                        <Typography fontSize={14} textAlign="center">
                          잘
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
            {/* 계좌번호 */}
            <SwiperSlide>
              <SectionBox>
                <AnimatedSection isVisible={activeIndex === 6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: "10px",
                        borderBottom: "2px solid #ccc",
                        width: "100px",
                        mb: 10,
                      }}
                    />
                    <Box>
                      <Typography fontSize={16} textAlign="center" mb={2}>
                        마음 전하실 곳
                      </Typography>
                      <Typography
                        fontSize={14}
                        textAlign="center"
                        mb={0}
                        color="#999"
                      >
                        참석이 어려우신 분들을 위해 기재했습니다
                      </Typography>
                      <Typography
                        fontSize={14}
                        textAlign="center"
                        mb={2}
                        color="#999"
                      >
                        너그러운 마음으로 양해 부탁드립니다
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexDirection: "column",
                        mt: 2,
                        width: "100%",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={() => setOpenGroom(true)}
                      >
                        신랑측에게
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={() => setOpenBride(true)}
                      >
                        신부측에게
                      </Button>
                    </Box>
                  </Box>
                </AnimatedSection>
              </SectionBox>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>

      {/* 신랑측 계좌번호 Drawer */}
      <Drawer
        open={openGroom}
        onClose={() => setOpenGroom(false)}
        anchor="bottom"
        PaperProps={{
          sx: {
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            padding: "20px",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography fontSize={18} fontWeight={500} mb={3} textAlign="center">
            신랑측 계좌번호
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              신랑 홍길동
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography fontSize={14} color="#666">
                신한은행 110-123-456789
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleCopy("신한은행 110-123-456789")}
                color={
                  copied === "신한은행 110-123-456789" ? "primary" : "default"
                }
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              신랑 부 홍판서
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography fontSize={14} color="#666">
                국민은행 123-45-6789012
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleCopy("국민은행 123-45-6789012")}
                color={
                  copied === "국민은행 123-45-6789012" ? "primary" : "default"
                }
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              신랑 모 심판사
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography fontSize={14} color="#666">
                우리은행 1002-456-789123
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleCopy("우리은행 1002-456-789123")}
                color={
                  copied === "우리은행 1002-456-789123" ? "primary" : "default"
                }
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* 신부측 계좌번호 Drawer */}
      <Drawer
        open={openBride}
        onClose={() => setOpenBride(false)}
        anchor="bottom"
        PaperProps={{
          sx: {
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            padding: "20px",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography fontSize={18} fontWeight={500} mb={3} textAlign="center">
            신부측 계좌번호
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              신부 김영희
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography fontSize={14} color="#666">
                카카오뱅크 3333-12-3456789
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleCopy("카카오뱅크 3333-12-3456789")}
                color={
                  copied === "카카오뱅크 3333-12-3456789"
                    ? "primary"
                    : "default"
                }
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              신부 부 김사장
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography fontSize={14} color="#666">
                하나은행 321-45-6789012
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleCopy("하나은행 321-45-6789012")}
                color={
                  copied === "하나은행 321-45-6789012" ? "primary" : "default"
                }
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
