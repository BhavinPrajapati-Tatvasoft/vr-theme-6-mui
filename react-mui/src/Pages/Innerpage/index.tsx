import * as React from 'react';
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Card from '@mui/material/Card';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Avatar } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { alertErrorIcon, alertInfoIcon, alertSuccessIcon, alertWarningIcon, arrowDownIcon, checkboxCheckedIcon, checkboxDefaultIcon, hidePasswordIcon, radioDefaultIcon, radioSelectedIcon, showPasswordIcon, uploadIcon } from "../../assets/images";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import gsap from "gsap";

// Tab
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className="tab-content-container"
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const { useLayoutEffect } = React;

const Innerpage: React.FC = () => {

    //GSAP Animation
    useLayoutEffect(() => {
        let pageText = gsap.timeline();
        pageText.fromTo(".page-title", { y: "-40px", opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        pageText.fromTo(".inner .MuiTypography-h5", { y: "20px", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });

        gsap.fromTo(".sidebar li a", {
            opacity: 0,
            x: -40,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.3,
        }
        );
    }, []);

    // Dropdown
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const [age1, setAge1] = React.useState('');
    const handleChange1 = (event: SelectChangeEvent) => {
        setAge1(event.target.value as string);
    };
    const [age2, setAge2] = React.useState('');
    const handleChange2 = (event: SelectChangeEvent) => {
        setAge2(event.target.value as string);
    };

    // Alert
    const [open, setOpen] = React.useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props}
            action={
                <React.Fragment>
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </React.Fragment>
            }
        />;
    });

    // Tab
    const [value, setValue] = React.useState(0);
    const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // Password States
    const [showPassword, setShowPassword] = React.useState(true);
    const [showPassword1, setShowPassword1] = React.useState(true);

    return (
        <>
            <Helmet>
                <title>Inner</title>
            </Helmet>
            <div className="wrapper">
                <Header />
                <Sidebar />
                <section className="main-content inner">
                    <Typography variant="h3" className="page-title box">Users</Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <Card>
                                {/* -------- first column start ---------  */}
                                <Typography variant="h5">One Column</Typography>
                                <FormControl variant="standard" fullWidth sx={{ pb: {xs:"16px", md:"30px"} }}>
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input
                                        id="username"
                                        type="text"
                                    />
                                </FormControl>
                                <FormControl variant="standard" fullWidth sx={{ pb: {xs:"16px", md:"30px"} }}>
                                    <InputLabel id="dropdown">Drop Down</InputLabel>
                                    <Select
                                        id="dropdown"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        IconComponent={() => (<Avatar src={arrowDownIcon} className="icon-20" />)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" fullWidth sx={{ pb: {md:"4px"} }}>
                                    <TextField
                                        id="multiline-input"
                                        label="Multiple  line"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                    />
                                </FormControl>
                                {/* -------- first column end ---------  */}

                                {/* -------- second column start ---------  */}
                                <section className="secondary-section">
                                    <Typography variant="h5">Two Column</Typography>
                                    <Grid container spacing={{ xs: 2, lg: 4 }}>
                                        <Grid item sm={6} xs={12}>
                                            <FormControl variant="standard" fullWidth sx={{ pb: { xs: 0, sm: "8px" } }}>
                                                <InputLabel htmlFor="usernameSecond">Username</InputLabel>
                                                <Input
                                                    id="usernameSecond"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <FormControl variant="standard" fullWidth sx={{ pb: { xs: 0, sm: "8px" } }}>
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <Input
                                                    id="password"
                                                    type={showPassword ? 'password' : 'text'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={() => setShowPassword(!showPassword)}
                                                            >
                                                                <Avatar src={showPassword ? hidePasswordIcon : showPasswordIcon} title={showPassword ? "Show Password" : "Hide Password"} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel htmlFor="username-second">Name</InputLabel>
                                                <Input
                                                    id="username-second"
                                                    type="text"
                                                    value="John Doe"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <FormControl variant="standard" fullWidth error>
                                                <InputLabel htmlFor="error">Error</InputLabel>
                                                <Input
                                                    id="error"
                                                    type="text"
                                                    value="Web Designer"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                </section>
                                {/* -------- second column end ---------  */}

                                {/* -------- third column start ---------  */}
                                <section className="secondary-section">
                                    <Typography variant="h5">Three Column</Typography>
                                    <Grid container spacing={{ xs: 2, lg: 4 }}>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel htmlFor="focus-field">Focus</InputLabel>
                                                <Input
                                                    id="focus-field"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel htmlFor="usernameThird">Disabled</InputLabel>
                                                <Input
                                                    id="usernameThird"
                                                    type="text"
                                                    value="John Doe"
                                                    disabled
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel id="dropdown-second">Drop Down</InputLabel>
                                                <Select
                                                    id="dropdown-second"
                                                    value={age1}
                                                    label="Age"
                                                    onChange={handleChange1}
                                                    IconComponent={() => (<Avatar src={arrowDownIcon} className="icon-20" />)}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                </section>
                                {/* -------- third column end ---------  */}

                                {/* -------- four column start ---------  */}
                                <section className="secondary-section">
                                    <Typography variant="h5">Four Column</Typography>
                                    <Grid container spacing={{ xs: 2, lg: 4 }}>
                                        <Grid item xs={12} sm={6} lg={3}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel htmlFor="usernameFour">Username</InputLabel>
                                                <Input
                                                    id="usernameFour"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={3}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel htmlFor="passwordSecond">Password</InputLabel>
                                                <Input
                                                    id="passwordSecond"
                                                    type={showPassword1 ? 'password' : 'text'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={() => setShowPassword1(!showPassword1)}
                                                            >
                                                                <Avatar src={showPassword1 ? hidePasswordIcon : showPasswordIcon} title={showPassword1 ? "Show Password" : "Hide Password"} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={3}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel id="dropdownFour">Drop Down</InputLabel>
                                                <Select
                                                    id="dropdownFour"
                                                    value={age2}
                                                    label="Age"
                                                    onChange={handleChange2}
                                                    IconComponent={() => (<Avatar src={arrowDownIcon} className="icon-20" />)}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={3}>
                                            <FormControl variant="standard" fullWidth error>
                                                <InputLabel htmlFor="errorFour">Error</InputLabel>
                                                <Input
                                                    id="errorFour"
                                                    type="text"
                                                    value="Web Designer"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                </section>
                                {/* -------- four column end ---------  */}

                                {/* -------- other element start ---------  */}
                                <div className="secondary-section other-elements">
                                    <Typography variant="h5" sx={{ pb: "20px" }}>Other Design elements</Typography>


                                    <Typography variant="h6">File Upload</Typography>
                                    <div className="file-upload">
                                        <Button variant="text" component="label" startIcon={<Avatar variant="square" src={uploadIcon} className="icon-20" />} className="btn-upload" title="Upload Your File">
                                            Upload
                                            < input hidden accept="image/*" multiple type="file" />
                                        </Button>
                                        <p>No item Selected</p>
                                    </div>

                                    <Typography variant="h6" className="form-title">Check Box</Typography>
                                    <div className="check-group">
                                        <FormControlLabel control={<Checkbox icon={<Avatar variant='square' src={checkboxDefaultIcon} />} checkedIcon={<Avatar variant='square' src={checkboxCheckedIcon} />} defaultChecked />} label="Selected" />
                                        <FormControlLabel control={<Checkbox icon={<Avatar variant='square' src={checkboxDefaultIcon} />} checkedIcon={<Avatar variant='square' src={checkboxCheckedIcon} />} />} label="Not yet Selected" />
                                    </div>

                                    <Typography variant="h6" className="form-title">Radio Button</Typography>
                                    <div className="radio-group">
                                        <RadioGroup
                                            defaultValue="Selected"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="Selected" control={<Radio icon={<Avatar variant='rounded' src={radioDefaultIcon} defaultChecked />} checkedIcon={<Avatar variant='rounded' src={radioSelectedIcon} />} />} label="Selected" />
                                            <FormControlLabel value="Not yet Selected" control={<Radio icon={<Avatar variant='rounded' src={radioDefaultIcon} />} checkedIcon={<Avatar variant='rounded' src={radioSelectedIcon} />} />} label="Not yet Selected" />
                                        </RadioGroup>
                                    </div>

                                    <Typography variant="h6">Snack Bar</Typography>
                                    <div className="snackbar-group">
                                        <Grid container rowSpacing={{ xs: 2, lg: 3 }} columnSpacing={{ xs: 2, lg: 4 }}>
                                            <Grid item lg={6} xs={12}>
                                                <Alert severity="error" icon={<Avatar src={alertErrorIcon} />}>This is an error message!</Alert>
                                            </Grid>
                                            <Grid item lg={6} xs={12}>
                                                <Alert severity="info" icon={<Avatar src={alertInfoIcon} />}>This is an information message!</Alert>
                                            </Grid>
                                            <Grid item lg={6} xs={12}>
                                                <Alert severity="warning" icon={<Avatar src={alertWarningIcon} />}>This is a warning message!</Alert>
                                            </Grid>
                                            <Grid item lg={6} xs={12}>
                                                <Alert severity="success" icon={<Avatar src={alertSuccessIcon} />}>This is a success message!</Alert>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <Typography variant="h6">CTA</Typography>
                                    <div className="btn-group">
                                        <Button variant="contained" title="Primary">Primary</Button>
                                        <Button variant="outlined" title="Secondary">Secondary</Button>
                                    </div>
                                </div>
                                {/* -------- other element end ---------  */}

                                {/* -------- Tab section start ---------  */}
                                <div className="secondary-section tab-wrapper">
                                    <Typography variant="h5" sx={{ pb: "23px" }}>Tabs</Typography>
                                    <Tabs value={value} onChange={tabHandleChange} aria-label="basic tabs example">
                                        <Tab label="Tab 1" {...a11yProps(0)} />
                                        <Tab label="Tab 2" {...a11yProps(1)} />
                                        <Tab label="Tab 3" {...a11yProps(2)} />
                                        <Tab label="Tab 4" {...a11yProps(3)} />
                                    </Tabs>
                                    <TabPanel value={value} index={0}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                        content here', making it look like readable English. Many desktop publishing packages and web page editors
                                        now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        Item Two
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a varius nulla.
                                        Proin accumsan nunc lacinia ipsum venenatis varius. Proin rutrum, diam id facilisis hendrerit,
                                        dui est malesuada risus, sed sollicitudin felis eros vitae libero. Integer in magna lectus. Vestibulum
                                        facilisis ultrices libero sed tincidunt. Nullam vitae mollis diam, eu posuere diam. Suspendisse potenti.
                                        Proin pellentesque egestas justo a tempor. Donec lorem sem, dictum at consequat et, maximus quis mauris.
                                        Mauris leo elit, scelerisque a lorem vitae, dignissim sodales dolor. In hac habitasse platea dictumst.
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a varius nulla.
                                        Proin accumsan nunc lacinia ipsum venenatis varius. Proin rutrum, diam id facilisis hendrerit,
                                        dui est malesuada risus, sed sollicitudin felis eros vitae libero. Integer in magna lectus. Vestibulum
                                        facilisis ultrices libero sed tincidunt. Nullam vitae mollis diam, eu posuere diam. Suspendisse potenti.
                                        Proin pellentesque egestas justo a tempor. Donec lorem sem, dictum at consequat et, maximus quis mauris.
                                        Mauris leo elit, scelerisque a lorem vitae, dignissim sodales dolor. In hac habitasse platea dictumst.
                                    </TabPanel>

                                </div>
                                {/* -------- Tab section end ---------  */}
                            </Card>
                        </Grid>
                    </Grid>
                </section>
            </div>
        </>
    )
}
export default Innerpage;