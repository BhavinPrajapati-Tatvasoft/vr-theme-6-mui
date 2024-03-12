import { Button, FormControl, Input, InputAdornment } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { adminUser, arrowDownIcon, LogoBlack, messageIcon, mobileLogo, notificationIcon, searchIcon } from '../../assets/images';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import OutlinedInput from '@mui/material/OutlinedInput';

const Header: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className="overlay" onClick={e => document.body.classList.remove('show-nav', 'show-searchbar')}></div>
            <header className='header'>
                <Button onClick={e => document.body.classList.toggle('show-nav')} className="nav-toggler">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.125 18.75H21.875M3.125 6.25H21.875H3.125ZM3.125 12.5H21.875H3.125Z" stroke="#9C9C9C" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
                <Link to="#" title='Company'>
                    <img src={LogoBlack} alt="Company" className='logo' />
                    <img src={mobileLogo} alt="Company" className='mobile-logo' />
                </Link>
                <form className="serchbar-form">
                    <FormControl variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={'text'}
                            placeholder="Search"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                         <img src={searchIcon} alt="Search Icon" />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
                <div className='popover-block search-toggler'>
                    <IconButton className='custom-btn' onClick={e => document.body.classList.add('show-searchbar')}>
                        <img src={searchIcon} alt="Icon" />
                    </IconButton>
                </div>
                <div className='popover-block message'>
                    <IconButton className='custom-btn'>
                        <img src={messageIcon} alt="Icon" />
                    </IconButton>
                </div>
                <div className='popover-block notification'>
                    <IconButton className='custom-btn'>
                        <img src={notificationIcon} alt="Icon" />
                    </IconButton>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: "11px", borderColor: "rgb(156 156 156 / 50%)" }} />
                <div className="user-navigation">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <img src={adminUser} alt="user Profile" className='user-profile' />
                        <p>John Doe</p>
                        <img src={arrowDownIcon} alt="Arrow" className='arrow-icon' />
                    </Button>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/login">Logout</MenuItem>
                </Menu>
            </header>
        </>
    )
}
export default Header;