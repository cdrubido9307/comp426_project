import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <Link to='/user-dashboard' style={{ color: '#212121', textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link to='/create-shipment' style={{ color: '#212121', textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="Create Shipment" />
            </ListItem>
        </Link>
        <Link to='/track-shipment' style={{ color: '#212121', textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <ExploreSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Track Shipments" />
            </ListItem>
        </Link>
        <Link to='/search-shipment' style={{ color: '#212121', textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search Shipment" />
            </ListItem>
        </Link>
        <Link to='/contact' style={{ color: '#212121', textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
            </ListItem>
        </Link>
    </div>
);
