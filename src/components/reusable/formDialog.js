import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContactTabs from "@/components/libs/contact";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function FormDialog(props) {
  return (
    <div className="builderForm_dialog_outer">
    <React.Fragment>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <img src={props.src} loading="lazy"/> */}
        <div
          className={false ? "sidebar fixed property-contact-content" : "sidebar builder_form_dialog"}
          id="contact-id"
        >
          <div className="cont_inform">
            <h5>Intrested, Contact Builder</h5>
            <div className="txt_lg">
              <span></span> Signatures Avenue Pvt Limited
            </div>
          </div>
          <ContactTabs />
        </div>
      </BootstrapDialog>
    </React.Fragment>
    </div>
  );
}
