import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { db } from '../firebase';
import JohnImg from '../assets/john.png';
import JaneImg from '../assets/jane.png';
import JoseImg from '../assets/jose.png';
import CharlesImg from '../assets/charles.png';

const AuthContext = React.createContext();
const adminRules = {
    "rules": {
        "adminContent": {
            ".read": "auth.token.admin === true",
            ".write": "auth.token.admin === true",
        }
    }
};
const drivers = [
    {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        currentLocation: "",
        pool: [],
        avatarPic: JohnImg,
        phone: "555-555-5555"
    },
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        currentLocation: "",
        pool: [],
        avatarPic: JaneImg,
        phone: "888-888-8888"
    },
    {
        id: 2,
        firstName: "Jose",
        lastName: "Rodriguez",
        currentLocation: "",
        pool: [],
        avatarPic: JoseImg,
        phone: "444-444-4444"
    },
    {
        id: 3,
        firstName: "Charles",
        lastName: "Smith",
        currentLocation: "",
        pool: [],
        avatarPic: CharlesImg,
        phone: 777-777-7777
    },
];

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(first, last, email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then(function (data) {
            db.collection('client').doc(data.user.uid).set({
                firstName: first,
                lastName: last
            })
        });
    }

    function setAdmin(email) {

    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function addShipment(shipmentObj) {
        return db.collection('shipments').doc(shipmentObj.deliveryNumber).set(shipmentObj);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        addShipment,
        drivers
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}