import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Dot from "@/app/_components/Dot";
import Communication_Pic from "@/public/images/home-s3/cummunication-pic.jpg";
import Design_Pic from "@/public/images/home-s3/design-pic.jpg";
import Dream_Pic from "@/public/images/home-s3/dream-pic.jpg";

const CardData = [
  {
    imgUrl: Design_Pic.src,
    title: "Design",
    desc: [
      "Not a simple repetition of design templates",
      "We consider the best design for our customers",
      "Experience the design just for you",
    ],
    videoUrl: "/images/home-s3/design-vid.mp4",
  },
  {
    imgUrl: Communication_Pic.src,
    title: "Communication",
    desc: [
      "Have you ever experienced",
      "fear of communication?",
      "We always keep the door open",
      "for communication",
    ],
    videoUrl: "/images/home-s3/cummunication-vid.mp4",
  },
  {
    imgUrl: Dream_Pic.src,
    title: "Dream",
    desc: [
      "Build your own web-site",
      "which you imagine by PCR-Lab",
      "And take the moon of your imagination",
    ],
    videoUrl: "/images/home-s3/dream-vid.mp4",
  },
];

const videoVariants = {
  initial: {
    scale: 0,
    clipPath: "circle(0% at 50% 50%)",
  },
  animate: {
    scale: 1,
    clipPath: "circle(100% at 50% 50%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    scale: 0,
    clipPath: "circle(0% at 50% 50%)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Section3() {
  const [hover, setHover] = useState({ isHover: false, id: "" });
  const [videoPlaying, setVideoPlaying] = useState({
    isPlaying: false,
    id: "",
  });

  const initState = () => {
    setHover({ isHover: false, id: "" });
    setVideoPlaying({ isPlaying: false, id: "" });
  };

  return (
    <Wrapper>
      <Title>
        <span style={{ zIndex: 2, position: "relative" }}>
          What ways of creativity can I use?
        </span>
        <Dot color="#06C755" top={-10} left={370} />
      </Title>

      <Cards>
        {CardData.map((data) => {
          return (
            <Card
              key={data.title}
              onHoverStart={() => setHover({ isHover: true, id: data.title })}
              onHoverEnd={() => initState()}
              animate={{
                outline:
                  hover.id === data.title
                    ? "2px solid #06C755"
                    : "1px solid #e9e9e9",
              }}
              whileHover={{
                scale: 1.06,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              onAnimationComplete={() => {
                if (hover.id === data.title) {
                  setVideoPlaying({ isPlaying: true, id: data.title });
                }
              }}
            >
              <Img src={data.imgUrl} alt="" />

              <CardText>
                <CardTitle>{data.title}</CardTitle>
                <CardDesc>
                  {data.desc.map((desc) => {
                    return <span>{desc}</span>;
                  })}
                </CardDesc>
              </CardText>

              <AnimatePresence initial={true}>
                {videoPlaying.id === data.title && (
                  <VideoWrapper
                    variants={videoVariants}
                    key={data.title}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Video autoPlay muted loop playsInline>
                      <source src={data.videoUrl} />
                    </Video>
                  </VideoWrapper>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "60px",
    width: "100%",
    display: "flex",
    maxWidth: "1920px",
    minHeight: "100dvh",
    alignItems: "center",
    padding: "120px 24px",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Title = styled(Box)(() => {
  return {
    zIndex: 2,
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "56px",
    color: "#232323",
    position: "relative",
    letterSpacing: "-0.8px",
  };
});

const Cards = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
});

const Card = styled(motion.div)(() => {
  return {
    width: "314px",
    height: "368px",
    display: "flex",
    borderRadius: "20px",
    flexDirection: "column",
    outline: "1px solid #e9e9e9",
  };
});

const Img = styled("img")(() => {
  return {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  };
});

const CardText = styled(Box)(() => {
  return {
    gap: "14px",
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    padding: "32px 12px",
    flexDirection: "column",
  };
});

const CardTitle = styled(Box)(() => {
  return {
    fontSize: "24px",
    fontWeight: 600,
    color: "#232323",
    lineHeight: "24px",
  };
});

const CardDesc = styled(Box)(() => {
  return {
    height: "100%",
    color: "#999",
    display: "flex",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    alignItems: "center",
    flexDirection: "column",
    letterSpacing: "-0.2px",
    justifyContent: "center",
  };
});

const VideoWrapper = styled(motion.div)(() => {
  return {
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "170px",
    overflow: "hidden",
    position: "absolute",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  };
});

const Video = styled(motion.video)(() => {
  return {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
});
