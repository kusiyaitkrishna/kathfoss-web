import BackgroundAnimation from "@/common/components/ParticleAnimation/BackgroundAnimation";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Animated Background */}
      <BackgroundAnimation />
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </>
  );
}
