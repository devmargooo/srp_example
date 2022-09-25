import { useState, useEffect } from "react";

const Notification = ({ text }: { text: string }) => (
    <p className="notification">{text}</p>
);

export const NotificationContainer = ({ text }: { text: string }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => setShow(false), 5000);
        return () => clearTimeout(timer);
    }, [text]);

    return show ? <Notification text={text} /> : null;
};
