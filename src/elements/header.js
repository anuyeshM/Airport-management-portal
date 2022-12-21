import React, { useEffect, useMemo, useState, useRef } from "react";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { CSVLink } from "react-csv";
import PrimaryButton from "../elements/button/primary";
import PlusIcon from "../assets/images/download.png";
import "../components/content/tenders/tenders.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
export default function Header(props) {
  
  function subtractDays(numOfDays, date) {
    const dateCopy = new Date(date.getTime());
    dateCopy.setDate(dateCopy.getDate() - numOfDays);
    return dateCopy;
  }
  
  
  const [open, setOpen] = useState(false);
  const [dateLogo, setDateLogo] = useState(PlusIcon);
  const refOne = useRef(null);
  
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const [date, setDate] = useState([subtractDays(7,new Date()), new Date()]);
  const onChange = (date) => setDate(date)
  useEffect(() => { 
    props.setStartDate(date[0]);
    props.setEndDate(date[1]);
    console.log(props.startDate);
    console.log(props.endDate);
    });

  return (
    <>
      <div className="tenders-main-container">
        <div className="tenders-radio-button-conatiner">
          <FormControl>
            <div className="Header-Alingnment-Portal">
              <div className="tenders-conatiner">
                <div className="tenders-text">{props.title}</div>
              </div>
              <div className="searchbar">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="                      Search for Name or Email"
                  onChange={(e) => props.setQuery(e.target.value.toLowerCase())}
                />
              </div>
            </div>
          </FormControl>
        </div>
      </div>

      <div className="guidelinesList-add-button-container">
        <div className="date-picker-compont" style={{ marginRight: "72%" }}>
          <div>
            <DateRangePicker onChange={onChange} value={date} />
          </div>
        </div>
        <CSVLink data={props.List} filename="RegisterUserData">
          <PrimaryButton
            height="40pt"
            marginTop="10pt"
            marginLeft="20pt"
            fontColor="#fff"
          >
            <img src={PlusIcon} height="16pt" width="16pt" />

            <div style={{ marginLeft: "5pt" }}>Download</div>
          </PrimaryButton>
        </CSVLink>
      </div>
    </>
  );
}
