import * as React from 'react';
import { Helmet } from "react-helmet";
import Sidebar from "../../Components/Sidebar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import { user1, user2, user3, user4, worldMap } from "../../assets/images";
import { TableAction } from "../../Components/TableAction";
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Header from "../../Components/Header";
import CountUp from 'react-countup';
import gsap from 'gsap';
import WeeklyReport from "../../Components/Charts/weeklyReport";
import { Avatar } from "@mui/material";
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Table
function createData(
    sku: number,
    name: string,
    email: string,
) {
    return { sku, name, email };
}
const rows = [
    createData(50364, 'Floyd Miles', 'tparisian@gmail.com'),
    createData(50364, 'Jane Cooper', 'altenwerth.ansel@sawayn.com'),
    createData(50364, 'Esther Howard', 'rebeka.jacobi@carroll.org'),
    createData(50364, 'Jane Cooperr', 'jeramy.bogan@gmail.com'),
    createData(50364, 'Leslie Alexander', 'jeramy.bogan@gmail.com'),
    createData(50364, 'Jane Coopers', 'jeramy.bogan@gmail.com'),
    createData(50364, 'Robert Fox', 'jeramy.bogan@gmail.com'),
    createData(50364, 'Jane Coopera', 'jeramy.bogan@gmail.com'),
    createData(50364, 'Jacob Jones', 'rebeka.jacobi@carroll.org'),
    createData(50364, 'Jane Cooperg', 'jeramy.bogan@gmail.com'),
];

const { useLayoutEffect } = React;

const Dashboard: React.FC = () => {
    
    //GSAP Animation
    const progressTimelineMain = useRef(null);
    useLayoutEffect(() => {
        let statisticsSvg = gsap.timeline();
        statisticsSvg.fromTo(".statistics-card .img-block > svg", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });

        let pageText = gsap.timeline();
        pageText.fromTo(".page-title", { y: "-40px", opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        pageText.fromTo(".data-info", { y: "20px", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });
        pageText.fromTo(".card-title", { y: "20px", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });

        // Sales by Locations Card Progress Bar Animation
        const progressTimeline = progressTimelineMain.current;
        let progressBarAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: progressTimeline,
                start: "top center",
                end: "+=600",
            }
        });
        progressBarAnimation.fromTo(".MuiLinearProgress-bar", { width: 0 }, { width: "100%", duration: 1.5 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="wrapper">
                <Header />
                <Sidebar />
                <section className="main-content dashboard">
                    <Typography variant="h3" className="page-title target">Dashboard</Typography>

                    {/* -------- Statistics card start ---------  */}
                    <Grid container spacing={{ xs: 2, lg: 4 }}>
                        <Grid item xl={3} md={6} xs={12}>
                            <Link to="#" title="Property Sold" className="statistics-card">
                                <Card className="blue">
                                    <div>
                                        <Typography variant="h3" className="data-numbers">
                                            <CountUp end={6387} />
                                        </Typography>
                                        <p className="data-info">Property Sold</p>
                                    </div>
                                    <div className="img-block">
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0001 38.5H5.50008C5.01385 38.5 4.54754 38.3068 4.20372 37.963C3.8599 37.6192 3.66675 37.1529 3.66675 36.6667V22C3.66675 21.5138 3.8599 21.0475 4.20372 20.7036C4.54754 20.3598 5.01385 20.1667 5.50008 20.1667H11.0001C11.4863 20.1667 11.9526 20.3598 12.2964 20.7036C12.6403 21.0475 12.8334 21.5138 12.8334 22V36.6667C12.8334 37.1529 12.6403 37.6192 12.2964 37.963C11.9526 38.3068 11.4863 38.5 11.0001 38.5ZM23.8334 38.5H18.3334C17.8472 38.5 17.3809 38.3068 17.0371 37.963C16.6932 37.6192 16.5001 37.1529 16.5001 36.6667V5.5C16.5001 5.01377 16.6932 4.54746 17.0371 4.20364C17.3809 3.85982 17.8472 3.66667 18.3334 3.66667H23.8334C24.3196 3.66667 24.786 3.85982 25.1298 4.20364C25.4736 4.54746 25.6667 5.01377 25.6667 5.5V36.6667C25.6667 37.1529 25.4736 37.6192 25.1298 37.963C24.786 38.3068 24.3196 38.5 23.8334 38.5ZM36.6668 38.5H31.1667C30.6805 38.5 30.2142 38.3068 29.8704 37.963C29.5266 37.6192 29.3334 37.1529 29.3334 36.6667V16.5C29.3334 16.0138 29.5266 15.5475 29.8704 15.2036C30.2142 14.8598 30.6805 14.6667 31.1667 14.6667H36.6668C37.153 14.6667 37.6193 14.8598 37.9631 15.2036C38.3069 15.5475 38.5001 16.0138 38.5001 16.5V36.6667C38.5001 37.1529 38.3069 37.6192 37.9631 37.963C37.6193 38.3068 37.153 38.5 36.6668 38.5Z" fill="#46AEFF" />
                                        </svg>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>

                        <Grid item xl={3} md={6} xs={12}>
                            <Link to="#" title="Income" className="statistics-card">
                                <Card className="purple">
                                    <div>
                                        <Typography variant="h3" className="data-numbers">
                                            <CountUp end={9712} prefix="$" separator="," />
                                        </Typography>
                                        <p className="data-info">Income</p>
                                    </div>
                                    <div className="img-block">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40 15H8.75V13.75L36.25 11.55V13.75H40V10C40 7.25 37.7725 5.32 35.0525 5.7075L9.95 9.2925C7.2275 9.6825 5 12.25 5 15V40C5 41.3261 5.52678 42.5979 6.46447 43.5355C7.40215 44.4732 8.67392 45 10 45H40C41.3261 45 42.5978 44.4732 43.5355 43.5355C44.4732 42.5979 45 41.3261 45 40V20C45 18.6739 44.4732 17.4021 43.5355 16.4645C42.5978 15.5268 41.3261 15 40 15ZM36.25 32.515C35.7574 32.5148 35.2696 32.4176 34.8146 32.229C34.3595 32.0403 33.946 31.7639 33.5978 31.4154C33.2496 31.0669 32.9734 30.6533 32.7851 30.1981C32.5967 29.743 32.4998 29.2551 32.5 28.7625C32.5002 28.2699 32.5974 27.7821 32.786 27.3271C32.9747 26.872 33.2511 26.4586 33.5996 26.1103C33.948 25.7621 34.3617 25.4859 34.8169 25.2976C35.272 25.1092 35.7599 25.0123 36.2525 25.0125C37.2474 25.0128 38.2014 25.4084 38.9047 26.1121C39.6079 26.8158 40.0028 27.7701 40.0025 28.765C40.0022 29.7599 39.6066 30.7139 38.9029 31.4172C38.1992 32.1204 37.2449 32.5153 36.25 32.515Z" fill="#AE70FF" />
                                        </svg>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>

                        <Grid item xl={3} md={6} xs={12}>
                            <Link to="#" title="Expense" className="statistics-card">
                                <Card className="orange">
                                    <div>
                                        <Typography variant="h3" className="data-numbers">
                                            <CountUp end={965} />
                                        </Typography>
                                        <p className="data-info">Expense</p>
                                    </div>
                                    <div className="img-block">
                                        <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_24_87)">
                                                <path d="M34.0786 19.865C38.9302 19.865 42.8632 17.6566 42.8632 14.9325C42.8632 12.2084 38.9302 10 34.0786 10C29.227 10 25.2939 12.2084 25.2939 14.9325C25.2939 17.6566 29.227 19.865 34.0786 19.865Z" fill="#FF864D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2099 22.7025C27.9269 22.7025 25.4253 20.1 25.4253 18.5925V25.05C25.4253 27.775 29.3585 29.98 34.2099 29.98C39.0664 29.98 42.9996 27.775 42.9996 25.05V18.7475C42.9996 20.2575 40.4955 22.7025 34.2099 22.7025Z" fill="#FF864D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2099 32.68C28.5896 32.68 25.4253 30.1775 25.4253 28.67V35.0675C25.4253 37.7925 29.3585 40 34.2099 40C39.0664 40 42.9996 37.7925 42.9996 35.0675V28.5925C42.9996 30.1 39.8328 32.68 34.2099 32.68Z" fill="#FF864D" />
                                                <path d="M12.4876 9.865C17.9874 9.865 22.4459 7.65664 22.4459 4.9325C22.4459 2.20836 17.9874 0 12.4876 0C6.98778 0 2.5293 2.20836 2.5293 4.9325C2.5293 7.65664 6.98778 9.865 12.4876 9.865Z" fill="#FF864D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.804 12.7025C5.6837 12.7025 2.8457 10.1 2.8457 8.5925V15.05C2.8457 17.775 7.30506 19.98 12.804 19.98C18.308 19.98 22.7648 17.775 22.7648 15.05V8.7475C22.7648 10.2575 19.9243 12.7025 12.804 12.7025Z" fill="#FF864D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.804 22.68C6.43241 22.68 2.8457 20.1775 2.8457 18.67V25.0675C2.8457 27.7925 7.30506 30 12.804 30C18.308 30 22.7648 27.7925 22.7648 25.0675V18.5925C22.7648 20.1 19.1731 22.68 12.804 22.68Z" fill="#FF864D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.804 32.68C6.43241 32.68 2.8457 30.1775 2.8457 28.67V35.0675C2.8457 37.7925 7.30506 40 12.804 40C18.308 40 22.7648 37.7925 22.7648 35.0675V28.5925C22.7648 30.1 19.1731 32.68 12.804 32.68Z" fill="#FF864D" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_24_87">
                                                    <rect width="43" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>

                        <Grid item xl={3} md={6} xs={12}>
                            <Link to="#" title="Property Rented" className="statistics-card">
                                <Card className="red">
                                    <div>
                                        <Typography variant="h3" className="data-numbers">
                                            <CountUp end={9712} prefix="$" separator="," />
                                        </Typography>
                                        <p className="data-info">Property Rented</p>
                                    </div>
                                    <div className="img-block">
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.2449 11.8238C25.0081 11.9085 27.6247 13.0865 29.5199 15.0991C31.4152 17.1116 32.4341 19.7942 32.3528 22.5575C32.181 28.2786 27.555 32.8436 21.7782 32.6702C19.0151 32.5855 16.3984 31.4075 14.5032 29.395C12.6079 27.3824 11.5891 24.6998 11.6703 21.9365C11.6957 21.0917 11.8416 20.2617 12.069 19.4771C11.5555 19.4427 11.0753 19.2107 10.7292 18.8298C10.3831 18.4488 10.1981 17.9485 10.2131 17.4341L10.2967 14.6499L7.51253 14.5663C6.41477 14.5334 5.55057 13.6157 5.58353 12.5179L5.66712 9.73374L3.67842 9.67404C2.94001 9.65187 2.24065 9.33728 1.73419 8.79947C1.22773 8.26166 0.955667 7.54468 0.977836 6.80627L1.09725 2.82888C1.11942 2.09047 1.43401 1.39111 1.97182 0.884649C2.50963 0.378191 3.2266 0.10612 3.96501 0.128289L7.42057 0.232035C8.58197 0.266903 9.6802 0.761669 10.4749 1.6072L20.0983 11.8231C20.1479 11.873 20.2087 11.9103 20.2757 11.9317C20.3427 11.9531 20.4139 11.958 20.4832 11.9461C21.0658 11.8543 21.6552 11.8134 22.2449 11.8238ZM24.3462 26.6962C24.8736 26.712 25.3857 26.5177 25.7699 26.1559C26.154 25.7942 26.3788 25.2946 26.3946 24.7672C26.4104 24.2398 26.2161 23.7276 25.8543 23.3435C25.4926 22.9593 24.993 22.7346 24.4656 22.7188C23.9382 22.703 23.426 22.8973 23.0419 23.259C22.6577 23.6208 22.433 24.1203 22.4172 24.6478C22.4014 25.1752 22.5957 25.6873 22.9575 26.0715C23.3192 26.4556 23.8188 26.6803 24.3462 26.6962Z" fill="#FF3232" />
                                        </svg>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                    {/* -------- Statistics card end ---------  */}

                    <section className="primary-section">
                        <Grid container spacing={{ xs: 2, lg: 4 }}>
                            {/* -------- weekly report card start ---------  */}
                            <Grid item xl={7} xs={12}>
                                <Card className="weekly-report-card">
                                    <div className="card-header">
                                        <Typography variant="h5" className="card-title">Weekly Report</Typography>
                                        <div className="graph-notation">
                                            <p>This week</p>
                                            <p>last week</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <WeeklyReport />
                                    </div>
                                </Card>
                            </Grid>
                            {/* -------- weekly report card end ---------  */}

                            {/* -------- transaction card start ---------  */}
                            <Grid item xl={5} xs={12}>
                                <Card className="transaction-card">
                                    <div className="card-header">
                                        <Typography variant="h5" className="card-title">Transaction</Typography>
                                        <Link to="#" className="header-link">View more</Link>
                                    </div>
                                    <div className="card-content">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <span className="user-profile">
                                                        <Avatar src={user1} alt="User Name" />
                                                    </span>
                                                    <span className="user-details">
                                                        <p className="user-name">Devon Lane</p>
                                                        <p className="transaction-date">March 23, 2013</p>
                                                    </span>
                                                    <span className="transaction-amount">
                                                        <p className="amount-credited"><CountUp end={600} prefix="$" /></p>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span className="user-profile">
                                                        <Avatar src={user2} alt="User Name" />
                                                    </span>
                                                    <span className="user-details">
                                                        <p className="user-name">Bessie Cooper</p>
                                                        <p className="transaction-date">May 31, 2015</p>
                                                    </span>
                                                    <span className="transaction-amount">
                                                        <p className="amount-debited"><CountUp end={400} prefix="$" /></p>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span className="user-profile">
                                                        <Avatar src={user3} alt="User Name" />
                                                    </span>
                                                    <span className="user-details">
                                                        <p className="user-name">Guy Hawkins</p>
                                                        <p className="transaction-date">October 31, 2017</p>
                                                    </span>
                                                    <span className="transaction-amount">
                                                        <p className="amount-credited"><CountUp end={200} prefix="$" /></p>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span className="user-profile">
                                                        <Avatar src={user4} alt="User Name" />
                                                    </span>
                                                    <span className="user-details">
                                                        <p className="user-name">Kathryn Murphy</p>
                                                        <p className="transaction-date">December 2, 2018</p>
                                                    </span>
                                                    <span className="transaction-amount">
                                                        <p className="amount-credited"><CountUp end={450} prefix="$" /></p>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Card>
                            </Grid>
                            {/* -------- transaction card end ---------  */}

                            {/* -------- Table start ---------  */}
                            <Grid item xl={7} xs={12}>
                                <Card className="primary-table">
                                    <div className="card-header">
                                        <Typography variant="h5" className="card-title">Table</Typography>
                                        <Link to="#" className="header-link">View more</Link>
                                    </div>
                                    <div className="card-content">
                                        <TableContainer component={Paper}>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>SKU</TableCell>
                                                        <TableCell align="left">Name</TableCell>
                                                        <TableCell align="left">Email</TableCell>
                                                        <TableCell align="center">Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                        >
                                                            <TableCell>
                                                                {row.sku}
                                                            </TableCell>
                                                            <TableCell align="left">{row.name}</TableCell>
                                                            <TableCell align="left">{row.email}</TableCell>
                                                            <TableCell align="center"><TableAction /></TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </Card>
                            </Grid>
                            {/* -------- Table end ---------  */}

                            {/* -------- location card start ---------  */}
                            <Grid item xl={5} xs={12}>
                                <Card className="location-card" ref={progressTimelineMain}>
                                    <div className="card-header">
                                        <Typography variant="h5" className="card-title">Sales by Locations</Typography>
                                        <Link to="#" className="header-link">View more</Link>
                                    </div>
                                    <div className="card-content">
                                        <div className="img-block">
                                            <img src={worldMap} alt="Map" />
                                        </div>
                                        <div className="sales-progress">
                                            <ul>
                                                <li>
                                                    <span className="city-info">
                                                        <p>USA</p>
                                                        <h6>
                                                            <CountUp end={75} suffix="%" duration={1} enableScrollSpy scrollSpyOnce >
                                                                {({ countUpRef, start }) => (
                                                                    <>
                                                                        <span ref={countUpRef} />
                                                                    </>
                                                                )}
                                                            </CountUp>
                                                        </h6>
                                                    </span>
                                                    <LinearProgress color="primary" variant="determinate" value={75} />
                                                </li>
                                                <li>
                                                    <span className="city-info">
                                                        <p>India</p>
                                                        <h6>
                                                            <CountUp end={86} suffix="%" enableScrollSpy scrollSpyOnce >
                                                                {({ countUpRef, start }) => (
                                                                    <>
                                                                        <span ref={countUpRef} />
                                                                    </>
                                                                )}
                                                            </CountUp>
                                                        </h6>
                                                    </span>
                                                    <LinearProgress color="primary" variant="determinate" value={86} />
                                                </li>
                                                <li>
                                                    <span className="city-info">
                                                        <p>Russia</p>
                                                        <h6>
                                                            <CountUp end={62} suffix="%" enableScrollSpy scrollSpyOnce >
                                                                {({ countUpRef, start }) => (
                                                                    <>
                                                                        <span ref={countUpRef} />
                                                                    </>
                                                                )}
                                                            </CountUp>
                                                        </h6>
                                                    </span>
                                                    <LinearProgress color="primary" variant="determinate" value={62} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            {/* -------- location card end ---------  */}
                        </Grid>
                    </section>
                </section>
            </div>
        </>
    )
}
export default Dashboard;