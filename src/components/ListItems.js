import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import { Link } from 'react-router-dom';

// menu items
export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <Link to='/create-shipment' style={{ color: '#212121', textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="Create Shipment" />
            </ListItem>
        </Link>

        <ListItem button>
            <ListItemIcon>
                <ExploreSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Track Shipments" />
        </ListItem>

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
