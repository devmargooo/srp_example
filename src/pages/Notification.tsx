import {Notification as NotificationC} from "../components/Notification";

export const Notification:React.FC = () => {
    const text="Success!";
    return <NotificationC text={text}/>
}
