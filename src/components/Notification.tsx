import { useState, useEffect } from "react";
import classnames from "classnames";

export const Notification = ({ text, className }: { text: string; className?: string }) => {
    const notificationClassName = classnames("notification", className);
    return (
        <p className={notificationClassName}>{text}</p>
    );
}

export const NotificationContainer = ({ text, delay }: { text: string; delay:number }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => setShow(false), delay);
        return () => clearTimeout(timer);
    }, [text]);

    return show ? <Notification text={text} /> : null;
};
