import {
  DialogTitle,
  DialogContent,
  Box,
  Button,
  Dialog,
  Divider,
  TextField,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import {
  FamilyContactBox,
  FamilyContactBoxItem,
  FamilyParentsBox,
  RoundedText,
} from "../TemplateStyle";
import { Send } from "@mui/icons-material";

const groomFamily = [
  {
    role: "신랑",
    name: "홍길동",
    phone: "010-1234-5678",
    email: "hong@gmail.com",
  },
  {
    role: "부",
    name: "길동부",
    phone: "010-1234-5678",
    email: "hong@gmail.com",
  },
  {
    role: "모",
    name: "길동모",
    phone: "010-1234-5678",
    email: "hong@gmail.com",
  },
];
const brideFamily = [
  {
    role: "신부",
    name: "김영희",
    phone: "010-1234-5678",
    email: "hong@gmail.com",
  },
  {
    role: "부",
    name: "영희부",
    phone: "010-1234-5678",
    email: "hong@gmail.com",
  },
  {
    role: "모",
    name: "영희모",
    phone: "010-1234-5678",
    email: "hong@gmail.com",
  },
];

export const FamillyContact = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <>
      <FamilyContactBox>
        <FamilyContactBoxItem>
          <RoundedText
            backgroundColor="rgb(165, 202, 223)"
            fontSize={16}
            fontWeight={600}
            color="#fff"
            my={2}
          >
            신랑
          </RoundedText>
          <Typography fontSize={16} mt={2}>
            홍길동
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            Hong Gil Dong
          </Typography>
          <FamilyParentsBox my={3}>
            <Typography
              fontSize={14}
              color="text.primary"
              flexBasis={"100%"}
              textAlign={"right"}
            >
              길동부
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              fontSize={14}
              color="text.primary"
              flexBasis={"100%"}
              textAlign={"left"}
            >
              길동모
            </Typography>
          </FamilyParentsBox>
        </FamilyContactBoxItem>
        <Divider sx={{ my: 2 }} />
        <FamilyContactBoxItem>
          <RoundedText
            backgroundColor="rgb(165, 202, 223)"
            fontSize={16}
            fontWeight={600}
            color="#fff"
            my={2}
          >
            신부
          </RoundedText>
          <Typography fontSize={16} mt={2}>
            김영희
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            Kim Young Hee
          </Typography>
          <FamilyParentsBox my={3}>
            <Typography
              fontSize={14}
              color="text.primary"
              flexBasis={"100%"}
              textAlign={"right"}
            >
              영희부
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              fontSize={14}
              color="text.primary"
              flexBasis={"100%"}
              textAlign={"left"}
            >
              영희모
            </Typography>
          </FamilyParentsBox>
        </FamilyContactBoxItem>
      </FamilyContactBox>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            background: "#f5f5f5",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>축하 연락하기</DialogTitle>
        <DialogContent>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            centered
            sx={{ mb: 2 }}
          >
            <Tab label="신랑에게" sx={{ width: "50%" }} />
            <Tab label="신부에게" sx={{ width: "50%" }} />
          </Tabs>
          {tab === 0 && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "& .MuiCard-root": {
                    borderRadius: "10px ",
                  },
                }}
              >
                <Card>
                  <CardContent>
                    <Typography>홍길동</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      <Button fullWidth variant="outlined">
                        문자 보내기
                      </Button>
                      <Button fullWidth variant="outlined">
                        전화 걸기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Typography>길동부</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      <Button fullWidth variant="outlined">
                        문자 보내기
                      </Button>
                      <Button fullWidth variant="outlined">
                        전화 걸기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Typography>길동모</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      <Button fullWidth variant="outlined">
                        문자 보내기
                      </Button>
                      <Button fullWidth variant="outlined">
                        전화 걸기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </>
          )}
          {tab === 1 && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "& .MuiCard-root": {
                    borderRadius: "10px ",
                  },
                }}
              >
                <Card>
                  <CardContent>
                    <Typography>김영희</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      <Button fullWidth variant="outlined">
                        문자 보내기
                      </Button>
                      <Button fullWidth variant="outlined">
                        전화 걸기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Typography>영희부</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      <Button fullWidth variant="outlined">
                        문자 보내기
                      </Button>
                      <Button fullWidth variant="outlined">
                        전화 걸기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Typography>영희모</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      <Button fullWidth variant="outlined">
                        문자 보내기
                      </Button>
                      <Button fullWidth variant="outlined">
                        전화 걸기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
