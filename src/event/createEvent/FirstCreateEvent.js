import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonContainer, Label } from "../pages/DefineAudienceStyled";
import {
  AbsolutePrimaryButton,
  PrimaryButton3,
} from "../../components/button/button";
import { EventSubSection } from "../createEvent/TimeLineEventsStyled";
import { Input, InputText, MyTextArea } from "./FirstCreateEventStyled";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetSubtitle,
  BudgetTitle1,
  BudgetTitle2,
  BudgetUpload,
  FormContainer,
  FileWrapper,
  CustomWrapper,
  Supported,
} from "../budgetInventory/BudgetStyled";
import { editGenerally } from "../../redux/slices/createEventSlice";
import {
  RadioButton,
  RadioButtonWrapper,
  Valueholder,
} from "../../globalStyles";
import { Asterix } from "../../profile/organiserProfile/OrganiserProfileStyled";

const FirstCreateEvent = ({ padding }) => {
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state.createEvent);

  const change = (e) => {
    dispatch(editGenerally({ name: e.target.name, value: e.target.value }));
  };

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      data.append("resource_type", "raw");
      setLoading(true);
      setIsSuccess(false);
      setSelectedFile(null);
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/raw/upload",
          data
        );
        const uploadedBanner = response.data;
        // console.log(uploadedBanner.secure_url);
        if (uploadedBanner.secure_url) {
          setFile(uploadedBanner.secure_url);
          setLoading(false);
          dispatch(
            editGenerally({
              name: e.target.name,
              value: uploadedBanner.secure_url,
            })
          );
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("**ERROR UPLOADING FILE!**");
        console.log(error);
      }
    }
    setSelectedFile(e.target.files[0]);
    localStorage.setItem("banner", e.target.files[0].name);
  };
  useEffect(() => {
    const bannerData = localStorage.getItem("banner");
    if (bannerData) {
      setSelectedFile({ name: bannerData });
    }
  }, []);
  useEffect(() => {
    if (
      state.eventName &&
      state.eventTheme &&
      state.estimatedAttendance &&
      state.eventDescription
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    state.eventName,
    state.eventTheme,
    state.estimatedAttendance,
    state.eventDescription,
  ]);
  useEffect(() => {
    // console.log(state);
    const MAX_FILE_SIZE = 1024; // 1MB
    if (!state?.eventBannerUrl) {
      setErrorMsg("*Please a choose file*");
      setIsSuccess(false);
      return;
    }
    const fileSizeKiloBytes = file.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than maximum limit*");
      setIsSuccess(false);
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
  }, [file]);
  const handleSubmit = async function (e) {
    e.preventDefault();
    navigate("/createevent/eventdetails/2");
    // console.log(state);
  };

  return (
    <>
      <BudgetInventoryContainer style={{ padding: padding }}>
        {location.pathname === "/eventPlanPreview" ? null : (
          <BudgetInventoryHeader>
            <BudgetTitle1>Create Event</BudgetTitle1>
            <BudgetInventorySubtitle>
              Capture and share every information needed to make your event
              proposal desirable of attracting sponsorships.
            </BudgetInventorySubtitle>
          </BudgetInventoryHeader>
        )}

        <BudgetSection>
          <BudgetTitle2>Basic info</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle>Event Banner</BudgetSubtitle>
            <BudgetInventorySubtitle>
              Select a catchy banner that reflects the essence of your event.
            </BudgetInventorySubtitle>

            <FormContainer>
              <FileWrapper>
                <CustomWrapper>
                  <input
                    type="file"
                    style={{ cursor: "pointer" }}
                    onChange={handleFileChange}
                    name="eventBannerUrl"
                    defaultValue={file}
                    // defaultValue={state?.eventBannerUrl}
                  />
                </CustomWrapper>
                <PrimaryButton3>Upload</PrimaryButton3>
              </FileWrapper>

              {isSuccess ? null : (
                <>
                  <Supported>
                    Support files; JPG, PNG, JPEG, DOCX, PDF, CSV
                  </Supported>
                  <Supported
                    style={{
                      color: "#ff2957",
                    }}
                  >
                    Not more than 1mb
                  </Supported>
                </>
              )}
              <BudgetInventorySubtitle>
                {selectedFile && `${selectedFile.name}`}
              </BudgetInventorySubtitle>
              {isSuccess ? (
                <div
                  style={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <BudgetInventorySubtitle
                    style={{ color: "green", marginRight: "1rem" }}
                  >
                    File uploaded successfully
                  </BudgetInventorySubtitle>
                </div>
              ) : null}
              {loading ? (
                <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                  Loading...
                </h4>
              ) : null}
              <p style={{ color: "#ff2957", fontSize: "16px" }}>
                {!file && errorMsg}
              </p>
            </FormContainer>

            <EventSubSection>
              <InputText>Event Name</InputText>
              <Input
                type="text"
                placeholder="Enter your Event Name"
                name="eventName"
                onChange={change}
                defaultValue={state.eventName}
              />
            </EventSubSection>
            {/* input section  */}
            <EventSubSection>
              <InputText>Event Theme</InputText>
              <Input
                type="text"
                placeholder="Enter your Event Theme"
                name="eventTheme"
                onChange={change}
                defaultValue={state?.eventTheme}
              />
            </EventSubSection>
            {/* input section  */}
            <EventSubSection>
              <InputText>Event Category</InputText>

              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="eventCategory"
                    id="corporate"
                    onChange={change}
                    defaultValue="Corporate Event"
                    checked={
                      state.eventCategory?.includes("Corporate Event")
                        ? true
                        : false
                    }
                  />
                  <Label htmlFor="corporate">Corporate Event</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="eventCategory"
                    id="nonCorporate"
                    onChange={change}
                    defaultValue="Non-Corporate Event"
                    checked={
                      state.eventCategory?.includes("Non-Corporate Event")
                        ? true
                        : false
                    }
                  />
                  <Label htmlFor="nonCorporate">Non-Corporate Event</Label>
                </Valueholder>
              </RadioButtonWrapper>
              {/* input section  */}
            </EventSubSection>
            <EventSubSection>
              <InputText>Estimated Attendance</InputText>
              <Input
                type="number"
                placeholder="IN FIGURES: Estimated attendance to be present"
                name="estimatedAttendance"
                onChange={change}
                defaultValue={state?.estimatedAttendance}
              />
            </EventSubSection>
            {/* input section  */}
            <EventSubSection>
              <InputText>
                Event description
                <BudgetInventorySubtitle>
                  What is the purpose of this event{" "}
                  <Asterix style={{ fontSize: "12px" }}>
                    {" - "}
                    {state?.eventDescription?.length}/250 Characters
                  </Asterix>
                </BudgetInventorySubtitle>
              </InputText>
              <MyTextArea
                type="textarea"
                row="4"
                placeholder="Be descriptive and concise: 250 characters maximum"
                name="eventDescription"
                maxLength={250}
                onChange={change}
                defaultValue={state?.eventDescription}
              />
            </EventSubSection>
          </BudgetUpload>
        </BudgetSection>

        {location.pathname === "/eventPlanPreview" ? null : (
          <ButtonContainer style={{ margin: "0rem" }}>
            <AbsolutePrimaryButton onClick={handleSubmit} disabled={isDisabled}>
              Save & Continue
            </AbsolutePrimaryButton>
          </ButtonContainer>
        )}
      </BudgetInventoryContainer>
    </>
  );
};

export default FirstCreateEvent;
