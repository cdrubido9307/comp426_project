import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(first, last, email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then(function(data) {
            db.collection('client').doc(data.user.uid).set({
                firstName: first,
                lastName: last
            })
        });
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
          return db.collection('shipment').doc(currentUser.uid).set(shipmentObj);
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
        addShipment
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}