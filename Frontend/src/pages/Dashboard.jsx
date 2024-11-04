// pages/Dashboard.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Failed to fetch balance:", error);
                alert("Could not retrieve balance. Please try again later.");
            }
        };

        fetchBalance();
    }, []); // Empty dependency array to run only once

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance !== null ? balance.toLocaleString() : "Loading..."} />
                <Users />
            </div>
        </div>
    );
};
