import { useMissionListQuery } from "../../generated/graphql";
import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tabs,
  Tab,
  Box,
  Tooltip,
  Zoom,
  withStyles,
  Theme,
  CircularProgress,
} from "@material-ui/core";
import "./mission-list.styles.css";
import MissionDetails from "../MissionDetails/mission-details.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other} style={{width: '100%'}}>
      {value === index && (
        <Box p={3}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const MissionList = () => {
  const classes = useStyles();
  const { loading, error, data } = useMissionListQuery();
  const [value, setValue] = useState<number>(0);
  if (loading) {
    return (
      <div className="mission-list__loading">
        <CircularProgress style={{ width: "19.5vw", height: "19.5vw" }} />
      </div>
    );
  }
  if (error)
    return (
      <div className="mission-list__error">
        Oops!&nbsp;&nbsp;<p>An Unexpected Error Occured.</p>
      </div>
    );

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        if(launches)
        {data!.launches!.map((datum, index) => {
          return (
            <HtmlTooltip
              key={index}
              TransitionComponent={Zoom}
              disableFocusListener
              title={
                <Fragment>
                  <b className="tab_tooltip__head">Mission Id: </b>{" "}
                  <span>{datum!.mission_id}</span>
                  <br />
                  <b className="tab_tooltip__head">Launch Date UTC: </b>{" "}
                  <span>{datum!.launch_date_utc.split("T")[0]}</span>
                  <br />
                  <b className="tab_tooltip__head">Launch Year: </b>{" "}
                  <span>{datum!.launch_year}</span>
                  <br />
                  <b className="tab_tooltip__head">Details: </b>{" "}
                  <span>{datum!.details ? datum!.details : "N/A"}</span>
                  <br />
                </Fragment>
              }
              interactive
              placement="right"
              arrow
            >
              <Tab key={index} label={datum!.mission_name} />
            </HtmlTooltip>
          );
        })}
      </Tabs>
      {data!.launches!.map((datum, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            <MissionDetails id={datum?.id} />
          </TabPanel>
        );
      })}
    </div>
  );
};

export default MissionList;
