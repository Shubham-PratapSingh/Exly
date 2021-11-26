import React from "react";
import { Avatar, Typography, Box, TextField, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextCard from "../../components/TextCard/TextCard";
import TextImageCard from "../../components/TextImageCard/TextImageCard";
import "./Homepage.css";

const Homepage = () => {
  return (
    <Box className="homepage">
      <Box sx={{ width: "auto", m: "auto" }} className="homeSection">
        <Box sx={{ mb: 3 }}>
          <Avatar
            alt="Profile Image"
            src="https://cdn.beacons.ai/user_content/kMlgiozsvdedoRVmTrJYfQFGsxU2/profile_digbijay.png?t=1637147188994"
            className="border"
            sx={{ width: 167, height: 167, m: "auto" }}
          />
          <Typography
            sx={{ textAlign: "center", mt: 2, fontSize: 21, fontWeight: 600 }}
          >
            SHURU FIT
          </Typography>
          <Typography
            sx={{ textAlign: "center", m: 1, fontSize: 16, fontWeight: 600 }}
          >
            ACE Certified Coach | Carpediem | Online Training
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <MusicNoteIcon sx={{ p: 1, fontSize: 30 }} />
            <MailOutlineIcon sx={{ p: 1, fontSize: 30 }} />
            <InstagramIcon sx={{ p: 1, fontSize: 30 }} />
            <YouTubeIcon sx={{ p: 1, fontSize: 30 }} />
            <TwitterIcon sx={{ p: 1, fontSize: 30 }} />
            <FacebookIcon sx={{ p: 1, fontSize: 30 }} />
          </Box>
        </Box>
        <TextCard>
          <Box>
            <Typography className="para">
              {" "}
              Welcome to Online Training.
            </Typography>
            <Typography className="para">
              Join me to get India's Best Workout Program and Diet plan.
            </Typography>
            <Typography className="para">
              -International certified Trainer Accredited by ACE{" "}
            </Typography>
            <Typography className="para">
              -Graduate from Delhi University
            </Typography>
            <Typography className="para">
              -Specialise in Fat loss, Strength and conditioning
            </Typography>
            <Typography className="para">
              -5 Years of Experience in Fitness Industry{" "}
            </Typography>
            <Typography className="para">-Popularly known as SHURU</Typography>
            <Typography className="para">
              -Helps in identifying strength and weakness of a person
            </Typography>
            <Typography className="para">
              -Support and help client achieving Fitness Goals
            </Typography>
          </Box>
        </TextCard>
        <Box sx={{ mb: 3 }}>
          <iframe
            src="https://youtube.com/embed/R6aWi65H6UI?start=348"
            title="fitness"
            width="100%"
            height="300px"
          ></iframe>
        </Box>
        <TextCard>
          <Box>
            <Typography> 1 on 1 Appointments &#62; &#62;</Typography>
          </Box>
        </TextCard>

        <TextImageCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy8WGzAkNxB9SS_XLA5qoMse6bjBwgKTBcQ&usqp=CAU"
          text="1-1 Consultation for 5 weeks"
          subtext="RS. 3000"
        />

        <TextCard>
          <Box>
            <Typography> Programs 💪 &#62; &#62;</Typography>
          </Box>
        </TextCard>

        <TextImageCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy8WGzAkNxB9SS_XLA5qoMse6bjBwgKTBcQ&usqp=CAU"
          text="Lose 5kg in 5 weeks"
          subtext="RS.1299 RS.2000"
        />
        <TextCard>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                textAlign: "center",
                pb: 2,
                fontSize: "18px",
              }}
            >
              Get in Touch
            </Typography>
            <TextField
              fullWidth
              label="Full Name"
              id="name"
              sx={{
                border: "2px solid white",
                borderRadius: "10px",
                mb: 2,
              }}
            />
            <TextField
              sx={{
                border: "2px solid white",
                borderRadius: "10px",
                mb: 2,
              }}
              fullWidth
              label="Email"
              id="email"
            />
            <Button variant="contained" id="button">
              Submit
            </Button>
          </Box>
        </TextCard>
        <Box>
          <img
            src="https://assets.website-files.com/5f641ab4c449d55eaca807b4/5f641ab4c449d51de1a807c5_full_logo.svg"
            style={{
              width: "100px",
              display: "block",
              margin: "auto",
              filter: "invert(1)",
              marginTop: "70px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
