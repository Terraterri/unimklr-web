import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import Image from "next/image";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

   const galleySlide = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle> */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <Image
          className="desk-ly"
                src={"/assets/img/property/elite property (1).jpg"}
                width={1250}
          height={430}
           
                alt="property"
              /> */}
        <DialogContent dividers>
          <Carousel
            responsive={galleySlide}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div className="listing-itemm">
              <Image
                src={"/assets/img/property/elite property (1).jpg"}
                className="d-block w-100"
                width={1250}
                height={430}
                alt="property"
              />
            </div>
            <div className="listing-itemm">
              <Image
                src={"/assets/img/property/elite property (2).jpg"}
                className="d-block w-100"
                width={1250}
                height={430}
                alt="property"
              />
            </div>
            <div className="listing-itemm">
              <Image
                src={"/assets/img/property/elite property (3).jpg"}
                className="d-block w-100"
                width={1250}
                height={430}
                alt="property"
              />
            </div>
          </Carousel>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
