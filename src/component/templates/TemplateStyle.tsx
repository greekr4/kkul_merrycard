import { Box, Card, styled, Typography } from "@mui/material";

export const SectionBox = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgb(237,236,231)",
});

export const CountDownCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  padding: "10px",
  width: "70px",
  height: "90px",
});

export const RoundedText = styled(Typography)(
  ({ backgroundColor }: { backgroundColor: string }) => ({
    borderRadius: "30px",
    backgroundColor: backgroundColor,
    padding: "4px 20px",
    width: "fit-content",
  })
);

export const FamilyContactBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "80%",
});

export const FamilyContactBoxItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
});

export const FamilyParentsBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  width: "100%",
});
